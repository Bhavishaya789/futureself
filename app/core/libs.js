'use strict';
/* Libraries for the coding platform.
   The app reads the student's code and fetches any library it needs, so "import" / "#include a package" just works.
     Java   -> Maven Central (repo1.maven.org): the .jar and every jar it needs, put on the classpath
     Python -> pip install --target into a per-language folder, added to PYTHONPATH
     Node   -> npm install into a per-language folder, found through NODE_PATH
   Auto-detected from the code, or named by the student with a one-line marker, e.g.
     // @dep com.mysql:mysql-connector-j        (Java, Maven groupId:artifactId[:version])
     # @dep pandas                               (Python)
     // @dep lodash                              (Node)
   A common set is mapped automatically (e.g. MySQL): see KNOWN below. */
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { spawnAny } = require('./toolchain');

const WIN = process.platform === 'win32';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

/* import/use seen in code  ->  the package to fetch. Covers the libraries students actually use,
   MySQL first because that is what this update is for. */
const KNOWN = {
  java: {
    'java.sql.': null, 'javax.sql.': null,                 // JDBC core is in the JDK; the DRIVER jar is the dependency:
    'com.mysql.': 'com.mysql:mysql-connector-j',
    'org.mariadb.jdbc': 'org.mariadb.jdbc:mariadb-java-client',
    'org.postgresql': 'org.postgresql:postgresql',
    'com.google.gson': 'com.google.code.gson:gson',
    'org.json': 'org.json:json',
    'com.fasterxml.jackson': 'com.fasterxml.jackson.core:jackson-databind',
    'org.apache.commons.lang3': 'org.apache.commons:commons-lang3',
    'com.opencsv': 'com.opencsv:opencsv',
    'org.jsoup': 'org.jsoup:jsoup',
    'okhttp3': 'com.squareup.okhttp3:okhttp',
    'org.apache.poi': 'org.apache.poi:poi-ooxml',
    'org.sqlite': 'org.xerial:sqlite-jdbc'
  },
  python: {
    'mysql.connector': 'mysql-connector-python', 'MySQLdb': 'mysqlclient', 'pymysql': 'PyMySQL',
    'psycopg2': 'psycopg2-binary', 'sqlalchemy': 'SQLAlchemy', 'requests': 'requests',
    'numpy': 'numpy', 'pandas': 'pandas', 'bs4': 'beautifulsoup4', 'flask': 'Flask',
    'PIL': 'Pillow', 'cv2': 'opencv-python-headless', 'matplotlib': 'matplotlib',
    'dotenv': 'python-dotenv', 'pydantic': 'pydantic', 'openpyxl': 'openpyxl', 'yaml': 'PyYAML',
    'sklearn': 'scikit-learn', 'skimage': 'scikit-image', 'docx': 'python-docx', 'pptx': 'python-pptx',
    'fitz': 'PyMuPDF', 'Crypto': 'pycryptodome', 'jwt': 'PyJWT', 'dateutil': 'python-dateutil',
    'serial': 'pyserial', 'usb': 'pyusb', 'telegram': 'python-telegram-bot', 'discord': 'discord.py',
    'win32api': 'pywin32', 'win32com': 'pywin32', 'attr': 'attrs', 'OpenGL': 'PyOpenGL',
    'google.generativeai': 'google-generativeai', 'googleapiclient': 'google-api-python-client',
    'speech_recognition': 'SpeechRecognition', 'pyttsx3': 'pyttsx3', 'magic': 'python-magic',
    'Levenshtein': 'python-Levenshtein', 'mpl_toolkits': 'matplotlib', 'pymongo': 'pymongo',
    'tensorflow': 'tensorflow', 'torch': 'torch', 'kivy': 'kivy', 'pygame': 'pygame', 'tabulate': 'tabulate'
  },
  node: {
    'mysql2': 'mysql2', 'mysql': 'mysql', 'pg': 'pg', 'sqlite3': 'sqlite3', 'mongodb': 'mongodb',
    'express': 'express', 'axios': 'axios', 'lodash': 'lodash', 'dayjs': 'dayjs',
    'node-fetch': 'node-fetch', 'dotenv': 'dotenv', 'cheerio': 'cheerio'
  }
};
/* modules that are built in — never fetch these */
const STD = {
  python: new Set(['os', 'sys', 'math', 're', 'json', 'random', 'time', 'datetime', 'collections', 'itertools', 'functools', 'string', 'io', 'typing', 'decimal', 'fractions', 'statistics', 'heapq', 'bisect', 'sqlite3', 'csv', 'hashlib', 'threading', 'subprocess', 'socket', 'struct', 'copy', 'abc', 'enum', 'queue', 'urllib', 'http', 'argparse', 'pathlib', 'unittest', 'asyncio']),
  node: new Set(['fs', 'path', 'os', 'http', 'https', 'crypto', 'util', 'events', 'stream', 'child_process', 'url', 'querystring', 'assert', 'buffer', 'zlib', 'readline', 'net', 'dns', 'process', 'timers', 'string_decoder'])
};

/* Python: every module the program imports (one line at a time; "import a.b as c, d" and "from x.y import z") */
function pyModules(src) {
  const mods = [], re = /^[ \t]*(?:from[ \t]+([\w.]+)[ \t]+import\b|import[ \t]+([^\r\n#;]+))/gm; let m;
  while ((m = re.exec(String(src || '')))) {
    const names = m[1] ? [m[1]] : m[2].split(',').map((x) => x.trim().split(/\s+as\s+/)[0].trim());
    names.forEach((n) => { if (n && !n.startsWith('.') && /^[A-Za-z_][\w.]*$/.test(n)) mods.push(n); });
  }
  return [...new Set(mods)];
}
/* the pip package for a module: the longest known dotted prefix, else the top-level name */
function pyPackage(mod) {
  const parts = mod.split('.');
  for (let i = parts.length; i > 0; i--) { const k = parts.slice(0, i).join('.'); if (KNOWN.python[k]) return KNOWN.python[k]; }
  return parts[0];
}
const atDeps = (src) => { const out = [], re = /@dep\s+([^\s*/#'"\r\n]+)/g; let m; while ((m = re.exec(String(src || '')))) out.push(m[1]); return out; };

/* ---- read a program and work out which libraries it wants ---- */
function detect(lang, code) {
  const out = new Set();
  const src = String(code || '');
  // explicit @dep markers (any language)
  const re = /@dep\s+([^\s*/#'"\r\n]+)/g; let m;
  while ((m = re.exec(src))) out.add(m[1]);
  if (lang === 'java') {
    const im = /import\s+(?:static\s+)?([a-zA-Z0-9_.]+)/g;
    while ((m = im.exec(src))) { const pkg = m[1]; for (const k in KNOWN.java) { if (pkg.indexOf(k) === 0) { if (KNOWN.java[k]) out.add(KNOWN.java[k]); break; } } }
    // Class.forName("com.mysql.cj.jdbc.Driver") and DriverManager URLs
    if (/jdbc:mysql/i.test(src) || /com\.mysql\./.test(src)) out.add('com.mysql:mysql-connector-j');
    if (/jdbc:mariadb/i.test(src)) out.add('org.mariadb.jdbc:mariadb-java-client');
    if (/jdbc:postgresql/i.test(src)) out.add('org.postgresql:postgresql');
    if (/jdbc:sqlite/i.test(src)) out.add('org.xerial:sqlite-jdbc');
  } else if (lang === 'python') {
    pyModules(src).forEach((mod) => { if (!STD.python.has(mod.split('.')[0])) out.add(pyPackage(mod)); });
  } else if (lang === 'node' || lang === 'javascript' || lang === 'typescript') {
    const im = /(?:require\(\s*['"]([^'"]+)['"]\s*\)|import[^'"]*['"]([^'"]+)['"])/g;
    while ((m = im.exec(src))) {
      let name = m[1] || m[2]; if (!name || name.startsWith('.') || name.startsWith('/') || name.startsWith('node:')) continue;
      const top = name.startsWith('@') ? name.split('/').slice(0, 2).join('/') : name.split('/')[0];
      if (STD.node.has(top)) continue;
      out.add(KNOWN.node[top] || top);
    }
  }
  return [...out];
}

function create(opts) {
  const root = path.join(opts.dir, 'libs');
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const tc = opts.toolchain;                 // toolchain.create(): gives tool() and env()
  const MAVEN = opts.maven || MAVEN_CENTRAL;
  fs.mkdirSync(root, { recursive: true });
  const installed = {};                       // "lang:name" -> true, this session (plus on-disk check)
  const dir = (lang) => { const d = path.join(root, lang); fs.mkdirSync(d, { recursive: true }); return d; };

  /* ---------------- Maven: fetch a jar and everything it needs ---------------- */
  async function mavenMeta(g, a) {
    const base = `${MAVEN}/${g.replace(/\./g, '/')}/${a}`;
    const r = await fetchFn(base + '/maven-metadata.xml');
    if (!r || !r.ok) throw new Error('could not find ' + g + ':' + a + ' on Maven Central');
    const xml = await r.text();
    const rel = /<release>([^<]+)<\/release>/.exec(xml) || /<latest>([^<]+)<\/latest>/.exec(xml);
    const vers = [...xml.matchAll(/<version>([^<]+)<\/version>/g)].map((m) => m[1]).filter((v) => !/-(alpha|beta|rc|snapshot|m\d)/i.test(v));
    return rel ? rel[1] : vers[vers.length - 1];
  }
  async function getText(url) { const r = await fetchFn(url); return r && r.ok ? r.text() : null; }
  async function getFile(url, dest) {
    const r = await fetchFn(url); if (!r || !r.ok) throw new Error('download failed for ' + path.basename(url));
    const tmp = dest + '.part', out = fs.createWriteStream(tmp);
    for await (const c of r.body) { if (!out.write(Buffer.from(c))) await new Promise((x) => out.once('drain', x)); }
    await new Promise((x) => out.end(x)); fs.renameSync(tmp, dest); return dest;
  }
  /* --- a small, careful Maven resolver: properties, parent POMs, dependencyManagement and BOM imports --- */
  const tag = (xml, t) => { const x = new RegExp('<' + t + '>\\s*([^<]*?)\\s*</' + t + '>').exec(xml || ''); return x ? x[1] : ''; };
  const strip = (xml) => String(xml || '').replace(/<!--[\s\S]*?-->/g, '');
  const pomCache = {};
  async function loadPom(g, a, v) {
    const k = g + ':' + a + ':' + v; if (k in pomCache) return pomCache[k];
    const xml = await getText(`${MAVEN}/${g.replace(/\./g, '/')}/${a}/${v}/${a}-${v}.pom`).catch(() => null);
    if (!xml) return (pomCache[k] = null);
    const x = strip(xml);
    const parentBlock = /<parent>([\s\S]*?)<\/parent>/.exec(x);
    const parent = parentBlock ? { g: tag(parentBlock[1], 'groupId'), a: tag(parentBlock[1], 'artifactId'), v: tag(parentBlock[1], 'version') } : null;
    const head = x.replace(/<parent>[\s\S]*?<\/parent>/, '').replace(/<dependencies>[\s\S]*<\/dependencies>/, '').replace(/<build>[\s\S]*<\/build>/, '').replace(/<profiles>[\s\S]*<\/profiles>/, '');
    const own = {};
    const pb = /<properties>([\s\S]*?)<\/properties>/.exec(x);
    if (pb) [...pb[1].matchAll(/<([\w.-]+)>\s*([^<]*?)\s*<\/\1>/g)].forEach((m) => (own[m[1]] = m[2]));
    // inherit from parent first, so this POM's own values win
    const par = parent ? await loadPom(parent.g, parent.a, parent.v) : null;
    const props = Object.assign({}, par ? par.props : {}, own);
    const gid = tag(head, 'groupId') || (parent && parent.g) || g, ver = tag(head, 'version') || (parent && parent.v) || v;
    Object.assign(props, { 'project.groupId': gid, 'project.version': ver, 'project.artifactId': a, version: ver, 'pom.version': ver, 'project.parent.version': parent ? parent.v : ver, 'project.parent.groupId': parent ? parent.g : gid });
    const sub = (s) => { let t = String(s || ''); for (let i = 0; i < 5 && /\$\{/.test(t); i++) t = t.replace(/\$\{([\w.-]+)\}/g, (m0, k2) => (k2 in props ? props[k2] : m0)); return /\$\{/.test(t) ? '' : t; };
    const depsOf = (block) => [...String(block || '').matchAll(/<dependency>([\s\S]*?)<\/dependency>/g)].map((m) => {
      const d = m[1];
      const excl = [...d.matchAll(/<exclusion>([\s\S]*?)<\/exclusion>/g)].map((e) => tag(e[1], 'groupId') + ':' + tag(e[1], 'artifactId'));
      return { g: sub(tag(d, 'groupId')), a: sub(tag(d, 'artifactId')), v: sub(tag(d, 'version')), scope: tag(d, 'scope') || '', type: tag(d, 'type') || 'jar', classifier: tag(d, 'classifier'), optional: /<optional>\s*true/.test(d), excl };
    });
    // dependencyManagement (managed versions), including <scope>import</scope> BOMs
    const managed = Object.assign({}, par ? par.managed : {});
    const dmb = /<dependencyManagement>([\s\S]*?)<\/dependencyManagement>/.exec(x);
    if (dmb) {
      for (const d of depsOf(dmb[1])) {
        if (d.scope === 'import' && d.type === 'pom' && d.g && d.a && d.v) { const bom = await loadPom(d.g, d.a, d.v); if (bom) Object.keys(bom.managed).forEach((k2) => { if (!(k2 in managed)) managed[k2] = bom.managed[k2]; }); }
        else if (d.g && d.a && d.v) managed[d.g + ':' + d.a] = d.v;
      }
    }
    const depBlock = /<dependencies>([\s\S]*)<\/dependencies>/.exec(x.replace(/<dependencyManagement>[\s\S]*?<\/dependencyManagement>/g, '').replace(/<build>[\s\S]*<\/build>/, '').replace(/<profiles>[\s\S]*<\/profiles>/, ''));
    const deps = depsOf(depBlock && depBlock[1]).map((d) => Object.assign(d, { v: d.v || managed[d.g + ':' + d.a] || '' }));
    const packaging = tag(head, 'packaging') || 'jar';
    return (pomCache[k] = { props, managed, deps, packaging });
  }
  async function sha1Ok(url, file) {
    const want = await getText(url + '.sha1').catch(() => null);
    if (!want) return true;                                    // no checksum published: accept
    const h = require('crypto').createHash('sha1').update(fs.readFileSync(file)).digest('hex');
    return want.trim().split(/\s+/)[0].toLowerCase() === h;
  }
  /* breadth-first, "nearest wins" like Maven; returns jar paths */
  async function resolveTree(coords, onProgress) {
    const queue = coords.map((c) => { const [g, a, v] = String(c).split(':'); return { g, a, v: v || '', depth: 0, excl: [] }; });
    const chosen = {}, jars = [];
    while (queue.length) {
      const n = queue.shift();
      if (!n.g || !n.a) throw new Error('a Java library is written as groupId:artifactId, e.g. com.mysql:mysql-connector-j');
      const key = n.g + ':' + n.a; if (chosen[key]) continue;
      let v = n.v;
      if (!v || /^[[(]/.test(v)) v = await mavenMeta(n.g, n.a);   // no version, or a version range: newest release
      chosen[key] = v;
      const p = await loadPom(n.g, n.a, v);
      if (!p && n.depth === 0) throw new Error('could not find ' + key + ':' + v + ' on Maven Central');
      if (!p || p.packaging !== 'pom') {
        const jarName = `${n.a}-${v}.jar`, jar = path.join(dir('java'), n.g + '__' + jarName), url = `${MAVEN}/${n.g.replace(/\./g, '/')}/${n.a}/${v}/${jarName}`;
        if (!fs.existsSync(jar)) {
          if (onProgress) onProgress({ label: n.a + ' ' + v, text: 'Getting Java library ' + n.a + ' ' + v + ' …' });
          try { await getFile(url, jar); } catch (e) { if (n.depth === 0) throw new Error('could not download ' + key + ' ' + v); log('[libs] skip ' + key + ': ' + e.message); continue; }
          if (!(await sha1Ok(url, jar))) { fs.unlinkSync(jar); throw new Error('the download of ' + n.a + ' was damaged (checksum mismatch); try again'); }
        }
        jars.push({ jar, key });
      }
      if (p && n.depth < 8) {
        for (const d of p.deps) {
          if (!d.g || !d.a || d.optional || d.classifier || (d.type && d.type !== 'jar')) continue;
          if (d.scope && !/^(compile|runtime)$/.test(d.scope)) continue;
          const dk = d.g + ':' + d.a; if (chosen[dk] || n.excl.indexOf(dk) >= 0 || n.excl.indexOf(d.g + ':*') >= 0) continue;
          queue.push({ g: d.g, a: d.a, v: d.v, depth: n.depth + 1, excl: n.excl.concat(d.excl) });
        }
      }
    }
    return jars;
  }
  /* cache: which jars each requested library needs, so later runs work offline */
  const resFile = () => path.join(dir('java'), 'resolved.json');
  const addFile = () => path.join(dir('java'), 'added.json');
  const readJ = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return d; } };
  async function installJava(coords, onProgress) {
    const cache = readJ(resFile(), {});
    const out = [];
    for (const c of coords) {
      const hit = cache[c];
      if (hit && hit.length && hit.every((j) => j && j.file && fs.existsSync(path.join(dir('java'), j.file)))) { hit.forEach((j) => out.push({ jar: path.join(dir('java'), j.file), key: j.key })); continue; }
      const jars = await resolveTree([c], onProgress);
      cache[c] = jars.map((j) => ({ file: path.basename(j.jar), key: j.key }));
      try { fs.writeFileSync(resFile(), JSON.stringify(cache, null, 1)); } catch (e) { }
      jars.forEach((j) => out.push(j));
    }
    // one jar per groupId:artifactId — the first one wins (the library the program asked for comes first)
    const seenA = {}, uniq = [];
    out.forEach((j) => { if (!seenA[j.key]) { seenA[j.key] = 1; uniq.push(j.jar); } });
    return uniq;
  }
  function addedJava() { return readJ(addFile(), []); }
  function allJavaJars() { const d = dir('java'); try { return fs.readdirSync(d).filter((f) => f.endsWith('.jar')).map((f) => path.join(d, f)); } catch (e) { return []; } }

  /* ---------------- pip ---------------- */
  function pipRun(args, onProgress, label) {
    return new Promise((resolve, reject) => {
      const py = tc.tool('python') || tc.tool('python3'); if (!py) return reject(new Error('Python is not ready yet.'));
      if (onProgress) onProgress({ label, text: 'Getting Python library ' + label + ' …' });
      const ch = spawnAny(py, ['-m', 'pip'].concat(args), { windowsHide: true, env: tc.env() });
      let err = '';
      ch.stdout.on('data', () => { }); ch.stderr.on('data', (d) => { err += d; if (err.length > 20000) err = err.slice(-20000); });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error('pip could not install ' + label + ': ' + err.trim().split(/\r?\n/).slice(-2).join(' ')))));
    });
  }
  async function installPython(pkgs, onProgress) {
    const target = dir('python');
    for (const p of pkgs) { if (installed['python:' + p] || pyHas(p)) continue; await pipRun(['install', '--disable-pip-version-check', '--no-input', '--target', target, '--upgrade', p], onProgress, p); installed['python:' + p] = true; }
    return target;
  }
  /* is a pip package already in our folder? (name normalised as pip does: case, - _ .) */
  function pyHas(pkg) {
    const norm = (x) => String(x).toLowerCase().replace(/[-_.]+/g, '_');
    const want = norm(String(pkg).split(/[<>=!~\[ ]/)[0]);
    try { return fs.readdirSync(dir('python')).some((f) => /\.dist-info$/.test(f) && norm(f.replace(/-[^-]+\.dist-info$/, '')) === want); } catch (e) { return false; }
  }
  /* which of these modules cannot be imported yet (asks Python itself, so built-in modules are never fetched) */
  function pyMissing(mods) {
    if (!mods.length) return [];
    const py = tc.tool('python') || tc.tool('python3'); if (!py) return mods;
    const script = 'import sys,json,importlib.util\nmods=json.loads(sys.argv[1]);std=set(getattr(sys,"stdlib_module_names",()))|set(sys.builtin_module_names)\nout=[]\nfor m in mods:\n t=m.split(".")[0]\n if t in std: continue\n try:\n  ok=importlib.util.find_spec(t) is not None\n except Exception:\n  ok=False\n if not ok: out.append(m)\nprint(json.dumps(out))';
    const env = tc.env(); env.PYTHONPATH = [dir('python'), env.PYTHONPATH || ''].filter(Boolean).join(path.delimiter);
    const r = cp.spawnSync(py, ['-c', script, JSON.stringify(mods)], { encoding: 'utf8', env, windowsHide: true, timeout: 30000 });
    try { return JSON.parse(String(r.stdout).trim().split(/\r?\n/).pop()); } catch (e) { return mods; }
  }

  /* ---------------- npm ---------------- */
  function npmRun(args, onProgress, label) {
    return new Promise((resolve, reject) => {
      const npm = tc.tool('npm'); if (!npm) return reject(new Error('Node.js is not ready yet.'));
      if (onProgress) onProgress({ label, text: 'Getting Node library ' + label + ' …' });
      const d = dir('node');
      if (!fs.existsSync(path.join(d, 'package.json'))) fs.writeFileSync(path.join(d, 'package.json'), '{"name":"futureself-code","private":true}');
      const ch = spawnAny(npm, args, { cwd: d, windowsHide: true, env: tc.env() });
      let err = '';
      ch.stdout.on('data', () => { }); ch.stderr.on('data', (dd) => { err += dd; if (err.length > 20000) err = err.slice(-20000); });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error('npm could not install ' + label + ': ' + err.trim().split(/\r?\n/).slice(-2).join(' ')))));
    });
  }
  async function installNode(pkgs, onProgress) {
    const d = dir('node');
    for (const p of pkgs) { if (installed['node:' + p] || nodeHas(p)) continue; await npmRun(['install', '--no-audit', '--no-fund', '--silent', p], onProgress, p); installed['node:' + p] = true; }
    return path.join(d, 'node_modules');
  }
  function nodeHas(spec) {
    const name = spec.startsWith('@') ? spec.split('@').slice(0, 2).join('@') : spec.split('@')[0];
    return fs.existsSync(path.join(dir('node'), 'node_modules', name, 'package.json'));
  }

  /* resolve everything a program needs; returns extras to pass to the runner */
  async function prepare(lang, code, onProgress) {
    const want = detect(lang, code);
    if (lang === 'java') {
      const coords = [...new Set(want.concat(addedJava()))];
      return { classpath: coords.length ? await installJava(coords, onProgress) : [] };
    }
    const warnings = [];
    if (lang === 'python') {
      const explicit = atDeps(code);
      for (const p of explicit) await installPython([p], onProgress);            // the student named it: a failure is a real error
      const missing = pyMissing(pyModules(code));
      for (const mod of missing) {
        const pkg = pyPackage(mod);
        if (explicit.indexOf(pkg) >= 0) continue;
        try { await installPython([pkg], onProgress); } catch (e) { warnings.push('Python could not find the library for "import ' + mod + '". If its pip name is different, add a line  # @dep <pip-name>  to your code.'); log('[libs] ' + e.message); }
      }
      return { pythonpath: dir('python'), warnings };
    }
    if (lang === 'node' || lang === 'javascript' || lang === 'typescript') {
      const builtin = new Set(require('module').builtinModules || []);
      const explicit = atDeps(code);
      for (const p of explicit) await installNode([p], onProgress);
      for (const p of want) {
        if (explicit.indexOf(p) >= 0 || builtin.has(p) || nodeHas(p)) continue;
        try { await installNode([p], onProgress); } catch (e) { warnings.push('npm could not find a package called "' + p + '". Check the name, or add a line  // @dep <npm-name>  to your code.'); log('[libs] ' + e.message); }
      }
      return { nodepath: path.join(dir('node'), 'node_modules'), warnings };
    }
    return {};
  }
  /* add a library by hand (from the Libraries panel) */
  async function add(lang, name, onProgress) {
    if (lang === 'java') {
      name = String(name).trim(); if (!/^[\w.-]+:[\w.-]+(:[\w.+-]+)?$/.test(name)) throw new Error('Write a Java library as groupId:artifactId, for example com.mysql:mysql-connector-j');
      await installJava([name], onProgress);
      const a = addedJava(); if (a.indexOf(name) < 0) { a.push(name); fs.writeFileSync(addFile(), JSON.stringify(a)); }
      return allJavaJars();
    }
    if (lang === 'python') { await installPython([name], onProgress); return dir('python'); }
    if (lang === 'node') { await installNode([name], onProgress); return path.join(dir('node'), 'node_modules'); }
    throw new Error('Libraries can be added for Java, Python and Node here.');
  }
  function list(lang) {
    try {
      if (lang === 'java') return allJavaJars().map((j) => path.basename(j).replace(/^[\w.-]+__/, ''));
      if (lang === 'python') return fs.readdirSync(dir('python')).filter((f) => !/\.dist-info$|^__|\.(py[cod])$/.test(f) && fs.statSync(path.join(dir('python'), f)).isDirectory());
      if (lang === 'node') { const nm = path.join(dir('node'), 'node_modules'); return fs.existsSync(nm) ? fs.readdirSync(nm).filter((f) => f[0] !== '.') : []; }
    } catch (e) { }
    return [];
  }
  return { detect, prepare, add, list, dir, root };
}
module.exports = { create, detect, pyModules, pyPackage, KNOWN };

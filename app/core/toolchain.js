'use strict';
/* Runtimes for the coding platform.
   If Java (JDK), Python, Node.js or a C/C++ compiler is not installed on this PC, FutureSelf downloads the
   official portable build ONCE into its own folder (no admin rights, nothing changed in Windows) and uses it.
   A runtime that is already installed on the PC is always preferred.
     java   -> Eclipse Temurin JDK (api.adoptium.net)
     python -> CPython from python.org's NuGet package (api.nuget.org), pip included
     node   -> Node.js LTS with npm (nodejs.org)
     cc     -> w64devkit: gcc, g++, make, gdb (github.com/skeeto/w64devkit)              */
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const WIN = process.platform === 'win32';

/* full path of a program. On Windows "where" can list several: prefer a real .exe/.cmd/.bat and
   never the Microsoft Store "python" placeholder in WindowsApps. */
function which(name, extraDirs) {
  for (const d of extraDirs || []) {
    for (const n of WIN ? [name + '.exe', name + '.cmd', name + '.bat'] : [name]) { const p = path.join(d, n); if (fs.existsSync(p)) return p; }
  }
  try {
    const r = cp.spawnSync(WIN ? 'where' : 'which', [name], { encoding: 'utf8', timeout: 4000, windowsHide: true });
    if (r.status === 0) {
      const all = String(r.stdout).split(/\r?\n/).map((s) => s.trim()).filter(Boolean).filter((p) => !/\\WindowsApps\\/i.test(p));
      if (!WIN) return all[0] || null;
      return all.find((p) => /\.(exe|cmd|bat)$/i.test(p)) || null;
    }
  } catch (e) { /* not found */ }
  return null;
}
/* spawn that also works for .cmd/.bat on Windows (Node refuses to run them directly since 2024) and with spaces in paths */
function spawnAny(file, args, o) {
  if (WIN && /\.(cmd|bat)$/i.test(file)) {
    const q = (a) => (/[\s"&|<>^()]/.test(a) ? '"' + String(a).replace(/"/g, '""') + '"' : String(a));
    const line = '"' + [q(file)].concat((args || []).map(q)).join(' ') + '"';
    return cp.spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', line], Object.assign({}, o, { windowsVerbatimArguments: true, shell: false }));
  }
  return cp.spawn(file, args, o);
}
const mb = (n) => (n / 1048576).toFixed(n > 104857600 ? 0 : 1) + ' MB';

/* where each runtime comes from; every source is tried in order */
function defaultSpecs(platform, arch) {
  const os_ = platform === 'win32' ? 'windows' : platform === 'darwin' ? 'mac' : 'linux';
  const a = arch === 'arm64' ? 'aarch64' : 'x64';
  return {
    java: {
      name: 'Java (JDK 21)', exe: 'javac', size: '190 MB',
      sources: [
        { json: `https://api.adoptium.net/v3/assets/latest/21/hotspot?os=${os_}&architecture=${a}&image_type=jdk`, pick: (j) => { const b = j && j[0] && j[0].binary && j[0].binary.package; return b && { url: b.link, file: b.name, sha256: b.checksum }; } },
        { url: `https://api.adoptium.net/v3/binary/latest/21/ga/${os_}/${a}/jdk/hotspot/normal/eclipse?project=jdk`, file: platform === 'win32' ? 'jdk.zip' : 'jdk.tar.gz' }
      ]
    },
    python: platform === 'win32' ? {
      name: 'Python', exe: 'python', size: '20 MB', after: 'pip',
      sources: [
        { json: 'https://api.nuget.org/v3-flatcontainer/python/index.json', pick: (j) => { const v = pickPython(j && j.versions); return v && { url: `https://api.nuget.org/v3-flatcontainer/python/${v}/python.${v}.nupkg`, file: 'python.zip', version: v }; } },
        { url: 'https://api.nuget.org/v3-flatcontainer/python/3.13.9/python.3.13.9.nupkg', file: 'python.zip' }
      ]
    } : null,
    node: {
      name: 'Node.js and npm', exe: 'node', size: '35 MB',
      sources: [
        { json: 'https://nodejs.org/dist/index.json', pick: (j) => { const r = (j || []).find((x) => x.lts); if (!r) return null; const v = r.version; const p = platform === 'win32' ? `node-${v}-win-${arch === 'arm64' ? 'arm64' : 'x64'}.zip` : `node-${v}-${platform === 'darwin' ? 'darwin' : 'linux'}-${arch === 'arm64' ? 'arm64' : 'x64'}.tar.gz`; return { url: `https://nodejs.org/dist/${v}/${p}`, file: p, version: v }; } }
      ]
    },
    cc: platform === 'win32' ? {
      name: 'C/C++ compiler (gcc)', exe: 'gcc', size: '70 MB',
      sources: [
        { json: 'https://api.github.com/repos/skeeto/w64devkit/releases/latest', pick: (j) => { const as = (j && j.assets) || []; const x = as.find((s) => /^w64devkit-x64-[\d.]+(\.7z)?\.exe$/i.test(s.name)); return x && { url: x.browser_download_url, file: x.name, sfx: true }; } },
        { url: 'https://github.com/skeeto/w64devkit/releases/download/v2.10.1/w64devkit-x64-2.10.1.7z.exe', file: 'w64devkit.7z.exe', sfx: true }
      ]
    } : null
  };
}
/* newest stable 3.13.x (best library support), else the newest stable 3.x */
function pickPython(vs) {
  const st = (vs || []).filter((v) => /^3\.\d+\.\d+$/.test(v));
  const key = (v) => v.split('.').map((n) => ('000' + n).slice(-3)).join('.');
  const sorted = st.sort((a, b) => (key(a) < key(b) ? -1 : 1));
  const t13 = sorted.filter((v) => /^3\.13\./.test(v));
  return t13.length ? t13[t13.length - 1] : sorted[sorted.length - 1] || null;
}

function create(opts) {
  const root = path.join(opts.dir, 'tools');
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const specs = opts.specs || defaultSpecs(process.platform, process.arch);
  const manFile = path.join(root, 'tools.json');
  fs.mkdirSync(root, { recursive: true });
  let man = {};
  try { man = JSON.parse(fs.readFileSync(manFile, 'utf8')); } catch (e) { /* first run */ }
  const saveMan = () => { try { fs.writeFileSync(manFile, JSON.stringify(man, null, 1)); } catch (e) { log('[tools] ' + e.message); } };
  const busy = {};

  /* bin folders of the runtimes FutureSelf installed (put first on PATH for programs and the terminal) */
  function binDirs() {
    const out = [];
    Object.keys(man).forEach((k) => { const m = man[k]; if (m && m.bin && fs.existsSync(m.bin)) { out.push(m.bin); (m.extra || []).forEach((x) => { if (fs.existsSync(x)) out.push(x); }); } });
    return out;
  }
  function env(base) {
    const e = Object.assign({}, base || process.env);
    const key = Object.keys(e).find((k) => k.toUpperCase() === 'PATH') || 'PATH';
    e[key] = binDirs().concat([e[key] || '']).join(path.delimiter);
    if (man.java && man.java.home && fs.existsSync(man.java.home) && !systemHas('java')) e.JAVA_HOME = man.java.home;
    return e;
  }
  const sysCache = {};
  function systemHas(kind) {
    if (kind in sysCache) return sysCache[kind];
    let ok = false;
    if (kind === 'java') ok = !!(which('javac') && which('java'));
    else if (kind === 'python') { for (const t of ['python3', 'python']) { const p = which(t); if (p && !/WindowsApps/i.test(p)) { ok = true; break; } } if (!ok && WIN) ok = !!which('py'); }
    else if (kind === 'node') ok = !!(which('node') && which('npm'));
    else if (kind === 'cc') ok = !!(which('gcc') || which('clang') || which('cc'));
    return (sysCache[kind] = ok);
  }
  function managed(kind) { const m = man[kind]; return m && m.bin && fs.existsSync(m.bin) ? m : null; }
  function has(kind) { return systemHas(kind) || !!managed(kind); }
  function canInstall(kind) { return !!specs[kind]; }
  /* full path of a tool: FutureSelf's copy first when the PC has none, else the PC's own */
  function tool(name) { return which(name, binDirs()); }
  function status() {
    const s = {};
    ['java', 'python', 'node', 'cc'].forEach((k) => { s[k] = { system: systemHas(k), managed: !!managed(k), version: managed(k) ? man[k].version || '' : '', canInstall: canInstall(k), name: specs[k] ? specs[k].name : k, size: specs[k] ? specs[k].size : '' }; });
    return s;
  }

  async function download(url, dest, onProgress, label) {
    const res = await fetchFn(url);
    if (!res || !res.ok) throw new Error('download failed (' + (res ? res.status : 'no answer') + ')');
    const total = +(res.headers && res.headers.get && res.headers.get('content-length')) || 0;
    const tmp = dest + '.part';
    const out = fs.createWriteStream(tmp);
    let got = 0, lastP = -1;
    try {
      for await (const chunk of res.body) {
        const b = Buffer.from(chunk);
        got += b.length;
        if (!out.write(b)) await new Promise((r) => out.once('drain', r));
        const p = total ? Math.floor(100 * got / total) : -1;
        if (p !== lastP && onProgress) { lastP = p; onProgress({ label, pct: p, got, total, text: 'Downloading ' + label + ' … ' + (total ? p + '% of ' + mb(total) : mb(got)) }); }
      }
    } finally { await new Promise((r) => out.end(r)); }
    if (total && got < total) { try { fs.unlinkSync(tmp); } catch (e) { } throw new Error('the download stopped early; check the internet connection and try again'); }
    fs.renameSync(tmp, dest);
    return got;
  }
  function sha256(file) {
    const h = require('crypto').createHash('sha256');
    const fd = fs.openSync(file, 'r'), buf = Buffer.alloc(1 << 20); let n;
    try { while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n)); } finally { fs.closeSync(fd); }
    return h.digest('hex');
  }
  function run(cmd, args, o) {
    return new Promise((resolve, reject) => {
      const ch = spawnAny(cmd, args, Object.assign({ windowsHide: true }, o || {}));
      let err = '';
      ch.stderr && ch.stderr.on('data', (d) => { err += d; if (err.length > 20000) err = err.slice(-20000); });
      ch.stdout && ch.stdout.on('data', () => { });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error((path.basename(cmd) + ' failed: ' + err.trim().split(/\r?\n/).slice(-3).join(' ')).slice(0, 400)))));
    });
  }
  async function extract(file, dest, src) {
    fs.mkdirSync(dest, { recursive: true });
    if (src.sfx) return run(file, ['-o' + dest, '-y'], { cwd: dest });
    if (WIN) {
      const tar = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe');
      if (fs.existsSync(tar)) return run(tar, ['-xf', file, '-C', dest]);
      return run('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', `Expand-Archive -LiteralPath '${file.replace(/'/g, "''")}' -DestinationPath '${dest.replace(/'/g, "''")}' -Force`]);
    }
    if (/\.zip$|\.nupkg$/i.test(src.file || file)) return run('unzip', ['-q', '-o', file, '-d', dest]);
    return run('tar', ['-xf', file, '-C', dest]);
  }
  /* finds the folder that holds the tool (the archive's top folder name changes with every version) */
  function findBin(dir, exe, depth) {
    const names = WIN ? [exe + '.exe'] : [exe];
    const q = [[dir, 0]];
    while (q.length) {
      const [d, n] = q.shift();
      let ents = [];
      try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { continue; }
      if (ents.some((e) => e.isFile() && names.indexOf(e.name) >= 0)) return d;
      if (n < (depth || 5)) ents.filter((e) => e.isDirectory() && !/^(lib|include|share|legal|man|jmods|doc)$/i.test(e.name)).forEach((e) => q.push([path.join(d, e.name), n + 1]));
    }
    return null;
  }

  async function install(kind, onProgress) {
    const spec = specs[kind];
    if (!spec) throw new Error('FutureSelf cannot install ' + kind + ' on this system. Please install it yourself.');
    const say = (t, pct) => { if (onProgress) onProgress({ label: spec.name, pct: pct == null ? -1 : pct, text: t }); };
    let lastErr = null;
    for (const s of spec.sources) {
      let src = s;
      try {
        if (s.json) {
          say('Finding the latest ' + spec.name + ' …');
          const r = await fetchFn(s.json);
          if (!r || !r.ok) throw new Error('could not look up the latest version (' + (r ? r.status : 'no answer') + ')');
          src = s.pick(await r.json());
          if (!src || !src.url) throw new Error('no download found');
        }
        const url = opts.allowHttp ? String(src.url) : String(src.url).replace(/^http:\/\//i, 'https://');   // downloads always over HTTPS (allowHttp: tests only)
        const work = path.join(root, '.dl-' + kind);
        fs.rmSync(work, { recursive: true, force: true });
        fs.mkdirSync(work, { recursive: true });
        const file = path.join(work, (src.file || path.basename(url.split('?')[0]) || kind).replace(/[^\w.+-]/g, '_'));
        log('[tools] downloading ' + kind + ' from ' + url);
        await download(url, file, onProgress, spec.name);
        if (src.sha256) { say('Checking the download …'); if (sha256(file).toLowerCase() !== String(src.sha256).toLowerCase()) throw new Error('the download was damaged (checksum mismatch)'); }
        say('Unpacking ' + spec.name + ' …');
        const out = path.join(work, 'x');
        await extract(file, out, src);
        const bin = findBin(out, spec.exe);
        if (!bin) throw new Error('the download did not contain ' + spec.exe);
        /* move into place: tools/<kind> */
        const finalDir = path.join(root, kind);
        fs.rmSync(finalDir, { recursive: true, force: true });
        fs.renameSync(out, finalDir);
        fs.rmSync(work, { recursive: true, force: true });
        const finalBin = path.join(finalDir, path.relative(out, bin));
        const m = { bin: finalBin, version: src.version || '', at: Date.now(), extra: [] };
        if (kind === 'java') m.home = path.dirname(finalBin);
        if (kind === 'python' && WIN) m.extra.push(path.join(finalBin, 'Scripts'));
        man[kind] = m; saveMan();
        if (spec.after === 'pip') { say('Setting up pip …'); await ensurePip(finalBin); }
        say(spec.name + ' is ready.', 100);
        return m;
      } catch (e) { lastErr = e; log('[tools] ' + kind + ': ' + e.message); }
    }
    throw new Error('Could not install ' + spec.name + ': ' + (lastErr ? lastErr.message : 'unknown error') + '. Check the internet connection and try again.');
  }
  async function ensurePip(bin) {
    const py = path.join(bin, WIN ? 'python.exe' : 'python3');
    const ok = cp.spawnSync(py, ['-m', 'pip', '--version'], { windowsHide: true, timeout: 30000 }).status === 0;
    if (!ok) await run(py, ['-m', 'ensurepip', '--default-pip']);
  }
  /* make sure a runtime is available: returns quickly when it is already there */
  function ensure(kind, onProgress) {
    if (has(kind)) return Promise.resolve(true);
    if (busy[kind]) return busy[kind];
    busy[kind] = install(kind, onProgress).then(() => { delete busy[kind]; return true; }, (e) => { delete busy[kind]; throw e; });
    return busy[kind];
  }
  function remove(kind) {
    if (!man[kind]) return false;
    fs.rmSync(path.join(root, kind), { recursive: true, force: true });
    delete man[kind]; saveMan(); return true;
  }
  return { ensure, has, status, tool, env, binDirs, remove, systemHas, managed, root };
}
module.exports = { create, defaultSpecs, pickPython, which, spawnAny };

'use strict';
/* Runs the student's code on THIS PC and makes it "just work":
     - the language's runtime is downloaded once if missing (core/toolchain.js)
     - libraries are read from the code and fetched (core/libs.js, core/msys.js)
     - if the code uses MySQL and none is running, a local MySQL server starts (core/mysqlserver.js)
     - web pages and web servers open in the app's built-in browser (core/preview.js)
   Two ways to run:
     run()      short runs with a time limit (sample tests, challenges)
     runLive()  the editor's Run button: no time limit, live output, typing input while it runs, Stop button,
                and the address of any web server the program starts is sent to the browser.
   Also the terminal: one command at a time inside the FutureSelf Code folder, with every tool and library on PATH. */
const fs = require('fs');
const os = require('os');
const net = require('net');
const path = require('path');
const cp = require('child_process');
const { which, spawnAny } = require('./toolchain');
const L = require('./libs');

const WIN = process.platform === 'win32';
const OUT_MAX = 400 * 1024;
const exe = (n) => (WIN ? n + '.exe' : n);

/* every language: label, which runtime installs it (manage), which library system it uses (libs) */
const LANGS = {
  html: { label: 'Web page (HTML/CSS/JS)' },
  javascript: { label: 'JavaScript', manage: 'node', libs: 'node' },
  typescript: { label: 'TypeScript', manage: 'node', libs: 'node' },
  python: { label: 'Python', manage: 'python', libs: 'python' },
  java: { label: 'Java', manage: 'java', libs: 'java' },
  c: { label: 'C', manage: 'cc', libs: 'c' },
  cpp: { label: 'C++', manage: 'cc', libs: 'cpp' },
  csharp: { label: 'C#', manage: 'dotnet', libs: 'csharp' },
  go: { label: 'Go', manage: 'go' },
  rust: { label: 'Rust', manage: 'rust' },
  kotlin: { label: 'Kotlin', manage: 'kotlin', libs: 'kotlin' },
  scala: { label: 'Scala', manage: 'scala' },
  php: { label: 'PHP', manage: 'php', libs: 'php' },
  ruby: { label: 'Ruby', manage: 'ruby', libs: 'ruby' },
  r: { label: 'R', manage: 'r', libs: 'r' },
  dart: { label: 'Dart', manage: 'dart' },
  bash: { label: 'Bash', tools: ['bash'] },
  lua: { label: 'Lua', tools: ['lua'] },
  perl: { label: 'Perl', tools: ['perl'] },
  swift: { label: 'Swift', tools: ['swiftc'] }
};
/* what must exist on PATH for each language to run without downloading anything */
const NEEDS = {
  javascript: [], html: [], typescript: ['npm'], python: ['@py'], java: ['javac', 'java'], c: ['@cc'], cpp: ['@cxx'], csharp: ['dotnet'], go: ['go'],
  rust: ['cargo'], kotlin: ['kotlinc', 'java'], scala: ['scala-cli'], php: ['php'], ruby: ['ruby'], r: ['Rscript'], dart: ['dart'],
  bash: ['bash'], lua: ['lua'], perl: ['perl'], swift: ['swiftc']
};

/* the Java public class name and package, so Main.java is not assumed */
function javaInfo(code) {
  const pkg = (/^\s*package\s+([\w.]+)\s*;/m.exec(code) || [])[1] || '';
  const pub = (/public\s+(?:final\s+|abstract\s+)?class\s+(\w+)/.exec(code) || [])[1];
  const any = (/\bclass\s+(\w+)/.exec(code) || [])[1];
  const cls = pub || any || 'Main';
  return { cls, pkg, file: cls + '.java', main: (pkg ? pkg + '.' : '') + cls };
}
/* ports a program will probably serve on (so the browser can open it even if nothing is printed) */
function guessPorts(lang, code) {
  const ports = new Set(); let m;
  const re = /(?:\.listen\(\s*|port\s*[=:]\s*|PORT\s*[=:]\s*|server\.port\s*=\s*|HttpServer\.create\(\s*new\s+InetSocketAddress\(\s*|InetSocketAddress\(\s*|-S\s+[\w.]+:|:)(\d{4,5})\b/g;
  while ((m = re.exec(code))) { const p = +m[1]; if (p >= 1024 && p < 65536 && p !== 3306 && p !== 5432 && p !== 27017 && p !== 6379) ports.add(p); }
  if (lang === 'python') { if (/\bflask\b|Flask\(/i.test(code) && /\.run\(/.test(code)) ports.add(5000); if (/uvicorn|fastapi/i.test(code)) ports.add(8000); if (/django/i.test(code)) ports.add(8000); if (/http\.server|HTTPServer/.test(code)) ports.add(8000); if (/streamlit/.test(code)) ports.add(8501); if (/gradio/.test(code)) ports.add(7860); if (/dash\b|Dash\(/.test(code)) ports.add(8050); }
  if (lang === 'java' || lang === 'kotlin') { if (/org\.springframework\.boot|SpringApplication/.test(code)) ports.add(8080); if (/javalin/i.test(code)) ports.add(7070); if (/spark\.Spark|import static spark/.test(code)) ports.add(4567); }
  if (lang === 'javascript' || lang === 'typescript') { if (/express\(\)|http\.createServer|fastify|koa/.test(code)) ports.add(3000); }
  if (lang === 'ruby' && /sinatra/.test(code)) ports.add(4567);
  if (lang === 'go' && /http\.ListenAndServe/.test(code)) ports.add(8080);
  if (lang === 'rust' && /axum|actix|warp|rocket/.test(code)) ports.add(3000);
  if (lang === 'csharp' && /WebApplication\.Create/.test(code)) ports.add(5000);
  return [...ports];
}
const URL_RE = /\bhttps?:\/\/(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1?\])(?::\d{2,5})?(?:\/[^\s'"<>)\]]*)?/i;
const portOpen = (port) => new Promise((resolve) => { const s = net.connect(port, '127.0.0.1'); const t = setTimeout(() => { s.destroy(); resolve(false); }, 500); s.once('connect', () => { clearTimeout(t); s.destroy(); resolve(true); }); s.once('error', () => { clearTimeout(t); resolve(false); }); });
const freePort = () => new Promise((resolve) => { const s = net.createServer(); s.listen(0, '127.0.0.1', () => { const p = s.address().port; s.close(() => resolve(p)); }); });
const isWebPhp = (code) => /<\s*(html|body|div|form|h1|p|table|!doctype)\b/i.test(code) || /\$_(GET|POST|REQUEST|SERVER|SESSION|COOKIE)\b/.test(code);

function create(opts) {
  const log = opts.log || (() => { });
  const dataDir = opts.dir;
  const root = path.join(dataDir, 'code');
  fs.mkdirSync(root, { recursive: true });
  const toolchain = opts.toolchain;   // core/toolchain.create(...)
  const libs = opts.libs;             // core/libs.create(...)
  const mysql = opts.mysql;           // core/mysqlserver.create(...)
  const preview = opts.preview;       // core/preview.create(...)
  const emit = opts.onProgress || (() => { });
  const junitSub = {};

  const extraBins = () => (toolchain ? toolchain.binDirs() : []);
  /* environment for programs AND the terminal: our tools on PATH, every library folder visible */
  function baseEnv() {
    const e = toolchain ? toolchain.env() : Object.assign({}, process.env);
    const k = Object.keys(e).find((x) => x.toUpperCase() === 'PATH') || 'PATH';
    const add = [];
    const mb = mysql && mysql.binDir && mysql.binDir(); if (mb) add.push(mb);
    if (toolchain && toolchain.msys && fs.existsSync(toolchain.msys.binDir())) add.push(toolchain.msys.binDir());
    if (libs) {
      const py = libs.dir('python'); e.PYTHONPATH = [py, e.PYTHONPATH || ''].filter(Boolean).join(path.delimiter); add.push(path.join(py, 'bin'), path.join(py, 'Scripts'));
      const nm = path.join(libs.dir('node'), 'node_modules'); e.NODE_PATH = [nm, e.NODE_PATH || ''].filter(Boolean).join(path.delimiter); add.push(path.join(nm, '.bin'));
      const g = libs.dir('ruby'); e.GEM_PATH = [g, e.GEM_PATH || ''].filter(Boolean).join(path.delimiter); add.push(path.join(g, 'bin'));
      e.R_LIBS_USER = libs.dir('r');
    }
    e.GOPATH = path.join(dataDir, 'go'); e.GOTOOLCHAIN = 'local'; e.GOFLAGS = '-mod=mod';
    e.PUB_CACHE = path.join(dataDir, 'pub-cache');
    e.PYTHONIOENCODING = 'utf-8'; e.PYTHONUNBUFFERED = '1'; e.PYTHONUTF8 = '1';
    e.CARGO_TERM_COLOR = 'never'; e.NO_COLOR = '1'; e.FORCE_COLOR = '0';
    if (WIN && toolchain && toolchain.msys) e.PKG_CONFIG_PATH = path.join(toolchain.msys.root, 'ucrt64', 'lib', 'pkgconfig');
    e[k] = add.filter((x) => fs.existsSync(x)).concat([e[k] || '']).join(path.delimiter);
    return e;
  }

  function resolve(tool) {
    if (tool === '@node') return { cmd: process.execPath, env: { ELECTRON_RUN_AS_NODE: '1' } };
    if (tool === '@py') { for (const t of ['python3', 'python']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } const py = which('py'); return py ? { cmd: py, pre: ['-3'] } : null; }
    if (tool === '@cc') { for (const t of ['gcc', 'clang', 'cc']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } return null; }
    if (tool === '@cxx') { for (const t of ['g++', 'clang++']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } return null; }
    const p = which(tool, extraBins()); return p ? { cmd: p } : null;
  }
  const R = (tool) => { const r = resolve(tool); if (!r) throw new Error(tool.replace('@', '') + ' is not available on this PC.'); return r; };
  /* is a language runnable right now (without downloading)? */
  function available(id) { const n = NEEDS[id]; return !!n && n.every((t) => !!resolve(t)); }
  function catalogue() {
    const out = {}, st = toolchain ? toolchain.status() : {};
    for (const id of Object.keys(LANGS)) { const m = LANGS[id].manage; out[id] = available(id) ? 'ready' : (m && st[m] && st[m].canInstall ? 'installable' : 'server'); }
    return out;
  }
  const langLabel = (id) => (LANGS[id] ? LANGS[id].label : id);

  /* ---------- preparing: runtime, MySQL, libraries ---------- */
  async function prepareRun(id, code, onStep) {
    const Lg = LANGS[id];
    const p = (m) => { if (onStep) onStep(m); emit(m); };
    const usesLibs = !!(Lg.libs && libs && libs.detect(Lg.libs === 'cpp' ? 'cpp' : Lg.libs, code).length);
    const needsNpm = (id === 'javascript' && (usesLibs || /\b(describe|test|it)\s*\(/.test(code) && /\bexpect\s*\(/.test(code))) || id === 'typescript';
    if (Lg.manage && toolchain && !toolchain.has(Lg.manage) && (!available(id) || needsNpm)) {
      if (!toolchain.status()[Lg.manage].canInstall) throw new Error(langLabel(id) + ' is not installed on this PC.');
      await toolchain.ensure(Lg.manage, (pr) => p(Object.assign({ phase: 'runtime' }, pr)));
    }
    if (mysql && /jdbc:mysql|mysql\.connector|pymysql|MySQLdb|require\(['"]mysql2?(\/promise)?['"]\)|from\s+['"]mysql2|createConnection|jdbc:mariadb|mysqli|PDO\(\s*['"]mysql|mysql2::|MySqlConnection|mysql\.h|sql\.Open\(\s*"mysql"|RMySQL|RMariaDB|mysql::/i.test(code) && /3306|localhost|127\.0\.0\.1|getenv|DB_|password|Password|pwd/i.test(code)) {
      try { await mysql.ensure((pr) => p(Object.assign({ phase: 'mysql' }, pr))); } catch (e) { log('[code] mysql: ' + e.message); }
    }
    let extra = {};
    if (Lg.libs && libs) { try { extra = await libs.prepare(Lg.libs === 'cpp' ? 'cpp' : Lg.libs, code, (pr) => p(Object.assign({ phase: 'libs' }, pr))); } catch (e) { throw new Error('A library could not be set up: ' + e.message); } }
    return extra || {};
  }

  /* ---------- planning: the commands that compile and run a program ---------- */
  async function plan(id, code, extra, p) {
    const env = baseEnv();
    if (extra.env) Object.assign(env, extra.env);
    const tmp = (base) => fs.mkdtempSync(path.join(base || os.tmpdir(), 'fsc-'));
    const out = { steps: [], run: null, dir: null, keep: false, env, web: null };
    const dirIn = (d) => { out.dir = d; return d; };
    const write = (f, t) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, t); return f; };
    const cmd = (r, args, o) => Object.assign({ cmd: r.cmd, args: (r.pre || []).concat(args), env: r.env ? Object.assign({}, env, r.env) : env, cwd: out.dir }, o || {});

    switch (id) {
      case 'html': {
        if (!preview) throw new Error('The built-in browser is only in the Windows app.');
        const r = await preview.publish(code, 'index.html');
        out.web = r.url; return out;
      }
      case 'javascript': case 'typescript': {
        const base = libs ? path.join(libs.dir('node'), 'runs') : os.tmpdir(); fs.mkdirSync(base, { recursive: true });
        const d = dirIn(tmp(base));
        const jest = id === 'javascript' && /\b(describe|test|it)\s*\(/.test(code) && /\bexpect\s*\(/.test(code) && !/require\(['"](assert|node:test)['"]\)/.test(code);
        // ES module only when the code uses import/export statements (and no require); Node handles top-level await itself
        const esm = /^\s*(import\s+[\w*{'"]|export\s)/m.test(code) && !/\brequire\s*\(/.test(code);
        if (id === 'typescript') {
          const tsx = await libs.nodeTool('tsx', path.join('dist', 'cli.mjs'), (x) => p(Object.assign({ phase: 'libs' }, x)));
          const f = write(path.join(d, 'main.ts'), code);
          out.run = cmd(R('@node'), [tsx, f]);
        } else if (jest) {
          const jestBin = await libs.nodeTool('jest', path.join('bin', 'jest.js'), (x) => p(Object.assign({ phase: 'libs' }, x)));
          write(path.join(d, 'main.test.' + (esm ? 'mjs' : 'js')), code);
          out.run = cmd(R('@node'), (esm ? ['--experimental-vm-modules'] : []).concat([jestBin, '--rootDir', d, '--ci', '--colors=false', '--testMatch', '**/main.test.*js']));
        } else {
          const f = write(path.join(d, esm ? 'main.mjs' : 'main.js'), code);
          out.run = cmd(R('@node'), [f]);
        }
        return out;
      }
      case 'python': {
        const d = dirIn(tmp());
        const f = write(path.join(d, 'main.py'), code);
        if (extra.pythonpath) env.PYTHONPATH = [extra.pythonpath, env.PYTHONPATH || ''].join(path.delimiter);
        const pytest = /^\s*def\s+test_\w*\s*\(/m.test(code) && !/__name__\s*==\s*['"]__main__['"]/.test(code);
        if (pytest) { if (libs.pyMissing(['pytest']).length) await libs.installPython(['pytest'], (x) => p(Object.assign({ phase: 'libs' }, x))); out.run = cmd(R('@py'), ['-m', 'pytest', '-q', '-p', 'no:cacheprovider', f]); }
        else out.run = cmd(R('@py'), [f]);
        return out;
      }
      case 'java': {
        const d = dirIn(tmp());
        let src = code;
        if (extra.springBoot && !/^\s*package\s/m.test(src)) src = 'package app; ' + src;   // Spring Boot cannot scan the "default package"; same line, so line numbers stay right
        const ji = javaInfo(src);
        const f = write(path.join(d, ji.file), src);
        const cpth = [d].concat(extra.classpath || [], extra.test && extra.junit ? [extra.junit] : []).join(path.delimiter);
        const fx = extra.modulePath && extra.modulePath.length ? ['--module-path', extra.modulePath.join(path.delimiter), '--add-modules', extra.modules.join(',')] : [];
        const proc = extra.processorpath && extra.processorpath.length ? ['-processorpath', extra.processorpath.join(path.delimiter)] : [];
        out.steps.push(cmd(R('javac'), ['-encoding', 'UTF-8', '-parameters', '-cp', cpth].concat(fx, proc, ['-d', d, f])));
        if (extra.test && extra.junit) {
          // JUnit 1.10+ uses "execute ..."; older runners take the options directly. Ask the runner once.
          if (!(extra.junit in junitSub)) junitSub[extra.junit] = cp.spawnSync(R('java').cmd, ['-jar', extra.junit, 'execute', '--help'], { env, windowsHide: true, timeout: 60000 }).status === 0;
          out.run = cmd(R('java'), ['-jar', extra.junit].concat(junitSub[extra.junit] ? ['execute'] : [], ['--class-path', cpth, '--select-class', ji.main, '--details=tree', '--disable-banner', '--disable-ansi-colors']));
        }
        else out.run = cmd(R('java'), ['-Dfile.encoding=UTF-8', '-Dstdout.encoding=UTF-8'].concat(fx, ['-cp', cpth, ji.main]));
        return out;
      }
      case 'kotlin': {
        const d = dirIn(tmp());
        const f = write(path.join(d, 'main.kt'), code);
        const jar = path.join(d, 'main.jar'), cps = (extra.classpath || []);
        out.steps.push(cmd(R('kotlinc'), [f].concat(cps.length ? ['-cp', cps.join(path.delimiter)] : [], ['-include-runtime', '-d', jar])));
        const cls = (/^\s*package\s+([\w.]+)/m.exec(code) || [])[1];
        out.run = cmd(R('java'), ['-cp', [jar].concat(cps).join(path.delimiter), (cls ? cls + '.' : '') + 'MainKt']);
        return out;
      }
      case 'scala': {
        const d = dirIn(tmp());
        const f = write(path.join(d, 'main.scala'), code);
        const deps = L.scalaNeeds(code);
        out.run = cmd(R('scala-cli'), ['run', f, '--server=false', '--power'].concat(...deps.map((x) => ['--dep', x])));
        return out;
      }
      case 'c': case 'cpp': {
        const d = dirIn(tmp());
        const f = write(path.join(d, id === 'c' ? 'main.c' : 'main.cpp'), code), o = path.join(d, exe('prog'));
        const std = id === 'c' ? [] : ['-std=c++20'];
        out.steps.push(cmd(R(id === 'c' ? '@cc' : '@cxx'), ['-O2', '-pthread'].concat(std, ['-o', o, f], extra.cflags || [], id === 'c' ? ['-lm'] : [])));
        out.run = { cmd: o, args: [], env, cwd: d };
        return out;
      }
      case 'csharp': {
        const d = dirIn(tmp());
        const n = L.nugetNeeds(code);
        const head = (n.web ? ['#:sdk Microsoft.NET.Sdk.Web'] : []).concat(n.packages.map((x) => '#:package ' + (x.includes('@') ? x : x + '@*')), n.winforms ? ['#:property TargetFramework=net10.0-windows', '#:property UseWindowsForms=true'] : n.wpf ? ['#:property TargetFramework=net10.0-windows', '#:property UseWPF=true'] : []);
        const f = write(path.join(d, 'main.cs'), (head.length ? head.join('\n') + '\n' : '') + code);
        out.lineShift = head.length;
        // no vulnerability check on every run: programs then also run offline once their packages are downloaded
        out.run = cmd(R('dotnet'), ['run', f, '--property:NuGetAudit=false', '--property:PublishAot=false']);
        return out;
      }
      case 'go': {
        const d = dirIn(tmp());
        write(path.join(d, 'main.go'), code);
        write(path.join(d, 'go.mod'), 'module fsmain\n\ngo 1.21\n');
        out.steps.push(Object.assign(cmd(R('go'), ['mod', 'tidy']), { timeoutSec: 600, label: 'Getting Go modules' }));
        out.run = cmd(R('go'), ['run', '.']);
        return out;
      }
      case 'rust': {
        const proj = path.join(root, 'rust', 'fsmain'); dirIn(proj); out.keep = true;
        const deps = L.rustNeeds(code);
        const toml = (dd) => '[package]\nname = "fsmain"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\n' + Object.keys(dd).map((k) => `${k} = ${dd[k]}`).join('\n') + '\n';
        write(path.join(proj, 'Cargo.toml'), toml(deps));
        write(path.join(proj, 'src', 'main.rs'), code);
        env.CARGO_TARGET_DIR = path.join(root, 'rust', 'target');
        out.steps.push(Object.assign(cmd(R('cargo'), ['build', '--quiet', '--manifest-path', path.join(proj, 'Cargo.toml')]), { timeoutSec: 900, label: 'Building with Cargo',
          retry: (res) => { // crate names use "-" on crates.io but "_" in code: try the other spelling once
            const m = /no matching package named `([\w-]+)`/.exec(res.stderr || ''); if (!m) return null;
            const bad = m[1], alt = bad.includes('_') ? bad.replace(/_/g, '-') : null; if (!alt) return null;
            const d2 = {}; Object.keys(deps).forEach((k) => { d2[k === bad ? alt : k] = deps[k]; }); write(path.join(proj, 'Cargo.toml'), toml(d2)); return true; } }));
        out.run = { cmd: path.join(env.CARGO_TARGET_DIR, 'debug', exe('fsmain')), args: [], env, cwd: proj };
        return out;
      }
      case 'php': {
        const auto = extra.autoload ? ['-d', 'auto_prepend_file=' + extra.autoload] : [];
        if (isWebPhp(code) && preview) {                                      // a PHP web page: serve it with PHP's own web server
          await preview.start();
          write(path.join(preview.root, 'index.php'), code);
          const port = await freePort();
          dirIn(preview.root); out.keep = true;
          out.run = cmd(R('php'), auto.concat(['-S', '127.0.0.1:' + port, '-t', preview.root]));
          out.serveUrl = 'http://127.0.0.1:' + port + '/index.php';
          return out;
        }
        const d = dirIn(tmp());
        const f = write(path.join(d, 'main.php'), code);
        out.run = cmd(R('php'), auto.concat([f]));
        return out;
      }
      case 'ruby': {
        const d = dirIn(tmp());
        if (/\bRSpec\.describe\b/.test(code)) { const f = write(path.join(d, 'main_spec.rb'), code); out.run = cmd(R('ruby'), ['-S', 'rspec', '--no-color', f]); return out; }   // RSpec tests
        const f = write(path.join(d, 'main.rb'), code); out.run = cmd(R('ruby'), [f]); return out;
      }
      case 'r': { const d = dirIn(tmp()); const f = write(path.join(d, 'main.R'), code); out.run = cmd(R('Rscript'), [f]); out.rplots = path.join(d, 'Rplots.pdf'); return out; }
      case 'dart': {
        const d = dirIn(tmp());
        const deps = L.dartNeeds(code);
        write(path.join(d, 'pubspec.yaml'), 'name: fsmain\nenvironment:\n  sdk: ">=3.0.0 <4.0.0"\n' + (deps.length ? 'dependencies:\n' + deps.map((x) => '  ' + x + ': any').join('\n') + '\n' : ''));
        const f = write(path.join(d, 'bin', 'main.dart'), code);
        if (deps.length) out.steps.push(Object.assign(cmd(R('dart'), ['pub', 'get']), { timeoutSec: 600, label: 'Getting Dart packages' }));
        out.run = cmd(R('dart'), ['run', f]);
        return out;
      }
      case 'bash': { const d = dirIn(tmp()); const f = write(path.join(d, 'main.sh'), code); out.run = cmd(R('bash'), [f]); return out; }
      case 'lua': { const d = dirIn(tmp()); const f = write(path.join(d, 'main.lua'), code); out.run = cmd(R('lua'), [f]); return out; }
      case 'perl': { const d = dirIn(tmp()); const f = write(path.join(d, 'main.pl'), code); out.run = cmd(R('perl'), [f]); return out; }
      case 'swift': { const d = dirIn(tmp()); const f = write(path.join(d, 'main.swift'), code), o = path.join(d, exe('prog')); out.steps.push(cmd(R('swiftc'), ['-O', '-o', o, f])); out.run = { cmd: o, args: [], env, cwd: d }; return out; }
    }
    throw new Error('This platform cannot run that language.');
  }

  /* ---------- processes ---------- */
  const trim = (s) => (s.length > OUT_MAX ? s.slice(0, OUT_MAX) + '\n[output cut]' : s);
  function killTree(ch) { try { if (WIN) cp.spawn('taskkill', ['/pid', String(ch.pid), '/T', '/F'], { windowsHide: true }); else { try { process.kill(-ch.pid, 'SIGKILL'); } catch (e) { ch.kill('SIGKILL'); } } } catch (e) { } }
  /* start a process; o.timeoutSec (0 = no limit), o.onOut(chunk, kind), o.stdin (initial text), o.keepStdin (live typing) */
  function start(c, o) {
    let out = '', err = '', done = false, timedOut = false, ch;
    const p = new Promise((resolveP) => {
      try { ch = spawnAny(c.cmd, c.args, { cwd: c.cwd, env: c.env || baseEnv(), windowsHide: true, detached: !WIN }); }
      catch (e) { return resolveP({ code: 127, stdout: '', stderr: String(e.message), timedOut: false }); }
      const timer = o.timeoutSec ? setTimeout(() => { timedOut = true; killTree(ch); }, o.timeoutSec * 1000) : null;
      ch.stdout.on('data', (d) => { const s = String(d); out += s; if (out.length > OUT_MAX * 4) out = out.slice(-OUT_MAX * 2); if (o.onOut) o.onOut(s, 'out'); });
      ch.stderr.on('data', (d) => { const s = String(d); err += s; if (err.length > OUT_MAX * 4) err = err.slice(-OUT_MAX * 2); if (o.onOut) o.onOut(s, 'err'); });
      ch.on('error', (e) => { if (!done) { done = true; if (timer) clearTimeout(timer); resolveP({ code: 127, stdout: trim(out), stderr: String(e.message), timedOut: false }); } });
      ch.on('close', (code) => { if (!done) { done = true; if (timer) clearTimeout(timer); resolveP({ code: timedOut ? 124 : (code == null ? 1 : code), stdout: trim(out), stderr: trim(err), timedOut }); } });
      try { ch.stdin.on('error', () => { }); if (o.stdin) ch.stdin.write(String(o.stdin)); if (!o.keepStdin) ch.stdin.end(); } catch (e) { }
    });
    return { promise: p, child: () => ch, kill: () => { if (ch && !done) killTree(ch); }, write: (t) => { try { if (ch && !done) ch.stdin.write(t); } catch (e) { } }, endInput: () => { try { ch && ch.stdin.end(); } catch (e) { } } };
  }
  async function compile(pl, onOut, onStep) {
    for (const st of pl.steps) {
      if (st.label && onStep) onStep({ phase: 'build', text: st.label + ' …' });
      let r = await start(st, { timeoutSec: st.timeoutSec || 300, onOut }).promise;
      if (r.code !== 0 && st.retry && st.retry(r)) r = await start(st, { timeoutSec: st.timeoutSec || 300, onOut }).promise;
      if (r.code !== 0) return r;
    }
    return null;
  }
  const hintFor = (extra, r, pl) => {
    const h = [];
    if (r.code !== 0 && extra && extra.warnings && extra.warnings.length) h.push(...extra.warnings);
    if (pl && pl.lineShift && r.code !== 0) h.push('(Line numbers above are ' + pl.lineShift + ' higher than in your editor, because FutureSelf added ' + pl.lineShift + ' package line(s) at the top.)');
    return h.length ? '\n\n' + h.join('\n') : '';
  };
  const cleanup = (pl) => { if (pl && pl.dir && !pl.keep) { try { fs.rmSync(pl.dir, { recursive: true, force: true }); } catch (e) { } } };

  /* short run with a time limit (samples, challenges) */
  async function run(p) {
    const id = String((p && p.lang) || ''); if (!LANGS[id]) return { ok: false, error: 'This platform cannot run that language.' };
    const code = String(p.code || ''); if (code.length > 300000) return { ok: false, error: 'That program is too large.' };
    let extra, pl; const t0 = Date.now();
    try { extra = await prepareRun(id, code, p.onStep); pl = await plan(id, code, extra, (m) => { if (p.onStep) p.onStep(m); emit(m); }); }
    catch (e) { return { ok: false, error: e.message }; }
    try {
      if (pl.web) return { ok: true, phase: 'run', code: 0, stdout: '', stderr: '', web: pl.web, ms: Date.now() - t0 };
      const bad = await compile(pl, null, p.onStep);
      if (bad) return { ok: true, phase: 'compile', code: bad.code, stdout: bad.stdout, stderr: (bad.stderr || bad.stdout) + hintFor(extra, bad, pl), timedOut: bad.timedOut, ms: Date.now() - t0 };
      const r = await start(pl.run, { timeoutSec: Math.min(60, +p.timeoutSec || 12), stdin: String(p.stdin || '') }).promise;
      return { ok: true, phase: 'run', code: r.code, stdout: r.stdout, stderr: (r.stderr || '') + hintFor(extra, r, pl), timedOut: r.timedOut, ms: Date.now() - t0 };
    } catch (e) { return { ok: false, error: e.message }; }
    finally { cleanup(pl); }
  }

  /* the editor's Run: live, no time limit. ev = { out(chunk, kind), step(progress), url(address), exit(result) } */
  const live = new Map();
  function runLive(p, ev0) {
    const id = 'run' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const ev = { out: (c, k) => ev0.out(c, k, id), step: (x) => ev0.step(Object.assign({ id }, x)), url: (u) => ev0.url(u, id), exit: (r) => ev0.exit(r) };
    const lang = String((p && p.lang) || ''), code = String((p && p.code) || '');
    const st = { stopped: false, proc: null, t0: Date.now() };
    live.set(id, st);
    (async () => {
      let extra = {}, pl = null, sentUrl = false;
      const finish = (r) => { live.delete(id); ev.exit(Object.assign({ id }, r)); };
      const sendUrl = (u) => { if (sentUrl || !u) return; sentUrl = true; ev.url(u.replace('0.0.0.0', '127.0.0.1').replace(/\[::1?\]/, '127.0.0.1')); };
      try {
        if (!LANGS[lang]) return finish({ ok: false, error: 'This platform cannot run that language.' });
        extra = await prepareRun(lang, code, ev.step);
        if (st.stopped) return finish({ ok: true, code: 130, stopped: true, ms: Date.now() - st.t0 });
        pl = await plan(lang, code, extra, ev.step);
        if (pl.web) { sendUrl(pl.web); return finish({ ok: true, phase: 'run', code: 0, web: pl.web, ms: Date.now() - st.t0 }); }
        const bad = await compile(pl, (c, k) => ev.out(c, k), ev.step);
        if (bad) { if (pl.lineShift || (extra.warnings || []).length) ev.out(hintFor(extra, bad, pl), 'err'); return finish({ ok: true, phase: 'compile', code: bad.code, ms: Date.now() - st.t0 }); }
        if (st.stopped) return finish({ ok: true, code: 130, stopped: true, ms: Date.now() - st.t0 });
        // run: stream output, look for a web address, keep stdin open for typing
        const ports = guessPorts(lang, code);
        let buf = '';
        const pre = String(p.stdin || ''), pre1 = pre && !/\n$/.test(pre) ? pre + '\n' : pre;   // the last line of the Input tab counts as typed with Enter, or input() would wait for it
        const proc = start(pl.run, { timeoutSec: 0, stdin: pre1, keepStdin: true, onOut: (c, k) => { ev.out(c, k); if (!sentUrl) { buf = (buf + c).slice(-4000); const m = URL_RE.exec(buf); if (m && !/:(3306|5432|27017|6379)\b/.test(m[0])) sendUrl(m[0]); } } });
        st.proc = proc;
        if (pl.serveUrl) { (async () => { for (let i = 0; i < 40 && live.has(id) && !sentUrl; i++) { if (await portOpen(+/:(\d+)\//.exec(pl.serveUrl)[1])) { sendUrl(pl.serveUrl); break; } await new Promise((r) => setTimeout(r, 300)); } })(); }
        else if (ports.length) { (async () => { const was = {}; for (const pt of ports) was[pt] = await portOpen(pt); for (let i = 0; i < 600 && live.has(id) && !sentUrl; i++) { for (const pt of ports) { if (!was[pt] && await portOpen(pt)) { sendUrl('http://127.0.0.1:' + pt + '/'); break; } } await new Promise((r) => setTimeout(r, 700)); } })(); }
        const r = await proc.promise;
        if (pl.rplots && fs.existsSync(pl.rplots) && preview) { try { fs.copyFileSync(pl.rplots, path.join(preview.root, 'Rplots.pdf')); const port = await preview.start(); sendUrl('http://127.0.0.1:' + port + '/Rplots.pdf?t=' + Date.now()); } catch (e) { } }
        const hint = hintFor(extra, r, pl); if (hint) ev.out(hint, 'err');
        finish({ ok: true, phase: 'run', code: st.stopped ? 130 : r.code, stopped: st.stopped, ms: Date.now() - st.t0 });
      } catch (e) { finish({ ok: false, error: e.message }); }
      finally { cleanup(pl); }
    })();
    return { ok: true, id };
  }
  function input(id, text) { const st = live.get(id); if (st && st.proc) { st.proc.write(String(text)); return { ok: true }; } const t = procs.get(id); if (t) { t.write(String(text)); return { ok: true }; } return { ok: false }; }
  function endInput(id) { const st = live.get(id); if (st && st.proc) st.proc.endInput(); return { ok: !!st }; }
  function stop(id) { const st = live.get(id); if (!st) return { ok: false }; st.stopped = true; if (st.proc) st.proc.kill(); return { ok: true }; }
  function stopAll() { for (const [id] of live) stop(id); }

  /* the terminal: each command runs in the FutureSelf Code folder, with every downloaded tool and library available */
  let cwd = root; const procs = new Map();
  function shell(id, line, onOut) {
    line = String(line || '').trim();
    if (!line || line.length > 4000) return Promise.resolve({ ok: true, code: 0, cwd });
    const m = /^cd(?:\s+(.*))?$/i.exec(line);
    if (m) {
      const to = (m[1] || '').trim().replace(/^["']|["']$/g, '') || root;
      const t = path.resolve(cwd, to === '~' ? os.homedir() : to);
      if (fs.existsSync(t) && fs.statSync(t).isDirectory()) { cwd = t; return Promise.resolve({ ok: true, code: 0, cwd }); }
      onOut('The system cannot find the path: ' + to + '\n', 'err'); return Promise.resolve({ ok: true, code: 1, cwd });
    }
    // no time limit (dev servers keep running until Stop), and the input box types into the command (npm create ..., prompts)
    const pr = start({ cmd: WIN ? 'powershell.exe' : 'bash', args: WIN ? ['-NoLogo', '-NoProfile', '-Command', line] : ['-c', line], cwd, env: baseEnv() }, { timeoutSec: 0, onOut, keepStdin: true });
    procs.set(id, pr);
    return pr.promise.then((r) => { procs.delete(id); return { ok: true, code: r.code, cwd, timedOut: r.timedOut }; });
  }
  function kill(id) { const k = procs.get(id); if (k) { k.kill(); procs.delete(id); } if (live.has(id)) stop(id); return true; }

  function info() {
    const cat = catalogue();
    const ready = Object.keys(cat).filter((k) => cat[k] === 'ready');
    const installable = Object.keys(cat).filter((k) => cat[k] === 'installable');
    const ts = toolchain ? toolchain.status() : {};
    const my = mysql ? mysql.info() : { installed: false, running: false };
    return { ok: true, local: ready, installable, catalogue: cat, runtimes: ts, mysql: my, platform: process.platform, workspace: root, web: preview ? preview.root : '', cwd, browser: !!preview };
  }
  function installRuntime(kind) { if (!toolchain) return Promise.reject(new Error('not available')); return toolchain.ensure(kind, (pr) => emit(Object.assign({ phase: 'runtime' }, pr))).then(() => info()); }
  function addLibrary(lang, name) { if (!libs) return Promise.reject(new Error('not available')); return libs.add(lang, name, (pr) => emit(Object.assign({ phase: 'libs' }, pr))).then(() => ({ ok: true, list: libs.list(lang) })); }
  function listLibraries(lang) { return { ok: true, list: libs ? libs.list(lang) : [] }; }
  function mysqlStart() { if (!mysql) return Promise.reject(new Error('not available')); return mysql.ensure((pr) => emit(Object.assign({ phase: 'mysql' }, pr))).then((creds) => ({ ok: true, creds, info: mysql.info() })); }
  function mysqlInfo() { return { ok: true, info: mysql ? mysql.info() : { installed: false, running: false } }; }

  return { run, runLive, input, endInput, stop, stopAll, shell, kill, info, installRuntime, addLibrary, listLibraries, mysqlStart, mysqlInfo, guessPorts };
}
module.exports = { create, LANGS, guessPorts, javaInfo };

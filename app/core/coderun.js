'use strict';
/* Runs the student's code on THIS PC, and makes it "just work":
     - if the language's runtime is missing (Java, Python, Node, C/C++), FutureSelf downloads it once (core/toolchain.js)
     - it reads the code and fetches any library it needs, e.g. the MySQL connector (core/libs.js)
     - if the code uses MySQL and none is running, it starts a local MySQL server (core/mysqlserver.js)
   JavaScript always works (it uses the Node inside the app). Nothing leaves the PC.
   Also a small terminal: one command at a time inside the FutureSelf Code folder, with the downloaded tools on PATH. */
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const WIN = process.platform === 'win32';
const OUT_MAX = 200 * 1024;
const exe = (n) => (WIN ? n + '.exe' : n);

/* how to run each language: tools = alternatives that may exist on the PC, file = source name, steps = [ [tool, args...] ... ] ; {f} {d} {o} {cp} are replaced.
   manage = which runtime core/toolchain can install if the tool is missing ; libs = whether core/libs handles its packages. */
const LANGS = {
  javascript: { file: 'main.js', tools: ['@node'], steps: [['@node', '{f}']], manage: 'node', libs: 'node' },
  python: { file: 'main.py', tools: ['python3', 'python', 'py'], steps: [['@py', '{f}']], manage: 'python', libs: 'python' },
  java: { file: 'Main.java', tools: ['javac', 'java'], steps: [['javac', '-encoding', 'UTF-8', '-cp', '{cp}', '-d', '{d}', '{f}'], ['java', '-cp', '{cp}', '{main}']], manage: 'java', libs: 'java', java: true },
  c: { file: 'main.c', tools: ['gcc', 'clang', 'cc'], steps: [['@cc', '-O2', '-o', '{o}', '{f}', '-lm'], ['{o}']], manage: 'cc' },
  cpp: { file: 'main.cpp', tools: ['g++', 'clang++'], steps: [['@cxx', '-O2', '-std=c++17', '-o', '{o}', '{f}'], ['{o}']], manage: 'cc' },
  go: { file: 'main.go', tools: ['go'], steps: [['go', 'run', '{f}']] },
  rust: { file: 'main.rs', tools: ['rustc'], steps: [['rustc', '-O', '-o', '{o}', '{f}'], ['{o}']] },
  php: { file: 'main.php', tools: ['php'], steps: [['php', '{f}']] },
  ruby: { file: 'main.rb', tools: ['ruby'], steps: [['ruby', '{f}']] },
  bash: { file: 'main.sh', tools: ['bash'], steps: [['bash', '{f}']] },
  typescript: { file: 'main.ts', tools: ['tsx', 'ts-node'], steps: [['@ts', '{f}']], libs: 'node' },
  kotlin: { file: 'main.kt', tools: ['kotlinc', 'java'], steps: [['kotlinc', '{f}', '-include-runtime', '-d', '{d}/m.jar'], ['java', '-jar', '{d}/m.jar']] },
  swift: { file: 'main.swift', tools: ['swiftc'], steps: [['swiftc', '-O', '-o', '{o}', '{f}'], ['{o}']] },
  dart: { file: 'main.dart', tools: ['dart'], steps: [['dart', 'run', '{f}']] },
  r: { file: 'main.r', tools: ['Rscript'], steps: [['Rscript', '{f}']] },
  lua: { file: 'main.lua', tools: ['lua'], steps: [['lua', '{f}']] },
  perl: { file: 'main.pl', tools: ['perl'], steps: [['perl', '{f}']] }
};

const { which, spawnAny } = require('./toolchain');
/* the Java public class name and package, so Main.java is not assumed */
function javaInfo(code) {
  const pkg = (/^\s*package\s+([\w.]+)\s*;/m.exec(code) || [])[1] || '';
  const pub = (/public\s+(?:final\s+|abstract\s+)?class\s+(\w+)/.exec(code) || [])[1];
  const any = (/\bclass\s+(\w+)/.exec(code) || [])[1];
  const cls = pub || any || 'Main';
  return { cls, pkg, file: cls + '.java', main: (pkg ? pkg + '.' : '') + cls };
}

function create(opts) {
  const log = opts.log || (() => { });
  const root = path.join(opts.dir, 'code');
  fs.mkdirSync(root, { recursive: true });
  const toolchain = opts.toolchain;   // core/toolchain.create(...)
  const libs = opts.libs;             // core/libs.create(...)
  const mysql = opts.mysql;           // core/mysqlserver.create(...)
  const emit = opts.onProgress || (() => { });   // UI progress for downloads/installs

  const extraBins = () => (toolchain ? toolchain.binDirs() : []);
  const runEnv = (extra) => {
    const e = toolchain ? toolchain.env() : Object.assign({}, process.env);
    const mb = mysql && mysql.binDir && mysql.binDir();
    if (mb) { const k = Object.keys(e).find((x) => x.toUpperCase() === 'PATH') || 'PATH'; e[k] = mb + path.delimiter + (e[k] || ''); }
    if (extra && extra.pythonpath) e.PYTHONPATH = [extra.pythonpath, e.PYTHONPATH || ''].filter(Boolean).join(path.delimiter);
    if (extra && extra.nodepath) e.NODE_PATH = [extra.nodepath, e.NODE_PATH || ''].filter(Boolean).join(path.delimiter);
    return e;
  };

  function resolve(tool) {
    if (tool === '@node') return { cmd: process.execPath, env: { ELECTRON_RUN_AS_NODE: '1' } };
    if (tool === '@py') { for (const t of ['python3', 'python']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } const py = which('py'); return py ? { cmd: py, pre: ['-3'] } : null; }
    if (tool === '@cc') { for (const t of ['gcc', 'clang', 'cc']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } return null; }
    if (tool === '@cxx') { for (const t of ['g++', 'clang++']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } return null; }
    if (tool === '@ts') { for (const t of ['tsx', 'ts-node']) { const p = which(t, extraBins()); if (p) return { cmd: p }; } return null; }
    const p = which(tool, extraBins()); return p ? { cmd: p } : null;
  }
  /* is a language runnable right now (without downloading)? */
  function available(id) {
    const L = LANGS[id]; if (!L) return false;
    return L.steps.every((s) => s[0].charAt(0) === '{' || resolve(s[0]));
  }
  function detect(force) {
    const found = {};
    for (const id of Object.keys(LANGS)) if (available(id)) found[id] = true;
    return found;
  }
  /* which languages this PC can run, now or after a one-time download */
  function catalogue() {
    const out = {};
    for (const id of Object.keys(LANGS)) { const L = LANGS[id]; out[id] = available(id) ? 'ready' : (L.manage && toolchain && toolchain.status()[L.manage] && toolchain.status()[L.manage].canInstall ? 'installable' : 'server'); }
    return out;
  }

  const trim = (s) => (s.length > OUT_MAX ? s.slice(0, OUT_MAX) + '\n[output cut]' : s);
  function spawnLimited(cmd, args, o) {
    return new Promise((resolveP) => {
      let out = '', err = '', done = false, timedOut = false, ch;
      try { ch = spawnAny(cmd, args, { cwd: o.cwd, env: Object.assign({}, o.env || runEnv(), o.envAdd || {}), windowsHide: true, shell: !!o.shell }); } catch (e) { return resolveP({ code: 127, stdout: '', stderr: String(e.message), timedOut: false }); }
      const kill = () => { try { if (WIN) cp.spawn('taskkill', ['/pid', String(ch.pid), '/T', '/F'], { windowsHide: true }); else ch.kill('SIGKILL'); } catch (e) { } };
      const timer = setTimeout(() => { timedOut = true; kill(); }, (o.timeoutSec || 10) * 1000);
      if (o.onKill) o.onKill(kill);
      ch.stdout.on('data', (d) => { out += d; if (o.onOut) o.onOut(String(d), 'out'); if (out.length > OUT_MAX * 2) kill(); });
      ch.stderr.on('data', (d) => { err += d; if (o.onOut) o.onOut(String(d), 'err'); if (err.length > OUT_MAX * 2) kill(); });
      ch.on('error', (e) => { if (!done) { done = true; clearTimeout(timer); resolveP({ code: 127, stdout: trim(out), stderr: String(e.message), timedOut: false }); } });
      ch.on('close', (code) => { if (!done) { done = true; clearTimeout(timer); resolveP({ code: timedOut ? 124 : (code == null ? 1 : code), stdout: trim(out), stderr: trim(err), timedOut }); } });
      try { ch.stdin.on('error', () => { }); ch.stdin.end(o.stdin || ''); } catch (e) { }
    });
  }

  /* get everything the program needs ready: runtime, libraries, MySQL. Returns { classpath?, pythonpath?, nodepath? }. */
  async function prepareRun(id, code, onStep) {
    const L = LANGS[id];
    const p = (m) => { if (onStep) onStep(m); emit(m); };
    // 1. runtime: only when the language cannot run yet, or (Node) when npm is needed for a library
    const wantsLibs = !!(L.libs && libs && libs.detect(L.libs, code).length);
    const needRuntime = L.manage && toolchain && !toolchain.has(L.manage) && (!available(id) || (L.libs === 'node' && wantsLibs));
    if (needRuntime) {
      if (!toolchain.status()[L.manage].canInstall) throw new Error(langLabel(id) + ' is not installed on this PC.');
      await toolchain.ensure(L.manage, (pr) => p(Object.assign({ phase: 'runtime' }, pr)));
    }
    // 2. MySQL server, if the code talks to MySQL
    if (mysql && /jdbc:mysql|mysql\.connector|pymysql|MySQLdb|require\(['"]mysql2?['"]\)|from\s+mysql|createConnection|jdbc:mariadb/i.test(code) && /3306|localhost|127\.0\.0\.1|getenv|DB_|password/i.test(code)) {
      try { await mysql.ensure((pr) => p(Object.assign({ phase: 'mysql' }, pr))); } catch (e) { log('[code] mysql: ' + e.message); }
    }
    // 3. libraries
    let extra = {};
    if (L.libs && libs) { try { extra = await libs.prepare(L.libs, code, (pr) => p(Object.assign({ phase: 'libs' }, pr))); } catch (e) { throw new Error('A library could not be downloaded: ' + e.message); } }
    return extra;
  }
  const langLabel = (id) => ({ cpp: 'C++', c: 'C', csharp: 'C#', javascript: 'JavaScript', typescript: 'TypeScript' }[id] || id.charAt(0).toUpperCase() + id.slice(1));

  async function run(p) {
    const id = String((p && p.lang) || ''), L = LANGS[id];
    if (!L) return { ok: false, error: 'This platform cannot run that language.' };
    const code = String(p.code || ''); if (code.length > 200000) return { ok: false, error: 'That program is too large.' };
    let extra;
    try { extra = await prepareRun(id, code, p.onStep); }
    catch (e) { return { ok: false, error: e.message }; }
    if (!available(id)) return { ok: false, error: langLabel(id) + ' is not available on this PC yet.' };

    const ji = L.java ? javaInfo(code) : null;
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fsc-'));
    const f = path.join(dir, ji ? ji.file : L.file), o = path.join(dir, exe('prog'));
    const cp_ = [dir].concat((extra && extra.classpath) || []).join(path.delimiter);
    const t0 = Date.now();
    try {
      fs.writeFileSync(f, code);
      let last = null;
      for (let i = 0; i < L.steps.length; i++) {
        const st = L.steps[i], isRun = i === L.steps.length - 1;
        const r = st[0].charAt(0) === '{' ? { cmd: st[0].replace('{o}', o) } : resolve(st[0]);
        if (!r) return { ok: false, error: langLabel(id) + ' is not available on this PC.' };
        const args = (r.pre || []).concat(st.slice(1).map((a) => a.replace('{f}', f).replace('{d}', dir).replace('{o}', o).replace('{cp}', cp_).replace('{main}', ji ? ji.main : 'Main')));
        last = await spawnLimited(r.cmd, args, { cwd: dir, stdin: isRun ? String(p.stdin || '') : '', env: runEnv(extra), envAdd: r.env, timeoutSec: isRun ? Math.min(30, +p.timeoutSec || 12) : 90 });
        if (!isRun && last.code !== 0) return { ok: true, phase: 'compile', code: last.code, stdout: last.stdout, stderr: last.stderr || last.stdout, timedOut: last.timedOut, ms: Date.now() - t0 };
      }
      const hint = last.code !== 0 && extra && extra.warnings && extra.warnings.length ? '\n\n' + extra.warnings.join('\n') : '';
      return { ok: true, phase: 'run', code: last.code, stdout: last.stdout, stderr: (last.stderr || '') + hint, timedOut: last.timedOut, ms: Date.now() - t0 };
    } catch (e) { return { ok: false, error: e.message }; }
    finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { } }
  }

  /* the terminal: each command runs in the FutureSelf Code folder, with the downloaded tools on PATH. */
  let cwd = root; const procs = new Map();
  function shell(id, line, onOut) {
    line = String(line || '').trim();
    if (!line || line.length > 2000) return Promise.resolve({ ok: true, code: 0, cwd });
    const m = /^cd(?:\s+(.*))?$/i.exec(line);
    if (m) {
      const to = (m[1] || '').trim().replace(/^["']|["']$/g, '') || root;
      const t = path.resolve(cwd, to === '~' ? os.homedir() : to);
      if (fs.existsSync(t) && fs.statSync(t).isDirectory()) { cwd = t; return Promise.resolve({ ok: true, code: 0, cwd }); }
      onOut('The system cannot find the path: ' + to + '\n', 'err'); return Promise.resolve({ ok: true, code: 1, cwd });
    }
    return spawnLimited(WIN ? 'powershell.exe' : 'bash', WIN ? ['-NoLogo', '-NoProfile', '-NonInteractive', '-Command', line] : ['-c', line], { cwd, timeoutSec: 300, onOut, onKill: (k) => procs.set(id, k) }).then((r) => { procs.delete(id); return { ok: true, code: r.code, cwd, timedOut: r.timedOut }; });
  }
  function kill(id) { const k = procs.get(id); if (k) { k(); procs.delete(id); } return true; }

  function info() {
    const cat = catalogue();
    const ready = Object.keys(cat).filter((k) => cat[k] === 'ready');
    const installable = Object.keys(cat).filter((k) => cat[k] === 'installable');
    const ts = toolchain ? toolchain.status() : {};
    const my = mysql ? mysql.info() : { installed: false, running: false };
    return { ok: true, local: ready, installable, catalogue: cat, runtimes: ts, mysql: my, platform: process.platform, workspace: root, cwd };
  }

  /* install a runtime on request (from the UI) */
  function installRuntime(kind) { if (!toolchain) return Promise.reject(new Error('not available')); return toolchain.ensure(kind, (pr) => emit(Object.assign({ phase: 'runtime' }, pr))).then(() => info()); }
  /* add a library on request */
  function addLibrary(lang, name) { if (!libs) return Promise.reject(new Error('not available')); return libs.add(lang, name, (pr) => emit(Object.assign({ phase: 'libs' }, pr))).then(() => ({ ok: true, list: libs.list(lang) })); }
  function listLibraries(lang) { return { ok: true, list: libs ? libs.list(lang) : [] }; }
  /* start/show the MySQL server on request */
  function mysqlStart() { if (!mysql) return Promise.reject(new Error('not available')); return mysql.ensure((pr) => emit(Object.assign({ phase: 'mysql' }, pr))).then((creds) => ({ ok: true, creds, info: mysql.info() })); }
  function mysqlInfo() { return { ok: true, info: mysql ? mysql.info() : { installed: false, running: false } }; }

  return { run, shell, kill, info, detect, installRuntime, addLibrary, listLibraries, mysqlStart, mysqlInfo };
}
module.exports = { create, LANGS };

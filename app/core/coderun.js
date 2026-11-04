'use strict';
/* Runs the student's code on THIS PC. JavaScript always works (it uses the Node that is inside the app);
   Python, Java, C, C++, Go, Rust, PHP, Ruby ... work when that compiler or interpreter is installed on the PC. Nothing leaves the PC.
   Also a small terminal: one command at a time inside the FutureSelf Code folder. */
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const WIN = process.platform === 'win32';
const OUT_MAX = 200 * 1024;
const exe = (n) => (WIN ? n + '.exe' : n);

/* how to run each language: tools = alternatives that may exist on the PC, file = source name, steps = [ [tool, args...] ... ] ; {f} {d} {o} are replaced */
const LANGS = {
  javascript: { file: 'main.js', tools: ['@node'], steps: [['@node', '{f}']] },
  python: { file: 'main.py', tools: ['python3', 'python', 'py'], steps: [['@py', '{f}']] },
  java: { file: 'Main.java', tools: ['javac', 'java'], steps: [['javac', '-encoding', 'UTF-8', '{f}'], ['java', '-cp', '{d}', 'Main']] },
  c: { file: 'main.c', tools: ['gcc', 'clang', 'cc'], steps: [['@cc', '-O2', '-o', '{o}', '{f}', '-lm'], ['{o}']] },
  cpp: { file: 'main.cpp', tools: ['g++', 'clang++'], steps: [['@cxx', '-O2', '-std=c++17', '-o', '{o}', '{f}'], ['{o}']] },
  go: { file: 'main.go', tools: ['go'], steps: [['go', 'run', '{f}']] },
  rust: { file: 'main.rs', tools: ['rustc'], steps: [['rustc', '-O', '-o', '{o}', '{f}'], ['{o}']] },
  php: { file: 'main.php', tools: ['php'], steps: [['php', '{f}']] },
  ruby: { file: 'main.rb', tools: ['ruby'], steps: [['ruby', '{f}']] },
  bash: { file: 'main.sh', tools: ['bash'], steps: [['bash', '{f}']] },
  typescript: { file: 'main.ts', tools: ['tsx', 'ts-node'], steps: [['@ts', '{f}']] },
  kotlin: { file: 'main.kt', tools: ['kotlinc', 'java'], steps: [['kotlinc', '{f}', '-include-runtime', '-d', '{d}/m.jar'], ['java', '-jar', '{d}/m.jar']] },
  swift: { file: 'main.swift', tools: ['swiftc'], steps: [['swiftc', '-O', '-o', '{o}', '{f}'], ['{o}']] },
  dart: { file: 'main.dart', tools: ['dart'], steps: [['dart', 'run', '{f}']] },
  r: { file: 'main.r', tools: ['Rscript'], steps: [['Rscript', '{f}']] },
  lua: { file: 'main.lua', tools: ['lua'], steps: [['lua', '{f}']] },
  perl: { file: 'main.pl', tools: ['perl'], steps: [['perl', '{f}']] }
};

function which(name) {
  if (name === '@node') return process.execPath;
  try {
    const r = cp.spawnSync(WIN ? 'where' : 'which', [name], { encoding: 'utf8', timeout: 4000, windowsHide: true });
    if (r.status === 0) return String(r.stdout).split(/\r?\n/)[0].trim() || null;
  } catch (e) { /* not found */ }
  return null;
}
function create(opts) {
  const log = opts.log || (() => { }), root = path.join(opts.dir, 'code');
  fs.mkdirSync(root, { recursive: true });
  let found = null;
  function resolve(tool, lang) {
    if (tool === '@node') return { cmd: process.execPath, env: { ELECTRON_RUN_AS_NODE: '1' } };
    if (tool === '@py') { for (const t of ['python3', 'python']) { const p = which(t); if (p && !/WindowsApps/i.test(p)) return { cmd: p }; } const py = which('py'); return py ? { cmd: py, pre: ['-3'] } : null; }
    if (tool === '@cc') { for (const t of ['gcc', 'clang', 'cc']) { const p = which(t); if (p) return { cmd: p }; } return null; }
    if (tool === '@cxx') { for (const t of ['g++', 'clang++']) { const p = which(t); if (p) return { cmd: p }; } return null; }
    if (tool === '@ts') { for (const t of ['tsx', 'ts-node']) { const p = which(t); if (p) return { cmd: p }; } return null; }
    const p = which(tool); return p ? { cmd: p } : null;
  }
  function detect(force) {
    if (found && !force) return found;
    found = {};
    for (const id of Object.keys(LANGS)) {
      const L = LANGS[id], ok = L.steps.every((s) => s[0].charAt(0) === '{' || resolve(s[0], id));
      if (ok) found[id] = true;
    }
    return found;
  }
  const trim = (s) => (s.length > OUT_MAX ? s.slice(0, OUT_MAX) + '\n[output cut]' : s);
  /* one process, with a time limit and an output cap */
  function spawnLimited(cmd, args, o) {
    return new Promise((resolveP) => {
      let out = '', err = '', done = false, timedOut = false;
      let ch;
      try { ch = cp.spawn(cmd, args, { cwd: o.cwd, env: Object.assign({}, process.env, o.env || {}), windowsHide: true, shell: !!o.shell }); } catch (e) { return resolveP({ code: 127, stdout: '', stderr: String(e.message), timedOut: false }); }
      const kill = () => { try { if (WIN) cp.spawn('taskkill', ['/pid', String(ch.pid), '/T', '/F'], { windowsHide: true }); else ch.kill('SIGKILL'); } catch (e) { /* gone */ } };
      const timer = setTimeout(() => { timedOut = true; kill(); }, (o.timeoutSec || 10) * 1000);
      if (o.onKill) o.onKill(kill);
      ch.stdout.on('data', (d) => { out += d; if (o.onOut) o.onOut(String(d), 'out'); if (out.length > OUT_MAX * 2) { kill(); } });
      ch.stderr.on('data', (d) => { err += d; if (o.onOut) o.onOut(String(d), 'err'); if (err.length > OUT_MAX * 2) kill(); });
      ch.on('error', (e) => { if (!done) { done = true; clearTimeout(timer); resolveP({ code: 127, stdout: trim(out), stderr: String(e.message), timedOut: false }); } });
      ch.on('close', (code) => { if (!done) { done = true; clearTimeout(timer); resolveP({ code: timedOut ? 124 : (code == null ? 1 : code), stdout: trim(out), stderr: trim(err), timedOut }); } });
      try { ch.stdin.on('error', () => { }); ch.stdin.end(o.stdin || ''); } catch (e) { /* ignore */ }
    });
  }
  async function run(p) {
    const id = String(p && p.lang || ''), L = LANGS[id];
    if (!L) return { ok: false, error: 'This PC cannot run that language here.' };
    if (!detect()[id]) return { ok: false, error: 'This language is not installed on this PC.' };
    const code = String(p.code || ''); if (code.length > 200000) return { ok: false, error: 'That program is too large.' };
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fsc-')), f = path.join(dir, L.file), o = path.join(dir, exe('prog'));
    const t0 = Date.now();
    try {
      fs.writeFileSync(f, code);
      let last = null;
      for (let i = 0; i < L.steps.length; i++) {
        const st = L.steps[i], isRun = i === L.steps.length - 1, r = st[0].charAt(0) === '{' ? { cmd: st[0].replace('{o}', o) } : resolve(st[0], id);
        const args = (r.pre || []).concat(st.slice(1).map((a) => a.replace('{f}', f).replace('{d}', dir).replace('{o}', o)));
        last = await spawnLimited(r.cmd, args, { cwd: dir, stdin: isRun ? String(p.stdin || '') : '', env: r.env, timeoutSec: isRun ? Math.min(30, +p.timeoutSec || 10) : 60 });
        if (!isRun && last.code !== 0) return { ok: true, phase: 'compile', code: last.code, stdout: last.stdout, stderr: last.stderr || last.stdout, timedOut: last.timedOut, ms: Date.now() - t0 };
      }
      return { ok: true, phase: 'run', code: last.code, stdout: last.stdout, stderr: last.stderr, timedOut: last.timedOut, ms: Date.now() - t0 };
    } finally { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { /* ignore */ } }
  }

  /* the terminal: each command runs in the FutureSelf Code folder; "cd" is remembered */
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
  function info() { return { ok: true, local: Object.keys(detect()), platform: process.platform, workspace: root, cwd }; }
  return { run, shell, kill, info, detect };
}
module.exports = { create, LANGS };

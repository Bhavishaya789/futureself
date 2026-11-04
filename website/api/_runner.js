'use strict';
/* Runs a program in a sandbox for the apps. Vercel itself cannot run C, Java, Go ... so this talks to a CODE RUNNER SERVICE you choose:
     PISTON_URL   = https://your-piston-host            (Piston: free and open source, self-host with Docker; also PISTON_KEY if you protect it)
   or JUDGE0_URL  = https://your-judge0-host            (Judge0 CE; for RapidAPI also JUDGE0_KEY and JUDGE0_HOST)
   Without either, the server cannot run code and the apps fall back to running code on the device itself (JavaScript, Python, and on a PC whatever is installed). */
const L = require('./_lib');

/* id = what the apps send; piston = Piston language name; j0 = Judge0 language id */
const LANGS = [
  { id: 'python', name: 'Python', piston: 'python', j0: 71, file: 'main.py' },
  { id: 'javascript', name: 'JavaScript (Node)', piston: 'javascript', j0: 63, file: 'main.js' },
  { id: 'typescript', name: 'TypeScript', piston: 'typescript', j0: 74, file: 'main.ts' },
  { id: 'java', name: 'Java', piston: 'java', j0: 62, file: 'Main.java' },
  { id: 'c', name: 'C', piston: 'c', j0: 50, file: 'main.c' },
  { id: 'cpp', name: 'C++', piston: 'c++', j0: 54, file: 'main.cpp' },
  { id: 'csharp', name: 'C#', piston: 'csharp', j0: 51, file: 'Main.cs' },
  { id: 'go', name: 'Go', piston: 'go', j0: 60, file: 'main.go' },
  { id: 'rust', name: 'Rust', piston: 'rust', j0: 73, file: 'main.rs' },
  { id: 'kotlin', name: 'Kotlin', piston: 'kotlin', j0: 78, file: 'main.kt' },
  { id: 'swift', name: 'Swift', piston: 'swift', j0: 83, file: 'main.swift' },
  { id: 'php', name: 'PHP', piston: 'php', j0: 68, file: 'main.php' },
  { id: 'ruby', name: 'Ruby', piston: 'ruby', j0: 72, file: 'main.rb' },
  { id: 'dart', name: 'Dart', piston: 'dart', j0: 90, file: 'main.dart' },
  { id: 'r', name: 'R', piston: 'rscript', j0: 80, file: 'main.r' },
  { id: 'bash', name: 'Bash', piston: 'bash', j0: 46, file: 'main.sh' },
  { id: 'sql', name: 'SQL (SQLite)', piston: 'sqlite3', j0: 82, file: 'main.sql' },
  { id: 'lua', name: 'Lua', piston: 'lua', j0: 64, file: 'main.lua' },
  { id: 'perl', name: 'Perl', piston: 'perl', j0: 85, file: 'main.pl' },
  { id: 'haskell', name: 'Haskell', piston: 'haskell', j0: 61, file: 'main.hs' },
  { id: 'scala', name: 'Scala', piston: 'scala', j0: 81, file: 'main.scala' }
];
const byId = (id) => LANGS.find((l) => l.id === id);
const configured = () => !!(process.env.PISTON_URL || process.env.JUDGE0_URL);
const cap = (s) => String(s == null ? '' : s).slice(0, 60000);
const base = (u) => String(u).replace(/\/+$/, '');

/* -> { ok, stdout, stderr, code, timeMs, phase: 'compile'|'run' } ; throws HttpErr when no runner is set up or it is down */
async function execute(langId, code, stdin, opts) {
  const lang = byId(langId); if (!lang) L.fail(400, 'That language is not supported.');
  if (!configured()) L.fail(503, 'The code runner is not set up on the server (PISTON_URL or JUDGE0_URL is missing).', { noRunner: true });
  const f = global.__FS_FETCH || fetch, timeout = Math.max(1, Math.min(10, (opts && opts.timeoutSec) || 5));
  try {
    if (process.env.PISTON_URL) {
      const r = await f(base(process.env.PISTON_URL) + '/api/v2/execute', { method: 'POST', headers: Object.assign({ 'content-type': 'application/json' }, process.env.PISTON_KEY ? { authorization: process.env.PISTON_KEY } : {}), body: JSON.stringify({ language: lang.piston, version: '*', files: [{ name: lang.file, content: String(code) }], stdin: String(stdin || ''), run_timeout: timeout * 1000, compile_timeout: 15000, run_memory_limit: 256 * 1024 * 1024 }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) L.fail(502, 'The code runner refused the request' + (j && j.message ? ': ' + String(j.message).slice(0, 120) : '.'));
      const c = j.compile || {}, u = j.run || {};
      if (c.code) return { ok: true, stdout: cap(c.stdout), stderr: cap(c.stderr || c.output), code: c.code, timeMs: 0, phase: 'compile' };
      return { ok: true, stdout: cap(u.stdout), stderr: cap(u.stderr), code: u.code == null ? (u.signal ? 124 : 0) : u.code, timeMs: 0, phase: 'run', timedOut: u.signal === 'SIGKILL' && !u.stderr };
    }
    const hdr = { 'content-type': 'application/json' }; if (process.env.JUDGE0_KEY) { hdr['X-RapidAPI-Key'] = process.env.JUDGE0_KEY; hdr['X-RapidAPI-Host'] = process.env.JUDGE0_HOST || 'judge0-ce.p.rapidapi.com'; }
    const r = await f(base(process.env.JUDGE0_URL) + '/submissions?base64_encoded=false&wait=true', { method: 'POST', headers: hdr, body: JSON.stringify({ language_id: lang.j0, source_code: String(code), stdin: String(stdin || ''), cpu_time_limit: timeout, memory_limit: 262144 }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) L.fail(502, 'The code runner refused the request.');
    const st = (j.status && j.status.id) || 0;       // 3 accepted, 5 time limit, 6 compile error, 7-12 runtime errors
    if (st === 6) return { ok: true, stdout: '', stderr: cap(j.compile_output), code: 1, timeMs: 0, phase: 'compile' };
    return { ok: true, stdout: cap(j.stdout), stderr: cap(j.stderr || j.message), code: st === 3 || st === 4 ? 0 : (st === 5 ? 124 : 1), timeMs: Math.round((+j.time || 0) * 1000), phase: 'run', timedOut: st === 5 };
  } catch (e) { if (e && e.status) throw e; L.fail(502, 'Could not reach the code runner.'); }
}
const same = (a, b) => String(a).replace(/\r/g, '').split('\n').map((x) => x.replace(/\s+$/, '')).join('\n').trim() === String(b).replace(/\r/g, '').split('\n').map((x) => x.replace(/\s+$/, '')).join('\n').trim();
module.exports = { LANGS, byId, configured, execute, same };

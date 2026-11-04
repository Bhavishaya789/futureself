'use strict';
/* POST /api/run { a:'langs' } -> which languages the server runner offers
   POST /api/run { a:'run', language, code, stdin } -> { stdout, stderr, code, phase }
   Used by the coding platform on any device (phone, PC). Needs sign-in and a code runner (see _runner.js). */
const R = require('./_runner');
const L = require('./_lib');
const { fail } = L;

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  await L.limit(req, 'run', 120, 60);
  const { d, user } = await L.authed(req);
  if (b.a === 'langs') return { ok: true, runner: R.configured(), languages: R.LANGS.map((l) => ({ id: l.id, name: l.name })) };
  if (b.a !== 'run') fail(400, 'Unknown action.');
  const code = String(b.code || ''), stdin = String(b.stdin || '');
  if (!code.trim()) fail(400, 'Write some code first.');
  if (code.length > 60000 || stdin.length > 100000) fail(413, 'That program or input is too large.');
  const now = Date.now(), rate = user.rq && user.rq.resetAt > now ? user.rq : { n: 0, resetAt: now + 3600e3 };
  if (rate.n >= 300) fail(429, 'You ran code a lot this hour (300). Take a short break, or run it on your PC.');
  await d.users.updateOne({ _id: user._id }, { $set: { rq: { n: rate.n + 1, resetAt: rate.resetAt } } });
  const r = await R.execute(String(b.language || ''), code, stdin, { timeoutSec: 6 });
  return { ok: true, stdout: r.stdout, stderr: r.stderr, code: r.code, phase: r.phase, timedOut: !!r.timedOut };
});

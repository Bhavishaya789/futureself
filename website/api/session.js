'use strict';
/* The PC pushes "a study session is running" here; the phone asks for it. Only the signed-in account can see its own state. */
const L = require('./_lib');
const { fail } = L;

module.exports = L.wrap(async (req, b) => {
  const { d, user } = await L.authed(req);
  const uid = String(user._id);
  if (req.method === 'POST') {
    const s = b && b.active ? { active: true, subject: String(b.subject || '').slice(0, 80), topicId: String(b.topicId || '').slice(0, 80), lock: ['gentle', 'focus', 'strict'].includes(b.lock) ? b.lock : 'focus', endsAt: Math.max(0, +b.endsAt || 0), startedAt: Math.max(0, +b.startedAt || 0), paused: !!b.paused } : { active: false };
    await d.sessions.updateOne({ uid }, { $set: { uid, state: s, updatedAt: Date.now() } }, { upsert: true });
    return { ok: true };
  }
  if (req.method !== 'GET') fail(405, 'Use GET or POST.');
  const row = await d.sessions.findOne({ uid }), s = (row && row.state) || { active: false }, now = Date.now();
  // if the PC vanished (crash, power cut) the lock still ends at the time the PC announced, plus 2 minutes
  const alive = !!s.active && (s.endsAt ? now < s.endsAt + 120000 : row && now - row.updatedAt < 120000);
  const restrict = !!(alive && !s.paused && s.lock !== 'gentle');
  return { v: 1, now, active: !!alive, restrict, paused: !!s.paused, lock: s.lock || null, subject: s.subject || '', topicId: s.topicId || '', endsAt: s.endsAt || 0, startedAt: s.startedAt || 0 };
});

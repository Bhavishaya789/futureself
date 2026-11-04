'use strict';
/* Challenge a friend on a topic.
   POST /api/challenge { a: 'list'|'create'|'decline'|'start'|'resume'|'save'|'leave'|'submit'|'get', ... }

   - the challenger sends the questions (taken from the lesson quiz in the app); the SERVER keeps the answers and does all the marking
   - both students get exactly the same questions, in the same order
   - each student has ONE attempt: 'start' works once; a single 'resume' is allowed (app crash), after that the attempt is closed
   - the timer is kept by the server: an answer sheet is only accepted until the deadline (+ a few seconds for the network)
   - the correct answers and explanations are shown only when BOTH students have finished, so nobody can pass them on
   - points: 10 per correct answer + a time bonus (more for finishing quicker) + 10 to whoever finished first (fastest time) + 20 to the winner
   Everything is stored in the existing "social" collection (key 'c:<id>'). */
const crypto = require('crypto');
const L = require('./_lib');
const { fail } = L;

const INVITE_MS = 48 * 3600e3, GRACE_MS = 20000, SEC_PER_Q = 50, MIN_Q = 4, MAX_Q = 15;
const PT_CORRECT = 10, PT_TIME_MAX = 5, PT_FIRST = 10, PT_WIN = 20;
const str = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, n);
const id16 = () => crypto.randomBytes(8).toString('hex');

function cleanQs(raw) {
  if (!Array.isArray(raw) || raw.length < MIN_Q || raw.length > MAX_Q) fail(400, 'A challenge needs between ' + MIN_Q + ' and ' + MAX_Q + ' questions.');
  return raw.map((x) => {
    const o = Array.isArray(x && x.o) ? x.o.slice(0, 5).map((s) => str(s, 220)) : [];
    const a = Number.isInteger(x && x.a) ? x.a : -1;
    const q = str(x && x.q, 500);
    if (!q || o.length < 2 || o.some((s) => !s) || a < 0 || a >= o.length) fail(400, 'One of the questions is not valid.');
    return { q, o, a, why: str(x && x.why, 600) };
  });
}
const limitSec = (n) => Math.max(120, Math.min(900, n * SEC_PER_Q));
const deadline = (c, p) => p.startedAt + c.limitSec * 1000;
const key = (id) => 'c:' + String(id).replace(/[^a-f0-9]/g, '').slice(0, 16);
const pk = (uid) => 'players.' + uid;

async function load(d, id) {
  const c = await d.social.findOne({ key: key(id) });
  if (!c) fail(404, 'That challenge was not found.');
  return c;
}
function mustBeIn(c, uid) { if (!(c.uids || []).includes(uid)) fail(403, 'This challenge is not yours.'); }
const otherOf = (c, uid) => c.uids.find((x) => x !== uid);
const me = (c, uid) => (c.players || {})[uid] || null;

/* mark an answer sheet: how many right, and how long it took */
function grade(c, answers) {
  let right = 0;
  c.qs.forEach((q, i) => { if (answers && answers[i] === q.a) right++; });
  return right;
}
async function closeAttempt(d, c, uid, answers, now, why) {
  const p = me(c, uid); if (!p || p.closed) return c;
  const merged = c.qs.map((_, i) => { const v = answers && answers[i] != null ? answers[i] : (p.answers || [])[i]; return Number.isInteger(v) ? v : null; });
  const dl = deadline(c, p), took = Math.max(1000, Math.min(now, dl) - p.startedAt);
  const set = {}; set[pk(uid)] = Object.assign({}, p, { answers: merged, closed: true, correct: grade(c, merged), timeMs: took, endedAt: Math.min(now, dl), how: why });
  const r = await d.social.updateOne({ key: c.key, ['players.' + uid + '.closed']: { $ne: true } }, { $set: set });
  void r;
  return d.social.findOne({ key: c.key });
}

function scoreOf(c, uid) {
  const p = me(c, uid); if (!p || !p.closed) return null;
  const base = p.correct * PT_CORRECT;
  const frac = Math.max(0, 1 - p.timeMs / (c.limitSec * 1000));
  const bonus = p.correct > 0 ? Math.round(p.correct * PT_TIME_MAX * frac) : 0;
  return { correct: p.correct, base, timeBonus: bonus, total: base + bonus, timeMs: p.timeMs };
}

/* work out the winner once everything is decided; awards the points exactly once */
async function settle(d, c, now) {
  if (c.status === 'done' || c.status === 'declined' || c.status === 'expired') return c;
  // an attempt that ran out of time (or whose app disappeared) is closed with the answers saved so far
  for (const uid of c.uids) {
    const p = me(c, uid);
    if (p && !p.closed && now > deadline(c, p) + GRACE_MS) c = await closeAttempt(d, c, uid, null, now, 'timeout');
  }
  const [a, b] = c.uids, pa = me(c, a), pb = me(c, b);
  const bothClosed = pa && pa.closed && pb && pb.closed;
  const lapsed = now > c.expiresAt;
  let res = null;
  if (bothClosed) {
    const sa = scoreOf(c, a), sb = scoreOf(c, b);
    const points = { [a]: Object.assign({ first: 0, win: 0 }, sa), [b]: Object.assign({ first: 0, win: 0 }, sb) };
    let faster = null;
    if (sa.correct > 0 && sb.correct > 0 && sa.timeMs !== sb.timeMs) faster = sa.timeMs < sb.timeMs ? a : b;
    else if (sa.correct > 0 && sb.correct === 0) faster = a; else if (sb.correct > 0 && sa.correct === 0) faster = b;
    if (faster) points[faster].first = PT_FIRST;
    const ta = sa.total, tb = sb.total;
    let winner = null;
    if (ta !== tb) winner = ta > tb ? a : b; else if (sa.timeMs !== sb.timeMs) winner = sa.timeMs < sb.timeMs ? a : b;
    if (winner) points[winner].win = PT_WIN;
    [a, b].forEach((u) => { points[u].total += points[u].first + points[u].win; });
    res = { winner, draw: !winner, reason: 'played', faster, points };
  } else if (lapsed && ((pa && pa.closed) || (pb && pb.closed))) {
    const w = pa && pa.closed ? a : b, l = w === a ? b : a, sw = scoreOf(c, w);
    res = { winner: w, draw: false, reason: 'walkover', faster: null, points: { [w]: Object.assign({ first: 0, win: 0 }, sw, { win: PT_WIN, total: sw.total + PT_WIN }), [l]: { correct: 0, base: 0, timeBonus: 0, first: 0, win: 0, total: 0, timeMs: 0 } } };
  } else if (lapsed && !pa && !pb) {
    await d.social.updateOne({ key: c.key, status: { $ne: 'done' } }, { $set: { status: 'expired' } });
    return d.social.findOne({ key: c.key });
  }
  if (!res) return c;
  const upd = await d.social.updateOne({ key: c.key, status: { $nin: ['done', 'declined', 'expired'] } }, { $set: { status: 'done', result: res, doneAt: now } });
  if (upd && upd.modifiedCount === 0) return d.social.findOne({ key: c.key });   // the other student's request finished it first
  for (const u of c.uids) {
    const pt = res.points[u] || { total: 0 };
    await d.social.updateOne({ key: 'u:' + u }, { $inc: { cPts: pt.total, cPlayed: 1, cWins: res.winner === u ? 1 : 0, cLosses: res.winner && res.winner !== u ? 1 : 0 } });
  }
  return d.social.findOne({ key: c.key });
}

const brief = (c, uid) => {
  const o = otherOf(c, uid), p = me(c, uid), po = me(c, o), r = c.result || null;
  const names = c.names || {};
  return {
    id: c.id, status: c.status, topic: c.topic, n: c.qs.length, limitSec: c.limitSec, createdAt: c.createdAt, expiresAt: c.expiresAt,
    from: { id: c.uids[0], name: names[c.uids[0]] }, to: { id: c.uids[1], name: names[c.uids[1]] }, iAmChallenger: c.uids[0] === uid,
    friend: { id: o, name: names[o] || 'Friend' },
    mine: p ? { started: true, closed: !!p.closed, correct: p.closed ? p.correct : null, timeMs: p.closed ? p.timeMs : null, deadline: deadline(c, p) } : { started: false, closed: false },
    theirs: { started: !!po, closed: !!(po && po.closed) },
    result: r ? { winner: r.winner, draw: r.draw, reason: r.reason, faster: r.faster, points: r.points, winnerName: r.winner ? names[r.winner] : '' } : null
  };
};
const publicQs = (c) => c.qs.map((q) => ({ q: q.q, o: q.o }));

const actions = {
  async list(ctx) {
    const { d, uid, now } = ctx;
    const rows = await d.social.find({ uids: uid, key: /^c:/ }).sort({ createdAt: -1 }).limit(30).toArray();
    const out = [];
    for (let c of rows) { c = await settle(d, c, now); out.push(brief(c, uid)); }
    const meRow = await d.social.findOne({ key: 'u:' + uid }) || {};
    return { ok: true, now, challenges: out, stats: { points: meRow.cPts || 0, played: meRow.cPlayed || 0, wins: meRow.cWins || 0, losses: meRow.cLosses || 0 } };
  },

  async create(ctx, b) {
    const { d, uid, user, now } = ctx;
    const fid = str(b.friendId, 64);
    const mine = await d.social.findOne({ key: 'u:' + uid });
    if (!mine || !(mine.friends || []).includes(fid)) fail(403, 'You can only challenge a friend you have added.');
    const fr = await d.social.findOne({ key: 'u:' + fid }); if (!fr) fail(404, 'That friend was not found.');
    const qs = cleanQs(b.questions);
    if (JSON.stringify(qs).length > 70000) fail(400, 'That challenge is too large.');
    const open = await d.social.find({ uids: uid, key: /^c:/, status: { $in: ['pending', 'active'] } }).limit(20).toArray();
    if (open.length >= 8) fail(429, 'You have 8 challenges open already. Finish one first.');
    if (open.some((c) => c.uids.includes(fid) && c.topic && c.topic.lessonId === str(b.lessonId, 80) && c.topic.subjectId === str(b.topicId, 80))) fail(409, 'You already have an open challenge with this friend on this topic.');
    const id = id16();
    const doc = {
      key: 'c:' + id, id, uids: [uid, fid], names: { [uid]: user.name || 'Student', [fid]: fr.name || 'Student' },
      topic: { subjectId: str(b.topicId, 80), lessonId: str(b.lessonId, 80), title: str(b.title, 120) || 'Topic', subject: str(b.subject, 80) },
      qs, limitSec: limitSec(qs.length), createdAt: now, expiresAt: now + INVITE_MS, status: 'pending', players: {}
    };
    await d.social.updateOne({ key: doc.key }, { $set: doc }, { upsert: true });
    return { ok: true, id, n: qs.length, limitSec: doc.limitSec };
  },

  async decline(ctx, b) {
    const { d, uid } = ctx, c = await load(d, b.id); mustBeIn(c, uid);
    if (c.uids[1] !== uid) fail(400, 'Only the friend who was challenged can decline.');
    if (!['pending', 'active'].includes(c.status) || me(c, uid)) fail(409, 'This challenge can no longer be declined.');
    await d.social.updateOne({ key: c.key, status: { $in: ['pending', 'active'] } }, { $set: { status: 'declined' } });
    return { ok: true };
  },

  async start(ctx, b) {
    const { d, uid, now } = ctx, c0 = await load(d, b.id); mustBeIn(c0, uid);
    const c = await settle(d, c0, now);
    if (c.status === 'done' || c.status === 'declined' || c.status === 'expired') fail(409, 'This challenge is already finished.');
    if (now > c.expiresAt) fail(409, 'This challenge has expired.');
    const p = me(c, uid);
    if (p) fail(409, p.closed ? 'You have already played this challenge. Each challenge can be attempted only once.' : 'You have already started this challenge. Use Resume.', { used: true });
    const ans = c.qs.map(() => null);
    const r = await d.social.updateOne({ key: c.key, ['players.' + uid]: { $exists: false } }, { $set: { [pk(uid)]: { startedAt: now, answers: ans, leaves: 0, resumes: 0, closed: false }, status: 'active' } });
    if (r && r.matchedCount === 0) fail(409, 'You have already started this challenge.', { used: true });
    return { ok: true, now, startedAt: now, deadline: now + c.limitSec * 1000, limitSec: c.limitSec, topic: c.topic, questions: publicQs(c), answers: ans };
  },

  async resume(ctx, b) {
    const { d, uid, now } = ctx, c0 = await load(d, b.id); mustBeIn(c0, uid);
    const c = await settle(d, c0, now), p = me(c, uid);
    if (!p) fail(409, 'You have not started this challenge.');
    if (p.closed) fail(409, 'Your attempt is already closed.', { used: true });
    if (now > deadline(c, p)) { await closeAttempt(d, c, uid, null, now, 'timeout'); fail(409, 'Your time ran out. Your saved answers were submitted.', { used: true }); }
    if ((p.resumes || 0) >= 1) { await closeAttempt(d, c, uid, null, now, 'left'); fail(409, 'You left the challenge twice, so it was submitted with your saved answers.', { used: true }); }
    await d.social.updateOne({ key: c.key }, { $set: { [pk(uid) + '.resumes']: (p.resumes || 0) + 1, [pk(uid) + '.leaves']: (p.leaves || 0) + 1 } });
    return { ok: true, now, deadline: deadline(c, p), limitSec: c.limitSec, topic: c.topic, questions: publicQs(c), answers: p.answers, leaves: (p.leaves || 0) + 1 };
  },

  async save(ctx, b) {
    const { d, uid, now } = ctx, c = await load(d, b.id); mustBeIn(c, uid);
    const p = me(c, uid); if (!p || p.closed) fail(409, 'Your attempt is closed.');
    if (now > deadline(c, p) + GRACE_MS) fail(409, 'Time is up.');
    const i = Number.isInteger(b.i) ? b.i : -1, v = b.ans === null ? null : (Number.isInteger(b.ans) ? b.ans : -1);
    if (i < 0 || i >= c.qs.length || v === -1 || (v !== null && (v < 0 || v >= c.qs[i].o.length))) fail(400, 'Bad answer.');
    await d.social.updateOne({ key: c.key }, { $set: { [pk(uid) + '.answers.' + i]: v } });
    return { ok: true, now };
  },

  /* the student switched away from the challenge screen; three times and it is submitted for them */
  async leave(ctx, b) {
    const { d, uid, now } = ctx, c = await load(d, b.id); mustBeIn(c, uid);
    const p = me(c, uid); if (!p || p.closed) return { ok: true, closed: !!(p && p.closed), leaves: p ? p.leaves : 0 };
    const n = (p.leaves || 0) + 1;
    await d.social.updateOne({ key: c.key }, { $set: { [pk(uid) + '.leaves']: n } });
    if (n >= 3) { const c2 = await closeAttempt(d, c, uid, null, now, 'left'); await settle(d, c2, now); return { ok: true, closed: true, leaves: n }; }
    return { ok: true, closed: false, leaves: n };
  },

  async submit(ctx, b) {
    const { d, uid, now } = ctx, c = await load(d, b.id); mustBeIn(c, uid);
    const p = me(c, uid); if (!p) fail(409, 'You have not started this challenge.');
    if (p.closed) return actions.get(ctx, b);   // sending twice never counts twice
    let answers = null;
    if (Array.isArray(b.answers) && b.answers.length === c.qs.length && now <= deadline(c, p) + GRACE_MS) answers = b.answers.map((v, i) => (Number.isInteger(v) && v >= 0 && v < c.qs[i].o.length ? v : null));
    const c2 = await closeAttempt(d, c, uid, answers, now, answers ? 'submitted' : 'timeout');
    await settle(d, c2, now);
    return actions.get(ctx, b);
  },

  async get(ctx, b) {
    const { d, uid, now } = ctx, c0 = await load(d, b.id); mustBeIn(c0, uid);
    const c = await settle(d, c0, now), out = brief(c, uid);
    if (c.status === 'done') {
      const o = otherOf(c, uid), p = me(c, uid), po = me(c, o);
      out.review = c.qs.map((q, i) => ({ q: q.q, o: q.o, a: q.a, why: q.why, mine: p ? p.answers[i] : null, theirs: po ? po.answers[i] : null }));
      out.theirs = Object.assign(out.theirs, { correct: po ? po.correct || 0 : 0, timeMs: po ? po.timeMs || 0 : 0 });
    }
    return Object.assign({ ok: true, now }, { challenge: out });
  }
};

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  await L.limit(req, 'challenge', 400, 60);
  const { d, user } = await L.authed(req);
  if (!d.social) fail(500, 'The server needs the latest version (social).');
  const fn = actions[String(b.a || '')]; if (!fn) fail(400, 'Unknown action.');
  return fn({ d, user, uid: String(user._id), now: Date.now() }, b);
});
module.exports._test = { settle, scoreOf };

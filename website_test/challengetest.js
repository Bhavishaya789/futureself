/* Challenge + phone-capture API tests. Run: node website_test/challengetest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const crypto = require('crypto');
const get = (o, p) => p.split('.').reduce((x, k) => (x == null ? undefined : x[k]), o);
function setp(o, p, v) { const ks = p.split('.'); let x = o; ks.slice(0, -1).forEach((k) => { if (x[k] == null) x[k] = /^\d+$/.test(ks[ks.indexOf(k) + 1]) ? [] : {}; x = x[k]; }); x[ks[ks.length - 1]] = v; }
function ok1(v, c) {
  if (c && typeof c === 'object' && !(c instanceof RegExp) && !(c instanceof Date) && Object.keys(c).some((k) => k[0] === '$')) {
    return Object.keys(c).every((k) => k === '$ne' ? JSON.stringify(v) !== JSON.stringify(c[k]) : k === '$in' ? c[k].includes(v) : k === '$nin' ? !c[k].includes(v) : k === '$exists' ? (v !== undefined) === c[k] : true);
  }
  if (c instanceof RegExp) return typeof v === 'string' && c.test(v);
  if (Array.isArray(v)) return v.includes(c);
  return String(v) === String(c);
}
function col() {
  const rows = [], match = (r, f) => Object.keys(f).every((k) => ok1(get(r, k), f[k]));
  const self = { rows,
    async findOne(f) { const r = rows.find((x) => match(x, f)); return r ? structuredClone(r) : null; },
    find(f) { let out = rows.filter((r) => match(r, f)); const cur = { sort(s) { const k = Object.keys(s)[0]; out = out.slice().sort((a, b) => (b[k] - a[k]) * (s[k] === -1 ? 1 : -1)); return cur; }, limit(n) { out = out.slice(0, n); return cur; }, async toArray() { return out; } }; return cur; },
    async insertOne(d) { rows.push({ ...d }); },
    async deleteOne(f) { const i = rows.findIndex((r) => match(r, f)); if (i >= 0) rows.splice(i, 1); },
    async updateOne(f, u, o) {
      let r = rows.find((x) => match(x, f)), created = false;
      if (!r) { if (!(o && o.upsert)) return { matchedCount: 0, modifiedCount: 0 }; r = { ...Object.fromEntries(Object.entries(f).filter(([k, v]) => typeof v !== 'object')) }; rows.push(r); created = true; }
      Object.entries(u.$set || {}).forEach(([k, v]) => setp(r, k, v));
      Object.entries(u.$inc || {}).forEach(([k, v]) => setp(r, k, (get(r, k) || 0) + v));
      Object.entries(u.$push || {}).forEach(([k, v]) => { const a = get(r, k) || []; a.push(v); setp(r, k, a); });
      return { matchedCount: created ? 0 : 1, modifiedCount: 1, upsertedCount: created ? 1 : 0 };
    }, async findOneAndUpdate(f, u, o) { await this.updateOne(f, u, o); return rows.find((x) => match(x, f)) || null; } };
  return self;
}
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), social: col() };
const L = require('../website/api/_lib.js'), ch = require('../website/api/challenge.js'), cap = require('../website/api/capture.js');
function call(h, body, token) {
  return new Promise((res) => { const headers = {}; const r = { method: 'POST', body, headers: token ? { authorization: 'Bearer ' + token } : {} };
    h(r, { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); });
}
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name) { const u = { _id: crypto.randomBytes(6).toString('hex'), email: name + '@x.com', name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); global.__FS_FAKE_DB.social.rows.push({ key: 'u:' + u._id, name, friends: [] }); return { id: String(u._id), t: L.newToken(u) }; }
const qs = (n) => Array.from({ length: n }, (_, i) => ({ q: 'Question ' + i + '?', o: ['A', 'B', 'C', 'D'], a: i % 4, why: 'Because ' + i }));
const S = () => global.__FS_FAKE_DB.social.rows;
(async () => {
  const A = await mk('Asha'), B = await mk('Bala'), C = await mk('Chen');
  S().find((r) => r.key === 'u:' + A.id).friends.push(B.id); S().find((r) => r.key === 'u:' + B.id).friends.push(A.id);
  const base = { topicId: 'econ', lessonId: 'l1', title: 'Money', subject: 'Economics' };
  let r = await call(ch, { a: 'create', friendId: C.id, ...base, questions: qs(6) }, A.t); T('cannot challenge a non-friend', r.s === 403, r);
  r = await call(ch, { a: 'create', friendId: B.id, ...base, questions: qs(3) }, A.t); T('too few questions refused', r.s === 400, r);
  const bad1 = qs(6); bad1[2].a = 9; r = await call(ch, { a: 'create', friendId: B.id, ...base, questions: bad1 }, A.t); T('invalid answer index refused', r.s === 400, r);
  r = await call(ch, { a: 'create', friendId: B.id, ...base, questions: qs(10) }, A.t); T('create works', r.s === 200 && r.j.n === 10 && r.j.limitSec === 500, r); const id = r.j.id;
  r = await call(ch, { a: 'create', friendId: B.id, ...base, questions: qs(10) }, A.t); T('same topic+friend twice refused', r.s === 409, r);
  r = await call(ch, { a: 'list' }, B.t); T('friend sees the invite', r.j.challenges.length === 1 && r.j.challenges[0].status === 'pending' && r.j.challenges[0].friend.name === 'Asha', r.j);
  T('invite has no answers in it', !JSON.stringify(r.j).includes('"why"') && !JSON.stringify(r.j).includes('"a":'), 0);
  r = await call(ch, { a: 'get', id }, C.t); T('stranger cannot open it', r.s === 403, r);
  // Asha plays: answers all correct
  r = await call(ch, { a: 'start', id }, A.t); T('start returns questions without answers', r.s === 200 && r.j.questions.length === 10 && !('a' in r.j.questions[0]) && !JSON.stringify(r.j).includes('Because'), r.j);
  r = await call(ch, { a: 'start', id }, A.t); T('second start refused (one attempt)', r.s === 409 && r.j.used, r);
  r = await call(ch, { a: 'save', id, i: 0, ans: 0 }, A.t); T('save an answer', r.s === 200, r);
  r = await call(ch, { a: 'save', id, i: 0, ans: 7 }, A.t); T('bad answer refused', r.s === 400, r);
  r = await call(ch, { a: 'resume', id }, A.t); T('one resume allowed, keeps saved answer', r.s === 200 && r.j.answers[0] === 0, r);
  r = await call(ch, { a: 'resume', id }, A.t); T('second resume closes the attempt', r.s === 409 && r.j.used, r);
  r = await call(ch, { a: 'start', id }, A.t); T('cannot start again after being closed', r.s === 409, r);
  let row = S().find((x) => x.key === 'c:' + id); T('closed attempt kept only the saved answer', row.players[A.id].closed && row.players[A.id].correct === 1, row.players[A.id]);
  // Bala plays: 7 correct, slower than... compare
  const ansB = qs(10).map((q, i) => (i < 7 ? q.a : (q.a + 1) % 4));
  r = await call(ch, { a: 'start', id }, B.t); T('friend starts', r.s === 200, r);
  row = S().find((x) => x.key === 'c:' + id); row.players[B.id].startedAt -= 120000;   // pretend 2 minutes passed
  r = await call(ch, { a: 'submit', id, answers: ansB }, B.t);
  const c = r.j.challenge; T('after both finish: done with a winner', c.status === 'done' && c.result.winner === B.id && c.result.winnerName === 'Bala', c);
  T('review now shows correct answers', c.review && c.review[0].a === 0 && c.review[3].why === 'Because 3', c.review && c.review[0]);
  const pa = c.result.points[A.id], pb = c.result.points[B.id];
  T('points: 10 per right answer', pb.base === 70 && pa.base === 10, [pa, pb]);
  T('time bonus is given for quicker finish', pb.timeBonus > 0 && pb.timeBonus < 35, pb);
  T('winner bonus 20 to Bala', pb.win === 20 && pa.win === 0, [pa, pb]);
  T('first-to-finish bonus goes to the faster one (Asha was quicker)', c.result.faster === A.id && pa.first === 10 && pb.first === 0, c.result);
  T('totals add up', pb.total === pb.base + pb.timeBonus + 20 && pa.total === pa.base + pa.timeBonus + 10, [pa, pb]);
  r = await call(ch, { a: 'list' }, B.t); T('stats stored once', r.j.stats.points === pb.total && r.j.stats.wins === 1 && r.j.stats.played === 1, r.j.stats);
  r = await call(ch, { a: 'submit', id, answers: ansB }, B.t); r = await call(ch, { a: 'list' }, B.t); T('sending twice never double-awards', r.j.stats.points === pb.total && r.j.stats.played === 1, r.j.stats);
  // answers hidden until both finished
  r = await call(ch, { a: 'create', friendId: A.id, ...{ topicId: 'phy', lessonId: 'x', title: 'Light', subject: 'Physics' }, questions: qs(5) }, B.t); const id2 = r.j.id;
  await call(ch, { a: 'start', id: id2 }, B.t); r = await call(ch, { a: 'submit', id: id2, answers: qs(5).map((q) => q.a) }, B.t);
  T('first finisher sees score but no answers yet', r.j.challenge.status === 'active' && r.j.challenge.mine.correct === 5 && !r.j.challenge.review && r.j.challenge.theirs.closed === false, r.j.challenge);
  // timeout: Asha starts, goes past the deadline + grace, never submits
  await call(ch, { a: 'start', id: id2 }, A.t); row = S().find((x) => x.key === 'c:' + id2); row.players[A.id].startedAt -= (row.limitSec * 1000 + 60000);
  r = await call(ch, { a: 'save', id: id2, i: 0, ans: 1 }, A.t); T('late answer refused', r.s === 409, r);
  r = await call(ch, { a: 'submit', id: id2, answers: qs(5).map((q) => q.a) }, A.t);
  T('late sheet is not accepted; 0 right; Bala wins', r.j.challenge.status === 'done' && r.j.challenge.result.winner === B.id && r.j.challenge.mine.correct === 0, r.j.challenge);
  // 3 leaves auto-submit
  const A2 = await mk('Dev'); S().find((x) => x.key === 'u:' + A.id).friends.push(A2.id); S().find((x) => x.key === 'u:' + A2.id).friends.push(A.id);
  r = await call(ch, { a: 'create', friendId: A2.id, ...base, questions: qs(5) }, A.t); const id3 = r.j.id; await call(ch, { a: 'start', id: id3 }, A.t);
  await call(ch, { a: 'leave', id: id3 }, A.t); await call(ch, { a: 'leave', id: id3 }, A.t); r = await call(ch, { a: 'leave', id: id3 }, A.t); T('third leave closes the attempt', r.j.closed === true, r);
  // decline + walkover
  r = await call(ch, { a: 'decline', id: id3 }, A.t); T('challenger cannot decline own challenge', r.s === 400, r);
  r = await call(ch, { a: 'decline', id: id3 }, A2.t); T('invited friend can decline', r.s === 200, r);
  r = await call(ch, { a: 'start', id: id3 }, A2.t); T('declined challenge cannot be played', r.s === 409, r);
  const A3 = await mk('Esha'); S().find((x) => x.key === 'u:' + A.id).friends.push(A3.id);
  r = await call(ch, { a: 'create', friendId: A3.id, ...{ topicId: 'chem', lessonId: 'z', title: 'Acids', subject: 'Chem' }, questions: qs(5) }, A.t); const id4 = r.j.id;
  await call(ch, { a: 'start', id: id4 }, A.t); await call(ch, { a: 'submit', id: id4, answers: qs(5).map((q) => q.a) }, A.t);
  row = S().find((x) => x.key === 'c:' + id4); row.expiresAt = Date.now() - 1000;
  r = await call(ch, { a: 'get', id: id4 }, A.t); T('friend never played: walkover win', r.j.challenge.status === 'done' && r.j.challenge.result.reason === 'walkover' && r.j.challenge.result.winner === A.id, r.j.challenge.result);
  // phone capture
  const jpeg = 'data:image/jpeg;base64,' + Buffer.alloc(3000, 7).toString('base64');
  r = await call(cap, { a: 'new', label: 'Q2' }, A.t); T('capture slot created', r.s === 200 && r.j.id.length === 16 && r.j.secret.length === 24, r); const slot = r.j;
  r = await call(cap, { a: 'info', id: slot.id, secret: 'a'.repeat(24) }); T('wrong secret refused', r.s === 404, r);
  r = await call(cap, { a: 'info', id: slot.id, secret: slot.secret }); T('phone page can read the label (no sign-in)', r.s === 200 && r.j.label === 'Q2', r);
  r = await call(cap, { a: 'put', id: slot.id, secret: slot.secret, img: 'data:text/html;base64,AAAA' }); T('non-jpeg refused', r.s === 400, r);
  r = await call(cap, { a: 'put', id: slot.id, secret: slot.secret, img: jpeg }); T('photo accepted', r.s === 200 && r.j.count === 1, r);
  await call(cap, { a: 'put', id: slot.id, secret: slot.secret, img: jpeg });
  r = await call(cap, { a: 'poll', id: slot.id, have: 1 }, A.t); T('PC receives only the new photos', r.s === 200 && r.j.count === 2 && r.j.imgs.length === 1, r);
  r = await call(cap, { a: 'poll', id: slot.id }, B.t); T('another account cannot read the photos', r.s === 404, r);
  for (let i = 0; i < 3; i++) r = await call(cap, { a: 'put', id: slot.id, secret: slot.secret, img: jpeg }); T('max 4 photos per slot', r.s === 409, r);
  r = await call(cap, { a: 'done', id: slot.id }, A.t); r = await call(cap, { a: 'poll', id: slot.id }, A.t); T('slot deleted after use', r.s === 404, r);
  console.log(bad ? bad + ' FAILED' : 'ALL PASSED'); process.exit(bad ? 1 : 0);
})();

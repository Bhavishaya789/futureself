/* Social API tests: friends, leaderboard, rooms. Run: node website_test/socialtest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const crypto = require('crypto');
function col() {
  const rows = [];
  const match = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k]));
  return { rows,
    async findOne(f) { return rows.find((r) => match(r, f)) || null; },
    async insertOne(d) { rows.push({ ...d }); },
    async findOneAndUpdate(f, u, o) { await this.updateOne(f, u, o); return rows.find((x) => match(x, f)) || null; },
    async updateOne(f, u, o) {
      let r = rows.find((x) => match(x, f));
      if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); }
      Object.assign(r, u.$set || {}); Object.keys(u.$addToSet || {}).forEach((k) => { r[k] = r[k] || []; if (!r[k].includes(u.$addToSet[k])) r[k].push(u.$addToSet[k]); }); Object.keys(u.$pull || {}).forEach((k) => { r[k] = (r[k] || []).filter((x) => x !== u.$pull[k]); }); Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; });
    } };
}
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), social: col() };
const L = require('../website/api/_lib.js'), social = require('../website/api/social.js');
function call(h, method, body, token) {
  return new Promise((res) => { const headers = {}; const r = { method, body, headers: token ? { authorization: 'Bearer ' + token } : {} };
    h(r, { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); });
}
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name, email) { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; }
const S = (t, b) => call(social, 'POST', b, t);
(async () => {
  const A = await mk('Asha', 'asha@x.com'), B = await mk('Bhav', 'bhav@x.com'), C = await mk('Chan', 'chan@x.com');
  let r = await call(social, 'POST', { a: 'overview' }); T('needs sign-in', r.s === 401, r);
  r = await S(A.t, { a: 'nope' }); T('unknown action refused', r.s === 400, r);
  r = await S(A.t, { a: 'add', email: 'not-an-email' }); T('bad email refused', r.s === 400, r);
  r = await S(A.t, { a: 'add', email: 'ghost@x.com' }); T('unknown email gives same answer', r.s === 200 && r.j.ok, r);
  r = await S(A.t, { a: 'add', email: 'bhav@x.com' }); T('request sent', r.s === 200, r);
  r = await S(B.t, { a: 'overview' }); T('B sees the request', r.j.incoming.length === 1 && r.j.incoming[0].name === 'Asha', r);
  r = await S(A.t, { a: 'overview' }); T('A sees it as outgoing, not friends', r.j.outgoing.length === 1 && r.j.board.length === 1, r);
  r = await S(B.t, { a: 'accept', id: String(A.u._id) }); T('accept', r.s === 200, r);
  r = await S(B.t, { a: 'accept', id: String(A.u._id) }); T('accept twice refused', r.s === 404, r);
  const wk = '2026-10-26';
  await S(A.t, { a: 'sync', weekMin: 300, weekKey: wk, todayMin: 60, streak: 4, studying: { on: true, subject: 'DBMS', endsAt: Date.now() + 600000 } });
  await S(B.t, { a: 'sync', weekMin: 420, weekKey: wk, todayMin: 80, streak: 9, studying: null });
  r = await S(B.t, { a: 'overview', weekKey: wk }); T('leaderboard sorted, B first', r.j.board.length === 2 && r.j.board[0].me && r.j.board[0].weekMin === 420, r);
  T('B sees A studying now', !!r.j.board[1].studying && r.j.board[1].studying.subject === 'DBMS', r.j.board);
  r = await S(B.t, { a: 'overview', weekKey: '2026-11-02' }); T('old week numbers do not count', r.j.board.every((x) => x.weekMin === 0), r.j.board);
  r = await S(C.t, { a: 'overview', weekKey: wk }); T('stranger sees nobody', r.j.board.length === 1 && r.j.board[0].me, r);
  await S(A.t, { a: 'sync', weekMin: 999999, weekKey: wk, todayMin: 99999, streak: 99999 });
  r = await S(A.t, { a: 'overview', weekKey: wk }); T('absurd numbers are capped', r.j.board.find((x) => x.me).weekMin === 10080, r.j.board);
  r = await S(C.t, { a: 'add', email: 'asha@x.com' }); r = await S(A.t, { a: 'decline', id: String(C.u._id) }); r = await S(A.t, { a: 'overview' }); T('decline clears request', r.j.incoming.length === 0, r);
  r = await S(A.t, { a: 'remove', id: String(B.u._id) }); r = await S(B.t, { a: 'overview', weekKey: wk }); T('remove works both ways', r.j.board.length === 1, r);
  r = await S(A.t, { a: 'roomNew' }); const code = r.j.code; T('room made with 6 char code', /^[A-Z0-9]{6}$/.test(code), r);
  r = await S(C.t, { a: 'roomJoin', code: code.toLowerCase() }); T('join (case-insensitive)', r.s === 200, r);
  r = await S(C.t, { a: 'roomJoin', code: 'ZZZZZZ' }); T('wrong code refused', r.s === 404, r);
  await S(A.t, { a: 'sync', weekMin: 10, weekKey: wk, todayMin: 5, streak: 1, studying: { on: true, subject: 'Maths', endsAt: Date.now() + 600000 } });
  r = await S(C.t, { a: 'room' }); T('room lists both, A studying first', r.j.members.length === 2 && r.j.members[0].studying && r.j.members[0].studying.subject === 'Maths', r);
  r = await S(B.t, { a: 'room' }); T('non-member sees empty room', r.j.members.length === 0 && r.j.code === '', r);
  r = await S(C.t, { a: 'roomLeave' }); r = await S(A.t, { a: 'room' }); T('leaving removes me', r.j.members.length === 1, r);
  for (let i = 0; i < 12; i++) { const X = await mk('X' + i, 'x' + i + '@x.com'); const q = await S(X.t, { a: 'roomJoin', code }); if (i === 11) T('room full at 12', q.s === 409, q); }
  console.log(bad ? bad + ' FAILED' : 'ALL PASS'); process.exit(bad ? 1 : 0);
})();

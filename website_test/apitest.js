/* API tests with an in-memory database, fake mail and fake Google. Run: node website_test/apitest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.GOOGLE_CLIENT_ID = 'cid123';
const crypto = require('crypto');
function col() {
  const rows = [];
  const match = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k]));
  return {
    rows,
    async findOne(f) { return rows.find((r) => match(r, f)) || null; },
    async insertOne(d) { rows.push({ ...d }); },
    async findOneAndDelete(f) { const i = rows.findIndex((r) => match(r, f)); return i < 0 ? null : rows.splice(i, 1)[0]; },
    async updateOne(f, u, o) {
      let r = rows.find((x) => match(x, f));
      if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); }
      Object.assign(r, u.$set || {}); Object.keys(u.$unset || {}).forEach((k) => delete r[k]);
      Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; });
    }
  };
}
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col() };
const mails = []; global.__FS_MAIL = async (m) => { mails.push(m); };
let google = { aud: 'cid123', iss: 'https://accounts.google.com', email_verified: 'true', exp: String(Math.floor(Date.now() / 1000) + 600), email: 'G@Example.com', sub: 'gsub1', name: 'Gee' };
global.__FS_FETCH = async () => ({ ok: true, json: async () => google });
const auth = require('../website/api/auth.js'), sess = require('../website/api/session.js'), cfg = require('../website/api/config.js');
function call(h, method, body, token) {
  return new Promise((res) => {
    const headers = {}; const r = { method, body, headers: token ? { authorization: 'Bearer ' + token } : {} };
    const o = { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } };
    h(r, o);
  });
}
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
(async () => {
  let r = await call(cfg, 'GET'); T('config', r.j.googleClientId === 'cid123', r);
  r = await call(auth, 'POST', { a: 'register', name: 'Bhav', email: 'a@b.com', password: 'short' }); T('short password refused', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'register', name: 'Bhav', email: 'nope', password: 'longenough1' }); T('bad email refused', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'register', name: 'Bhav', email: 'A@B.com', password: 'longenough1' }); T('register sends code', r.s === 200 && r.j.needsVerify && mails.length === 1, r);
  const code = mails[0].text.match(/is (\d{6})/)[1];
  r = await call(auth, 'POST', { a: 'login', email: 'a@b.com', password: 'longenough1' }); T('login before verify -> needsVerify', r.s === 403 && r.j.needsVerify, r);
  r = await call(auth, 'POST', { a: 'verify', email: 'a@b.com', code: '000000' }); T('wrong code refused', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'verify', email: 'a@b.com', code }); T('right code -> token', r.s === 200 && r.j.token && r.j.user.email === 'a@b.com', r);
  const tok = r.j.token;
  r = await call(auth, 'POST', { a: 'verify', email: 'a@b.com', code }); T('code single use', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'register', name: 'X', email: 'a@b.com', password: 'longenough1' }); T('duplicate register refused', r.s === 409, r);
  r = await call(auth, 'POST', { a: 'login', email: 'a@b.com', password: 'wrongwrong' }); T('wrong password', r.s === 401, r);
  r = await call(auth, 'POST', { a: 'login', email: 'A@b.com', password: 'longenough1' }); T('login ok', r.s === 200 && r.j.token, r);
  for (let i = 0; i < 8; i++) await call(auth, 'POST', { a: 'login', email: 'a@b.com', password: 'bad' + i });
  r = await call(auth, 'POST', { a: 'login', email: 'a@b.com', password: 'longenough1' }); T('locked after 8 wrong', r.s === 429, r);
  r = await call(auth, 'POST', { a: 'me' }, tok); T('me with token', r.s === 200 && r.j.user.name === 'Bhav', r);
  r = await call(auth, 'POST', { a: 'me' }, tok + 'x'); T('me with bad token', r.s === 401, r);
  // 5 wrong codes lock
  await call(auth, 'POST', { a: 'register', name: 'C', email: 'c@d.com', password: 'longenough1' });
  for (let i = 0; i < 5; i++) await call(auth, 'POST', { a: 'verify', email: 'c@d.com', code: '11111' + i });
  const c2 = mails[mails.length - 1].text.match(/is (\d{6})/)[1];
  r = await call(auth, 'POST', { a: 'verify', email: 'c@d.com', code: c2 }); T('code locked after 5 wrong', r.s === 429, r);
  r = await call(auth, 'POST', { a: 'resend', email: 'c@d.com' }); T('resend rate limited', r.s === 429, r);
  // google
  r = await call(auth, 'POST', { a: 'google', credential: 'x'.repeat(40) }); T('google ok', r.s === 200 && r.j.user.email === 'g@example.com', r);
  const gt = r.j.token;
  google = { ...google, aud: 'other' }; r = await call(auth, 'POST', { a: 'google', credential: 'x'.repeat(40) }); T('google wrong audience refused', r.s === 401, r);
  google = { ...google, aud: 'cid123', email_verified: 'false' }; r = await call(auth, 'POST', { a: 'google', credential: 'x'.repeat(40) }); T('google unverified email refused', r.s === 401, r);
  r = await call(auth, 'POST', { a: 'login', email: 'g@example.com', password: 'whatever12' }); T('google account password login refused', r.s === 401 && /Google/.test(r.j.error), r);
  // ticket flow
  const ver = crypto.randomBytes(32).toString('hex'), ch = crypto.createHash('sha256').update(ver).digest('hex');
  r = await call(auth, 'POST', { a: 'ticket', ch }, gt); T('ticket issued', r.s === 200 && r.j.ticket, r);
  const tk = r.j.ticket;
  r = await call(auth, 'POST', { a: 'redeem', ticket: tk, verifier: crypto.randomBytes(32).toString('hex') }); T('redeem with wrong verifier refused', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'ticket', ch }, gt); const tk2 = r.j.ticket;
  r = await call(auth, 'POST', { a: 'redeem', ticket: tk2, verifier: ver }); T('redeem ok', r.s === 200 && r.j.token && r.j.user.email === 'g@example.com', r);
  r = await call(auth, 'POST', { a: 'redeem', ticket: tk2, verifier: ver }); T('ticket single use', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'ticket', ch }); T('ticket needs sign-in', r.s === 401, r);
  // unverified password signup cannot be hijacked: google sign-in clears the password
  await call(auth, 'POST', { a: 'register', name: 'Pre', email: 'g2@example.com', password: 'attackerpass1' });
  google = { ...google, email_verified: 'true', email: 'g2@example.com', sub: 's2' }; await call(auth, 'POST', { a: 'google', credential: 'x'.repeat(40) });
  r = await call(auth, 'POST', { a: 'login', email: 'g2@example.com', password: 'attackerpass1' }); T('pre-hijack password removed', r.s === 401, r);
  // session relay
  r = await call(sess, 'GET', {}, tok); T('relay idle', r.s === 200 && !r.j.active && !r.j.restrict, r);
  r = await call(sess, 'GET', {}); T('relay needs sign-in', r.s === 401, r);
  const ends = Date.now() + 25 * 60000;
  r = await call(sess, 'POST', { active: true, subject: 'DBMS', topicId: 't1', lock: 'focus', endsAt: ends, startedAt: Date.now() }, tok); T('pc pushes session', r.s === 200, r);
  r = await call(sess, 'GET', {}, tok); T('phone sees restrict', r.j.active && r.j.restrict && r.j.subject === 'DBMS' && r.j.endsAt === ends, r);
  r = await call(sess, 'GET', {}, gt); T('other account sees nothing', !r.j.active, r);
  await call(sess, 'POST', { active: true, subject: 'DBMS', lock: 'gentle', endsAt: ends }, tok); r = await call(sess, 'GET', {}, tok); T('gentle does not restrict', r.j.active && !r.j.restrict, r);
  await call(sess, 'POST', { active: true, subject: 'DBMS', lock: 'focus', endsAt: ends, paused: true }, tok); r = await call(sess, 'GET', {}, tok); T('paused does not restrict', !r.j.restrict, r);
  await call(sess, 'POST', { active: true, subject: 'DBMS', lock: 'focus', endsAt: Date.now() - 200000 }, tok); r = await call(sess, 'GET', {}, tok); T('long-past session expires', !r.j.active, r);
  await call(sess, 'POST', { active: false }, tok); r = await call(sess, 'GET', {}, tok); T('pc ends session', !r.j.active, r);
  console.log(bad ? 'FAIL ' + bad : 'ALL PASS');
})();

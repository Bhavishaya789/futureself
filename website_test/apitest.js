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
    async findOneAndUpdate(f, u, o) { await this.updateOne(f, u, o); return rows.find((x) => match(x, f)) || null; },
    async findOneAndDelete(f) { const i = rows.findIndex((r) => match(r, f)); return i < 0 ? null : rows.splice(i, 1)[0]; },
    async updateOne(f, u, o) {
      let r = rows.find((x) => match(x, f));
      if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); }
      Object.assign(r, u.$set || {}); Object.keys(u.$unset || {}).forEach((k) => delete r[k]);
      Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; });
    }
  };
}
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col() };
const mails = []; global.__FS_MAIL = async (m) => { mails.push(m); };
let google = { aud: 'cid123', iss: 'https://accounts.google.com', email_verified: 'true', exp: String(Math.floor(Date.now() / 1000) + 600), email: 'G@Example.com', sub: 'gsub1', name: 'Gee' };
global.__FS_FETCH = async () => ({ ok: true, json: async () => google });
const auth = require('../website/api/auth.js'), sess = require('../website/api/session.js'), cfg = require('../website/api/config.js'), vid = require('../website/api/videos.js');
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
  await call(sess, 'POST', { active: true, src: 'phone', subject: 'Maths', lock: 'strict', endsAt: Date.now() + 600000, startedAt: Date.now() }, tok); r = await call(sess, 'GET', {}, tok); T('phone session is marked src=phone and restricts', r.j.active && r.j.restrict && r.j.src === 'phone', r);
  await call(sess, 'POST', { active: true, src: 'evil', subject: 'X', lock: 'focus', endsAt: Date.now() + 600000 }, tok); r = await call(sess, 'GET', {}, tok); T('unknown src falls back to pc', r.j.src === 'pc', r);
  await call(sess, 'POST', { active: false }, tok); r = await call(sess, 'GET', {}, tok); T('phone ends session', !r.j.active, r);

  /* ---- video search: the SERVER searches YouTube; only a cleaned study list comes back ---- */
  const vr = (id, title, ch, len, extra) => ({ videoRenderer: Object.assign({ videoId: id, title: { runs: [{ text: title }] }, ownerText: { runs: [{ text: ch }] }, lengthText: len ? { simpleText: len } : undefined }, extra || {}) });
  const page = (list) => '<html><script>var ytInitialData = ' + JSON.stringify({ contents: list }) + ';</script></html>';
  let ytCalls = 0, lastUrl = '';
  const goodPage = page([
    vr('aaaaaaaaaaa', 'Deadlock in Operating System with examples', 'Gate Smashers', '14:05'),
    vr('bbbbbbbbbbb', 'Deadlock explained in 60 seconds #shorts', 'Gate Smashers', '0:58'),
    vr('ccccccccccc', 'Deadlock funny reaction video', 'Random Guy', '10:00'),
    vr('ddddddddddd', 'Deadlock Handling Techniques', 'Neso Academy', '22:10'),
    vr('eeeeeeeeeee', 'Deadlock live class', 'Gate Smashers', null),
    vr('fffffffffff', 'Cooking pasta at home', 'Chef X', '12:00'),
    vr('aaaaaaaaaaa', 'Deadlock in Operating System with examples', 'Gate Smashers', '14:05')]);
  global.__FS_FETCH = async (u) => { ytCalls++; lastUrl = String(u); return { ok: true, text: async () => goodPage }; };
  r = await call(vid, 'POST', { q: 'deadlock' }); T('video search needs sign in', r.s === 401, r);
  r = await call(vid, 'POST', { q: 'x' }, tok); T('too short search refused', r.s === 400, r);
  r = await call(vid, 'POST', { q: 'a'.repeat(200) }, tok); T('too long search refused', r.s === 400, r);
  r = await call(vid, 'GET', {}, tok); T('GET refused', r.s === 405, r);
  r = await call(vid, 'POST', { q: 'deadlock' }, tok);
  T('search returns study videos only', r.s === 200 && r.j.items.map((x) => x.id).join() === 'aaaaaaaaaaa,ddddddddddd', r);
  T('server searched YouTube once', ytCalls === 1 && /search_query=deadlock/.test(lastUrl), lastUrl);
  T('result carries only id, title, channel, length', Object.keys(r.j.items[0]).sort().join() === 'channel,id,sec,title', r.j.items[0]);
  r = await call(vid, 'POST', { q: 'Deadlock' }, tok); T('same search is served from cache (no second YouTube call)', r.j.cached === true && ytCalls === 1, r);
  r = await call(vid, 'POST', { q: 'deadlock', channel: 'gate smashers' }, tok);
  T('channel filter keeps only that channel', r.s === 200 && r.j.items.length === 1 && r.j.items[0].channel === 'Gate Smashers', r);
  T('channel is added to the YouTube query', /gate%20smashers/i.test(lastUrl), lastUrl);
  r = await call(vid, 'POST', { q: 'deadlock', channel: 'Nobody Channel' }, tok); T('unknown channel gives an empty list with a note', r.s === 200 && r.j.items.length === 0 && /Nobody Channel/.test(r.j.note), r);
  // official API path
  process.env.YOUTUBE_API_KEY = 'k123'; const urls = [];
  global.__FS_FETCH = async (u) => { urls.push(String(u)); if (/\/search\?/.test(u)) return { ok: true, json: async () => ({ items: [{ id: { videoId: 'ggggggggggg' } }, { id: { videoId: 'hhhhhhhhhhh' } }] }) };
    return { ok: true, json: async () => ({ items: [{ id: 'ggggggggggg', snippet: { title: 'Paging in OS &amp; memory', channelTitle: 'Neso Academy', liveBroadcastContent: 'none' }, contentDetails: { duration: 'PT12M30S' } }, { id: 'hhhhhhhhhhh', snippet: { title: 'Paging live', channelTitle: 'Neso Academy', liveBroadcastContent: 'live' }, contentDetails: { duration: 'PT1H' } }] }) }; };
  r = await call(vid, 'POST', { q: 'paging memory' }, tok);
  T('API key path: embeddable search + details, live removed, title decoded', r.s === 200 && r.j.items.length === 1 && r.j.items[0].title === 'Paging in OS & memory' && r.j.items[0].sec === 750 && /videoEmbeddable=true/.test(urls[0]) && /safeSearch=strict/.test(urls[0]) && /key=k123/.test(urls[0]), { r, urls });
  delete process.env.YOUTUBE_API_KEY;
  global.__FS_FETCH = async () => ({ ok: false, status: 429, text: async () => '' });
  r = await call(vid, 'POST', { q: 'something new here' }, tok); T('YouTube failing gives a friendly 502', r.s === 502 && /not available/.test(r.j.error), r);
  global.__FS_FETCH = async () => ({ ok: true, text: async () => goodPage });
  let limited = null;
  for (let i = 0; i < 40 && !limited; i++) { const x = await call(vid, 'POST', { q: 'deadlock topic ' + i }, tok); if (x.s === 429) limited = x; }
  T('rate limit stops endless searching (429)', !!limited && /limit/.test(limited.j.error), limited);
  global.__FS_FETCH = async () => ({ ok: true, json: async () => google });
  /* ---- AI answer checking runs on the server ---- */
  const img = 'data:image/jpeg;base64,' + Buffer.from('fakejpegbytes').toString('base64'), rub = [{ t: 'Defines a deadlock', m: 2 }, { t: 'Gives the four conditions', m: 3 }];
  const chk = require('../website/api/check.js');
  const savedFetch = global.__FS_FETCH, body0 = { question: 'What is deadlock?', model: 'm', rubric: rub, images: [img] };
  r = await call(chk, 'POST', body0, null); T('check needs sign-in', r.s === 401, r);
  r = await call(chk, 'POST', body0, tok); T('check says so when the server has no AI key', r.s === 503 && /ANTHROPIC_API_KEY/.test(r.j.error), r);
  process.env.ANTHROPIC_API_KEY = 'sk-test'; let sent = null;
  global.__FS_FETCH = async (u, o) => { sent = { u, o }; return { ok: true, json: async () => ({ content: [{ text: 'Here: {"awarded":[2,9],"feedback":"Good definition. List all four conditions."}' }] }) }; };
  r = await call(chk, 'POST', body0, tok); T('check returns clamped marks and feedback', r.s === 200 && r.j.awarded[0] === 2 && r.j.awarded[1] === 3 && /Good/.test(r.j.feedback), r);
  T('the key is sent only to Anthropic', sent && sent.u === 'https://api.anthropic.com/v1/messages' && sent.o.headers['x-api-key'] === 'sk-test');
  r = await call(chk, 'POST', { ...body0, images: ['data:text/html;base64,AAAA'] }, tok); T('non-image refused', r.s === 400, r);
  r = await call(chk, 'POST', { ...body0, images: [] }, tok); T('no photo refused', r.s === 400, r);
  r = await call(chk, 'POST', { ...body0, images: ['data:image/jpeg;base64,' + 'A'.repeat(5 * 1024 * 1024)] }, tok); T('oversize photos refused', r.s === 413, r);
  global.__FS_FETCH = async () => ({ ok: false, json: async () => ({ error: { message: 'secret detail' } }) });
  r = await call(chk, 'POST', body0, tok); T('AI failure is friendly and leaks nothing', r.s === 502 && !/secret/.test(JSON.stringify(r.j)), r);
  delete process.env.ANTHROPIC_API_KEY; global.__FS_FETCH = savedFetch;
  /* ---- security hardening ---- */
  r = await call(sess, 'POST', { active: true, subject: 'x', lock: 'strict', endsAt: Date.now() + 99 * 3600e3, src: 'pc' }, tok);
  r = await call(sess, 'GET', null, tok); T('a session cannot lock the other device for more than 12 hours', r.j.endsAt <= Date.now() + 12 * 3600e3 + 1000, r.j);
  await call(sess, 'POST', { active: false }, tok);
  const hdr = {}; await new Promise((res) => cfg({ method: 'GET', headers: {} }, { setHeader(k, v) { hdr[k] = v; }, end: res })); T('no open CORS header', !('Access-Control-Allow-Origin' in hdr), hdr);
  r = await call(auth, 'POST', { a: 'constructor' }, null); T('prototype names are not actions', r.s === 400, r);
  r = await call(auth, 'POST', { a: 'signoutall' }, tok); T('sign out everywhere works', r.s === 200, r);
  r = await call(sess, 'GET', null, tok); T('old token is dead after sign-out-everywhere', r.s === 401, r);
  let hit = null; for (let i = 0; i < 60 && !hit; i++) { const x = await call(auth, 'POST', { a: 'login', email: 'nobody' + i + '@x.com', password: 'wrongwrong' }, null); if (x.s === 429) hit = x; }
  T('too many logins from one network are stopped', !!hit, hit);
  console.log(bad ? 'FAIL ' + bad : 'ALL PASS');
})();

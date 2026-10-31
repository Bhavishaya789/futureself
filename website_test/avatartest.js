/* Avatar-from-picture API tests. Run: node website_test/avatartest.js */
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
const L = require('../website/api/_lib.js'), av = require('../website/api/avatar.js');
function call(h, method, body, token) {
  return new Promise((res) => { const headers = {}; const r = { method, body, headers: token ? { authorization: 'Bearer ' + token } : {} };
    h(r, { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); });
}
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name, email) { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; }
const jpeg = 'data:image/jpeg;base64,' + Buffer.alloc(3000, 7).toString('base64');
let seen = null, reply = { skin: 3, hair: 5, hc: 1, eyes: 1, mouth: 2, top: 1, tc: 5, acc: 1 };
global.__FS_FETCH = async (url, opt) => { seen = { url, body: JSON.parse(opt.body), headers: opt.headers }; return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: '```json\n' + JSON.stringify(reply) + '\n```' }] } }] }) }; };
(async () => {
  const A = await mk('Asha', 'asha@x.com');
  let r = await call(av, 'POST', { photo: jpeg }); T('needs sign-in', r.s === 401, r);
  delete process.env.GEMINI_API_KEY; delete process.env.ANTHROPIC_API_KEY;
  r = await call(av, 'POST', { photo: jpeg }, A.t); T('no AI key: clear 503 (the app then matches colours on the device)', r.s === 503, r);
  process.env.GEMINI_API_KEY = 'k';
  r = await call(av, 'POST', { photo: 'hello' }, A.t); T('not a picture refused', r.s === 400, r);
  r = await call(av, 'POST', { photo: 'data:image/jpeg;base64,' + 'A'.repeat(230000) }, A.t); T('huge picture refused', r.s === 400, r.s);
  r = await call(av, 'GET', {}, A.t); T('GET refused', r.s === 405, r.s);
  r = await call(av, 'POST', { photo: jpeg }, A.t);
  T('avatar made from the AI answer', r.s === 200 && r.j.avatar.skin === 3 && r.j.avatar.hair === 5 && r.j.avatar.acc === 1 && r.j.avatar.tc === 5 && r.j.avatar.v === 1, r.j);
  T('background is a valid choice', r.j.avatar.bg >= 0 && r.j.avatar.bg < 8, r.j.avatar);
  T('the key goes in a header, the picture is sent as image data', /generativelanguage/.test(seen.url) && seen.headers['x-goog-api-key'] === 'k' && !!seen.body.contents[0].parts[0].inline_data, seen && seen.url);
  T('the picture is not stored on the account', !JSON.stringify(global.__FS_FAKE_DB.users.rows).includes('base64'), 0);
  reply = { skin: 99, hair: -2, hc: 'x', eyes: 7, mouth: 4.4, top: 9, tc: 30, acc: 'glasses' };
  r = await call(av, 'POST', { photo: jpeg }, A.t); T('wild AI numbers are clamped to valid options', r.s === 200 && Object.keys(r.j.avatar).every((k) => k === 'v' || k === 'bg' || r.j.avatar[k] === 0), r.j.avatar);
  reply = 'nonsense'; global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: 'sorry, cannot help' }] } }] }) });
  r = await call(av, 'POST', { photo: jpeg }, A.t); T('unreadable AI reply gives a friendly error', r.s === 502, r);
  global.__FS_FETCH = async () => ({ ok: false, json: async () => ({}) });
  r = await call(av, 'POST', { photo: jpeg }, A.t); T('AI refusing gives a friendly error', r.s === 502, r);
  global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: '{"skin":1}' }] } }] }) });
  let last; for (let i = 0; i < 20; i++) last = await call(av, 'POST', { photo: jpeg }, A.t);
  T('daily limit stops endless use', last.s === 429, last.s);
  console.log(bad ? bad + ' FAILED' : 'ALL PASS'); process.exit(bad ? 1 : 0);
})();

/* Profile API tests (name, photo, 3D avatar). Run: node website_test/profiletest.js */
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
const L = require('../website/api/_lib.js'), auth = require('../website/api/auth.js');
function call(h, method, body, token) {
  return new Promise((res) => { const headers = {}; const r = { method, body, headers: token ? { authorization: 'Bearer ' + token } : {} };
    h(r, { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); });
}
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name, email) { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; }
const P = (t, b) => call(auth, 'POST', Object.assign({ a: 'profile' }, b), t);
const jpeg = 'data:image/jpeg;base64,' + Buffer.alloc(3000, 7).toString('base64');
(async () => {
  const A = await mk('Asha', 'asha@x.com'), B = await mk('Bhav', 'bhav@x.com');
  let r = await call(auth, 'POST', { a: 'profile', name: 'X Y' }); T('needs sign-in', r.s === 401, r);
  r = await call(auth, 'POST', { a: 'me' }, A.t); T('me has no profile time yet', r.j.user.profileAt === 0 && r.j.user.photo === '' && r.j.user.avatar === null, r.j);
  r = await P(A.t, { name: 'A' }); T('one-letter name refused', r.s === 400, r);
  r = await P(A.t, { name: '  Asha Rao  ' }); T('name saved and trimmed', r.s === 200 && r.j.user.name === 'Asha Rao' && r.j.user.profileAt > 0, r.j);
  const at1 = r.j.user.profileAt;
  r = await P(A.t, { photo: jpeg }); T('photo saved', r.s === 200 && r.j.user.photo === jpeg && r.j.user.name === 'Asha Rao', r.s);
  r = await P(A.t, { photo: 'data:image/png;base64,AAAA' }); T('non-jpeg refused', r.s === 400, r.s);
  r = await P(A.t, { photo: 'javascript:alert(1)' }); T('script url refused', r.s === 400, r.s);
  r = await P(A.t, { photo: 'data:image/jpeg;base64,' + 'A'.repeat(95000) }); T('huge photo refused', r.s === 400, r.s);
  r = await P(A.t, { avatar: { skin: 3, hair: 5, hc: 2, eyes: 1, mouth: 2, top: 1, tc: 4, acc: 3, bg: 6, evil: '<script>', skin2: 9 } }); T('avatar saved', r.s === 200 && r.j.user.avatar.skin === 3 && r.j.user.avatar.acc === 3 && r.j.user.avatar.v === 1, r.j);
  T('unknown avatar keys dropped', !('evil' in r.j.user.avatar) && !('skin2' in r.j.user.avatar), r.j.user.avatar);
  r = await P(A.t, { avatar: { skin: 99, hair: -4, hc: 'x' } }); T('out of range numbers become 0', r.j.user.avatar.skin === 0 && r.j.user.avatar.hair === 0 && r.j.user.avatar.hc === 0, r.j.user.avatar);
  r = await P(A.t, { avatar: { skin: 2 } }); r = await P(A.t, { photo: '' }); T('photo can be removed, avatar stays', r.j.user.photo === '' && r.j.user.avatar.skin === 2, r.j.user);
  r = await call(auth, 'POST', { a: 'me' }, A.t); T('another device reads the same profile', r.j.user.name === 'Asha Rao' && r.j.user.avatar.skin === 2 && r.j.user.profileAt > at1, r.j.user);
  r = await call(auth, 'POST', { a: 'me' }, B.t); T('B is not affected', r.j.user.name === 'Bhav' && r.j.user.avatar === null, r.j.user);
  r = await P(A.t, {}); T('empty save changes nothing', r.s === 200 && r.j.user.name === 'Asha Rao', r.j);
  r = await P(A.t, { avatar: null }); T('avatar can be cleared', r.j.user.avatar === null, r.j.user);
  r = await call(auth, 'POST', { a: 'me' }, A.t); T('track empty at first', r.j.user.track === '' || r.j.user.track === undefined, r.j.user);
  r = await P(A.t, { track: 'btech4' }); T('track saved', r.s === 200 && r.j.user.track === 'btech4', r.j);
  r = await P(A.t, { track: 'nonsense' }); T('invalid track ignored', r.j.user.track === 'btech4', r.j.user);
  r = await P(A.t, { track: '' }); T('empty track never wipes', r.j.user.track === 'btech4', r.j.user);
  r = await P(A.t, { name: 'Asha R' }); T('name save keeps track', r.j.user.track === 'btech4', r.j.user);
  r = await call(auth, 'POST', { a: 'me' }, A.t); T('second device sees track', r.j.user.track === 'btech4', r.j.user);
  console.log(bad ? bad + ' FAILED' : 'ALL PASS'); process.exit(bad ? 1 : 0);
})();

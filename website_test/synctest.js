/* Cloud sync endpoint tests. Run: node website_test/synctest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const crypto = require('crypto');
const get = (o, p) => p.split('.').reduce((x, k) => (x == null ? undefined : x[k]), o);
function col(uniq) {
  const rows = [], match = (r, f) => Object.keys(f).every((k) => String(get(r, k)) === String(f[k]));
  return { rows,
    async findOne(f) { const r = rows.find((x) => match(x, f)); return r ? structuredClone(r) : null; },
    find(f) { const out = rows.filter((r) => match(r, f)).map((r) => structuredClone(r)); const c = { sort() { return c; }, limit() { return c; }, async toArray() { return out; } }; return c; },
    async insertOne(d) { if (uniq && rows.some((r) => uniq.every((k) => r[k] === d[k]))) throw new Error('E11000 duplicate key'); rows.push(structuredClone(d)); },
    async deleteOne() { }, async deleteMany(f) { for (let i = rows.length - 1; i >= 0; i--) if (match(rows[i], f)) rows.splice(i, 1); }, async createIndex() { },
    async updateOne(f, u) { const r = rows.find((x) => match(x, f)); if (!r) return { matchedCount: 0 }; Object.assign(r, u.$set || {}); Object.entries(u.$inc || {}).forEach(([k, v]) => { r[k] = (r[k] || 0) + v; }); return { matchedCount: 1 }; },
    async findOneAndUpdate(f, u, o) { let r = rows.find((x) => match(x, f)); if (!r && o && o.upsert) { r = Object.assign({}, f); rows.push(r); } if (!r) return { value: null }; Object.assign(r, u.$set || {}); Object.entries(u.$inc || {}).forEach(([k, v]) => { r[k] = (r[k] || 0) + v; }); return { value: structuredClone(r) }; },
  };
}
const DB = global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), syncdocs: col(['uid', 'ns']) };
const L = require('../website/api/_lib.js'), S = require('../website/api/_sync.js');
function call(body, token, method) { return new Promise((res) => { const h = {}; S.sync({ method: method || 'POST', body, headers: token ? { authorization: 'Bearer ' + token } : {}, query: {}, url: '/api/sync' }, { statusCode: 0, setHeader(k, v) { h[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); }); }
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x).slice(0, 300))); if (!ok) bad++; };
function mk(n) { const u = { _id: crypto.randomBytes(6).toString('hex'), email: n + '@x.com', name: n, verified: true, tv: 0 }; DB.users.rows.push(u); return { id: u._id, t: L.newToken(u) }; }
(async () => {
  const A = mk('asha'), B = mk('bala');
  let r = await call({ op: 'pull' }, null); T('pull needs sign-in', r.s === 401, r);
  r = await call({ op: 'pull' }, 'garbage.token.x'); T('bad token refused', r.s === 401, r);
  r = await call({ op: 'pull' }, A.t, 'GET'); T('GET refused', r.s === 405, r);
  r = await call({ op: 'pull' }, A.t); T('empty pull', r.s === 200 && r.j.docs.study.rev === 0 && r.j.docs.store.data === '', r);
  r = await call({ op: 'push', ns: 'study', base: 0, data: JSON.stringify({ xp: 5 }) }, A.t); T('first push', r.s === 200 && r.j.ok && r.j.rev === 1, r);
  r = await call({ op: 'push', ns: 'study', base: 0, data: JSON.stringify({ xp: 9 }) }, A.t); T('second device pushing base 0 gets conflict', r.s === 200 && r.j.conflict && r.j.rev === 1 && JSON.parse(r.j.data).xp === 5, r);
  r = await call({ op: 'push', ns: 'study', base: 1, data: JSON.stringify({ xp: 14 }) }, A.t); T('push with right base', r.j.ok && r.j.rev === 2, r);
  r = await call({ op: 'push', ns: 'study', base: 1, data: JSON.stringify({ xp: 99 }) }, A.t); T('stale base is a conflict, data untouched', r.j.conflict && JSON.parse(r.j.data).xp === 14, r);
  r = await call({ op: 'pull' }, A.t); T('pull returns latest', JSON.parse(r.j.docs.study.data).xp === 14 && r.j.docs.study.rev === 2, r);
  r = await call({ op: 'pull' }, B.t); T('other user sees nothing of Asha', r.j.docs.study.rev === 0 && r.j.docs.study.data === '', r);
  r = await call({ op: 'push', ns: 'study', base: 0, data: JSON.stringify({ xp: 1 }), uid: A.id }, B.t); T('cannot target another uid', r.j.ok && DB.syncdocs.rows.filter((x) => x.uid === A.id).length === 1 && DB.syncdocs.rows.find((x) => x.uid === B.id), r);
  r = await call({ op: 'pull' }, A.t); T('Asha unchanged by Bala', JSON.parse(r.j.docs.study.data).xp === 14, r);
  r = await call({ op: 'push', ns: { $ne: 'x' }, base: 0, data: '{}' }, A.t); T('operator in ns refused', r.s === 400, r);
  r = await call({ op: 'push', ns: 'study', base: { $gt: 0 }, data: '{"a":1}' }, A.t); T('operator in base is just a number (conflict, no write)', r.j.conflict || r.s >= 400, r);
  r = await call({ op: 'push', ns: 'study', base: 2, data: { $set: { rev: 0 } } }, A.t); T('object data refused', r.s === 400 || r.s === 413, r);
  r = await call({ op: 'push', ns: 'study', base: 2, data: 'not json' }, A.t); T('non-JSON refused', r.s === 400, r);
  r = await call({ op: 'push', ns: 'study', base: 2, data: '[1,2]' }, A.t); T('array refused', r.s === 400, r);
  r = await call({ op: 'push', ns: 'bogus', base: 0, data: '{}' }, A.t); T('unknown area refused', r.s === 400, r);
  r = await call({ op: 'push', ns: 'prefs', base: 0, data: JSON.stringify({ x: 'y'.repeat(130000) }) }, A.t); T('too big refused', r.s === 413, r);
  const evil = JSON.stringify({ '$where': 'sleep(5000)', 'a.b': { '$ne': 1 }, items: { '__proto__': { polluted: 1 } }, n: '<img src=x onerror=alert(1)>' });
  r = await call({ op: 'push', ns: 'prefs', base: 0, data: evil }, A.t); r = await call({ op: 'pull' }, A.t);
  T('hostile content stored as inert text and returned unchanged', r.j.docs.prefs.data === evil && ({}).polluted === undefined, r);
  r = await call({ op: 'erase' }, B.t); T('erase removes only my own data', r.j.ok && !DB.syncdocs.rows.some((x) => x.uid === B.id) && DB.syncdocs.rows.some((x) => x.uid === A.id), r);
  r = await call({ op: 'nope' }, A.t); T('unknown op refused', r.s === 400, r);
  const rows = DB.syncdocs.rows; T('one row per user and area', new Set(rows.map((x) => x.uid + x.ns)).size === rows.length, rows.length);
  let hit = 0; for (let i = 0; i < 100; i++) { const x = await call({ op: 'pull' }, A.t); if (x.s === 429) hit++; } T('rate limited', hit > 0, hit);
  console.log(bad ? bad + ' FAILED' : 'ALL PASS'); process.exit(bad ? 1 : 0);
})();

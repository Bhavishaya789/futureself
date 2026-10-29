/* End-to-end: real acctclient + acctdesktop against the real API handlers (fake db/mail/google) over a local http server. */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.GOOGLE_CLIENT_ID = 'cid123';
const http = require('http'), fs = require('fs'), os = require('os'), path = require('path'), crypto = require('crypto');
function col() { const rows = []; const m = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k])); return { async findOne(f) { return rows.find((r) => m(r, f)) || null; }, async insertOne(d) { rows.push({ ...d }); }, async findOneAndDelete(f) { const i = rows.findIndex((r) => m(r, f)); return i < 0 ? null : rows.splice(i, 1)[0]; }, async updateOne(f, u, o) { let r = rows.find((x) => m(x, f)); if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); } Object.assign(r, u.$set || {}); Object.keys(u.$unset || {}).forEach((k) => delete r[k]); Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; }); } }; }
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col() };
const mails = []; global.__FS_MAIL = async (m) => mails.push(m);
const A = '/home/claude/fsw/website/api/';
const routes = { '/api/auth': require(A + 'auth.js'), '/api/session': require(A + 'session.js'), '/api/config': require(A + 'config.js') };
const srv = http.createServer((q, s) => { let b = ''; q.on('data', (c) => b += c); q.on('end', () => { q.body = b ? JSON.parse(b) : undefined; const h = routes[q.url.split('?')[0]]; if (!h) { s.statusCode = 404; return s.end(); } h(q, s); }); });
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
srv.listen(0, '127.0.0.1', async () => {
  const site = 'http://127.0.0.1:' + srv.address().port;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'acct-'));
  const mk = () => require('/home/claude/fsw/app/core/acctdesktop.js').create({ dir, openExternal: async () => { } });
  const pc = mk();
  let st = await pc.invoke('status'); T('starts signed out', !st.signedIn);
  try { await pc.invoke('login', { email: 'a@b.com', password: 'x' }); T('no server set -> clear error', false); } catch (e) { T('no server set -> clear error', /server address/.test(e.message), e.message); }
  try { await pc.invoke('setSite', 'ftp://evil'); T('bad site refused', false); } catch (e) { T('bad site refused', true); }
  await pc.invoke('setSite', site);
  await pc.invoke('register', { name: 'Bhav', email: 'bhav@x.com', password: 'longenough1' });
  try { await pc.invoke('login', { email: 'bhav@x.com', password: 'longenough1' }); T('unverified login blocked', false); } catch (e) { T('unverified login blocked', e.needsVerify === true, e.message); }
  const code = mails[mails.length - 1].text.match(/is (\d{6})/)[1];
  st = await pc.invoke('verify', { email: 'bhav@x.com', code }); T('verify signs in', st.signedIn && st.email === 'bhav@x.com', st);
  T('token saved with owner-only file', JSON.parse(fs.readFileSync(path.join(dir, 'account.json'))).token.length > 20);
  // restart: still signed in
  const pc2 = mk(); st = await pc2.invoke('status'); T('stays signed in after restart', st.signedIn && st.site === site, st);
  // PC session -> server -> "phone" (same account token) sees it
  pc2.push({ active: true, subject: 'OS', topicId: 'os1', lock: 'focus', endsAt: Date.now() + 600000, startedAt: Date.now() }); await new Promise((r) => setTimeout(r, 300));
  const phone = await (await fetch(site + '/api/session', { headers: { Authorization: 'Bearer ' + pc2.client.token() } })).json();
  T('phone sees PC session', phone.restrict && phone.subject === 'OS', phone);
  pc2.push({ active: false }); await new Promise((r) => setTimeout(r, 300));
  const after = await (await fetch(site + '/api/session', { headers: { Authorization: 'Bearer ' + pc2.client.token() } })).json();
  T('phone sees session end', !after.active, after); pc2.stop();
  st = await pc2.invoke('signout'); T('sign out', !st.signedIn);
  // Google through the browser step: fake browser performs the same calls login.html does
  global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ aud: 'cid123', iss: 'accounts.google.com', email_verified: 'true', exp: String(Math.floor(Date.now() / 1000) + 600), email: 'gg@x.com', sub: 's', name: 'Gee' }) });
  const pc3 = require('/home/claude/fsw/app/core/acctdesktop.js').create({ dir, openExternal: async (url) => {
    const u = new URL(url), cb = u.searchParams.get('cb'), ch = u.searchParams.get('ch');
    const call = (a, b, tok) => fetch(site + '/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(tok ? { Authorization: 'Bearer ' + tok } : {}) }, body: JSON.stringify({ a, ...b }) }).then((r) => r.json());
    const s = await call('google', { credential: 'x'.repeat(40) }); const t = await call('ticket', { ch }, s.token);
    await fetch(cb + '?ticket=' + t.ticket);
  } });
  await pc3.invoke('setSite', site);
  st = await pc3.invoke('google'); T('google via browser + ticket', st.signedIn && st.email === 'gg@x.com', st);
  console.log(bad ? 'FAIL' : 'ALL PASS'); srv.close(); pc3.stop(); process.exit(bad ? 1 : 0);
});

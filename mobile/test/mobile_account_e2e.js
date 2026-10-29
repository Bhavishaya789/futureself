/* Phone sign-in against the real API handlers (in-memory db): email code flow, Google flow, state kept, bridge gets the token. */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.GOOGLE_CLIENT_ID = 'cid123';
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const WWW = process.argv[2] || '/tmp/mw';
function col() { const rows = []; const m = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k])); return { async findOne(f) { return rows.find((r) => m(r, f)) || null; }, async insertOne(d) { rows.push({ ...d }); }, async findOneAndDelete(f) { const i = rows.findIndex((r) => m(r, f)); return i < 0 ? null : rows.splice(i, 1)[0]; }, async updateOne(f, u, o) { let r = rows.find((x) => m(x, f)); if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); } Object.assign(r, u.$set || {}); Object.keys(u.$unset || {}).forEach((k) => delete r[k]); Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; }); } }; }
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col() };
const mails = []; global.__FS_MAIL = async (m) => mails.push(m);
global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ aud: 'cid123', iss: 'accounts.google.com', email_verified: 'true', exp: String(Math.floor(Date.now() / 1000) + 600), email: 'gg@x.com', sub: 's', name: 'Gee' }) });
const A = '/home/claude/fsw/website/api/';
const routes = { '/api/auth': require(A + 'auth.js'), '/api/session': require(A + 'session.js') };
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => {
  const p0 = q.url.split('?')[0];
  if (routes[p0]) { r.setHeader('Access-Control-Allow-Origin', '*'); let b = ''; q.on('data', (c) => b += c); q.on('end', () => { q.body = b ? JSON.parse(b) : undefined; routes[p0](q, r); }); return; }
  let p = decodeURIComponent(p0); if (p === '/') p = '/index.html'; const f = path.join(WWW, p);
  if (!f.startsWith(WWW) || !fs.existsSync(f)) { r.writeHead(404); return r.end('no'); }
  r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : (x === undefined ? '' : JSON.stringify(x))); if (!c) fail++; };
(async () => {
  await new Promise((r) => srv.listen(0, r)); const base = 'http://localhost:' + srv.address().port;
  const br = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
  const ctx = await br.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await ctx.addInitScript({ path: path.join('/home/claude/fsw/mobile/test', 'fakebridge.js') });
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(base + '/index.html'); await page.waitForSelector('#acbox', { timeout: 20000 });
  ok('first run shows sign-in screen', /Create your account/.test(await page.textContent('#acbox')));
  ok('Google button present', !!(await page.$('[data-act=acgoogle]')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_account.png' });
  await page.click('[data-act=acsubmit]'); ok('empty form refused', /name/i.test(await page.textContent('#acerr')));
  await page.fill('#acn', 'Bhav'); await page.fill('#ace', 'phone@x.com'); await page.fill('#acp', 'longenough1'); await page.click('[data-act=acsubmit]');
  await page.waitForTimeout(500); ok('asks to set server first', /server address/i.test(await page.textContent('#acerr')), await page.textContent('#acerr'));
  await page.evaluate(() => document.querySelector('.acadv').open = true); await page.fill('#acsite', base); await page.click('[data-act=acsite]'); await page.waitForTimeout(300);
  await page.click('[data-act=acsubmit]'); await page.waitForSelector('#acc'); ok('code step after register', /Check your email/.test(await page.textContent('#acbox')));
  await page.fill('#acc', '000000'); await page.click('[data-act=acverify]'); await page.waitForTimeout(500); ok('wrong code message', /Wrong code/.test(await page.textContent('#acerr')), await page.textContent('#acerr'));
  const code = mails[mails.length - 1].text.match(/is (\d{6})/)[1];
  await page.fill('#acc', code); await page.click('[data-act=acverify]'); await page.waitForTimeout(1200);
  ok('signed in -> home', await page.evaluate(() => !!document.querySelector('.side')) && !(await page.$('#acbox')));
  const acc = await page.evaluate(() => window.__acct);
  ok('native side got site + token', acc && acc.site === base && acc.token.length > 20, acc);
  await page.evaluate(() => { location.hash = '#/account'; }); await page.waitForTimeout(600);
  ok('account page shows email', /phone@x\.com/.test(await page.textContent('#view')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_account_in.png' });
  await page.click('[data-act=acout]'); await page.waitForSelector('#acbox'); ok('signed out clears native token', (await page.evaluate(() => window.__acct)).token === '');
  await page.click('[data-act=acmode]'); await page.fill('#ace', 'phone@x.com'); await page.fill('#acp', 'longenough1'); await page.click('[data-act=acsubmit]'); await page.waitForTimeout(1200);
  ok('login again works', await page.evaluate(() => !!document.querySelector('.side')) && !(await page.$('#acbox')));
  await page.click('[data-act=acout]', { timeout: 100 }).catch(() => { }); await page.evaluate(() => { location.hash = '#/account'; }); await page.waitForTimeout(500); await page.click('[data-act=acout]'); await page.waitForSelector('#acbox');
  await page.click('[data-act=acgoogle]'); await page.waitForTimeout(2500);
  ok('google flow signs in', await page.evaluate(() => !!document.querySelector('.side')) && (await page.evaluate(() => window.__acct)).token.length > 20);
  await page.evaluate(() => { location.hash = '#/account'; }); await page.waitForTimeout(500); ok('google account email shown', /gg@x\.com/.test(await page.textContent('#view')));
  await page.evaluate(() => { location.hash = '#/phone'; }); await page.waitForSelector('#phlink'); ok('phone link card shows account link', /through your account/.test(await page.textContent('#phlink')) && !(await page.$('[data-act=phscan]')));
  ok('no page errors', errs.length === 0, errs);
  await br.close(); srv.close(); console.log(fail ? 'FAIL ' + fail : 'ALL PASS'); process.exit(fail ? 1 : 0);
})();

/* Phone sign-in against the real API handlers (in-memory db): email code flow, Google flow, state kept, bridge gets the token. */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.GOOGLE_CLIENT_ID = 'cid123';
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const WWW = process.argv[2] || '/tmp/mw';
function col() { const rows = []; const m = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k])); return { async findOne(f) { return rows.find((r) => m(r, f)) || null; }, async insertOne(d) { rows.push({ ...d }); }, async findOneAndDelete(f) { const i = rows.findIndex((r) => m(r, f)); return i < 0 ? null : rows.splice(i, 1)[0]; }, async updateOne(f, u, o) { let r = rows.find((x) => m(x, f)); if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); } Object.assign(r, u.$set || {}); Object.keys(u.$unset || {}).forEach((k) => delete r[k]); Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; }); } }; }
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col() };
const mails = []; global.__FS_MAIL = async (m) => mails.push(m);
const vrr = (id, t, c, l) => ({ videoRenderer: { videoId: id, title: { runs: [{ text: t }] }, ownerText: { runs: [{ text: c }] }, lengthText: { simpleText: l } } });
const ytPage = '<html><script>var ytInitialData = ' + JSON.stringify({ c: [vrr('aaaaaaaaaaa', 'SQL Joins explained with examples', 'Gate Smashers', '15:20'), vrr('bbbbbbbbbbb', 'Joins in SQL for beginners', 'Neso Academy', '18:00'), vrr('ccccccccccc', 'Funny cat song', 'Cats', '3:00')] }) + ';</script></html>';
global.__FS_FETCH = async (u) => /api\.anthropic\.com/.test(String(u)) ? { ok: true, json: async () => ({ content: [{ text: '{"awarded":[1,1,1,1,1,1,1,1],"feedback":"Clear working. Add the final unit."}' }] }) } : /youtube\.com\/results/.test(String(u)) ? { ok: true, text: async () => ytPage } : { ok: true, json: async () => ({ aud: 'cid123', iss: 'accounts.google.com', email_verified: 'true', exp: String(Math.floor(Date.now() / 1000) + 600), email: 'gg@x.com', sub: 's', name: 'Gee' }) };
const A = '/home/claude/fsw/website/api/';
const routes = { '/api/check': require(A + 'check.js'), '/api/auth': require(A + 'auth.js'), '/api/session': require(A + 'session.js'), '/api/videos': require(A + 'videos.js') };
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
  await ctx.addInitScript(() => { window.__granted = 1; }); await ctx.addInitScript({ path: path.join('/home/claude/fsw/mobile/test', 'fakebridge.js') });
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
  /* ---- two-way: a session started on the PHONE is announced to the server (so the PC locks), and cleared when it ends ---- */
  const srvState = () => page.evaluate(async (b) => { const t = window.__acct.token; const r = await fetch(b + '/api/session', { headers: { Authorization: 'Bearer ' + t } }); return r.json(); }, base);
  ok('idle before the phone session', !(await srvState()).active);
  await page.evaluate(() => { location.hash = '#/start?topic=operating-systems&min=25'; }); await page.waitForSelector('[data-act=sbegin]'); await page.click('[data-act=sbegin]'); await page.waitForSelector('.focus'); await page.waitForTimeout(1500);
  const ps = await srvState(); ok('phone session reaches the server as src=phone', ps.active && ps.restrict && ps.src === 'phone' && /Operating/i.test(ps.subject), ps);
  await page.click('[data-act=fend]'); await page.waitForTimeout(300); await page.click('[data-act=fgo]'); await page.waitForTimeout(1500);
  ok('ending on the phone clears the server state', !(await srvState()).active, await srvState());
  await page.waitForSelector('[data-act=sumclose]'); await page.click('[data-act=sumclose]'); await page.waitForTimeout(500);
  /* ---- video search from the lesson: the student asks, FutureSelf's server searches YouTube, only the list comes back ---- */
  await page.evaluate(() => { location.hash = '#/lesson/database-management-system/joins'; }); await page.waitForSelector('#ltabs .tab[data-id=video]', { timeout: 8000 });
  await page.click('#ltabs .tab[data-id=video]'); await page.waitForSelector('#vhost iframe', { timeout: 15000 });
  ok('search box is on the video tab', !!(await page.$('#vq')) && !!(await page.$('#vch')) && !!(await page.$('[data-act=vsearch]')));
  await page.fill('#vq', 'sql joins'); await page.fill('#vch', 'neso'); await page.click('[data-act=vsearch]'); await page.waitForSelector('.vitem', { timeout: 8000 }).catch(async () => { console.log('VRES:', await page.textContent('#vres')); throw new Error('no results'); });
  const rows = await page.evaluate(() => [...document.querySelectorAll('.vitem')].map((x) => x.textContent));
  ok('only videos from the asked channel are listed', rows.length === 1 && /Neso Academy/.test(rows[0]) && /Joins in SQL/.test(rows[0]), rows);
  await page.click('[data-act=vplay]'); await page.waitForTimeout(600);
  ok('chosen video plays in the guarded player', await page.evaluate(() => /embed\/bbbbbbbbbbb/.test(document.querySelector('#vhost iframe').src)), await page.evaluate(() => document.querySelector('#vhost iframe').src));
  ok('bridge allows exactly that video', (await page.evaluate(() => window.__log)).some((x) => x === 'allow:bbbbbbbbbbb'), await page.evaluate(() => window.__log.slice(-4)));
  await page.fill('#vq', 'sql joins'); await page.fill('#vch', 'No Such Channel'); await page.click('[data-act=vsearch]'); await page.waitForTimeout(800);
  ok('no match shows a note', /No study video from/.test(await page.textContent('#vres')), await page.textContent('#vres'));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_vsearch.png', fullPage: true });
  /* ---- practice answer: photo uploaded on the phone, marked by the SERVER's AI, photo opens inside the app ---- */
  process.env.ANTHROPIC_API_KEY = 'sk-test';
  await page.evaluate(() => { location.hash = '#/lesson/database-management-system/joins'; }); await page.waitForSelector('#ltabs .tab[data-id=practice]', { timeout: 8000 });
  await page.click('#ltabs .tab[data-id=practice]'); await page.waitForSelector('.pfile', { state: 'attached' });
  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64');
  await page.setInputFiles('.pfile[data-pi="0"]', { name: 'answer.png', mimeType: 'image/png', buffer: png }); await page.waitForSelector('#pth0 img');
  await page.click('#psub0'); await page.waitForSelector('[data-act=pai]', { timeout: 8000 });
  ok('AI check is offered when signed in', true);
  await page.click('[data-act=pai]'); await page.waitForSelector('#pres0 .badge', { timeout: 15000 }).catch(() => { });
  const res = await page.textContent('#pres0'); ok('server AI marked the answer', /AI checked/.test(res) && /Clear working/.test(res), res.slice(0, 200));
  await page.click('[data-act=pview]'); await page.waitForSelector('.th.big img', { timeout: 5000 });
  await page.click('.th.big img'); await page.waitForSelector('.pzoom img'); ok('answer photo opens full screen inside the app', true);
  await page.click('.pzoom [data-act=close]'); await page.waitForTimeout(200); ok('viewer closes', !(await page.$('.pzoom')));
  delete process.env.ANTHROPIC_API_KEY;
  await page.evaluate(() => { location.hash = '#/account'; }); await page.waitForTimeout(500);
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

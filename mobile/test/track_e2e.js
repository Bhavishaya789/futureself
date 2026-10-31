/* Profile (name, photo, 3D avatar) and its sync between two devices in the phone web layer, against the REAL server handlers (in-memory db). */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.GOOGLE_CLIENT_ID = 'cid123';
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto');
const WWW = process.argv[2] || '/home/claude/fsw/android/app/src/main/assets/www';
function col() { const rows = []; const m = (r, f) => Object.keys(f).every((k) => String(r[k]) === String(f[k]));
  return { rows, async findOne(f) { return rows.find((r) => m(r, f)) || null; }, async insertOne(d) { rows.push({ ...d }); },
    async findOneAndUpdate(f, u, o) { await this.updateOne(f, u, o); return rows.find((x) => m(x, f)) || null; },
    async updateOne(f, u, o) { let r = rows.find((x) => m(x, f)); if (!r) { if (!(o && o.upsert)) return; r = { _id: crypto.randomBytes(6).toString('hex'), ...f }; Object.assign(r, u.$setOnInsert || {}); rows.push(r); } Object.assign(r, u.$set || {}); Object.keys(u.$addToSet || {}).forEach((k) => { r[k] = r[k] || []; if (!r[k].includes(u.$addToSet[k])) r[k].push(u.$addToSet[k]); }); Object.keys(u.$pull || {}).forEach((k) => { r[k] = (r[k] || []).filter((x) => x !== u.$pull[k]); }); Object.keys(u.$inc || {}).forEach((k) => { r[k] = (r[k] || 0) + u.$inc[k]; }); } }; }
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), social: col() };
const L = require('/home/claude/fsw/website/api/_lib.js'), A = '/home/claude/fsw/website/api/';
const routes = { '/api/social': require(A + 'social.js'), '/api/session': require(A + 'session.js'), '/api/auth': require(A + 'auth.js'), '/api/update': require(A + 'update.js'), '/api/avatar': require(A + 'avatar.js') };
global.__FS_FETCH = async (url) => /generativelanguage/.test(String(url)) ? { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: JSON.stringify({ skin: 5, hair: 6, hc: 8, eyes: 2, mouth: 1, top: 2, tc: 9, acc: 4 }) }] } }] }) } : { ok: true, json: async () => ({ tag_name: 'v0.0.1', body: '', assets: [] }) };
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => {
  const p0 = q.url.split('?')[0];
  if (routes[p0]) { let b = ''; q.on('data', (c) => b += c); q.on('end', () => { q.body = b ? JSON.parse(b) : undefined; routes[p0](q, r); }); return; }
  let p = decodeURIComponent(p0); if (p === '/') p = '/index.html'; const f = path.join(WWW, p);
  if (!f.startsWith(WWW) || !fs.existsSync(f)) { r.writeHead(404); return r.end('no'); }
  r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});
const mk = (name, email) => { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; };
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : (x === undefined ? '' : JSON.stringify(x))); if (!c) fail++; };
const OUT = '/home/claude/fsw/mobile/test/';
(async () => {
  await new Promise((r) => srv.listen(0, r)); const base = 'http://localhost:' + srv.address().port;
  const me = mk('Asha Rao', 'asha@x.com');
  const br = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
  async function device(w, h) {
    const ctx = await br.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: w < 700, hasTouch: w < 700 });
    await ctx.addInitScript((a) => { window.__granted = 1; try { if (!localStorage.getItem('fs_acct')) localStorage.setItem('fs_acct', JSON.stringify(a)); } catch (e) { } }, { site: base, token: me.t, email: 'asha@x.com', name: 'Asha Rao', skip: false });
    await ctx.addInitScript({ path: '/home/claude/fsw/mobile/test/fakebridge.js' });
    const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    await page.goto(base + '/index.html'); await page.waitForSelector('.side', { timeout: 20000 });
    return { ctx, page, errs, go: async (hh, sel) => { await page.evaluate((x) => { location.hash = x; }, hh); if (sel) await page.waitForSelector(sel, { timeout: 15000 }); } };
  }
  const row = () => global.__FS_FAKE_DB.users.rows.find((u) => u.email === 'asha@x.com');
  const meOf = (d) => d.page.evaluate(() => window.fsApi.call('GET', '/me').then((r) => r.data));

  const names = (d) => d.page.$$eval('#lgrid .scard, #lgrid [data-act]', (els) => els.map((e) => (e.textContent || '').trim().slice(0, 60)));
  const d1 = await device(390, 800);
  await d1.page.waitForSelector('.modal, #modal, [data-act="trkmain"]', { timeout: 20000 }).catch(() => {});
  ok('chooser opens for a user with no track', !!(await d1.page.$('[data-act="trkmain"]')));
  await d1.page.click('[data-act="trkmain"][data-id="btech2"]'); await d1.page.click('[data-act="trksave"]');
  await d1.page.waitForTimeout(1500);
  ok('track saved on server', row().track === 'btech2', row());
  await d1.go('#/learn', '#semchips');
  const chips = await d1.page.$$eval('#semchips .chip', (e) => e.map((x) => x.textContent.trim()));
  ok('My subjects chip present', chips.some((c) => /^My subjects/.test(c)), chips);
  const mine = await d1.page.$$eval('#lgrid .ttl, #lgrid h3, #lgrid b', (e) => e.map((x) => x.textContent.trim()));
  const txt = await d1.page.$eval('#lgrid', (e) => e.textContent);
  ok('Semester 3 subject shown', /Operating System/i.test(txt), txt.slice(0, 200));
  ok('Class 11 hidden from a B.Tech 2nd-year', !/Class 11|NEET/i.test(txt), txt.slice(0, 200));
  await d1.page.click('#semchips .chip[data-id="all"]').catch(() => {});
  const txtAll = await d1.page.$eval('#lgrid', (e) => e.textContent);
  ok('All shows more subjects', txtAll.length > txt.length, [txt.length, txtAll.length]);
  await d1.page.screenshot({ path: OUT + 'm_learn_tracks.png' });
  /* second device gets the track without being asked */
  const d2 = await device(1200, 800);
  await d2.page.waitForTimeout(4000);
  ok('second device is asked once, with the saved choice ticked', !!(await d2.page.$('#trkmains .chip.on[data-id="btech2"]')));
  await d2.page.click('[data-act="trkskip"]'); await d2.page.waitForTimeout(500);
  const m2 = await meOf(d2); ok('second device knows the track', m2.track === 'btech2', m2);
  /* change track from the profile page */
  await d2.go('#/account', '.pcard, #acct, .side');
  await d2.page.evaluate(() => { const b = document.querySelector('[data-act="trkopen"]'); if (b) b.click(); });
  await d2.page.waitForSelector('[data-act="trkmain"]', { timeout: 8000 });
  await d2.page.click('[data-act="trkmain"][data-id="class11"]'); await d2.page.click('#trkexs [data-id="neet"]'); await d2.page.click('[data-act="trksave"]'); await d2.page.waitForTimeout(1500);
  ok('track changed to class 11 + NEET', row().track === 'class11,neet', row());
  await d2.go('#/learn', '#semchips');
  const t2 = await d2.page.$eval('#lgrid', (e) => e.textContent);
  ok('class 11 subjects shown', /Physics/i.test(t2) && !/Operating System/i.test(t2), t2.slice(0, 200));
  await d2.page.screenshot({ path: OUT + 'pc_learn_tracks.png' });
  /* government exams and GK track */
  await d2.go('#/account', '.pcard, #acct, .side');
  await d2.page.evaluate(() => { const b = document.querySelector('[data-act="trkopen"]'); if (b) b.click(); });
  await d2.page.waitForSelector('[data-act="trkmain"]', { timeout: 8000 });
  await d2.page.click('[data-act="trkmain"][data-id="class11"]'); await d2.page.click('#trkexs [data-id="neet"]'); await d2.page.click('#trkexs [data-id="govt"]'); await d2.page.click('[data-act="trksave"]'); await d2.page.waitForTimeout(1500);
  ok('class 11 + govt saved', row().track === 'class11,govt', row());
  await d2.go('#/learn', '#semchips');
  const t3 = await d2.page.$eval('#lgrid', (e) => e.textContent);
  ok('govt subjects shown', /Polity/i.test(t3) && /Quantitative/i.test(t3) && /Physics/i.test(t3) && !/Operating System/i.test(t3), t3.slice(0, 300));
  await d2.go('#/', '.hero-col');
  const dg = await d2.page.$eval('.dgk', (e) => e.textContent).catch(() => '');
  ok("Today's GK card shows English and Hindi", /Today's GK/.test(dg) && /[\u0900-\u097F]/.test(dg), dg.slice(0, 200));
  const e = [...d1.errs, ...d2.errs].filter((x) => !/503|Failed to load resource/.test(x)); ok('no page errors', e.length === 0, e);
  await br.close(); srv.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASS'); process.exit(fail ? 1 : 0);
})();

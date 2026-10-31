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
  const me = mk('Asha Rao', 'asha@x.com'); me.u.track = 'class11';
  const br = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
  async function device(w, h) {
    const ctx = await br.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2, isMobile: w < 700, hasTouch: w < 700 });
    await ctx.addInitScript(() => { try { localStorage.setItem('fs_trackv', '2'); } catch (e) {} });
    await ctx.addInitScript((a) => { window.__granted = 1; try { if (!localStorage.getItem('fs_acct')) localStorage.setItem('fs_acct', JSON.stringify(a)); } catch (e) { } }, { site: base, token: me.t, email: 'asha@x.com', name: 'Asha Rao', skip: false });
    await ctx.addInitScript({ path: '/home/claude/fsw/mobile/test/fakebridge.js' });
    const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    await page.goto(base + '/index.html'); await page.waitForSelector('.side', { timeout: 20000 });
    return { ctx, page, errs, go: async (hh, sel) => { await page.evaluate((x) => { location.hash = x; }, hh); if (sel) await page.waitForSelector(sel, { timeout: 15000 }); } };
  }
  const row = () => global.__FS_FAKE_DB.users.rows.find((u) => u.email === 'asha@x.com');
  async function run(w, h, tag) {
    const d = await device(w, h); await d.page.waitForTimeout(4500);
    await d.page.evaluate(() => { location.hash = '#/start'; }); await d.page.waitForSelector('.dd-btn', { timeout: 15000 });
    ok(tag + ': native select hidden, custom button present', await d.page.$eval('#st', (e) => e.classList.contains('dd-native')));
    await d.page.click('#st ~ *, .dd-btn'); await d.page.waitForSelector('.dd-panel', { timeout: 5000 }); await d.page.waitForTimeout(500);
    const txt = await d.page.$eval('.dd-list', (e) => e.textContent);
    ok(tag + ': Class 11 subjects listed', /Physics/.test(txt) && /Chemistry/.test(txt), txt.slice(0, 200));
    const vis = await d.page.$$eval('.dd-opt', (els) => els.map((e) => e.textContent));
    ok(tag + ': B.Tech subjects hidden until "Other courses" is opened', !vis.some((t) => /Operating System|Computer Networks|Machine Learning/i.test(t)), vis.slice(0, 12));
    ok(tag + ': other courses group present and folded', /Other courses/.test(txt));
    await d.page.screenshot({ path: OUT + 'dd_' + tag + '_open.png' });
    await d.page.fill('.dd-search', 'quantum'); await d.page.waitForTimeout(300);
    const found = await d.page.$$eval('.dd-opt', (els) => els.map((e) => e.textContent));
    ok(tag + ': search reaches folded subjects', found.some((t) => /Quantum/i.test(t)), found);
    await d.page.fill('.dd-search', 'physics'); await d.page.waitForTimeout(300);
    await d.page.click('.dd-opt'); await d.page.waitForTimeout(1200);
    ok(tag + ': picking a subject goes to it', /topic=/.test(await d.page.evaluate(() => location.hash)), await d.page.evaluate(() => location.hash));
    await d.page.waitForSelector('.dd-btn'); const lab = await d.page.$eval('.dd-label', (e) => e.textContent);
    ok(tag + ': button shows chosen subject', /Physics/i.test(lab), lab);
    await d.page.click('.dd-btn'); await d.page.waitForSelector('.dd-panel'); await d.page.keyboard.press('Escape'); await d.page.waitForTimeout(400);
    ok(tag + ': Escape closes', !(await d.page.$('.dd-panel')));
    const e = d.errs.filter((x) => !/503|Failed to load resource/.test(x)); ok(tag + ': no page errors', e.length === 0, e);
    await d.ctx.close();
  }
  await run(1000, 800, 'pc'); await run(390, 800, 'phone');
  /* a B.Tech year 2 student sees Semester 3 and 4 first */
  row().track = 'btech2';
  const d2 = await device(1000, 800); await d2.page.waitForTimeout(4500);
  await d2.page.evaluate(() => { location.hash = '#/start'; }); await d2.page.waitForSelector('.dd-btn');
  await d2.page.click('.dd-btn'); await d2.page.waitForSelector('.dd-panel'); await d2.page.waitForTimeout(500);
  const groups = await d2.page.$$eval('.dd-grp', (els) => els.map((e) => e.firstChild.textContent));
  ok('btech2 groups start with Semester 3', /Semester 3/.test(groups[0] || ''), groups);
  const opts2 = await d2.page.$$eval('.dd-opt', (els) => els.map((e) => e.textContent).join('|'));
  ok('btech2 does not list Class 11 physics up front', !/Class 11|Kinematics/i.test(opts2), opts2.slice(0, 200));
  await d2.page.screenshot({ path: OUT + 'dd_btech2_open.png' });
  await br.close(); srv.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASS'); process.exit(fail ? 1 : 0);
})();

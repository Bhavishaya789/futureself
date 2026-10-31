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
  const me = mk('Asha Rao', 'asha@x.com'); me.u.track = 'class10';
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
  const d = await device(1000, 800);
  const open = async (path) => { await d.page.evaluate((h) => { location.hash = h; }, '#/lesson/' + path); await d.page.waitForSelector('#langbar', { timeout: 15000 }); };
  const id = await d.page.evaluate(() => fetch('/content.json').then((r) => r.json()).then((c) => { const s = Object.values(c).find((x) => /Mathematics/.test(x.title) && /10/.test(x.folder || '') ); return s ? s.id : ''; }));
  ok('found class 10 maths subject', !!id, id);
  await open(id + '/coordinate-geometry-and-circles');
  let h1 = await d.page.$eval('h1', (e) => e.textContent);
  ok('English by default', /Coordinate geometry/.test(h1), h1);
  await d.page.selectOption('#fslang', 'hi'); await d.page.waitForSelector('#langbar', { timeout: 10000 }); await d.page.waitForTimeout(500);
  h1 = await d.page.$eval('h1', (e) => e.textContent);
  ok('Hindi title shown', /निर्देशांक/.test(h1), h1);
  const body = await d.page.$eval('.lesson-grid', (e) => e.textContent);
  ok('Hindi study text shown', /दूरी सूत्र/.test(body), body.slice(0, 120));
  await d.page.selectOption('#fslang', 'ur'); await d.page.waitForTimeout(800);
  const dir = await d.page.$eval('.lesson-grid > div', (e) => e.getAttribute('dir'));
  ok('Urdu lesson is right-to-left', dir === 'rtl', dir);
  await d.page.selectOption('#fslang', 'fr'); await d.page.waitForTimeout(800);
  ok('French title shown', /Géométrie analytique/.test(await d.page.$eval('h1', (e) => e.textContent)));
  /* a lesson without a translation falls back to English with a note */
  await d.page.evaluate(() => { location.hash = '#/learn'; }); await d.page.waitForTimeout(800);
  const id2 = await d.page.evaluate(() => fetch('/content.json').then((r) => r.json()).then((c) => { const s = Object.values(c).find((x) => /Physics/.test(x.title) && /Class-11/.test(x.folder || '')); return s ? s.id + '/' + s.units[0].lessons[0].id : ''; }));
  if (id2) { await d.page.evaluate((h) => { location.hash = '#/lesson/' + h; }, id2); await d.page.waitForSelector('#langbar', { timeout: 15000 }); const note = await d.page.$eval('#langbar', (e) => e.textContent); ok('untranslated lesson says so', /Not translated/.test(note), note); }
  /* quiz still grades in a translated lesson */
  await d.page.evaluate(() => localStorage.setItem('fs_lang', 'hi'));
  await open(id + '/coordinate-geometry-and-circles'); await d.page.evaluate(() => document.querySelector('[data-act="ltab"][data-id="quiz"]').click());
  const nq = await d.page.$$eval('#quiz .q', (e) => e.length); ok('translated quiz has 4 questions', nq === 4, nq);
  /* dictionary */
  await d.page.evaluate(() => { location.hash = '#/dictionary'; }); await d.page.waitForSelector('#dq', { timeout: 10000 });
  await d.page.fill('#dq', 'force'); await d.page.waitForTimeout(300);
  let dl = await d.page.$eval('#dlist', (e) => e.textContent); ok('dictionary finds force with Hindi', /force/i.test(dl) && /बल/.test(dl), dl.slice(0, 160));
  await d.page.fill('#dq', 'ਬਲ'); await d.page.waitForTimeout(300);
  dl = await d.page.$eval('#dlist', (e) => e.textContent); ok('dictionary finds by a Punjabi word', /force/.test(dl), dl.slice(0, 160));
  await d.page.fill('#dq', 'photosynthesis'); await d.page.selectOption('#dlang', 'ta'); await d.page.waitForTimeout(300);
  dl = await d.page.$eval('#dlist', (e) => e.textContent); ok('dictionary shows Tamil meaning', /ஒளிச்சேர்க்கை/.test(dl), dl.slice(0, 200));
  await d.page.screenshot({ path: OUT + 'm_dictionary.png' });
  const e = d.errs.filter((x) => !/503|Failed to load resource/.test(x)); ok('no page errors', e.length === 0, e);
  await br.close(); srv.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASS'); process.exit(fail ? 1 : 0);
})();

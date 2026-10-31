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
  const id = await d.page.evaluate(() => fetch('/content.json').then((r) => r.json()).then((c) => { const s = Object.values(c).find((x) => /Mathematics/.test(x.title) && /10/.test(x.title)); return s ? s.id : ''; }));
  ok('found class 10 maths', !!id, id);
  await d.page.evaluate((h) => { location.hash = '#/lesson/' + h; }, id + '/quadratic-equations-and-ap'); await d.page.waitForSelector('#ltabs', { timeout: 15000 });
  const tabs = await d.page.$$eval('#ltabs .tab', (e) => e.map((x) => x.textContent.trim()));
  ok('Formulas tab present', tabs.some((t) => /^Formulas \(\d+\)/.test(t)), tabs);
  ok('Q&A tab shows 100+', tabs.some((t) => { const m = /Q&A \((\d+)\)/.exec(t); return m && +m[1] >= 100; }), tabs);
  ok('Quiz tab shows 100+', tabs.some((t) => { const m = /Quiz \((\d+)\)/.exec(t); return m && +m[1] >= 100; }), tabs);
  await d.page.click('#ltabs .tab[data-id="formulas"]');
  const rows = await d.page.$$eval('.ftable tbody tr', (e) => e.length); ok('formula table has rows', rows >= 20, rows);
  ok('formula text shown', /b\^2 - 4ac/.test(await d.page.$eval('.ftable', (e) => e.textContent)));
  await d.page.screenshot({ path: OUT + 'pc_formulas.png' });
  await d.page.click('#ltabs .tab[data-id="qa"]');
  const vis = () => d.page.$$eval('details.qa', (e) => e.filter((x) => !x.hidden).length);
  ok('first 25 questions visible', (await vis()) === 25, await vis());
  await d.page.fill('#qasearch', 'discriminant'); await d.page.waitForTimeout(200);
  const f = await vis(); ok('search narrows the list', f > 0 && f < 60, f);
  await d.page.fill('#qasearch', ''); await d.page.waitForTimeout(200);
  await d.page.click('[data-act=qamore]'); ok('show the rest', (await vis()) >= 100, await vis());
  await d.page.click('#ltabs .tab[data-id="quiz"]');
  const n1 = await d.page.$$eval('#quiz .q', (e) => e.map((x) => x.dataset.q)); ok('a set of 10 questions', n1.length === 10, n1.length);
  for (const q of n1) await d.page.click('#quiz .opt[data-q="' + q + '"] >> nth=0');
  await d.page.click('[data-act=grade]'); await d.page.waitForTimeout(400);
  ok('graded out of 10', /You scored \d+\/10/.test(await d.page.$eval('#score', (e) => e.textContent)), await d.page.$eval('#score', (e) => e.textContent));
  await d.page.click('[data-act=retry]'); await d.page.waitForSelector('#quiz .q', { timeout: 10000 }); await d.page.click('#ltabs .tab[data-id="quiz"]').catch(() => {});
  const n2 = await d.page.$$eval('#quiz .q', (e) => e.map((x) => x.dataset.q)); ok('a fresh set after retry', n2.length === 10 && n2.every((x) => n1.indexOf(x) < 0), [n1, n2]);
  await d.page.screenshot({ path: OUT + 'pc_bank.png' });
  /* Hindi lesson with a partial translation keeps working */
  await d.page.evaluate(() => localStorage.setItem('fs_lang', 'hi')); await d.page.evaluate(() => { location.reload(); }); await d.page.waitForSelector('.side', { timeout: 20000 });
  await d.page.evaluate((h) => { location.hash = '#/lesson/' + h; }, id + '/quadratic-equations-and-ap'); await d.page.waitForSelector('#ltabs', { timeout: 15000 });
  ok('Hindi lesson still has 100+ questions', (await d.page.$$eval('#ltabs .tab', (e) => e.map((x) => x.textContent))).some((t) => { const m = /Quiz \((\d+)\)/.exec(t); return m && +m[1] >= 100; }));
  ok('no page errors', d.errs.length === 0, d.errs);
  await br.close(); srv.close(); console.log(fail ? 'FAILED ' + fail : 'ALL PASS'); process.exit(fail ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });

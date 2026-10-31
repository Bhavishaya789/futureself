/* Friends, leaderboard, rooms, weekly report, music and themes in the phone web layer, against the REAL server handlers (in-memory db). */
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
const routes = { '/api/social': require(A + 'social.js'), '/api/session': require(A + 'session.js'), '/api/auth': require(A + 'auth.js'), '/api/update': require(A + 'update.js') };
global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ tag_name: 'v0.0.1', body: '', assets: [] }) });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => {
  const p0 = q.url.split('?')[0];
  if (routes[p0]) { let b = ''; q.on('data', (c) => b += c); q.on('end', () => { q.body = b ? JSON.parse(b) : undefined; routes[p0](q, r); }); return; }
  let p = decodeURIComponent(p0); if (p === '/') p = '/index.html'; const f = path.join(WWW, p);
  if (!f.startsWith(WWW) || !fs.existsSync(f)) { r.writeHead(404); return r.end('no'); }
  r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});
const mk = (name, email) => { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0, track: 'btech2' }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; };
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : (x === undefined ? '' : JSON.stringify(x))); if (!c) fail++; };
(async () => {
  await new Promise((r) => srv.listen(0, r)); const base = 'http://localhost:' + srv.address().port;
  const me = mk('Asha', 'asha@x.com'), bh = mk('Bhav', 'bhav@x.com');
  const api = (t, b) => fetch(base + '/api/social', { method: 'POST', headers: { Authorization: 'Bearer ' + t, 'Content-Type': 'application/json' }, body: JSON.stringify(b) }).then((r) => r.json());
  await api(bh.t, { a: 'add', email: 'asha@x.com' });
  const br = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });
  const ctx = await br.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await ctx.addInitScript(() => { try { localStorage.setItem('fs_trackv', '2'); } catch (e) {} });
  await ctx.addInitScript((a) => { window.__granted = 1; try { localStorage.setItem('fs_acct', JSON.stringify(a)); } catch (e) { } }, { site: base, token: me.t, email: 'asha@x.com', name: 'Asha', skip: false });
  await ctx.addInitScript({ path: '/home/claude/fsw/mobile/test/fakebridge.js' });
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  const go = async (h, sel) => { await page.evaluate((x) => { location.hash = x; }, h); if (sel) await page.waitForSelector(sel, { timeout: 15000 }); };
  await page.goto(base + '/index.html'); await page.waitForSelector('.side', { timeout: 20000 });
  await page.click('[data-act=more]'); await page.waitForSelector('#msheet .msgrid a'); ok('Friends is in the More menu', (await page.$$eval('#msheet .msgrid a', (a) => a.map((x) => x.textContent))).some((t) => /Friends/.test(t))); await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_more.png' }); await page.click('#msheet .msback', { position: { x: 20, y: 20 } });
  await go('#/friends', '#lb'); await page.waitForSelector('[data-act=facc]', { timeout: 8000 });
  ok('friend request from Bhav is shown', /Bhav/.test(await page.textContent('#fbody')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_friends_req.png', fullPage: true });
  await page.click('[data-act=facc]'); await page.waitForFunction(() => /Bhav/.test(document.querySelector('#lb').textContent) && !document.querySelector('[data-act=facc]'), null, { timeout: 8000 });
  ok('accepting puts Bhav on the leaderboard', true);
  await api(bh.t, { a: 'sync', weekMin: 200, weekKey: '2000-01-03', todayMin: 20, streak: 3, studying: { on: true, subject: 'Maths', endsAt: Date.now() + 900000 } });
  await page.fill('#femail', 'nobody@x.com'); await page.click('[data-act=fadd]'); await page.waitForTimeout(600);
  ok('adding an unknown email gives no hint it is unknown', !(await page.textContent('#ferr')).length);
  await page.click('[data-act=rnew]'); await page.waitForSelector('.rcodebig', { timeout: 8000 });
  const code = await page.textContent('.rcodebig'); ok('room code shown', /^[A-Z0-9]{6}$/.test(code.trim()), code);
  await api(bh.t, { a: 'roomJoin', code: code.trim() });
  await go('#/', '.side'); await go('#/friends'); await page.waitForFunction(() => document.querySelectorAll('#room .item').length === 2, null, { timeout: 10000 }).catch(() => { });
  ok('room lists both people', (await page.$$eval('#room .item', (x) => x.length)) === 2, await page.textContent('#room'));
  ok('leaderboard shows me', await page.$('.lbrow.me') !== null);
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_friends.png', fullPage: true });
  await page.click('[data-act=frem]'); await page.waitForTimeout(200); ok('remove asks for a second tap', await page.$('#lb .lbrow:not(.me)') !== null);
  await page.click('[data-act=frem]'); await page.waitForFunction(() => !document.querySelector('#lb .lbrow:not(.me)'), null, { timeout: 8000 }); ok('second tap removes the friend', true);
  /* a study session on this device shows up for friends */
  await go('#/start?topic=operating-systems&min=25', '[data-act=sbegin]'); await page.click('[data-act=sbegin]'); await page.waitForSelector('.focus'); await page.waitForTimeout(800);
  ok('music box inside the session', !!(await page.$('#fmus')));
  await page.evaluate(() => { document.querySelector('#fmus').open = true; });
  for (const id of ['lofi', 'rain', 'binaural', 'pad', 'space', 'white', 'brown']) { await page.click('#fmus [data-act=mplay][data-id=' + id + ']'); await page.waitForTimeout(250); ok('music: ' + id + ' plays', await page.$('#fmus .chip.on[data-id=' + id + ']') !== null); }
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_focus_music.png' });
  await page.click('#fmus [data-act=mstop]'); await page.waitForTimeout(200); ok('stop works', (await page.$('#fmus .chip.on')) === null);
  await page.waitForTimeout(7000);
  const live = await api(me.t, { a: 'room' }); ok('my live session reached the room', live.members.some((m) => m.me && m.studying && /Operating/i.test(m.studying.subject)), live);
  await page.click('[data-act=fend]'); await page.waitForTimeout(300); await page.click('[data-act=fgo]'); await page.waitForSelector('[data-act=sumclose]'); await page.click('[data-act=sumclose]'); await page.waitForTimeout(500);
  /* weekly report + themes */
  await go('#/progress', '#wkrep'); ok('weekly report card', /Your week/.test(await page.textContent('#wkrep')) && /Study time/.test(await page.textContent('#wkrep')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_report.png', fullPage: true });
  await go('#/settings', '#extras'); ok('settings has themes and music', (await page.$$('#themes .chip')).length === 5 && (await page.$$('#musbox .chip')).length === 7);
  await page.click('#themes [data-act=theme][data-id=forest]'); await page.waitForTimeout(150);
  ok('theme changes colours', await page.evaluate(() => /--bg:#04120c/.test(document.getElementById('fs-theme').textContent) && getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() === '#04120c'));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_theme.png' });
  await page.reload(); await page.waitForSelector('.side'); ok('theme is remembered', await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() === '#04120c'));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1); ok('no sideways scroll on the phone', !overflow);
  const navFit = await page.evaluate(() => [...document.querySelectorAll('#nav a')].every((a) => { const r = a.getBoundingClientRect(); return r.left >= -1 && r.right <= innerWidth + 1; })); ok('all nav buttons fit on screen', navFit);
  ok('no page errors', errs.length === 0, errs);
  await br.close(); srv.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASS'); process.exit(fail ? 1 : 0);
})().catch((e) => { console.error('CRASH', e); process.exit(1); });

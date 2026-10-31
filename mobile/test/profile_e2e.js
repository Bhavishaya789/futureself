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
const mk = (name, email) => { const u = { _id: crypto.randomBytes(6).toString('hex'), email, name, verified: true, tv: 0, track: 'btech2' }; global.__FS_FAKE_DB.users.rows.push(u); return { u, t: L.newToken(u) }; };
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : (x === undefined ? '' : JSON.stringify(x))); if (!c) fail++; };
const OUT = '/home/claude/fsw/mobile/test/';
(async () => {
  await new Promise((r) => srv.listen(0, r)); const base = 'http://localhost:' + srv.address().port;
  const me = mk('Asha Rao', 'asha@x.com');
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
  const meOf = (d) => d.page.evaluate(() => window.fsApi.call('GET', '/me').then((r) => r.data));

  /* ---- device 1 (phone) ---- */
  const d1 = await device(390, 844);
  await d1.page.evaluate(() => FSX.profileSync()); await d1.page.waitForTimeout(800);
  let u1 = await meOf(d1);
  ok('first sign-in takes the real name from the account', u1.name === 'Asha Rao', u1.name);
  ok('greeting uses the first name', /Asha/.test(await d1.page.textContent('.hellotx h1')) && !/Student/.test(await d1.page.textContent('.hellotx h1')), await d1.page.textContent('.hellotx h1'));
  await d1.page.screenshot({ path: OUT + 'm_home2.png' });
  await d1.go('#/account', '.profcard');
  ok('profile page has name, photo and avatar controls', !!(await d1.page.$('#pfname')) && !!(await d1.page.$('#pfphoto')) && !!(await d1.page.$('[data-act=pfavatar]')));
  await d1.page.screenshot({ path: OUT + 'm_profile.png', fullPage: true });

  /* rename */
  await d1.page.fill('#pfname', 'Asha Rao Kumar'); await d1.page.click('[data-act=pfsave]'); await d1.page.waitForTimeout(1500);
  ok('rename reaches the account', row().name === 'Asha Rao Kumar', row().name);
  await d1.go('#/', '.hellotx h1'); ok('greeting shows new first name', /Asha/.test(await d1.page.textContent('.hellotx h1')));
  await d1.go('#/account', '.profcard'); await d1.page.fill('#pfname', 'A'); await d1.page.click('[data-act=pfsave]'); await d1.page.waitForTimeout(300);
  ok('one-letter name is refused with a message', /2 letters/.test(await d1.page.textContent('#pferr')));

  /* photo */
  const png = await d1.page.evaluate(() => { const c = document.createElement('canvas'); c.width = 600; c.height = 400; const x = c.getContext('2d'); x.fillStyle = '#e44'; x.fillRect(0, 0, 600, 400); x.fillStyle = '#4e4'; x.fillRect(150, 50, 300, 300); return c.toDataURL('image/png').split(',')[1]; });
  await d1.page.setInputFiles('#pfphoto', { name: 'me.png', mimeType: 'image/png', buffer: Buffer.from(png, 'base64') });
  await d1.page.waitForFunction(() => document.querySelector('.pbig img'), null, { timeout: 10000 }); await d1.page.waitForTimeout(1500);
  ok('photo is shown on the profile page', !!(await d1.page.$('.pbig img')));
  ok('photo is stored as a small square jpeg on the account', /^data:image\/jpeg;base64,/.test(row().photo || '') && row().photo.length < 90000, (row().photo || '').length);
  const dim = await d1.page.evaluate(() => new Promise((r) => { const i = new Image(); i.onload = () => r([i.width, i.height]); i.src = document.querySelector('.pbig img').src; }));
  ok('photo is cropped square 256 px', dim[0] === 256 && dim[1] === 256, dim);
  await d1.go('#/', '.hav'); ok('home shows the photo in the greeting', !!(await d1.page.$('.hav .pav img')));
  await d1.page.screenshot({ path: OUT + 'm_home_photo.png' });
  await d1.go('#/account', '.profcard'); await d1.page.click('[data-act=pfnophoto]'); await d1.page.waitForTimeout(1200);
  ok('photo can be removed', !row().photo && !(await d1.page.$('.pbig img')), row().photo);

  /* 3D avatar */
  await d1.page.click('[data-act=pfavatar]'); await d1.page.waitForSelector('#avcv'); await d1.page.waitForTimeout(500);
  const px = () => d1.page.evaluate(() => { const c = document.querySelector('#avcv'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; const set = new Set(); for (let i = 0; i < d.length; i += 4 * 97) set.add(d[i] + ',' + d[i + 1] + ',' + d[i + 2]); return set.size; });
  ok('avatar preview is really drawn (many colours)', (await px()) > 25, await px());
  /* make the avatar from a picture */
  const pic = await d1.page.evaluate(() => { const c = document.createElement('canvas'); c.width = 400; c.height = 400; const x = c.getContext('2d'); x.fillStyle = '#8a8f98'; x.fillRect(0, 0, 400, 400); x.fillStyle = '#C68642'; x.fillRect(110, 110, 180, 190); x.fillStyle = '#2B1B12'; x.fillRect(100, 10, 200, 80); x.fillStyle = '#3B82F6'; x.fillRect(40, 345, 320, 55); return c.toDataURL('image/png').split(',')[1]; });
  const sel = (k) => d1.page.$eval('[data-act=avset][data-k="' + k + '"].on', (el) => +el.dataset.v);
  await d1.page.setInputFiles('#avpic', { name: 'face.png', mimeType: 'image/png', buffer: Buffer.from(pic, 'base64') });
  await d1.page.waitForFunction(() => /Quick match/.test(document.querySelector('#avnote').textContent), null, { timeout: 15000 });
  ok('without AI: skin colour matched from the picture', (await sel('skin')) === 3, await sel('skin'));
  ok('without AI: hair colour matched (black)', (await sel('hc')) === 0 && (await sel('hair')) === 1, [await sel('hc'), await sel('hair')]);
  ok('without AI: clothes colour matched (blue)', (await sel('tc')) === 5, await sel('tc'));
  process.env.GEMINI_API_KEY = 'k';
  await d1.page.setInputFiles('#avpic', { name: 'face2.png', mimeType: 'image/png', buffer: Buffer.from(pic, 'base64') });
  await d1.page.waitForFunction(() => /^Done/.test(document.querySelector('#avnote').textContent), null, { timeout: 15000 });
  ok('with AI: every option comes from the AI answer', (await sel('skin')) === 5 && (await sel('hair')) === 6 && (await sel('hc')) === 8 && (await sel('acc')) === 4 && (await sel('top')) === 2 && (await sel('tc')) === 9, 0);
  await d1.page.screenshot({ path: OUT + 'm_avatar_fromphoto.png' });
  delete process.env.GEMINI_API_KEY;
  await d1.page.screenshot({ path: OUT + 'm_avatar_builder.png' });
  const snap = () => d1.page.evaluate(() => document.querySelector('#avcv').toDataURL());
  const s0 = await snap();
  await d1.page.click('[data-act=avset][data-k=hair][data-v="3"]'); await d1.page.click('[data-act=avset][data-k=acc][data-v="3"]'); await d1.page.click('[data-act=avset][data-k=skin][data-v="4"]'); await d1.page.click('[data-act=avset][data-k=bg][data-v="2"]'); await d1.page.waitForTimeout(300);
  ok('choosing options changes the picture', (await snap()) !== s0);
  await d1.page.screenshot({ path: OUT + 'm_avatar_builder2.png' });
  const box = await d1.page.locator('#avcv').boundingBox(); const a0 = await snap();
  await d1.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await d1.page.mouse.down(); await d1.page.mouse.move(box.x + box.width / 2 + 90, box.y + box.height / 2, { steps: 6 }); await d1.page.mouse.up(); await d1.page.waitForTimeout(200);
  ok('dragging turns the avatar', (await snap()) !== a0);
  for (const [k, n] of [['hair', 8], ['eyes', 4], ['mouth', 4], ['top', 3], ['acc', 5]]) { for (let i = 0; i < n; i++) { await d1.page.click('[data-act=avset][data-k=' + k + '][data-v="' + i + '"]'); } }
  await d1.page.click('[data-act=avrand]'); await d1.page.waitForTimeout(200);
  await d1.page.click('[data-act=avset][data-k=hair][data-v="3"]'); await d1.page.click('[data-act=avset][data-k=acc][data-v="3"]'); await d1.page.click('[data-act=avset][data-k=skin][data-v="4"]'); await d1.page.click('[data-act=avset][data-k=bg][data-v="2"]'); await d1.page.click('[data-act=avset][data-k=eyes][data-v="1"]');
  await d1.page.click('[data-act=avsave]'); await d1.page.waitForTimeout(1800);
  ok('avatar reaches the account', row().avatar && row().avatar.hair === 3 && row().avatar.acc === 3 && row().avatar.skin === 4 && row().avatar.bg === 2 && row().avatar.eyes === 1, row().avatar);
  ok('profile page shows the live 3D avatar', !!(await d1.page.$('.pbig canvas')));
  await d1.page.screenshot({ path: OUT + 'm_profile_avatar.png', fullPage: true });
  await d1.go('#/', '.hav'); ok('home shows the avatar picture', /^data:image\/png/.test(await d1.page.getAttribute('.hav .pav img', 'src')));
  await d1.page.screenshot({ path: OUT + 'm_home_avatar.png' });

  /* ---- device 2 (a PC-sized window, fresh storage, same account) ---- */
  const d2 = await device(1280, 800);
  await d2.page.evaluate(() => FSX.profileSync()); await d2.page.waitForTimeout(1500);
  const u2 = await meOf(d2);
  ok('second device gets the same name', u2.name === 'Asha Rao Kumar', u2.name);
  ok('second device gets the same avatar', u2.avatar && u2.avatar.hair === 3 && u2.avatar.acc === 3 && u2.avatar.skin === 4, u2.avatar);
  ok('second device shows it in the sidebar', /^data:image\/png/.test(await d2.page.getAttribute('.side .me .pav img', 'src')));
  ok('second device greets by the same name', /Asha/.test(await d2.page.textContent('.hellotx h1')));
  await d2.page.screenshot({ path: OUT + 'pc_home_avatar.png' });
  /* change it on device 2, device 1 follows */
  await d2.go('#/account', '.profcard'); await d2.page.fill('#pfname', 'Ashu K'); await d2.page.click('[data-act=pfsave]'); await d2.page.waitForTimeout(1500);
  ok('device 2 rename reaches the account', row().name === 'Ashu K', row().name);
  await d1.page.evaluate(() => FSX.profileSync()); await d1.page.waitForTimeout(1500);
  ok('device 1 follows the change', (await meOf(d1)).name === 'Ashu K');
  await d1.go('#/', '.hellotx h1'); ok('device 1 greeting updates', /Ashu/.test(await d1.page.textContent('.hellotx h1')), await d1.page.textContent('.hellotx h1'));
  /* photo made on device 2 replaces the avatar everywhere */
  await d2.page.setInputFiles('#pfphoto', { name: 'me.png', mimeType: 'image/png', buffer: Buffer.from(png, 'base64') }); await d2.page.waitForTimeout(2200);
  await d1.page.evaluate(() => FSX.profileSync()); await d1.page.waitForTimeout(1500);
  ok('photo from device 2 arrives on device 1', /^data:image\/jpeg/.test((await meOf(d1)).photo || ''));
  ok('avatar kept alongside the photo', !!(await meOf(d1)).avatar);

  const real = d1.errs.concat(d2.errs).filter((e) => !/503/.test(e)); ok('no page errors on either device (the expected 503 when the AI is off is ignored)', real.length === 0, real);
  await br.close(); srv.close(); console.log(fail ? fail + ' FAILED' : 'ALL PASS'); process.exit(fail ? 1 : 0);
})();

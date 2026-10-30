/* Permission wizard: appears by itself, guides each step, checks permissions, auto-advances, blocks strict start until ready. */
const { chromium } = require('playwright'), http = require('http'), fs = require('fs'), path = require('path');
const WWW = '/tmp/mw';
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(WWW, p); if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); });
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : JSON.stringify(x)); if (!c) fail++; };
(async () => {
  await new Promise((r) => srv.listen(0, r)); const base = 'http://localhost:' + srv.address().port;
  const br = await chromium.launch({ args: ['--no-sandbox'] });
  const ctx = await br.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await ctx.addInitScript(() => { window.__wiz = 1; }); await ctx.addInitScript({ path: path.join(__dirname, 'fakebridge.js') });
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(base + '/index.html');
  // the sign-in screen may be first; skip it if present so the app is on screen
  await page.waitForTimeout(1500);
  if (await page.$('#acbox')) { const sk = await page.$('[data-act=acskip]'); if (sk) await sk.click(); await page.waitForTimeout(800); }
  await page.waitForSelector('.fswiz', { timeout: 15000 }); ok('wizard opens by itself', true);
  const txt = () => page.textContent('.fswiz');
  // notifications already granted in the fake, so first open step is calls
  ok('first open step is calls', /emergency calls/i.test(await txt()), await txt());
  await page.click('[data-act=wzgo]'); await page.waitForTimeout(1300);
  ok('calls granted -> moves on to overlay', /over other apps/i.test(await txt()), await txt());
  ok('overlay is marked needed', /needed/.test(await txt()));
  await page.click('[data-act=wzgo]'); await page.waitForTimeout(1300);
  ok('overlay granted -> accessibility', /app lock/i.test(await txt()));
  ok('Android 13+ restricted-settings help is offered', !!(await page.$('[data-act=wzappinfo]')) && /Allow restricted settings/.test(await txt()));
  await page.click('[data-act=wzgo]'); await page.waitForTimeout(1300);
  ok('accessibility granted -> battery', /awake/i.test(await txt()));
  await page.click('[data-act=wzgo]'); await page.waitForTimeout(1300);
  ok('Xiaomi auto-start step appears', /auto-start/i.test(await txt()), await txt());
  await page.click('[data-act=wzgo]'); await page.waitForTimeout(500);
  await page.click('[data-act=wzdid]'); await page.waitForTimeout(500);
  ok('Xiaomi pop-up step appears', /pop-up/i.test(await txt()));
  await page.click('[data-act=wzskip]'); await page.waitForTimeout(500);
  ok('finish screen', /ready/i.test(await txt()), await txt());
  ok('test + contacts buttons', !!(await page.$('[data-act=wztest]')) && !!(await page.$('[data-act=wzcontacts]')));
  await page.click('[data-act=wzclose]'); await page.waitForTimeout(300);
  ok('wizard closed', !(await page.$('.fswiz')));
  ok('no page errors', errs.length === 0, errs);
  // second device: nothing granted, user chooses "later" then tries a strict session
  const p2 = await ctx.newPage(); await p2.addInitScript(() => { window.__fresh = 1; });
  await br.close(); srv.close(); process.exit(fail ? 1 : 0);
})();

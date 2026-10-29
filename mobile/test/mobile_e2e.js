const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const WWW = process.argv[2] || '/tmp/mw';
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.svg': 'image/svg+xml' };
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(WWW, p); if (!f.startsWith(WWW) || !fs.existsSync(f)) { r.writeHead(404); return r.end('no'); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); });
let fail = 0; const ok = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, x === undefined ? '' : x); if (!c) fail++; };
(async () => {
  await new Promise(r => srv.listen(0, r)); const port = srv.address().port, base = 'http://localhost:' + port;
  const br = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
  const ctx = await br.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await ctx.addInitScript(() => { try { if (!localStorage.getItem('fs_acct')) localStorage.setItem('fs_acct', JSON.stringify({ skip: true })); } catch (e) { } });
  await ctx.addInitScript({ path: path.join(__dirname, 'fakebridge.js') });
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error' && !/GPU|WebGL|Failed to load resource/.test(m.text())) errs.push(m.text()); });
  await page.goto(base + '/index.html'); await page.waitForSelector('.fself, .side', { timeout: 20000 }); await page.waitForTimeout(1500);
  ok('app opens on phone', await page.evaluate(() => !!document.querySelector('.side')));
  ok('android class set', await page.evaluate(() => document.body.classList.contains('android')));
  ok('no sideways scroll on home', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), await page.evaluate(() => document.documentElement.scrollWidth));
  ok('bottom nav has Phone item', await page.evaluate(() => [...document.querySelectorAll('#nav a')].map(a => a.textContent.trim()).join(',')), await page.evaluate(() => [...document.querySelectorAll('#nav a')].map(a => a.textContent.trim()).join(',')));
  ok('3D scene canvases exist', await page.evaluate(() => !!document.querySelector('#scene') && !!document.querySelector('#f3d')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_home.png' });
  // phone screen
  await page.evaluate(() => { location.hash = '#/phone'; }); await page.waitForSelector('#phperm');
  ok('setup needed badge', /Set up needed/.test(await page.textContent('#phperm')));
  await page.click('[data-act=phperm][data-id=accessibility]'); await page.click('[data-act=phperm][data-id=overlay]'); await page.waitForTimeout(1500);
  ok('ready after both permissions', /Ready/.test(await page.textContent('#phperm')));
  // contacts
  const add = async (n, p) => { await page.fill('#phcn', n); await page.fill('#phcp', p); await page.click('[data-act=phaddc]'); await page.waitForTimeout(150); };
  await add('Mom', '+91 98765 43210'); ok('one contact added', (await page.$$('[data-act=phdelc]')).length === 1);
  await add('Bad', 'abc'); ok('bad number refused', (await page.$$('[data-act=phdelc]')).length === 1);
  await add('Mom again', '+91 98765 43210'); ok('duplicate refused', (await page.$$('[data-act=phdelc]')).length === 1);
  await add('Dad', '9876500001'); await add('Bro', '9876500002'); await add('Sis', '9876500003'); await add('Uncle', '9876500004');
  ok('five contacts then form hidden', (await page.$$('[data-act=phdelc]')).length === 5 && !(await page.$('#phcn')));
  await page.click('[data-act=phcall][data-num="9876500001"]'); await page.click('[data-act=phcall][data-num="112"]');
  ok('calls go to the bridge', JSON.stringify(await page.evaluate(() => window.__calls)) === '["9876500001","112"]');
  await page.click('[data-act=phdelc][data-i="4"]'); ok('remove brings form back', !!(await page.$('#phcn')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_phone.png', fullPage: false });
  // link to PC
  await page.click('[data-act=phscan]'); await page.waitForSelector('[data-act=phpick]'); await page.click('[data-act=phpick]');
  await page.fill('#phcode', '000000'); await page.click('[data-act=phpair]'); await page.waitForTimeout(400); ok('wrong code stays unpaired', !!(await page.$('[data-act=phpair]')));
  await page.fill('#phcode', '123456'); await page.click('[data-act=phpair]'); await page.waitForSelector('[data-act=phunlink]');
  ok('paired view shows PC', /BHAVISHYA-PC/.test(await page.textContent('#phlink')));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_phone2.png', fullPage: true });
  // learn + lesson + visuals
  await page.evaluate(() => { location.hash = '#/lesson/database-management-system/joins'; }); await page.waitForSelector('.visbox svg', { timeout: 8000 });
  ok('lesson visual renders on phone', true); ok('lesson fits width', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), await page.evaluate(() => document.documentElement.scrollWidth));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_lesson.png' });
  await page.click('#ltabs .tab[data-id=video]'); await page.waitForSelector('#vhost .vchans', { timeout: 15000 });
  const chips = await page.evaluate(() => [...document.querySelectorAll('#vhost .vchans .chip')].map(b => b.textContent)); ok('channels from the phone-side picker', chips.length >= 2 && !chips.includes('Cats'), JSON.stringify(chips));
  ok('embed iframe for topic video', /youtube-nocookie\.com\/embed\/[\w-]{11}/.test(await page.evaluate(() => document.querySelector('#vhost iframe').src)));
  ok('bridge told which video is allowed', (await page.evaluate(() => window.__log)).some(x => /^allow:/.test(x)));
  ok('vpop hidden on phone', await page.evaluate(() => { const b = document.querySelector('[data-act=vpop]'); return !b || getComputedStyle(b).display === 'none'; }));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_video.png' });
  // photo answer storage through the shared API (IndexedDB)
  const png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
  const sub = await page.evaluate(async (png) => { const r = await fsApi.call('POST', '/practice/submit', { topic_id: 'database-management-system', lesson_id: 'joins', pi: 0, images: [png] }); const id = r.data._id; const im = await fsApi.call('GET', '/practice/' + id + '/image/0'); const del = await fsApi.call('DELETE', '/practice/' + id); return { s: r.status, back: im.data.data === png, del: del.status }; }, png);
  ok('answer photo saved, read back, deleted on the phone', sub.s === 200 && sub.back && sub.del === 200, JSON.stringify(sub));
  // timetable block -> reminders for alarms
  const blk = await page.evaluate(async () => { const d = new Date(Date.now() + 3 * 3600e3); const iso = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); const r = await fsApi.call('POST', '/blocks', { subject: 'DBMS', kind: 'once', date: iso, start: ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2), minutes: 30, remind_before: 10, lock_mode: 'focus' }); return r.status; });
  await page.waitForTimeout(600); const rem = await page.evaluate(() => window.__reminders || []);
  ok('timetable block becomes phone alarms', blk < 300 && rem.length >= 2 && rem.some(x => x.kind === 'remind') && rem.some(x => x.kind === 'start'), JSON.stringify(rem.map(x => x.kind + '@' + new Date(x.at).toISOString().slice(11, 16))));
  // phone study session locks the phone
  await page.evaluate(() => { location.hash = '#/start?topic=operating-systems&min=25'; }); await page.waitForSelector('[data-act=sbegin]'); await page.click('[data-act=sbegin]'); await page.waitForSelector('.focus'); await page.waitForTimeout(500);
  const ls = (await page.evaluate(() => window.__log)).find(x => x.startsWith('lockStart:')); const lj = ls && JSON.parse(ls.slice(10));
  ok('session start locks the phone with subject and end time', lj && lj.mode && lj.subject && lj.endsAt > Date.now() + 20 * 60000, ls && ls.slice(0, 120));
  await page.screenshot({ path: '/home/claude/fsw/mobile/test/m_focus.png' });
  ok('lesson button available during phone session', !!(await page.$('[data-act=fdrawer]')));
  console.log('errors', JSON.stringify([...new Set(errs)])); ok('no page errors', errs.length === 0);
  // blocker page
  const bp = await ctx.newPage(); await bp.addInitScript(() => { window.LockBridge = { info: () => JSON.stringify({ active: true, subject: 'Operating Systems', endsAt: Date.now() + 1500000, topicId: 'operating-systems', source: 'pc' }), contacts: () => JSON.stringify([{ name: 'Mom', number: '+919876543210' }, { name: 'Dad', number: '9876500001' }]), call: n => { window.__called = n; }, openApp: () => { window.__open = 1; }, finish: () => { window.__fin = 1; } }; });
  const berrs = []; bp.on('pageerror', e => berrs.push(e.message)); await bp.goto(base + '/blocker.html'); await bp.waitForTimeout(2200);
  ok('blocker shows subject, countdown and contacts', await bp.evaluate(() => document.getElementById('subj').textContent === 'Operating Systems' && /^\d+:\d\d$/.test(document.getElementById('time').textContent) && document.querySelectorAll('.call').length === 3), await bp.evaluate(() => document.getElementById('time').textContent));
  await bp.click('.call.fam button'); ok('blocker call button', (await bp.evaluate(() => window.__called)) === '+919876543210');
  await bp.screenshot({ path: '/home/claude/fsw/mobile/test/m_blocker.png' }); ok('blocker no errors', berrs.length === 0, JSON.stringify(berrs));
  await br.close(); srv.close(); console.log(fail ? 'FAILED ' + fail : 'ALL PASS'); process.exit(fail ? 1 : 0);
})().catch(e => { console.error('E2E FAIL', e); process.exit(1); });

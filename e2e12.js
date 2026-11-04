/* End to end: the real desktop app + a local copy of the server. Run: xvfb-run -a node e2e12.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const { _electron: electron } = require('playwright-core');
const path = require('path'), fs = require('fs'), os = require('os'), http = require('http'), crypto = require('crypto');
const { col } = require('./website_test/fakedb.js');
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), social: col() };
const L = require('./website/api/_lib.js');
const H = { challenge: require('./website/api/challenge.js'), capture: require('./website/api/capture.js'), social: require('./website/api/social.js') };
const lastNew = {};
const srv = http.createServer((req, res) => {
  let b = ''; req.on('data', (c) => b += c); req.on('end', () => {
    const name = (req.url.match(/^\/api\/(\w+)/) || [])[1], h = H[name]; if (!h) { res.statusCode = 404; return res.end('{}'); }
    let body = {}; try { body = JSON.parse(b || '{}'); } catch (e) { }
    const out = { statusCode: 0, setHeader(k, v) { res.setHeader(k, v); }, end(t) { res.statusCode = this.statusCode; if (name === 'capture' && body.a === 'new') lastNew.v = JSON.parse(t); res.end(t); } };
    h({ method: req.method, body, headers: req.headers }, out);
  });
});
function api(name, body, token) { return new Promise((res) => { H[name]({ method: 'POST', body, headers: token ? { authorization: 'Bearer ' + token } : {} }, { statusCode: 0, setHeader() { }, end(t) { res(JSON.parse(t)); } }); }); }
function mk(name) { const u = { _id: crypto.randomBytes(6).toString('hex'), email: name.toLowerCase() + '@x.com', name, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); global.__FS_FAKE_DB.social.rows.push({ key: 'u:' + u._id, name, friends: [], incoming: [], outgoing: [], weekMin: 0, weekKey: '', todayMin: 0, streak: 0, beat: 0, studying: null, room: '' }); return { id: String(u._id), name, t: L.newToken(u), u }; }
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
(async () => {
  await new Promise((r) => srv.listen(0, '127.0.0.1', r)); const port = srv.address().port;
  const A = mk('Bhavishya'), B = mk('Bala');
  const S = global.__FS_FAKE_DB.social.rows; S.find((r) => r.key === 'u:' + A.id).friends.push(B.id); S.find((r) => r.key === 'u:' + B.id).friends.push(A.id);
  const ud = fs.mkdtempSync(path.join(os.tmpdir(), 'fsud-')); fs.writeFileSync(path.join(ud, 'account.json'), JSON.stringify({ site: 'http://127.0.0.1:' + port, token: A.t, email: A.u.email, name: A.name }));
  const app = await electron.launch({ executablePath: path.join(__dirname, 'node_modules/electron/dist/electron'), args: ['--no-sandbox', '--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', path.join(__dirname, 'app')], env: Object.assign({}, process.env, { FS_USER_DATA: ud, FS_CONTENT: path.join(__dirname, 'Content') }) });
  const errs = []; const win = await app.firstWindow(); win.on('pageerror', (e) => errs.push(e.stack));
  await win.setViewportSize({ width: 1300, height: 900 }); await win.waitForSelector('.fself', { timeout: 20000 });
  // find a topic with a quiz and mark it complete
  const pick = await win.evaluate(async () => {
    const ts = (await fsApi.call('GET', '/topics')).data.filter((t) => !t.planned);
    for (const t of ts) { const d = (await fsApi.call('GET', '/topics/' + t.id)).data; for (const u of d.topic.units) for (const l of u.lessons) if (l.quiz.length >= 10) { await fsApi.call('POST', '/progress', { topic_id: t.id, lesson_id: l.id, done: true }); return { tid: t.id, lid: l.id, title: l.title, subject: d.topic.title, n: l.quiz.length }; } }
  });
  console.log('topic marked complete:', JSON.stringify(pick));
  await win.evaluate(() => { location.hash = '#/friends'; }); await win.waitForSelector('#chbox .chcard', { timeout: 20000 });
  T('Challenge card shows on the Friends page', true, 0); await win.screenshot({ path: 'ch_1_friends.png' });
  await win.click('[data-act=chnew]'); await win.waitForSelector('#chf');
  await win.selectOption('#chf', B.id); await win.selectOption('#chs', pick.tid); await win.waitForFunction((lid) => [...document.querySelectorAll('#chl option')].some((o) => o.value === lid && !o.disabled), pick.lid);
  await win.selectOption('#chl', pick.lid); await win.screenshot({ path: 'ch_2_new.png' });
  await win.click('[data-act=chsend]'); await win.waitForSelector('[data-act=chstart]');
  const mine = await api('challenge', { a: 'list' }, B.t); T('friend received the challenge with 10 questions', mine.challenges.length === 1 && mine.challenges[0].n === 10, mine);
  await win.click('.modal [data-act=chstart]'); await win.waitForSelector('[data-act=chgo]'); await win.screenshot({ path: 'ch_3_rules.png' });
  await win.click('[data-act=chgo]'); await win.waitForSelector('#arena .arq', { timeout: 15000 }); await win.waitForTimeout(500);
  T('arena is full screen and locked', await win.evaluate(() => document.body.classList.contains('inarena') && getComputedStyle(document.querySelector('#arena')).position === 'fixed'), 0);
  T('timer is running', /^\d+:\d\d$/.test(await win.textContent('#artime')), await win.textContent('#artime'));
  await win.screenshot({ path: 'ch_4_arena.png' });
  await win.setViewportSize({ width: 390, height: 844 }); await win.waitForTimeout(300); await win.screenshot({ path: 'ch_4b_arena_phone.png' }); await win.setViewportSize({ width: 1300, height: 900 });
  const t1 = await win.textContent('#artime'); await win.waitForTimeout(1300); const t2 = await win.textContent('#artime'); T('timer counts down', t1 !== t2, [t1, t2]);
  const ctx = await win.evaluate(() => { const e = new Event('contextmenu', { cancelable: true }); document.dispatchEvent(e); return e.defaultPrevented; }); T('right-click blocked in the arena', ctx, 0);
  const cp = await win.evaluate(() => { const e = new Event('copy', { cancelable: true, bubbles: true }); document.querySelector('.arq').dispatchEvent(e); return e.defaultPrevented; }); T('copy blocked in the arena', cp, 0);
  for (let i = 0; i < 10; i++) { await win.click('.aropt >> nth=0'); await win.waitForTimeout(120); if (i < 9) await win.click('[data-act=chnext]'); }
  await win.screenshot({ path: 'ch_5_last.png' });
  await win.click('#arsub'); await win.waitForTimeout(200); T('first tap only asks to confirm', await win.isVisible('#arena'), 0);
  await win.click('#arsub'); await win.waitForSelector('.chres', { timeout: 15000 }); await win.waitForTimeout(400);
  T('after submit the app is unlocked', await win.evaluate(() => !document.body.classList.contains('inarena') && !document.querySelector('#arena')), 0);
  T('result waits for the friend', /still playing|has not played|Your attempt is in/.test(await win.textContent('.chres')), await win.textContent('.chres')); await win.screenshot({ path: 'ch_6_wait.png' });
  const again = await win.evaluate(() => fsApi.acct('challenge', { a: 'start', id: document.querySelector('[data-act=chview]') ? document.querySelector('[data-act=chview]').dataset.id : '' }).then((r) => r));
  const cid = mine.challenges[0].id; const re = await win.evaluate((id) => fsApi.acct('challenge', { a: 'start', id }), cid); T('cannot play it a second time', !re.ok && /only once|already played/.test(re.error), re);
  // friend plays: gets everything right
  const st = await api('challenge', { a: 'start', id: cid }, B.t); T('friend gets the same questions', st.questions.length === 10, st);
  const row = global.__FS_FAKE_DB.social.rows.find((r) => r.key === 'c:' + cid); const right = row.qs.map((q) => q.a);
  await api('challenge', { a: 'submit', id: cid, answers: right }, B.t);
  await win.waitForSelector('.reshead.win, .reshead.lose, .reshead.draw', { timeout: 20000 }); await win.waitForTimeout(600);
  console.log('result text:', (await win.textContent('.chres')).replace(/\s+/g, ' ').slice(0, 300)); await win.screenshot({ path: 'ch_7_result.png' });
  T('winner is announced', /won|draw/i.test(await win.textContent('.reshead')), 0);
  // phone camera
  await win.evaluate(() => document.querySelector('.chres [data-act=close]').click());
  await win.evaluate((p) => { location.hash = '#/lesson/' + p.tid + '/' + p.lid; }, pick); await win.waitForSelector('[data-act=chlesson]', { timeout: 15000 });
  T('lesson page has the Challenge button', true, 0);
  await win.click('[data-act=ltab][data-id=practice]'); const hasCam = await win.waitForSelector('[data-act=pcam]', { timeout: 8000 }).then(() => true, () => false);
  T('practice has "Use my phone camera"', hasCam, 0); await win.screenshot({ path: 'ch_8_practice.png' });
  if (hasCam) {
    await win.click('[data-act=pcam]'); await win.waitForSelector('.pcqr svg', { timeout: 15000 }); await win.waitForTimeout(500); await win.screenshot({ path: 'ch_9_qr.png' });
    const slot = lastNew.v; T('QR slot made', slot && slot.url === undefined && slot.id.length === 16, slot);
    const jpeg = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(__dirname, 'f_home.png')).toString('base64').slice(0, 4000).padEnd(4000, 'A');
    const put = await api('capture', { a: 'put', id: slot.id, secret: slot.secret, img: jpeg }); T('phone page can send a photo', put.ok, put);
    await win.waitForFunction(() => document.querySelectorAll('.pcstat.got').length > 0, null, { timeout: 12000 }).catch(() => { });
    T('photo shows up on the PC', /received/.test(await win.textContent('#pcstat')), await win.textContent('#pcstat'));
    await win.click('[data-act=pcdone]'); await win.waitForTimeout(300);
    T('photo is attached to the answer', await win.evaluate(() => document.querySelectorAll('.thumbs .th img').length >= 1), 0); await win.screenshot({ path: 'ch_10_attached.png' });
  }
  console.log('page errors:', JSON.stringify(errs)); T('no page errors', errs.length === 0, errs);
  console.log(bad ? bad + ' FAILED' : 'ALL PASSED'); await app.evaluate(({ app }) => { app.exit(0); }); process.exit(bad ? 1 : 0);
})().catch((e) => { console.error('FAIL', e); process.exit(1); });

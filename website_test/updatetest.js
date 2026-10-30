/* Update feature tests: server endpoint + Windows installer download logic. Run: node website_test/updatetest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const crypto = require('crypto'), fs = require('fs'), os = require('os'), path = require('path');
let bad = 0; const T = (n, c, x) => { console.log(c ? 'PASS' : 'FAIL', n, c ? '' : JSON.stringify(x)); if (!c) bad++; };
global.__FS_FAKE_DB = { users: { }, rl: { async findOneAndUpdate() { return { n: 1 }; } } };
const upd = require('../website/api/update.js');
function call(h, method) { return new Promise((res) => { const headers = {}; const o = { statusCode: 0, setHeader(k, v) { headers[k] = v; }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null, headers }); } }; h({ method, headers: {} }, o); }); }
(async () => {
  const sha = 'a'.repeat(64);
  const rel = { tag_name: 'v1.9.0', body: 'New: faster lock <script>', assets: [
    { name: 'FutureSelf-Setup.exe', browser_download_url: 'https://github.com/o/r/releases/download/v1.9.0/FutureSelf-Setup.exe', digest: 'sha256:' + sha, size: 130000000 },
    { name: 'FutureSelf.apk', browser_download_url: 'https://github.com/o/r/releases/download/v1.9.0/FutureSelf.apk', size: 9000000 },
    { name: 'evil.apk', browser_download_url: 'https://evil.example/x.apk', size: 1 }] };
  let hits = 0; global.__FS_FETCH = async (u) => { hits++; return { ok: true, json: async () => rel }; };
  let r = await call(upd, 'GET');
  T('version without the v', r.s === 200 && r.j.version === '1.9.0', r);
  T('windows + android files found, checksum kept', r.j.win && r.j.win.sha256 === sha && r.j.and && r.j.and.url.endsWith('FutureSelf.apk') && r.j.and.sha256 === '', r.j);
  T('notes are cleaned', !/[<>]/.test(r.j.notes));
  r = await call(upd, 'GET'); T('answer cached for 10 minutes', hits === 1, hits);
  r = await call(upd, 'POST'); T('POST refused', r.s === 405, r);
  T('no open CORS', !('Access-Control-Allow-Origin' in r.headers));
  /* a release with a non-GitHub asset address is ignored; a bad tag is an error */
  delete require.cache[require.resolve('../website/api/update.js')];
  const upd2 = require('../website/api/update.js'); global.__FS_FETCH = async () => ({ ok: true, json: async () => ({ tag_name: 'latest', assets: [] }) });
  r = await call(upd2, 'GET'); T('release without a version number -> 502', r.s === 502, r);
  delete require.cache[require.resolve('../website/api/update.js')];
  const upd3 = require('../website/api/update.js'); global.__FS_FETCH = async () => ({ ok: false });
  r = await call(upd3, 'GET'); T('GitHub down -> friendly 502', r.s === 502 && /GitHub/.test(r.j.error), r);

  /* ---- Windows installer download ---- */
  const W = require('../app/core/winupdate.js');
  const exe = Buffer.concat([Buffer.from('MZ'), crypto.randomBytes(6e6)]), good = crypto.createHash('sha256').update(exe).digest('hex');
  const mk = (buf, status) => async (u) => ({ ok: status !== 500, status: status || 200, headers: { get: () => String(buf.length) }, body: { getReader() { let i = 0; return { async read() { if (i >= buf.length) return { done: true }; const v = new Uint8Array(buf.subarray(i, i + 1e6)); i += 1e6; return { done: false, value: v }; } }; } } });
  const ev = { spawned: null, quit: 0, prog: [] };
  const mkW = (fetch, platform) => W.create({ fetch, platform: platform || 'win32', tmp: os.tmpdir(), send: (c, p) => ev.prog.push(p), quit: () => { ev.quit++; }, spawn: (f, a, o) => { ev.spawned = { f, a, o }; return { unref() { } }; } });
  const url = 'https://github.com/o/r/releases/download/v1.9.0/FutureSelf-Setup.exe';
  let x = await mkW(mk(exe)).install({ url: 'https://evil.example/Setup.exe', sha256: good }); T('other websites refused', !x.ok && /not allowed/.test(x.error), x);
  x = await mkW(mk(exe)).install({ url: 'https://github.com.evil.example/o/r/releases/download/a', sha256: good }); T('look-alike address refused', !x.ok, x);
  x = await mkW(mk(exe), 'linux').install({ url }); T('only Windows installs', !x.ok && /Windows/.test(x.error), x);
  x = await mkW(mk(exe)).install({ url, sha256: 'b'.repeat(64) }); T('wrong checksum -> thrown away, not run', !x.ok && /checksum/.test(x.error) && !ev.spawned, x);
  x = await mkW(mk(Buffer.concat([Buffer.from('<h'), Buffer.alloc(6e6)]))).install({ url }); T('not an exe -> refused', !x.ok && /not a valid/.test(x.error), x);
  x = await mkW(mk(Buffer.alloc(0), 500)).install({ url }); T('download error -> friendly message', !x.ok && /failed/.test(x.error), x);
  x = await mkW(mk(exe)).install({ url, sha256: good });
  T('good download runs the installer quietly', x.ok && ev.spawned && /FutureSelf-Setup\.exe$/.test(ev.spawned.f) && ev.spawned.a[0] === '/silent' && ev.spawned.o.detached === true, ev);
  T('progress was reported up to 100', ev.prog.length > 2 && ev.prog[ev.prog.length - 1] === 100, ev.prog);
  await new Promise((r) => setTimeout(r, 1000)); T('app closes so the installer can replace it', ev.quit === 1, ev.quit);
  console.log(bad ? 'FAIL ' + bad : 'ALL PASS'); process.exit(bad ? 1 : 0);
})();

'use strict';
/* A local MySQL server for the coding platform, so "MySQL to Java connector" works with nothing to set up.
   - If a MySQL/MariaDB server is already answering on 127.0.0.1:3306, FutureSelf uses it and starts nothing.
   - Otherwise, on first use, it downloads a portable MariaDB (official, downloads.mariadb.org), creates a
     small data folder inside FutureSelf, and starts mysqld on 127.0.0.1:3306.
   MariaDB speaks the MySQL protocol, so MySQL Connector/J, mysql-connector-python and mysql2 all connect to it.
   Credentials shown to the student:  host 127.0.0.1  port 3306  user root  password (blank)  database futureself */
const fs = require('fs');
const net = require('net');
const path = require('path');
const cp = require('child_process');

const WIN = process.platform === 'win32';
const PORT = 3306;
const HOST = '127.0.0.1';

function portOpen(port, host, ms) {
  return new Promise((resolve) => {
    const s = new net.Socket(); let done = false;
    const end = (v) => { if (!done) { done = true; try { s.destroy(); } catch (e) { } resolve(v); } };
    s.setTimeout(ms || 1200);
    s.once('connect', () => end(true));
    s.once('timeout', () => end(false));
    s.once('error', () => end(false));
    s.connect(port, host);
  });
}

function create(opts) {
  const base = path.join(opts.dir, 'mysql');
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const tc = opts.toolchain;                       // for extract() reuse via toolchain? we do our own here
  fs.mkdirSync(base, { recursive: true });
  const dataDir = path.join(base, 'data');
  const binFile = path.join(base, 'bin.json');
  let binInfo = {}; try { binInfo = JSON.parse(fs.readFileSync(binFile, 'utf8')); } catch (e) { }
  let proc = null, usingSystem = false, startP = null;
  const creds = { host: HOST, port: PORT, user: 'root', password: '', database: 'futureself' };

  function sysMysqld() { // a MySQL/MariaDB already installed on PATH
    for (const n of ['mysqld', 'mariadbd']) { try { const r = cp.spawnSync(WIN ? 'where' : 'which', [n], { encoding: 'utf8', timeout: 4000, windowsHide: true }); if (r.status === 0) return String(r.stdout).split(/\r?\n/)[0].trim(); } catch (e) { } }
    return null;
  }
  function binDir() { return binInfo.dir && fs.existsSync(binInfo.dir) ? binInfo.dir : null; }
  function exe(name) {
    const d = binDir();
    if (d) { const p = path.join(d, WIN ? name + '.exe' : name); if (fs.existsSync(p)) return p; }
    if (binInfo.version === 'system') { try { const r = cp.spawnSync(WIN ? 'where' : 'which', [name], { encoding: 'utf8', timeout: 4000, windowsHide: true }); if (r.status === 0) return String(r.stdout).split(/\r?\n/)[0].trim() || null; } catch (e) { } }
    return null;
  }

  async function download(url, dest, onProgress) {
    const r = await fetchFn(String(url).replace(/^http:\/\//i, 'https://'));
    if (!r || !r.ok) throw new Error('download failed (' + (r ? r.status : 'no answer') + ')');
    const total = +(r.headers && r.headers.get && r.headers.get('content-length')) || 0;
    const tmp = dest + '.part', out = fs.createWriteStream(tmp); let got = 0, lp = -1;
    for await (const c of r.body) { const b = Buffer.from(c); got += b.length; if (!out.write(b)) await new Promise((x) => out.once('drain', x)); const p = total ? Math.floor(100 * got / total) : -1; if (p !== lp && onProgress) { lp = p; onProgress({ label: 'MySQL server', pct: p, text: 'Downloading the MySQL server … ' + (total ? p + '%' : (got / 1048576).toFixed(0) + ' MB') }); } }
    await new Promise((x) => out.end(x));
    if (total && got < total) { try { fs.unlinkSync(tmp); } catch (e) { } throw new Error('the download stopped early'); }
    fs.renameSync(tmp, dest); return dest;
  }
  function extract(file, dest) {
    fs.mkdirSync(dest, { recursive: true });
    if (WIN) { const tar = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe'); if (fs.existsSync(tar)) return runP(tar, ['-xf', file, '-C', dest]); return runP('powershell.exe', ['-NoProfile', '-Command', `Expand-Archive -LiteralPath '${file.replace(/'/g, "''")}' -DestinationPath '${dest.replace(/'/g, "''")}' -Force`]); }
    return runP('tar', ['-xf', file, '-C', dest]);
  }
  function runP(cmd, args, o) { return new Promise((res, rej) => { const ch = cp.spawn(cmd, args, Object.assign({ windowsHide: true }, o || {})); let err = ''; ch.stderr && ch.stderr.on('data', (d) => (err += d)); ch.stdout && ch.stdout.on('data', () => { }); ch.on('error', rej); ch.on('close', (c) => (c === 0 ? res() : rej(new Error(path.basename(cmd) + ' failed: ' + err.slice(-300))))); }); }
  function findDir(dir) { // folder that holds mysqld/mariadbd
    const want = WIN ? ['mysqld.exe', 'mariadbd.exe'] : ['mysqld', 'mariadbd'];
    const q = [dir];
    while (q.length) { const d = q.shift(); let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { continue; } if (es.some((e) => e.isFile() && want.indexOf(e.name) >= 0)) return d; es.filter((e) => e.isDirectory()).forEach((e) => q.push(path.join(d, e.name))); }
    return null;
  }
  async function fetchServer(onProgress) {
    if (!WIN) throw new Error('A built-in MySQL server is provided on Windows. On this system, install MySQL or MariaDB yourself and it will be used automatically.');
    const metas = [
      'https://downloads.mariadb.org/rest-api/mariadb/11.4/latest/',
      'https://downloads.mariadb.org/rest-api/mariadb/11.4.14/'
    ];
    let url = null, ver = '';
    for (const murl of metas) {
      try { const r = await fetchFn(murl); if (!r || !r.ok) continue; const txt = await r.text(); let j = {}; try { j = JSON.parse(txt); } catch (e) { }
        const scan = (txt.match(/https?:\/\/[^"\s]+?-winx64\.zip/gi) || []).filter((u) => !/debug/i.test(u)); const rel = (j.releases && (Object.values(j.releases)[0] || j.releases)) || {}; const files = rel.files || (j.release && j.release.files) || []; const list = Array.isArray(files) ? files : Object.values(files); const f = list.find((x) => /winx64\.zip$/i.test(x.file_name) && !/debug/i.test(x.file_name)); if (f) { url = f.file_download_url || f.file_url; ver = rel.release_id || ''; break; }
        if (scan.length) { url = scan[0]; ver = (/mariadb-([\d.]+)-winx64/.exec(url) || [])[1] || ''; break; } } catch (e) { log('[mysql] meta ' + e.message); }
    }
    if (!url) { url = 'https://downloads.mariadb.org/rest-api/mariadb/11.4.14/mariadb-11.4.14-winx64.zip'; ver = '11.4.14'; }
    const work = path.join(base, '.dl'); fs.rmSync(work, { recursive: true, force: true }); fs.mkdirSync(work, { recursive: true });
    const zip = path.join(work, 'mariadb.zip');
    await download(url, zip, onProgress);
    if (onProgress) onProgress({ label: 'MySQL server', pct: 100, text: 'Unpacking the MySQL server …' });
    const out = path.join(work, 'x'); await extract(zip, out);
    if (!findDir(out)) throw new Error('the MySQL download was incomplete');
    const dest = path.join(base, 'server'); fs.rmSync(dest, { recursive: true, force: true }); fs.renameSync(out, dest);
    const finalDir = findDir(dest);
    binInfo = { dir: finalDir, version: ver }; fs.writeFileSync(binFile, JSON.stringify(binInfo)); fs.rmSync(work, { recursive: true, force: true });
    return finalDir;
  }
  async function initData() {
    if (fs.existsSync(path.join(dataDir, 'mysql')) || fs.existsSync(path.join(dataDir, 'mariadb_upgrade_info'))) return;
    if (fs.existsSync(dataDir) && !fs.readdirSync(dataDir).length) fs.rmdirSync(dataDir);   // the installer wants to create it
    if (!WIN) fs.mkdirSync(dataDir, { recursive: true });
    const install = exe('mariadb-install-db') || exe('mysql_install_db');
    if (install && !WIN) { await runP(install, ['--datadir=' + dataDir, '--auth-root-authentication-method=normal']); }
    else if (WIN) { const bootstrap = exe('mariadb-install-db') || exe('mysql_install_db'); if (bootstrap) await runP(bootstrap, ['--datadir=' + dataDir]); }
  }
  /* --skip-grant-tables: the server accepts ANY user/password, so the student's code works whatever password it
     contains. Safe because it listens on 127.0.0.1 only (nobody else on the network can reach it). */
  function serverArgs() {
    const a = ['--no-defaults', '--datadir=' + dataDir, '--port=' + PORT, '--bind-address=' + HOST,
      '--skip-grant-tables', '--skip-networking=0', '--pid-file=' + path.join(base, 'mysqld.pid')];
    if (!WIN) a.push('--socket=' + path.join(base, 'mysql.sock'));
    if (!WIN && process.getuid && process.getuid() === 0) a.push('--user=root');
    return a;
  }
  async function waitReady(ms) { const t = Date.now(); while (Date.now() - t < (ms || 30000)) { if (await portOpen(PORT, HOST, 800)) return true; await new Promise((r) => setTimeout(r, 600)); } return false; }
  async function ensureDatabase() {
    const client = exe('mysql') || exe('mariadb'); if (!client) return;
    try { await runP(client, ['--host=' + HOST, '--port=' + PORT, '--user=root', '-e', 'CREATE DATABASE IF NOT EXISTS `futureself` CHARACTER SET utf8mb4;'], { windowsHide: true }); } catch (e) { log('[mysql] db ' + e.message); }
  }

  /* make a MySQL server available; returns credentials */
  async function ensure(onProgress) {
    if (await portOpen(PORT, HOST, 800)) { usingSystem = !proc; return creds; }      // something already listening
    if (startP) return startP;
    startP = (async () => {
      const sys = sysMysqld();
      let server = binDir() ? exe('mysqld') || exe('mariadbd') : null;
      if (!server && sys) { binInfo = { dir: path.dirname(sys), version: 'system' }; server = sys; }     // installed but not running
      if (!server) { if (onProgress) onProgress({ label: 'MySQL server', text: 'Setting up a local MySQL server (first time only) …' }); await fetchServer(onProgress); server = exe('mysqld') || exe('mariadbd'); }
      if (!server) throw new Error('could not set up a MySQL server');
      await initData();
      if (onProgress) onProgress({ label: 'MySQL server', text: 'Starting the MySQL server …' });
      proc = cp.spawn(server, serverArgs(), { windowsHide: true, stdio: 'ignore', detached: false });
      proc.on('exit', (c) => { log('[mysql] server exited ' + c); proc = null; });
      if (!(await waitReady(35000))) { stop(); throw new Error('the MySQL server did not start in time'); }
      await ensureDatabase();
      log('[mysql] ready on ' + HOST + ':' + PORT + ' (' + (binInfo.version || '') + ')');
      return creds;
    })();
    try { return await startP; } finally { startP = null; }
  }
  function running() { return !!proc || usingSystem; }
  function info() { return { running: running(), system: usingSystem, version: binInfo.version || '', creds, installed: !!binDir() || !!sysMysqld() }; }
  function stop() { if (proc) { try { const shut = exe('mysqladmin') || exe('mariadb-admin'); if (shut) cp.spawn(shut, ['--host=' + HOST, '--port=' + PORT, '--user=root', 'shutdown'], { windowsHide: true }); } catch (e) { } try { proc.kill(); } catch (e) { } proc = null; } }
  return { ensure, info, running, stop, creds, binDir, PORT, HOST };
}
module.exports = { create, portOpen };

'use strict';
/* C and C++ libraries on Windows, from MSYS2 (the standard collection of open-source libraries built for Windows).
   A tiny version of MSYS2's package manager (pacman), so FutureSelf can install the gcc compiler and any library
   the student's #include needs — SDL2, curl, OpenSSL, SQLite, Boost, Eigen, fmt, nlohmann/json, SFML, GTK, OpenCV,
   Google Test, Qt ... — with no MSYS2 installation and no admin rights.
     - reads the UCRT64 package list (ucrt64.db), works out every package a library needs (dependencies)
     - downloads each package once, checks its SHA-256, unpacks it (zstd + tar) into tools/msys
   Packages are the official MSYS2 builds from mirror.msys2.org / repo.msys2.org. */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const { pipeline } = require('stream/promises');
const { Writable } = require('stream');

const PREFIX = 'mingw-w64-ucrt-x86_64-';
const MIRRORS = ['https://mirror.msys2.org/mingw/ucrt64/', 'https://repo.msys2.org/mingw/ucrt64/'];
const DB_NAMES = ['ucrt64.db', 'ucrt64.db.tar.zst', 'ucrt64.db.tar.gz'];

/* ---------- tar reading (ustar + GNU long names + pax), used for the package list and the packages ---------- */
function octal(b, s, l) { const t = b.toString('latin1', s, s + l).replace(/\0.*$/, '').trim(); return t ? parseInt(t, 8) : 0; }
function cstr(b, s, l) { return b.toString('utf8', s, s + l).replace(/\0.*$/s, ''); }
function paxParse(buf) {
  const out = {}; let i = 0; const s = buf.toString('utf8');
  while (i < s.length) { const sp = s.indexOf(' ', i); if (sp < 0) break; const len = parseInt(s.slice(i, sp), 10); if (!len) break; const rec = s.slice(sp + 1, i + len - 1); const eq = rec.indexOf('='); if (eq > 0) out[rec.slice(0, eq)] = rec.slice(eq + 1); i += len; }
  return out;
}
/* a Writable that receives a tar stream and calls onEntry({name,type,size,linkname}, dataBuffer) for each entry */
function tarParser(onEntry) {
  let buf = Buffer.alloc(0), state = 'header', cur = null, remaining = 0, pad = 0, chunks = [];
  let longName = null, longLink = null, pax = null;
  function emit(e, data) {
    if (e.type === 'L') { longName = data.toString('utf8').replace(/\0.*$/s, ''); return; }
    if (e.type === 'K') { longLink = data.toString('utf8').replace(/\0.*$/s, ''); return; }
    if (e.type === 'x') { pax = paxParse(data); return; }
    if (e.type === 'g') return;
    onEntry(e, data);
  }
  return new Writable({
    write(chunk, _e, cb) {
      buf = buf.length ? Buffer.concat([buf, chunk]) : Buffer.from(chunk);
      try {
        for (;;) {
          if (state === 'header') {
            if (buf.length < 512) break;
            const h = buf.subarray(0, 512); buf = buf.subarray(512);
            if (h.every((x) => x === 0)) continue;                           // end-of-archive blocks
            const size = octal(h, 124, 12), type = String.fromCharCode(h[156] || 48);
            let name = cstr(h, 0, 100); const prefix = cstr(h, 345, 155);
            if (prefix && h.toString('latin1', 257, 262) === 'ustar') name = prefix + '/' + name;
            cur = { name, size, type, linkname: cstr(h, 157, 100) };
            if (longName) { cur.name = longName; longName = null; }
            if (longLink) { cur.linkname = longLink; longLink = null; }
            if (pax && type !== 'x' && type !== 'g') { if (pax.path) cur.name = pax.path; if (pax.linkpath) cur.linkname = pax.linkpath; pax = null; }
            remaining = size; pad = (512 - (size % 512)) % 512; chunks = [];
            if (remaining === 0) { emit(cur, Buffer.alloc(0)); state = pad ? 'pad' : 'header'; }
            else state = 'data';
          } else if (state === 'data') {
            if (!buf.length) break;
            const take = Math.min(remaining, buf.length);
            chunks.push(buf.subarray(0, take)); buf = buf.subarray(take); remaining -= take;
            if (remaining === 0) { emit(cur, Buffer.concat(chunks)); chunks = []; state = pad ? 'pad' : 'header'; }
          } else {                                                               // padding to the next 512-byte block
            if (!buf.length) break;
            const skip = Math.min(pad, buf.length); buf = buf.subarray(skip); pad -= skip;
            if (pad === 0) state = 'header';
          }
        }
        cb();
      } catch (e) { cb(e); }
    }
  });
}
function decompressor(head) {
  if (head[0] === 0x28 && head[1] === 0xb5 && head[2] === 0x2f && head[3] === 0xfd) return zlib.createZstdDecompress();
  if (head[0] === 0x1f && head[1] === 0x8b) return zlib.createGunzip();
  throw new Error('unknown compression');
}

/* ---------- the package list ---------- */
function parseDesc(text) {
  const o = {}; let key = null;
  text.split(/\r?\n/).forEach((l) => { const m = /^%([A-Z0-9]+)%$/.exec(l); if (m) { key = m[1]; o[key] = []; } else if (key && l) o[key].push(l); });
  return { name: (o.NAME || [])[0], version: (o.VERSION || [])[0], filename: (o.FILENAME || [])[0], sha256: (o.SHA256SUM || [])[0], csize: +((o.CSIZE || [])[0] || 0), isize: +((o.ISIZE || [])[0] || 0), depends: (o.DEPENDS || []), provides: (o.PROVIDES || []), desc: (o.DESC || [])[0] || '' };
}
const bare = (d) => String(d).split(/[<>=:]/)[0].trim();

function create(opts) {
  const root = opts.root;                                   // tools/msys  (packages unpack to root/ucrt64/...)
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const mirrors = opts.mirrors || MIRRORS;
  fs.mkdirSync(root, { recursive: true });
  const stateFile = path.join(root, 'installed.json');
  let installed = {}; try { installed = JSON.parse(fs.readFileSync(stateFile, 'utf8')); } catch (e) { }
  const save = () => fs.writeFileSync(stateFile, JSON.stringify(installed));
  let db = null, dbAt = 0;
  const dbCache = path.join(root, 'ucrt64.db.json');

  async function get(rel) {
    let last = null;
    for (const m of mirrors) { try { const r = await fetchFn(m + rel); if (r && r.ok) return r; last = new Error('HTTP ' + (r ? r.status : '?')); } catch (e) { last = e; } }
    throw last || new Error('not found');
  }
  async function streamToTar(res, onEntry) {
    const it = res.body[Symbol.asyncIterator] ? res.body : null;
    const parser = tarParser(onEntry);
    // read the first bytes to know the compression
    const reader = (async function* () { for await (const c of it) yield Buffer.from(c); })();
    const first = await reader.next(); if (first.done) throw new Error('empty download');
    const dec = decompressor(first.value);
    await pipeline((async function* () { yield first.value; for await (const c of reader) yield c; })(), dec, parser);
  }
  /* load the package list (cached for a day; refreshed when a download is missing on the mirror) */
  async function loadDb(force) {
    if (db && !force && Date.now() - dbAt < 864e5) return db;
    if (!force) { try { const c = JSON.parse(fs.readFileSync(dbCache, 'utf8')); if (Date.now() - c.at < 864e5) { db = c.db; dbAt = c.at; return db; } } catch (e) { } }
    let res = null, lastErr = null;
    for (const n of DB_NAMES) { try { res = await get(n); break; } catch (e) { lastErr = e; } }
    if (!res) throw new Error('could not read the MSYS2 package list (' + (lastErr ? lastErr.message : '') + ')');
    const pk = {};
    await streamToTar(res, (e, data) => { if (/\/desc$/.test(e.name)) { const d = parseDesc(data.toString('utf8')); if (d.name) pk[d.name] = d; } });
    const provides = {};
    Object.values(pk).forEach((d) => d.provides.forEach((p) => { const b = bare(p); if (!pk[b] && !provides[b]) provides[b] = d.name; }));
    db = { pk, provides }; dbAt = Date.now();
    try { fs.writeFileSync(dbCache, JSON.stringify({ at: dbAt, db })); } catch (e) { }
    return db;
  }
  const full = (n) => (n.startsWith(PREFIX) || /^(msys2-|mingw-w64-)/.test(n) ? n : PREFIX + n);
  /* every package needed for these, in install order (dependencies first) */
  function closure(names) {
    const order = [], seen = {};
    const visit = (raw) => {
      let n = bare(raw); if (!db.pk[n] && db.provides[n]) n = db.provides[n];
      if (!db.pk[n]) { if (!/^(sh|bash|perl|python|msys2-runtime)$/.test(n)) log('[msys] unknown package ' + n); return; }
      if (seen[n]) return; seen[n] = 1;
      db.pk[n].depends.forEach(visit);
      order.push(n);
    };
    names.map(full).forEach(visit);
    return order;
  }
  async function installOne(d, onProgress) {
    const r = await get(d.filename);
    const total = d.csize || +(r.headers && r.headers.get && r.headers.get('content-length')) || 0;
    const h = crypto.createHash('sha256'); let got = 0, lp = -1;
    const files = [], links = [];
    const tapped = { [Symbol.asyncIterator]: async function* () { for await (const c of r.body) { const b = Buffer.from(c); h.update(b); got += b.length; const p = total ? Math.floor(100 * got / total) : -1; if (onProgress && p !== lp) { lp = p; onProgress({ pct: p, text: 'Getting ' + d.name.replace(PREFIX, '') + ' … ' + (p >= 0 ? p + '%' : '') }); } yield b; } } };
    const tmpRoot = path.join(root, '.inst-' + d.name);
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    await streamToTar({ body: tapped }, (e, data) => {
      const rel = e.name.replace(/^\.\//, '');
      if (!rel || rel[0] === '.' || rel.includes('..')) return;           // .PKGINFO, .MTREE ... and nothing outside
      const dest = path.join(tmpRoot, rel);
      if (e.type === '5') { fs.mkdirSync(dest, { recursive: true }); return; }
      if (e.type === '2' || e.type === '1') { links.push({ rel, to: e.linkname, hard: e.type === '1' }); return; }
      if (e.type === '0' || e.type === '\0' || e.type === '7') { fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, data); files.push(rel); }
    });
    if (d.sha256 && h.digest('hex') !== d.sha256) { fs.rmSync(tmpRoot, { recursive: true, force: true }); throw new Error(d.name + ' download was damaged (checksum mismatch)'); }
    // symlinks/hardlinks: Windows cannot always make links, so copy the target file
    links.forEach((l) => { const dest = path.join(tmpRoot, l.rel); const src = l.hard ? path.join(tmpRoot, l.to) : path.resolve(path.dirname(dest), l.to); try { if (fs.existsSync(src) && fs.statSync(src).isFile()) { fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(src, dest); files.push(l.rel); } } catch (e) { } });
    // move into place
    files.forEach((rel) => { const s = path.join(tmpRoot, rel), t = path.join(root, rel); fs.mkdirSync(path.dirname(t), { recursive: true }); try { fs.renameSync(s, t); } catch (e) { fs.copyFileSync(s, t); } });
    fs.rmSync(tmpRoot, { recursive: true, force: true });
    installed[d.name] = { version: d.version, files }; save();
  }
  /* install packages (short names like "SDL2" or full names); returns the list of package names involved */
  async function install(names, onProgress) {
    await loadDb();
    let order = closure(names);
    const missing = names.map(full).filter((n) => !db.pk[bare(n)] && !db.provides[bare(n)]);
    if (missing.length) throw new Error('MSYS2 has no package called ' + missing.map((m) => m.replace(PREFIX, '')).join(', '));
    const todo = order.filter((n) => !installed[n] || installed[n].version !== db.pk[n].version);
    let i = 0;
    for (const n of todo) {
      i++;
      const say = (p) => onProgress && onProgress(Object.assign({}, p, { text: '(' + i + '/' + todo.length + ') ' + p.text }));
      try { await installOne(db.pk[n], say); }
      catch (e) { // the list may be out of date: refresh once and retry
        log('[msys] ' + n + ': ' + e.message + ' — refreshing the package list');
        await loadDb(true); const d = db.pk[n]; if (!d) throw e; await installOne(d, say);
      }
    }
    return order;
  }
  function isInstalled(name) { return !!installed[full(name)]; }
  /* pkg-config module names (.pc files) a package installed */
  function pcModules(name) { const it = installed[full(name)]; return it ? it.files.filter((f) => /\/lib\/pkgconfig\/[^/]+\.pc$/.test(f)).map((f) => path.basename(f, '.pc')) : []; }
  function list() { return Object.keys(installed).map((n) => n.replace(PREFIX, '')); }
  const binDir = () => path.join(root, 'ucrt64', 'bin');
  return { install, loadDb, closure, isInstalled, pcModules, list, binDir, root, PREFIX };
}
module.exports = { create, tarParser, parseDesc, PREFIX };

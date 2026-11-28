'use strict';
/* The built-in browser's local web server.
   Web pages written in the editor (HTML with CSS/JS, or a PHP page) are served from the FutureSelf Code folder
   on http://127.0.0.1:<port>/ so they behave exactly like a real website: scripts, CDNs (React, Bootstrap ...),
   fetch(), localStorage, images and other files the student adds to the folder.
   Only this PC can open it (127.0.0.1). */
const fs = require('fs');
const path = require('path');
const http = require('http');

const TYPES = { '.html': 'text/html; charset=utf-8', '.htm': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.jsx': 'text/javascript; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.csv': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.pdf': 'application/pdf', '.wasm': 'application/wasm', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.webm': 'video/webm', '.wav': 'audio/wav', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf' };

function create(opts) {
  const root = path.join(opts.dir, 'code', 'web');
  fs.mkdirSync(root, { recursive: true });
  let server = null, port = 0, starting = null;
  function start() {
    if (port) return Promise.resolve(port);
    if (starting) return starting;
    starting = new Promise((resolve, reject) => {
      server = http.createServer((req, res) => {
        try {
          let rel = decodeURIComponent((req.url || '/').split('?')[0]);
          if (rel.endsWith('/')) rel += 'index.html';
          const file = path.resolve(root, '.' + rel);
          if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); return res.end('Forbidden'); }   // nothing outside the web folder
          fs.stat(file, (err, st) => {
            if (err || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('Not found: ' + rel); }
            res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
            fs.createReadStream(file).pipe(res);
          });
        } catch (e) { res.writeHead(400); res.end('Bad request'); }
      });
      server.on('error', reject);
      server.listen(0, '127.0.0.1', () => { port = server.address().port; resolve(port); });
    });
    return starting;
  }
  /* write the page and give back its address */
  async function publish(html, name) {
    const p = await start();
    const f = String(name || 'index.html').replace(/[^\w.-]/g, '_');
    fs.writeFileSync(path.join(root, f), String(html || ''));
    return { url: 'http://127.0.0.1:' + p + '/' + (f === 'index.html' ? '' : f) + '?t=' + Date.now(), folder: root };
  }
  function stop() { try { server && server.close(); } catch (e) { } server = null; port = 0; starting = null; }
  return { start, publish, stop, root };
}
module.exports = { create };

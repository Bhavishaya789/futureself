/* Windows in-app update: download the new Setup.exe from the project's GitHub release, check it, run it quietly, close the app.
   Everything outside the app (network, process start, quitting) is passed in, so it can be tested without Electron. */
'use strict';
const fs = require('fs'), path = require('path'), crypto = require('crypto');

function create(d) {
  let busy = false;
  async function install(p) {
    try {
      if (d.platform !== 'win32') return { ok: false, error: 'Updating from inside the app works on Windows.' };
      if (busy) return { ok: false, error: 'An update is already running.' };
      const url = String(p && p.url || ''), want = String(p && p.sha256 || '').toLowerCase();
      if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/releases\/download\/[^\s]+$/.test(url)) return { ok: false, error: 'That update address is not allowed.' };
      if (want && !/^[a-f0-9]{64}$/.test(want)) return { ok: false, error: 'Bad update checksum.' };
      busy = true;
      const dir = path.join(d.tmp, 'FutureSelf-Update'); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
      const file = path.join(dir, 'FutureSelf-Setup.exe');
      const res = await d.fetch(url);
      if (!res.ok || !res.body) { busy = false; return { ok: false, error: 'The download failed (' + res.status + '). Try again later.' }; }
      const total = +(res.headers && res.headers.get('content-length')) || 0, h = crypto.createHash('sha256'), out = fs.createWriteStream(file);
      let got = 0, lastPct = -1; const reader = res.body.getReader();
      for (;;) {
        const { done, value } = await reader.read(); if (done) break;
        h.update(value); got += value.length; if (!out.write(Buffer.from(value))) await new Promise((r) => out.once('drain', r));
        const pct = total ? Math.floor(got * 100 / total) : 0; if (pct !== lastPct) { lastPct = pct; d.send('update:progress', pct); }
      }
      await new Promise((r) => out.end(r));
      const head = Buffer.alloc(2), fd = fs.openSync(file, 'r'); fs.readSync(fd, head, 0, 2, 0); fs.closeSync(fd);
      if (head.toString() !== 'MZ' || got < 5e6) { busy = false; return { ok: false, error: 'The downloaded file is not a valid installer.' }; }
      if (want && h.digest('hex') !== want) { fs.rmSync(file, { force: true }); busy = false; return { ok: false, error: 'The download did not match its checksum, so it was thrown away. Try again.' }; }
      /* start the installer through cmd "start" so it is NOT a child of this app (otherwise closing the app can kill it half-way) */
      d.spawn('cmd.exe', ['/d', '/s', '/c', 'start "" "' + file + '" /silent'], { detached: true, stdio: 'ignore', windowsHide: true, windowsVerbatimArguments: true }).unref();
      setTimeout(d.quit, 1500);
      return { ok: true };
    } catch (e) { busy = false; return { ok: false, error: 'The update could not be installed: ' + e.message }; }
  }
  return { install };
}
module.exports = { create };

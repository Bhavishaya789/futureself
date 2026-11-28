'use strict';
/* Graphics safety for the Windows app.
   Some PCs (seen on Intel graphics with Electron 42) draw the page wrong with Chromium's newer GPU path:
   the dark background comes out white and images/3D do not show. So:
     1. Chromium's newer Skia "Graphite" renderer is switched off on Windows (Electron 39 did not use it either).
     2. After the window first appears, FutureSelf takes a picture of its own window. If the background
        that must be dark is white, it restarts ONCE in software graphics mode and remembers that in gpu.json.
        A new Electron version tries the GPU again (the check repeats, so it falls back again if needed).
   Call apply() before app "ready", watch(win) after the window is made. */
const fs = require('fs');
const path = require('path');

function apply(app, dataDir, log) {
  const file = path.join(dataDir, 'gpu.json');
  let st = {};
  try { st = JSON.parse(fs.readFileSync(file, 'utf8')) || {}; } catch (e) { /* first run */ }
  if (st.electron && st.electron !== process.versions.electron) st = {};   // new Electron: give the GPU another chance
  if (process.platform === 'win32' && !process.env.FS_KEEP_GRAPHITE) app.commandLine.appendSwitch('disable-features', 'SkiaGraphite');
  const software = st.mode === 'software' || process.env.FS_SOFTWARE_GPU === '1';
  if (software) app.disableHardwareAcceleration();
  log('[gpu] ' + (software ? 'software graphics (saved: ' + (st.reason || 'set by FS_SOFTWARE_GPU') + ')' : 'hardware graphics') + ', Electron ' + process.versions.electron);
  app.on('child-process-gone', (_e, d) => { if (d && d.type === 'GPU') log('[gpu] GPU process stopped: ' + d.reason + ' (exit ' + d.exitCode + ')'); });

  /* the share of sample points (a 5x5 patch each) that came out white */
  function whiteShare(img) {
    const sz = img.getSize(); if (!sz.width || !sz.height) return 0;
    const bmp = img.toBitmap(), W = sz.width, H = sz.height;
    const pts = [[0.975, 0.3], [0.975, 0.45], [0.975, 0.6], [0.975, 0.75], [0.975, 0.9]];
    let white = 0;
    for (const [fx, fy] of pts) {
      let sum = 0, n = 0;
      const cx = Math.floor(W * fx), cy = Math.floor(H * fy);
      for (let y = cy - 2; y <= cy + 2; y++) for (let x = cx - 2; x <= cx + 2; x++) {
        if (x < 0 || y < 0 || x >= W || y >= H) continue;
        const i = (y * W + x) * 4; sum += Math.min(bmp[i], bmp[i + 1], bmp[i + 2]); n++;   // the darkest channel: white only if all three are high
      }
      if (n && sum / n > 200) white++;
    }
    return white / pts.length;
  }
  function save(o) { try { fs.writeFileSync(file, JSON.stringify(Object.assign({ electron: process.versions.electron, at: new Date().toISOString() }, o))); } catch (e) { log('[gpu] ' + e.message); } }

  function watch(win, opts) {
    opts = opts || {};
    let done = false;
    const check = () => {
      if (done || !win || win.isDestroyed() || !win.isVisible() || win.isMinimized()) return;
      done = true;
      setTimeout(() => {
        if (!win || win.isDestroyed()) return;
        win.webContents.capturePage().then((img) => {
          const share = whiteShare(img);
          try { const g = app.getGPUFeatureStatus(); log('[gpu] status ' + JSON.stringify({ gpu: g.gpu_compositing, raster: g.rasterization, webgl: g.webgl, white: share })); } catch (e) { /* ignore */ }
          if (share < 0.8) return;
          if (software) { log('[gpu] the page still looks white in software mode'); return; }
          log('[gpu] the page was drawn white: restarting once in software graphics mode');
          save({ mode: 'software', reason: 'the page was drawn white with GPU graphics' });
          if (opts.onFallback) return opts.onFallback();
          app.relaunch(); app.exit(0);
        }).catch((e) => log('[gpu] check failed: ' + e.message));
      }, opts.delay == null ? 4000 : opts.delay);
    };
    win.webContents.once('did-finish-load', () => { if (win.isVisible()) check(); else win.once('show', check); });
  }
  return { watch, file, software, whiteShare };
}
module.exports = { apply };

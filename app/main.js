// FutureSelf - Electron main process
const { app, BrowserWindow, ipcMain, Notification, Tray, Menu, nativeImage, shell, dialog, net, session, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');

const env = require('./core/env');
const { makeStore } = require('./core/storage');
const { createApi, loadTopics } = require('./core/api');
const blockerLib = require('./core/blocker');
const videofind = require('./core/videofind');
const videoguard = require('./core/videoguard');
const phonelinkLib = require('./core/phonelink');
const acctLib = require('./core/acctdesktop');

const IS_WIN = process.platform === 'win32';
const exeDir = path.dirname(process.execPath);
if (process.env.FS_USER_DATA) app.setPath('userData', process.env.FS_USER_DATA);
const dataDir = app.getPath('userData');
fs.mkdirSync(dataDir, { recursive: true });
const logFile = path.join(dataDir, 'futureself.log');
function log(m) {
  const line = new Date().toISOString() + ' ' + m + '\n';
  try { fs.appendFileSync(logFile, line); } catch (e) { /* ignore */ }
  if (!app.isPackaged || process.env.FS_DEBUG) console.log(m);
}
env.load([path.join(exeDir, '.env'), path.join(dataDir, '.env'), path.join(__dirname, '.env')]);

if (!app.requestSingleInstanceLock()) { app.quit(); }

let win = null, tray = null, api = null, blocker = null, quitting = false, trayHinted = false;
let lock = null; // { mode } while a focus session is locked
let settings = {};

const iconPath = path.join(__dirname, 'renderer', 'icons', 'icon-512.png');

function send(ch, payload) { if (win && !win.isDestroyed()) win.webContents.send(ch, payload); }
function showWin() { if (!win) return; if (win.isMinimized()) win.restore(); win.show(); win.focus(); }

function createWindow(hidden) {
  win = new BrowserWindow({
    width: 1280, height: 820, minWidth: 920, minHeight: 640, show: false, backgroundColor: '#060812',
    title: 'FutureSelf', icon: iconPath, autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true, devTools: !app.isPackaged || !!process.env.FS_DEBUG }
  });
  win.removeMenu();
  win.once('ready-to-show', () => { if (!hidden) win.show(); });
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  const YT_HOST = /^https:\/\/([a-z0-9-]+\.)*(youtube\.com|youtube-nocookie\.com|youtu\.be|google\.com|googlevideo\.com)(\/|$)/;
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https:\/\//.test(url) && !YT_HOST.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-frame-navigate', (e) => { try { if (!e.isMainFrame && e.frame && e.frame.parent === win.webContents.mainFrame && !/^https:\/\/www\.youtube-nocookie\.com\/embed\/[A-Za-z0-9_-]{11}/.test(e.url) && !/^about:/.test(e.url)) e.preventDefault(); } catch (x) { } });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file://')) { e.preventDefault(); if (/^https:\/\//.test(url)) shell.openExternal(url); } });
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown' || !app.isPackaged) return;
    const k = input.key.toLowerCase();
    if ((input.control && (k === 'r' || k === 'w' || k === 'shift')) || k === 'f5' || k === 'f12' || (input.alt && k === 'f4' && lock)) e.preventDefault();
  });

  // While a locked session runs, leaving the window is logged and the window pulls itself back.
  win.on('blur', () => {
    if (!lock) return;
    const now = Date.now();
    if (now - (lock.lastBlur || 0) < 1200) return;
    lock.lastBlur = now;
    send('distraction', { kind: 'switch' });
    if (lock.mode !== 'gentle') setTimeout(() => { if (lock && win) { win.setAlwaysOnTop(true, 'screen-saver'); win.show(); win.focus(); win.moveTop(); } }, 150);
  });
  win.on('close', (e) => {
    if (quitting) return;
    if (lock && lock.mode !== 'gentle') { e.preventDefault(); return; }
    if (settings.close_to_tray !== false) {
      e.preventDefault(); win.hide();
      if (!trayHinted && Notification.isSupported()) { trayHinted = true; new Notification({ title: 'FutureSelf is still running', body: 'It stays in the system tray so your study reminders keep working. Right-click the tray icon to quit.' }).show(); }
    }
  });
  win.on('closed', () => { win = null; });
}

function createTray() {
  try {
    const img = nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 });
    tray = new Tray(img);
    tray.setToolTip('FutureSelf');
    tray.setContextMenu(Menu.buildFromTemplate([
      { label: 'Open FutureSelf', click: showWin },
      { type: 'separator' },
      { label: 'Quit', click: () => { quitting = true; app.quit(); } }
    ]));
    tray.on('click', showWin);
  } catch (e) { log('[tray] ' + e.message); }
}

function applyLock(on, cfg) {
  if (!win) return;
  if (on) {
    lock = { mode: cfg.mode, lastBlur: Date.now() };
    win.setAlwaysOnTop(true, 'screen-saver');
    if (cfg.mode === 'strict') win.setKiosk(true);
    else if (cfg.mode === 'focus') win.setFullScreen(true);
    win.show(); win.focus();
  } else {
    lock = null;
    win.setKiosk(false); win.setFullScreen(false); win.setAlwaysOnTop(false);
  }
}

function applyAutostart() {
  try { app.setLoginItemSettings({ openAtLogin: !!settings.autostart, args: ['--hidden'] }); } catch (e) { log('[autostart] ' + e.message); }
}

app.on('second-instance', () => showWin());
app.on('before-quit', () => { quitting = true; try { if (blocker) blocker.stop(); } catch (e) { /* ignore */ } });
process.on('exit', () => { try { if (blocker && blocker.active()) blocker.setTaskMgr(false); } catch (e) { /* ignore */ } });
process.on('uncaughtException', (e) => { log('[fatal] ' + (e && e.stack || e)); try { if (blocker) blocker.stop(); } catch (_) { /* ignore */ } });

app.whenReady().then(async () => {
  try { session.defaultSession.setPermissionRequestHandler((_wc, perm, cb) => cb(perm === 'fullscreen')); session.defaultSession.setPermissionCheckHandler((_wc, perm) => perm === 'fullscreen'); } catch (e) { /* ignore */ }
  try {
    const store = await makeStore(dataDir, log);
    const contentDir = [process.env.FS_CONTENT, path.join(exeDir, 'Content'), path.join(__dirname, 'Content')].filter(Boolean).find((d) => fs.existsSync(d)) || path.join(__dirname, 'Content');
    global.__fsContentDir = contentDir;
    const topics = loadTopics(contentDir, log);
    log('[version] FutureSelf ' + app.getVersion());
    log('[content] ' + Object.keys(topics).length + ' subjects from ' + contentDir);
    blocker = blockerLib.create({
      dataDir, log,
      onBlocked: (b) => send('distraction', b)
    });
    blocker.recover();

    api = createApi({
      store, topics, native: IS_WIN, log, dataDir,
      emit: (type, payload, s) => {
        if (type === 'settings') { settings = payload; applyAutostart(); return; }
        if (type === 'notify') {
          send('notify', payload);
          const st = s || settings;
          if (st.notify_native !== false && Notification.isSupported()) {
            const n = new Notification({ title: payload.title, body: payload.body, icon: iconPath });
            n.on('click', showWin); n.show();
          }
        }
      }
    });
    settings = (await api.user()).settings;
    applyAutostart();

    ipcMain.handle('api', (_e, method, url, body) => api.handle(method, url, body));
    ipcMain.handle('app:info', () => ({ platform: process.platform, version: app.getVersion(), native: IS_WIN, dataDir, contentDir: global.__fsContentDir || '' }));
    /* Phone link: tells the Android app when a session runs here so the phone can lock too */
    const plink = phonelinkLib.create({ dir: dataDir, log });
    if (plink.wantsStart()) plink.start().catch((e) => log('[phonelink] could not start: ' + e.message));
    /* the sign-in token is locked with the Windows account (DPAPI), so a copied account.json is useless on another PC or user */
    const seal = (t) => { try { return safeStorage.isEncryptionAvailable() ? safeStorage.encryptString(t).toString('base64') : ''; } catch (e) { return ''; } };
    const unseal = (b) => { try { return safeStorage.decryptString(Buffer.from(b, 'base64')); } catch (e) { return ''; } };
    const acct = acctLib.create({ dir: dataDir, log, seal, open: unseal, openExternal: (u) => { if (!/^(https:\/\/|http:\/\/(localhost|127\.0\.0\.1):\d+\/)/.test(u)) throw new Error('Bad address'); return shell.openExternal(u); } });
    ipcMain.handle('acct', async (_e, op, payload) => { try { return { ok: true, data: await acct.invoke(op, payload) }; } catch (e) { return { ok: false, error: e.message, needsVerify: !!e.needsVerify }; } });
    acct.follow((st) => send('remote:session', st));   // the phone's study session, so this PC can lock too
    app.on('before-quit', () => acct.stop());
    ipcMain.handle('phone:info', () => plink.info());
    ipcMain.handle('phone:enable', async (_e, on) => { try { await plink.setEnabled(!!on); return { ok: true, info: plink.info() }; } catch (e) { return { ok: false, error: 'Could not open the link: ' + e.message, info: plink.info() }; } });
    ipcMain.handle('phone:code', () => { if (!plink.isOn()) return { ok: false, error: 'Turn the phone link on first' }; return Object.assign({ ok: true }, plink.newCode()); });
    ipcMain.handle('phone:unpair', (_e, id) => { plink.unpair(String(id || '')); return { ok: true, info: plink.info() }; });
    ipcMain.handle('session:state', (_e, st) => { plink.setSession(st); acct.push(st); return { ok: true }; });
    app.on('before-quit', () => { try { plink.setSession({ active: false }); plink.stop(); } catch (e) { /* ignore */ } });

    /* Study videos: the app picks them, the student never searches. They play in the lesson/session screen inside the app. */
    const vguard = videoguard.createGuard();
    videoguard.install(session.defaultSession, vguard, log);
    ipcMain.handle('video:allow', (_e, id) => ({ ok: !!vguard.allow(id) }));
    const EMB = /^https:\/\/(www\.youtube-nocookie\.com|www\.youtube\.com)\/embed\//;
    session.defaultSession.webRequest.onBeforeSendHeaders({ urls: ['https://www.youtube-nocookie.com/*', 'https://www.youtube.com/embed/*'] }, (d, cb) => {
      const h = d.requestHeaders; if (d.resourceType === 'subFrame' && !h['Referer']) h['Referer'] = 'https://futureself.app/';
      cb({ requestHeaders: h });
    });
    const fetchText = (u) => session.fromPartition('fsfind').fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', 'Accept-Language': 'en-IN,en;q=0.9', Cookie: 'CONSENT=YES+1; SOCS=CAI' } }).then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); });
    ipcMain.handle('video:find', async (_e, req) => {
      try {
        req = req || {}; const qs = (Array.isArray(req.queries) ? req.queries : []).map((q) => String(q).slice(0, 140)).filter(Boolean).slice(0, 6);
        if (!qs.length) return { ok: false, error: 'No topic given' };
        return await videofind.find({ dir: dataDir, key: String(req.key || qs[0]).slice(0, 200), queries: qs, channels: (req.channels || []).map(String).slice(0, 8), keywords: (req.keywords || []).map(String).slice(0, 12), focus: String(req.focus || '').slice(0, 160), generic: String(req.generic || '').slice(0, 120), fetchText });
      } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
    });
    let videoWin = null;
    ipcMain.handle('video:open', (_e, id) => {   // pop-out fallback: only the chosen video, nothing else can load in it
      id = String(id || ''); if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return { ok: false, error: 'Not a video id' };
      vguard.allow(id);
      const url = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1&autoplay=1&iv_load_policy=3';
      if (videoWin && !videoWin.isDestroyed()) { videoWin.loadURL(url, { httpReferrer: 'https://futureself.app/' }); videoWin.show(); videoWin.focus(); return { ok: true }; }
      videoWin = new BrowserWindow({ width: 1000, height: 600, minWidth: 600, minHeight: 400, title: 'FutureSelf video', backgroundColor: '#000000', autoHideMenuBar: true, icon: iconPath,
        webPreferences: { partition: 'persist:fsvideo', contextIsolation: true, nodeIntegration: false, sandbox: true, devTools: false } });
      videoWin.setMenuBarVisibility(false); videoguard.install(videoWin.webContents.session, vguard, log);
      videoWin.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
      videoWin.webContents.on('will-navigate', (e, u) => { if (!EMB.test(u)) e.preventDefault(); });
      videoWin.on('closed', () => { videoWin = null; send('video:closed', {}); });
      videoWin.loadURL(url, { httpReferrer: 'https://futureself.app/' });
      return { ok: true };
    });
    /* in-app update (Windows): see core/winupdate.js */
    const winUpdate = require('./core/winupdate').create({ fetch: (u) => net.fetch(u, { redirect: 'follow' }), spawn: require('child_process').spawn, platform: process.platform, tmp: require('os').tmpdir(), send, quit: () => app.quit() });
    ipcMain.handle('update:install', (_e, p) => winUpdate.install(p));
    ipcMain.handle('video:close', () => { if (videoWin && !videoWin.isDestroyed()) videoWin.close(); return { ok: true }; });
    ipcMain.handle('lock:start', (_e, cfg) => {
      const r = blocker.start({ mode: cfg.mode, apps: cfg.apps, sites: cfg.sites });
      applyLock(true, cfg);
      return Object.assign({ ok: true }, r);
    });
    ipcMain.handle('lock:stop', () => { blocker.stop(); applyLock(false); return { ok: true }; });

    createWindow(process.argv.includes('--hidden'));
    createTray();

    // reminder scheduler
    const loop = () => api.tick().catch((e) => log('[scheduler] ' + e.message));
    setTimeout(loop, 4000);
    setInterval(loop, 20000);
    log('[app] started, version ' + app.getVersion() + ', storage ' + store.kind);
  } catch (e) {
    log('[fatal] ' + (e && e.stack || e));
    dialog.showErrorBox('FutureSelf could not start', String(e && e.message || e) + '\n\nDetails are in:\n' + logFile);
    app.exit(1);
  }
});

app.on('window-all-closed', () => { /* stays in the tray; Quit is in the tray menu */ });

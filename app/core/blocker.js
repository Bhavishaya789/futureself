// Native focus lock for Windows: closes blocklisted programs / browser windows showing blocked sites,
// keeps the FutureSelf window on top, and (Strict mode) switches Task Manager off for the session.
const { execFile, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const IS_WIN = process.platform === 'win32';
const BROWSERS = ['chrome.exe', 'msedge.exe', 'firefox.exe', 'brave.exe', 'opera.exe', 'vivaldi.exe', 'arc.exe'];
// Never closed, even if the user types them into the blocklist.
const PROTECTED = ['system', 'idle', 'registry', 'explorer.exe', 'winlogon.exe', 'csrss.exe', 'wininit.exe', 'services.exe', 'lsass.exe',
  'svchost.exe', 'dwm.exe', 'taskmgr.exe', 'cmd.exe', 'powershell.exe', 'conhost.exe', 'electron.exe', 'futureself.exe', 'searchhost.exe', 'startmenuexperiencehost.exe'];
const TM_KEY = 'HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System';

function parseList(s) {
  return String(s || '').split(/[,;\n]+/).map((x) => x.trim().toLowerCase()).filter(Boolean);
}
function normApps(s) {
  return parseList(s).map((x) => (x.endsWith('.exe') ? x : x + '.exe')).filter((x) => PROTECTED.indexOf(x) < 0);
}
function siteKeys(s) {
  return parseList(s).map((x) => x.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].split('.')[0]).filter((x) => x.length >= 4);
}
// tasklist /V /FO CSV /NH  ->  [{name, pid, title}]
function parseTasklist(out) {
  const rows = [];
  String(out).split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return;
    const f = [];
    line.replace(/"((?:[^"]|"")*)"/g, (_, v) => { f.push(v.replace(/""/g, '"')); return ''; });
    if (f.length < 2) return;
    rows.push({ name: f[0].toLowerCase(), pid: parseInt(f[1], 10), title: f.length >= 9 ? f[f.length - 1] : '' });
  });
  return rows;
}
// Which processes should be closed right now?
function pickVictims(rows, apps, keys) {
  const hit = [];
  rows.forEach((r) => {
    if (!r.pid || PROTECTED.indexOf(r.name) > -1 || r.pid === process.pid) return;
    if (apps.indexOf(r.name) > -1) { hit.push({ name: r.name, pid: r.pid, why: 'app' }); return; }
    if (BROWSERS.indexOf(r.name) > -1 && r.title && r.title !== 'N/A') {
      const t = r.title.toLowerCase();
      const k = keys.find((x) => t.indexOf(x) > -1);
      if (k) hit.push({ name: r.name, pid: r.pid, why: 'site', site: k });
    }
  });
  return hit;
}

function create(opts) {
  const markerFile = path.join(opts.dataDir, 'taskmgr-disabled.marker');
  let state = null, busy = false;
  const log = opts.log || (() => { });

  function setTaskMgr(off) {
    if (!IS_WIN) return;
    try {
      if (off) {
        execFileSync('reg', ['add', TM_KEY, '/v', 'DisableTaskMgr', '/t', 'REG_DWORD', '/d', '1', '/f'], { windowsHide: true });
        fs.writeFileSync(markerFile, String(Date.now()));
      } else {
        try { execFileSync('reg', ['delete', TM_KEY, '/v', 'DisableTaskMgr', '/f'], { windowsHide: true, stdio: 'ignore' }); } catch (e) { /* value absent */ }
        try { fs.unlinkSync(markerFile); } catch (e) { /* no marker */ }
      }
    } catch (e) { log('[lock] Task Manager switch failed: ' + e.message); }
  }

  // If the app died during a Strict session, put Task Manager back on the next launch.
  function recover() { if (IS_WIN && fs.existsSync(markerFile)) { log('[lock] restoring Task Manager after an unclean exit'); setTaskMgr(false); } }

  function scan() {
    if (!IS_WIN || busy || !state) return;
    busy = true;
    execFile('tasklist', ['/V', '/FO', 'CSV', '/NH'], { windowsHide: true, maxBuffer: 20 * 1024 * 1024, timeout: 8000 }, (err, stdout) => {
      busy = false;
      if (err || !state) return;
      pickVictims(parseTasklist(stdout), state.apps, state.keys).forEach((v) => {
        const args = state.mode === 'strict' || v.why === 'app' ? ['/PID', String(v.pid), '/T', '/F'] : ['/PID', String(v.pid), '/T'];
        execFile('taskkill', args, { windowsHide: true }, () => { });
        opts.onBlocked({ kind: v.why, name: v.name, site: v.site || null });
      });
    });
  }

  function start(cfg) {
    stop();
    state = { mode: cfg.mode, apps: normApps(cfg.apps), keys: siteKeys(cfg.sites), lastBlur: 0 };
    if (state.mode === 'strict') setTaskMgr(true);
    if (IS_WIN && state.mode !== 'gentle') { state.timer = setInterval(scan, 2500); scan(); }
    return { native: IS_WIN, apps: state.apps, sites: state.keys };
  }
  function stop() {
    if (!state) return;
    if (state.timer) clearInterval(state.timer);
    if (state.mode === 'strict') setTaskMgr(false);
    state = null;
  }
  const active = () => state;

  return { start, stop, active, recover, setTaskMgr };
}

module.exports = { create, parseTasklist, pickVictims, normApps, siteKeys, PROTECTED };

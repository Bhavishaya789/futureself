/* The "Phone" screen: permissions, emergency contacts (max 5), link with the PC, phone-only options. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  var PH = { scan: [], scanning: false, scanned: false, pick: null };
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s) { return document.querySelector(s); }
  function toast(a, b, c) { H().toast(a, b, c); }

  FSX.nav = [['phone', 'phone', 'Phone']];
  FSX.icons = { phone: '<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/>' };

  var PERMS = [
    ['accessibility', 'Block other apps', 'Needed. Lets FutureSelf notice when you open another app during a study session and bring you back.', 'Turn on', true],
    ['overlay', 'Show over other apps', 'Needed. Lets the study screen appear on top of the app you tried to open.', 'Allow', true],
    ['call', 'Direct emergency calls', 'Lets the call buttons dial your emergency contacts in one tap.', 'Allow', false],
    ['notifications', 'Notifications', 'Study reminders and the "phone locked" notice.', 'Allow', false],
    ['exactAlarm', 'Exact alarms', 'Reminders at the exact minute, even when the app is closed.', 'Allow', false],
    ['battery', 'Run without battery limits', 'Stops the phone from putting FutureSelf to sleep. Recommended.', 'Allow', false]
  ];

  function permCard(s) {
    var ok = s.accessibility && s.overlay;
    return '<div class="card"><div class="row spread wrap"><h2 style="margin:0">Phone protection</h2><span class="badge ' + (ok ? '' : 'warn') + '">' + (ok ? 'Ready' : 'Set up needed') + '</span></div>' +
      '<p class="muted" style="margin:8px 0 14px">While you study, the phone only lets you use FutureSelf and the phone/call screens. Tap each line to allow it, then come back here.</p>' +
      PERMS.map(function (p) {
        var on = !!s[p[0]];
        return '<div class="kv perm"><span><b>' + p[1] + '</b>' + (p[4] ? ' <small class="muted">(needed)</small>' : '') + '<br><small class="muted">' + p[2] + '</small></span>' +
          (on ? '<span class="badge">On</span>' : '<button class="btn sm pri" data-act="phperm" data-id="' + p[0] + '">' + p[3] + '</button>') + '</div>';
      }).join('') + '<div class="row wrap" style="margin-top:12px"><button class="btn" data-act="wzopen">Open the setup guide</button></div></div>';
  }

  function contactsCard(list) {
    var rows = list.map(function (c, i) {
      return '<div class="kv"><span><b>' + esc(c.name) + '</b><br><small class="muted">' + esc(c.number) + '</small></span><span class="row"><button class="btn sm pri" data-act="phcall" data-num="' + esc(c.number) + '">Call</button><button class="btn sm ghost" data-act="phdelc" data-i="' + i + '" aria-label="Remove ' + esc(c.name) + '">Remove</button></span></div>';
    }).join('') || '<p class="muted">No contacts yet. Add up to five people you may need to call in an emergency.</p>';
    return '<div class="card"><h2>Emergency contacts <small class="muted">(' + list.length + ' of 5)</small></h2>' +
      '<p class="muted" style="margin:8px 0 12px">These can be called in one tap, even while the phone is locked for study.</p>' +
      '<div class="kv"><span><b>Emergency services</b><br><small class="muted">112</small></span><button class="btn sm danger" data-act="phcall" data-num="112">Call 112</button></div>' + rows +
      (list.length < 5 ? '<div class="phadd"><input class="in" id="phcn" placeholder="Name (e.g. Mom)" maxlength="30" autocomplete="off"><input class="in" id="phcp" placeholder="Phone number" inputmode="tel" maxlength="20" autocomplete="off"><button class="btn pri" data-act="phaddc">Add contact</button></div>' : '<p class="muted" style="margin-top:10px">You have added five contacts. Remove one to add another.</p>') + '</div>';
  }

  function linkCard(i) {
    var h = '<div class="card"><h2>Link with your PC</h2>';
    if (i && i.account) {
      h += '<p class="muted" style="margin:8px 0 12px">You are signed in, so this phone follows your PC through your account. Sign in with the <b>same email</b> in the FutureSelf PC app. When you start a study session there, this phone locks for the same time and unlocks when it ends. It works on any Wi-Fi or mobile data.</p>' +
        '<div class="kv"><span>Status</span><b>' + (i.connected ? 'Connected' : 'Checking...') + '</b></div>' +
        '<div class="kv"><span>Lock this phone during PC sessions<br><small class="muted">Gentle sessions only send a reminder</small></span><label class="switch"><input type="checkbox" id="phrestrict" data-phset="restrictOnPc" ' + (i.restrictOnPc !== false ? 'checked' : '') + '><span></span></label></div>' +
        '<p class="muted" style="margin:12px 0 0">Account: <a href="#/account">open Account</a></p>';
    } else if (i && i.paired) {
      h += '<p class="muted" style="margin:8px 0 12px">When you start a study session on <b>' + esc(i.pcName || 'your PC') + '</b>, this phone locks for the same time and unlocks when the session ends.</p>' +
        '<div class="kv"><span>Status</span><b>' + (i.connected ? 'Connected' : 'Looking for the PC...') + '</b></div>' +
        '<div class="kv"><span>PC address</span><b>' + esc(i.address || '') + '</b></div>' +
        '<div class="kv"><span>Lock this phone during PC sessions<br><small class="muted">Gentle sessions only send a reminder</small></span><label class="switch"><input type="checkbox" id="phrestrict" data-phset="restrictOnPc" ' + (i.restrictOnPc !== false ? 'checked' : '') + '><span></span></label></div>' +
        '<div class="row wrap" style="margin-top:12px"><button class="btn danger" data-act="phunlink">Unlink this PC</button></div>';
    } else {
      h += '<p class="muted" style="margin:8px 0 12px">On your PC open FutureSelf, go to Settings, turn on <b>Phone link</b> and press <b>Pair a new phone</b>. Keep the phone on the same Wi-Fi. Then find your PC here.</p>' +
        '<div class="row wrap"><button class="btn pri" data-act="phscan"' + (PH.scanning ? ' disabled' : '') + '>' + (PH.scanning ? 'Searching the Wi-Fi...' : 'Find my PC') + '</button></div>';
      if (PH.scanned && !PH.scan.length) h += '<p class="muted" style="margin-top:10px">No PC found. Check that the phone link is on and both are on the same Wi-Fi, or type the address shown on the PC.</p>';
      h += PH.scan.map(function (p, k) { return '<div class="kv"><span><b>' + esc(p.name || 'PC') + '</b><br><small class="muted">' + esc(p.address) + ':' + p.port + '</small></span><button class="btn sm" data-act="phpick" data-i="' + k + '">Use</button></div>'; }).join('');
      h += '<div class="phadd" style="margin-top:12px"><input class="in" id="phaddr" placeholder="PC address, e.g. 192.168.1.5:47820" value="' + esc(PH.pick ? PH.pick.address + ':' + PH.pick.port : '') + '" autocomplete="off" inputmode="url"><input class="in" id="phcode" placeholder="6 digit code from the PC" inputmode="numeric" maxlength="7" autocomplete="off"><button class="btn pri" data-act="phpair">Pair</button></div>';
    }
    return h + '</div>';
  }

  function optionsCard() {
    var auto = FSPhone.getSetting('autoLockBlocks') === 'true';
    return '<div class="card"><h2>Phone only</h2>' +
      '<div class="kv"><span>Lock automatically when a timetable block starts<br><small class="muted">Uses the lock mode chosen for that block</small></span><label class="switch"><input type="checkbox" id="phauto" data-phset="autoLockBlocks" ' + (auto ? 'checked' : '') + '><span></span></label></div>' +
      '<div class="row wrap" style="margin-top:12px"><button class="btn" data-act="phtest">Test the lock for 1 minute</button></div>' +
      '<p class="muted" style="margin-top:12px;font-size:13px">Android lets you turn a permission off in Settings. FutureSelf blocks the Settings app while a lock is running, so it cannot be switched off in the middle of a session.</p></div>';
  }

  function viewPhone(v) {
    var s = FSPhone.status(), list = FSPhone.contacts(), li = FSPhone.linkInfo();
    v.innerHTML = '<div class="view narrow" style="animation:none"><div class="top"><div><div class="eyebrow">Phone</div><h1>Lock your phone while you study</h1><p class="muted">Set up once. Then study sessions, on this phone or your PC, keep you off other apps.</p></div></div>' +
      '<div class="stack"><div id="phperm">' + permCard(s) + '</div><div id="phcon">' + contactsCard(list) + '</div>' + (li.paired || window.__lan ? '<div id="phlink">' + linkCard(li) + '</div>' : '') + optionsCard() + '</div></div>';
    return Promise.resolve();
  }
  function rerender(id, html) { var e = $(id); if (e) e.innerHTML = html; }
  function onHome() { return (location.hash || '').indexOf('#/phone') === 0; }
  function refreshAll() { if (!onHome()) return; rerender('#phperm', permCard(FSPhone.status())); rerender('#phlink', linkCard(FSPhone.linkInfo())); rerender('#phcon', contactsCard(FSPhone.contacts())); }
  FSX.routes = { phone: viewPhone };
  FSX.onRefresh = refreshAll;
  window.addEventListener('focus', refreshAll);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refreshAll(); });
  setInterval(function () { if (onHome() && !document.hidden && !document.activeElement.matches('input')) { rerender('#phperm', permCard(FSPhone.status())); var l = $('#phlink .kv b'); if (l) rerender('#phlink', linkCard(FSPhone.linkInfo())); } }, 4000);

  function validNumber(n) { var d = String(n).replace(/[^0-9]/g, ''); return /^\+?[0-9 ()\-]{3,20}$/.test(n) && d.length >= 3 && d.length <= 15; }


  /* ---------- first-run setup guide: asks for every permission one by one, checks each one, moves on by itself ---------- */
  var WZ = { open: false, dismissed: false, tries: {}, sig: '' };
  var OEM = /xiaomi|redmi|poco|oppo|realme|oneplus|vivo|iqoo|huawei|honor|infinix|tecno|itel/;
  function wzSteps(s) {
    var mf = String(s.manufacturer || '').toLowerCase(); s.manufacturer = mf;
    var list = [
      { id: 'notifications', req: false, title: 'Allow notifications', why: 'Shows the "phone locked" notice and your study reminders.', btn: 'Allow notifications', done: !!s.notifications },
      { id: 'call', req: true, title: 'Allow emergency calls', why: 'Lets the call buttons on the lock screen dial your emergency contacts in one tap.', btn: 'Allow calls', done: !!s.call },
      { id: 'callguard', req: true, hide: !(s.sdk >= 29), title: 'Only emergency numbers can call', why: 'During Focus and Strict sessions, calls from or to numbers that are not on your emergency list are stopped, so the phone cannot be used to call anyone else. Your emergency numbers ring and dial normally. Gentle mode and times with no session are not affected. Android will ask you to choose FutureSelf as the call screening app.', btn: 'Choose FutureSelf', done: !!s.callGuard, help: 'Press <b>FutureSelf</b> and confirm. This replaces another call-screening app such as Truecaller while FutureSelf is set.' },
      { id: 'overlay', req: true, title: 'Show over other apps', why: 'Lets the study screen appear on top of the app you try to open. Without it the lock cannot cover other apps.', btn: 'Open the setting', done: !!s.overlay, help: 'Find <b>FutureSelf</b>, switch <b>Allow display over other apps</b> on, then press Back.' },
      { id: 'accessibility', req: true, title: 'Turn on the app lock', why: 'This is the part that notices when you open another app during a study session and brings you back. Strict mode needs it too.', btn: 'Open the setting', done: !!s.accessibility,
        help: 'Open <b>Installed apps</b> (or <b>Downloaded apps</b>), tap <b>FutureSelf</b> and switch it <b>On</b>. FutureSelf only checks which app is open. It does not read what is on the screen.',
        help2: (s.sdk >= 33 ? 'Switch greyed out or "Restricted setting"? Tap <b>Open app info</b>, press the <b>&#8942;</b> menu (top right), choose <b>Allow restricted settings</b>, then try again. Android does this for apps installed from a file.' : '') },
      { id: 'battery', req: false, title: 'Keep FutureSelf awake', why: 'Stops the phone from putting FutureSelf to sleep, so the lock keeps working with the screen off.', btn: 'Allow', done: !!s.battery }
    ];
    list = list.filter(function (x) { return !x.hide; });
    if (OEM.test(s.manufacturer || '')) {
      list.push({ id: 'autostart', req: false, manual: true, title: 'Allow auto-start', why: 'Your phone brand can close FutureSelf in the background. Switch FutureSelf <b>on</b> in the Auto-start list.', btn: 'Open Auto-start', done: FSPhone.getSetting('oem_autostart') === 'true' });
      if (/xiaomi|redmi|poco/.test(s.manufacturer || '')) list.push({ id: 'popup', req: false, manual: true, title: 'Allow pop-ups while in the background', why: 'On Xiaomi / Redmi phones the study screen cannot open over another app unless you allow <b>Display pop-up windows while running in the background</b> and <b>Show on Lock screen</b>.', btn: 'Open app permissions', done: FSPhone.getSetting('oem_popup') === 'true' });
    }
    return list;
  }
  function guardOk(s) { return !(s.sdk >= 29) || !!s.callGuard; }
  function wzNeeded(s) { return !s.accessibility || !s.overlay || !s.call || !guardOk(s); }
  function wzCurrent(list) { for (var i = 0; i < list.length; i++) if (!list[i].done && !list[i].skipped) return i; return -1; }
  function wzRender() {
    var s = FSPhone.status(), list = wzSteps(s); WZ.list = list;
    list.forEach(function (x) { if (WZ.skip && WZ.skip[x.id]) x.skipped = true; });
    var i = wzCurrent(list), n = list.length, doneCount = list.filter(function (x) { return x.done; }).length;
    var el = $('.fswiz'); if (!el) { el = document.createElement('div'); el.className = 'fswiz'; document.body.appendChild(el); }
    var sig = i + '|' + list.map(function (x) { return (x.done ? 1 : 0) + (x.skipped ? 's' : ''); }).join('') + '|' + (WZ.tries.accessibility || 0);
    if (sig === WZ.sig && el.firstChild) return; WZ.sig = sig;
    var bar = '<div class="wzbar"><i style="width:' + Math.round(100 * doneCount / n) + '%"></i></div>';
    if (i < 0) {
      var ready = s.accessibility && s.overlay && s.call && guardOk(s);
      el.innerHTML = '<div class="fswiz-in">' + bar + '<div class="eyebrow">' + (ready ? 'All set' : 'Almost') + '</div><h1>' + (ready ? 'FutureSelf is ready' : 'The lock is not ready yet') + '</h1><p class="muted">' +
        (ready ? 'Focus and Strict study sessions will now cover every other app. Phone calls stay available.' : 'Some needed permissions are still off, so study sessions will not lock this phone. You can finish them any time in the Phone tab.') + '</p>' +
        '<div class="stack"><button class="btn pri" data-act="wztest">Test the lock for 1 minute</button><button class="btn" data-act="wzcontacts">Add emergency numbers</button><button class="btn ghost" data-act="wzclose">' + (ready ? 'Done' : 'Close') + '</button></div></div>';
      return;
    }
    var st = list[i];
    var tries = WZ.tries[st.id] || 0;
    el.innerHTML = '<div class="fswiz-in">' + bar + '<div class="eyebrow">Step ' + (i + 1) + ' of ' + n + (st.req ? ' &middot; needed' : ' &middot; recommended') + '</div><h1>' + st.title + '</h1><p class="muted">' + st.why + '</p>' +
      (st.help && (tries || st.req) ? '<div class="tipbox" style="margin:14px 0">' + st.help + '</div>' : '') +
      (st.help2 && (tries || st.req) ? '<div class="tipbox" style="margin:0 0 14px">' + st.help2 + '</div>' : '') +
      '<div class="stack"><button class="btn pri big" data-act="wzgo" data-id="' + st.id + '">' + st.btn + '</button>' +
      (st.manual && tries ? '<button class="btn" data-act="wzdid" data-id="' + st.id + '">I did it</button>' : '') +
      (st.id === 'accessibility' && s.sdk >= 33 ? '<button class="btn" data-act="wzappinfo">Open app info</button>' : '') +
      (!st.req ? '<button class="btn ghost" data-act="wzskip" data-id="' + st.id + '">Skip this step</button>' : '') +
      '<button class="btn ghost" data-act="wzlater">Set up later</button></div></div>';
  }
  function wzOpen() { WZ.open = true; WZ.sig = ''; WZ.skip = WZ.skip || {}; wzRender(); }
  function wzClose() { WZ.open = false; WZ.dismissed = true; var el = $('.fswiz'); if (el) el.remove(); }
  function wzTick() {
    if (!FSPhone || !window.AndroidBridge) return;
    if (WZ.open) { wzRender(); return; }
    if (window.__nowizard || WZ.dismissed || !$('.side') || $('#acbox')) return;        // wait for the app (and sign-in) to be on screen
    if (wzNeeded(FSPhone.status())) wzOpen();
  }
  setInterval(wzTick, 1000);
  window.addEventListener('focus', function () { setTimeout(wzTick, 300); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) setTimeout(wzTick, 300); });
  /* the session start screen asks before it begins: no lock without the permissions */
  FSX.canStart = function (lock) {
    if (lock === 'gentle') return true;
    var s = FSPhone.status(); if (s.accessibility && s.overlay && s.call && guardOk(s)) return true;
    WZ.dismissed = false; wzOpen(); toast('Finish the setup first', 'Allow the needed permissions so the lock and emergency calls can work.', true); return false;
  };

  FSX.actions = {
    wzgo: function (el) {
      var k = el.dataset.id, n = WZ.tries[k] = (WZ.tries[k] || 0) + 1, r;
      if (k === 'notifications' || k === 'call') r = n > 1 ? FSPhone.openSettings(k === 'call' ? 'app' : 'notifications') : FSPhone.requestPermission(k);
      else if (k === 'callguard') r = n > 1 ? FSPhone.openSettings('app') : FSPhone.requestCallGuard();
      else r = FSPhone.openSettings(k);
      if (r && r.ok === false) toast('Could not open', r.error, true);
      WZ.sig = ''; setTimeout(wzRender, 300);
    },
    wzdid: function (el) { FSPhone.setting('oem_' + el.dataset.id, 'true'); WZ.sig = ''; wzRender(); },
    wzskip: function (el) { WZ.skip = WZ.skip || {}; WZ.skip[el.dataset.id] = true; WZ.sig = ''; wzRender(); },
    wzappinfo: function () { FSPhone.openSettings('app'); },
    wzlater: function () { wzClose(); },
    wzclose: function () { wzClose(); },
    wztest: function () { wzClose(); var r = FSPhone.testLock(1); if (r && r.ok === false) toast('Could not start the test', r.error, true); else toast('Lock test started', 'Try opening another app. It ends in 1 minute.'); },
    wzcontacts: function () { wzClose(); location.hash = '#/phone'; },
    wzopen: function () { WZ.dismissed = false; WZ.skip = {}; wzOpen(); },
    phperm: function (el) {
      var k = el.dataset.id, r = (k === 'call' || k === 'notifications') ? FSPhone.requestPermission(k) : FSPhone.openSettings(k);
      if (r && r.ok === false) toast('Could not open', r.error, true);
      else if (k === 'accessibility') toast('Find FutureSelf in the list', 'Open it and switch it on, then come back.');
      setTimeout(refreshAll, 1200);
    },
    phcall: function (el) { var r = FSPhone.call(el.dataset.num); if (r && r.ok === false) toast('Could not call', r.error, true); },
    phaddc: function () {
      var name = $('#phcn').value.trim(), num = $('#phcp').value.trim(), list = FSPhone.contacts();
      if (!name) return toast('Add a name', '', true);
      if (!validNumber(num)) return toast('Check the number', 'Use digits, and + for the country code.', true);
      if (list.length >= 5) return toast('Five contacts is the limit', 'Remove one first.', true);
      if (list.some(function (c) { return c.number.replace(/\D/g, '') === num.replace(/\D/g, ''); })) return toast('That number is already added', '', true);
      list.push({ name: name, number: num }); var r = FSPhone.saveContacts(list);
      if (r && r.ok === false) return toast('Could not save', r.error, true);
      toast('Contact added'); rerender('#phcon', contactsCard(FSPhone.contacts()));
    },
    phdelc: function (el) { var list = FSPhone.contacts(); list.splice(+el.dataset.i, 1); FSPhone.saveContacts(list); rerender('#phcon', contactsCard(FSPhone.contacts())); toast('Contact removed'); },
    phscan: function () {
      PH.scanning = true; PH.scanned = false; PH.scan = []; rerender('#phlink', linkCard(FSPhone.linkInfo()));
      FSPhone.linkScan().then(function (r) { PH.scanning = false; PH.scanned = true; PH.scan = (r && r.found) || []; rerender('#phlink', linkCard(FSPhone.linkInfo())); });
    },
    phpick: function (el) { PH.pick = PH.scan[+el.dataset.i]; rerender('#phlink', linkCard(FSPhone.linkInfo())); var c = $('#phcode'); if (c) c.focus(); },
    phpair: function () {
      var a = ($('#phaddr').value || '').trim(), code = ($('#phcode').value || '').replace(/\D/g, '');
      var m = a.match(/^([0-9]{1,3}(?:\.[0-9]{1,3}){3})(?::([0-9]{2,5}))?$/);
      if (!m) return toast('Type the PC address', 'It looks like 192.168.1.5:47820', true);
      if (code.length !== 6) return toast('The code has 6 digits', '', true);
      FSPhone.linkPair(m[1], m[2] || '47820', code).then(function (r) {
        if (!r || !r.ok) return toast('Could not pair', (r && r.error) || 'Check the code and the Wi-Fi.', true);
        toast('Linked with ' + (r.name || 'your PC')); PH.scan = []; PH.pick = null; refreshAll();
      });
    },
    phunlink: function () { FSPhone.linkUnpair(); toast('PC unlinked'); PH.scan = []; refreshAll(); },
    phtest: function () { var r = FSPhone.testLock(1); if (r && r.ok === false) toast('Could not start the test', r.error, true); else toast('Lock test started', 'Try opening another app. It ends in 1 minute.'); }
  };
  document.addEventListener('change', function (e) {
    var k = e.target.dataset && e.target.dataset.phset; if (!k) return;
    FSPhone.setting(k, e.target.checked ? 'true' : 'false'); toast('Saved');
  });
})();

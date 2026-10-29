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
      }).join('') + '</div>';
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
      '<div class="stack"><div id="phperm">' + permCard(s) + '</div><div id="phcon">' + contactsCard(list) + '</div><div id="phlink">' + linkCard(li) + '</div>' + optionsCard() + '</div></div>';
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

  FSX.actions = {
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

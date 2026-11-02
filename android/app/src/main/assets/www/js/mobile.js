/* FutureSelf for Android: makes the shared app talk to the phone.
   - the same API code that runs on the PC runs here in the page (data stays on the phone)
   - everything that needs the phone itself (locking other apps, calls, alarms, PC link) goes through AndroidBridge */
(function () {
  'use strict';
  var B = window.AndroidBridge;
  var hasNative = !!B;
  var listeners = { notify: [], distraction: [] };
  var cbs = {}, cid = 0, authWaiter = null;

  window.__fsCb = function (id, json) {
    var f = cbs[id]; delete cbs[id]; if (!f) return;
    var v; try { v = JSON.parse(json); } catch (e) { v = { ok: false, error: 'Unreadable reply' }; } f(v);
  };
  window.__fsEvent = function (json) {
    var e; try { e = JSON.parse(json); } catch (x) { return; }
    if (e.type === 'distraction') listeners.distraction.forEach(function (f) { try { f({ kind: 'app', name: e.name || 'another app' }); } catch (x) { } });
    if (e.type === 'call' && window.FSX && FSX.onCall) FSX.onCall(!!e.on, e.ms || 0);
    if (e.type === 'update' && window.FSX && FSX.onUpdateProgress) FSX.onUpdateProgress(e.pct || 0);
    if (e.type === 'refresh' && window.FSX && FSX.onRefresh) FSX.onRefresh();
    if (e.type === 'auth' && authWaiter) { var w = authWaiter; authWaiter = null; if (/^[a-f0-9]{48}$/.test(e.ticket || '')) w.res(e.ticket); else w.rej(new Error('Sign-in did not finish.')); }
  };
  function jcall(name) {
    if (!hasNative || typeof B[name] !== 'function') return { ok: false, error: 'This needs the FutureSelf Android app' };
    try { var r = B[name].apply(B, Array.prototype.slice.call(arguments, 1)); return r ? JSON.parse(r) : { ok: true }; } catch (e) { return { ok: false, error: String(e && e.message || e) }; }
  }
  function acall(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    return new Promise(function (res) {
      if (!hasNative || typeof B[name] !== 'function') return res({ ok: false, error: 'This needs the FutureSelf Android app' });
      var id = ++cid; cbs[id] = res;
      setTimeout(function () { if (cbs[id]) { delete cbs[id]; res({ ok: false, error: 'Timed out' }); } }, 45000);
      try { B[name].apply(B, [id].concat(args)); } catch (e) { delete cbs[id]; res({ ok: false, error: String(e && e.message || e) }); }
    });
  }

  /* answer photos: kept in the phone's browser storage (IndexedDB) */
  function idbFiles() {
    var dbp = new Promise(function (res, rej) { var r = indexedDB.open('fsfiles', 1); r.onupgradeneeded = function () { r.result.createObjectStore('f'); }; r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); }; });
    function tx(mode, fn) { return dbp.then(function (db) { return new Promise(function (res, rej) { var t = db.transaction('f', mode), rq = fn(t.objectStore('f')); t.oncomplete = function () { res(rq && rq.result); }; t.onerror = function () { rej(t.error); }; }); }); }
    return { put: function (n, b) { return tx('readwrite', function (s) { return s.put(b, n); }); }, get: function (n) { return tx('readonly', function (s) { return s.get(n); }); }, del: function (n) { return tx('readwrite', function (s) { return s.delete(n); }); } };
  }

  var apiObj = null;
  var ready = fetch('content.json').then(function (r) { return r.json(); }).then(function (topics) {
    var store = new FSMobile.FileStore('fs/data.json');
    apiObj = FSMobile.createApi({
      store: store, topics: topics, files: idbFiles(), native: true, platform: 'android', log: function () { },
      emit: function (type, payload) { if (type === 'notify') listeners.notify.forEach(function (f) { try { f(payload); } catch (e) { } }); }
    });
    return apiObj;
  });

  /* study videos: the page asks the phone to download YouTube's result list, the shared code picks the topic video */
  function findVideos(req) {
    req = req || {};
    var qs = (Array.isArray(req.queries) ? req.queries : []).map(function (q) { return String(q).slice(0, 140); }).filter(Boolean).slice(0, 6);
    if (!qs.length) return Promise.resolve({ ok: false, error: 'No topic given' });
    return FSMobile.videofind.find({
      dir: 'fs', key: String(req.key || qs[0]).slice(0, 200), queries: qs, channels: (req.channels || []).map(String).slice(0, 8), keywords: (req.keywords || []).map(String).slice(0, 12),
      focus: String(req.focus || '').slice(0, 160), generic: String(req.generic || '').slice(0, 120),
      fetchText: function (url) { return acall('fetchText', url).then(function (r) { if (!r.ok) throw new Error(r.error || 'No connection'); return r.text; }); }
    }).catch(function (e) { return { ok: false, error: String(e && e.message || e) }; });
  }

  /* reminders for the timetable: the phone wakes up at the right time even when the app is closed */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function isoOf(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function syncReminders() {
    if (!hasNative || !apiObj) return Promise.resolve();
    return apiObj.handle('GET', '/blocks').then(function (r) {
      var out = [], now = Date.now(), base = new Date(); base.setHours(0, 0, 0, 0);
      (r.data || []).forEach(function (b) {
        for (var i = 0; i < 8; i++) {
          var d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i), wd = (d.getDay() + 6) % 7;
          var on = b.kind === 'once' ? b.date === isoOf(d) : (b.days || []).indexOf(wd) > -1; if (!on) continue;
          var p = String(b.start).split(':'), at = new Date(d.getFullYear(), d.getMonth(), d.getDate(), +p[0], +p[1]).getTime();
          var end = at + b.minutes * 60000;
          if (b.remind_before > 0 && at - b.remind_before * 60000 > now) out.push({ id: b._id + '|' + isoOf(d) + '|r', at: at - b.remind_before * 60000, kind: 'remind', title: b.subject + ' starts in ' + b.remind_before + ' min', body: 'Get your notebook ready.', subject: b.subject, minutes: b.minutes, lock: b.lock_mode, topicId: b.topic_id || '' });
          if (at > now) out.push({ id: b._id + '|' + isoOf(d) + '|s', at: at, kind: 'start', title: 'Time to study ' + b.subject, body: b.minutes + ' min, ' + b.lock_mode + ' mode. Tap to begin.', subject: b.subject, minutes: b.minutes, lock: b.lock_mode, topicId: b.topic_id || '' });
        }
      });
      out.sort(function (a, b) { return a.at - b.at; });
      jcall('scheduleReminders', JSON.stringify(out.slice(0, 60)));
    }).catch(function () { });
  }


  /* accounts: same client code as the PC app. Network goes through the phone (the page itself may not call other sites). */
  function hex(buf) { return Array.prototype.map.call(new Uint8Array(buf), function (b) { return (b < 16 ? '0' : '') + b.toString(16); }).join(''); }
  var siteDefault = ''; var siteP = fetch('site.json').then(function (r) { return r.json(); }).then(function (j) { siteDefault = j.site || ''; }).catch(function () { });
  var client = null;
  function getClient() {
    if (client) return Promise.resolve(client);
    return siteP.then(function () {
      client = FSMobile.acctclient.create({
        defaultSite: siteDefault, device: 'phone',
        load: function () { return JSON.parse(localStorage.getItem('fs_acct') || '{}'); },
        save: function (o) { localStorage.setItem('fs_acct', JSON.stringify(o)); },
        rand: function (n) { var a = new Uint8Array(n); crypto.getRandomValues(a); return hex(a); },
        sha256: function (s) { return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(hex); },
        http: function (method, url, body, token) {
          return acall('httpJson', method, url, token || '', method === 'GET' ? '' : JSON.stringify(body || {})).then(function (r) {
            if (r.ok === false && r.status === undefined) throw new Error(r.error || 'No connection');
            return { status: r.status, json: r.json };
          });
        },
        browserLogin: function (makeUrl) {
          return new Promise(function (res, rej) {
            authWaiter = { res: res, rej: rej };
            var r = jcall('openBrowser', makeUrl('futureself://auth'));
            if (r.ok === false) { authWaiter = null; rej(new Error(r.error)); return; }
            setTimeout(function () { if (authWaiter && authWaiter.res === res) { authWaiter = null; rej(new Error('Sign-in took too long. Try again.')); } }, 5 * 60000);
          });
        }
      });
      return client;
    });
  }
  /* the phone's background lock service needs the sign-in too, so it can follow the PC */
  function syncAccount(c) { var s = c.status(); jcall('accountSave', JSON.stringify({ site: s.site, token: s.signedIn ? c.token() : '' })); }
  var ACCT_OPS = { status: 1, setSite: 1, skip: 1, register: 1, verify: 1, resend: 1, login: 1, google: 1, signout: 1, videos: 1, check: 1, update: 1, social: 1, profile: 1, avatarFromPhoto: 1 };
  function acct(op, payload) {
    if (!ACCT_OPS[op]) return Promise.resolve({ ok: false, error: 'Unknown account action' });
    return getClient().then(function (c) {
      return Promise.resolve(c[op](payload || {})).then(function (data) { syncAccount(c); return { ok: true, data: data }; });
    }).catch(function (e) { return { ok: false, error: e.message || 'Something went wrong', needsVerify: !!e.needsVerify }; });
  }
  getClient().then(syncAccount);

  window.fsApi = {
    isApp: true, platform: 'android', acct: acct,
    call: function (method, url, body) {
      return ready.then(function (a) { return a.handle(method, url, body); }).then(function (r) {
        if (method !== 'GET' && /^\/blocks/.test(url)) setTimeout(syncReminders, 50);
        return r;
      });
    },
    info: function () { var v = jcall('version'); return Promise.resolve({ platform: 'android', version: (v && v.version) || 'dev', native: true, contentDir: 'inside the app' }); },
    updateInstall: function (p) { return acall('updateInstall', String(p.url || ''), String(p.sha256 || '')); },
    onNotify: function (cb) { listeners.notify.push(cb); },
    onDistraction: function (cb) { listeners.distraction.push(cb); },
    onVideoClosed: function () { },
    lockStart: function (cfg) { var r = jcall('lockStart', JSON.stringify(cfg || {})); return r.ok === false ? Promise.reject(new Error(r.error)) : Promise.resolve(r); },
    lockStop: function () { return Promise.resolve(jcall('lockStop')); },
    findVideos: findVideos,
    allowVideo: function (id) { return Promise.resolve(jcall('allowVideo', String(id || ''))); },
    openVideo: function () { return Promise.resolve({ ok: false, error: 'Use Another video or Next channel' }); },
    closeVideo: function () { return Promise.resolve({ ok: true }); },
    /* a study session started on this phone: tell the server so the PC locks too (it clears when the session ends) */
    sessionState: function (st) { return getClient().then(function (c) { return c.push(st || { active: false }); }).then(function () { return { ok: true }; }, function () { return { ok: true }; }); }
  };

  /* the phone-only screen (permissions, emergency contacts, PC link) talks to these */
  window.FSPhone = {
    status: function () { return jcall('status'); },
    openSettings: function (kind) { return jcall('openSettings', kind); },
    requestPermission: function (kind) { return jcall('requestPermission', kind); },
    requestCallGuard: function () { return jcall('requestCallGuard'); },
    contacts: function () { var r = jcall('getContacts'); return Array.isArray(r) ? r : (r && r.contacts) || []; },
    saveContacts: function (list) { return jcall('saveContacts', JSON.stringify(list)); },
    call: function (number) { return jcall('callNumber', String(number)); },
    setting: function (k, v) { return jcall('setSetting', k, String(v)); },
    getSetting: function (k) { var r = jcall('getSetting', k); return r && r.value; },
    linkInfo: function () { return jcall('linkInfo'); },
    linkScan: function () { return acall('linkScan'); },
    linkPair: function (address, port, code) { return acall('linkPair', address, port, code, 'Android phone'); },
    linkUnpair: function () { return jcall('linkUnpair'); },
    testLock: function (minutes) { return jcall('lockStart', JSON.stringify({ mode: 'focus', subject: 'Lock test', topicId: '', endsAt: Date.now() + minutes * 60000, test: true })); },
    lockInfo: function () { return jcall('lockInfo'); },
    syncReminders: syncReminders
  };

  /* while the app is open: run the in-app reminder check like the PC app does, and keep alarms fresh */
  ready.then(function (a) {
    setTimeout(function () { a.tick().catch(function () { }); }, 4000);
    setInterval(function () { a.tick().catch(function () { }); }, 20000);
    setTimeout(syncReminders, 2500);
    setInterval(syncReminders, 3600000);
  });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) syncReminders(); });
  document.documentElement.classList.add('android'); document.addEventListener('DOMContentLoaded', function () { document.body.classList.add('android'); });
  if (document.body) document.body.classList.add('android');
})();

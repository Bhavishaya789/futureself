// A stand-in for the Android side, so the web layer can be tested in a normal browser
(function () {
  window.__lan = 1;
  window.__nowizard = !window.__wiz;
  var st = { accessibility: !!window.__granted, overlay: !!window.__granted, call: !!window.__granted, notifications: true, exactAlarm: true, battery: false, lockActive: false, callGuard: !!window.__granted, manufacturer: window.__mfr || 'xiaomi', sdk: 34 };
  var contacts = [], settings = { autoLockBlocks: 'false', restrictOnPc: 'true' }, paired = null, lock = null;
  window.__calls = []; window.__log = [];
  function done(id, obj) { setTimeout(function () { window.__fsCb(id, JSON.stringify(obj)); }, 30); }
  var ytHtml = function (titles) {
    var vr = titles.map(function (t, i) { return { videoRenderer: { videoId: ('abcdefghi' + (10 + i)).slice(0, 11), title: { runs: [{ text: t[0] }] }, ownerText: { runs: [{ text: t[1] }] }, lengthText: { simpleText: '12:' + (10 + i) } } }; });
    return '<html><script>var ytInitialData = ' + JSON.stringify({ a: vr }) + ';</script></html>';
  };
  window.AndroidBridge = {
    version: function () { return JSON.stringify({ version: '1.0.0-test' }); },
    status: function () { return JSON.stringify(st); },
    openSettings: function (k) { window.__log.push('settings:' + k); if (k === 'accessibility') st.accessibility = true; if (k === 'overlay') st.overlay = true; if (k === 'battery') st.battery = true; return JSON.stringify({ ok: true }); },
    requestCallGuard: function () { window.__log.push('callguard'); st.callGuard = true; return JSON.stringify({ ok: true }); },
    requestPermission: function (k) { window.__log.push('perm:' + k); st[k] = true; return JSON.stringify({ ok: true }); },
    getContacts: function () { return JSON.stringify(contacts); },
    saveContacts: function (j) { var l = JSON.parse(j); if (l.length > 5) return JSON.stringify({ ok: false, error: 'Max 5' }); contacts = l; return JSON.stringify({ ok: true }); },
    callNumber: function (n) { window.__calls.push(n); return JSON.stringify({ ok: true }); },
    setSetting: function (k, v) { settings[k] = v; return JSON.stringify({ ok: true }); },
    getSetting: function (k) { return JSON.stringify({ value: settings[k] }); },
    lockStart: function (j) { lock = JSON.parse(j); window.__log.push('lockStart:' + j); return JSON.stringify({ ok: true }); },
    lockStop: function () { window.__log.push('lockStop'); lock = null; return JSON.stringify({ ok: true }); },
    lockInfo: function () { return JSON.stringify(lock ? { active: true, subject: lock.subject, endsAt: lock.endsAt } : { active: false }); },
    allowVideo: function (id) { window.__log.push('allow:' + id); return JSON.stringify({ ok: true }); },
    scheduleReminders: function (j) { window.__reminders = JSON.parse(j); return JSON.stringify({ ok: true }); },
    linkInfo: function () { if (window.__acct && window.__acct.token) return JSON.stringify({ paired: false, account: true, connected: true, restrictOnPc: settings.restrictOnPc === 'true' }); return JSON.stringify(paired ? { paired: true, pcName: paired.name, address: paired.address, connected: true, restrictOnPc: settings.restrictOnPc === 'true' } : { paired: false }); },
    linkUnpair: function () { paired = null; return JSON.stringify({ ok: true }); },
    linkScan: function (id) { done(id, { ok: true, found: [{ address: '192.168.1.20', port: 47820, name: 'BHAVISHYA-PC', pcId: 'abc' }] }); },
    linkPair: function (id, a, p, code, name) { if (code !== '123456') return done(id, { ok: false, error: 'Wrong code' }); paired = { name: 'BHAVISHYA-PC', address: a + ':' + p }; done(id, { ok: true, name: 'BHAVISHYA-PC' }); },
    httpJson: function (id, method, url, token, body) {
      window.__log.push('http:' + method + ' ' + url.replace(/^https?:\/\/[^/]+/, ''));
      fetch(url, { method: method, headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}), body: method === 'GET' ? undefined : body })
        .then(function (r) { return r.json().then(function (j) { done(id, { ok: true, status: r.status, json: j }); }); })
        .catch(function (e) { done(id, { ok: false, error: String(e) }); });
    },
    accountSave: function (j) { window.__acct = JSON.parse(j); return JSON.stringify({ ok: true }); },
    openBrowser: function (url) {
      window.__log.push('browser:' + url.replace(/^https?:\/\/[^/]+/, '').slice(0, 40));
      var u = new URL(url), ch = u.searchParams.get('ch'), site = u.origin;
      var call = function (a, b, tok) { return fetch(site + '/api/auth', { method: 'POST', headers: Object.assign({ 'Content-Type': 'application/json' }, tok ? { Authorization: 'Bearer ' + tok } : {}), body: JSON.stringify(Object.assign({ a: a }, b)) }).then(function (r) { return r.json(); }); };
      call('google', { credential: 'x'.repeat(40) }).then(function (s) { return call('ticket', { ch: ch }, s.token); }).then(function (t) { window.__fsEvent(JSON.stringify({ type: 'auth', ticket: t.ticket })); });
      return JSON.stringify({ ok: true });
    },
    fetchText: function (id, url) {
      window.__log.push('fetch:' + decodeURIComponent(url.split('search_query=')[1] || '').slice(0, 60));
      done(id, { ok: true, text: ytHtml([['SQL Joins Explained | Inner Outer Cross Join', 'Gate Smashers'], ['Joins in SQL inner outer self cross', 'Neso Academy'], ['Funny cat song', 'Cats'], ['SQL joins: inner, outer, cross and self', "Jenny's Lectures CS IT"]]) });
    }
  };
})();

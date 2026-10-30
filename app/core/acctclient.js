'use strict';
/* FutureSelf account client. Same code runs in the PC app (main process) and in the phone app (page).
   It has no imports: the platform passes in how to do http, storage, random numbers and the browser step. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(); else root.AcctClient = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  function create(deps) {
    var st = { site: '', token: '', email: '', name: '', skip: false };
    var loaded = false;
    function load() { if (loaded) return; loaded = true; try { var o = deps.load() || {}; Object.keys(st).forEach(function (k) { if (o[k] !== undefined) st[k] = o[k]; }); } catch (e) { /* first run */ } if (!st.site && deps.defaultSite) st.site = deps.defaultSite; }
    function save() { try { deps.save(st); } catch (e) { /* ignore */ } }
    function cleanSite(s) {
      s = String(s || '').trim().replace(/\/+$/, '');
      if (!s) return '';
      if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
      if (!/^https:\/\/[A-Za-z0-9.\-]+(:\d+)?$/i.test(s) && !/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(s)) throw new Error('That server address does not look right. Example: https://yourname.vercel.app');
      return s;
    }
    function req(path, method, body, auth) {
      load();
      if (!st.site) return Promise.reject(new Error('Enter your FutureSelf server address first (the Vercel link of your website).'));
      return deps.http(method, st.site + path, body, auth ? st.token : null).then(function (r) {
        var j = r && r.json || {};
        if (r.status >= 400) { var m = j.error; if (m && typeof m === 'object') m = m.message || m.code || ''; var e = new Error(m ? String(m) : ('Server error ' + r.status + '. The server did not give a reason. Check the Vercel logs.')); e.status = r.status; e.needsVerify = !!j.needsVerify; throw e; }
        return j;
      }, function () { throw new Error('Could not reach the server. Check your internet and the server address.'); });
    }
    function adopt(j) { st.token = j.token; st.email = j.user.email; st.name = j.user.name || ''; st.skip = false; save(); return status(); }
    function status() { load(); return { signedIn: !!st.token, email: st.email, name: st.name, site: st.site, skip: !!st.skip }; }
    function auth(a, body) { return req('/api/auth', 'POST', Object.assign({ a: a }, body), false); }

    return {
      status: status,
      setSite: function (s) { load(); st.site = cleanSite(s); save(); return status(); },
      skip: function (on) { load(); st.skip = !!on; save(); return status(); },
      token: function () { load(); return st.token; },
      register: function (p) { return auth('register', { name: p.name, email: p.email, password: p.password }); },
      verify: function (p) { return auth('verify', { email: p.email, code: p.code }).then(adopt); },
      resend: function (p) { return auth('resend', { email: p.email }); },
      login: function (p) { return auth('login', { email: p.email, password: p.password }).then(adopt); },
      google: function () {
        load();
        if (!st.site) return Promise.reject(new Error('Enter your FutureSelf server address first (the Vercel link of your website).'));
        var verifier = deps.rand(32);
        return Promise.resolve(deps.sha256(verifier)).then(function (ch) {
          return deps.browserLogin(function (cb) { return st.site + '/login.html?cb=' + encodeURIComponent(cb) + '&ch=' + ch; });
        }).then(function (ticket) { return auth('redeem', { ticket: ticket, verifier: verifier }); }).then(adopt);
      },
      signout: function () { load(); st.token = ''; st.email = ''; st.name = ''; save(); return status(); },
      /* search for a study video: the SERVER searches YouTube, this device only gets the short list back */
      videos: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to search for videos.'));
        return req('/api/videos', 'POST', { q: String(p && p.q || '').slice(0, 120), channel: String(p && p.channel || '').slice(0, 60) }, true);
      },
      /* the SERVER marks a photographed answer (the AI key never leaves the server) */
      check: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to use AI checking.'));
        return req('/api/check', 'POST', { question: p.question, model: p.model, rubric: p.rubric, images: p.images }, true);
      },
      /* what the other device is doing (null when the server cannot be reached or nobody is signed in) */
      state: function () {
        load(); if (!st.token || !st.site) return Promise.resolve(null);
        return req('/api/session', 'GET', null, true).then(function (j) { return j; }, function (e) { if (e && e.status === 401) { st.token = ''; save(); } return null; });
      },
      /* tell the server what this device is doing. Never throws. */
      push: function (state) {
        load(); if (!st.token || !st.site) return Promise.resolve(false);
        return req('/api/session', 'POST', Object.assign({ src: deps.device || 'pc' }, state || { active: false }), true).then(function () { return true; }, function (e) { if (e && e.status === 401) { st.token = ''; save(); } return false; });
      }
    };
  }
  return { create: create };
});

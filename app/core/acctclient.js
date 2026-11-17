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
      register: function (p) { return auth('register', { name: p.name, email: p.email, password: p.password, track: p.track || '' }); },
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
      /* newest version published on GitHub (the server reads it; no sign-in needed) */
      update: function () { load(); return req('/api/update', 'GET', null, false); },
      /* the SERVER marks a photographed answer (the AI key never leaves the server) */
      check: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to use AI checking.'));
        return req('/api/check', 'POST', { question: p.question, model: p.model, rubric: p.rubric, images: p.images }, true);
      },
      /* the SERVER judges a typed answer to a past-paper question and explains it */
      pyqcheck: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to use AI checking.'));
        return req('/api/check', 'POST', { mode: 'pyq', question: p.question, options: p.options, answer: p.answer, label: p.label, key: p.key }, true);
      },
      /* the SERVER answers a student's doubt about a lesson */
      doubt: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to ask the AI tutor.'));
        return req('/api/check', 'POST', { mode: 'doubt', question: p.question, context: p.context, title: p.title, lang: p.lang }, true);
      },
      /* parent/teacher link: op = status | create | revoke | sync (with snap) */
      share: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to share your progress.'));
        return req('/api/share', 'POST', { op: p.op, snap: p.snap }, true);
      },
      /* cloud sync of study data between this student's devices: op = pull | push (ns, base, data) */
      sync: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to sync your data.'));
        p = p || {}; return req('/api/sync', 'POST', { op: p.op, ns: p.ns, base: p.base, data: p.data }, true);
      },
      /* plan status and licence codes: op = status | redeem (with code) */
      plan: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf first.'));
        return req('/api/plan', 'POST', { op: p.op, code: p.code }, true);
      },
      /* AI practice questions made from the text of a lesson */
      genq: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to make AI practice questions.'));
        return req('/api/check', 'POST', { mode: 'genq', title: p.title, context: p.context, n: p.n, lang: p.lang }, true);
      },
      /* anonymous crash and usage reports; never fails loudly, sent only when the student has not turned them off */
      report: function (p) {
        load(); if (!st.site) return Promise.resolve({ ok: false });
        return req('/api/report', 'POST', { kind: p.kind, msg: p.msg, stack: p.stack, where: p.where, event: p.event, ver: p.ver, plat: p.plat }, !!st.token).catch(function () { return { ok: false }; });
      },
      /* the shared profile: with p = { name?, photo?, avatar? } it saves, with nothing it just reads. Returns the user. */
      profile: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to sync your profile.'));
        var save_ = p && (p.name !== undefined || p.photo !== undefined || p.avatar !== undefined || p.track !== undefined);
        var body = { a: save_ ? 'profile' : 'me' };
        if (save_) { ['name', 'photo', 'avatar', 'track'].forEach(function (k) { if (p[k] !== undefined) body[k] = p[k]; }); }
        return req('/api/auth', 'POST', body, true).then(function (j) { if (j.user && j.user.name && j.user.name !== st.name) { st.name = j.user.name; save(); } return j.user; }, function (e) { if (e && e.status === 401) { st.token = ''; save(); } throw e; });
      },
      /* the SERVER looks at a picture and suggests 3D avatar options (nothing is stored) */
      avatarFromPhoto: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to make an avatar from a picture.'));
        return req('/api/avatar', 'POST', { photo: String(p && p.photo || '') }, true);
      },
      /* friends, leaderboard and study rooms (the server keeps them; p.a is the action) */
      social: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to use friends and study rooms.'));
        return req('/api/social', 'POST', p || {}, true);
      },
      /* challenge a friend (the server marks it and keeps the answers) */
      challenge: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to challenge friends.'));
        return req('/api/challenge', 'POST', p || {}, true);
      },
      /* run code on the server's code runner (C, Java, Go ...) */
      run: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to run code on the server.'));
        return req('/api/run', 'POST', p || {}, true);
      },
      /* take a photo with the phone: the PC asks for a slot and shows a QR code, then collects the photos */
      capture: function (p) {
        load(); if (!st.token) return Promise.reject(new Error('Sign in to FutureSelf to use your phone camera.'));
        p = p || {}; return req('/api/capture', 'POST', p, true).then(function (j) { if (p.a === 'new') j.url = st.site + '/cam.html#' + j.id + '.' + j.secret; return j; });
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

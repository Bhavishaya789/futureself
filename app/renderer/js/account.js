/* Account screen: create an account (name, email, password + email code) or continue with Google.
   One sign-in on the PC and on the phone links them: a study session on the PC locks the phone. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  var A = { st: null, mode: 'signup', step: 'form', email: '', name: '', busy: false, err: '', info: '' };
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s) { return document.querySelector(s); }
  function acct(op, p) {
    return window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) { var e = new Error((r && r.error) || 'Something went wrong'); e.needsVerify = !!(r && r.needsVerify); throw e; } return r.data; });
  }

  FSX.nav = (FSX.nav || []).concat([['account', 'user', 'Profile']]);
  FSX.icons = Object.assign(FSX.icons || {}, { user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>' });
  FSX.routes = Object.assign(FSX.routes || {}, { account: viewAccount });

  /* first run: ask the student to sign in (or skip). Returns true when it took over the screen. */
  FSX.gate = function (r) {
    if (!window.fsApi || !window.fsApi.acct) return false;
    if (r.name === 'account') return false;
    if (!A.st) { acct('status').then(function (s) { A.st = s; H().go(); }).catch(function () { A.st = { signedIn: false, skip: true }; H().go(); }); return true; }
    if (!A.st.signedIn && !A.st.skip) { location.hash = '#/account'; return true; }
    return false;
  };

  function field(id, label, type, ph, extra) { return '<label class="acl" for="' + id + '">' + label + '</label><input class="in" id="' + id + '" type="' + type + '" placeholder="' + (ph || '') + '" ' + (extra || '') + '>'; }

  function formCard() {
    var su = A.mode === 'signup', st = A.st || {};
    var verify = A.step === 'verify';
    var h = '<div class="card tilt" id="acbox">';
    if (verify) {
      h += '<h2 style="margin:0 0 6px">Check your email</h2><p class="muted">We sent a 6 digit code to <b>' + esc(A.email) + '</b>. It works for 15 minutes.</p>' +
        field('acc', 'Code', 'text', '123456', 'inputmode="numeric" maxlength="6" autocomplete="one-time-code"') +
        '<div class="acerr" id="acerr">' + esc(A.err) + '</div>' +
        '<div class="row" style="gap:10px;margin-top:12px;flex-wrap:wrap"><button class="btn pri" data-act="acverify">Verify and continue</button><button class="btn ghost" data-act="acresend">Send a new code</button><button class="btn ghost" data-act="acback">Back</button></div>';
    } else {
      h += '<h2 style="margin:0 0 6px">' + (su ? 'Create your account' : 'Welcome back') + '</h2><p class="muted">One account on your PC and phone keeps them linked, so your phone locks when you study.</p>' +
        '<button class="btn gbtn" data-act="acgoogle"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M23 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h6.2a5.3 5.3 0 0 1-2.3 3.5v2.9h3.7c2.2-2 3.4-5 3.4-8.4z"/><path fill="#34A853" d="M12 24c3.1 0 5.7-1 7.6-2.8l-3.7-2.9c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.6 14.7a7.2 7.2 0 0 1 0-4.6v-3H1.8a12 12 0 0 0 0 10.6l3.8-3z"/><path fill="#EA4335" d="M12 4.8c1.7 0 3.2.6 4.4 1.7l3.3-3.3A12 12 0 0 0 1.8 7.1l3.8 3C6.5 6.8 9 4.8 12 4.8z"/></svg> Continue with Google</button>' +
        '<div class="acor"><span>or use your email</span></div>' +
        (su ? field('acn', 'Your name', 'text', 'Bhavishya Kumar', 'maxlength="60" autocomplete="name"') : '') +
        field('ace', 'Email', 'email', 'you@example.com', 'autocomplete="email"') +
        field('acp', 'Password' + (su ? ' (8 or more characters)' : ''), 'password', '', 'autocomplete="' + (su ? 'new-password' : 'current-password') + '"') +
        '<div class="acerr" id="acerr">' + esc(A.err) + '</div>' +
        '<div class="row" style="gap:10px;margin-top:12px;flex-wrap:wrap"><button class="btn pri" data-act="acsubmit">' + (su ? 'Create account' : 'Sign in') + '</button><button class="btn ghost" data-act="acmode">' + (su ? 'I already have an account' : 'Create an account') + '</button></div>';
    }
    h += '<details class="acadv"><summary>Server address</summary><p class="muted" style="margin:6px 0">The link of your FutureSelf website (for example https://futureself.vercel.app).</p>' +
      '<input class="in" id="acsite" type="url" placeholder="https://yourname.vercel.app" value="' + esc(st.site || '') + '"><button class="btn sm" data-act="acsite" style="margin-top:8px">Save address</button></details>';
    if (!verify && !(st.signedIn)) h += '<p style="margin:14px 0 0"><a href="#" data-act="acskip" class="muted">Use FutureSelf without an account (no PC and phone link)</a></p>';
    return h + '</div>';
  }

  function signedCard() {
    var st = A.st;
    return '<div class="card tilt"><h2 style="margin:0 0 6px">Your account</h2>' +
      '<p class="muted" style="margin:2px 0 14px">Signed in as <b>' + esc(st.email) + '</b></p>' +
      '<p class="muted">Sign in with this same email on your other device to link them. A Focus or Strict session on your PC then locks your phone for the same time.</p>' +
      '<button class="btn" data-act="acout">Sign out</button></div>';
  }

  function viewAccount(v) {
    return acct('status').then(function (s) {
      A.st = s;
      var prof = (s.signedIn || s.skip) && FSX.profileCard ? FSX.profileCard(s) : '';
      v.innerHTML = '<div class="phead"><h1>Profile</h1><p class="muted">' + (s.signedIn ? 'Your name, photo and avatar, on every device.' : 'Sign in to link your PC and phone.') + '</p></div><div class="stack" style="max-width:520px;margin:0 auto">' + prof + (s.signedIn ? signedCard() : formCard()) + '</div>';
      if (FSX.afterAccount) FSX.afterAccount();
    }).catch(function (e) { v.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; });
  }

  function redraw() { A.busy = false; var v = $('#view'); if (v) viewAccount(v); }
  function err(m) { A.err = m; var e = $('#acerr'); if (e) e.textContent = m; }
  function busy(on, label) { A.busy = on; document.querySelectorAll('#acbox .btn').forEach(function (b) { b.disabled = on; }); if (on && label) err(label); }
  function done() { A.busy = false; A.err = ''; A.step = 'form'; acct('status').then(function (s) { A.st = s; H().toast('Signed in', s.email); if (FSX.profileSync) FSX.profileSync(); location.hash = '#/'; setTimeout(function () { H().go(); }, 50); }); }

  FSX.actions = Object.assign(FSX.actions || {}, {
    acmode: function () { A.mode = A.mode === 'signup' ? 'login' : 'signup'; A.err = ''; redraw(); },
    acback: function () { A.step = 'form'; A.err = ''; redraw(); },
    acskip: function () { acct('skip', true).then(function (s) { A.st = s; location.hash = '#/'; setTimeout(function () { H().go(); }, 50); }); },
    acsite: function () { acct('setSite', $('#acsite').value).then(function (s) { A.st = s; H().toast('Server address saved'); }).catch(function (e) { err(e.message); H().toast('Check the address', e.message, true); }); },
    acsubmit: function () {
      if (A.busy) return;
      var email = ($('#ace').value || '').trim(), pw = $('#acp').value || '', name = A.mode === 'signup' ? ($('#acn').value || '').trim() : '';
      if (A.mode === 'signup' && !name) return err('Please enter your name.');
      if (!email) return err('Please enter your email.');
      if (!pw) return err('Please enter a password.');
      A.email = email; A.name = name; busy(true, A.mode === 'signup' ? 'Sending your code...' : 'Signing in...');
      (A.mode === 'signup' ? acct('register', { name: name, email: email, password: pw }).then(function () { A.step = 'verify'; A.err = ''; redraw(); })
        : acct('login', { email: email, password: pw }).then(done)
      ).catch(function (e) { busy(false); if (e.needsVerify) { A.step = 'verify'; A.err = e.message; redraw(); } else err(e.message); });
    },
    acverify: function () {
      if (A.busy) return; var code = ($('#acc').value || '').replace(/\D/g, ''); if (code.length !== 6) return err('The code has 6 digits.');
      busy(true, 'Checking...'); acct('verify', { email: A.email, code: code }).then(done).catch(function (e) { busy(false); err(e.message); });
    },
    acresend: function () { acct('resend', { email: A.email }).then(function () { H().toast('New code sent', 'Check your email.'); err(''); }).catch(function (e) { err(e.message); }); },
    acgoogle: function () {
      if (A.busy) return; busy(true, 'Finish signing in with Google in the browser window that opened...');
      acct('google').then(done).catch(function (e) { busy(false); err(e.message); });
    },
    acout: function () { acct('signout').then(function (s) { A.st = s; H().toast('Signed out'); redraw(); }); }
  });
})();

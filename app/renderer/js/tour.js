/* FutureSelf guided tour + connection notice + smoother feel.
   Self-contained: injects its own CSS, works on desktop and the Android web layer. */
(function () {
  'use strict';
  var KEY = 'fs_tour_v1';
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  var NET_SYNC = 'Using your laptop and phone together? Connect BOTH to a good, stable internet connection so sessions, locks and progress stay in sync.';
  var NET_STUDY = 'Study content, videos and 3D lessons also need good internet quality to load smoothly.';

  var css = '' +
    '.btn,.item,.card,.day,.icon-btn{transition:transform .18s ease,box-shadow .22s ease,border-color .2s ease,background .2s ease}' +
    '.btn:hover:not(:disabled){transform:translateY(-1px)}.btn:active:not(:disabled){transform:scale(.97)}' +
    '.view{animation:ftIn .35s cubic-bezier(.2,.7,.2,1)}@keyframes ftIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
    '.nav a{transition:background .2s,transform .2s,color .2s}.nav a:hover{transform:translateX(2px)}' +
    '*{scrollbar-width:thin;scrollbar-color:#2a3060 transparent}' +
    '@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}' +
    '.ft-ov{position:fixed;inset:0;z-index:9000;background:rgba(4,5,14,.74);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:16px;animation:ftF .3s}' +
    '@keyframes ftF{from{opacity:0}to{opacity:1}}' +
    '.ft-card{width:min(560px,100%);max-height:92vh;overflow:auto;background:linear-gradient(160deg,#171b3a,#0c1030);border:1px solid rgba(124,92,255,.35);border-radius:28px;padding:28px;box-shadow:0 24px 80px rgba(0,0,0,.65),0 0 60px rgba(124,92,255,.15);animation:ftU .45s cubic-bezier(.2,.8,.2,1)}' +
    '@keyframes ftU{from{opacity:0;transform:translateY(18px) scale(.96)}to{opacity:1;transform:none}}' +
    '.ft-card h2{font-family:var(--display,inherit);font-size:26px;margin:0 0 6px}.ft-card p{color:var(--muted,#8a90b8);margin:0 0 14px}' +
    '.ft-g{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0}' +
    '.ft-t{background:rgba(255,255,255,.05);border-radius:20px;padding:14px 6px;text-align:center;font-size:12.5px;font-weight:600;animation:ftU .5s both}' +
    '.ft-t:nth-child(2){animation-delay:.08s}.ft-t:nth-child(3){animation-delay:.16s}.ft-t b{display:block;font-size:28px;margin-bottom:4px}' +
    '.ft-r{display:flex;gap:10px;flex-wrap:wrap;margin-top:8px}' +
    '.ft-note{margin-top:14px;padding:11px 13px;border-radius:16px;background:rgba(255,200,87,.09);border:1px solid rgba(255,200,87,.35);color:#ffe2a6;font-size:12.5px;line-height:1.5}' +
    '.ft-spot{position:fixed;z-index:9001;border-radius:16px;pointer-events:none;box-shadow:0 0 0 9999px rgba(4,5,14,.78),0 0 0 3px #2DE2E6,0 0 28px #2DE2E6;transition:all .45s cubic-bezier(.4,0,.2,1)}' +
    '.ft-tip{position:fixed;z-index:9002;width:min(320px,calc(100vw - 20px));background:#12163a;border:1px solid rgba(124,92,255,.4);border-radius:22px;padding:16px;box-shadow:0 16px 54px rgba(0,0,0,.65);transition:all .45s cubic-bezier(.4,0,.2,1)}' +
    '.ft-tip h3{margin:0 0 4px;font-size:16px}.ft-tip p{margin:0 0 12px;color:#9aa0c8;font-size:13px;line-height:1.5}' +
    '.ft-dots{display:flex;gap:5px;flex:1;align-items:center}.ft-dots i{width:7px;height:7px;border-radius:50%;background:#2a3060;transition:all .3s}.ft-dots i.on{background:#2DE2E6;width:18px;border-radius:6px}' +
    '.ft-clip{height:74px;border-radius:14px;background:#0a0d26;margin-bottom:10px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;gap:8px}' +
    '.ft-clip i{display:block;border-radius:8px;background:linear-gradient(135deg,#7C5CFF,#2DE2E6)}' +
    '.ft-clip.cal i{width:34px;height:12px;animation:ftSl 1.6s ease-in-out infinite alternate}.ft-clip.cal i:nth-child(2){animation-delay:.3s;width:48px}.ft-clip.cal i:nth-child(3){animation-delay:.6s}' +
    '@keyframes ftSl{from{transform:translateX(-14px);opacity:.5}to{transform:translateX(14px);opacity:1}}' +
    '.ft-clip.bar i{width:14px;animation:ftBar 1.4s ease-in-out infinite alternate;align-self:flex-end;margin-bottom:12px}.ft-clip.bar i:nth-child(2){animation-delay:.2s}.ft-clip.bar i:nth-child(3){animation-delay:.4s}.ft-clip.bar i:nth-child(4){animation-delay:.6s}' +
    '@keyframes ftBar{from{height:10px}to{height:48px}}' +
    '.ft-clip.ring i{width:44px;height:44px;border-radius:50%;background:none;border:4px solid #2DE2E6;border-right-color:transparent;animation:ftSp 1.2s linear infinite}' +
    '@keyframes ftSp{to{transform:rotate(360deg)}}' +
    '.ft-clip.pop i{width:22px;height:22px;border-radius:50%;animation:ftPop 1.2s ease-in-out infinite alternate}.ft-clip.pop i:nth-child(2){animation-delay:.2s}.ft-clip.pop i:nth-child(3){animation-delay:.4s}' +
    '@keyframes ftPop{from{transform:scale(.5);opacity:.5}to{transform:scale(1.15);opacity:1}}' +
    '#ft-net{position:fixed;left:14px;bottom:14px;z-index:60;display:flex;gap:6px;align-items:center;font-size:12px;padding:5px 11px;border-radius:20px;background:rgba(18,22,58,.92);border:1px solid rgba(255,255,255,.1);cursor:pointer}' +
    '#ft-net i{width:8px;height:8px;border-radius:50%;background:#3DDC97}#ft-net.slow i{background:#FFC857}#ft-net.bad i{background:#FF5C7A}' +
    '#ft-vo{position:fixed;right:62px;bottom:16px;z-index:60;width:38px;height:38px;border-radius:50%;border:1px solid rgba(124,92,255,.5);background:rgba(18,22,58,.92);color:#fff;cursor:pointer}' +
    '#ft-help{position:fixed;right:16px;bottom:16px;z-index:60;width:38px;height:38px;border-radius:50%;border:1px solid rgba(124,92,255,.5);background:rgba(18,22,58,.92);color:#fff;font-weight:700;cursor:pointer}' +
    '@media (max-width:860px){#ft-net{bottom:78px}#ft-help{bottom:78px}#ft-vo{bottom:78px}}' +
    '#ft-toast{position:fixed;left:50%;bottom:120px;transform:translateX(-50%);z-index:9100;width:min(520px,92vw);background:#2a2110;border:1px solid rgba(255,200,87,.5);color:#ffe2a6;padding:11px 14px;border-radius:16px;font-size:12.5px;line-height:1.5;animation:ftU .3s}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var $ = function (s) { return document.querySelector(s); };
  /* ---- voice: free built-in text-to-speech, polite and slow; can be muted (remembered) ---- */
  var TTS = ('speechSynthesis' in window) && window.SpeechSynthesisUtterance;
  function voiceOn() { return ls('fs_voice') !== '0'; }
  function pickVoice() {
    var v = []; try { v = speechSynthesis.getVoices() || []; } catch (e) { }
    return v.filter(function (x) { return /en[-_]IN/i.test(x.lang); })[0] || v.filter(function (x) { return /^en/i.test(x.lang); })[0] || null;
  }
  function say(text) {
    if (!TTS || !voiceOn() || !text) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text).replace(/\s+/g, ' ').trim());
      var v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-IN';
      u.rate = 0.93; u.pitch = 1.02; u.volume = 1;
      var tk = function (on) { try { document.dispatchEvent(new CustomEvent('fs-talk', { detail: on })); } catch (e) { } };
      u.onstart = function () { tk(1); }; u.onend = u.onerror = function () { tk(0); };
      u.onboundary = function () { try { document.dispatchEvent(new CustomEvent('fs-talk-beat')); } catch (e) { } };
      speechSynthesis.speak(u);
    } catch (e) { }
  }
  function hush() { try { if (TTS) speechSynthesis.cancel(); document.dispatchEvent(new CustomEvent('fs-talk', { detail: 0 })); } catch (e) { } }
  function userName() {
    var e = $('.side .me b') || $('.me b'); var n = e ? e.textContent.trim().split(/\s+/)[0] : '';
    return /^(local|me|\?)$/i.test(n) ? '' : n;
  }
  function el(h) { var d = document.createElement('div'); d.innerHTML = h; return d.firstChild; }
  window.FSVoice = { say: say, hush: hush, userName: userName, on: voiceOn, ok: !!TTS };
  var STEPS = [
    { s: '#nav a[href="#/"],#nav a:first-child', t: 'Home', v: 'Step one. This is Home. Here you can see your plan for today, your streak, and what to study next.', p: 'Your day at a glance — today’s plan, streak and what to study next.', c: 'pop' },
    { s: '#nav a[href="#/learn"]', t: 'Learn topic by topic', v: 'Step two. Learn. Please pick a subject and then one topic. Each lesson is full of pictures, three D visuals, formulas and practice questions.', p: 'Pick your subject and topic. Lessons are visual with 3D, formulas, 100+ questions and quizzes.', c: 'bar' },
    { s: '#nav a[href="#/timetable"],.moreb', t: 'Timetable', v: 'Step three. Timetable. Please add the subject, the day and the minutes you want to study. We will send reminders to your phone.', p: 'Plan subject, day and minutes. Reminders reach your phone.', c: 'cal' },
    { s: '#nav a[href="#/start"]', t: 'Focus session', v: 'Step four. Focus. When you start a session, other apps are locked so you can concentrate on one topic. Your other device is locked too.', p: 'Start a session: other apps are locked, and the other device locks too. Stay on one topic.', c: 'ring' },
    { s: '#nav a[href="#/progress"]', t: 'Progress', v: 'Step five. Progress. Here you can watch your streaks, your scores and your weak topics improve.', p: 'See streaks, scores and weak topics grow.', c: 'bar' },
    { s: '[data-act="gsearch"],.sidesearch', t: 'Search anything', v: 'Step six. Search. You can jump to any topic in a moment. On a computer, press Control and K.', p: 'Jump to any topic instantly (Ctrl + K on PC).', c: 'pop' },
    { s: '#bellwrap', t: 'Notifications', v: 'Step seven. Notifications. Your reminders, friend challenges and updates will appear here.', p: 'Reminders, challenges from friends and updates appear here.', c: 'pop' },
    { s: '.side .me,.me', t: 'Your profile', v: 'Last step. Your profile. Here you can choose your class or exam and your language. Sign in with the same email on both devices to link them. Thank you for taking the tour.', p: 'Class / exam choice, language and devices. Sign in with one email on both devices to link them.', c: 'ring' }
  ];
  var spot, tip;
  function done() { hush(); if (spot) spot.remove(); if (tip) tip.remove(); spot = tip = null; }
  function find(sel) { var l = sel.split(','); for (var i = 0; i < l.length; i++) { var e = $(l[i].trim()); if (e && e.getBoundingClientRect().width > 0) return e; } return null; }
  function tour(i) {
    while (i < STEPS.length && !find(STEPS[i].s)) i++;
    if (i >= STEPS.length) return done();
    var s = STEPS[i], e = find(s.s), r = e.getBoundingClientRect(), pad = 6;
    if (!spot) { spot = el('<div class="ft-spot"></div>'); tip = el('<div class="ft-tip"></div>'); document.body.append(spot, tip); }
    spot.style.cssText += ';left:' + (r.left - pad) + 'px;top:' + (r.top - pad) + 'px;width:' + (r.width + 2 * pad) + 'px;height:' + (r.height + 2 * pad) + 'px';
    var total = STEPS.length, dots = STEPS.map(function (_, k) { return '<i class="' + (k === i ? 'on' : '') + '"></i>'; }).join('');
    tip.innerHTML = '<div class="ft-clip ' + s.c + '"><i></i><i></i><i></i><i></i></div><h3>' + s.t + '</h3><p>' + s.p + '</p><div style="display:flex;align-items:center;gap:8px"><div class="ft-dots">' + dots + '</div>' +
      (i ? '<button class="btn sm" id="ftB">Back</button>' : '<button class="btn sm ghost" id="ftX">Skip</button>') + '<button class="btn sm primary" id="ftN">' + (i >= total - 1 ? 'Done' : 'Next') + '</button></div>';
    var W = innerWidth, H = innerHeight, tw = Math.min(320, W - 20), x, y;
    if (r.left < W / 2 && r.width < W * .6) { x = r.right + 16; y = r.top; } else { x = r.left; y = r.top - 230; }
    if (x + tw > W - 10) x = Math.max(10, W - tw - 10);
    if (r.top > H / 2 || y < 10) y = Math.max(10, Math.min(H - 270, r.top - 250 > 10 && r.top > H / 2 ? r.top - 250 : r.bottom + 14));
    tip.style.left = x + 'px'; tip.style.top = Math.max(10, Math.min(y, H - 270)) + 'px';
    say(s.v);
    $('#ftN').onclick = function () { tour(i + 1); };
    if ($('#ftB')) $('#ftB').onclick = function () { tour(i - 1); };
    if ($('#ftX')) $('#ftX').onclick = done;
  }
  function welcome() {
    if (window.FSFutu && FSFutu.intro) { ls(KEY, '1'); return FSFutu.intro({ onTour: function () { setTimeout(function () { tour(0); }, 150); } }); }
    var nm = userName();
    var o = el('<div class="ft-ov"><div class="ft-card"><h2>' + (nm ? 'Welcome, ' + nm.replace(/[<>&]/g, '') + '! ✨' : 'Welcome to FutureSelf ✨') + '</h2><p>Your focused study space — quick tour in under a minute.</p>' +
      '<div class="ft-g"><div class="ft-t"><b>📚</b>Learn topic-wise</div><div class="ft-t"><b>🔒</b>Lock in &amp; focus</div><div class="ft-t"><b>📈</b>Track progress</div></div>' +
      '<div class="ft-r"><button class="btn primary" id="ftGo">Start guided tour</button><button class="btn ghost" id="ftSk">Skip</button></div>' +
      '<div class="ft-note">📶 ' + NET_SYNC + '<br>📖 ' + NET_STUDY + '</div></div></div>');
    document.body.appendChild(o); ls(KEY, '1');
    say((nm ? 'Hello ' + nm + ', and a very warm welcome to FutureSelf. ' : 'A very warm welcome to FutureSelf. ') + 'I am glad you are here. I will show you around in less than a minute. Please press Start guided tour. And please remember: if you use your laptop and phone together, connect both to a good, stable internet connection. Study content and videos also need good internet quality.');
    o.querySelector('#ftSk').onclick = function () { hush(); o.remove(); };
    o.querySelector('#ftGo').onclick = function () { o.remove(); setTimeout(function () { tour(0); }, 150); };
  }
  function toast(m) { var o = $('#ft-toast'); if (o) o.remove(); var t = el('<div id="ft-toast">⚠ ' + m + '</div>'); document.body.appendChild(t); t.onclick = function () { t.remove(); }; setTimeout(function () { t.remove(); }, 10000); }
  function netState() {
    if (!navigator.onLine) return ['bad', 'Offline'];
    var c = navigator.connection || {};
    if (/(^|slow-)2g|3g/.test(c.effectiveType || '') || (c.downlink && c.downlink < 1.5) || (c.rtt && c.rtt > 600)) return ['slow', 'Weak connection'];
    return ['good', 'Online'];
  }
  function net() {
    var chip = el('<div id="ft-net" title="Connection quality"><i></i><span></span></div>'), last = '';
    document.body.appendChild(chip);
    function upd() {
      var s = netState(); chip.className = s[0]; chip.lastChild.textContent = s[1];
      if (s[0] !== 'good' && last !== s[0]) toast(NET_SYNC + ' ' + NET_STUDY);
      last = s[0];
    }
    chip.onclick = function () { toast(NET_SYNC + ' ' + NET_STUDY); };
    addEventListener('online', upd); addEventListener('offline', upd);
    if (navigator.connection && navigator.connection.addEventListener) navigator.connection.addEventListener('change', upd);
    upd();
  }
  /* phone permission set-up: read each step aloud, simply and politely */
  var lastWz = '';
  function wizSpeak() {
    var w = $('.fswiz-in'); if (!w) { lastWz = ''; return; }
    var g = function (q) { var e = w.querySelector(q); return e ? e.textContent.trim() : ''; };
    var eb = g('.eyebrow'), h = g('h1'), p = g('p'), key = eb + '|' + h;
    if (key === lastWz) return; lastWz = key;
    var nm = userName(), tail = /needed/i.test(eb) ? ' This one is needed, so please allow it. Tap the big button, and then come back here.' : ' This one is optional. You can allow it, or skip it if you prefer.';
    var intro = /Step 1 /.test(eb) ? (nm ? 'Hello ' + nm + '. ' : '') + 'Let us set up your phone, one small step at a time. ' : '';
    say(intro + (/All set|Almost/.test(eb) ? h + '. ' + p : eb.replace('·', '.') + '. ' + h + '. ' + p + tail));
  }
  function boot() {
    try { if (TTS) { speechSynthesis.getVoices(); new MutationObserver(function () { clearTimeout(boot.t); boot.t = setTimeout(wizSpeak, 450); }).observe(document.body, { childList: true, subtree: true }); } } catch (e) { }
    var t = 0, iv = setInterval(function () { // wait until the signed-in shell exists
      if ($('#nav a') && !$('#ft-help')) {
        clearInterval(iv);
        var h = el('<button id="ft-help" title="Guided tour" aria-label="Guided tour">?</button>'); document.body.appendChild(h); h.onclick = welcome;
        if (TTS) { var vb = el('<button id="ft-vo" title="Voice guide on/off" aria-label="Voice guide"></button>'); document.body.appendChild(vb);
          var paint = function () { vb.textContent = voiceOn() ? '🔊' : '🔇'; }; paint();
          vb.onclick = function () { if (voiceOn()) { hush(); ls('fs_voice', '0'); } else { ls('fs_voice', '1'); say('Voice guide is on.'); } paint(); }; }
        net(); if (!ls(KEY)) setTimeout(welcome, 700);
      } else if (++t > 600) clearInterval(iv);
    }, 500);
  }
  addEventListener('keydown', function (e) { if (e.key === 'Escape') done(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

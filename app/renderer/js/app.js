/* FutureSelf front-end (vanilla JS single-page app) */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { } return null; }

  /* ---------- icons ---------- */
  var ICON = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    book: '<path d="M4 4h10a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M4 16a4 4 0 014-4h10"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    focus: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', play: '<path d="M7 4l13 8-13 8z"/>', check: '<path d="M4 12l5 5L20 6"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    bell: '<path d="M6 17V11a6 6 0 0112 0v6l2 2H4z"/><path d="M10 21h4"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    flame: '<path d="M12 3c1 4 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>',
    x: '<path d="M5 5l14 14M19 5L5 19"/>', trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 014-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 01-4 4H4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>'
  };
  var MORE = {
    code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
    math: '<path d="M18 5H6l7 7-7 7h12"/>',
    atom: '<circle cx="12" cy="12" r="1.8"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.2c3 0 5 2 5 5"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    brain: '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3V4zM15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3V4z"/>',
    net: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2v4M12 11.2L6 16M12 11.2l6 4.8"/>',
    cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12L4 7.5M12 12v9"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    play: '<path d="M7 5l12 7-12 7z"/>'
  };
  Object.keys(MORE).forEach(function (k) { if (!ICON[k]) ICON[k] = MORE[k]; });
  if (window.FSX && FSX.icons) Object.keys(FSX.icons).forEach(function (k) { ICON[k] = FSX.icons[k]; });
  function ic(n) { return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">' + (ICON[n] || ICON.book) + '</svg>'; }

  /* ---------- state & api ---------- */
  var S = { user: null, topics: [], blocks: [], stats: null, cfg: {}, notifs: [], seen: {}, loadedAt: Date.now(), session: null, shell: false, bellOpen: false };

  // Inside the Windows app calls go to the main process; in a plain browser they go to the dev server.
  function api(path, opt) {
    opt = opt || {};
    var method = opt.method || 'GET';
    if (window.fsApi && window.fsApi.isApp) {
      return window.fsApi.call(method, path, opt.body).then(function (r) {
        if (r.status >= 400) throw new Error((r.data && r.data.error) || 'Something went wrong');
        return r.data;
      });
    }
    return fetch('/api' + path, { method: method, headers: { 'Content-Type': 'application/json' }, body: opt.body ? JSON.stringify(opt.body) : undefined })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || 'Something went wrong'); return j; }); });
  }

  /* ---------- helpers ---------- */
  var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  function iso(d) { var m = d.getMonth() + 1, x = d.getDate(); return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (x < 10 ? '0' : '') + x; }
  function parseISO(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function monday(d) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
  function wd(d) { return (d.getDay() + 6) % 7; }
  function tmin(s) { var p = s.split(':'); return +p[0] * 60 + +p[1]; }
  function hhmm(m) { m = ((m % 1440) + 1440) % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); }
  function mmss(ms) { ms = Math.max(0, Math.ceil(ms / 1000)); var m = Math.floor(ms / 60), s = ms % 60; return ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2); }
  function dur(min) { min = Math.round(min); return (min >= 60 ? Math.floor(min / 60) + 'h ' + (min % 60 ? (min % 60) + 'm' : '') : min + ' min').trim(); }
  function occurs(b, d) { return b.kind === 'once' ? b.date === iso(d) : (b.days || []).indexOf(wd(d)) > -1; }
  function dayBlocks(d) { return S.blocks.filter(function (b) { return occurs(b, d); }).sort(function (a, b) { return tmin(a.start) - tmin(b.start); }); }
  function doneMap() { try { return JSON.parse(ls('fs_done') || '{}'); } catch (e) { return {}; } }
  function topicOpts(sel) {
    var groups = {}, order = [];
    S.topics.forEach(function (t) { var k = t.semester || 0; if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(t); });
    order.sort(function (a, b) { return (a || 99) - (b || 99); });
    return order.map(function (k) { return '<optgroup label="' + (k ? 'Semester ' + k : 'Electives') + '">' + groups[k].map(function (t) { return '<option value="' + t.id + '"' + (t.id === sel ? ' selected' : '') + '>' + esc(t.title) + '</option>'; }).join('') + '</optgroup>'; }).join('');
  }
  function topicById(id) { return S.topics.filter(function (t) { return t.id === id; })[0]; }
  function firstName() { return (S.user && S.user.name || '').split(' ')[0]; }
  var LOCKS = (window.fsApi && fsApi.platform === 'android') ? { gentle: ['Gentle', 'Reminder only. Other apps stay usable.'], focus: ['Focus', 'Other apps are blocked until the time ends. Emergency calls still work.'], strict: ['Strict', 'Like Focus, and the session cannot be ended early.'] } : { gentle: ['Gentle', 'Warns and counts every time you leave. Pause allowed.'], focus: ['Focus', 'Fullscreen lock. Leaving is logged and ending early needs confirmation.'], strict: ['Strict', 'Fullscreen lock with no pause. Early exit needs a 10 second emergency code.'] };

  /* ---------- toast / modal ---------- */
  function toast(title, msg, bad) {
    var el = document.createElement('div'); el.className = 'toast' + (bad ? ' bad' : '');
    el.innerHTML = '<div><b>' + esc(title) + '</b>' + (msg ? '<span>' + esc(msg) + '</span>' : '') + '</div>';
    $('#toasts').appendChild(el); setTimeout(function () { el.style.transition = '.4s'; el.style.opacity = 0; setTimeout(function () { el.remove(); }, 400); }, 5200);
  }
  var modalLock = false;
  function modal(html, lock) {
    modalLock = !!lock;
    $('#modal-root').innerHTML = '<div class="overlay" data-act="ovl"><div class="modal" role="dialog" aria-modal="true">' + html + '</div></div>';
    var f = $('#modal-root input,#modal-root select'); if (f && !lock) f.focus();
  }
  function closeModal() { $('#modal-root').innerHTML = ''; }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modalLock && $('#modal-root .overlay')) closeModal(); });

  var beepCtx;
  function beep(f, d, v) { try { beepCtx = beepCtx || new (window.AudioContext || window.webkitAudioContext)(); var o = beepCtx.createOscillator(), g = beepCtx.createGain(); o.frequency.value = f; o.type = 'sine'; g.gain.value = v || 0.06; o.connect(g); g.connect(beepCtx.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.0001, beepCtx.currentTime + d); o.stop(beepCtx.currentTime + d); } catch (e) { } }
  function chime() { beep(660, 0.5); setTimeout(function () { beep(880, 0.5); }, 180); setTimeout(function () { beep(1320, 0.8); }, 360); }

  /* ---------- router ---------- */
  var actions = {};
  function parseHash() {
    var h = (location.hash || '').replace(/^#\/?/, ''), qs = h.split('?'), p = qs[0].split('/').filter(Boolean), q = {};
    (qs[1] || '').split('&').forEach(function (kv) { if (kv) { var a = kv.split('='); q[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || ''); } });
    return { name: p[0] || 'home', a: p[1], b: p[2], q: q };
  }
  function loadCore() {
    return Promise.all([api('/me'), api('/topics'), api('/blocks'), api('/stats'), api('/notifications')]).then(function (r) {
      S.user = r[0]; S.topics = r[1]; S.blocks = r[2]; S.stats = r[3]; S.notifs = r[4];
      r[4].forEach(function (n) { S.seen[n._id] = 1; });
      setTimeout(refreshOrb, 50);
    });
  }
  function go() {
    var r = parseHash();
    if (r.name === 'auth') { location.hash = '#/'; return; }
    if (!S.user) { $('#app').innerHTML = '<div class="auth"><div class="muted">Loading your space...</div></div>'; FS3D.ok && FS3D.setMode('auth'); return loadCore().then(go).catch(function (e) { toast('Could not load', e.message, true); }); }
    if (window.FSX && FSX.gate && !S.session && FSX.gate(r)) return;
    if (S.session && !S.session.ended && r.name !== 'focus') { location.hash = '#/focus'; return; }
    if (r.name === 'focus') { if (!S.session) { location.hash = '#/start'; return; } return renderFocus(); }
    if (pendingLeave && !(r.name === 'lesson' && r.a === pendingLeave.t.id && r.b === pendingLeave.l.id)) { var pl = pendingLeave; pendingLeave = null; setTimeout(function () { leavePrompt(pl); }, 500); }
    window.scrollTo(0, 0);
    ensureShell(r.name);
    var v = $('#view');
    var map = Object.assign({ home: viewHome, learn: viewLearn, topic: viewTopic, lesson: viewLesson, timetable: viewTimetable, start: viewStart, progress: viewProgress, settings: viewSettings }, (window.FSX && FSX.routes) || {});
    var fn = map[r.name] || viewHome;
    FS3D.ok && FS3D.setMode(r.name === 'home' && innerWidth >= 1100 ? 'dash' : 'dim');
    if (r.name === 'topic' || r.name === 'lesson') SubjectFX.set(r.a); else SubjectFX.clear();
    Promise.resolve(fn(v, r)).then(function () { polish(v); }).catch(function (e) { v.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; });
  }
  window.addEventListener('hashchange', go);

  function ensureShell(active) {
    var nav = [['home', 'home', 'Home'], ['learn', 'book', 'Learn'], ['timetable', 'cal', 'Timetable'], ['start', 'focus', 'Focus'], ['progress', 'chart', 'Progress']].concat((window.FSX && FSX.nav) || []).concat([['settings', 'gear', 'Settings']]);
    var key = active === 'topic' || active === 'lesson' ? 'learn' : active;
    if (!S.shell || !$('#view')) {
      $('#app').innerHTML =
        '<aside class="side"><div class="brand"><div class="mark"><i></i></div><div>FutureSelf<small>Study lock-in</small></div></div><nav class="nav" id="nav"></nav><button class="btn sm sidesearch" data-act="gsearch">' + ic('search') + ' Search topics <kbd>Ctrl K</kbd></button>' +
        '<div class="me"><div class="avatar">' + esc((S.user.name || '?').charAt(0).toUpperCase()) + '</div><div><b>' + esc(S.user.name) + '</b><span>Local profile</span></div></div></aside>' +
        '<main class="main"><div id="bellwrap" style="position:fixed;top:18px;right:22px;z-index:25"></div><div id="view" class="view"></div></main>';
      S.shell = true; drawBell();
    }
    $('#nav').innerHTML = nav.map(function (n) { return '<a href="#/' + (n[0] === 'home' ? '' : n[0]) + '" class="' + (key === n[0] ? 'on' : '') + '">' + ic(n[1]) + '<span class="l">' + n[2] + '</span></a>'; }).join('');
  }

  /* ---------- notifications ---------- */
  function unread() { return S.notifs.filter(function (n) { return !n.read; }).length; }
  function drawBell() {
    var w = $('#bellwrap'); if (!w) return;
    var u = unread();
    w.innerHTML = '<button class="icon-btn" data-act="bell" aria-label="Notifications">' + ic('bell') + (u ? '<span class="dot"></span>' : '') + '</button>' +
      (S.bellOpen ? '<div class="panel-pop"><div class="row spread" style="margin-bottom:10px"><b>Notifications</b><button class="btn sm ghost" data-act="readall">Mark all read</button></div>' +
        (S.notifs.length ? S.notifs.slice(0, 12).map(function (n) { return '<div class="item" style="margin-bottom:8px"><div class="grow"><b>' + esc(n.title) + '</b><small>' + esc(n.body) + '</small></div>' + (n.read ? '' : '<span class="badge warn">new</span>') + '</div>'; }).join('') : '<div class="empty">No notifications yet. Your study reminders will appear here.</div>') + '</div>' : '');
  }
  function pollNotifs() {
    api('/notifications').then(function (list) { S.notifs = list; drawBell(); }).catch(function () { });
  }
  if (window.fsApi && window.fsApi.onNotify) {
    window.fsApi.onNotify(function (n) {
      S.notifs.unshift(n); drawBell();
      if (S.user && S.user.settings.notify_inapp !== false) { toast(n.title, n.body); beep(880, 0.35); }
    });
  } else { setInterval(pollNotifs, 30000); }

  /* ---------- Future Self: level, week ring, celebrations ---------- */
  var LEVELS = [['Spark', 0], ['Ember', 40], ['Flame', 120], ['Glow', 280], ['Aurora', 520], ['Nova', 860], ['Radiant', 1300], ['Zenith', 1900]];
  var QUOTES = ['Future you is proud of this minute.', 'Small sessions, big results.', 'You are building the person you want to be.', 'Consistency beats intensity.', 'One focused block at a time.', 'Your streak is your superpower.', 'Discipline is just self-respect.'];
  function levelInfo(st) {
    var xp = Math.round((st.total_minutes || 0) + 15 * (st.lessons_done || 0)), lv = 0, i;
    for (i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i][1]) lv = i;
    var nx = LEVELS[lv + 1], cur = LEVELS[lv][1];
    return { xp: xp, lv: lv, name: LEVELS[lv][0], next: nx ? nx[0] : null, pct: nx ? Math.round(100 * (xp - cur) / (nx[1] - cur)) : 100, need: nx ? nx[1] - xp : 0 };
  }
  function weekLit(st) { return (st.last7 || []).map(function (d) { return d.minutes >= 10; }); }
  function futureCard(st) {
    var li = levelInfo(st), wk = (st.last7 || []).map(function (d, i, a) { var dt = parseISO(d.date); return '<span class="' + (d.minutes >= 10 ? 'on ' : '') + (i === a.length - 1 ? 'today' : '') + '"><i></i>' + DAYS[wd(dt)].charAt(0) + '</span>'; }).join('');
    return '<div class="card fself tilt"><div class="lvrow"><div class="lvbadge">LV<b>' + (li.lv + 1) + '</b></div><div class="grow"><b>Your Future Self: ' + li.name + '</b><small>' + li.xp + ' XP &middot; ' + (li.next ? li.need + ' XP to ' + li.next : 'Maximum level reached') + '</small></div></div>' +
      '<div class="bar" style="margin-top:14px"><i style="width:' + li.pct + '%"></i></div><div class="wk">' + wk + '</div>' +
      '<p class="hint">The glowing orb is you. <kbd>Drag</kbd> to spin it, <kbd>click</kbd> to charge it. Study to make it evolve.</p></div>';
  }
  function refreshOrb() {
    return api('/stats').then(function (st) {
      S.stats = st; var li = levelInfo(st); S.level = li;
      if (FS3D.ok) { FS3D.setLevel(li.lv); FS3D.setWeek(weekLit(st)); }
      var saved = ls('fs_level');
      if (saved === null || saved === '') ls('fs_level', String(li.lv));
      else if (li.lv > +saved) {
        ls('fs_level', String(li.lv));
        setTimeout(function () { FS3D.ok && FS3D.evolve(); FX.fireworks(4); chime(); toast('Your Future Self evolved', 'Level ' + (li.lv + 1) + ': ' + li.name); }, 700);
      } else if (li.lv < +saved) ls('fs_level', String(li.lv));
      return li;
    }).catch(function () { });
  }
  var orbClicks = 0;
  if (FS3D.ok) FS3D.onOrb = function (pos) {
    orbClicks++; beep(520 + (orbClicks % 5) * 110, 0.28, 0.045);
    if (orbClicks % 4 === 0) toast('Future you says', QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  };
  /* entrance polish: count-up numbers, filling bars, staggered cards */
  var noMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function polish(v) {
    if (noMotion) return;
    $$('[data-count]', v).forEach(function (el) {
      var n = +el.dataset.count; if (!(n > 0)) return; var t0 = performance.now();
      (function f(now) { var k = Math.min(1, (now - t0) / 900), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(n * e); if (k < 1) requestAnimationFrame(f); })(t0);
    });
    $$('.bar i', v).forEach(function (i) { var w = i.style.width; i.style.transition = 'none'; i.style.width = '0'; void i.offsetWidth; i.style.transition = ''; requestAnimationFrame(function () { requestAnimationFrame(function () { i.style.width = w; }); }); });
    $$('.bars .b', v).forEach(function (b, i) { b.style.animationDelay = (i * 70) + 'ms'; });
    $$('.heat i', v).forEach(function (c, i) { c.style.animationDelay = (i * 8) + 'ms'; });
    $$('.card', v).forEach(function (c, i) { c.style.animation = 'rise .6s ' + Math.min(i, 9) * 60 + 'ms cubic-bezier(.2,.8,.2,1) backwards'; });
  }

  /* ---------- home ---------- */
  function greeting() { var h = new Date().getHours(); return h < 5 ? 'Still up' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 22 ? 'Good evening' : 'Late night'; }
  function viewHome(v) {
    return Promise.all([api('/stats'), api('/blocks')]).then(function (r) {
      S.stats = r[0]; S.blocks = r[1];
      refreshOrb();
      var st = S.stats, now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes(), today = dayBlocks(now), done = doneMap();
      var pct = Math.min(100, Math.round(100 * st.today_minutes / st.daily_goal));
      var plan = today.length ? today.map(function (b) {
        var s = tmin(b.start), e = s + b.minutes, isDone = done[b._id + iso(now)], state = isDone ? 'done' : nowMin >= e ? 'missed' : nowMin >= s ? 'now' : 'soon';
        var badge = { done: '<span class="badge ok">Done</span>', missed: '<span class="badge bad">Missed</span>', now: '<span class="badge warn">Now</span>', soon: '<span class="badge">' + esc(b.start) + '</span>' }[state];
        return '<div class="item"><div class="ico-box" style="background:' + esc(b.color) + '33;color:' + esc(b.color) + '">' + ic((topicById(b.topic_id) || {}).icon || 'book') + '</div><div class="grow"><b>' + esc(b.subject) + '</b><small>' + esc(b.start) + ' to ' + hhmm(e) + ' &middot; ' + b.minutes + ' min &middot; ' + LOCKS[b.lock_mode][0] + ' lock</small></div>' + badge +
          (state === 'now' || state === 'soon' ? '<button class="btn sm pri" data-act="startblock" data-id="' + b._id + '">' + ic('play') + '</button>' : '') + '</div>';
      }).join('') : '<div class="empty">Nothing planned for today.<br><button class="btn sm" style="margin-top:12px" data-act="addblock">' + ic('plus') + ' Add a study block</button></div>';
      var prefSem = +(ls('fs_sem') || 0) || 3;
      var cont = S.topics.filter(function (t) { return !t.planned; }).sort(function (a, b) { return (b.done > 0) - (a.done > 0) || (b.done - a.done) || ((a.semester === prefSem ? 0 : 1) - (b.semester === prefSem ? 0 : 1)); }).slice(0, 4).map(function (t) {
        return '<a class="item" href="#/topic/' + t.id + '"><div class="ico-box" style="background:' + t.color + '26;color:' + t.color + '">' + ic(t.icon) + '</div><div class="grow"><b>' + esc(t.title) + '</b><small>' + t.done + ' of ' + t.lessons + ' lessons</small><div class="bar" style="margin-top:8px;height:5px"><i style="width:' + Math.round(100 * t.done / t.lessons) + '%"></i></div></div></a>';
      }).join('');
      v.innerHTML = '<div class="hero-col"><div class="top"><div><div class="eyebrow">' + now.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' }) + '</div><h1>' + greeting() + ', <span class="grad-text">' + esc(firstName()) + '</span></h1><p class="muted">' + (st.streak ? 'You are on a ' + st.streak + '-day streak. Keep it going.' : 'Study 10 minutes today to start a streak.') + '</p></div></div>' +
        '<div class="grid g3 compact" style="margin-bottom:18px">' +
        '<div class="card stat tilt"><div class="lbl">' + ic('clock') + ' Today</div><div class="big"><span data-count="' + st.today_minutes + '">' + st.today_minutes + '</span><small>/ ' + st.daily_goal + ' min</small></div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<div class="card stat tilt"><div class="lbl" style="color:var(--gold)">' + ic('flame') + ' Streak</div><div class="big"><span data-count="' + st.streak + '">' + st.streak + '</span><small>' + (st.streak === 1 ? 'day' : 'days') + '</small></div><div class="muted" style="font-size:13px;margin-top:14px">Best: ' + st.best_streak + '</div></div>' +
        '<div class="card stat tilt"><div class="lbl">' + ic('check') + ' Lessons</div><div class="big"><span data-count="' + st.lessons_done + '">' + st.lessons_done + '</span><small>done</small></div><div class="muted" style="font-size:13px;margin-top:14px">' + dur(st.total_minutes) + ' studied</div></div></div>' +
        '<div class="stack">' + futureCard(st) + '<div class="card"><div class="row spread"><h2>Today\'s plan</h2><button class="btn sm" data-act="addblock">' + ic('plus') + ' Add</button></div><div class="list">' + plan + '</div></div>' +
        '<div class="card tilt"><div class="row spread wrap"><div><h2 style="margin-bottom:6px">Start a focus session</h2><p class="muted">Pick a topic and lock in.</p></div><a class="btn pri" href="#/start">' + ic('focus') + ' Focus now</a></div></div>' +
        '<div class="card"><h2>Continue learning</h2><div class="list">' + cont + '</div></div></div></div>';
    });
  }
  actions.bell = function () { S.bellOpen = !S.bellOpen; drawBell(); };
  actions.readall = function () { api('/notifications/read', { method: 'POST' }).then(function () { S.notifs.forEach(function (n) { n.read = true; }); drawBell(); }); };
  document.addEventListener('click', function (e) { if (S.bellOpen && !e.target.closest('#bellwrap')) { S.bellOpen = false; drawBell(); } });

  /* ---------- learn ---------- */
  /* ---------- learn: semesters, search, subjects ---------- */
  function semLabel(n) { return n ? 'Semester ' + n : 'Electives'; }
  function resultsHTML(list, q) {
    if (!list.length) return '<div class="empty">No subject or topic matches "' + esc(q) + '". Try a shorter word, like "tree", "deadlock" or "sql".</div>';
    return list.map(function (r) {
      var href = r.type === 'subject' ? '#/topic/' + r.topic_id : '#/lesson/' + r.topic_id + '/' + r.lesson_id;
      return '<a class="item sres" href="' + href + '" data-act="gclose"><div class="ico-box" style="width:40px;height:40px">' + ic(r.type === 'subject' ? 'book' : 'search') + '</div><div class="grow"><b>' + esc(r.title) + '</b><small>' + esc(r.sub) + (r.snippet ? ' &middot; ' + esc(r.snippet) : '') + '</small></div><span class="badge">' + (r.type === 'subject' ? (r.planned ? 'Content coming' : 'Subject') : 'Topic') + '</span></a>';
    }).join('');
  }
  var srchTimer = null;
  function wireSearch(input, out, onShow) {
    input.addEventListener('input', function () {
      clearTimeout(srchTimer);
      srchTimer = setTimeout(function () {
        var q = input.value.trim();
        if (q.length < 2) { out.innerHTML = ''; onShow && onShow(false); return; }
        api('/search?q=' + encodeURIComponent(q)).then(function (list) { if (input.value.trim() !== q) return; out.innerHTML = '<div class="list">' + resultsHTML(list, q) + '</div>'; onShow && onShow(true); }).catch(function () { });
      }, 140);
    });
  }
  function subjectCard(x) {
    var p = x.lessons ? Math.round(100 * x.done / x.lessons) : 0;
    return '<a class="card tilt topic-card' + (x.planned ? ' planned' : '') + '" href="#/topic/' + x.id + '"><div class="row spread"><div class="ico-box" style="background:' + x.color + '26;color:' + x.color + ';width:54px;height:54px">' + ic(x.icon) + '</div>' + (x.credits ? '<span class="badge">' + x.credits + ' credits</span>' : '') + '</div><div><h3>' + esc(x.title) + '</h3><p class="muted" style="margin-top:6px;font-size:15px">' + esc(x.tagline) + '</p></div>' +
      (x.planned ? '<div class="muted" style="font-size:13px"><span class="badge warn">Content coming</span></div>' : '<div class="row muted" style="font-size:13px;gap:16px"><span>' + x.units + ' units</span><span>' + x.lessons + ' topics</span><span>~' + dur(x.minutes) + '</span></div><div><div class="row spread muted" style="font-size:13px"><span>Progress</span><span>' + p + '%</span></div><div class="bar" style="margin-top:8px"><i style="width:' + p + '%"></i></div></div>') + '</a>';
  }
  function drawSubjects() {
    var f = ls('fs_sem') || 'all', box = $('#lgrid'); if (!box) return;
    var groups = {}, order = [];
    S.topics.forEach(function (t) { var k = t.semester || 0; if (f !== 'all' && String(k) !== f) return; if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(t); });
    order.sort(function (a, b) { return (a || 99) - (b || 99); });
    box.innerHTML = order.map(function (k) {
      var g = groups[k], cr = g.reduce(function (a, t) { return a + (t.credits || 0); }, 0), ready = g.filter(function (t) { return !t.planned; }).length;
      return '<div class="semblock"><div class="semhead"><h2>' + semLabel(k) + '</h2><span class="muted">' + g.length + ' subjects' + (cr ? ' &middot; ' + cr + ' credits' : '') + ' &middot; ' + ready + ' with study content</span></div><div class="grid gauto">' + g.map(subjectCard).join('') + '</div></div>';
    }).join('') || '<div class="empty">No subjects here yet.</div>';
    $$('#semchips .chip').forEach(function (c) { c.classList.toggle('on', c.dataset.id === f); });
    polish($('#view'));
  }
  actions.semf = function (el) { ls('fs_sem', el.dataset.id); drawSubjects(); };
  actions.gclose = function () { closeModal(); };
  actions.gsearch = function () {
    if (S.session && !S.session.ended) return;
    modal('<div class="row" style="margin-bottom:12px"><input class="in" id="gq" placeholder="Search any subject or topic, e.g. deadlock, normalization, TCP" autocomplete="off"></div><div id="gres" style="max-height:60vh;overflow:auto"><p class="muted" style="padding:8px 4px">Type at least 2 letters. Searches every subject, topic, and question in your Content folder.</p></div>');
    var q = $('#gq'); q.focus(); wireSearch(q, $('#gres'));
  };
  document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); if (S.user) actions.gsearch(); } });
  function viewLearn(v) {
    return api('/topics').then(function (t) {
      S.topics = t;
      var f = ls('fs_sem') || 'all', sems = [];
      t.forEach(function (x) { if (sems.indexOf(x.semester || 0) < 0) sems.push(x.semester || 0); });
      sems.sort(function (a, b) { return (a || 99) - (b || 99); });
      var total = t.length, ready = t.filter(function (x) { return !x.planned; }).length;
      v.innerHTML = '<div class="top"><div><div class="eyebrow">Learn</div><h1>Your subjects</h1><p class="muted">' + total + ' subjects across 8 semesters. ' + ready + ' have full study notes, Q&amp;A, quizzes and video links. Search any topic by typing.</p></div></div>' +
        '<div class="card" style="margin-bottom:18px"><div class="searchbar">' + ic('search') + '<input class="in" id="lq" placeholder="Search subjects and topics: try &quot;deadlock&quot;, &quot;normalization&quot;, &quot;MQTT&quot;" autocomplete="off"></div>' +
        '<div class="chips" id="semchips" style="margin-top:14px"><button class="chip" data-act="semf" data-id="all">All</button>' + sems.map(function (k) { return '<button class="chip" data-act="semf" data-id="' + k + '">' + (k ? 'Sem ' + k : 'Electives') + '</button>'; }).join('') + '</div><div id="lres" style="margin-top:14px"></div></div><div id="lgrid"></div>';
      wireSearch($('#lq'), $('#lres'), function (on) { $('#lgrid').hidden = on; $('#semchips').hidden = on; });
      drawSubjects();
    });
  }
  function viewTopic(v, r) {
    return api('/topics/' + r.a).then(function (d) {
      var t = d.topic, pr = d.progress, all = [];
      t.units.forEach(function (u) { u.lessons.forEach(function (l) { all.push(l); }); });
      var done = all.filter(function (l) { return pr[l.id] && pr[l.id].done; }).length, nxt = all.filter(function (l) { return !(pr[l.id] && pr[l.id].done); })[0];
      var meta = semLabel(t.semester) + (t.credits ? ' &middot; ' + t.credits + ' credits' : '') + (all.length ? ' &middot; ' + all.length + ' topics' : '');
      v.innerHTML = '<div class="top"><div><a class="eyebrow" href="#/learn">&larr; All subjects</a><h1 style="margin-top:10px">' + esc(t.title) + '</h1><p class="muted">' + esc(t.tagline) + '</p><p class="muted" style="margin-top:6px;font-size:14px">' + meta + '</p></div><div class="row wrap">' +
        '<button class="btn" data-act="addblock" data-topic="' + t.id + '">' + ic('cal') + ' Plan study blocks</button>' + (nxt ? '<a class="btn pri" href="#/lesson/' + t.id + '/' + nxt.id + '">' + (done ? 'Continue' : 'Start') + ' ' + ic('arrow') + '</a>' : (all.length ? '<span class="badge ok">Course complete</span>' : '')) + '</div></div>' +
        (t.planned ? '<div class="card"><h2>Content coming</h2><p class="muted">The study notes for this subject are still being prepared. Everything else (timetable, focus sessions) already works for it. You can also add your own: drop topic files into the Content folder next to FutureSelf.exe, under <b>' + esc(t.folder) + '</b>, and restart the app.</p></div>' : '') +
        '<div class="stack">' + t.units.map(function (u, i) {
          return '<div class="card"><div class="eyebrow">Unit ' + (i + 1) + '</div><h2 style="margin-top:6px">' + esc(u.title) + '</h2><div class="list">' + u.lessons.map(function (l) {
            var p = pr[l.id] || {};
            return '<a class="item" href="#/lesson/' + t.id + '/' + l.id + '"><span class="tick ' + (p.done ? 'on' : '') + '">' + (p.done ? ic('check') : '') + '</span><div class="grow"><b>' + esc(l.title) + '</b><small>' + l.minutes + ' min &middot; ' + l.qa.length + ' Q&amp;A &middot; ' + l.quiz.length + ' quiz questions</small></div>' + (p.quiz ? '<span class="badge ' + (p.quiz.score === p.quiz.total ? 'ok' : 'warn') + '">Quiz ' + p.quiz.score + '/' + p.quiz.total + '</span>' : '') + '</a>';
          }).join('') + '</div></div>';
        }).join('') + '</div>';
    });
  }
  function fmt(x) { return esc(x).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }
  function blocksHTML(bl) {
    return bl.map(function (b) {
      if (b.t === 'h') return '<h3>' + esc(b.x) + '</h3>';
      if (b.t === 'p') return '<p>' + fmt(b.x) + '</p>';
      if (b.t === 'ul') return '<ul>' + b.x.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>';
      if (b.t === 'ol') return '<ol>' + b.x.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ol>';
      if (b.t === 'code') return '<pre' + (b.lang ? ' data-lang="' + esc(b.lang) + '"' : '') + '><code>' + esc(b.x) + '</code></pre>';
      if (b.t === 'tip') return '<div class="tipbox"><b>Remember:</b> ' + fmt(b.x.replace(/^Remember:\s*/i, '')) + '</div>';
      if (b.t === 'table') return '<div class="tbl"><table><thead><tr>' + b.head.map(function (h) { return '<th>' + fmt(h) + '</th>'; }).join('') + '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + fmt(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      return '';
    }).join('');
  }
  var curLesson = null, pendingLeave = null;
  /* ---------- videos: the app picks them, they play inside the app, nobody searches ---------- */
  var V = null;
  function ytId(u) { var m = String(u || '').match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/); return m ? m[1] : null; }
  function embedURL(id) { return 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0&hl=en&enablejsapi=1&disablekb=0'; }
  function vqueries(t, l, lang) {
    var base = (l.yt && l.yt.length ? l.yt : [l.title + ' explained'])[0], ch = (t.channels || []).slice(0, 4), sfx = lang === 'hi' ? ' in hindi' : '', q = [];
    ch.forEach(function (c) { q.push(base + sfx + ' ' + c); }); q.push(base + sfx);
    var b2 = (l.yt || [])[1]; if (b2) q.push(b2 + sfx);
    return q.slice(0, 6);
  }
  function chKey(n) { return String(n || '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }
  function groupByChannel(items) {
    var g = [], idx = {};
    items.forEach(function (x) { var k = chKey(x.channel) || 'x'; if (idx[k] == null) { idx[k] = g.length; g.push({ name: x.channel || 'Channel', items: [] }); } g[idx[k]].items.push(x); });
    return g.slice(0, 7);
  }
  function videoPane(inSess) {
    return (inSess ? '' : '<div class="card vsess"><div class="row spread wrap"><div><h2 style="margin:0">Video lesson</h2><p class="muted" style="margin-top:6px">We picked the video for this topic, so you can stay on it. It plays right here. A video session adds a timer and questions to answer while you watch, and the time counts as study time.</p></div><button class="btn pri" data-act="vsstart">' + ic('play') + ' Start video session</button></div><div id="vsbox"></div></div>') +
      '<div class="card" style="margin-top:18px"><div id="vhost" class="vhost"></div></div>' +
      '<div class="card vsearch" style="margin-top:18px"><h3 style="margin:0 0 4px">Want a different video?</h3><p class="muted" style="margin:0 0 12px">Tell us what you need and, if you like, which channel. FutureSelf finds it for you. You cannot browse YouTube from here, only the videos we return.</p>' +
      '<div class="row wrap" style="gap:10px"><input class="in" id="vq" maxlength="120" autocomplete="off" placeholder="What do you want to watch? e.g. deadlock examples" style="flex:2;min-width:200px"><input class="in" id="vch" maxlength="60" autocomplete="off" placeholder="Channel (optional)" style="flex:1;min-width:140px"><button class="btn pri" data-act="vsearch">Search</button></div><div id="vres" style="margin-top:14px"></div></div>';
  }
  function mountVideo(host, t, l, lang) {
    if (!host) return;
    V = { host: host, t: t, l: l, lang: lang || 'en', groups: [], gi: 0, i: 0 };
    var me = V;
    if (!(window.fsApi && window.fsApi.findVideos)) { host.innerHTML = '<div class="tipbox">Video lessons play inside the FutureSelf desktop app, with an internet connection.</div>'; return; }
    var cur = me.lang === 'en' ? (l.videos || []).map(function (v) { return { id: ytId(v.url), title: v.title, channel: v.channel || '' }; }).filter(function (x) { return x.id; }) : [];
    host.innerHTML = '<div class="vload"><span class="spin"></span> Finding the best video for this topic...</div>';
    window.fsApi.findVideos({ key: 'v4|' + t.id + '|' + l.id + '|' + me.lang, queries: vqueries(t, l, me.lang), channels: t.channels || [], keywords: (l.yt || []).slice(0, 2).concat([l.title]), focus: l.title, generic: t.title }).then(function (r) {
      if (V !== me || !document.body.contains(host)) return;
      if (!r || !r.ok) {
        if (cur.length) { me.groups = groupByChannel(cur); me.gi = 0; me.i = 0; return renderVideo(); }
        host.innerHTML = '<div class="tipbox"><b>Could not load a video.</b> ' + esc((r && r.error) || 'Check your internet connection.') + '</div><div class="row" style="margin-top:12px"><button class="btn" data-act="vretry">Try again</button></div>'; return;
      }
      me.groups = groupByChannel(cur.concat(r.items.filter(function (x) { return !cur.some(function (c) { return c.id === x.id; }); }))); me.gi = 0; me.i = 0; renderVideo();
    }).catch(function () { if (V === me) host.innerHTML = '<div class="tipbox">Could not load a video. Check your internet connection.</div><div class="row" style="margin-top:12px"><button class="btn" data-act="vretry">Try again</button></div>'; });
  }
  function renderVideo(note) {
    var me = V; if (!me || !me.groups || !me.groups.length) return; var grp = me.groups[me.gi], it = grp.items[me.i % grp.items.length];
    var mins = it.sec ? ' &middot; ' + Math.max(1, Math.round(it.sec / 60)) + ' min' : '';
    var chips = me.groups.length > 1 ? '<div class="vchans"><span class="muted">Teacher / channel:</span>' + me.groups.map(function (g, gi) { return '<button class="chip' + (gi === me.gi ? ' on' : '') + '" data-act="vchan" data-id="' + gi + '">' + esc(g.name) + '</button>'; }).join('') + '</div>' : '';
    var meta = '<div class="vmeta"><div><b>' + esc(it.title) + '</b><small>' + esc(grp.name) + mins + ' &middot; same topic, channel ' + (me.gi + 1) + ' of ' + me.groups.length + '</small></div>' +
      '<div class="row wrap">' + (me.groups.length > 1 ? '<button class="btn sm" data-act="vnext">Next channel</button>' : '') + (grp.items.length > 1 ? '<button class="btn sm" data-act="vmore">Another from ' + esc(grp.name) + '</button>' : '') + '<button class="btn sm" data-act="vlang">' + (me.lang === 'hi' ? 'In English' : 'हिंदी में') + '</button><button class="btn sm ghost" data-act="vpop">Not playing?</button></div></div>';
    me.playing = it.id; me.cur = it; me.frame = null;
    var go = function () {
      if (V !== me || me.playing !== it.id) return;
      me.host.innerHTML = chips + '<div class="vplayer"><div class="vframe"><iframe src="' + embedURL(it.id) + '" title="' + esc(it.title) + '" sandbox="allow-scripts allow-same-origin allow-presentation" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>' + meta + '</div>' + (note ? '<div class="tipbox" style="margin-top:12px">' + note + '</div>' : '');
      var fr = me.host.querySelector('iframe'); me.frame = fr;
      var hello = function () { try { fr.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), '*'); fr.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'addEventListener', args: ['onStateChange'], id: 1, channel: 'widget' }), '*'); } catch (e) { } };
      fr.addEventListener('load', function () { hello(); var n = 0; var iv = setInterval(function () { if (V !== me || me.frame !== fr || ++n > 8 || me.heard) return clearInterval(iv); hello(); }, 600); });
    };
    /* the main process is told first, and refuses to load or play any other video */
    if (window.fsApi && window.fsApi.allowVideo) window.fsApi.allowVideo(it.id).then(go).catch(go); else go();
  }
  window.addEventListener('message', function (e) {
    var me = V; if (!me || !me.frame || e.source !== me.frame.contentWindow) return; me.heard = true;
    var r = VGuard.decide(e.data, me.playing);
    if (r === 'wrong') { toast('That video is not part of this topic', 'Back to your topic video.', true); renderVideo(); }
    else if (r === 'ended') {
      var it = me.cur;
      me.host.innerHTML = '<div class="tipbox"><b>Video finished.</b> ' + esc(it.title) + '<div style="margin-top:6px" class="muted">Now test yourself on this topic: try the Q&amp;A and the quiz.</div></div><div class="row wrap" style="margin-top:12px"><button class="btn" data-act="vreplay">Watch again</button><button class="btn" data-act="vnext">Try another channel</button></div>';
    }
  });
  actions.vreplay = function () { renderVideo(); };
  /* the student asks FutureSelf's server for a video (topic + optional channel); only the returned list can be played */
  actions.vsearch = function () {
    var box = $('#vres'); if (!box) return;
    var q = (($('#vq') || {}).value || '').trim(), ch = (($('#vch') || {}).value || '').trim();
    if (q.length < 2) { box.innerHTML = '<div class="tipbox">Type what you want to watch.</div>'; return; }
    if (!(window.fsApi && window.fsApi.acct)) { box.innerHTML = '<div class="tipbox">Video search needs the FutureSelf app and your account.</div>'; return; }
    box.innerHTML = '<div class="vload"><span class="spin"></span> Searching...</div>';
    var btn = $('[data-act=vsearch]'); if (btn) btn.disabled = true;
    window.fsApi.acct('videos', { q: q, channel: ch }).then(function (r) {
      if (btn) btn.disabled = false; if (!$('#vres')) return;
      if (!r || !r.ok) { box.innerHTML = '<div class="tipbox">' + esc((r && r.error) || 'Search failed. Try again.') + '</div>'; return; }
      var items = (r.data && r.data.items) || [];
      if (!items.length) { box.innerHTML = '<div class="tipbox">' + esc((r.data && r.data.note) || 'No study video matched that search. Try different words.') + '</div>'; return; }
      S.vres = items;
      box.innerHTML = '<div class="vlist">' + items.map(function (it, i) { return '<div class="vitem"><div><b>' + esc(it.title) + '</b><small>' + esc(it.channel) + (it.sec ? ' &middot; ' + Math.max(1, Math.round(it.sec / 60)) + ' min' : '') + '</small></div><button class="btn sm pri" data-act="vplay" data-id="' + i + '">Play</button></div>'; }).join('') + '</div>';
    }).catch(function () { if (btn) btn.disabled = false; if ($('#vres')) $('#vres').innerHTML = '<div class="tipbox">Search failed. Check your internet connection.</div>'; });
  };
  actions.vplay = function (el) {
    var i = +el.dataset.id, list = S.vres || []; if (!(i >= 0 && i < list.length) || !V) return;
    V.groups = [{ name: 'Your search', items: list.slice() }].concat((V.groups || []).filter(function (g) { return g.name !== 'Your search'; })); V.gi = 0; V.i = i; renderVideo();
    try { V.host.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) { }
  };
  document.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target && (e.target.id === 'vq' || e.target.id === 'vch')) { e.preventDefault(); actions.vsearch(); } });
  function unmountVideo() { if (V && V.host) V.host.innerHTML = ''; V = null; }
  actions.vnext = function () { if (!V || !V.groups.length) return; V.gi = (V.gi + 1) % V.groups.length; V.i = 0; renderVideo(); };
  actions.vchan = function (el) { if (!V) return; var g = +el.dataset.id; if (!(g >= 0 && g < V.groups.length)) return; V.gi = g; V.i = 0; renderVideo(); };
  actions.vmore = function () { if (!V) return; V.i++; renderVideo(); };
  actions.vlang = function () { if (!V) return; mountVideo(V.host, V.t, V.l, V.lang === 'hi' ? 'en' : 'hi'); };
  actions.vretry = function () { if (V) mountVideo(V.host, V.t, V.l, V.lang); };
  actions.vpop = function () { if (!V || !V.cur) return; window.fsApi.openVideo(V.cur.id).then(function (r) { if (r && r.error) toast('Could not open the video', r.error, true); }); };
  function lessonVideoMount() { var c = curLesson; if (c && $('#vhost')) mountVideo($('#vhost'), c.t, c.l, V && V.l === c.l ? V.lang : 'en'); }
  /* video session: timer + questions while watching */
  actions.vsstart = function () {
    var c = curLesson, qa = c.l.qa.slice(0, 5);
    S.vs = { start: Date.now(), startedISO: new Date().toISOString() };
    if (!V || !V.groups || !V.groups.length) lessonVideoMount();
    $('#vsbox').innerHTML = '<div class="vsrun"><div class="row spread wrap"><div class="vstimer" id="vstimer">00:00</div><button class="btn pri" data-act="vsend">End session</button></div>' +
      '<p class="muted" style="margin:14px 0 8px">While you watch, try to answer these in your head or in your notebook. Click a question afterwards to check.</p>' +
      (qa.length ? qa.map(function (x) { return '<details class="qa"><summary>' + fmt(x.q) + '</summary><div>' + fmt(x.a) + '</div></details>'; }).join('') : '<p class="muted">No questions for this topic yet. Write down three things you learned.</p>') +
      '<label class="f" for="vsnote" style="margin-top:12px">Three things I learned</label><textarea class="in" id="vsnote" rows="3" placeholder="Write here, it is just for you"></textarea></div>';
    S.vs.iv = setInterval(function () { var e = $('#vstimer'); if (!e) { clearInterval(S.vs.iv); return; } var sec = Math.floor((Date.now() - S.vs.start) / 1000); e.textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'); }, 1000);
  };
  actions.vsend = function () {
    var c = curLesson, vs = S.vs; if (!vs) return; clearInterval(vs.iv); S.vs = null;
    var sec = Math.round((Date.now() - vs.start) / 1000);
    if (window.fsApi && window.fsApi.closeVideo) window.fsApi.closeVideo().catch(function () { });
    if (sec < 30) { $('#vsbox').innerHTML = ''; return toast('Session too short to count', 'Watch for at least 30 seconds.'); }
    api('/sessions', { method: 'POST', body: { topic_id: c.t.id, lesson_id: c.l.id, subject: c.t.title, planned_min: Math.ceil(sec / 60), actual_sec: sec, completed: true, distractions: 0, lock_mode: 'video', started_at: vs.startedISO } }).then(function () { refreshOrb(); toast('Video session saved', dur(sec / 60) + ' added to your study time'); }).catch(function () { });
    $('#vsbox').innerHTML = '<div class="tipbox" style="margin-top:14px"><b>Nice.</b> ' + dur(sec / 60) + ' watched. Now lock it in: try a practice question.</div><div class="row" style="margin-top:12px"><button class="btn pri" data-act="ltab" data-id="practice">Go to practice</button></div>';
  };
  if (window.fsApi && window.fsApi.onVideoClosed) window.fsApi.onVideoClosed(function () { if (S.vs) toast('Video window closed', 'Your video session timer is still running. End it when you are done.'); });

  /* ---------- practice (write in notebook, photograph, upload) ---------- */
  var LVL_CLS = { Moderate: 'mod', High: 'high', Advanced: 'adv' };
  function practicePane(l) {
    var ps = l.problems || [];
    if (!ps.length) return '<div class="card"><div class="empty">No practice problems for this topic yet.</div></div>';
    return '<div class="card"><h2>Practice problems</h2><p class="muted">Solve these <b>in your notebook</b>, from moderate to advanced. Take a clear photo of each written answer and upload it. You then see the model answer and marking points, and get a score.</p>' +
      '<div class="steps3"><div><b>1</b><span>Write your answer on paper</span></div><div><b>2</b><span>Photograph it in good light</span></div><div><b>3</b><span>Upload and get your score</span></div></div></div>' +
      ps.map(function (p, pi) {
        return '<div class="card prob" data-pi="' + pi + '" style="margin-top:16px"><div class="row spread wrap"><div class="row wrap"><span class="lvl ' + (LVL_CLS[p.level] || '') + '">' + esc(p.level) + '</span><span class="muted">Problem ' + (pi + 1) + ' &middot; ' + p.marks + ' marks</span></div><span class="badge" id="pbest' + pi + '" hidden></span></div>' +
          '<div class="pq">' + fmt(p.q) + '</div>' +
          '<div class="drop" data-pi="' + pi + '"><label class="btn"><input type="file" class="pfile" data-pi="' + pi + '" accept="image/*" multiple hidden>' + ic('plus') + ' Add photos of your answer</label><span class="muted" style="font-size:13px">or drag and drop up to 4 photos here</span><div class="thumbs" id="pth' + pi + '"></div></div>' +
          '<div class="row wrap" style="margin-top:12px"><button class="btn pri" data-act="psubmit" data-pi="' + pi + '" id="psub' + pi + '" disabled>Submit for checking</button></div>' +
          '<div id="pres' + pi + '"></div><div id="phist' + pi + '"></div></div>';
      }).join('');
  }
  function compress(file) {
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onerror = function () { rej(new Error('Could not read the photo')); };
      fr.onload = function () {
        var img = new Image();
        img.onerror = function () { rej(new Error('That file is not a readable image')); };
        img.onload = function () {
          var m = 1600, sc = Math.min(1, m / Math.max(img.width, img.height)), cv = document.createElement('canvas');
          cv.width = Math.round(img.width * sc); cv.height = Math.round(img.height * sc);
          var cx = cv.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(img, 0, 0, cv.width, cv.height);
          res(cv.toDataURL('image/jpeg', 0.82));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  function addPhotos(pi, files) {
    var arr = S.pimgs[pi] = S.pimgs[pi] || [], room = 4 - arr.length;
    if (room <= 0) return toast('Maximum 4 photos', 'Remove one to add another.', true);
    var list = Array.prototype.slice.call(files).filter(function (f) { return /^image\//.test(f.type); }).slice(0, room);
    if (!list.length) return toast('Choose image files', '', true);
    Promise.all(list.map(compress)).then(function (d) { d.forEach(function (x) { arr.push(x); }); drawThumbs(pi); }).catch(function (e) { toast('Photo problem', e.message, true); });
  }
  function drawThumbs(pi) {
    var arr = S.pimgs[pi] || [], box = $('#pth' + pi); if (!box) return;
    box.innerHTML = arr.map(function (u, i) { return '<div class="th"><img src="' + u + '" alt="Your answer photo ' + (i + 1) + '"><button class="x" data-act="pthdel" data-pi="' + pi + '" data-i="' + i + '" aria-label="Remove photo">&times;</button></div>'; }).join('');
    var b = $('#psub' + pi); if (b) b.disabled = !arr.length;
  }
  actions.pthdel = function (el) { S.pimgs[el.dataset.pi].splice(+el.dataset.i, 1); drawThumbs(el.dataset.pi); };
  document.addEventListener('change', function (e) { if (e.target.classList && e.target.classList.contains('pfile')) { addPhotos(e.target.dataset.pi, e.target.files); e.target.value = ''; } });
  document.addEventListener('dragover', function (e) { var d = e.target.closest && e.target.closest('.drop'); if (d) { e.preventDefault(); d.classList.add('over'); } });
  document.addEventListener('dragleave', function (e) { var d = e.target.closest && e.target.closest('.drop'); if (d) d.classList.remove('over'); });
  document.addEventListener('drop', function (e) { var d = e.target.closest && e.target.closest('.drop'); if (d) { e.preventDefault(); d.classList.remove('over'); addPhotos(d.dataset.pi, e.dataTransfer.files); } else if (e.dataTransfer && e.dataTransfer.files.length) e.preventDefault(); });
  function bestBadge(pr) {
    var c = curLesson; if (!pr || !c) return;
    (c.l.problems || []).forEach(function (p, i) { var b = $('#pbest' + i); if (!b) return; var x = pr.best && pr.best[i]; if (x) { b.hidden = false; b.className = 'badge ' + (x.score >= x.max * .7 ? 'ok' : 'warn'); b.textContent = 'Best ' + x.score + '/' + x.max; } });
    c.p.practice = pr;
  }
  function rubricHTML(a, pi, editable) {
    var rub = a.rubric || [];
    return '<div class="rubric">' + rub.map(function (r, i) {
      var got = a.awarded ? a.awarded[i] : null;
      return '<label class="rb"><input type="checkbox" data-ri="' + i + '"' + (got != null && got > 0 ? ' checked' : '') + (editable ? '' : ' disabled') + '><span>' + fmt(r.t) + '</span><em>' + (got != null && !editable ? got + '/' : '') + r.m + '</em></label>';
    }).join('') + '</div>';
  }
  function resultHTML(a, pi) {
    var scored = a.score != null;
    return '<div class="result"><h3>' + (scored ? 'Your score: ' + a.score + '/' + a.max + (a.mode === 'ai' ? ' <span class="badge">AI checked</span>' : ' <span class="badge">Self-checked</span>') : 'Answer received') + '</h3>' +
      (a.feedback ? '<p class="fb">' + esc(a.feedback) + '</p>' : '') +
      '<details class="qa" ' + (scored ? '' : 'open') + '><summary>Model answer</summary><div class="ma">' + fmt(a.model_answer).replace(/\n/g, '<br>') + '</div></details>' +
      '<h4 style="margin:14px 0 6px">Marking points ' + (scored ? '' : '<small class="muted">(tick what your answer covered)</small>') + '</h4>' + rubricHTML(a, pi, !scored) +
      (scored ? '' : '<div class="row wrap" style="margin-top:12px"><button class="btn pri" data-act="pself" data-id="' + a._id + '" data-pi="' + pi + '">Save my score</button>' + (curLesson.ai ? '<button class="btn" data-act="pai" data-id="' + a._id + '" data-pi="' + pi + '">' + ic('spark') + ' Check with AI</button>' : '<span class="muted" style="font-size:13px">AI checking is optional: add your key to .env to turn it on.</span>') + '</div>') + '</div>';
  }
  actions.psubmit = function (el) {
    var c = curLesson, pi = +el.dataset.pi, imgs = S.pimgs[pi] || []; if (!imgs.length) return;
    el.disabled = true; el.textContent = 'Uploading...';
    api('/practice/submit', { method: 'POST', body: { topic_id: c.t.id, lesson_id: c.l.id, pi: pi, images: imgs } }).then(function (a) {
      S.pimgs[pi] = []; drawThumbs(pi); el.textContent = 'Submit for checking'; el.disabled = true;
      $('#pres' + pi).innerHTML = resultHTML(a, pi); c.prompted = true;
      $('#pres' + pi).scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      loadPractice();
    }).catch(function (e) { el.disabled = false; el.textContent = 'Submit for checking'; toast('Upload failed', e.message, true); });
  };
  function scored(r, pi) {
    $('#pres' + pi).innerHTML = resultHTML(r.attempt, pi); bestBadge(r.practice); loadPractice();
    var a = r.attempt; if (a.score >= a.max * .7) { chime(); FX.fireworks(2); toast('Great work', a.score + '/' + a.max + ' marks'); } else toast('Score saved', a.score + '/' + a.max + '. Read the model answer and try again.');
  }
  actions.pself = function (el) {
    var pi = el.dataset.pi, ticks = $$('#pres' + pi + ' .rb input').map(function (x) { return x.checked; });
    api('/practice/' + el.dataset.id + '/score', { method: 'POST', body: { ticks: ticks } }).then(function (r) { scored(r, pi); }).catch(function (e) { toast('Could not save', e.message, true); });
  };
  actions.pai = function (el) {
    var pi = el.dataset.pi; el.disabled = true; el.textContent = 'Reading your answer...';
    api('/practice/' + el.dataset.id + '/ai', { method: 'POST', body: {} }).then(function (r) { scored(r, pi); }).catch(function (e) { el.disabled = false; el.textContent = 'Check with AI'; toast('AI check failed', e.message, true); });
  };
  function loadPractice() {
    var c = curLesson; if (!c || !$('#phist0') && !(c.l.problems || []).length) return;
    api('/practice/' + c.t.id + '/' + c.l.id).then(function (d) {
      c.ai = d.ai; S.pr = d.attempts;
      (c.l.problems || []).forEach(function (p, pi) {
        var box = $('#phist' + pi); if (!box) return;
        var mine = d.attempts.filter(function (a) { return a.pi === pi; });
        box.innerHTML = mine.length ? '<h4 style="margin:18px 0 8px">Your attempts</h4>' + mine.map(function (a) {
          return '<div class="att"><div class="row spread wrap"><span>' + new Date(a.created_at || Date.now()).toLocaleString() + ' &middot; ' + a.files.length + ' photo' + (a.files.length > 1 ? 's' : '') + '</span><span class="row"><b>' + (a.score != null ? a.score + '/' + a.max : 'not scored') + '</b><button class="btn sm" data-act="pview" data-id="' + a._id + '" data-pi="' + pi + '">' + (a.score != null ? 'Review' : 'Score it') + '</button><button class="btn sm ghost" data-act="pdel" data-id="' + a._id + '">Delete</button></span></div><div id="pat' + a._id + '"></div></div>';
        }).join('') : '';
      });
      bestBadge(c.p.practice);
    }).catch(function () { });
  }
  actions.pview = function (el) {
    var a = S.pr.filter(function (x) { return x._id === el.dataset.id; })[0], box = $('#pat' + el.dataset.id); if (!a || !box) return;
    if (box.innerHTML) { box.innerHTML = ''; return; }
    box.innerHTML = '<div class="thumbs" id="pim' + a._id + '"></div>' + resultHTML(a, el.dataset.pi).replace('id="pres', 'id="x');
    var pi = el.dataset.pi;
    box.querySelectorAll('[data-act=pself],[data-act=pai]').forEach(function (b) { b.dataset.pi = pi; });
    a.files.forEach(function (f, i) { api('/practice/' + a._id + '/image/' + i).then(function (r) { var d = document.createElement('div'); d.className = 'th big'; d.innerHTML = '<img alt="Answer photo ' + (i + 1) + '">'; d.firstChild.src = r.data; $('#pim' + a._id).appendChild(d); }); });
  };
  actions.pdel = function (el) { api('/practice/' + el.dataset.id, { method: 'DELETE' }).then(function () { toast('Attempt deleted'); loadPractice(); }); };

  /* ---------- leave-lesson prompt ---------- */
  function leavePrompt(c) {
    if (!c || c.prompted || !(c.l.problems || []).length) return;
    if (Date.now() - c.enter < 60000) return;
    c.prompted = true;
    modal('<div style="text-align:center"><div class="eyebrow">Before you go</div><h2 style="margin:8px 0">Lock it in with one question?</h2><p class="muted" style="margin-bottom:18px">Studying <b>' + esc(c.l.title) + '</b>. Writing one answer in your notebook now makes it stick far better than re-reading. It takes about 5 minutes.</p><div class="row wrap" style="justify-content:center"><a class="btn pri" href="#/lesson/' + c.t.id + '/' + c.l.id + '" data-act="gopractice" data-key="' + esc(c.key) + '">Take a question</a><button class="btn" data-act="fclose2">Later</button></div></div>');
  }
  actions.fclose2 = function () { closeModal(); };
  actions.gopractice = function (el) { S.ltab = 'practice'; S.ltabFor = el.dataset.key; closeModal(); };
  /* the lesson dashboard (tabs + content), used on the lesson page and inside a running session */
  function lessonPanes(t, l, p, inSess) {
      var tabs = [['study', 'Study'], ['qa', 'Q&amp;A (' + l.qa.length + ')'], ['quiz', 'Quiz (' + l.quiz.length + ')'], ['practice', 'Practice (' + (l.problems || []).length + ')'], ['video', 'Videos']];
      var qaHTML = l.qa.length ? l.qa.map(function (x) { return '<details class="qa"><summary>' + fmt(x.q) + '</summary><div>' + fmt(x.a) + '</div></details>'; }).join('') : '<div class="empty">No Q&amp;A for this topic yet.</div>';
      var quizHTML = l.quiz.length ? l.quiz.map(function (q, qi) {
        return '<div class="q" data-q="' + qi + '"><p>' + (qi + 1) + '. ' + fmt(q.q) + '</p>' + q.o.map(function (o, oi) { return '<div class="opt" data-act="pick" data-q="' + qi + '" data-o="' + oi + '">' + fmt(o) + '</div>'; }).join('') + '<div class="why" hidden></div></div>';
      }).join('') + '<div class="row spread wrap"><button class="btn pri" data-act="grade">Check answers</button><span id="score" class="muted">' + (p.quiz ? 'Best score: ' + p.quiz.score + '/' + p.quiz.total : '') + '</span></div>' : '<div class="empty">No quiz for this topic yet.</div>';
      if (inSess) tabs = tabs.filter(function (x) { return x[0] !== 'practice'; });
      return '<div class="tabs" id="ltabs">' + tabs.map(function (x) { return '<button class="tab' + (S.ltab === x[0] ? ' on' : '') + '" data-act="ltab" data-id="' + x[0] + '">' + x[1] + '</button>'; }).join('') + '</div>' +
        '<div class="pane" data-pane="study"' + (S.ltab === 'study' ? '' : ' hidden') + '>' + (l.visuals && l.visuals.length ? '<div class="card visbox"><div class="eyebrow">See it</div>' + Visuals.render(l.visuals) + '</div>' : '') + '<div class="card prose">' + blocksHTML(l.blocks) + '</div><div class="row spread wrap" style="margin-top:14px"><button class="btn" data-act="ltab" data-id="video">' + ic('play') + ' Watch videos</button><button class="btn pri" data-act="ltab" data-id="qa">Next: Q&amp;A ' + ic('arrow') + '</button></div></div>' +
        '<div class="pane" data-pane="qa"' + (S.ltab === 'qa' ? '' : ' hidden') + '><div class="card"><div class="row spread wrap" style="margin-bottom:6px"><h2 style="margin:0">Questions and answers</h2><button class="btn sm" data-act="qaall">Show all answers</button></div><p class="muted" style="margin-bottom:16px">Try to answer each question in your own words first, then click it to check.</p>' + qaHTML + '</div></div>' +
        '<div class="pane" data-pane="quiz"' + (S.ltab === 'quiz' ? '' : ' hidden') + '><div class="card"><h2>Check yourself</h2><div id="quiz">' + quizHTML + '</div></div></div>' +
        '<div class="pane" data-pane="practice"' + (S.ltab === 'practice' ? '' : ' hidden') + '>' + (inSess ? '' : practicePane(l)) + '</div>' +
        '<div class="pane" data-pane="video"' + (S.ltab === 'video' ? '' : ' hidden') + '>' + videoPane(inSess) + '</div>';
  }
  function viewLesson(v, r) {
    return api('/topics/' + r.a).then(function (d) {
      var t = d.topic, all = [];
      t.units.forEach(function (u) { u.lessons.forEach(function (l) { all.push(l); }); });
      var idx = all.map(function (l) { return l.id; }).indexOf(r.b); if (idx < 0) throw new Error('Topic not found');
      var l = all[idx], p = d.progress[l.id] || {}, prev = all[idx - 1], next = all[idx + 1], key = t.id + '/' + l.id;
      curLesson = { t: t, l: l, p: p, ai: d.ai, enter: Date.now(), prompted: false, key: key };
      pendingLeave = curLesson; S.pr = {}; S.pimgs = {}; setTimeout(function () { loadPractice(); if (S.ltab === 'video') lessonVideoMount(); }, 30);
      if (S.ltabFor !== key) { S.ltab = 'study'; S.ltabFor = key; }
      var unit = ''; t.units.forEach(function (u) { if (u.lessons.indexOf(l) > -1 || u.lessons.some(function (x) { return x.id === l.id; })) unit = u.title; });
      v.innerHTML = '<div class="top"><div><a class="eyebrow" href="#/topic/' + t.id + '">&larr; ' + esc(t.title) + '</a><h1 style="margin-top:10px">' + esc(l.title) + '</h1><p class="muted" style="margin-top:4px;font-size:14px">' + esc(unit) + ' &middot; about ' + l.minutes + ' min</p></div></div>' +
        '<div class="lesson-grid"><div>' + lessonPanes(t, l, p, false) + '</div>' +
        '<aside class="sticky"><div class="card tilt"><h3>Study this topic</h3><p class="muted" style="margin:8px 0 16px;font-size:15px">About ' + l.minutes + ' minutes. Lock in and the timer starts.</p><a class="btn pri" style="width:100%" href="#/start?topic=' + t.id + '&lesson=' + l.id + '&min=' + l.minutes + '">' + ic('focus') + ' Study in focus</a>' +
        '<button class="btn" style="width:100%;margin-top:10px" data-act="ltab" data-id="practice">' + ic('check') + ' Practice questions</button>' +
        '<button class="btn" style="width:100%;margin-top:10px" data-act="markdone">' + ic('check') + ' <span id="donelbl">' + (p.done ? 'Completed (undo)' : 'Mark as complete') + '</span></button></div></aside></div>';
    });
  }
  actions.ltab = function (el) {
    S.ltab = el.dataset.id;
    $$('#ltabs .tab').forEach(function (b) { b.classList.toggle('on', b.dataset.id === S.ltab); });
    $$('.pane').forEach(function (p) { p.hidden = p.dataset.pane !== S.ltab; });
    if (S.ltab === 'video') lessonVideoMount(); else if (!S.vs) unmountVideo();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  actions.qaall = function (el) { var ds = $$('details.qa'), open = ds.some(function (d) { return !d.open; }); ds.forEach(function (d) { d.open = open; }); el.textContent = open ? 'Hide all answers' : 'Show all answers'; };
  actions.markdone = function () {
    var c = curLesson, nv = !c.p.done;
    api('/progress', { method: 'POST', body: { topic_id: c.t.id, lesson_id: c.l.id, done: nv } }).then(function (r) { c.p.done = r.done; $('#donelbl').textContent = r.done ? 'Completed (undo)' : 'Mark as complete'; toast(r.done ? 'Lesson completed' : 'Marked as not done'); if (r.done) chime(); });
  };
  actions.pick = function (el) {
    if ($('#quiz').dataset.graded) return;
    $$('.opt[data-q="' + el.dataset.q + '"]').forEach(function (o) { o.classList.remove('sel'); }); el.classList.add('sel');
  };
  actions.grade = function () {
    var c = curLesson, score = 0, box = $('#quiz');
    var unanswered = c.l.quiz.some(function (q, i) { return !$('.opt.sel[data-q="' + i + '"]', box); });
    if (unanswered) return toast('Answer every question first', '', true);
    box.dataset.graded = 1;
    c.l.quiz.forEach(function (q, i) {
      var sel = $('.opt.sel[data-q="' + i + '"]', box), si = +sel.dataset.o, ok = si === q.a;
      if (ok) score++;
      $$('.opt[data-q="' + i + '"]', box).forEach(function (o) { var oi = +o.dataset.o; o.classList.remove('sel'); if (oi === q.a) o.classList.add('right'); else if (oi === si) o.classList.add('wrong'); });
      var w = $('.q[data-q="' + i + '"] .why', box); w.hidden = false; w.textContent = (ok ? 'Correct. ' : 'Not quite. ') + q.why;
    });
    $('#score').textContent = 'You scored ' + score + '/' + c.l.quiz.length;
    $('[data-act=grade]').textContent = 'Try again'; $('[data-act=grade]').dataset.act = 'retry';
    $$('.q', box).forEach(function (q, i) { var sel = c.l.quiz[i] && $('.opt[data-q="' + i + '"].right', box); var chosen = $('.opt[data-q="' + i + '"].wrong', box); if (sel && !chosen) { var r = sel.getBoundingClientRect(); FX.burst(r.left + 30, r.top + r.height / 2, 14, { speed: 240, gravity: 120 }); } });
    if (score === c.l.quiz.length) { chime(); FS3D.ok && FS3D.burst(); FX.confetti(innerWidth / 2, innerHeight * 0.6, 90); setTimeout(function () { FX.fireworks(3); }, 300); }
    api('/progress', { method: 'POST', body: { topic_id: c.t.id, lesson_id: c.l.id, quiz: { score: score, total: c.l.quiz.length } } }).catch(function () { });
  };
  actions.retry = function () { S.ltab = 'quiz'; go(); };

  /* ---------- timetable ---------- */
  var weekStart = monday(new Date()), editing = null;
  function viewTimetable(v) {
    return api('/blocks').then(function (b) {
      S.blocks = b;
      var days = [], total = 0, todayIso = iso(new Date());
      for (var i = 0; i < 7; i++) days.push(addDays(weekStart, i));
      var cols = days.map(function (d) {
        var bl = dayBlocks(d), isToday = iso(d) === todayIso; bl.forEach(function (x) { total += x.minutes; });
        return '<div class="day' + (isToday ? ' today' : '') + '"><div class="dh"><b>' + DAYS[wd(d)] + '</b><span>' + d.getDate() + ' ' + d.toLocaleDateString(undefined, { month: 'short' }) + '</span></div>' +
          bl.map(function (x) {
            return '<button class="blk" style="--c:' + esc(x.color) + '" data-act="editblock" data-id="' + x._id + '" data-date="' + iso(d) + '"><b>' + esc(x.subject) + '</b><small>' + x.start + ' - ' + hhmm(tmin(x.start) + x.minutes) + ' &middot; ' + x.minutes + 'm ' + (x.kind === 'repeat' ? '&#8635;' : '') + '</small></button>';
          }).join('') + '<button class="add" data-act="addblock" data-date="' + iso(d) + '">+ Add</button></div>';
      }).join('');
      var end = addDays(weekStart, 6);
      v.innerHTML = '<div class="top"><div><div class="eyebrow">Timetable</div><h1>Plan your week</h1><p class="muted">Choose the subject, day or date, start time and minutes. Each block sends you a reminder.</p></div><button class="btn pri" data-act="addblock">' + ic('plus') + ' New study block</button></div>' +
        '<div class="row spread wrap" style="margin-bottom:16px"><div class="row"><button class="btn sm" data-act="wk" data-id="-7">&larr;</button><button class="btn sm" data-act="wk" data-id="0">This week</button><button class="btn sm" data-act="wk" data-id="7">&rarr;</button><b style="margin-left:8px">' + weekStart.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) + ' - ' + end.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) + '</b></div><span class="badge">' + dur(total) + ' planned this week</span></div><div class="week">' + cols + '</div>';
    });
  }
  actions.wk = function (el) { var n = +el.dataset.id; weekStart = n === 0 ? monday(new Date()) : addDays(weekStart, n); go(); };
  var COLORS = ['#7C5CFF', '#2DE2E6', '#FFC857', '#3DDC97', '#FF5C7A', '#FF8A4C'];
  actions.addblock = function (el) { blockModal(null, { date: el.dataset && el.dataset.date, topic: el.dataset && el.dataset.topic }); };
  actions.editblock = function (el) { var b = S.blocks.filter(function (x) { return x._id === el.dataset.id; })[0]; if (b) blockModal(b, { date: el.dataset.date }); };
  function blockModal(b, pre) {
    pre = pre || {}; editing = b ? b._id : null;
    var tid = b ? b.topic_id : (pre.topic || ''), isRep = b ? b.kind === 'repeat' : false;
    var st = { kind: isRep ? 'repeat' : 'once', days: b ? (b.days || []).slice() : [], color: b ? b.color : COLORS[0], lock: b ? b.lock_mode : (S.user.settings.default_lock || 'focus'), minutes: b ? b.minutes : 30 };
    window.__bm = st;
    var topicName = tid && topicById(tid) ? topicById(tid).title : '';
    modal('<h2>' + (b ? 'Edit study block' : 'New study block') + '</h2>' +
      '<div class="fld"><label class="f" for="bt">Subject / topic</label><select class="in" id="bt"><option value="">Custom subject</option>' + topicOpts(tid) + '</select></div>' +
      '<div class="fld"><label class="f" for="bs">Subject name</label><input class="in" id="bs" maxlength="60" placeholder="e.g. Discrete Mathematics" value="' + esc(b ? b.subject : topicName) + '"></div>' +
      '<div class="fld"><div class="seg" id="bk"><button data-act="bkind" data-id="once" class="' + (isRep ? '' : 'on') + '">One date</button><button data-act="bkind" data-id="repeat" class="' + (isRep ? 'on' : '') + '">Repeats weekly</button></div></div>' +
      '<div class="fld" id="fdate"' + (isRep ? ' hidden' : '') + '><label class="f" for="bd">Date</label><input class="in" type="date" id="bd" value="' + esc(b && b.date ? b.date : (pre.date || iso(new Date()))) + '"></div>' +
      '<div class="fld" id="fdays"' + (isRep ? '' : ' hidden') + '><label class="f">Days</label><div class="days">' + DAYS.map(function (d, i) { return '<button data-act="bday" data-id="' + i + '" class="' + (st.days.indexOf(i) > -1 ? 'on' : '') + '" aria-label="' + d + '">' + d.charAt(0) + '</button>'; }).join('') + '</div></div>' +
      '<div class="grid g2"><div class="fld"><label class="f" for="bh">Start time</label><input class="in" type="time" id="bh" value="' + (b ? b.start : '18:00') + '"></div><div class="fld"><label class="f" for="bm">Minutes</label><input class="in" type="number" id="bm" min="5" max="240" step="5" value="' + st.minutes + '"></div></div>' +
      '<div class="chips" style="margin:-6px 0 16px">' + [20, 25, 30, 45, 60, 90].map(function (m) { return '<button class="chip" data-act="bmin" data-id="' + m + '">' + m + ' min</button>'; }).join('') + '</div>' +
      '<div class="grid g2"><div class="fld"><label class="f" for="br">Remind me</label><select class="in" id="br">' + [[0, 'At start time'], [5, '5 min before'], [10, '10 min before'], [15, '15 min before'], [30, '30 min before']].map(function (r) { return '<option value="' + r[0] + '"' + ((b ? b.remind_before : 10) === r[0] ? ' selected' : '') + '>' + r[1] + '</option>'; }).join('') + '</select></div>' +
      '<div class="fld"><label class="f" for="bl">Lock mode</label><select class="in" id="bl">' + Object.keys(LOCKS).map(function (k) { return '<option value="' + k + '"' + (k === st.lock ? ' selected' : '') + '>' + LOCKS[k][0] + '</option>'; }).join('') + '</select></div></div>' +
      '<div class="fld"><label class="f">Colour</label><div class="chips" id="bc">' + COLORS.map(function (c) { return '<button class="chip' + (c === st.color ? ' on' : '') + '" data-act="bcol" data-id="' + c + '" style="border-color:' + c + ';color:' + c + '" aria-label="colour ' + c + '">&#9679;</button>'; }).join('') + '</div></div>' +
      '<div class="err" id="berr" role="alert"></div><div class="acts">' + (b ? '<button class="btn danger" data-act="bdel" style="margin-right:auto">' + ic('trash') + ' Delete</button>' : '') + '<button class="btn ghost" data-act="close">Cancel</button><button class="btn pri" data-act="bsave">Save block</button></div>');
    $('#bt').addEventListener('change', function () { var t = topicById(this.value); if (t) $('#bs').value = t.title; });
  }
  actions.bkind = function (el) { var st = window.__bm; st.kind = el.dataset.id; $$('#bk button').forEach(function (b) { b.classList.toggle('on', b === el); }); $('#fdate').hidden = st.kind === 'repeat'; $('#fdays').hidden = st.kind !== 'repeat'; };
  actions.bday = function (el) { var st = window.__bm, i = +el.dataset.id, k = st.days.indexOf(i); if (k > -1) st.days.splice(k, 1); else st.days.push(i); el.classList.toggle('on'); };
  actions.bmin = function (el) { $('#bm').value = el.dataset.id; };
  actions.bcol = function (el) { window.__bm.color = el.dataset.id; $$('#bc .chip').forEach(function (c) { c.classList.toggle('on', c === el); }); };
  actions.close = closeModal;
  actions.ovl = function (el, e) { if (e.target === el && !modalLock) closeModal(); };
  actions.bdel = function () { if (!editing) return; api('/blocks/' + editing, { method: 'DELETE' }).then(function () { closeModal(); toast('Block deleted'); go(); }); };
  function clash(body) {
    var dates = [];
    if (body.kind === 'once') dates.push(parseISO(body.date)); else for (var i = 0; i < 14; i++) { var d = addDays(new Date(), i); if (body.days.indexOf(wd(d)) > -1) dates.push(d); }
    var s = tmin(body.start), e = s + body.minutes;
    for (var k = 0; k < dates.length; k++) {
      var hit = dayBlocks(dates[k]).filter(function (o) { return o._id !== editing && tmin(o.start) < e && tmin(o.start) + o.minutes > s; })[0];
      if (hit) return hit.subject + ' (' + hit.start + ' - ' + hhmm(tmin(hit.start) + hit.minutes) + ') on ' + dates[k].toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'short' });
    }
    return '';
  }
  var clashOK = false;
  actions.bsave = function () {
    var st = window.__bm, body = { subject: $('#bs').value, topic_id: $('#bt').value || null, kind: st.kind, date: $('#bd').value, days: st.days, start: $('#bh').value, minutes: +$('#bm').value, remind_before: +$('#br').value, lock_mode: $('#bl').value, color: st.color };
    if (!clashOK) { var c = clash(body); if (c) { $('#berr').textContent = 'This overlaps with ' + c + '. Press Save again to keep both.'; clashOK = true; return; } }
    clashOK = false;
    api(editing ? '/blocks/' + editing : '/blocks', { method: editing ? 'PUT' : 'POST', body: body }).then(function () { closeModal(); toast('Study block saved', body.subject + ' at ' + body.start); go(); }).catch(function (e) { $('#berr').textContent = e.message; });
  };

  /* ---------- start a session ---------- */
  actions.startblock = function (el) {
    var b = S.blocks.filter(function (x) { return x._id === el.dataset.id; })[0]; if (!b) return;
    var topic = b.topic_id && topicById(b.topic_id), lesson = '';
    var p = topic ? api('/topics/' + b.topic_id).then(function (d) { var all = []; d.topic.units.forEach(function (u) { u.lessons.forEach(function (l) { all.push(l); }); }); var n = all.filter(function (l) { return !(d.progress[l.id] && d.progress[l.id].done); })[0]; return n ? n.id : ''; }) : Promise.resolve('');
    p.then(function (lid) { beginSession({ topic_id: b.topic_id, lesson_id: lid, subject: b.subject, minutes: b.minutes, lock: b.lock_mode, block_id: b._id }); });
  };
  var startState = { minutes: 25, lock: 'focus' };
  function viewStart(v, r) {
    var q = r.q; startState.lock = S.user.settings.default_lock || 'focus'; if (q.min) startState.minutes = +q.min || 25; else startState.minutes = 25;
    return Promise.all(q.topic ? [api('/topics/' + q.topic)] : []).then(function (res) {
      var topicSel = q.topic || '', lessons = [];
      if (res[0]) res[0].topic.units.forEach(function (u) { u.lessons.forEach(function (l) { lessons.push(l); }); });
      v.innerHTML = '<div class="view narrow" style="animation:none"><div class="top"><div><div class="eyebrow">Focus</div><h1>Start a study session</h1><p class="muted">Pick what you are studying, for how long, and how strict the lock should be.</p></div></div>' +
        '<div class="card"><div class="fld"><label class="f" for="st">Topic</label><select class="in" id="st"><option value="">Custom subject</option>' + topicOpts(topicSel) + '</select></div>' +
        '<div class="fld" id="slw"' + (lessons.length ? '' : ' hidden') + '><label class="f" for="sl">Lesson</label><select class="in" id="sl">' + lessons.map(function (l) { return '<option value="' + l.id + '"' + (l.id === q.lesson ? ' selected' : '') + '>' + esc(l.title) + '</option>'; }).join('') + '</select></div>' +
        '<div class="fld"><label class="f" for="ss">What are you studying?</label><input class="in" id="ss" maxlength="60" placeholder="e.g. Theory of Computation" value="' + esc(res[0] ? res[0].topic.title : '') + '"></div>' +
        '<div class="fld"><label class="f">Minutes</label><div class="chips">' + [15, 20, 25, 30, 45, 60, 90].map(function (m) { return '<button class="chip' + (m === startState.minutes ? ' on' : '') + '" data-act="smin" data-id="' + m + '">' + m + '</button>'; }).join('') + '<input class="in" id="sm" type="number" min="1" max="240" value="' + startState.minutes + '" style="width:96px;padding:8px 12px" aria-label="Custom minutes"></div></div>' +
        '<div class="fld"><label class="f">Lock mode</label><div class="lockcards">' + Object.keys(LOCKS).map(function (k) { return '<button class="lockcard' + (k === startState.lock ? ' on' : '') + '" data-act="slock" data-id="' + k + '"><b>' + LOCKS[k][0] + '</b><small>' + LOCKS[k][1] + '</small></button>'; }).join('') + '</div></div>' +
        '<div class="err" id="serr"></div><button class="btn pri" style="width:100%;padding:16px" data-act="sbegin">' + ic('play') + ' Begin session</button></div></div>';
      $('#st').addEventListener('change', function () { location.hash = '#/start' + (this.value ? '?topic=' + this.value + '&min=' + startState.minutes : ''); });
    });
  }
  actions.smin = function (el) { startState.minutes = +el.dataset.id; $('#sm').value = startState.minutes; $$('.chip[data-act=smin]').forEach(function (c) { c.classList.toggle('on', c === el); }); };
  actions.slock = function (el) { startState.lock = el.dataset.id; $$('.lockcard').forEach(function (c) { c.classList.toggle('on', c === el); }); };
  actions.sbegin = function () {
    var m = Math.round(+$('#sm').value), subj = $('#ss').value.trim(), tid = $('#st').value, sl = $('#sl') && !$('#slw').hidden ? $('#sl').value : '';
    if (!(m >= 1 && m <= 240)) return ($('#serr').textContent = 'Choose between 1 and 240 minutes');
    if (!subj) return ($('#serr').textContent = 'Tell us what you are studying');
    beginSession({ topic_id: tid || null, lesson_id: sl || null, subject: subj, minutes: m, lock: startState.lock });
  };

  /* ---------- focus session ---------- */
  var wake = null, tickTimer = null;
  function beginSession(c) {
    if (window.FSX && FSX.canStart && FSX.canStart(c.lock) === false) return; // on the phone: the permissions the lock needs must be on first
    S.session = { topic_id: c.topic_id, lesson_id: c.lesson_id, subject: c.subject, minutes: c.minutes, lock: c.lock, block_id: c.block_id || null, startedAt: Date.now(), startedISO: new Date().toISOString(), plannedMs: c.minutes * 60000, pausedMs: 0, pausedAt: null, distractions: 0, awaySince: null, ended: false };
    S.session.blocked = 0;
    if (window.fsApi && window.fsApi.isApp) {
      S.session.native = true;
      window.fsApi.lockStart({ mode: c.lock, apps: S.user.settings.blocklist_apps, sites: S.user.settings.blocklist_sites, subject: c.subject, topicId: c.topic_id || '', endsAt: Date.now() + c.minutes * 60000 }).then(function (r) { if (r && r.locked === false && r.reason && c.lock !== 'gentle') toast('The phone lock is not active', r.reason, true); }).catch(function () { });
    } else {
      if (c.lock !== 'gentle') { var el = document.documentElement; (el.requestFullscreen || el.webkitRequestFullscreen || function () { return Promise.resolve(); }).call(el).catch(function () { }); }
      try { if (navigator.wakeLock) navigator.wakeLock.request('screen').then(function (w) { wake = w; }).catch(function () { }); } catch (e) { }
      window.addEventListener('beforeunload', guardUnload);
      document.addEventListener('visibilitychange', onVis); window.addEventListener('blur', onAway); window.addEventListener('focus', onBack); document.addEventListener('fullscreenchange', onFs);
    }
    pushState();
    location.hash = '#/focus';
  }
  /* tell the phone link (and so the Android app) what this session is doing */
  function pushState() {
    if (!(window.fsApi && window.fsApi.sessionState)) return; var s = S.session;
    if (s && s.remote) return; // a session that started on the other device is only followed, never announced again
    if (!s || s.ended) { window.fsApi.sessionState({ active: false }).catch(function () { }); return; }
    window.fsApi.sessionState({ active: true, subject: s.subject, topicId: s.topic_id || '', lock: s.lock, startedAt: s.startedAt, endsAt: s.startedAt + s.plannedMs + s.pausedMs + (s.pausedAt ? Date.now() - s.pausedAt : 0), paused: !!s.pausedAt }).catch(function () { });
  }
  function guardUnload(e) { if (S.session && !S.session.ended) { e.preventDefault(); e.returnValue = ''; } }
  function onVis() { document.hidden ? onAway() : onBack(); }
  function onAway() { var s = S.session; if (s && !s.ended && !s.awaySince) s.awaySince = Date.now(); }
  function onBack() {
    var s = S.session; if (!s || s.ended || !s.awaySince) return;
    var away = Date.now() - s.awaySince; s.awaySince = null; if (away < 1500) return;
    registerDistraction(Math.round(away / 1000));
  }
  function onFs() { var s = S.session; if (s && !s.ended && s.lock !== 'gentle' && !document.fullscreenElement && !s.fsPrompt) { registerDistraction(0, true); } }
  if (window.fsApi && window.fsApi.onDistraction) {
    window.fsApi.onDistraction(function (d) {
      var s = S.session; if (!s || s.ended) return;
      if (d.kind === 'app' || d.kind === 'site') {
        s.blocked = (s.blocked || 0) + 1;
        registerDistraction(0, false, 'Closed ' + d.name + (d.site ? ' (it was showing ' + d.site + ')' : ''));
      } else registerDistraction(0, false, 'You switched to another window.');
    });
  }
  function registerDistraction(secs, fsExit, note) {
    var s = S.session; s.distractions++; FS3D.ok && FS3D.flash(); beep(220, 0.4, 0.08);
    var dc = $('#fdist'); if (dc) dc.textContent = s.distractions + (s.distractions === 1 ? ' distraction' : ' distractions');
    if (s.lock === 'gentle') return toast('Back to focus', note || (secs ? 'You were away for ' + secs + 's.' : ''), true);
    showComeback(secs, fsExit, note);
  }
  function showComeback(secs, fsExit, note) {
    var s = S.session; if (!s || $('.comeback')) return;
    var d = document.createElement('div'); d.className = 'comeback';
    d.innerHTML = '<div><h1 style="margin-bottom:12px">Eyes back on the goal</h1><p class="muted" style="font-size:18px;margin-bottom:26px">' + (note ? note + ' ' : secs ? 'You left for ' + secs + ' seconds. ' : 'You left fullscreen. ') + 'That is distraction number ' + s.distractions + '. The timer is still running.</p><button class="btn pri" style="padding:16px 34px" id="cbback">Back to studying</button></div>';
    document.body.appendChild(d);
    $('#cbback').onclick = function () { d.remove(); var el = document.documentElement; if (!s.native && s.lock !== 'gentle' && !document.fullscreenElement) (el.requestFullscreen || function () { return Promise.resolve(); }).call(el).catch(function () { }); };
  }
  function elapsed() { var s = S.session; return Math.max(0, (s.pausedAt || Date.now()) - s.startedAt - s.pausedMs); }
  function renderFocus() {
    var s = S.session; S.shell = false; FS3D.ok && FS3D.setMode('focus'); if (s.topic_id) SubjectFX.set(s.topic_id); else SubjectFX.clear();
    var topic = s.topic_id && topicById(s.topic_id);
    $('#app').innerHTML = '<div class="focus"><div class="meta"><span class="badge">' + ic('lock').replace('class="i"', 'class="i" style="width:14px;height:14px"') + ' ' + LOCKS[s.lock][0] + ' lock</span><span class="badge" id="fdist">' + s.distractions + ' distractions</span></div>' +
      '<div class="eyebrow" style="margin-bottom:10px">Now studying</div><div class="time" id="ftime">' + mmss(s.plannedMs - elapsed()) + '</div><div class="what"><b>' + esc(s.subject) + '</b>' + (topic && s.lesson_id ? ' &middot; <span id="flesson"></span>' : '') + '</div>' +
      '<div class="ctrl">' + (s.topic_id && s.lesson_id ? '<button class="btn" data-act="fdrawer">' + ic('book') + ' Open lesson</button><button class="btn" data-act="fvideo">' + ic('play') + ' Watch video</button>' : '') + (s.lock === 'gentle' ? '<button class="btn" data-act="fpause" id="fpause">Pause</button>' : '') +
      (s.remote ? '<button class="btn ghost sm" data-act="fend">Emergency release</button>' : s.lock === 'strict' ? '<button class="btn ghost sm" data-act="fend">Emergency exit</button>' : '<button class="btn danger" data-act="fend">End early</button>') + '</div>' + (s.remote ? '<p class="muted" style="margin-top:18px">Started on your phone. This PC unlocks when that session ends.</p>' : '') + '</div>';
    if (s.topic_id && s.lesson_id) api('/topics/' + s.topic_id).then(function (d) { s.topicData = d.topic; d.topic.units.forEach(function (u) { u.lessons.forEach(function (l) { if (l.id === s.lesson_id) { s.lessonData = l; var f = $('#flesson'); if (f) f.textContent = l.title; } }); }); });
    clearInterval(tickTimer); tick(); tickTimer = setInterval(tick, 250);
  }
  function tick() {
    var s = S.session; if (!s || s.ended) return clearInterval(tickTimer);
    var rem = s.plannedMs - elapsed(), t = $('#ftime');
    if (t) t.textContent = mmss(rem); document.title = (s.pausedAt ? 'Paused' : mmss(rem)) + ' | FutureSelf';
    FS3D.ok && FS3D.setProgress(elapsed() / s.plannedMs);
    if (rem <= 0) { if (s.remote) endRemote('Phone session finished'); else finishSession(true); }
  }
  actions.fpause = function () { var s = S.session; if (s.pausedAt) { s.pausedMs += Date.now() - s.pausedAt; s.pausedAt = null; $('#fpause').textContent = 'Pause'; } else { s.pausedAt = Date.now(); $('#fpause').textContent = 'Resume'; } pushState(); };
  /* inside a session the student gets the same lesson dashboard (visuals, notes, Q&A, quiz, video) as on the lesson page */
  function openDrawer(tab) {
    var s = S.session, l = s.lessonData, t = s.topicData; if (!l || !t) return toast('Lesson is still loading');
    $$('.lessonov').forEach(function (x) { x.remove(); }); unmountVideo();
    curLesson = { t: t, l: l, p: {}, ai: false, enter: Date.now(), prompted: true, key: t.id + '/' + l.id }; pendingLeave = null;
    S.ltab = tab === 'video' ? 'video' : 'study'; S.ltabFor = curLesson.key;
    var d = document.createElement('div'); d.className = 'lessonov';
    d.innerHTML = '<div class="lessonov-in"><div class="row spread" style="margin-bottom:14px"><div><div class="eyebrow">' + esc(t.title) + '</div><h1 style="margin-top:6px">' + esc(l.title) + '</h1></div><button class="btn" id="dclose">' + ic('x') + ' Back to timer</button></div>' + lessonPanes(t, l, {}, true) + '</div>';
    document.body.appendChild(d); $('#dclose').onclick = function () { unmountVideo(); d.remove(); };
    if (S.ltab === 'video') lessonVideoMount();
  }
  actions.fdrawer = function () { openDrawer('lesson'); };
  actions.fvideo = function () { openDrawer('video'); };
  actions.fend = function () {
    var s = S.session;
    if (s.remote) {
      s.fsPrompt = true; modal('<h2>Emergency release</h2><p class="muted" style="margin-bottom:16px">Your phone started this session. Only release this PC if you really have to. Type <b>EXIT</b> and wait 10 seconds.</p><div class="fld"><input class="in" id="xcode" autocomplete="off" placeholder="Type EXIT"></div><div class="acts"><button class="btn pri" data-act="fclose">Keep studying</button><button class="btn danger" id="xgo" disabled data-act="frel">Wait 10s</button></div>', true);
      var n2 = 10, iv2 = setInterval(function () { n2--; var b = $('#xgo'); if (!b) return clearInterval(iv2); if (n2 <= 0) { clearInterval(iv2); b.textContent = 'Release this PC'; b.dataset.ready = 1; chk2(); } else b.textContent = 'Wait ' + n2 + 's'; }, 1000);
      function chk2() { var b = $('#xgo'); if (b) b.disabled = !(b.dataset.ready && $('#xcode').value.trim().toUpperCase() === 'EXIT'); }
      $('#xcode').addEventListener('input', chk2); return;
    }
    if (s.lock === 'strict') {
      s.fsPrompt = true; modal('<h2>Emergency exit</h2><p class="muted" style="margin-bottom:16px">Strict mode is meant to be hard to quit. Type <b>EXIT</b> and wait 10 seconds if you really must stop.</p><div class="fld"><input class="in" id="xcode" autocomplete="off" placeholder="Type EXIT"></div><div class="acts"><button class="btn pri" data-act="fclose">Keep studying</button><button class="btn danger" id="xgo" disabled data-act="fgo">Wait 10s</button></div>', true);
      var n = 10, iv = setInterval(function () { n--; var b = $('#xgo'); if (!b) return clearInterval(iv); if (n <= 0) { clearInterval(iv); b.textContent = 'End session'; b.dataset.ready = 1; chk(); } else b.textContent = 'Wait ' + n + 's'; }, 1000);
      function chk() { var b = $('#xgo'); if (b) b.disabled = !(b.dataset.ready && $('#xcode').value.trim().toUpperCase() === 'EXIT'); }
      $('#xcode').addEventListener('input', chk); return;
    }
    modal('<h2>End this session early?</h2><p class="muted">You have studied ' + dur(elapsed() / 60000) + ' of ' + s.minutes + ' minutes. Early sessions still count towards your total but are marked incomplete.</p><div class="acts"><button class="btn pri" data-act="fclose">Keep going</button><button class="btn danger" data-act="fgo">End session</button></div>', true);
  };
  actions.fclose = function () { var s = S.session; if (s) s.fsPrompt = false; closeModal(); };
  actions.fgo = function () { closeModal(); finishSession(false); };

  /* a study session that started on the other device (the phone): this PC locks too and unlocks when it ends */
  var remoteSkip = 0;
  actions.frel = function () { var s = S.session; if (s && s.remote) { remoteSkip = s.startedAt; closeModal(); endRemote('This PC is released'); } };
  function beginRemote(st) {
    var now = Date.now(), ends = +st.endsAt || now + 60000, started = Math.min(+st.startedAt || now, now);
    S.session = { remote: true, native: true, topic_id: null, lesson_id: null, subject: st.subject || 'Study session', minutes: Math.max(1, Math.round((ends - started) / 60000)), lock: st.lock === 'strict' ? 'strict' : 'focus', block_id: null, startedAt: started, startedISO: new Date(started).toISOString(), plannedMs: Math.max(60000, ends - started), pausedMs: 0, pausedAt: null, distractions: 0, awaySince: null, ended: false, blocked: 0 };
    window.fsApi.lockStart({ mode: S.session.lock, apps: S.user && S.user.settings ? S.user.settings.blocklist_apps : '', sites: S.user && S.user.settings ? S.user.settings.blocklist_sites : '', subject: S.session.subject, topicId: '', endsAt: ends }).catch(function () { });
    closeModal(); location.hash = '#/focus'; renderFocus();
  }
  function endRemote(msg) {
    var s = S.session; if (!s || !s.remote || s.ended) return;
    s.ended = true; clearInterval(tickTimer);
    try { window.fsApi.lockStop().catch(function () { }); } catch (e) { }
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { }
    unmountVideo(); $$('.comeback,.drawer,.lessonov').forEach(function (x) { x.remove(); }); closeModal();
    document.title = 'FutureSelf | Study goals, timetable and focus';
    S.session = null; S.shell = true; location.hash = '#/'; if (typeof go === 'function') setTimeout(go, 50);
    toast(msg || 'Phone session finished', 'This PC is unlocked.');
  }
  function onRemote(st) {
    var s = S.session && S.session.ended && !S.session.remote ? null : S.session, on = !!(st && st.restrict && st.src === 'phone' && st.active); // a finished session (summary still open) does not block a new lock
    if (on && st.startedAt && st.startedAt === remoteSkip) on = false;
    if (on && !s && S.user) return beginRemote(st);
    if (on && s && s.remote && !s.ended && st.endsAt) { s.plannedMs = Math.max(60000, st.endsAt - s.startedAt); return; }
    if (!on && s && s.remote && !s.ended) endRemote('Phone session finished');
  }
  if (window.fsApi && window.fsApi.onRemote) window.fsApi.onRemote(onRemote);

  function finishSession(completed) {
    var s = S.session; if (!s || s.ended) return;
    s.ended = true; clearInterval(tickTimer); pushState();
    var actual = Math.min(elapsed(), s.plannedMs) / 1000;
    if (s.native) { window.fsApi.lockStop().catch(function () { }); }
    window.removeEventListener('beforeunload', guardUnload); document.removeEventListener('visibilitychange', onVis); window.removeEventListener('blur', onAway); window.removeEventListener('focus', onBack); document.removeEventListener('fullscreenchange', onFs);
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { } try { wake && wake.release(); } catch (e) { }
    unmountVideo(); $$('.comeback,.drawer,.lessonov').forEach(function (x) { x.remove(); });
    document.title = 'FutureSelf | Study goals, timetable and focus';
    if (completed) { chime(); FS3D.ok && FS3D.burst(); FX.confetti(innerWidth / 2, innerHeight * 0.55, 110); setTimeout(function () { FX.fireworks(s.distractions === 0 ? 5 : 2); }, 250); }
    if (completed && s.block_id) { var m = doneMap(); m[s.block_id + iso(new Date())] = 1; ls('fs_done', JSON.stringify(m)); }
    api('/sessions', { method: 'POST', body: { topic_id: s.topic_id, lesson_id: s.lesson_id, subject: s.subject, planned_min: s.minutes, actual_sec: Math.round(actual), completed: completed, distractions: s.distractions, blocked: s.blocked || 0, lock_mode: s.lock, block_id: s.block_id, started_at: s.startedISO } }).then(function () { refreshOrb(); }).catch(function () { toast('Could not save the session', 'Check your connection.', true); });
    var good = s.distractions === 0;
    modal('<div style="text-align:center"><div class="eyebrow">' + (completed ? 'Session complete' : 'Session ended early') + '</div><h1 style="margin:10px 0 8px" class="grad-text">' + dur(Math.max(1, actual / 60)) + ' of focus</h1><p class="muted" style="margin-bottom:22px">' + (completed ? (good ? 'Zero distractions. That is the kind of session that builds a future self.' : 'Finished with ' + s.distractions + ' distraction' + (s.distractions === 1 ? '' : 's') + '. Try for fewer next time.') : 'Every minute counts. Come back when you are ready.') + '</p>' +
      '<div class="row wrap" style="justify-content:center">' + (s.topic_id && s.lesson_id ? '<button class="btn pri" data-act="sumdone">' + ic('check') + ' Mark lesson complete</button><a class="btn" href="#/lesson/' + s.topic_id + '/' + s.lesson_id + '" data-act="sumpractice" data-key="' + esc(s.topic_id + '/' + s.lesson_id) + '">Take a practice question</a>' : '') + '<button class="btn" data-act="sumclose">Back to home</button></div></div>', true);
    s.summary = true;
  }
  actions.sumdone = function (el) { var s = S.session; api('/progress', { method: 'POST', body: { topic_id: s.topic_id, lesson_id: s.lesson_id, done: true } }).then(function () { toast('Lesson marked complete'); el.disabled = true; var r = el.getBoundingClientRect(); FX.confetti(r.left + r.width / 2, r.top, 50); FX.burst(r.left + r.width / 2, r.top + 10, 24); refreshOrb(); }); };
  actions.sumpractice = function (el) { S.ltab = 'practice'; S.ltabFor = el.dataset.key; closeModal(); S.session = null; };
  actions.sumclose = function (el) { closeModal(); S.session = null; S.user && api('/topics').then(function (t) { S.topics = t; }).catch(function () { }); if (el.tagName !== 'A') location.hash = '#/'; };

  /* ---------- progress ---------- */
  function viewProgress(v) {
    return api('/stats').then(function (st) {
      var max = Math.max.apply(null, st.last7.map(function (d) { return d.minutes; }).concat([30]));
      var bars = st.last7.map(function (d) { var dt = parseISO(d.date); return '<div class="col"><em>' + (d.minutes || '') + '</em><div class="b" style="height:' + Math.max(2, Math.round(100 * d.minutes / max * 1.3)) + 'px"></div><small>' + DAYS[wd(dt)] + '</small></div>'; }).join('');
      var start = addDays(monday(new Date()), -7 * 12), cells = '', todayI = iso(new Date());
      for (var i = 0; i < 13 * 7; i++) { var d = addDays(start, i), k = iso(d), m = st.heat[k] || 0, cls = k > todayI ? '' : m >= 45 ? 'l3' : m >= 15 ? 'l2' : m > 0 ? 'l1' : ''; cells += '<i class="' + cls + '" title="' + k + ': ' + m + ' min"' + (k > todayI ? ' style="opacity:.25"' : '') + '></i>'; }
      var tp = st.per_topic.length ? st.per_topic.map(function (t) { return '<div class="kv"><span>' + esc(t.title) + '</span><b>' + dur(t.minutes) + '</b></div>'; }).join('') : '<div class="empty">Your study time per topic will show up here.</div>';
      v.innerHTML = '<div class="top"><div><div class="eyebrow">Progress</div><h1>Your consistency</h1><p class="muted">A day counts towards your streak when you study at least 10 minutes.</p></div></div>' +
        '<div class="grid g3 compact" style="margin-bottom:18px"><div class="card stat tilt"><div class="lbl" style="color:var(--gold)">' + ic('flame') + ' Current streak</div><div class="big"><span data-count="' + st.streak + '">' + st.streak + '</span><small>' + (st.streak === 1 ? 'day' : 'days') + '</small></div><div class="muted" style="margin-top:12px;font-size:13px">Best: ' + st.best_streak + (st.best_streak === 1 ? ' day' : ' days') + '</div></div>' +
        '<div class="card stat tilt"><div class="lbl">' + ic('clock') + ' Total time</div><div class="big">' + dur(st.total_minutes) + '</div><div class="muted" style="margin-top:12px;font-size:13px">' + st.sessions + (st.sessions === 1 ? ' session' : ' sessions') + '</div></div>' +
        '<div class="card stat tilt"><div class="lbl">' + ic('focus') + ' Focus quality</div><div class="big">' + st.avg_distractions + '<small>distractions / session</small></div><div class="muted" style="margin-top:12px;font-size:13px">' + st.completed_rate + '% sessions completed</div></div></div>' +
        '<div class="grid g2"><div class="card"><h2>Last 7 days</h2><div class="bars">' + bars + '</div></div><div class="card"><h2>Time by topic</h2>' + tp + '</div></div>' +
        '<div class="card" style="margin-top:18px"><h2>Practice answers</h2><div class="kv"><span>Answers checked</span><b>' + (st.practice_checked || 0) + '</b></div><div class="kv"><span>Average score</span><b>' + (st.practice_avg == null ? 'none yet' : st.practice_avg + '%') + '</b></div></div>' +
        '<div class="card" style="margin-top:18px"><h2>Last 13 weeks</h2><div class="heat">' + cells + '</div></div>';
    });
  }

  /* ---------- settings ---------- */
  function viewSettings(v) {
    return Promise.all([api('/me'), api('/config'), window.fsApi && fsApi.info ? fsApi.info() : Promise.resolve({}), window.fsApi && fsApi.phoneInfo ? fsApi.phoneInfo().catch(function () { return null; }) : Promise.resolve(null)]).then(function (r) {
      var u = r[0], cfg = r[1], s = u.settings, inf = r[2] || {}; S.user = u;
      var zones = []; try { zones = Intl.supportedValuesOf('timeZone'); } catch (e) { }
      if (zones.indexOf(s.timezone) < 0) zones.unshift(s.timezone);
      v.innerHTML = '<div class="view narrow" style="animation:none"><div class="top"><div><div class="eyebrow">Settings</div><h1>Make it yours</h1></div></div><div class="stack">' +
        '<div class="card"><h2>About this build</h2><div class="kv"><span>Version</span><b>' + esc(inf.version || 'dev') + '</b></div><div class="kv"><span>Subjects loaded</span><b>' + S.topics.length + ' (' + S.topics.filter(function (t) { return !t.planned; }).length + ' with full content, ' + S.topics.reduce(function (a, t) { return a + (t.lessons || 0); }, 0) + ' topics)</b></div><div class="kv"><span>Content folder<br><small class="muted">' + esc(inf.contentDir || '') + '</small></span></div></div>' +
        (r[3] ? '<div class="card"><h2>Link your Android phone</h2><div id="phbox">' + phoneBox(r[3]) + '</div></div>' : '') +
        '<div class="card"><h2>Profile and goals</h2><div class="fld"><label class="f" for="pn">Name</label><input class="in" id="pn" value="' + esc(u.name) + '"></div>' +
        '<div class="grid g2"><div class="fld"><label class="f" for="pz">Time zone</label><select class="in" id="pz">' + zones.map(function (z) { return '<option' + (z === s.timezone ? ' selected' : '') + '>' + esc(z) + '</option>'; }).join('') + '</select></div><div class="fld"><label class="f" for="pg">Daily goal (minutes)</label><input class="in" id="pg" type="number" min="5" max="600" value="' + s.daily_goal + '"></div></div>' +
        '<div class="fld"><label class="f">Default lock mode</label><div class="chips" id="pl">' + Object.keys(LOCKS).map(function (k) { return '<button class="chip' + (k === s.default_lock ? ' on' : '') + '" data-act="pdl" data-id="' + k + '">' + LOCKS[k][0] + '</button>'; }).join('') + '</div></div></div>' +
        '<div class="card winonly"><h2>Phone reminders</h2><p class="muted" style="margin-bottom:16px">Reminders always appear inside FutureSelf. To also get them on your phone, use one of these.</p>' +
        '<div class="fld"><label class="f" for="pt">ntfy topic (free, no sign-up)</label><div class="row"><input class="in" id="pt" placeholder="futureself-yourname-1234" value="' + esc(s.ntfy_topic) + '"><button class="btn" data-act="gentopic">Generate</button></div><p class="muted" style="font-size:13px;margin-top:8px">Install the free <b>ntfy</b> app on Android, tap +, and subscribe to the same topic name. Keep the topic private, anyone who knows it can read the messages.</p></div>' +
        '<div class="fld"><label class="f" for="pc">Telegram chat ID ' + (cfg.channels.telegram ? '' : '<span class="badge warn">bot token not set on the server</span>') + '</label><input class="in" id="pc" placeholder="e.g. 123456789" value="' + esc(s.telegram_chat_id) + '"></div>' +
        '<div class="kv"><span>Show alerts inside FutureSelf</span><label class="switch"><input type="checkbox" id="pn2" ' + (s.notify_inapp !== false ? 'checked' : '') + '><span></span></label></div>' +
        '<div class="kv"><span>Windows notifications</span><label class="switch"><input type="checkbox" id="pn3" ' + (s.notify_native !== false ? 'checked' : '') + '><span></span></label></div>' +
        '<div class="row wrap" style="margin-top:16px"><button class="btn" data-act="notiftest">Send test notification</button></div></div>' +
        '<div class="card"><h2>Graphics</h2><div class="kv"><span>Interactive effects<br><small class="muted">Cursor sparkles, confetti, fireworks and button ripples</small></span><label class="switch"><input type="checkbox" id="pfx" ' + (FX.isEnabled() ? 'checked' : '') + '><span></span></label></div></div>' +
        '<div class="card winonly"><h2>Windows</h2>' +
        '<div class="kv"><span>Start FutureSelf when Windows starts<br><small class="muted">Needed for reminders when you have not opened the app</small></span><label class="switch"><input type="checkbox" id="pau" ' + (s.autostart ? 'checked' : '') + '><span></span></label></div>' +
        '<div class="kv"><span>Keep running in the tray when I close the window<br><small class="muted">Reminders keep working. Quit from the tray icon.</small></span><label class="switch"><input type="checkbox" id="ptr" ' + (s.close_to_tray !== false ? 'checked' : '') + '><span></span></label></div></div>' +
        '<div class="card winonly"><h2>Distraction blocklist</h2><p class="muted" style="margin-bottom:14px">While a Focus or Strict session runs, FutureSelf closes these programs and closes browser windows that show these sites. Gentle mode only warns. Use program names like discord.exe and site names like instagram.</p>' +
        '<div class="fld"><label class="f" for="pa">Apps</label><input class="in" id="pa" value="' + esc(s.blocklist_apps) + '"></div><div class="fld"><label class="f" for="pw">Websites</label><input class="in" id="pw" value="' + esc(s.blocklist_sites) + '"></div></div>' +
        '<div class="row spread wrap"><span></span><button class="btn pri" data-act="psave">Save settings</button></div>' +
        '<div class="card"><h2>System</h2><div class="kv"><span>Storage</span><b>' + (cfg.storage === 'mongo' ? 'MongoDB' : 'Local file (set MONGO_URI in .env for MongoDB)') + '</b></div><div class="kv"><span>Telegram</span><b>' + (cfg.channels.telegram ? 'Configured' : 'Not configured') + '</b></div><div class="kv"><span>Email (SMTP)</span><b>' + (cfg.channels.email ? 'Configured' : 'Not configured') + '</b></div><div class="kv"><span>Push (FCM)</span><b>' + (cfg.channels.fcm ? 'Configured' : 'Not configured') + '</b></div><div class="kv"><span>AI helper key</span><b>' + (cfg.channels.ai ? 'Configured' : 'Not configured') + '</b></div></div></div></div>';
      window.__pl = s.default_lock;
    });
  }
  /* PC side of the phone link */
  function phoneBox(i) {
    var on = i.on, h = '<p class="muted" style="margin-bottom:14px">When a study session runs here, your phone locks for the same time (the FutureSelf Android app does this). Both must be on the same Wi-Fi. Nothing leaves your network, and only the subject and end time are shared.</p>' +
      '<div class="kv"><span>Phone link<br><small class="muted">Windows may ask to allow FutureSelf on private networks. Choose Allow.</small></span><label class="switch"><input type="checkbox" id="phon" data-ph="1" ' + (on ? 'checked' : '') + '><span></span></label></div>';
    if (on) {
      h += '<div class="kv"><span>This PC</span><b>' + esc(i.name) + '</b></div><div class="kv"><span>Address to type in the phone</span><b>' + esc((i.addresses[0] || 'no network') + ':' + i.port) + '</b></div>';
      if (i.code) h += '<div class="phcode"><div class="muted">Pairing code (valid 5 minutes)</div><div class="big3">' + esc(i.code.slice(0, 3) + ' ' + i.code.slice(3)) + '</div></div>';
      h += '<div class="row wrap" style="margin:12px 0"><button class="btn pri" data-act="phcode">' + (i.code ? 'New code' : 'Pair a new phone') + '</button><button class="btn" data-act="phrefresh">Refresh</button></div>';
      h += i.devices.length ? i.devices.map(function (d) { return '<div class="kv"><span>' + esc(d.name) + '<br><small class="muted">' + (d.lastSeen ? 'seen ' + new Date(d.lastSeen).toLocaleTimeString() : 'not seen yet') + '</small></span><button class="btn sm danger" data-act="phunpair" data-id="' + d.id + '">Remove</button></div>'; }).join('') : '<p class="muted">No phone paired yet. In the phone app open Phone, then "Find my PC", and enter the code.</p>';
    }
    return h;
  }
  function phoneRender() { return fsApi.phoneInfo().then(function (i) { var b = $('#phbox'); if (b) b.innerHTML = phoneBox(i); return i; }); }
  actions.phrefresh = function () { phoneRender(); };
  actions.phcode = function () { fsApi.phoneCode().then(function (r) { if (!r.ok) return toast('Could not make a code', r.error, true); phoneRender(); }); };
  actions.phunpair = function (el) { fsApi.phoneUnpair(el.dataset.id).then(function () { toast('Phone removed'); phoneRender(); }); };
  document.addEventListener('change', function (e) { if (e.target.dataset && e.target.dataset.ph) fsApi.phoneEnable(e.target.checked).then(function (r) { if (!r.ok) toast('Could not turn on', r.error, true); phoneRender(); }); });
  actions.pdl = function (el) { window.__pl = el.dataset.id; $$('#pl .chip').forEach(function (c) { c.classList.toggle('on', c === el); }); };
  actions.gentopic = function () { var a = 'abcdefghjkmnpqrstuvwxyz23456789', t = 'futureself-'; for (var i = 0; i < 12; i++) t += a[Math.floor(Math.random() * a.length)]; $('#pt').value = t; };
  actions.notifperm = function () { if (!('Notification' in window)) return toast('Not supported in this browser', '', true); Notification.requestPermission().then(function (p) { toast(p === 'granted' ? 'Browser notifications on' : 'Permission not granted', '', p !== 'granted'); }); };
  actions.psave = function () {
    api('/me', { method: 'PATCH', body: { name: $('#pn').value, settings: { timezone: $('#pz').value, daily_goal: +$('#pg').value, default_lock: window.__pl, ntfy_topic: $('#pt').value, telegram_chat_id: $('#pc').value, blocklist_apps: $('#pa').value, blocklist_sites: $('#pw').value, notify_inapp: $('#pn2').checked, notify_native: $('#pn3').checked, autostart: $('#pau').checked, close_to_tray: $('#ptr').checked } } })
      .then(function (u) { S.user = u; toast('Settings saved'); }).catch(function (e) { toast('Could not save', e.message, true); });
  };
  actions.notiftest = function () { actions.psave(); setTimeout(function () { api('/notify/test', { method: 'POST' }).then(function (r) { var ch = Object.keys(r.channels).map(function (k) { return k + ': ' + (r.channels[k] ? 'sent' : 'failed'); }); toast('Test sent', ch.length ? ch.join(', ') : 'In-app only. Add an ntfy topic to reach your phone.'); pollNotifs(); }).catch(function (e) { toast('Test failed', e.message, true); }); }, 400); };

  /* ---------- global events ---------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]'); if (!el) return;
    var fn = actions[el.dataset.act]; if (fn) { if (el.tagName !== 'A' && el.dataset.act !== 'ovl') e.preventDefault(); fn(el, e); }
  });
  var tiltEl = null;
  document.addEventListener('mousemove', function (e) {
    if (!matchMedia('(hover:hover)').matches) return;
    var c = e.target.closest && e.target.closest('.tilt');
    if (tiltEl && tiltEl !== c) { tiltEl.style.transform = ''; tiltEl = null; }
    if (!c) return; tiltEl = c;
    var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = 'perspective(900px) rotateY(' + (x * 9) + 'deg) rotateX(' + (-y * 9) + 'deg) translateZ(6px)';
    c.style.setProperty('--gx', ((x + 0.5) * 100) + '%'); c.style.setProperty('--gy', ((y + 0.5) * 100) + '%');
  });
  var magEl = null;
  document.addEventListener('mousemove', function (e) {
    var b = e.target.closest && e.target.closest('.btn.pri');
    if (magEl && magEl !== b) { magEl.style.transform = ''; magEl = null; }
    if (!b || !matchMedia('(hover:hover)').matches) return; magEl = b;
    var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.12) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.22) + 'px)';
  });
  document.addEventListener('change', function (e) { if (e.target.id === 'pfx') { FX.setEnabled(e.target.checked); toast(e.target.checked ? 'Effects on' : 'Effects off'); if (e.target.checked) FX.fireworks(2); } });
  document.addEventListener('selectstart', function (e) { if (document.body.style.cursor === 'grabbing') e.preventDefault(); });

  window.FSX = window.FSX || {}; FSX.h = { esc: esc, ic: ic, toast: toast, api: api, modal: modal, closeModal: closeModal, go: go, S: S };
  if (window.FSX && FSX.actions) Object.assign(actions, FSX.actions);
  go();
})();

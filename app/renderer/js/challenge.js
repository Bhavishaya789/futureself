/* Challenge a friend: same hard questions, a timer, a locked screen, one attempt, speed bonus and a winner.
   The server keeps the answers and does the marking (website/api/challenge.js). Same file runs in the Windows app and the phone app. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s, r) { return (r || document).querySelector(s); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  function acct(op, p) { return window.fsApi && window.fsApi.acct ? window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) throw new Error((r && r.error) || 'Something went wrong'); return r.data; }) : Promise.reject(new Error('Accounts are not available here.')); }
  function ch(p) { return acct('challenge', p); }
  function fmtT(ms) { var s = Math.max(0, Math.round(ms / 1000)), m = Math.floor(s / 60); return m + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); }
  function words(ms) { var s = Math.round(ms / 1000), m = Math.floor(s / 60); return (m ? m + 'm ' : '') + (s % 60) + 's'; }
  function fm(t) { return H().fmt ? H().fmt(t) : esc(t); }
  var QN = 10, MINQ = 4;
  var C = { list: [], stats: null, offset: 0, busy: false, friends: null };
  var AR = null;          // the challenge that is on screen right now

  /* ============ choosing the hardest questions of a lesson ============ */
  function hardness(q) {
    var s = (q.q || '').length + (q.why || '').length * 0.6 + (q.o || []).reduce(function (a, o) { return a + o.length; }, 0) / Math.max(1, q.o.length) * 0.5;
    if (/\d/.test(q.q)) s += 25;
    if (/\b(which of the following|assertion|reason|calculate|find|why|except|incorrect|not true|correct statement|best explains|following)\b/i.test(q.q)) s += 40;
    if (/^(what is meant by|define|what is the meaning|what does\b.*\bmean|what is called)/i.test(q.q.trim())) s -= 120;
    return s;
  }
  function pickHard(lesson) {
    var quiz = (lesson.quiz || []).filter(function (q) { return q && q.q && q.o && q.o.length >= 2 && q.o.length <= 5 && q.a >= 0 && q.a < q.o.length; });
    if (quiz.length < MINQ) return null;
    var idx = quiz.map(function (q, i) { return { i: i, s: hardness(q) }; }).sort(function (a, b) { return b.s - a.s; }).slice(0, Math.min(QN, quiz.length)).sort(function (a, b) { return a.i - b.i; });
    return idx.map(function (x) { var q = quiz[x.i]; return { q: q.q, o: q.o, a: q.a, why: q.why || '' }; });
  }

  /* ============ the Challenges card (Friends page) ============ */
  function statusLine(c) {
    var me = c.mine;
    if (c.status === 'declined') return ['Declined', 'warn'];
    if (c.status === 'expired') return ['Expired', 'warn'];
    if (c.status === 'done') return c.result && c.result.winner ? [(c.result.winner === myId() ? 'You won' : esc(c.result.winnerName) + ' won'), c.result.winner === myId() ? 'ok' : 'warn'] : ['Draw', 'ok'];
    if (me.closed) return ['Waiting for ' + esc(c.friend.name), 'warn'];
    if (me.started) return ['In progress', 'warn'];
    return [c.iAmChallenger ? 'Your turn to play' : 'Challenged you', 'ok'];
  }
  var meId = '';
  function myId() { return meId; }
  function itemHTML(c) {
    var st = statusLine(c), btns = '';
    var t = c.topic || {};
    if (c.status === 'pending' || c.status === 'active') {
      if (!c.mine.started) btns += '<button class="btn sm pri" data-act="chstart" data-id="' + esc(c.id) + '">Play now</button>' + (!c.iAmChallenger ? '<button class="btn sm ghost" data-act="chdecl" data-id="' + esc(c.id) + '">Decline</button>' : '');
      else if (!c.mine.closed && Date.now() + C.offset < c.mine.deadline) btns += '<button class="btn sm pri" data-act="chresume" data-id="' + esc(c.id) + '">Resume</button>';
      else btns += '<button class="btn sm" data-act="chview" data-id="' + esc(c.id) + '">View</button>';
    } else if (c.status === 'done') btns += '<button class="btn sm" data-act="chview" data-id="' + esc(c.id) + '">Result</button>';
    var sub = esc(t.subject || '') + (t.subject ? ' &middot; ' : '') + c.n + ' questions &middot; ' + fmtT(c.limitSec * 1000) + ' min' + (c.mine.closed ? ' &middot; you scored ' + c.mine.correct + '/' + c.n : '');
    return '<div class="item chitem"><div class="grow"><b>' + esc(t.title || 'Topic') + '</b><small>vs ' + esc(c.friend.name) + ' &middot; ' + sub + '</small></div><span class="badge ' + st[1] + '">' + st[0] + '</span>' + btns + '</div>';
  }
  function cardHTML() {
    var s = C.stats || { points: 0, wins: 0, played: 0 };
    var inv = C.list.filter(function (c) { return !c.iAmChallenger && !c.mine.started && (c.status === 'pending' || c.status === 'active'); });
    return '<div class="card chcard"><div class="row spread wrap"><div><div class="eyebrow">Challenge a friend</div><h2>Same hard questions. Fastest and most accurate wins.</h2></div>' +
      '<button class="btn pri" data-act="chnew">' + H().ic('flame') + ' New challenge</button></div>' +
      '<div class="chstats"><div><b>' + s.points + '</b><span>challenge points</span></div><div><b>' + (s.wins || 0) + '</b><span>wins</span></div><div><b>' + (s.played || 0) + '</b><span>played</span></div><div><b>' + inv.length + '</b><span>waiting for you</span></div></div>' +
      (C.list.length ? '<div class="list" style="margin-top:14px">' + C.list.map(itemHTML).join('') + '</div>' : '<p class="muted" style="margin-top:12px">Finish a topic, then challenge a friend on it. You both get the same ' + QN + ' hard questions, a timer and a locked screen. Marks plus speed decide the winner.</p>') + '</div>';
  }
  function paint() { var b = $('#chbox'); if (b) b.innerHTML = cardHTML(); }
  function load() {
    return ch({ a: 'list' }).then(function (r) {
      C.list = r.challenges; C.stats = r.stats; C.offset = r.now - Date.now(); announce(); paint(); return r;
    }).catch(function (e) { var b = $('#chbox'); if (b && !C.list.length) b.innerHTML = '<div class="card chcard"><div class="eyebrow">Challenge a friend</div><p class="muted" style="margin-top:6px">' + esc(e.message) + '</p></div>'; });
  }
  function ensureMe() { if (meId) return Promise.resolve(); return H().api && acct('social', { a: 'overview' }).then(function (o) { meId = o.me.id; C.friends = o.board.filter(function (p) { return !p.me; }); }).catch(function () { }); }
  function mountFriends(v) {
    if ($('#chbox')) return;
    var top = v.querySelector('.top'); if (!top) return;
    top.insertAdjacentHTML('afterend', '<div id="chbox" style="margin-bottom:18px"></div>');
    ensureMe().then(load);
    var t = setInterval(function () { if (!$('#chbox')) return clearInterval(t); load(); }, 15000);
  }

  /* ============ new challenge ============ */
  var NW = null;
  function openNew(pre) {
    NW = { pre: pre || null, topics: [], lessons: [], tid: '', lid: '' };
    H().modal('<div class="chnew"><div class="eyebrow">New challenge</div><h2 style="margin:6px 0 12px">Challenge a friend</h2><div id="chnbody"><div class="empty">Loading…</div></div></div>');
    Promise.all([ensureMe().then(function () { return acct('social', { a: 'overview' }); }), H().api('/topics')]).then(function (r) {
      C.friends = r[0].board.filter(function (p) { return !p.me; }); NW.topics = r[1].filter(function (t) { return !t.planned && (t.done > 0 || (pre && pre.tid === t.id)); });
      if (NW.pre) { NW.tid = NW.pre.tid; return loadLessons(NW.tid).then(function () { NW.lid = NW.pre.lid; }); }
    }).then(newPaint).catch(function (e) { var b = $('#chnbody'); if (b) b.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; });
  }
  function loadLessons(tid) {
    NW.lessons = [];
    if (!tid) return Promise.resolve();
    return H().api('/topics/' + tid).then(function (d) {
      var out = []; d.topic.units.forEach(function (u) { u.lessons.forEach(function (l) { var p = d.progress[l.id] || {}; out.push({ id: l.id, title: l.title, done: !!p.done, n: (l.quiz || []).length, l: l }); }); });
      NW.lessons = out; NW.subject = d.topic.title;
    });
  }
  function newPaint() {
    var b = $('#chnbody'); if (!b) return;
    if (!C.friends || !C.friends.length) { b.innerHTML = '<p class="muted">You need a friend first. Add a friend by email on this page, and ask them to accept.</p><div class="row" style="margin-top:14px"><button class="btn" data-act="close">Close</button></div>'; return; }
    var fr = '<option value="">Choose a friend</option>' + C.friends.map(function (f) { return '<option value="' + esc(f.id) + '"' + (NW.fid === f.id ? ' selected' : '') + '>' + esc(f.name) + '</option>'; }).join('');
    var sub = '<option value="">Choose a subject</option>' + NW.topics.map(function (t) { return '<option value="' + esc(t.id) + '"' + (NW.tid === t.id ? ' selected' : '') + '>' + esc(t.title) + '</option>'; }).join('');
    var les = '<option value="">' + (NW.tid ? 'Choose a completed topic' : 'Choose a subject first') + '</option>' + NW.lessons.map(function (l) { return '<option value="' + esc(l.id) + '"' + (l.done && l.n >= MINQ ? '' : ' disabled') + (NW.lid === l.id ? ' selected' : '') + '>' + (l.done ? '✔ ' : '') + esc(l.title) + (!l.done ? ' (complete it first)' : l.n < MINQ ? ' (too few questions)' : '') + '</option>'; }).join('');
    var sel = NW.lessons.filter(function (l) { return l.id === NW.lid; })[0];
    b.innerHTML = '<div class="fld"><label class="f" for="chf">Friend</label><select class="in" id="chf">' + fr + '</select></div>' +
      '<div class="fld" style="margin-top:12px"><label class="f" for="chs">Subject</label><select class="in" id="chs">' + sub + '</select></div>' +
      '<div class="fld" style="margin-top:12px"><label class="f" for="chl">Topic you completed</label><select class="in" id="chl">' + les + '</select></div>' +
      '<div class="tipbox" style="margin-top:14px"><b>How it works.</b> You both get the same ' + Math.min(QN, sel ? sel.n : QN) + ' of the hardest questions on this topic and ' + fmtT(Math.max(120, Math.min(900, Math.min(QN, sel ? sel.n : QN) * 50)) * 1000) + ' minutes. The screen is locked while you play and each person can try only once. 10 points per right answer, a bonus for finishing quicker, +10 for whoever finishes first, +20 for the winner.</div>' +
      '<div id="cherr" class="muted" style="color:var(--bad);margin-top:8px;min-height:18px"></div><div class="row wrap" style="margin-top:6px"><button class="btn pri" data-act="chsend"' + (NW.fid && sel ? '' : ' disabled') + '>Send challenge</button><button class="btn ghost" data-act="close">Cancel</button></div>';
  }
  document.addEventListener('change', function (e) {
    if (!NW || !e.target) return;
    if (e.target.id === 'chf') { NW.fid = e.target.value; newPaint(); }
    else if (e.target.id === 'chs') { NW.tid = e.target.value; NW.lid = ''; var b = $('#chnbody'); loadLessons(NW.tid).then(newPaint).catch(function (er) { if (b) b.innerHTML = '<div class="empty">' + esc(er.message) + '</div>'; }); }
    else if (e.target.id === 'chl') { NW.lid = e.target.value; newPaint(); }
  });
  function send() {
    var sel = NW.lessons.filter(function (l) { return l.id === NW.lid; })[0], err = $('#cherr');
    var qs = sel && pickHard(sel.l); if (!qs) { if (err) err.textContent = 'This topic does not have enough quiz questions yet.'; return; }
    var btn = $('[data-act=chsend]'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    ch({ a: 'create', friendId: NW.fid, topicId: NW.tid, lessonId: NW.lid, title: sel.title, subject: NW.subject, questions: qs }).then(function (r) {
      var id = r.id; H().closeModal(); H().toast('Challenge sent', 'Your friend will see it in their Friends page.');
      load().then(function () { H().modal('<div style="text-align:center"><div class="eyebrow">Challenge ready</div><h2 style="margin:8px 0">Play your attempt now?</h2><p class="muted" style="margin-bottom:16px">' + r.n + ' questions, ' + fmtT(r.limitSec * 1000) + ' minutes. You can also play later, within 2 days.</p><div class="row wrap" style="justify-content:center"><button class="btn pri" data-act="chstart" data-id="' + esc(id) + '">Play now</button><button class="btn" data-act="close">Later</button></div></div>'); });
    }).catch(function (e) { if (btn) { btn.disabled = false; btn.textContent = 'Send challenge'; } if (err) err.textContent = e.message; });
  }

  /* ============ rules, then the locked arena ============ */
  function rules(id, resume) {
    var c = C.list.filter(function (x) { return x.id === id; })[0]; if (!c) return load().then(function () { rules(id, resume); });
    H().modal('<div class="chrules"><div class="eyebrow">' + (resume ? 'Resume challenge' : 'Before you start') + '</div><h2 style="margin:6px 0 4px">' + esc((c.topic || {}).title || 'Challenge') + '</h2><p class="muted">vs ' + esc(c.friend.name) + '</p>' +
      '<ul class="chlist"><li><b>' + c.n + ' questions</b> and <b>' + fmtT(c.limitSec * 1000) + ' minutes</b>. The timer starts the moment you press the button.</li>' +
      '<li><b>One attempt only.</b> Once it is closed or submitted it can never be played again.</li>' +
      '<li><b>The screen is locked.</b> Leaving it 3 times submits your answers. ' + (resume ? 'You can resume only once.' : 'Closing the app does not stop the clock.') + '</li>' +
      '<li><b>Speed counts.</b> Right answers give points, finishing quicker gives a bonus, and the faster finisher gets +10.</li></ul>' +
      '<div class="row wrap" style="margin-top:14px"><button class="btn pri" data-act="chgo" data-id="' + esc(id) + '" data-resume="' + (resume ? 1 : '') + '">I am ready. ' + (resume ? 'Resume' : 'Start') + '</button><button class="btn ghost" data-act="close">Not now</button></div></div>', true);
  }
  function begin(id, resume) {
    var btn = $('[data-act=chgo]'); if (btn) { btn.disabled = true; btn.textContent = 'Starting…'; }
    ch({ a: resume ? 'resume' : 'start', id: id }).then(function (r) {
      H().closeModal(); arena(id, r);
    }).catch(function (e) { H().closeModal(); H().toast(e.used ? 'Not available' : 'Could not start', e.message, true); load(); });
  }

  var GUARDS = [];
  function on(t, ev, fn, opt) { t.addEventListener(ev, fn, opt); GUARDS.push([t, ev, fn, opt]); }
  function off() { GUARDS.forEach(function (g) { g[0].removeEventListener(g[1], g[2], g[3]); }); GUARDS = []; }
  function lockOn(title, endsAt) {
    var a = window.fsApi; if (!a) return;
    var st = H().S && H().S.user && H().S.user.settings ? H().S.user.settings : {};
    try { a.lockStart && a.lockStart({ mode: 'strict', apps: st.blocklist_apps || '', sites: st.blocklist_sites || '', subject: 'Challenge: ' + title, topicId: '', endsAt: endsAt }).catch(function () { }); } catch (e) { }
    try { a.sessionState && a.sessionState({ active: true, subject: 'Challenge: ' + title, topicId: '', lock: 'strict', startedAt: Date.now(), endsAt: endsAt, paused: false }).catch(function () { }); } catch (e) { }
  }
  function lockOff() {
    var a = window.fsApi; if (!a) return;
    try { a.lockStop && a.lockStop().catch(function () { }); } catch (e) { }
    try { a.sessionState && a.sessionState({ active: false }).catch(function () { }); } catch (e) { }
  }
  function root() { var r = $('#arena'); if (!r) { r = document.createElement('div'); r.id = 'arena'; document.body.appendChild(r); } return r; }
  function arena(id, r) {
    var c = C.list.filter(function (x) { return x.id === id; })[0] || {};
    AR = { id: id, title: (r.topic && r.topic.title) || (c.topic && c.topic.title) || 'Challenge', qs: r.questions, ans: (r.answers || []).slice(), i: 0, deadline: r.deadline, off: r.now - Date.now(), leaves: r.leaves || 0, sending: false, over: false, confirm: false };
    while (AR.ans.length < AR.qs.length) AR.ans.push(null);
    for (var k = 0; k < AR.ans.length; k++) if (AR.ans[k] === undefined) AR.ans[k] = null;
    document.body.classList.add('inarena');
    lockOn(AR.title, AR.deadline - AR.off);
    try { if (!(window.fsApi && window.fsApi.isApp) && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () { }); } catch (e) { }
    on(document, 'contextmenu', function (e) { e.preventDefault(); });
    ['copy', 'cut', 'paste', 'dragstart', 'selectstart'].forEach(function (ev) { on(document, ev, function (e) { if (AR && !AR.over) e.preventDefault(); }, true); });
    on(window, 'keydown', function (e) {
      if (!AR || AR.over) return;
      var k = e.key;
      if (e.ctrlKey || e.metaKey || e.altKey || /^F\d+$/.test(k) || k === 'PrintScreen' || k === 'Escape' || k === 'Tab' && e.altKey) { e.preventDefault(); e.stopPropagation(); return; }
      if (k === 'ArrowRight') go(1); else if (k === 'ArrowLeft') go(-1); else if (/^[1-5]$/.test(k)) pickOpt(+k - 1);
    }, true);
    on(window, 'beforeunload', function (e) { if (AR && !AR.over) { e.preventDefault(); e.returnValue = ''; } });
    on(document, 'visibilitychange', function () { if (document.hidden) away(); });
    on(window, 'blur', function () { away(); });
    AR.timer = setInterval(tick, 250);
    drawQ(); tick();
  }
  var lastAway = 0;
  function away() {
    if (!AR || AR.over) return;
    var now = Date.now(); if (now - lastAway < 2500) return; lastAway = now;
    ch({ a: 'leave', id: AR.id }).then(function (r) {
      if (!AR || AR.over) return;
      AR.leaves = r.leaves; warn(r.closed ? 'You left the challenge 3 times. Your answers were submitted.' : 'You left the challenge screen (' + r.leaves + ' of 3). At 3 your answers are submitted.');
      if (r.closed) finish();
    }).catch(function () { });
    warn('You left the challenge screen. This was recorded.');
  }
  function warn(t) { var w = $('#archwarn'); if (!w) return; w.textContent = t; w.classList.add('on'); clearTimeout(warn.t); warn.t = setTimeout(function () { w.classList.remove('on'); }, 6000); }
  function remaining() { return AR.deadline - (Date.now() + AR.off); }
  function tick() {
    if (!AR || AR.over) return;
    var ms = remaining(), t = $('#artime'); if (t) { t.textContent = fmtT(ms); t.classList.toggle('low', ms < 60000); t.classList.toggle('crit', ms < 20000); }
    var pb = $('#arbar'); if (pb) pb.style.width = Math.max(0, Math.min(100, 100 * ms / (AR.limitMs || (AR.limitMs = ms + 1)))) + '%';
    if (ms <= 0 && !AR.sending) submit(true);
  }
  function drawQ() {
    var q = AR.qs[AR.i], answered = AR.ans.filter(function (a) { return a != null; }).length;
    root().innerHTML = '<div class="arwrap"><div class="arhead"><div class="grow"><div class="eyebrow">Challenge &middot; locked</div><b>' + esc(AR.title) + '</b></div><div class="artime" id="artime">--:--</div></div>' +
      '<div class="arprog"><i id="arbar"></i></div><div class="archwarn" id="archwarn"></div>' +
      '<div class="arq"><div class="muted" style="font-size:14px">Question ' + (AR.i + 1) + ' of ' + AR.qs.length + ' &middot; ' + answered + ' answered</div><h2>' + fm(q.q) + '</h2>' +
      '<div class="aropts">' + q.o.map(function (o, oi) { return '<button class="aropt' + (AR.ans[AR.i] === oi ? ' sel' : '') + '" data-act="chopt" data-o="' + oi + '"><span class="k">' + String.fromCharCode(65 + oi) + '</span><span>' + fm(o) + '</span></button>'; }).join('') + '</div></div>' +
      '<div class="arnav"><button class="btn" data-act="chprev"' + (AR.i ? '' : ' disabled') + '>&larr; Back</button><div class="ardots">' + AR.qs.map(function (_, i) { return '<button class="ardot' + (i === AR.i ? ' cur' : '') + (AR.ans[i] != null ? ' done' : '') + '" data-act="chjump" data-i="' + i + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + '</button>'; }).join('') + '</div>' +
      (AR.i < AR.qs.length - 1 ? '<button class="btn pri" data-act="chnext">Next &rarr;</button>' : '<button class="btn pri" data-act="chsubmit" id="arsub">' + (AR.confirm ? 'Tap again to submit' : 'Submit answers') + '</button>') + '</div>' +
      '<div class="muted arfoot">Screen locked. One attempt. ' + (AR.leaves ? 'Left the screen ' + AR.leaves + ' time(s). ' : '') + 'Pick an answer to save it. Keys: 1-4 choose, arrows move.</div></div>';
    tick();
  }
  function go(d) { if (!AR || AR.over) return; var n = AR.i + d; if (n < 0 || n >= AR.qs.length) return; AR.i = n; AR.confirm = false; drawQ(); }
  function pickOpt(o) {
    if (!AR || AR.over) return; var q = AR.qs[AR.i]; if (o >= q.o.length) return;
    var i = AR.i; AR.ans[i] = o; AR.confirm = false; drawQ();
    var tries = 0; (function save() { ch({ a: 'save', id: AR.id, i: i, ans: o }).catch(function (e) { if (AR && !AR.over && tries++ < 3 && !/closed|Time is up/i.test(e.message)) setTimeout(save, 1500); }); })();
  }
  function submit(forced) {
    if (!AR || AR.sending || AR.over) return;
    var open = AR.ans.filter(function (a) { return a == null; }).length;
    if (!forced && !AR.confirm) { AR.confirm = true; drawQ(); if (open) warn(open + ' question' + (open > 1 ? 's' : '') + ' still unanswered. Tap Submit again to finish anyway.'); return; }
    AR.sending = true; var b = $('#arsub'); if (b) { b.disabled = true; b.textContent = 'Submitting…'; }
    var tries = 0; (function post() {
      ch({ a: 'submit', id: AR.id, answers: AR.ans }).then(function (r) { finish(r.challenge); }).catch(function (e) {
        if (/not started|closed/i.test(e.message)) return finish(); if (tries++ < 6) setTimeout(post, 1500); else { AR.sending = false; warn('Could not reach the server. Check your internet, then tap Submit again.'); drawQ(); }
      });
    })();
  }
  function finish(c) {
    if (!AR) return; var id = AR.id; AR.over = true; clearInterval(AR.timer); off(); lockOff();
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { }
    document.body.classList.remove('inarena');
    AR = null; var r = $('#arena'); if (r) r.remove();
    load().then(function () { if (c) result(c); else showResult(id); });
  }

  /* ============ result and winner ============ */
  var RT = null;
  function showResult(id) {
    H().modal('<div class="chres"><div class="empty">Loading result…</div></div>');
    ch({ a: 'get', id: id }).then(function (r) { result(r.challenge); }).catch(function (e) { H().closeModal(); H().toast('Could not open', e.message, true); });
  }
  function pts(p) { return p ? p.total : 0; }
  function result(c) {
    var me = meId, done = c.status === 'done', r = c.result, fname = esc(c.friend.name);
    var head, body = '';
    if (!done) {
      head = '<div class="reshead wait"><div class="big">⏳</div><h2>Your attempt is in</h2><p class="muted">You answered <b>' + (c.mine.correct == null ? '-' : c.mine.correct) + ' of ' + c.n + '</b> in <b>' + words(c.mine.timeMs || 0) + '</b>.</p></div>' +
        '<p class="muted" style="text-align:center;margin:10px 0 0">' + (c.status === 'declined' ? 'Your friend declined this challenge.' : c.theirs.started ? fname + ' is still playing. The winner appears here and in your Challenges list.' : fname + ' has not played yet. They have until ' + new Date(c.expiresAt).toLocaleString() + '. The winner and the correct answers are shown when you both finish.') + '</p>';
    } else {
      var won = r.winner === me, mineP = r.points[me] || {}, theirP = r.points[c.friend.id] || {};
      head = '<div class="reshead ' + (r.draw ? 'draw' : won ? 'win' : 'lose') + '"><div class="big">' + (r.draw ? '🤝' : won ? '🏆' : '🎯') + '</div><div class="eyebrow">Winner</div><h2>' + (r.draw ? 'It is a draw' : won ? 'You won!' : esc(r.winnerName) + ' won') + '</h2>' +
        '<p class="muted">' + (r.reason === 'walkover' ? (won ? fname + ' did not play in time, so you win.' : 'You did not play in time.') : r.draw ? 'Same points and same time.' : (won ? 'More points than ' + fname + '.' : esc(r.winnerName) + ' scored more points than you.')) + '</p></div>';
      var row = function (lbl, a, b) { return '<tr><td>' + lbl + '</td><td>' + a + '</td><td>' + b + '</td></tr>'; };
      body = '<table class="restab"><thead><tr><th></th><th>You</th><th>' + fname + '</th></tr></thead><tbody>' +
        row('Right answers', (mineP.correct || 0) + '/' + c.n, (theirP.correct || 0) + '/' + c.n) +
        row('Time taken', mineP.timeMs ? words(mineP.timeMs) : '-', theirP.timeMs ? words(theirP.timeMs) : '-') +
        row('Marks (10 each)', '+' + (mineP.base || 0), '+' + (theirP.base || 0)) +
        row('Speed bonus', '+' + (mineP.timeBonus || 0), '+' + (theirP.timeBonus || 0)) +
        row('First to finish', '+' + (mineP.first || 0), '+' + (theirP.first || 0)) +
        row('Winner bonus', '+' + (mineP.win || 0), '+' + (theirP.win || 0)) +
        '<tr class="tot"><td>Points earned</td><td>' + pts(mineP) + '</td><td>' + pts(theirP) + '</td></tr></tbody></table>' +
        (r.faster ? '<p class="muted" style="text-align:center;margin-top:8px">' + (r.faster === me ? 'You' : esc(c.friend.name)) + ' finished first and got the speed bonus.</p>' : '');
      if (c.review) body += '<details class="chrev"><summary>Review the answers</summary>' + c.review.map(function (q, i) {
        return '<div class="rq"><p><b>' + (i + 1) + '.</b> ' + fm(q.q) + '</p>' + q.o.map(function (o, oi) { var cls = oi === q.a ? 'right' : (oi === q.mine ? 'wrong' : ''); return '<div class="ro ' + cls + '">' + String.fromCharCode(65 + oi) + '. ' + fm(o) + (oi === q.mine ? ' <small>(you)</small>' : '') + (oi === q.theirs ? ' <small>(' + fname + ')</small>' : '') + '</div>'; }).join('') + (q.why ? '<div class="muted" style="font-size:13px;margin-top:4px">' + fm(q.why) + '</div>' : '') + '</div>';
      }).join('') + '</details>';
    }
    H().modal('<div class="chres">' + head + body + '<div class="row wrap" style="justify-content:center;margin-top:16px"><button class="btn pri" data-act="close">Done</button></div></div>');
    if (done && r.winner === me) { try { FX.confetti(innerWidth / 2, innerHeight * .35, 120); setTimeout(function () { FX.fireworks && FX.fireworks(2); }, 250); } catch (e) { } }
    if (!done) { clearInterval(RT); RT = setInterval(function () { if (!$('.chres')) return clearInterval(RT); ch({ a: 'get', id: c.id }).then(function (x) { if (x.challenge.status !== 'wait' && (x.challenge.status === 'done' || x.challenge.status === 'declined')) { clearInterval(RT); result(x.challenge); load(); } }).catch(function () { }); }, 8000); }
    ls('fs_ch_seen_' + c.id, done ? '1' : '');
  }

  /* ============ tell the student about new invites and results ============ */
  var announced = false;
  function announce() {
    if (AR) return;
    var seenInv = JSON.parse(ls('fs_ch_inv') || '[]'), changed = false;
    C.list.forEach(function (c) {
      if (!c.iAmChallenger && !c.mine.started && (c.status === 'pending' || c.status === 'active') && seenInv.indexOf(c.id) < 0) { seenInv.push(c.id); changed = true; if (announced) H().toast(c.friend.name + ' challenged you', (c.topic || {}).title + '. Open Friends to play.'); }
    });
    if (changed) ls('fs_ch_inv', JSON.stringify(seenInv.slice(-60)));
    if (announced) C.list.some(function (c) {
      if (c.status === 'done' && c.mine.closed && !ls('fs_ch_seen_' + c.id) && !$('.chres')) { ls('fs_ch_seen_' + c.id, '1'); H().toast('Challenge result is in', c.result && c.result.winner ? (c.result.winner === meId ? 'You won against ' : c.result.winnerName + ' won against you in ') + (c.topic || {}).title : 'It was a draw'); showResult(c.id); return true; }
    });
    announced = true;
  }
  var poll = null;
  function startPoll() {
    if (poll) return;
    poll = setInterval(function () {
      if (AR || !(window.fsApi && window.fsApi.acct)) return;
      acct('status').then(function (st) { if (st && st.signedIn) return ensureMe().then(load); }).catch(function () { });
    }, 45000);
    setTimeout(function () { acct('status').then(function (st) { if (st && st.signedIn) return ensureMe().then(load); }).catch(function () { }); }, 9000);
  }
  startPoll();

  /* ============ hooks into the app ============ */
  var prevAfter = FSX.after;
  FSX.after = function (r, v) {
    if (prevAfter) prevAfter(r, v);
    if (r.name === 'friends') mountFriends(v);
    if (r.name === 'lesson') {
      var aside = v.querySelector('aside .card'); if (aside && !aside.querySelector('[data-act=chlesson]')) aside.insertAdjacentHTML('beforeend', '<button class="btn" style="width:100%;margin-top:10px" data-act="chlesson" data-t="' + esc(r.a) + '" data-l="' + esc(r.b) + '">' + H().ic('flame') + ' Challenge a friend</button>');
    }
  };
  FSX.actions = Object.assign(FSX.actions || {}, {
    chnew: function () { openNew(); },
    chlesson: function (el) {
      var done = /^Completed/.test(($('#donelbl') || {}).textContent || '');
      if (!done) return H().toast('Complete the topic first', 'Press "Mark as complete", then challenge a friend on it.', true);
      openNew({ tid: el.dataset.t, lid: el.dataset.l });
    },
    chsend: function () { send(); },
    chstart: function (el) { H().closeModal(); rules(el.dataset.id, false); },
    chresume: function (el) { rules(el.dataset.id, true); },
    chgo: function (el) { begin(el.dataset.id, !!el.dataset.resume); },
    chdecl: function (el) { ch({ a: 'decline', id: el.dataset.id }).then(function () { H().toast('Challenge declined'); return load(); }).catch(function (e) { H().toast('Could not decline', e.message, true); }); },
    chview: function (el) { showResult(el.dataset.id); },
    chopt: function (el) { pickOpt(+el.dataset.o); },
    chnext: function () { go(1); }, chprev: function () { go(-1); },
    chjump: function (el) { if (AR && !AR.over) { AR.i = +el.dataset.i; AR.confirm = false; drawQ(); } },
    chsubmit: function () { submit(false); }
  });
  FSX.challenge = { open: openNew, pickHard: pickHard };
})();

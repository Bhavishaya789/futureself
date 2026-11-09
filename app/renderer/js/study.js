/* Study Hub: spaced revision, mistake notebook, mock tests, flashcards, exam plan, weekly report, streak/XP, pomodoro,
   plus an AI doubt box and personal notes inside every lesson. All study data stays on this device (localStorage). */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  var KEY = 'fs_study_v1', INT = [1, 3, 7, 21];   /* days until the next revision, by box */

  /* ================= core (pure logic, tested in node) ================= */
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function today() { return iso(new Date()); }
  function addDays(isoStr, n) { var p = isoStr.split('-'), d = new Date(+p[0], +p[1] - 1, +p[2] + n); return iso(d); }
  function diffDays(a, b) { var x = a.split('-'), y = b.split('-'); return Math.round((new Date(+y[0], +y[1] - 1, +y[2]) - new Date(+x[0], +x[1] - 1, +x[2])) / 86400000); }
  function hash(s) { var h = 5381; s = String(s); for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return 'm' + (h >>> 0).toString(36); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

  var D = null;
  function fresh() { return { items: {}, log: {}, topic: {}, xp: 0, notes: {}, exam: { date: '', name: '' }, goal: 60, remind: '', lastRemind: '', mocks: [] }; }
  function load() {
    if (D) return D;
    try { D = JSON.parse(lsGet(KEY) || 'null'); } catch (e) { D = null; }
    if (!D || typeof D !== 'object') D = fresh();
    var f = fresh(); Object.keys(f).forEach(function (k) { if (D[k] === undefined) D[k] = f[k]; });
    return D;
  }
  function save() { lsSet(KEY, JSON.stringify(D || fresh())); }
  function day(d) { load(); var k = d || today(); if (!D.log[k]) D.log[k] = { q: 0, c: 0, min: 0 }; return D.log[k]; }

  /* one answered question. it = {key, tt, lt, q, o, a, why, src, label}; ok = right or wrong */
  function record(it, ok) {
    load();
    if (!it || !it.q) return;
    var id = hash((it.key || '') + '|' + it.q), t = today(), L = day(t);
    L.q++; if (ok) L.c++;
    var tp = D.topic[it.tt || 'Other'] || (D.topic[it.tt || 'Other'] = { q: 0, c: 0 }); tp.q++; if (ok) tp.c++;
    D.xp += ok ? 10 : 2;
    var x = D.items[id];
    if (!ok) {
      if (!x) x = D.items[id] = { id: id, added: t, wrong: 0, box: 0 };
      ['key', 'tt', 'lt', 'q', 'o', 'a', 'why', 'src', 'label'].forEach(function (f) { if (it[f] !== undefined) x[f] = it[f]; });
      x.wrong++; x.box = 0; x.due = addDays(t, 1); x.last = t; x.mastered = false;
    } else if (x && !x.mastered) {
      x.box++; x.last = t;
      if (x.box >= INT.length) { x.mastered = true; x.due = ''; } else x.due = addDays(t, INT[x.box]);
    }
    save(); return id;
  }
  /* answer a revision card: the same box rules, without counting it as a new attempt in the topic stats */
  function review(id, ok) {
    load(); var x = D.items[id]; if (!x) return; var t = today(), L = day(t);
    L.q++; if (ok) L.c++; D.xp += ok ? 6 : 1;
    if (ok) { x.box++; if (x.box >= INT.length) { x.mastered = true; x.due = ''; } else x.due = addDays(t, INT[x.box]); }
    else { x.box = 0; x.due = addDays(t, 1); x.wrong++; x.mastered = false; }
    x.last = t; save();
  }
  function addCard(it) {   /* a flashcard marked "Again" joins the revision list */
    load(); var id = hash((it.key || '') + '|' + it.q), t = today();
    if (!D.items[id]) D.items[id] = { id: id, added: t, wrong: 0, box: 0 };
    var x = D.items[id]; ['key', 'tt', 'lt', 'q', 'o', 'a', 'why', 'src', 'label', 'ans'].forEach(function (f) { if (it[f] !== undefined) x[f] = it[f]; });
    x.box = 0; x.due = addDays(t, 1); x.mastered = false; save(); return id;
  }
  function due(d) { load(); var t = d || today(); return Object.keys(D.items).map(function (k) { return D.items[k]; }).filter(function (x) { return !x.mastered && x.due && x.due <= t; }).sort(function (a, b) { return a.due < b.due ? -1 : 1; }); }
  function mistakes() { load(); return Object.keys(D.items).map(function (k) { return D.items[k]; }).filter(function (x) { return x.src !== 'card'; }).sort(function (a, b) { return (b.last || '') < (a.last || '') ? -1 : 1; }); }
  function remove(id) { load(); delete D.items[id]; save(); }
  function addMin(m) { load(); var L = day(); L.min += m; D.xp += Math.round(m); save(); }
  function streak() {
    load(); var t = today(), n = 0, d = D.log[t] && D.log[t].q + D.log[t].min > 0 ? t : addDays(t, -1);
    while (D.log[d] && D.log[d].q + D.log[d].min > 0) { n++; d = addDays(d, -1); }
    return n;
  }
  function weak() {
    load(); return Object.keys(D.topic).map(function (k) { var t = D.topic[k]; return { tt: k, q: t.q, c: t.c, acc: t.q ? t.c / t.q : 0 }; })
      .filter(function (x) { return x.q >= 4; }).sort(function (a, b) { return a.acc - b.acc; });
  }
  function week() {
    load(); var out = [], t = today();
    for (var i = 6; i >= 0; i--) { var k = addDays(t, -i), L = D.log[k] || { q: 0, c: 0, min: 0 }; out.push({ date: k, q: L.q, c: L.c, min: Math.round(L.min) }); }
    return out;
  }
  function level(xp) { var l = 1, need = 100; while (xp >= need) { xp -= need; l++; need = 100 + (l - 1) * 50; } return { level: l, into: xp, need: need }; }
  /* exam plan: lessonsLeft spread over the days left (the exam day itself is for revision) */
  function plan(examDate, lessonsLeft, minPerLesson) {
    var left = diffDays(today(), examDate); if (!examDate || isNaN(left)) return null;
    if (left < 0) return { over: true, days: left };
    var study = Math.max(left - 1, 0), per = study ? Math.ceil(lessonsLeft / study) : lessonsLeft;
    return { days: left, studyDays: study, perDay: per, minutes: per * (minPerLesson || 20), lessonsLeft: lessonsLeft };
  }
  /* mock test marking: sel = chosen option index or -1; neg = marks lost per wrong answer */
  function mark(qs, sel, neg) {
    var c = 0, w = 0, s = 0, byT = {};
    qs.forEach(function (q, i) {
      var t = byT[q.tt] || (byT[q.tt] = { q: 0, c: 0 }); t.q++;
      if (sel[i] === undefined || sel[i] < 0) { s++; return; }
      if (sel[i] === q.a) { c++; t.c++; } else w++;
    });
    return { correct: c, wrong: w, skipped: s, score: Math.round((c - w * neg) * 100) / 100, max: qs.length, byTopic: byT };
  }
  function letterIndex(k, n) { var m = String(k || '').toUpperCase().match(/[A-F]/); if (!m) return -1; var i = m[0].charCodeAt(0) - 65; return i < (n || 6) ? i : -1; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  FSX.studyCore = { load: load, save: save, record: record, review: review, addCard: addCard, due: due, mistakes: mistakes, remove: remove, addMin: addMin, streak: streak, weak: weak, week: week, level: level, plan: plan, mark: mark, letterIndex: letterIndex, hash: hash, today: today, addDays: addDays, diffDays: diffDays, INT: INT, shuffle: shuffle, _reset: function () { D = null; }, data: function () { return load(); } };
  if (typeof document === 'undefined' || !FSX.h) return;   /* node tests stop here */

  /* ================= hooks from the lessons ================= */
  FSX.study = {
    quiz: function (c, results) {   /* results: [{i, ok}] */
      try { results.forEach(function (r) { var q = c.l.quiz[r.i]; if (!q) return; record({ key: c.t.id + '/' + c.l.id, tt: c.t.title, lt: c.l.title, q: q.q, o: q.o, a: q.a, why: q.why, src: 'quiz' }, r.ok); }); } catch (e) { }
    },
    pyq: function (c, q, d) {
      try {
        var ok = d.verdict === 'correct'; if (d.verdict !== 'correct' && d.verdict !== 'wrong') return;
        var ai = letterIndex(q.key || d.right, (q.opts || []).length);
        record({ key: c.t.id + '/' + c.l.id, tt: c.t.title, lt: c.l.title, q: q.q, o: q.opts && q.opts.length ? q.opts : undefined, a: q.opts && q.opts.length && ai >= 0 ? ai : undefined, ans: d.right, why: d.explanation, src: 'pyq', label: q.label }, ok);
      } catch (e) { }
    }
  };

  /* ================= page ================= */
  var H = function () { return FSX.h; }, esc = function (s) { return H().esc(s); };
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function toast(a, b, bad) { try { H().toast(a, b || '', bad); } catch (e) { } }
  FSX.nav = (FSX.nav || []).concat([['study', 'target', 'Study Hub']]);
  FSX.icons = Object.assign(FSX.icons || {}, { target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>' });
  FSX.routes = Object.assign(FSX.routes || {}, { study: viewStudy });

  var V = { tab: 'home', rev: null, mock: null, cards: null, topics: null, pomo: null, mistakeTopic: '' };
  var TABS = [['home', 'Today'], ['revision', 'Revision'], ['mistakes', 'Mistakes'], ['mock', 'Mock test'], ['cards', 'Flashcards'], ['plan', 'Exam plan'], ['report', 'Report']];
  var timers = { mock: 0 };

  function css() {
    if ($('#study-css')) return;
    var s = document.createElement('style'); s.id = 'study-css';
    s.textContent = '.stx .card{padding:16px;margin-bottom:14px}.stx h3{margin:0 0 8px}.stx .tabs2{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0 16px}.stx .tabs2 button{padding:8px 14px;border-radius:999px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--text);font-weight:600;cursor:pointer}.stx .tabs2 button.on{background:var(--grad);color:#06081a;border:0}' +
      '.stx .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}.stx .stat{border:1px solid var(--line);border-radius:14px;padding:14px;background:rgba(255,255,255,.03)}.stx .stat b{display:block;font-size:26px}.stx .stat span{color:var(--muted);font-size:13px}' +
      '.stx .row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.stx .opt2{display:block;width:100%;text-align:left;margin:6px 0;padding:10px 12px;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--text);cursor:pointer}.stx .opt2.sel{border-color:var(--cyan)}.stx .opt2.right{border-color:var(--ok);background:rgba(61,220,151,.12)}.stx .opt2.wrong{border-color:var(--bad);background:rgba(255,92,122,.12)}' +
      '.stx .pal{display:flex;gap:6px;flex-wrap:wrap}.stx .pal button{width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--text);cursor:pointer}.stx .pal button.done{background:rgba(45,226,230,.25)}.stx .pal button.cur{outline:2px solid var(--violet)}.stx .pal button.flag{border-color:#FFC857}' +
      '.stx .bar{height:10px;border-radius:6px;background:rgba(255,255,255,.08);overflow:hidden}.stx .bar i{display:block;height:100%;background:var(--grad)}.stx .fc{min-height:150px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:19px;padding:20px;border-radius:16px;border:1px solid var(--line);background:rgba(255,255,255,.04);cursor:pointer;white-space:pre-wrap}' +
      '.stx .why{margin-top:8px;font-size:14px;color:var(--muted)}.stx .tag{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;border:1px solid var(--line);color:var(--muted);margin-right:6px}.stx .wk{display:flex;gap:8px;align-items:flex-end;height:120px}.stx .wk div{flex:1;text-align:center;font-size:11px;color:var(--muted)}.stx .wk i{display:block;background:var(--grad);border-radius:6px 6px 0 0;min-height:2px;margin-bottom:4px}' +
      '.stx .ring{--p:0;width:96px;height:96px;border-radius:50%;background:conic-gradient(var(--cyan) calc(var(--p)*1%),rgba(255,255,255,.1) 0);display:grid;place-items:center}.stx .ring span{width:74px;height:74px;border-radius:50%;background:var(--panel,#0b0e1f);display:grid;place-items:center;font-weight:700;font-size:15px}' +
      '.lsx textarea{width:100%;min-height:90px;box-sizing:border-box}.lsx .ans{white-space:pre-wrap;font-size:14px;margin-top:8px}@media print{body *{visibility:hidden}#studysheet,#studysheet *{visibility:visible}#studysheet{position:absolute;left:0;top:0;width:100%;color:#000;background:#fff;padding:20px}}';
    document.head.appendChild(s);
  }

  function topicsList() {
    if (V.topics) return Promise.resolve(V.topics);
    return H().api('/topics').then(function (t) { V.topics = t; return t; });
  }
  function root() { return $('#stbody'); }
  function draw() {
    var r = root(); if (!r) return;
    $$('#sttabs button').forEach(function (b) { b.classList.toggle('on', b.dataset.t === V.tab); });
    var f = { home: pHome, revision: pRevision, mistakes: pMistakes, mock: pMock, cards: pCards, plan: pPlan, report: pReport }[V.tab] || pHome;
    Promise.resolve(f(r)).catch(function (e) { r.innerHTML = '<div class="card">' + esc(e.message || 'Something went wrong') + '</div>'; });
  }
  function viewStudy(v, r) {
    css(); load(); clearInterval(timers.mock);
    if (r && r.a && TABS.some(function (t) { return t[0] === r.a; })) V.tab = r.a;
    v.innerHTML = '<div class="stx"><div class="top"><div><h1>Study Hub</h1><p class="sub">Revise on time, learn from mistakes, practise in exam style. Your study data stays on this device.</p></div></div>' +
      '<div class="tabs2" id="sttabs">' + TABS.map(function (t) { return '<button data-t="' + t[0] + '" class="' + (V.tab === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div><div id="stbody"></div></div>';
    $('#sttabs').onclick = function (e) { var b = e.target.closest('button'); if (!b) return; if (V.tab === 'mock' && V.mock && V.mock.phase === 'test' && b.dataset.t !== 'mock' && !V.mock.leaveOk) { toast('Test running', 'Submit the test first, or press Submit now.', true); return; } V.tab = b.dataset.t; clearInterval(timers.mock); draw(); };
    draw();
  }

  /* ---------- Today ---------- */
  function ring(p, label) { return '<div class="ring" style="--p:' + Math.min(100, Math.round(p)) + '"><span>' + label + '</span></div>'; }
  function pHome(r) {
    var d = load(), du = due(), t = day(), lv = level(d.xp), wk = weak(), ex = d.exam.date ? diffDays(today(), d.exam.date) : null;
    var pm = V.pomo;
    r.innerHTML = '<div class="grid">' +
      '<div class="stat"><b>' + streak() + '</b><span>day streak</span></div>' +
      '<div class="stat"><b>Level ' + lv.level + '</b><span>' + d.xp + ' XP &middot; ' + (lv.need - lv.into) + ' to next level</span></div>' +
      '<div class="stat"><b>' + du.length + '</b><span>revision cards due today</span></div>' +
      '<div class="stat"><b>' + (ex === null ? '-' : (ex < 0 ? 'Done' : ex)) + '</b><span>' + (ex === null ? 'set an exam date in Exam plan' : (ex < 0 ? 'exam date passed' : 'days to ' + esc(d.exam.name || 'your exam'))) + '</span></div></div>' +
      '<div class="card" style="margin-top:14px"><div class="row" style="gap:18px">' + ring(100 * Math.round(t.min) / d.goal, Math.round(t.min) + '/' + d.goal + 'm') +
      '<div><h3>Daily goal</h3><p class="muted" style="margin:0 0 8px">Study minutes today. Focus timer minutes and time spent in lessons count.</p><div class="row"><select class="in" id="stgoal" style="width:auto">' + [30, 45, 60, 90, 120, 180].map(function (g) { return '<option' + (g === d.goal ? ' selected' : '') + '>' + g + '</option>'; }).join('') + '</select><span class="muted">minutes a day</span></div></div></div></div>' +
      '<div class="card"><h3>Focus timer</h3><div class="row"><b id="pmt" style="font-size:30px;min-width:90px">' + (pm ? clock(pm) : '25:00') + '</b><button class="btn pri sm" id="pm25">Focus 25</button><button class="btn sm" id="pm50">Focus 50</button><button class="btn sm" id="pm5">Break 5</button><button class="btn sm" id="pmx">Stop</button></div><p class="muted" style="margin:8px 0 0;font-size:13px">Completed focus time is added to your daily goal. Keep this page open while it runs.</p></div>' +
      (du.length ? '<div class="card"><h3>Revise now</h3><p class="muted">These came back because it is time to see them again.</p><button class="btn pri" id="gorev">Start revision (' + du.length + ')</button></div>' : '<div class="card"><h3>Revision</h3><p class="muted">Nothing due today. Wrong answers in quizzes and past papers come back here at 1, 3, 7 and 21 days.</p></div>') +
      '<div class="card"><h3>Weak topics</h3>' + (wk.length ? wk.slice(0, 5).map(function (x) { return '<div style="margin:8px 0"><div class="row" style="justify-content:space-between"><span>' + esc(x.tt) + '</span><span class="muted">' + Math.round(x.acc * 100) + '% of ' + x.q + '</span></div><div class="bar"><i style="width:' + Math.round(x.acc * 100) + '%"></i></div></div>'; }).join('') + '<p class="muted" style="margin-top:10px">Study the lowest ones next.</p>' : '<p class="muted">Answer at least 4 questions in a topic and your weakest topics show here.</p>') + '</div>' +
      '<div class="card"><h3>Reminder</h3><div class="row"><input class="in" type="time" id="strem" value="' + esc(d.remind) + '" style="width:auto"><button class="btn sm" id="stremsave">Save</button></div><p class="muted" style="margin:8px 0 0;font-size:13px">Shows a reminder at this time while the app is open. Leave empty to turn off.</p></div>';
    $('#stgoal').onchange = function () { d.goal = +this.value; save(); pHome(r); };
    var g = $('#gorev'); if (g) g.onclick = function () { V.tab = 'revision'; V.rev = null; draw(); };
    $('#pm25').onclick = function () { pomo('focus', 25); }; $('#pm50').onclick = function () { pomo('focus', 50); }; $('#pm5').onclick = function () { pomo('break', 5); };
    $('#pmx').onclick = function () { pomoStop(); pHome(r); };
    $('#stremsave').onclick = function () {
      d.remind = $('#strem').value; save();
      if (d.remind && window.Notification && Notification.permission === 'default') try { Notification.requestPermission(); } catch (e) { }
      toast('Saved', d.remind ? 'Reminder at ' + d.remind : 'Reminder off');
    };
  }
  function clock(pm) { var s = Math.max(0, Math.round((pm.end - Date.now()) / 1000)); return pad(Math.floor(s / 60)) + ':' + pad(s % 60); }
  function pomo(kind, min) {
    pomoStop(); V.pomo = { kind: kind, min: min, end: Date.now() + min * 60000 };
    V.pomo.h = setInterval(function () {
      var el = $('#pmt'); if (el) el.textContent = clock(V.pomo);
      if (Date.now() >= V.pomo.end) { var p = V.pomo; pomoStop(); if (p.kind === 'focus') { addMin(p.min); toast('Focus done', p.min + ' minutes added to today.'); } else toast('Break over', 'Ready for the next round?'); if (V.tab === 'home' && root()) pHome(root()); }
    }, 1000);
    if (V.tab === 'home' && root()) pHome(root());
  }
  function pomoStop() { if (V.pomo && V.pomo.h) clearInterval(V.pomo.h); V.pomo = null; }

  /* ---------- Revision ---------- */
  function mcq(x) { return x.o && x.o.length && typeof x.a === 'number' && x.a >= 0 && x.a < x.o.length; }
  function pRevision(r) {
    if (!V.rev) V.rev = { ids: due().map(function (x) { return x.id; }), i: 0, ok: 0, shown: false, picked: -1 };
    var R = V.rev, d = load();
    if (R.i >= R.ids.length) {
      r.innerHTML = '<div class="card"><h3>' + (R.ids.length ? 'Revision finished' : 'Nothing due') + '</h3><p class="muted">' + (R.ids.length ? R.ok + ' of ' + R.ids.length + ' remembered. The ones you missed come back tomorrow.' : 'Wrong answers from quizzes and past papers appear here when they are due.') + '</p><button class="btn" id="rvagain">Check again</button></div>';
      $('#rvagain').onclick = function () { V.rev = null; draw(); }; return;
    }
    var x = d.items[R.ids[R.i]]; if (!x) { R.i++; return pRevision(r); }
    var body;
    if (mcq(x)) {
      body = x.o.map(function (o, k) { var c = R.shown ? (k === x.a ? ' right' : (k === R.picked ? ' wrong' : '')) : (k === R.picked ? ' sel' : ''); return '<button class="opt2' + c + '" data-k="' + k + '">' + String.fromCharCode(65 + k) + ') ' + esc(o) + '</button>'; }).join('');
    } else body = R.shown ? '<div class="card" style="background:rgba(61,220,151,.08)"><b>Answer</b><div style="white-space:pre-wrap;margin-top:6px">' + esc(x.ans || x.a || x.why || 'See the lesson') + '</div></div>' : '<button class="btn" id="rvshow">Show answer</button>';
    r.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between"><span class="tag">' + esc(x.tt || '') + '</span><span class="muted">' + (R.i + 1) + ' / ' + R.ids.length + '</span></div><p style="font-size:17px;margin:12px 0">' + esc(x.q) + '</p>' + body +
      (R.shown ? (x.why && mcq(x) ? '<div class="why">' + esc(x.why) + '</div>' : '') + '<div class="row" style="margin-top:12px">' + (mcq(x) ? '<button class="btn pri" id="rvnext">Next</button>' : '<button class="btn pri" id="rvgot">I remembered</button><button class="btn" id="rvmiss">I missed it</button>') + '</div>' : '') + '</div>';
    $$('.opt2', r).forEach(function (b) { b.onclick = function () { if (R.shown) return; R.picked = +b.dataset.k; R.shown = true; var ok = R.picked === x.a; if (ok) R.ok++; review(x.id, ok); pRevision(r); }; });
    var s = $('#rvshow'); if (s) s.onclick = function () { R.shown = true; pRevision(r); };
    function nxt(ok) { if (!mcq(x)) { if (ok) R.ok++; review(x.id, ok); } R.i++; R.shown = false; R.picked = -1; pRevision(r); }
    var n = $('#rvnext'); if (n) n.onclick = function () { nxt(); };
    var g = $('#rvgot'); if (g) g.onclick = function () { nxt(true); };
    var m = $('#rvmiss'); if (m) m.onclick = function () { nxt(false); };
  }

  /* ---------- Mistake notebook ---------- */
  function pMistakes(r) {
    var all = mistakes(), tt = {}; all.forEach(function (x) { tt[x.tt || 'Other'] = 1; });
    var list = V.mistakeTopic ? all.filter(function (x) { return (x.tt || 'Other') === V.mistakeTopic; }) : all;
    r.innerHTML = '<div class="card"><div class="row"><h3 style="margin:0">Mistake notebook</h3><span class="muted">' + all.length + ' saved</span><select class="in" id="mtopic" style="width:auto;margin-left:auto"><option value="">All topics</option>' + Object.keys(tt).sort().map(function (k) { return '<option' + (k === V.mistakeTopic ? ' selected' : '') + '>' + esc(k) + '</option>'; }).join('') + '</select><button class="btn sm" id="mredo"' + (list.length ? '' : ' disabled') + '>Redo these</button></div></div>' +
      (list.length ? list.map(function (x) {
        return '<div class="card"><span class="tag">' + esc(x.tt || '') + '</span>' + (x.label ? '<span class="tag">' + esc(x.label) + '</span>' : '') + '<span class="tag">missed ' + x.wrong + 'x</span>' + (x.mastered ? '<span class="tag" style="color:var(--ok)">mastered</span>' : '<span class="tag">next ' + esc(x.due || '') + '</span>') +
          '<p style="margin:10px 0">' + esc(x.q) + '</p>' + (mcq(x) ? '<div class="muted">Answer: ' + String.fromCharCode(65 + x.a) + ') ' + esc(x.o[x.a]) + '</div>' : (x.ans ? '<div class="muted">Answer: ' + esc(x.ans) + '</div>' : '')) + (x.why ? '<div class="why">' + esc(x.why) + '</div>' : '') +
          '<div class="row" style="margin-top:10px"><button class="btn sm" data-del="' + x.id + '">Remove</button></div></div>';
      }).join('') : '<div class="card"><p class="muted">No mistakes saved yet. Questions you get wrong in lesson quizzes, past papers and mock tests are saved here with the explanation.</p></div>');
    $('#mtopic').onchange = function () { V.mistakeTopic = this.value; pMistakes(r); };
    $('#mredo').onclick = function () {
      var ids = list.filter(function (x) { return !x.mastered; }).map(function (x) { return x.id; }); if (!ids.length) { toast('All mastered', 'Nothing left to redo here.'); return; }
      V.rev = { ids: ids, i: 0, ok: 0, shown: false, picked: -1 }; V.tab = 'revision'; draw();
    };
    $$('[data-del]', r).forEach(function (b) { b.onclick = function () { remove(b.dataset.del); pMistakes(r); }; });
  }

  /* ---------- Mock test ---------- */
  function fullTopic(id) { return H().api('/topics/' + id).then(function (d) { return d.topic; }); }
  function poolFrom(t) {
    var out = [];
    t.units.forEach(function (u) {
      u.lessons.forEach(function (l) {
        (l.quiz || []).forEach(function (q) { if (q && q.o && q.o.length > 1 && typeof q.a === 'number') out.push({ q: q.q, o: q.o, a: q.a, why: q.why, tt: t.title, lt: l.title, key: t.id + '/' + l.id, src: 'quiz' }); });
        (l.pyq || []).forEach(function (q) { var ai = letterIndex(q.key, (q.opts || []).length); if (q.opts && q.opts.length > 1 && ai >= 0) out.push({ q: q.q, o: q.opts, a: ai, why: '', tt: t.title, lt: l.title, key: t.id + '/' + l.id, src: 'pyq', label: q.label }); });
      });
    });
    return out;
  }
  function pMock(r) {
    var M = V.mock;
    if (!M || M.phase === 'setup') return mockSetup(r);
    if (M.phase === 'test') return mockTest(r);
    return mockResult(r);
  }
  function mockSetup(r) {
    r.innerHTML = '<div class="card">Loading topics...</div>';
    return topicsList().then(function (ts) {
      var sorted = ts.slice().sort(function (a, b) { return String(a.title).localeCompare(String(b.title)); });
      r.innerHTML = '<div class="card"><h3>Mock test</h3><p class="muted">A timed test made from lesson quizzes and past-paper questions that have an official answer key.</p>' +
        '<div class="row" style="margin:10px 0"><label>Topic</label><select class="in" id="mkt1" style="width:auto;max-width:100%"><option value="*">Mixed: random topics</option>' + sorted.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.title) + '</option>'; }).join('') + '</select></div>' +
        '<div class="row" style="margin:10px 0"><label>Questions</label><select class="in" id="mkn" style="width:auto">' + [10, 20, 30, 50].map(function (n) { return '<option' + (n === 20 ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select>' +
        '<label>Minutes</label><select class="in" id="mkm" style="width:auto">' + [10, 20, 30, 45, 60, 90, 180].map(function (n) { return '<option' + (n === 30 ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select>' +
        '<label>Wrong answer</label><select class="in" id="mkneg" style="width:auto"><option value="0">no penalty</option><option value="0.25">-0.25</option><option value="0.33">-0.33</option><option value="1">-1</option></select></div>' +
        '<button class="btn pri" id="mkgo">Start test</button><div class="muted" id="mkmsg" style="margin-top:8px"></div></div>' + mockHistory();
      $('#mkgo').onclick = function () {
        var sel = $('#mkt1').value, n = +$('#mkn').value, mins = +$('#mkm').value, neg = +$('#mkneg').value, msg = $('#mkmsg');
        $('#mkgo').disabled = true; msg.textContent = 'Preparing questions...';
        var ids = sel === '*' ? shuffle(ts.map(function (t) { return t.id; })).slice(0, 14) : [sel];
        Promise.all(ids.map(function (id) { return fullTopic(id).then(poolFrom).catch(function () { return []; }); })).then(function (parts) {
          var pool = shuffle([].concat.apply([], parts)).slice(0, n);
          if (pool.length < 3) { $('#mkgo').disabled = false; msg.textContent = 'Not enough questions with answers in that choice. Pick another topic or Mixed.'; return; }
          V.mock = { phase: 'test', qs: pool, sel: {}, flag: {}, i: 0, end: Date.now() + mins * 60000, mins: mins, neg: neg, start: Date.now() };
          mockTest(root());
        }).catch(function (e) { $('#mkgo').disabled = false; msg.textContent = e.message || 'Could not prepare the test.'; });
      };
    });
  }
  function mockHistory() {
    var m = load().mocks; if (!m.length) return '';
    return '<div class="card"><h3>Past tests</h3>' + m.slice(-6).reverse().map(function (x) { return '<div class="row" style="justify-content:space-between;margin:6px 0"><span>' + esc(x.date) + ' &middot; ' + esc(x.name) + '</span><b>' + x.score + ' / ' + x.max + '</b></div>'; }).join('') + '</div>';
  }
  function mockTest(r) {
    var M = V.mock, q = M.qs[M.i];
    r.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between"><b>Question ' + (M.i + 1) + ' of ' + M.qs.length + '</b><b id="mkclk">--:--</b></div>' +
      '<p style="font-size:17px;margin:12px 0">' + esc(q.q) + '</p>' + q.o.map(function (o, k) { return '<button class="opt2' + (M.sel[M.i] === k ? ' sel' : '') + '" data-k="' + k + '">' + String.fromCharCode(65 + k) + ') ' + esc(o) + '</button>'; }).join('') +
      '<div class="row" style="margin-top:12px"><button class="btn sm" id="mkprev"' + (M.i ? '' : ' disabled') + '>Previous</button><button class="btn sm" id="mknext"' + (M.i < M.qs.length - 1 ? '' : ' disabled') + '>Next</button><button class="btn sm" id="mkclr">Clear</button><button class="btn sm" id="mkflag">' + (M.flag[M.i] ? 'Unmark' : 'Mark for review') + '</button><button class="btn pri sm" id="mksub" style="margin-left:auto">Submit</button></div></div>' +
      '<div class="card"><div class="pal">' + M.qs.map(function (_, k) { return '<button data-p="' + k + '" class="' + (M.sel[k] !== undefined && M.sel[k] >= 0 ? 'done ' : '') + (k === M.i ? 'cur ' : '') + (M.flag[k] ? 'flag' : '') + '">' + (k + 1) + '</button>'; }).join('') + '</div></div>';
    $$('.opt2', r).forEach(function (b) { b.onclick = function () { M.sel[M.i] = +b.dataset.k; mockTest(r); }; });
    $$('[data-p]', r).forEach(function (b) { b.onclick = function () { M.i = +b.dataset.p; mockTest(r); }; });
    $('#mkprev').onclick = function () { M.i--; mockTest(r); }; $('#mknext').onclick = function () { M.i++; mockTest(r); };
    $('#mkclr').onclick = function () { delete M.sel[M.i]; mockTest(r); };
    $('#mkflag').onclick = function () { M.flag[M.i] = !M.flag[M.i]; mockTest(r); };
    $('#mksub').onclick = function () { var un = M.qs.length - Object.keys(M.sel).length; if (un > 0 && !M.confirm) { M.confirm = true; this.textContent = un + ' unanswered. Submit anyway?'; return; } mockFinish(); };
    clearInterval(timers.mock);
    function tick() { var s = Math.round((M.end - Date.now()) / 1000), el = $('#mkclk'); if (!el) { clearInterval(timers.mock); return; } el.textContent = pad(Math.floor(Math.max(s, 0) / 60)) + ':' + pad(Math.max(s, 0) % 60); if (s <= 0) { clearInterval(timers.mock); toast('Time is up', 'Your test was submitted.'); mockFinish(); } }
    timers.mock = setInterval(tick, 1000); tick();
  }
  function mockFinish() {
    var M = V.mock; if (!M || M.phase !== 'test') return; clearInterval(timers.mock);
    var res = mark(M.qs, M.sel, M.neg); M.res = res; M.phase = 'result'; M.took = Math.round((Date.now() - M.start) / 1000);
    M.qs.forEach(function (q, i) { var s = M.sel[i]; if (s === undefined || s < 0) return; record({ key: q.key, tt: q.tt, lt: q.lt, q: q.q, o: q.o, a: q.a, why: q.why, src: q.src, label: q.label }, s === q.a); });
    var d = load(); d.mocks.push({ date: today(), name: M.qs.length + ' questions', score: res.score, max: res.max }); d.mocks = d.mocks.slice(-30); addMin(Math.round(M.took / 60)); save();
    mockResult(root());
  }
  function mockResult(r) {
    var M = V.mock, s = M.res, wk = Object.keys(s.byTopic).map(function (k) { var t = s.byTopic[k]; return { tt: k, q: t.q, c: t.c, acc: t.c / t.q }; }).sort(function (a, b) { return a.acc - b.acc; });
    r.innerHTML = '<div class="card"><h3>Result</h3><div class="grid"><div class="stat"><b>' + s.score + ' / ' + s.max + '</b><span>score' + (M.neg ? ' (-' + M.neg + ' per wrong)' : '') + '</span></div><div class="stat"><b>' + s.correct + '</b><span>correct</span></div><div class="stat"><b>' + s.wrong + '</b><span>wrong</span></div><div class="stat"><b>' + s.skipped + '</b><span>skipped</span></div><div class="stat"><b>' + Math.floor(M.took / 60) + 'm ' + pad(M.took % 60) + 's</b><span>of ' + M.mins + ' min</span></div></div>' +
      '<p class="muted" style="margin-top:10px">Wrong answers were saved to your Mistake notebook and will come back for revision.</p><div class="row"><button class="btn pri" id="mkagain">New test</button></div></div>' +
      '<div class="card"><h3>By topic</h3>' + wk.map(function (x) { return '<div style="margin:8px 0"><div class="row" style="justify-content:space-between"><span>' + esc(x.tt) + '</span><span class="muted">' + x.c + '/' + x.q + '</span></div><div class="bar"><i style="width:' + Math.round(x.acc * 100) + '%"></i></div></div>'; }).join('') + '</div>' +
      '<div class="card"><h3>Review</h3>' + M.qs.map(function (q, i) {
        var c = M.sel[i];
        return '<div style="margin:14px 0"><b>' + (i + 1) + '.</b> ' + esc(q.q) + q.o.map(function (o, k) { var cl = k === q.a ? ' right' : (k === c ? ' wrong' : ''); return '<div class="opt2' + cl + '" style="cursor:default">' + String.fromCharCode(65 + k) + ') ' + esc(o) + (k === c ? ' &larr; you' : '') + '</div>'; }).join('') + (c === undefined || c < 0 ? '<div class="muted">Skipped</div>' : '') + (q.why ? '<div class="why">' + esc(q.why) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    $('#mkagain').onclick = function () { V.mock = null; draw(); };
  }

  /* ---------- Flashcards ---------- */
  function cardsFrom(t) {
    var out = [];
    t.units.forEach(function (u) { u.lessons.forEach(function (l) {
      (l.formulas || []).forEach(function (f) { if (f.n && f.f) out.push({ q: String(f.n).replace(/[*_`]/g, ''), ans: f.f + (f.x ? '\n' + String(f.x).replace(/[*_`]/g, '') : ''), tt: t.title, lt: l.title, key: t.id + '/' + l.id, src: 'card' }); });
      (l.qa || []).slice(0, 12).forEach(function (x) { if (x.q && x.a) out.push({ q: String(x.q).replace(/[*_`]/g, ''), ans: String(x.a).replace(/[*_`]/g, '').slice(0, 600), tt: t.title, lt: l.title, key: t.id + '/' + l.id, src: 'card' }); });
    }); });
    return out;
  }
  function pCards(r) {
    var C = V.cards;
    if (C && C.cards) {
      if (C.i >= C.cards.length) {
        r.innerHTML = '<div class="card"><h3>Deck finished</h3><p class="muted">' + C.know + ' known, ' + C.again + ' added to revision for tomorrow.</p><button class="btn pri" id="fcnew">Choose another topic</button></div>';
        $('#fcnew').onclick = function () { V.cards = null; draw(); }; return;
      }
      var c = C.cards[C.i];
      r.innerHTML = '<div class="card"><div class="row" style="justify-content:space-between"><span class="tag">' + esc(c.tt) + '</span><span class="muted">' + (C.i + 1) + ' / ' + C.cards.length + '</span></div><div class="fc" id="fcc">' + esc(C.flip ? c.ans : c.q) + '</div><p class="muted" style="text-align:center;margin:8px 0">' + (C.flip ? 'Did you know it?' : 'Tap the card to see the answer') + '</p>' +
        (C.flip ? '<div class="row" style="justify-content:center"><button class="btn" id="fcagain">Again</button><button class="btn pri" id="fcknow">I knew it</button></div>' : '') + '</div>';
      $('#fcc').onclick = function () { C.flip = !C.flip; pCards(r); };
      var k = $('#fcknow'); if (k) k.onclick = function () { C.know++; C.i++; C.flip = false; day().q += 0; D.xp += 2; save(); pCards(r); };
      var a = $('#fcagain'); if (a) a.onclick = function () { addCard(c); C.again++; C.i++; C.flip = false; pCards(r); };
      return;
    }
    r.innerHTML = '<div class="card">Loading topics...</div>';
    return topicsList().then(function (ts) {
      var sorted = ts.slice().sort(function (a, b) { return String(a.title).localeCompare(String(b.title)); });
      r.innerHTML = '<div class="card"><h3>Flashcards</h3><p class="muted">Made from the formulas and key questions of a topic. Cards you miss come back in Revision tomorrow.</p><div class="row"><select class="in" id="fct" style="width:auto;max-width:100%">' + sorted.map(function (t) { return '<option value="' + esc(t.id) + '">' + esc(t.title) + '</option>'; }).join('') + '</select><button class="btn pri" id="fcgo">Make deck</button></div><div class="muted" id="fcmsg" style="margin-top:8px"></div></div>';
      $('#fcgo').onclick = function () {
        var id = $('#fct').value, m = $('#fcmsg'); m.textContent = 'Building the deck...';
        fullTopic(id).then(function (t) {
          var cs = shuffle(cardsFrom(t)).slice(0, 30); if (!cs.length) { m.textContent = 'This topic has no formulas or questions to make cards from.'; return; }
          V.cards = { cards: cs, i: 0, flip: false, know: 0, again: 0 }; pCards(root());
        }).catch(function (e) { m.textContent = e.message || 'Could not build the deck.'; });
      };
    });
  }

  /* ---------- Exam plan ---------- */
  function pPlan(r) {
    var d = load();
    r.innerHTML = '<div class="card"><h3>Exam countdown and plan</h3><div class="row"><input class="in" id="exn" placeholder="Exam name" value="' + esc(d.exam.name) + '" style="width:auto"><input class="in" type="date" id="exd" value="' + esc(d.exam.date) + '" style="width:auto"><button class="btn pri sm" id="exs">Save</button><button class="btn sm" id="exc">Clear</button></div></div><div id="exres"><div class="card muted">Working out your plan...</div></div>';
    $('#exs').onclick = function () { d.exam = { name: $('#exn').value.trim(), date: $('#exd').value }; save(); pPlan(r); };
    $('#exc').onclick = function () { d.exam = { name: '', date: '' }; save(); pPlan(r); };
    if (!d.exam.date) { $('#exres').innerHTML = '<div class="card muted">Pick your exam date and the app works out how many lessons to finish each day.</div>'; return; }
    return topicsList().then(function (ts) {
      var left = 0, total = 0, mins = 0;
      ts.forEach(function (t) { var n = t.lessons || t.lesson_count || t.total || 0; total += n; left += Math.max(0, n - (t.done || 0)); });
      var p = plan(d.exam.date, left, 20);
      if (!p) { $('#exres').innerHTML = '<div class="card">Check the date.</div>'; return; }
      if (p.over) { $('#exres').innerHTML = '<div class="card">That date has passed. Set your next exam date above.</div>'; return; }
      $('#exres').innerHTML = '<div class="card"><div class="grid"><div class="stat"><b>' + p.days + '</b><span>days left</span></div><div class="stat"><b>' + left + '</b><span>lessons not finished (of ' + total + ')</span></div><div class="stat"><b>' + p.perDay + '</b><span>lessons a day</span></div><div class="stat"><b>~' + p.minutes + ' min</b><span>study time a day</span></div></div>' +
        '<p class="muted" style="margin-top:10px">' + (p.days <= 1 ? 'Last day: revise your mistakes and flashcards only.' : 'Study every day, keep the last day for revision. If the daily load looks too high, pick the topics that matter most for ' + esc(d.exam.name || 'the exam') + ' and add them as blocks in the Timetable.') + '</p><a class="btn pri" href="#/timetable">Open timetable</a></div>';
    }).catch(function () { $('#exres').innerHTML = '<div class="card">Could not read your lessons.</div>'; });
  }

  /* ---------- Weekly report ---------- */
  function reportText() {
    var w = week(), q = 0, c = 0, m = 0; w.forEach(function (x) { q += x.q; c += x.c; m += x.min; });
    var wk = weak().slice(0, 3);
    return 'FutureSelf weekly report (' + w[0].date + ' to ' + w[6].date + ')\nStudy time: ' + Math.round(m) + ' min\nQuestions: ' + q + ' attempted, ' + c + ' correct (' + (q ? Math.round(100 * c / q) : 0) + '%)\nStreak: ' + streak() + ' days\nMock tests taken: ' + load().mocks.filter(function (x) { return x.date >= w[0].date; }).length + '\nWeakest topics: ' + (wk.length ? wk.map(function (x) { return x.tt + ' (' + Math.round(x.acc * 100) + '%)'; }).join(', ') : 'not enough data yet');
  }
  function pReport(r) {
    var w = week(), mx = Math.max.apply(null, w.map(function (x) { return x.q; }).concat([1])), q = 0, c = 0, m = 0; w.forEach(function (x) { q += x.q; c += x.c; m += x.min; });
    r.innerHTML = '<div class="card"><h3>Last 7 days</h3><div class="grid"><div class="stat"><b>' + Math.round(m) + '</b><span>study minutes</span></div><div class="stat"><b>' + q + '</b><span>questions</span></div><div class="stat"><b>' + (q ? Math.round(100 * c / q) : 0) + '%</b><span>accuracy</span></div><div class="stat"><b>' + streak() + '</b><span>day streak</span></div></div>' +
      '<div class="wk" style="margin-top:16px">' + w.map(function (x) { return '<div><i style="height:' + Math.round(100 * x.q / mx) + 'px"></i>' + x.q + '<br>' + x.date.slice(8) + '</div>'; }).join('') + '</div><p class="muted" style="font-size:13px">Bars show questions answered each day.</p></div>' +
      '<div class="card"><h3>Share with a parent or teacher</h3><p class="muted">Copy this summary and send it on WhatsApp or email.</p><pre style="white-space:pre-wrap;margin:8px 0" id="rptxt">' + esc(reportText()) + '</pre><button class="btn pri sm" id="rpcopy">Copy report</button></div>';
    $('#rpcopy').onclick = function () { var t = reportText(); if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { toast('Copied', 'Paste it anywhere.'); }, function () { toast('Copy failed', 'Select the text and copy it.', true); }); else toast('Copy not available', 'Select the text and copy it.', true); };
  }

  /* ================= inside every lesson: AI doubt, notes, revision sheet, time spent ================= */
  var LS = { key: '', t0: 0, title: '' };
  function lessonStop() { if (LS.key && LS.t0) { var m = Math.min((Date.now() - LS.t0) / 60000, 45); if (m >= 0.5) addMin(Math.round(m * 10) / 10); } LS.key = ''; LS.t0 = 0; }
  function ctxOf(c) { var l = c.l, b = (l.blocks || []).map(function (x) { return x.t === 'ul' || x.t === 'ol' ? (x.x || []).join('; ') : (x.t === 'table' ? '' : x.x); }).join('\n'); return b.slice(0, 4800); }
  function lessonTools(v) {
    var c = window.__fsCur && window.__fsCur(); if (!c) return;
    if ($('#lsx')) return;
    var host = $('aside.sticky', v) || $('.lesson-grid', v) || v; if (!host) return;
    var key = c.t.id + '/' + c.l.id, n = load().notes[key] || '';
    var el = document.createElement('div'); el.id = 'lsx'; el.className = 'card lsx'; el.style.marginTop = '14px';
    el.innerHTML = '<h3>Ask the AI tutor</h3><textarea class="in" id="dbq" placeholder="Type your doubt about this lesson" maxlength="600" style="min-height:70px"></textarea><div class="row" style="margin-top:8px"><button class="btn pri sm" id="dbgo">Ask</button><span class="muted" id="dbmsg"></span></div><div class="ans" id="dba"></div>' +
      '<h3 style="margin-top:16px">My notes</h3><textarea class="in" id="lsn" placeholder="Your own notes for this lesson. Saved on this device." maxlength="4000">' + esc(n) + '</textarea><div class="row" style="margin-top:8px"><button class="btn sm" id="lsprint">Print revision sheet</button></div>';
    host.appendChild(el);
    $('#lsn').oninput = function () { var d = load(); if (this.value.trim()) d.notes[key] = this.value; else delete d.notes[key]; save(); };
    $('#dbgo').onclick = function () {
      var q = $('#dbq').value.trim(), m = $('#dbmsg'), a = $('#dba'); if (q.length < 3) { m.textContent = 'Type your doubt first.'; return; }
      if (!(window.fsApi && window.fsApi.acct)) { m.textContent = 'Open the app and sign in to use the AI tutor.'; return; }
      var b = this; b.disabled = true; m.textContent = 'Thinking...'; a.textContent = '';
      window.fsApi.acct('doubt', { question: q, context: ctxOf(c), title: c.l.title, lang: (c.l._tr && window.FSLang && FSLang.find(c.l._tr) && FSLang.find(c.l._tr).name) || 'English' }).then(function (r) {
        if (!r || !r.ok) throw new Error((r && r.error) || 'The AI could not answer.');
        m.textContent = ''; a.textContent = r.data.answer;
      }).catch(function (e) { m.textContent = e.message || 'Try again.'; }).then(function () { b.disabled = false; });
    };
    $('#lsprint').onclick = function () { sheet(c); };
  }
  function sheet(c) {
    var old = $('#studysheet'); if (old) old.remove();
    var l = c.l, key = c.t.id + '/' + c.l.id, notes = load().notes[key] || '';
    var s = document.createElement('div'); s.id = 'studysheet';
    s.innerHTML = '<h1>' + esc(l.title) + '</h1><p>' + esc(c.t.title) + '</p>' +
      ((l.formulas || []).length ? '<h2>Formulas</h2>' + l.formulas.map(function (f) { return '<p><b>' + esc(f.n) + '</b>: ' + esc(f.f) + '</p>'; }).join('') : '') +
      '<h2>Key questions</h2>' + (l.qa || []).slice(0, 12).map(function (x) { return '<p><b>' + esc(x.q) + '</b><br>' + esc(String(x.a).slice(0, 400)) + '</p>'; }).join('') +
      (notes ? '<h2>My notes</h2><p style="white-space:pre-wrap">' + esc(notes) + '</p>' : '');
    document.body.appendChild(s); try { window.print(); } catch (e) { toast('Print not available here', '', true); }
    setTimeout(function () { s.remove(); }, 1500);
  }

  /* daily reminder while the app is open */
  setInterval(function () {
    try {
      var d = load(); if (!d.remind) return; var n = new Date(), hm = pad(n.getHours()) + ':' + pad(n.getMinutes());
      if (hm === d.remind && d.lastRemind !== today()) {
        d.lastRemind = today(); save(); var k = due().length, msg = k ? k + ' revision cards are waiting.' : 'Time to study. Keep your streak going.';
        if (window.Notification && Notification.permission === 'granted') new Notification('FutureSelf', { body: msg }); else toast('Study reminder', msg);
      }
    } catch (e) { }
  }, 30000);

  /* run after every page draw: lesson tools, and time-in-lesson tracking */
  var prevAfter = FSX.after;
  FSX.after = function (r, v) {
    if (prevAfter) try { prevAfter(r, v); } catch (e) { }
    try {
      if (r && r.name === 'lesson') {
        var k = r.a + '/' + r.b; if (LS.key !== k) { lessonStop(); LS.key = k; LS.t0 = Date.now(); }
        css(); lessonTools(v);
      } else lessonStop();
    } catch (e) { }
  };
  window.addEventListener('beforeunload', lessonStop);
})();

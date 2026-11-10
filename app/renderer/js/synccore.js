/* Pure merge logic for syncing one student's data between devices. No browser or network code here, so it can be tested in node.
   Every merge is THREE-WAY: L = this device now, B = what this device last agreed with the cloud (the "base"), R = the cloud now.
   - counters (xp, answers, minutes) add up what each side did since the base, so two devices that studied separately both count
   - single values (goal, exam date, settings) take this device's value only if this device changed it since the base, otherwise the cloud's
   - lists of items (revision cards, timetable blocks) merge item by item, and a delete is a delete only if the other side did not change that item */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(); else { root.FSX = root.FSX || {}; root.FSX.syncCore = factory(); }
})(typeof self !== 'undefined' ? self : this, function () {
  function stable(v) {
    if (v === undefined) return 'u';
    if (v === null || typeof v !== 'object') return JSON.stringify(v);
    if (Array.isArray(v)) return '[' + v.map(stable).join(',') + ']';
    return '{' + Object.keys(v).sort().map(function (k) { return JSON.stringify(k) + ':' + stable(v[k]); }).join(',') + '}';
  }
  function eq(a, b) { return stable(a) === stable(b); }
  function pick(l, b, r) { return eq(l, b) ? r : l; }                        // single value
  function num(l, b, r) { return Math.max(0, +((r || 0) + ((l || 0) - (b || 0))).toFixed(2)); }   // counter
  function obj(x) { return x && typeof x === 'object' && !Array.isArray(x) ? x : {}; }
  function arr(x) { return Array.isArray(x) ? x : []; }
  function keys() { var s = {}; [].slice.call(arguments).forEach(function (o) { Object.keys(obj(o)).forEach(function (k) { if (k !== '__proto__' && k !== 'constructor' && k !== 'prototype') s[k] = 1; }); }); return Object.keys(s); }
  function clone(x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); }

  /* ---------------- Study Hub ---------------- */
  var STUDY_LOCAL_ONLY = ['share', 'lastRemind', 'lastPing'];
  function studyOut(S) { var o = clone(obj(S)); STUDY_LOCAL_ONLY.forEach(function (k) { delete o[k]; }); return o; }
  function newerItem(l, r) { var a = String(l.last || ''), b = String(r.last || ''); return a > b ? l : (b > a ? r : (+l.wrong || 0) >= (+r.wrong || 0) ? l : r); }
  function mergeStudy(L, B, R) {
    L = obj(L); B = obj(B); R = obj(R);
    var out = clone(L);
    out.xp = num(L.xp, B.xp, R.xp);
    out.log = {}; keys(L.log, B.log, R.log).forEach(function (d) {
      var l = obj(obj(L.log)[d]), b = obj(obj(B.log)[d]), r = obj(obj(R.log)[d]), o = {};
      keys(l, b, r).forEach(function (f) { o[f] = num(l[f], b[f], r[f]); });
      if (Object.keys(o).some(function (f) { return o[f]; })) out.log[d] = o;
    });
    out.topic = {}; keys(L.topic, B.topic, R.topic).forEach(function (n) {
      var l = obj(obj(L.topic)[n]), b = obj(obj(B.topic)[n]), r = obj(obj(R.topic)[n]);
      var o = { q: num(l.q, b.q, r.q), c: num(l.c, b.c, r.c) }; if (o.q || o.c) out.topic[n] = o;
    });
    out.items = {}; keys(L.items, B.items, R.items).forEach(function (id) {
      var l = obj(L.items)[id], b = obj(B.items)[id], r = obj(R.items)[id], keep;
      if (l && r) keep = eq(l, b) ? r : (eq(r, b) ? l : newerItem(l, r));
      else if (l) keep = (b && eq(l, b)) ? null : l;             // gone in the cloud: drop it unless this device changed it
      else if (r) keep = (b && eq(r, b)) ? null : r;             // deleted here: drop it unless the cloud changed it
      if (keep) out.items[id] = clone(keep);
    });
    out.notes = {}; keys(L.notes, B.notes, R.notes).forEach(function (k) { var v = pick(obj(L.notes)[k], obj(B.notes)[k], obj(R.notes)[k]); if (v !== undefined && v !== '') out.notes[k] = v; });
    var seen = {}, mk = [];
    arr(L.mocks).concat(arr(R.mocks)).forEach(function (m) { var k = [m && m.date, m && m.score, m && m.max].join('|'); if (m && !seen[k]) { seen[k] = 1; mk.push(clone(m)); } });
    out.mocks = mk.sort(function (a, b) { return String(a.date) < String(b.date) ? -1 : String(a.date) > String(b.date) ? 1 : 0; }).slice(-200);
    ['exam', 'goal', 'remind', 'reports', 'planDone'].forEach(function (k) { var v = pick(L[k], B[k], R[k]); if (v !== undefined) out[k] = clone(v); });
    return out;
  }

  /* ---------------- small settings (a map of name -> text) ---------------- */
  function mergePrefs(L, B, R) {
    L = obj(L); B = obj(B); R = obj(R); var out = {};
    keys(L, B, R).forEach(function (k) { var v = pick(L[k], B[k], R[k]); if (v !== undefined) out[k] = v; });
    return out;
  }

  /* ---------------- lessons done, sessions, timetable ---------------- */
  function bestMap(a, b) { var o = {}; keys(a, b).forEach(function (k) { var x = obj(a)[k], y = obj(b)[k]; o[k] = x && y ? ((+y.score || 0) > (+x.score || 0) ? y : x) : (x || y); }); return o; }
  function progKey(p) { return String(p.topic_id) + '|' + String(p.lesson_id); }
  function mergeProgressRow(l, b, r) {
    if (!l) return clone(r); if (!r) return clone(l);
    var o = { topic_id: l.topic_id, lesson_id: l.lesson_id };
    var done = pick(l.done, b && b.done, r.done); if (done !== undefined) o.done = !!done;
    var q = [l.quiz, r.quiz].filter(Boolean).sort(function (x, y) { return (+y.score || 0) - (+x.score || 0); })[0]; if (q) o.quiz = clone(q);
    if (l.practice || r.practice) {
      var best = bestMap(obj(l.practice).best, obj(r.practice).best), sc = 0, mx = 0;
      Object.keys(best).forEach(function (k) { sc += +best[k].score || 0; mx += +best[k].max || 0; });
      o.practice = { best: clone(best), score: sc, max: mx, problems: Math.max(+obj(l.practice).problems || 0, +obj(r.practice).problems || 0) };
    }
    return o;
  }
  var SESSION_CAP = 4000;
  function mergeStore(L, B, R) {
    L = obj(L); B = obj(B); R = obj(R); var out = {};
    var lp = {}, bp = {}, rp = {}; arr(L.progress).forEach(function (p) { lp[progKey(p)] = p; }); arr(B.progress).forEach(function (p) { bp[progKey(p)] = p; }); arr(R.progress).forEach(function (p) { rp[progKey(p)] = p; });
    out.progress = keys(lp, bp, rp).filter(function (k) { return lp[k] || rp[k]; }).map(function (k) { return mergeProgressRow(lp[k], bp[k], rp[k]); });
    var ids = {}, ss = [];
    arr(L.sessions).concat(arr(R.sessions)).forEach(function (s) { if (s && s._id && !ids[s._id]) { ids[s._id] = 1; ss.push(s); } });
    out.sessions = ss.sort(function (a, b) { return String(b.started_at) < String(a.started_at) ? -1 : String(b.started_at) > String(a.started_at) ? 1 : 0; }).slice(0, SESSION_CAP);
    var lb = {}, bb = {}, rb = {}; arr(L.blocks).forEach(function (x) { lb[x._id] = x; }); arr(B.blocks).forEach(function (x) { bb[x._id] = x; }); arr(R.blocks).forEach(function (x) { rb[x._id] = x; });
    out.blocks = [];
    keys(lb, bb, rb).forEach(function (id) {
      var l = lb[id], b = bb[id], r = rb[id], keep;
      if (l && r) keep = eq(l, b) ? r : l;
      else if (l) keep = (b && eq(l, b)) ? null : l;
      else if (r) keep = (b && eq(r, b)) ? null : r;
      if (keep) out.blocks.push(clone(keep));
    });
    return out;
  }
  /* what to remember as the base after a sync (sessions are only ever added, so they need no base) */
  function storeBase(S) { var o = clone(obj(S)); delete o.sessions; return o; }

  return { stable: stable, eq: eq, mergeStudy: mergeStudy, mergePrefs: mergePrefs, mergeStore: mergeStore, studyOut: studyOut, storeBase: storeBase, SESSION_CAP: SESSION_CAP };
});

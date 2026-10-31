/* Languages: lesson translations (Class 9-12, JEE, NEET, General Knowledge, Government Exams) and the multilingual Dictionary.
   B.Tech lessons stay in English. Same file runs in the Windows app and the phone app. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  var LANGS = [
    { id: 'en', n: 'English', nn: 'English', k: 'in' },
    { id: 'hi', n: 'Hindi', nn: 'हिन्दी', k: 'in' }, { id: 'bn', n: 'Bengali', nn: 'বাংলা', k: 'in' }, { id: 'mr', n: 'Marathi', nn: 'मराठी', k: 'in' },
    { id: 'ta', n: 'Tamil', nn: 'தமிழ்', k: 'in' }, { id: 'te', n: 'Telugu', nn: 'తెలుగు', k: 'in' }, { id: 'gu', n: 'Gujarati', nn: 'ગુજરાતી', k: 'in' },
    { id: 'kn', n: 'Kannada', nn: 'ಕನ್ನಡ', k: 'in' }, { id: 'ml', n: 'Malayalam', nn: 'മലയാളം', k: 'in' }, { id: 'pa', n: 'Punjabi', nn: 'ਪੰਜਾਬੀ', k: 'in' },
    { id: 'ur', n: 'Urdu', nn: 'اردو', k: 'in', rtl: 1 },
    { id: 'fr', n: 'French', nn: 'Français', k: 'fo' }, { id: 'es', n: 'Spanish', nn: 'Español', k: 'fo' }, { id: 'de', n: 'German', nn: 'Deutsch', k: 'fo' },
    { id: 'ar', n: 'Arabic', nn: 'العربية', k: 'fo', rtl: 1 }
  ];
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  function find(id) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i].id === id) return LANGS[i]; return LANGS[0]; }
  function get() { var v = ls('fs_lang'); return find(v).id; }
  function set(id) { ls('fs_lang', find(id).id); }
  /* which lessons can be read in other languages: Class 9-12 (all 14), exams and GK (Indian languages) */
  function group(l) { return String(l.folder || '').split('/')[0]; }
  function isSchool(l) { return /^Class-/i.test(group(l)); }
  function isExam(l) { return /^(JEE|NEET|General-Knowledge|Government-Exams)/i.test(group(l)); }
  function offered(l) { return LANGS.filter(function (x) { return x.id === 'en' || (isSchool(l) ? true : isExam(l) ? x.k === 'in' : false); }); }
  function apply(l) {
    var id = get();
    if (id === 'en' || !l || !l.tr || !l.tr[id]) return l;
    var t = l.tr[id], o = Object.assign({}, l);
    o.title = t.title || l.title; o.blocks = t.blocks; o.qa = t.qa.length ? t.qa : l.qa; o.quiz = t.quiz.length ? t.quiz : l.quiz; o._tr = id;
    return o;
  }
  function bar(l) {
    var opts = offered(l); if (opts.length < 2) return '';
    var cur = get(), has = !!(l.tr && l.tr[cur]);
    var note = cur === 'en' ? '' : has ? '' : '<span class="muted" style="font-size:13px">Not translated into ' + esc(find(cur).n) + ' yet. Showing English.</span>';
    return '<div class="row wrap" id="langbar" style="gap:10px;margin-top:12px;align-items:center"><label class="muted" for="fslang" style="font-size:13px">Language</label><select class="in" id="fslang" style="max-width:220px">' +
      opts.map(function (x) { var ok = x.id === 'en' || (l.tr && l.tr[x.id]); return '<option value="' + x.id + '"' + (x.id === cur ? ' selected' : '') + '>' + esc(x.nn) + ' (' + esc(x.n) + ')' + (ok ? '' : ' - soon') + '</option>'; }).join('') + '</select>' + note + '</div>';
  }
  function dir(id) { return find(id).rtl ? 'rtl' : 'ltr'; }
  document.addEventListener('change', function (e) {
    var t = e.target; if (!t || (t.id !== 'fslang' && t.id !== 'setlang')) return;
    set(t.value); if (H() && H().go) H().go();
  });

  /* ---------- Dictionary ---------- */
  var DQ = '', DL = '';
  function termsAll() { return (window.FSDict && FSDict.terms) || []; }
  function matches(t, q) {
    if (!q) return true; q = q.toLowerCase();
    if (t.en.toLowerCase().indexOf(q) > -1 || (t.d || '').toLowerCase().indexOf(q) > -1) return true;
    for (var k in t.tr) if (t.tr[k].toLowerCase().indexOf(q) > -1) return true;
    return false;
  }
  function dictList() {
    var dl = DL || (get() === 'en' ? 'hi' : get()), q = DQ.trim(), L = find(dl);
    var list = termsAll().filter(function (t) { return matches(t, q); }).slice(0, 80);
    if (!list.length) return '<div class="empty">No matching word. Try another spelling or language.</div>';
    return list.map(function (t) {
      var more = LANGS.filter(function (x) { return x.id !== 'en' && x.id !== dl && t.tr[x.id]; }).map(function (x) { return '<span class="badge" lang="' + x.id + '" dir="' + dir(x.id) + '" title="' + esc(x.n) + '">' + esc(t.tr[x.id]) + '</span>'; }).join(' ');
      return '<div class="item" style="align-items:flex-start"><div class="grow"><b>' + esc(t.en) + '</b> <span class="muted" style="font-size:13px">' + esc(t.s || '') + '</span><div style="font-size:19px;margin:6px 0" lang="' + dl + '" dir="' + dir(dl) + '">' + esc(t.tr[dl] || '-') + '</div><small>' + esc(t.d || '') + '</small>' +
        '<details style="margin-top:8px"><summary class="muted" style="cursor:pointer;font-size:13px">All languages</summary><div class="row wrap" style="gap:6px;margin-top:8px">' + more + '</div></details></div></div>';
    }).join('');
  }
  function viewDictionary(v) {
    var dl = DL || (get() === 'en' ? 'hi' : get());
    v.innerHTML = '<div class="view narrow" style="animation:none"><div class="top"><div><div class="eyebrow">Dictionary</div><h1>Words in many languages</h1><p class="muted">' + termsAll().length + ' study words with meanings. Type in English or in any language.</p></div></div>' +
      '<div class="card"><div class="row wrap" style="gap:10px"><input class="in" id="dq" placeholder="Search a word, for example force or बल" value="' + esc(DQ) + '" style="flex:1;min-width:200px"><select class="in" id="dlang" style="max-width:240px">' +
      LANGS.filter(function (x) { return x.id !== 'en'; }).map(function (x) { return '<option value="' + x.id + '"' + (x.id === dl ? ' selected' : '') + '>' + esc(x.nn) + ' (' + esc(x.n) + ')</option>'; }).join('') + '</select></div>' +
      '<p class="muted" style="font-size:12px;margin-top:10px">Translations are machine-assisted; please check important words with your teacher or a native speaker.</p></div><div class="list" id="dlist" style="margin-top:14px">' + dictList() + '</div></div>';
    var q = document.getElementById('dq'), sel = document.getElementById('dlang');
    if (q) q.addEventListener('input', function () { DQ = q.value; var d = document.getElementById('dlist'); if (d) d.innerHTML = dictList(); });
    if (sel) sel.addEventListener('change', function () { DL = sel.value; var d = document.getElementById('dlist'); if (d) d.innerHTML = dictList(); });
    return Promise.resolve();
  }
  FSX.nav = (FSX.nav || []).concat([['dictionary', 'book', 'Dictionary']]);
  FSX.routes = Object.assign(FSX.routes || {}, { dictionary: viewDictionary });
  var prevAfter = FSX.after;
  FSX.after = function (r, v) {
    if (prevAfter) prevAfter(r, v);
    if (r.name === 'settings') {
      var stack = v.querySelector('.stack'); if (!stack) return;
      var cur = get();
      stack.insertAdjacentHTML('afterbegin', '<div class="card"><h2>Study language</h2><p class="muted" style="margin-bottom:12px">Lessons for Class 9-12, JEE, NEET and government exams show in this language when a translation exists. B.Tech stays in English.</p><select class="in" id="setlang">' +
        LANGS.map(function (x) { return '<option value="' + x.id + '"' + (x.id === cur ? ' selected' : '') + '>' + esc(x.nn) + ' (' + esc(x.n) + ')</option>'; }).join('') + '</select></div>');
    }
  };
  window.FSLang = { LANGS: LANGS, get: get, set: set, apply: apply, bar: bar, find: find };
})();

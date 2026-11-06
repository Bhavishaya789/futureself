/* SQL Lab: real databases and tables you create yourself, saved on this device, run any SQL.
   Engine = SQLite (WebAssembly) in vendor/sqllab.js, with MySQL-style syntax translated on the way in. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  FSX.nav = (FSX.nav || []).concat([['sql', 'db', 'SQL Lab']]);
  FSX.icons = Object.assign(FSX.icons || {}, { db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>' });
  FSX.routes = Object.assign(FSX.routes || {}, { sql: viewSql });

  var W = null, wid = 0, pend = {}, ready = null;
  var L = { dbs: [], cur: '', schema: null, res: null, err: '', busy: false, persist: true, hist: [] };
  var SAMPLE = "CREATE DATABASE college;\nUSE college;\n\nCREATE TABLE students (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(60) NOT NULL,\n  branch VARCHAR(20),\n  marks INT DEFAULT 0,\n  joined DATE\n);\nCREATE TABLE courses (\n  code VARCHAR(10) PRIMARY KEY,\n  title VARCHAR(80),\n  credits INT\n);\nCREATE TABLE enrol (\n  student_id INT,\n  course_code VARCHAR(10),\n  grade CHAR(1),\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_code) REFERENCES courses(code)\n);\n\nINSERT INTO students (name, branch, marks, joined) VALUES\n ('Asha', 'CSE', 91, '2024-07-01'), ('Ravi', 'ECE', 78, '2024-07-01'),\n ('Meera', 'CSE', 85, '2023-07-03'), ('Kabir', 'MECH', 66, '2023-07-03'), ('Isha', 'ECE', 94, '2022-07-04');\nINSERT INTO courses VALUES ('DB101', 'Databases', 4), ('OS201', 'Operating Systems', 4), ('MA101', 'Calculus', 3);\nINSERT INTO enrol VALUES (1,'DB101','A'), (1,'OS201','B'), (2,'MA101','C'), (3,'DB101','A'), (5,'DB101','A');\n\nSELECT s.name, c.title, e.grade\nFROM enrol e JOIN students s ON s.id = e.student_id JOIN courses c ON c.code = e.course_code\nORDER BY s.name;";
  var HELLO = "-- Create a database, use it, make a table, add rows, query them.\nCREATE DATABASE mydb;\nUSE mydb;\n\nCREATE TABLE people (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL,\n  age INT\n);\nINSERT INTO people (name, age) VALUES ('Asha', 17), ('Ravi', 18);\nSELECT * FROM people;";

  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s) { return document.querySelector(s); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

  /* ---------- storage (IndexedDB keeps every database file) ---------- */
  var IDB = null;
  function idb() {
    if (IDB) return IDB;
    IDB = new Promise(function (res, rej) {
      try {
        var q = indexedDB.open('fs_sqllab', 1);
        q.onupgradeneeded = function () { q.result.createObjectStore('dbs'); };
        q.onsuccess = function () { res(q.result); };
        q.onerror = function () { rej(q.error); };
      } catch (e) { rej(e); }
    });
    return IDB;
  }
  function store(mode, fn) {
    return idb().then(function (d) { return new Promise(function (res, rej) { var t = d.transaction('dbs', mode), s = t.objectStore('dbs'), r = fn(s); t.oncomplete = function () { res(r && r.result); }; t.onerror = t.onabort = function () { rej(t.error); }; }); });
  }
  function loadAll() {
    return store('readonly', function (s) { var o = { k: s.getAllKeys(), v: s.getAll() }; return { get result() { return o; } }; })
      .then(function (o) { return (o.k.result || []).map(function (k, i) { return { name: k, bytes: o.v.result[i] }; }); });
  }
  function saveFiles(files, dropped) {
    return store('readwrite', function (s) { Object.keys(files || {}).forEach(function (n) { s.put(files[n], n); }); (dropped || []).forEach(function (n) { s.delete(n); }); });
  }

  /* ---------- worker ---------- */
  function call(o) {
    return new Promise(function (res, rej) {
      if (!W) { rej(new Error('SQL engine is not running')); return; }
      o.id = ++wid; pend[o.id] = { res: res, rej: rej };
      W.postMessage(o);
    });
  }
  function boot() {
    if (ready) return ready;
    ready = new Promise(function (res, rej) {
      try {
        W = new Worker('vendor/sqllab.js');
        W.onmessage = function (e) { var m = e.data, p = pend[m.id]; if (!p) return; delete pend[m.id]; m.ok ? p.res(m.res) : p.rej(new Error(m.error)); };
        W.onerror = function (e) { rej(new Error('SQL engine could not start' + (e && e.message ? ': ' + e.message : ''))); };
      } catch (e) { rej(e); return; }
      loadAll().catch(function () { L.persist = false; return []; }).then(function (files) { return call({ op: 'load', files: files }); }).then(function (r) { L.dbs = r.dbs; res(); }, rej);
    });
    ready.catch(function () { ready = null; });
    return ready;
  }

  /* ---------- actions ---------- */
  function refreshSchema() {
    if (!L.cur) { L.schema = null; return Promise.resolve(); }
    return call({ op: 'schema', name: L.cur }).then(function (r) { L.schema = r.schema; }).catch(function () { L.schema = null; });
  }
  function applyRun(r) {
    L.res = r; L.cur = r.cur || ''; L.dbs = r.dbs || L.dbs; L.err = '';
    if (L.cur) lsSet('fs_sqllab_cur', L.cur);
    var p = L.persist ? saveFiles(r.files, r.dropped).catch(function () { L.persist = false; }) : Promise.resolve();
    return p.then(refreshSchema);
  }
  function run(code) {
    if (L.busy) return;
    code = String(code || '').trim();
    if (!code) { L.err = 'Type some SQL first.'; draw(); return; }
    L.busy = true; draw(true);
    boot().then(function () { return call({ op: 'run', code: code, cur: L.cur }); })
      .then(function (r) {
        L.hist = [code].concat(L.hist.filter(function (x) { return x !== code; })).slice(0, 30);
        lsSet('fs_sqllab_hist', JSON.stringify(L.hist));
        return applyRun(r);
      })
      .catch(function (e) { L.err = e.message; })
      .then(function () { L.busy = false; draw(true); });
  }
  function editor() { return $('#sqlq'); }
  function runEditor() {
    var t = editor(); if (!t) return;
    var sel = t.value.slice(t.selectionStart, t.selectionEnd);
    run(sel.trim() ? sel : t.value);
  }
  function dl(name, bytes, type) {
    var b = new Blob([bytes], { type: type || 'application/octet-stream' }), a = document.createElement('a');
    a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 2000);
  }
  function toast(m) { try { H().toast(m); } catch (e) { } }
  function useDb(n) { L.cur = n; lsSet('fs_sqllab_cur', n); L.res = null; L.err = ''; return refreshSchema().then(function () { draw(true); }); }
  function putText(t) { var e = editor(); if (e) { e.value = t; e.focus(); } lsSet('fs_sqllab_text', t); }
  function onFile(f) {
    if (!f) return;
    var rd = new FileReader(), isSql = /\.sql$|\.txt$/i.test(f.name);
    rd.onload = function () {
      boot().then(function () {
        if (isSql) { putText(String(rd.result)); toast('Script loaded into the editor. Press Run.'); return; }
        var name = f.name.replace(/\.[^.]+$/, '');
        return call({ op: 'import', name: name, bytes: new Uint8Array(rd.result) }).then(function (r) {
          L.dbs = r.dbs; L.cur = r.cur || name;
          return call({ op: 'export', name: L.cur }).then(function (x) { var o = {}; o[L.cur] = x.bytes; return L.persist ? saveFiles(o, []).catch(function () { L.persist = false; }) : 0; }).then(refreshSchema);
        }).then(function () { toast('Database imported'); draw(true); });
      }).catch(function (e) { L.err = e.message; draw(true); });
    };
    isSql ? rd.readAsText(f) : rd.readAsArrayBuffer(f);
  }

  /* ---------- drawing ---------- */
  function css() {
    if ($('#sqllab-css')) return;
    var s = document.createElement('style'); s.id = 'sqllab-css';
    s.textContent = '.sqx{display:grid;grid-template-columns:260px minmax(0,1fr);gap:16px;align-items:start}@media(max-width:860px){.sqx{grid-template-columns:1fr}}' +
      '.sqx .card{padding:14px}.sqx h3{margin:0 0 8px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}' +
      '.sqx select{width:100%}.sqx .row{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.sqx .btn{padding:8px 12px;font-size:13px}' +
      '.sqx .tb{margin:6px 0;border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:rgba(255,255,255,.02)}' +
      '.sqx .tb b{cursor:pointer;color:var(--cyan)}.sqx .tb small{color:var(--muted);float:right}.sqx .cl{font:12px/1.6 ui-monospace,Consolas,monospace;color:var(--muted)}.sqx .cl i{font-style:normal;color:var(--violet)}' +
      '#sqlq{width:100%;min-height:210px;resize:vertical;font:14px/1.55 ui-monospace,Consolas,monospace;background:rgba(0,0,0,.28);color:var(--text);border:1px solid var(--line);border-radius:12px;padding:12px;tab-size:2;box-sizing:border-box}' +
      '.sqr{overflow:auto;max-height:420px;border:1px solid var(--line);border-radius:10px;margin:8px 0}.sqr table{border-collapse:collapse;width:100%;font-size:13px}.sqr th,.sqr td{padding:6px 10px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap;font-family:ui-monospace,Consolas,monospace}.sqr th{position:sticky;top:0;background:#12162e;color:var(--cyan)}.sqr td em{color:var(--muted)}' +
      '.sqm{font-size:13px;margin:6px 0;color:var(--muted)}.sqm.ok{color:var(--ok)}.sqm.bad{color:var(--bad);white-space:pre-wrap;font-family:ui-monospace,Consolas,monospace}.sqx .hint{font-size:12px;color:var(--muted);margin-top:6px}';
    document.head.appendChild(s);
  }
  function cell(v) {
    if (v === null || v === undefined) return '<em>NULL</em>';
    if (v && v.length !== undefined && typeof v !== 'string' && v.BYTES_PER_ELEMENT) return '<em>[blob ' + v.length + ' bytes]</em>';
    return esc(String(v));
  }
  function resultsHtml() {
    var h = '';
    if (L.err) h += '<div class="sqm bad">' + esc(L.err) + '</div>';
    var r = L.res; if (!r) return h || '<div class="sqm">Results appear here.</div>';
    (r.results || []).forEach(function (x, i) {
      if (x.type === 'error') h += '<div class="sqm bad">Error: ' + esc(x.msg) + '</div>';
      else if (x.type === 'ok') h += '<div class="sqm ok">' + esc(x.msg) + (x.ms != null ? ' (' + x.ms + ' ms)' : '') + '</div>';
      else if (x.type === 'rows') {
        h += '<div class="sqr"><table><thead><tr>' + x.cols.map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          (x.rows.length ? x.rows.map(function (row) { return '<tr>' + row.map(function (v) { return '<td>' + cell(v) + '</td>'; }).join('') + '</tr>'; }).join('') : '<tr><td colspan="' + x.cols.length + '"><em>Empty set</em></td></tr>') +
          '</tbody></table></div><div class="sqm">' + (x.total > x.rows.length ? 'Showing first ' + x.rows.length + ' of ' + x.total + ' rows' : x.rows.length + ' row' + (x.rows.length === 1 ? '' : 's')) + (x.ms != null ? ' (' + x.ms + ' ms)' : '') + '</div>';
      }
    });
    if (r.skipped) h += '<div class="sqm bad">Stopped at the error above. ' + r.skipped + ' later statement' + (r.skipped === 1 ? ' was' : 's were') + ' not run.</div>';
    return h;
  }
  function sideHtml() {
    var h = '<div class="card"><h3>Databases</h3><select class="in" id="sqdb"><option value="">' + (L.dbs.length ? 'Choose a database' : 'No database yet') + '</option>' +
      L.dbs.map(function (d) { return '<option value="' + esc(d) + '"' + (d === L.cur ? ' selected' : '') + '>' + esc(d) + '</option>'; }).join('') + '</select>' +
      '<div class="row"><button class="btn sm" id="sqnew">New</button><button class="btn sm" id="sqdel"' + (L.cur ? '' : ' disabled') + '>Delete</button><button class="btn sm" id="sqexp"' + (L.cur ? '' : ' disabled') + '>Export</button></div>' +
      '<div class="row"><button class="btn sm" id="sqimp">Import</button><button class="btn sm" id="sqdump"' + (L.cur ? '' : ' disabled') + '>Copy SQL</button></div>' +
      '<input type="file" id="sqfile" accept=".sqlite,.sqlite3,.db,.sql,.txt" hidden>' +
      (L.persist ? '' : '<div class="hint" style="color:var(--bad)">Storage is blocked here, so databases will not be saved after you close the app.</div>') + '</div>';
    h += '<div class="card" style="margin-top:12px"><h3>Tables' + (L.cur ? ' in ' + esc(L.cur) : '') + '</h3>';
    if (!L.cur) h += '<div class="hint">Pick or create a database.</div>';
    else if (!L.schema || !L.schema.length) h += '<div class="hint">No tables yet. Use CREATE TABLE.</div>';
    else h += L.schema.map(function (t) {
      return '<div class="tb"><b data-t="' + esc(t.name) + '">' + esc(t.name) + '</b><small>' + (t.kind === 'view' ? 'view' : t.rows + ' rows') + '</small><div class="cl">' +
        t.cols.map(function (c) { return esc(c.n) + ' <i>' + esc(c.t || '') + '</i>' + (c.pk ? ' &#128273;' : '') + (c.nn ? ' NN' : ''); }).join('<br>') + '</div></div>';
    }).join('');
    h += '</div><div class="card" style="margin-top:12px"><h3>Start here</h3><div class="row"><button class="btn sm" id="sqhello">Example: first table</button><button class="btn sm" id="sqsamp">Sample college data</button></div></div>';
    if (L.hist.length) h += '<div class="card" style="margin-top:12px"><h3>History</h3><select class="in" id="sqhist"><option value="">Recent queries</option>' + L.hist.map(function (q, i) { return '<option value="' + i + '">' + esc(q.replace(/\s+/g, ' ').slice(0, 60)) + '</option>'; }).join('') + '</select></div>';
    return h + '</div>';
  }
  function draw(keep) {
    var v = $('#sqlbody'); if (!v) return;
    var t = editor(), txt = t ? t.value : (lsGet('fs_sqllab_text') || HELLO), ss = t ? t.selectionStart : 0, se = t ? t.selectionEnd : 0;
    v.innerHTML = '<div class="sqx"><div>' + sideHtml() + '</div><div><div class="card"><textarea id="sqlq" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="Write SQL here"></textarea>' +
      '<div class="row"><button class="btn pri" id="sqrun"' + (L.busy ? ' disabled' : '') + '>' + (L.busy ? 'Running...' : 'Run  (Ctrl+Enter)') + '</button><button class="btn" id="sqclr">Clear</button></div>' +
      '<div class="hint">Runs everything in the box, or only the selected text. ' + (L.cur ? 'Current database: <b>' + esc(L.cur) + '</b>.' : 'No database selected: CREATE DATABASE x; USE x;') + '</div></div>' +
      '<div class="card" style="margin-top:12px"><h3>Result</h3>' + resultsHtml() + '</div></div></div>';
    var e = editor(); e.value = txt; if (keep) { try { e.setSelectionRange(ss, se); } catch (x) { } }
    wire();
  }
  function wire() {
    var e = editor();
    e.addEventListener('input', function () { lsSet('fs_sqllab_text', e.value); });
    e.addEventListener('keydown', function (ev) {
      if (ev.key === 'Tab') { ev.preventDefault(); var s = e.selectionStart; e.value = e.value.slice(0, s) + '  ' + e.value.slice(e.selectionEnd); e.selectionStart = e.selectionEnd = s + 2; }
      else if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); runEditor(); }
    });
    $('#sqrun').onclick = runEditor;
    $('#sqclr').onclick = function () { e.value = ''; lsSet('fs_sqllab_text', ''); e.focus(); };
    $('#sqdb').onchange = function () { useDb(this.value); };
    $('#sqnew').onclick = function () {
      putText('CREATE DATABASE my_database;\nUSE my_database;'); toast('Rename it if you like, then press Run.');
    };
    $('#sqdel').onclick = function () {
      if (!L.cur) return;
      if (!L.confirmDel || L.confirmDel !== L.cur) { L.confirmDel = L.cur; toast('Press Delete again to remove ' + L.cur + ' for good'); setTimeout(function () { L.confirmDel = null; }, 4000); return; }
      L.confirmDel = null; run('DROP DATABASE `' + L.cur + '`;');
    };
    $('#sqexp').onclick = function () { if (!L.cur) return; call({ op: 'export', name: L.cur }).then(function (r) { dl(L.cur + '.sqlite', r.bytes); }).catch(function (x) { L.err = x.message; draw(true); }); };
    $('#sqdump').onclick = function () {
      if (!L.cur) return;
      call({ op: 'dump', name: L.cur }).then(function (r) {
        var done = function () { toast('SQL copied. Paste it anywhere.'); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(r.text).then(done, function () { putText(r.text); toast('Dump placed in the editor'); });
        else { putText(r.text); toast('Dump placed in the editor'); }
      }).catch(function (x) { L.err = x.message; draw(true); });
    };
    var f = $('#sqfile'); $('#sqimp').onclick = function () { f.click(); }; f.onchange = function () { onFile(f.files[0]); f.value = ''; };
    $('#sqhello').onclick = function () { putText(HELLO); };
    $('#sqsamp').onclick = function () { putText(SAMPLE); toast('Sample loaded. Press Run.'); };
    var hs = $('#sqhist'); if (hs) hs.onchange = function () { if (this.value !== '') putText(L.hist[+this.value]); };
    Array.prototype.forEach.call(document.querySelectorAll('#sqlbody .tb b'), function (b) {
      b.onclick = function () { putText('SELECT * FROM `' + b.dataset.t + '` LIMIT 100;'); runEditor(); };
    });
  }

  function viewSql(v) {
    css();
    try { L.hist = JSON.parse(lsGet('fs_sqllab_hist') || '[]'); } catch (e) { L.hist = []; }
    if (!lsGet('fs_sqllab_text')) lsSet('fs_sqllab_text', HELLO);
    v.innerHTML = '<div class="top"><div><h1>SQL Lab</h1><p class="sub">Create databases and tables, then run any SQL. Everything is saved on this device and works offline.</p></div></div><div id="sqlbody"><div class="empty">Starting the SQL engine...</div></div>';
    return boot().then(function () {
      var want = lsGet('fs_sqllab_cur'); L.cur = want && L.dbs.indexOf(want) >= 0 ? want : (L.dbs[0] || '');
      return refreshSchema();
    }).then(function () { draw(false); }).catch(function (e) {
      v.querySelector('#sqlbody').innerHTML = '<div class="card"><div class="sqm bad">' + esc(e.message) + '</div></div>';
    });
  }
})();

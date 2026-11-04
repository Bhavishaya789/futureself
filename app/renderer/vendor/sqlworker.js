/* Runs the student's SQL inside the app (SQLite compiled to JavaScript), away from the page, so SQL works on any device with no server.
   Output matches the sqlite3 command line: rows one per line, columns joined by |, NULL printed as nothing. */
'use strict';
importScripts('sql-wasm.js');
var ready = initSqlJs({ locateFile: function (f) { return f; } });
function val(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'number') { if (Number.isInteger(v)) return String(v); var s = v.toPrecision(15); if (s.indexOf('e') < 0 && s.indexOf('.') >= 0) s = s.replace(/0+$/, '').replace(/\.$/, '.0'); return s; }
  if (v instanceof Uint8Array) return String.fromCharCode.apply(null, v);
  return String(v);
}
self.onmessage = function (e) {
  var code = String((e.data && e.data.code) || '');
  ready.then(function (SQL) {
    var db = new SQL.Database(), out = [], err = '', rc = 0;
    try {
      var rs = db.exec(code);
      rs.forEach(function (r) { r.values.forEach(function (row) { out.push(row.map(val).join('|')); }); });
    } catch (x) { err = 'Error: ' + (x && x.message || x); rc = 1; }
    try { db.close(); } catch (x) { }
    self.postMessage({ stdout: out.length ? out.join('\n') + '\n' : '', stderr: err, code: rc });
  }).catch(function (x) { self.postMessage({ stdout: '', stderr: 'SQL engine failed to start: ' + (x && x.message || x), code: 1 }); });
};

/* FutureSelf SQL Lab engine. Real SQLite (3.45) running inside the app, away from the page, so it works offline on the PC and the phone.
   Keeps every database the student creates, understands MySQL-style commands (CREATE DATABASE, USE, SHOW TABLES, DESCRIBE, AUTO_INCREMENT,
   ENUM, ON DUPLICATE KEY UPDATE, ALTER TABLE ... MODIFY ...) and returns every result set with its column names. */
'use strict';
importScripts('sql-wasm.js');
var SQLP = initSqlJs({ locateFile: function (f) { return f; } });
var SQL = null, DBS = {}, CUR = '', TX = {};

/* ---------------------------------------------------------------- helpers */
function qid(n) { return '"' + String(n).replace(/"/g, '""') + '"'; }
function unq(s) { s = String(s || '').trim(); var m = s.match(/^[`"\[](.*)[`"\]]$/); return m ? m[1].replace(/``/g, '`').replace(/""/g, '"') : s; }
function lit(s) { return "'" + String(s).replace(/'/g, "''") + "'"; }
function dbName(n) { n = unq(n); if (!/^[A-Za-z0-9_$\- ]{1,48}$/.test(n)) throw new Error('A database name can use letters, numbers, _ and - (up to 48 characters).'); return n; }

/* split a script into statements: respects quotes, comments, DELIMITER and CREATE TRIGGER ... BEGIN ... END */
function splitSql(src) {
  var out = [], cur = '', i = 0, n = src.length, delim = ';', q = '', word = '', last = '', caseD = 0, trig = false, started = false;
  function endWord() {
    if (!word) return; var w = word.toUpperCase(); word = '';
    if (w === 'CASE') caseD++; else if (w === 'END') { if (caseD > 0) caseD--; else last = 'END'; return; }
    last = w;
  }
  function push() { var t = cur.trim(); if (t) out.push(t); cur = ''; trig = false; last = ''; caseD = 0; started = false; }
  while (i < n) {
    var c = src[i], c2 = src.substr(i, 2);
    if (!started && !q) {   /* DELIMITER line */
      var m = /^[ \t]*DELIMITER[ \t]+(\S+)[ \t]*(\r?\n|$)/i.exec(src.slice(i));
      if (m && !cur.trim()) { delim = m[1]; i += m[0].length; continue; }
    }
    if (q) { cur += c; if (c === q) { if (src[i + 1] === q) { cur += src[++i]; } else q = ''; } else if (c === '\\' && q !== '`' && q !== '"') { /* MySQL escape */ if (i + 1 < n) cur += src[++i]; } i++; continue; }
    if (c2 === '--' && (i + 2 >= n || /\s/.test(src[i + 2]))) { while (i < n && src[i] !== '\n') i++; continue; }
    if (c === '#') { while (i < n && src[i] !== '\n') i++; continue; }
    if (c2 === '/*') { var e = src.indexOf('*/', i + 2); i = e < 0 ? n : e + 2; cur += ' '; continue; }
    if (c === "'" || c === '"' || c === '`') { endWord(); q = c; cur += c; started = true; i++; continue; }
    if (src.startsWith(delim, i) && (delim !== ';' || !trig || last === 'END')) { endWord(); push(); i += delim.length; continue; }
    if (/[A-Za-z_0-9]/.test(c)) { word += c; started = true; } else { endWord(); if (!/\s/.test(c)) started = true; }
    cur += c;
    if (!trig && word === '' && /^\s*CREATE\s+(TEMP(ORARY)?\s+)?TRIGGER\b/i.test(cur)) trig = true;
    i++;
  }
  endWord(); push(); return out;
}

/* top-level comma split (ignores commas inside brackets and quotes) */
function splitTop(s) {
  var out = [], d = 0, q = '', cur = '';
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (q) { cur += c; if (c === q) q = ''; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; cur += c; continue; }
    if (c === '(') d++; if (c === ')') d--;
    if (c === ',' && d === 0) { out.push(cur.trim()); cur = ''; } else cur += c;
  }
  if (cur.trim()) out.push(cur.trim()); return out;
}
function bodyOf(sql) { var a = sql.indexOf('('), b = sql.lastIndexOf(')'); return a < 0 || b < a ? null : { head: sql.slice(0, a), inner: sql.slice(a + 1, b), tail: sql.slice(b + 1) }; }

/* ---------------------------------------------------------------- MySQL column / table translation */
function colDef(d) {   /* one column definition, MySQL -> SQLite */
  d = d.replace(/\bUNSIGNED\b/ig, '').replace(/\bZEROFILL\b/ig, '').replace(/\bON\s+UPDATE\s+CURRENT_TIMESTAMP(\(\d*\))?/ig, '')
    .replace(/\bCHARACTER\s+SET\s+\w+/ig, '').replace(/\bCHARSET\s+\w+/ig, '').replace(/\bCOLLATE\s+\w+/ig, '')
    .replace(/\bCOMMENT\s+'(?:[^']|'')*'/ig, '').replace(/\bSERIAL\b/ig, 'INTEGER PRIMARY KEY AUTOINCREMENT')
    .replace(/\b(TINYINT|SMALLINT|MEDIUMINT|BIGINT|INT)\s*\(\s*\d+\s*\)/ig, '$1');
  var en = /^(\s*(?:`[^`]+`|"[^"]+"|\w+)\s+)ENUM\s*\(([^)]*)\)(.*)$/is.exec(d);
  if (en) { var nm = unq(en[1].trim()); d = en[1] + 'TEXT CHECK (' + qid(nm) + ' IN (' + en[2] + '))' + en[3]; }
  var se = /^(\s*(?:`[^`]+`|"[^"]+"|\w+)\s+)SET\s*\(([^)]*)\)(.*)$/is.exec(d); if (se) d = se[1] + 'TEXT' + se[3];
  if (/\bAUTO_INCREMENT\b/i.test(d)) {
    var m = /^\s*(`[^`]+`|"[^"]+"|\w+)\s/.exec(d);
    d = (m ? m[1] : 'id') + ' INTEGER PRIMARY KEY AUTOINCREMENT';
  }
  return d.replace(/\s+/g, ' ').trim();
}
function createTable(sql) {
  var b = bodyOf(sql); if (!b) return sql;
  var parts = splitTop(b.inner), cols = [], extra = [], after = [], autoCol = '', tname = (/CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?((?:`[^`]+`|"[^"]+"|\w+)(?:\.(?:`[^`]+`|"[^"]+"|\w+))?)/i.exec(sql) || [])[1] || 't';
  parts.forEach(function (p) {
    var up = p.replace(/^\s+/, '').toUpperCase();
    if (/^(UNIQUE\s+)?(KEY|INDEX)\b/.test(up)) {
      var u = /^UNIQUE/.test(up), m = /^(?:UNIQUE\s+)?(?:KEY|INDEX)\s*(`[^`]+`|\w+)?\s*\(([^)]*)\)/i.exec(p.trim());
      if (m) { if (u) extra.push('UNIQUE (' + m[2].replace(/\(\s*\d+\s*\)/g, '') + ')'); else after.push('CREATE INDEX IF NOT EXISTS ' + qid((m[1] ? unq(m[1]) : 'idx_' + unq(tname) + '_' + after.length)) + ' ON ' + tname + ' (' + m[2].replace(/\(\s*\d+\s*\)/g, '') + ')'); }
      return;
    }
    if (/^FULLTEXT\b|^SPATIAL\b/.test(up)) return;
    if (/^(CONSTRAINT\s+(`[^`]+`|\w+)\s+)?(PRIMARY\s+KEY|UNIQUE|FOREIGN\s+KEY|CHECK)\b/.test(up)) { extra.push(p.replace(/\bUSING\s+\w+/i, '').replace(/\bON\s+(DELETE|UPDATE)\s+NO\s+ACTION/ig, '')); return; }
    var cd = colDef(p); if (/PRIMARY KEY AUTOINCREMENT/.test(cd)) autoCol = (/^\s*(`[^`]+`|"[^"]+"|\w+)/.exec(cd) || [])[1] || ''; cols.push(cd);
  });
  if (autoCol) extra = extra.filter(function (x) { var m = /^PRIMARY\s+KEY\s*\(([^)]*)\)\s*$/i.exec(x.trim()); return !(m && unq(m[1].trim()) === unq(autoCol)); });
  var res = b.head + '(' + cols.concat(extra).join(', ') + ')';
  return { sql: res, after: after };
}

/* ---------------------------------------------------------------- ALTER TABLE */
function tableSql(db, t) { var r = db.exec("SELECT sql FROM sqlite_master WHERE type='table' AND lower(name)=lower(" + lit(t) + ')'); if (!r.length) throw new Error("Table '" + t + "' doesn't exist"); return r[0].values[0][0]; }
function rebuild(db, t, edit) {   /* the way SQLite changes a column: build the new table, copy rows, swap */
  var sql = tableSql(db, t), b = bodyOf(sql), parts = splitTop(b.inner), oldCols = [];
  var info = db.exec('PRAGMA table_info(' + qid(t) + ')')[0].values.map(function (r) { return r[1]; });
  var res = edit(parts, info); parts = res.parts; var map = res.map || {};
  var extra = db.exec("SELECT sql FROM sqlite_master WHERE tbl_name=" + lit(t) + " AND type IN ('index','trigger') AND sql IS NOT NULL")[0];
  var tmp = t + '__fs_new', newSql = 'CREATE TABLE ' + qid(tmp) + ' (' + parts.join(', ') + ')';
  db.exec('PRAGMA foreign_keys=OFF; BEGIN');
  try {
    db.exec(newSql);
    var nc = db.exec('PRAGMA table_info(' + qid(tmp) + ')')[0].values.map(function (r) { return r[1]; }), sel = [], ins = [];
    nc.forEach(function (c) { var src = null; Object.keys(map).forEach(function (o) { if (map[o] === c) src = o; }); if (!src && info.indexOf(c) >= 0) src = c; if (src) { ins.push(qid(c)); sel.push(qid(src)); } });
    if (ins.length) db.exec('INSERT INTO ' + qid(tmp) + ' (' + ins.join(',') + ') SELECT ' + sel.join(',') + ' FROM ' + qid(t));
    db.exec('DROP TABLE ' + qid(t) + '; ALTER TABLE ' + qid(tmp) + ' RENAME TO ' + qid(t));
    if (extra) extra.values.forEach(function (r) { try { db.exec(r[0]); } catch (e) { } });
    db.exec('COMMIT');
  } catch (e) { try { db.exec('ROLLBACK'); } catch (x) { } db.exec('PRAGMA foreign_keys=ON'); throw e; }
  db.exec('PRAGMA foreign_keys=ON');
}
function colName(p) { var m = /^\s*(`[^`]+`|"[^"]+"|\[[^\]]+\]|\w+)/.exec(p); return m ? unq(m[1]) : ''; }
function alterTable(db, sql) {
  var m = /^ALTER\s+TABLE\s+(`[^`]+`|"[^"]+"|\w+)\s+([\s\S]+)$/i.exec(sql); if (!m) throw new Error('Incomplete ALTER TABLE');
  var t = unq(m[1]), acts = splitTop(m[2].replace(/\bENGINE\s*=\s*\w+/ig, '').replace(/\bAUTO_INCREMENT\s*=\s*\d+/ig, '')), did = 0;
  acts.forEach(function (a) {
    a = a.trim(); if (!a) return; var A = a.toUpperCase(), mm;
    if ((mm = /^ADD\s+(?:COLUMN\s+)?(?!PRIMARY|UNIQUE|FOREIGN|CONSTRAINT|INDEX|KEY|CHECK)([\s\S]+)$/i.exec(a))) {
      var cd = colDef(mm[1].replace(/\s+(FIRST|AFTER\s+\S+)\s*$/i, '')); /* column position is not supported in SQLite: it is added at the end */
      if (/PRIMARY KEY AUTOINCREMENT/.test(cd)) throw new Error('SQLite cannot add an AUTO_INCREMENT primary key to an existing table. Create the table with it instead.');
      db.exec('ALTER TABLE ' + qid(t) + ' ADD COLUMN ' + cd);
    } else if ((mm = /^DROP\s+(?:COLUMN\s+)?(?!PRIMARY|FOREIGN|INDEX|KEY|CONSTRAINT)(`[^`]+`|"[^"]+"|\w+)\s*$/i.exec(a))) db.exec('ALTER TABLE ' + qid(t) + ' DROP COLUMN ' + qid(unq(mm[1])));
    else if ((mm = /^RENAME\s+(?:TO|AS)\s+(`[^`]+`|"[^"]+"|\w+)$/i.exec(a))) db.exec('ALTER TABLE ' + qid(t) + ' RENAME TO ' + qid(unq(mm[1])));
    else if ((mm = /^RENAME\s+COLUMN\s+(\S+)\s+TO\s+(\S+)$/i.exec(a))) db.exec('ALTER TABLE ' + qid(t) + ' RENAME COLUMN ' + qid(unq(mm[1])) + ' TO ' + qid(unq(mm[2])));
    else if ((mm = /^MODIFY\s+(?:COLUMN\s+)?([\s\S]+)$/i.exec(a))) { var def = colDef(mm[1].replace(/\s+(FIRST|AFTER\s+\S+)\s*$/i, '')), nm = colName(def); rebuild(db, t, function (parts) { var f = 0; parts = parts.map(function (p) { if (colName(p).toLowerCase() === nm.toLowerCase()) { f = 1; return def; } return p; }); if (!f) throw new Error("Unknown column '" + nm + "' in '" + t + "'"); return { parts: parts }; }); }
    else if ((mm = /^CHANGE\s+(?:COLUMN\s+)?(`[^`]+`|"[^"]+"|\w+)\s+([\s\S]+)$/i.exec(a))) { var old = unq(mm[1]), def2 = colDef(mm[2].replace(/\s+(FIRST|AFTER\s+\S+)\s*$/i, '')), nn = colName(def2); rebuild(db, t, function (parts) { var f = 0; parts = parts.map(function (p) { if (colName(p).toLowerCase() === old.toLowerCase()) { f = 1; return def2; } return p; }); if (!f) throw new Error("Unknown column '" + old + "' in '" + t + "'"); var mp = {}; mp[old] = nn; return { parts: parts, map: mp }; }); }
    else if ((mm = /^ADD\s+(UNIQUE\s+)?(?:INDEX|KEY)\s*(`[^`]+`|\w+)?\s*\(([^)]*)\)/i.exec(a))) db.exec('CREATE ' + (mm[1] ? 'UNIQUE ' : '') + 'INDEX ' + qid(mm[2] ? unq(mm[2]) : 'idx_' + t + '_' + (++did)) + ' ON ' + qid(t) + ' (' + mm[3].replace(/\(\s*\d+\s*\)/g, '') + ')');
    else if ((mm = /^ADD\s+((?:CONSTRAINT\s+\S+\s+)?(?:PRIMARY\s+KEY|UNIQUE|FOREIGN\s+KEY|CHECK)[\s\S]*)$/i.exec(a))) { var con = mm[1]; rebuild(db, t, function (parts) { if (/^PRIMARY/i.test(con.replace(/^CONSTRAINT\s+\S+\s+/i, ''))) { var pk = /\(([^)]*)\)/.exec(con)[1].split(',').map(function (x) { return unq(x.trim()).toLowerCase(); }); parts = parts.filter(function (p) { return !/^\s*(CONSTRAINT\s+\S+\s+)?PRIMARY\s+KEY/i.test(p); }).map(function (p) { return /\bPRIMARY\s+KEY\b/i.test(p) ? p.replace(/\bPRIMARY\s+KEY(\s+AUTOINCREMENT)?/ig, '') : p; }); } parts.push(con); return { parts: parts }; }); }
    else if ((mm = /^DROP\s+(?:INDEX|KEY)\s+(`[^`]+`|"[^"]+"|\w+)/i.exec(a))) db.exec('DROP INDEX ' + qid(unq(mm[1])));
    else if (/^DROP\s+PRIMARY\s+KEY/i.test(A)) rebuild(db, t, function (parts) { return { parts: parts.filter(function (p) { return !/^\s*(CONSTRAINT\s+\S+\s+)?PRIMARY\s+KEY/i.test(p); }).map(function (p) { return p.replace(/\bPRIMARY\s+KEY(\s+AUTOINCREMENT)?/ig, ''); }) }; });
    else if ((mm = /^DROP\s+(?:FOREIGN\s+KEY|CONSTRAINT)\s+(`[^`]+`|"[^"]+"|\w+)/i.exec(a))) { var cn = unq(mm[1]).toLowerCase(); rebuild(db, t, function (parts) { return { parts: parts.filter(function (p) { var c = /^\s*CONSTRAINT\s+(`[^`]+`|"[^"]+"|\w+)/i.exec(p); return !(c && unq(c[1]).toLowerCase() === cn); }) }; }); }
    else throw new Error('This ALTER TABLE form is not supported: ' + a.slice(0, 60));
  });
}

/* ---------------------------------------------------------------- MySQL result-set commands -> SQLite */
function describeSql(db, t) {
  var cols = db.exec('PRAGMA table_info(' + qid(t) + ')');
  if (!cols.length) throw new Error("Table '" + t + "' doesn't exist");
  var uniq = {}; db.exec('PRAGMA index_list(' + qid(t) + ')').forEach(function (r) { r.values.forEach(function (ix) { var ci = db.exec('PRAGMA index_info(' + qid(ix[1]) + ')'); if (ci.length && ci[0].values.length === 1) uniq[ci[0].values[0][2]] = ix[2] ? 'UNI' : 'MUL'; }); });
  var autoPk = /AUTOINCREMENT/i.test(tableSql(db, t));
  return { cols: ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'], rows: cols[0].values.map(function (r) { return [r[1], r[2] || '', r[3] ? 'NO' : 'YES', r[5] ? 'PRI' : (uniq[r[1]] || ''), r[4] === null ? null : String(r[4]), r[5] && autoPk ? 'auto_increment' : '']; }) };
}
function selectOf(db, q) { var s = db.prepare(q), cols = s.getColumnNames(), rows = []; while (s.step()) rows.push(s.get()); s.free(); return { cols: cols, rows: rows }; }

/* ---------------------------------------------------------------- statement runner */
var SQL_FUNCS = null;
function val(v) { return v; }
function regFuncs(db) {
  function f(n, fn, argc) { try { db.create_function(n, fn); } catch (e) { } }
  function s(x) { return x === null || x === undefined ? null : String(x); }
  f('CONCAT', function () { var o = ''; for (var i = 0; i < arguments.length; i++) { if (arguments[i] === null) return null; o += arguments[i]; } return o; });
  f('CONCAT_WS', function (sep) { var a = []; for (var i = 1; i < arguments.length; i++) if (arguments[i] !== null) a.push(arguments[i]); return sep === null ? null : a.join(sep); });
  f('NOW', function () { return new Date().toISOString().slice(0, 19).replace('T', ' '); });
  f('CURDATE', function () { return new Date().toISOString().slice(0, 10); });
  f('CURTIME', function () { return new Date().toISOString().slice(11, 19); });
  f('LEFT', function (x, n) { return s(x) === null ? null : s(x).slice(0, Math.max(0, n)); });
  f('RIGHT', function (x, n) { return s(x) === null ? null : (n <= 0 ? '' : s(x).slice(-n)); });
  f('LPAD', function (x, n, p) { x = s(x); if (x === null) return null; p = s(p) || ' '; if (x.length >= n) return x.slice(0, n); while (x.length < n) x = p + x; return x.slice(x.length - n); });
  f('RPAD', function (x, n, p) { x = s(x); if (x === null) return null; p = s(p) || ' '; if (x.length >= n) return x.slice(0, n); while (x.length < n) x += p; return x.slice(0, n); });
  f('REVERSE', function (x) { return s(x) === null ? null : s(x).split('').reverse().join(''); });
  f('REPEAT', function (x, n) { return s(x) === null ? null : new Array(Math.max(0, n) + 1).join(s(x)); });
  f('CHAR_LENGTH', function (x) { return s(x) === null ? null : s(x).length; });
  f('FLOOR', function (x) { return x === null ? null : Math.floor(x); });
  f('CEIL', function (x) { return x === null ? null : Math.ceil(x); });
  f('CEILING', function (x) { return x === null ? null : Math.ceil(x); });
  f('POWER', function (a, b) { return Math.pow(a, b); }); f('POW', function (a, b) { return Math.pow(a, b); });
  f('SQRT', function (x) { return x === null || x < 0 ? null : Math.sqrt(x); });
  f('MOD', function (a, b) { return b === 0 || a === null || b === null ? null : a % b; });
  f('LOG', function (a, b) { return b === undefined ? Math.log(a) : Math.log(b) / Math.log(a); }); f('LN', function (a) { return Math.log(a); });
  f('LOG10', function (a) { return Math.log10(a); }); f('LOG2', function (a) { return Math.log2(a); }); f('EXP', function (a) { return Math.exp(a); });
  f('PI', function () { return Math.PI; });
  f('SIGN', function (a) { return a === null ? null : (a > 0 ? 1 : a < 0 ? -1 : 0); });
  f('TRUNCATE', function (x, d) { var m = Math.pow(10, d); return x === null ? null : Math.trunc(x * m) / m; });
  f('IF', function (c, a, b) { return c && c !== '0' ? a : b; });
  f('YEAR', function (d) { var m = /^(\d{4})/.exec(s(d) || ''); return m ? +m[1] : null; });
  f('MONTH', function (d) { var m = /^\d{4}-(\d{2})/.exec(s(d) || ''); return m ? +m[1] : null; });
  f('DAY', function (d) { var m = /^\d{4}-\d{2}-(\d{2})/.exec(s(d) || ''); return m ? +m[1] : null; }); f('DAYOFMONTH', function (d) { var m = /^\d{4}-\d{2}-(\d{2})/.exec(s(d) || ''); return m ? +m[1] : null; });
  f('HOUR', function (d) { var m = /(\d{2}):\d{2}/.exec(s(d) || ''); return m ? +m[1] : null; });
  f('MINUTE', function (d) { var m = /\d{2}:(\d{2})/.exec(s(d) || ''); return m ? +m[1] : null; });
  f('DATEDIFF', function (a, b) { var x = Date.parse(String(a).slice(0, 10)), y = Date.parse(String(b).slice(0, 10)); return isNaN(x) || isNaN(y) ? null : Math.round((x - y) / 86400000); });
  f('DATE_FORMAT', function (d, fm) { var t = new Date(String(d).replace(' ', 'T') + (/Z|\+/.test(String(d)) ? '' : 'Z')); if (isNaN(t)) return null; var P = function (n, l) { return ('0' + n).slice(-(l || 2)); }, M = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], D = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; return String(fm).replace(/%([a-zA-Z%])/g, function (x, c) { switch (c) { case 'Y': return t.getUTCFullYear(); case 'y': return P(t.getUTCFullYear() % 100); case 'm': return P(t.getUTCMonth() + 1); case 'c': return t.getUTCMonth() + 1; case 'd': return P(t.getUTCDate()); case 'e': return t.getUTCDate(); case 'H': return P(t.getUTCHours()); case 'h': case 'I': return P(t.getUTCHours() % 12 || 12); case 'i': return P(t.getUTCMinutes()); case 's': case 'S': return P(t.getUTCSeconds()); case 'p': return t.getUTCHours() < 12 ? 'AM' : 'PM'; case 'M': return M[t.getUTCMonth()]; case 'b': return M[t.getUTCMonth()].slice(0, 3); case 'W': return D[t.getUTCDay()]; case 'a': return D[t.getUTCDay()].slice(0, 3); case '%': return '%'; default: return x; } }); });
  f('DATABASE', function () { return CUR || null; });
  f('SCHEMA', function () { return CUR || null; });
  f('VERSION', function () { return '3.45.2-sqlite (FutureSelf SQL Lab)'; });
  f('FIELD', function (x) { for (var i = 1; i < arguments.length; i++) if (arguments[i] === x) return i; return 0; });
  f('FIND_IN_SET', function (x, l) { var a = String(l).split(','); var i = a.indexOf(String(x)); return i < 0 ? 0 : i + 1; });
  f('REGEXP_LIKE', function (a, b) { try { return new RegExp(b, 'i').test(a) ? 1 : 0; } catch (e) { return null; } });
  f('REGEXP', function (b, a) { try { return new RegExp(b, 'i').test(a) ? 1 : 0; } catch (e) { return null; } });
  f('UUID', function () { return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); }); });
  f('RAND', function () { return Math.random(); });
  f('SUBSTRING_INDEX', function (x, d, n) { var a = String(x).split(d); return n >= 0 ? a.slice(0, n).join(d) : a.slice(n).join(d); });
}
function openDb(name, bytes) {
  var db = bytes ? new SQL.Database(bytes) : new SQL.Database();
  db.run('PRAGMA foreign_keys=ON'); regFuncs(db); DBS[name] = db; TX[name] = false; return db;
}
function reopenFix(db) { db.run('PRAGMA foreign_keys=ON'); regFuncs(db); }

/* MySQL's / always gives a decimal (5/2 = 2.5) and DIV is whole-number division; SQLite's / on two integers cuts the decimals. Make / behave like MySQL. */
function divide(s) {
  var o = '', q = '', i = 0, n = s.length;
  while (i < n) {
    var c = s[i];
    if (q) { o += c; if (c === q) { if (s[i + 1] === q) o += s[++i]; else q = ''; } i++; continue; }
    if (c === "'" || c === '"' || c === '`') { q = c; o += c; i++; continue; }
    if (c === '/' && s[i + 1] === '*') { var e = s.indexOf('*/', i + 2); e = e < 0 ? n : e + 2; o += s.slice(i, e); i = e; continue; }
    if (c === '-' && s[i + 1] === '-') { var e2 = s.indexOf('\n', i); e2 = e2 < 0 ? n : e2; o += s.slice(i, e2); i = e2; continue; }
    if (c === '/') { o += '*1.0/'; i++; continue; }
    if ((c === 'D' || c === 'd') && /^div\b/i.test(s.substr(i, 4)) && !/\w/.test(s[i - 1] || ' ')) { o += '/'; i += 3; /* integer division: leave as SQLite's own */ continue; }
    o += c; i++;
  }
  return o;
}

/* the MySQL-specific rewrites that apply to ordinary statements */
function rewrite(sql) {
  var s = sql;
  s = s.replace(/^\s*INSERT\s+IGNORE\s+INTO/i, 'INSERT OR IGNORE INTO');
  var od = /\bON\s+DUPLICATE\s+KEY\s+UPDATE\s+([\s\S]+)$/i.exec(s);
  if (od) s = s.slice(0, od.index) + 'ON CONFLICT DO UPDATE SET ' + od[1].replace(/\bVALUES\s*\(\s*(`[^`]+`|"[^"]+"|\w+)\s*\)/ig, 'excluded.$1');
  s = s.replace(/GROUP_CONCAT\s*\(\s*(?:DISTINCT\s+)?([^()]*?(?:\([^()]*\)[^()]*?)*?)\s+SEPARATOR\s+('(?:[^']|'')*')\s*\)/ig, function (m, a, sep) { return 'GROUP_CONCAT(' + a + ', ' + sep + ')'; });
  s = s.replace(/\s+FOR\s+UPDATE\s*$/i, '').replace(/\s+LOCK\s+IN\s+SHARE\s+MODE\s*$/i, '');
  s = s.replace(/\bSTRAIGHT_JOIN\b/ig, 'JOIN').replace(/\bUSING\s+(BTREE|HASH)\b/ig, '');
  s = s.replace(/\bCURRENT_TIMESTAMP\s*\(\s*\d*\s*\)/ig, 'CURRENT_TIMESTAMP');
  return divide(s);
}

function isRead(w) { return /^(SELECT|SHOW|DESC|DESCRIBE|EXPLAIN|PRAGMA|WITH|VALUES|SET|USE)$/.test(w); }
function runOne(stmt, out, changed, dropped) {
  var t0 = Date.now(), up = stmt.replace(/^\s+/, ''), w = (/^\w+/.exec(up) || [''])[0].toUpperCase(), m, db = DBS[CUR];
  function ok(msg, n) { out.push({ type: 'ok', msg: msg, rows: n || 0, ms: Date.now() - t0, sql: stmt }); }
  /* ---- databases */
  if ((m = /^CREATE\s+(?:DATABASE|SCHEMA)\s+(IF\s+NOT\s+EXISTS\s+)?(\S+?)(?:\s+(?:DEFAULT\s+)?(?:CHARACTER\s+SET|CHARSET|COLLATE)[\s\S]*)?$/i.exec(up))) {
    var n = dbName(m[2]); if (DBS[n]) { if (m[1]) { ok('Query OK, 0 rows affected, 1 warning (database exists)'); return; } throw new Error("Can't create database '" + n + "'; database exists"); }
    openDb(n); changed[n] = 1; if (!CUR) CUR = n; ok('Query OK, 1 row affected (database ' + n + ' created)'); return;
  }
  if ((m = /^DROP\s+(?:DATABASE|SCHEMA)\s+(IF\s+EXISTS\s+)?(\S+)$/i.exec(up))) {
    var d = dbName(m[2]); if (!DBS[d]) { if (m[1]) { ok('Query OK, 0 rows affected, 1 warning'); return; } throw new Error("Can't drop database '" + d + "'; database doesn't exist"); }
    try { DBS[d].close(); } catch (e) { } delete DBS[d]; delete TX[d]; delete changed[d]; dropped.push(d); if (CUR === d) CUR = ''; ok('Query OK, database ' + d + ' dropped'); return;
  }
  if ((m = /^USE\s+(\S+)$/i.exec(up))) { var u = dbName(m[1]); if (!DBS[u]) throw new Error("Unknown database '" + u + "'"); CUR = u; ok('Database changed to ' + u); return; }
  if (/^SHOW\s+(DATABASES|SCHEMAS)\b/i.test(up)) { out.push({ type: 'rows', cols: ['Database'], rows: Object.keys(DBS).sort().map(function (x) { return [x]; }), ms: Date.now() - t0, sql: stmt }); return; }
  if (!db && !/^(SET|SELECT\s+(DATABASE|VERSION))/i.test(up)) throw new Error('No database selected. Run CREATE DATABASE name; then USE name; (or pick a database on the left).');
  /* ---- schema inspection */
  if ((m = /^SHOW\s+(?:FULL\s+)?TABLES(?:\s+(?:FROM|IN)\s+\S+)?(?:\s+LIKE\s+('(?:[^']|'')*'))?$/i.exec(up))) {
    var r = selectOf(db, "SELECT name FROM sqlite_master WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%'" + (m[1] ? ' AND name LIKE ' + m[1] : '') + ' ORDER BY name');
    r.cols = ['Tables_in_' + CUR]; out.push({ type: 'rows', cols: r.cols, rows: r.rows, ms: Date.now() - t0, sql: stmt }); return;
  }
  if ((m = /^SHOW\s+CREATE\s+(TABLE|VIEW)\s+(\S+)$/i.exec(up))) {
    var tn = unq(m[2]), cs = db.exec("SELECT name, sql FROM sqlite_master WHERE lower(name)=lower(" + lit(tn) + ") AND type IN ('table','view')");
    if (!cs.length) throw new Error("Table '" + tn + "' doesn't exist"); out.push({ type: 'rows', cols: [m[1][0].toUpperCase() + m[1].slice(1).toLowerCase(), 'Create ' + m[1][0].toUpperCase() + m[1].slice(1).toLowerCase()], rows: [cs[0].values[0]], ms: Date.now() - t0, sql: stmt }); return;
  }
  if ((m = /^(?:SHOW\s+(?:FULL\s+)?(?:COLUMNS|FIELDS)\s+(?:FROM|IN)|DESCRIBE|DESC|EXPLAIN)\s+(`[^`]+`|"[^"]+"|\w+)\s*$/i.exec(up)) && !/^EXPLAIN\s+(SELECT|INSERT|UPDATE|DELETE|WITH|QUERY)/i.test(up)) { var dd = describeSql(db, unq(m[1])); dd.type = 'rows'; dd.ms = Date.now() - t0; dd.sql = stmt; out.push(dd); return; }
  if ((m = /^SHOW\s+(?:INDEX|INDEXES|KEYS)\s+(?:FROM|IN)\s+(\S+)/i.exec(up))) {
    var tt = unq(m[1]), rows = []; db.exec('PRAGMA index_list(' + qid(tt) + ')').forEach(function (r) { r.values.forEach(function (ix) { db.exec('PRAGMA index_info(' + qid(ix[1]) + ')')[0].values.forEach(function (c) { rows.push([tt, ix[2] ? 0 : 1, ix[1], c[0] + 1, c[2]]); }); }); });
    out.push({ type: 'rows', cols: ['Table', 'Non_unique', 'Key_name', 'Seq_in_index', 'Column_name'], rows: rows, ms: Date.now() - t0, sql: stmt }); return;
  }
  if (/^SHOW\s+(WARNINGS|ERRORS|ENGINES|STATUS|VARIABLES|PROCESSLIST|GRANTS)\b/i.test(up)) { out.push({ type: 'rows', cols: ['Note'], rows: [['Not applicable in SQL Lab (SQLite)']], ms: 0, sql: stmt }); return; }
  /* ---- things MySQL scripts start with */
  if (/^SET\b/i.test(up)) { if (/^SET\s+foreign_key_checks\s*=\s*(0|off)/i.test(up)) db && db.run('PRAGMA foreign_keys=OFF'); else if (/^SET\s+foreign_key_checks\s*=\s*(1|on)/i.test(up)) db && db.run('PRAGMA foreign_keys=ON'); ok('Query OK, 0 rows affected'); return; }
  if (/^(LOCK|UNLOCK)\s+TABLES?\b/i.test(up)) { ok('Query OK'); return; }
  if (/^START\s+TRANSACTION\b/i.test(up)) { db.run('BEGIN'); TX[CUR] = true; ok('Query OK, transaction started'); return; }
  if (/^BEGIN\b/i.test(up)) { db.run(up); TX[CUR] = true; ok('Query OK, transaction started'); return; }
  if (/^(COMMIT|END)\b/i.test(up)) { db.run('COMMIT'); TX[CUR] = false; changed[CUR] = 1; ok('Query OK, committed'); return; }
  if (/^ROLLBACK\b/i.test(up) && !/TO\s+/i.test(up)) { db.run('ROLLBACK'); TX[CUR] = false; ok('Query OK, rolled back'); return; }
  if ((m = /^TRUNCATE\s+(?:TABLE\s+)?(\S+)$/i.exec(up))) { var tr = unq(m[1]); tableSql(db, tr); db.run('DELETE FROM ' + qid(tr)); try { db.run('DELETE FROM sqlite_sequence WHERE name=' + lit(tr)); } catch (e) { } changed[CUR] = 1; ok('Query OK, 0 rows affected'); return; }
  if ((m = /^RENAME\s+TABLE\s+([\s\S]+)$/i.exec(up))) { splitTop(m[1]).forEach(function (p) { var q = /^(\S+)\s+TO\s+(\S+)$/i.exec(p.trim()); if (!q) throw new Error('Bad RENAME TABLE'); db.run('ALTER TABLE ' + qid(unq(q[1])) + ' RENAME TO ' + qid(unq(q[2]))); }); changed[CUR] = 1; ok('Query OK, 0 rows affected'); return; }
  if ((m = /^DROP\s+TABLE\s+(IF\s+EXISTS\s+)?([\s\S]+)$/i.exec(up)) && /,/.test(m[2])) { splitTop(m[2]).forEach(function (t) { db.run('DROP TABLE ' + (m[1] || '') + qid(unq(t))); }); changed[CUR] = 1; ok('Query OK, 0 rows affected'); return; }
  if (/^ALTER\s+TABLE\b/i.test(up)) { alterTable(db, up.replace(/;\s*$/, '')); changed[CUR] = 1; ok('Query OK, 0 rows affected'); return; }
  if (/^CREATE\s+(TEMP(ORARY)?\s+)?TABLE\b/i.test(up) && !/\bAS\s+SELECT\b/i.test(up)) {
    var lk = /^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(IF\s+NOT\s+EXISTS\s+)?(\S+)\s+LIKE\s+(\S+)\s*$/i.exec(up);
    if (lk) { var src = tableSql(db, unq(lk[3])); db.run(src.replace(/^(CREATE\s+TABLE\s+)(?:IF\s+NOT\s+EXISTS\s+)?(?:"[^"]+"|`[^`]+`|\w+)/i, '$1' + (lk[1] ? 'IF NOT EXISTS ' : '') + qid(unq(lk[2])))); changed[CUR] = 1; ok('Query OK, 0 rows affected'); return; }
    var ct = createTable(up), after = [];
    if (typeof ct === 'object') { after = ct.after; ct = ct.sql; }
    db.run(ct); after.forEach(function (a) { db.run(a); }); changed[CUR] = 1; ok('Query OK, 0 rows affected'); return;
  }
  /* ---- everything else goes straight to SQLite */
  var q = rewrite(up), st = db.prepare(q), cols = st.getColumnNames();
  if (cols.length) {
    var rows = [], total = 0, LIM = 2000; while (st.step()) { total++; if (rows.length < LIM) rows.push(st.get()); } st.free();
    out.push({ type: 'rows', cols: cols, rows: rows, total: total, ms: Date.now() - t0, sql: stmt });
    if (!isRead(w) || /\bRETURNING\b/i.test(q)) changed[CUR] = 1; return;
  }
  st.step(); st.free(); var n2 = db.getRowsModified(), msg = 'Query OK, ' + n2 + (n2 === 1 ? ' row' : ' rows') + ' affected';
  if (w === 'INSERT' || w === 'REPLACE') { var id = db.exec('SELECT last_insert_rowid()'); if (id.length && id[0].values[0][0]) msg += ', last insert id ' + id[0].values[0][0]; }
  if (!isRead(w)) changed[CUR] = 1; ok(msg, n2);
}

function runScript(code, cur) {
  CUR = DBS[cur] ? cur : (CUR && DBS[CUR] ? CUR : '');
  var stmts = splitSql(code), out = [], changed = {}, dropped = [], skipped = 0;
  for (var i = 0; i < stmts.length; i++) {
    try { runOne(stmts[i], out, changed, dropped); }
    catch (e) { out.push({ type: 'error', msg: String((e && e.message) || e).replace(/^Error:\s*/, ''), sql: stmts[i] }); skipped = stmts.length - i - 1; break; }
  }
  /* flush changed databases (export reopens the connection, so skip any in the middle of a transaction) */
  var files = {};
  Object.keys(changed).forEach(function (n) { if (DBS[n] && !TX[n]) { try { files[n] = DBS[n].export(); reopenFix(DBS[n]); } catch (e) { } } });
  return { results: out, cur: CUR, skipped: skipped, files: files, dropped: dropped, dbs: Object.keys(DBS).sort() };
}

function schema(name) {
  var db = DBS[name]; if (!db) return [];
  var r = db.exec("SELECT name, type FROM sqlite_master WHERE type IN ('table','view') AND name NOT LIKE 'sqlite_%' ORDER BY type DESC, name");
  if (!r.length) return [];
  return r[0].values.map(function (v) {
    var cols = db.exec('PRAGMA table_info(' + qid(v[0]) + ')'), c = cols.length ? cols[0].values.map(function (x) { return { n: x[1], t: x[2] || '', pk: x[5] ? 1 : 0, nn: x[3] ? 1 : 0 }; }) : [], cnt = null;
    try { cnt = db.exec('SELECT count(*) FROM ' + qid(v[0]))[0].values[0][0]; } catch (e) { }
    return { name: v[0], kind: v[1], cols: c, rows: cnt };
  });
}

function dump(name) {
  var db = DBS[name], o = ['-- FutureSelf SQL Lab dump of database ' + name, 'PRAGMA foreign_keys=OFF;', 'BEGIN TRANSACTION;'], masters = db.exec("SELECT type, name, sql FROM sqlite_master WHERE sql IS NOT NULL AND name NOT LIKE 'sqlite_%' ORDER BY CASE type WHEN 'table' THEN 0 WHEN 'index' THEN 2 WHEN 'view' THEN 3 ELSE 4 END, rowid");
  if (masters.length) masters[0].values.forEach(function (m) {
    if (m[0] === 'table') {
      o.push(m[2] + ';');
      var s = db.prepare('SELECT * FROM ' + qid(m[1])), cols = s.getColumnNames().map(qid).join(',');
      while (s.step()) o.push('INSERT INTO ' + qid(m[1]) + ' (' + cols + ') VALUES (' + s.get().map(function (v) { return v === null ? 'NULL' : typeof v === 'number' ? String(v) : v instanceof Uint8Array ? "X'" + Array.prototype.map.call(v, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('') + "'" : lit(v); }).join(',') + ');');
      s.free();
    }
  });
  if (masters.length) masters[0].values.forEach(function (m) { if (m[0] !== 'table') o.push(m[2] + ';'); });
  o.push('COMMIT;'); return o.join('\n') + '\n';
}

self.onmessage = function (e) {
  var d = e.data || {};
  SQLP.then(function (S) {
    SQL = S; var res;
    try {
      if (d.op === 'load') { (d.files || []).forEach(function (f) { try { if (DBS[f.name]) DBS[f.name].close(); } catch (x) { } openDb(f.name, f.bytes); }); res = { dbs: Object.keys(DBS).sort() }; }
      else if (d.op === 'run') res = runScript(String(d.code || ''), d.cur);
      else if (d.op === 'schema') res = { schema: schema(d.name) };
      else if (d.op === 'dump') res = { text: dump(d.name) };
      else if (d.op === 'export') { var b = DBS[d.name].export(); reopenFix(DBS[d.name]); res = { bytes: b }; }
      else if (d.op === 'import') { var n = dbName(d.name); if (DBS[n]) throw new Error("A database named '" + n + "' already exists"); var t = new SQL.Database(d.bytes); t.exec('SELECT count(*) FROM sqlite_master'); try { t.close(); } catch (x) { } openDb(n, d.bytes); CUR = n; res = { dbs: Object.keys(DBS).sort(), cur: n }; }
      else throw new Error('Unknown request');
      self.postMessage({ id: d.id, ok: true, res: res });
    } catch (x) { self.postMessage({ id: d.id, ok: false, error: String((x && x.message) || x) }); }
  }).catch(function (x) { self.postMessage({ id: d.id, ok: false, error: 'SQL engine failed to start: ' + ((x && x.message) || x) }); });
};

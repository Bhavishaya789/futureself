/* FutureSelf coding platform (B.Tech): editor, run, terminal, practice questions, coding challenge arena.
   Where the code runs, in this order: your PC (any compiler/interpreter installed, Windows app) -> inside the app (JavaScript and Python work offline on every device)
   -> the FutureSelf code server (C, C++, Java, Go, Rust, C# ... from a phone or a PC without the compiler). */
(function () {
  'use strict';
  var H = function () { return FSX.h; }, esc = function (s) { return H().esc(s); };
  function $(s, r) { return (r || document).querySelector(s); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  function acct(op, p) { return window.fsApi && window.fsApi.acct ? window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) throw new Error((r && r.error) || 'Something went wrong'); return r.data; }) : Promise.reject(new Error('Sign in to FutureSelf to use this.')); }
  function isBtech() { var u = H().S && H().S.user; return !!(u && /btech\d/.test(u.track || '')); }

  /* ================= languages ================= */
  var LANGS = [['python', 'Python', 'py'], ['javascript', 'JavaScript', 'js'], ['java', 'Java', 'java'], ['c', 'C', 'c'], ['cpp', 'C++', 'cpp'], ['csharp', 'C#', 'cs'], ['go', 'Go', 'go'], ['rust', 'Rust', 'rs'], ['kotlin', 'Kotlin', 'kt'], ['typescript', 'TypeScript', 'ts'], ['swift', 'Swift', 'swift'], ['php', 'PHP', 'php'], ['ruby', 'Ruby', 'rb'], ['dart', 'Dart', 'dart'], ['r', 'R', 'r'], ['bash', 'Bash', 'sh'], ['sql', 'SQL', 'sql'], ['lua', 'Lua', 'lua'], ['perl', 'Perl', 'pl'], ['haskell', 'Haskell', 'hs'], ['scala', 'Scala', 'scala']];
  var TPL = {
    python: 'n = int(input())\nnums = list(map(int, input().split()))\nprint(sum(nums))\n',
    javascript: 'const lines = require("fs").readFileSync(0, "utf8").split("\\n");\nconst n = parseInt(lines[0]);\nconst nums = lines[1].split(" ").map(Number);\nconsole.log(nums.reduce((a, b) => a + b, 0));\n',
    java: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt(), sum = 0;\n        for (int i = 0; i < n; i++) sum += sc.nextInt();\n        System.out.println(sum);\n    }\n}\n',
    c: '#include <stdio.h>\n\nint main() {\n    int n, x, sum = 0;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) { scanf("%d", &x); sum += x; }\n    printf("%d\\n", sum);\n    return 0;\n}\n',
    cpp: '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    long long sum = 0;\n    for (int i = 0; i < n; i++) { int x; cin >> x; sum += x; }\n    cout << sum << endl;\n    return 0;\n}\n',
    csharp: 'using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        int n = int.Parse(Console.ReadLine());\n        var nums = Console.ReadLine().Split(\' \').Select(int.Parse);\n        Console.WriteLine(nums.Sum());\n    }\n}\n',
    go: 'package main\n\nimport "fmt"\n\nfunc main() {\n    var n, x, sum int\n    fmt.Scan(&n)\n    for i := 0; i < n; i++ {\n        fmt.Scan(&x)\n        sum += x\n    }\n    fmt.Println(sum)\n}\n',
    rust: 'use std::io::{self, Read};\n\nfn main() {\n    let mut s = String::new();\n    io::stdin().read_to_string(&mut s).unwrap();\n    let v: Vec<i64> = s.split_whitespace().map(|x| x.parse().unwrap()).collect();\n    println!("{}", v[1..].iter().sum::<i64>());\n}\n',
    kotlin: 'fun main() {\n    val n = readLine()!!.trim().toInt()\n    val nums = readLine()!!.trim().split(" ").map { it.toInt() }\n    println(nums.sum())\n}\n',
    typescript: 'const lines = require("fs").readFileSync(0, "utf8").split("\\n");\nconst nums: number[] = lines[1].split(" ").map(Number);\nconsole.log(nums.reduce((a, b) => a + b, 0));\n',
    swift: 'let n = Int(readLine()!)!\nlet nums = readLine()!.split(separator: " ").map { Int($0)! }\nprint(nums.reduce(0, +))\n',
    php: '<?php\n$n = intval(trim(fgets(STDIN)));\n$nums = array_map("intval", explode(" ", trim(fgets(STDIN))));\necho array_sum($nums) . "\\n";\n',
    ruby: 'n = gets.to_i\nnums = gets.split.map(&:to_i)\nputs nums.sum\n',
    dart: 'import \'dart:io\';\n\nvoid main() {\n  int n = int.parse(stdin.readLineSync()!);\n  var nums = stdin.readLineSync()!.split(\' \').map(int.parse);\n  print(nums.reduce((a, b) => a + b));\n}\n',
    r: 'con <- file("stdin")\nlines <- readLines(con)\nnums <- as.numeric(strsplit(lines[2], " ")[[1]])\ncat(sum(nums), "\\n")\n',
    bash: 'read n\nread -a nums\nsum=0\nfor x in "${nums[@]}"; do sum=$((sum + x)); done\necho $sum\n',
    sql: 'SELECT 1 + 1 AS answer;\n',
    lua: 'local n = io.read("n")\nlocal sum = 0\nfor i = 1, n do sum = sum + io.read("n") end\nprint(sum)\n',
    perl: 'my $n = <STDIN>;\nmy @nums = split " ", <STDIN>;\nmy $sum = 0; $sum += $_ for @nums;\nprint "$sum\\n";\n',
    haskell: 'main :: IO ()\nmain = do\n  _ <- getLine\n  xs <- fmap (map read . words) getLine :: IO [Int]\n  print (sum xs)\n',
    scala: 'object Main {\n  def main(args: Array[String]): Unit = {\n    val n = scala.io.StdIn.readInt()\n    val nums = scala.io.StdIn.readLine().split(" ").map(_.toInt)\n    println(nums.sum)\n  }\n}\n'
  };
  function langName(id) { var l = LANGS.filter(function (x) { return x[0] === id; })[0]; return l ? l[1] : id; }

  /* ================= running the code ================= */
  var INFO = null;   // what this PC can run itself
  function localInfo() {
    if (INFO) return Promise.resolve(INFO);
    if (!(window.fsApi && window.fsApi.codeInfo)) return Promise.resolve(INFO = { local: [], desktop: false });
    return window.fsApi.codeInfo().then(function (i) { INFO = { local: (i && i.local) || [], desktop: true, cwd: i && i.cwd, platform: i && i.platform }; return INFO; }).catch(function () { return INFO = { local: [], desktop: false }; });
  }
  var W = { js: null, py: null, sql: null };
  function worker(kind, file) {
    return new Promise(function (res, rej) {
      if (W[kind]) return res(W[kind]);
      try { var w = new Worker(file); } catch (e) { return rej(e); }
      W[kind] = w;
      if (kind === 'js' || kind === 'sql') return res(w);
      var done = false, to = setTimeout(function () { if (!done) { done = true; W[kind] = null; try { w.terminate(); } catch (e) { } rej(new Error('Python is still loading')); } }, 60000);
      w.onmessage = function (e) { if (e.data && e.data.hello && !done) { done = true; clearTimeout(to); res(w); } };
      w.onerror = function () { if (!done) { done = true; clearTimeout(to); W[kind] = null; rej(new Error('Python could not start here')); } };
    });
  }
  function inBrowser(kind, file, code, stdin, limit) {
    return worker(kind, file).then(function (w) {
      return new Promise(function (res) {
        var t0 = Date.now(), timer = setTimeout(function () { try { w.terminate(); } catch (e) { } W[kind] = null; res({ stdout: '', stderr: 'Time limit exceeded (' + Math.round(limit / 1000) + ' s). Your program was stopped. Check for an endless loop.', code: 124, timedOut: true, via: 'app' }); }, limit);
        w.onmessage = function (e) { if (e.data && e.data.hello) return; clearTimeout(timer); res({ stdout: e.data.stdout || '', stderr: e.data.stderr || '', code: e.data.code || 0, ms: Date.now() - t0, via: 'app' }); };
        w.onerror = function (e) { clearTimeout(timer); W[kind] = null; res({ stdout: '', stderr: 'The in-app runner failed: ' + (e && e.message || 'unknown'), code: 1, via: 'app' }); };
        w.postMessage({ code: code, stdin: stdin });
      });
    });
  }
  /* run(lang, code, stdin) -> { stdout, stderr, code, via, timedOut } */
  function runCode(lang, code, stdin) {
    stdin = stdin || '';
    if (lang === 'sql' && stdin.trim()) { code = stdin.replace(/\s*$/, '\n') + code; stdin = ''; } /* SQL questions ship their table setup as the test input */
    return localInfo().then(function (inf) {
      if (inf.local.indexOf(lang) >= 0) return window.fsApi.codeRun({ lang: lang, code: code, stdin: stdin }).then(function (r) {
        if (r && r.ok === false) throw new Error(r.error || 'Could not run');
        return { stdout: r.stdout || '', stderr: r.stderr || '', code: r.code, phase: r.phase, timedOut: r.timedOut, ms: r.ms, via: 'pc' };
      });
      if (lang === 'sql') return inBrowser('sql', 'vendor/sqlworker.js', code, '', 8000).then(function (r) { r.phase = 'run'; return r; });   /* SQL runs inside the app: no server, works offline */
      var viaServer = function (why) {
        return acct('run', { a: 'run', language: lang, code: code, stdin: stdin }).then(function (r) { return { stdout: r.stdout || '', stderr: r.stderr || '', code: r.code, phase: r.phase, timedOut: r.timedOut, via: 'server' }; })
          .catch(function (e) { throw new Error((why ? why + ' ' : '') + (/not set up|runner|configured/i.test(e.message) ? 'The FutureSelf code server is not switched on yet. ' : '') + e.message); });
      };
      if (lang === 'javascript') return inBrowser('js', 'vendor/jsworker.js', code, stdin, 8000).catch(function () { return viaServer(); });
      if (lang === 'python') return inBrowser('py', 'vendor/pyworker.js', code, stdin, 15000).then(function (r) {
        // the first run of Python may take a few seconds while the engine starts
        return r;
      }).catch(function () { return viaServer('Python could not run inside the app on this device.'); });
      return viaServer(inf.desktop ? langName(lang) + ' is not installed on this PC, so it runs on the FutureSelf server.' : '');
    });
  }
  function viaLabel(v) { return v === 'pc' ? 'on this PC' : v === 'app' ? 'inside the app' : 'on the FutureSelf server'; }
  /* SQL: sqlite prints a whole-number REAL as 80.0, so 80 and 80.0 are the same answer here */
  function eqOut(lang, a, b) { var A = norm(a), B = norm(b); if (lang === 'sql') { var f = function (t) { return t.replace(/(^|[|\s])(-?\d+)\.0+(?=$|[|\s])/gm, '$1$2'); }; A = f(A); B = f(B); } return A === B; }
  function norm(s) { return String(s || '').replace(/\r/g, '').split('\n').map(function (l) { return l.replace(/\s+$/, ''); }).join('\n').replace(/\s+$/, ''); }

  /* ================= editor with line numbers and colours ================= */
  var KW = 'abstract and as assert async await begin bool boolean break byte case catch char class const constexpr continue def default defer del delete do double elif else elsif end enum except extends fallthrough false final finally float fn for foreach fun func function go goto if impl implements import in include instanceof int interface is lambda let long match mod module mut namespace new nil none not null object of or override package pass print private protected pub public raise readonly ref return select self short signed static string struct super switch template then this throw throws trait true try type typedef typeof union unsigned use using val var virtual void volatile when where while with yield'.split(' ');
  var KWSET = {}; KW.forEach(function (k) { KWSET[k] = 1; });
  var HASH = { python: 1, ruby: 1, bash: 1, perl: 1, r: 1 }, DASH = { sql: 1, lua: 1, haskell: 1 };
  function hl(src, lang) {
    var out = '', i = 0, n = src.length, hash = HASH[lang], dash = DASH[lang];
    function span(c, t) { return '<span class="t' + c + '">' + esc(t) + '</span>'; }
    while (i < n) {
      var ch = src[i], two = src.substr(i, 2), m;
      if ((hash && ch === '#') || (dash && two === '--') || (!hash && !dash && two === '//')) { m = src.indexOf('\n', i); if (m < 0) m = n; out += span('c', src.slice(i, m)); i = m; continue; }
      if (!hash && two === '/*') { m = src.indexOf('*/', i + 2); m = m < 0 ? n : m + 2; out += span('c', src.slice(i, m)); i = m; continue; }
      if (lang === 'python' && (src.substr(i, 3) === '"""' || src.substr(i, 3) === "'''")) { var q3 = src.substr(i, 3); m = src.indexOf(q3, i + 3); m = m < 0 ? n : m + 3; out += span('s', src.slice(i, m)); i = m; continue; }
      if (ch === '"' || ch === "'" || (ch === '`' && !hash)) { var j = i + 1; while (j < n && src[j] !== ch && src[j] !== '\n') { if (src[j] === '\\') j++; j++; } if (src[j] === ch) j++; out += span('s', src.slice(i, j)); i = j; continue; }
      if (/[0-9]/.test(ch)) { m = /^(0x[0-9a-fA-F]+|\d+\.?\d*(e[+-]?\d+)?)/.exec(src.slice(i, i + 40)); out += span('n', m[0]); i += m[0].length; continue; }
      if (/[A-Za-z_]/.test(ch)) { m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i, i + 80))[0]; out += KWSET[m] ? span('k', m) : (/^[A-Z]/.test(m) ? span('y', m) : esc(m)); i += m.length; continue; }
      if (ch === '#' && !hash) { m = src.indexOf('\n', i); if (m < 0) m = n; out += span('k', src.slice(i, m)); i = m; continue; }
      out += esc(ch); i++;
    }
    return out + '\n';
  }
  /* mount(el, {lang, value, readonly, onChange}) -> {get,set,lang,focus} */
  function mountEditor(el, o) {
    var lang = o.lang || 'python';
    el.classList.add('ceditor');
    el.innerHTML = '<div class="cegut" aria-hidden="true"></div><div class="cebody"><pre class="cehl" aria-hidden="true"></pre><textarea class="ceta" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" wrap="off" aria-label="Code editor"></textarea></div>';
    var ta = $('.ceta', el), pre = $('.cehl', el), gut = $('.cegut', el);
    if (o.readonly) ta.readOnly = true;
    function paint() {
      var v = ta.value; pre.innerHTML = hl(v, lang);
      var n = v.split('\n').length, g = ''; for (var i = 1; i <= n; i++) g += i + '\n'; gut.textContent = g;
      sync();
    }
    function sync() { pre.style.transform = 'translate(' + (-ta.scrollLeft) + 'px,' + (-ta.scrollTop) + 'px)'; gut.style.transform = 'translateY(' + (-ta.scrollTop) + 'px)'; }
    ta.addEventListener('scroll', sync);
    ta.addEventListener('input', function () { paint(); o.onChange && o.onChange(ta.value); });
    ta.addEventListener('keydown', function (e) {
      if (o.readonly) return;
      var s = ta.selectionStart, en = ta.selectionEnd, v = ta.value, unit = (lang === 'go' || lang === 'c' && false) ? '\t' : '    ';
      if (e.key === 'Tab') {
        e.preventDefault();
        if (s !== en && v.slice(s, en).indexOf('\n') >= 0) {      // indent or outdent a block of lines
          var a = v.lastIndexOf('\n', s - 1) + 1, blk = v.slice(a, en), res = e.shiftKey ? blk.replace(/^( {1,4}|\t)/gm, '') : blk.replace(/^/gm, unit);
          ta.value = v.slice(0, a) + res + v.slice(en); ta.selectionStart = a; ta.selectionEnd = a + res.length;
        } else if (e.shiftKey) { var ls0 = v.lastIndexOf('\n', s - 1) + 1, m = /^( {1,4}|\t)/.exec(v.slice(ls0)); if (m) { ta.value = v.slice(0, ls0) + v.slice(ls0 + m[0].length); ta.selectionStart = ta.selectionEnd = Math.max(ls0, s - m[0].length); } }
        else { ta.value = v.slice(0, s) + unit + v.slice(en); ta.selectionStart = ta.selectionEnd = s + unit.length; }
        paint(); o.onChange && o.onChange(ta.value);
      } else if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        var ls1 = v.lastIndexOf('\n', s - 1) + 1, line = v.slice(ls1, s), ind = /^[ \t]*/.exec(line)[0], extra = /[{(\[:]\s*$/.test(line) ? unit : '', ins = '\n' + ind + extra;
        var closeNext = /[{(\[]\s*$/.test(line) && /^[})\]]/.test(v.slice(en)) ? '\n' + ind : '';
        ta.value = v.slice(0, s) + ins + closeNext + v.slice(en); ta.selectionStart = ta.selectionEnd = s + ins.length;
        paint(); o.onChange && o.onChange(ta.value);
      } else if (/^[{(\["']$/.test(e.key) && s === en && !e.ctrlKey && !e.metaKey) {
        var pairs = { '{': '}', '(': ')', '[': ']', '"': '"', "'": "'" }, nx = v[s];
        if ((e.key === '"' || e.key === "'") && (/[A-Za-z0-9_]/.test(v[s - 1] || '') || nx === e.key)) { if (nx === e.key) { e.preventDefault(); ta.selectionStart = ta.selectionEnd = s + 1; } return; }
        e.preventDefault(); ta.value = v.slice(0, s) + e.key + pairs[e.key] + v.slice(s); ta.selectionStart = ta.selectionEnd = s + 1; paint(); o.onChange && o.onChange(ta.value);
      } else if (/^[})\]]$/.test(e.key) && s === en && v[s] === e.key) { e.preventDefault(); ta.selectionStart = ta.selectionEnd = s + 1; }
    });
    ta.value = o.value || ''; paint();
    return { get: function () { return ta.value; }, set: function (v) { ta.value = v; paint(); }, setLang: function (l) { lang = l; paint(); }, focus: function () { ta.focus(); }, ta: ta };
  }

  /* ================= your coding record (kept on this device) ================= */
  function dayKey(t) { var d = new Date(t || Date.now()); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function recGet() { try { var r = JSON.parse(ls('fs_code_rec') || '{}'); r.solved = r.solved || {}; r.langs = r.langs || {}; r.days = r.days || {}; r.recent = r.recent || []; r.runs = r.runs || 0; r.tries = r.tries || {}; return r; } catch (e) { return { solved: {}, langs: {}, days: {}, recent: [], runs: 0, tries: {} }; } }
  function recSave(r) { r.recent = r.recent.slice(0, 20); ls('fs_code_rec', JSON.stringify(r)); }
  function recRun(lang, kind, prob, ok) {
    var r = recGet(), k = dayKey(); r.runs++; r.langs[lang] = (r.langs[lang] || 0) + 1; r.days[k] = (r.days[k] || 0) + 1;
    if (prob && kind === 'check') {
      r.tries[prob.id] = (r.tries[prob.id] || 0) + 1;
      if (ok && !r.solved[prob.id]) { r.solved[prob.id] = { at: Date.now(), lang: lang, tries: r.tries[prob.id] }; r.recent.unshift({ at: Date.now(), t: 'solved', title: prob.title, lang: lang }); }
      else if (!ok) r.recent.unshift({ at: Date.now(), t: 'check', title: prob.title, lang: lang });
    } else r.recent.unshift({ at: Date.now(), t: 'run', title: prob ? prob.title : 'Free coding', lang: lang });
    recSave(r);
  }
  function streakOf(days) { var n = 0, d = new Date(); if (!days[dayKey(d)]) d.setDate(d.getDate() - 1); while (days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); } return n; }
  function ago(t) { var m = Math.round((Date.now() - t) / 60000); return m < 1 ? 'just now' : m < 60 ? m + ' min ago' : m < 1440 ? Math.round(m / 60) + ' h ago' : Math.round(m / 1440) + ' d ago'; }

  /* ================= the Code page ================= */
  var TS = { idx: null, subj: null, topic: null, items: null, res: null };
  var P = { problems: null, cur: null, ed: null, lang: 'python', tab: 'out', stdin: '', busy: false, filter: 'all', view: 'dash', ch: null };
  function problemsLoad() {
    if (P.problems) return Promise.resolve(P.problems);
    return acct('challenge', { a: 'problems' }).then(function (r) { P.problems = r.problems; return P.problems; });
  }
  function draftKey(pid, lang) { return 'fs_code_' + (pid || 'free') + '_' + lang; }
  function isSchool() { var t = String((H().S && H().S.user && H().S.user.track) || ''); return /class1[12]/.test(t); }
  function nav() { return (isBtech() || isSchool()) ? [['code', 'code', 'Code']] : []; }
  FSX.navDyn = nav;

  function viewCode(v, r) {
    if (!isBtech() && !isSchool()) { v.innerHTML = '<div class="top"><div><h1>Coding platform</h1><p class="sub">This section is for B.Tech students and for Class 11 and 12 (Python). Change your class in Settings to use it.</p></div></div>'; return Promise.resolve(); }
    P.lang = isBtech() ? (ls('fs_code_lang') || 'python') : 'python'; P.cur = null; P.out = null;
    P.view = r && r.a ? 'practice' : (P.keep && (P.view === 'practice' || P.view === 'session') ? P.view : (isBtech() ? 'dash' : 'topics')); if (P.view === 'session' && !TS.items) P.view = 'topics'; P.keep = false;
    v.innerHTML = '<div class="top"><div><h1>Coding platform</h1><p class="sub">Write, run and test code in any language. Practise on our questions, then challenge a friend.</p></div></div><div class="seg cviews" id="cviews"></div><div id="cgrid" class="cgrid"><div class="empty">Loading…</div></div>';
    return Promise.all([localInfo(), problemsLoad().catch(function () { return []; })]).then(function () {
      var pid = r && r.a; if (pid) P.cur = (P.problems || []).filter(function (x) { return x.id === pid; })[0] || null;
      go2();
    });
  }
  function openSess() { var s = H().S && H().S.session; return !!(s && !s.ended); }
  /* the strict coding session (and the coding dashboard inside normal sessions) draws the same editor, questions and terminal */
  FSX.codeOK = function () { return isBtech() || isSchool(); };
  FSX.codeMount = function () {
    P.view = TS.sess && TS.items ? 'session' : 'practice'; P.keep = true;
    Promise.all([localInfo(), problemsLoad().catch(function () { return []; })]).then(function () {
      if (!$('#cgrid')) return;
      if (P.view === 'practice' && !P.cur) P.cur = (P.problems || [])[0] || null;
      go2();
    });
  };
  function go2() {
    var vw = $('#cviews'); if (vw) vw.innerHTML = (isBtech() ? [['dash', 'Dashboard'], ['topics', 'Topics'], ['practice', 'Practice & Terminal']] : [['topics', 'Topics'], ['practice', 'Practice & Terminal']]).map(function (x) { return '<button class="segb' + ((P.view === x[0] || (P.view === 'session' && x[0] === 'topics')) ? ' on' : '') + '" data-act="cdview" data-v="' + x[0] + '">' + x[1] + '</button>'; }).join('');
    var g = $('#cgrid'); if (g) g.className = P.view === 'dash' ? 'cdash' : P.view === 'topics' ? 'ctwrap' : 'cgrid';
    if (P.view === 'dash') dash(); else if (P.view === 'topics') topicsView(); else if (P.view === 'session') tdraw(); else draw();
  }
  function runnersLine() {
    var inf = INFO || { local: [] };
    var s = inf.desktop ? 'This PC runs <b>' + (inf.local.map(langName).join(', ') || 'no languages yet') + '</b> directly. Python and JavaScript also run inside the app with no install. Everything else runs on the FutureSelf server.' : 'Python and JavaScript run inside the app, with or without internet. C, C++, Java, Go, Rust and the rest run on the FutureSelf server (needs internet). The Windows app can also run anything you have installed.';
    return s;
  }
  function probListHTML() {
    var lv = P.filter, rows = (P.problems || []).filter(function (p) { return lv === 'all' || p.level === lv; });
    return '<div class="seg" role="tablist">' + ['all', 'Easy', 'Medium', 'Hard'].map(function (l) { return '<button class="segb' + (lv === l ? ' on' : '') + '" data-act="cdfilter" data-l="' + l + '">' + (l === 'all' ? 'All' : l) + '</button>'; }).join('') + '</div>' +
      '<div class="cplist">' + (rows.map(function (p) { return '<button class="cprob' + (P.cur && P.cur.id === p.id ? ' on' : '') + '" data-act="cdprob" data-id="' + esc(p.id) + '"><span class="lv ' + p.level.toLowerCase() + '">' + p.level + '</span><b>' + esc(p.title) + '</b><small>' + esc(p.topic || '') + ' &middot; ' + p.minutes + ' min</small></button>'; }).join('') || '<div class="empty">No questions yet.</div>') + '</div>';
  }
  function problemHTML(p) {
    if (!p) return '<div class="tipbox"><b>Free coding.</b> Write anything here and press Run. Pick a question on the left to practise with sample tests.</div>';
    return '<div class="cpbody"><div class="row spread wrap"><div><span class="lv ' + p.level.toLowerCase() + '">' + p.level + '</span> <b style="font-size:18px">' + esc(p.title) + '</b></div><button class="btn sm" data-act="cdchallenge">' + H().ic('flame') + ' Challenge a friend</button></div>' +
      '<p style="margin:10px 0">' + esc(p.statement) + '</p><div class="cpmeta"><div><b>Input</b><br>' + esc(p.input) + '</div><div><b>Output</b><br>' + esc(p.output) + '</div><div><b>Limits</b><br>' + esc(p.constraints) + '</div></div>' +
      (p.samples || []).map(function (s, i) { return '<div class="cpsamp"><div><small>Sample input ' + (i + 1) + '</small><pre>' + esc(s.in) + '</pre></div><div><small>Expected output</small><pre>' + esc(s.out) + '</pre></div></div>'; }).join('') + '</div>';
  }
  function draw() {
    var g = $('#cgrid'); if (!g) return;
    var lopts = LANGS.filter(function (l) { return isBtech() || l[0] === 'python'; }).map(function (l) { return '<option value="' + l[0] + '"' + (P.lang === l[0] ? ' selected' : '') + '>' + l[1] + '</option>'; }).join('');
    g.innerHTML = '<aside class="card cpside"><div class="eyebrow">Questions</div>' + probListHTML() + '</aside>' +
      '<section class="cmain"><div class="card" id="cprob">' + problemHTML(P.cur) + '</div>' +
      '<div class="card cwork"><div class="row spread wrap" style="gap:10px"><div class="row wrap" style="gap:10px"><select class="in csel" id="clang" aria-label="Language">' + lopts + '</select><button class="btn sm ghost" data-act="cdreset">Reset code</button></div>' +
      '<div class="row wrap" style="gap:10px">' + (P.cur ? '<button class="btn sm" data-act="cdsamples" id="cdsb">Check samples</button>' : '') + '<button class="btn sm pri" data-act="cdrun" id="cdrb">▶ Run</button></div></div>' +
      '<div id="ced" class="cedwrap"></div>' +
      '<div class="ctabs" role="tablist"><button class="ctab' + (P.tab === 'out' ? ' on' : '') + '" data-act="cdtab" data-t="out">Output</button><button class="ctab' + (P.tab === 'in' ? ' on' : '') + '" data-act="cdtab" data-t="in">Input</button><button class="ctab' + (P.tab === 'term' ? ' on' : '') + '" data-act="cdtab" data-t="term">Terminal</button></div>' +
      '<div id="cpane" class="cpane"></div><p class="muted" style="font-size:13px;margin-top:8px">' + runnersLine() + '</p></div></section>';
    P.ed = mountEditor($('#ced'), { lang: P.lang, value: loadDraft(), onChange: function (v) { ls(draftKey(P.cur && P.cur.id, P.lang), v); } });
    pane();
  }
  function bar(pct, cls) { return '<div class="cbar"><i class="' + (cls || '') + '" style="width:' + Math.max(0, Math.min(100, pct)) + '%"></i></div>'; }
  function dash() {
    var g = $('#cgrid'); if (!g) return; var r = recGet(), probs = P.problems || [], solved = Object.keys(r.solved).filter(function (id) { return probs.some(function (p) { return p.id === id; }); });
    var by = {}; probs.forEach(function (p) { var b = by[p.level] = by[p.level] || { n: 0, d: 0 }; b.n++; if (r.solved[p.id]) b.d++; });
    var topics = {}; probs.forEach(function (p) { var t = topics[p.topic || 'Other'] = topics[p.topic || 'Other'] || { n: 0, d: 0 }; t.n++; if (r.solved[p.id]) t.d++; });
    var langs = Object.keys(r.langs).sort(function (a, b) { return r.langs[b] - r.langs[a]; }).slice(0, 6), lmax = langs.length ? r.langs[langs[0]] : 1;
    var days = []; for (var i = 6; i >= 0; i--) { var d = new Date(); d.setDate(d.getDate() - i); days.push({ k: dayKey(d), l: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] }); }
    var dmax = Math.max.apply(null, days.map(function (x) { return r.days[x.k] || 0; }).concat([1]));
    var next = probs.filter(function (p) { return !r.solved[p.id]; }).sort(function (a, b) { return ['Easy', 'Medium', 'Hard'].indexOf(a.level) - ['Easy', 'Medium', 'Hard'].indexOf(b.level); })[0];
    var inf = INFO || { local: [] };
    var tile = function (n, l, sub) { return '<div class="card cstat"><b>' + n + '</b><span>' + l + '</span>' + (sub ? '<small>' + sub + '</small>' : '') + '</div>'; };
    g.innerHTML = '<div class="cstats">' + tile(solved.length + '/' + probs.length, 'Questions solved', Math.round(100 * solved.length / Math.max(1, probs.length)) + '% of the bank') + tile(streakOf(r.days), 'Day streak', 'days you ran code in a row') + tile(r.runs, 'Runs and checks', Object.keys(r.langs).length + ' language' + (Object.keys(r.langs).length === 1 ? '' : 's') + ' used') + '<div class="card cstat" id="cchstat"><b>…</b><span>Challenge points</span><small>loading</small></div></div>' +
      '<div class="cdgrid"><div class="card"><div class="eyebrow">Your level</div>' + ['Easy', 'Medium', 'Hard'].map(function (l) { var b = by[l] || { n: 0, d: 0 }; return '<div class="crow"><span class="lv ' + l.toLowerCase() + '">' + l + '</span><div class="grow">' + bar(100 * b.d / Math.max(1, b.n), l.toLowerCase()) + '</div><small>' + b.d + '/' + b.n + '</small></div>'; }).join('') +
      '<div class="eyebrow" style="margin-top:16px">By topic</div>' + Object.keys(topics).map(function (t) { return '<div class="crow"><span class="cl">' + esc(t) + '</span><div class="grow">' + bar(100 * topics[t].d / topics[t].n) + '</div><small>' + topics[t].d + '/' + topics[t].n + '</small></div>'; }).join('') + '</div>' +
      '<div class="card"><div class="eyebrow">This week</div><div class="cweek">' + days.map(function (x) { var n = r.days[x.k] || 0; return '<div><i style="height:' + Math.max(4, Math.round(80 * n / dmax)) + 'px" class="' + (n ? 'on' : '') + '" title="' + n + ' runs"></i><small>' + x.l + '</small></div>'; }).join('') + '</div>' +
      '<div class="eyebrow" style="margin-top:16px">Languages you use</div>' + (langs.length ? langs.map(function (l) { return '<div class="crow"><span class="cl">' + esc(langName(l)) + '</span><div class="grow">' + bar(100 * r.langs[l] / lmax) + '</div><small>' + r.langs[l] + '</small></div>'; }).join('') : '<p class="muted" style="margin-top:6px">Run some code to see this.</p>') + '</div>' +
      '<div class="card"><div class="eyebrow">Up next</div>' + (next ? '<div class="cnext"><span class="lv ' + next.level.toLowerCase() + '">' + next.level + '</span><b>' + esc(next.title) + '</b><small>' + esc(next.topic || '') + ' &middot; ' + next.minutes + ' min</small><button class="btn pri sm" data-act="cdopen" data-id="' + esc(next.id) + '">Start this question</button></div>' : '<p class="muted" style="margin-top:6px">You have solved every question. Challenge a friend to keep going.</p>') +
      '<div class="eyebrow" style="margin-top:16px">Where your code runs</div><p class="muted" style="font-size:14px">' + runnersLine() + '</p><div class="row wrap" style="margin-top:10px;gap:8px"><button class="btn sm" data-act="cdview" data-v="practice">Open editor and terminal</button></div></div>' +
      '<div class="card"><div class="eyebrow">Coding challenges</div><div id="cchlist"><p class="muted" style="margin-top:6px">Loading…</p></div></div>' +
      '<div class="card" style="grid-column:1/-1"><div class="eyebrow">Recent activity</div>' + (r.recent.length ? '<div class="cact">' + r.recent.slice(0, 8).map(function (a) { return '<div><span class="dot ' + a.t + '"></span><b>' + (a.t === 'solved' ? 'Solved ' : a.t === 'check' ? 'Tried ' : 'Ran ') + esc(a.title) + '</b><small>' + esc(langName(a.lang)) + ' &middot; ' + ago(a.at) + '</small></div>'; }).join('') + '</div>' : '<p class="muted" style="margin-top:6px">Nothing yet. Pick a question and press Check samples.</p>') + '</div></div>';
    acct('challenge', { a: 'list' }).then(function (x) {
      var cs = (x.challenges || []).filter(function (c) { return c.kind === 'code'; }), st = x.stats || {}, me = ''; var el = $('#cchstat'); if (!el) return;
      el.innerHTML = '<b>' + (st.points || 0) + '</b><span>Challenge points</span><small>' + (st.wins || 0) + ' won &middot; ' + (st.losses || 0) + ' lost</small>';
      var l = $('#cchlist'); if (!l) return;
      l.innerHTML = cs.length ? cs.slice(0, 5).map(function (c) { var res = c.status === 'done' ? (c.result && c.result.winner ? (c.result.winnerName ? esc(c.result.winnerName) + ' won' : 'finished') : 'Draw') : c.mine.closed ? 'Waiting for ' + esc(c.friend.name) : c.mine.started ? 'In progress' : c.iAmChallenger ? 'Your turn to play' : 'Challenged you'; return '<div class="crow"><div class="grow"><b style="font-size:14.5px">' + esc((c.topic || {}).title || 'Question') + '</b><br><small class="muted">vs ' + esc(c.friend.name) + (c.mine.closed ? ' &middot; you scored ' + c.mine.correct + '/100' : '') + '</small></div><span class="badge">' + res + '</span></div>'; }).join('') + '<p class="muted" style="margin-top:8px;font-size:13px">Play or see results in the Friends page.</p>'
        : '<p class="muted" style="margin-top:6px">No coding challenges yet. Open a question and press "Challenge a friend".</p>';
    }).catch(function (e) { var el = $('#cchstat'); if (el) el.innerHTML = '<b>-</b><span>Challenge points</span><small>sign in to see</small>'; var l = $('#cchlist'); if (l) l.innerHTML = '<p class="muted" style="margin-top:6px">' + esc(e.message) + '</p>'; });
  }
  function loadDraft() { var d = ls(draftKey(P.cur && P.cur.id, P.lang)); return d != null && d !== '' ? d : (TPL[P.lang] || ''); }
  function setLang(l) {
    ls(draftKey(P.cur && P.cur.id, P.lang), P.ed.get()); P.lang = l; ls('fs_code_lang', l);
    P.ed.setLang(l); P.ed.set(loadDraft());
  }
  function pane() {
    var p = $('#cpane'); if (!p) return;
    $$('.ctab').forEach(function (b) { b.classList.toggle('on', b.dataset.t === P.tab); });
    if (P.tab === 'in') { p.innerHTML = '<textarea class="in cstdin" id="cstdin" placeholder="Type the input your program reads (what a user would type). One value per line, or as the question says." spellcheck="false"></textarea>'; $('#cstdin').value = P.stdin; $('#cstdin').addEventListener('input', function (e) { P.stdin = e.target.value; }); }
    else if (P.tab === 'term') termMount(p);
    else p.innerHTML = '<pre class="cout" id="cout">' + (P.out || '<span class="muted">Press Run to see the output here.</span>') + '</pre>';
  }
  function $$(s) { return [].slice.call(document.querySelectorAll(s)); }
  function outHTML(r, extra) {
    var s = '';
    if (r.stdout) s += esc(r.stdout);
    if (r.stderr) s += '<span class="cerr">' + esc(r.stderr) + '</span>';
    if (!r.stdout && !r.stderr) s += '<span class="muted">(no output)</span>';
    return s + '\n<span class="muted">— ' + (r.timedOut ? 'stopped: too slow' : r.code === 0 ? 'finished' : (r.phase === 'compile' ? 'did not compile' : 'exit code ' + r.code)) + (r.via ? ' · ran ' + viaLabel(r.via) : '') + (r.ms ? ' · ' + (r.ms / 1000).toFixed(2) + ' s' : '') + (extra || '') + '</span>';
  }
  function doRun() {
    if (P.busy) return; var code = P.ed.get(); if (!code.trim()) return H().toast('Nothing to run', 'Write some code first.', true);
    P.busy = true; var b = $('#cdrb'); if (b) { b.disabled = true; b.textContent = 'Running…'; }
    P.tab = 'out'; pane(); var o = $('#cout'); if (o) o.innerHTML = '<span class="muted">Running…' + (P.lang === 'python' ? ' (the first Python run takes a few seconds to start)' : '') + '</span>';
    runCode(P.lang, code, P.stdin).then(function (r) { recRun(P.lang, 'run', P.cur, r.code === 0); P.out = outHTML(r); }).catch(function (e) { P.out = '<span class="cerr">' + esc(e.message) + '</span>'; })
      .then(function () { P.busy = false; var b2 = $('#cdrb'); if (b2) { b2.disabled = false; b2.textContent = '▶ Run'; } if (P.tab === 'out') pane(); });
  }
  function checkSamples(code, lang, problem, setProgress) {
    var res = [], i = 0, ss = problem.samples || [];
    return (function next() {
      if (i >= ss.length) return Promise.resolve(res);
      var s = ss[i++]; setProgress && setProgress(i, ss.length);
      return runCode(lang, code, s.in).then(function (r) { res.push({ ok: r.code === 0 && eqOut(lang, r.stdout, s.out), r: r, s: s }); }).catch(function (e) { res.push({ ok: false, r: { stdout: '', stderr: e.message, code: 1 }, s: s }); }).then(next);
    })();
  }
  function samplesHTML(res) {
    var pass = res.filter(function (x) { return x.ok; }).length;
    return '<div class="cvd ' + (pass === res.length ? 'ok' : 'bad') + '"><b>' + (pass === res.length ? 'All sample tests passed' : pass + ' of ' + res.length + ' sample tests passed') + '</b><small>' + (pass === res.length ? 'The hidden tests also check larger and trickier inputs, so think about edge cases.' : 'Compare your output with the expected output below.') + '</small></div>' +
      res.map(function (x, i) { return '<div class="cpsamp"><div><small>Sample ' + (i + 1) + ' · ' + (x.ok ? '✔ passed' : '✘ failed') + '</small><pre class="' + (x.ok ? '' : 'cerr') + '">' + esc(x.r.stdout || x.r.stderr || '(no output)') + '</pre></div><div><small>Expected</small><pre>' + esc(x.s.out) + '</pre></div></div>'; }).join('');
  }
  function doSamples() {
    if (P.busy || !P.cur) return; var code = P.ed.get(); if (!code.trim()) return H().toast('Nothing to check', 'Write some code first.', true);
    P.busy = true; var b = $('#cdsb'); if (b) { b.disabled = true; b.textContent = 'Checking…'; } P.tab = 'out'; pane();
    checkSamples(code, P.lang, P.cur, function (i, n) { var o = $('#cout'); if (o) o.innerHTML = '<span class="muted">Running sample ' + i + ' of ' + n + '…</span>'; }).then(function (res) { recRun(P.lang, 'check', P.cur, res.every(function (x) { return x.ok; })); P.out = samplesHTML(res); })
      .catch(function (e) { P.out = '<span class="cerr">' + esc(e.message) + '</span>'; }).then(function () { P.busy = false; var b2 = $('#cdsb'); if (b2) { b2.disabled = false; b2.textContent = 'Check samples'; } if (P.tab === 'out') pane(); });
  }

  /* ================= terminal ================= */
  var T = { lines: '', hist: [], hi: 0, cwd: '', id: 'term' + Date.now().toString(36), running: false, hooked: false };
  function termHook() {
    if (T.hooked || !(window.fsApi && window.fsApi.onCodeOut)) return; T.hooked = true;
    window.fsApi.onCodeOut(function (d) { if (d && d.id === T.id) termAdd(d.chunk, d.kind === 'err'); });
  }
  function termAdd(txt, err) {
    T.lines += (err ? '\u0001' : '') + String(txt) + (err ? '\u0002' : '');
    if (T.lines.length > 60000) T.lines = T.lines.slice(-40000);
    var o = $('#tout'); if (o) { o.innerHTML = termHTML(); o.scrollTop = o.scrollHeight; }
  }
  function termHTML() { return esc(T.lines).replace(/\u0001/g, '<span class="cerr">').replace(/\u0002/g, '</span>'); }
  function termMount(p) {
    termHook();
    var desk = INFO && INFO.desktop;
    if (!T.lines) T.lines = desk ? 'FutureSelf terminal — a real shell on this PC (' + (INFO.platform === 'win32' ? 'PowerShell' : 'bash') + '). Folder: ' + (INFO.cwd || '') + '\nInstall packages with  pip install <name>  or  npm install <name>  and they work in your programs here.\nType  help  for tips.\n\n' : 'FutureSelf web terminal.\nCommands: help, clear, langs, run, js <code>, py <code>.\nFor a full system terminal (pip, npm, gcc, git) use the FutureSelf Windows app.\n\n';
    p.innerHTML = '<pre class="cout cterm" id="tout"></pre><div class="tin"><span id="tprompt">' + esc(prompt()) + '</span><input id="tcmd" class="tcmd" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command"><button class="btn sm ghost" data-act="cdstop" id="tstop" hidden>Stop</button></div>';
    $('#tout').innerHTML = termHTML(); $('#tout').scrollTop = 1e9;
    $('#tcmd').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var c = e.target.value; e.target.value = ''; termRun(c); }
      else if (e.key === 'ArrowUp') { if (T.hi > 0) e.target.value = T.hist[--T.hi] || ''; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { if (T.hi < T.hist.length) e.target.value = T.hist[++T.hi] || ''; e.preventDefault(); }
      else if (e.key === 'c' && e.ctrlKey) { stopTerm(); }
    });
  }
  function prompt() { return ((INFO && INFO.desktop) ? (T.cwd || INFO.cwd || '~') : 'futureself') + ' $ '; }
  function stopTerm() { if (window.fsApi && window.fsApi.codeKill) window.fsApi.codeKill(T.id); }
  function setRunning(on) { T.running = on; var s = $('#tstop'), c = $('#tcmd'); if (s) s.hidden = !on; if (c) c.disabled = on, on || c.focus(); var pr = $('#tprompt'); if (pr) pr.textContent = prompt(); }
  function termRun(cmd) {
    cmd = String(cmd || '').trim(); if (!cmd) return;
    T.hist.push(cmd); T.hi = T.hist.length; termAdd(prompt() + cmd + '\n');
    if (cmd === 'clear' || cmd === 'cls') { T.lines = ''; var o = $('#tout'); if (o) o.innerHTML = ''; return; }
    if (INFO && INFO.desktop) {
      if (cmd === 'help') return termAdd('Anything you type runs in a real shell here: python file.py, node, gcc, java, pip install requests, npm i lodash, git ...\nclear  clears the screen. Stop button or Ctrl+C stops a running command.\nYour editor program is saved as  main.<ext>  in the folder above whenever you press Run.\n\n');
      setRunning(true);
      window.fsApi.codeShell({ id: T.id, cmd: cmd }).then(function (r) {
        if (r && r.cwd) T.cwd = r.cwd; if (r && r.ok === false) termAdd((r.error || 'Could not run that') + '\n', true); else if (r && r.timedOut) termAdd('Stopped: that took too long.\n', true);
        termAdd('\n');
      }).catch(function (e) { termAdd(e.message + '\n', true); }).then(function () { setRunning(false); });
      return;
    }
    var a = cmd.split(/\s+/), c = a[0], rest = cmd.slice(c.length).trim();
    if (c === 'help') return termAdd('help  clear  langs  run  js <code>  py <code>  echo <text>  date\nThe full system terminal (pip, npm, gcc, git) is in the FutureSelf Windows app.\n\n');
    if (c === 'langs') return termAdd(LANGS.map(function (l) { return l[1]; }).join(', ') + '\nPython and JavaScript run inside the app; the rest run on the FutureSelf server.\n\n');
    if (c === 'date') return termAdd(new Date().toString() + '\n\n');
    if (c === 'echo') return termAdd(rest + '\n\n');
    if (c === 'run') { P.tab = 'out'; pane(); return doRun(); }
    if (c === 'js' || c === 'py') {
      if (!rest) return termAdd('Usage: ' + c + ' <code>\n\n');
      setRunning(true);
      var lang = c === 'js' ? 'javascript' : 'python', src = c === 'js' ? 'console.log(' + rest + ')' : 'print(' + rest + ')';
      return runCode(lang, c === 'js' ? (/;|console|=/.test(rest) ? rest : src) : (/\b(import|=|print|for|def)\b/.test(rest) ? rest : src), '').then(function (r) { termAdd((r.stdout || '') + (r.stderr ? '\u0001' + r.stderr + '\u0002' : '') + '\n'); }).catch(function (e) { termAdd(e.message + '\n', true); }).then(function () { setRunning(false); });
    }
    termAdd(c + ': command not found. Type help.\n\n', true);
  }

  /* ================= challenge a friend with a coding question ================= */
  function challengeModal() {
    if (!P.cur) return;
    var p = P.cur;
    H().modal('<div class="chnew"><div class="eyebrow">Coding challenge</div><h2 style="margin:6px 0 4px">' + esc(p.title) + '</h2><p class="muted">' + p.level + ' &middot; ' + p.minutes + ' minutes</p><div id="ccbody"><div class="empty">Loading friends…</div></div></div>');
    acct('social', { a: 'overview' }).then(function (o) {
      var fr = o.board.filter(function (x) { return !x.me; });
      var b = $('#ccbody'); if (!b) return;
      if (!fr.length) { b.innerHTML = '<p class="muted" style="margin-top:12px">Add a friend first (Friends page). Your friend must also be a B.Tech student.</p><div class="row" style="margin-top:12px"><button class="btn" data-act="close">Close</button></div>'; return; }
      b.innerHTML = '<div class="fld" style="margin-top:12px"><label class="f" for="ccf">Friend (B.Tech)</label><select class="in" id="ccf"><option value="">Choose a friend</option>' + fr.map(function (f) { return '<option value="' + esc(f.id) + '">' + esc(f.name) + '</option>'; }).join('') + '</select></div>' +
        '<div class="tipbox" style="margin-top:14px"><b>How it works.</b> You both get the same question and ' + p.minutes + ' minutes. The screen is locked automatically (strict mode). One attempt only: when you submit or close it, it can never be played again. Our hidden tests run your code and the AI reads it for quality; the points are given automatically. A higher score wins, and a faster finish breaks ties and adds a bonus.</div>' +
        '<div id="cherr" class="muted" style="color:var(--bad);margin-top:8px;min-height:18px"></div><div class="row wrap" style="margin-top:6px"><button class="btn pri" data-act="ccsend">Send challenge</button><button class="btn ghost" data-act="close">Cancel</button></div>';
    }).catch(function (e) { var b = $('#ccbody'); if (b) b.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; });
  }
  function challengeSend() {
    var f = $('#ccf'), err = $('#cherr'); if (!f || !f.value) { if (err) err.textContent = 'Choose a friend first.'; return; }
    var btn = $('[data-act=ccsend]'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    acct('challenge', { a: 'create', kind: 'code', friendId: f.value, problemId: P.cur.id }).then(function (r) {
      H().closeModal(); H().toast('Challenge sent', 'Your friend will see it in their Friends page.');
      H().modal('<div style="text-align:center"><div class="eyebrow">Challenge ready</div><h2 style="margin:8px 0">Play your attempt now?</h2><p class="muted" style="margin-bottom:16px">' + esc(P.cur.title) + ', ' + Math.round(r.limitSec / 60) + ' minutes. The timer starts when you press Start. You can also play later from the Friends page.</p><div class="row wrap" style="justify-content:center"><button class="btn pri" data-act="ccplay" data-id="' + esc(r.id) + '">Play now</button><button class="btn ghost" data-act="close">Later</button></div></div>');
    }).catch(function (e) { if (btn) { btn.disabled = false; btn.textContent = 'Send challenge'; } if (err) err.textContent = e.message; });
  }

  /* ================= the locked code arena (drawn by challenge.js when a coding challenge starts) ================= */
  var CA = null;
  function arenaDraw(AR, K) {
    var p = AR.problem;
    CA = { saveT: null, busy: false, lang: AR.lang || ls('fs_code_lang') || 'python', out: '', stdin: '' };
    var root = K.root();
    var lopts = LANGS.map(function (l) { return '<option value="' + l[0] + '"' + (CA.lang === l[0] ? ' selected' : '') + '>' + l[1] + '</option>'; }).join('');
    root.innerHTML = '<div class="arwrap carena"><div class="arhead"><div class="grow"><div class="eyebrow">Coding challenge &middot; locked</div><b>' + esc(AR.title) + '</b></div><div class="artime" id="artime">--:--</div></div>' +
      '<div class="arprog"><i id="arbar"></i></div><div class="archwarn" id="archwarn"></div>' +
      '<div class="cagrid"><div class="card caprob">' + problemHTML(Object.assign({}, p, { minutes: 0 })).replace(/<button class="btn sm" data-act="cdchallenge">.*?<\/button>/, '') + '</div>' +
      '<div class="card cawork"><div class="row spread wrap" style="gap:10px"><select class="in csel" id="calang" aria-label="Language">' + lopts + '</select><div class="row wrap" style="gap:10px"><button class="btn sm" data-act="carun" id="carb">▶ Check samples</button><button class="btn sm pri" data-act="casubmit" id="casub">Submit final answer</button></div></div>' +
      '<div id="caed" class="cedwrap"></div><div class="ctabs"><button class="ctab on" data-act="catab" data-t="out">Output</button><button class="ctab" data-act="catab" data-t="in">Test your own input</button></div><div id="capane" class="cpane"></div></div></div>' +
      '<div class="muted arfoot">Screen locked. One attempt. ' + (AR.leaves ? 'Left the screen ' + AR.leaves + ' time(s). ' : '') + 'Pasting is switched off. Your code is saved automatically. After you submit, the hidden tests and the AI mark it.</div></div>';
    var start = AR.code || TPL[CA.lang] || '';
    CA.ed = mountEditor($('#caed'), { lang: CA.lang, value: start, onChange: function () { saveSoon(AR); } });
    CA.tab = 'out'; CA.K = K; capane();
    K.tick();
  }
  function saveSoon(AR) {
    clearTimeout(CA.saveT); CA.saveT = setTimeout(function () { if (!AR || AR.over) return; acct('challenge', { a: 'savecode', id: AR.id, code: CA.ed.get(), lang: CA.lang }).catch(function () { }); }, 1500);
  }
  function capane() {
    var p = $('#capane'); if (!p || !CA) return;
    $$('.ctab').forEach(function (b) { b.classList.toggle('on', b.dataset.t === CA.tab); });
    if (CA.tab === 'in') { p.innerHTML = '<textarea class="in cstdin" id="castdin" placeholder="Type any input to test your program with, then press Run on this input." spellcheck="false"></textarea><div class="row" style="margin-top:8px"><button class="btn sm" data-act="carun1">Run on this input</button></div>'; $('#castdin').value = CA.stdin; $('#castdin').addEventListener('input', function (e) { CA.stdin = e.target.value; }); }
    else p.innerHTML = '<pre class="cout" id="caout">' + (CA.out || '<span class="muted">Press "Check samples" to test your code on the sample inputs. These are only the samples; the hidden tests run when you submit.</span>') + '</pre>';
  }
  function arenaRun(samples) {
    if (!CA || CA.busy) return; var code = CA.ed.get(); if (!code.trim()) return CA.K.warn('Write some code first.');
    CA.busy = true; var b = $('#carb'); if (b) b.disabled = true; CA.tab = 'out'; capane(); var o = $('#caout'); if (o) o.innerHTML = '<span class="muted">Running…' + (CA.lang === 'python' ? ' (the first Python run takes a few seconds)' : '') + '</span>';
    var pr = samples ? checkSamples(code, CA.lang, CA.K.AR().problem) .then(samplesHTML) : runCode(CA.lang, code, CA.stdin).then(function (r) { return outHTML(r); });
    pr.catch(function (e) { return '<span class="cerr">' + esc(e.message) + '</span>'; }).then(function (h) { CA.out = h; CA.busy = false; var b2 = $('#carb'); if (b2) b2.disabled = false; capane(); });
  }
  function arenaPayload() { return CA ? { code: CA.ed.get(), lang: CA.lang } : null; }
  function arenaFlush(AR) { if (CA && AR) { clearTimeout(CA.saveT); return acct('challenge', { a: 'savecode', id: AR.id, code: CA.ed.get(), lang: CA.lang }).catch(function () { }); } return Promise.resolve(); }

  /* the result screen of a coding challenge */
  function resultBody(c, K) {
    var me = K.meId(), r = c.result, done = c.status === 'done', m = c.mine || {}, ai = m.ai || {};
    var mineBox = '<div class="cvd ' + (m.passed === m.tests && m.tests ? 'ok' : 'mid') + '"><b>' + (m.runner ? 'Hidden tests: ' + m.passed + ' of ' + m.tests + ' passed' : 'The test runner was offline, so the AI judged your code') + '</b><small>Tests ' + (m.testPoints || 0) + ' / 70 &middot; Code quality (AI) ' + (m.quality || 0) + ' / 30 &middot; Score ' + (m.correct == null ? '-' : m.correct) + ' / 100</small></div>';
    var aiBox = '<div class="tipbox" style="margin-top:12px"><b>AI review.</b> ' + esc(ai.feedback || '') + (ai.complexity ? '<br><small>Complexity: ' + esc(ai.complexity) + '</small>' : '') + (ai.hint ? '<br><small>Tip: ' + esc(ai.hint) + '</small>' : '') + (m.ungraded ? '<br><small>The marker was not available, so this attempt was not scored.</small>' : '') + '</div>';
    var body = mineBox + aiBox;
    if (done) {
      var mp = r.points[me] || {}, tp = r.points[c.friend.id] || {}, fname = esc(c.friend.name);
      var row = function (l, a, b) { return '<tr><td>' + l + '</td><td>' + a + '</td><td>' + b + '</td></tr>'; };
      body += '<table class="restab"><thead><tr><th></th><th>You</th><th>' + fname + '</th></tr></thead><tbody>' + row('Score (out of 100)', mp.base || 0, tp.base || 0) + row('Tests passed', (mp.correct || 0) + '/' + (mp.tests || 0), (tp.correct || 0) + '/' + (tp.tests || 0)) + row('Time taken', mp.timeMs ? K.words(mp.timeMs) : '-', tp.timeMs ? K.words(tp.timeMs) : '-') + row('Speed bonus', '+' + (mp.timeBonus || 0), '+' + (tp.timeBonus || 0)) + row('First to finish', '+' + (mp.first || 0), '+' + (tp.first || 0)) + row('Winner bonus', '+' + (mp.win || 0), '+' + (tp.win || 0)) + '<tr class="tot"><td>Points earned</td><td>' + (mp.total || 0) + '</td><td>' + (tp.total || 0) + '</td></tr></tbody></table>';
      if (c.review && c.review.code) body += '<details class="chrev"><summary>Your submitted code (' + esc(langName(c.review.lang)) + ')</summary><pre class="cout" style="max-height:260px">' + esc(c.review.code) + '</pre></details>';
    }
    return body;
  }


  /* ================= 5 HARD questions of a topic: friend challenge, strict, on the coding dashboard ================= */
  var N5 = null;
  function challenge5Modal(pre) {
    N5 = { fid: '', sid: pre ? pre.sid : '', tid: pre ? pre.tid : '', idx: [], friends: [] };
    H().modal('<div class="chnew"><div class="eyebrow">Coding challenge</div><h2 style="margin:6px 0 4px">5 Hard questions</h2><div id="c5body"><div class="empty">Loading…</div></div></div>');
    Promise.all([acct('social', { a: 'overview' }), ctIndex()]).then(function (r) {
      N5.friends = r[0].board.filter(function (x) { return !x.me; });
      N5.idx = r[1].filter(function (x) { return x.topics.some(function (t) { return t.hard >= 5; }); });
      c5paint();
    }).catch(function (e) { var b = $('#c5body'); if (b) b.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; });
  }
  function c5paint() {
    var b = $('#c5body'); if (!b || !N5) return;
    if (!N5.friends.length) { b.innerHTML = '<p class="muted" style="margin-top:12px">Add a friend first (Friends page). Your friend must also be a B.Tech student.</p><div class="row" style="margin-top:12px"><button class="btn" data-act="close">Close</button></div>'; return; }
    var s = N5.idx.filter(function (x) { return x.id === N5.sid; })[0];
    var fr = '<option value="">Choose a friend</option>' + N5.friends.map(function (f) { return '<option value="' + esc(f.id) + '"' + (N5.fid === f.id ? ' selected' : '') + '>' + esc(f.name) + '</option>'; }).join('');
    var su = '<option value="">Choose a subject</option>' + N5.idx.map(function (x) { return '<option value="' + esc(x.id) + '"' + (N5.sid === x.id ? ' selected' : '') + '>' + esc(x.title) + '</option>'; }).join('');
    var tp = '<option value="">' + (s ? 'Choose a topic' : 'Choose a subject first') + '</option>' + (s ? s.topics.filter(function (t) { return t.hard >= 5; }).map(function (t) { return '<option value="' + esc(t.id) + '"' + (N5.tid === t.id ? ' selected' : '') + '>' + esc(t.title) + '</option>'; }).join('') : '');
    b.innerHTML = '<div class="fld" style="margin-top:12px"><label class="f" for="c5f">Friend (B.Tech)</label><select class="in" id="c5f">' + fr + '</select></div>' +
      '<div class="fld" style="margin-top:12px"><label class="f" for="c5s">Subject</label><select class="in" id="c5s">' + su + '</select></div>' +
      '<div class="fld" style="margin-top:12px"><label class="f" for="c5t">Topic</label><select class="in" id="c5t">' + tp + '</select></div>' +
      '<div class="tipbox" style="margin-top:14px"><b>How it works.</b> You both get the same <b>5 Hard questions</b> of this topic and solve them on the coding dashboard in <b>strict mode</b>. There is <b>no time limit</b>, but the clock runs and a faster finish adds a bonus. <b>If you exit even once, your challenge ends at once</b> and the AI marks whatever you had saved. One attempt only. Hidden tests plus an AI review give the points (100 in all); the higher score wins.</div>' +
      '<div id="cherr" class="muted" style="color:var(--bad);margin-top:8px;min-height:18px"></div><div class="row wrap" style="margin-top:6px"><button class="btn pri" data-act="c5send">Send challenge</button><button class="btn ghost" data-act="close">Cancel</button></div>';
  }
  function c5send() {
    var err = $('#cherr'); if (!N5 || !N5.fid || !N5.sid || !N5.tid) { if (err) err.textContent = 'Choose a friend, a subject and a topic.'; return; }
    var btn = $('[data-act=c5send]'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    acct('challenge', { a: 'create', kind: 'code5', friendId: N5.fid, subjectId: N5.sid, topicId: N5.tid }).then(function (r) {
      H().closeModal(); H().toast('Challenge sent', 'Your friend will see it in their Friends page.');
      H().modal('<div style="text-align:center"><div class="eyebrow">Challenge ready</div><h2 style="margin:8px 0">Play your attempt now?</h2><p class="muted" style="margin-bottom:16px">5 Hard questions, no time limit, strict mode. Exiting once ends your attempt. You can also play later from the Friends page (within 2 days).</p><div class="row wrap" style="justify-content:center"><button class="btn pri" data-act="ccplay" data-id="' + esc(r.id) + '">Play now</button><button class="btn ghost" data-act="close">Later</button></div></div>');
    }).catch(function (e) { if (btn) { btn.disabled = false; btn.textContent = 'Send challenge'; } if (err) err.textContent = e.message; });
  }
  var A5 = null;
  function fixedLang(subjectId) { var s = (window.FS_CTX || []).filter(function (x) { return x.id === subjectId; })[0]; return s && s.lang ? s.lang : ''; }
  function arena5Draw(AR, K) {
    var fl = fixedLang(AR.subjectId);
    A5 = { AR: AR, K: K, i: 0, fl: fl, codes: [], langs: [], out: [], busy: false, saveT: null, tab: 'out', stdin: '' };
    for (var k = 0; k < AR.problems.length; k++) { var d = (AR.codes || {})[k] || {}; A5.langs[k] = fl || d.lang || ls('fs_code_lang') || 'python'; A5.codes[k] = d.code || TPL[A5.langs[k]] || ''; A5.out[k] = ''; }
    a5frame(); a5show(0); K.tick();
  }
  function a5frame() {
    var AR = A5.AR, root = A5.K.root();
    root.innerHTML = '<div class="arwrap carena"><div class="arhead"><div class="grow"><div class="eyebrow">Coding challenge &middot; 5 Hard &middot; strict</div><b>' + esc(AR.title) + '</b></div><div class="artime" id="artime" title="Time so far">0:00</div><button class="btn sm ghost" data-act="c5exit" id="c5exit" style="margin-left:10px">Emergency exit</button></div>' +
      '<div class="archwarn" id="archwarn"></div><div class="c5tabs" id="c5tabs"></div>' +
      '<div class="cagrid"><div class="card caprob" id="c5prob"></div>' +
      '<div class="card cawork"><div class="row spread wrap" style="gap:10px"><select class="in csel" id="c5lang" aria-label="Language"' + (A5.fl ? ' disabled' : '') + '></select><div class="row wrap" style="gap:10px"><button class="btn sm" data-act="c5run" id="c5rb">▶ Check samples</button><button class="btn sm pri" data-act="casubmit" id="casub">Submit all 5</button></div></div>' +
      '<div id="c5ed" class="cedwrap"></div><div class="ctabs"><button class="ctab on" data-act="c5tab" data-t="out">Output</button><button class="ctab" data-act="c5tab" data-t="in">Test your own input</button></div><div id="c5pane" class="cpane"></div></div></div>' +
      '<div class="muted arfoot">Strict mode. One attempt. <b>Exiting even once ends the challenge</b> and the AI marks what you have saved. No pasting. Your code is saved automatically. Hidden tests and the AI mark all 5 questions when you submit.</div></div>';
    var sel = $('#c5lang'); sel.innerHTML = LANGS.filter(function (l) { return !A5.fl || l[0] === A5.fl; }).map(function (l) { return '<option value="' + l[0] + '">' + l[1] + '</option>'; }).join('');
  }
  function a5tabs() {
    var t = $('#c5tabs'); if (!t) return;
    t.innerHTML = A5.AR.problems.map(function (p, i) { var has = A5.codes[i] && A5.codes[i] !== (TPL[A5.langs[i]] || '') && A5.codes[i].trim(); return '<button class="c5tab' + (i === A5.i ? ' on' : '') + (has ? ' has' : '') + '" data-act="c5q" data-i="' + i + '"><b>Q' + (i + 1) + '</b><small>' + esc(p.title) + '</small></button>'; }).join('');
  }
  function a5show(i) {
    var p = A5.AR.problems[i]; A5.i = i;
    $('#c5prob').innerHTML = '<div class="cpbody"><div class="row spread wrap"><div><span class="lv hard">Hard</span> <b style="font-size:18px">' + esc(p.title) + '</b></div><small class="muted">Question ' + (i + 1) + ' of ' + A5.AR.problems.length + '</small></div>' +
      '<p style="margin:10px 0">' + esc(p.statement) + '</p><div class="cpmeta"><div><b>Input</b><br>' + esc(p.input) + '</div><div><b>Output</b><br>' + esc(p.output) + '</div></div>' +
      (p.samples || []).map(function (s, k) { return '<div class="cpsamp"><div><small>Sample input ' + (k + 1) + '</small><pre>' + esc(s.in) + '</pre></div><div><small>Expected output</small><pre>' + esc(s.out) + '</pre></div></div>'; }).join('') + '</div>';
    $('#c5lang').value = A5.langs[i];
    var ed = $('#c5ed'); ed.innerHTML = '';
    A5.ed = mountEditor(ed, { lang: A5.langs[i], value: A5.codes[i], onChange: function () { A5.codes[A5.i] = A5.ed.get(); a5save(A5.i); } });
    a5tabs(); a5pane();
  }
  function a5save(i) {
    clearTimeout(A5.saveT); A5.saveT = setTimeout(function () { if (!A5 || A5.AR.over) return; acct('challenge', { a: 'savecode', id: A5.AR.id, i: i, code: A5.codes[i], lang: A5.langs[i] }).catch(function () { }); }, 1200);
  }
  function a5pane() {
    var p = $('#c5pane'); if (!p || !A5) return;
    $$('.ctab').forEach(function (b) { b.classList.toggle('on', b.dataset.t === A5.tab); });
    if (A5.tab === 'in') { p.innerHTML = '<textarea class="in cstdin" id="c5stdin" placeholder="Type any input to test your program with, then press Run on this input." spellcheck="false"></textarea><div class="row" style="margin-top:8px"><button class="btn sm" data-act="c5run1">Run on this input</button></div>'; $('#c5stdin').value = A5.stdin; $('#c5stdin').addEventListener('input', function (e) { A5.stdin = e.target.value; }); }
    else p.innerHTML = '<pre class="cout" id="c5out">' + (A5.out[A5.i] || '<span class="muted">Press "Check samples" to test this question on its sample inputs. Hidden tests run when you submit.</span>') + '</pre>';
  }
  function a5run(samples) {
    if (!A5 || A5.busy) return; var i = A5.i, code = A5.ed.get(); if (!code.trim()) return A5.K.warn('Write some code first.');
    A5.busy = true; var b = $('#c5rb'); if (b) b.disabled = true; A5.tab = 'out'; a5pane(); var o = $('#c5out'); if (o) o.innerHTML = '<span class="muted">Running…</span>';
    var pr = samples ? checkSamples(code, A5.langs[i], A5.AR.problems[i]).then(samplesHTML) : runCode(A5.langs[i], code, A5.stdin).then(function (r) { return outHTML(r); });
    pr.catch(function (e) { return '<span class="cerr">' + esc(e.message) + '</span>'; }).then(function (h) { A5.out[i] = h; A5.busy = false; var b2 = $('#c5rb'); if (b2) b2.disabled = false; if (A5.i === i) a5pane(); });
  }
  function a5codes() { if (!A5) return []; A5.codes[A5.i] = A5.ed.get(); return A5.codes.map(function (c, i) { return { code: c === (TPL[A5.langs[i]] || '') ? '' : c, lang: A5.langs[i] }; }); }
  function a5langChange(v) { var i = A5.i, old = A5.ed.get(); if (!old.trim() || old === (TPL[A5.langs[i]] || '')) A5.ed.set(TPL[v] || ''); A5.langs[i] = v; ls('fs_code_lang', v); A5.ed.setLang(v); A5.codes[i] = A5.ed.get(); a5tabs(); a5save(i); }
  function resultBody5(c, K) {
    var me = K.meId(), r = c.result, done = c.status === 'done', m = c.mine || {}, qs = m.qs || [];
    var rows = qs.map(function (q, i) { var pt = c.review && c.review.problems ? c.review.problems[i] : null; return '<tr><td>Q' + (i + 1) + (pt ? ' &middot; ' + esc(pt.title) : '') + '</td><td>' + (q.runner ? q.passed + '/' + q.tests : 'AI') + '</td><td>' + (q.testPts || 0) + '/14</td><td>' + (q.quality || 0) + '/6</td><td><b>' + (q.score || 0) + '</b>/20</td></tr>'; }).join('');
    var body = '<div class="cvd ' + (m.correct >= 70 ? 'ok' : 'mid') + '"><b>Your score: ' + (m.correct == null ? '-' : m.correct) + ' / 100</b><small>' + (m.how === 'left' ? 'You exited, so the attempt ended and the saved code was marked.' : 'All 5 questions marked by hidden tests and the AI.') + '</small></div>' +
      (rows ? '<table class="restab" style="margin-top:10px"><thead><tr><th>Question</th><th>Tests</th><th>Test pts</th><th>AI quality</th><th>Score</th></tr></thead><tbody>' + rows + '</tbody></table>' : '') +
      (qs.length ? '<details class="chrev"><summary>AI review of each question</summary>' + qs.map(function (q, i) { var a = q.ai || {}; return '<div class="rq"><p><b>Q' + (i + 1) + '.</b> ' + esc(a.feedback || '') + (a.complexity ? ' <small>(' + esc(a.complexity) + ')</small>' : '') + (a.hint ? '<br><small>Tip: ' + esc(a.hint) + '</small>' : '') + '</p></div>'; }).join('') + '</details>' : '') +
      (m.ungraded ? '<p class="muted" style="margin-top:8px">The marker was not available, so this attempt was not scored.</p>' : '');
    if (done) {
      var mp = r.points[me] || {}, tp = r.points[c.friend.id] || {}, fname = esc(c.friend.name);
      var row = function (l, a, b) { return '<tr><td>' + l + '</td><td>' + a + '</td><td>' + b + '</td></tr>'; };
      body += '<table class="restab" style="margin-top:10px"><thead><tr><th></th><th>You</th><th>' + fname + '</th></tr></thead><tbody>' + row('Score (out of 100)', mp.base || 0, tp.base || 0) + row('Questions fully solved', (mp.correct || 0) + '/5', (tp.correct || 0) + '/5') + row('Time taken', mp.timeMs ? K.words(mp.timeMs) : '-', tp.timeMs ? K.words(tp.timeMs) : '-') + row('Speed bonus', '+' + (mp.timeBonus || 0), '+' + (tp.timeBonus || 0)) + row('First to finish', '+' + (mp.first || 0), '+' + (tp.first || 0)) + row('Winner bonus', '+' + (mp.win || 0), '+' + (tp.win || 0)) + '<tr class="tot"><td>Points earned</td><td>' + (mp.total || 0) + '</td><td>' + (tp.total || 0) + '</td></tr></tbody></table>';
      if (c.review && c.review.codes) body += '<details class="chrev"><summary>Your submitted code</summary>' + c.review.codes.map(function (x, i) { return '<p style="margin:8px 0 4px"><b>Q' + (i + 1) + '</b> <small>' + esc(langName(x.lang)) + '</small></p><pre class="cout" style="max-height:200px">' + esc(x.code || '(nothing written)') + '</pre>'; }).join('') + '</details>';
    }
    return body;
  }

  /* ================= topic sessions (no timer) ================= */
  var TL = {};
  function ctScript(src) {
    if (TL[src]) return TL[src];
    return TL[src] = new Promise(function (res, rej) { var sc = document.createElement('script'); sc.src = src; sc.onload = function () { res(); }; sc.onerror = function () { delete TL[src]; rej(new Error('The question bank could not be loaded.')); }; document.head.appendChild(sc); });
  }
  function ctWho() { var t = String((H().S && H().S.user && H().S.user.track) || ''); return { b: /btech\d/.test(t), c11: /class11/.test(t), c12: /class12/.test(t) }; }
  function ctIndex() {
    return ctScript('data/ct/index.js').then(function () {
      var w = ctWho(); return (window.FS_CTX || []).filter(function (s) { return s.kind === 'dsa' || s.kind === 'lang' ? w.b : s.kind === 'cs11' ? w.c11 : s.kind === 'cs12' ? w.c12 : false; });
    });
  }
  function ctSubj(id) { return ctScript('data/ct/' + id + '.js').then(function () { return window.FS_CT[id]; }); }
  function ctProg() { try { var r = JSON.parse(ls('fs_ct_prog') || '{}'); r.solved = r.solved || {}; r.done = r.done || {}; return r; } catch (e) { return { solved: {}, done: {} }; } }
  function ctSave(r) { ls('fs_ct_prog', JSON.stringify(r)); }
  function ctSolvedN(items, pr) { return items.filter(function (x) { return pr.solved[x.id]; }).length; }
  function ctUnlocked(items, pr, it) {
    var order = ['Easy', 'Medium', 'Hard'], k = order.indexOf(it.level);
    for (var i = 0; i < k; i++) if (items.some(function (x) { return x.level === order[i] && !pr.solved[x.id]; })) return false;
    return true;
  }
  function topicsView() {
    var g = $('#cgrid'); if (!g) return; g.innerHTML = '<div class="card"><p class="muted">Loading the question bank…</p></div>';
    ctIndex().then(function (idx) {
      TS.idx = idx; var pr = ctProg();
      if (!idx.length) { g.innerHTML = '<div class="card"><p class="muted">No coding topics are set up for your class yet.</p></div>'; return; }
      if (!TS.subj) {
        var cards = idx.map(function (s) {
          var d = 0; s.topics.forEach(function (t) { for (var k in pr.solved) if (k.indexOf(s.id + '-' + t.id + '-') === 0) d++; });
          return '<button class="card ctsub" data-act="ctsub" data-id="' + esc(s.id) + '"><div class="eyebrow">' + (s.lang ? 'Language' : s.kind === 'dsa' ? 'Any language' : 'Python') + '</div><b>' + esc(s.title) + '</b><small>' + s.topics.length + ' topics · ' + s.n + ' questions</small><div class="cbar"><i style="width:' + Math.round(100 * d / Math.max(1, s.n)) + '%"></i></div><small>' + d + ' solved</small></button>';
        }).join('');
        g.innerHTML = '<div class="ctinfo card"><div class="eyebrow">How a topic session works</div><p class="muted" style="margin-top:6px">Pick a subject and a topic. A session starts with no timer and ends only when you have solved every question of that topic: Easy first, then Medium, then Hard. You get an editor and a real terminal the whole time. You can pause and come back whenever you like; your progress is saved.</p></div><div class="ctsubs">' + cards + '</div>';
        return;
      }
      var s = idx.filter(function (x) { return x.id === TS.subj; })[0]; if (!s) { TS.subj = null; return topicsView(); }
      var rows = s.topics.map(function (t) {
        var d = 0; for (var k in pr.solved) if (k.indexOf(s.id + '-' + t.id + '-') === 0) d++;
        var done = d >= t.n;
        return '<div class="card cttopic"><div class="grow"><b>' + esc(t.title) + '</b><small class="muted" style="display:block">' + esc(t.desc || '') + '</small><div class="row wrap" style="gap:8px;margin-top:8px"><span class="lv easy">Easy ' + t.easy + '</span><span class="lv medium">Medium ' + t.medium + '</span><span class="lv hard">Hard ' + t.hard + '</span></div><div class="cbar" style="margin-top:10px"><i style="width:' + Math.round(100 * d / t.n) + '%"></i></div><small>' + d + ' of ' + t.n + ' solved' + (done ? ' · completed' : '') + '</small></div><button class="btn ' + (done ? '' : 'pri') + '" data-act="ctstart" data-id="' + esc(t.id) + '">' + (done ? 'Practise again' : d ? 'Continue session' : 'Start session') + '</button>' + (t.hard >= 5 ? '<button class="btn" data-act="c5new" data-id="' + esc(t.id) + '" title="Challenge a friend with 5 Hard questions">' + H().ic('flame') + ' Challenge</button>' : '') + '</div>';
      }).join('');
      g.innerHTML = '<div class="row spread wrap" style="grid-column:1/-1"><div><button class="btn sm ghost" data-act="ctback">← All subjects</button></div><div class="muted" style="font-size:14px">' + (s.lang ? 'You code in <b>' + esc(langName(s.lang)) + '</b> for this subject.' : s.kind === 'dsa' ? 'Use any language you like for DSA.' : 'Python only.') + '</div></div><div class="cttopics"><h2 style="margin:0 0 10px">' + esc(s.title) + '</h2>' + rows + '</div>';
    }).catch(function (e) { g.innerHTML = '<div class="card"><p class="cerr">' + esc(e.message) + '</p></div>'; });
  }
  function ctStart(tid) {
    var g = $('#cgrid'); if (g) g.innerHTML = '<div class="card"><p class="muted">Opening the session…</p></div>';
    ctSubj(TS.subj).then(function (s) {
      var t = s.topics.filter(function (x) { return x.id === tid; })[0]; if (!t) return;
      TS.subject = s; TS.topic = t; TS.items = t.items; TS.res = null; var pr = ctProg();
      var first = t.items.filter(function (x) { return !pr.solved[x.id]; })[0] || t.items[0];
      P.cur = first; P.out = null; P.stdin = (first.samples[0] || {}).in || '';
      P.lang = s.lang || (isBtech() ? (ls('fs_code_lang') || 'python') : 'python'); P.view = 'session'; TS.sess = true;
      if (H().startCoding(t.title + ' · ' + s.title)) return; go2();
    }).catch(function (e) { H().toast('Could not open', e.message, true); });
  }
  function tProblemHTML(p) {
    return '<div class="cpbody"><div class="row spread wrap"><div><span class="lv ' + p.level.toLowerCase() + '">' + p.level + '</span> <b style="font-size:18px">' + esc(p.title) + '</b></div><small class="muted">' + (TS.items.indexOf(p) + 1) + ' of ' + TS.items.length + '</small></div>' +
      '<p style="margin:10px 0">' + esc(p.statement) + '</p><div class="cpmeta"><div><b>Input</b><br>' + esc(p.input) + '</div><div><b>Output</b><br>' + esc(p.output) + '</div></div>' +
      (p.samples || []).map(function (x, i) { return '<div class="cpsamp"><div><small>Sample input ' + (i + 1) + '</small><pre>' + esc(x.in) + '</pre></div><div><small>Expected output</small><pre>' + esc(x.out) + '</pre></div></div>'; }).join('') + '</div>';
  }
  function tSideHTML() {
    var pr = ctProg(), it = TS.items, d = ctSolvedN(it, pr), out = '';
    ['Easy', 'Medium', 'Hard'].forEach(function (lv) {
      var grp = it.filter(function (x) { return x.level === lv; }); if (!grp.length) return;
      out += '<div class="eyebrow" style="margin-top:12px">' + lv + ' · ' + grp.filter(function (x) { return pr.solved[x.id]; }).length + '/' + grp.length + '</div><div class="cplist">' + grp.map(function (x) {
        var ok = !!pr.solved[x.id], open = ctUnlocked(it, pr, x);
        return '<button class="cprob' + (P.cur && P.cur.id === x.id ? ' on' : '') + (open ? '' : ' locked') + '" data-act="ctpick" data-id="' + esc(x.id) + '"><b>' + (ok ? '✔ ' : open ? '' : '🔒 ') + esc(x.title) + '</b></button>';
      }).join('') + '</div>';
    });
    return '<div class="eyebrow">' + esc(TS.topic.title) + '</div><div class="cbar" style="margin:8px 0"><i style="width:' + Math.round(100 * d / it.length) + '%"></i></div><small class="muted">' + d + ' of ' + it.length + ' solved · no timer</small>' + out + (H().S.session && !H().S.session.ended && H().S.session.coding ? '<small class="muted" style="display:block;margin-top:14px">Strict session. Use Emergency exit at the top if you must stop.</small>' : '<button class="btn sm ghost" style="margin-top:14px;width:100%" data-act="ctpause">Pause and leave</button>');
  }
  function tdraw() {
    var g = $('#cgrid'); if (!g || !TS.items) return;
    var fixed = TS.subject && TS.subject.lang, lopts = LANGS.filter(function (l) { return isBtech() || l[0] === 'python'; }).map(function (l) { return '<option value="' + l[0] + '"' + (P.lang === l[0] ? ' selected' : '') + '>' + l[1] + '</option>'; }).join('');
    g.innerHTML = '<aside class="card cpside" id="ctside">' + tSideHTML() + '</aside>' +
      '<section class="cmain"><div class="card" id="cprob">' + tProblemHTML(P.cur) + '</div>' +
      '<div class="card cwork"><div class="row spread wrap" style="gap:10px"><div class="row wrap" style="gap:10px"><select class="in csel" id="clang" aria-label="Language"' + ((fixed || !isBtech()) ? ' disabled' : '') + '>' + lopts + '</select><button class="btn sm ghost" data-act="cdreset">Reset code</button></div>' +
      '<div class="row wrap" style="gap:10px"><button class="btn sm" data-act="cdrun" id="cdrb">▶ Run</button><button class="btn sm pri" data-act="ctsubmit" id="ctsb">Submit answer</button></div></div>' +
      '<div id="ced" class="cedwrap"></div>' +
      '<div class="ctabs" role="tablist"><button class="ctab' + (P.tab === 'out' ? ' on' : '') + '" data-act="cdtab" data-t="out">Output</button><button class="ctab' + (P.tab === 'in' ? ' on' : '') + '" data-act="cdtab" data-t="in">Input</button><button class="ctab' + (P.tab === 'term' ? ' on' : '') + '" data-act="cdtab" data-t="term">Terminal</button></div>' +
      '<div id="cpane" class="cpane"></div><p class="muted" style="font-size:13px;margin-top:8px">' + runnersLine() + '</p></div></section>';
    P.ed = mountEditor($('#ced'), { lang: P.lang, value: loadDraft(), onChange: function (v) { ls(draftKey(P.cur && P.cur.id, P.lang), v); } });
    pane();
  }
  function ctPick(id) {
    var it = TS.items.filter(function (x) { return x.id === id; })[0]; if (!it) return;
    var pr = ctProg(); if (!ctUnlocked(TS.items, pr, it)) return H().toast('Finish the earlier level first', 'Medium opens after every Easy question is solved, and Hard after every Medium one.', true);
    ls(draftKey(P.cur && P.cur.id, P.lang), P.ed ? P.ed.get() : ''); P.cur = it; P.out = null; P.stdin = (it.samples[0] || {}).in || ''; tdraw();
  }
  function ctSubmit() {
    if (P.busy || !P.cur) return; var code = P.ed.get(); if (!code.trim()) return H().toast('Nothing to submit', 'Write some code first.', true);
    P.busy = true; var b = $('#ctsb'); if (b) { b.disabled = true; b.textContent = 'Checking…'; } P.tab = 'out'; pane();
    var tests = P.cur.tests, res = [], i = 0, cur = P.cur;
    (function next() {
      if (i >= tests.length) return fin();
      var t = tests[i++]; var o = $('#cout'); if (o) o.innerHTML = '<span class="muted">Running test ' + i + ' of ' + tests.length + '…</span>';
      return runCode(P.lang, code, t.in).then(function (r) { res.push({ ok: r.code === 0 && eqOut(P.lang, r.stdout, t.out), r: r, t: t }); }).catch(function (e) { res.push({ ok: false, r: { stdout: '', stderr: e.message, code: 1 }, t: t }); }).then(function () { if (res.length && !res[res.length - 1].ok && /code server is not switched|could not run|not installed|cannot run/i.test(res[res.length - 1].r.stderr || '')) return fin(); return next(); });
    })();
    function fin() {
      var pass = res.filter(function (x) { return x.ok; }).length, all = pass === tests.length && res.length === tests.length;
      recRun(P.lang, 'run', cur, all);
      var pr = ctProg();
      if (all && !pr.solved[cur.id]) { pr.solved[cur.id] = { at: Date.now(), lang: P.lang }; ctSave(pr); }
      var bad = res.filter(function (x) { return !x.ok; })[0], html;
      if (all) html = '<div class="cvd ok"><b>All ' + tests.length + ' tests passed. Question solved.</b><small>' + (ctSolvedN(TS.items, ctProg()) >= TS.items.length ? 'That was the last question of this topic.' : 'Pick the next question on the left.') + '</small></div>';
      else html = '<div class="cvd bad"><b>' + pass + ' of ' + tests.length + ' tests passed</b><small>Fix the failing case and submit again. There is no timer.</small></div>' + (bad ? '<div class="cpsamp"><div><small>Failing input</small><pre>' + esc(bad.t.in.length > 300 ? bad.t.in.slice(0, 300) + '…' : bad.t.in) + '</pre></div><div><small>Expected</small><pre>' + esc(bad.t.out) + '</pre></div></div><div class="cpsamp"><div><small>Your output</small><pre class="cerr">' + esc(bad.r.stdout || bad.r.stderr || '(no output)') + '</pre></div></div>' : '');
      P.out = html; P.busy = false;
      var sd = $('#ctside'); if (sd) sd.innerHTML = tSideHTML();
      var b2 = $('#ctsb'); if (b2) { b2.disabled = false; b2.textContent = 'Submit answer'; } if (P.tab === 'out') pane();
      if (all) ctAfterSolve();
    }
  }
  function ctAfterSolve() {
    var pr = ctProg(), n = ctSolvedN(TS.items, pr);
    if (n >= TS.items.length) {
      pr.done[TS.subject.id + '/' + TS.topic.id] = Date.now(); ctSave(pr);
      H().modal('<div style="text-align:center"><div class="eyebrow">Session complete</div><h2 style="margin:8px 0">' + esc(TS.topic.title) + '</h2><p class="muted" style="margin-bottom:16px">You solved all ' + TS.items.length + ' questions of this topic. The session has ended.</p><button class="btn pri" data-act="ctend">Back to topics</button></div>');
    } else H().toast('Solved', n + ' of ' + TS.items.length + ' done in this topic.');
  }

  /* ================= hooks ================= */
  FSX.routes = Object.assign(FSX.routes || {}, { code: viewCode });
  var prevGate = FSX.after;
  FSX.actions = Object.assign(FSX.actions || {}, {
    cdview: function (el) { P.view = el.dataset.v; P.keep = true; go2(); },
    cdopen: function (el) { P.cur = (P.problems || []).filter(function (x) { return x.id === el.dataset.id; })[0] || null; P.out = null; P.stdin = ((P.cur && P.cur.samples && P.cur.samples[0]) || {}).in || ''; P.view = 'practice'; TS.sess = false;
      if (P.cur && !openSess()) return H().startCoding('Practice · ' + P.cur.title); go2(); },
    cdfilter: function (el) { P.filter = el.dataset.l; var s = $('.cpside'); if (s) s.innerHTML = '<div class="eyebrow">Questions</div>' + probListHTML(); },
    cdprob: function (el) {
      ls(draftKey(P.cur && P.cur.id, P.lang), P.ed ? P.ed.get() : '');
      P.cur = (P.problems || []).filter(function (x) { return x.id === el.dataset.id; })[0] || null; P.out = null; P.stdin = ((P.cur && P.cur.samples && P.cur.samples[0]) || {}).in || '';
      if (P.cur && !openSess()) { TS.sess = false; P.view = 'practice'; return H().startCoding('Practice · ' + P.cur.title); }
      draw();
    },
    cdtab: function (el) { P.tab = el.dataset.t; pane(); },
    cdrun: doRun, cdsamples: doSamples,
    cdreset: function () { if (P.ed) { ls(draftKey(P.cur && P.cur.id, P.lang), ''); P.ed.set(TPL[P.lang] || ''); } },
    cdstop: stopTerm,
    ctsub: function (el) { TS.subj = el.dataset.id; topicsView(); },
    ctback: function () { TS.subj = null; topicsView(); },
    ctstart: function (el) { ctStart(el.dataset.id); },
    ctpick: function (el) { ctPick(el.dataset.id); },
    ctsubmit: ctSubmit,
    ctpause: function () { ls(draftKey(P.cur && P.cur.id, P.lang), P.ed ? P.ed.get() : ''); P.view = 'topics'; go2(); },
    ctend: function () { H().closeModal(); TS.items = null; TS.sess = false; P.view = 'topics'; var s = H().S.session; if (s && s.coding && !s.ended) H().endCoding(true); else go2(); },
    cdchallenge: challengeModal, ccsend: challengeSend,
    ccplay: function (el) { H().closeModal(); FSX.challenge.play(el.dataset.id); },
    carun: function () { arenaRun(true); }, carun1: function () { arenaRun(false); },
    catab: function (el) { if (CA) { CA.tab = el.dataset.t; capane(); } },
    chtocode: function () { H().closeModal(); location.hash = '#/code'; },
    c5new: function (el) { challenge5Modal(el && el.dataset && el.dataset.id ? { sid: TS.subj, tid: el.dataset.id } : null); }, c5send: c5send,
    c5q: function (el) { if (A5 && !A5.AR.over) { A5.codes[A5.i] = A5.ed.get(); a5show(+el.dataset.i); } },
    c5run: function () { a5run(true); }, c5run1: function () { a5run(false); },
    c5tab: function (el) { if (A5) { A5.tab = el.dataset.t; a5pane(); } },
    c5exit: function () { if (A5 && A5.K.exit) A5.K.exit(); }
  });
  document.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'clang' && P.ed) setLang(e.target.value);
    else if (e.target && e.target.id === 'c5lang' && A5) a5langChange(e.target.value);
    else if (e.target && e.target.id === 'c5s' && N5) { N5.sid = e.target.value; N5.tid = ''; c5paint(); }
    else if (e.target && e.target.id === 'c5t' && N5) { N5.tid = e.target.value; }
    else if (e.target && e.target.id === 'c5f' && N5) { N5.fid = e.target.value; }
    else if (e.target && e.target.id === 'calang' && CA) { var old = CA.ed.get(); if (old === (TPL[CA.lang] || '') || !old.trim()) CA.ed.set(TPL[e.target.value] || ''); CA.lang = e.target.value; ls('fs_code_lang', CA.lang); CA.ed.setLang(CA.lang); CA.ed.focus(); }
  });
  FSX.code = { run: runCode, mount: mountEditor, templates: TPL, langName: langName, arenaDraw: arenaDraw, arenaPayload: arenaPayload, arenaFlush: arenaFlush, resultBody: resultBody, arena5Draw: arena5Draw, arena5Codes: a5codes, resultBody5: resultBody5, challenge5: challenge5Modal, isBtech: isBtech, localInfo: localInfo };
})();

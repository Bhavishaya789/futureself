/* runs the student's JavaScript away from the app page, so a loop can be stopped by terminating this worker */
'use strict';
var out = [];
function fmt(a) { return a.map(function (x) { if (typeof x === 'string') return x; try { return typeof x === 'object' ? JSON.stringify(x) : String(x); } catch (e) { return String(x); } }).join(' '); }
self.onmessage = function (e) {
  var d = e.data, lines = String(d.stdin || '').split('\n'), li = 0, err = '';
  var cons = { log: function () { out.push(fmt([].slice.call(arguments))); }, info: function () { out.push(fmt([].slice.call(arguments))); }, error: function () { out.push(fmt([].slice.call(arguments))); }, warn: function () { out.push(fmt([].slice.call(arguments))); } };
  var readline = function () { return li < lines.length ? lines[li++] : ''; };
  var input = String(d.stdin || '');
  try {
    var fn = new Function('console', 'readline', 'prompt', 'input', 'require', 'process', '"use strict";\n' + d.code);
    var fake = { stdin: { on: function () { }, setEncoding: function () { }, resume: function () { } }, stdout: { write: function (s) { out.push(String(s).replace(/\n$/, '')); } }, argv: [], env: {}, exit: function () { throw new Error('exit'); } };
    var req = function (m) {
      if (m === 'fs') return { readFileSync: function () { return input; } };
      if (m === 'readline') return { createInterface: function () { var h = {}; var o = { on: function (ev, f) { h[ev] = f; setTimeout(function () { if (ev === 'close') return; }, 0); return o; }, close: function () { }, question: function (q, f) { f(readline()); } }; setTimeout(function () { lines.forEach(function (l, i) { if (i === lines.length - 1 && l === '') return; h.line && h.line(l); }); h.close && h.close(); }, 0); return o; } };
      throw new Error('Cannot find module ' + m);
    };
    fn(cons, readline, readline, input, req, fake);
  } catch (ex) { if (ex.message !== 'exit') err = (ex && ex.stack ? ex.stack.split('\n').slice(0, 4).join('\n') : String(ex)); }
  setTimeout(function () { self.postMessage({ stdout: out.join('\n') + (out.length ? '\n' : ''), stderr: err, code: err ? 1 : 0 }); out = []; }, 20);
};

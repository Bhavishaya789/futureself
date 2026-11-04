/* Python that runs inside the app (Pyodide), so it works on any device with no internet and no install */
'use strict';
importScripts('pyodide/pyodide.js');
var py = null, boot = null;
function ready() { return boot || (boot = loadPyodide({ indexURL: 'pyodide/' }).then(function (p) { py = p; })); }
self.onmessage = function (e) {
  var d = e.data;
  ready().then(function () {
    var out = '', err = '', lines = String(d.stdin || '').split('\n'), li = 0;
    py.setStdout({ batched: function (s) { out += s + '\n'; } });
    py.setStderr({ batched: function (s) { err += s + '\n'; } });
    py.setStdin({ stdin: function () { return li < lines.length ? lines[li++] : undefined; } });
    var code = 0;
    return py.runPythonAsync(d.code, { globals: py.toPy({ __name__: '__main__' }) }).catch(function (ex) { code = 1; var m = String(ex && ex.message || ex).split('\n'); err += m.slice(Math.max(0, m.length - 8)).join('\n') + '\n'; }).then(function () { self.postMessage({ stdout: out, stderr: err, code: code }); });
  }).catch(function (ex) { self.postMessage({ stdout: '', stderr: 'Python could not start: ' + ex.message, code: 1, fatal: true }); });
};
self.postMessage({ hello: true });

// Browser stand-in for the few fs calls the shared code makes. Files live in localStorage.
var P = 'fsfile:';
function nf(p) { var e = new Error('ENOENT: ' + p); e.code = 'ENOENT'; return e; }
module.exports = {
  existsSync: function (p) { return localStorage.getItem(P + p) !== null; },
  readFileSync: function (p) { var v = localStorage.getItem(P + p); if (v === null) throw nf(p); return v; },
  writeFileSync: function (p, d) { localStorage.setItem(P + p, typeof d === 'string' ? d : String(d)); },
  renameSync: function (a, b) { var v = localStorage.getItem(P + a); if (v === null) throw nf(a); localStorage.setItem(P + b, v); localStorage.removeItem(P + a); },
  unlinkSync: function (p) { localStorage.removeItem(P + p); },
  mkdirSync: function () { }
};

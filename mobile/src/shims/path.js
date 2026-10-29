module.exports = {
  join: function () { return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/'); },
  dirname: function (p) { var i = String(p).lastIndexOf('/'); return i < 0 ? '.' : p.slice(0, i); }
};

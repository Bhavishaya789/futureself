// Tiny .env loader (no dependency). Later files do not override earlier ones.
const fs = require('fs');

function parse(text) {
  const out = {};
  String(text).split(/\r?\n/).forEach((line) => {
    const t = line.trim();
    if (!t || t[0] === '#') return;
    const i = t.indexOf('=');
    if (i < 1) return;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if ((v[0] === '"' && v.endsWith('"')) || (v[0] === "'" && v.endsWith("'"))) v = v.slice(1, -1);
    out[k] = v;
  });
  return out;
}

function load(paths) {
  const used = [];
  paths.forEach((p) => {
    try {
      if (!fs.existsSync(p)) return;
      const vars = parse(fs.readFileSync(p, 'utf8'));
      Object.keys(vars).forEach((k) => { if (process.env[k] === undefined || process.env[k] === '') process.env[k] = vars[k]; });
      used.push(p);
    } catch (e) { /* ignore unreadable file */ }
  });
  return used;
}

module.exports = { parse, load };

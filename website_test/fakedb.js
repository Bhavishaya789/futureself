const get = (o, p) => p.split('.').reduce((x, k) => (x == null ? undefined : x[k]), o);
function setp(o, p, v) { const ks = p.split('.'); let x = o; ks.slice(0, -1).forEach((k) => { if (x[k] == null) x[k] = /^\d+$/.test(ks[ks.indexOf(k) + 1]) ? [] : {}; x = x[k]; }); x[ks[ks.length - 1]] = v; }
function ok1(v, c) {
  if (c && typeof c === 'object' && !(c instanceof RegExp) && !(c instanceof Date) && Object.keys(c).some((k) => k[0] === '$')) {
    return Object.keys(c).every((k) => k === '$ne' ? JSON.stringify(v) !== JSON.stringify(c[k]) : k === '$in' ? c[k].includes(v) : k === '$nin' ? !c[k].includes(v) : k === '$exists' ? (v !== undefined) === c[k] : true);
  }
  if (c instanceof RegExp) return typeof v === 'string' && c.test(v);
  if (Array.isArray(v)) return v.includes(c);
  return String(v) === String(c);
}
function col() {
  const rows = [], match = (r, f) => Object.keys(f).every((k) => ok1(get(r, k), f[k]));
  const self = { rows,
    async findOne(f) { const r = rows.find((x) => match(x, f)); return r ? structuredClone(r) : null; },
    find(f) { let out = rows.filter((r) => match(r, f)); const cur = { sort(s) { const k = Object.keys(s)[0]; out = out.slice().sort((a, b) => (b[k] - a[k]) * (s[k] === -1 ? 1 : -1)); return cur; }, limit(n) { out = out.slice(0, n); return cur; }, async toArray() { return out; } }; return cur; },
    async insertOne(d) { rows.push({ ...d }); },
    async deleteOne(f) { const i = rows.findIndex((r) => match(r, f)); if (i >= 0) rows.splice(i, 1); },
    async updateOne(f, u, o) {
      let r = rows.find((x) => match(x, f)), created = false;
      if (!r) { if (!(o && o.upsert)) return { matchedCount: 0, modifiedCount: 0 }; r = { ...Object.fromEntries(Object.entries(f).filter(([k, v]) => typeof v !== 'object')) }; rows.push(r); created = true; }
      Object.entries(u.$set || {}).forEach(([k, v]) => setp(r, k, v));
      Object.entries(u.$inc || {}).forEach(([k, v]) => setp(r, k, (get(r, k) || 0) + v));
      Object.entries(u.$push || {}).forEach(([k, v]) => { const a = get(r, k) || []; a.push(v); setp(r, k, a); });
      return { matchedCount: created ? 0 : 1, modifiedCount: 1, upsertedCount: created ? 1 : 0 };
    }, async findOneAndUpdate(f, u, o) { await this.updateOne(f, u, o); return rows.find((x) => match(x, f)) || null; } };
  return self;
}
module.exports = { col };

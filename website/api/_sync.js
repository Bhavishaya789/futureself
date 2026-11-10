'use strict';
/* Cloud sync of a signed-in student's study data, so every device with the same email shows the same data.
   One row per (user, area). The data is kept as an opaque JSON string, so nothing the client sends can ever act as a database operator.
   Writes are checked against a revision number: if two devices write at once the second one is told to merge and try again. */
const L = require('./_lib');
const { fail } = L;
const AREAS = { study: 1500000, prefs: 120000, store: 1900000 };   // largest allowed size in characters

const sync = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const { d, user } = await L.authed(req), uid = String(user._id), op = String(b.op || 'pull');
  if (!d.syncdocs) fail(500, 'Sync storage is not available.');
  await L.limit(req, 'sync', 90, 60);
  const out = (r) => ({ rev: r ? r.rev : 0, at: r ? r.at : 0, data: r ? r.data : '' });
  if (op === 'pull') {
    const rows = {}; for (const ns of Object.keys(AREAS)) rows[ns] = out(await d.syncdocs.findOne({ uid, ns }));
    return { ok: true, docs: rows, now: Date.now() };
  }
  if (op === 'push') {
    const ns = String(b.ns || ''); if (!AREAS[ns]) fail(400, 'Unknown area.');
    const data = b.data, base = Math.max(0, parseInt(b.base, 10) || 0);
    if (typeof data !== 'string' || data.length > AREAS[ns]) fail(413, 'That is too much data to sync (' + ns + ').');
    let ok = false; try { const j = JSON.parse(data); ok = j && typeof j === 'object' && !Array.isArray(j); } catch (e) { ok = false; }
    if (!ok) fail(400, 'The data is not valid.');
    const at = Date.now();
    if (base === 0) {
      try { await d.syncdocs.insertOne({ uid, ns, rev: 1, at, data }); return { ok: true, rev: 1, at }; }
      catch (e) { return { ok: false, conflict: true, ...out(await d.syncdocs.findOne({ uid, ns })) }; }
    }
    const r = await d.syncdocs.updateOne({ uid, ns, rev: base }, { $set: { data, at }, $inc: { rev: 1 } });
    if (!r || !r.matchedCount) return { ok: false, conflict: true, ...out(await d.syncdocs.findOne({ uid, ns })) };
    return { ok: true, rev: base + 1, at };
  }
  if (op === 'erase') { await d.syncdocs.deleteMany({ uid }); return { ok: true }; }   // delete everything this account has synced
  fail(400, 'Unknown action.');
});
module.exports = { sync, AREAS };

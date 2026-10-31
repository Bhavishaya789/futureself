'use strict';
/* GET /api/content            -> { ok, version, subjects:[{id,title,group,lessons,qa,quiz,formulas,v}] }  (index of what is stored)
   GET /api/content?subject=ID -> { ok, v, subject }                                                      (one subject with every lesson)
   Lessons live in the MongoDB "content" collection, filled by tools/seed-content.js. Public study material, no sign-in. */
const L = require('./_lib');

module.exports = L.wrap(async (req) => {
  if (req.method !== 'GET') L.fail(405, 'Use GET.');
  await L.limit(req, 'content', 120, 600);
  const d = await L.db(), col = d.content;
  if (!col) L.fail(500, 'The content store is not available.');
  const q = (req.query) || {};
  const sid = String(q.subject || '').replace(/[^a-z0-9._-]/gi, '').slice(0, 80);
  if (sid) {
    const doc = await col.findOne({ _id: 'subject:' + sid });
    if (!doc) L.fail(404, 'That subject is not in the content store.');
    return { ok: true, v: doc.v, subject: doc.subject };
  }
  const idx = await col.findOne({ _id: 'index' });
  if (!idx) L.fail(404, 'No content has been uploaded yet. Run tools/seed-content.js.');
  return { ok: true, version: idx.version, at: idx.at, subjects: idx.subjects };
});

'use strict';
/* GET /api/daily -> { ok, date, index, total, fact:{c,en,hi} }
   Today's General Knowledge fact (changes every day, India time). The list lives in website/data/daily.json:
   add new entries at the end of "facts" and redeploy to grow it. Public data, no sign-in needed. */
const L = require('./_lib');
const data = require('../data/daily.json');

module.exports = L.wrap(async (req) => {
  if (req.method !== 'GET') L.fail(405, 'Use GET.');
  await L.limit(req, 'daily', 120, 600);
  const facts = Array.isArray(data.facts) ? data.facts : [];
  if (!facts.length) L.fail(500, 'No daily facts are configured.');
  const ist = new Date(Date.now() + 330 * 60000);
  const day = Math.floor(Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate()) / 86400000);
  const index = ((day % facts.length) + facts.length) % facts.length;
  return { ok: true, date: ist.toISOString().slice(0, 10), index, total: facts.length, fact: facts[index] };
});

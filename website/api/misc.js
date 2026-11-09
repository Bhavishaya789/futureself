'use strict';
/* One serverless function for several small endpoints, so the project stays under Vercel's limit of 12 functions on the free plan.
   vercel.json rewrites /api/run, /api/capture and /api/avatar to /api/misc?fn=<name>; the apps keep calling the old addresses. */
const X = require('./_extras');
const H = { run: require('./_run'), capture: require('./_capture'), avatar: require('./_avatar'), share: X.share, pview: X.pview, plan: X.plan, report: X.report };
module.exports = (req, res) => {
  let fn = '';
  try { fn = String((req.query && req.query.fn) || new URL(req.url, 'http://x').searchParams.get('fn') || ''); } catch (e) { /* fall through */ }
  const h = H[fn];
  if (!h) { res.statusCode = 404; res.setHeader('content-type', 'application/json'); return res.end(JSON.stringify({ error: 'Unknown endpoint.' })); }
  return h(req, res);
};
module.exports._handlers = H;

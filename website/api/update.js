'use strict';
/* GET /api/update -> { ok, version, notes, win:{url,sha256,size}|null, and:{url,sha256,size}|null }
   Tells the apps which version is the newest. It reads your latest GitHub Release (tag like v1.9.0) and caches the answer for 10 minutes. */
const L = require('./_lib');
const { fail } = L;
const REPO = () => (process.env.GITHUB_REPO || 'Bhavishaya789/futureself').replace(/[^\w./-]/g, '');
let cache = null;

const asset = (r, re) => {
  const a = (r.assets || []).find((x) => re.test(String(x.name || '')) && /^https:\/\/github\.com\//.test(String(x.browser_download_url || '')));
  return a ? { url: a.browser_download_url, sha256: /^sha256:([a-f0-9]{64})$/.test(String(a.digest || '')) ? String(a.digest).slice(7) : '', size: +a.size || 0 } : null;
};

module.exports = L.wrap(async (req) => {
  if (req.method !== 'GET') fail(405, 'Use GET.');
  await L.limit(req, 'update', 60, 600);
  const now = Date.now();
  if (cache && now - cache.at < 600000) return cache.out;
  const f = global.__FS_FETCH || fetch, headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'FutureSelf-update' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
  let r;
  try { const resp = await f('https://api.github.com/repos/' + REPO() + '/releases/latest', { headers }); if (!resp.ok) throw 0; r = await resp.json(); }
  catch (e) { if (cache) return cache.out; fail(502, 'Could not read the latest version from GitHub right now. Try again later.'); }
  const version = String(r.tag_name || '').replace(/^v/i, '');
  if (!/^\d+(\.\d+){1,3}$/.test(version)) fail(502, 'The latest GitHub release has no version number (name the tag like v1.9.0).');
  const out = { ok: true, version, notes: String(r.body || '').replace(/[<>]/g, '').slice(0, 600), win: asset(r, /setup.*\.exe$/i), and: asset(r, /\.apk$/i) };
  cache = { at: now, out };
  return out;
});

'use strict';
/* POST /api/videos { q, channel } -> { ok, items:[{id,title,channel,sec}] }
   The student searches HERE (signed in, rate limited). The server searches YouTube and returns a short study list. The apps cannot search YouTube themselves. */
const L = require('./_lib');
const Y = require('./_yt');
const { fail } = L;
const PER_HOUR = 30, CACHE_MS = 6 * 3600 * 1000;

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const { d, user } = await L.authed(req);
  const q = String(b.q || '').replace(/\s+/g, ' ').trim(), channel = String(b.channel || '').replace(/\s+/g, ' ').trim();
  if (q.length < 2) fail(400, 'Type what you want to learn (at least 2 letters).');
  if (q.length > 120 || channel.length > 60) fail(400, 'That search is too long.');

  const key = L.sha256(Y.norm(q) + '|' + Y.norm(channel)), now = Date.now();
  if (d.vcache) {
    const hit = await d.vcache.findOne({ key });
    if (hit && hit.expireAt > now && Array.isArray(hit.items)) return { ok: true, items: hit.items, cached: true };
  }
  // 30 searches per hour per account (cached answers are free)
  const rate = user.vq && user.vq.resetAt > now ? user.vq : { n: 0, resetAt: now + 3600000 };
  if (rate.n >= PER_HOUR) fail(429, 'You reached the search limit (' + PER_HOUR + ' per hour). Try again in a little while, or use the videos FutureSelf picked for you.');
  await d.users.updateOne({ _id: user._id }, { $set: { vq: { n: rate.n + 1, resetAt: rate.resetAt } } });

  let items;
  try { items = await Y.search(q, channel); } catch (e) { fail(502, 'YouTube search is not available right now. Please try again later.'); }
  if (!items.length) return { ok: true, items: [], note: channel ? 'No study video from "' + channel + '" matched that search.' : 'No study video matched that search. Try different words.' };
  if (d.vcache) { try { await d.vcache.updateOne({ key }, { $set: { key, items, expireAt: now + CACHE_MS } }, { upsert: true }); } catch (e) { /* cache is optional */ } }
  return { ok: true, items };
});

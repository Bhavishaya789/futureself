'use strict';
/* Searches YouTube on the SERVER for the signed-in student. The apps never talk to YouTube search themselves:
   they send a request here, and get back only a short list of study videos (id, title, channel, length). */

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
const STOP = new Set('the and for with from into about explained explain explanation introduction intro basics basic what why how when use using in of to a an is are on by or vs hindi english lecture lesson tutorial class video videos full complete'.split(' '));
const tokens = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').split(' ').filter((w) => w.length >= 2 && !STOP.has(w)).map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w));
/* titles that are plainly not study material are dropped, whatever was typed */
const BAD = /\b(reaction|prank|trailer|vlog|gameplay|podcast|meme|funny|music video|full movie|official video|song|lyrics|asmr|live stream|livestream|shorts?|#shorts|mashup|remix|cartoon|movie|web series|episode)\b/i;

function lenSec(t) {
  if (!t) return 0; const p = String(t).split(':').map((x) => parseInt(x, 10));
  if (p.some((x) => isNaN(x))) return 0; return p.reduce((a, x) => a * 60 + x, 0);
}
function isoSec(d) { const m = String(d || '').match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/); return m ? ((+m[1] || 0) * 86400 + (+m[2] || 0) * 3600 + (+m[3] || 0) * 60 + (+m[4] || 0)) : 0; }
const decode = (s) => String(s || '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

/* official YouTube Data API (needs YOUTUBE_API_KEY): 1 search call + 1 details call */
async function viaApi(q, key, f) {
  const u = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&videoEmbeddable=true&safeSearch=strict&relevanceLanguage=en&q=' + encodeURIComponent(q) + '&key=' + encodeURIComponent(key);
  const r = await f(u); if (!r.ok) throw new Error('YouTube API ' + r.status);
  const j = await r.json(); const ids = (j.items || []).map((x) => x.id && x.id.videoId).filter((x) => /^[A-Za-z0-9_-]{11}$/.test(x || ''));
  if (!ids.length) return [];
  const r2 = await f('https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=' + ids.join(',') + '&key=' + encodeURIComponent(key));
  if (!r2.ok) throw new Error('YouTube API ' + r2.status);
  const j2 = await r2.json();
  return (j2.items || []).map((v) => ({ id: v.id, title: decode(v.snippet && v.snippet.title), channel: decode(v.snippet && v.snippet.channelTitle), sec: isoSec(v.contentDetails && v.contentDetails.duration), live: !!(v.snippet && v.snippet.liveBroadcastContent && v.snippet.liveBroadcastContent !== 'none') }));
}

/* fallback without a key: read the public results page */
function walk(o, out) {
  if (!o || typeof o !== 'object') return; if (Array.isArray(o)) { o.forEach((x) => walk(x, out)); return; }
  if (o.videoRenderer && o.videoRenderer.videoId) out.push(o.videoRenderer);
  for (const k of Object.keys(o)) if (k !== 'videoRenderer') walk(o[k], out);
}
const txt = (x) => (!x ? '' : x.simpleText || (x.runs ? x.runs.map((r) => r.text).join('') : ''));
function parseResults(html) {
  html = String(html || '');
  const m = html.match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});\s*<\/script>/) || html.match(/ytInitialData"\]\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
  if (!m) return []; let data; try { data = JSON.parse(m[1]); } catch (e) { return []; }
  const vr = []; walk(data, vr); const out = [];
  vr.forEach((v) => out.push({ id: v.videoId, title: txt(v.title), channel: txt(v.ownerText) || txt(v.longBylineText), sec: lenSec(txt(v.lengthText)), live: !v.lengthText || (v.badges || []).some((b) => /LIVE/i.test(JSON.stringify(b))) }));
  return out;
}
async function viaPage(q, f) {
  const r = await f('https://www.youtube.com/results?hl=en&search_query=' + encodeURIComponent(q) + '&sp=EgIQAQ%3D%3D', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36', 'Accept-Language': 'en-IN,en;q=0.9', Cookie: 'CONSENT=YES+1; SOCS=CAI' } });
  if (!r.ok) throw new Error('YouTube ' + r.status);
  return parseResults(await r.text());
}

/* the rules every result must pass before the student sees it */
function clean(items, query, channel) {
  const qt = tokens(query), seen = {}, ch = norm(channel);
  return items.filter((c) => {
    if (!/^[A-Za-z0-9_-]{11}$/.test(c.id || '') || seen[c.id]) return false; seen[c.id] = 1;
    if (c.live || !c.title || c.sec < 120 || c.sec > 10800 || BAD.test(c.title)) return false;
    if (ch) { const cc = norm(c.channel); if (!(cc.indexOf(ch) >= 0 || (cc.length > 3 && ch.indexOf(cc) >= 0))) return false; }
    if (qt.length) { const have = new Set(tokens(c.title + ' ' + c.channel)); if (!qt.some((w) => have.has(w))) return false; }
    return true;
  }).slice(0, 12).map((c) => ({ id: c.id, title: c.title.slice(0, 140), channel: String(c.channel || '').slice(0, 80), sec: c.sec }));
}

async function search(query, channel, opts) {
  const f = (opts && opts.fetch) || global.__FS_FETCH || fetch, key = (opts && opts.key) || process.env.YOUTUBE_API_KEY || '';
  const q = (channel ? query + ' ' + channel : query).trim();
  let raw, err;
  if (key) { try { raw = await viaApi(q, key, f); } catch (e) { err = e; } }
  if (!raw) { try { raw = await viaPage(q, f); } catch (e) { err = err || e; } }
  if (!raw) throw err || new Error('no result');
  return clean(raw, query, channel);
}
module.exports = { search, clean, parseResults, isoSec, norm, tokens };

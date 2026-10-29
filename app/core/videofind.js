'use strict';
/* Picks the study video for a topic, so the student never has to search.
   1) parse a YouTube results page into candidates  2) rank by trusted channel + sensible length  3) cache on disk.
   The student only ever sees the chosen videos, inside the app. */
const fs = require('fs');
const path = require('path');

function walk(o, out) {
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o)) { o.forEach((x) => walk(x, out)); return; }
  if (o.videoRenderer && o.videoRenderer.videoId) out.push(o.videoRenderer);
  for (const k of Object.keys(o)) if (k !== 'videoRenderer') walk(o[k], out);
}
function lenSec(t) {
  if (!t) return 0;
  const p = String(t).split(':').map((x) => parseInt(x, 10));
  if (p.some((x) => isNaN(x))) return 0;
  return p.reduce((a, x) => a * 60 + x, 0);
}
function txt(x) { return !x ? '' : x.simpleText || (x.runs ? x.runs.map((r) => r.text).join('') : ''); }

/* html of a youtube results page -> [{id,title,channel,sec}] (no ads, no shorts, no live) */
function parseResults(html) {
  html = String(html || '');
  const m = html.match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});\s*<\/script>/) || html.match(/ytInitialData"\]\s*=\s*(\{[\s\S]*?\});\s*<\/script>/);
  if (!m) return [];
  let data; try { data = JSON.parse(m[1]); } catch (e) { return []; }
  const vr = []; walk(data, vr);
  const seen = {}, out = [];
  vr.forEach((v) => {
    const id = v.videoId; if (!/^[A-Za-z0-9_-]{11}$/.test(id) || seen[id]) return; seen[id] = 1;
    const sec = lenSec(txt(v.lengthText)); const title = txt(v.title);
    const channel = txt(v.ownerText) || txt(v.longBylineText);
    const live = (v.badges || []).some((b) => /LIVE/i.test(JSON.stringify(b))) || !v.lengthText;
    if (live || !sec || sec > 10800 || /#shorts|\bshorts?\b/i.test(title)) return;
    out.push({ id, title, channel, sec });
  });
  return out;
}

/* Is this video really about the topic? Needs real keyword overlap and must not look like entertainment. */
const STOP = new Set('the and for with from into about explained explain explanation introduction intro basics basic types type what why how when use uses using concept concepts example examples hindi english lecture lesson tutorial class notes full complete part unit chapter in of to a an is are on by or vs'.split(' '));
const BAD = /\b(reaction|prank|trailer|vlog|gameplay|podcast|meme|funny|music video|full movie|official video|song|lyrics|asmr|live stream|livestream|shorts?)\b/i;
const tokens = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9+#]+/g, ' ').split(' ').filter((w) => w.length >= 2 && !STOP.has(w)).map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w));
const ALIAS = { os: ['operating', 'system'], dbms: ['database', 'management', 'system'], db: ['database'], ml: ['machine', 'learning'], ai: ['artificial', 'intelligence'], toc: ['automata', 'computation', 'theory'], dfa: ['automata', 'finite'], nfa: ['automata', 'finite'], cn: ['network', 'computer'], oop: ['object', 'oriented', 'programming'], oops: ['object', 'oriented', 'programming'], dsa: ['data', 'structure', 'algorithm'], ds: ['data', 'structure'], iot: ['internet', 'things'], nlp: ['natural', 'language', 'processing'], dl: ['deep', 'learning'], jdbc: ['java', 'database'], cpu: ['processor'], rdbms: ['relational', 'database'] };
function expand(list) { const s = new Set(list); list.forEach((w) => (ALIAS[w] || []).forEach((x) => s.add(x))); return s; }
/* focus = the lesson title, generic = the subject title (words every video of the subject shares, so they prove nothing) */
function relevant(title, keywords, focus, generic) {
  if (BAD.test(title)) return false;
  const have = expand(tokens(title));
  const keys = Array.from(new Set(tokens((keywords || []).join(' '))));
  const gen = expand(tokens(generic || '')); const must = Array.from(new Set(tokens(focus || ''))).filter((w) => !gen.has(w));
  if (must.length) { let m = 0; must.forEach((k) => { if (have.has(k)) m++; }); return m >= Math.min(2, Math.ceil(must.length / 3)); }
  if (keys.length) { let n = 0; keys.forEach((k) => { if (have.has(k)) n++; }); return n >= Math.min(2, keys.length); }
  return true;
}
const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
/* trusted channels first, then lessons of a useful length (4 to 70 minutes), original order kept inside a group */
function rank(cands, channels) {
  const tr = (channels || []).map(norm).filter(Boolean);
  const score = (c) => {
    let s = 0; const ch = norm(c.channel);
    if (tr.some((t) => ch.indexOf(t) >= 0 || t.indexOf(ch) >= 0 && ch.length > 3)) s += 4;
    if (c.sec >= 240 && c.sec <= 4200) s += 2; else if (c.sec > 4200 && c.sec <= 9000) s += 1;
    return s;
  };
  return cands.map((c, i) => ({ c, i, s: score(c) })).sort((a, b) => b.s - a.s || a.i - b.i).map((x) => x.c);
}

function cacheFile(dir) { return path.join(dir, 'videocache.json'); }
function loadCache(dir) { try { return JSON.parse(fs.readFileSync(cacheFile(dir), 'utf8')); } catch (e) { return {}; } }
function saveCache(dir, c) { try { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(cacheFile(dir), JSON.stringify(c)); } catch (e) { } }

/* fetchText(url) -> Promise<string>. queries: ordered search phrases built by the app, never typed by the student. */
async function find(opts) {
  const { dir, key, queries, channels, keywords, focus, generic, fetchText } = opts;
  const cache = loadCache(dir);
  if (cache[key] && cache[key].items && cache[key].items.length && Date.now() - cache[key].at < 30 * 864e5) return { ok: true, items: cache[key].items, cached: true };
  let all = [], lastErr = '';
  for (const q of queries) {
    try {
      const html = await fetchText('https://www.youtube.com/results?hl=en&search_query=' + encodeURIComponent(q) + '&sp=EgIQAQ%3D%3D');
      all = all.concat(parseResults(html));
    } catch (e) { lastErr = e.message || String(e); }
    if (new Set(rank(all, channels).filter((c) => c.sec >= 240).map((c) => norm(c.channel))).size >= 6) break;
  }
  const seen = {}; all = all.filter((c) => !seen[c.id] && (seen[c.id] = 1) && relevant(c.title, keywords, focus, generic));
  const items = rank(all, channels).slice(0, 16);
  if (!items.length) return { ok: false, error: lastErr ? 'Could not reach YouTube: ' + lastErr : 'No video that matches this topic was found. FutureSelf only plays videos about the topic you are studying.' };
  cache[key] = { at: Date.now(), items }; saveCache(dir, cache);
  return { ok: true, items };
}
module.exports = { parseResults, rank, find, lenSec, relevant };

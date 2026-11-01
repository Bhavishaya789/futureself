'use strict';
/* Turns a parsed lesson (blocks + formulas) into a visual HTML study page: hero rings, concept map,
   colour cards with a few key points each, key numbers, formula tiles, tables, and the full text
   tucked behind "Read the full explanation". Everything is escaped; only our own tags are produced. */
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const plain = (s) => String(s || '').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim();
const UNIT = '(?:x\\s?10\\^-?\\d+\\s?)?(?:K|km|cm|mm|nm|m|kg|g|mg|J|kJ|N|Pa|W|V|A|s|Hz|%|mol|L|mL|eV|u|C|F|percent)';
const NUM = new RegExp('(^|[\\s(])(-?\\d[\\d,]*(?:\\.\\d+)?\\s?' + UNIT + '(?:/[A-Za-z]+(?:\\^\\d)?)?)(?![A-Za-z])', 'g');
const ICONS = [[/formula|equation|law of|derive/i, '🧮'], [/defin|meaning|what is|concept|basic/i, '📘'], [/example|application|use/i, '💡'], [/law|principle|theorem|rule/i, '⚖️'], [/cycle|process|flow|step|method|procedure/i, '🔄'], [/histor|timeline|movement|revolution|war|empire/i, '🕰️'], [/reaction|chemical|acid|base|salt|bond/i, '⚗️'], [/electric|current|circuit|magnet|charge/i, '⚡'], [/heat|temperature|thermo/i, '🌡️'], [/light|optic|lens|mirror|ray/i, '🔦'], [/sound|wave|vibrat|oscill/i, '🌊'], [/cell|tissue|organ|plant|animal|human|gene|biolog/i, '🧬'], [/map|geograph|climate|soil|river|resource/i, '🗺️'], [/atom|nucle|particle|element/i, '⚛️'], [/force|motion|energy|work|power|gravit/i, '🚀'], [/triangle|circle|angle|geometry|shape|area|volume|coordinate/i, '📐'], [/grammar|writing|poem|prose|story|word|sentence/i, '✍️'], [/government|democra|constitution|right|politic|econom/i, '🏛️'], [/separat|mixture|solution|purity/i, '🧪'], [/exam|tip|trick|mistake|remember/i, '🎯']];
const FALL = ['🔑', '📌', '🧠', '🌟', '🔬', '📊'];
function icon(h, i) { for (const [re, e] of ICONS) if (re.test(h)) return e; return FALL[i % FALL.length]; }
function clauses(text) {
  const t = plain(text).replace(/\b(e\.g|i\.e|etc|vs|Fig|approx|No)\./g, '$1§');
  return t.split(/(?<=[.;!?])\s+/).map((x) => x.replace(/§/g, '.').replace(/[.;]+$/, '').trim()).filter((x) => x.length > 12);
}
function cut(s, n) { if (s.length <= n) return s; const c = s.slice(0, n); const k = Math.max(c.lastIndexOf(', '), c.lastIndexOf(' ')); return c.slice(0, k > n * 0.6 ? k : n).replace(/[,\s]+$/, '') + '…'; }
function rich(s) { // escape, then bold "Term:" lead-ins and numbers with units
  let h = esc(s);
  h = h.replace(/^([A-Z][^:]{1,40}):/, '<b>$1</b>:');
  h = h.replace(NUM, (m, a, b) => a + '<mark>' + b + '</mark>');
  h = h.replace(/\^(-?\d+)/g, '<sup>$1</sup>');
  return h;
}
function bullets(items, max) { return '<ul class="kp">' + items.slice(0, max).map((x) => '<li>' + rich(cap(cut(x, 150))) + '</li>').join('') + '</ul>'; }
function ring(val, max, label, col) {
  const r = 26, c = 2 * Math.PI * r, f = Math.max(0.08, Math.min(1, val / max));
  return '<div class="ring"><svg viewBox="0 0 70 70" role="img" aria-label="' + esc(label) + '"><circle cx="35" cy="35" r="' + r + '" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="7"/><circle cx="35" cy="35" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="7" stroke-linecap="round" stroke-dasharray="' + (c * f).toFixed(1) + ' ' + c.toFixed(1) + '" transform="rotate(-90 35 35)"/><text x="35" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">' + esc(val) + '</text></svg><span>' + esc(label) + '</span></div>';
}
function cmap(title, nodes) {
  const n = nodes.length; if (n < 2) return '';
  const W = 720, H = n > 5 ? 330 : n > 3 ? 270 : 210, cx = W / 2, cy = H / 2, rx = 260, ry = H / 2 - 40, cols = ['#7C5CFF', '#22D3EE', '#F59E0B', '#34D399', '#F472B6', '#60A5FA', '#FB7185', '#A3E635'];
  const ctitle = cut(title, 34), cw = Math.max(92, ctitle.length * 4.4 + 30);
  let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Concept map of ' + esc(title) + '">';
  nodes.forEach((t, i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(0) + '" y2="' + y.toFixed(0) + '" stroke="' + cols[i % 8] + '" stroke-opacity=".55" stroke-width="2.5"/>';
  });
  s += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + cw + '" ry="34" fill="#1b1f3b" stroke="#7C5CFF" stroke-width="2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">' + esc(ctitle) + '</text>';
  nodes.forEach((t, i) => {
    const a = -Math.PI / 2 + i * 2 * Math.PI / n, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a), lab = cut(t, 26), w = Math.max(90, lab.length * 7.2 + 24);
    s += '<rect x="' + (x - w / 2).toFixed(0) + '" y="' + (y - 17).toFixed(0) + '" width="' + w.toFixed(0) + '" height="34" rx="17" fill="' + cols[i % 8] + '" fill-opacity=".18" stroke="' + cols[i % 8] + '" stroke-width="2"/><text x="' + x.toFixed(0) + '" y="' + (y + 5).toFixed(0) + '" text-anchor="middle" font-size="12.5" font-weight="600" fill="#fff">' + esc(lab) + '</text>';
  });
  return s + '</svg>';
}
function table(b) {
  return '<div class="tbl"><table><thead><tr>' + b.head.map((h) => '<th>' + esc(plain(h)) + '</th>').join('') + '</tr></thead><tbody>' + b.rows.map((r) => '<tr>' + r.map((c) => '<td>' + esc(plain(c)) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>';
}
function full(blocks) { // the complete original text, escaped
  return blocks.map((b) => {
    if (b.t === 'p') return '<p>' + esc(plain(b.x)) + '</p>';
    if (b.t === 'ul' || b.t === 'ol') return '<' + b.t + '>' + b.x.map((i) => '<li>' + esc(plain(i)) + '</li>').join('') + '</' + b.t + '>';
    if (b.t === 'tip') return '<p><i>' + esc(plain(b.x)) + '</i></p>';
    return '';
  }).join('');
}
function studyHTML(t, subj) {
  const secs = []; let cur = { h: 'Big idea', b: [] };
  (t.blocks || []).forEach((b) => { if (b.t === 'h') { secs.push(cur); cur = { h: cap(b.x.replace(/^Deep dive:\s*/i, '')), b: [] }; } else cur.b.push(b); });
  secs.push(cur);
  const hindi = secs.find((s) => /hindi saransh/i.test(s.h)), tips = [];
  const body = secs.filter((s) => s !== hindi && s.b.length);
  secs.forEach((s) => s.b.forEach((b) => { if (b.t === 'tip') tips.push(plain(b.x).replace(/^Remember:\s*/i, '')); }));
  const F = t.formulas || [], groups = {};
  F.forEach((f) => { (groups[f.g || 'Key formulas'] = groups[f.g || 'Key formulas'] || []).push(f); });
  const keyNums = F.filter((f) => !/[=]/.test(f.f) && /\d/.test(f.f) && f.f.length < 28).slice(0, 8);
  const eqs = F.filter((f) => /[=]/.test(f.f) || !/^\d/.test(f.f));
  let h = '<div class="vl">';
  h += '<div class="vl-hero"><div><div class="eyebrow">Visual lesson</div><h2>' + esc(t.title) + '</h2><p>' + esc(cut((clauses(secs[0].b.filter((b) => b.t === 'p').map((b) => b.x).join(' '))[0]) || '', 170)) + '</p></div><div class="rings">' +
    ring(t.minutes || 20, 60, 'minutes', '#22D3EE') + ring(F.length, 40, 'formulas', '#F59E0B') + ring(Math.min((t.qa || []).length, 100), 100, 'Q&A', '#34D399') + ring(Math.min((t.quiz || []).length, 100), 100, 'quiz', '#F472B6') + '</div></div>';
  const nodeNames = body.filter((s) => s.h !== 'Big idea').map((s) => s.h);
  h += '<div class="l3d" data-title="' + esc(t.title) + '" data-nodes="' + esc(nodeNames.map((x) => cut(x, 40)).join('|')) + '" data-hint="' + esc((subj || '') + ' ' + t.title + ' ' + nodeNames.join(' ')) + '"></div>';
  const map = cmap(t.title, nodeNames);
  if (map) h += '<details class="vl-map"><summary>Flat concept map (2D)</summary>' + map + '</details>';
  if (body.length > 1) h += '<div class="vl-route">' + body.map((s, i) => '<span><b>' + (i + 1) + '</b>' + esc(cut(s.h, 28)) + '</span>').join('<i>›</i>') + '</div>';
  if (keyNums.length) h += '<div class="vl-nums">' + keyNums.map((f) => '<div><small>' + esc(cut(f.n, 34)) + '</small><b>' + esc(f.f.replace(/\^(-?\d+)/g, '^$1')) + '</b></div>').join('') + '</div>';
  let kk = 0;
  body.forEach((s, i) => {
    const ul = s.b.find((b) => b.t === 'ul' || b.t === 'ol'), ps = s.b.filter((b) => b.t === 'p').map((b) => b.x).join(' ');
    const pts = ul ? ul.x.map(plain) : clauses(ps);
    const tb = s.b.filter((b) => b.t === 'table').map(table).join('');
    const code = s.b.filter((b) => b.t === 'code').map((b) => '<pre><code>' + esc(b.x) + '</code></pre>').join('');
    if (!pts.length && !tb && !code) return;
    const rest = pts.length > 4 || ps.length > 360 || (ul && ul.x.length > 5);
    h += '<section class="vl-card c' + (i % 6) + '"' + (s.h !== 'Big idea' ? ' data-k="' + (kk++) + '"' : '') + '><header><span class="ico">' + icon(s.h, i) + '</span><h3>' + esc(s.h) + '</h3></header>' + (pts.length ? bullets(pts, 4) : '') + tb + code +
      (rest ? '<details><summary>Read the full explanation</summary><div class="more">' + full(s.b) + '</div></details>' : '') + '</section>';
  });
  if (eqs.length) {
    h += '<section class="vl-card c3"><header><span class="ico">🧮</span><h3>Formula tiles</h3></header><div class="tiles">' + eqs.slice(0, 12).map((f) => '<div class="tile"><small>' + esc(cut(f.n, 40)) + '</small><code>' + esc(f.f) + '</code>' + (f.x ? '<em>' + esc(cut(f.x, 60)) + '</em>' : '') + '</div>').join('') + '</div>' + (eqs.length > 12 ? '<p class="muted">All ' + F.length + ' are in the Formulas tab.</p>' : '') + '</section>';
  }
  tips.slice(0, 3).forEach((x) => { h += '<div class="vl-tip"><b>🎯 Remember</b> ' + esc(x) + '</div>'; });
  if (hindi) h += '<section class="vl-card c1 hi"><header><span class="ico">🇮🇳</span><h3>हिंदी सार</h3></header><p>' + esc(plain(hindi.b.filter((b) => b.t === 'p').map((b) => b.x).join(' '))) + '</p></section>';
  h += '</div>';
  return h;
}
module.exports = { studyHTML };

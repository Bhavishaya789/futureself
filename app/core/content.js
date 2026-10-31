// Loads the Content/ folder tree:
//   Content/<Semester-N | Electives>/<Subject>/subject.json
//   Content/.../<Subject>/<Unit-N-Title>/<NN-Topic>.md
// Each topic file:  # Title / minutes: N / yt: search words   then   @study  @qa  @quiz  sections.
const fs = require('fs');
const Tracks = require('./tracks');
const path = require('path');

const slug = (s) => String(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const prettify = (name) => name.replace(/^(unit|module)[-_ ]*\d+[-_ ]*/i, '').replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim();
const numOf = (name) => { const m = name.match(/(\d+)/); return m ? parseInt(m[1], 10) : 0; };

function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { return () => { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

function parseStudy(lines) {
  const blocks = [];
  let i = 0;
  const isSpecial = (l) => /^(#{2,3} |- |\d+[.)] |> |\||```)/.test(l);
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (l.startsWith('```')) {
      const lang = l.slice(3).trim(); const buf = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++; blocks.push({ t: 'code', lang, x: buf.join('\n') }); continue;
    }
    if (/^#{2,3} /.test(l)) { blocks.push({ t: 'h', x: l.replace(/^#{2,3} /, '').trim() }); i++; continue; }
    if (/^- /.test(l)) { const it = []; while (i < lines.length && /^- /.test(lines[i])) it.push(lines[i++].slice(2).trim()); blocks.push({ t: 'ul', x: it }); continue; }
    if (/^\d+[.)] /.test(l)) { const it = []; while (i < lines.length && /^\d+[.)] /.test(lines[i])) it.push(lines[i++].replace(/^\d+[.)] /, '').trim()); blocks.push({ t: 'ol', x: it }); continue; }
    if (/^> ?/.test(l)) { const it = []; while (i < lines.length && /^> ?/.test(lines[i])) it.push(lines[i++].replace(/^> ?/, '').trim()); blocks.push({ t: 'tip', x: it.join(' ') }); continue; }
    if (l.startsWith('|')) {
      const rows = []; while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const parsed = rows.filter((r) => !/^\|[\s:|-]+\|?$/.test(r)).map(cells);
      if (parsed.length) blocks.push({ t: 'table', head: parsed[0], rows: parsed.slice(1) });
      continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !isSpecial(lines[i])) buf.push(lines[i++].trim());
    if (buf.length) blocks.push({ t: 'p', x: buf.join(' ') });
  }
  return blocks;
}

function parseQA(lines) {
  const out = []; let cur = null, mode = null;
  lines.forEach((l) => {
    if (/^Q:\s?/.test(l)) { cur = { q: l.replace(/^Q:\s?/, '').trim(), a: '' }; out.push(cur); mode = 'q'; }
    else if (/^A:\s?/.test(l) && cur) { cur.a = l.replace(/^A:\s?/, '').trim(); mode = 'a'; }
    else if (l.trim() && cur) { cur[mode] += (cur[mode] ? ' ' : '') + l.trim(); }
  });
  return out.filter((x) => x.q && x.a);
}

function parseQuiz(lines, problems, file) {
  const out = []; let cur = null, last = null;
  const push = () => { if (cur) out.push(cur); };
  lines.forEach((l) => {
    if (/^\? /.test(l)) { push(); cur = { q: l.slice(2).trim(), opts: [], right: -1, why: '' }; last = 'q'; }
    else if (/^[-+] /.test(l) && cur) { cur.opts.push(l.slice(2).trim()); if (l[0] === '+') { if (cur.right >= 0) problems.push(file + ': two correct answers in "' + cur.q.slice(0, 40) + '"'); cur.right = cur.opts.length - 1; } last = 'o'; }
    else if (/^! /.test(l) && cur) { cur.why = l.slice(2).trim(); last = 'w'; }
    else if (l.trim() && cur) { if (last === 'w') cur.why += ' ' + l.trim(); else if (last === 'q') cur.q += ' ' + l.trim(); }
  });
  push();
  return out.map((q) => {
    if (q.right < 0) problems.push(file + ': no correct answer in "' + q.q.slice(0, 40) + '"');
    if (q.opts.length < 3 || q.opts.length > 5) problems.push(file + ': ' + q.opts.length + ' options in "' + q.q.slice(0, 40) + '"');
    if (!q.why) problems.push(file + ': missing explanation in "' + q.q.slice(0, 40) + '"');
    // deterministic shuffle so the right answer is not always in the same place
    const r = rng(hash(q.q)); const idx = q.opts.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); const t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
    return { q: q.q, o: idx.map((i) => q.opts[i]), a: idx.indexOf(q.right), why: q.why };
  });
}

const LEVELS = { moderate: ['Moderate', 1], high: ['High', 2], advanced: ['Advanced', 3] };
// @visual lines:  kind | title | data      (rendered as diagrams in the app)
function parseVisual(lines, problems, file) {
  const out = [];
  lines.forEach((l) => {
    if (!l.trim()) return;
    const p = l.split('|').map((x) => x.trim());
    if (p.length < 3) { problems.push(file + ': bad @visual line "' + l.slice(0, 50) + '"'); return; }
    out.push({ kind: p[0].toLowerCase(), title: p[1], data: p.slice(2).join('|').trim() });
  });
  return out;
}
// @problems:  ## Moderate|High|Advanced   P: statement   A: model answer (may continue)   R: marks | rubric point
function parseProblems(lines, problems, file) {
  const out = []; let level = 'moderate', cur = null, mode = null;
  lines.forEach((l) => {
    const h = l.match(/^##\s*(\w+)/);
    if (h) { level = h[1].toLowerCase(); if (!LEVELS[level]) problems.push(file + ': unknown level "' + h[1] + '"'); cur = null; return; }
    if (/^P:\s?/.test(l)) { cur = { level: (LEVELS[level] || LEVELS.moderate)[0], rank: (LEVELS[level] || LEVELS.moderate)[1], q: l.replace(/^P:\s?/, '').trim(), a: '', rubric: [] }; out.push(cur); mode = 'q'; }
    else if (/^A:\s?/.test(l) && cur) { cur.a = l.replace(/^A:\s?/, '').trim(); mode = 'a'; }
    else if (/^R:\s?/.test(l) && cur) { const m = l.replace(/^R:\s?/, '').match(/^(\d+)\s*\|\s*(.+)$/); if (m) cur.rubric.push({ m: parseInt(m[1], 10), t: m[2].trim() }); else problems.push(file + ': bad rubric line "' + l.slice(0, 40) + '"'); mode = 'r'; }
    else if (l.trim() && cur && (mode === 'q' || mode === 'a')) { cur[mode] += (mode === 'a' ? '\n' : ' ') + l.trim(); }
  });
  out.forEach((q) => { q.marks = q.rubric.reduce((a, r) => a + r.m, 0); if (!q.a) problems.push(file + ': problem without model answer "' + q.q.slice(0, 40) + '"'); if (q.rubric.length < 2) problems.push(file + ': problem needs at least 2 rubric points "' + q.q.slice(0, 40) + '"'); });
  return out;
}
// @video lines:  url | title | channel      (hand-picked videos for the topic)
function parseVideo(lines, problems, file) {
  const out = [];
  lines.forEach((l) => {
    if (!l.trim()) return; const p = l.split('|').map((x) => x.trim());
    if (!/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(p[0])) { problems.push(file + ': @video needs a YouTube https link: ' + l.slice(0, 50)); return; }
    out.push({ url: p[0], title: p[1] || 'Video', channel: p[2] || '' });
  });
  return out;
}

function parseTopic(text, file, problems) {
  const lines = text.replace(/\r/g, '').split('\n');
  const t = { title: '', minutes: 20, yt: [], blocks: [], qa: [], quiz: [], visuals: [], problems: [], videos: [] };
  let sec = 'head'; const bufs = { study: [], qa: [], quiz: [], visual: [], problems: [], video: [] };
  lines.forEach((l) => {
    const m = l.match(/^@(study|qa|quiz|visual|problems|video)\s*$/);
    if (m) { sec = m[1]; return; }
    if (sec === 'head') {
      if (/^# /.test(l)) t.title = l.slice(2).trim();
      else if (/^minutes:/i.test(l)) t.minutes = parseInt(l.split(':')[1], 10) || 20;
      else if (/^yt:/i.test(l)) t.yt.push(l.replace(/^yt:\s*/i, '').trim());
    } else bufs[sec].push(l);
  });
  if (!t.title) problems.push(file + ': missing "# Title"');
  t.blocks = parseStudy(bufs.study); t.qa = parseQA(bufs.qa); t.quiz = parseQuiz(bufs.quiz, problems, file);
  t.visuals = parseVisual(bufs.visual, problems, file); t.problems = parseProblems(bufs.problems, problems, file); t.videos = parseVideo(bufs.video, problems, file);
  if (!t.blocks.length) problems.push(file + ': empty @study');
  if (!t.yt.length) t.yt.push(t.title + ' explained');
  return t;
}

function textOf(blocks) {
  return blocks.map((b) => b.t === 'ul' || b.t === 'ol' ? b.x.join(' ') : b.t === 'table' ? b.head.join(' ') + ' ' + b.rows.map((r) => r.join(' ')).join(' ') : b.x).join(' ');
}

function listDirs(d) { return fs.readdirSync(d, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name); }

// returns { topics: {id: subject}, problems: [] }
function loadContent(root, opts) {
  opts = opts || {};
  const topics = {}, problems = [];
  if (!fs.existsSync(root)) return { topics, problems: ['Content folder not found: ' + root] };
  const groups = listDirs(root).sort((a, b) => numOf(a) - numOf(b) || a.localeCompare(b));
  groups.forEach((g) => {
    const gp = path.join(root, g);
    const semester = /^semester/i.test(g) ? numOf(g) : 0;
    const gi = Tracks.fromFolder(g);
    listDirs(gp).sort().forEach((sd) => {
      const sp = path.join(gp, sd);
      let meta = {};
      try { meta = JSON.parse(fs.readFileSync(path.join(sp, 'subject.json'), 'utf8')); } catch (e) { if (fs.existsSync(path.join(sp, 'subject.json'))) problems.push(sp + ': bad subject.json'); }
      const sub = {
        id: meta.id || slug(prettify(sd)), title: meta.title || prettify(sd), semester: meta.semester !== undefined ? meta.semester : semester, credits: meta.credits || 0,
        icon: meta.icon || 'book', color: meta.color || '#7C5CFF', tagline: meta.tagline || '', channels: meta.channels || [], syllabus: Array.isArray(meta.syllabus) ? meta.syllabus.map(String).slice(0, 80) : [], kind: meta.kind || 'theory', folder: g + '/' + sd, units: [],
        tracks: Array.isArray(meta.tracks) ? meta.tracks.map(String) : gi.tags, group: meta.group || gi.group, gorder: meta.gorder !== undefined ? +meta.gorder : gi.order
      };
      const units = listDirs(sp).sort((a, b) => numOf(a) - numOf(b) || a.localeCompare(b));
      units.forEach((ud) => {
        const up = path.join(sp, ud); const unit = { id: slug(prettify(ud)) || slug(ud), title: prettify(ud), lessons: [] };
        fs.readdirSync(up).filter((f) => /\.md$/i.test(f)).sort().forEach((f) => {
          const file = path.join(g, sd, ud, f);
          let les;
          try { les = parseTopic(fs.readFileSync(path.join(up, f), 'utf8'), file, problems); } catch (e) { problems.push(file + ': ' + e.message); return; }
          les.id = slug(f.replace(/\.md$/i, '').replace(/^\d+[-_ ]*/, ''));
          les.folder = g + '/' + sd + '/' + ud;
          unit.lessons.push(les);
        });
        if (unit.lessons.length) sub.units.push(unit);
      });
      // ids must be unique per subject
      const seen = {};
      sub.units.forEach((u) => u.lessons.forEach((l) => { if (seen[l.id]) { problems.push(sub.title + ': duplicate topic id ' + l.id); l.id += '-' + (seen[l.id]++); } else seen[l.id] = 1; }));
      sub.planned = !sub.units.length;
      if (topics[sub.id]) problems.push('duplicate subject id ' + sub.id); else topics[sub.id] = sub;
    });
  });
  return { topics, problems };
}

/* ---------- search ---------- */
function buildIndex(topics) {
  const items = [];
  Object.values(topics).forEach((s) => {
    const sem = s.semester ? 'semester ' + s.semester + ' sem ' + s.semester + ' sem' + s.semester : (s.group || 'elective add-on').toLowerCase();
    items.push({ type: 'subject', topic_id: s.id, title: s.title, sub: (s.semester ? 'Semester ' + s.semester : (s.group || 'Elective')) + (s.credits ? ' · ' + s.credits + ' credits' : ''), hay: (s.title + ' ' + sem + ' ' + s.tagline).toLowerCase(), tl: s.title.toLowerCase(), planned: s.planned });
    s.units.forEach((u) => u.lessons.forEach((l) => {
      const body = textOf(l.blocks);
      items.push({
        type: 'topic', topic_id: s.id, lesson_id: l.id, title: l.title, sub: s.title + ' · ' + u.title,
        tl: l.title.toLowerCase(), ul: u.title.toLowerCase(), sl: s.title.toLowerCase(),
        qa: l.qa.map((x) => x.q).join(' ').toLowerCase(), body, hay: (l.title + ' ' + u.title + ' ' + s.title + ' ' + body + ' ' + l.qa.map((x) => x.q + ' ' + x.a).join(' ')).toLowerCase()
      });
    }));
  });
  return items;
}

function search(index, q, limit) {
  const words = String(q || '').toLowerCase().replace(/[^a-z0-9+#.\s-]/g, ' ').split(/\s+/).filter(Boolean).slice(0, 8);
  if (!words.length) return [];
  const out = [];
  index.forEach((it) => {
    if (!words.every((w) => it.hay.indexOf(w) > -1)) return;
    let sc = 0;
    words.forEach((w) => {
      if (it.type === 'subject') sc += it.tl.indexOf(w) > -1 ? 60 : 20;
      else {
        if (it.tl.indexOf(w) > -1) sc += 40; if (it.ul.indexOf(w) > -1) sc += 15; if (it.sl.indexOf(w) > -1) sc += 12; if (it.qa.indexOf(w) > -1) sc += 8; sc += 2;
      }
    });
    if (it.type === 'subject') sc += 5;
    let snip = '';
    if (it.type === 'topic') {
      const k = it.body.toLowerCase().indexOf(words[0]);
      if (k >= 0) { const s = Math.max(0, k - 50); snip = (s > 0 ? '…' : '') + it.body.slice(s, k + 110).replace(/\s+/g, ' ') + '…'; }
    }
    out.push({ type: it.type, topic_id: it.topic_id, lesson_id: it.lesson_id, title: it.title, sub: it.sub, snippet: snip, planned: !!it.planned, score: sc });
  });
  out.sort((a, b) => b.score - a.score);
  return out.slice(0, limit || 40);
}

module.exports = { loadContent, buildIndex, search, parseTopic, slug };

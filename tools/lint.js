// Content lint: parse every topic, report problems, counts and thin topics. Optional: --code runs code blocks.
const path = require('path'), fs = require('fs'), cp = require('child_process'), os = require('os');
const { loadContent } = require('../app/core/content');
const root = process.argv.slice(2).find((a) => !a.startsWith('--')) || path.join(__dirname, '..', 'Content');
const r = loadContent(root);
let subs = Object.values(r.topics), topics = 0, qa = 0, quiz = 0, words = 0, thin = [];
const only = process.argv.find((a) => a.startsWith('--sem='));
subs.forEach((s) => {
  s.units.forEach((u) => u.lessons.forEach((l) => {
    topics++; qa += l.qa.length; quiz += l.quiz.length;
    const w = JSON.stringify(l.blocks).split(/\s+/).length; words += w;
    if (w < 230 || l.qa.length < 3 || l.quiz.length < 4) thin.push(s.title + ' / ' + l.title + ' (' + w + 'w, ' + l.qa.length + ' qa, ' + l.quiz.length + ' quiz)');
    // quiz sanity: options distinct, answer in range
    const KINDS = ['flow','cycle','layers','bars','gantt','tree','graph','mind','steps','compare','formula','timeline','venn','donut','sequence','blocks','curve','stack'];
    const tag = s.title + '/' + l.title;
    if (!l.visuals.length) r.problems.push(tag + ': no @visual');
    l.visuals.forEach((v) => { if (!KINDS.includes(v.kind)) r.problems.push(tag + ': unknown visual kind ' + v.kind); if (!v.data) r.problems.push(tag + ': empty visual data'); });
    if (l.problems.length !== 3 || ['Moderate', 'High', 'Advanced'].some((lv, i) => !l.problems[i] || l.problems[i].level !== lv)) r.problems.push(tag + ': needs exactly 3 problems Moderate, High, Advanced');
    l.problems.forEach((q) => { if (q.marks < 3 || q.marks > 8) r.problems.push(tag + ': marks out of range (' + q.marks + ') for "' + q.q.slice(0, 30) + '"'); });
    l.quiz.forEach((q) => { if (new Set(q.o).size !== q.o.length) r.problems.push(s.title + '/' + l.title + ': duplicate options in "' + q.q.slice(0, 40) + '"'); if (q.a < 0) r.problems.push(s.title + '/' + l.title + ': bad answer'); });
  }));
});
console.log('subjects', subs.length, '| with content', subs.filter((s) => !s.planned).length, '| topics', topics, '| Q&A', qa, '| quiz questions', quiz, '| ~words', words);
subs.filter((s) => !s.planned).forEach((s) => console.log('  S' + s.semester + ' ' + s.title + ': ' + s.units.reduce((a, u) => a + u.lessons.length, 0) + ' topics'));
console.log('problems:', r.problems.length); r.problems.slice(0, 40).forEach((p) => console.log('  -', p));
console.log('thin topics:', thin.length); thin.slice(0, 40).forEach((p) => console.log('  -', p));
if (process.argv.includes('--code')) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'code-')); let ok = 0, bad = 0, skipped = 0, n = 0;
  subs.forEach((s) => s.units.forEach((u) => u.lessons.forEach((l) => {
    const sqls = l.blocks.filter((b) => b.t === 'code' && (b.lang || '').toLowerCase() === 'sql').map((b) => b.x);
    if (!sqls.length) return;
    try { cp.execFileSync('python3', ['-I', '-c', 'import sqlite3,sys;c=sqlite3.connect(":memory:");c.executescript(sys.stdin.read())'], { input: sqls.join(';\n'), stdio: ['pipe', 'pipe', 'pipe'] }); ok++; }
    catch (e) { bad++; console.log('SQL FAIL:', s.title, '/', l.title, String(e.stderr || e.message).split('\n').filter(Boolean).slice(-1)[0]); }
  })));
  subs.forEach((s) => s.units.forEach((u) => u.lessons.forEach((l) => l.blocks.forEach((b) => {
    if (b.t !== 'code') return; n++;
    const lang = (b.lang || '').toLowerCase(); const id = String(n); let res;
    try {
      if (lang === 'c') { const f = path.join(tmp, id + '.c'); fs.writeFileSync(f, b.x); cp.execFileSync('gcc', ['-w', '-pthread', '-o', path.join(tmp, id), f, '-lm'], { stdio: 'pipe' }); res = cp.execFileSync(path.join(tmp, id), { timeout: 5000, input: '' }); }
      else if (lang === 'python') { const f = path.join(tmp, id + '.py'); fs.writeFileSync(f, b.x); res = cp.execFileSync('python3', ['-I', f], { timeout: 8000, input: '' }); }
      else if (lang === 'java') { const d = path.join(tmp, 'j' + id); fs.mkdirSync(d); const m = b.x.match(/public\s+class\s+(\w+)/) || b.x.match(/class\s+(\w+)/); const cn = m ? m[1] : 'Main'; fs.writeFileSync(path.join(d, cn + '.java'), b.x); cp.execFileSync('javac', [path.join(d, cn + '.java')], { stdio: 'pipe' }); if (/static\s+void\s+main/.test(b.x)) res = cp.execFileSync('java', ['-cp', d, cn], { timeout: 8000, input: '' }); }
      else if (lang === 'sql') { return; }
      else { skipped++; return; }
      ok++;
    } catch (e) { bad++; console.log('CODE FAIL:', s.title, '/', l.title, '[' + lang + ']', String(e.stderr || e.message).split('\n').slice(0, 3).join(' | ')); }
  }))));
  console.log('code blocks checked:', ok, 'ok,', bad, 'failed,', skipped, 'skipped (other languages / pseudo-code)');
}

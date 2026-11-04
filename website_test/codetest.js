/* Coding challenge + written-question AI marking tests. Run: node website_test/codetest.js */
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret'; process.env.PISTON_URL = 'http://piston.test'; process.env.GEMINI_API_KEY = 'x';
const crypto = require('crypto'), cp = require('child_process');
const { col } = require('./fakedb.js');
global.__FS_FAKE_DB = { users: col(), sessions: col(), tickets: col(), vcache: col(), rl: col(), social: col() };
const aiPrompts = []; let aiMode = 'ok';
global.__FS_FETCH = async (url, opt) => {
  const body = JSON.parse(opt.body);
  if (url.startsWith('http://piston.test')) {   // a real (local) python runner so the hidden tests are truly executed
    const f = body.files[0].content; if (body.language !== 'python') return { ok: true, json: async () => ({ compile: { code: 0 }, run: { stdout: '', stderr: '', code: 0 } }) };
    const r = cp.spawnSync('python3', ['-c', f], { input: body.stdin, encoding: 'utf8', timeout: 5000 });
    return { ok: true, json: async () => ({ run: { stdout: r.stdout, stderr: r.stderr, code: r.status == null ? 1 : r.status, signal: r.signal } }) };
  }
  if (aiMode === 'down') return { ok: false, json: async () => ({}) };
  const prompt = body.contents[0].parts[0].text; aiPrompts.push(prompt);
  const txt = /marking a student's typed answer/.test(prompt) ? JSON.stringify({ awarded: [2, 1, 0], feedback: 'Good start.' }) : /programming examiner/.test(prompt) ? JSON.stringify({ quality: 24, correctness: 90, complexity: 'O(n)', feedback: 'Clean and correct.', hint: 'Add comments.' }) : JSON.stringify({ summary: 'You mix up two ideas.', revise: ['Definition of X'] });
  return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: txt }] } }] }) };
};
const L = require('../website/api/_lib.js'), ch = require('../website/api/challenge.js'), run = require('../website/api/run.js');
function call(h, body, token) { return new Promise((res) => { const r = { method: 'POST', body, headers: token ? { authorization: 'Bearer ' + token } : {} }; h(r, { statusCode: 0, setHeader() { }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); }); }
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name, track) { const u = { _id: crypto.randomBytes(6).toString('hex'), email: name + '@x.com', name, track, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); global.__FS_FAKE_DB.social.rows.push({ key: 'u:' + u._id, name, friends: [] }); return { id: String(u._id), t: L.newToken(u) }; }
const S = () => global.__FS_FAKE_DB.social.rows;
const GOOD = "n,*a=map(int,open(0).read().split())\nprint(sum(1 for x in a[:n] if x%2==0))";
const BAD = "n,*a=map(int,open(0).read().split())\nprint(sum(1 for x in a[:n] if x>0))";
(async () => {
  const A = await mk('Asha', 'btech2'), B = await mk('Bala', 'btech3'), K = await mk('Kid', 'class10'); S().find((r) => r.key === 'u:' + A.id).friends.push(B.id, K.id);
  let r = await call(ch, { a: 'problems' }, A.t); T('problem bank is served without tests', r.j.problems.length === 24 && !JSON.stringify(r.j).includes('"tests"'), r.s);
  r = await call(ch, { a: 'create', kind: 'code', friendId: K.id, problemId: 'even-count' }, A.t); T('friend must be B.Tech too', r.s === 403, r);
  r = await call(ch, { a: 'create', kind: 'code', friendId: A.id, problemId: 'even-count' }, K.t); T('non B.Tech cannot create a coding challenge', r.s === 403, r);
  r = await call(ch, { a: 'create', kind: 'code', friendId: B.id, problemId: 'nope' }, A.t); T('unknown problem refused', r.s === 404, r);
  r = await call(ch, { a: 'create', kind: 'code', friendId: B.id, problemId: 'even-count' }, A.t); T('code challenge created (10 minutes)', r.s === 200 && r.j.kind === 'code' && r.j.limitSec === 600, r); const id = r.j.id;
  r = await call(ch, { a: 'start', id }, A.t); T('start returns the problem with samples, no tests', r.s === 200 && r.j.problem.samples.length === 1 && !JSON.stringify(r.j).includes('"tests"') && r.j.kind === 'code', r.j);
  r = await call(ch, { a: 'savecode', id, code: GOOD, lang: 'python' }, A.t); T('draft saved', r.s === 200, r);
  r = await call(ch, { a: 'submit', id, code: GOOD, lang: 'python' }, A.t); const m = r.j.challenge.mine;
  T('correct code passes every hidden test', m.passed === m.tests && m.tests >= 7 && m.runner, m);
  T('AI analysis attached', m.ai && /Clean/.test(m.ai.feedback) && m.ai.complexity === 'O(n)', m.ai);
  T('score = 70 for tests + AI quality 24', m.correct === 94, m);
  T('the AI prompt carried the verdicts but not the hidden test data', aiPrompts.some((p) => /HIDDEN TEST RESULTS/.test(p)) && !aiPrompts.some((p) => require('../website/api/_codebank.js')[0].tests.some((t) => t.in.length > 30 && p.includes(t.in))), 0);
  r = await call(ch, { a: 'submit', id, code: BAD, lang: 'python' }, A.t); T('cannot change the code after submitting', r.j.challenge.mine.correct === 94, r.j);
  r = await call(ch, { a: 'start', id }, A.t); T('cannot start the coding challenge twice', r.s === 409, r);
  await call(ch, { a: 'start', id }, B.t);
  r = await call(ch, { a: 'submit', id, code: BAD, lang: 'python' }, B.t); const c = r.j.challenge;
  T('wrong code fails some tests and scores less', c.mine.passed < c.mine.tests && c.mine.correct < 94, c.mine);
  T('winner is Asha', c.status === 'done' && c.result.winner === A.id, c.result);
  T('result shows my code for review and the friend\'s score only', c.review.code === BAD && c.theirs.score === 94, c.theirs);
  // a runner outage + AI up: AI-only scoring flagged
  const A2 = await mk('Dev', 'btech1'); S().find((x) => x.key === 'u:' + A.id).friends.push(A2.id);
  r = await call(ch, { a: 'create', kind: 'code', friendId: A2.id, problemId: 'palindrome' }, A.t); const id2 = r.j.id; await call(ch, { a: 'start', id: id2 }, A.t);
  process.env.PISTON_URL = ''; r = await call(ch, { a: 'submit', id: id2, code: 'print(1)', lang: 'python' }, A.t); T('no runner: AI reads the code (runner=false)', r.s === 200 && r.j.challenge.mine.runner === false && r.j.challenge.mine.correct > 0, r.j);
  // nothing available at submit: attempt stays open
  const A3 = await mk('Esha', 'btech1'); S().find((x) => x.key === 'u:' + A.id).friends.push(A3.id);
  r = await call(ch, { a: 'create', kind: 'code', friendId: A3.id, problemId: 'vowel-count' }, A.t); const id3 = r.j.id; await call(ch, { a: 'start', id: id3 }, A.t); aiMode = 'down';
  r = await call(ch, { a: 'submit', id: id3, code: 'print(1)', lang: 'python' }, A.t); T('marking unavailable: submit refused and the attempt stays open', r.s === 503, r);
  r = await call(ch, { a: 'get', id: id3 }, A.t); T('still open after the failed submit', r.j.challenge.mine.closed === false, r.j.challenge.mine); aiMode = 'ok';
  // timeout with saved draft
  await call(ch, { a: 'savecode', id: id3, code: 'print(2)', lang: 'python' }, A.t); const row = S().find((x) => x.key === 'c:' + id3); row.players[A.id].startedAt -= row.limitSec * 1000 + 60000;
  r = await call(ch, { a: 'get', id: id3 }, A.t); T('time ran out: the saved draft was marked', r.j.challenge.mine.closed === true, r.j.challenge.mine);
  // written question in a normal challenge
  process.env.PISTON_URL = 'http://piston.test';
  const qs = Array.from({ length: 5 }, (_, i) => ({ q: 'Q' + i, o: ['a', 'b', 'c'], a: i % 3, why: 'w' }));
  const written = { q: 'Explain X.', model: 'X is Y.', rubric: [{ m: 2, t: 'defines X' }, { m: 2, t: 'gives example' }, { m: 1, t: 'conclusion' }] };
  const Bn = await mk('Bn', 'btech1'); S().find((x) => x.key === 'u:' + A.id).friends.push(Bn.id);
  r = await call(ch, { a: 'create', friendId: Bn.id, topicId: 't', lessonId: 'l', title: 'T', subject: 'S', questions: qs, written }, A.t); const id4 = r.j.id; T('written question adds 4 minutes', r.j.limitSec === 240 + 250, r.j);
  r = await call(ch, { a: 'start', id: id4 }, A.t); T('start shows the written question without the model answer', r.j.written.q === 'Explain X.' && !JSON.stringify(r.j).includes('X is Y.'), r.j);
  r = await call(ch, { a: 'submit', id: id4, answers: qs.map((q) => q.a), written: 'X is a thing, for example Z.' }, A.t);
  T('AI marked the written answer: 3 of 5 marks = 12 of 20 points', r.j.challenge.mine.written.awarded === 3 && r.j.challenge.mine.written.max === 5, r.j.challenge.mine);
  await call(ch, { a: 'start', id: id4 }, Bn.t); r = await call(ch, { a: 'submit', id: id4, answers: qs.map((q) => (q.a + 1) % 3), written: '' }, Bn.t);
  T('empty written answer gets 0 without calling the AI', r.j.challenge.mine.written.awarded === 0 && r.j.challenge.mine.written.marked, r.j.challenge.mine);
  const cc = r.j.challenge; T('points include the written part for the winner', cc.result.points[A.id].written === 12 && cc.result.points[A.id].base === 5 * 10 + 12, cc.result.points[A.id]);
  T('AI study notes are attached for the student who got answers wrong', cc.analysis && /mix up/.test(cc.analysis.summary), cc.analysis);
  // run API
  r = await call(run, { a: 'langs' }, A.t); T('runner language list', r.j.languages.length > 15 && r.j.languages.some((l) => l.id === 'cpp'), r);
  r = await call(run, { a: 'run', language: 'python', code: 'print(1)', stdin: '' }, A.t); T('run works through the runner', r.s === 200 && r.j.code === 0, r);
  r = await call(run, { a: 'run', language: 'cobol9', code: 'x' }, A.t); T('unknown language refused', r.s === 400, r);
  process.env.PISTON_URL = ''; r = await call(run, { a: 'run', language: 'python', code: 'print(1)' }, A.t); T('no runner configured gives a clear message', r.s === 503 && r.j.noRunner, r);
  console.log(bad ? bad + ' FAILED' : 'ALL PASSED'); process.exit(bad ? 1 : 0);
})();

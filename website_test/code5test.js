/* Coding challenge + written-question AI marking tests. Run: node website_test/code5test.js */
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
const L = require('../website/api/_lib.js'), ch = require('../website/api/challenge.js'), run = require('../website/api/_run.js');
function call(h, body, token) { return new Promise((res) => { const r = { method: 'POST', body, headers: token ? { authorization: 'Bearer ' + token } : {} }; h(r, { statusCode: 0, setHeader() { }, end(t) { res({ s: this.statusCode, j: t ? JSON.parse(t) : null }); } }); }); }
let bad = 0; const T = (n, ok, x) => { console.log((ok ? 'PASS ' : 'FAIL ') + n + (ok ? '' : ' ' + JSON.stringify(x))); if (!ok) bad++; };
async function mk(name, track) { const u = { _id: crypto.randomBytes(6).toString('hex'), email: name + '@x.com', name, track, verified: true, tv: 0 }; global.__FS_FAKE_DB.users.rows.push(u); global.__FS_FAKE_DB.social.rows.push({ key: 'u:' + u._id, name, friends: [] }); return { id: String(u._id), t: L.newToken(u) }; }
const S = () => global.__FS_FAKE_DB.social.rows;

(async () => {
  const A = await mk('Asha', 'btech2'), B = await mk('Bala', 'btech3'), K = await mk('Kid', 'class10'); S().find((r) => r.key === 'u:' + A.id).friends.push(B.id, K.id); S().find((r) => r.key === 'u:' + B.id).friends.push(A.id);
  let r = await call(ch, { a: 'create', kind: 'code5', friendId: K.id, subjectId: 'py', topicId: 'comp' }, A.t); T('friend must be B.Tech', r.s === 403, r);
  r = await call(ch, { a: 'create', kind: 'code5', friendId: B.id, subjectId: 'py', topicId: 'nope' }, A.t); T('unknown topic refused', r.s === 404, r);
  r = await call(ch, { a: 'create', kind: 'code5', friendId: B.id, subjectId: 'py', topicId: 'comp' }, A.t); T('create 5-question challenge', r.s === 200 && r.j.n === 5 && r.j.limitSec === 0 && r.j.kind === 'code5', r); const id = r.j.id;
  r = await call(ch, { a: 'create', kind: 'code5', friendId: B.id, subjectId: 'py', topicId: 'comp' }, A.t); T('duplicate refused', r.s === 409, r);
  r = await call(ch, { a: 'list' }, B.t); T('invite listed with n=5', r.j.challenges[0].n === 5 && r.j.challenges[0].kind === 'code5', r.j);
  r = await call(ch, { a: 'start', id }, A.t); T('start: 5 problems, no tests, no deadline', r.s === 200 && r.j.problems.length === 5 && !JSON.stringify(r.j).includes('"tests"') && r.j.deadline === 0, r);
  const ids = r.j.problems.map((p) => p.id);
  r = await call(ch, { a: 'savecode', id, i: 0, code: 'print(1)', lang: 'python' }, A.t); T('save draft of q1', r.s === 200, r);
  r = await call(ch, { a: 'savecode', id, i: 9, code: 'x', lang: 'python' }, A.t); T('bad index refused', r.s === 400, r);
  r = await call(ch, { a: 'resume', id }, A.t); T('resume is not allowed (strict) and closes attempt', r.s === 409 && r.j.used, r);
  r = await call(ch, { a: 'get', id }, A.t); T('attempt closed with AI/test marks for the saved code', r.j.challenge.mine.closed && r.j.challenge.mine.qs.length === 5 && r.j.challenge.mine.qs[0].tests > 0, r.j.challenge.mine);
  // Bala: leave once
  r = await call(ch, { a: 'start', id }, B.t); const ids2 = r.j.problems.map((p) => p.id); T('same 5 questions for both', JSON.stringify(ids) === JSON.stringify(ids2), [ids, ids2]);
  r = await call(ch, { a: 'leave', id, codes: [{ code: 'print(2)', lang: 'python' }] }, B.t); T('ONE leave closes at once', r.s === 200 && r.j.closed === true, r);
  r = await call(ch, { a: 'get', id }, B.t); const c = r.j.challenge; T('challenge is settled with a result and points', c.status === 'done' && c.result && c.result.points[B.id] && c.review.problems.length === 5, c);
  console.log(JSON.stringify(c.result)); T('start again refused', (await call(ch, { a: 'start', id }, B.t)).s === 409, 0);
  // submit path with 5 codes, no time limit
  r = await call(ch, { a: 'create', kind: 'code5', friendId: A.id, subjectId: 'dsa', topicId: 'arrays' }, B.t); const id2 = r.j.id;
  r = await call(ch, { a: 'start', id: id2 }, B.t);
  r = await call(ch, { a: 'submit', id: id2, codes: [1, 2, 3, 4, 5].map((i) => ({ code: 'print(' + i + ')', lang: 'python' })) }, B.t); T('submit marks 5', r.s === 200 && r.j.challenge.mine.closed && r.j.challenge.mine.qs.length === 5, r);
  process.env.PISTON_URL = ''; r = await call(ch, { a: 'create', kind: 'code5', friendId: A.id, subjectId: 'sql', topicId: 'sqsel' }, B.t); T('sql topic create', r.s === 200, r);
  console.log(bad ? bad + ' FAILED' : 'ALL PASSED'); process.exit(bad ? 1 : 0);
})();

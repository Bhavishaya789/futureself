'use strict';
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
const store = {};
global.__FS_FAKE_DB = { users: {}, rl: { async findOneAndUpdate() { return { n: 1 }; } }, content: { async findOne(q) { return store[q._id] || null; } } };
const assert = require('assert'), path = require('path');
const { loadContent } = require('../app/core/content.js');
const { buildDocs, coverage } = require('../app/core/contentstore.js');
const h = require('../website/api/content.js');
const call = (query) => new Promise((resolve) => {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(b) { resolve({ status: this.statusCode, body: JSON.parse(b || '{}') }); } };
  h({ method: 'GET', query: query || {}, headers: {}, socket: { remoteAddress: '1.2.3.4' } }, res);
});
(async () => {
  let r = await call(); assert.strictEqual(r.status, 404, 'nothing uploaded yet');
  const c = loadContent(path.join(__dirname, '..', 'Content')); assert.strictEqual(c.problems.length, 0, c.problems.join('\n'));
  const { docs, index, version } = buildDocs(c.topics); docs.forEach((d) => { store[d._id] = d; });
  assert(index.length > 50 && version.length === 16);
  r = await call(); assert(r.status === 200 && r.body.subjects.length === index.length && r.body.version === version);
  const s = r.body.subjects[0]; r = await call({ subject: s.id }); assert(r.status === 200 && r.body.subject.id === s.id && r.body.v === s.v);
  r = await call({ subject: 'no-such' }); assert.strictEqual(r.status, 404);
  const biggest = Math.max.apply(null, docs.map((d) => d.bytes || 0)); assert(biggest < 12e6, 'a subject document must stay far below the 16 MB MongoDB limit: ' + biggest);
  const rows = coverage(c.topics); console.log('content api ok. subjects', index.length, 'lessons', rows.length, 'at full target', rows.filter((x) => x.done).length, 'largest doc KB', Math.round(biggest / 1024));
})().catch((e) => { console.error(e); process.exit(1); });

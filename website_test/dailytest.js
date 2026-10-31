'use strict';
process.env.JWT_SECRET = 'test-secret-test-secret-test-secret';
global.__FS_FAKE_DB = { users: {}, rl: { async findOneAndUpdate() { return { n: 1 }; } } };
const assert = require('assert');
const h = require('../website/api/daily.js');
const data = require('../website/data/daily.json');
function call() {
  return new Promise((resolve) => {
    const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(b) { resolve({ status: this.statusCode, body: JSON.parse(b || '{}') }); } };
    h({ method: 'GET', headers: {}, socket: { remoteAddress: '1.2.3.4' } }, res);
  });
}
(async () => {
  assert(data.facts.length >= 60, 'at least 60 facts');
  data.facts.forEach((f, i) => assert(f.c && f.en && /[ऀ-ॿ]/.test(f.hi), 'fact ' + i + ' needs category, English and Hindi'));
  assert.strictEqual(new Set(data.facts.map((f) => f.en)).size, data.facts.length, 'no duplicates');
  const r = await call();
  assert.strictEqual(r.status, 200); assert(r.body.ok && r.body.fact.en && r.body.fact.hi);
  assert(r.body.index >= 0 && r.body.index < r.body.total);
  console.log('daily api ok, facts:', data.facts.length);
})().catch((e) => { console.error(e); process.exit(1); });

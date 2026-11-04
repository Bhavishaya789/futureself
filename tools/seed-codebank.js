#!/usr/bin/env node
'use strict';
/* Puts the coding question bank (app/renderer/data/ct) into MongoDB Atlas, collection "codebank":
   one document per subject (all topics, questions, hidden tests) plus an "index" document.
     PowerShell:  $env:MONGODB_URI="mongodb+srv://..." ; node tools/seed-codebank.js
   Options: --dry  do not connect; only print the counts
   Safe to run again: unchanged subjects are skipped, changed ones replaced, removed ones deleted. */
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const dir = path.join(__dirname, '..', 'app', 'renderer', 'data', 'ct');
(async () => {
  const dry = process.argv.includes('--dry');
  const sb = { window: {} }; sb.window.FS_CT = {}; sb.FS_CT = sb.window.FS_CT; vm.createContext(sb);
  fs.readdirSync(dir).filter((f) => f.endsWith('.js') && f !== 'index.js').forEach((f) => vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), sb));
  vm.runInContext(fs.readFileSync(path.join(dir, 'index.js'), 'utf8'), sb);
  const subs = sb.window.FS_CT, index = sb.window.FS_CTX;
  const docs = Object.keys(subs).map((id) => { const s = subs[id]; return Object.assign({ _id: id, kind: 'subject', v: crypto.createHash('sha1').update(JSON.stringify(s)).digest('hex').slice(0, 16) }, s); });
  const q = docs.reduce((a, d) => a + d.topics.reduce((b, t) => b + t.items.length, 0), 0);
  console.log('Coding bank: ' + docs.length + ' subjects, ' + q + ' questions.');
  if (dry) return;
  if (!process.env.MONGODB_URI) { console.error('Set MONGODB_URI first (the same value you use on Vercel).'); process.exit(1); }
  const { MongoClient } = require('mongodb');
  const c = await new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 }).connect();
  try {
    const col = c.db(process.env.MONGODB_DB || 'futureself').collection('codebank');
    const have = {}; (await col.find({ kind: 'subject' }, { projection: { v: 1 } }).toArray()).forEach((d) => { have[d._id] = d.v; });
    const ops = []; let same = 0;
    docs.forEach((d) => { if (have[d._id] === d.v) same++; else ops.push({ replaceOne: { filter: { _id: d._id }, replacement: d, upsert: true } }); delete have[d._id]; });
    Object.keys(have).forEach((id) => ops.push({ deleteOne: { filter: { _id: id } } }));
    ops.push({ replaceOne: { filter: { _id: 'index' }, replacement: { _id: 'index', kind: 'index', subjects: index }, upsert: true } });
    const res = await col.bulkWrite(ops, { ordered: false });
    console.log('Done. Skipped unchanged: ' + same + ', written: ' + (res.upsertedCount + res.modifiedCount) + ', removed: ' + res.deletedCount);
  } finally { await c.close(); }
})().catch((e) => { console.error(e.message); process.exit(1); });

#!/usr/bin/env node
'use strict';
/* Puts all lessons into MongoDB Atlas (collection "content"), so they are stored in the database as well as inside the apps.
     PowerShell:  $env:MONGODB_URI="mongodb+srv://..." ; node tools/seed-content.js
   Options:  --dry   do not connect; only write FutureSelf-content-export.json and print the counts
   Safe to run again: unchanged subjects are skipped, changed ones are replaced, removed ones are deleted. */
const path = require('path'), fs = require('fs');
const { loadContent } = require('../app/core/content.js');
const { buildDocs, coverage } = require('../app/core/contentstore.js');
(async () => {
  const dry = process.argv.includes('--dry'), root = path.join(__dirname, '..', 'Content');
  const r = loadContent(root);
  if (r.problems.length) { console.error('Content problems:\n' + r.problems.join('\n')); process.exit(1); }
  const { docs, index, version } = buildDocs(r.topics);
  const tot = index.reduce((a, s) => ({ lessons: a.lessons + s.lessons, qa: a.qa + s.qa, quiz: a.quiz + s.quiz, formulas: a.formulas + s.formulas }), { lessons: 0, qa: 0, quiz: 0, formulas: 0 });
  const rows = coverage(r.topics), ok = rows.filter((x) => x.done).length;
  console.log('Subjects ' + index.length + ', lessons ' + tot.lessons + ', Q&A ' + tot.qa + ', quiz ' + tot.quiz + ', formula rows ' + tot.formulas + '. Lessons at the full 100/100 + formula sheet: ' + ok + ' of ' + rows.length + '. Version ' + version);
  if (dry) { fs.writeFileSync('FutureSelf-content-export.json', JSON.stringify(docs)); console.log('Wrote FutureSelf-content-export.json'); return; }
  if (!process.env.MONGODB_URI) { console.error('Set MONGODB_URI first (the same value you use on Vercel).'); process.exit(1); }
  const { MongoClient } = require('mongodb');
  const c = await new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 }).connect();
  try {
    const col = c.db(process.env.MONGODB_DB || 'futureself').collection('content');
    const have = {}; (await col.find({ kind: 'subject' }, { projection: { v: 1 } }).toArray()).forEach((d) => { have[d._id] = d.v; });
    const ops = []; let same = 0;
    docs.filter((d) => d.kind === 'subject').forEach((d) => { if (have[d._id] === d.v) same++; else ops.push({ replaceOne: { filter: { _id: d._id }, replacement: d, upsert: true } }); delete have[d._id]; });
    Object.keys(have).forEach((id) => ops.push({ deleteOne: { filter: { _id: id } } }));
    ops.push({ replaceOne: { filter: { _id: 'index' }, replacement: docs.find((d) => d.kind === 'index'), upsert: true } });
    const res = await col.bulkWrite(ops, { ordered: false });
    console.log('Done. Skipped unchanged: ' + same + ', written: ' + (res.upsertedCount + res.modifiedCount) + ', removed: ' + res.deletedCount);
  } finally { await c.close(); }
})().catch((e) => { console.error(e.message); process.exit(1); });

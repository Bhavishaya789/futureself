'use strict';
/* Turns the loaded Content folder into the documents stored in MongoDB (one per subject, plus one small index).
   Used by tools/seed-content.js and tested without a database. */
const crypto = require('crypto');

function counts(sub) {
  const c = { lessons: 0, qa: 0, quiz: 0, formulas: 0, problems: 0 };
  (sub.units || []).forEach((u) => u.lessons.forEach((l) => { c.lessons++; c.qa += l.qa.length; c.quiz += l.quiz.length; c.formulas += (l.formulas || []).length; c.problems += (l.problems || []).length; }));
  return c;
}

function buildDocs(topics) {
  const docs = [], index = [];
  Object.keys(topics).sort().forEach((id) => {
    const sub = topics[id], body = JSON.stringify(sub), v = crypto.createHash('sha256').update(body).digest('hex').slice(0, 16);
    docs.push({ _id: 'subject:' + id, kind: 'subject', v, bytes: Buffer.byteLength(body), subject: sub });
    index.push(Object.assign({ id, title: sub.title, group: sub.group || '', semester: sub.semester || 0, tracks: sub.tracks || [], v }, counts(sub)));
  });
  const version = crypto.createHash('sha256').update(index.map((x) => x.id + x.v).join('|')).digest('hex').slice(0, 16);
  docs.push({ _id: 'index', kind: 'index', version, at: Date.now(), subjects: index });
  return { docs, index, version };
}

/* what each lesson still needs to reach the target (100 questions and answers, 100 quiz questions, a formula sheet) */
function coverage(topics, target) {
  target = target || { qa: 100, quiz: 100, formulas: 1 }; const rows = [];
  Object.keys(topics).forEach((id) => topics[id].units.forEach((u) => u.lessons.forEach((l) => {
    rows.push({ subject: topics[id].title, group: topics[id].group || '', lesson: l.id, qa: l.qa.length, quiz: l.quiz.length, formulas: (l.formulas || []).length,
      done: l.qa.length >= target.qa && l.quiz.length >= target.quiz && (l.formulas || []).length >= target.formulas });
  })));
  return rows;
}
module.exports = { buildDocs, counts, coverage };

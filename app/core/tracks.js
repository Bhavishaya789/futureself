'use strict';
/* What a student is studying. One id per student; it decides which subjects the Learn page shows first. */
const TRACKS = [
  { id: 'class9', label: 'Class 9', group: 'School (CBSE)' },
  { id: 'class10', label: 'Class 10', group: 'School (CBSE)' },
  { id: 'class11', label: 'Class 11', group: 'School (CBSE)' },
  { id: 'class12', label: 'Class 12', group: 'School (CBSE)' },
  { id: 'jee', label: 'JEE Main', group: 'Entrance exams' },
  { id: 'neet', label: 'NEET', group: 'Entrance exams' },
  { id: 'govt', label: 'Government exams and GK', group: 'Competitive exams' },
  { id: 'btech1', label: 'B.Tech, Year 1', group: 'B.Tech' },
  { id: 'btech2', label: 'B.Tech, Year 2', group: 'B.Tech' },
  { id: 'btech3', label: 'B.Tech, Year 3', group: 'B.Tech' },
  { id: 'btech4', label: 'B.Tech, Year 4', group: 'B.Tech' }
];
const IDS = TRACKS.map((t) => t.id);
/* the content tags a student of this track should see in "My subjects" */
const mine = (id) => /^btech\d$/.test(id) ? [id, 'btech-extra'] : IDS.indexOf(id) > -1 ? [id] : [];
/* a content folder name -> its tag, label and sort order */
function fromFolder(g) {
  let m;
  if ((m = /^semester-?(\d+)/i.exec(g))) { const n = +m[1]; return { tags: n ? ['btech' + Math.ceil(n / 2)] : [], group: 'Semester ' + n, order: n }; }
  if (/^electives?$/i.test(g)) return { tags: ['btech-extra'], group: 'B.Tech extras and electives', order: 90 };
  if ((m = /^class-?(\d+)/i.exec(g))) return { tags: ['class' + m[1]], group: 'Class ' + m[1], order: 100 + (+m[1]) };
  if (/^jee/i.test(g)) return { tags: ['jee'], group: 'JEE Main', order: 120 };
  if (/^neet/i.test(g)) return { tags: ['neet'], group: 'NEET', order: 130 };
  if (/^general-?knowledge/i.test(g)) return { tags: ['govt'], group: 'General Knowledge', order: 140 };
  if (/^government-?exams?/i.test(g)) return { tags: ['govt'], group: 'Government Exams', order: 150 };
  return { tags: [], group: g.replace(/[-_]+/g, ' '), order: 200 };
}
module.exports = { TRACKS, IDS, mine, fromFolder };

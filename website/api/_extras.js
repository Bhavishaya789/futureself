'use strict';
/* Extra endpoints, served through /api/misc?fn=<name> so the project stays under Vercel's 12-function limit:
   share  (signed in)  parent/teacher link: create, revoke, status, sync the progress snapshot
   pview  (public)     what a parent or teacher sees when they open the link
   plan   (signed in)  plan status, redeem a licence code; admin: mint/list/revoke codes (ADMIN_KEY)
   report (anyone)     crash and usage reports, anonymous, opt-out in the app; admin: summary (ADMIN_KEY)
   Also exports the AI helpers and the per-plan daily AI quota used by api/check.js. */
const crypto = require('crypto');
const L = require('./_lib');
const { fail } = L;

/* ---------- plans and the daily AI quota ---------- */
const FREE_PER_DAY = 40, PLAN_PER_DAY = { free: FREE_PER_DAY, pro: 150, school: 120 };
function planOf(u) { const p = u && u.plan; return p && p.name && p.until > Date.now() && PLAN_PER_DAY[p.name] ? p.name : 'free'; }
const perDay = (u) => PLAN_PER_DAY[planOf(u)];
/* takes one use from today's allowance; throws 429 when it is used up */
async function takeAi(d, user, what) {
  const now = Date.now(), lim = perDay(user), rt = user.cq && user.cq.resetAt > now ? user.cq : { n: 0, resetAt: now + 86400000 };
  if (rt.n >= lim) fail(429, 'You reached today\'s AI ' + (what || 'limit') + ' (' + lim + '). It resets tomorrow.' + (planOf(user) === 'free' ? ' A plan or school licence gives a bigger allowance.' : ''));
  await d.users.updateOne({ _id: user._id }, { $set: { cq: { n: rt.n + 1, resetAt: rt.resetAt } } });
}
async function aiText(prompt, maxTokens, temp) {
  const gKey = process.env.GEMINI_API_KEY, aKey = process.env.ANTHROPIC_API_KEY;
  if (!gKey && !aKey) fail(503, 'AI is not switched on on the server yet (GEMINI_API_KEY is missing in Vercel).');
  const ff = global.__FS_FETCH || fetch; let rs;
  try {
    if (gKey) rs = await ff('https://generativelanguage.googleapis.com/v1beta/models/' + (process.env.FS_GEMINI_MODEL || 'gemini-2.5-flash') + ':generateContent', { method: 'POST', headers: { 'content-type': 'application/json', 'x-goog-api-key': gKey }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: temp == null ? 0.4 : temp, maxOutputTokens: maxTokens || 1500 } }) });
    else rs = await ff('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'x-api-key': aKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' }, body: JSON.stringify({ model: process.env.FS_AI_MODEL || 'claude-haiku-4-5-20251001', max_tokens: maxTokens || 1500, messages: [{ role: 'user', content: prompt }] }) });
  } catch (e) { fail(502, 'Could not reach the AI service. Try again in a moment.'); }
  const j = await rs.json().catch(() => ({})); if (!rs.ok) fail(502, 'The AI service is busy. Try again.');
  const t = gKey ? ((((j.candidates || [])[0] || {}).content || {}).parts || []).map((c) => c.text || '').join('') : (j.content || []).map((c) => c.text || '').join('');
  if (!String(t).trim()) fail(502, 'The AI gave no answer. Try again.');
  return String(t).trim();
}
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = crypto.randomInt(0, i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
/* the AI reply must be a JSON array of 4-option questions; anything that is not is dropped, and the options are shuffled here, not trusted to the model */
function parseQuestions(text, n) {
  let s = String(text).replace(/^```(?:json)?/i, '').replace(/```\s*$/, '').trim();
  const a = s.indexOf('['), z = s.lastIndexOf(']'); if (a < 0 || z <= a) return [];
  let arr; try { arr = JSON.parse(s.slice(a, z + 1)); } catch (e) { return []; }
  if (!Array.isArray(arr)) return [];
  const out = [], seen = new Set();
  for (const x of arr) {
    if (!x || typeof x.q !== 'string' || !Array.isArray(x.o) || x.o.length !== 4 || !Number.isInteger(x.a) || x.a < 0 || x.a > 3) continue;
    const q = x.q.trim(), o = x.o.map((v) => String(v).trim());
    if (q.length < 8 || q.length > 400 || o.some((v) => !v || v.length > 200) || new Set(o.map((v) => v.toLowerCase())).size !== 4 || seen.has(q.toLowerCase())) continue;
    seen.add(q.toLowerCase());
    const order = shuffle([0, 1, 2, 3]);
    out.push({ q, o: order.map((i) => o[i]), a: order.indexOf(x.a), why: String(x.why || '').trim().slice(0, 300) });
    if (out.length >= n) break;
  }
  return out;
}

/* ---------- helpers ---------- */
const num = (x, lo, hi) => { x = Number(x); return Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : 0; };
const str = (x, n) => String(x == null ? '' : x).replace(/[\u0000-\u001f<>]/g, ' ').slice(0, n);
const dateOk = (x) => /^\d{4}-\d{2}-\d{2}$/.test(String(x)) ? String(x) : '';
function adminOk(req, b) {
  const k = process.env.ADMIN_KEY || ''; if (k.length < 16) fail(503, 'ADMIN_KEY is not set on the server (use a long random value of at least 16 characters).');
  const given = String((req.headers && req.headers['x-admin-key']) || (b && b.key) || '');
  if (!L.same(given, k)) fail(403, 'Wrong admin key.');
}
const uidOf = (req) => { const m = String((req.headers && req.headers.authorization) || '').match(/^Bearer (\S+)$/); const p = m && L.verifyToken(m[1]); return p ? String(p.uid) : ''; };
const queryOf = (req, k) => { try { return String((req.query && req.query[k]) || new URL(req.url, 'http://x').searchParams.get(k) || ''); } catch (e) { return ''; } };

/* ---------- parent / teacher link ---------- */
function cleanSnap(s, user) {
  s = s && typeof s === 'object' ? s : {};
  const arr = (v, n) => (Array.isArray(v) ? v.slice(0, n) : []);
  return {
    name: str(user.name || 'Student', 40),
    streak: num(s.streak, 0, 3650), xp: num(s.xp, 0, 1e7), level: num(s.level, 1, 999), due: num(s.due, 0, 1e5), goal: num(s.goal, 0, 1440),
    today: { q: num(s.today && s.today.q, 0, 1e5), c: num(s.today && s.today.c, 0, 1e5), min: num(s.today && s.today.min, 0, 1440) },
    week: arr(s.week, 7).map((x) => ({ date: dateOk(x && x.date), q: num(x && x.q, 0, 1e5), c: num(x && x.c, 0, 1e5), min: num(x && x.min, 0, 1440) })),
    weak: arr(s.weak, 5).map((x) => ({ tt: str(x && x.tt, 80), q: num(x && x.q, 0, 1e6), acc: Math.round(num(x && x.acc, 0, 1) * 100) / 100 })),
    mocks: arr(s.mocks, 5).map((x) => ({ date: dateOk(x && x.date), score: num(x && x.score, -1e4, 1e4), max: num(x && x.max, 0, 1e4) })),
    exam: { name: str(s.exam && s.exam.name, 60), date: dateOk(s.exam && s.exam.date) },
  };
}
const share = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const { d, user } = await L.authed(req), uid = String(user._id), op = String(b.op || 'status');
  const cur = await d.shares.findOne({ uid });
  const info = (r) => ({ ok: true, active: !!r, token: r ? r.token : '', createdAt: r ? r.createdAt : 0, updatedAt: r ? r.updatedAt || 0 : 0 });
  if (op === 'status') return info(cur);
  if (op === 'create') {
    if (cur) await d.shares.deleteOne({ uid });
    const row = { uid, token: crypto.randomBytes(18).toString('base64url'), createdAt: Date.now(), updatedAt: 0, snap: null };
    await d.shares.insertOne(row); return info(row);
  }
  if (op === 'revoke') { await d.shares.deleteOne({ uid }); return info(null); }
  if (op === 'sync') {
    if (!cur) return info(null);
    const at = Date.now(); await d.shares.updateOne({ uid }, { $set: { snap: cleanSnap(b.snap, user), updatedAt: at } });
    return Object.assign(info(cur), { updatedAt: at });
  }
  fail(400, 'Unknown action.');
});
const pview = L.wrap(async (req) => {
  await L.limit(req, 'pview', 60, 60);
  const t = queryOf(req, 't');
  if (!/^[A-Za-z0-9_-]{20,40}$/.test(t)) fail(404, 'This link is not valid.');
  const d = await L.db(), s = await d.shares.findOne({ token: t });
  if (!s) fail(404, 'This link was turned off or does not exist.');
  return { ok: true, snap: s.snap || null, updatedAt: s.updatedAt || 0 };
});

/* ---------- plans and licences ---------- */
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => [0, 1, 2].map(() => Array.from({ length: 4 }, () => CODE_CHARS[crypto.randomInt(0, CODE_CHARS.length)]).join('')).join('-');
const planInfo = (u) => { const n = planOf(u); return { ok: true, plan: n, until: n === 'free' ? 0 : u.plan.until, perDay: perDay(u), freePerDay: FREE_PER_DAY }; };
const plan = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const op = String(b.op || 'status');
  if (op === 'mint' || op === 'list' || op === 'revokecode') {
    await L.limit(req, 'admin', 10, 600); adminOk(req, b); const d = await L.db();
    if (op === 'mint') {
      const kind = String(b.plan || 'school'); if (!PLAN_PER_DAY[kind] || kind === 'free') fail(400, 'plan must be "pro" or "school".');
      const count = Math.floor(num(b.count || 1, 1, 200)), seats = Math.floor(num(b.seats || 1, 1, 5000)), days = Math.floor(num(b.days || 365, 1, 3660)), label = str(b.label, 80), out = [];
      for (let i = 0; i < count; i++) { const code = newCode(); await d.licences.insertOne({ code, plan: kind, seats, days, label, usedN: 0, used: [], revoked: false, createdAt: Date.now() }); out.push(code); }
      return { ok: true, codes: out, plan: kind, seats, days };
    }
    if (op === 'revokecode') { const code = String(b.code || '').toUpperCase(); await d.licences.updateOne({ code }, { $set: { revoked: true } }); return { ok: true }; }
    const rows = await d.licences.find({}).sort({ createdAt: -1 }).limit(500).toArray();
    return { ok: true, licences: rows.map((r) => ({ code: r.code, plan: r.plan, seats: r.seats, used: r.usedN || 0, days: r.days, label: r.label || '', revoked: !!r.revoked })) };
  }
  const { d, user } = await L.authed(req);
  if (op === 'status') return planInfo(user);
  if (op === 'redeem') {
    await L.limit(req, 'redeem', 12, 600);
    const code = String(b.code || '').toUpperCase().replace(/\s+/g, '');
    if (!/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) fail(400, 'That code does not look right. It has 12 letters and numbers, like ABCD-EFGH-JKLM.');
    const lic = await d.licences.findOne({ code });
    if (!lic || lic.revoked) fail(404, 'That code is not valid.');
    const uid = String(user._id);
    if ((lic.used || []).includes(uid)) fail(409, 'You already used this code.');
    const r = await d.licences.findOneAndUpdate({ code, revoked: false, usedN: { $lt: lic.seats } }, { $inc: { usedN: 1 }, $push: { used: uid } }, { returnDocument: 'after' });
    const got = r && r.value !== undefined ? r.value : r;
    if (!got) fail(409, 'All seats on this code are already used.');
    const until = Math.max(Date.now(), user.plan && user.plan.until || 0) + lic.days * 864e5;
    const np = { name: lic.plan, until, code };
    await d.users.updateOne({ _id: user._id }, { $set: { plan: np } });
    return planInfo(Object.assign({}, user, { plan: np }));
  }
  fail(400, 'Unknown action.');
});

/* ---------- crash and usage reports (anonymous) ---------- */
const scrub = (s, n) => str(s, n * 2).replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '[email]').replace(/Bearer\s+\S+/gi, 'Bearer [x]').replace(/\b[A-Fa-f0-9]{24,}\b/g, '[id]').replace(/eyJ[\w-]+\.[\w-]+\.[\w-]+/g, '[token]').slice(0, n);
const dayOf = (t) => new Date(t).toISOString().slice(0, 10);
const report = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  if (String(b.op || '') === 'summary') {
    await L.limit(req, 'admin', 10, 600); adminOk(req, b); const d = await L.db(), since = Date.now() - 7 * 864e5;
    const rows = await d.reports.find({ at: { $gt: since } }).limit(5000).toArray();
    const errs = {}, days = {}, ver = {}, plat = {}, ev = {}, dau = {};
    rows.forEach((r) => {
      days[r.day] = days[r.day] || { errors: 0, events: 0 }; (r.kind === 'error' ? (days[r.day].errors++) : (days[r.day].events++));
      if (r.kind === 'error') { const k = r.msg + ' @ ' + (r.where || ''); errs[k] = errs[k] || { n: 0, ver: r.ver, plat: r.plat, last: r.at }; errs[k].n++; errs[k].last = Math.max(errs[k].last, r.at); }
      else { ev[r.event] = (ev[r.event] || 0) + 1; if (r.uh) { (dau[r.day] = dau[r.day] || new Set()).add(r.uh); } }
      ver[r.ver || '?'] = (ver[r.ver || '?'] || 0) + 1; plat[r.plat || '?'] = (plat[r.plat || '?'] || 0) + 1;
    });
    return { ok: true, total: rows.length, days, versions: ver, platforms: plat, events: ev, dailyActive: Object.fromEntries(Object.entries(dau).map(([k, v]) => [k, v.size])),
      topErrors: Object.entries(errs).sort((a, b2) => b2[1].n - a[1].n).slice(0, 15).map(([k, v]) => ({ error: k, count: v.n, version: v.ver, platform: v.plat, last: new Date(v.last).toISOString() })) };
  }
  await L.limit(req, 'rep', 40, 60);
  const kind = b.kind === 'usage' ? 'usage' : 'error', now = Date.now(), uid = uidOf(req);
  const row = { at: now, day: dayOf(now), kind, ver: str(b.ver, 20), plat: str(b.plat, 20), expireAt: new Date(now + 30 * 864e5) };
  if (kind === 'error') { row.msg = scrub(b.msg, 300) || 'unknown'; row.stack = scrub(b.stack, 1500); row.where = scrub(b.where, 120); }
  else { row.event = str(b.event, 40).replace(/[^\w.:-]/g, '') || 'open'; row.uh = uid ? crypto.createHash('sha256').update(uid + ':' + row.day + ':' + (process.env.JWT_SECRET || '')).digest('hex').slice(0, 16) : ''; }
  const d = await L.db(); await d.reports.insertOne(row);
  return { ok: true };
});

module.exports = { share, pview, plan, report, takeAi, aiText, parseQuestions, perDay, planOf, cleanSnap, PLAN_PER_DAY, FREE_PER_DAY };

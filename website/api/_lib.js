'use strict';
/* Shared helpers for the FutureSelf API (runs as Vercel serverless functions). */
const crypto = require('crypto');

class HttpErr extends Error { constructor(status, msg, extra) { super(msg); this.status = status; this.extra = extra || {}; } }
const fail = (status, msg, extra) => { throw new HttpErr(status, msg, extra); };

/* ---------- database ---------- */
let clientP = null, indexed = false;
async function db() {
  if (global.__FS_FAKE_DB) return global.__FS_FAKE_DB; // tests only
  if (!process.env.MONGODB_URI) fail(500, 'The database is not set up on the server (MONGODB_URI is missing).');
  if (!clientP) {
    const { MongoClient } = require('mongodb');
    clientP = new MongoClient(process.env.MONGODB_URI, { maxPoolSize: 5, serverSelectionTimeoutMS: 8000 }).connect().catch((e) => { clientP = null; throw e; });
  }
  let c; try { c = await clientP; } catch (e) { fail(503, 'Could not reach the database. Check MONGODB_URI and Network Access in MongoDB Atlas.'); }
  const d = c.db(process.env.MONGODB_DB || 'futureself');
  const out = { users: d.collection('users'), sessions: d.collection('sessions'), tickets: d.collection('tickets'), vcache: d.collection('vcache'), rl: d.collection('rl') };
  if (!indexed) {
    indexed = true;
    try {
      await out.users.createIndex({ email: 1 }, { unique: true });
      await out.sessions.createIndex({ uid: 1 }, { unique: true });
      await out.tickets.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
      await out.vcache.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
      await out.vcache.createIndex({ key: 1 }, { unique: true });
      await out.rl.createIndex({ expireAt: 1 }, { expireAfterSeconds: 0 });
      await out.rl.createIndex({ key: 1 }, { unique: true });
    } catch (e) { indexed = false; }
  }
  return out;
}

/* ---------- crypto ---------- */
const secret = () => { const s = process.env.JWT_SECRET || ''; if (s.length < 16) fail(500, 'JWT_SECRET is missing or too short on the server (use 32+ random characters).'); return s; };
const b64 = (b) => Buffer.from(b).toString('base64url');
const sha256 = (s) => crypto.createHash('sha256').update(s).digest('hex');
function sign(payload) {
  const body = b64(JSON.stringify(payload));
  return body + '.' + crypto.createHmac('sha256', secret()).update(body).digest('base64url');
}
function verifyToken(t) {
  const [body, sig] = String(t || '').split('.'); if (!body || !sig) return null;
  const want = crypto.createHmac('sha256', secret()).update(body).digest('base64url');
  const a = Buffer.from(sig), b = Buffer.from(want); if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let p; try { p = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')); } catch (e) { return null; }
  return p && p.exp > Date.now() ? p : null;
}
const newToken = (user) => sign({ uid: String(user._id), tv: user.tv || 0, exp: Date.now() + 90 * 864e5 });
function hashPw(pw) {
  const salt = crypto.randomBytes(16);
  return { salt: salt.toString('hex'), passHash: crypto.scryptSync(pw, salt, 64).toString('hex') };
}
function checkPw(pw, salt, hash) {
  if (!salt || !hash) return false;
  const a = crypto.scryptSync(pw, Buffer.from(salt, 'hex'), 64), b = Buffer.from(hash, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const codeHash = (code, email) => sha256(code + ':' + email + ':' + secret());
const newCode = () => String(crypto.randomInt(0, 1000000)).padStart(6, '0');
const same = (a, b) => { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); };

/* ---------- mail ---------- */
async function sendMail(to, subject, text, html) {
  if (global.__FS_MAIL) return global.__FS_MAIL({ to, subject, text, html });
  const user = process.env.SMTP_USER, pass = process.env.SMTP_PASS;
  if (!user || !pass) fail(500, 'Email is not set up on the server (SMTP_USER / SMTP_PASS missing).');
  const nm = require('nodemailer');
  const tr = nm.createTransport(process.env.SMTP_HOST ? { host: process.env.SMTP_HOST, port: +(process.env.SMTP_PORT || 465), secure: (process.env.SMTP_PORT || '465') === '465', auth: { user, pass } } : { service: 'gmail', auth: { user, pass } });
  try { await tr.sendMail({ from: process.env.MAIL_FROM || '"FutureSelf" <' + user + '>', to, subject, text, html }); }
  catch (e) { fail(502, 'The verification email could not be sent. Check SMTP_USER / SMTP_PASS (Gmail needs an App Password).'); }
}

/* ---------- http ---------- */
/* how many requests one address may make (fixed window kept in the database; skipped if the database has no such collection) */
async function limit(req, name, max, windowSec) {
  const d = await db(); if (!d.rl) return;
  const ip = String((req.headers['x-forwarded-for'] || '').split(',')[0].trim() || (req.socket && req.socket.remoteAddress) || 'x').slice(0, 64);
  const bucket = Math.floor(Date.now() / (windowSec * 1000));
  const key = name + ':' + sha256(ip) + ':' + bucket;
  const r = await d.rl.findOneAndUpdate({ key }, { $inc: { n: 1 }, $setOnInsert: { expireAt: new Date((bucket + 2) * windowSec * 1000) } }, { upsert: true, returnDocument: 'after' });
  const row = r && r.value !== undefined ? r.value : r; // older drivers wrap the row in { value }
  if (row && row.n > max) fail(429, 'Too many tries from this network. Wait a minute and try again.');
}
function wrap(fn) {
  return async (req, res) => {
    /* no CORS headers on purpose: only our own pages and the apps (which call from their own process) use this API */
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }
    try {
      let body; try { body = req.body; } catch (e) { fail(400, 'The request was not valid JSON.'); }
      if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
      const out = await fn(req, body && typeof body === 'object' ? body : {});
      res.statusCode = 200; res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(out));
    } catch (e) {
      const st = e instanceof HttpErr ? e.status : 500;
      if (!(e instanceof HttpErr)) console.error('[api]', e && e.stack || e);
      res.statusCode = st; res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(Object.assign({ error: e instanceof HttpErr ? e.message : 'Something went wrong on the server.' }, e instanceof HttpErr ? e.extra : {})));
    }
  };
}
async function authed(req) {
  const m = String(req.headers.authorization || '').match(/^Bearer (\S+)$/);
  const p = m && verifyToken(m[1]); if (!p) fail(401, 'Please sign in again.');
  const d = await db();
  const { ObjectId } = global.__FS_FAKE_DB ? { ObjectId: String } : require('mongodb');
  let user; try { user = await d.users.findOne({ _id: new ObjectId(p.uid) }); } catch (e) { user = null; }
  if (!user || !user.verified || (p.tv || 0) !== (user.tv || 0)) fail(401, 'Please sign in again.');
  return { d, user };
}
const pub = (u) => ({ email: u.email, name: u.name || '' });

module.exports = { limit, HttpErr, fail, db, sign, verifyToken, newToken, hashPw, checkPw, codeHash, newCode, same, sha256, sendMail, wrap, authed, pub };

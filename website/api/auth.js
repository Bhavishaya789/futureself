'use strict';
/* One endpoint, many actions: POST /api/auth { a: 'register'|'verify'|'resend'|'login'|'google'|'ticket'|'redeem'|'me', ... } */
const crypto = require('crypto');
const L = require('./_lib');
const { fail } = L;

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const normEmail = (e) => String(e || '').trim().toLowerCase();
const CODE_MIN = 15, RESEND_GAP = 45000;
const PHOTO_MAX = 90000; // a 256 px jpeg is about 20 KB
const AV_KEYS = ['skin', 'hair', 'hc', 'eyes', 'mouth', 'top', 'tc', 'acc', 'bg'];

async function mailCode(user, code) {
  const text = 'Your FutureSelf verification code is ' + code + '. It works for ' + CODE_MIN + ' minutes. If you did not ask for it, ignore this email.';
  const html = '<div style="font-family:Arial,sans-serif"><h2>FutureSelf</h2><p>Your verification code:</p><p style="font-size:32px;letter-spacing:6px;font-weight:700">' + code + '</p><p>It works for ' + CODE_MIN + ' minutes. If you did not ask for it, ignore this email.</p></div>';
  await L.sendMail(user.email, 'Your FutureSelf code: ' + code, text, html);
}
async function issueCode(d, email) {
  const code = L.newCode();
  await d.users.updateOne({ email }, { $set: { codeHash: L.codeHash(code, email), codeExpires: Date.now() + CODE_MIN * 60000, codeTries: 0, codeSentAt: Date.now() } });
  return code;
}
const session = (user) => ({ ok: true, token: L.newToken(user), user: L.pub(user) });

const actions = {
  async register(req, b) {
    const email = normEmail(b.email), name = String(b.name || '').trim().slice(0, 60), pw = String(b.password || '');
    if (!name) fail(400, 'Please enter your name.');
    if (!EMAIL.test(email)) fail(400, 'That email address does not look right.');
    if (pw.length < 8 || pw.length > 200) fail(400, 'Use a password of at least 8 characters.');
    const d = await L.db();
    const old = await d.users.findOne({ email });
    if (old && old.verified) fail(409, 'This email already has an account. Use Sign in (or Continue with Google).');
    if (old && old.codeSentAt && Date.now() - old.codeSentAt < RESEND_GAP) fail(429, 'A code was just sent. Wait a few seconds and press Resend.', { needsVerify: true });
    const h = L.hashPw(pw);
    await d.users.updateOne({ email }, { $set: { name, salt: h.salt, passHash: h.passHash, verified: false }, $setOnInsert: { email, createdAt: Date.now() } }, { upsert: true });
    const user = await d.users.findOne({ email });
    await mailCode(user, await issueCode(d, email));
    return { ok: true, needsVerify: true };
  },

  async verify(req, b) {
    const email = normEmail(b.email), code = String(b.code || '').replace(/\D/g, '');
    const d = await L.db(), user = await d.users.findOne({ email });
    if (!user || !user.codeHash) fail(400, 'No code is waiting for this email. Create the account again.');
    if ((user.codeTries || 0) >= 5) fail(429, 'Too many wrong codes. Press Resend to get a new one.');
    if (Date.now() > user.codeExpires) fail(400, 'This code has expired. Press Resend.');
    if (!L.same(L.codeHash(code, email), user.codeHash)) {
      await d.users.updateOne({ email }, { $inc: { codeTries: 1 } });
      fail(400, 'Wrong code. Check the email and try again.');
    }
    await d.users.updateOne({ email }, { $set: { verified: true, lastLogin: Date.now() }, $unset: { codeHash: '', codeExpires: '' } });
    return session(await d.users.findOne({ email }));
  },

  async resend(req, b) {
    const email = normEmail(b.email), d = await L.db(), user = await d.users.findOne({ email });
    if (user && !user.verified) {
      if (user.codeSentAt && Date.now() - user.codeSentAt < RESEND_GAP) fail(429, 'Please wait a little before asking for another code.');
      await mailCode(user, await issueCode(d, email));
    }
    return { ok: true }; // same answer whether or not the email exists
  },

  async login(req, b) {
    const email = normEmail(b.email), pw = String(b.password || '');
    const d = await L.db(), user = await d.users.findOne({ email });
    if (user && user.lockUntil && user.lockUntil > Date.now()) fail(429, 'Too many wrong passwords. Try again in a few minutes.');
    if (!user || !user.passHash) {
      L.checkPw(pw, '00', L.sha256('x')); // same work as a real check, so timing does not reveal which emails exist
      if (user && user.googleId) fail(401, 'This email uses Google sign-in. Press Continue with Google.');
      fail(401, 'Wrong email or password.');
    }
    if (!L.checkPw(pw, user.salt, user.passHash)) {
      const fails = (user.loginFails || 0) + 1;
      await d.users.updateOne({ email }, { $set: fails >= 8 ? { loginFails: 0, lockUntil: Date.now() + 10 * 60000 } : { loginFails: fails } });
      fail(401, 'Wrong email or password.');
    }
    if (!user.verified) {
      if (!user.codeSentAt || Date.now() - user.codeSentAt > RESEND_GAP) await mailCode(user, await issueCode(d, email));
      fail(403, 'Please verify your email first. We sent you a code.', { needsVerify: true });
    }
    await d.users.updateOne({ email }, { $set: { loginFails: 0, lastLogin: Date.now() } });
    return session(user);
  },

  async google(req, b) {
    const cred = String(b.credential || ''); if (cred.length < 20 || cred.length > 4000) fail(400, 'Bad Google sign-in.');
    const cid = process.env.GOOGLE_CLIENT_ID; if (!cid) fail(500, 'Google sign-in is not set up on the server (GOOGLE_CLIENT_ID).');
    const f = global.__FS_FETCH || fetch;
    let info;
    try { const r = await f('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(cred)); if (!r.ok) throw 0; info = await r.json(); } catch (e) { fail(401, 'Google could not confirm this sign-in.'); }
    if (info.aud !== cid) fail(401, 'This Google sign-in was made for a different app.');
    if (!/^(https:\/\/)?accounts\.google\.com$/.test(String(info.iss))) fail(401, 'Bad Google sign-in.');
    if (!(info.email_verified === true || info.email_verified === 'true')) fail(401, 'Your Google email is not verified.');
    if (+info.exp * 1000 < Date.now()) fail(401, 'This Google sign-in expired. Try again.');
    const email = normEmail(info.email); if (!EMAIL.test(email)) fail(401, 'Bad Google sign-in.');
    const d = await L.db(), old = await d.users.findOne({ email });
    if (old && !old.verified) await d.users.updateOne({ email }, { $unset: { passHash: '', salt: '', codeHash: '', codeExpires: '' } }); // an unverified sign-up cannot keep a password someone else typed
    await d.users.updateOne({ email }, { $set: { googleId: String(info.sub), verified: true, lastLogin: Date.now() }, $setOnInsert: { email, name: String(info.name || email.split('@')[0]).slice(0, 60), createdAt: Date.now() } }, { upsert: true });
    return session(await d.users.findOne({ email }));
  },

  /* browser sign-in for the PC / phone app: the page asks for a one-time ticket, the app trades it in with its secret */
  async ticket(req, b) {
    const { d, user } = await L.authed(req);
    const ch = String(b.ch || ''); if (!/^[a-f0-9]{64}$/.test(ch)) fail(400, 'Bad request.');
    const id = crypto.randomBytes(24).toString('hex');
    await d.tickets.insertOne({ _id: id, ch, uid: String(user._id), expireAt: new Date(Date.now() + 120000) });
    return { ok: true, ticket: id };
  },

  async redeem(req, b) {
    const d = await L.db();
    const id = String(b.ticket || ''), ver = String(b.verifier || '');
    if (!/^[a-f0-9]{48}$/.test(id) || ver.length < 32 || ver.length > 200) fail(400, 'Bad request.');
    let t = await d.tickets.findOneAndDelete({ _id: id });
    if (t && t.value !== undefined) t = t.value;
    if (!t || new Date(t.expireAt).getTime() < Date.now()) fail(400, 'This sign-in link expired. Try again.');
    if (!L.same(L.sha256(ver), t.ch)) fail(400, 'This sign-in did not start in this app.');
    const { ObjectId } = global.__FS_FAKE_DB ? { ObjectId: String } : require('mongodb');
    const user = await d.users.findOne({ _id: new ObjectId(t.uid) });
    if (!user) fail(400, 'Account not found.');
    return session(user);
  },

  /* signs this account out of every phone and PC (all old tokens stop working) */
  async signoutall(req) {
    const { d, user } = await L.authed(req);
    await d.users.updateOne({ email: user.email }, { $set: { tv: (user.tv || 0) + 1 } });
    await d.sessions.updateOne({ uid: String(user._id) }, { $set: { state: { active: false }, updatedAt: Date.now() } });
    return { ok: true };
  },

  async me(req) {
    const { user } = await L.authed(req);
    return { ok: true, user: L.pub(user) };
  },

  /* the profile (name, photo, 3D avatar) lives on the account, so every phone and PC shows the same one */
  async profile(req, b) {
    const { d, user } = await L.authed(req);
    const set = {};
    if (b.name !== undefined) {
      const n = String(b.name).trim().slice(0, 60);
      if (n.length < 2) fail(400, 'Your name needs at least 2 letters.');
      set.name = n;
    }
    if (b.photo !== undefined) {
      const p = String(b.photo || '');
      if (p && (p.length > PHOTO_MAX || !/^data:image\/jpeg;base64,[A-Za-z0-9+\/=]+$/.test(p))) fail(400, 'That photo is too big or not a picture. Choose another one.');
      set.photo = p;
    }
    if (b.avatar !== undefined) {
      if (b.avatar === null) set.avatar = null;
      else {
        const a = {}, src = b.avatar && typeof b.avatar === 'object' ? b.avatar : {};
        AV_KEYS.forEach((k) => { const v = Math.round(Number(src[k])); a[k] = v >= 0 && v <= 15 ? v : 0; });
        a.v = 1; set.avatar = a;
      }
    }
    if (!Object.keys(set).length) return { ok: true, user: L.pub(user) };
    set.profileAt = Date.now();
    await d.users.updateOne({ email: user.email }, { $set: set });
    return { ok: true, user: L.pub(Object.assign({}, user, set)) };
  }
};

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const name = String(b.a || ''), fn = Object.prototype.hasOwnProperty.call(actions, name) ? actions[name] : null; if (!fn) fail(400, 'Unknown action.');
  if (['register', 'login', 'verify', 'resend', 'google'].includes(name)) await L.limit(req, 'auth', 40, 600); // 40 tries per 10 minutes per network
  if (name === 'redeem') await L.limit(req, 'redeem', 60, 600);
  if (name === 'profile') await L.limit(req, 'profile', 60, 600);
  return fn(req, b);
});

'use strict';
/* Friends, weekly leaderboard and study rooms.
   POST /api/social { a: 'sync'|'overview'|'add'|'accept'|'decline'|'remove'|'roomNew'|'roomJoin'|'roomLeave'|'room', ... }
   Everything is opt-in: a student only appears to people they accepted as friends (or who share a room code with them).
   Numbers are reported by each student's own app, so the leaderboard is for motivation, not for exams. */
const crypto = require('crypto');
const L = require('./_lib');
const { fail } = L;

const BEAT_MS = 90000;               // someone counts as "studying now" if their app reported in the last 90 seconds
const ROOM_MAX = 12, ROOM_IDLE = 12 * 3600e3, FRIENDS_MAX = 100;
const WORDS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const num = (v, max) => Math.max(0, Math.min(Math.round(+v || 0), max));
const str = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, n);
const wkey = (v) => /^\d{4}-\d{2}-\d{2}$/.test(String(v)) ? String(v) : '';
const roomCode = () => { let c = ''; const b = crypto.randomBytes(6); for (let i = 0; i < 6; i++) c += WORDS[b[i] % WORDS.length]; return c; };

async function mine(d, uid, name) {
  const key = 'u:' + uid;
  let row = await d.social.findOne({ key });
  if (!row) { await d.social.updateOne({ key }, { $set: { key, name, friends: [], incoming: [], outgoing: [], weekMin: 0, weekKey: '', todayMin: 0, streak: 0, beat: 0, studying: null, room: '' } }, { upsert: true }); row = await d.social.findOne({ key }); }
  return row;
}
const live = (r, now) => !!(r && r.studying && r.beat && now - r.beat < BEAT_MS && (!r.studying.endsAt || now < r.studying.endsAt + 60000));
const card = (r, uid, now, wk) => ({
  id: String(uid), name: r.name || 'Student', weekMin: r.weekKey && r.weekKey === wk ? (r.weekMin || 0) : 0, todayMin: r.todayMin || 0, streak: r.streak || 0,
  studying: live(r, now) ? { subject: r.studying.subject || 'Studying', endsAt: r.studying.endsAt || 0 } : null
});

const actions = {
  async sync(ctx, b) {
    const { d, uid, user, now } = ctx;
    const r = await mine(d, uid, user.name || 'Student');
    const st = b.studying && b.studying.on ? { subject: str(b.studying.subject, 60) || 'Studying', endsAt: Math.min(now + 12 * 3600e3, num(b.studying.endsAt, 4e12)) } : null;
    await d.social.updateOne({ key: 'u:' + uid }, { $set: { name: user.name || 'Student', weekMin: num(b.weekMin, 7 * 24 * 60), weekKey: wkey(b.weekKey), todayMin: num(b.todayMin, 24 * 60), streak: num(b.streak, 5000), beat: now, studying: st } });
    if (r.room) await d.social.updateOne({ key: 'r:' + r.room }, { $set: { touched: now } });
    return { ok: true };
  },

  async overview(ctx, b) {
    const { d, uid, user, now } = ctx;
    const me = await mine(d, uid, user.name || 'Student'), wk = wkey(b.weekKey) || me.weekKey;
    const friends = [];
    for (const f of me.friends) { const r = await d.social.findOne({ key: 'u:' + f }); if (r) friends.push(card(r, f, now, wk)); }
    const board = friends.concat([Object.assign(card(me, uid, now, wk), { me: true, studying: live(me, now) ? { subject: me.studying.subject, endsAt: me.studying.endsAt } : null })]).sort((a, c) => c.weekMin - a.weekMin);
    return { ok: true, me: { id: String(uid), name: user.name || 'Student' }, board, incoming: me.incoming.map((x) => ({ id: x.uid, name: x.name })), outgoing: me.outgoing.map((x) => ({ name: x.name })), room: me.room || '' };
  },

  async add(ctx, b) {
    const { d, uid, user } = ctx;
    const email = str(b.email, 200).toLowerCase();
    if (!EMAIL.test(email)) fail(400, 'That email address does not look right.');
    const me = await mine(d, uid, user.name || 'Student');
    if (me.friends.length >= FRIENDS_MAX) fail(400, 'You have reached the friend limit.');
    const other = await d.users.findOne({ email });
    /* the answer is the same whether or not that person has an account, so nobody can use this to find out who is registered */
    if (other && other.verified && String(other._id) !== String(uid)) {
      const oid = String(other._id), them = await mine(d, oid, other.name || 'Student');
      if (!me.friends.includes(oid) && !me.outgoing.some((x) => x.uid === oid)) {
        if (them.outgoing.some((x) => x.uid === String(uid))) { // they already asked me: this makes us friends
          await d.social.updateOne({ key: 'u:' + uid }, { $set: { friends: me.friends.concat([oid]), incoming: me.incoming.filter((x) => x.uid !== oid) } });
          await d.social.updateOne({ key: 'u:' + oid }, { $set: { friends: them.friends.concat([String(uid)]), outgoing: them.outgoing.filter((x) => x.uid !== String(uid)) } });
        } else {
          await d.social.updateOne({ key: 'u:' + uid }, { $set: { outgoing: me.outgoing.concat([{ uid: oid, name: other.name || 'Student' }]) } });
          if (them.incoming.length < 50 && !them.incoming.some((x) => x.uid === String(uid))) await d.social.updateOne({ key: 'u:' + oid }, { $set: { incoming: them.incoming.concat([{ uid: String(uid), name: user.name || 'Student' }]) } });
        }
      }
    }
    return { ok: true, note: 'If that person has a FutureSelf account, they now have your request.' };
  },

  async accept(ctx, b) {
    const { d, uid } = ctx, oid = str(b.id, 64);
    const me = await mine(d, uid, ctx.user.name || 'Student');
    if (!me.incoming.some((x) => x.uid === oid)) fail(404, 'That request is no longer there.');
    const them = await d.social.findOne({ key: 'u:' + oid });
    await d.social.updateOne({ key: 'u:' + uid }, { $set: { friends: me.friends.includes(oid) ? me.friends : me.friends.concat([oid]), incoming: me.incoming.filter((x) => x.uid !== oid) } });
    if (them) await d.social.updateOne({ key: 'u:' + oid }, { $set: { friends: them.friends.includes(String(uid)) ? them.friends : them.friends.concat([String(uid)]), outgoing: them.outgoing.filter((x) => x.uid !== String(uid)) } });
    return { ok: true };
  },

  async decline(ctx, b) {
    const { d, uid } = ctx, oid = str(b.id, 64), me = await mine(d, uid, ctx.user.name || 'Student');
    await d.social.updateOne({ key: 'u:' + uid }, { $set: { incoming: me.incoming.filter((x) => x.uid !== oid) } });
    return { ok: true };
  },

  async remove(ctx, b) {
    const { d, uid } = ctx, oid = str(b.id, 64), me = await mine(d, uid, ctx.user.name || 'Student');
    await d.social.updateOne({ key: 'u:' + uid }, { $set: { friends: me.friends.filter((x) => x !== oid) } });
    const them = await d.social.findOne({ key: 'u:' + oid });
    if (them) await d.social.updateOne({ key: 'u:' + oid }, { $set: { friends: them.friends.filter((x) => x !== String(uid)) } });
    return { ok: true };
  },

  async roomNew(ctx) {
    const { d, uid, user, now } = ctx;
    await actions.roomLeave(ctx, {});
    for (let i = 0; i < 6; i++) {
      const code = roomCode();
      if (await d.social.findOne({ key: 'r:' + code })) continue;
      await d.social.updateOne({ key: 'r:' + code }, { $set: { key: 'r:' + code, ids: [uid], touched: now, owner: String(uid) } }, { upsert: true });
      await d.social.updateOne({ key: 'u:' + uid }, { $set: { room: code } });
      return { ok: true, code };
    }
    fail(503, 'Could not make a room just now. Try again.');
  },

  async roomJoin(ctx, b) {
    const { d, uid, user, now } = ctx, code = str(b.code, 12).toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code.length !== 6) fail(400, 'A room code has 6 letters and numbers.');
    const room = await d.social.findOne({ key: 'r:' + code });
    if (!room || now - (room.touched || 0) > ROOM_IDLE) fail(404, 'No room with that code. Check it with your friend.');
    if ((room.ids || []).length >= ROOM_MAX && !(room.ids || []).includes(uid)) fail(409, 'That room is full (12 people).');
    await actions.roomLeave(ctx, { keep: code });
    await d.social.updateOne({ key: 'r:' + code }, { $addToSet: { ids: uid }, $set: { touched: now } });
    await d.social.updateOne({ key: 'u:' + uid }, { $set: { room: code } });
    return { ok: true, code };
  },

  async roomLeave(ctx, b) {
    const { d, uid } = ctx, me = await mine(d, uid, ctx.user.name || 'Student');
    if (me.room && me.room !== (b && b.keep)) {
      await d.social.updateOne({ key: 'r:' + me.room }, { $pull: { ids: uid } });
    }
    if (!(b && b.keep)) await d.social.updateOne({ key: 'u:' + uid }, { $set: { room: '' } });
    return { ok: true };
  },

  async room(ctx) {
    const { d, uid, now } = ctx, me = await mine(d, uid, ctx.user.name || 'Student');
    if (!me.room) return { ok: true, code: '', members: [] };
    const room = await d.social.findOne({ key: 'r:' + me.room });
    if (!room) { await d.social.updateOne({ key: 'u:' + uid }, { $set: { room: '' } }); return { ok: true, code: '', members: [] }; }
    const members = [];
    for (const id of room.ids || []) {
      const r = id === String(uid) ? me : await d.social.findOne({ key: 'u:' + id }); if (!r) continue;
      members.push({ id, name: r.name || 'Student', me: id === String(uid), studying: live(r, now) ? { subject: r.studying.subject || 'Studying', endsAt: r.studying.endsAt || 0 } : null, here: !!(r.beat && now - r.beat < 5 * 60000) });
    }
    members.sort((a, c) => (c.studying ? 1 : 0) - (a.studying ? 1 : 0));
    return { ok: true, code: me.room, members };
  }
};

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  await L.limit(req, 'social', 240, 60);
  const { d, user } = await L.authed(req);
  if (!d.social) fail(500, 'The server needs the latest version (social).');
  const fn = actions[String(b.a || '')]; if (!fn) fail(400, 'Unknown action.');
  return fn({ d, user, uid: String(user._id), now: Date.now() }, b);
});

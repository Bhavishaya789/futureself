'use strict';
/* Take the photo of a written answer with the PHONE camera and bring it to the PC.
   The PC asks for a capture 'slot' (signed in); it shows a QR code that opens  <site>/cam.html#<id>.<secret>  on the phone.
   The phone needs no sign-in: the secret in the link (never sent to any server in the URL itself) is the key to that one slot.
   POST /api/capture { a: 'new' | 'poll' | 'done' }           (signed in, from the PC or phone app)
   POST /api/capture { a: 'info' | 'put', id, secret, ... }    (from the phone page)
   Photos wait in the 'tickets' collection, which deletes them by itself after 20 minutes, and the PC removes them as soon as it has them. */
const crypto = require('crypto');
const L = require('./_lib');
const { fail } = L;

const TTL = 20 * 60e3, MAX = 4, MAX_B64 = 2.2e6;
const str = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, n);
const hid = (v) => String(v || '').replace(/[^a-f0-9]/g, '').slice(0, 32);
const hash = (id, secret) => L.sha256(id + ':' + secret);

async function slot(d, b) {
  const id = hid(b.id), secret = hid(b.secret);
  if (id.length !== 16 || secret.length !== 24) fail(400, 'This photo link is not valid.');
  const row = await d.tickets.findOne({ _id: 'cap:' + id });
  if (!row || row.expireAt < new Date() || !L.same(row.secretHash, hash(id, secret))) fail(404, 'This photo link has expired. Open a new one on your computer.');
  return row;
}

module.exports = L.wrap(async (req, b) => {
  if (req.method !== 'POST') fail(405, 'Use POST.');
  const a = String(b.a || '');
  if (a === 'info' || a === 'put') {
    await L.limit(req, 'capture', 90, 600);
    const d = await L.db(), row = await slot(d, b);
    if (a === 'info') return { ok: true, label: row.label || '', count: (row.imgs || []).length, max: MAX };
    if ((row.imgs || []).length >= MAX) fail(409, 'You already sent ' + MAX + ' photos for this answer.');
    const img = String(b.img || '');
    if (img.length > MAX_B64 || !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]{100,}$/.test(img)) fail(400, 'Send the photo as a JPEG under about 1.6 MB.');
    await d.tickets.updateOne({ _id: row._id }, { $push: { imgs: img } });
    return { ok: true, count: (row.imgs || []).length + 1, max: MAX };
  }
  await L.limit(req, 'capture-auth', 240, 60);
  const { d, user } = await L.authed(req);
  const uid = String(user._id);
  if (a === 'new') {
    const id = crypto.randomBytes(8).toString('hex'), secret = crypto.randomBytes(12).toString('hex');
    await d.tickets.insertOne({ _id: 'cap:' + id, uid, label: str(b.label, 80), secretHash: hash(id, secret), imgs: [], expireAt: new Date(Date.now() + TTL) });
    return { ok: true, id, secret, max: MAX, ttl: TTL / 1000 };
  }
  const id = hid(b.id), row = await d.tickets.findOne({ _id: 'cap:' + id });
  if (!row || row.uid !== uid) fail(404, 'That photo request is gone.');
  if (a === 'poll') { const have = Math.max(0, Math.min(MAX, +b.have || 0)); return { ok: true, count: (row.imgs || []).length, imgs: (row.imgs || []).slice(have) }; }
  if (a === 'done') { await d.tickets.deleteOne({ _id: row._id }); return { ok: true }; }
  fail(400, 'Unknown action.');
});

'use strict';
/* Phone link: lets the FutureSelf Android app know when a study session is running on this PC,
   so the phone can lock itself for the same time. Plain HTTP on the home/college Wi-Fi only.
   - off until the student turns it on in Settings
   - a phone must pair with a 6 digit code that works for 5 minutes
   - after pairing the phone gets a secret token; only phones with a token can ask for the session state
   - the state contains only: is a session running, subject name, when it ends. Nothing else leaves the PC. */
const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DEFAULT_PORT = 47820;
const rid = (n) => crypto.randomBytes(n).toString('hex');
function same(a, b) { const x = Buffer.from(String(a)), y = Buffer.from(String(b)); return x.length === y.length && crypto.timingSafeEqual(x, y); }

function lanAddresses() {
  const out = [], nets = os.networkInterfaces();
  Object.keys(nets).forEach((n) => (nets[n] || []).forEach((i) => {
    if (i.family === 'IPv4' && !i.internal) out.push(i.address);
  }));
  const priv = (a) => /^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(a);
  return out.sort((a, b) => (priv(b) ? 1 : 0) - (priv(a) ? 1 : 0));
}

function create(opts) {
  const dir = opts.dir, log = opts.log || (() => { }), file = path.join(dir, 'phonelink.json');
  let saved = { pcId: rid(6), enabled: false, devices: [] };
  try { saved = Object.assign(saved, JSON.parse(fs.readFileSync(file, 'utf8'))); } catch (e) { /* first run */ }
  const save = () => { try { fs.writeFileSync(file, JSON.stringify(saved)); } catch (e) { log('[phonelink] save failed ' + e.message); } };
  save();
  let server = null, port = 0, pairing = null, fails = 0;
  let session = { active: false };

  const send = (res, code, obj) => { const b = JSON.stringify(obj); res.writeHead(code, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(b), 'Cache-Control': 'no-store' }); res.end(b); };
  const authDevice = (req) => {
    const m = String(req.headers.authorization || '').match(/^Bearer ([a-f0-9]{48})$/); if (!m) return null;
    return saved.devices.find((d) => same(d.token, m[1])) || null;
  };
  function stateBody() {
    const s = session || { active: false };
    const restrict = !!(s.active && !s.paused && s.lock !== 'gentle');
    return { v: 1, now: Date.now(), pcId: saved.pcId, active: !!s.active, restrict, paused: !!s.paused, lock: s.lock || null, subject: s.subject || '', topicId: s.topicId || '', endsAt: s.endsAt || 0, startedAt: s.startedAt || 0 };
  }
  function handle(req, res) {
    const url = (req.url || '').split('?')[0];
    if (req.method === 'GET' && url === '/fs/ping') return send(res, 200, { app: 'FutureSelf', v: 1, pcId: saved.pcId, name: os.hostname(), pairing: !!(pairing && pairing.until > Date.now()) });
    if (req.method === 'POST' && url === '/fs/pair') {
      let body = '';
      req.on('data', (c) => { body += c; if (body.length > 4096) req.destroy(); });
      req.on('end', () => {
        let d; try { d = JSON.parse(body || '{}'); } catch (e) { return send(res, 400, { error: 'Bad request' }); }
        if (!pairing || pairing.until < Date.now()) return send(res, 403, { error: 'Pairing is not open. On the PC: Settings > Phone link > New code.' });
        if (!same(d.code || '', pairing.code)) {
          fails++; if (fails >= 5) { pairing = null; fails = 0; log('[phonelink] pairing closed after 5 wrong codes'); }
          return send(res, 403, { error: 'Wrong code' });
        }
        fails = 0; pairing = null;
        const dev = { id: rid(6), name: String(d.name || 'Android phone').slice(0, 40), token: rid(24), pairedAt: Date.now(), lastSeen: 0 };
        saved.devices.push(dev); save(); log('[phonelink] paired ' + dev.name);
        return send(res, 200, { token: dev.token, pcId: saved.pcId, name: os.hostname() });
      });
      return;
    }
    if (req.method === 'GET' && url === '/fs/state') {
      const dev = authDevice(req); if (!dev) return send(res, 401, { error: 'Not paired' });
      dev.lastSeen = Date.now(); return send(res, 200, stateBody());
    }
    return send(res, 404, { error: 'Not found' });
  }
  function start(preferred) {
    if (server) return Promise.resolve(port);
    return new Promise((resolve, reject) => {
      let p = preferred || DEFAULT_PORT, tries = 0;
      const attempt = () => {
        const s = http.createServer(handle);
        s.on('error', (e) => { if (e.code === 'EADDRINUSE' && tries++ < 9) { p++; attempt(); } else reject(e); });
        s.listen(p, '0.0.0.0', () => { server = s; port = p; log('[phonelink] listening on ' + p); resolve(p); });
      };
      attempt();
    });
  }
  function stop() { if (server) { try { server.close(); } catch (e) { /* ignore */ } } server = null; port = 0; pairing = null; }
  return {
    start, stop,
    isOn: () => !!server,
    setEnabled(on) { saved.enabled = !!on; save(); return on ? start().then(() => true) : (stop(), Promise.resolve(false)); },
    newCode() {
      const code = String(crypto.randomInt(0, 1000000)).padStart(6, '0'); pairing = { code, until: Date.now() + 5 * 60000 }; fails = 0;
      return { code, expiresAt: pairing.until };
    },
    unpair(id) { saved.devices = saved.devices.filter((d) => d.id !== id); save(); },
    setSession(s) { session = s && s.active ? { active: true, subject: String(s.subject || '').slice(0, 80), topicId: String(s.topicId || '').slice(0, 80), lock: s.lock || 'focus', endsAt: +s.endsAt || 0, startedAt: +s.startedAt || 0, paused: !!s.paused } : { active: false }; },
    info() {
      return { enabled: saved.enabled, on: !!server, port, pcId: saved.pcId, name: os.hostname(), addresses: lanAddresses(),
        code: pairing && pairing.until > Date.now() ? pairing.code : null, expiresAt: pairing && pairing.until > Date.now() ? pairing.until : 0,
        devices: saved.devices.map((d) => ({ id: d.id, name: d.name, pairedAt: d.pairedAt, lastSeen: d.lastSeen })) };
    },
    wantsStart: () => saved.enabled,
    _handle: handle
  };
}
module.exports = { create, lanAddresses, DEFAULT_PORT };

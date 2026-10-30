'use strict';
/* PC side of accounts: storage in the app's data folder, http through Node, Google sign-in through the normal browser. */
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const AcctClient = require('./acctclient');

function create(opts) {
  const dir = opts.dir, file = path.join(dir, 'account.json'), log = opts.log || (() => { });
  let defaultSite = ''; try { defaultSite = String(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'siteconfig.json'), 'utf8')).site || ''); } catch (e) { /* none */ }
  const client = AcctClient.create({
    defaultSite,
    load: () => { const o = JSON.parse(fs.readFileSync(file, 'utf8')); if (typeof o.token === 'string' && o.token.startsWith('enc:') && opts.open) o.token = opts.open(o.token.slice(4)); else if (typeof o.token === 'string' && o.token.startsWith('enc:')) o.token = ''; return o; },
    save: (o) => { try { const w = Object.assign({}, o); if (w.token && opts.seal) { const e = opts.seal(w.token); if (e) w.token = 'enc:' + e; } fs.writeFileSync(file, JSON.stringify(w), { mode: 0o600 }); } catch (e) { log('[account] save failed ' + e.message); } },
    rand: (n) => crypto.randomBytes(n).toString('hex'),
    sha256: (s) => crypto.createHash('sha256').update(s).digest('hex'),
    http: async (method, url, body, token) => {
      const r = await fetch(url, { method, headers: Object.assign({ 'Content-Type': 'application/json' }, token ? { Authorization: 'Bearer ' + token } : {}), body: method === 'GET' ? undefined : JSON.stringify(body || {}), signal: AbortSignal.timeout(15000) });
      let j = null; try { j = await r.json(); } catch (e) { /* not json */ }
      return { status: r.status, json: j };
    },
    /* opens the sign-in page in the real browser; the page sends the browser back to 127.0.0.1 on this PC with a one-time ticket */
    browserLogin: (makeUrl) => new Promise((resolve, reject) => {
      const srv = http.createServer((req, res) => {
        const u = new URL(req.url, 'http://127.0.0.1');
        if (u.pathname !== '/cb') { res.writeHead(404); return res.end(); }
        const t = u.searchParams.get('ticket') || '';
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<body style="font-family:sans-serif;background:#060812;color:#eef0ff;text-align:center;padding:60px"><h2>Signed in</h2><p>You can close this tab and return to FutureSelf.</p></body>');
        clearTimeout(timer); srv.close();
        if (/^[a-f0-9]{48}$/.test(t)) resolve(t); else reject(new Error('Sign-in did not finish.'));
      });
      const timer = setTimeout(() => { try { srv.close(); } catch (e) { /* ignore */ } reject(new Error('Sign-in took too long. Try again.')); }, 5 * 60000);
      srv.on('error', (e) => { clearTimeout(timer); reject(e); });
      srv.listen(0, '127.0.0.1', () => {
        const url = makeUrl('http://127.0.0.1:' + srv.address().port + '/cb');
        Promise.resolve(opts.openExternal(url)).catch((e) => { clearTimeout(timer); srv.close(); reject(e); });
      });
    })
  });

  /* keep the server up to date about this PC's study session (every change, plus a heartbeat) */
  let last = { active: false }, beat = null;
  function push(state) {
    last = state && state.active ? state : { active: false };
    client.push(last);
    if (beat) { clearInterval(beat); beat = null; }
    if (last.active) beat = setInterval(() => client.push(last), 25000);
  }
  /* follow the phone: every few seconds ask the server what the other device is doing and hand the answer to onState */
  let follower = null;
  function follow(onState) {
    if (follower) clearInterval(follower);
    let busy = false;
    follower = setInterval(() => {
      if (busy) return; busy = true;
      Promise.resolve(client.state()).then((j) => { try { onState(j); } catch (e) { log('[account] follow ' + e.message); } }, () => { }).then(() => { busy = false; });
    }, 4000);
  }
  const OPS = new Set(['status', 'setSite', 'skip', 'register', 'verify', 'resend', 'login', 'google', 'signout', 'videos']);
  return {
    client, push, follow,
    async invoke(op, payload) {
      if (!OPS.has(op)) throw new Error('Unknown account action');
      const r = await client[op](payload || {});
      if (op === 'login' || op === 'verify' || op === 'google') push(last); // the session that is already running becomes visible to the phone
      return r;
    },
    stop() { if (beat) clearInterval(beat); beat = null; if (follower) clearInterval(follower); follower = null; }
  };
}
module.exports = { create };

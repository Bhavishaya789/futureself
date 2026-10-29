'use strict';
/* Network-level guard: while a study video plays, the player may load ONLY that one video.
   Anything else (another video, search, channel pages, recommendations) is cancelled before it leaves the computer. */
const ID = /^[A-Za-z0-9_-]{11}$/;
const HOST = /^https:\/\/(www\.)?youtube(-nocookie)?\.com(\/|$)/i;

function createGuard() {
  let allowed = null;
  function bodyId(d) {
    try {
      const parts = d.uploadData || []; let txt = '';
      for (const p of parts) if (p && p.bytes) txt += Buffer.from(p.bytes).toString('utf8');
      if (!txt) return undefined;
      const j = JSON.parse(txt); return typeof j.videoId === 'string' ? j.videoId : null;   // null = JSON without a videoId
    } catch (e) { return undefined; }                                                        // not JSON: can't tell
  }
  return {
    allow(id) { allowed = ID.test(String(id || '')) ? String(id) : null; return allowed; },
    current() { return allowed; },
    /* d: { url, resourceType, uploadData } -> { cancel, why } */
    check(d) {
      const u = String(d.url || ''); if (!HOST.test(u)) return { cancel: false };
      let path; try { path = new URL(u).pathname; } catch (e) { return { cancel: true, why: 'bad url' }; }
      let m = path.match(/^\/embed\/([^/]+)/);
      if (m) return ID.test(m[1]) && m[1] === allowed ? { cancel: false } : { cancel: true, why: 'embed of another video' };
      if (path === '/' || /^\/(watch|results|shorts|playlist|feed|live|hashtag|c\/|channel\/|user\/|@|gaming|trending|premium|account|signin)/i.test(path)) return { cancel: true, why: 'navigation page' };
      if (/^\/youtubei\/v1\/(search|browse|guide|music|notification|account|subscription|playlist|share)/i.test(path)) return { cancel: true, why: 'search or browse call' };
      if (/^\/youtubei\/v1\/(player|next|reel|get_watch|get_transcript)/i.test(path)) {
        const v = bodyId(d);
        if (typeof v === 'string' && v !== allowed) return { cancel: true, why: 'player call for another video' };
      }
      return { cancel: false };
    }
  };
}
function install(sess, guard, log) {
  sess.webRequest.onBeforeRequest({ urls: ['https://www.youtube.com/*', 'https://www.youtube-nocookie.com/*', 'https://youtube.com/*', 'https://m.youtube.com/*'] }, (d, cb) => {
    const r = guard.check(d); if (r.cancel && log) log('[video-guard] blocked: ' + r.why + ' ' + String(d.url).slice(0, 90));
    cb({ cancel: !!r.cancel });
  });
}
module.exports = { createGuard, install, ID };

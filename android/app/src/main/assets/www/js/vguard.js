/* Reads the messages a YouTube player sends to the page, and says whether it is still playing the video we chose. */
(function (root) {
  function parse(raw) {
    var d = raw; if (typeof raw === 'string') { try { d = JSON.parse(raw); } catch (e) { return null; } }
    if (!d || typeof d !== 'object') return null;
    var out = { id: null, state: null };
    if (d.event === 'onStateChange' && typeof d.info === 'number') out.state = d.info;
    if (d.event === 'infoDelivery' && d.info && typeof d.info === 'object') {
      if (typeof d.info.playerState === 'number') out.state = d.info.playerState;
      if (d.info.videoData && typeof d.info.videoData.video_id === 'string') out.id = d.info.videoData.video_id;
    }
    return (out.id === null && out.state === null) ? null : out;
  }
  /* 'wrong' = a different video started, 'ended' = finished (hide the end-screen suggestions), 'ok' otherwise */
  function decide(raw, expectedId) {
    var m = parse(raw); if (!m) return 'ok';
    if (m.id && m.id !== expectedId) return 'wrong';
    if (m.state === 0) return 'ended';
    return 'ok';
  }
  var api = { parse: parse, decide: decide };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.VGuard = api;
})(typeof window !== 'undefined' ? window : this);

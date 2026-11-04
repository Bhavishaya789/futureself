/* Practice answers: take the photo with the PHONE camera and receive it here.
   The PC shows a QR code; the phone opens the FutureSelf photo page (no sign-in), takes the picture with its own camera, and it appears in the answer. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s) { return document.querySelector(s); }
  function acct(op, p) { return window.fsApi && window.fsApi.acct ? window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) throw new Error((r && r.error) || 'Something went wrong'); return r.data; }) : Promise.reject(new Error('Sign in to FutureSelf to use your phone camera.')); }
  var S = null;

  function qrSvg(text) {
    if (typeof qrcode !== 'function') return '';
    var q = qrcode(0, 'M'); q.addData(text); q.make();
    return q.createSvgTag({ cellSize: 6, margin: 3, scalable: true });
  }
  function stop() { if (S && S.t) clearInterval(S.t); S = null; }
  function paint() {
    var b = $('#pcbody'); if (!b || !S) return;
    var n = S.count, full = n >= 4;
    b.innerHTML = '<div class="pcgrid"><div class="pcqr" id="pcqr">' + (S.url ? qrSvg(S.url) : '<div class="empty">Making your code…</div>') + '</div>' +
      '<div class="pcside"><ol class="pcsteps"><li>Point your phone camera at this code</li><li>Tap the link, then <b>Take photo</b></li><li>Photograph your written answer in good light</li></ol>' +
      '<div class="pcstat ' + (n ? 'got' : '') + '" id="pcstat">' + (full ? '✓ All 4 photos received' : n ? '✓ ' + n + ' photo' + (n > 1 ? 's' : '') + ' received. You can send more.' : 'Waiting for your photo…') + '</div>' +
      (S.err ? '<div style="color:var(--bad);font-size:13px;margin-top:6px">' + esc(S.err) + '</div>' : '') + '</div></div>' +
      '<div class="row wrap" style="margin-top:16px"><button class="btn pri" data-act="pcdone">' + (n ? 'Use ' + n + ' photo' + (n > 1 ? 's' : '') : 'Close') + '</button>' + (S.url ? '<button class="btn" data-act="pccopy">Copy link</button>' : '') + '<button class="btn ghost" data-act="pcnew">New code</button></div>' +
      '<p class="muted" style="font-size:12px;margin-top:12px">The photos go only to your own account, wait for you for 20 minutes and are deleted as soon as they arrive here.</p>';
  }
  function open(pi) {
    stop(); S = { pi: pi, count: 0, got: 0, url: '', id: '' };
    H().modal('<div class="pcmodal"><div class="eyebrow">Phone camera</div><h2 style="margin:6px 0 4px">Photograph your answer with your phone</h2><p class="muted" style="margin-bottom:14px">A phone camera is much clearer than a laptop webcam.</p><div id="pcbody"></div></div>');
    paint();
    mk();
  }
  function mk() {
    var me = S; if (!me) return;
    acct('capture', { a: 'new', label: 'Practice answer ' + (+me.pi + 1) }).then(function (r) {
      if (S !== me) return; me.id = r.id; me.url = r.url; me.err = ''; paint();
      me.t = setInterval(function () {
        if (S !== me || !$('#pcbody')) return stop();
        acct('capture', { a: 'poll', id: me.id, have: me.count }).then(function (p) {
          if (S !== me || !p.imgs.length) return;
          var room = H().addDataPhotos(me.pi, p.imgs); me.count = p.count; me.got += p.imgs.length; paint();
          H().toast('Photo received', 'From your phone camera.');
        }).catch(function (e) { if (S === me && /gone|expired/i.test(e.message)) { me.err = 'This code expired. Press New code.'; clearInterval(me.t); paint(); } });
      }, 2200);
    }).catch(function (e) { if (S === me) { me.err = e.message; paint(); } });
  }
  FSX.actions = Object.assign(FSX.actions || {}, {
    pcam: function (el) { open(el.dataset.pi); },
    pcnew: function () { var pi = S && S.pi, id = S && S.id; if (id) acct('capture', { a: 'done', id: id }).catch(function () { }); var keep = S ? S.got : 0; stop(); S = { pi: pi, count: 0, got: keep, url: '', id: '' }; paint(); mk(); },
    pcdone: function () { var id = S && S.id; if (id) acct('capture', { a: 'done', id: id }).catch(function () { }); stop(); H().closeModal(); },
    pccopy: function () { if (!S || !S.url) return; try { navigator.clipboard.writeText(S.url).then(function () { H().toast('Link copied', 'Open it on your phone.'); }); } catch (e) { H().toast('Link', S.url); } }
  });
})();

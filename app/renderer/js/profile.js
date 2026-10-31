/* Profile: your name, a photo and a 3D avatar. Kept on your account, so the PC and the phone always show the same one.
   Needs three.js (global THREE) for the 3D avatar; without it a flat avatar is drawn instead. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s, r) { return (r || document).querySelector(s); }
  function acct(op, p) { return window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) { var e = new Error((r && r.error) || 'Something went wrong'); e.fatal = true; throw e; } return r.data; }); }

  /* ------------------------------------------------------------ 3D avatar ------------------------------------------------------------ */
  var SKIN = ['#FFDFC4', '#F0C8A0', '#E0AC69', '#C68642', '#8D5524', '#5C3A1E'];
  var HAIRC = ['#2B1B12', '#5A3825', '#B5651D', '#E6BE8A', '#C0392B', '#8E9AAF', '#F2F2F2', '#7C5CFF', '#2DE2E6', '#FF6FB5'];
  var TOPC = ['#7C5CFF', '#2DE2E6', '#FF6F61', '#F7B731', '#26C281', '#3B82F6', '#EC4899', '#1F2937', '#E5E7EB', '#8B5CF6'];
  var BG = [['#1b1f4d', '#2a1f5e'], ['#0f3a3a', '#0b5a52'], ['#3b1d3a', '#6b2a55'], ['#1a2f4d', '#27578a'], ['#3a2a10', '#7a5a1c'], ['#10261a', '#1f5a35'], ['#26262b', '#3d3d46'], ['#4a1d1d', '#7d2c2c']];
  var N_HAIR = ['None', 'Short', 'Swept', 'Long', 'Bun', 'Curly', 'Mohawk', 'Buzz'], N_EYES = ['Round', 'Big', 'Sleepy', 'Small'], N_MOUTH = ['Smile', 'Calm', 'Grin', 'Subtle'], N_TOP = ['T-shirt', 'Hoodie', 'Shirt'], N_ACC = ['None', 'Glasses', 'Cap', 'Headphones', 'Shades'];
  var KEYS = ['skin', 'hair', 'hc', 'eyes', 'mouth', 'top', 'tc', 'acc', 'bg'];
  var DEFAULT = { v: 1, skin: 1, hair: 1, hc: 1, eyes: 0, mouth: 0, top: 0, tc: 0, acc: 0, bg: 0 };
  function clean(c) { var o = { v: 1 }; KEYS.forEach(function (k) { var n = Math.round(Number(c && c[k])); o[k] = n >= 0 && n <= 15 ? n : DEFAULT[k]; }); o.skin %= SKIN.length; o.hc %= HAIRC.length; o.tc %= TOPC.length; o.bg %= BG.length; o.hair %= N_HAIR.length; o.eyes %= N_EYES.length; o.mouth %= N_MOUTH.length; o.top %= N_TOP.length; o.acc %= N_ACC.length; return o; }

  /* what the student is studying */
  var TRACKS = [['class9', 'Class 9', 'School (CBSE)'], ['class10', 'Class 10', 'School (CBSE)'], ['class11', 'Class 11', 'School (CBSE)'], ['class12', 'Class 12', 'School (CBSE)'], ['jee', 'JEE Main', 'Entrance exams'], ['neet', 'NEET', 'Entrance exams'], ['btech1', 'B.Tech, Year 1', 'B.Tech'], ['btech2', 'B.Tech, Year 2', 'B.Tech'], ['btech3', 'B.Tech, Year 3', 'B.Tech'], ['btech4', 'B.Tech, Year 4', 'B.Tech']];
  FSX.tracks = TRACKS;
  FSX.trackLabel = function (id) { for (var i = 0; i < TRACKS.length; i++) if (TRACKS[i][0] === id) return TRACKS[i][1]; return ''; };
  FSX.trackOptions = function (sel) { var groups = [], by = {}; TRACKS.forEach(function (t) { if (!by[t[2]]) { by[t[2]] = []; groups.push(t[2]); } by[t[2]].push(t); }); return '<option value="">Choose...</option>' + groups.map(function (g) { return '<optgroup label="' + g + '">' + by[g].map(function (t) { return '<option value="' + t[0] + '"' + (t[0] === sel ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</optgroup>'; }).join(''); };

  var A3 = (function () {
    var api = { ok: false }, T = window.THREE, R, scene, cam, holder, built = '', cache = {}, lastS = 0;
    function init() {
      if (R !== undefined) return !!R;
      R = null; if (!T) return false;
      try {
        R = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        scene = new T.Scene(); cam = new T.PerspectiveCamera(28, 1, 0.1, 50); cam.position.set(0, 0.2, 8.4); cam.lookAt(0, -0.1, 0);
        scene.add(new T.AmbientLight(0xffffff, 0.4));
        var k = new T.DirectionalLight(0xffffff, 0.72); k.position.set(2.5, 3.5, 5); scene.add(k);
        var r1 = new T.DirectionalLight(0x2DE2E6, 0.4); r1.position.set(-4, 1, -2); scene.add(r1);
        var r2 = new T.DirectionalLight(0x7C5CFF, 0.3); r2.position.set(4, -1, -2); scene.add(r2);
        holder = new T.Group(); scene.add(holder);
      } catch (e) { R = null; return false; }
      api.ok = true; return true;
    }
    function mat(hex, rough) { return new T.MeshStandardMaterial({ color: new T.Color(hex), roughness: rough == null ? 0.6 : rough, metalness: 0 }); }
    function shade(hex, f) { var c = new T.Color(hex); c.multiplyScalar(f); return '#' + c.getHexString(); }
    function mesh(g, m, x, y, z) { var o = new T.Mesh(g, m); o.position.set(x || 0, y || 0, z || 0); return o; }
    var HY = 0.55, HA = 0.95, HB = 1.06, HC = 0.98;
    function surf(x, y) { var q = 1 - (x / HA) * (x / HA) - ((y - HY) / HB) * ((y - HY) / HB); return HC * Math.sqrt(Math.max(0.05, q)); }

    function build(c) {
      var g = new T.Group(), skin = SKIN[c.skin], hair = HAIRC[c.hc], top = TOPC[c.tc], i;
      var ms = mat(skin, 0.7), mh = mat(hair, 0.55), mt = mat(top, 0.8), dark = mat('#1b1b26', 0.5);
      /* body */
      var tor = mesh(new T.SphereGeometry(1, 36, 24), mt, 0, -1.75, 0); tor.scale.set(1.45, 1.0, 0.85); g.add(tor);
      g.add(mesh(new T.CylinderGeometry(0.33, 0.4, 0.55, 20), ms, 0, -0.5, 0));
      if (c.top === 1) { var hood = mesh(new T.TorusGeometry(0.5, 0.2, 12, 28), mt, 0, -0.8, 0); hood.rotation.x = Math.PI / 2 - 0.25; g.add(hood); [-0.14, 0.14].forEach(function (x) { g.add(mesh(new T.CylinderGeometry(0.025, 0.025, 0.5, 8), mat('#eeeeee'), x, -1.15, 0.72)); }); }
      if (c.top === 2) {
        [-1, 1].forEach(function (s) { var col = mesh(new T.BoxGeometry(0.32, 0.12, 0.08), mat('#f4f4f8'), s * 0.2, -0.82, 0.55); col.rotation.z = -s * 0.7; g.add(col); });
        g.add(mesh(new T.BoxGeometry(0.12, 0.7, 0.05), mat('#b3263a'), 0, -1.2, 0.75));
      }
      /* head */
      var head = mesh(new T.SphereGeometry(1, 44, 32), ms, 0, HY, 0); head.scale.set(HA, HB, HC); g.add(head);
      [-1, 1].forEach(function (s) { var ear = mesh(new T.SphereGeometry(0.17, 16, 12), ms, s * 0.93, 0.5, 0); ear.scale.set(0.5, 1, 0.8); g.add(ear); });
      /* eyes */
      var er = [0.17, 0.21, 0.17, 0.12][c.eyes], ex = c.eyes === 3 ? 0.3 : 0.37, ey = 0.68;
      [-1, 1].forEach(function (s) {
        var z = surf(ex, ey);
        var w = mesh(new T.SphereGeometry(er, 20, 14), mat('#ffffff', 0.35), s * ex, ey, z - 0.02); w.scale.set(1, c.eyes === 2 ? 0.55 : 1, 0.6); g.add(w);
        var p = mesh(new T.SphereGeometry(er * 0.66, 16, 12), dark, s * ex, ey - (c.eyes === 2 ? 0.01 : 0), z + er * 0.26); p.scale.set(1, c.eyes === 2 ? 0.7 : 1, 0.6); g.add(p);
        var sh = mesh(new T.SphereGeometry(er * 0.17, 8, 6), mat('#ffffff', 0.2), s * ex + er * 0.18, ey + er * 0.2, z + er * 0.62); g.add(sh);
        var b = mesh(new T.BoxGeometry(0.3, 0.065, 0.07), mh, s * ex, ey + er + 0.13, surf(ex, ey + er + 0.13) + 0.0); b.rotation.z = -s * 0.12; g.add(b);
      });
      /* nose and mouth */
      var nose = mesh(new T.SphereGeometry(0.095, 14, 10), mat(shade(skin, 0.93), 0.7), 0, 0.46, surf(0, 0.46) + 0.02); nose.scale.set(1, 0.9, 1.1); g.add(nose);
      var mz = surf(0, 0.27), mm = mat('#7a2e2e', 0.6), mo;
      if (c.mouth === 0) { mo = mesh(new T.TorusGeometry(0.2, 0.03, 10, 24, Math.PI), mm, 0, 0.36, mz - 0.02); mo.rotation.z = Math.PI; g.add(mo); }
      else if (c.mouth === 1) { g.add(mesh(new T.BoxGeometry(0.3, 0.045, 0.05), mm, 0, 0.27, mz)); }
      else if (c.mouth === 2) {
        mo = mesh(new T.CircleGeometry(0.19, 24), mat('#4d1a20', 0.7), 0, 0.28, mz + 0.01); mo.scale.set(1, 0.7, 1); g.add(mo);
        var te = mesh(new T.BoxGeometry(0.3, 0.06, 0.02), mat('#ffffff', 0.4), 0, 0.33, mz + 0.025); g.add(te);
      }
      else { mo = mesh(new T.TorusGeometry(0.12, 0.028, 10, 20, Math.PI), mm, 0, 0.32, mz - 0.02); mo.rotation.z = Math.PI; g.add(mo); }
      /* hair */
      function cap(sc, th, rx) { var h = mesh(new T.SphereGeometry(1, 40, 24, 0, Math.PI * 2, 0, th), mh, 0, HY, 0); h.scale.set(HA * sc, HB * sc, HC * sc); h.rotation.x = rx || 0; return h; }
      if (c.hair === 1) g.add(cap(1.04, Math.PI * 0.56, -0.5));
      else if (c.hair === 2) { g.add(cap(1.04, Math.PI * 0.55, -0.45)); var sw = mesh(new T.SphereGeometry(0.5, 20, 14), mh, -0.22, 1.3, 0.6); sw.scale.set(1.5, 0.5, 0.85); sw.rotation.z = 0.22; sw.rotation.x = -0.4; g.add(sw); }
      else if (c.hair === 3) { g.add(cap(1.05, Math.PI * 0.56, -0.5)); var bk = mesh(new T.SphereGeometry(1, 28, 20), mh, 0, -0.15, -0.35); bk.scale.set(1.0, 1.35, 0.7); g.add(bk); [-1, 1].forEach(function (s) { var lk = mesh(new T.SphereGeometry(0.25, 14, 10), mh, s * 0.93, 0.0, 0.1); lk.scale.set(0.6, 2.0, 0.9); g.add(lk); }); }
      else if (c.hair === 4) { g.add(cap(1.04, Math.PI * 0.56, -0.5)); g.add(mesh(new T.SphereGeometry(0.34, 20, 16), mh, 0, 1.78, -0.12)); }
      else if (c.hair === 5) { var cn = 0; for (i = 0; i < 60 && cn < 20; i++) { var ph = Math.acos(1 - 1.5 * (i + 0.5) / 60), th = i * 2.399; var cx = Math.sin(ph) * Math.cos(th) * 1.0, cy = HY + Math.cos(ph) * 1.05 + 0.05, cz = Math.sin(ph) * Math.sin(th) * 0.92 - 0.1; if (cz > 0.3 && cy < HY + 0.62) continue; cn++; g.add(mesh(new T.SphereGeometry(0.36, 14, 10), mh, cx, cy, cz)); } }
      else if (c.hair === 6) { for (i = 0; i < 6; i++) { var a = -0.9 + i * 0.36; var mo2 = mesh(new T.SphereGeometry(0.2, 12, 10), mh, 0, HY + Math.cos(a) * 1.07, Math.sin(a) * 1.0 - 0.0); mo2.scale.set(0.8, 1.2, 1); g.add(mo2); } }
      else if (c.hair === 7) g.add(cap(1.015, Math.PI * 0.46, -0.55));
      /* extras */
      var z2 = surf(0.37, 0.68);
      if (c.acc === 1) { [-1, 1].forEach(function (s) { g.add(mesh(new T.TorusGeometry(0.22, 0.026, 10, 28), mat('#2a2a35', 0.4), s * 0.37, 0.68, z2 + 0.06)); }); g.add(mesh(new T.BoxGeometry(0.18, 0.03, 0.03), mat('#2a2a35', 0.4), 0, 0.7, z2 + 0.08)); }
      if (c.acc === 4) { [-1, 1].forEach(function (s) { g.add(mesh(new T.BoxGeometry(0.4, 0.24, 0.07), mat('#0b0b12', 0.25), s * 0.37, 0.68, z2 + 0.08)); }); g.add(mesh(new T.BoxGeometry(0.16, 0.04, 0.04), mat('#0b0b12', 0.25), 0, 0.72, z2 + 0.08)); }
      if (c.acc === 2) {
        var dm = mesh(new T.SphereGeometry(1, 36, 20, 0, Math.PI * 2, 0, Math.PI * 0.5), mat('#7C5CFF', 0.7), 0, HY + 0.05, 0); dm.scale.set(HA * 1.07, HB * 1.07, HC * 1.07); dm.rotation.x = -0.3; g.add(dm);
        var br = mesh(new T.CylinderGeometry(0.8, 0.8, 0.09, 28, 1, false, -Math.PI / 2, Math.PI), mat('#5a3fd6', 0.7), 0, 1.0, 0.7); br.scale.set(1, 1, 1.05); br.rotation.x = 0.2; g.add(br);
      }
      if (c.acc === 3) {
        var bd = mesh(new T.TorusGeometry(1.03, 0.06, 10, 36, Math.PI), mat('#22222c', 0.5), 0, HY, 0); g.add(bd);
        [-1, 1].forEach(function (s) { var cp = mesh(new T.CylinderGeometry(0.3, 0.3, 0.22, 24), mat('#22222c', 0.5), s * 1.02, 0.52, 0); cp.rotation.z = Math.PI / 2; g.add(cp); var ring = mesh(new T.CylinderGeometry(0.2, 0.2, 0.235, 24), mat(top, 0.5), s * 1.02, 0.52, 0); ring.rotation.z = Math.PI / 2; g.add(ring); });
      }
      return g;
    }
    function dispose(o) { o.traverse(function (n) { if (n.geometry) n.geometry.dispose(); if (n.material) n.material.dispose(); }); }

    /* draws the avatar (backdrop included) into a 2D canvas */
    function paint(cv, cfg, yaw) {
      cfg = clean(cfg);
      var ctx = cv.getContext('2d'), w = cv.width, h = cv.height, b = BG[cfg.bg], gr = ctx.createLinearGradient(0, 0, w, h);
      gr.addColorStop(0, b[0]); gr.addColorStop(1, b[1]); ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
      if (!init()) return flat(ctx, cfg, w, h);
      var key = JSON.stringify(cfg);
      if (key !== built) { while (holder.children.length) { var o = holder.children[0]; holder.remove(o); dispose(o); } holder.add(build(cfg)); built = key; }
      holder.rotation.y = yaw || 0; holder.rotation.x = 0.04;
      var s = Math.max(64, Math.min(640, Math.max(w, h)));
      if (lastS !== s) { R.setPixelRatio(1); R.setSize(s, s, false); cam.aspect = 1; cam.updateProjectionMatrix(); lastS = s; }
      R.setClearColor(0x000000, 0); R.render(scene, cam);
      ctx.drawImage(R.domElement, 0, 0, s, s, 0, 0, w, h);
    }
    /* no WebGL: a simple flat face so the picture is never empty */
    function flat(ctx, c, w, h) {
      var u = w / 100; ctx.fillStyle = TOPC[c.tc]; ctx.beginPath(); ctx.ellipse(50 * u, 100 * u, 36 * u, 26 * u, 0, 0, 7); ctx.fill();
      ctx.fillStyle = SKIN[c.skin]; ctx.beginPath(); ctx.ellipse(50 * u, 48 * u, 24 * u, 28 * u, 0, 0, 7); ctx.fill();
      if (c.hair) { ctx.fillStyle = HAIRC[c.hc]; ctx.beginPath(); ctx.ellipse(50 * u, 34 * u, 26 * u, 20 * u, 0, Math.PI, 0); ctx.fill(); }
      ctx.fillStyle = '#1b1b26'; [-9, 9].forEach(function (x) { ctx.beginPath(); ctx.arc((50 + x) * u, 48 * u, 3 * u, 0, 7); ctx.fill(); });
      ctx.strokeStyle = '#7a2e2e'; ctx.lineWidth = 2 * u; ctx.beginPath(); ctx.arc(50 * u, 58 * u, 8 * u, 0.2, Math.PI - 0.2); ctx.stroke();
    }
    api.paint = paint;
    api.clean = clean;
    api.url = function (cfg, px) {
      cfg = clean(cfg); var key = JSON.stringify(cfg) + '@' + px; if (cache[key]) return cache[key];
      var cv = document.createElement('canvas'); cv.width = cv.height = px; paint(cv, cfg, 0.12);
      var u = cv.toDataURL('image/png'); cache[key] = u; return u;
    };
    return api;
  })();
  FSX.avatar3d = A3;
  FSX.icons = Object.assign(FSX.icons || {}, { more: '<circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/>' });

  /* ------------------------------------------------------------ small helpers ------------------------------------------------------------ */
  function faceSrc(u, px) { if (!u) return ''; if (u.photo) return u.photo; if (u.avatar) return A3.url(u.avatar, px > 96 ? 288 : 144); return ''; }
  /* a round picture of this person: photo, else 3D avatar, else the first letter */
  FSX.avatarHtml = function (u, px) {
    u = u || {}; px = px || 40; var src = faceSrc(u, px);
    return '<span class="pav" style="width:' + px + 'px;height:' + px + 'px;font-size:' + Math.round(px * 0.42) + 'px">' + (src ? '<img alt="" src="' + src + '">' : esc((u.name || '?').charAt(0).toUpperCase())) + '</span>';
  };
  FSX.meHtml = function (u) { var st = P.st || {}; return FSX.avatarHtml(u, 38) + '<div><b>' + esc((u && u.name) || '') + '</b><span>' + (st.signedIn ? esc(st.email) : 'On this device only') + '</span></div>'; };
  FSX.updateChrome = function () {
    if (!FSX.h) return; var S = H().S, me = $('.side .me'); if (me && S.user) me.innerHTML = FSX.meHtml(S.user);
    var ha = $('.hav'); if (ha && S.user) ha.innerHTML = FSX.avatarHtml(S.user, 46);
  };

  function fileToJpeg(file, px) {
    return new Promise(function (res, rej) {
      if (!file || !/^image\//.test(file.type || '')) return rej(new Error('Please choose a picture.'));
      var fr = new FileReader();
      fr.onerror = function () { rej(new Error('That picture could not be read.')); };
      fr.onload = function () {
        var img = new Image();
        img.onerror = function () { rej(new Error('That picture could not be opened.')); };
        img.onload = function () {
          var s = Math.min(img.width, img.height), c = document.createElement('canvas'); c.width = c.height = px;
          c.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, px, px);
          var q = 0.86, d = c.toDataURL('image/jpeg', q); while (d.length > 80000 && q > 0.4) { q -= 0.1; d = c.toDataURL('image/jpeg', q); }
          res(d);
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  /* ------------------------------------------------------------ avatar from a picture ------------------------------------------------------------ */
  /* colour-only match done on the device (used when the AI is not available): skin, hair and clothes colours */
  function nearest(rgb, list) { var best = 0, bd = 1e9; list.forEach(function (h, i) { var c = [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)], d = 0; for (var k = 0; k < 3; k++) d += (c[k] - rgb[k]) * (c[k] - rgb[k]); if (d < bd) { bd = d; best = i; } }); return { i: best, d: Math.sqrt(bd) }; }
  function localGuess(dataUrl) {
    return new Promise(function (res, rej) {
      var img = new Image(); img.onerror = function () { rej(new Error('That picture could not be opened.')); };
      img.onload = function () {
        var n = 96, c = document.createElement('canvas'); c.width = c.height = n; var x = c.getContext('2d'), sq = Math.min(img.width, img.height);
        x.drawImage(img, (img.width - sq) / 2, (img.height - sq) / 2, sq, sq, 0, 0, n, n);
        function avg(a, b, cc, d) { var px = x.getImageData(Math.round(a * n), Math.round(b * n), Math.max(1, Math.round((cc - a) * n)), Math.max(1, Math.round((d - b) * n))).data, r = 0, g = 0, bl = 0, k = px.length / 4; for (var i = 0; i < px.length; i += 4) { r += px[i]; g += px[i + 1]; bl += px[i + 2]; } return [r / k, g / k, bl / k]; }
        var face = avg(0.38, 0.4, 0.62, 0.62), top = avg(0.34, 0.04, 0.66, 0.16), bot = avg(0.25, 0.9, 0.75, 0.99);
        var corners = [avg(0, 0, 0.1, 0.1), avg(0.9, 0, 1, 0.1)].reduce(function (a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]; });
        function dist(a, b) { return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2])); }
        var sk = nearest(face, SKIN), hr = nearest(top, HAIRC.slice(0, 7)), tp = nearest(bot, TOPC);
        var bald = dist(top, face) < 45 || dist(top, corners) < 35;
        res({ skin: sk.i, hair: bald ? 0 : 1, hc: hr.i, tc: tp.i });
      };
      img.src = dataUrl;
    });
  }
  function note(t, bad) { var el = $('#avnote'); if (el) { el.textContent = t; el.style.color = bad ? 'var(--bad)' : ''; } }
  function matchFrom(dataUrl) {
    note('Reading your picture...');
    return acct('avatarFromPhoto', { photo: dataUrl }).then(function (r) { return { cfg: clean(r.avatar), how: 'ai' }; }, function (e) { return localGuess(dataUrl).then(function (g) { return { cfg: g, how: 'local', why: e.message }; }); })
      .then(function (r) {
        if (r.how === 'ai') { E.cfg = clean(r.cfg); note('Done. This is your avatar from the picture. Change anything you like below.'); }
        else { E.cfg = clean(Object.assign({}, E.cfg, r.cfg)); note('Quick match: skin, hair and clothes colours were matched from your picture. Set the hair style, glasses and the rest yourself. (' + String(r.why || '').replace(/\.$/, '') + '.)'); }
        redrawOpts();
      }).catch(function (e) { note(e.message, true); });
  }

  /* ------------------------------------------------------------ keeping every device the same ------------------------------------------------------------ */
  var P = { st: null, busy: false, last: '' };
  function api(path, opt) { return H().api(path, opt); }
  function patch(body) { return api('/me', { method: 'PATCH', body: body }); }
  function same(me, sv) { return (me.name || '') === (sv.name || '') && (me.track || '') === (sv.track || '') && (me.photo || '') === (sv.photo || '') && JSON.stringify(me.avatar || null) === JSON.stringify(sv.avatar ? clean(sv.avatar) : null); }
  function applyLocal(u) { var S = H().S; S.user = u; FSX.updateChrome(); }
  function refreshView(force) {
    var r = (location.hash || '').replace(/^#\/?/, '').split('?')[0].split('/')[0] || 'home';
    if (r !== 'home' && r !== 'account') return;
    var a = document.activeElement; if (document.body.classList.contains('msheet-open')) return; if (!force && ((a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) || $('#modal-root .overlay'))) return;
    H().go();
  }
  function push(me) {
    var sent = { name: me.name || '', photo: me.photo || '', avatar: me.avatar || null, track: me.track || undefined };
    return acct('profile', sent).then(function (sv) {
      return api('/me').then(function (now) {
        if (now.name !== sent.name || (now.track || undefined) !== sent.track || (now.photo || '') !== sent.photo || JSON.stringify(now.avatar || null) !== JSON.stringify(sent.avatar)) return now; // edited again while sending: the next round sends it
        return patch({ sync: { at: sv.profileAt || Date.now() } });
      });
    });
  }
  function me0track() { var u = H().S.user || {}; return u.track || ''; }
  function pull(sv) {
    return patch({ name: sv.name, photo: sv.photo || '', avatar: sv.avatar || null, track: sv.track || me0track(), sync: { at: sv.profileAt || 0 } }).then(function (u) { applyLocal(u); refreshView(); return u; });
  }
  function sync() {
    if (!window.fsApi || !window.fsApi.acct) P.synced = true;
    if (P.busy || !FSX.h || !window.fsApi || !window.fsApi.acct) return Promise.resolve();
    P.busy = true;
    return acct('status').then(function (st) {
      P.st = st; if (!st.signedIn) return;
      return Promise.all([api('/me'), acct('profile')]).then(function (r) {
        var me = r[0], sv = r[1] || {}, svAt = sv.profileAt || 0, lAt = me.profile_at || 0;
        if (me.profile_dirty) return push(me);
        var adopt = (!me.track && sv.track) ? patch({ track: sv.track, sync: { at: lAt } }).then(function (u) { applyLocal(u); me = u || me; }) : Promise.resolve();
        return adopt.then(function () {
          if (svAt > lAt) return pull(sv);
          if (svAt === 0 && lAt === 0 && !same(me, sv)) {
            if (!me.name || me.name === 'Student') return pull(sv); // first sign-in: take the name from the account
            return push(me);
          }
          if (!me.profile_dirty && same(me, sv) && lAt !== svAt) return patch({ sync: { at: svAt } });
        }).then(function () { if (adopt && !(svAt > lAt)) refreshView(); });
      });
    }).catch(function () { /* offline or server busy: try again next round */ }).then(function () { P.busy = false; P.synced = true; FSX.updateChrome(); });
  }
  FSX.profileSync = sync;
  setTimeout(sync, 1500);
  setInterval(sync, 25000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) sync(); });
  window.addEventListener('focus', function () { sync(); });

  /* ------------------------------------------------------------ profile card (shown on the Account page) ------------------------------------------------------------ */
  var live = { raf: 0 };
  function stopLive() { if (live.raf) cancelAnimationFrame(live.raf); live.raf = 0; }
  function startLive(cv, getCfg, drag) {
    stopLive(); var yaw = 0.25, t0 = performance.now(), vel = 0, down = false, lx = 0;
    if (drag) {
      cv.style.touchAction = 'none';
      cv.onpointerdown = function (e) { down = true; lx = e.clientX; vel = 0; try { cv.setPointerCapture(e.pointerId); } catch (x) { } };
      cv.onpointermove = function (e) { if (!down) return; var d = e.clientX - lx; lx = e.clientX; yaw += d * 0.012; vel = d * 0.012; };
      cv.onpointerup = cv.onpointercancel = function () { down = false; };
    }
    (function f(now) {
      if (!document.body.contains(cv)) { live.raf = 0; return; }
      live.raf = requestAnimationFrame(f);
      if (!down) { yaw += vel; vel *= 0.92; if (Math.abs(vel) < 0.002) yaw += 0.003 * Math.sin((now - t0) / 900) ; }
      A3.paint(cv, getCfg(), Math.max(-1.3, Math.min(1.3, yaw)));
    })(t0);
  }

  /* ------------------------------------------------------------ "what are you studying?" ------------------------------------------------------------ */
  var T = { asked: false };
  function chooserHtml(sel, first) {
    var groups = [], by = {}; TRACKS.forEach(function (t) { if (!by[t[2]]) { by[t[2]] = []; groups.push(t[2]); } by[t[2]].push(t); });
    return '<h2 style="margin-bottom:6px">' + (first ? 'What are you studying?' : 'Change what you are studying') + '</h2><p class="muted" style="margin:0 0 14px">' + (first ? 'FutureSelf shows the right subjects first. You can change this any time in Profile.' : 'Your Learn page will show the subjects for this.') + '</p>' +
      groups.map(function (g) { return '<div class="avrow" style="margin-bottom:14px"><b>' + g + '</b><div class="chips">' + by[g].map(function (t) { return '<button class="chip' + (t[0] === sel ? ' on' : '') + '" data-act="trkset" data-id="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div></div>'; }).join('') +
      '<div class="acts"><button class="btn ghost" data-act="trkskip">' + (first ? 'Not now' : 'Cancel') + '</button></div>';
  }
  function checkTrack() {
    if (T.asked || !FSX.h || !P.synced) return;
    var S = H().S; if (!S.user || S.user.track || S.session || $('#modal-root .overlay')) return;
    var h = location.hash || ''; if (/^#\/(focus|lesson)/.test(h)) return;
    if (/^#\/account/.test(h) && !(P.st && (P.st.signedIn || P.st.skip))) return; // the sign-in screen comes first
    T.asked = true; H().modal(chooserHtml('', true), false);
  }
  setInterval(checkTrack, 2500);

  FSX.profileCard = function (st) {
    var u = H().S.user || {}, signed = !!(st && st.signedIn);
    var big = u.photo ? '<img alt="Your photo" src="' + u.photo + '">' : u.avatar ? '<canvas id="pavlive" width="320" height="320"></canvas>' : '<span class="pletter">' + esc((u.name || '?').charAt(0).toUpperCase()) + '</span>';
    return '<div class="card profcard"><div class="prof-top"><div class="pbig">' + big + '</div><div class="grow"><h2>Your profile</h2>' +
      '<p class="muted" id="pfsync">' + (signed ? 'Saved on your account. It shows the same on your PC and your phone.' : 'Saved on this device. Sign in to show it on your other devices too.') + '</p></div></div>' +
      '<div class="kv" style="margin-bottom:12px"><span>Studying<br><small class="muted">Decides which subjects Learn shows first</small></span><span class="row" style="gap:10px"><b>' + esc(FSX.trackLabel(u.track) || 'Not chosen') + '</b><button class="btn sm" data-act="trkopen">' + (u.track ? 'Change' : 'Choose') + '</button></span></div>' +
      '<div class="fld"><label class="f" for="pfname">Your name</label><input class="in" id="pfname" maxlength="60" autocomplete="name" value="' + esc(u.name || '') + '"></div>' +
      '<div class="pfbtns"><label class="btn"><input type="file" id="pfphoto" accept="image/*" hidden> ' + H().ic('plus') + ' ' + (u.photo ? 'Change photo' : 'Upload photo') + '</label>' +
      (u.photo ? '<button class="btn" data-act="pfnophoto">Remove photo</button>' : '') +
      '<button class="btn" data-act="pfavatar">' + (u.avatar ? 'Edit 3D avatar' : 'Create 3D avatar') + '</button></div>' +
      (u.photo && u.avatar ? '<p class="muted pfnote">Your photo is showing. Remove the photo to show your 3D avatar instead.</p>' : '') +
      '<div class="acerr" id="pferr"></div><div class="row" style="margin-top:6px"><button class="btn pri" data-act="pfsave">Save name</button></div></div>';
  };
  FSX.afterAccount = function () {
    var cv = $('#pavlive'), u = H().S.user || {};
    if (cv && u.avatar) startLive(cv, function () { return (H().S.user || {}).avatar; }, false); else stopLive();
    var f = $('#pfphoto'); if (f) f.onchange = function () {
      var file = f.files && f.files[0]; if (!file) return;
      fileToJpeg(file, 256).then(function (d) { return patch({ photo: d }); }).then(function (nu) { applyLocal(nu); H().toast('Photo saved'); refreshView(true); sync(); })
        .catch(function (e) { var er = $('#pferr'); if (er) er.textContent = e.message; });
    };
  };

  /* ------------------------------------------------------------ the 3D avatar builder ------------------------------------------------------------ */
  var E = { cfg: null };
  FSX.setTrack = function (id) { return patch({ track: id }).then(function (nu) { applyLocal(nu); sync(); return nu; }); };
  function sw(k, list, label) {
    return '<div class="avrow"><b>' + label + '</b><div class="avsw">' + list.map(function (c, i) {
      var col = Array.isArray(c) ? 'linear-gradient(135deg,' + c[0] + ',' + c[1] + ')' : c;
      return '<button class="swc' + (E.cfg[k] === i ? ' on' : '') + '" data-act="avset" data-k="' + k + '" data-v="' + i + '" style="background:' + col + '" aria-label="' + label + ' ' + (i + 1) + '"></button>';
    }).join('') + '</div></div>';
  }
  function ch(k, names, label) {
    return '<div class="avrow"><b>' + label + '</b><div class="chips">' + names.map(function (n, i) { return '<button class="chip' + (E.cfg[k] === i ? ' on' : '') + '" data-act="avset" data-k="' + k + '" data-v="' + i + '">' + n + '</button>'; }).join('') + '</div></div>';
  }
  function builderHtml() {
    return '<h2 style="margin-bottom:6px">Your 3D avatar</h2><p class="muted" style="margin:0 0 10px">Drag the picture to turn it around.</p>' +
      '<div class="avstage"><canvas id="avcv" width="360" height="360"></canvas><div class="row wrap" style="justify-content:center;gap:8px"><label class="btn sm"><input type="file" id="avpic" accept="image/*" hidden> From my picture</label>' + ((H().S.user || {}).photo ? '<button class="btn sm" data-act="avfromphoto">From my profile photo</button>' : '') + '<button class="btn sm" data-act="avrand">Randomize</button></div><p class="muted avnote" id="avnote">Pick a picture and the avatar is made to look like you. It is sent once to read hair and skin colour and is not saved.</p></div>' +
      '<div class="avopts" id="avopts">' + optsHtml() + '</div>' +
      '<div class="acts"><button class="btn" data-act="avcancel">Cancel</button><button class="btn pri" data-act="avsave">Use this avatar</button></div>';
  }
  function optsHtml() {
    return sw('skin', SKIN, 'Skin') + ch('hair', N_HAIR, 'Hair') + sw('hc', HAIRC, 'Hair colour') + ch('eyes', N_EYES, 'Eyes') + ch('mouth', N_MOUTH, 'Mouth') +
      ch('top', N_TOP, 'Clothes') + sw('tc', TOPC, 'Clothes colour') + ch('acc', N_ACC, 'Extras') + sw('bg', BG, 'Backdrop');
  }
  function redrawOpts() { var o = $('#avopts'); if (o) o.innerHTML = optsHtml(); }

  FSX.actions = Object.assign(FSX.actions || {}, {
    trkopen: function () { H().modal(chooserHtml((H().S.user || {}).track || '', false), false); },
    trkset: function (el) { var id = el.dataset.id; FSX.setTrack(id).then(function () { H().closeModal(); H().toast('Saved', 'Showing subjects for ' + FSX.trackLabel(id) + '.'); if (location.hash.replace(/^#\/?/, '').split('/')[0] === 'learn' || !location.hash || location.hash === '#/' || /account/.test(location.hash)) H().go(); }).catch(function (e) { H().toast('Could not save', e.message, true); }); },
    trkskip: function () { H().closeModal(); },
    pfsave: function () {
      var n = ($('#pfname').value || '').trim(), er = $('#pferr'); if (er) er.textContent = '';
      if (n.length < 2) { if (er) er.textContent = 'Your name needs at least 2 letters.'; return; }
      patch({ name: n }).then(function (nu) { applyLocal(nu); H().toast('Name saved', n); sync(); refreshView(true); }).catch(function (e) { if (er) er.textContent = e.message; });
    },
    pfnophoto: function () { patch({ photo: '' }).then(function (nu) { applyLocal(nu); H().toast('Photo removed'); refreshView(true); sync(); }); },
    pfavatar: function () {
      var u = H().S.user || {}; E.cfg = clean(u.avatar || DEFAULT);
      H().modal(builderHtml(), true);
      var cv = $('#avcv'); startLive(cv, function () { return E.cfg; }, true);
      var pf = $('#avpic'); if (pf) pf.onchange = function () { var f = pf.files && pf.files[0]; if (!f) return; note('Reading your picture...'); fileToJpeg(f, 384).then(matchFrom).catch(function (e) { note(e.message, true); }); };
    },
    avset: function (el) { E.cfg[el.dataset.k] = +el.dataset.v; E.cfg = clean(E.cfg); redrawOpts(); },
    avfromphoto: function () { var u = H().S.user || {}; if (u.photo) matchFrom(u.photo); },
    avrand: function () {
      function r(n) { return Math.floor(Math.random() * n); }
      E.cfg = clean({ skin: r(SKIN.length), hair: r(N_HAIR.length), hc: r(HAIRC.length), eyes: r(N_EYES.length), mouth: r(N_MOUTH.length), top: r(N_TOP.length), tc: r(TOPC.length), acc: r(N_ACC.length), bg: r(BG.length) }); redrawOpts();
    },
    avcancel: function () { stopLive(); H().closeModal(); FSX.afterAccount(); },
    avsave: function () {
      var cfg = clean(E.cfg); stopLive();
      patch({ avatar: cfg }).then(function (nu) { applyLocal(nu); H().closeModal(); H().toast('Avatar saved', 'It will show on your other devices too.'); refreshView(true); sync(); });
    }
  });
})();

/* Bhavi - the 3D cartoon guide and face of FutureSelf.
   - greets by name (voice), explains the app, asks a few questions
   - shows a looping "screen recording" style demo for every phone permission
   Needs three.js (already loaded by the app) and tour.js (voice). Falls back gracefully. */
(function () {
  'use strict';
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { } return null; }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var V = function () { return window.FSVoice || { say: function () { }, hush: function () { }, userName: function () { return ''; }, on: function () { return false; }, ok: false }; };

  /* ================= 3D mascot ================= */
  var mascot = null, mood = 'happy', talking = false, beat = 0, waveT = 0, jumpT = 0, ptr = { x: 0, y: 0, on: false };
  addEventListener('pointermove', function (e) { ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true; }, { passive: true });
  document.addEventListener('fs-talk', function (e) { talking = !!e.detail; });
  document.addEventListener('fs-talk-beat', function () { beat = 1; });

  var AARAV = { name: 'Aarav', skin: 0xd8a073, skinD: 0xc48658, hair: 0x1b1330, iris: 0x4a2a14, top: 0x20306a, top2: 0x2de2e6, acc: 0x2de2e6, style: 'quiff', outfit: 'hoodie' };
  function buildHuman(T, v) {
    var P = function (c, rough, cc) { var o = { color: c, roughness: rough == null ? 0.6 : rough, metalness: 0.0 }; if (cc) { o.clearcoat = cc; o.clearcoatRoughness = 0.35; } return new T.MeshPhysicalMaterial(o); };
    var B = function (c) { return new T.MeshBasicMaterial({ color: c }); };
    function sph(r, m, sx, sy, sz, x, y, z, parent) { var s = new T.Mesh(new T.SphereGeometry(r, 40, 30), m); s.scale.set(sx || 1, sy || 1, sz || 1); s.position.set(x || 0, y || 0, z || 0); if (parent) parent.add(s); return s; }
    var cap = T.CapsuleGeometry || T.CylinderGeometry;
    var root = new T.Group(), head = new T.Group(); head.position.set(0, 0.9, 0); root.add(head);
    var skin = P(v.skin, 0.75), hair = P(v.hair, 0.45, 0.5), top = P(v.top, 0.55, 0.3), top2 = P(v.top2, 0.5), acc = P(v.acc, 0.4, 0.4);
    // torso + neck
    var torso = sph(1, top, 0.98, 1.02, 0.62, 0, -1.32, 0, root);
    var neck = new T.Mesh(new T.CylinderGeometry(0.24, 0.27, 0.4, 24), skin); neck.position.set(0, -0.26, 0); root.add(neck);
    // head + ears + nose + cheeks
    sph(1, skin, 1.0, 1.1, 0.97, 0, 0, 0, head);
    [-1, 1].forEach(function (s) { sph(0.17, skin, 0.7, 1, 0.8, s * 0.99, -0.02, -0.02, head); });
    sph(0.085, P(v.skinD, 0.6), 1, 0.9, 0.9, 0, -0.12, 0.98, head);
    var eyes = [], brows = [];
    [-1, 1].forEach(function (s) {
      var g = new T.Group(); g.position.set(s * 0.37, 0.06, 0.88);
      sph(0.19, B(0xffffff), 1, 1.12, 0.45, 0, 0, 0, g);
      var pu = sph(0.115, B(v.iris), 1, 1.05, 0.5, 0, -0.01, 0.07, g);
      sph(0.062, B(0x0e0a1a), 1, 1, 0.5, 0, -0.01, 0.1, pu);
      var hl = sph(0.04, B(0xffffff), 1, 1, 1, 0.045, 0.05, 0.13, pu);
      head.add(g); eyes.push({ g: g, pu: pu, s: s });
      if (v.lash) { var l = new T.Mesh(new T.TorusGeometry(0.2, 0.02, 6, 20, Math.PI * 0.9), B(0x120c20)); l.position.set(0, 0.03, 0.05); l.rotation.z = Math.PI * 0.05; g.add(l); }
      var b = new T.Mesh(new cap(0.034, 0.2, 4, 8), hair); b.rotation.z = Math.PI / 2; b.position.set(s * 0.37, 0.4, 0.93); head.add(b); brows.push({ m: b, s: s });
      var ch = new T.Mesh(new T.SphereGeometry(0.13, 16, 12), new T.MeshBasicMaterial({ color: 0xff8f9f, transparent: true, opacity: 0.3 })); ch.scale.set(1.2, 0.7, 0.3); ch.position.set(s * 0.58, -0.2, 0.8); ch.rotation.y = s * 0.55; head.add(ch);
    });
    var smile = new T.Mesh(new T.TorusGeometry(0.19, 0.03, 10, 28, Math.PI * 0.85), B(0x8a2f45)); smile.rotation.z = Math.PI * 1.075; smile.position.set(0, -0.36, 0.95); head.add(smile);
    var mouth = new T.Group(); mouth.position.set(0, -0.44, 0.93); sph(0.19, B(0x5a1830), 1, 1, 0.4, 0, 0, 0, mouth); sph(0.1, B(0xe0607a), 1.2, 0.6, 0.4, 0, -0.08, 0.04, mouth);
    var teeth = new T.Mesh(new T.BoxGeometry(0.26, 0.05, 0.05), B(0xffffff)); teeth.position.set(0, 0.1, 0.1); mouth.add(teeth); mouth.visible = false; head.add(mouth);
    // hair variants
    if (v.style === 'quiff') {
      sph(1.04, hair, 1.02, 0.86, 1.04, 0, 0.4, -0.1, head);
      sph(0.62, hair, 1.35, 0.62, 1, 0.05, 1.0, 0.45, head).rotation.z = -0.18;
      [-1, 1].forEach(function (s) { sph(0.2, hair, 0.7, 1.3, 0.8, s * 0.97, 0.18, 0.12, head); });
    } else if (v.style === 'long') {
      sph(1.04, hair, 1.03, 0.88, 1.05, 0, 0.38, -0.1, head);
      sph(1.0, hair, 1.12, 1.55, 0.6, 0, -0.55, -0.55, head);
      sph(0.62, hair, 1.25, 0.5, 0.9, 0.22, 0.98, 0.55, head).rotation.z = 0.28;
      [-1, 1].forEach(function (s) { sph(0.28, hair, 0.8, 2.2, 0.8, s * 1.0, -0.62, 0.05, head); });
    } else {
      sph(1.02, hair, 1.0, 0.78, 1.02, 0, 0.48, -0.1, head);
      var ps = [[-.7, .95, .2], [-.35, 1.12, .3], [0, 1.18, .35], [.35, 1.12, .3], [.7, .95, .2], [-.9, .6, 0], [.9, .6, 0], [-.55, 1.05, -.2], [.1, 1.2, -.1], [.55, 1.05, -.2], [-.2, 1.1, .6], [.25, 1.08, .6]];
      ps.forEach(function (p) { sph(0.3, hair, 1, 1, 1, p[0], p[1], p[2], head); });
    }
    if (v.glasses) {
      [-1, 1].forEach(function (s) { var r = new T.Mesh(new T.TorusGeometry(0.26, 0.026, 10, 36), P(0x1c1830, 0.3, 0.6)); r.position.set(s * 0.37, 0.06, 0.99); head.add(r); });
      var br = new T.Mesh(new T.CylinderGeometry(0.02, 0.02, 0.14, 8), P(0x1c1830, 0.3)); br.rotation.z = Math.PI / 2; br.position.set(0, 0.1, 0.99); head.add(br);
    }
    // outfit details
    if (v.outfit === 'hoodie') {
      var hood = new T.Mesh(new T.TorusGeometry(0.5, 0.17, 16, 36), top); hood.rotation.x = Math.PI / 2 - 0.25; hood.position.set(0, -0.38, -0.05); root.add(hood);
      var zip = new T.Mesh(new T.BoxGeometry(0.035, 1.3, 0.04), acc); zip.position.set(0, -1.38, 0.62); root.add(zip);
      [-1, 1].forEach(function (s) { var str = new T.Mesh(new T.BoxGeometry(0.16, 1.2, 0.05), acc); str.position.set(s * 0.52, -1.1, 0.6); str.rotation.z = s * 0.1; root.add(str); });
      var hp = new T.Mesh(new T.TorusGeometry(0.62, 0.07, 12, 40, Math.PI * 1.1), P(0x0f0b24, 0.4, 0.5)); hp.rotation.set(Math.PI / 2 + 0.2, 0, Math.PI * 0.95); hp.position.set(0, -0.45, 0.1); root.add(hp);
      [-1, 1].forEach(function (s) { var cup = new T.Mesh(new T.CylinderGeometry(0.2, 0.2, 0.16, 28), acc); cup.rotation.z = Math.PI / 2; cup.position.set(s * 0.62, -0.5, 0.15); root.add(cup); });
    } else if (v.outfit === 'jacket') {
      var shirt = sph(0.5, P(0xf1eefc, 0.85), 0.9, 1.2, 0.3, 0, -0.9, 0.58, root);
      var col = new T.Mesh(new T.TorusGeometry(0.34, 0.07, 10, 28, Math.PI), P(0xf1eefc, 0.85)); col.position.set(0, -0.5, 0.45); col.rotation.set(0.5, 0, Math.PI); root.add(col);
      var badge = sph(0.11, acc, 1, 1, 0.4, 0.55, -1.0, 0.62, root);
      [-1, 1].forEach(function (s) { var l = new T.Mesh(new T.BoxGeometry(0.2, 1.0, 0.06), top2); l.position.set(s * 0.32, -1.0, 0.6); l.rotation.z = s * -0.35; root.add(l); });
    } else {
      var sh = sph(0.55, P(0xf1eefc, 0.85), 0.85, 1.25, 0.3, 0, -0.95, 0.58, root);
      [-1, 1].forEach(function (s) { var lanyard = new T.Mesh(new T.BoxGeometry(0.06, 1.0, 0.03), acc); lanyard.position.set(s * 0.22, -0.95, 0.63); lanyard.rotation.z = s * -0.2; root.add(lanyard); });
      var card = new T.Mesh(new T.BoxGeometry(0.36, 0.5, 0.05), P(0xffffff, 0.4)); card.position.set(0, -1.62, 0.68); root.add(card);
      var cs = new T.Mesh(new T.BoxGeometry(0.28, 0.1, 0.06), acc); cs.position.set(0, -1.5, 0.7); root.add(cs);
      [-1, 1].forEach(function (s) { var l = new T.Mesh(new T.BoxGeometry(0.2, 1.0, 0.06), top2); l.position.set(s * 0.46, -0.95, 0.6); l.rotation.z = s * -0.3; root.add(l); });
    }
    // arms
    var arms = [];
    [-1, 1].forEach(function (s) {
      var g = new T.Group(); g.position.set(s * 1.0, -0.78, 0.05);
      var sl = new T.Mesh(new cap(0.19, 0.62, 8, 16), top); sl.position.y = -0.4; g.add(sl);
      var cuff = new T.Mesh(new T.CylinderGeometry(0.2, 0.2, 0.08, 20), top2); cuff.position.y = -0.84; g.add(cuff);
      var hand = sph(0.18, skin, 1, 1.1, 0.9, 0, -1.0, 0.02, g);
      sph(0.07, skin, 1, 1.4, 1, s * -0.15, -0.94, 0.08, g);
      g.rotation.z = s * 0.1; root.add(g); arms.push({ g: g, s: s });
    });
    return { root: root, head: head, eyes: eyes, brows: brows, smile: smile, mouth: mouth, arms: arms, human: true };
  }
  function buildMascot(size) {
    var T = window.THREE; if (!T) throw new Error('no three');
    var cv = document.createElement('canvas'); cv.className = 'fu-cv'; cv.title = 'Tap me!';
    var r = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); r.setSize(size, size, false); cv.style.width = size + 'px'; cv.style.height = size + 'px';
    var sc = new T.Scene(), cam = new T.PerspectiveCamera(30, 1, 0.1, 50); cam.position.set(0, 0.3, 8.3); cam.lookAt(0, 0.2, 0);
    sc.add(new T.HemisphereLight(0xcfe8ff, 0x3a2a6a, 0.55));
    var key = new T.DirectionalLight(0xffffff, 0.75); key.position.set(3, 5, 7); sc.add(key);
    var rim = new T.DirectionalLight(0x2de2e6, 0.7); rim.position.set(-5, 2, -3); sc.add(rim);
    var fill = new T.DirectionalLight(0x8f7cff, 0.45); fill.position.set(4, -1, 3); sc.add(fill);
    var rig = buildHuman(T, AARAV), root = rig.root, head = rig.head, eyes = rig.eyes, brows = rig.brows, smile = rig.smile, mouth = rig.mouth, arms = rig.arms;
    sc.add(root);
    var cur = { brow: 0, rot: 0, eye: 1, look: 0 }, nextBlink = 1.5, blink = 0, t0 = performance.now(), open = 0;
    function target() {
      return { happy: { brow: 0, rot: 0.1, eye: 1, look: 0 }, excited: { brow: 0.1, rot: 0.25, eye: 1.12, look: 0 }, think: { brow: 0.06, rot: -0.3, eye: 1, look: 1 }, oops: { brow: 0.03, rot: -0.45, eye: 1.05, look: 0 } }[mood] || { brow: 0, rot: 0, eye: 1, look: 0 };
    }
    function frame(now) {
      requestAnimationFrame(frame);
      if (document.hidden || !cv.isConnected || !cv.offsetWidth) return;
      var t = (now - t0) / 1000, tg2 = target();
      ['brow', 'rot', 'eye', 'look'].forEach(function (q) { cur[q] += (tg2[q] - cur[q]) * 0.12; });
      var jy = 0, sq = 1;
      if (jumpT > 0) { jumpT -= 0.045; var u = 1 - jumpT; jy = Math.sin(u * Math.PI) * 0.45; sq = 1 + Math.sin(u * Math.PI * 2) * 0.03; if (jumpT < 0) jumpT = 0; }
      root.position.y = Math.sin(t * 1.5) * 0.04 + jy; root.scale.set(1 / sq, sq, 1 / sq); root.rotation.z = Math.sin(t * 0.8) * 0.012;
      var rc = cv.getBoundingClientRect(), dx = ptr.on ? (ptr.x - (rc.left + rc.width / 2)) / Math.max(innerWidth, 1) * 2.4 : 0, dy = ptr.on ? (ptr.y - (rc.top + rc.height / 2)) / Math.max(innerHeight, 1) * 2.4 : 0;
      dx = Math.max(-0.5, Math.min(0.5, dx)); dy = Math.max(-0.35, Math.min(0.35, dy));
      head.rotation.y += ((dx * 0.5 + cur.look * 0.25) - head.rotation.y) * 0.1;
      head.rotation.x += ((dy * 0.5) + (talking ? Math.sin(t * 7) * 0.025 : 0) - head.rotation.x) * 0.1;
      head.rotation.z = Math.sin(t * 1.1) * 0.02 + (mood === 'think' ? -0.1 : 0) + (mood === 'oops' ? 0.08 : 0);
      eyes.forEach(function (e) { e.pu.position.x = dx * 0.08; e.pu.position.y = -0.01 - dy * 0.06 + cur.look * 0.03; });
      nextBlink -= 0.016; if (nextBlink < 0 && blink <= 0) { blink = 1; nextBlink = 2 + Math.random() * 3; }
      var bl = 1; if (blink > 0) { blink -= 0.12; bl = Math.max(0.08, Math.abs(blink - 0.5) * 2); if (blink <= 0) { blink = 0; bl = 1; } }
      eyes.forEach(function (e) { e.g.scale.set(cur.eye, cur.eye * bl, cur.eye); });
      brows.forEach(function (b) { b.m.position.y = 0.4 + cur.brow * 0.5; b.m.rotation.z = Math.PI / 2 + b.s * cur.rot * -0.5; });
      beat *= 0.86; var want = talking ? 0.3 + 0.35 * Math.abs(Math.sin(t * 13)) + beat * 0.4 : (mood === 'excited' ? 0.3 : 0);
      open += (want - open) * 0.35; var show = open > 0.09; mouth.visible = show; smile.visible = !show;
      if (show) mouth.scale.set(1.0 + open * 0.15, 0.3 + open * 1.0, 1);
      var wv = waveT > 0; if (wv) waveT -= 0.012;
      arms.forEach(function (a) {
        var rest = a.s * (0.1 + Math.sin(t * 1.5 + a.s) * 0.025) + (talking ? a.s * Math.sin(t * 6 + a.s) * 0.07 : 0);
        var tgt = (a.s === 1 && wv) ? 2.5 + Math.sin(t * 11) * 0.28 : rest;
        a.g.rotation.z += (tgt - a.g.rotation.z) * 0.2;
      });
      r.render(sc, cam);
    }
    requestAnimationFrame(frame);
    cv.addEventListener('click', function () { jumpT = 1; mood = 'excited'; waveT = 1; setTimeout(function () { if (!talking) mood = 'happy'; }, 1400); });
    return { el: cv, setSize: function (s) { r.setSize(s, s, false); cv.style.width = s + 'px'; cv.style.height = s + 'px'; } };
  }
  function getMascot(size) {
    if (!mascot) { try { mascot = buildMascot(size); } catch (e) { mascot = { el: el('<div class="fu-cv fu-fb">🤖</div>'), setSize: function () { } }; } }
    mascot.setSize(size); return mascot;
  }
  var FX = {
    mood: function (m) { mood = m; }, wave: function () { waveT = 1; }, jump: function () { jumpT = 1; },
    talkFor: function (ms) { talking = true; clearTimeout(FX._tt); FX._tt = setTimeout(function () { talking = false; }, ms); }
  };

  /* ================= CSS ================= */
  var css = '' +
    '.fu-ov{position:fixed;inset:0;z-index:10040;background:rgba(4,5,14,.8);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:12px;animation:ftF .3s}' +
    '.fu-card{width:min(540px,100%);max-height:96vh;overflow:auto;background:linear-gradient(165deg,#191d40,#0b0e2b);border:1px solid rgba(124,92,255,.4);border-radius:30px;padding:14px 22px 20px;box-shadow:0 24px 90px rgba(0,0,0,.7),0 0 70px rgba(124,92,255,.2);animation:ftU .45s cubic-bezier(.2,.8,.2,1);position:relative}' +
    '.fu-top{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#9aa0c8}' +
    '.fu-stage{display:flex;justify-content:center;margin-top:-2px;min-height:240px}' +
    '.fu-cv{display:block;cursor:pointer;-webkit-mask-image:linear-gradient(#000 82%,transparent);mask-image:linear-gradient(#000 82%,transparent)}.fu-fb{font-size:90px;text-align:center;animation:ftBob 2s ease-in-out infinite}' +
    '@keyframes ftBob{50%{transform:translateY(-8px)}}' +
    '.fu-bub{position:relative;background:#fff;color:#1b1236;border-radius:20px;padding:14px 16px;font-size:15px;line-height:1.5;font-weight:600;margin:6px 0 12px;min-height:64px;animation:ftU .35s both}' +
    '.fu-bub:before{content:"";position:absolute;top:-9px;left:50%;margin-left:-9px;border:9px solid transparent;border-top:0;border-bottom-color:#fff}' +
    '.fu-feat{display:flex;gap:12px;align-items:center;background:rgba(255,255,255,.06);border-radius:20px;padding:14px;margin-bottom:12px;animation:ftU .4s both}.fu-feat b{font-size:34px}.fu-feat div{font-size:13px;color:#b8bde0;line-height:1.45}.fu-feat h4{margin:0 0 2px;color:#fff;font-size:15px}' +
    '.fu-ch{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}.fu-ch button{flex:1 1 auto;padding:10px 14px;border-radius:16px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:#fff;font-weight:600;font-size:14px;cursor:pointer;transition:all .18s}' +
    '.fu-ch button:hover{transform:translateY(-2px);border-color:#2de2e6}.fu-ch button.sel{background:linear-gradient(90deg,#15b8bd,#6a5be0);border-color:transparent;transform:scale(1.03)}' +
    '.fu-foot{display:flex;align-items:center;gap:8px}.fu-dots{display:flex;gap:4px;flex:1;flex-wrap:wrap}.fu-dots i{width:6px;height:6px;border-radius:50%;background:#2a3060;transition:all .3s}.fu-dots i.on{background:#2de2e6;width:16px;border-radius:5px}.fu-dots i.dn{background:#6a5be0}' +
    '.fu-foot button,.fu-top button{padding:8px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:#fff;font-weight:600;cursor:pointer}.fu-foot button.pri{background:linear-gradient(90deg,#15b8bd,#6a5be0);border:0}.fu-foot button:disabled{opacity:.4;cursor:default}' +
    '.fu-note{margin-top:12px;padding:9px 12px;border-radius:14px;background:rgba(255,200,87,.09);border:1px solid rgba(255,200,87,.35);color:#ffe2a6;font-size:12px;line-height:1.45}' +
    /* wizard coach */
    '.fu-wz{display:flex;flex-direction:column;gap:10px;margin:0 0 14px}.fu-wz-top{display:flex;align-items:center;gap:10px}.fu-wz .fu-bub{margin:0;flex:1;font-size:13.5px;min-height:0;padding:10px 12px}.fu-wz .fu-bub:before{top:50%;left:-9px;margin:-9px 0 0;border:9px solid transparent;border-left:0;border-right-color:#fff}' +
    '.fu-clip{position:relative;height:190px;border-radius:20px;overflow:hidden;background:#0a0d26;border:1px solid rgba(124,92,255,.35);box-shadow:0 10px 30px rgba(0,0,0,.4)}.fu-clip video{width:100%;height:100%;object-fit:cover;display:block}' +
    '.fu-rec{position:absolute;top:8px;left:10px;z-index:5;font-size:10px;letter-spacing:.08em;color:#fff;display:flex;align-items:center;gap:5px;background:rgba(0,0,0,.45);padding:3px 8px;border-radius:12px}.fu-rec i{width:7px;height:7px;border-radius:50%;background:#ff4d6d;animation:ftBl 1s infinite}@keyframes ftBl{50%{opacity:.2}}' +
    '.fu-scr{position:absolute;inset:0;background:#f4f6fb;color:#1b1f3a;font-family:system-ui,sans-serif}.fu-sbar{height:24px;background:#e6e9f4;font-size:10px;display:flex;justify-content:flex-end;gap:6px;padding:5px 12px;color:#444}' +
    '.fu-title{font-size:15px;font-weight:700;padding:8px 14px 4px}.fu-row{display:flex;align-items:center;justify-content:space-between;padding:9px 14px;font-size:12.5px;border-bottom:1px solid #e1e5f2;transition:background .2s}.fu-row.hot{background:#e8f0ff}' +
    '.fu-sw{width:34px;height:18px;border-radius:10px;background:#b9bfd6;position:relative;transition:background .3s;flex:none}.fu-sw:after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#fff;transition:left .3s}.fu-sw.on{background:#6a5be0}.fu-sw.on:after{left:18px}' +
    '.fu-rd{width:16px;height:16px;border-radius:50%;border:2px solid #9aa1bd;flex:none;position:relative}.fu-rd.on{border-color:#6a5be0}.fu-rd.on:after{content:"";position:absolute;inset:3px;border-radius:50%;background:#6a5be0}' +
    '.fu-dim{position:absolute;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;animation:ftF .25s}.fu-dlg{width:82%;background:#fff;border-radius:18px;padding:12px 14px;font-size:12.5px;box-shadow:0 10px 30px rgba(0,0,0,.35)}.fu-dlg p{margin:0 0 10px;font-weight:600}.fu-dbt{display:flex;justify-content:flex-end;gap:8px}.fu-dbt span{padding:6px 12px;border-radius:12px;font-weight:700;color:#6a5be0;transition:background .2s}.fu-dbt span.hot{background:#e8f0ff}' +
    '.fu-tap{position:absolute;z-index:6;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:rgba(106,91,224,.35);border:2px solid #6a5be0;transition:left .7s cubic-bezier(.4,0,.2,1),top .7s cubic-bezier(.4,0,.2,1);pointer-events:none}.fu-tap.go{animation:ftRip .5s}@keyframes ftRip{50%{transform:scale(.6)}100%{transform:scale(1.5);opacity:.3}}' +
    '.fu-cap{font-size:12.5px;color:#cfd3f5;text-align:center;margin-top:6px;min-height:18px;font-weight:600}' +
    '@media (max-width:860px){.fu-card{padding:12px 16px 16px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ================= onboarding ================= */
  var TTS = ('speechSynthesis' in window) && window.SpeechSynthesisUtterance;
  var typer;
  function bubbleSay(bub, text, withVoice) {
    clearInterval(typer); bub.textContent = ''; var i = 0, full = String(text);
    bub.style.animation = 'none'; void bub.offsetWidth; bub.style.animation = '';
    typer = setInterval(function () { i += 2; bub.textContent = full.slice(0, i); if (i >= full.length) clearInterval(typer); }, 28);
    if (withVoice) {
      var v = V();
      if (v.ok && v.on()) v.say(full); else FX.talkFor(Math.min(full.length * 55, 6000));
    }
  }
  var NET = 'Using your laptop and phone together? Connect BOTH to a good, stable internet connection. Study content and videos also need good internet quality.';
  function intro(opts) {
    opts = opts || {}; var v = V(), n = v.userName ? v.userName() : '', ans = {}, saved = null;
    try { saved = JSON.parse(ls('fs_onb') || 'null'); } catch (e) { }
    var nm = n ? esc(n) : 'there';
    var S = [
      { say: 'Hi ' + nm + '! I am Bhavi, your study guide and the face of FutureSelf. I am so happy to meet you!', mood: 'excited', wave: 1 },
      { say: 'FutureSelf helps you study one topic at a time, without distractions. You choose your goal, make a timetable, and start a focus session. Your phone and other apps stay quiet until the session ends.', mood: 'happy' },
      { f: ['📚', 'Learn topic by topic', 'Every lesson is full of pictures and 3D visuals, with formulas and over a hundred practice questions.'], say: 'First, you learn topic by topic. Every lesson is full of pictures and three D visuals, with formulas and over a hundred practice questions.' },
      { f: ['⏰', 'Timetable and reminders', 'Plan the subject, the day and the minutes. I will remind you on your phone.'], say: 'Next, a timetable. Plan the subject, the day and the minutes, and I will remind you on your phone.' },
      { f: ['🔒', 'Focus lock', 'Start a session on your laptop or phone, and the other device locks too. Nothing pulls you away.'], say: 'Then, the focus lock. Start a session on your laptop or your phone, and the other device locks too, so nothing pulls you away.' },
      { f: ['🏆', 'Progress and challenges', 'Grow your streak, practise real previous year questions and challenge a friend.'], say: 'And finally, progress. Grow your streak, practise real previous year questions, and challenge a friend.' },
      { say: 'One small request. If you use your laptop and phone together, please connect both to a good, stable internet connection. Videos and study content also need good internet quality.', mood: 'happy', net: 1 }
    ];
    if (!saved) S = S.concat([
      { key: 'goal', q: 'Now I would love to know you better. What are you preparing for?', ch: ['Class 9–12', 'JEE', 'NEET', 'B.Tech', 'Government exams', 'CA', 'Something else'], rep: function (a) { return 'Wonderful, ' + a + '! I will help you prepare step by step.'; } },
      { key: 'daily', q: 'How long would you like to study each day?', ch: ['30 minutes', '1 hour', '2 hours', '3 hours or more'], rep: function () { return 'Perfect. Small, regular sessions work best.'; } },
      { key: 'time', q: 'When do you study best?', ch: ['Morning', 'Afternoon', 'Evening', 'Late night'], rep: function () { return 'Good to know. I will remind you at the right time.'; } },
      { key: 'distract', q: 'What distracts you the most?', ch: ['Calls and chats', 'Social media', 'Reels and Shorts', 'Games', 'Nothing much'], rep: function (a) { return /Reels/.test(a) ? 'Do not worry. The focus lock can block Shorts and Reels for you.' : 'Do not worry. The focus lock will help you stay on track.'; } },
      { key: 'lang', q: 'Which language do you like for explanations?', ch: ['English', 'हिन्दी', 'Both'], rep: function () { return 'Noted. Hindi and English content are both there for you.'; } }
    ]);
    S.push({ end: 1, say: 'All done, ' + nm + '! Thank you. Now, let me show you around.', mood: 'excited', wave: 1 });
    var i = 0, o = el('<div class="fu-ov"><div class="fu-card"><div class="fu-top"><span>Meet Bhavi</span><button id="fuSk">Skip</button></div><div class="fu-stage"></div><div class="fu-bub"></div><div class="fu-body"></div><div class="fu-foot"><div class="fu-dots"></div><button id="fuB">Back</button><button class="pri" id="fuN">Next</button></div></div></div>');
    document.body.appendChild(o);
    var stage = $('.fu-stage', o), bub = $('.fu-bub', o), body = $('.fu-body', o), dots = $('.fu-dots', o), bN = $('#fuN', o), bB = $('#fuB', o);
    stage.appendChild(getMascot(240).el);
    function close(tour) { clearInterval(typer); v.hush && v.hush(); talking = false; if (ans.goal || Object.keys(ans).length) { ans.at = Date.now(); ls('fs_onb', JSON.stringify(ans)); document.dispatchEvent(new CustomEvent('fs-onboarding', { detail: ans })); } ls('fs_tour_v1', '1'); o.remove(); if (tour && opts.onTour) opts.onTour(); }
    function show(k) {
      i = k; var s = S[k]; body.innerHTML = '';
      dots.innerHTML = S.map(function (_, q) { return '<i class="' + (q === k ? 'on' : q < k ? 'dn' : '') + '"></i>'; }).join('');
      bB.style.visibility = k ? 'visible' : 'hidden'; bN.disabled = false; bN.textContent = s.end ? 'Show me around' : 'Next';
      FX.mood(s.mood || 'happy'); if (s.wave) FX.wave(); if (s.f) FX.jump();
      if (s.f) body.appendChild(el('<div class="fu-feat"><b>' + s.f[0] + '</b><div><h4>' + esc(s.f[1]) + '</h4>' + esc(s.f[2]) + '</div></div>'));
      if (s.net) body.appendChild(el('<div class="fu-note">📶 ' + NET + '</div>'));
      if (s.q) {
        FX.mood('think'); bN.disabled = true; bN.textContent = 'Next';
        var ch = el('<div class="fu-ch"></div>'); s.ch.forEach(function (c) {
          var b = document.createElement('button'); b.textContent = c; b.onclick = function () {
            ans[s.key] = c; [].forEach.call(ch.children, function (x) { x.classList.remove('sel'); }); b.classList.add('sel');
            FX.mood('excited'); FX.jump(); bubbleSay(bub, s.rep(c), true); bN.disabled = false; setTimeout(function () { FX.mood('happy'); }, 1800);
          }; ch.appendChild(b);
        }); body.appendChild(ch);
      }
      bubbleSay(bub, s.q || s.say, true);
    }
    bN.onclick = function () { if (S[i].end) return close(true); show(i + 1); };
    bB.onclick = function () { if (i) show(i - 1); };
    $('#fuSk', o).onclick = function () { close(false); };
    show(0);
  }

  /* ================= permission "screen recordings" ================= */
  var L = function (t, o) { o = o || {}; o.t = t; return o; };
  var DEMOS = {
    notifications: [{ d: 'Allow FutureSelf to send you notifications?', b: ['Don’t allow', 'Allow'], tap: 1, cap: 'Tap  Allow' }],
    call: [{ d: 'Allow FutureSelf to make and manage phone calls?', b: ['Don’t allow', 'Allow'], tap: 1, cap: 'Tap  Allow  (so emergency calls work)' }],
    callguard: [{ title: 'Default apps', rows: [L('Browser app'), L('Caller ID & spam', { tap: 1 }), L('SMS app')], cap: '1 · Open  Caller ID & spam' }, { title: 'Caller ID & spam', rows: [L('None', { rd: 1 }), L('FutureSelf', { rd: 1, tap: 1 })], cap: '2 · Choose  FutureSelf' }],
    dnd: [{ title: 'Do Not Disturb access', rows: [L('Calendar'), L('FutureSelf', { sw: 1, tap: 1 }), L('Messages')], cap: '1 · Switch on  FutureSelf' }, { d: 'Allow Do Not Disturb access for FutureSelf?', b: ['Don’t allow', 'Allow'], tap: 1, cap: '2 · Tap  Allow' }],
    notifaccess: [{ title: 'Notification access', rows: [L('Android System'), L('FutureSelf', { sw: 1, tap: 1 }), L('Gmail')], cap: '1 · Switch on  FutureSelf' }, { d: 'Allow FutureSelf to read notifications?', b: ['Cancel', 'Allow'], tap: 1, cap: '2 · Tap  Allow' }],
    overlay: [{ title: 'Display over other apps', rows: [L('Chrome'), L('FutureSelf', { sw: 1, tap: 1 }), L('WhatsApp')], cap: 'Switch on  FutureSelf' }],
    accessibility: [{ title: 'Accessibility', rows: [L('Screen reader'), L('Installed apps', { tap: 1 }), L('Text and display')], cap: '1 · Open  Installed apps' }, { title: 'Installed apps', rows: [L('Other app'), L('FutureSelf', { tap: 1 })], cap: '2 · Tap  FutureSelf' }, { title: 'FutureSelf', rows: [L('Use FutureSelf', { sw: 1, tap: 1 })], cap: '3 · Switch  Use FutureSelf  on' }, { d: 'Allow FutureSelf to have full control of your device?', b: ['Deny', 'Allow'], tap: 1, cap: '4 · Tap  Allow' }],
    battery: [{ d: 'Let FutureSelf always run in the background?', b: ['Deny', 'Allow'], tap: 1, cap: 'Tap  Allow' }],
    autostart: [{ title: 'Autostart', rows: [L('Other app'), L('FutureSelf', { sw: 1, tap: 1 }), L('Another app')], cap: 'Switch on  FutureSelf' }],
    popup: [{ title: 'Other permissions', rows: [L('Install apps'), L('Display pop-up windows while running in the background', { sw: 1, tap: 1 }), L('Show on lock screen')], cap: 'Allow  pop-ups while in the background' }]
  };
  var COACH = {
    notifications: 'Tap Allow on the pop-up. It lets me remind you to study.', call: 'Tap Allow on the pop-up. This keeps emergency calls working during a session.',
    callguard: 'Pick FutureSelf in the list. Calls from your saved emergency contacts will always come through.', dnd: 'Switch FutureSelf on, then tap Allow.',
    notifaccess: 'Switch FutureSelf on, then tap Allow. Other apps stay quiet during a session.', overlay: 'Find FutureSelf in the list and switch it on.',
    accessibility: 'This one has a few taps. Just follow my finger, step by step.', battery: 'Tap Allow so your reminders always arrive on time.',
    autostart: 'Find FutureSelf in the list and switch it on.', popup: 'Open this setting and choose Allow.'
  };
  function demoClip(id) {
    var frames = DEMOS[id]; if (!frames) return null;
    var box = el('<div><div class="fu-clip"><div class="fu-rec"><i></i>HOW TO</div><div class="fu-vid"></div></div><div class="fu-cap"></div></div>');
    var clip = $('.fu-clip', box), cap = $('.fu-cap', box), vid = $('.fu-vid', box), alive = true, timers = [];
    function later(f, ms) { timers.push(setTimeout(function () { if (alive && box.isConnected) f(); }, ms)); }
    // real recording, if the team drops one in data/guide/perm-<id>.mp4
    var vd = document.createElement('video'); vd.muted = true; vd.loop = true; vd.autoplay = true; vd.playsInline = true; vd.src = 'data/guide/perm-' + id + '.mp4';
    var useVideo = false; vd.onloadeddata = function () { useVideo = true; alive = false; vid.innerHTML = ''; vid.appendChild(vd); var s = $('.fu-scr', clip); if (s) s.remove(); var tp = $('.fu-tap', clip); if (tp) tp.remove(); vd.play().catch(function () { }); };
    vd.onerror = function () { }; vid.appendChild(vd); vd.style.display = 'none';
    var tap = el('<div class="fu-tap" style="left:60%;top:110%"></div>'); clip.appendChild(tap);
    function render(f) {
      var old = $('.fu-scr', clip); if (old) old.remove();
      var h = '<div class="fu-scr"><div class="fu-sbar"><span>10:21</span><span>5G</span><span>79%</span></div>';
      if (f.d) h += '<div class="fu-title" style="opacity:.25">Settings</div><div class="fu-dim"><div class="fu-dlg"><p>' + esc(f.d) + '</p><div class="fu-dbt">' + f.b.map(function (b, q) { return '<span data-i="' + q + '">' + esc(b) + '</span>'; }).join('') + '</div></div></div>';
      else h += '<div class="fu-title">' + esc(f.title) + '</div>' + f.rows.map(function (r, q) { return '<div class="fu-row" data-i="' + q + '"><span>' + esc(r.t) + '</span>' + (r.sw ? '<i class="fu-sw"></i>' : r.rd ? '<i class="fu-rd"></i>' : '') + '</div>'; }).join('');
      var s = el(h + '</div>'); clip.insertBefore(s, tap); return s;
    }
    function run() {
      var k = 0;
      (function next() {
        if (!alive || !box.isConnected) return;
        if (k >= frames.length) { tap.style.top = '110%'; later(function () { k = 0; next(); }, 1600); return; }
        var f = frames[k++], s = render(f); cap.textContent = f.cap || '';
        var target = f.d ? s.querySelectorAll('.fu-dbt span')[f.tap] : s.querySelectorAll('.fu-row')[f.rows.findIndex(function (r) { return r.tap; })];
        later(function () {
          var cr = clip.getBoundingClientRect(), tr = target.getBoundingClientRect(), x = tr.left - cr.left + (f.d ? tr.width / 2 : tr.width - 36), y = tr.top - cr.top + tr.height / 2;
          tap.style.left = x + 'px'; tap.style.top = y + 'px'; target.classList.add('hot');
          later(function () { tap.classList.remove('go'); void tap.offsetWidth; tap.classList.add('go'); var sw = target.querySelector('.fu-sw,.fu-rd'); if (sw) sw.classList.add('on'); later(next, 1500); }, 800);
        }, 700);
      })();
    }
    later(run, 80);
    box.stop = function () { alive = false; timers.forEach(clearTimeout); };
    return box;
  }

  /* inject Futu + the demo into the phone permission wizard */
  var wzId = '', wzBox = null;
  function wizard() {
    var w = $('.fswiz-in');
    if (!w) { if (wzBox) { wzBox.stop && wzBox.stop(); } wzId = ''; wzBox = null; return; }
    var go = $('[data-act="wzgo"]', w), id = go ? go.getAttribute('data-id') : '__end', eb = $('.eyebrow', w), key = id + '|' + (eb ? eb.textContent : '');
    if (w.querySelector('.fu-wz') && wzId === key) return;
    wzId = key; if (wzBox && wzBox.stop) wzBox.stop();
    var old = w.querySelector('.fu-wz'); if (old) old.remove();
    var n = V().userName ? V().userName() : '', txt = (COACH[id] || (id === '__end' ? 'You did great' + (n ? ', ' + n : '') + '!' : 'Follow the steps on screen.')); if (id === 'notifications' && n) txt = n + ', ' + txt.charAt(0).toLowerCase() + txt.slice(1);
    var wrap = el('<div class="fu-wz"><div class="fu-wz-top"><div class="fu-mh"></div><div class="fu-bub"></div></div></div>');
    $('.fu-mh', wrap).appendChild(getMascot(104).el); $('.fu-bub', wrap).textContent = txt;
    FX.mood(id === '__end' ? 'excited' : 'happy'); if (id === '__end') FX.jump(); else FX.wave();
    var clipBox = demoClip(id); if (clipBox) { wrap.appendChild(clipBox); wzBox = clipBox; } else wzBox = null;
    var h1 = $('h1', w); (h1 || w.firstChild).parentNode.insertBefore(wrap, h1 || w.firstChild);
  }
  var wt; new MutationObserver(function () { clearTimeout(wt); wt = setTimeout(wizard, 120); }).observe(document.documentElement, { childList: true, subtree: true });

  window.FSFutu = { intro: intro, mood: FX.mood, wave: FX.wave, answers: function () { try { return JSON.parse(ls('fs_onb') || 'null'); } catch (e) { return null; } } };
})();

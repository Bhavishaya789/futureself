/* Lesson3D: a real 3D stage inside every lesson page.
   <div class="l3d" data-title=".." data-nodes="a|b|c" data-model="atom"> is turned into a three.js scene with two views:
   "Concept map" (the lesson sections as spheres in 3D; tap one to jump to its card) and "3D model" (atom, molecule, particles, wave, orbit, DNA, solids, magnet, cell, graph, globe).
   Drag to rotate, wheel/pinch to zoom. One renderer per stage, paused when off screen, freed when removed. */
(function () {
  if (!window.THREE) return;
  var T = window.THREE, reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COLS = [0x7C5CFF, 0x22D3EE, 0xF59E0B, 0x34D399, 0xF472B6, 0x60A5FA, 0xFB7185, 0xA3E635];
  function mat(c, o) { o = o || {}; return new T.MeshStandardMaterial({ color: c, roughness: o.r != null ? o.r : 0.35, metalness: o.m != null ? o.m : 0.2, transparent: o.a != null, opacity: o.a != null ? o.a : 1, emissive: o.e || 0x000000, emissiveIntensity: o.ei || 0 }); }
  function ball(r, c, o) { return new T.Mesh(new T.SphereGeometry(r, 24, 18), mat(c, o)); }
  function label(txt, col, scale) {
    var cv = document.createElement('canvas'), x = cv.getContext('2d'); cv.width = 512; cv.height = 128;
    x.font = '600 44px Segoe UI, Arial, sans-serif'; var w = Math.min(500, x.measureText(txt).width + 44);
    x.fillStyle = 'rgba(12,15,36,.82)'; x.strokeStyle = col || '#7C5CFF'; x.lineWidth = 5;
    x.beginPath(); x.moveTo(256 - w / 2 + 40, 20); x.lineTo(256 + w / 2 - 40, 20); x.quadraticCurveTo(256 + w / 2, 20, 256 + w / 2, 64); x.quadraticCurveTo(256 + w / 2, 108, 256 + w / 2 - 40, 108); x.lineTo(256 - w / 2 + 40, 108); x.quadraticCurveTo(256 - w / 2, 108, 256 - w / 2, 64); x.quadraticCurveTo(256 - w / 2, 20, 256 - w / 2 + 40, 20); x.fill(); x.stroke();
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 256, 66, 460);
    var s = new T.Sprite(new T.SpriteMaterial({ map: new T.CanvasTexture(cv), transparent: true, depthTest: false })); s.scale.set(3.4 * (scale || 1), 0.85 * (scale || 1), 1); s.renderOrder = 10; return s;
  }
  function line(a, b, c, op) { var g = new T.BufferGeometry().setFromPoints([a, b]); return new T.Line(g, new T.LineBasicMaterial({ color: c, transparent: true, opacity: op == null ? 0.6 : op })); }
  function ring(r, c, tube) { var m = new T.Mesh(new T.TorusGeometry(r, tube || 0.02, 8, 80), mat(c, { e: c, ei: 0.5 })); return m; }
  function cut(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  /* ---------- the models; each returns {g: Group, tick(t)} ---------- */
  var M = {};
  M.atom = function () {
    var g = new T.Group(), nuc = new T.Group(), els = [];
    for (var i = 0; i < 7; i++) { var b = ball(0.28, i % 2 ? 0xEF4444 : 0x60A5FA, { e: i % 2 ? 0x7f1d1d : 0x1e3a8a, ei: .4 }); b.position.set((Math.random() - .5) * .5, (Math.random() - .5) * .5, (Math.random() - .5) * .5); nuc.add(b); }
    g.add(nuc);
    [[1.6, 0, 0], [1.6, 1.05, 0], [1.6, -1.05, 0.6]].forEach(function (r, k) {
      var o = new T.Group(); o.rotation.set(r[1], r[2], k * 0.5); var rg = ring(r[0] + k * 0.45, 0xA5B4FC, .015); o.add(rg);
      var e = ball(0.13, 0x22D3EE, { e: 0x22D3EE, ei: .9 }); o.add(e); els.push({ e: e, r: r[0] + k * 0.45, s: 1.3 - k * .25, p: k * 2 }); g.add(o);
    });
    return { g: g, tick: function (t) { nuc.rotation.y = t * .6; els.forEach(function (x) { x.e.position.set(Math.cos(t * x.s + x.p) * x.r, Math.sin(t * x.s + x.p) * x.r, 0); }); } };
  };
  M.molecule = function () {
    var g = new T.Group(), O = ball(0.55, 0xEF4444), H1 = ball(0.32, 0xF1F5F9), H2 = ball(0.32, 0xF1F5F9), a = 52 * Math.PI / 180;
    H1.position.set(Math.sin(a) * 1.3, -Math.cos(a) * 1.3, 0); H2.position.set(-Math.sin(a) * 1.3, -Math.cos(a) * 1.3, 0);
    [H1, H2].forEach(function (h) { var d = h.position.length(), c = new T.Mesh(new T.CylinderGeometry(.07, .07, d, 12), mat(0x94A3B8)); c.position.copy(h.position).multiplyScalar(.5); c.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), h.position.clone().normalize()); g.add(c); });
    g.add(O, H1, H2); var o = label('O', '#EF4444', .4); o.position.set(0, .95, 0); g.add(o); var h1 = label('H', '#94A3B8', .4); h1.position.copy(H1.position).add(new T.Vector3(.2, -.6, 0)); g.add(h1); var h2 = label('H', '#94A3B8', .4); h2.position.copy(H2.position).add(new T.Vector3(-.2, -.6, 0)); g.add(h2);
    return { g: g, tick: function (t) { g.rotation.y = t * .5; } };
  };
  M.states = function () {
    var g = new T.Group(), sets = [], names = ['Solid', 'Liquid', 'Gas'], spread = [0.55, 0.85, 1.7], jit = [0.04, 0.18, 0.9];
    for (var s = 0; s < 3; s++) {
      var grp = new T.Group(); grp.position.x = (s - 1) * 2.6; var ps = [];
      for (var i = 0; i < 27; i++) { var p = ball(.13, COLS[s + 1], { e: COLS[s + 1], ei: .25 }), x = i % 3, y = Math.floor(i / 3) % 3, z = Math.floor(i / 9); p.userData.b = new T.Vector3((x - 1) * spread[s], (y - 1) * spread[s], (z - 1) * spread[s]); p.userData.ph = Math.random() * 9; grp.add(p); ps.push(p); }
      var lb = label(names[s], '#' + COLS[s + 1].toString(16), .8); lb.position.set(0, -1.9, 0); grp.add(lb); g.add(grp); sets.push(ps);
    }
    return { g: g, tick: function (t) { sets.forEach(function (ps, s) { ps.forEach(function (p) { var b = p.userData.b, ph = p.userData.ph; p.position.set(b.x + Math.sin(t * 3 + ph) * jit[s], b.y + Math.cos(t * 2.6 + ph * 1.3) * jit[s], b.z + Math.sin(t * 2.2 + ph * .7) * jit[s]); }); }); } };
  };
  M.wave = function () {
    var g = new T.Group(), ps = [];
    for (var z = 0; z < 5; z++) for (var i = 0; i < 40; i++) { var p = ball(.08, COLS[(i + z) % 4 + 1], { e: COLS[(i + z) % 4 + 1], ei: .4 }); p.userData = { x: (i - 20) * .22, z: (z - 2) * .55 }; g.add(p); ps.push(p); }
    return { g: g, tick: function (t) { ps.forEach(function (p) { var d = Math.hypot(p.userData.x, p.userData.z); p.position.set(p.userData.x, Math.sin(p.userData.x * 1.4 - t * 2.4) * .8 * Math.cos(p.userData.z * .6), p.userData.z); }); g.rotation.y = Math.sin(t * .2) * .3; } };
  };
  M.orbit = function () {
    var g = new T.Group(), sun = ball(.8, 0xFBBF24, { e: 0xF59E0B, ei: .9 }), pl = [];
    g.add(sun); [[1.6, .22, 0x60A5FA, 1.4], [2.5, .3, 0x34D399, .9], [3.5, .26, 0xF472B6, .6]].forEach(function (d, i) { g.add(ring(d[0], 0x475569, .008).rotateX(Math.PI / 2)); var p = ball(d[1], d[2]); g.add(p); pl.push({ p: p, r: d[0], s: d[3], o: i * 2 }); });
    g.rotation.x = .5; return { g: g, tick: function (t) { pl.forEach(function (x) { x.p.position.set(Math.cos(t * x.s + x.o) * x.r, 0, Math.sin(t * x.s + x.o) * x.r); }); sun.rotation.y = t; } };
  };
  M.dna = function () {
    var g = new T.Group(), n = 26;
    for (var i = 0; i < n; i++) { var a = i * .5, y = (i - n / 2) * .24, p1 = new T.Vector3(Math.cos(a) * 1, y, Math.sin(a) * 1), p2 = new T.Vector3(-Math.cos(a) * 1, y, -Math.sin(a) * 1); var b1 = ball(.12, 0x22D3EE, { e: 0x22D3EE, ei: .4 }), b2 = ball(.12, 0xF472B6, { e: 0xF472B6, ei: .4 }); b1.position.copy(p1); b2.position.copy(p2); g.add(b1, b2, line(p1, p2, COLS[i % 4 + 1], .7)); }
    return { g: g, tick: function (t) { g.rotation.y = t * .7; } };
  };
  M.solids = function () {
    var g = new T.Group(), a = [new T.BoxGeometry(1.1, 1.1, 1.1), new T.ConeGeometry(.7, 1.3, 32), new T.CylinderGeometry(.55, .55, 1.3, 32), new T.SphereGeometry(.7, 28, 20)], nm = ['Cuboid', 'Cone', 'Cylinder', 'Sphere'], ms = [];
    a.forEach(function (geo, i) { var m = new T.Mesh(geo, mat(COLS[i + 1], { a: .85 })), w = new T.LineSegments(new T.EdgesGeometry(geo), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: .55 })); m.add(w); m.position.x = (i - 1.5) * 1.9; var lb = label(nm[i], '#' + COLS[i + 1].toString(16), .7); lb.position.y = -1.2; m.add(lb); g.add(m); ms.push(m); });
    return { g: g, tick: function (t) { ms.forEach(function (m, i) { m.rotation.y = t * .6 + i; m.rotation.x = .4; }); } };
  };
  M.magnet = function () {
    var g = new T.Group(), n = new T.Mesh(new T.BoxGeometry(1.2, .8, .8), mat(0xEF4444)), s = new T.Mesh(new T.BoxGeometry(1.2, .8, .8), mat(0x3B82F6)); n.position.x = .6; s.position.x = -.6; g.add(n, s);
    var a = label('N', '#EF4444', .4); a.position.set(.6, .8, 0); var b = label('S', '#3B82F6', .4); b.position.set(-.6, .8, 0); g.add(a, b);
    for (var k = 0; k < 5; k++) { var r = 1.4 + k * .45, e = new T.Mesh(new T.TorusGeometry(r, .012, 6, 90), mat(0xA5B4FC, { a: .6 - k * .08, e: 0x6366F1, ei: .5 })); e.scale.set(1.25, 1, 1); e.rotation.x = k * .15; g.add(e); }
    var dots = []; for (var d = 0; d < 14; d++) { var p = ball(.07, 0xFDE68A, { e: 0xFDE68A, ei: .9 }); g.add(p); dots.push(p); }
    return { g: g, tick: function (t) { g.rotation.y = t * .35; dots.forEach(function (p, i) { var a2 = t * .9 + i * .45, k2 = 1.4 + (i % 5) * .45; p.position.set(Math.cos(a2) * k2 * 1.25, Math.sin(a2) * k2, 0); }); } };
  };
  M.cell = function () {
    var g = new T.Group(), mem = new T.Mesh(new T.SphereGeometry(2, 40, 28), mat(0x34D399, { a: .22, r: .1 })), nuc = ball(.7, 0x7C5CFF, { e: 0x4c1d95, ei: .5 }), orgs = [];
    g.add(mem, nuc); var nl = label('Nucleus', '#7C5CFF', .6); nl.position.set(0, 1.05, 0); g.add(nl);
    for (var i = 0; i < 9; i++) { var m = new T.Mesh(T.CapsuleGeometry ? new T.CapsuleGeometry(.14, .35, 4, 10) : new T.SphereGeometry(.2, 12, 10), mat(COLS[i % 4 + 2], { e: COLS[i % 4 + 2], ei: .3 })); m.userData = { a: i * .7, r: 1.2 + (i % 3) * .25, y: (i % 5 - 2) * .35 }; g.add(m); orgs.push(m); }
    return { g: g, tick: function (t) { orgs.forEach(function (m) { var u = m.userData, a = u.a + t * .35; m.position.set(Math.cos(a) * u.r, u.y + Math.sin(t + u.a) * .1, Math.sin(a) * u.r); m.rotation.z = t + u.a; }); } };
  };
  M.graph = function () {
    var g = new T.Group(), ax = [[3, 0, 0, 0xEF4444, 'x'], [0, 3, 0, 0x34D399, 'y'], [0, 0, 3, 0x60A5FA, 'z']];
    ax.forEach(function (a) { g.add(line(new T.Vector3(-a[0], -a[1], -a[2]), new T.Vector3(a[0], a[1], a[2]), a[3], .9)); var l = label(a[4], '#' + a[3].toString(16), .35); l.position.set(a[0] * 1.08, a[1] * 1.08, a[2] * 1.08); g.add(l); });
    var pts = [], dots = []; for (var i = -12; i <= 12; i++) { var x = i * .22, p = ball(.07, 0xF59E0B, { e: 0xF59E0B, ei: .7 }); g.add(p); dots.push(p); }
    var curve = []; for (var j = -30; j <= 30; j++) { var xx = j * .09; curve.push(new T.Vector3(xx, Math.sin(xx * 1.3) * 1.3, 0)); }
    g.add(new T.Line(new T.BufferGeometry().setFromPoints(curve), new T.LineBasicMaterial({ color: 0x22D3EE })));
    return { g: g, tick: function (t) { dots.forEach(function (p, i) { var x = (i - 12) * .22; p.position.set(x, Math.sin(x * 1.3 + t) * 1.3, Math.cos(x + t) * .8); }); g.rotation.y = Math.sin(t * .3) * .6; } };
  };
  M.globe = function () {
    var g = new T.Group(), e = ball(1.6, 0x2563EB, { r: .6, m: 0 }); g.add(e);
    for (var i = -2; i <= 2; i++) { var r = ring(Math.cos(i * .5) * 1.62, 0x93C5FD, .008); r.rotation.x = Math.PI / 2; r.position.y = Math.sin(i * .5) * 1.62; g.add(r); }
    for (var k = 0; k < 6; k++) { var m = ring(1.62, 0x93C5FD, .008); m.rotation.y = k * Math.PI / 6; g.add(m); }
    for (var c = 0; c < 14; c++) { var p = ball(.07, 0xFBBF24, { e: 0xF59E0B, ei: .9 }), la = (Math.random() - .5) * 2.2, lo = Math.random() * 6.28; p.position.set(Math.cos(la) * Math.cos(lo) * 1.64, Math.sin(la) * 1.64, Math.cos(la) * Math.sin(lo) * 1.64); g.add(p); }
    g.rotation.z = .4; return { g: g, tick: function (t) { g.rotation.y = t * .3; } };
  };
  M.crystal = function () {
    var g = new T.Group(), m = new T.Mesh(new T.IcosahedronGeometry(1.4, 0), mat(0x7C5CFF, { a: .8 })), w = new T.LineSegments(new T.EdgesGeometry(new T.IcosahedronGeometry(1.42, 0)), new T.LineBasicMaterial({ color: 0x22D3EE })); g.add(m, w);
    return { g: g, tick: function (t) { g.rotation.y = t * .5; g.rotation.x = Math.sin(t * .4) * .4; } };
  };
  var MODEL_NAME = { atom: 'Atom', molecule: 'Molecule', states: 'States of matter', wave: 'Wave', orbit: 'Orbits', dna: 'DNA helix', solids: 'Solids', magnet: 'Magnetic field', cell: 'Cell', graph: '3D axes', globe: 'Globe', crystal: 'Knowledge crystal' };

  function concept(title, nodes) {
    var g = new T.Group(), core = ball(.85, 0x7C5CFF, { e: 0x4c1d95, ei: .6 }), n = nodes.length, hits = [], list = [];
    g.add(core); var cl = label(cut(title, 26), '#7C5CFF', 1.15); cl.position.set(0, 1.3, 0); g.add(cl);
    nodes.forEach(function (name, i) {
      var phi = Math.acos(1 - 2 * (i + .5) / n), th = Math.PI * (1 + Math.sqrt(5)) * i, R = 3, c = COLS[i % 8];
      var p = new T.Vector3(R * Math.cos(th) * Math.sin(phi), R * Math.cos(phi) * .8, R * Math.sin(th) * Math.sin(phi)), b = ball(.38, c, { e: c, ei: .45 }); b.position.copy(p); b.userData.k = i; g.add(b, line(new T.Vector3(0, 0, 0), p, c, .55)); hits.push(b);
      var l = label(cut(name, 24), '#' + c.toString(16), .85); l.position.copy(p).add(new T.Vector3(0, .75, 0)); g.add(l); list.push(b);
    });
    return { g: g, hits: hits, tick: function (t) { core.scale.setScalar(1 + Math.sin(t * 2) * .05); list.forEach(function (b, i) { b.scale.setScalar(1 + Math.sin(t * 2 + i) * .06); }); g.rotation.y = t * .12; } };
  }

  function pickModel(hint) {
    var h = (hint || '').toLowerCase();
    var R = [['atom', /atom|nucle|electron|proton|quantum|radioactiv|photoelectric|bohr|isotope|modern physics/], ['states', /states? of matter|solid.*liquid|evaporat|diffusion|matter in|is matter|kinetic theory|gas laws?|gases/], ['molecule', /molecule|bond|compound|water|carbon|hydro|organic|acid|chemical|reaction|mole|periodic/], ['wave', /wave|sound|oscillat|vibrat|light|optic|ray|lens|refrac|reflect|alternating|ac |sine|trigonometr/], ['orbit', /gravit|orbit|planet|satellite|motion|kepler|universe|solar|rotation|circular|centripetal|force|newton/], ['dna', /dna|gene|heredit|evolution|inherit|reproduc|molecular basis|biotech|chromosom/], ['cell', /cell|tissue|organelle|biolog|plant|animal|human|digest|respir|circulat|nervous|life process|physiolog|diversity|kingdom|health|disease|food resourc|crop|microb/], ['magnet', /magnet|electromagnet|induction|current|electric|circuit|electrostat|charge|capacit|resist|ohm|semiconductor/], ['solids', /surface area|volume|mensuration|geometry|triangle|circle|quadrilateral|polygon|three.?dimension|3d|solid|cone|sphere|cylinder|conic|vector/], ['graph', /algebra|coordinate|function|calculus|limit|deriv|integr|polynomial|equation|matrix|determinant|complex|statistic|probab|sequence|real number|number system|inequalit|set|relation|permutation|binomial/], ['globe', /geograph|climate|resource|earth|map|river|soil|agricultur|india|history|politic|econom|democra|constitution|world|environment|ecolog|population|social/]];
    for (var i = 0; i < R.length; i++) if (R[i][1].test(h)) return R[i][0]; return 'crystal';
  }

  function mount(el) {
    if (el._l3d) return; el._l3d = 1;
    var title = el.getAttribute('data-title') || 'Lesson', nodes = (el.getAttribute('data-nodes') || '').split('|').filter(Boolean), model = el.getAttribute('data-model') || pickModel(el.getAttribute('data-hint') || title);
    el.innerHTML = '<div class="l3d-bar"><button class="on" data-v="map">Concept map</button><button data-v="model">3D model: ' + (MODEL_NAME[model] || 'Model') + '</button><button data-v="spin">Pause</button></div><div class="l3d-view"></div><div class="l3d-hint">Drag to rotate · scroll or pinch to zoom · tap a bubble to jump to that part</div>';
    var host = el.querySelector('.l3d-view'), bar = el.querySelector('.l3d-bar'), renderer;
    try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { el.style.display = 'none'; return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); host.appendChild(renderer.domElement);
    var scene = new T.Scene(), cam = new T.PerspectiveCamera(45, 1, .1, 100), cur = null, view = 'map', paused = false, vis = true, dist = 9, rotY = 0, rotX = .25, drag = null, t0 = performance.now(), pinch = 0;
    scene.add(new T.AmbientLight(0xffffff, .75)); var d1 = new T.DirectionalLight(0xffffff, 1.1); d1.position.set(4, 6, 5); scene.add(d1); var d2 = new T.PointLight(0x22D3EE, .8, 30); d2.position.set(-5, -2, 4); scene.add(d2);
    var holder = new T.Group(); scene.add(holder);
    var mapObj = nodes.length >= 2 ? concept(title, nodes) : null, modelObj = (M[model] || M.crystal)();
    if (!mapObj) { view = 'model'; bar.querySelector('[data-v=map]').style.display = 'none'; bar.querySelector('[data-v=model]').classList.add('on'); }
    function setView(v) { view = v; holder.remove.apply(holder, holder.children.slice()); cur = v === 'map' ? mapObj : modelObj; holder.add(cur.g); dist = v === 'map' ? 8.5 : 7.5; Array.prototype.forEach.call(bar.querySelectorAll('button[data-v]'), function (b) { if (b.dataset.v !== 'spin') b.classList.toggle('on', b.dataset.v === v); }); }
    setView(view);
    function size() { var w = host.clientWidth || 600, h = host.clientHeight || 320; renderer.setSize(w, h, false); renderer.domElement.style.width = '100%'; renderer.domElement.style.height = '100%'; cam.aspect = w / h; cam.updateProjectionMatrix(); }
    size(); if (window.ResizeObserver) new ResizeObserver(size).observe(host);
    var cvs = renderer.domElement, ray = new T.Raycaster(), moved = 0;
    function xy(e) { var r = cvs.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height }; }
    cvs.style.touchAction = 'none'; var pts = {};
    cvs.addEventListener('pointerdown', function (e) { cvs.setPointerCapture(e.pointerId); pts[e.pointerId] = { x: e.clientX, y: e.clientY }; drag = { x: e.clientX, y: e.clientY }; moved = 0; });
    cvs.addEventListener('pointermove', function (e) {
      if (!pts[e.pointerId]) return; var ids = Object.keys(pts);
      if (ids.length === 2) { pts[e.pointerId] = { x: e.clientX, y: e.clientY }; var a = pts[ids[0]], b = pts[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y); if (pinch) dist = Math.max(4, Math.min(18, dist * pinch / d)); pinch = d; return; }
      if (drag) { rotY += (e.clientX - drag.x) * .01; rotX = Math.max(-1.3, Math.min(1.3, rotX + (e.clientY - drag.y) * .008)); moved += Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y); drag = { x: e.clientX, y: e.clientY }; }
      pts[e.pointerId] = { x: e.clientX, y: e.clientY };
    });
    function up(e) { delete pts[e.pointerId]; pinch = 0; drag = null; if (moved < 6 && view === 'map' && mapObj) { var p = xy(e); ray.setFromCamera(new T.Vector2(p.x / p.w * 2 - 1, -(p.y / p.h) * 2 + 1), cam); var h = ray.intersectObjects(mapObj.hits)[0]; if (h) jump(h.object.userData.k); } }
    cvs.addEventListener('pointerup', up); cvs.addEventListener('pointercancel', up);
    cvs.addEventListener('wheel', function (e) { e.preventDefault(); dist = Math.max(4, Math.min(18, dist + e.deltaY * .01)); }, { passive: false });
    function jump(k) { var root = el.closest('.pane') || document, c = root.querySelector('.vl-card[data-k="' + k + '"]'); if (!c) return; c.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); c.classList.add('flash'); setTimeout(function () { c.classList.remove('flash'); }, 1600); }
    bar.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; if (b.dataset.v === 'spin') { paused = !paused; b.textContent = paused ? 'Play' : 'Pause'; } else setView(b.dataset.v); });
    if (window.IntersectionObserver) new IntersectionObserver(function (en) { vis = en[0].isIntersecting; }).observe(el);
    var raf = 0, tt = 0, last = performance.now();
    (function loop() {
      if (!el.isConnected) { renderer.dispose(); cancelAnimationFrame(raf); return; }
      raf = requestAnimationFrame(loop); if (!vis || document.hidden || el.offsetParent === null) { last = performance.now(); return; }
      var now = performance.now(); if (!paused && !reduce) tt += (now - last) / 1000; last = now;
      cur.tick(tt); holder.rotation.y = rotY + (paused ? 0 : Math.sin(tt * .25) * .15); holder.rotation.x = rotX;
      cam.position.set(0, 0, dist); cam.lookAt(0, 0, 0); renderer.render(scene, cam);
    })();
  }
  function scan(root) { Array.prototype.forEach.call((root || document).querySelectorAll('.l3d:not([data-m])'), function (el) { if (el.offsetParent === null && !el.closest('.pane')) return; el.setAttribute('data-m', 1); try { mount(el); } catch (e) { el.style.display = 'none'; } }); }
  var pend = 0; new MutationObserver(function () { if (pend) return; pend = setTimeout(function () { pend = 0; scan(); }, 60); }).observe(document.body, { childList: true, subtree: true });
  window.Lesson3D = { scan: scan, mount: mount }; setTimeout(scan, 0);
})();

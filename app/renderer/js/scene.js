/* FutureSelf 3D scene: a "future orb" that reacts to the app. Requires three.js (global THREE). */
window.FS3D = (function () {
  var api = { ok: false };
  if (!window.THREE) return api;
  var canvas = document.getElementById('scene'), renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { return api; }
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  renderer.setClearColor(0x000000, 0);
  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x060812, 9, 28);
  var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 80);
  camera.position.set(0, 0, 8);

  var VIOLET = 0x7C5CFF, CYAN = 0x2DE2E6, GOLD = 0xFFC857, RED = 0xFF5C7A;
  var root = new THREE.Group(); scene.add(root);

  /* lights */
  scene.add(new THREE.AmbientLight(0x6a64c8, 0.7));
  var l1 = new THREE.PointLight(VIOLET, 2.2, 30); l1.position.set(4, 4, 6); scene.add(l1);
  var l2 = new THREE.PointLight(CYAN, 1.8, 30); l2.position.set(-5, -2, 5); scene.add(l2);
  var l3 = new THREE.PointLight(GOLD, 1.4, 12); root.add(l3);

  /* orb core (faceted crystal) */
  var coreMat = new THREE.MeshStandardMaterial({ color: 0x5b3df5, emissive: 0x2a1a99, emissiveIntensity: 0.9, metalness: 0.55, roughness: 0.28, flatShading: true });
  var core = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 2), coreMat); root.add(core);
  var wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.34, 1), new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.32 })); root.add(wire);
  var spark = new THREE.Mesh(new THREE.SphereGeometry(0.42, 24, 24), new THREE.MeshBasicMaterial({ color: GOLD })); root.add(spark);
  [[1.25, 0.14, CYAN], [1.65, 0.07, VIOLET]].forEach(function (g) {
    root.add(new THREE.Mesh(new THREE.SphereGeometry(g[0], 32, 32), new THREE.MeshBasicMaterial({ color: g[2], transparent: true, opacity: g[1], side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false })));
  });

  /* orbit rings with satellites */
  var rings = [];
  [[2.0, 0.35, 0.2, CYAN, 0.5], [2.45, -0.9, 0.5, VIOLET, -0.35], [2.9, 1.2, -0.4, GOLD, 0.25]].forEach(function (d) {
    var g = new THREE.Group(); g.rotation.set(d[1], d[2], 0);
    g.add(new THREE.Mesh(new THREE.TorusGeometry(d[0], 0.008, 8, 160), new THREE.MeshBasicMaterial({ color: d[3], transparent: true, opacity: 0.55 })));
    var sat = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 16), new THREE.MeshBasicMaterial({ color: d[3] }));
    g.add(sat); root.add(g);
    rings.push({ g: g, sat: sat, r: d[0], a: Math.random() * 6.28, v: d[4] });
  });

  /* invisible hit sphere for hover / drag / click */
  var hit = new THREE.Mesh(new THREE.SphereGeometry(1.9, 16, 16), new THREE.MeshBasicMaterial({ visible: false })); root.add(hit);

  /* 7-day ring: one bead per day, lit when you studied */
  var weekG = new THREE.Group(); weekG.rotation.set(1.25, 0.2, 0); root.add(weekG);
  weekG.add(new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.006, 6, 120), new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.28 })));
  var beads = [];
  for (var bi = 0; bi < 7; bi++) {
    var bm = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), new THREE.MeshBasicMaterial({ color: 0x44486e, fog: false }));
    weekG.add(bm); beads.push({ m: bm, lit: 0, tgt: 0, today: bi === 6, a: bi / 7 * 6.2832 });
  }
  var weekStars = null;

  /* halo of tiny stars (unlocks at level 5) */
  var HN = 140, hp = new Float32Array(HN * 3), hseed = [];
  for (var hi = 0; hi < HN; hi++) hseed.push({ a: Math.random() * 6.28, r: 2.2 + Math.random() * 0.9, y: (Math.random() - 0.5) * 1.2, v: 0.15 + Math.random() * 0.25 });
  var hg = new THREE.BufferGeometry(); hg.setAttribute('position', new THREE.BufferAttribute(hp, 3));
  var halo = new THREE.Points(hg, new THREE.PointsMaterial({ color: GOLD, size: 0.06, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })); halo.visible = false; root.add(halo);

  /* shock rings (click / level up) */
  var shocks = [];
  function shock(color, big) {
    var m = new THREE.Mesh(new THREE.RingGeometry(0.98, 1, 64), new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    root.add(m); shocks.push({ m: m, t: 0, big: big ? 5.5 : 3.4 });
  }

  /* shooting stars */
  var meteors = [], nextMeteor = 3;
  function meteor() {
    var v = visSize(), g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    var l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xcfe8ff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
    l.frustumCulled = false; scene.add(l);
    meteors.push({ l: l, x: (Math.random() * 0.8 - 0.1) * v.w * 1.1, y: v.h * (0.2 + Math.random() * 0.3), z: -4 - Math.random() * 4, vx: 9 + Math.random() * 6, vy: -(3 + Math.random() * 3), t: 0 });
  }

  /* focus progress ring */
  var PR = 3.15;
  var prog = new THREE.Group(); prog.visible = false; scene.add(prog); prog.position.set(0, 0, -1.5);
  prog.add(new THREE.Mesh(new THREE.TorusGeometry(PR, 0.02, 8, 160), new THREE.MeshBasicMaterial({ color: VIOLET, transparent: true, opacity: 0.28 })));
  var arcFlip = new THREE.Group(); arcFlip.scale.x = -1; prog.add(arcFlip);
  var arcMat = new THREE.MeshBasicMaterial({ color: GOLD });
  var arc = new THREE.Mesh(new THREE.TorusGeometry(PR, 0.045, 10, 4, 0.001), arcMat); arc.rotation.z = Math.PI / 2; arcFlip.add(arc);
  var tip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffffff })); prog.add(tip);
  var lastP = -1;

  /* starfield */
  var N = 1100, pos = new Float32Array(N * 3), col = new Float32Array(N * 3), c = new THREE.Color();
  for (var i = 0; i < N; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 38; pos[i * 3 + 1] = (Math.random() - 0.5) * 24; pos[i * 3 + 2] = -Math.random() * 22 + 4;
    c.setHex(Math.random() < 0.2 ? CYAN : (Math.random() < 0.5 ? VIOLET : 0xffffff)).multiplyScalar(0.4 + Math.random() * 0.6);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  var sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('color', new THREE.BufferAttribute(col, 3));
  var stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.055, vertexColors: true, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
  scene.add(stars);

  /* state */
  var modes = {
    auth:  { fx: 0.72, fy: 0.5,  s: 1.05, z: 0,    prog: false },
    dash:  { fx: 0.80, fy: 0.46, s: 1.0,  z: 0,    prog: false },
    dim:   { fx: 0.93, fy: 0.9,  s: 0.42, z: -3,   prog: false },
    stage: { fx: 0.5,  fy: 0.2,  s: 0.5,  z: 0,    prog: false },
    focus: { fx: 0.5,  fy: 0.2,  s: 0.44, z: -1,   prog: true }
  };
  var mode = 'auth', cur = { fx: 0.72, fy: 0.5, s: 1.05, z: 0 }, mx = 0, my = 0, flashT = 0, pulse = 0, progress = 0;
  var baseEm = new THREE.Color(0x2a1a99), hot = new THREE.Color(RED), tmp = new THREE.Color();
  /* interaction state */
  var ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), hovering = false, hoverK = 0, drag = null, spinX = 0, spinY = 0, velX = 0, velY = 0, charge = 0;
  /* evolution */
  var LV = [0x5b3df5, 0x6a46f7, 0x3f6cf7, 0x2aa6e8, 0x1fc7b8, 0x37d67a, 0xf2c14e, 0xff8a5c];
  var level = 0, coreTarget = new THREE.Color(LV[0]), coreCol = new THREE.Color(LV[0]), emT = new THREE.Color(), BLOCK = '.card,.side,.btn,a,button,input,select,textarea,.item,.overlay,.modal,.panel-pop,#toasts,.drawer,.comeback,.chip,label';

  function visSize() { var h = 2 * camera.position.z * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)); return { h: h, w: h * camera.aspect }; }
  function resize() {
    var w = innerWidth, h = innerHeight;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();
  function overOrb(e) {
    if (e.target.closest && e.target.closest(BLOCK)) return false;
    ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return ray.intersectObject(hit).length > 0;
  }
  function orbScreen() { var p = root.position.clone().project(camera); return { x: (p.x + 1) / 2 * innerWidth, y: (1 - p.y) / 2 * innerHeight }; }
  addEventListener('pointermove', function (e) {
    mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5;
    if (drag) {
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
      spinY += dx * 0.012; spinX += dy * 0.012; velY = dx * 0.012 * 60; velX = dy * 0.012 * 60;
      document.body.style.cursor = 'grabbing'; return;
    }
    var h = overOrb(e);
    if (h !== hovering) { hovering = h; document.body.style.cursor = h ? 'grab' : ''; }
  }, { passive: true });
  addEventListener('pointerdown', function (e) {
    if (e.button !== 0 || !overOrb(e)) return;
    drag = { x: e.clientX, y: e.clientY, moved: 0, t: performance.now() }; velX = velY = 0; e.preventDefault();
  });
  addEventListener('pointerup', function (e) {
    if (!drag) return; var d = drag; drag = null;
    document.body.style.cursor = hovering ? 'grab' : '';
    if (d.moved < 6 && performance.now() - d.t < 450) orbClick(e);
  });
  addEventListener('blur', function () { drag = null; hovering = false; document.body.style.cursor = ''; });
  function orbClick() {
    charge = Math.min(1, charge + 0.34); pulse = 0.45; flashT = 0.5; shock(charge > 0.9 ? GOLD : CYAN, false);
    var s = orbScreen(); window.FX && FX.burst(s.x, s.y, 22 + Math.round(charge * 20), { speed: 340 });
    if (charge >= 1) { charge = 0.0001; shock(GOLD, true); window.FX && FX.confetti(s.x, s.y, 40, { spread: 3.2, speed: 600 }); }
    if (api.onOrb) api.onOrb(s, level);
  }

  function setProgress(p) {
    progress = Math.max(0, Math.min(1, p));
    if (Math.abs(progress - lastP) < 0.002) return;
    lastP = progress;
    arc.geometry.dispose();
    var a = Math.max(0.001, progress * Math.PI * 2);
    arc.geometry = new THREE.TorusGeometry(PR, 0.045, 10, Math.max(3, Math.ceil(160 * progress)), a);
    tip.position.set(PR * Math.sin(a), PR * Math.cos(a), 0);
  }

  var t0 = performance.now(), last = t0;
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    var t = (now - t0) / 1000, sp = reduce ? 0.15 : 1;
    var m = modes[mode], narrow = innerWidth < 860;
    var tf = narrow ? { fx: 0.5, fy: mode === 'focus' ? 0.2 : 0.17, s: mode === 'focus' ? 0.34 : 0.5, z: mode === 'focus' ? -1 : -2 } : m;
    if (mode === 'stage') { /* phone home: the orb sits in its own space between the greeting and the cards */
      var stg = document.getElementById('orbstage');
      if (stg) { var rc = stg.getBoundingClientRect(), D = Math.min(rc.height * 0.96, innerWidth * 0.8); tf = { fx: (rc.left + rc.width / 2) / innerWidth, fy: (rc.top + rc.height / 2) / innerHeight, s: D / (0.52 * innerHeight), z: 0 }; }
    }
    var k = 1 - Math.pow(0.0025, dt);
    cur.fx += (tf.fx - cur.fx) * k; cur.fy += (tf.fy - cur.fy) * k; cur.s += (tf.s - cur.s) * k; cur.z += (tf.z - cur.z) * k;
    var v = visSize();
    root.position.set((cur.fx - 0.5) * v.w, (0.5 - cur.fy) * v.h, cur.z);
    var breath = 1 + Math.sin(t * 1.4) * 0.025 + pulse * 0.25;
    root.scale.setScalar(cur.s * breath);
    pulse *= Math.pow(0.02, dt);

    /* hover / drag / charge */
    hoverK += ((hovering || drag ? 1 : 0) - hoverK) * (1 - Math.pow(0.002, dt));
    charge = Math.max(0, charge - dt * 0.05);
    if (!drag) { spinY += velY * dt; spinX += velX * dt; velY *= Math.pow(0.04, dt); velX *= Math.pow(0.04, dt); spinX *= 1 - Math.min(1, dt * 1.2); }
    root.rotation.y = spinY + (reduce ? 0 : mx * 0.55); root.rotation.x = spinX + (reduce ? 0 : my * 0.4);
    root.scale.multiplyScalar(1 + hoverK * 0.06 + charge * 0.07);
    coreCol.lerp(coreTarget, 1 - Math.pow(0.05, dt)); coreMat.color.copy(coreCol);
    if (flashT <= 0) { emT.copy(coreCol).multiplyScalar(0.45 + hoverK * 0.25 + charge * 0.5); coreMat.emissive.lerp(emT, 0.2); }
    l3.intensity = 1.4 + hoverK * 1.2 + charge * 2.5;
    beads.forEach(function (b, i) {
      b.lit += (b.tgt - b.lit) * Math.min(1, dt * 4);
      var a = b.a + t * 0.18; b.m.position.set(Math.cos(a) * 1.78, Math.sin(a) * 1.78, 0);
      b.m.rotation.y += dt * 1.5; b.m.rotation.x += dt;
      var pl = b.today && !b.tgt ? 0.5 + 0.5 * Math.sin(t * 4) : 0;
      b.m.material.color.setRGB(0.27 + b.lit * 0.73 + pl * 0.3, 0.28 + b.lit * 0.62 + pl * 0.2, 0.43 - b.lit * 0.23 + pl * 0.1);
      b.m.scale.setScalar(1 + b.lit * 0.35 + pl * 0.3);
    });
    if (halo.visible) {
      for (var hi2 = 0; hi2 < HN; hi2++) { var h = hseed[hi2], ha = h.a + t * h.v; hp[hi2 * 3] = Math.cos(ha) * h.r; hp[hi2 * 3 + 1] = h.y + Math.sin(t + hi2) * 0.05; hp[hi2 * 3 + 2] = Math.sin(ha) * h.r; }
      hg.attributes.position.needsUpdate = true;
    }
    for (var si = shocks.length - 1; si >= 0; si--) {
      var sk = shocks[si]; sk.t += dt; var kk = sk.t / 1.1;
      if (kk >= 1) { root.remove(sk.m); sk.m.geometry.dispose(); sk.m.material.dispose(); shocks.splice(si, 1); continue; }
      sk.m.scale.setScalar(1.2 + (sk.big - 1.2) * (1 - Math.pow(1 - kk, 3))); sk.m.material.opacity = (1 - kk) * 0.85; sk.m.lookAt(camera.position);
    }
    nextMeteor -= dt; if (nextMeteor <= 0 && !reduce) { meteor(); nextMeteor = 5 + Math.random() * 7; }
    for (var mi = meteors.length - 1; mi >= 0; mi--) {
      var mt = meteors[mi]; mt.t += dt; mt.x += mt.vx * dt; mt.y += mt.vy * dt;
      var ps = mt.l.geometry.attributes.position.array; ps[0] = mt.x; ps[1] = mt.y; ps[2] = mt.z; ps[3] = mt.x - mt.vx * 0.22; ps[4] = mt.y - mt.vy * 0.22; ps[5] = mt.z;
      mt.l.geometry.attributes.position.needsUpdate = true; mt.l.material.opacity = Math.max(0, 0.9 - mt.t * 0.7);
      if (mt.t > 1.3) { scene.remove(mt.l); mt.l.geometry.dispose(); mt.l.material.dispose(); meteors.splice(mi, 1); }
    }
    core.rotation.y += dt * 0.35 * sp; core.rotation.x += dt * 0.12 * sp;
    wire.rotation.y -= dt * 0.2 * sp; wire.rotation.z += dt * 0.08 * sp;
    spark.scale.setScalar(1 + Math.sin(t * 2.2) * 0.08);
    rings.forEach(function (r, i) {
      r.a += dt * r.v * sp; r.sat.position.set(Math.cos(r.a) * r.r, Math.sin(r.a) * r.r, 0);
      r.g.rotation.z += dt * 0.05 * (i % 2 ? -1 : 1) * sp;
    });
    prog.visible = m.prog; if (prog.visible) { var pv = 2 * 9.5 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect; prog.scale.setScalar(Math.min(1, pv * 0.86 / (2 * PR))); }
    if (flashT > 0) { flashT = Math.max(0, flashT - dt); tmp.copy(coreCol).multiplyScalar(0.45).lerp(hot, flashT / 0.9); coreMat.emissive.copy(tmp); }
    stars.rotation.y += dt * 0.006 * sp; stars.rotation.x = Math.sin(t * 0.05) * 0.03;
    camera.position.x += ((reduce ? 0 : mx * 0.7) - camera.position.x) * 0.04;
    camera.position.y += ((reduce ? 0 : -my * 0.45) - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  if (!document.hidden) requestAnimationFrame(frame); else document.addEventListener('visibilitychange', function once() { if (!document.hidden) { document.removeEventListener('visibilitychange', once); last = performance.now(); requestAnimationFrame(frame); } });

  api.ok = true;
  api.setMode = function (m) { if (modes[m]) { mode = m; canvas.classList.toggle('faint', m === 'dim'); if (window.FX) FX.quiet = m === 'focus'; } };
  api.setProgress = setProgress;
  api.orbScreen = orbScreen;
  api.onOrb = null;
  api.setWeek = function (arr) { for (var i = 0; i < 7; i++) beads[i].tgt = arr && arr[i] ? 1 : 0; };
  api.setLevel = function (lv) {
    level = Math.max(0, Math.min(LV.length - 1, lv | 0)); coreTarget.setHex(LV[level]);
    rings.forEach(function (r, i) { r.g.visible = level >= [0, 1, 3][i]; });
    halo.visible = level >= 5; spark.material.color.setHex(level >= 6 ? 0xffffff : GOLD);
  };
  api.evolve = function () { shock(GOLD, true); shock(CYAN, true); pulse = 1.4; flashT = 0.9; var s = orbScreen(); window.FX && (FX.burst(s.x, s.y, 70, { speed: 520 }), FX.confetti(s.x, s.y, 60, { spread: 3.2, speed: 700 })); };
  api.flash = function () { flashT = 0.9; pulse = 0.5; };
  api.burst = function () { pulse = 1.2; arcMat.color.setHex(0x3DDC97); setTimeout(function () { arcMat.color.setHex(GOLD); }, 2500); };
  return api;
})();

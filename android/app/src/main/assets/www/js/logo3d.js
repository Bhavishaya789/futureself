/* FutureSelf 3D logo: a glass F whose top bar rises, swaying on its own.
   Needs the global THREE (three.min.js). Same file is used by the Windows app,
   the Android app and the website.
   FSLogo.mount(el, {size, still, fallback})  -> {destroy()}
   Elements with [data-fslogo] mount by themselves; the sidebar .brand .mark does too.
   The app shows a short splash with the logo on launch. */
(function () {
  'use strict';
  var C1 = '#5b5bf0', C2 = '#22d3ee';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var shared = null; // geometry built once

  function rounded(pts, r) {
    var s = new THREE.Shape(), n = pts.length;
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i + n - 1) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
      var v1 = new THREE.Vector2(p0[0] - p1[0], p0[1] - p1[1]), v2 = new THREE.Vector2(p2[0] - p1[0], p2[1] - p1[1]);
      var l1 = v1.length(), l2 = v2.length(); v1.normalize(); v2.normalize();
      var rr = Math.min(r, l1 / 2.2, l2 / 2.2);
      var a = new THREE.Vector2(p1[0] + v1.x * rr, p1[1] + v1.y * rr), b = new THREE.Vector2(p1[0] + v2.x * rr, p1[1] + v2.y * rr);
      if (i === 0) s.moveTo(a.x, a.y); else s.lineTo(a.x, a.y);
      s.quadraticCurveTo(p1[0], p1[1], b.x, b.y);
    }
    s.closePath(); return s;
  }
  function geometry() {
    if (shared) return shared;
    var shape = rounded([[0, 0], [1, 0], [1, 1.05], [2, 1.05], [2, 1.95], [1, 1.95], [1, 2.3], [2.35, 2.3], [3.3, 3.75], [0, 3.75]], .34);
    var g = new THREE.ExtrudeGeometry(shape, { depth: .55, bevelEnabled: true, bevelThickness: .2, bevelSize: .17, bevelSegments: 10, curveSegments: 14 });
    g.translate(-1.55, -1.9, -.28);
    var p = g.attributes.position, a = new Float32Array(p.count * 3), c1 = new THREE.Color(C1), c2 = new THREE.Color(C2), t = new THREE.Color();
    for (var i = 0; i < p.count; i++) {
      var k = Math.min(1, Math.max(0, (p.getY(i) + 1.9) / 3.8 * .55 + (p.getX(i) + 1.5) / 3.4 * .5 - .05));
      t.copy(c1).lerp(c2, k); a[i * 3] = t.r; a[i * 3 + 1] = t.g; a[i * 3 + 2] = t.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
    shared = { g: g, edges: new THREE.EdgesGeometry(g, 50) };
    return shared;
  }
  function envTexture(renderer) {
    var c = document.createElement('canvas'); c.width = 512; c.height = 256; var x = c.getContext('2d');
    var gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#1b2470'); gr.addColorStop(.5, '#0a0e2a'); gr.addColorStop(1, '#04050f');
    x.fillStyle = gr; x.fillRect(0, 0, 512, 256);
    [[60, 40, 120, 50, '#7aa6d6'], [300, 30, 140, 40, '#4aa8d8'], [200, 150, 90, 30, '#5560d8'], [420, 120, 60, 60, '#9fc4ee']].forEach(function (b) { x.fillStyle = b[4]; x.fillRect(b[0], b[1], b[2], b[3]); });
    var tex = new THREE.CanvasTexture(c); tex.mapping = THREE.EquirectangularReflectionMapping; if ('encoding' in tex) tex.encoding = THREE.sRGBEncoding;
    var pm = new THREE.PMREMGenerator(renderer); var env = pm.fromEquirectangular(tex).texture; pm.dispose(); tex.dispose(); return env;
  }

  var live = [];
  var raf = 0, t0 = performance.now();
  function loop() {
    raf = requestAnimationFrame(loop);
    var t = (performance.now() - t0) / 1000 * (reduce ? .6 : 1), n = 0;
    for (var i = 0; i < live.length; i++) { var L = live[i]; if (L.visible) { L.frame(t); n++; } }
  }
  function ensureLoop() { if (!raf) loop(); }
  document.addEventListener('visibilitychange', function () { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (live.length) ensureLoop(); });

  function mount(el, o) {
    o = o || {};
    if (!window.THREE) return fail(el, o);
    var cv = document.createElement('canvas');
    cv.style.cssText = 'display:block;width:100%;height:100%';
    cv.setAttribute('aria-hidden', 'true');
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true, preserveDrawingBuffer: !!o.still }); } catch (e) { return fail(el, o); }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if ('outputEncoding' in renderer) renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .6;
    var scene = new THREE.Scene(); scene.environment = envTexture(renderer);
    var cam = new THREE.PerspectiveCamera(32, 1, .1, 100); cam.position.set(0, .15, 11.5);
    var G = geometry();
    var mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, metalness: .6, roughness: .2, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: .4 });
    var mesh = new THREE.Mesh(G.g, mat);
    var edge = new THREE.LineSegments(G.edges, new THREE.LineBasicMaterial({ color: 0xdff6ff, transparent: true, opacity: .22 }));
    var rig = new THREE.Group(); rig.add(mesh, edge); rig.position.y = -.05; scene.add(rig);
    var big = (el.clientWidth || o.size || 64) >= 100, ring = null, dot = null, ring2 = null;
    if (big) {
      ring = new THREE.Mesh(new THREE.TorusGeometry(2.75, .02, 10, 160), new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: .6 }));
      ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, .014, 10, 160), new THREE.MeshBasicMaterial({ color: 0x8b7bff, transparent: true, opacity: .5 }));
      dot = new THREE.Mesh(new THREE.SphereGeometry(.13, 16, 16), new THREE.MeshBasicMaterial({ color: 0xe8fbff }));
      ring.add(dot); ring.rotation.x = 1.2; ring2.rotation.x = 1.2; ring2.rotation.y = .9; scene.add(ring, ring2);
    }
    scene.add(new THREE.AmbientLight(0x8a94ff, .25));
    var key = new THREE.DirectionalLight(0xffffff, .25); key.position.set(3, 5, 8); scene.add(key);
    var rim = new THREE.PointLight(0x22d3ee, 40, 40); rim.position.set(-6, 2, -3); scene.add(rim);
    var fill = new THREE.PointLight(0x5b5bf0, 30, 40); fill.position.set(5, -4, 4); scene.add(fill);
    el.appendChild(cv);
    function size() { var w = el.clientWidth || o.size || 64, h = el.clientHeight || o.size || 64; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); }
    size();
    var ro = window.ResizeObserver ? new ResizeObserver(size) : null; if (ro) ro.observe(el);
    function ease(x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
    var L = { visible: true, frame: function (t) {
      var cyc = (t % 5) / 5, spin = cyc < .3 ? ease(cyc / .3) * Math.PI * 2 : 0;
      rig.rotation.y = Math.sin(t * 1.5) * .85 + spin; rig.rotation.x = Math.sin(t * 1.1) * .16 + .03; rig.rotation.z = Math.sin(t * .9) * .05;
      rig.position.y = -.05 + Math.sin(t * 2) * .2; rig.scale.setScalar(1 + Math.sin(t * 2.4) * .035);
      rim.position.x = -6 * Math.cos(t * 1.4); rim.position.y = 2 + Math.sin(t * 1.1) * 2; key.position.x = 3 + 3 * Math.sin(t * 1.3);
      if (ring) { ring.rotation.z = t * 1.1; ring2.rotation.z = -t * .8; ring.rotation.y = Math.sin(t * .6) * .4; dot.position.set(2.75, 0, 0); }
      renderer.render(scene, cam);
    } };
    var io = window.IntersectionObserver ? new IntersectionObserver(function (e) { L.visible = e[0].isIntersecting; }) : null; if (io) io.observe(el);
    if (o.still) { rig.rotation.set(o.still.rx || 0, o.still.ry || 0, 0); rig.position.y = 0; renderer.render(scene, cam); }
    else { live.push(L); ensureLoop(); }
    return { canvas: cv, render: function () { renderer.render(scene, cam); }, destroy: function () {
      var i = live.indexOf(L); if (i >= 0) live.splice(i, 1);
      if (ro) ro.disconnect(); if (io) io.disconnect();
      renderer.dispose(); mat.dispose(); if (cv.parentNode) cv.parentNode.removeChild(cv);
    } };
  }
  function fail(el, o) {
    if (o.fallback !== false) { var im = new Image(); im.src = o.fallback || 'icons/icon-192.png'; im.alt = ''; im.style.cssText = 'width:100%;height:100%;object-fit:contain'; el.appendChild(im); }
    return { destroy: function () {} };
  }

  function autoMount(root) {
    (root || document).querySelectorAll('[data-fslogo]:not([data-fs-on])').forEach(function (el) { el.setAttribute('data-fs-on', '1'); mount(el, { fallback: el.getAttribute('data-fallback') || undefined }); });
    // in-app sidebar brand mark
    (root || document).querySelectorAll('.brand .mark:not([data-fs-on])').forEach(function (el) {
      el.setAttribute('data-fs-on', '1'); el.innerHTML = ''; el.style.background = 'none'; el.style.boxShadow = 'none'; el.style.width = '38px'; el.style.height = '38px';
      mount(el, { size: 38 });
    });
  }

  function splash() {
    if (!window.THREE || window.__fsSplash || /[?&]nosplash\b/.test(location.search)) return; window.__fsSplash = 1;
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:radial-gradient(circle at 50% 38%,#151b55 0%,#080b22 55%,#04050f 100%);transition:opacity .55s ease;opacity:1';
    d.innerHTML = '<div id="fs-spl" style="width:min(46vmin,240px);height:min(46vmin,240px)"></div>' +
      '<div style="font:800 28px/1 Sora,\'Segoe UI\',system-ui,sans-serif;letter-spacing:-.02em;color:#eef0ff">Future<span style="background:linear-gradient(120deg,#5b5bf0,#22d3ee);-webkit-background-clip:text;background-clip:text;color:transparent">Self</span></div>' +
      '<div style="font:500 12px/1 system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#7f89b8">Study lock-in</div>';
    document.body.appendChild(d);
    var m = mount(d.querySelector('#fs-spl'), { size: 240 });
    setTimeout(function () { d.style.opacity = '0'; d.style.pointerEvents = 'none'; }, 1700);
    setTimeout(function () { m.destroy(); d.remove(); }, 2400);
  }

  window.FSLogo = { mount: mount, splash: splash };
  function boot() {
    autoMount(document);
    if (document.getElementById('app')) {
      splash();
      new MutationObserver(function () { autoMount(document); }).observe(document.getElementById('app'), { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();

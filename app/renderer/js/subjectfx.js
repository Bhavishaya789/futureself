/* FutureSelf SubjectFX: every subject gets its own animated backdrop while you study it.
   One 2D canvas (#subj) behind the content. Each subject = a motif + two colours. Idle cost is zero when not on a subject. */
window.SubjectFX = (function () {
  var cv = document.getElementById('subj'), ctx = cv && cv.getContext('2d');
  var api = { current: null };
  if (!ctx) { api.set = api.clear = api.preview = api.poke = function () { }; return api; }
  var W = 0, H = 0, dpr = 1, raf = 0, last = 0, T = 0, st = null, th = null, mouse = { x: -1, y: -1 };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fxOn = function () { try { return localStorage.getItem('fs_fx') !== '0'; } catch (e) { return true; } };
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rgba(h, a) { a = Math.min(1, a * 1.8); var n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
  function size() { dpr = Math.min(devicePixelRatio || 1, 1.5); W = innerWidth; H = innerHeight; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); if (th) st = th.m.init(); }
  addEventListener('resize', function () { if (api.current) size(); });
  addEventListener('pointermove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  addEventListener('pointerdown', function (e) { if (st && th && th.m.poke) th.m.poke(st, e.clientX, e.clientY); }, { passive: true });
  function line(x1, y1, x2, y2) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }
  function circ(x, y, r, fill) { ctx.beginPath(); ctx.arc(x, y, Math.max(0, r), 0, 6.2832); fill ? ctx.fill() : ctx.stroke(); }
  function near(x, y, r) { var dx = x - mouse.x, dy = y - mouse.y; return dx * dx + dy * dy < r * r; }
  function gear(x, y, r, teeth, rot, col, a) {
    ctx.strokeStyle = rgba(col, a); ctx.lineWidth = 2; ctx.beginPath();
    for (var i = 0; i < teeth * 2; i++) { var ang = rot + i * Math.PI / teeth, rr = i % 2 ? r : r * 1.18; ctx.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr); }
    ctx.closePath(); ctx.stroke(); circ(x, y, r * 0.35, false);
  }
  var S = { cheap: 1 };

  /* ---------- motifs: init() returns state, draw(state, dt) paints ---------- */
  var M = {};

  M.circuit = { // traces with travelling pulses: electronics, IoT, architecture
    init: function () {
      var g = 44, paths = [], n = Math.round(W * H / 38000);
      for (var i = 0; i < n; i++) {
        var x = Math.round(rnd(0, W) / g) * g, y = Math.round(rnd(0, H) / g) * g, p = [[x, y]], hz = Math.random() < .5;
        for (var k = 0; k < 4; k++) { var d = (Math.random() < .5 ? -1 : 1) * g * Math.round(rnd(1, 4)); if (hz) x += d; else y += d; p.push([x, y]); hz = !hz; }
        var len = 0, seg = []; for (var j = 1; j < p.length; j++) { var l = Math.abs(p[j][0] - p[j - 1][0]) + Math.abs(p[j][1] - p[j - 1][1]); seg.push(l); len += l; }
        paths.push({ p: p, seg: seg, len: len, t: Math.random(), v: rnd(.05, .14) });
      }
      return { paths: paths };
    },
    draw: function (s, dt, a, b) {
      s.paths.forEach(function (pa) {
        ctx.strokeStyle = rgba(a, .18); ctx.lineWidth = 2; ctx.beginPath(); pa.p.forEach(function (q, i) { i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }); ctx.stroke();
        pa.p.forEach(function (q) { ctx.fillStyle = rgba(a, .35); circ(q[0], q[1], 3.5, true); });
        pa.t = (pa.t + pa.v * dt) % 1; var d = pa.t * pa.len, i = 0; while (i < pa.seg.length - 1 && d > pa.seg[i]) { d -= pa.seg[i]; i++; }
        var A = pa.p[i], B = pa.p[i + 1], f = d / pa.seg[i], x = A[0] + (B[0] - A[0]) * f, y = A[1] + (B[1] - A[1]) * f;
        var g = ctx.createRadialGradient(x, y, 0, x, y, 18); g.addColorStop(0, rgba(b, .95)); g.addColorStop(1, rgba(b, 0)); ctx.fillStyle = g; circ(x, y, 18, true);
      });
    }, poke: function (s) { s.paths.forEach(function (p) { p.v *= 2.2; setTimeout(function () { p.v /= 2.2; }, 900); }); }
  };

  M.db = { // tables with a scanning query and floating disks
    init: function () { return { y: 0, disks: [0, 1, 2, 3].map(function (i) { return { x: rnd(.1, .9) * W, y: rnd(.1, .9) * H, p: rnd(0, 6), r: rnd(30, 52) }; }) }; },
    draw: function (s, dt, a, b) {
      var cw = 130, rh = 34, cols = Math.ceil(W / cw), rows = Math.ceil(H / rh); s.y = (s.y + 90 * dt) % (rh * rows);
      ctx.lineWidth = 1; ctx.strokeStyle = rgba(a, .09);
      for (var c = 0; c <= cols; c++) line(c * cw, 0, c * cw, H); for (var r = 0; r <= rows; r++) line(0, r * rh, W, r * rh);
      var g = ctx.createLinearGradient(0, s.y - 60, 0, s.y + 6); g.addColorStop(0, rgba(b, 0)); g.addColorStop(1, rgba(b, .28)); ctx.fillStyle = g; ctx.fillRect(0, s.y - 60, W, 66);
      s.disks.forEach(function (d) {
        d.p += dt * .6; var y = d.y + Math.sin(d.p) * 14;
        for (var k = 0; k < 3; k++) { ctx.strokeStyle = rgba(k % 2 ? b : a, .38); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(d.x, y - k * 16, d.r, d.r * .32, 0, 0, 6.2832); ctx.stroke(); line(d.x - d.r, y - k * 16, d.x - d.r, y - k * 16 - 16); line(d.x + d.r, y - k * 16, d.x + d.r, y - k * 16 - 16); }
      });
    }
  };

  M.gears = { // meshed rotating gears: OS, software engineering
    init: function () { var gs = []; for (var i = 0; i < 6; i++) gs.push({ x: rnd(.05, .95) * W, y: rnd(.1, .95) * H, r: rnd(40, 95), t: Math.round(rnd(8, 16)), d: i % 2 ? 1 : -1, rot: rnd(0, 6) }); return { gs: gs }; },
    draw: function (s, dt, a, b) { s.gs.forEach(function (g, i) { g.rot += g.d * dt * 30 / g.r; gear(g.x, g.y, g.r, g.t, g.rot, i % 2 ? a : b, .26); }); }
  };

  M.sched = { // Gantt-style scheduler bars with a sweeping clock
    init: function () { var rows = []; for (var i = 0; i < 9; i++) { var bars = [], x = rnd(-200, 0); while (x < W + 300) { var w = rnd(60, 220); bars.push({ x: x, w: w, c: Math.random() }); x += w + rnd(10, 70); } rows.push({ y: (i + .6) * H / 9.5, bars: bars, v: rnd(10, 38) * (i % 2 ? 1 : -1) }); } return { rows: rows, t: 0 }; },
    draw: function (s, dt, a, b) {
      s.t = (s.t + dt * 110) % (W + 100);
      s.rows.forEach(function (r) {
        r.bars.forEach(function (bar) { bar.x += r.v * dt; if (r.v > 0 && bar.x > W + 100) bar.x = -bar.w - 80; if (r.v < 0 && bar.x + bar.w < -100) bar.x = W + 80; ctx.fillStyle = rgba(bar.c > .5 ? a : b, .14); ctx.strokeStyle = rgba(bar.c > .5 ? a : b, .4); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(bar.x, r.y - 11, bar.w, 22, 6) : ctx.rect(bar.x, r.y - 11, bar.w, 22); ctx.fill(); ctx.stroke(); });
      });
      var g = ctx.createLinearGradient(s.t - 40, 0, s.t, 0); g.addColorStop(0, rgba(b, 0)); g.addColorStop(1, rgba(b, .35)); ctx.fillStyle = g; ctx.fillRect(s.t - 40, 0, 40, H); ctx.strokeStyle = rgba(b, .8); line(s.t, 0, s.t, H);
    }
  };

  M.automata = { // states with tokens walking along arrows: theory of computation
    init: function () {
      var n = Math.max(5, Math.round(W / 220)), nodes = [], i;
      for (i = 0; i < n; i++) nodes.push({ x: (i + .5) * W / n + rnd(-30, 30), y: H * (.25 + .5 * ((i * 37) % 10) / 10) + rnd(-30, 30) });
      var edges = []; for (i = 0; i < n; i++) { edges.push([i, (i + 1) % n]); if (Math.random() < .6) edges.push([i, (i + 2) % n]); }
      return { nodes: nodes, edges: edges, tok: edges.map(function () { return Math.random(); }) };
    },
    draw: function (s, dt, a, b) {
      s.edges.forEach(function (e, i) {
        var A = s.nodes[e[0]], B = s.nodes[e[1]], mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2 - 60;
        ctx.strokeStyle = rgba(a, .22); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.quadraticCurveTo(mx, my, B.x, B.y); ctx.stroke();
        s.tok[i] = (s.tok[i] + dt * .16) % 1; var t = s.tok[i], x = (1 - t) * (1 - t) * A.x + 2 * (1 - t) * t * mx + t * t * B.x, y = (1 - t) * (1 - t) * A.y + 2 * (1 - t) * t * my + t * t * B.y;
        ctx.fillStyle = rgba(b, .9); circ(x, y, 4, true); ctx.fillStyle = rgba(b, .18); circ(x, y, 12, true);
      });
      s.nodes.forEach(function (n, i) { ctx.strokeStyle = rgba(a, .5); ctx.lineWidth = 2; circ(n.x, n.y, 26, false); if (i % 3 === 0) circ(n.x, n.y, 21, false); ctx.fillStyle = rgba(a, .08); circ(n.x, n.y, 26, true); });
    }
  };

  M.symbols = { // drifting maths symbols and a sweeping function curve
    init: function (o) { var sy = (o && o.set) || ['∑', '∫', '∞', 'π', '√', 'Δ', 'θ', 'λ', '≠', '∂', '∈', '∀']; return { p: Array.apply(null, Array(26)).map(function () { return { x: rnd(0, W), y: rnd(0, H), s: rnd(22, 62), c: pick(sy), v: rnd(6, 22), r: rnd(-.4, .4), a: rnd(.08, .22) }; }), ph: 0 }; },
    draw: function (s, dt, a, b) {
      s.ph += dt; s.p.forEach(function (p) { p.y -= p.v * dt; if (p.y < -60) { p.y = H + 40; p.x = rnd(0, W); } ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r + Math.sin(s.ph + p.x) * .08); ctx.font = p.s + 'px serif'; ctx.fillStyle = rgba(near(p.x, p.y, 120) ? b : a, p.a * (near(p.x, p.y, 120) ? 2 : 1)); ctx.fillText(p.c, 0, 0); ctx.restore(); });
      [[a, 0, 1], [b, 2, 1.7]].forEach(function (cfg) { ctx.strokeStyle = rgba(cfg[0], .35); ctx.lineWidth = 2.2; ctx.beginPath(); for (var x = 0; x <= W; x += 8) { var y = H * .78 + Math.sin(x / (90 / cfg[2]) + s.ph * (1 + cfg[1] * .3)) * 46 * (cfg[2] > 1 ? .6 : 1); x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); });
    }
  };

  M.graph = { // nodes and edges that reach toward the cursor
    init: function () { var n = Math.round(W * H / 30000), p = []; for (var i = 0; i < n; i++) p.push({ x: rnd(0, W), y: rnd(0, H), vx: rnd(-14, 14), vy: rnd(-14, 14) }); return { p: p }; },
    draw: function (s, dt, a, b) {
      s.p.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; });
      for (var i = 0; i < s.p.length; i++) for (var j = i + 1; j < s.p.length; j++) { var A = s.p[i], B = s.p[j], d = Math.hypot(A.x - B.x, A.y - B.y); if (d < 190) { ctx.strokeStyle = rgba(near(A.x, A.y, 160) ? b : a, (1 - d / 190) * .35); ctx.lineWidth = 1.4; line(A.x, A.y, B.x, B.y); } }
      s.p.forEach(function (p) { ctx.fillStyle = rgba(near(p.x, p.y, 160) ? b : a, .7); circ(p.x, p.y, 4.5, true); });
    }
  };

  M.neural = { // layered network with signals flowing forward
    init: function (o) { var L = (o && o.layers) || [3, 5, 6, 5, 3], cols = L.length, nodes = []; L.forEach(function (n, li) { for (var i = 0; i < n; i++) nodes.push({ l: li, x: (li + .5) / cols * W, y: H * .2 + (i + .5) / n * H * .6 }); }); var sig = []; for (var k = 0; k < 40; k++) sig.push({ a: 0, b: 0, t: 1 }); return { nodes: nodes, L: L, sig: sig }; },
    draw: function (s, dt, a, b) {
      var N = s.nodes; for (var i = 0; i < N.length; i++) for (var j = 0; j < N.length; j++) if (N[j].l === N[i].l + 1) { ctx.strokeStyle = rgba(a, .07); ctx.lineWidth = 1; line(N[i].x, N[i].y, N[j].x, N[j].y); }
      s.sig.forEach(function (g) { g.t += dt * .7; if (g.t >= 1) { var i = Math.floor(rnd(0, N.length)), cands = N.map(function (n, k) { return N[k].l === N[i].l + 1 ? k : -1; }).filter(function (k) { return k >= 0; }); if (!cands.length) { g.t = 1; g.a = i; g.b = i; return; } g.a = i; g.b = pick(cands); g.t = 0; } var A = N[g.a], B = N[g.b], x = A.x + (B.x - A.x) * g.t, y = A.y + (B.y - A.y) * g.t; ctx.fillStyle = rgba(b, .85); circ(x, y, 3.2, true); });
      N.forEach(function (n) { ctx.fillStyle = rgba(a, .22); ctx.strokeStyle = rgba(near(n.x, n.y, 100) ? b : a, .7); ctx.lineWidth = 2; circ(n.x, n.y, 13, true); circ(n.x, n.y, 13, false); });
    }
  };

  M.code = { // falling code tokens, different vocabulary per subject
    init: function (o) { var tk = (o && o.tokens) || ['{', '}', '()', ';', '=>', 'int', 'for', 'if']; var cols = Math.round(W / 70), c = []; for (var i = 0; i < cols; i++) c.push({ x: i * 70 + 20, y: rnd(0, H * 1.1), v: rnd(30, 90), t: Array.apply(null, Array(12)).map(function () { return pick(tk); }) }); return { c: c }; },
    draw: function (s, dt, a, b) { ctx.font = '15px "Courier New",monospace'; s.c.forEach(function (c) { c.y += c.v * dt; if (c.y - c.t.length * 24 > H) c.y = rnd(-200, 0); c.t.forEach(function (tk, i) { var y = c.y - i * 24, f = 1 - i / c.t.length; ctx.fillStyle = rgba(i === 0 ? b : a, (i === 0 ? .85 : .5) * f * (near(c.x, y, 110) ? 1.8 : 1)); ctx.fillText(tk, c.x, y); }); }); }
  };

  M.mandala = { // sacred geometry: rotating rings of petals
    init: function () { return { r: 0 }; },
    draw: function (s, dt, a, b) {
      s.r += dt * .12; var cx = W * .72, cy = H * .5, base = Math.min(W, H) * .5;
      for (var ring = 0; ring < 5; ring++) { var n = 8 + ring * 4, rr = base * (.25 + ring * .17); ctx.strokeStyle = rgba(ring % 2 ? a : b, .3 - ring * .03); ctx.lineWidth = 1.6; for (var i = 0; i < n; i++) { var ang = s.r * (ring % 2 ? 1 : -1) + i * 6.2832 / n, px = cx + Math.cos(ang) * rr, py = cy + Math.sin(ang) * rr; ctx.beginPath(); ctx.ellipse(px, py, base * .09, base * .045 + ring * 3, ang, 0, 6.2832); ctx.stroke(); } circ(cx, cy, rr, false); }
      ctx.strokeStyle = rgba(b, .35); for (var k = 0; k < 6; k++) { var a1 = s.r * 2 + k * 1.0472; line(cx + Math.cos(a1) * base * .1, cy + Math.sin(a1) * base * .1, cx + Math.cos(a1) * base * .95, cy + Math.sin(a1) * base * .95); }
    }
  };

  M.community = { // people-dots drifting together, forming links
    init: function () { var p = []; for (var i = 0; i < Math.round(W * H / 36000); i++) p.push({ x: rnd(0, W), y: rnd(0, H), t: rnd(0, 6), r: rnd(5, 9) }); return { p: p, tm: 0 }; },
    draw: function (s, dt, a, b) {
      s.tm += dt;
      s.p.forEach(function (p, i) { p.t += dt * .3; p.x += Math.cos(p.t + i) * 14 * dt; p.y += Math.sin(p.t * 1.3 + i) * 14 * dt; if (mouse.x > 0 && near(p.x, p.y, 220)) { p.x += (mouse.x - p.x) * .4 * dt; p.y += (mouse.y - p.y) * .4 * dt; } });
      for (var i = 0; i < s.p.length; i++) for (var j = i + 1; j < s.p.length; j++) { var A = s.p[i], B = s.p[j], d = Math.hypot(A.x - B.x, A.y - B.y); if (d < 150) { ctx.strokeStyle = rgba(b, (1 - d / 150) * .3); ctx.lineWidth = 1.5; line(A.x, A.y, B.x, B.y); } }
      s.p.forEach(function (p) { ctx.fillStyle = rgba(a, .6); circ(p.x, p.y - p.r * 1.3, p.r * .55, true); ctx.beginPath(); ctx.arc(p.x, p.y + p.r * .7, Math.max(0, p.r), Math.PI, 0); ctx.fill(); });
    }
  };

  M.atom = { // orbiting electrons
    init: function () { return { a: 0 }; },
    draw: function (s, dt, a, b) {
      s.a += dt; [[W * .75, H * .45, 1], [W * .2, H * .75, .6]].forEach(function (c) { for (var k = 0; k < 3; k++) { var rot = k * Math.PI / 3 + s.a * .1; ctx.save(); ctx.translate(c[0], c[1]); ctx.rotate(rot); ctx.strokeStyle = rgba(a, .28); ctx.lineWidth = 1.6; ctx.beginPath(); ctx.ellipse(0, 0, 190 * c[2], 70 * c[2], 0, 0, 6.2832); ctx.stroke(); var t = s.a * (1.2 + k * .3); ctx.fillStyle = rgba(b, .95); circ(Math.cos(t) * 190 * c[2], Math.sin(t) * 70 * c[2], 6, true); ctx.restore(); } ctx.fillStyle = rgba(b, .6); circ(c[0], c[1], 12 * c[2], true); });
    }
  };

  M.network = { // packets hopping between routers
    init: function () { var n = Math.round(W * H / 52000), nodes = []; for (var i = 0; i < n; i++) nodes.push({ x: rnd(.04, .96) * W, y: rnd(.06, .94) * H }); var edges = []; nodes.forEach(function (a, i) { nodes.map(function (b, j) { return [j, Math.hypot(a.x - b.x, a.y - b.y)]; }).sort(function (u, v) { return u[1] - v[1]; }).slice(1, 3).forEach(function (q) { edges.push([i, q[0]]); }); }); return { nodes: nodes, edges: edges, pk: edges.map(function () { return { t: Math.random(), d: Math.random() < .5 ? 1 : -1 }; }) }; },
    draw: function (s, dt, a, b) {
      s.edges.forEach(function (e, i) { var A = s.nodes[e[0]], B = s.nodes[e[1]]; ctx.strokeStyle = rgba(a, .15); ctx.lineWidth = 1.5; line(A.x, A.y, B.x, B.y); var p = s.pk[i]; p.t += dt * .25; if (p.t > 1) { p.t = 0; p.d = Math.random() < .5 ? 1 : -1; } var f = p.d > 0 ? p.t : 1 - p.t; ctx.fillStyle = rgba(b, .9); ctx.fillRect(A.x + (B.x - A.x) * f - 4, A.y + (B.y - A.y) * f - 4, 8, 8); });
      s.nodes.forEach(function (n) { ctx.strokeStyle = rgba(a, .6); ctx.lineWidth = 2; circ(n.x, n.y, 12, false); ctx.fillStyle = rgba(a, .15); circ(n.x, n.y, 12, true); });
    }
  };

  M.cube = { // rotating wireframe solids: graphics
    init: function () { return { a: 0 }; },
    draw: function (s, dt, a, b) {
      s.a += dt * .5; var V = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
      [[W * .75, H * .45, Math.min(W, H) * .2, 0], [W * .22, H * .72, Math.min(W, H) * .1, 1.4]].forEach(function (c) {
        var P = V.map(function (v) { var x = v[0], y = v[1], z = v[2], t = s.a + c[3], cx = Math.cos(t), sx = Math.sin(t), x1 = x * cx - z * sx, z1 = x * sx + z * cx, cy = Math.cos(t * .7), sy = Math.sin(t * .7), y1 = y * cy - z1 * sy, z2 = y * sy + z1 * cy, f = 3 / (3 + z2); return [c[0] + x1 * c[2] * f, c[1] + y1 * c[2] * f]; });
        ctx.lineWidth = 2; E.forEach(function (e, i) { ctx.strokeStyle = rgba(i < 8 ? a : b, .5); line(P[e[0]][0], P[e[0]][1], P[e[1]][0], P[e[1]][1]); }); P.forEach(function (p) { ctx.fillStyle = rgba(b, .8); circ(p[0], p[1], 3.5, true); });
      });
    }
  };

  M.tree = { // trees that grow node by node: DS, algorithms, compilers
    init: function (o) { var roots = [], mk = function (x, y, d, w) { var n = { x: x, y: y, k: [], t: rnd(0, 3) }; if (d < 4) { n.k.push(mk(x - w, y + 90, d + 1, w / 2)); if (Math.random() < .85) n.k.push(mk(x + w, y + 90, d + 1, w / 2)); } return n; }; roots.push(mk(W * .72, 70, 0, W * .12)); roots.push(mk(W * .2, H * .55, 1, W * .06)); return { r: roots, t: 0, lbl: (o && o.labels) || null }; },
    draw: function (s, dt, a, b) {
      s.t += dt; var self = this; (function walk(n, d, par) {
        var vis = Math.min(1, Math.max(0, (s.t * .9 - d * .5) % 9)); if (vis > 1) vis = 1; if (par) { ctx.strokeStyle = rgba(a, .35 * vis); ctx.lineWidth = 1.8; line(par.x, par.y, par.x + (n.x - par.x) * vis, par.y + (n.y - par.y) * vis); }
        ctx.fillStyle = rgba(d % 2 ? a : b, .22 * vis + .05); ctx.strokeStyle = rgba(d % 2 ? a : b, .7 * vis); ctx.lineWidth = 2; circ(n.x, n.y, 15 * vis, true); circ(n.x, n.y, 15 * vis, false); n.k.forEach(function (k) { walk(k, d + 1, n); });
      })(s.r[0], 0, null); (function walk(n, d, par) { if (par) { ctx.strokeStyle = rgba(b, .3); line(par.x, par.y, n.x, n.y); } ctx.strokeStyle = rgba(a, .5); circ(n.x, n.y, 9, false); n.k.forEach(function (k) { walk(k, d + 1, n); }); })(s.r[1], 0, null);
      if (s.t > 14) { s.t = 0; }
    }
  };

  M.chart = { // scatter clusters that regroup: data mining, big data, ML in industry
    init: function () { var c = [[.3, .3], [.7, .35], [.5, .72], [.85, .75]].map(function (q) { return { x: q[0] * W, y: q[1] * H }; }), p = []; for (var i = 0; i < 130; i++) { var k = i % c.length; p.push({ k: k, x: rnd(0, W), y: rnd(0, H), ox: rnd(-80, 80), oy: rnd(-60, 60) }); } return { c: c, p: p, t: 0 }; },
    draw: function (s, dt, a, b) { s.t += dt; var mix = (Math.sin(s.t * .5) + 1) / 2; s.p.forEach(function (p) { var tx = s.c[p.k].x + p.ox, ty = s.c[p.k].y + p.oy; p.x += (tx - p.x) * dt * (.4 + mix); p.y += (ty - p.y) * dt * (.4 + mix); ctx.fillStyle = rgba(p.k % 2 ? a : b, .55); circ(p.x, p.y, 4, true); }); s.c.forEach(function (c, i) { ctx.strokeStyle = rgba(i % 2 ? a : b, .4); ctx.lineWidth = 2; ctx.setLineDash([6, 6]); circ(c.x, c.y, 105, false); ctx.setLineDash([]); }); }
  };

  M.hex = { // locks, hex streams and a pulsing shield: security & crypto
    init: function () { var cols = Math.round(W / 60), c = []; for (var i = 0; i < cols; i++) c.push({ x: i * 60 + 10, y: rnd(-H, 0), v: rnd(20, 70), s: Array.apply(null, Array(10)).map(function () { return Math.floor(rnd(0, 255)).toString(16).toUpperCase().padStart(2, '0'); }) }); return { c: c, t: 0 }; },
    draw: function (s, dt, a, b) {
      s.t += dt; ctx.font = '13px "Courier New",monospace'; s.c.forEach(function (c) { c.y += c.v * dt; if (c.y - 260 > H) c.y = rnd(-200, 0); c.s.forEach(function (h, i) { ctx.fillStyle = rgba(a, .35 * (1 - i / 10)); ctx.fillText(h, c.x, c.y - i * 20); }); });
      var cx = W * .74, cy = H * .5, r = Math.min(W, H) * (.2 + Math.sin(s.t * 1.5) * .008); ctx.strokeStyle = rgba(b, .5); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r * .8, cy - r * .55); ctx.lineTo(cx + r * .8, cy + r * .1); ctx.quadraticCurveTo(cx + r * .6, cy + r * .75, cx, cy + r); ctx.quadraticCurveTo(cx - r * .6, cy + r * .75, cx - r * .8, cy + r * .1); ctx.lineTo(cx - r * .8, cy - r * .55); ctx.closePath(); ctx.stroke(); ctx.fillStyle = rgba(b, .07); ctx.fill();
      ctx.lineWidth = 4; circ(cx, cy - r * .1, r * .2, false); ctx.fillStyle = rgba(b, .5); ctx.fillRect(cx - r * .25, cy, r * .5, r * .38);
    }
  };

  M.bubbles = { // speech bubbles and letters: language, communication, NLP
    init: function (o) { var wd = (o && o.words) || ['Hello', 'Aa', 'Why?', '...', 'Yes', '"']; return { p: Array.apply(null, Array(16)).map(function () { return { x: rnd(0, W), y: rnd(0, H), w: rnd(80, 170), v: rnd(8, 26), t: pick(wd), a: rnd(0, 6) }; }) }; },
    draw: function (s, dt, a, b) { s.p.forEach(function (p, i) { p.y -= p.v * dt; p.a += dt; if (p.y < -80) { p.y = H + 60; p.x = rnd(0, W); } var x = p.x + Math.sin(p.a) * 14, h = p.w * .42, hot = near(x, p.y, 120); ctx.strokeStyle = rgba(i % 2 ? a : b, hot ? .8 : .38); ctx.fillStyle = rgba(i % 2 ? a : b, .06); ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, p.y, p.w, h, 14) : ctx.rect(x, p.y, p.w, h); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x + 18, p.y + h); ctx.lineTo(x + 10, p.y + h + 14); ctx.lineTo(x + 34, p.y + h); ctx.stroke(); ctx.font = '600 ' + Math.round(h * .5) + 'px sans-serif'; ctx.fillStyle = rgba(i % 2 ? a : b, hot ? .95 : .6); ctx.textAlign = 'center'; ctx.fillText(p.t, x + p.w / 2, p.y + h * .66); ctx.textAlign = 'left'; }); }
  };

  M.globe = { // wireframe globe with orbiting satellites
    init: function () { return { a: 0 }; },
    draw: function (s, dt, a, b) {
      s.a += dt * .3; var cx = W * .74, cy = H * .5, r = Math.min(W, H) * .26; ctx.lineWidth = 1.5;
      ctx.strokeStyle = rgba(a, .35); circ(cx, cy, r, false);
      for (var i = 0; i < 6; i++) { var ph = s.a + i * Math.PI / 6; ctx.strokeStyle = rgba(a, .22); ctx.beginPath(); ctx.ellipse(cx, cy, Math.abs(Math.cos(ph)) * r, r, 0, 0, 6.2832); ctx.stroke(); }
      for (var j = -2; j <= 2; j++) { ctx.strokeStyle = rgba(a, .2); var y = cy + j * r * .33, w = Math.sqrt(Math.max(0, r * r - (j * r * .33) * (j * r * .33))); ctx.beginPath(); ctx.ellipse(cx, y, w, w * .12, 0, 0, 6.2832); ctx.stroke(); }
      for (var k = 0; k < 3; k++) { var t = s.a * (2 + k * .6) + k * 2, ox = Math.cos(t) * r * 1.35, oy = Math.sin(t) * r * .35; ctx.save(); ctx.translate(cx, cy); ctx.rotate(-.4 + k * .5); ctx.strokeStyle = rgba(b, .2); ctx.beginPath(); ctx.ellipse(0, 0, r * 1.35, r * .35, 0, 0, 6.2832); ctx.stroke(); ctx.fillStyle = rgba(b, .95); circ(ox, oy, 5, true); ctx.restore(); }
    }
  };

  M.bulb = { // ideas popping up: design thinking, venture ideation
    init: function () { return { p: [], tm: 0 }; },
    draw: function (s, dt, a, b) {
      s.tm += dt; if (s.tm > .5 && s.p.length < 22) { s.tm = 0; s.p.push({ x: rnd(.05, .95) * W, y: rnd(.1, .95) * H, t: 0, r: rnd(18, 40), c: Math.random() < .5 ? a : b, k: Math.floor(rnd(0, 3)) }); }
      s.p.forEach(function (p, i) { p.t += dt; var k = Math.min(1, p.t * 1.5), al = p.t > 6 ? Math.max(0, 1 - (p.t - 6)) : 1; if (al <= 0) { s.p.splice(i, 1); return; } var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.4 * k); g.addColorStop(0, rgba(p.c, .35 * al)); g.addColorStop(1, rgba(p.c, 0)); ctx.fillStyle = g; circ(p.x, p.y, p.r * 2.4 * k, true); ctx.strokeStyle = rgba(p.c, .7 * al); ctx.lineWidth = 2; circ(p.x, p.y - p.r * .2, p.r * .6 * k, false); ctx.fillStyle = rgba(p.c, .5 * al); ctx.fillRect(p.x - p.r * .22, p.y + p.r * .45, p.r * .44, p.r * .28); for (var r = 0; r < 8; r++) { var an = r * .785; line(p.x + Math.cos(an) * p.r * 1.0 * k, p.y + Math.sin(an) * p.r * 1.0 * k, p.x + Math.cos(an) * p.r * 1.4 * k, p.y + Math.sin(an) * p.r * 1.4 * k); } });
    }, poke: function (s, x, y) { s.p.push({ x: x, y: y, t: 0, r: 28, c: '#FFC857', k: 0 }); }
  };

  M.scales = { // balance scale and floating pages: ethics, constitution, values
    init: function () { return { t: 0, pg: Array.apply(null, Array(10)).map(function () { return { x: rnd(0, W), y: rnd(0, H), v: rnd(8, 22), r: rnd(-.5, .5), s: rnd(.7, 1.2) }; }) }; },
    draw: function (s, dt, a, b) {
      s.t += dt; s.pg.forEach(function (p) { p.y -= p.v * dt; p.r += dt * .05; if (p.y < -90) { p.y = H + 60; p.x = rnd(0, W); } ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(p.s, p.s); ctx.strokeStyle = rgba(a, .3); ctx.lineWidth = 1.6; ctx.strokeRect(-26, -34, 52, 68); for (var i = 0; i < 5; i++) line(-16, -20 + i * 10, 16, -20 + i * 10); ctx.restore(); });
      var cx = W * .74, cy = H * .42, ang = Math.sin(s.t * .8) * .12, L = Math.min(W, H) * .26; ctx.strokeStyle = rgba(b, .55); ctx.lineWidth = 3; line(cx, cy - L * .55, cx, cy + L * .8); line(cx - L * .3, cy + L * .8, cx + L * .3, cy + L * .8);
      ctx.save(); ctx.translate(cx, cy - L * .5); ctx.rotate(ang); line(-L, 0, L, 0); [-1, 1].forEach(function (d) { var px = d * L, py = 0; ctx.save(); ctx.translate(px, py); ctx.rotate(-ang); line(0, 0, -L * .22, L * .5); line(0, 0, L * .22, L * .5); ctx.beginPath(); ctx.arc(0, L * .5, L * .22, 0, Math.PI); ctx.stroke(); ctx.restore(); }); ctx.restore();
    }
  };

  M.path = { // a winding route with milestone flags: projects & internships
    init: function () { return { t: 0 }; },
    draw: function (s, dt, a, b) {
      s.t += dt * .12; var pts = []; for (var i = 0; i <= 60; i++) { var x = i / 60 * W, y = H * .6 + Math.sin(i / 60 * 7) * H * .18 - i / 60 * H * .2; pts.push([x, y]); }
      ctx.strokeStyle = rgba(a, .3); ctx.lineWidth = 3; ctx.setLineDash([14, 12]); ctx.beginPath(); pts.forEach(function (p, i) { i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]); }); ctx.stroke(); ctx.setLineDash([]);
      [8, 20, 32, 44, 56].forEach(function (i, k) { var p = pts[i], lit = (s.t * 10) % 60 > i; ctx.strokeStyle = rgba(lit ? b : a, lit ? .85 : .35); ctx.lineWidth = 2.4; line(p[0], p[1], p[0], p[1] - 52); ctx.fillStyle = rgba(lit ? b : a, lit ? .6 : .2); ctx.beginPath(); ctx.moveTo(p[0], p[1] - 52); ctx.lineTo(p[0] + 34, p[1] - 42); ctx.lineTo(p[0], p[1] - 30); ctx.closePath(); ctx.fill(); });
      var f = (s.t * 10 % 60) / 60 * 60, i0 = Math.floor(f), p0 = pts[i0], p1 = pts[Math.min(60, i0 + 1)], ff = f - i0, x = p0[0] + (p1[0] - p0[0]) * ff, y = p0[1] + (p1[1] - p0[1]) * ff; var g = ctx.createRadialGradient(x, y, 0, x, y, 26); g.addColorStop(0, rgba(b, .9)); g.addColorStop(1, rgba(b, 0)); ctx.fillStyle = g; circ(x, y, 26, true);
    }
  };

  M.waves = { // layered travelling waves: physics, signals
    init: function () { return { t: 0 }; },
    draw: function (s, dt, a, b) { s.t += dt; for (var k = 0; k < 6; k++) { ctx.strokeStyle = rgba(k % 2 ? a : b, .3 - k * .03); ctx.lineWidth = 2; ctx.beginPath(); for (var x = 0; x <= W; x += 6) { var y = H * (.25 + k * .11) + Math.sin(x / (70 + k * 22) + s.t * (.8 + k * .22)) * (24 + k * 6) + (mouse.x > 0 ? Math.exp(-Math.pow((x - mouse.x) / 160, 2)) * -26 * Math.sin(s.t * 3) : 0); x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); } }
  };

  M.stars = { // calm constellation: values, environment-free fallback
    init: function () { var p = []; for (var i = 0; i < 90; i++) p.push({ x: rnd(0, W), y: rnd(0, H), r: rnd(1, 3), t: rnd(0, 6) }); return { p: p }; },
    draw: function (s, dt, a, b) { s.p.forEach(function (p, i) { p.t += dt * (.5 + i % 3 * .3); ctx.fillStyle = rgba(i % 4 ? a : b, .3 + Math.sin(p.t) * .25); circ(p.x, p.y, p.r, true); }); }
  };

  M.cpu = { // bus lines and register blocks: computer architecture, embedded
    init: function () { var blocks = []; for (var i = 0; i < 7; i++) blocks.push({ x: (i % 4) * W / 4 + 60 + rnd(0, 40), y: (Math.floor(i / 4) * .45 + .15) * H + rnd(0, 60), w: rnd(90, 160), h: rnd(50, 90), p: rnd(0, 6) }); return { b: blocks, t: 0 }; },
    draw: function (s, dt, a, b) { s.t += dt; s.b.forEach(function (k, i) { var on = (Math.sin(s.t * 1.3 + k.p) + 1) / 2; ctx.strokeStyle = rgba(i % 2 ? a : b, .35 + on * .3); ctx.fillStyle = rgba(i % 2 ? a : b, .04 + on * .1); ctx.lineWidth = 2; ctx.fillRect(k.x, k.y, k.w, k.h); ctx.strokeRect(k.x, k.y, k.w, k.h); for (var q = 0; q < 6; q++) { line(k.x + 12 + q * (k.w - 24) / 5, k.y, k.x + 12 + q * (k.w - 24) / 5, k.y - 12); line(k.x + 12 + q * (k.w - 24) / 5, k.y + k.h, k.x + 12 + q * (k.w - 24) / 5, k.y + k.h + 12); } if (i) { var p = s.b[i - 1]; ctx.strokeStyle = rgba(a, .2); line(p.x + p.w / 2, p.y + p.h / 2, k.x + k.w / 2, k.y + k.h / 2); var f = (s.t * .3 + i * .2) % 1; ctx.fillStyle = rgba(b, .9); circ(p.x + p.w / 2 + (k.x + k.w / 2 - p.x - p.w / 2) * f, p.y + p.h / 2 + (k.y + k.h / 2 - p.y - p.h / 2) * f, 4, true); } }); }
  };

  /* ---------- per subject: motif, colour A, colour B, options ---------- */
  var T = {
    'internet-of-things': ['network', '#2DE2E6', '#3DDC97'],
    'applied-engineering-physics': ['atom', '#FFC857', '#FF8A3D'],
    'data-structure-using-c': ['tree', '#7C5CFF', '#2DE2E6'],
    'emerging-trends-in-computer-science': ['neural', '#FF5C7A', '#FFC857', { layers: [2, 4, 4, 2] }],
    'engineering-mathematics-1': ['symbols', '#2DE2E6', '#7C5CFF'],
    'english-language': ['bubbles', '#7C5CFF', '#FF8AD8', { words: ['Hello', 'Grammar', 'Aa', 'Read', 'Speak', 'Write'] }],
    'programming-for-problem-solving-in-python': ['code', '#3DDC97', '#FFC857', { tokens: ['def', 'print()', 'for i in', 'range()', 'if:', 'import', 'list', 'None', ':', '# '] }],
    'universal-human-values': ['stars', '#2DE2E6', '#FFC857'],
    'advance-data-structures': ['tree', '#FFC857', '#FF5C7A'],
    'computer-system-architecture': ['cpu', '#3DDC97', '#2DE2E6'],
    'design-thinking': ['bulb', '#FF5C7A', '#FFC857'],
    'engineering-mathematics-2': ['waves', '#2DE2E6', '#7C5CFF'],
    'environmental-studies': ['globe', '#3DDC97', '#2DE2E6'],
    'object-oriented-programming': ['code', '#7C5CFF', '#2DE2E6', { tokens: ['class', 'extends', 'new', 'this', 'public', 'void', 'interface', 'super', '{}'] }],
    'advanced-java-programming': ['code', '#FF5C7A', '#FFC857', { tokens: ['public', 'static', 'ArrayList<>', 'try {', 'catch', 'Servlet', 'JDBC', 'SELECT', '@Override', 'stream()', 'Socket', 'JSP'] }],
    'database-management-system': ['db', '#7C5CFF', '#2DE2E6'],
    'discrete-mathematics': ['graph', '#3DDC97', '#FFC857'],
    'indian-knowledge-system': ['mandala', '#FFC857', '#FF8A3D'],
    'introduction-to-artificial-intelligence-and-machine-learning': ['neural', '#7C5CFF', '#2DE2E6'],
    'operating-systems': ['sched', '#FFC857', '#2DE2E6'],
    'social-internship-1': ['community', '#FFC857', '#3DDC97'],
    'theory-of-computation': ['automata', '#2DE2E6', '#7C5CFF'],
    'advanced-database-management-system': ['db', '#7C5CFF', '#FF5C7A'],
    'computer-networks': ['network', '#7C5CFF', '#FFC857'],
    'design-and-analysis-of-algorithm': ['tree', '#FF5C7A', '#2DE2E6'],
    'embedded-system': ['circuit', '#2DE2E6', '#FFC857'],
    'machine-learning-and-deep-learning': ['neural', '#3DDC97', '#7C5CFF', { layers: [4, 6, 8, 6, 4, 2] }],
    'prompt-engineering': ['bubbles', '#FFC857', '#7C5CFF', { words: ['Prompt', 'Role:', 'Context', 'Few-shot', 'Chain of thought', 'JSON'] }],
    'software-engineering-and-project-management': ['gears', '#2DE2E6', '#FFC857'],
    'application-of-machine-learning-in-industries': ['chart', '#2DE2E6', '#FF5C7A'],
    'big-data-engineering': ['db', '#7C5CFF', '#3DDC97'],
    'compiler-design': ['tree', '#FF5C7A', '#7C5CFF'],
    'computer-graphics': ['cube', '#3DDC97', '#FF5C7A'],
    'cryptography-and-network-security': ['hex', '#3DDC97', '#2DE2E6'],
    'minor-project-1': ['path', '#FFC857', '#7C5CFF'],
    'social-internship-2': ['community', '#FFC857', '#FF5C7A'],
    'computational-linguistics-and-natural-language-processing': ['bubbles', '#7C5CFF', '#2DE2E6', { words: ['token', 'noun', 'verb', 'अ', 'नमस्ते', 'BERT', 'parse', 'embed'] }],
    'data-mining': ['chart', '#2DE2E6', '#FFC857'],
    'minor-project-2': ['path', '#3DDC97', '#FF5C7A'],
    'professional-communication': ['bubbles', '#FF5C7A', '#2DE2E6', { words: ['Email', 'Meeting', 'Report', 'Present', 'Listen', 'Resume'] }],
    'professional-ethics': ['scales', '#7C5CFF', '#FFC857'],
    'venture-ideation': ['bulb', '#FF5C7A', '#3DDC97'],
    'web-technologies': ['code', '#FFC857', '#7C5CFF', { tokens: ['<div>', '</>', 'href', 'fetch()', 'CSS', 'const', '=>', 'GET', '404', 'HTML'] }],
    'major-project-1': ['path', '#2DE2E6', '#FFC857'],
    'summer-internship': ['community', '#FFC857', '#7C5CFF'],
    'constitution-of-india': ['scales', '#FF5C7A', '#3DDC97'],
    'major-project-2': ['path', '#3DDC97', '#7C5CFF']
  };
  function themeFor(id) {
    var d = T[id]; if (!d) { var h = 0; for (var i = 0; i < (id || '').length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0; var ks = ['graph', 'waves', 'network', 'stars', 'symbols'], cs = ['#7C5CFF', '#2DE2E6', '#FFC857', '#3DDC97', '#FF5C7A']; d = [ks[h % ks.length], cs[h % cs.length], cs[(h >> 3) % cs.length]]; }
    return { m: M[d[0]], name: d[0], a: d[1], b: d[2], o: d[3] };
  }

  function frame(now) {
    raf = 0; if (!th) return; var dt = Math.max(0, Math.min(.05, (now - last) / 1000)); last = now;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
    th.m.draw(st, fxOn() && !reduce ? dt : 0, th.a, th.b);
    ctx.globalCompositeOperation = 'source-over';
    if (!document.hidden && fxOn() && !reduce) raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function apply(id) {
    th = themeFor(id); api.current = id; cv.style.opacity = '1';
    document.body.setAttribute('data-subj', th.name); document.body.style.setProperty('--sa', th.a); document.body.style.setProperty('--sb', th.b);
    size(); st = th.m.init(th.o); start();
    if (window.Float3D) Float3D.set(id, th.a, th.b);
  }
  api.set = function (id) { if (api.current === id && th) return; apply(id); };
  api.clear = function () { if (window.Float3D) Float3D.clear(); api.current = null; th = null; st = null; if (raf) cancelAnimationFrame(raf); raf = 0; ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); cv.style.opacity = '0'; document.body.removeAttribute('data-subj'); document.body.style.removeProperty('--sa'); document.body.style.removeProperty('--sb'); };
  api.preview = api.set;
  api.poke = function (x, y) { if (st && th && th.m.poke) th.m.poke(st, x, y); };
  api.motif = function (id) { return themeFor(id).name; };
  api.ids = function () { return Object.keys(T); };
  document.addEventListener('visibilitychange', function () { if (!document.hidden && th) start(); });
  cv.style.opacity = '0';
  return api;
})();

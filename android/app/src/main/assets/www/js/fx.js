/* FutureSelf FX: a 2D overlay for confetti, sparks, ripples and a soft cursor trail. Idle = zero cost. */
window.FX = (function () {
  var cv = document.getElementById('fx'), ctx = cv && cv.getContext('2d'), api = { quiet: false };
  if (!ctx) { ['burst', 'confetti', 'ripple', 'sparkle', 'fireworks', 'setEnabled'].forEach(function (k) { api[k] = function () { }; }); return api; }
  var P = [], raf = 0, last = 0, dpr = 1, enabled = true;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { enabled = localStorage.getItem('fs_fx') !== '0'; } catch (e) { }
  var COLORS = ['#7C5CFF', '#2DE2E6', '#FFC857', '#3DDC97', '#FF5C7A', '#ffffff'];
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function size() { dpr = Math.min(devicePixelRatio || 1, 2); cv.width = Math.round(innerWidth * dpr); cv.height = Math.round(innerHeight * dpr); }
  addEventListener('resize', size); size();
  function on() { return enabled && !reduce; }
  function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); } }
  function add(p) { if (P.length > 700) P.shift(); P.push(p); kick(); }

  function step(now) {
    var dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = P.length - 1; i >= 0; i--) {
      var p = P[i]; p.t += dt;
      if (p.t >= p.life) { P.splice(i, 1); continue; }
      var k = p.t / p.life;
      if (p.type === 'ring') {
        var e = 1 - Math.pow(1 - k, 3);
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = (1 - k) * 0.8; ctx.strokeStyle = p.c; ctx.lineWidth = 2.2 * (1 - k) + 0.4;
        ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0, p.r0 + (p.r1 - p.r0) * e), 0, 6.2832); ctx.stroke();
        continue;
      }
      p.vx *= Math.pow(p.drag, dt * 60); p.vy = p.vy * Math.pow(p.drag, dt * 60) + p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.type === 'conf') {
        p.rot += p.vr * dt; p.flip += dt * p.fs;
        ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = k > 0.75 ? (1 - k) * 4 : 1; ctx.fillStyle = p.c;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, Math.cos(p.flip));
        ctx.fillRect(-p.s, -p.s * 0.55, p.s * 2, p.s * 1.1); ctx.restore();
      } else {
        ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = (1 - k) * (1 - k) * 0.95; ctx.fillStyle = p.c;
        var r = p.s * (1 - k * 0.6), g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        g.addColorStop(0, p.c); g.addColorStop(0.35, p.c); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0, r * 3), 0, 6.2832); ctx.fill();
      }
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    if (P.length) raf = requestAnimationFrame(step); else { raf = 0; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  api.burst = function (x, y, n, o) {
    if (!on()) return; o = o || {}; n = n || 28;
    for (var i = 0; i < n; i++) {
      var a = rnd(0, 6.2832), v = rnd(0.25, 1) * (o.speed || 380);
      add({ type: 'dot', x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: o.gravity === undefined ? 260 : o.gravity, drag: 0.965, s: rnd(1.4, 3.4) * (o.size || 1), life: rnd(0.6, 1.3), t: 0, c: pick(o.colors || COLORS) });
    }
  };
  api.confetti = function (x, y, n, o) {
    if (!on()) return; o = o || {}; n = n || 70;
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + rnd(-1, 1) * (o.spread || 1.1), v = rnd(0.3, 1) * (o.speed || 760);
      add({ type: 'conf', x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 900, drag: 0.972, s: rnd(3, 6), rot: rnd(0, 6.28), vr: rnd(-9, 9), flip: rnd(0, 6.28), fs: rnd(5, 12), life: rnd(1.6, 2.8), t: 0, c: pick(COLORS) });
    }
  };
  api.ripple = function (x, y, c) { if (!on()) return; add({ type: 'ring', x: x, y: y, r0: 4, r1: 46, life: 0.55, t: 0, c: c || '#2DE2E6' }); };
  api.sparkle = function (x, y, c) {
    if (!on() || api.quiet) return;
    add({ type: 'dot', x: x + rnd(-3, 3), y: y + rnd(-3, 3), vx: rnd(-18, 18), vy: rnd(-26, -6), g: 40, drag: 0.96, s: rnd(1.1, 2.3), life: rnd(0.45, 0.8), t: 0, c: c || pick(['#7C5CFF', '#2DE2E6', '#ffffff', '#FFC857']) });
  };
  api.fireworks = function (n) {
    if (!on()) return; n = n || 5;
    for (var i = 0; i < n; i++) setTimeout(function () {
      var x = rnd(0.15, 0.85) * innerWidth, y = rnd(0.15, 0.5) * innerHeight, col = [pick(COLORS), pick(COLORS)];
      api.burst(x, y, 46, { speed: 300, gravity: 120, colors: col, size: 1.2 }); api.ripple(x, y, col[0]);
    }, i * 260);
  };
  api.setEnabled = function (v) { enabled = !!v; try { localStorage.setItem('fs_fx', v ? '1' : '0'); } catch (e) { } if (!v) { P.length = 0; } };
  api.isEnabled = function () { return enabled; };

  /* soft cursor trail (mouse only) */
  var lx = -99, ly = -99;
  addEventListener('pointermove', function (e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    var dx = e.clientX - lx, dy = e.clientY - ly;
    if (dx * dx + dy * dy < 150) return;
    lx = e.clientX; ly = e.clientY; api.sparkle(lx, ly);
  }, { passive: true });
  /* click ripples on buttons and cards */
  addEventListener('pointerdown', function (e) {
    var t = e.target.closest && e.target.closest('.btn,.chip,.lockcard,.opt,.nav a,.icon-btn');
    if (!t) return;
    api.ripple(e.clientX, e.clientY, t.classList.contains('pri') ? '#FFC857' : '#2DE2E6');
    if (t.classList.contains('pri')) api.burst(e.clientX, e.clientY, 10, { speed: 220, gravity: 80, size: 0.9 });
  }, { passive: true });
  return api;
})();

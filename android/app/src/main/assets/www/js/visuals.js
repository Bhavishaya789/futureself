/* FutureSelf Visuals: turns the small "@visual" lines in a topic file into animated SVG diagrams.
   Line format:  kind | title | data      Kinds: flow cycle layers bars gantt tree graph mind steps compare formula
   timeline venn donut sequence blocks curve stack.  Colours follow the subject theme (--sa, --sb). */
window.Visuals = (function () {
  var W = 920, uid = 0;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function parts(d, sep) { return String(d).split(sep || ';').map(function (x) { return x.trim(); }).filter(Boolean); }
  function tw(t, fs) { return String(t).length * (fs || 14) * 0.56; }
  function wrap(t, max) {
    var words = String(t).split(/\s+/), lines = [], cur = '';
    words.forEach(function (w) { if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); });
    if (cur) lines.push(cur); return lines.length ? lines : [''];
  }
  function lerpColor(i, n) { var t = n <= 1 ? 0 : i / (n - 1); return 'color-mix(in srgb,var(--sa,#7C5CFF) ' + Math.round((1 - t) * 100) + '%,var(--sb,#2DE2E6))'; }
  function txt(x, y, t, o) {
    o = o || {}; var lines = Array.isArray(t) ? t : [t], lh = o.lh || 17, y0 = y - (lines.length - 1) * lh / 2;
    return '<text x="' + x + '" y="' + y0 + '" text-anchor="' + (o.anchor || 'middle') + '" dominant-baseline="central" class="' + (o.cls || '') + '"' + (o.fs ? ' style="font-size:' + o.fs + 'px"' : '') + '>' +
      lines.map(function (l, i) { return '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>';
  }
  function box(x, y, w, h, t, i, col, cls) {
    var lines = wrap(t, Math.max(6, Math.floor((w - 16) / 7.6)));
    return '<g class="vi" style="--i:' + i + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12" class="vbox" style="--c:' + (col || lerpColor(i, 6)) + '"/>' + txt(x + w / 2, y + h / 2, lines, { cls: cls || 'vt' }) + '</g>';
  }
  function defs(id) { return '<defs><marker id="ar' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="vah"/></marker></defs>'; }
  function line(x1, y1, x2, y2, id, i, dash) { return '<line class="vln vi" style="--i:' + i + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" marker-end="url(#ar' + id + ')"' + (dash ? ' stroke-dasharray="6 5"' : '') + '/>'; }

  var R = {};

  R.flow = function (d, id) {
    var it = parts(d, '>'), per = it.length <= 5 ? it.length : (it.length <= 8 ? 4 : 5), rows = Math.ceil(it.length / per), gap = 44, bw = Math.min(200, Math.floor((W - 40 - (per - 1) * gap) / per)), bh = 64, out = '', pos = [];
    var left = (W - (per * bw + (per - 1) * gap)) / 2;
    it.forEach(function (t, k) { var r = Math.floor(k / per), c = k % per; if (r % 2) c = per - 1 - c; pos.push([left + c * (bw + gap), 20 + r * (bh + 50)]); });
    it.forEach(function (t, k) { out += box(pos[k][0], pos[k][1], bw, bh, t, k); });
    for (var k = 0; k < it.length - 1; k++) {
      var a = pos[k], b = pos[k + 1];
      if (a[1] === b[1]) out += b[0] > a[0] ? line(a[0] + bw + 4, a[1] + bh / 2, b[0] - 4, b[1] + bh / 2, id, k) : line(a[0] - 4, a[1] + bh / 2, b[0] + bw + 4, b[1] + bh / 2, id, k);
      else out += line(a[0] + bw / 2, a[1] + bh + 4, b[0] + bw / 2, b[1] - 4, id, k);
    }
    return { h: 40 + rows * bh + (rows - 1) * 50, b: out };
  };

  R.cycle = function (d, id) {
    var it = parts(d, '>'), n = it.length, cx = W / 2, cy = 190, rx = 300, ry = 125, out = '', P = [];
    it.forEach(function (t, k) { var a = -Math.PI / 2 + k * 2 * Math.PI / n; P.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); });
    for (var k = 0; k < n; k++) {
      var a = P[k], b = P[(k + 1) % n], mx = (a[0] + b[0]) / 2 + (cx - (a[0] + b[0]) / 2) * 0.35, my = (a[1] + b[1]) / 2 + (cy - (a[1] + b[1]) / 2) * 0.35;
      out += '<path class="vln vi" style="--i:' + k + '" d="M' + a[0] + ',' + a[1] + ' Q' + mx + ',' + my + ' ' + b[0] + ',' + b[1] + '" fill="none" marker-end="url(#ar' + id + ')"/>';
    }
    it.forEach(function (t, k) { var w = Math.max(96, Math.min(180, tw(t) + 28)); out += box(P[k][0] - w / 2, P[k][1] - 24, w, 48, t, k); });
    return { h: 380, b: out };
  };

  R.layers = function (d) {
    var it = parts(d), h = 58, gap = 10, out = '';
    it.forEach(function (t, k) {
      var nm = t.split(':'), name = nm[0].trim(), det = nm.slice(1).join(':').trim(), y = 14 + k * (h + gap), inset = 0;
      out += '<g class="vi" style="--i:' + k + '"><rect x="' + inset + '" y="' + y + '" width="' + W + '" height="' + h + '" rx="14" class="vbox" style="--c:' + lerpColor(k, it.length) + '"/>' +
        txt(24, y + h / 2, name, { anchor: 'start', cls: 'vt b', fs: 16 }) + (det ? txt(250, y + h / 2, wrap(det, 70), { anchor: 'start', cls: 'vs', lh: 16 }) : '') + '</g>';
    });
    return { h: 28 + it.length * (h + gap), b: out };
  };

  R.bars = function (d) {
    var it = parts(d).map(function (x) { var p = x.split('='); return [p[0].trim(), parseFloat(p[1])]; }).filter(function (x) { return !isNaN(x[1]); }), mx = Math.max.apply(null, it.map(function (x) { return x[1]; })) || 1, h = 260, base = h + 30, out = '', n = it.length, bw = Math.min(90, (W - 80) / n - 24), step = (W - 80) / n;
    for (var g = 0; g <= 4; g++) { var y = base - g * h / 4; out += '<line x1="50" x2="' + (W - 20) + '" y1="' + y + '" y2="' + y + '" class="vgrid"/>' + txt(40, y, String(Math.round(mx * g / 4 * 100) / 100), { anchor: 'end', cls: 'vs', fs: 12 }); }
    it.forEach(function (x, k) {
      var bh = x[1] / mx * h, cx = 60 + k * step + step / 2;
      out += '<g class="vi" style="--i:' + k + '"><rect class="vbar" x="' + (cx - bw / 2) + '" y="' + (base - bh) + '" width="' + bw + '" height="' + bh + '" rx="8" style="--c:' + lerpColor(k, n) + '"/>' + txt(cx, base - bh - 12, String(x[1]), { cls: 'vt b', fs: 14 }) + txt(cx, base + 20, wrap(x[0], 12), { cls: 'vs', fs: 13, lh: 14 }) + '</g>';
    });
    return { h: base + 50, b: out };
  };

  R.gantt = function (d) {
    var segs = parts(d).map(function (x) { var m = x.match(/^(.+?):\s*(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)$/); return m ? { n: m[1].trim(), a: +m[2], b: +m[3] } : null; }).filter(Boolean), names = [], mx = 0;
    segs.forEach(function (s) { if (names.indexOf(s.n) < 0) names.push(s.n); mx = Math.max(mx, s.b); });
    var left = 90, ww = W - left - 30, sc = ww / (mx || 1), rh = 44, out = '', step = mx <= 30 ? 1 : Math.ceil(mx / 25);
    names.forEach(function (n, r) { out += '<line x1="' + left + '" x2="' + (W - 20) + '" y1="' + (24 + r * rh + rh / 2) + '" y2="' + (24 + r * rh + rh / 2) + '" class="vgrid"/>' + txt(left - 14, 24 + r * rh + rh / 2, n, { anchor: 'end', cls: 'vt b' }); });
    segs.forEach(function (s, k) { var r = names.indexOf(s.n), x = left + s.a * sc, w = (s.b - s.a) * sc; out += '<g class="vi" style="--i:' + k + '"><rect x="' + x + '" y="' + (24 + r * rh + 6) + '" width="' + Math.max(2, w - 2) + '" height="' + (rh - 12) + '" rx="7" class="vbox" style="--c:' + lerpColor(r, names.length) + '"/></g>'; });
    for (var t = 0; t <= mx; t += step) out += '<line x1="' + (left + t * sc) + '" x2="' + (left + t * sc) + '" y1="' + (20) + '" y2="' + (28 + names.length * rh) + '" class="vgrid" stroke-dasharray="2 4"/>' + txt(left + t * sc, 40 + names.length * rh, String(t), { cls: 'vs', fs: 12 });
    return { h: 62 + names.length * rh, b: out };
  };

  function parseTree(s) {
    var i = 0;
    function node() { var name = ''; while (i < s.length && '(),'.indexOf(s[i]) < 0) name += s[i++]; var n = { n: name.trim(), k: [] }; if (s[i] === '(') { i++; while (i < s.length && s[i] !== ')') { n.k.push(node()); if (s[i] === ',') i++; } i++; } return n; }
    return node();
  }
  R.tree = function (d, id) {
    var root = parseTree(d.replace(/;/g, ',')), leaves = 0, maxd = 0, out = '', unit;
    (function cnt(n, dp) { maxd = Math.max(maxd, dp); if (!n.k.length) { n.l = leaves++; } else n.k.forEach(function (c) { cnt(c, dp + 1); }); })(root, 0);
    unit = Math.min(130, (W - 60) / Math.max(1, leaves));
    (function pos(n, dp) { n.y = 36 + dp * 84; if (!n.k.length) n.x = 30 + (n.l + .5) * ((W - 60) / leaves); else { n.k.forEach(function (c) { pos(c, dp + 1); }); n.x = (n.k[0].x + n.k[n.k.length - 1].x) / 2; } })(root, 0);
    var c = 0; (function edges(n) { n.k.forEach(function (ch) { out += '<line class="vln vi" style="--i:' + (c++ % 8) + '" x1="' + n.x + '" y1="' + (n.y + 20) + '" x2="' + ch.x + '" y2="' + (ch.y - 20) + '"/>'; edges(ch); }); })(root);
    (function nodes(n, dp) { var w = Math.max(44, tw(n.n) + 22); out += '<g class="vi" style="--i:' + (dp + 1) + '"><rect x="' + (n.x - w / 2) + '" y="' + (n.y - 20) + '" width="' + w + '" height="40" rx="20" class="vbox" style="--c:' + lerpColor(dp, maxd + 1) + '"/>' + txt(n.x, n.y, n.n, { cls: 'vt' }) + '</g>'; n.k.forEach(function (ch) { nodes(ch, dp + 1); }); })(root, 0);
    return { h: 72 + maxd * 84, b: out };
  };

  R.graph = function (d, id) {
    var items = parts(d.replace(/,/g, ';')), nodes = [], idx = {}, edges = [], out = '';
    function nd(raw) { var s = raw.trim(), st = /\^/.test(s), fin = /\*/.test(s), name = s.replace(/[\^*]/g, '').trim(); if (!(name in idx)) { idx[name] = nodes.length; nodes.push({ n: name, st: st, fin: fin }); } else { if (st) nodes[idx[name]].st = true; if (fin) nodes[idx[name]].fin = true; } return idx[name]; }
    items.forEach(function (e) { var m = e.match(/^(.+?)\s*([>-])\s*([^:]+?)\s*(?::\s*(.*))?$/); if (!m) { nd(e); return; } var a = nd(m[1]), b = nd(m[3]); edges.push({ a: a, b: b, dir: m[2] === '>', l: m[4] || '' }); });
    var n = nodes.length, cx = W / 2, cy = 200, rx = n > 1 ? Math.min(340, 60 + n * 46) : 0, ry = 140, r = 26, rr = function (o) { return Math.max(26, tw(o.n, 13) / 2 + 10); };
    nodes.forEach(function (o, k) { var a = -Math.PI / 2 + k * 2 * Math.PI / n - (n > 2 ? 0 : Math.PI / 2); o.x = n === 1 ? cx : cx + Math.cos(a) * rx; o.y = n === 1 ? cy : cy + Math.sin(a) * ry; });
    var seen = {};
    edges.forEach(function (e, k) {
      var A = nodes[e.a], B = nodes[e.b], r = Math.max(rr(A), rr(B)), key = e.a + '>' + e.b, rev = e.b + '>' + e.a, curve = seen[rev] ? -1 : 1; seen[key] = 1;
      if (e.a === e.b) { out += '<path class="vln vi" style="--i:' + k + '" fill="none" d="M' + (A.x - 10) + ',' + (A.y - r) + ' c-30,-52 40,-52 20,0" marker-end="url(#ar' + id + ')"/>' + (e.l ? txt(A.x, A.y - r - 44, e.l, { cls: 'vs', fs: 13 }) : ''); return; }
      var dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len, nx = -uy, ny = ux, bend = (e.dir ? 26 : 0) * curve, sx = A.x + ux * r, sy = A.y + uy * r, ex = B.x - ux * (r + (e.dir ? 6 : 0)), ey = B.y - uy * (r + (e.dir ? 6 : 0)), mx = (A.x + B.x) / 2 + nx * bend, my = (A.y + B.y) / 2 + ny * bend;
      out += '<path class="vln vi" style="--i:' + k + '" fill="none" d="M' + sx + ',' + sy + ' Q' + mx + ',' + my + ' ' + ex + ',' + ey + '"' + (e.dir ? ' marker-end="url(#ar' + id + ')"' : '') + '/>';
      if (e.l) out += txt(mx + nx * (bend ? 12 * curve : 14), my + ny * (bend ? 12 * curve : 14), e.l, { cls: 'vs b', fs: 13 });
    });
    nodes.forEach(function (o, k) {
      var r = rr(o); out += '<g class="vi" style="--i:' + (k + 1) + '"><circle cx="' + o.x + '" cy="' + o.y + '" r="' + r + '" class="vbox" style="--c:' + lerpColor(k, n) + '"/>' + (o.fin ? '<circle cx="' + o.x + '" cy="' + o.y + '" r="' + (r - 5) + '" class="vring"/>' : '') + txt(o.x, o.y, o.n, { cls: 'vt b', fs: o.n.length > 3 ? 12 : 14 }) +
        (o.st ? '<line class="vln" x1="' + (o.x - r - 36) + '" y1="' + o.y + '" x2="' + (o.x - r - 2) + '" y2="' + o.y + '" marker-end="url(#ar' + id + ')"/>' : '') + '</g>';
    });
    return { h: 400, b: out };
  };

  R.mind = function (d) {
    var it = parts(d), c = it[0], ks = it.slice(1), cx = W / 2, cy = 190, out = '';
    ks.forEach(function (t, k) { var a = -Math.PI / 2 + k * 2 * Math.PI / ks.length, x = cx + Math.cos(a) * 330, y = cy + Math.sin(a) * 135; out += '<line class="vln vi" style="--i:' + k + '" x1="' + cx + '" y1="' + cy + '" x2="' + x + '" y2="' + y + '"/>'; });
    ks.forEach(function (t, k) { var a = -Math.PI / 2 + k * 2 * Math.PI / ks.length, x = cx + Math.cos(a) * 330, y = cy + Math.sin(a) * 135, w = Math.max(120, Math.min(210, tw(t) + 30)); out += box(x - w / 2, y - 26, w, 52, t, k + 1); });
    out += '<g class="vi"><rect x="' + (cx - 82) + '" y="' + (cy - 36) + '" width="164" height="72" rx="36" class="vbox strong" style="--c:var(--sa,#7C5CFF)"/>' + txt(cx, cy, wrap(c, 16), { cls: 'vt b' }) + '</g>';
    return { h: 380, b: out };
  };

  R.steps = function (d) {
    var it = parts(d), y = 8, out = '';
    it.forEach(function (t, k) { var ls = wrap(t, 96), h = Math.max(48, 24 + ls.length * 18); out += '<g class="vi" style="--i:' + k + '"><rect x="0" y="' + y + '" width="' + W + '" height="' + h + '" rx="14" class="vbox" style="--c:' + lerpColor(k, it.length) + '"/><circle cx="34" cy="' + (y + h / 2) + '" r="16" class="vbox strong" style="--c:' + lerpColor(k, it.length) + '"/>' + txt(34, y + h / 2, String(k + 1), { cls: 'vt b' }) + txt(66, y + h / 2, ls, { anchor: 'start', cls: 'vt', lh: 18 }) + '</g>'; y += h + 10; });
    return { h: y + 4, b: out };
  };

  R.compare = function (d) {
    var cols = parts(d).map(function (x) { var p = x.split('='); return { t: p[0].trim(), it: p.slice(1).join('=').split('~').map(function (z) { return z.trim(); }).filter(Boolean) }; }), n = cols.length, gap = 20, cw = (W - (n - 1) * gap) / n, out = '', mxh = 0;
    cols.forEach(function (c, k) {
      var x = k * (cw + gap), y = 70; out += '<g class="vi" style="--i:' + k + '"><rect x="' + x + '" y="0" width="' + cw + '" height="54" rx="14" class="vbox strong" style="--c:' + lerpColor(k, n) + '"/>' + txt(x + cw / 2, 27, wrap(c.t, Math.floor(cw / 9)), { cls: 'vt b', fs: 16 }) + '</g>';
      c.it.forEach(function (t, j) { var ls = wrap(t, Math.floor((cw - 40) / 7.4)), h = Math.max(40, 18 + ls.length * 17); out += '<g class="vi" style="--i:' + (k + j + 1) + '"><rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + h + '" rx="10" class="vbox" style="--c:' + lerpColor(k, n) + '"/><circle cx="' + (x + 18) + '" cy="' + (y + h / 2) + '" r="4" class="vdot" style="--c:' + lerpColor(k, n) + '"/>' + txt(x + 32, y + h / 2, ls, { anchor: 'start', cls: 'vt', lh: 17, fs: 14 }) + '</g>'; y += h + 8; });
      mxh = Math.max(mxh, y);
    });
    return { h: mxh + 4, b: out };
  };

  R.formula = function (d) {
    var it = parts(d), fs = it[0].length > 60 ? 19 : 26, ls = wrap(it[0], it[0].length > 60 ? 62 : 40), lh = fs + 8, top = 24 + ls.length * lh, extra = it.length - 1, h = top + 18 + extra * 26;
    var out = '<g class="vi"><rect x="0" y="6" width="' + W + '" height="' + (h - 6) + '" rx="18" class="vbox strong" style="--c:var(--sa,#7C5CFF)"/>' + txt(W / 2, 24 + ls.length * lh / 2, ls, { cls: 'vt big', fs: fs, lh: lh });
    it.slice(1).forEach(function (t, k) { out += txt(W / 2, top + 14 + k * 26, t, { cls: 'vs', fs: 14 }); });
    return { h: h + 8, b: out + '</g>' };
  };

  R.timeline = function (d) {
    var it = parts(d).map(function (x) { var p = x.split('='); return [p[0].trim(), p.slice(1).join('=').trim()]; }), n = it.length, y = 150, out = '<line x1="20" x2="' + (W - 20) + '" y1="' + y + '" y2="' + y + '" class="vln strong"/>';
    it.forEach(function (x, k) { var cx = 50 + k * ((W - 100) / Math.max(1, n - 1)), up = k % 2 === 0; out += '<g class="vi" style="--i:' + k + '"><line x1="' + cx + '" x2="' + cx + '" y1="' + y + '" y2="' + (up ? y - 36 : y + 36) + '" class="vln"/><circle cx="' + cx + '" cy="' + y + '" r="8" class="vbox strong" style="--c:' + lerpColor(k, n) + '"/>' + txt(cx, up ? y - 54 : y + 52, x[0], { cls: 'vt b', fs: 15 }) + txt(cx, up ? y - 92 : y + 84, wrap(x[1], 16), { cls: 'vs', fs: 13, lh: 15 }) + '</g>'; });
    return { h: 300, b: out };
  };

  R.venn = function (d) {
    var it = parts(d), cx = W / 2, cy = 150;
    return { h: 310, b: '<g class="vi" style="--i:0"><circle cx="' + (cx - 90) + '" cy="' + cy + '" r="130" class="vbox" style="--c:var(--sa,#7C5CFF)"/>' + txt(cx - 170, cy, wrap(it[0] || '', 14), { cls: 'vt b' }) + '</g><g class="vi" style="--i:1"><circle cx="' + (cx + 90) + '" cy="' + cy + '" r="130" class="vbox" style="--c:var(--sb,#2DE2E6)"/>' + txt(cx + 170, cy, wrap(it[1] || '', 14), { cls: 'vt b' }) + '</g><g class="vi" style="--i:2">' + txt(cx, cy, wrap(it[2] || '', 12), { cls: 'vt b' }) + '</g>' };
  };

  R.donut = function (d) {
    var it = parts(d).map(function (x) { var p = x.split('='); return [p[0].trim(), parseFloat(p[1])]; }).filter(function (x) { return !isNaN(x[1]); }), tot = it.reduce(function (a, x) { return a + x[1]; }, 0) || 1, cx = 230, cy = 150, r = 100, ir = 58, a0 = -Math.PI / 2, out = '';
    it.forEach(function (x, k) {
      var a1 = a0 + x[1] / tot * 2 * Math.PI, big = a1 - a0 > Math.PI ? 1 : 0, p = function (rad, a) { return (cx + Math.cos(a) * rad) + ',' + (cy + Math.sin(a) * rad); };
      out += '<path class="vi vbox" style="--i:' + k + ';--c:' + lerpColor(k, it.length) + '" d="M' + p(r, a0) + ' A' + r + ',' + r + ' 0 ' + big + ' 1 ' + p(r, a1 - 0.0001) + ' L' + p(ir, a1 - 0.0001) + ' A' + ir + ',' + ir + ' 0 ' + big + ' 0 ' + p(ir, a0) + ' Z"/>';
      out += '<g class="vi" style="--i:' + k + '"><rect x="480" y="' + (40 + k * 34) + '" width="18" height="18" rx="5" class="vbox" style="--c:' + lerpColor(k, it.length) + '"/>' + txt(508, 49 + k * 34, x[0] + '  ' + Math.round(x[1] / tot * 1000) / 10 + '%', { anchor: 'start', cls: 'vt' }) + '</g>'; a0 = a1;
    });
    return { h: Math.max(300, 60 + it.length * 34), b: out };
  };

  R.sequence = function (d, id) {
    var msgs = parts(d).map(function (x) { var m = x.match(/^(.+?)\s*(~>|>)\s*(.+?)\s*:\s*(.*)$/); return m ? { a: m[1].trim(), b: m[3].trim(), dash: m[2] === '~>', t: m[4].trim() } : null; }).filter(Boolean), who = [];
    msgs.forEach(function (m) { if (who.indexOf(m.a) < 0) who.push(m.a); if (who.indexOf(m.b) < 0) who.push(m.b); });
    var n = who.length, step = (W - 120) / Math.max(1, n - 1), X = {}, top = 60, rh = 46, out = '';
    who.forEach(function (w, k) { X[w] = n === 1 ? W / 2 : 60 + k * step; out += '<g class="vi" style="--i:0">' + '<line x1="' + X[w] + '" x2="' + X[w] + '" y1="' + (top - 6) + '" y2="' + (top + 10 + msgs.length * rh) + '" class="vgrid" stroke-dasharray="4 5"/><rect x="' + (X[w] - 60) + '" y="6" width="120" height="40" rx="12" class="vbox strong" style="--c:' + lerpColor(k, n) + '"/>' + txt(X[w], 26, w, { cls: 'vt b' }) + '</g>'; });
    msgs.forEach(function (m, k) { var y = top + 24 + k * rh; out += line(X[m.a] + (X[m.b] > X[m.a] ? 4 : -4), y, X[m.b] + (X[m.b] > X[m.a] ? -4 : 4), y, id, k + 1, m.dash) + txt((X[m.a] + X[m.b]) / 2, y - 12, m.t, { cls: 'vs b', fs: 13 }); });
    return { h: top + 30 + msgs.length * rh, b: out };
  };

  R.blocks = function (d) {
    var it = parts(d).map(function (x) { var p = x.split(':'); return { t: p[0].trim(), s: parseFloat(p[1]) || 1 }; }), tot = it.reduce(function (a, x) { return a + x.s; }, 0), avail = W - 20, minw = 44, x = 10, out = '', sizes = it.map(function (b) { return Math.max(minw, b.s / tot * avail); }), sum = sizes.reduce(function (a, b) { return a + b; }, 0);
    it.forEach(function (b, k) { var w = sizes[k] * avail / sum, free = /^(free|hole|empty|unused)/i.test(b.t); out += '<g class="vi" style="--i:' + k + '"><rect x="' + x + '" y="30" width="' + (w - 4) + '" height="84" rx="10" class="vbox' + (free ? ' dashed' : '') + '" style="--c:' + (free ? 'rgba(255,255,255,.55)' : lerpColor(k, it.length)) + '"/>' + txt(x + (w - 4) / 2, 62, wrap(b.t, Math.max(4, Math.floor(w / 8))), { cls: 'vt b', fs: 13, lh: 15 }) + txt(x + (w - 4) / 2, 98, String(b.s), { cls: 'vs', fs: 12 }) + '</g>'; x += w; });
    return { h: 140, b: out };
  };

  /* tiny safe expression evaluator for the curve kind (CSP forbids eval) */
  function evalExpr(src) {
    var s = src.replace(/\s+/g, '').toLowerCase(), i, F = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, ln: Math.log, log: Math.log10, sqrt: Math.sqrt, abs: Math.abs, tanh: Math.tanh };
    function ex(x) { var v = term(x); while (s[i] === '+' || s[i] === '-') { var o = s[i++], r = term(x); v = o === '+' ? v + r : v - r; } return v; }
    function term(x) { var v = pw(x); while (s[i] === '*' || s[i] === '/') { var o = s[i++], r = pw(x); v = o === '*' ? v * r : v / r; } return v; }
    function pw(x) { var b = un(x); if (s[i] === '^') { i++; return Math.pow(b, pw(x)); } return b; }
    function un(x) { if (s[i] === '-') { i++; return -un(x); } if (s[i] === '+') { i++; return un(x); } return atom(x); }
    function atom(x) {
      if (s[i] === '(') { i++; var v = ex(x); i++; return v; }
      var m = s.slice(i).match(/^(\d+\.?\d*|\.\d+)/); if (m) { i += m[0].length; return parseFloat(m[0]); }
      m = s.slice(i).match(/^[a-z]+/); if (!m) return NaN; var nm = m[0]; i += nm.length;
      if (nm === 'x') return x; if (nm === 'pi') return Math.PI; if (nm === 'e') return Math.E;
      if (F[nm] && s[i] === '(') { i++; var a = ex(x); i++; return F[nm](a); } return NaN;
    }
    return function (x) { i = 0; var v = ex(x); return v; };
  }
  R.curve = function (d) {
    var cfg = { xmin: -5, xmax: 5 }, fns = [];
    parts(d).forEach(function (p) { var m = p.match(/^(xmin|xmax|ymin|ymax)\s*=\s*(-?[\d.]+)$/i); if (m) cfg[m[1].toLowerCase()] = parseFloat(m[2]); else { var f = p.replace(/^y\d?\s*=\s*/i, ''); fns.push({ src: f, fn: evalExpr(f) }); } });
    var X0 = 60, X1 = W - 30, Y0 = 20, Y1 = 290, N = 240, pts = fns.map(function (f) { var a = []; for (var k = 0; k <= N; k++) { var x = cfg.xmin + (cfg.xmax - cfg.xmin) * k / N, y = f.fn(x); a.push([x, isFinite(y) ? y : null]); } return a; });
    var ys = [].concat.apply([], pts).map(function (p) { return p[1]; }).filter(function (v) { return v !== null; }), ymin = cfg.ymin !== undefined ? cfg.ymin : Math.min.apply(null, ys), ymax = cfg.ymax !== undefined ? cfg.ymax : Math.max.apply(null, ys);
    if (ymax - ymin < 1e-9) { ymax += 1; ymin -= 1; } var pad = (ymax - ymin) * .08; if (cfg.ymin === undefined) ymin -= pad; if (cfg.ymax === undefined) ymax += pad;
    var sx = function (x) { return X0 + (x - cfg.xmin) / (cfg.xmax - cfg.xmin) * (X1 - X0); }, sy = function (y) { return Y1 - (y - ymin) / (ymax - ymin) * (Y1 - Y0); }, out = '';
    for (var g = 0; g <= 4; g++) { var gy = Y0 + g * (Y1 - Y0) / 4, val = ymax - g * (ymax - ymin) / 4; out += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + gy + '" y2="' + gy + '" class="vgrid"/>' + txt(X0 - 8, gy, String(Math.round(val * 100) / 100), { anchor: 'end', cls: 'vs', fs: 12 }); }
    for (var h = 0; h <= 5; h++) { var gx = X0 + h * (X1 - X0) / 5, xv = cfg.xmin + h * (cfg.xmax - cfg.xmin) / 5; out += txt(gx, Y1 + 18, String(Math.round(xv * 100) / 100), { cls: 'vs', fs: 12 }); }
    if (ymin < 0 && ymax > 0) out += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + sy(0) + '" y2="' + sy(0) + '" class="vln strong"/>';
    if (cfg.xmin < 0 && cfg.xmax > 0) out += '<line x1="' + sx(0) + '" x2="' + sx(0) + '" y1="' + Y0 + '" y2="' + Y1 + '" class="vln strong"/>';
    pts.forEach(function (a, k) { var dstr = ''; a.forEach(function (p, j) { if (p[1] === null || p[1] > ymax * 50 || p[1] < ymin * 50 && ymin < 0) return; dstr += (dstr && a[j - 1] && a[j - 1][1] !== null ? 'L' : 'M') + sx(p[0]).toFixed(1) + ',' + sy(p[1]).toFixed(1); }); out += '<path d="' + dstr + '" fill="none" class="vcurve" style="--i:' + k + ';--c:' + lerpColor(k, Math.max(2, fns.length)) + '"/>' + '<g class="vi" style="--i:' + (k + 1) + '">' + txt(X1 - 4, Y0 + 12 + k * 20, 'y = ' + fns[k].src, { anchor: 'end', cls: 'vs b', fs: 13 }) + '</g>'; });
    return { h: 330, b: out };
  };

  R.stack = function (d, id) {
    var it = parts(d), out = '', bw = 260, x = (W - bw) / 2, h = 52;
    it.forEach(function (t, k) { out += box(x, 40 + k * (h + 8), bw, h, t, k); });
    out += txt(x + bw + 90, 56, 'push / pop here', { cls: 'vs b' }) + '<line class="vln vi" style="--i:1" x1="' + (x + bw + 90) + '" y1="76" x2="' + (x + bw + 12) + '" y2="' + (40 + h / 2) + '" marker-end="url(#ar' + id + ')"/>';
    return { h: 60 + it.length * (h + 8), b: out };
  };

  function one(v) {
    var fn = R[v.kind]; if (!fn) return '';
    var id = ++uid, r;
    try { r = fn(v.data, id); } catch (e) { return ''; }
    return '<figure class="vis"><figcaption><span class="vtag">' + esc(v.kind) + '</span>' + esc(v.title) + '</figcaption><svg viewBox="0 0 ' + W + ' ' + Math.round(r.h) + '" role="img" aria-label="' + esc(v.title) + '">' + defs(id) + r.b + '</svg></figure>';
  }
  return { render: function (list) { return (list || []).map(one).join(''); }, kinds: Object.keys(R), one: one };
})();

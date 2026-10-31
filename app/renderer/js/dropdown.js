/* 3D dropdown: replaces every native <select class="in"> with a styled, searchable picker (pop-over on PC, bottom sheet on phones).
   The real <select> stays in the page (hidden), so existing code keeps reading .value and listening for "change". */
(function () {
  'use strict';
  var open = null;
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined) e.textContent = txt; return e; }
  function isPhone() { return window.innerWidth < 700; }

  function items(sel) {
    var out = [];
    Array.prototype.forEach.call(sel.children, function (c) {
      if (c.tagName === 'OPTGROUP') {
        var g = { group: c.label, collapsed: c.getAttribute('data-collapsed') === '1', opts: [] };
        Array.prototype.forEach.call(c.children, function (o) { g.opts.push(opt(o)); });
        out.push(g);
      } else if (c.tagName === 'OPTION') {
        var last = out[out.length - 1];
        if (!last || last.group !== '') { last = { group: '', collapsed: false, opts: [] }; out.push(last); }
        last.opts.push(opt(c));
      }
    });
    return out;
  }
  function opt(o) { return { v: o.value, t: o.textContent, c: o.getAttribute('data-color') || '', s: o.getAttribute('data-sub') || '', dis: o.disabled }; }
  function labelOf(sel) { var l = sel.id ? document.querySelector('label[for="' + sel.id + '"]') : null; return l ? l.textContent.trim() : ''; }
  function curText(sel) { var o = sel.options[sel.selectedIndex]; return o ? o.textContent : ''; }

  function enhance(sel) {
    if (sel.__dd || sel.hasAttribute('data-native') || sel.multiple || !sel.parentNode) return;
    sel.__dd = 1;
    var wrap = el('div', 'dd'); sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
    sel.classList.add('dd-native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    var btn = el('button', 'dd-btn'); btn.type = 'button'; btn.setAttribute('aria-haspopup', 'listbox');
    var dot = el('i', 'dd-dot'), lab = el('span', 'dd-label'), car = el('span', 'dd-caret');
    btn.appendChild(dot); btn.appendChild(lab); btn.appendChild(car); wrap.insertBefore(btn, sel);
    function sync() {
      var o = sel.options[sel.selectedIndex]; lab.textContent = o ? o.textContent : '';
      var c = o && o.getAttribute('data-color'); dot.style.background = c || ''; dot.style.visibility = c ? 'visible' : 'hidden'; dot.style.display = c ? '' : 'none';
      btn.disabled = sel.disabled;
    }
    sync(); sel.addEventListener('change', sync);
    btn.addEventListener('click', function (e) { e.preventDefault(); if (open && open.sel === sel) close(); else openPanel(sel, btn, sync); });
    var l = sel.id ? document.querySelector('label[for="' + sel.id + '"]') : null;
    if (l) l.addEventListener('click', function (e) { e.preventDefault(); btn.focus(); });
  }

  function close() {
    if (!open) return; var o = open; open = null;
    o.layer.classList.remove('on'); document.removeEventListener('keydown', o.key, true); window.removeEventListener('resize', close);
    setTimeout(function () { if (o.layer.parentNode) o.layer.parentNode.removeChild(o.layer); }, 220);
    try { o.btn.focus({ preventScroll: true }); } catch (e) { }
    o.btn.setAttribute('aria-expanded', 'false');
  }

  function openPanel(sel, btn, sync) {
    close();
    var data = items(sel), total = 0; data.forEach(function (g) { total += g.opts.length; });
    var phone = isPhone(), layer = el('div', 'dd-layer' + (phone ? ' sheet' : '')), back = el('div', 'dd-back'), panel = el('div', 'dd-panel'); panel.setAttribute('role', 'listbox');
    var title = labelOf(sel) || 'Choose';
    var head = el('div', 'dd-head'); head.appendChild(el('b', '', title));
    var x = el('button', 'dd-x', '×'); x.type = 'button'; x.setAttribute('aria-label', 'Close'); head.appendChild(x); panel.appendChild(head);
    var search = null;
    if (total > 7) { search = el('input', 'dd-search'); search.type = 'search'; search.placeholder = 'Search...'; search.setAttribute('aria-label', 'Search'); panel.appendChild(search); }
    var list = el('div', 'dd-list'); panel.appendChild(list);
    layer.appendChild(back); layer.appendChild(panel); document.body.appendChild(layer);

    var nodes = [], q = '', active = -1;
    function render() {
      list.textContent = ''; nodes = []; var shown = 0, n = 0;
      data.forEach(function (g) {
        var matched = g.opts.filter(function (o) { return !q || (o.t + ' ' + o.s).toLowerCase().indexOf(q) > -1; });
        if (!matched.length) return;
        var folded = g.collapsed && !q && !g.open;
        if (g.group) {
          var h = el('button', 'dd-grp' + (g.collapsed ? ' fold' : '') + (folded ? '' : ' openg')); h.type = 'button';
          h.appendChild(el('span', '', g.group)); h.appendChild(el('em', '', String(matched.length)));
          if (g.collapsed) h.addEventListener('click', function () { g.open = !g.open; render(); }); else h.disabled = true;
          list.appendChild(h);
        }
        if (folded) return;
        matched.forEach(function (o) {
          shown++; var b = el('button', 'dd-opt' + (o.v === sel.value ? ' sel' : '')); b.type = 'button'; b.setAttribute('role', 'option'); b.setAttribute('aria-selected', o.v === sel.value ? 'true' : 'false');
          b.style.setProperty('--i', Math.min(n++, 14));
          if (o.c) { var d = el('i', 'dd-dot'); d.style.background = o.c; b.appendChild(d); }
          var t = el('span', 'dd-t'); t.appendChild(el('span', '', o.t)); if (o.s) t.appendChild(el('small', '', o.s)); b.appendChild(t);
          if (o.v === sel.value) b.appendChild(el('span', 'dd-tick', '✓'));
          if (o.dis) b.disabled = true; else b.addEventListener('click', function () { pick(o.v); });
          list.appendChild(b); nodes.push(b);
        });
      });
      if (!shown && !list.children.length) list.appendChild(el('div', 'dd-none', 'No match. Try another word.'));
      active = -1;
    }
    function pick(v) { sel.value = v; sel.dispatchEvent(new Event('change', { bubbles: true })); sync(); close(); }
    function mark(i) { if (!nodes.length) return; active = (i + nodes.length) % nodes.length; nodes.forEach(function (n, k) { n.classList.toggle('act', k === active); }); nodes[active].scrollIntoView({ block: 'nearest' }); }
    render();
    if (search) search.addEventListener('input', function () { q = search.value.trim().toLowerCase(); render(); });
    var key = function (e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); mark(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); mark(active < 0 ? nodes.length - 1 : active - 1); }
      else if (e.key === 'Enter' && active > -1) { e.preventDefault(); nodes[active].click(); }
    };
    document.addEventListener('keydown', key, true); window.addEventListener('resize', close);
    back.addEventListener('click', close); x.addEventListener('click', close);
    open = { sel: sel, btn: btn, layer: layer, key: key }; btn.setAttribute('aria-expanded', 'true');

    if (!phone) {
      var r = btn.getBoundingClientRect(), w = Math.max(r.width, 300), left = Math.min(Math.max(8, r.left), window.innerWidth - w - 8);
      var below = window.innerHeight - r.bottom - 12, above = r.top - 12, up = below < 280 && above > below, mh = Math.max(200, Math.min(up ? above : below, 460));
      panel.style.width = w + 'px'; panel.style.left = left + 'px'; panel.style.maxHeight = mh + 'px';
      if (up) { panel.style.bottom = (window.innerHeight - r.top + 8) + 'px'; panel.classList.add('up'); } else panel.style.top = (r.bottom + 8) + 'px';
    }
    requestAnimationFrame(function () { layer.classList.add('on'); var s = list.querySelector('.sel'); if (s) s.scrollIntoView({ block: 'center' }); if (search && !phone) search.focus(); });
  }

  function scan() { Array.prototype.forEach.call(document.querySelectorAll('select.in'), enhance); }
  var pend = 0;
  new MutationObserver(function () { if (pend) return; pend = requestAnimationFrame(function () { pend = 0; scan(); }); }).observe(document.body || document.documentElement, { childList: true, subtree: true });
  if (document.readyState !== 'loading') scan(); else document.addEventListener('DOMContentLoaded', scan);
  window.FSDropdown = { scan: scan, close: close };
})();

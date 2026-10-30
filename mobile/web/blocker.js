(function () {
  var L = window.LockBridge; function j(s) { try { return JSON.parse(s); } catch (e) { return null; } }
  var info = (L && j(L.info())) || { active: true, subject: 'Focus time', endsAt: Date.now() + 25 * 60000, topicId: '' };
  var contacts = (L && j(L.contacts())) || [];
  document.getElementById('subj').textContent = info.subject || 'Focus time';
  if (info.source === 'pc') document.getElementById('why').textContent = 'A study session is running on your PC, so this phone is locked too. It opens again when the session ends.';
  try { Float3D.set(info.topicId || 'generic', '#7C5CFF', '#2DE2E6'); } catch (e) { }
  if (info.guard === false) { var gw = document.getElementById('guardwarn'); gw.hidden = false; document.getElementById('gwfix').onclick = function () { try { L.openApp(); } catch (e) { } }; }
  if (info.version) document.getElementById('stat').textContent = 'FutureSelf v' + info.version + ' · calls: ' + (info.guard === false ? 'NOT screened' : 'screened') + ' · notifications: ' + (info.hidden === false ? 'NOT hidden' : 'hidden');
  var tEl = document.getElementById('time');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    var cur = (L && j(L.info())) || info;
    if (L && cur && cur.active === false) { try { L.finish(); } catch (e) { } return; }
    var ms = Math.max(0, (cur.endsAt || 0) - (cur.pausedAt || Date.now())), s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60;
    tEl.textContent = (h ? h + ':' + pad(m) : pad(m)) + ':' + pad(x);
  }
  tick(); setInterval(tick, 1000);
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var rows = [{ name: 'Emergency services', number: '112', em: true }].concat(contacts);
  document.getElementById('calls').innerHTML = rows.map(function (c) { return '<div class="call' + (c.em ? '' : ' fam') + '"><span><b>' + esc(c.name) + '</b><small>' + esc(c.number) + '</small></span><button data-n="' + esc(c.number) + '">Call</button></div>'; }).join('');
  document.getElementById('calls').addEventListener('click', function (e) { var b = e.target.closest('button[data-n]'); if (b && L) L.call(b.getAttribute('data-n')); });
  document.getElementById('back').addEventListener('click', function () { if (L) L.openApp(); });
})();

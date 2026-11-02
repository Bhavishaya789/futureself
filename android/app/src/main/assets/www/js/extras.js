/* Extras: weekly report, colour themes, built-in focus music, friends + leaderboard + study rooms.
   Same file runs in the Windows app and in the phone app. Nothing here needs a download: the music is made live with Web Audio. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  function H() { return FSX.h; }
  function esc(s) { return H().esc(s); }
  function $(s) { return document.querySelector(s); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { } return null; }
  function dur(min) { min = Math.round(min || 0); return min >= 60 ? Math.floor(min / 60) + 'h ' + (min % 60 ? (min % 60) + 'm' : '') : min + 'm'; }
  function acct(op, p) { return window.fsApi && window.fsApi.acct ? window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) throw new Error((r && r.error) || 'Something went wrong'); return r.data; }) : Promise.reject(new Error('Accounts are not available here.')); }
  function social(p) { return acct('social', p); }
  var DAY3 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  FSX.nav = (FSX.nav || []).concat([['friends', 'users', 'Friends']]);
  FSX.icons = Object.assign(FSX.icons || {}, {
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><path d="M16 4.6a3.4 3.4 0 010 6.4M18 14.8c2.2.6 3.5 2.3 3.5 5.2"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>'
  });

  /* ============ themes ============ */
  var THEMES = {
    nebula: { n: 'Nebula', c: ['#7C5CFF', '#2DE2E6'], v: {} },
    forest: { n: 'Forest', c: ['#3DDC97', '#9be15d'], v: { '--bg': '#04120c', '--bg2': '#07200f', '--violet': '#2fbf7a', '--cyan': '#b4e86a', '--grad': 'linear-gradient(120deg,#2fbf7a,#b4e86a)', '--line': 'rgba(120,230,170,.16)', '--line-2': 'rgba(120,230,170,.3)', '--panel': 'rgba(10,34,24,.62)', '--panel-2': 'rgba(14,44,30,.7)', '--muted': '#8fb5a0', '--dim': '#5f8572' }, bg: ['#0c3a22', '#0a2a1c'] },
    sunset: { n: 'Sunset', c: ['#ff7a59', '#ffc857'], v: { '--bg': '#140808', '--bg2': '#220d0d', '--violet': '#ff6b4a', '--cyan': '#ffc857', '--grad': 'linear-gradient(120deg,#ff6b4a,#ffc857)', '--line': 'rgba(255,170,140,.17)', '--line-2': 'rgba(255,170,140,.32)', '--panel': 'rgba(40,16,16,.62)', '--panel-2': 'rgba(54,22,20,.7)', '--muted': '#c3a097', '--dim': '#8f6e66' }, bg: ['#4a1a1a', '#3a1a10'] },
    ocean: { n: 'Ocean', c: ['#3aa0ff', '#2de2e6'], v: { '--bg': '#050d18', '--bg2': '#08182a', '--violet': '#2f8bff', '--cyan': '#2de2e6', '--grad': 'linear-gradient(120deg,#2f8bff,#2de2e6)', '--line': 'rgba(120,190,255,.16)', '--line-2': 'rgba(120,190,255,.3)', '--panel': 'rgba(10,26,48,.62)', '--panel-2': 'rgba(14,34,62,.7)', '--muted': '#8fa9c7', '--dim': '#5d7794' }, bg: ['#0c2d55', '#093344'] },
    mono: { n: 'Midnight', c: ['#9aa3b5', '#e8ecf5'], v: { '--bg': '#07080a', '--bg2': '#0d0f13', '--violet': '#8d96ab', '--cyan': '#dfe5f2', '--grad': 'linear-gradient(120deg,#8d96ab,#dfe5f2)', '--line': 'rgba(200,210,230,.14)', '--line-2': 'rgba(200,210,230,.28)', '--panel': 'rgba(18,20,26,.66)', '--panel-2': 'rgba(26,29,36,.72)', '--muted': '#9aa0ad', '--dim': '#6a707c' }, bg: ['#1c1f27', '#14161b'] }
  };
  var themeEl = null;
  function applyTheme(id) {
    var t = THEMES[id] || THEMES.nebula, css = ':root{';
    Object.keys(t.v).forEach(function (k) { css += k + ':' + t.v[k] + ';'; });
    css += '}' + (t.bg ? 'body{background:radial-gradient(1200px 700px at 78% 10%,' + t.bg[0] + ' 0%,transparent 60%),radial-gradient(900px 600px at 10% 90%,' + t.bg[1] + ' 0%,transparent 55%),var(--bg)!important;background-attachment:fixed}' : '');
    if (!themeEl) { themeEl = document.createElement('style'); themeEl.id = 'fs-theme'; document.head.appendChild(themeEl); }
    themeEl.textContent = css;
    try { var m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', t.v['--bg'] || '#060812'); } catch (e) { }
  }
  applyTheme(ls('fs_theme') || 'nebula');

  /* ============ focus music (made live, no files) ============ */
  var M = { ctx: null, master: null, nodes: [], timers: [], on: false, id: '' };
  var TRACKS = {
    rain: ['Soft rain', 'Rain on a window'], brown: ['Deep brown noise', 'Low, warm rumble'], white: ['White noise', 'Even hiss that masks sound'],
    pad: ['Deep focus', 'Slow ambient chords'], lofi: ['Lofi keys', 'Mellow chords and a gentle beat'], binaural: ['Binaural 40 Hz', 'Use headphones'], space: ['Space drone', 'Wide, slow and calm']
  };
  function noiseBuf(ctx, kind) {
    var len = ctx.sampleRate * 4, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0), last = 0, i;
    for (i = 0; i < len; i++) { var w = Math.random() * 2 - 1; if (kind === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w * 0.5; }
    return b;
  }
  function addNode(n) { M.nodes.push(n); return n; }
  function osc(type, f, dest, gain, detune) {
    var o = M.ctx.createOscillator(), g = M.ctx.createGain(); o.type = type; o.frequency.value = f; if (detune) o.detune.value = detune; g.gain.value = gain; o.connect(g); g.connect(dest); o.start(); addNode(o); addNode(g); return { o: o, g: g };
  }
  function noise(kind, dest, gain, filt) {
    var s = M.ctx.createBufferSource(), g = M.ctx.createGain(), f = M.ctx.createBiquadFilter(); s.buffer = noiseBuf(M.ctx, kind); s.loop = true;
    f.type = filt.type; f.frequency.value = filt.f; if (filt.q) f.Q.value = filt.q; g.gain.value = gain; s.connect(f); f.connect(g); g.connect(dest); s.start(); addNode(s); addNode(f); addNode(g); return { s: s, f: f, g: g };
  }
  function lfo(param, rate, depth) { var l = M.ctx.createOscillator(), g = M.ctx.createGain(); l.frequency.value = rate; g.gain.value = depth; l.connect(g); g.connect(param); l.start(); addNode(l); addNode(g); }
  var CH = [[261.6, 329.6, 392, 493.9], [220, 261.6, 329.6, 392], [174.6, 220, 261.6, 329.6], [196, 246.9, 293.7, 392]];
  function build(id) {
    var c = M.ctx, m = M.master;
    if (id === 'white') noise('white', m, 0.35, { type: 'lowpass', f: 9000 });
    else if (id === 'brown') noise('brown', m, 0.9, { type: 'lowpass', f: 600 });
    else if (id === 'rain') {
      noise('white', m, 0.28, { type: 'highpass', f: 1500 }); var low = noise('brown', m, 0.5, { type: 'lowpass', f: 500 });
      lfo(low.g.gain, 0.1, 0.15);
      M.timers.push(setInterval(function () { if (!M.on) return; var o = c.createOscillator(), g = c.createGain(); o.frequency.value = 1800 + Math.random() * 2600; g.gain.setValueAtTime(0.05, c.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.05); o.connect(g); g.connect(m); o.start(); o.stop(c.currentTime + 0.06); }, 90));
    } else if (id === 'pad' || id === 'space') {
      var base = id === 'space' ? [110, 164.8, 220, 329.6] : CH[0];
      base.forEach(function (f, i) { var a = osc('sine', f, m, 0.05, -4), b = osc('sine', f * 1.003, m, 0.05, 5); lfo(a.g.gain, 0.04 + i * 0.013, 0.03); lfo(b.g.gain, 0.05 + i * 0.011, 0.03); });
      if (id === 'space') { osc('sine', 55, m, 0.08); noise('white', m, 0.05, { type: 'bandpass', f: 800, q: 0.7 }); }
    } else if (id === 'lofi') {
      var step = 0, lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800; lp.connect(m); addNode(lp);
      M.timers.push(setInterval(function () {
        if (!M.on) return; var ch = CH[Math.floor(step / 4) % CH.length], t = c.currentTime;
        var f = ch[step % 4] * (step % 8 === 7 ? 2 : 1), o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 12;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4); o.connect(g); g.connect(lp); o.start(t); o.stop(t + 1.5);
        if (step % 4 === 0) { var k = c.createOscillator(), kg = c.createGain(); k.frequency.setValueAtTime(120, t); k.frequency.exponentialRampToValueAtTime(40, t + 0.2); kg.gain.setValueAtTime(0.28, t); kg.gain.exponentialRampToValueAtTime(0.0001, t + 0.25); k.connect(kg); kg.connect(m); k.start(t); k.stop(t + 0.3); }
        if (step % 2 === 1) { var h = c.createBufferSource(), hg = c.createGain(), hf = c.createBiquadFilter(); h.buffer = noiseBuf(c, 'white'); hf.type = 'highpass'; hf.frequency.value = 7000; hg.gain.setValueAtTime(0.06, t); hg.gain.exponentialRampToValueAtTime(0.0001, t + 0.06); h.connect(hf); hf.connect(hg); hg.connect(m); h.start(t); h.stop(t + 0.08); }
        step++;
      }, 430));
      noise('white', m, 0.02, { type: 'lowpass', f: 3000 });
    } else if (id === 'binaural') {
      var L = c.createStereoPanner ? c.createStereoPanner() : null, R = c.createStereoPanner ? c.createStereoPanner() : null;
      if (L && R) { L.pan.value = -1; R.pan.value = 1; L.connect(m); R.connect(m); addNode(L); addNode(R); osc('sine', 200, L, 0.18); osc('sine', 240, R, 0.18); } else osc('sine', 220, m, 0.15);
      noise('brown', m, 0.25, { type: 'lowpass', f: 400 });
    }
  }
  function stopMusic() {
    M.on = false; M.timers.forEach(clearInterval); M.timers = [];
    var ctx = M.ctx, master = M.master, nodes = M.nodes; M.nodes = [];
    try { if (master && ctx) { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.12); } } catch (e) { }
    setTimeout(function () { nodes.forEach(function (n) { try { n.stop && n.stop(); } catch (e) { } try { n.disconnect(); } catch (e) { } }); }, 450);
    M.id = ''; paintMusic();
  }
  function playMusic(id) {
    if (!TRACKS[id]) return;
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return H().toast('Sound is not available here', '', true);
    if (M.on) stopMusic();
    try {
      if (!M.ctx) M.ctx = new AC();
      if (M.ctx.state === 'suspended') M.ctx.resume();
      M.master = M.ctx.createGain(); M.master.gain.value = 0.0001; M.master.connect(M.ctx.destination);
      M.on = true; M.id = id; build(id);
      var vol = Math.max(0.05, Math.min(1, (+ls('fs_vol') || 55) / 100));
      M.master.gain.setTargetAtTime(vol * 0.9, M.ctx.currentTime, 0.4); ls('fs_track', id);
    } catch (e) { M.on = false; H().toast('Could not start the sound', e.message, true); }
    paintMusic();
  }
  function musicHTML(compact) {
    var cur = M.on ? M.id : '', vol = +ls('fs_vol') || 55;
    return '<div class="mus' + (compact ? ' compact' : '') + '" id="musbox"><div class="chips">' + Object.keys(TRACKS).map(function (k) { return '<button class="chip' + (cur === k ? ' on' : '') + '" data-act="mplay" data-id="' + k + '" title="' + esc(TRACKS[k][1]) + '">' + esc(TRACKS[k][0]) + '</button>'; }).join('') + '</div>' +
      '<div class="row" style="margin-top:10px;gap:10px"><button class="btn sm" data-act="mstop"' + (M.on ? '' : ' disabled') + '>Stop</button><label class="muted" style="font-size:12px">Volume</label><input type="range" min="5" max="100" value="' + vol + '" id="mvol" class="rng" aria-label="Volume"></div>' +
      '<p class="muted" style="font-size:12px;margin-top:8px">Made on your device, no download. Binaural works best with headphones.</p></div>';
  }
  function paintMusic() { var b = $('#musbox'); if (!b) return; var compact = b.classList.contains('compact'); b.outerHTML = musicHTML(compact); }
  document.addEventListener('input', function (e) { if (e.target && e.target.id === 'mvol') { var v = +e.target.value; ls('fs_vol', String(v)); if (M.on && M.master) M.master.gain.setTargetAtTime(v / 100 * 0.9, M.ctx.currentTime, 0.1); } });
  /* the music belongs to the study session: it stops when the session screen is gone */
  setInterval(function () { if (M.on && !document.querySelector('.focus') && !document.querySelector('#musbox')) stopMusic(); }, 2500);
  document.addEventListener('visibilitychange', function () { try { if (!document.hidden && M.on && M.ctx && M.ctx.state === 'suspended') M.ctx.resume(); } catch (e) { } });

  /* ============ weekly report ============ */
  var REP = null;
  function loadReport() { return H().api('/report').then(function (r) { REP = r; return r; }); }
  function reportHTML(r) {
    var max = Math.max.apply(null, r.days.map(function (d) { return d.minutes; }).concat([30])), diff = r.minutes - r.last_minutes;
    var cmp = r.last_minutes ? (diff >= 0 ? '+' : '') + Math.round(100 * diff / r.last_minutes) + '% vs last week' : (r.minutes ? 'First week with data' : 'No sessions yet this week');
    var bars = r.days.map(function (d, i) { return '<div class="col"><em>' + (d.minutes || '') + '</em><div class="b' + (d.future ? ' fut' : '') + (r.best_day && d.date === r.best_day.date ? ' best' : '') + '" style="height:' + Math.max(2, Math.round(100 * d.minutes / max * 1.3)) + 'px"></div><small>' + DAY3[i] + '</small></div>'; }).join('');
    var subj = r.subjects.length ? r.subjects.map(function (s) { var w = Math.round(100 * s.minutes / Math.max(1, r.minutes)); return '<div class="kv"><span>' + esc(s.title) + '</span><b>' + dur(s.minutes) + ' <small class="muted">' + w + '%</small></b></div>'; }).join('') : '<div class="empty">Study something this week and it shows up here.</div>';
    var tip = r.minutes === 0 ? 'A short 25 minute session today starts your week.' : r.days_studied >= 5 ? 'Strong week. Keep the streak alive.' : r.goal_days === 0 ? 'No day reached your daily goal yet. One focused session can fix that.' : 'You reached your goal on ' + r.goal_days + (r.goal_days === 1 ? ' day.' : ' days.') + ' Try for one more.';
    return '<div class="card tilt" id="wkrep" style="margin-top:18px"><div class="row spread" style="flex-wrap:wrap;gap:8px"><h2 style="margin:0">Your week</h2><span class="badge ' + (diff >= 0 && r.minutes ? 'ok' : '') + '">' + esc(cmp) + '</span></div>' +
      '<div class="grid g3 compact" style="margin:14px 0"><div class="stat"><div class="lbl">Study time</div><div class="big">' + dur(r.minutes) + '</div></div><div class="stat"><div class="lbl">Days studied</div><div class="big">' + r.days_studied + '<small>/ 7</small></div></div><div class="stat"><div class="lbl">Sessions finished</div><div class="big">' + r.completed + '<small>/ ' + r.sessions + '</small></div></div></div>' +
      '<div class="bars">' + bars + '</div>' +
      '<div class="grid g2" style="margin-top:14px"><div><h3 style="margin-bottom:8px">By subject</h3>' + subj + '</div><div><h3 style="margin-bottom:8px">Highlights</h3>' +
      '<div class="kv"><span>Best day</span><b>' + (r.best_day ? DAY3[(new Date(r.best_day.date + 'T00:00:00Z').getUTCDay() + 6) % 7] + ' &middot; ' + dur(r.best_day.minutes) : 'none yet') + '</b></div>' +
      '<div class="kv"><span>Goal days (' + r.goal + ' min)</span><b>' + r.goal_days + ' / 7</b></div><div class="kv"><span>Streak</span><b>' + r.streak + (r.streak === 1 ? ' day' : ' days') + ' <small class="muted">best ' + r.best_streak + '</small></b></div>' +
      '<div class="kv"><span>Distractions</span><b>' + r.distractions + '</b></div><p class="muted" style="margin-top:10px">' + esc(tip) + '</p></div></div></div>';
  }

  /* ============ friends, leaderboard, rooms ============ */
  var F = { data: null, room: null, err: '', timer: null, signed: null, busy: false };
  function share() { return ls('fs_share') !== '0'; }
  function leftText(endsAt) { if (!endsAt) return ''; var m = Math.max(0, Math.round((endsAt - Date.now()) / 60000)); return m ? m + ' min left' : 'finishing'; }
  var MEDAL = ['&#129351;', '&#129352;', '&#129353;'];
  function boardHTML(d) {
    if (!d.board.length) return '<div class="empty">Add a friend to start a weekly leaderboard.</div>';
    var top = Math.max(1, d.board[0].weekMin);
    return d.board.map(function (p, i) {
      return '<div class="lbrow' + (p.me ? ' me' : '') + '"><span class="rk">' + (i < 3 && p.weekMin ? MEDAL[i] : (i + 1)) + '</span><div class="grow"><div class="row spread"><b>' + esc(p.name) + (p.me ? ' <small class="muted">you</small>' : '') + '</b><b>' + dur(p.weekMin) + '</b></div>' +
        '<div class="lbbar"><i style="width:' + Math.round(100 * p.weekMin / top) + '%"></i></div>' +
        '<div class="muted" style="font-size:12px;margin-top:4px">' + (p.streak ? '&#128293; ' + p.streak + ' day streak &middot; ' : '') + (p.studying ? '<span class="live">&#9679; studying ' + esc(p.studying.subject) + (p.studying.endsAt ? ' &middot; ' + leftText(p.studying.endsAt) : '') + '</span>' : 'today ' + dur(p.todayMin)) + '</div></div>' +
        (p.me ? '' : '<button class="btn sm ghost" data-act="frem" data-id="' + esc(p.id) + '" title="Remove friend" aria-label="Remove friend">' + H().ic('x') + '</button>') + '</div>';
    }).join('');
  }
  function roomHTML(rm) {
    if (!rm || !rm.code) return '<p class="muted">A study room is a quick way to study alongside friends. One person makes a room and shares the 6 letter code. Everyone in it can see who is studying right now.</p>' +
      '<div class="row" style="flex-wrap:wrap;gap:10px;margin-top:12px"><button class="btn pri" data-act="rnew">Create a room</button><input class="in" id="rcode" maxlength="6" placeholder="ROOM CODE" style="max-width:160px;text-transform:uppercase;letter-spacing:3px" aria-label="Room code"><button class="btn" data-act="rjoin">Join</button></div>';
    return '<div class="row spread" style="flex-wrap:wrap;gap:8px"><div><span class="muted">Room code</span><div class="rcodebig">' + esc(rm.code) + '</div></div><div class="row" style="gap:8px"><button class="btn sm" data-act="rcopy">Copy code</button><button class="btn sm ghost" data-act="rleave">Leave</button></div></div>' +
      '<div style="margin-top:12px">' + rm.members.map(function (m) { return '<div class="item" style="margin-bottom:8px"><div class="grow"><b>' + esc(m.name) + (m.me ? ' <small class="muted">you</small>' : '') + '</b><small>' + (m.studying ? '<span class="live">&#9679; studying ' + esc(m.studying.subject) + (m.studying.endsAt ? ' &middot; ' + leftText(m.studying.endsAt) : '') + '</span>' : (m.here ? 'here, not studying' : 'away')) + '</small></div></div>'; }).join('') + '</div>';
  }
  function friendsBody() {
    var d = F.data;
    if (F.signed === false) return '<div class="card" style="max-width:520px"><h2>Sign in first</h2><p class="muted" style="margin:8px 0 14px">Friends and study rooms use your FutureSelf account, the same one that links your PC and phone.</p><a class="btn pri" href="#/account">Go to Profile</a></div>';
    if (!d) return '<div class="muted">' + (F.err ? esc(F.err) : 'Loading...') + '</div>';
    var inc = d.incoming.length ? '<div class="card" style="margin-bottom:18px"><h2>Friend requests</h2>' + d.incoming.map(function (x) { return '<div class="item" style="margin-bottom:8px"><div class="grow"><b>' + esc(x.name) + '</b><small>wants to be your study friend</small></div><button class="btn sm pri" data-act="facc" data-id="' + esc(x.id) + '">Accept</button><button class="btn sm ghost" data-act="fdec" data-id="' + esc(x.id) + '">Decline</button></div>'; }).join('') + '</div>' : '';
    return inc + '<div class="grid g2" style="align-items:start"><div class="card"><div class="row spread"><h2 style="margin:0">This week</h2><small class="muted">resets Monday</small></div><div id="lb" style="margin-top:12px">' + boardHTML(d) + '</div>' +
      '<div class="fld" style="margin-top:16px"><label class="f" for="femail">Add a friend by email</label><div class="row"><input class="in" id="femail" type="email" placeholder="friend@example.com" autocomplete="off"><button class="btn pri" data-act="fadd">Send</button></div>' +
      (d.outgoing.length ? '<p class="muted" style="font-size:12px;margin-top:8px">Waiting for: ' + d.outgoing.map(function (x) { return esc(x.name); }).join(', ') + '</p>' : '') + '<div class="acerr" id="ferr">' + esc(F.err) + '</div></div></div>' +
      '<div class="stack"><div class="card"><h2>Study room</h2><div id="room">' + roomHTML(F.room) + '</div></div>' +
      '<div class="card"><h2>Privacy</h2><div class="kv"><span>Share my study time with friends</span><label class="switch"><input type="checkbox" id="fshare" ' + (share() ? 'checked' : '') + '><span></span></label></div><p class="muted" style="font-size:12px;margin-top:8px">Friends only see your name, this week\'s minutes, your streak and what subject you are studying right now. Never your answers, notes or timetable.</p></div></div></div>';
  }
  function friendsLoad(keep) {
    return acct('status').then(function (st) {
      F.signed = !!st.signedIn; if (!F.signed) { F.data = null; return; }
      return loadReport().then(function () { return social({ a: 'overview', weekKey: REP.week_key }); }).then(function (o) { F.data = o; return social({ a: 'room' }); }).then(function (rm) { F.room = rm; });
    }).catch(function (e) { F.err = e.message; });
  }
  function friendsPaint() { var v = $('#fbody'); if (!v) return; var typing = document.activeElement && (document.activeElement.id === 'femail' || document.activeElement.id === 'rcode'); if (typing) { var lb = $('#lb'), rm = $('#room'); if (lb && F.data) lb.innerHTML = boardHTML(F.data); if (rm) rm.innerHTML = roomHTML(F.room); return; } v.innerHTML = friendsBody(); }
  function viewFriends(v) {
    F.err = ''; clearInterval(F.timer);
    v.innerHTML = '<div class="top"><div><div class="eyebrow">Friends</div><h1>Study together</h1><p class="muted">A weekly leaderboard with your friends, and rooms to see who is studying right now.</p></div></div><div id="fbody">' + friendsBody() + '</div>';
    return friendsLoad().then(function () { friendsPaint(); syncNow(); F.timer = setInterval(function () { if (!$('#fbody')) return clearInterval(F.timer); friendsLoad().then(friendsPaint); }, 15000); });
  }
  function flash(msg) { F.err = msg; var e = $('#ferr'); if (e) e.textContent = msg; }
  function refresh() { return friendsLoad().then(friendsPaint); }

  /* ---- keep the server up to date with my numbers (every 30 s while signed in, and at once when a session starts or ends) ---- */
  var lastSig = '', syncBusy = false;
  function syncNow() {
    if (syncBusy || !window.fsApi || !window.fsApi.acct) return;
    var Hh = H(); if (!Hh || !Hh.S || !Hh.S.user) return;
    syncBusy = true;
    acct('status').then(function (st) {
      if (!st.signedIn) return;
      return loadReport().then(function (r) {
        var s = Hh.S.session, studying = null;
        if (share() && s && !s.ended && !s.pausedAt) studying = { on: true, subject: s.subject, endsAt: s.startedAt + s.plannedMs + s.pausedMs };
        var body = share() ? { a: 'sync', weekMin: r.minutes, weekKey: r.week_key, todayMin: r.today_minutes, streak: r.streak, studying: studying } : { a: 'sync', weekMin: 0, weekKey: r.week_key, todayMin: 0, streak: 0, studying: null };
        var sig = JSON.stringify([body.weekMin, body.todayMin, body.streak, !!studying, studying && studying.subject]);
        if (sig === lastSig && Date.now() % 4 !== 0) return; lastSig = sig;
        return social(body);
      });
    }).catch(function () { }).then(function () { syncBusy = false; });
  }
  setInterval(syncNow, 30000); setTimeout(syncNow, 6000);
  window.addEventListener('hashchange', function () { setTimeout(syncNow, 800); });

  /* ============ hooks into the main app ============ */
  FSX.routes = Object.assign(FSX.routes || {}, { friends: viewFriends });
  FSX.after = function (r, v) {
    if (r.name === 'progress') { loadReport().then(function (rep) { var host = v.querySelector('.grid.g2') || v; host.insertAdjacentHTML('beforebegin', reportHTML(rep)); }).catch(function () { }); }
    if (r.name === 'settings') {
      var stack = v.querySelector('.stack'); if (!stack) return;
      var cur = ls('fs_theme') || 'nebula';
      stack.insertAdjacentHTML('afterbegin', '<div class="card" id="extras"><h2>Look and sound</h2><div class="fld"><label class="f">Colour theme</label><div class="chips" id="themes">' + Object.keys(THEMES).map(function (k) { return '<button class="chip' + (k === cur ? ' on' : '') + '" data-act="theme" data-id="' + k + '"><i class="sw" style="background:linear-gradient(120deg,' + THEMES[k].c[0] + ',' + THEMES[k].c[1] + ')"></i> ' + THEMES[k].n + '</button>'; }).join('') + '</div></div>' +
        '<div class="fld"><label class="f">Focus music</label>' + musicHTML(false) + '</div></div>');
    }
  };
  FSX.onFocus = function () {
    var meta = document.querySelector('.focus .ctrl'); if (!meta || $('#fmus')) return;
    meta.insertAdjacentHTML('afterend', '<details class="fmus" id="fmus"' + (M.on ? ' open' : '') + '><summary>' + H().ic('music') + ' Focus music</summary>' + musicHTML(true) + '</details>');
    syncNow(); var last = ls('fs_track'); if (ls('fs_autoplay') === '1' && last && !M.on) playMusic(last);
  };

  FSX.actions = Object.assign(FSX.actions || {}, {
    theme: function (el) { var id = el.dataset.id; ls('fs_theme', id); applyTheme(id); document.querySelectorAll('#themes .chip').forEach(function (c) { c.classList.toggle('on', c === el); }); },
    mplay: function (el) { if (M.on && M.id === el.dataset.id) stopMusic(); else playMusic(el.dataset.id); },
    mstop: function () { stopMusic(); },
    fadd: function () {
      var em = ($('#femail').value || '').trim(); if (!em) return flash('Type your friend\'s email.');
      social({ a: 'add', email: em }).then(function (r) { H().toast('Request sent', r.note || ''); var i = $('#femail'); if (i) i.value = ''; flash(''); return refresh(); }).catch(function (e) { flash(e.message); });
    },
    facc: function (el) { social({ a: 'accept', id: el.dataset.id }).then(function () { H().toast('Friend added'); syncNow(); return refresh(); }).catch(function (e) { flash(e.message); }); },
    fdec: function (el) { social({ a: 'decline', id: el.dataset.id }).then(refresh).catch(function (e) { flash(e.message); }); },
    frem: function (el) { if (!el.dataset.sure) { el.dataset.sure = '1'; el.classList.add('danger'); el.title = 'Tap again to remove'; H().toast('Tap the red button again to remove this friend'); setTimeout(function () { delete el.dataset.sure; el.classList.remove('danger'); }, 3500); return; } social({ a: 'remove', id: el.dataset.id }).then(function () { H().toast('Friend removed'); return refresh(); }).catch(function (e) { flash(e.message); }); },
    rnew: function () { social({ a: 'roomNew' }).then(function (r) { H().toast('Room ready', 'Share the code ' + r.code + ' with your friends.'); syncNow(); return refresh(); }).catch(function (e) { flash(e.message); }); },
    rjoin: function () { var c = ($('#rcode').value || '').trim(); if (!c) return flash('Type the 6 letter room code.'); social({ a: 'roomJoin', code: c }).then(function () { H().toast('You joined the room'); syncNow(); return refresh(); }).catch(function (e) { flash(e.message); }); },
    rleave: function () { social({ a: 'roomLeave' }).then(function () { return refresh(); }); },
    rcopy: function () { var c = F.room && F.room.code; if (!c) return; try { navigator.clipboard.writeText(c).then(function () { H().toast('Code copied', c); }, function () { H().toast('Room code', c); }); } catch (e) { H().toast('Room code', c); } }
  });
  document.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'fshare') { ls('fs_share', e.target.checked ? '1' : '0'); lastSig = ''; syncNow(); H().toast(e.target.checked ? 'Sharing on' : 'Sharing off', e.target.checked ? 'Friends can see your weekly minutes.' : 'Friends will see zero from now on.'); }
  });
  FSX.report = { load: loadReport, html: reportHTML };
})();

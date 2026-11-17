/* Cross-device sync. While a student is signed in, their study data (Study Hub, lessons done, quiz scores, timetable, sessions, a few settings)
   is kept in their account in the database, and every device they sign in on merges to the same data.
   Flow: pull the cloud copy -> three-way merge with this device -> push (only if the cloud copy did not change meanwhile) -> apply locally.
   Nothing is ever overwritten blindly: if two devices push at once the loser re-pulls and merges again. */
(function () {
  'use strict';
  var FSX = window.FSX = window.FSX || {};
  var SC = FSX.syncCore;
  var K_BASE = 'fs_sync_base', K_OWNER = 'fs_sync_owner', K_BAK = 'fs_sync_backup', K_AT = 'fs_sync_at', K_OFF = 'fs_sync_off';
  var PREF_KEYS = ['fs_track', 'fs_lang', 'fs_grp', 'fs_level', 'fs_theme', 'fs_code_lang'];
  var CAP = { study: 1500000, prefs: 120000, store: 1900000 };
  var S = { busy: false, again: false, last: 0, err: '', state: 'idle', timer: 0, deb: 0 };

  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { } }
  function J(s, d) { try { var v = JSON.parse(s); return v == null ? d : v; } catch (e) { return d; } }
  function can() { return !!(window.fsApi && window.fsApi.acct && SC && FSX.studyCore); }

  /* the app's own local API (desktop: main process; phone: in-page) */
  function local(method, path, body) {
    if (window.fsApi && window.fsApi.isApp) return window.fsApi.call(method, path, body).then(function (r) { if (r.status >= 400) throw new Error((r.data && r.data.error) || 'Local error'); return r.data; });
    return fetch('/api' + path, { method: method, headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined }).then(function (r) { return r.json().catch(function () { return {}; }); });
  }
  function acct(op, p) { return window.fsApi.acct(op, p).then(function (r) { if (!r || !r.ok) { var e = new Error((r && r.error) || 'Sync failed'); e.code = r && r.status; throw e; } return r.data; }); }

  /* ---- read this device ---- */
  function collectStudy() { return SC.studyOut(FSX.studyCore.data()); }
  function collectPrefs() { var o = {}; PREF_KEYS.forEach(function (k) { var v = ls(k); if (v !== null) o[k] = v; }); return o; }
  function collectStore() { return local('GET', '/sync/export').then(function (x) { x = x || {}; return { progress: x.progress || [], sessions: x.sessions || [], blocks: x.blocks || [], settings: x.settings || {} }; }); }

  /* the store carries two small settings next to the lists; treat them as single values */
  function splitStore(s) { var st = Object.assign({}, s); var set = st.settings || {}; delete st.settings; return { list: st, set: set }; }
  function mergeStoreAll(L, B, R) {
    var l = splitStore(L), b = splitStore(B), r = splitStore(R);
    var out = SC.mergeStore(l.list, b.list, r.list);
    out.settings = SC.mergePrefs(l.set, b.set, r.set);
    return out;
  }
  function fit(store, cap) { var s = JSON.stringify(store); while (s.length > cap && store.sessions.length > 200) { store.sessions = store.sessions.slice(0, Math.floor(store.sessions.length * 0.8)); s = JSON.stringify(store); } return s; }

  /* ---- write to this device ---- */
  function applyStudy(m) {
    var cur = FSX.studyCore.data(), keep = {}; ['share', 'lastRemind', 'lastPing'].forEach(function (k) { if (cur[k] !== undefined) keep[k] = cur[k]; });
    FSX.studyCore.replace(Object.assign({}, m, keep));
  }
  function applyPrefs(m) { PREF_KEYS.forEach(function (k) { if (m[k] !== undefined && ls(k) !== m[k]) lsSet(k, m[k]); }); }
  function applyStore(m, before, replace) {
    var keepIds = {}; (m.blocks || []).forEach(function (b) { keepIds[b._id] = 1; });
    var dels = replace ? [] : (before.blocks || []).filter(function (b) { return !keepIds[b._id]; });
    return local('POST', '/sync/import', { progress: m.progress, sessions: m.sessions, blocks: m.blocks, settings: m.settings, replace: !!replace }).then(function () {
      return dels.reduce(function (p, b) { return p.then(function () { return local('DELETE', '/blocks/' + encodeURIComponent(b._id)).catch(function () { }); }); }, Promise.resolve());
    });
  }

  /* what a brand-new device looks like, so its untouched defaults never beat the account's real choices */
  var DEF = { study: { exam: { date: '', name: '' }, goal: 60, remind: '', reports: true, planDone: {} }, prefs: {}, store: { settings: { daily_goal: 60, default_lock: 'focus' } }, revs: {} };
  function base() { return J(ls(K_BASE), JSON.parse(JSON.stringify(DEF))); }
  function saveBase(b) { lsSet(K_BASE, JSON.stringify(b)); }

  /* ---- one round ---- */
  function round(email, tries) {
    var b0 = base(), owner = ls(K_OWNER), switched = !!owner && owner !== email, fresh = switched;
    return acct('sync', { op: 'pull' }).then(function (pl) {
      var docs = pl.docs || {}, R = {
        study: J(docs.study && docs.study.data, {}), prefs: J(docs.prefs && docs.prefs.data, {}), store: J(docs.store && docs.store.data, {})
      };
      return collectStore().then(function (storeNow) {
        var Ls = fresh ? {} : collectStudy(), Lp = fresh ? {} : collectPrefs(), Lt = fresh ? { progress: [], sessions: [], blocks: [], settings: {} } : storeNow;
        var B = fresh ? JSON.parse(JSON.stringify(DEF)) : b0;
        if (switched) { lsSet(K_BAK, JSON.stringify({ owner: owner, at: Date.now(), study: collectStudy(), prefs: collectPrefs() })); }
        var M = { study: SC.mergeStudy(Ls, B.study, R.study), prefs: SC.mergePrefs(Lp, B.prefs, R.prefs), store: mergeStoreAll(Lt, B.store, R.store) };
        var pushes = [], nb = { study: b0.study, prefs: b0.prefs, store: b0.store, revs: Object.assign({}, b0.revs) };
        function plan(ns, merged, remote, str) {
          var had = docs[ns] && docs[ns].rev || 0;
          var empty = !Object.keys(merged).some(function (k) { var v = merged[k]; return Array.isArray(v) ? v.length : (v && typeof v === 'object' ? Object.keys(v).length : v); });
          if (SC.eq(merged, remote) || (!had && empty)) return { ns: ns, rev: had, skip: true, merged: merged };
          var s = ns === 'store' ? fit(merged, CAP.store) : JSON.stringify(merged);
          if (s.length > CAP[ns]) throw new Error('Your ' + ns + ' data is too large to sync');
          return { ns: ns, rev: had, data: s, merged: ns === 'store' ? J(s, merged) : merged };
        }
        var plans = [plan('study', M.study, R.study), plan('prefs', M.prefs, R.prefs), plan('store', M.store, R.store)];
        var chain = Promise.resolve(), conflict = false;
        plans.forEach(function (p) {
          chain = chain.then(function () {
            if (conflict) return;
            if (p.skip) { nb.revs[p.ns] = p.rev; return; }
            return acct('sync', { op: 'push', ns: p.ns, base: p.rev, data: p.data }).then(function (r) {
              if (r && r.conflict) { conflict = true; return; }
              nb.revs[p.ns] = r.rev;
            });
          });
        });
        return chain.then(function () {
          if (conflict) { if (tries >= 3) throw new Error('Another device is syncing, try again'); return round(email, tries + 1); }
          /* apply to this device; keep any edits made while we were talking to the server */
          return collectStore().then(function (storeAfter) {
            var Ls2 = collectStudy(), Lp2 = collectPrefs();
            var finalStudy = fresh ? M.study : SC.mergeStudy(Ls2, Ls, plans[0].merged);
            var finalPrefs = fresh ? M.prefs : SC.mergePrefs(Lp2, Lp, plans[1].merged);
            var finalStore = fresh ? plans[2].merged : mergeStoreAll(storeAfter, Lt, plans[2].merged);
            applyStudy(finalStudy); applyPrefs(finalPrefs);
            return applyStore(finalStore, storeAfter, fresh).then(function () {
              nb.study = plans[0].merged; nb.prefs = plans[1].merged; nb.store = SC.storeBase(plans[2].merged);
              /* the store base keeps the two settings next to the lists */
              nb.store.settings = plans[2].merged.settings;
              saveBase(nb); lsSet(K_OWNER, email);
              return { changed: !SC.eq(finalStudy, Ls2) || !SC.eq(finalPrefs, Lp2) || !SC.eq(SC.storeBase(finalStore), SC.storeBase(storeAfter)) };
            });
          });
        });
      });
    });
  }

  function run(reason) {
    if (!can()) return Promise.resolve({ skipped: true });
    if (reason === 'manual') lsDel(K_OFF); else if (ls(K_OFF)) return Promise.resolve({ paused: true });
    if (S.busy) { S.again = true; return Promise.resolve({ busy: true }); }
    S.busy = true; S.state = 'syncing'; draw();
    return acct('status').then(function (st) {
      if (!st || !st.signedIn || !st.email) { S.state = 'off'; return { skipped: true }; }
      return round(String(st.email).toLowerCase(), 0).then(function (r) {
        S.last = Date.now(); lsSet(K_AT, String(S.last)); S.err = ''; S.state = 'ok';
        if (r.changed && (reason === 'login' || reason === 'start' || reason === 'manual') && FSX.h && FSX.h.go) { try { FSX.h.go(); } catch (e) { } }
        return r;
      });
    }).catch(function (e) { S.err = e && e.message || 'Sync failed'; S.state = 'err'; return { error: S.err }; })
      .then(function (r) { S.busy = false; draw(); if (S.again) { S.again = false; later(2000); } return r; });
  }
  function later(ms) { clearTimeout(S.deb); S.deb = setTimeout(function () { run('auto'); }, ms); }

  /* ---- small status card (Profile page and Parent link tab) ---- */
  function ago(t) { if (!t) return 'not yet'; var s = Math.round((Date.now() - t) / 1000); return s < 60 ? 'just now' : s < 3600 ? Math.round(s / 60) + ' min ago' : s < 86400 ? Math.round(s / 3600) + ' h ago' : Math.round(s / 86400) + ' days ago'; }
  function card() {
    var t = S.last || +ls(K_AT) || 0, st = S.state === 'syncing' ? 'Syncing...' : S.state === 'err' ? 'Could not sync: ' + S.err : ls(K_OFF) ? 'Sync is paused.' : 'Last synced ' + ago(t);
    return '<div class="card" id="synccard"><h3>Synced to your account</h3><p class="muted">Your study data, lessons done, scores and timetable are saved to your account, so the same email shows the same data on your PC and your phone. ' + st + '</p><button class="btn" id="syncnow"' + (S.busy ? ' disabled' : '') + '>Sync now</button> <button class="btn" id="syncerase">Delete my cloud data</button></div>';
  }
  function draw() { var c = document.getElementById('synccard'); if (!c) return; var h = document.createElement('div'); h.innerHTML = card(); c.replaceWith(h.firstChild); wire(); }
  function wire() { wireErase(); var b = document.getElementById('syncnow'); if (b) b.onclick = function () { run('manual').then(function (r) { if (FSX.h && FSX.h.toast) { if (r && r.error) FSX.h.toast('Sync failed', r.error, true); else FSX.h.toast('Synced', 'Same data on all your devices'); } }); }; }
  function wireErase() {
    var e = document.getElementById('syncerase'); if (!e) return;
    e.onclick = function () {
      if (!window.confirm('Delete everything FutureSelf has saved in your account (study data, lessons done, scores, timetable)? The copy on this device stays. Your other devices keep theirs until you turn sync off there.')) return;
      acct('sync', { op: 'erase' }).then(function () { lsDel(K_BASE); lsDel(K_OWNER); S.last = 0; lsDel(K_AT); lsSet(K_OFF, '1'); if (FSX.h && FSX.h.toast) FSX.h.toast('Cloud data deleted', 'Sync is paused. Press Sync now to start again.'); draw(); }).catch(function (x) { if (FSX.h && FSX.h.toast) FSX.h.toast('Not deleted', x.message, true); });
    };
  }
  FSX.syncCard = function () { return card(); };
  FSX.syncWire = wire;

  FSX.sync = { run: run, now: function () { return run('manual'); }, state: function () { return { state: S.state, last: S.last, err: S.err, busy: S.busy }; }, _round: round };
  FSX.syncOnSignIn = function () { lsDel(K_OFF); return run('login'); };

  if (can()) {
    FSX.studyCore.addOnSave(function () { later(20000); });
    setTimeout(function () { run('start'); }, 2500);
    S.timer = setInterval(function () { run('auto'); }, 180000);
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') later(1500); else later(300); });
  }
})();

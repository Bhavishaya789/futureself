'use strict';
/* Saved programs and saved code reports on the PC.
   Programs go to  Documents\FutureSelf\Code     (real files the student can open in any editor)
   Reports go to   Documents\FutureSelf\Reports  (PDF or a self-contained HTML page)
   Only file names travel over IPC: a name can never point outside these two folders, except through the
   Save as / Open dialogs, which the student answers himself. */
const fs = require('fs');
const path = require('path');
const os = require('os');

const CODE_EXT = { python: 'py', javascript: 'js', typescript: 'ts', html: 'html', java: 'java', c: 'c', cpp: 'cpp', csharp: 'cs', go: 'go', rust: 'rs', kotlin: 'kt', scala: 'scala', php: 'php', ruby: 'rb', r: 'R', dart: 'dart', bash: 'sh', lua: 'lua', perl: 'pl', swift: 'swift', sql: 'sql', haskell: 'hs' };
const EXT_LANG = {};
Object.keys(CODE_EXT).forEach((k) => { EXT_LANG[CODE_EXT[k].toLowerCase()] = k; });
Object.assign(EXT_LANG, { htm: 'html', mjs: 'javascript', cjs: 'javascript', h: 'c', hpp: 'cpp', cc: 'cpp', cxx: 'cpp', kts: 'kotlin', py3: 'python', pyw: 'python', bat: 'bash', mysql: 'sql' });
const MAX_CODE = 2 * 1024 * 1024, MAX_REPORT = 12 * 1024 * 1024;

/* a safe file name: letters, digits, space, dot, dash, underscore and brackets; no folders, no reserved Windows names */
function safeName(n) {
  let s = String(n || '').normalize('NFC').replace(/[\\/:*?"<>|\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().replace(/^[. ]+/, '').replace(/[. ]+$/, '');
  if (s.length > 80) s = s.slice(0, 80).trim();
  if (!s || /^(con|prn|aux|nul|com\d|lpt\d)(\.|$)/i.test(s)) s = 'program';
  return s;
}
function langOf(file) { return EXT_LANG[path.extname(file).slice(1).toLowerCase()] || ''; }
function stripExt(n, ext) { const e = '.' + ext.toLowerCase(); return n.toLowerCase().endsWith(e) ? n.slice(0, -e.length) : n; }

function create(o) {
  o = o || {};
  const base = o.base || path.join(o.documents || path.join(os.homedir(), 'Documents'), 'FutureSelf');
  const D = { code: path.join(base, 'Code'), reports: path.join(base, 'Reports') };
  const dialog = o.dialog, shell = o.shell, pdf = o.pdf, getWin = o.win || (() => null);
  const mk = (d) => { fs.mkdirSync(d, { recursive: true }); return d; };
  const inside = (dir, p) => { const r = path.relative(dir, path.resolve(p)); return !!r && !r.startsWith('..') && !path.isAbsolute(r); };
  const known = new Set();          // files the student picked with a dialog this run (Save as / Open): allowed for Save again, Show and Open
  const allowed = (p) => inside(D.code, p) || inside(D.reports, p) || known.has(path.resolve(p));

  function codePath(name, lang) {
    const ext = CODE_EXT[lang] || 'txt';
    return path.join(D.code, stripExt(safeName(name), ext) + '.' + ext);
  }
  function writeAtomic(p, data) { const t = p + '.' + process.pid + '.tmp'; fs.writeFileSync(t, data); fs.renameSync(t, p); }

  async function save(p) {
    p = p || {}; const code = String(p.code == null ? '' : p.code), lang = String(p.lang || '');
    if (Buffer.byteLength(code) > MAX_CODE) return { ok: false, error: 'That program is too large to save (over 2 MB).' };
    const ext = CODE_EXT[lang] || 'txt';
    let file;
    if (p.ask) {
      if (!dialog) return { ok: false, error: 'Save as is not available here.' };
      const r = await dialog.showSaveDialog(getWin(), { title: 'Save your program', defaultPath: path.join(mk(D.code), stripExt(safeName(p.name || 'program'), ext) + '.' + ext), filters: [{ name: 'Code', extensions: [ext] }, { name: 'All files', extensions: ['*'] }] });
      if (!r || r.canceled || !r.filePath) return { ok: false, canceled: true };
      file = path.resolve(r.filePath); known.add(file);
    } else if (p.path && allowed(p.path)) file = path.resolve(p.path);          // save again to the file that is open now
    else {
      file = codePath(p.name || 'program', lang); mk(D.code);
      if (fs.existsSync(file) && !p.overwrite) return { ok: false, exists: true, name: path.basename(file), path: file };
    }
    try { writeAtomic(file, code); } catch (e) { return { ok: false, error: 'Could not save: ' + e.message }; }
    return { ok: true, path: file, name: path.basename(file), dir: path.dirname(file), lang: langOf(file) || lang };
  }

  function list() {
    mk(D.code);
    let names = [];
    try { names = fs.readdirSync(D.code); } catch (e) { return { ok: false, error: e.message }; }
    const files = names.filter((n) => !n.endsWith('.tmp')).map((n) => { try { const st = fs.statSync(path.join(D.code, n)); return st.isFile() ? { name: n, path: path.join(D.code, n), lang: langOf(n), size: st.size, at: st.mtimeMs } : null; } catch (e) { return null; } })
      .filter(Boolean).sort((a, b) => b.at - a.at).slice(0, 500);
    return { ok: true, dir: D.code, files };
  }

  async function open(p) {
    p = p || {}; let file;
    if (p.ask) {
      if (!dialog) return { ok: false, error: 'Opening files is not available here.' };
      const r = await dialog.showOpenDialog(getWin(), { title: 'Open a program', defaultPath: mk(D.code), properties: ['openFile'], filters: [{ name: 'Code', extensions: Object.keys(EXT_LANG) }, { name: 'All files', extensions: ['*'] }] });
      if (!r || r.canceled || !r.filePaths || !r.filePaths[0]) return { ok: false, canceled: true };
      file = path.resolve(r.filePaths[0]); known.add(file);
    } else {
      file = path.join(D.code, path.basename(String(p.name || '')));
      if (!inside(D.code, file)) return { ok: false, error: 'Unknown file.' };
    }
    let st; try { st = fs.statSync(file); } catch (e) { return { ok: false, error: 'That file is not there any more.' }; }
    if (!st.isFile()) return { ok: false, error: 'That is not a file.' };
    if (st.size > MAX_CODE) return { ok: false, error: 'That file is too large to open in the editor (over 2 MB).' };
    const buf = fs.readFileSync(file);
    if (buf.indexOf(0) >= 0 && buf.indexOf(0) < 8000) return { ok: false, error: 'That is not a text file.' };
    return { ok: true, name: path.basename(file), path: file, lang: langOf(file), code: buf.toString('utf8').replace(/^﻿/, '') };
  }

  async function remove(p) {
    const file = path.join(D.code, path.basename(String(p && p.name || '')));
    if (!inside(D.code, file) || !fs.existsSync(file)) return { ok: false, error: 'That file is not there any more.' };
    try { if (shell && shell.trashItem) await shell.trashItem(file); else fs.unlinkSync(file); } catch (e) { return { ok: false, error: 'Could not move it to the Recycle Bin: ' + e.message }; }
    return { ok: true };
  }

  async function saveReport(p) {
    p = p || {}; const html = String(p.html || ''), kind = p.kind === 'html' ? 'html' : 'pdf';
    if (!/^<!doctype html>/i.test(html) || html.length > MAX_REPORT) return { ok: false, error: 'The report could not be prepared.' };
    const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ').replace(':', '-');
    const nm = stripExt(stripExt(safeName(p.name || 'Code report'), 'pdf'), 'html') + ' - ' + stamp + '.' + kind;
    let file;
    if (p.ask) {
      if (!dialog) return { ok: false, error: 'Save as is not available here.' };
      const r = await dialog.showSaveDialog(getWin(), { title: 'Save the code report', defaultPath: path.join(mk(D.reports), nm), filters: kind === 'pdf' ? [{ name: 'PDF', extensions: ['pdf'] }] : [{ name: 'Web page', extensions: ['html'] }] });
      if (!r || r.canceled || !r.filePath) return { ok: false, canceled: true };
      file = path.resolve(r.filePath); known.add(file);
    } else { mk(D.reports); file = path.join(D.reports, nm); }
    try {
      if (kind === 'html') writeAtomic(file, html);
      else { if (!pdf) return { ok: false, error: 'PDF is not available here.' }; writeAtomic(file, await pdf(html)); }
    } catch (e) { return { ok: false, error: 'Could not save the report: ' + e.message }; }
    return { ok: true, path: file, name: path.basename(file), dir: path.dirname(file) };
  }

  function reports() {
    mk(D.reports);
    let names = []; try { names = fs.readdirSync(D.reports); } catch (e) { return { ok: false, error: e.message }; }
    return { ok: true, dir: D.reports, files: names.filter((n) => /\.(pdf|html)$/i.test(n)).map((n) => { try { const st = fs.statSync(path.join(D.reports, n)); return { name: n, path: path.join(D.reports, n), size: st.size, at: st.mtimeMs }; } catch (e) { return null; } }).filter(Boolean).sort((a, b) => b.at - a.at).slice(0, 300) };
  }

  /* Show in folder / open a saved report in the PC's own viewer: only our files */
  function show(p) {
    const f = p && p.path ? path.resolve(String(p.path)) : '';
    if (p && p.folder === 'code') { mk(D.code); if (shell) shell.openPath(D.code); return { ok: true }; }
    if (p && p.folder === 'reports') { mk(D.reports); if (shell) shell.openPath(D.reports); return { ok: true }; }
    if (!f || !allowed(f) || !fs.existsSync(f)) return { ok: false, error: 'That file is not there any more.' };
    if (p.open) { if (!/\.(pdf|html)$/i.test(f)) return { ok: false, error: 'Only reports open this way.' }; if (shell) shell.openPath(f); }
    else if (shell) shell.showItemInFolder(f);
    return { ok: true };
  }

  return { dirs: D, save, list, open, remove, saveReport, reports, show, safeName, langOf };
}

/* HTML -> PDF with a hidden, script-free window (Electron). The page is self-contained, so nothing is fetched. */
function electronPdf(BrowserWindow) {
  return async function (html) {
    const tmp = path.join(os.tmpdir(), 'fs-report-' + process.pid + '-' + Date.now() + '.html');
    fs.writeFileSync(tmp, html);
    const w = new BrowserWindow({ show: false, width: 900, height: 1200, webPreferences: { javascript: false, sandbox: true, contextIsolation: true, nodeIntegration: false, offscreen: false } });
    w.webContents.on('will-navigate', (e) => e.preventDefault());
    try {
      await w.loadFile(tmp);
      return await w.webContents.printToPDF({ printBackground: true, pageSize: 'A4', margins: { top: 0.5, bottom: 0.5, left: 0.5, right: 0.5 }, displayHeaderFooter: false, preferCSSPageSize: true });
    } finally {
      try { w.destroy(); } catch (e) { /* ignore */ }
      try { fs.unlinkSync(tmp); } catch (e) { /* ignore */ }
    }
  };
}

module.exports = { create, electronPdf, CODE_EXT, safeName };

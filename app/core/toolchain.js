'use strict';
/* Runtimes for the coding platform.
   If a language is not installed on this PC, FutureSelf downloads the OFFICIAL build once into its own folder
   (no admin rights) and uses it. A runtime already installed on the PC is always preferred.
     java   -> Eclipse Temurin JDK 21 (api.adoptium.net)                     sha256
     python -> python.org installer, per-user, with tkinter/turtle           Authenticode signature (Python Software Foundation)
               (fallback: python.org NuGet package)                           sha512 via NuGet
     node   -> Node.js LTS with npm (nodejs.org)                              SHASUMS256
     cc     -> gcc/g++ from MSYS2 UCRT64 (see msys.js), libraries too          sha256 per package
               (fallback: w64devkit)                                          GitHub digest
     go     -> go.dev/dl                                                      sha256
     rust   -> rustup (static.rust-lang.org), stable, windows-gnu             sha256
     dotnet -> .NET 10 SDK (builds.dotnet.microsoft.com)                      sha512
     kotlin -> kotlinc (github.com/JetBrains/kotlin)                          sha256
     scala  -> scala-cli (github.com/VirtusLab/scala-cli)                     GitHub digest
     php    -> PHP NTS x64 (windows.php.net) + Composer (getcomposer.org)     sha256
     ruby   -> RubyInstaller (github.com/oneclick/rubyinstaller2), per-user    GitHub digest
     r      -> R for Windows (cloud.r-project.org), per-user                  Authenticode signature
     dart   -> Dart SDK (storage.googleapis.com/dart-archive)                 sha256
     bash   -> Bash + coreutils, grep, sed, awk from MSYS2 (MSYS)              sha256 per package
     perl   -> Perl from MSYS2 (MSYS)                                         sha256 per package
     lua    -> Lua from MSYS2 UCRT64                                          sha256 per package
     swift  -> Swift for Windows (swift.org) through winget, with the Microsoft C++ build tools it needs
               (Windows asks once for administrator approval)                                                    */
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const crypto = require('crypto');

const WIN = process.platform === 'win32';

/* full path of a program. On Windows "where" can list several: prefer a real .exe/.cmd/.bat and
   never the Microsoft Store "python" placeholder in WindowsApps. */
function which(name, extraDirs) {
  for (const d of extraDirs || []) {
    for (const n of WIN ? [name + '.exe', name + '.cmd', name + '.bat'] : [name]) { const p = path.join(d, n); if (fs.existsSync(p)) return p; }
  }
  try {
    const r = cp.spawnSync(WIN ? 'where' : 'which', [name], { encoding: 'utf8', timeout: 4000, windowsHide: true });
    if (r.status === 0) {
      const all = String(r.stdout).split(/\r?\n/).map((s) => s.trim()).filter(Boolean).filter((p) => !/\\WindowsApps\\/i.test(p))
        .filter((p) => !(WIN && name === 'bash' && /\\System32\\bash\.exe$/i.test(p)));   // the WSL launcher, not a Bash (fails when WSL is not set up)
      if (!WIN) return all[0] || null;
      return all.find((p) => /\.(exe|cmd|bat)$/i.test(p)) || null;
    }
  } catch (e) { /* not found */ }
  return null;
}
/* spawn that also works for .cmd/.bat on Windows (Node refuses to run them directly since 2024) and with spaces in paths */
function spawnAny(file, args, o) {
  if (WIN && /\.(cmd|bat)$/i.test(file)) {
    const q = (a) => (/[\s"&|<>^()]/.test(a) ? '"' + String(a).replace(/"/g, '""') + '"' : String(a));
    const line = '"' + [q(file)].concat((args || []).map(q)).join(' ') + '"';
    return cp.spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', line], Object.assign({}, o, { windowsVerbatimArguments: true, shell: false }));
  }
  return cp.spawn(file, args, o);
}
const mb = (n) => (n / 1048576).toFixed(n > 104857600 ? 0 : 1) + ' MB';
const ghAsset = (j, re) => { const a = ((j && j.assets) || []).find((x) => re.test(x.name)); if (!a) return null; const dg = /^sha256:([0-9a-f]{64})$/i.exec(a.digest || ''); return { url: a.browser_download_url, file: a.name, sha256: dg ? dg[1] : undefined, version: (j.tag_name || '').replace(/^v/, '') }; };
const vkey = (v) => String(v).split('.').map((n) => ('00000' + parseInt(n, 10)).slice(-5)).join('.');

/* where each runtime comes from; every source is tried in order */
function defaultSpecs(platform, arch) {
  const os_ = platform === 'win32' ? 'windows' : platform === 'darwin' ? 'mac' : 'linux';
  const a = arch === 'arm64' ? 'aarch64' : 'x64';
  const win = platform === 'win32';
  return {
    java: {
      name: 'Java (JDK 21)', exe: 'javac', size: '190 MB', check: ['javac', 'java'],
      sources: [
        { json: `https://api.adoptium.net/v3/assets/latest/21/hotspot?os=${os_}&architecture=${a}&image_type=jdk`, pick: (j) => { const b = j && j[0] && j[0].binary && j[0].binary.package; return b && { url: b.link, file: b.name, sha256: b.checksum, version: j[0].version && j[0].version.semver }; } },
        { url: `https://api.adoptium.net/v3/binary/latest/21/ga/${os_}/${a}/jdk/hotspot/normal/eclipse?project=jdk`, file: win ? 'jdk.zip' : 'jdk.tar.gz' }
      ]
    },
    python: win ? {
      name: 'Python', exe: 'python', size: '30 MB', check: ['python'], after: 'pip',
      sources: [
        // full Python (tkinter, turtle, IDLE libraries) from python.org, installed for this Windows user only
        { json: 'https://api.nuget.org/v3-flatcontainer/python/index.json', pick: (j) => { const v = pickPython(j && j.versions); return v && { url: `https://www.python.org/ftp/python/${v}/python-${v}-amd64.exe`, file: `python-${v}-amd64.exe`, version: v, installer: (exe, dir) => [exe, ['/quiet', 'InstallAllUsers=0', 'TargetDir=' + dir, 'Include_tcltk=1', 'Include_pip=1', 'Include_launcher=0', 'InstallLauncherAllUsers=0', 'PrependPath=0', 'Shortcuts=0', 'Include_doc=0', 'Include_test=0', 'AssociateFiles=0', 'Include_dev=1']], signer: /Python Software Foundation/i }; } },
        // fallback: the NuGet build (no tkinter)
        { json: 'https://api.nuget.org/v3-flatcontainer/python/index.json', pick: (j) => { const v = pickPython(j && j.versions); return v && { url: `https://api.nuget.org/v3-flatcontainer/python/${v}/python.${v}.nupkg`, file: 'python.zip', version: v }; } }
      ]
    } : null,
    node: {
      name: 'Node.js and npm', exe: 'node', size: '35 MB', check: ['node', 'npm'],
      sources: [
        { json: 'https://nodejs.org/dist/index.json', pick: (j) => { const r = (j || []).find((x) => x.lts); if (!r) return null; const v = r.version; const p = win ? `node-${v}-win-${arch === 'arm64' ? 'arm64' : 'x64'}.zip` : `node-${v}-${platform === 'darwin' ? 'darwin' : 'linux'}-${arch === 'arm64' ? 'arm64' : 'x64'}.tar.gz`; return { url: `https://nodejs.org/dist/${v}/${p}`, file: p, version: v, shaList: `https://nodejs.org/dist/${v}/SHASUMS256.txt` }; } }
      ]
    },
    cc: win ? {
      name: 'C / C++ (gcc, MSYS2)', exe: 'gcc', size: '120 MB', check: ['gcc', 'g++'],
      sources: [
        { msys: ['gcc', 'pkgconf', 'make', 'gdb'] },
        { json: 'https://api.github.com/repos/skeeto/w64devkit/releases/latest', pick: (j) => { const x = ghAsset(j, /^w64devkit-x64-[\d.]+(\.7z)?\.exe$/i); return x && Object.assign(x, { sfx: true }); } }
      ]
    } : null,
    go: {
      name: 'Go', exe: 'go', size: '80 MB', check: ['go'],
      sources: [{ json: 'https://go.dev/dl/?mode=json', pick: (j) => { const r = (j || []).find((x) => x.stable); if (!r) return null; const f = r.files.find((x) => x.os === (win ? 'windows' : platform) && x.arch === (arch === 'arm64' ? 'arm64' : 'amd64') && x.kind === 'archive'); return f && { url: 'https://go.dev/dl/' + f.filename, file: f.filename, sha256: f.sha256, version: r.version }; } }]
    },
    rust: win ? {
      name: 'Rust (cargo)', exe: 'cargo', size: '300 MB', check: ['cargo', 'rustc'], needs: ['cc'],
      sources: [{ url: 'https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-gnu/rustup-init.exe', file: 'rustup-init.exe', shaFile: 'https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-gnu/rustup-init.exe.sha256', rustup: true }]
    } : null,
    dotnet: {
      name: '.NET 10 SDK (C#)', exe: 'dotnet', size: '220 MB', check: ['dotnet'],
      sources: [{ json: 'https://builds.dotnet.microsoft.com/dotnet/release-metadata/10.0/releases.json', pick: (j) => { const rel = (j && j.releases) || []; for (const r of rel) { const sdk = r.sdk || {}; const rid = win ? 'win-x64' : (platform === 'darwin' ? 'osx-x64' : 'linux-x64'); const f = (sdk.files || []).find((x) => x.rid === rid && /\.(zip|tar\.gz)$/.test(x.url || x.name)); if (f) return { url: f.url, file: path.basename(f.url), sha512: f.hash, version: sdk.version }; } return null; } }]
    },
    kotlin: {
      name: 'Kotlin', exe: 'kotlinc', size: '80 MB', check: ['kotlinc'], needs: ['java'],
      sources: [{ json: 'https://api.github.com/repos/JetBrains/kotlin/releases/latest', pick: (j) => { const x = ghAsset(j, /^kotlin-compiler-[\d.]+\.zip$/); if (x && !x.sha256) x.shaFile = x.url + '.sha256'; return x; } }]
    },
    scala: {
      name: 'Scala (scala-cli)', exe: 'scala-cli', size: '90 MB', check: ['scala-cli'], needs: ['java'],
      sources: [{ json: 'https://api.github.com/repos/VirtusLab/scala-cli/releases/latest', pick: (j) => { const x = ghAsset(j, win ? /^scala-cli-x86_64-pc-win32\.zip$/ : /^scala-cli-x86_64-pc-linux\.gz$/); return x && Object.assign(x, { exeName: 'scala-cli' }); } }]
    },
    php: win ? {
      name: 'PHP + Composer', exe: 'php', size: '35 MB', check: ['php'], after: 'php',
      sources: [{ json: 'https://windows.php.net/downloads/releases/releases.json', pick: (j) => { const keys = Object.keys(j || {}).filter((k) => /^\d+\.\d+$/.test(k)).sort((x, y) => (vkey(x) < vkey(y) ? 1 : -1)); for (const k of keys) { const r = j[k]; const b = r['nts-vs17-x64'] || r['nts-vs16-x64']; if (b && b.zip) return { url: 'https://windows.php.net/downloads/releases/' + b.zip.path, file: b.zip.path, sha256: b.zip.sha256, version: r.version }; } return null; } }]
    } : null,
    ruby: win ? {
      name: 'Ruby', exe: 'ruby', size: '130 MB', check: ['ruby', 'gem'],
      sources: [{ json: 'https://api.github.com/repos/oneclick/rubyinstaller2/releases/latest', pick: (j) => { const x = ghAsset(j, /^rubyinstaller-[\d.]+-\d+-x64\.exe$/); return x && Object.assign(x, { installer: (exe, dir) => [exe, ['/VERYSILENT', '/SUPPRESSMSGBOXES', '/NORESTART', '/CURRENTUSER', '/NOICONS', '/TASKS=', '/DIR=' + dir]] }); } }]
    } : null,
    r: win ? {
      name: 'R', exe: 'Rscript', size: '90 MB', check: ['Rscript'],
      sources: [{ page: 'https://cloud.r-project.org/bin/windows/base/release.htm', pick: (html) => { const m = /R-(\d+\.\d+\.\d+)-win\.exe/.exec(html || ''); return m && { url: 'https://cloud.r-project.org/bin/windows/base/' + m[0], file: m[0], version: m[1], installer: (exe, dir) => [exe, ['/VERYSILENT', '/SUPPRESSMSGBOXES', '/NORESTART', '/CURRENTUSER', '/NOICONS', '/TASKS=', '/DIR=' + dir]] }; } }]
    } : null,
    dart: {
      name: 'Dart', exe: 'dart', size: '210 MB', check: ['dart'],
      sources: [{ url: `https://storage.googleapis.com/dart-archive/channels/stable/release/latest/sdk/dartsdk-${win ? 'windows' : platform === 'darwin' ? 'macos' : 'linux'}-${arch === 'arm64' ? 'arm64' : 'x64'}-release.zip`, file: 'dartsdk.zip', shaFile: `https://storage.googleapis.com/dart-archive/channels/stable/release/latest/sdk/dartsdk-${win ? 'windows' : platform === 'darwin' ? 'macos' : 'linux'}-${arch === 'arm64' ? 'arm64' : 'x64'}-release.zip.sha256sum` }]
    },
    bash: win ? { name: 'Bash (with grep, sed, awk)', exe: 'bash', size: '25 MB', check: ['bash'], sources: [{ msys: ['bash', 'coreutils', 'grep', 'sed', 'gawk', 'findutils', 'diffutils', 'which', 'bc'], repo: 'msys', exeName: 'bash.exe' }] } : null,
    perl: win ? { name: 'Perl', exe: 'perl', size: '45 MB', check: ['perl'], sources: [{ msys: ['perl'], repo: 'msys', exeName: 'perl.exe' }] } : null,
    lua: win ? { name: 'Lua', exe: 'lua', size: '2 MB', check: ['lua'], sources: [{ msys: ['lua'], exeName: 'lua.exe' }] } : null,
    swift: win ? {
      name: 'Swift', exe: 'swiftc', size: 'about 5 GB with the Microsoft C++ build tools', check: ['swiftc'],
      sources: [{ winget: [
        { id: 'Microsoft.VisualStudio.2022.BuildTools', skip: 'vc', say: 'Installing the Microsoft C++ build tools Swift needs (large; Windows asks once for approval) …', override: '--wait --passive --norestart --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 --add Microsoft.VisualStudio.Component.Windows11SDK.22621' },
        { id: 'Swift.Toolchain', say: 'Installing Swift …' }
      ] }]
    } : null
  };
}
/* newest stable 3.13.x (best library support), else the newest stable 3.x */
function pickPython(vs) {
  const st = (vs || []).filter((v) => /^3\.\d+\.\d+$/.test(v));
  const sorted = st.sort((a, b) => (vkey(a) < vkey(b) ? -1 : 1));
  const t13 = sorted.filter((v) => /^3\.13\./.test(v));
  return t13.length ? t13[t13.length - 1] : sorted[sorted.length - 1] || null;
}
const KINDS = ['java', 'python', 'node', 'cc', 'go', 'rust', 'dotnet', 'kotlin', 'scala', 'php', 'ruby', 'r', 'dart', 'bash', 'perl', 'lua', 'swift'];

function create(opts) {
  const root = path.join(opts.dir, 'tools');
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const specs = opts.specs || defaultSpecs(process.platform, process.arch);
  const manFile = path.join(root, 'tools.json');
  fs.mkdirSync(root, { recursive: true });
  let man = {};
  try { man = JSON.parse(fs.readFileSync(manFile, 'utf8')); } catch (e) { /* first run */ }
  const saveMan = () => { try { fs.writeFileSync(manFile, JSON.stringify(man, null, 1)); } catch (e) { log('[tools] ' + e.message); } };
  const busy = {};
  const msys = opts.msys || (WIN ? require('./msys').create({ root: path.join(root, 'msys'), fetch: fetchFn, log }) : null);
  const msysBase = opts.msysBase || (WIN ? require('./msys').create({ root: path.join(root, 'msys'), repo: 'msys', fetch: fetchFn, log }) : null);
  const exec = opts.exec || run;   // tests replace it

  /* bin folders of the runtimes FutureSelf installed (put first on PATH for programs and the terminal).
     "private" ones (Bash/Perl's Unix tools, Swift's clang) are NOT put on PATH for everything, so they never hide
     Windows' own find/sort/link; they are added only when a Bash, Perl or Swift program runs (see runEnv). */
  function binDirs(all) {
    const out = [];
    Object.keys(man).forEach((k) => { const m = man[k]; if (m && m.bin && fs.existsSync(m.bin) && (all || !m.private)) { out.push(m.bin); (m.extra || []).forEach((x) => { if (fs.existsSync(x)) out.push(x); }); } });
    return out;
  }
  /* PATH and variables for running one language's program (adds that runtime's private folders) */
  function runEnv(kind, base) {
    const e = Object.assign({}, base || env()), m = managed(kind);
    if (!m || !m.private) return e;
    const key = Object.keys(e).find((k) => k.toUpperCase() === 'PATH') || 'PATH';
    e[key] = [m.bin].concat((m.extra || []).filter((x) => fs.existsSync(x)), [e[key] || '']).join(path.delimiter);
    if (m.env) Object.assign(e, m.env);
    if (kind === 'bash' || kind === 'perl') { e.MSYSTEM = e.MSYSTEM || 'MSYS'; e.CHERE_INVOKING = '1'; }
    return e;
  }
  function env(base) {
    const e = Object.assign({}, base || process.env);
    const key = Object.keys(e).find((k) => k.toUpperCase() === 'PATH') || 'PATH';
    e[key] = binDirs().concat([e[key] || '']).join(path.delimiter);
    if (man.java && man.java.home && fs.existsSync(man.java.home) && !systemHas('java')) e.JAVA_HOME = man.java.home;
    Object.keys(man).forEach((k) => { const m = man[k]; if (m && m.env && m.bin && fs.existsSync(m.bin)) Object.assign(e, m.env); });
    e.DOTNET_CLI_TELEMETRY_OPTOUT = '1'; e.DOTNET_NOLOGO = '1'; e.DOTNET_SKIP_FIRST_TIME_EXPERIENCE = '1';
    return e;
  }
  const sysCache = {};
  function systemHas(kind) {
    if (kind in sysCache) return sysCache[kind];
    let ok = false;
    const spec = specs[kind];
    if (kind === 'python') { for (const t of ['python3', 'python']) { const p = which(t); if (p && !/WindowsApps/i.test(p)) { ok = true; break; } } if (!ok && WIN) ok = !!which('py'); }
    else if (kind === 'cc') ok = !!((which('gcc') && which('g++')) || which('clang++'));
    else if (kind === 'dotnet') { const d = which('dotnet'); if (d) { const r = cp.spawnSync(d, ['--list-sdks'], { encoding: 'utf8', timeout: 15000, windowsHide: true }); ok = /^(\d+)\./m.test(r.stdout || '') && Math.max(...String(r.stdout).split(/\r?\n/).filter(Boolean).map((l) => parseInt(l, 10) || 0)) >= 10; } }  // file-based C# apps need .NET 10+
    else if (spec && spec.check) ok = spec.check.every((t) => !!which(t));
    else ok = !!which(kind);
    return (sysCache[kind] = ok);
  }
  function managed(kind) { const m = man[kind]; return m && m.bin && fs.existsSync(m.bin) ? m : null; }
  function has(kind) { return systemHas(kind) || !!managed(kind); }
  function canInstall(kind) { return !!specs[kind]; }
  /* full path of a tool: FutureSelf's copies first, then the PC's own */
  function tool(name) { return which(name, binDirs(true)); }
  function status() {
    const s = {};
    KINDS.forEach((k) => { s[k] = { system: systemHas(k), managed: !!managed(k), version: managed(k) ? man[k].version || '' : '', canInstall: canInstall(k), name: specs[k] ? specs[k].name : k, size: specs[k] ? specs[k].size : '' }; });
    return s;
  }

  async function download(url, dest, onProgress, label) {
    const res = await fetchFn(url);
    if (!res || !res.ok) throw new Error('download failed (' + (res ? res.status : 'no answer') + ')');
    const total = +(res.headers && res.headers.get && res.headers.get('content-length')) || 0;
    const tmp = dest + '.part';
    const out = fs.createWriteStream(tmp);
    let got = 0, lastP = -1;
    try {
      for await (const chunk of res.body) {
        const b = Buffer.from(chunk);
        got += b.length;
        if (!out.write(b)) await new Promise((r) => out.once('drain', r));
        const p = total ? Math.floor(100 * got / total) : -1;
        if (p !== lastP && onProgress) { lastP = p; onProgress({ label, pct: p, got, total, text: 'Downloading ' + label + ' … ' + (total ? p + '% of ' + mb(total) : mb(got)) }); }
      }
    } finally { await new Promise((r) => out.end(r)); }
    if (total && got < total) { try { fs.unlinkSync(tmp); } catch (e) { } throw new Error('the download stopped early; check the internet connection and try again'); }
    fs.renameSync(tmp, dest);
    return got;
  }
  function hashFile(file, algo) {
    const h = crypto.createHash(algo || 'sha256');
    const fd = fs.openSync(file, 'r'), buf = Buffer.alloc(1 << 20); let n;
    try { while ((n = fs.readSync(fd, buf, 0, buf.length, null)) > 0) h.update(buf.subarray(0, n)); } finally { fs.closeSync(fd); }
    return h.digest('hex');
  }
  function run(cmd, args, o) {
    return new Promise((resolve, reject) => {
      const ch = spawnAny(cmd, args, Object.assign({ windowsHide: true }, o || {}));
      let err = '';
      ch.stderr && ch.stderr.on('data', (d) => { err += d; if (err.length > 20000) err = err.slice(-20000); });
      ch.stdout && ch.stdout.on('data', (d) => { if (o && o.onOut) o.onOut(String(d)); });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 || (o && o.okCodes && o.okCodes.indexOf(c >>> 0) >= 0) ? resolve() : reject(new Error((path.basename(cmd) + ' failed (' + c + '): ' + err.trim().split(/\r?\n/).slice(-3).join(' ')).slice(0, 400)))));
    });
  }
  async function extract(file, dest, src) {
    fs.mkdirSync(dest, { recursive: true });
    if (src.sfx) return run(file, ['-o' + dest, '-y'], { cwd: dest });
    if (WIN) {
      const tar = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe');
      if (fs.existsSync(tar)) return run(tar, ['-xf', file, '-C', dest]);
      return run('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', `Expand-Archive -LiteralPath '${file.replace(/'/g, "''")}' -DestinationPath '${dest.replace(/'/g, "''")}' -Force`]);
    }
    if (/\.zip$|\.nupkg$/i.test(src.file || file)) return run('unzip', ['-q', '-o', file, '-d', dest]);
    if (/\.gz$/i.test(src.file || file) && !/\.tar\.gz$/i.test(src.file || file)) { const zlib = require('zlib'); const out = path.join(dest, (src.exeName || path.basename(file).replace(/\.gz$/, ''))); fs.writeFileSync(out, zlib.gunzipSync(fs.readFileSync(file))); fs.chmodSync(out, 0o755); return; }
    return run('tar', ['-xf', file, '-C', dest]);
  }
  /* finds the folder that holds the tool (the archive's top folder name changes with every version) */
  function findBin(dir, exe, depth) {
    const names = WIN ? [exe + '.exe', exe + '.bat', exe + '.cmd'] : [exe];
    const q = [[dir, 0]];
    while (q.length) {
      const [d, n] = q.shift();
      let ents = [];
      try { ents = fs.readdirSync(d, { withFileTypes: true }); } catch (e) { continue; }
      if (ents.some((e) => e.isFile() && names.indexOf(e.name) >= 0)) return d;
      if (n < (depth || 5)) ents.filter((e) => e.isDirectory() && !/^(lib|include|share|legal|man|jmods|doc|Lib|DLLs|tcl)$/.test(e.name)).forEach((e) => q.push([path.join(d, e.name), n + 1]));
    }
    return null;
  }
  /* Windows: is this installer signed by the expected publisher? */
  function signatureOk(file, signer) {
    if (!WIN) return true;
    const ps = `$s = Get-AuthenticodeSignature -LiteralPath '${file.replace(/'/g, "''")}'; "$($s.Status)|$($s.SignerCertificate.Subject)"`;
    const r = cp.spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', ps], { encoding: 'utf8', timeout: 60000, windowsHide: true });
    const [status, subject] = String(r.stdout || '').trim().split('|');
    log('[tools] signature ' + status + ' ' + subject);
    return status === 'Valid' && signer.test(subject || '');
  }
  async function shaFromUrl(u) {
    const r = await fetchFn(u); if (!r || !r.ok) throw new Error('could not read the checksum file');
    const t = await r.text(); const m = /\b([0-9a-f]{64})\b/i.exec(t); if (!m) throw new Error('checksum file has no SHA-256');
    return m[1];
  }

  async function install(kind, onProgress) {
    const spec = specs[kind];
    if (!spec) throw new Error('FutureSelf cannot install ' + kind + ' on this system. Please install it yourself.');
    for (const dep of spec.needs || []) if (!has(dep)) await ensure(dep, onProgress);
    const say = (t, pct) => { if (onProgress) onProgress({ label: spec.name, pct: pct == null ? -1 : pct, text: t }); };
    let lastErr = null;
    for (const s of spec.sources) {
      let src = s;
      try {
        if (s.msys) {                                                   // gcc, Lua (UCRT64) and Bash, Perl (MSYS) from MSYS2
          const ms = s.repo === 'msys' ? msysBase : msys;
          if (!ms) throw new Error('MSYS2 is only used on Windows');
          say(kind === 'cc' ? 'Getting the C/C++ compiler (gcc) …' : 'Getting ' + spec.name + ' …');
          await ms.install(s.msys, (p) => say(p.text, p.pct));
          const bin = ms.binDir();
          if (!fs.existsSync(path.join(bin, s.exeName || 'gcc.exe'))) throw new Error(spec.exe + ' was not installed');
          man[kind] = { bin, version: s.repo === 'msys' ? 'MSYS2' : 'MSYS2 UCRT64', at: Date.now(), extra: [], private: s.repo === 'msys' }; saveMan();
          say(spec.name + ' is ready.', 100);
          return man[kind];
        }
        if (s.winget) {                                                 // Swift: Windows' own package manager, official packages
          if (!WIN) throw new Error('winget is only on Windows');
          const wg = which('winget');
          if (!wg) throw new Error('Windows Package Manager (winget) is missing: update "App Installer" from the Microsoft Store');
          for (const w of s.winget) {
            if (w.skip === 'vc' && vcToolsInstalled()) continue;
            say(w.say);
            const args = ['install', '--id', w.id, '-e', '--source', 'winget', '--accept-package-agreements', '--accept-source-agreements', '--disable-interactivity'].concat(w.override ? ['--override', w.override] : ['--silent']);
            await exec(wg, args, { okCodes: [0x8A15002B, 0x8A150061, 3010] });   // "already installed", "no newer version", "restart later"
          }
          const f = findSwift();
          if (!f) throw new Error('Swift was installed, but swiftc.exe was not found. Restart the PC and try again');
          man[kind] = Object.assign({ at: Date.now(), private: true }, f); saveMan();
          say(spec.name + ' is ready.', 100);
          return man[kind];
        }
        if (s.json || s.page) {
          say('Finding the latest ' + spec.name + ' …');
          const r = await fetchFn(s.json || s.page);
          if (!r || !r.ok) throw new Error('could not look up the latest version (' + (r ? r.status : 'no answer') + ')');
          src = s.pick(s.json ? await r.json() : await r.text());
          if (!src || !src.url) throw new Error('no download found');
        }
        const url = opts.allowHttp ? String(src.url) : String(src.url).replace(/^http:\/\//i, 'https://');   // downloads always over HTTPS (allowHttp: tests only)
        const work = path.join(root, '.dl-' + kind);
        fs.rmSync(work, { recursive: true, force: true });
        fs.mkdirSync(work, { recursive: true });
        const file = path.join(work, (src.file || path.basename(url.split('?')[0]) || kind).replace(/[^\w.+-]/g, '_'));
        log('[tools] downloading ' + kind + ' from ' + url);
        await download(url, file, onProgress, spec.name);
        say('Checking the download …');
        let want256 = src.sha256;
        if (!want256 && src.shaFile) want256 = await shaFromUrl(src.shaFile);
        if (!want256 && src.shaList) { const r = await fetchFn(src.shaList); const t = r && r.ok ? await r.text() : ''; const line = t.split(/\r?\n/).find((l) => l.trim().endsWith(' ' + src.file) || l.trim().endsWith('*' + src.file)); if (line) want256 = line.trim().split(/\s+/)[0]; }
        if (want256 && hashFile(file, 'sha256').toLowerCase() !== String(want256).toLowerCase()) throw new Error('the download was damaged (checksum mismatch)');
        if (src.sha512 && hashFile(file, 'sha512').toLowerCase() !== String(src.sha512).toLowerCase()) throw new Error('the download was damaged (checksum mismatch)');
        if (src.signer && !signatureOk(file, src.signer)) throw new Error('the installer is not signed correctly, so it was not run');

        const finalDir = path.join(root, kind);
        const m = { version: src.version || '', at: Date.now(), extra: [] };
        if (src.rustup) {                                               // rustup: installs stable Rust into our folder
          say('Installing Rust (this takes a few minutes) …');
          fs.rmSync(finalDir, { recursive: true, force: true });
          const renv = { RUSTUP_HOME: path.join(finalDir, 'rustup'), CARGO_HOME: path.join(finalDir, 'cargo') };
          await run(file, ['-y', '--no-modify-path', '--profile', 'minimal', '--default-host', 'x86_64-pc-windows-gnu', '--default-toolchain', 'stable'], { env: Object.assign({}, process.env, renv) });
          m.bin = path.join(renv.CARGO_HOME, 'bin'); m.env = renv;
        } else if (src.installer) {                                     // a per-user installer (python.org, RubyInstaller, R)
          say('Installing ' + spec.name + ' …');
          fs.rmSync(finalDir, { recursive: true, force: true });
          const [cmd, args] = src.installer(file, finalDir);
          await run(cmd, args);
          m.bin = findBin(finalDir, spec.exe);
          if (!m.bin) throw new Error('the installer did not install ' + spec.exe);
        } else {
          say('Unpacking ' + spec.name + ' …');
          const out = path.join(work, 'x');
          await extract(file, out, src);
          const bin = findBin(out, spec.exe);
          if (!bin) throw new Error('the download did not contain ' + spec.exe);
          fs.rmSync(finalDir, { recursive: true, force: true });
          fs.renameSync(out, finalDir);
          m.bin = path.join(finalDir, path.relative(out, bin));
        }
        fs.rmSync(work, { recursive: true, force: true });
        if (kind === 'java') m.home = path.dirname(m.bin);
        if (kind === 'python' && WIN) m.extra.push(path.join(m.bin, 'Scripts'));
        if (kind === 'dotnet') m.env = { DOTNET_ROOT: m.bin };
        if (kind === 'ruby') m.extra.push(path.join(path.dirname(m.bin), 'msys64', 'ucrt64', 'bin'));
        man[kind] = m; saveMan();
        if (spec.after === 'pip') { say('Setting up pip …'); await ensurePip(m.bin); }
        if (spec.after === 'php') { say('Setting up PHP and Composer …'); await setupPhp(m.bin); }
        say(spec.name + ' is ready.', 100);
        return m;
      } catch (e) { lastErr = e; log('[tools] ' + kind + ': ' + e.message); }
    }
    throw new Error('Could not install ' + spec.name + ': ' + (lastErr ? lastErr.message : 'unknown error') + '. Check the internet connection and try again.');
  }
  async function ensurePip(bin) {
    const py = path.join(bin, WIN ? 'python.exe' : 'python3');
    const ok = cp.spawnSync(py, ['-m', 'pip', '--version'], { windowsHide: true, timeout: 30000 }).status === 0;
    if (!ok) await run(py, ['-m', 'ensurepip', '--default-pip']);
  }
  /* PHP: a php.ini with the common extensions on (https for Composer, MySQL, zip ...) and composer.phar next to php.exe */
  async function setupPhp(bin) {
    const dev = path.join(bin, 'php.ini-development'), ini = path.join(bin, 'php.ini');
    if (!fs.existsSync(ini)) {
      let t = fs.existsSync(dev) ? fs.readFileSync(dev, 'utf8') : '';
      t = t.replace(/^;\s*extension_dir\s*=\s*"ext"/m, 'extension_dir = "ext"');
      ['curl', 'fileinfo', 'mbstring', 'mysqli', 'openssl', 'pdo_mysql', 'pdo_sqlite', 'sqlite3', 'zip', 'gd', 'intl', 'sockets'].forEach((x) => { t = t.replace(new RegExp('^;\\s*extension\\s*=\\s*' + x + '\\s*$', 'm'), 'extension=' + x); });
      if (!/^extension_dir/m.test(t)) t += '\nextension_dir = "ext"\n';
      fs.writeFileSync(ini, t);
    }
    // php.exe needs the Microsoft Visual C++ runtime. If it is missing, Windows' own installer adds it (one admin prompt).
    const probe = cp.spawnSync(path.join(bin, 'php.exe'), ['-v'], { windowsHide: true, timeout: 30000 });
    if (probe.status !== 0) {
      const vc = path.join(root, 'vc_redist.x64.exe');
      await download('https://aka.ms/vs/17/release/vc_redist.x64.exe', vc, null, 'Visual C++ runtime');
      if (!signatureOk(vc, /Microsoft Corporation/i)) throw new Error('the Visual C++ runtime installer is not signed by Microsoft');
      await run('powershell.exe', ['-NoProfile', '-Command', `Start-Process -FilePath '${vc.replace(/'/g, "''")}' -ArgumentList '/install','/quiet','/norestart' -Verb RunAs -Wait`]);
    }
    const phar = path.join(bin, 'composer.phar');
    if (!fs.existsSync(phar)) {
      await download('https://getcomposer.org/download/latest-stable/composer.phar', phar, null, 'Composer');
      const want = await shaFromUrl('https://getcomposer.org/download/latest-stable/composer.phar.sha256sum');
      if (hashFile(phar).toLowerCase() !== want.toLowerCase()) { fs.unlinkSync(phar); throw new Error('Composer download was damaged'); }
      fs.writeFileSync(path.join(bin, 'composer.bat'), '@php "%~dp0composer.phar" %*\r\n');
    }
  }
  /* make sure a runtime is available: returns quickly when it is already there */
  function ensure(kind, onProgress) {
    if (has(kind)) return Promise.resolve(true);
    if (busy[kind]) return busy[kind];
    busy[kind] = install(kind, onProgress).then(() => { delete busy[kind]; sysCache[kind] = undefined; delete sysCache[kind]; return true; }, (e) => { delete busy[kind]; throw e; });
    return busy[kind];
  }
  function remove(kind) {
    if (!man[kind]) return false;
    if (['cc', 'bash', 'perl', 'lua', 'swift'].indexOf(kind) < 0) fs.rmSync(path.join(root, kind), { recursive: true, force: true });
    delete man[kind]; saveMan(); return true;
  }
  /* Visual Studio / Build Tools with the C++ compiler already on this PC? */
  function vcToolsInstalled() {
    const vw = path.join(process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)', 'Microsoft Visual Studio', 'Installer', 'vswhere.exe');
    if (!fs.existsSync(vw)) return false;
    const r = cp.spawnSync(vw, ['-products', '*', '-requires', 'Microsoft.VisualStudio.Component.VC.Tools.x86.x64', '-property', 'installationPath'], { encoding: 'utf8', timeout: 30000, windowsHide: true });
    return !!String(r.stdout || '').trim();
  }
  /* where the Swift installer put swiftc, its Windows SDK (SDKROOT) and the runtime DLLs (newest version first) */
  function findSwift() {
    const la = process.env.LOCALAPPDATA || '', pf = process.env.ProgramFiles || 'C:\\Program Files', sd = process.env.SystemDrive || 'C:';
    const newest = (dir) => { try { return fs.readdirSync(dir).filter((n) => !n.startsWith('.')).sort((a, b) => (vkey(b.replace(/[^\d.]/g, '') || '0') > vkey(a.replace(/[^\d.]/g, '') || '0') ? 1 : -1)).map((n) => path.join(dir, n)); } catch (e) { return []; } };
    const bases = [path.join(la, 'Programs', 'Swift'), path.join(pf, 'Swift'), path.join(sd + '\\', 'Library')];
    for (const b of bases) {
      const tcs = newest(path.join(b, 'Toolchains')).concat(newest(path.join(b, 'Developer', 'Toolchains')));
      const tc = tcs.find((t) => fs.existsSync(path.join(t, 'usr', 'bin', 'swiftc.exe')));
      if (!tc) continue;
      const plats = newest(path.join(b, 'Platforms')).concat([path.join(b, 'Platforms'), path.join(b, 'Developer', 'Platforms')]);
      let sdk = '';
      for (const p of plats) { const c = path.join(p, 'Windows.platform', 'Developer', 'SDKs', 'Windows.sdk'); if (fs.existsSync(c)) { sdk = c; break; } }
      const rts = newest(path.join(b, 'Runtimes')).map((r) => path.join(r, 'usr', 'bin')).concat([path.join(sd + '\\', 'Library', 'Swift-development', 'bin')]).filter((x) => fs.existsSync(x));
      return { bin: path.join(tc, 'usr', 'bin'), extra: rts.slice(0, 1), env: sdk ? { SDKROOT: sdk } : {}, version: path.basename(tc) };
    }
    return null;
  }
  return { ensure, has, status, tool, env, runEnv, binDirs, remove, systemHas, managed, root, msys, msysBase, KINDS, findSwift };
}
module.exports = { create, defaultSpecs, pickPython, which, spawnAny, KINDS };

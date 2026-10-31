/* Builds the web layer for the Android app into android/app/src/main/assets/www
   Run:  cd mobile && npm install && node build.js  */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const OUT = process.argv[2] || path.join(ROOT, 'android/app/src/main/assets/www');
const R = path.join(ROOT, 'app/renderer');
const rm = (p) => fs.rmSync(p, { recursive: true, force: true });
const copyDir = (a, b) => fs.cpSync(a, b, { recursive: true });

rm(OUT); fs.mkdirSync(OUT, { recursive: true });
['css', 'fonts', 'vendor', 'icons'].forEach((d) => { if (fs.existsSync(path.join(R, d))) copyDir(path.join(R, d), path.join(OUT, d)); });
fs.mkdirSync(path.join(OUT, 'js'), { recursive: true });
['fx.js', 'float3d.js', 'subjectfx.js', 'vguard.js', 'visuals.js', 'scene.js', 'account.js', 'profile.js', 'extras.js', 'daily.js', 'dict.js', 'lang.js', 'app.js'].forEach((f) => fs.copyFileSync(path.join(R, 'js', f), path.join(OUT, 'js', f)));
['mobile.js', 'phone.js'].forEach((f) => fs.copyFileSync(path.join(__dirname, 'web', f), path.join(OUT, 'js', f)));
fs.appendFileSync(path.join(OUT, 'css/app.css'), '\n' + fs.readFileSync(path.join(__dirname, 'web/mobile.css'), 'utf8'));
fs.copyFileSync(path.join(__dirname, 'web/blocker.css'), path.join(OUT, 'css/blocker.css'));
fs.copyFileSync(path.join(__dirname, 'web/blocker.html'), path.join(OUT, 'blocker.html'));
fs.copyFileSync(path.join(__dirname, 'web/blocker.js'), path.join(OUT, 'js/blocker.js'));
fs.copyFileSync(path.join(ROOT, 'app/siteconfig.json'), path.join(OUT, 'site.json'));

// the shared API + storage + video picker, bundled for the browser
const esb = path.join(__dirname, 'node_modules/.bin/esbuild');
const S = path.join(__dirname, 'src/shims');
cp.execFileSync(esb, [path.join(__dirname, 'src/entry.js'), '--bundle', '--platform=browser', '--format=iife', '--minify', '--target=chrome90', '--outfile=' + path.join(OUT, 'js/fsmobile.js'),
  '--alias:fs=' + S + '/fs.js', '--alias:path=' + S + '/path.js', '--alias:crypto=' + S + '/crypto.js', '--alias:mongodb=' + S + '/mongodb.js', '--inject:' + S + '/process.js', '--log-level=warning'], { stdio: 'inherit' });

// content: every subject, parsed once here so the phone does not need to
const content = require(path.join(ROOT, 'app/core/content.js'));
const dir = process.env.FS_CONTENT || path.join(ROOT, 'Content');
const r = content.loadContent(dir);
if (r.problems.length) { console.error('Content problems:\n' + r.problems.slice(0, 20).join('\n')); process.exit(1); }
fs.writeFileSync(path.join(OUT, 'content.json'), JSON.stringify(r.topics));

// the page
let html = fs.readFileSync(path.join(R, 'index.html'), 'utf8');
html = html.replace(/<script src="js\/[^"]+"><\/script>\n?/g, '');
html = html.replace("frame-src https://www.youtube-nocookie.com;", "frame-src https://www.youtube-nocookie.com;");
html = html.replace('<script src="vendor/three.min.js"></script>', '<script src="vendor/three.min.js"></script>\n<script src="js/fsmobile.js"></script>\n<script src="js/mobile.js"></script>\n<script src="js/phone.js"></script>\n<script src="js/account.js"></script>\n<script src="js/profile.js"></script>\n<script src="js/extras.js"></script>\n<script src="js/daily.js"></script>\n<script src="js/dict.js"></script>\n<script src="js/lang.js"></script>\n<script src="js/fx.js"></script>\n<script src="js/float3d.js"></script>\n<script src="js/subjectfx.js"></script>\n<script src="js/vguard.js"></script>\n<script src="js/visuals.js"></script>\n<script src="js/scene.js"></script>\n<script src="js/app.js"></script>');
if (!/js\/app\.js/.test(html)) { html = html.replace('</body>', ['fsmobile', 'mobile', 'phone', 'account', 'extras', 'daily', 'dict', 'lang', 'fx', 'float3d', 'subjectfx', 'vguard', 'visuals', 'scene', 'app'].map((n) => '<script src="js/' + n + '.js"></script>').join('\n') + '\n</body>'); }
fs.writeFileSync(path.join(OUT, 'index.html'), html);
const size = (p) => fs.statSync(p).size;
console.log('built ' + OUT + ' | topics ' + Object.keys(r.topics).length + ' | content.json ' + Math.round(size(path.join(OUT, 'content.json')) / 1024) + ' KB | fsmobile.js ' + Math.round(size(path.join(OUT, 'js/fsmobile.js')) / 1024) + ' KB');

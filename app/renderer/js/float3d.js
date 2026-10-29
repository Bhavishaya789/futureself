/* FutureSelf Float3D: real 3D objects floating around while you study a subject.
   Maths: numbers and symbols. Physics: formulas, atoms, magnets, springs. Databases: disks and SQL words. And so on.
   Glyphs are thick (stacked layers) and tumble in depth; solid shapes are lit three.js meshes. Mouse gives parallax, click spins everything. */
window.Float3D = (function () {
  var api = { current: null };
  var cv = document.getElementById('f3d');
  if (!cv || !window.THREE) { api.set = api.clear = api.poke = function () { }; api.cat = function () { return ''; }; return api; }
  var renderer = null, scene, camera, root, lights = [], items = [], raf = 0, last = 0, T = 0, cfg = null, mouse = { x: 0, y: 0 }, spinBoost = 0;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fxOn = function () { try { return localStorage.getItem('fs_fx') !== '0'; } catch (e) { return true; } };
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ---------- what floats for each kind of subject ---------- */
  var MATH = ['0', '1', '2', '3', '4', '5', '7', '9', 'π', '∑', '∫', '∞', '√', 'Δ', 'θ', 'λ', '≠', '∂', 'x²', 'dy/dx', 'n!', 'e', 'i', '±', '≈', 'sin x', 'lim', 'f(x)'];
  var CATS = {
    math: { g: MATH, s: ['icosa', 'torus', 'cube', 'octa', 'knot', 'pyramid'], n: 30 },
    discrete: { g: ['∀', '∃', '∧', '∨', '¬', '→', '∈', '∪', '∩', '∅', '{ }', 'n!', 'C(n,r)', 'K₄', 'mod 5', 'P(A)', '⊕', '≡', '1', '0', 'a ≤ b'], s: ['network', 'tree', 'icosa', 'cube', 'torus'], n: 26 },
    physics: { g: ['E = mc²', 'F = ma', 'V = IR', 'λ', 'ψ', 'ħ', '∇×B', 'ω', 'Δx', 'c', 'Φ', 'μ₀', 'PV = nRT', 'θ', 'v = u + at', 'h f'], s: ['atom', 'atom', 'magnet', 'helix', 'sphere', 'torus'], n: 24 },
    iot: { g: ['MQTT', 'Wi-Fi', 'LoRa', '5 V', 'ADC', '°C', 'IoT', '1010', 'BLE', 'GPIO', 'CoAP', 'Edge'], s: ['network', 'cube', 'helix', 'sphere', 'hex'], n: 22 },
    tree: { g: ['O(n)', 'log n', '→', 'NULL', '*ptr', 'struct', '[ ]', 'push', 'pop', 'AVL', 'BFS', 'n²', 'DFS', 'heap'], s: ['tree', 'tree', 'network', 'cube'], n: 22 },
    emerging: { g: ['AI', 'IoT', '5G', 'Cloud', 'VR', 'Blockchain', 'Quantum', 'Edge', 'AR', 'Robotics'], s: ['neural', 'network', 'icosa', 'hex'], n: 22 },
    words: { g: ['Hello', 'Grammar', 'Aa', 'Read', 'Speak', 'Write', 'Email', 'Noun', 'Verb', '"  "', 'Essay', 'Listen'], s: ['sphere', 'torus', 'icosa'], n: 24 },
    nlp: { g: ['token', 'noun', 'verb', 'अ', 'नमस्ते', 'BERT', 'parse', 'embed', 'POS', 'corpus'], s: ['network', 'neural', 'icosa'], n: 24 },
    prompt: { g: ['Prompt', 'Role:', 'Context', 'Few-shot', 'Chain of thought', 'JSON', 'Temperature', 'Tokens'], s: ['neural', 'sphere', 'icosa'], n: 20 },
    python: { g: ['def', 'print()', 'for i in', 'range()', 'if:', 'import', 'list', 'None', ':', '# ', 'lambda', '[x for x]'], s: ['cube', 'octa', 'torus'], n: 24 },
    oop: { g: ['class', 'extends', 'new', 'this', 'public', 'void', 'interface', 'super', '{ }', 'abstract'], s: ['cube', 'cube', 'icosa', 'torus'], n: 22 },
    java: { g: ['public', 'static', 'ArrayList<>', 'try {', 'catch', 'Servlet', 'JDBC', 'SELECT', '@Override', 'stream()', 'Socket', 'JSP'], s: ['cube', 'octa', 'torus', 'disks'], n: 24 },
    web: { g: ['<div>', '</>', 'href', 'fetch()', 'CSS', 'const', '=>', 'GET', '404', 'HTML', 'JSON'], s: ['cube', 'globe', 'octa'], n: 24 },
    values: { g: ['Truth', 'Duty', 'Peace', 'Love', 'Justice', 'Respect', 'Honesty', 'Ahimsa', 'Dharma', 'Care'], s: ['globe', 'sphere', 'icosa', 'torus'], n: 20 },
    constitution: { g: ['Preamble', 'Article 14', 'We the People', 'Liberty', 'Equality', 'Fraternity', 'Justice', 'Rights', 'Duties'], s: ['pyramid', 'globe', 'cube'], n: 20 },
    arch: { g: ['CPU', 'ALU', 'RAM', '0x1F', 'MOV', 'clk', 'bus', 'ISA', 'cache', 'pipeline'], s: ['cube', 'hex', 'gear', 'disks'], n: 24 },
    embedded: { g: ['GPIO', 'PWM', 'UART', 'ADC', 'I²C', 'SPI', 'ISR', '0xFF', 'MCU', 'RTOS'], s: ['cube', 'gear', 'hex', 'helix'], n: 24 },
    idea: { g: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test', 'Idea', 'Startup', 'Pitch', 'MVP'], s: ['icosa', 'sphere', 'pyramid', 'torus'], n: 20 },
    eco: { g: ['CO₂', 'O₂', 'H₂O', 'Eco', 'Reuse', 'Solar', 'Wind', 'pH', 'Green', 'Recycle'], s: ['globe', 'sphere', 'helix', 'torus'], n: 20 },
    db: { g: ['SELECT', 'JOIN', 'PK', 'FK', 'ACID', 'B+', 'WHERE', 'INDEX', 'COMMIT', 'NoSQL', 'GROUP BY'], s: ['disks', 'disks', 'cube', 'tree'], n: 24 },
    bigdata: { g: ['Hadoop', 'Spark', 'MapReduce', 'Kafka', 'ETL', 'HDFS', 'Hive', 'Petabyte', 'Stream'], s: ['disks', 'network', 'bars', 'cube'], n: 24 },
    iks: { g: ['ॐ', 'अ', 'श्री', 'योग', 'धर्म', 'शून्य', 'वेद', 'गणित', 'π', '०', '१'], s: ['icosa', 'torus', 'sphere', 'octa'], n: 22 },
    ai: { g: ['AI', 'ML', 'y = wx + b', 'σ', '∇', 'ReLU', 'CNN', 'KNN', 'loss', 'Σ', 'p(x)', 'epoch'], s: ['neural', 'neural', 'sphere', 'icosa'], n: 24 },
    mining: { g: ['k-means', 'Apriori', 'PCA', 'Cluster', 'support', 'lift', 'outlier', 'tree'], s: ['bars', 'network', 'sphere', 'cube'], n: 22 },
    os: { g: ['fork()', 'PID', 'mutex', 'RAM', 'page', 'TLB', 'CPU', 'kernel', 'I/O', '0x7F', 'FIFO', 'inode'], s: ['cube', 'gear', 'disks', 'hex'], n: 24 },
    toc: { g: ['δ', 'Σ', 'ε', '0', '1', 'q₀', 'L(M)', 'a*b', '⊢', '∅', 'P = NP?'], s: ['torus', 'knot', 'network', 'torus'], n: 24 },
    community: { g: ['Service', 'Survey', 'Team', 'Impact', 'Report', 'Needs', 'Village', 'Diary', 'NGO', 'Help'], s: ['network', 'globe', 'pyramid', 'sphere'], n: 20 },
    net: { g: ['TCP', 'IP', 'HTTP', 'DNS', 'OSI', 'ARP', '5G', 'MAC', 'LAN', 'Router', 'ping'], s: ['network', 'network', 'cube', 'globe'], n: 24 },
    crypto: { g: ['RSA', 'AES', 'SHA-256', '0xA3F', 'XOR', 'key', 'TLS', 'mod n', 'hash', 'cipher'], s: ['hex', 'cube', 'network', 'knot'], n: 24 },
    gfx: { g: ['RGB', '[x y z]', 'sin θ', 'mesh', 'UV', 'ray', 'shader', 'FPS', 'matrix', 'pixel'], s: ['cube', 'torus', 'knot', 'icosa', 'octa', 'pyramid'], n: 22 },
    proj: { g: ['Agile', 'Sprint', 'UML', 'Git', 'Test', 'Deploy', 'Scrum', 'Plan', 'Risk', 'v1.0'], s: ['cube', 'gear', 'pyramid', 'network'], n: 22 },
    algo: { g: ['O(n log n)', 'DP', 'greedy', 'BFS', 'n²', 'Θ(n)', 'sort', 'graph', 'T(n)'], s: ['tree', 'network', 'cube'], n: 22 },
    compiler: { g: ['token', 'AST', 'LL(1)', 'lexer', 'parse', 'IR', 'a + b', '→', 'regex', 'DFA'], s: ['tree', 'tree', 'cube', 'torus'], n: 22 },
    industry: { g: ['ROI', 'churn', 'forecast', 'IoT', 'fraud', 'CNN', 'AUC', 'MAPE'], s: ['bars', 'neural', 'network'], n: 20 },
    generic: { g: ['★', '?', '✓', 'Aa', '∑', '{ }', '1', '+'], s: ['icosa', 'torus', 'cube', 'sphere'], n: 20 }
  };
  var MAP = {
    'engineering-mathematics-1': 'math', 'engineering-mathematics-2': 'math', 'discrete-mathematics': 'discrete', 'applied-engineering-physics': 'physics',
    'internet-of-things': 'iot', 'data-structure-using-c': 'tree', 'advance-data-structures': 'tree', 'design-and-analysis-of-algorithm': 'algo', 'compiler-design': 'compiler',
    'emerging-trends-in-computer-science': 'emerging', 'english-language': 'words', 'professional-communication': 'words', 'computational-linguistics-and-natural-language-processing': 'nlp',
    'prompt-engineering': 'prompt', 'programming-for-problem-solving-in-python': 'python', 'object-oriented-programming': 'oop', 'advanced-java-programming': 'java', 'web-technologies': 'web',
    'universal-human-values': 'values', 'professional-ethics': 'values', 'constitution-of-india': 'constitution', 'computer-system-architecture': 'arch', 'embedded-system': 'embedded',
    'design-thinking': 'idea', 'venture-ideation': 'idea', 'environmental-studies': 'eco', 'database-management-system': 'db', 'advanced-database-management-system': 'db', 'big-data-engineering': 'bigdata',
    'indian-knowledge-system': 'iks', 'introduction-to-artificial-intelligence-and-machine-learning': 'ai', 'machine-learning-and-deep-learning': 'ai', 'application-of-machine-learning-in-industries': 'industry',
    'data-mining': 'mining', 'operating-systems': 'os', 'theory-of-computation': 'toc', 'social-internship-1': 'community', 'social-internship-2': 'community', 'summer-internship': 'community',
    'computer-networks': 'net', 'cryptography-and-network-security': 'crypto', 'computer-graphics': 'gfx', 'software-engineering-and-project-management': 'proj',
    'minor-project-1': 'proj', 'minor-project-2': 'proj', 'major-project-1': 'proj', 'major-project-2': 'proj'
  };

  /* ---------- textures for glyph cards ---------- */
  var texCache = {};
  var FONT = '"Cambria Math","Segoe UI Symbol","Segoe UI","Nirmala UI","Noto Sans Devanagari","DejaVu Sans",sans-serif';
  function tex(text, c1, c2, dim) {
    var key = text + c1 + c2 + dim; if (texCache[key]) return texCache[key];
    var c = document.createElement('canvas'), x = c.getContext('2d'), fs = 150, w;
    x.font = '700 ' + fs + 'px ' + FONT; w = Math.min(1024, Math.max(200, Math.ceil(x.measureText(text).width) + 80));
    if (x.measureText(text).width > 940) fs = Math.floor(fs * 940 / x.measureText(text).width);
    c.width = w; c.height = 256; x = c.getContext('2d'); x.font = '700 ' + fs + 'px ' + FONT; x.textAlign = 'center'; x.textBaseline = 'middle';
    if (dim) { x.fillStyle = c1; x.globalAlpha = .55; x.fillText(text, w / 2, 134); }
    else { var g = x.createLinearGradient(0, 40, 0, 220); g.addColorStop(0, '#ffffff'); g.addColorStop(.45, c1); g.addColorStop(1, c2); x.shadowColor = c2; x.shadowBlur = 26; x.fillStyle = g; x.fillText(text, w / 2, 134); x.shadowBlur = 0; x.lineWidth = 3; x.strokeStyle = 'rgba(255,255,255,.55)'; x.strokeText(text, w / 2, 134); }
    var t = new THREE.CanvasTexture(c); t.anisotropy = 4; t.needsUpdate = true; t.userData = { ar: w / 256 }; texCache[key] = t; return t;
  }
  function glyph(text, a, b) {
    var g = new THREE.Group(), tf = tex(text, a, b, false), tb = tex(text, '#10122a', '#10122a', true), ar = tf.userData.ar, h = rnd(1.2, 2.3), w = h * ar, layers = 6;
    var geo = new THREE.PlaneGeometry(w, h), mats = [];
    for (var i = 0; i < layers; i++) {
      var back = i > 0, m = new THREE.MeshBasicMaterial({ map: back ? tb : tf, transparent: true, side: THREE.DoubleSide, depthWrite: false, opacity: back ? .85 : 1 });
      var p = new THREE.Mesh(geo, m); p.position.z = -i * h * .035; g.add(p);
    }
    // the front face is also drawn from behind so the glyph is readable from both sides
    var fm = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tf, transparent: true, side: THREE.DoubleSide, depthWrite: false })); fm.position.z = -(layers) * h * .035; g.add(fm);
    g.userData.size = Math.max(w, h); return g;
  }

  /* ---------- solid 3D shapes ---------- */
  function mat(col, o) { return new THREE.MeshStandardMaterial(Object.assign({ color: col, metalness: .35, roughness: .35, emissive: col, emissiveIntensity: .22, transparent: true, opacity: .72 }, o || {})); }
  function wire(geo, col) { return new THREE.LineSegments(new THREE.EdgesGeometry(geo, 12), new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: .9 })); }
  function solid(geo, col, col2, edges) { var g = new THREE.Group(); g.add(new THREE.Mesh(geo, mat(col))); if (edges !== false) g.add(wire(geo, col2 || '#ffffff')); return g; }
  function lineSet(pairs, col) { var pts = []; pairs.forEach(function (p) { pts.push(p[0], p[1]); }); return new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: .7 })); }
  function ball(r, col) { return new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), mat(col, { opacity: 1 })); }
  var B = {};
  B.icosa = function (a, b) { return solid(new THREE.IcosahedronGeometry(rnd(.8, 1.3), 0), a, b); };
  B.octa = function (a, b) { return solid(new THREE.OctahedronGeometry(rnd(.8, 1.3), 0), b, a); };
  B.cube = function (a, b) { var s = rnd(.9, 1.5); return solid(new THREE.BoxGeometry(s, s, s), a, b); };
  B.pyramid = function (a, b) { return solid(new THREE.ConeGeometry(rnd(.8, 1.2), rnd(1.2, 1.8), 4), b, a); };
  B.hex = function (a, b) { return solid(new THREE.DodecahedronGeometry(rnd(.8, 1.2), 0), a, b); };
  B.torus = function (a, b) { return solid(new THREE.TorusGeometry(rnd(.7, 1.1), .26, 12, 36), a, b, false); };
  B.knot = function (a, b) { return solid(new THREE.TorusKnotGeometry(.8, .24, 90, 12), b, a, false); };
  B.sphere = function (a, b) { var g = new THREE.Group(), r = rnd(.7, 1.1); g.add(ball(r, a)); var w = new THREE.Mesh(new THREE.SphereGeometry(r * 1.15, 14, 10), new THREE.MeshBasicMaterial({ color: b, wireframe: true, transparent: true, opacity: .5 })); g.add(w); return g; };
  B.globe = function (a, b) {
    var g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 16), mat(a, { opacity: .8 })));
    g.add(new THREE.Mesh(new THREE.SphereGeometry(1.14, 16, 12), new THREE.MeshBasicMaterial({ color: b, wireframe: true, transparent: true, opacity: .55 })));
    var r = new THREE.Mesh(new THREE.TorusGeometry(1.6, .03, 6, 48), new THREE.MeshBasicMaterial({ color: b })); r.rotation.x = 1.2; g.add(r); return g;
  };
  B.atom = function (a, b) {
    var g = new THREE.Group(); var nuc = new THREE.Group(); for (var i = 0; i < 5; i++) { var p = ball(.22, i % 2 ? a : b); p.position.set(rnd(-.16, .16), rnd(-.16, .16), rnd(-.16, .16)); nuc.add(p); } g.add(nuc);
    var els = []; for (var k = 0; k < 3; k++) {
      var ring = new THREE.Group(), tor = new THREE.Mesh(new THREE.TorusGeometry(1.25, .018, 6, 60), new THREE.MeshBasicMaterial({ color: k % 2 ? a : b, transparent: true, opacity: .8 })); ring.add(tor);
      var e = ball(.12, '#ffffff'); ring.add(e); ring.rotation.set(k * 1.05, k * .6, k * .4); g.add(ring); els.push({ e: e, ph: rnd(0, 6.28), v: rnd(1.4, 2.4) });
    }
    g.userData.upd = function (t) { els.forEach(function (o) { var an = o.ph + t * o.v; o.e.position.set(Math.cos(an) * 1.25, Math.sin(an) * 1.25, 0); }); }; return g;
  };
  B.magnet = function (a, b) {
    var g = new THREE.Group(), n = new THREE.Mesh(new THREE.BoxGeometry(.7, .7, 1.6), mat('#ff4d6d')), s = new THREE.Mesh(new THREE.BoxGeometry(.7, .7, 1.6), mat('#4da3ff'));
    n.position.z = .8; s.position.z = -.8; g.add(n, s); g.add(wire(new THREE.BoxGeometry(.72, .72, 3.2), '#ffffff')); g.rotation.y = 1; return g;
  };
  B.helix = function (a, b) {
    var pts = []; for (var i = 0; i <= 80; i++) { var t = i / 80 * Math.PI * 2 * 4; pts.push(new THREE.Vector3(Math.cos(t) * .55, (i / 80 - .5) * 2.8, Math.sin(t) * .55)); }
    return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, .06, 8), mat(a, { opacity: 1 }));
  };
  B.network = function (a, b) {
    var g = new THREE.Group(), pts = [], n = 7; for (var i = 0; i < n; i++) { var p = new THREE.Vector3(rnd(-1.3, 1.3), rnd(-1.1, 1.1), rnd(-1, 1)); pts.push(p); var s = ball(rnd(.14, .24), i % 2 ? a : b); s.position.copy(p); g.add(s); }
    var pairs = []; for (i = 0; i < n; i++) for (var j = i + 1; j < n; j++) if (pts[i].distanceTo(pts[j]) < 1.9) pairs.push([pts[i], pts[j]]); g.add(lineSet(pairs, a)); return g;
  };
  B.neural = function (a, b) {
    var g = new THREE.Group(), L = [3, 4, 4, 2], cols = [], pairs = [], x0 = -1.4;
    L.forEach(function (c, li) { var col = []; for (var k = 0; k < c; k++) { var p = new THREE.Vector3(x0 + li * .95, (k - (c - 1) / 2) * .55, 0), s = ball(.13, li % 2 ? a : b); s.position.copy(p); g.add(s); col.push(p); } cols.push(col); });
    for (var l = 0; l < L.length - 1; l++) cols[l].forEach(function (p) { cols[l + 1].forEach(function (q) { pairs.push([p, q]); }); }); g.add(lineSet(pairs, a)); return g;
  };
  B.tree = function (a, b) {
    var g = new THREE.Group(), pairs = [];
    (function add(p, d, w) { var s = ball(.16, d % 2 ? a : b); s.position.copy(p); g.add(s); if (d < 3) [-1, 1].forEach(function (sgn) { var q = new THREE.Vector3(p.x + sgn * w, p.y - .7, p.z + rnd(-.15, .15)); pairs.push([p, q]); add(q, d + 1, w / 2); }); })(new THREE.Vector3(0, 1.1, 0), 0, 1.3);
    g.add(lineSet(pairs, b)); return g;
  };
  B.bars = function (a, b) {
    var g = new THREE.Group(); for (var i = 0; i < 6; i++) { var h = rnd(.4, 2); var m = new THREE.Mesh(new THREE.BoxGeometry(.4, h, .4), mat(i % 2 ? a : b)); m.position.set((i - 2.5) * .55, h / 2 - 1, 0); g.add(m); } return g;
  };
  B.disks = function (a, b) {
    var g = new THREE.Group(); for (var i = 0; i < 3; i++) { var m = new THREE.Mesh(new THREE.CylinderGeometry(.9, .9, .35, 28), mat(i % 2 ? b : a)); m.position.y = (i - 1) * .55; g.add(m); var e = wire(new THREE.CylinderGeometry(.9, .9, .35, 28), '#ffffff'); e.position.y = m.position.y; g.add(e); } return g;
  };
  B.gear = function (a, b) {
    var sh = new THREE.Shape(), teeth = 10, r1 = .85, r2 = 1.1; for (var i = 0; i < teeth * 2; i++) { var an = i * Math.PI / teeth, r = i % 2 ? r1 : r2; var x = Math.cos(an) * r, y = Math.sin(an) * r; i ? sh.lineTo(x, y) : sh.moveTo(x, y); }
    var hole = new THREE.Path(); hole.absarc(0, 0, .35, 0, Math.PI * 2, true); sh.holes.push(hole);
    var geo = new THREE.ExtrudeGeometry(sh, { depth: .3, bevelEnabled: false }); geo.translate(0, 0, -.15); return solid(geo, a, b);
  };
  function shapeFor(kind, a, b) { var g = B[kind](a, b); g.scale.setScalar(rnd(.6, .95)); return g; }

  /* ---------- scene ---------- */
  function init() {
    if (renderer) return true;
    try { renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true, powerPreference: 'default' }); } catch (e) { renderer = null; return false; }
    renderer.setClearColor(0x000000, 0);
    scene = new THREE.Scene(); scene.fog = new THREE.Fog(0x060812, 14, 34);
    camera = new THREE.PerspectiveCamera(55, 1, .1, 80); camera.position.set(0, 0, 9);
    root = new THREE.Group(); scene.add(root);
    scene.add(new THREE.AmbientLight(0xffffff, .6));
    lights = [new THREE.PointLight(0xffffff, 2.2, 40), new THREE.PointLight(0xffffff, 1.8, 40)]; lights[0].position.set(6, 5, 8); lights[1].position.set(-7, -4, 6); scene.add(lights[0], lights[1]);
    return true;
  }
  function size() { if (!renderer) return; var w = innerWidth, h = innerHeight; renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5)); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  addEventListener('resize', size);
  addEventListener('pointermove', function (e) { mouse.x = e.clientX / innerWidth * 2 - 1; mouse.y = e.clientY / innerHeight * 2 - 1; }, { passive: true });
  addEventListener('pointerdown', function () { if (items.length) spinBoost = 1; }, { passive: true });

  function dispose() {
    items.forEach(function (it) { root.remove(it.o); it.o.traverse(function (n) { if (n.geometry) n.geometry.dispose(); if (n.material) { if (n.material.dispose) n.material.dispose(); } }); }); items = [];
  }
  function build(id, a, b) {
    var c = CATS[MAP[id] || ''] || CATS.generic; cfg = c;
    var area = innerWidth * innerHeight, count = Math.max(12, Math.round(c.n * Math.min(1.2, area / 1000000)));
    var nShapes = Math.round(count * .38), nGlyph = count - nShapes, cols = [a, b];
    for (var i = 0; i < nGlyph; i++) add(glyph(c.g[i % c.g.length], cols[i % 2], cols[(i + 1) % 2]), false);
    for (i = 0; i < nShapes; i++) add(shapeFor(c.s[i % c.s.length], cols[i % 2], cols[(i + 1) % 2]), true);
  }
  function add(o, solid) {
    var z = rnd(-16, -1), spread = (9 - z) * Math.tan(55 * Math.PI / 360) * 1.15;
    o.position.set(rnd(-1, 1) * spread * (innerWidth / innerHeight), rnd(-1, 1) * spread, z);
    if (solid) o.rotation.set(rnd(0, 6.28), rnd(0, 6.28), rnd(0, 6.28));
    var it = { o: o, spin: new THREE.Vector3(rnd(-.5, .5), rnd(-.6, .6), rnd(-.3, .3)), vy: rnd(.12, .4), ph: rnd(0, 6.28), sway: rnd(.1, .35), spread: spread, solid: solid, baseX: o.position.x };
    if (!solid) it.spin.multiplyScalar(.7); items.push(it); root.add(o);
  }
  function frame(now) {
    raf = 0; if (!cfg) return; var dt = Math.max(0, Math.min(.05, (now - last) / 1000)); last = now; var live = fxOn() && !reduce; if (!live) dt = 0; T += dt;
    spinBoost *= Math.pow(.2, dt); var boost = 1 + spinBoost * 6, top = 11;
    items.forEach(function (it) {
      var o = it.o; if (it.solid) { o.rotation.x += it.spin.x * dt * boost; o.rotation.y += it.spin.y * dt * boost; o.rotation.z += it.spin.z * dt * boost * .5; } else { it.ang = (it.ang || 0) + dt * boost; o.rotation.y = Math.sin(T * .6 + it.ph) * 1.0 + it.ang * .0 + spinBoost * 6.28 * Math.sin(it.ph); o.rotation.x = Math.sin(T * .4 + it.ph * 2) * .4; o.rotation.z = Math.sin(T * .3 + it.ph) * .25; }
      o.position.y += it.vy * dt; o.position.x = it.baseX + Math.sin(T * .5 + it.ph) * it.sway * 2;
      var lim = it.spread * 1.1; if (o.position.y > lim) { o.position.y = -lim; it.baseX = rnd(-1, 1) * it.spread * (innerWidth / innerHeight); }
      if (o.userData.upd) o.userData.upd(T);
    });
    root.rotation.y += (mouse.x * .22 - root.rotation.y) * Math.min(1, dt * 3 + .02); root.rotation.x += (mouse.y * .12 - root.rotation.x) * Math.min(1, dt * 3 + .02);
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * Math.min(1, dt * 2 + .01); camera.position.y += (-mouse.y * .7 - camera.position.y) * Math.min(1, dt * 2 + .01); camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    if (!document.hidden && live) raf = requestAnimationFrame(frame);
  }
  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  api.set = function (id, a, b) {
    if (api.current === id) return;
    if (!init()) return; api.current = id; cv.style.opacity = '1'; dispose(); a = a || '#7C5CFF'; b = b || '#2DE2E6';
    lights[0].color.set(a); lights[1].color.set(b); size(); build(id, a, b); start();
  };
  api.clear = function () { api.current = null; cfg = null; if (raf) cancelAnimationFrame(raf); raf = 0; if (renderer) { dispose(); renderer.clear(); } cv.style.opacity = '0'; };
  api.cat = function (id) { return MAP[id] || 'generic'; };
  api.cats = function () { return CATS; };
  api.map = function () { return MAP; };
  document.addEventListener('visibilitychange', function () { if (!document.hidden && cfg) start(); });
  cv.style.opacity = '0';
  return api;
})();

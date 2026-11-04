import random, json, os, re
R = random.Random(20261105)
SUBJ = {}   # id -> {title, lang, kind, topics:[{id,title,items}]}
CUR = {}
def subject(id, title, lang, kind, desc=''):
    SUBJ[id] = {'id': id, 'title': title, 'lang': lang, 'kind': kind, 'desc': desc, 'topics': []}; CUR['s'] = id
def topic(id, title, desc=''):
    t = {'id': id, 'title': title, 'desc': desc, 'items': []}; SUBJ[CUR['s']]['topics'].append(t); CUR['t'] = t
def L(*a): return '\n'.join(map(str, a)) + '\n'
# ---- input generators: each returns a function r -> input text
def ar(lo, hi, a=1, b=12, extra=None):
    def g(r):
        n = r.randint(a, b); v = [r.randint(lo, hi) for _ in range(n)]
        return L(n, ' '.join(map(str, v)))
    return g
def num(lo, hi): return lambda r: L(r.randint(lo, hi))
def two(lo, hi): return lambda r: L(r.randint(lo, hi), r.randint(lo, hi))
def st(a=1, b=12, alpha='abcde'): return lambda r: L(''.join(r.choice(alpha) for _ in range(r.randint(a, b))))
def wds(a=1, b=8, alpha='abcdef', wl=(1, 6)):
    return lambda r: L(' '.join(''.join(r.choice(alpha) for _ in range(r.randint(*wl))) for _ in range(r.randint(a, b))))
def arq(lo, hi, a=1, b=12, klo=None, khi=None):
    klo = lo if klo is None else klo; khi = hi if khi is None else khi
    def g(r):
        n = r.randint(a, b); v = [r.randint(lo, hi) for _ in range(n)]
        return L(n, ' '.join(map(str, v)), r.randint(klo, khi))
    return g
def mat(a=1, b=5, lo=-9, hi=9):
    def g(r):
        n = r.randint(a, b); m = r.randint(a, b)
        return L(n, m) + ''.join(L(' '.join(str(r.randint(lo, hi)) for _ in range(m))) for _ in range(n))
    return g
def Q(level, title, stmt, sol, samples, gen=None, k=6):
    """stmt: 'Task | Input: ... | Output: ...' ; samples: list of input strings; sol: str->str"""
    parts = [p.strip() for p in stmt.split(' | ')]
    task = parts[0]; inp = out = ''
    for p in parts[1:]:
        if p.startswith('Input:'): inp = p[6:].strip()
        elif p.startswith('Output:'): out = p[7:].strip()
        elif p.startswith('Limits:'): pass
    tests, seen = [], set()
    def add(s):
        if s in seen: return
        seen.add(s)
        o = sol(s)
        if o is None: raise Exception('no output ' + title)
        tests.append({"in": s, "out": str(o).rstrip()})
    for s in samples: add(s)
    nsm = len(tests)
    if gen:
        tries = 0
        while len(tests) < nsm + k and tries < 80: tries += 1; add(gen(R))
    t = CUR['t']; idx = len(t['items']) + 1
    t['items'].append({'id': '%s-%s-%02d' % (CUR['s'], t['id'], idx), 'title': title, 'level': level, 'statement': task, 'input': inp, 'output': out,
                       'samples': tests[:min(2, nsm)], 'tests': tests[:]})
def build(outdir):
    os.makedirs(outdir, exist_ok=True); index = []
    bad = []
    for sid, s in SUBJ.items():
        tot = 0; tp = []
        for t in s['topics']:
            n = len(t['items']); tot += n; c = {'Easy': 0, 'Medium': 0, 'Hard': 0}
            for it in t['items']: c[it['level']] += 1
            if n < 20 or min(c.values()) < 4: bad.append('%s/%s %d %s' % (sid, t['id'], n, c))
            order = {'Easy': 0, 'Medium': 1, 'Hard': 2}
            t['items'].sort(key=lambda x: order[x['level']])
            tp.append({'id': t['id'], 'title': t['title'], 'desc': t['desc'], 'n': n, 'easy': c['Easy'], 'medium': c['Medium'], 'hard': c['Hard']})
        open(os.path.join(outdir, sid + '.js'), 'w', encoding='utf-8').write('window.FS_CT=window.FS_CT||{};FS_CT[%s]=%s;' % (json.dumps(sid), json.dumps(s, separators=(',', ':'), ensure_ascii=False)))
        index.append({'id': sid, 'title': s['title'], 'lang': s['lang'], 'kind': s['kind'], 'desc': s['desc'], 'n': tot, 'topics': tp})
    open(os.path.join(outdir, 'index.js'), 'w', encoding='utf-8').write('window.FS_CTX=' + json.dumps(index, separators=(',', ':'), ensure_ascii=False) + ';')
    print('subjects', len(index), 'questions', sum(i['n'] for i in index)); [print('SHORT', b) for b in bad]

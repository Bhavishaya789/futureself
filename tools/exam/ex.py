"""Compact chapter engine for the exam tracks (JEE, NEET, CA).
A chapter = intro + formulas + numeric generators (answers COMPUTED by code) + fact lines (term ~ description).
Writes a normal FutureSelf lesson .md into Content/ (same format the app loads)."""
import sys, os, re, math, random
sys.path.insert(0, '/home/claude/fsw/tools/gen10')
from lib import Lesson, clean, cap, rng
from lib2 import parse, pairs, qa as _qa, mc as _mc

def fmtv(x, dec):
    if dec == 0: return str(int(round(x)))
    s = ('%.' + str(dec) + 'f') % x
    return s.rstrip('0').rstrip('.') if '.' in s else s

class N:
    """numeric generator. vars: 'sym:unit:lo:hi' (add ':i' for integers). fn gets values in order."""
    def __init__(self, form, out, unit, vars, fn, dec=2, ask=None):
        self.form, self.out, self.unit, self.dec, self.fn, self.ask = form, out, unit, dec, fn, ask
        self.vars = []
        for v in vars.split(','):
            p = v.strip().split(':'); self.vars.append((p[0], p[1], float(p[2]), float(p[3]), len(p) > 4))
    def inst(self, R):
        v = None
        for _ in range(30):
            vals = [(R.randint(int(lo), int(hi)) if isint else round(R.uniform(lo, hi), 1 if hi >= 3 else (2 if hi >= 0.3 else 4))) for _, _, lo, hi, isint in self.vars]
            try: v = self.fn(*vals)
            except Exception as e: err = e; v = None; continue
            if v is None or isinstance(v, complex) or abs(v) > 1e12 or v != v: continue
            if self.dec == 0 or abs(v) >= 0.005: break
        if v is None: raise RuntimeError('generator failed: %s (%s)' % (self.form, locals().get('err')))
        given = ', '.join('%s = %s%s' % (s, fmtv(x, 2) if not isint else str(int(x)), (' ' + u) if u else '') for (s, u, lo, hi, isint), x in zip(self.vars, vals))
        if self.ask:
            q = self.ask % tuple(fmtv(x, 2) for x in vals[:self.ask.count('%s')]) if '%s' in self.ask else self.ask
        else:
            q = 'Using %s, find %s when %s.' % (self.form, self.out, given)
        return q, v, vals
    def wrongs(self, v, R):
        c = [v * 2, v / 2, v * 1.5, v * 0.75, v + (abs(v) * 0.2 + 1), v - (abs(v) * 0.2 + 1), -v, v * 10, v / 10, v * 4]
        out, seen = [], {fmtv(v, self.dec)}
        R.shuffle(c)
        for x in c:
            s = fmtv(x, self.dec)
            if s not in seen and s != '0' and s != '-0': seen.add(s); out.append(s)
        return out[:5]

def md_formulas(rows):  # rows: 'name | expression | use'
    return [('Key formulas', [tuple(x.strip() for x in (r.split('|') if '|' in r else [r, 'rule'])) for r in rows.strip().split('\n') if r.strip()])]

def chapter(path, title, exam, intro, formulas='', nums=(), facts='', pairs_txt='', per=12, problems=None, strategy='', mins=40, yt=''):
    key = path
    R = rng(key)
    # ---- facts -> study bullets
    fl = parse(facts) if facts.strip() else []
    bullets = ['- %s %s.' % (cap(t), d) for wh, t, d, c in fl][:14]
    frows = md_formulas(formulas) if formulas.strip() else [('Key ideas', [(cap(t), d, '') for wh, t, d, c in fl[:6]])]
    fexp = []
    for g, rows in frows:
        for r in rows[:6]:
            if len(r) >= 2: fexp.append('- **%s**: %s%s' % (r[0], r[1], (' (' + r[2] + ')') if len(r) > 2 and r[2] else ''))
    strat = strategy or ('Write the formula first, substitute with units, then check the order of magnitude. In %s, speed comes from recognising the standard pattern of each chapter, so practise the numerical types below until they are automatic.' % exam)
    study = (intro.strip() + '\n\n**Key formulas and rules**\n' + ('\n'.join(fexp) if fexp else '- See the formula sheet.') +
             ('\n\n**Facts to remember**\n' + '\n'.join(bullets) if bullets else '') + '\n\n**Exam approach.** ' + strat +
             ' Revise this chapter in three passes: the formula sheet, the facts above, then the generated numerical questions with a timer.')
    if len(re.findall(r'\w+', study)) < 270:
        study += ('\n\n**How to revise.** Read the formula list and the facts once, then close the page and write them from memory. Attempt the generated questions in sets of ten, mark each answer, and note the reason for every miss. '
                  'Questions in this chapter repeat a small number of patterns with changed numbers or wording, so after two or three sets you should recognise each pattern at a glance. Keep a short error log of units, signs and exceptions, and read it again the day before the test.')
    hindi = 'यह अध्याय %s परीक्षा के लिए है। पहले सूत्र और मुख्य तथ्य याद करें, फिर संख्यात्मक प्रश्न समय सीमा में हल करें। गलत उत्तरों के कारण नोट करें।' % exam
    tip = 'Tip: do the numerical questions with a timer, then re-read the facts you missed.'
    # problems: from first generators or generic
    probs = []
    if nums:
        lv = [('Moderate', [(1, 'Formula'), (2, 'Final value with unit')]), ('High', [(2, 'Method'), (2, 'Final value with unit')]), ('Advanced', [(3, 'Method and steps'), (3, 'Final value with unit')])]
        for i, (name, rub) in enumerate(lv):
            g = nums[i % len(nums)]; q, v, _ = g.inst(R)
            probs.append((name, [(q, fmtv(v, g.dec) + (' ' + g.unit if g.unit else ''), rub)]))
    elif problems:
        probs = problems
    else:
        probs = []
        lv = [('Moderate', [(1, 'Correct term'), (2, 'Clear explanation')]), ('High', [(2, 'Concept'), (2, 'Explanation with example')]), ('Advanced', [(3, 'Concept and reasoning'), (3, 'Application or exception')])]
        for i, (name, rub) in enumerate(lv):
            wh, t, d, cat = fl[(i * 3) % len(fl)]
            probs.append((name, [('Explain in your own words: %s.' % t.strip().capitalize() if i == 0 else ('State the key point about %s and give one application or exception.' % t.strip()), '%s %s.' % (cap(t), d), rub)]))
    vis = ['formula | %s | %s' % (title, ' ; '.join((r[0] if (len(r)<2 or r[1]=='rule') else '%s = %s' % (r[0], r[1])) for g, rows in frows for r in rows[:3])),
           'steps | How to attack %s questions | Read the data ; Write the formula or rule ; Substitute with units ; Check the answer' % title]
    L = Lesson(path, title, mins, yt or ('%s %s' % (exam, title)), study, [], hindi, tip, frows, vis, probs, key=key)
    if fl: L.facts(fl)
    if pairs_txt.strip(): pairs(L, pairs_txt)
    for g in nums:
        for _ in range(per):
            q, v, vals = g.inst(R)
            ans = fmtv(v, g.dec) + (' ' + g.unit if g.unit else '')
            wr = [w + (' ' + g.unit if g.unit else '') for w in g.wrongs(v, R)]
            L.add_qa(q, ans)
            try: L.add_quiz(q, ans, wr, '%s = %s' % (g.form, ans))
            except ValueError: pass
    return L

def put(path, *a, **k):
    L = chapter(path, *a, **k); L.write(); return L

from cs12b import *
from cs11 import W
import re, itertools, functools
from collections import Counter, defaultdict, deque, OrderedDict
subject('py', 'Python', 'python', 'lang', 'Language-specific practice: comprehensions, string tools, collections, classes, iterators and the standard library.')
Aa = ar(-9, 20, 1, 10); Ap = ar(1, 30, 1, 10)

def wl(n=6): return wds(1, n, 'abcde', (1, 5))
def spiral(m):
    o = []
    while m: o += m.pop(0); m = [list(r) for r in zip(*m)][::-1]
    return J(o)
def wrap(t, w):
    lines = []; cur = ''
    for x in t.split():
        if not cur: cur = x
        elif len(cur) + 1 + len(x) <= w: cur += ' ' + x
        else: lines.append(cur); cur = x
    lines.append(cur); return '\n'.join(lines)
def lrud(s):
    l = W(s); c = int(l[0]); d = OrderedDict(); o = []
    for x in l[2:2 + int(l[1])]:
        p = x.split()
        if p[0] == 'put':
            k = int(p[1])
            if k in d: d.move_to_end(k)
            d[k] = int(p[2])
            if len(d) > c: d.popitem(last=False)
        else:
            k = int(p[1])
            if k in d: d.move_to_end(k); o.append(str(d[k]))
            else: o.append('-1')
    return '\n'.join(o) or 'NONE'
def anag(s):
    d = defaultdict(list)
    for w in dict.fromkeys(s.split()): d[''.join(sorted(w))].append(w)
    return '\n'.join(J(sorted(g)) for g in sorted(d.values(), key=lambda g: sorted(g)[0]))
def ren(s):
    l = W(s); d = dict(x.split() for x in l[1:1 + int(l[0])]); q = l[-1]
    while q in d: q = d[q]
    return q

def acct(s):
    l = W(s); bal = int(l[0]); o = []
    for x in l[2:2 + int(l[1])]:
        p = x.split(); a = int(p[1]) if len(p) > 1 else 0
        if p[0] == 'deposit': bal += a
        elif p[0] == 'withdraw':
            if a > bal: o.append('INSUFFICIENT')
            else: bal -= a
        else: o.append(str(bal))
    return '\n'.join(o) or 'NONE'
def gac(r): n = r.randint(1, 8); return L(*([r.randint(0, 100), n] + [r.choice(['deposit %d' % r.randint(1, 50), 'withdraw %d' % r.randint(1, 80), 'balance']) for _ in range(n)]))
def skc(s):
    st = []; o = []
    for c in W(s)[1:]:
        p = c.split()
        if p[0] == 'push': st.append(int(p[1]))
        elif p[0] == 'pop': o.append(str(st.pop()) if st else 'EMPTY')
        else: o.append(str(st[-1]) if st else 'EMPTY')
    return '\n'.join(o) or 'NONE'
def lib(s):
    av = Counter(); o = []
    for c in W(s)[1:]:
        p = c.split()
        if p[0] == 'add': av[p[1]] += 1
        elif p[0] == 'borrow':
            if av[p[1]] > 0: av[p[1]] -= 1; o.append('BORROWED')
            else: o.append('NOT AVAILABLE')
        elif p[0] == 'return': av[p[1]] += 1
        else: o.append(str(sum(av.values())))
    return '\n'.join(o) or 'NONE'
def ptm(s):
    q = []; o = []; n = 0
    for c in W(s)[1:]:
        p = c.split()
        if p[0] == 'add': q.append((-int(p[2]), n, p[1])); n += 1
        else:
            if q: q.sort(); o.append(q.pop(0)[2])
            else: o.append('EMPTY')
    return '\n'.join(o) or 'NONE'
def obs(s):
    sub = []; o = []
    for c in W(s)[1:]:
        p = c.split()
        if p[0] == 'sub' and p[1] not in sub: sub.append(p[1])
        elif p[0] == 'unsub' and p[1] in sub: sub.remove(p[1])
        elif p[0] == 'publish': o += ['%s got %s' % (x, p[1]) for x in sub]
    return '\n'.join(o) or 'NONE'


def invq(s):
    d = Counter(); o = []
    for c in W(s)[1:]:
        p = c.split()
        if p[0] == 'add': d[p[1]] += int(p[2])
        elif p[0] == 'remove':
            if d[p[1]] < int(p[2]): o.append('SHORT')
            else: d[p[1]] -= int(p[2])
        else: o.append(str(sum(d.values())))
    return '\n'.join(o) or 'NONE'

topic('comp', 'Comprehensions and Slicing', 'List, set and dict comprehensions, slicing, zip and enumerate')
Q('Easy', 'Squares List', 'Use a list comprehension to print the squares of the numbers. | Input: N, then N integers. | Output: the squares.', lambda s: J(x * x for x in arrs(s)), [L(3, '1 2 3')], Aa)
Q('Easy', 'Even Filter', 'Print only the even numbers (comprehension with a condition), or NONE. | Input: N, then N integers. | Output: even numbers.', lambda s: J(x for x in arrs(s) if x % 2 == 0) or 'NONE', [L(4, '1 2 3 4')], Aa)
Q('Easy', 'Every Second Element', 'Print every second element starting from index 0 using a slice. | Input: N, then N integers. | Output: the slice.', lambda s: J(arrs(s)[::2]), [L(5, '1 2 3 4 5')], Aa)
Q('Easy', 'Reverse By Slice', 'Reverse the list using the [::-1] slice. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Aa)
Q('Easy', 'Zip Sum', 'Two lists of equal length: print the element-wise sums using zip. | Input: two lines, each "N values". | Output: the sums.', lambda s: J(a + b for a, b in zip(*[list(map(int, l.split()))[1:] for l in W(s)])), [L('3 1 2 3', '3 4 5 6')], lambda r: (lambda n: L(J([n] + [r.randint(0, 9) for _ in range(n)]), J([n] + [r.randint(0, 9) for _ in range(n)])))(r.randint(1, 6)))
Q('Easy', 'Enumerate Positions', 'Print "index value" for each element using enumerate, one per line. | Input: N, then N integers. | Output: N lines.', lambda s: '\n'.join('%d %d' % (i, x) for i, x in enumerate(arrs(s))), [L(2, '5 7')], Aa)
Q('Easy', 'Upper Letters Only', 'Print only the uppercase letters of the text, joined, or NONE. | Input: a line. | Output: the letters.', lambda s: ''.join(c for c in s if c.isupper()) or 'NONE', [L('Hello World')], lambda r: L(' '.join(''.join(r.choice('aBcDe') for _ in range(r.randint(1, 4))) for _ in range(r.randint(1, 4)))))
Q('Medium', 'Flatten Matrix', 'Print a matrix flattened row by row on one line using a nested comprehension. | Input: R C, then R rows. | Output: all values.', lambda s: J(int(x) for l in W(s)[1:] for x in l.split()), [L('2 2', '1 2', '3 4')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Medium', 'Word Lengths Dict', 'Print "word length" for each distinct word in first-appearance order (dict comprehension). | Input: a line of words. | Output: one pair per line.', lambda s: '\n'.join('%s %d' % (w, len(w)) for w in dict.fromkeys(s.split())), [L('hi there hi')], wl())
Q('Medium', 'Set Comprehension Remainders', 'Print the sorted distinct remainders of the numbers when divided by K. | Input: N, the numbers, then K. | Output: the remainders.', lambda s: (lambda t: J(sorted({x % t[-1] for x in t[1:1 + t[0]]})))(iv(s)), [L(4, '5 7 9 12', 4)], arq(0, 30, 1, 8, 2, 7))
Q('Medium', 'Pairs From Two Lists', 'Print all (a, b) pairs from two lists as "a-b" in nested-loop order. | Input: two lines, each "N values". | Output: pairs separated by spaces.', lambda s: J('%d-%d' % (a, b) for a in list(map(int, W(s)[0].split()))[1:] for b in list(map(int, W(s)[1].split()))[1:]), [L('2 1 2', '2 3 4')], lambda r: L(*[J([k] + [r.randint(0, 9) for _ in range(k)]) for k in (r.randint(1, 3), r.randint(1, 3))]))
Q('Medium', 'Transpose With zip', 'Print the transposed matrix using zip(*rows). | Input: R C, then R rows. | Output: C rows.', lambda s: '\n'.join(J(c) for c in zip(*[list(map(int, l.split())) for l in W(s)[1:]])), [L('2 3', '1 2 3', '4 5 6')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Medium', 'Window Sums By Slicing', 'Print the sum of every K consecutive elements using slices. | Input: N, the list, then K. | Output: the sums.', lambda s: (lambda t: J(sum(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Medium', 'Negative Index Tail', 'Print the last K elements using negative slicing. | Input: N, the list, then K (K<=N). | Output: the last K.', lambda s: (lambda t: J(t[1:1 + t[0]][-t[-1]:] if t[-1] else []) or 'NONE')(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(0, n)))(r.randint(1, 8)))
Q('Hard', 'Rotate With Slices', 'Rotate left by K using slicing only. | Input: N, the list, then K. | Output: the rotated list.', lambda s: (lambda t: (lambda a, k: J(a[k % len(a):] + a[:k % len(a)]))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 7)], arq(0, 9, 1, 8, 0, 20))
Q('Hard', 'Spiral Order', 'Print a matrix in spiral order. | Input: R C, then R rows. | Output: the spiral on one line.', lambda s: spiral([list(map(int, l.split())) for l in W(s)[1:]]), [L('3 3', '1 2 3', '4 5 6', '7 8 9')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Hard', 'Group Consecutive', 'Group runs of consecutive equal numbers and print "value xcount" for each run. | Input: N, then N integers. | Output: runs separated by spaces.', lambda s: J('%d x%d' % (k, len(list(g))) for k, g in itertools.groupby(arrs(s))), [L(5, '1 1 2 2 2')], ar(0, 2, 1, 12))
Q('Hard', 'Chunk the List', 'Split the list into chunks of size K; print each chunk on its own line. | Input: N, the list, then K. | Output: chunks.', lambda s: (lambda t: '\n'.join(J(t[1:1 + t[0]][i:i + t[-1]]) for i in range(0, t[0], t[-1])))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Hard', 'Matrix Diagonal Sums', 'Print the sum of the main diagonal and the anti-diagonal of an N x N matrix as two numbers. | Input: N, then N rows. | Output: "main anti".', lambda s: (lambda m: '%d %d' % (sum(m[i][i] for i in range(len(m))), sum(m[i][len(m) - 1 - i] for i in range(len(m)))))([list(map(int, l.split())) for l in W(s)[1:]]), [L(2, '1 2', '3 4')], lambda r: (lambda n: L(n) + ''.join(L(J([r.randint(0, 9) for _ in range(n)])) for _ in range(n)))(r.randint(1, 4)))
Q('Hard', 'Pascal Row', 'Print row N of Pascal\'s triangle (row 0 is 1) using a comprehension. | Input: N. | Output: the row.', lambda s: J(math.comb(int(s), k) for k in range(int(s) + 1)), [L(4)], num(0, 12))

topic('strtools', 'String Methods and Formatting', 'split, join, strip, replace, f-strings and format specifiers')
Q('Easy', 'Join With Dash', 'Join the words with "-". | Input: a line of words. | Output: the joined text.', lambda s: '-'.join(s.split()), [L('a b c')], wl())
Q('Easy', 'Strip and Print', 'Strip the surrounding spaces and print the text between [ and ]. | Input: a line with spaces around. | Output: [text].', lambda s: '[' + s.strip() + ']', [L('   hi   ')], lambda r: L(' ' * r.randint(0, 3) + ''.join(r.choice('abc ') for _ in range(r.randint(1, 5))).strip() + ' ' * r.randint(0, 3)))
Q('Easy', 'Count Substring', 'Count how many times the second line appears in the first (non-overlapping). | Input: text then pattern. | Output: the count.', lambda s: W(s)[0].count(W(s)[1]), [L('banana', 'an')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(1, 10))), ''.join(r.choice('ab') for _ in range(r.randint(1, 2)))))
Q('Easy', 'Starts or Ends', 'Print STARTS, ENDS, BOTH or NEITHER depending on whether the word begins and/or ends with the letter. | Input: word, then a letter. | Output: the word.', lambda s: (lambda w, c: 'BOTH' if w[0] == c and w[-1] == c else 'STARTS' if w[0] == c else 'ENDS' if w[-1] == c else 'NEITHER')(*W(s)), [L('level', 'l')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(1, 5))), r.choice('ab')))
Q('Easy', 'Zero Padded', 'Print N padded with leading zeros to width 5. | Input: N. | Output: padded number.', lambda s: '%05d' % int(s), [L(42)], num(0, 99999))
Q('Easy', 'Title Case', 'Print the line in title case using .title(). | Input: a line. | Output: the line.', lambda s: s.strip().title(), [L('hello big world')], wl())
Q('Easy', 'Replace Letter', 'Replace every occurrence of the first letter of the second line with the third line. | Input: text, old letter, new letter. | Output: the new text.', lambda s: W(s)[0].replace(W(s)[1], W(s)[2]), [L('banana', 'a', 'o')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 8))), r.choice('abc'), r.choice('xyz')))
Q('Medium', 'Format Table Row', 'Print "name" left-aligned in 8 characters then the mark right-aligned in 5 characters, separated by "|". | Input: name then mark. | Output: the formatted row.', lambda s: '%-8s|%5d' % (W(s)[0], int(W(s)[1])), [L('Asha', 91)], lambda r: L(r.choice(['Asha', 'Dev', 'Isha']), r.randint(0, 100)))
Q('Medium', 'Float Formatting', 'Print the number with thousands separators and 2 decimals. | Input: a number with decimals. | Output: formatted number.', lambda s: '{:,.2f}'.format(float(s)), [L('1234567.891')], lambda r: L(round(r.uniform(0, 5000000), 3)))
Q('Medium', 'Split On Commas', 'Split the line on commas, strip each piece and print them one per line. | Input: a comma separated line. | Output: pieces.', lambda s: '\n'.join(p.strip() for p in s.strip().split(',')), [L('a , b,c ')], lambda r: L(', '.join(''.join(r.choice('abc') for _ in range(r.randint(1, 3))) for _ in range(r.randint(1, 4)))))
Q('Medium', 'Center Banner', 'Print the word centered in a line of 11 characters, padded with *. | Input: a word (<=11 chars). | Output: the banner.', lambda s: s.strip().center(11, '*'), [L('hi')], st(1, 11, 'abc'))
Q('Medium', 'Partition At Equals', 'The line is key=value. Print "value:key". | Input: one line key=value. | Output: value:key.', lambda s: (lambda k, _, v: v + ':' + k)(*s.strip().partition('=')), [L('name=Asha')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 3))) + '=' + ''.join(r.choice('xyz') for _ in range(r.randint(1, 3)))))
Q('Medium', 'Is Alpha Digit', 'Print the counts of letters, digits and others as three numbers. | Input: a line. | Output: letters digits others.', lambda s: (lambda t: '%d %d %d' % (sum(c.isalpha() for c in t), sum(c.isdigit() for c in t), sum(not c.isalnum() for c in t)))(s.rstrip('\n')), [L('ab12 !')], lambda r: L(''.join(r.choice('ab12 !?') for _ in range(r.randint(1, 10)))))
Q('Medium', 'Case Fold Compare', 'Print EQUAL if the two lines are equal ignoring case, else DIFFERENT. | Input: two lines. | Output: EQUAL or DIFFERENT.', lambda s: 'EQUAL' if W(s)[0].lower() == W(s)[1].lower() else 'DIFFERENT', [L('Hello', 'hELLO')], lambda r: (lambda a: L(a, a.swapcase() if r.random() < .5 else a + 'z'))(''.join(r.choice('aAb') for _ in range(r.randint(1, 3)))))
Q('Hard', 'Camel To Snake', 'Convert camelCase to snake_case. | Input: an identifier. | Output: the snake_case name.', lambda s: re.sub(r'([A-Z])', lambda m: '_' + m.group(1).lower(), s.strip()), [L('myVariableName')], lambda r: L(''.join(r.choice(['my', 'Var', 'Name', 'x', 'Id']) for _ in range(r.randint(1, 4))).replace('My', 'my')))
Q('Hard', 'Template Fill', 'The template has {name} and {n}. Fill them from the next two lines and print. | Input: template, name, n. | Output: the filled text.', lambda s: W(s)[0].replace('{name}', W(s)[1]).replace('{n}', W(s)[2]), [L('Hi {name}, you have {n} tasks', 'Asha', 3)], lambda r: L('Hi {name}, you have {n} tasks', r.choice(['Asha', 'Dev']), r.randint(0, 9)))
Q('Hard', 'Wrap Text', 'Wrap the words into lines of at most W characters (greedy). Print each line. | Input: a line of words, then W. | Output: the wrapped lines.', lambda s: wrap(W(s)[0], int(W(s)[1])), [L('the quick brown fox', 9)], lambda r: L(' '.join(''.join(r.choice('abc') for _ in range(r.randint(1, 5))) for _ in range(r.randint(1, 6))), r.randint(5, 12)))
Q('Hard', 'Run Length Decode', 'Decode a3b2c1 style text back to aaabbc. | Input: an encoded string. | Output: the decoded string.', lambda s: ''.join(c * int(n) for c, n in re.findall(r'([a-z])(\d+)', s.strip())), [L('a3b2c1')], lambda r: L(''.join(r.choice('abc') + str(r.randint(1, 5)) for _ in range(r.randint(1, 4)))))
Q('Hard', 'Translate Table', 'Map each letter of "abc" to "xyz" respectively in the text (str.translate idea). | Input: a line. | Output: translated line.', lambda s: s.rstrip('\n').translate(str.maketrans('abc', 'xyz')), [L('a cab')], lambda r: L(''.join(r.choice('abcd ') for _ in range(r.randint(1, 10)))))
Q('Hard', 'Longest Palindromic Prefix Length', 'Print the length of the longest prefix that is a palindrome. | Input: a word. | Output: the length.', lambda s: max(i for i in range(1, len(s.strip()) + 1) if s.strip()[:i] == s.strip()[:i][::-1]), [L('abacd')], st(1, 10, 'ab'))

topic('colls', 'Collections and Standard Library', 'Counter, defaultdict, deque, heapq, sorted with key, itertools')
Q('Easy', 'Counter Most Common', 'Print the most common word and its count (alphabetical on tie). | Input: a line of words. | Output: "word count".', lambda s: (lambda c: '%s %d' % min(c.items(), key=lambda x: (-x[1], x[0])))(Counter(s.split())), [L('a b a')], wl(8))
Q('Easy', 'Unique Count', 'Print how many unique words there are. | Input: a line. | Output: the count.', lambda s: len(set(s.split())), [L('a b a')], wl(8))
Q('Easy', 'Sorted By Length', 'Sort the words by length (shortest first, stable). | Input: a line. | Output: the words.', lambda s: J(sorted(s.split(), key=len)), [L('ccc a bb')], wl())
Q('Easy', 'Sum Of Counter Values', 'Print the sum of all counts, which equals the number of items. | Input: a line. | Output: the count of words.', lambda s: sum(Counter(s.split()).values()), [L('a b a')], wl(8))
Q('Easy', 'Min And Max Word', 'Print the alphabetically smallest and largest word. | Input: a line. | Output: "min max".', lambda s: '%s %s' % (min(s.split()), max(s.split())), [L('pear apple fig')], wl())
Q('Easy', 'Reversed Sorted', 'Print the numbers sorted in descending order using sorted(reverse=True). | Input: N, then N integers. | Output: the list.', lambda s: J(sorted(arrs(s), reverse=True)), [L(3, '1 3 2')], Aa)
Q('Easy', 'Deque Rotate', 'Rotate the list left by K using deque.rotate. | Input: N, list, K. | Output: the list.', lambda s: (lambda t: (lambda d: (d.rotate(-t[-1]), J(d))[1])(deque(t[1:1 + t[0]])))(iv(s)), [L(5, '1 2 3 4 5', 2)], arq(0, 9, 1, 8, 0, 12))
Q('Medium', 'Group By First Letter', 'Print each first letter and the words starting with it, letters sorted, as "x: w1 w2" (words in input order, distinct). | Input: a line. | Output: groups.', lambda s: '\n'.join('%s: %s' % (k, J(v)) for k, v in sorted((lambda d: [d[w[0]].append(w) for w in dict.fromkeys(s.split())] and d or d)(defaultdict(list)).items())), [L('apple avocado bean')], wl(8))
Q('Medium', 'Top K With Heap', 'Print the K largest numbers in descending order (heapq.nlargest). | Input: N, the list, then K. | Output: K numbers.', lambda s: (lambda t: J(sorted(t[1:1 + t[0]], reverse=True)[:t[-1]]))(iv(s)), [L(5, '3 9 1 7 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Medium', 'Sort By Two Keys', 'Sort "name mark" lines by mark descending then name ascending. | Input: N, then N lines. | Output: sorted lines.', lambda s: '\n'.join(sorted(W(s)[1:], key=lambda l: (-int(l.split()[1]), l.split()[0]))), [L(3, 'b 5', 'a 5', 'c 9')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 3)) for c in 'abcd'])))
Q('Medium', 'Default Dict Totals', 'Sum the amounts per key (lines "key amount") and print keys sorted. | Input: N, then N lines. | Output: "key total".', lambda s: (lambda d: '\n'.join('%s %d' % kv for kv in sorted(d.items())))((lambda d: [d.__setitem__(l.split()[0], d[l.split()[0]] + int(l.split()[1])) for l in W(s)[1:]] and d or d)(defaultdict(int))), [L(3, 'a 5', 'b 2', 'a 1')], lambda r: L(*([4] + ['%s %d' % (r.choice('abc'), r.randint(1, 9)) for _ in range(4)])))
Q('Medium', 'Combinations Count', 'Print the combinations of 2 elements from the list as "a b" lines (itertools.combinations, input order). | Input: N, then N distinct integers. | Output: pairs.', lambda s: '\n'.join('%d %d' % c for c in itertools.combinations(arrs(s), 2)) or 'NONE', [L(3, '1 2 3')], lambda r: (lambda n: L(n, J(r.sample(range(0, 20), n))))(r.randint(1, 5)))
Q('Medium', 'Permutations Of Three', 'Print all permutations of the three given numbers in itertools order. | Input: three numbers on one line. | Output: 6 lines.', lambda s: '\n'.join(J(p) for p in itertools.permutations(map(int, s.split()))), [L('1 2 3')], lambda r: L(J(r.sample(range(0, 9), 3))))
Q('Medium', 'Accumulate Product', 'Print the running product. | Input: N, then N integers. | Output: running product.', lambda s: J(itertools.accumulate(arrs(s), lambda a, b: a * b)), [L(4, '1 2 3 4')], ar(1, 5, 1, 8))
Q('Hard', 'LRU With OrderedDict', 'Capacity C; "get K" prints value or -1, "put K V" inserts/updates. Print one line per get. | Input: C, Q, then Q commands. | Output: gets.', lambda s: lrud(s), [L(2, 4, 'put 1 1', 'put 2 2', 'get 1', 'get 3')], lambda r: L(*([r.randint(1, 3), 7] + [r.choice(['put %d %d' % (r.randint(1, 4), r.randint(1, 9)), 'get %d' % r.randint(1, 4)]) for _ in range(7)])))
Q('Hard', 'Merge K Sorted', 'Merge the sorted lists with heapq.merge. | Input: K, then K lines "n values". | Output: the merged list.', lambda s: J(sorted(x for l in W(s)[1:] for x in list(map(int, l.split()))[1:])), [L(2, '2 1 4', '2 2 3')], lambda r: (lambda k: L(k) + ''.join(L(J([n] + sorted(r.randint(0, 20) for _ in range(n)))) for n in [r.randint(1, 4) for _ in range(k)]))(r.randint(1, 4)))
Q('Hard', 'Anagram Groups', 'Group anagrams; print each group sorted on a line, groups ordered by first word of each group. | Input: a line of words. | Output: one group per line.', lambda s: anag(s), [L('eat tea tan ate nat bat')], wds(1, 8, 'abc', (1, 3)))
Q('Hard', 'Sliding Window Maximum', 'Print the maximum of every window of K using a deque. | Input: N, list, K. | Output: maxima.', lambda s: (lambda t: J(max(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(6, '1 3 -1 -3 5 3', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Hard', 'Product Of Pairs Sum', 'Print the sum of a*b over all pairs (a, b) from the list with a<b by position. | Input: N, then N integers. | Output: the sum.', lambda s: sum(a * b for a, b in itertools.combinations(arrs(s), 2)), [L(3, '1 2 3')], Aa)
Q('Hard', 'Cartesian Count', 'Count pairs (a, b) from two lists with a+b equal to K (itertools.product). | Input: two lines "n values", then K. | Output: the count.', lambda s: sum(1 for a, b in itertools.product(list(map(int, W(s)[0].split()))[1:], list(map(int, W(s)[1].split()))[1:]) if a + b == int(W(s)[2])), [L('2 1 2', '2 3 4', 5)], lambda r: L(*[J([k] + [r.randint(0, 6) for _ in range(k)]) for k in (r.randint(1, 4), r.randint(1, 4))], r.randint(0, 10)))
Q('Hard', 'Transitive Rename', 'Lines "a b" mean a becomes b. For the query name follow renames until a name has no rename and print it (renames form no cycle). | Input: N, N lines, then the query. | Output: the final name.', lambda s: ren(s), [L(2, 'a b', 'b c', 'a')], lambda r: L(*([3, 'a b', 'b c', 'c d', r.choice('abcd')])))
topic('oop', 'Classes and Objects', 'Model objects with classes: methods, inheritance and special methods')
Q('Easy', 'Bank Account Class', 'Write a class Account(balance) with deposit, withdraw (print INSUFFICIENT when too much) and balance (print it). | Input: start balance, N, then N commands. | Output: one line per balance or INSUFFICIENT.', acct, [L(100, 3, 'deposit 50', 'withdraw 200', 'balance')], gac)
Q('Easy', 'Rectangle Area', 'Write class Rectangle(w, h) with area() and perimeter(). Print "area perimeter". | Input: w then h. | Output: area perimeter.', lambda s: '%d %d' % (iv(s)[0] * iv(s)[1], 2 * sum(iv(s))), [L(3, 4)], two(1, 20))
Q('Easy', 'Counter Object', 'Write class Counter with inc(), dec() and value. Apply the commands (inc/dec) and print the value. | Input: N, then N commands. | Output: the final value.', lambda s: sum(1 if c == 'inc' else -1 for c in W(s)[1:]), [L(3, 'inc', 'inc', 'dec')], lambda r: L(*([5] + [r.choice(['inc', 'dec']) for _ in range(5)])))
Q('Easy', 'Student Class', 'Class Student(name, marks list) with average(). Print the name and the average with one decimal. | Input: name, then N marks "n marks". | Output: "name avg".', lambda s: '%s %.1f' % (W(s)[0], sum(map(int, W(s)[1].split()[1:])) / int(W(s)[1].split()[0])), [L('Asha', '3 80 90 70')], lambda r: (lambda n: L(r.choice(['Asha', 'Dev']), J([n] + [r.randint(0, 100) for _ in range(n)])))(r.randint(1, 5)))
Q('Easy', 'Point Distance', 'Class Point(x, y) with a distance(other) method; print the squared distance between two points. | Input: "x1 y1" then "x2 y2". | Output: squared distance.', lambda s: (lambda a, b: (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)(*[list(map(int, l.split())) for l in W(s)]), [L('0 0', '3 4')], lambda r: L('%d %d' % (r.randint(-5, 5), r.randint(-5, 5)), '%d %d' % (r.randint(-5, 5), r.randint(-5, 5))))
Q('Easy', 'Circle Class', 'Class Circle(r) with area() using 3.14159. Print the area with two decimals. | Input: r. | Output: the area.', lambda s: '%.2f' % (3.14159 * int(s) ** 2), [L(3)], num(1, 20))
Q('Easy', 'Dunder Str', 'Class Person(name, age) with __str__ returning "name (age)". Print it. | Input: name then age. | Output: the string.', lambda s: '%s (%s)' % tuple(W(s)), [L('Asha', 20)], lambda r: L(r.choice(['Asha', 'Ravi']), r.randint(1, 90)))
Q('Medium', 'Inheritance Shapes', 'Shape lines "type value": circle r (area 3.14159*r*r) or square s (area s*s). Print each area with two decimals. | Input: N, then N lines. | Output: N areas.', lambda s: '\n'.join('%.2f' % (3.14159 * int(l.split()[1]) ** 2 if l.split()[0] == 'circle' else int(l.split()[1]) ** 2) for l in W(s)[1:]), [L(2, 'circle 1', 'square 3')], lambda r: L(*([3] + ['%s %d' % (r.choice(['circle', 'square']), r.randint(1, 9)) for _ in range(3)])))
Q('Medium', 'Employee Salary Polymorphism', 'Lines "kind base": manager earns base*2, engineer base*1.5 (as integer), intern base. Print the total payroll. | Input: N, then N lines. | Output: the total.', lambda s: sum(int(l.split()[1]) * (2 if l.split()[0] == 'manager' else 3 / 2 if l.split()[0] == 'engineer' else 1) for l in W(s)[1:]), [L(2, 'manager 100', 'intern 40')], lambda r: L(*([3] + ['%s %d' % (r.choice(['manager', 'engineer', 'intern']), 2 * r.randint(1, 50)) for _ in range(3)])))
Q('Medium', 'Vector Addition Operator', 'Class Vec(x, y) with __add__. Add two vectors and print "(x, y)". | Input: "x1 y1" then "x2 y2". | Output: the sum.', lambda s: (lambda a, b: '(%d, %d)' % (a[0] + b[0], a[1] + b[1]))(*[list(map(int, l.split())) for l in W(s)]), [L('1 2', '3 4')], lambda r: L('%d %d' % (r.randint(-5, 5), r.randint(-5, 5)), '%d %d' % (r.randint(-5, 5), r.randint(-5, 5))))
Q('Medium', 'Stack Class', 'Class Stack with push, pop, peek. Process the commands; print popped/peeked values or EMPTY. | Input: N, then N commands "push X", "pop", "peek". | Output: one line per pop/peek.', lambda s: skc(s), [L(4, 'push 1', 'peek', 'pop', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'peek']) for _ in range(6)])))
Q('Medium', 'Class Counter Of Instances', 'Create N Item objects named in the line; a class variable counts instances. Print the count then the names sorted. | Input: a line of names. | Output: count then sorted names.', lambda s: '%d\n%s' % (len(s.split()), J(sorted(s.split()))), [L('b a c')], wl())
Q('Medium', 'Library Books', 'Commands: add title, borrow title (BORROWED or NOT AVAILABLE), return title, count (number of available books). Print the replies. | Input: N, then N commands. | Output: one line per borrow or count.', lambda s: lib(s), [L(4, 'add a', 'add b', 'borrow a', 'count')], lambda r: L(*([7] + [r.choice(['add a', 'add b', 'borrow a', 'borrow b', 'return a', 'count']) for _ in range(7)])))
Q('Medium', 'Temperature Property', 'Class Temp stores Celsius and has a property fahrenheit (c*9/5+32). Print Fahrenheit with one decimal. | Input: Celsius. | Output: Fahrenheit.', lambda s: '%.1f' % (int(s) * 9 / 5 + 32), [L(37)], num(-40, 120))
Q('Hard', 'Matrix Class Multiply', 'Class Matrix with __mul__ for 2x2 matrices. Multiply and print the result rows. | Input: two lines of 4 numbers each (a b c d). | Output: two rows.', lambda s: (lambda a, b: '%d %d\n%d %d' % (a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3], a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]))(*[list(map(int, l.split())) for l in W(s)]), [L('1 2 3 4', '5 6 7 8')], lambda r: L(J([r.randint(-3, 5) for _ in range(4)]), J([r.randint(-3, 5) for _ in range(4)])))
Q('Hard', 'Linked List Class', 'Class LinkedList with append and reverse. Append the values, reverse and print. | Input: N, then N integers. | Output: reversed list.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Aa)
Q('Hard', 'Fraction Class', 'Class Fraction with __add__ and reduction. Print the sum of a/b and c/d in lowest terms as "p/q". | Input: a b c d on four lines... as one line. | Output: p/q.', lambda s: (lambda a, b, c, d: '%d/%d' % ((a * d + c * b) // math.gcd(a * d + c * b, b * d), (b * d) // math.gcd(a * d + c * b, b * d)))(*iv(s)), [L('1 2 1 3')], lambda r: L(J([r.randint(1, 6), r.randint(1, 6), r.randint(1, 6), r.randint(1, 6)])))
Q('Hard', 'Priority Task Manager', 'Commands add name priority, next (print and remove highest priority, earliest added on a tie, or EMPTY). | Input: N, then N commands. | Output: one line per next.', lambda s: ptm(s), [L(4, 'add a 1', 'add b 5', 'next', 'next')], lambda r: L(*([7] + [r.choice(['add %s %d' % (r.choice('abc'), r.randint(1, 3)), 'next']) for _ in range(7)])))
Q('Hard', 'Observer Counter', 'Subscribers sub name; publish prints "name got msg" for each subscriber in subscribe order; unsub name removes one. | Input: N, then commands. | Output: delivered lines.', lambda s: obs(s), [L(3, 'sub a', 'sub b', 'publish hi')], lambda r: L(*([6] + [r.choice(['sub a', 'sub b', 'unsub a', 'publish hi']) for _ in range(6)])))
Q('Hard', 'Inventory With Classes', 'Commands: add item qty, remove item qty (print SHORT if not enough, nothing else changes), total (print total units). | Input: N, then N commands. | Output: one line per SHORT or total.', lambda s: invq(s), [L(3, 'add a 5', 'remove a 7', 'total')], lambda r: L(*([7] + [r.choice(['add a %d' % r.randint(1, 5), 'add b %d' % r.randint(1, 5), 'remove a %d' % r.randint(1, 6), 'remove b %d' % r.randint(1, 6), 'total']) for _ in range(7)])))
topic('iter', 'Generators and Functional Tools', 'yield, iterators, map, filter, reduce, lambda and decorators')
Q('Easy', 'Map Double', 'Use map and lambda to double each number. | Input: N, then N integers. | Output: doubled.', lambda s: J(x * 2 for x in arrs(s)), [L(3, '1 2 3')], Aa)
Q('Easy', 'Filter Positive', 'Use filter to keep numbers greater than zero (or NONE). | Input: N, then N integers. | Output: the positives.', lambda s: J(x for x in arrs(s) if x > 0) or 'NONE', [L(4, '-1 2 -3 4')], Aa)
Q('Easy', 'Reduce Product', 'Use functools.reduce to print the product. | Input: N, then N integers. | Output: the product.', lambda s: functools.reduce(lambda a, b: a * b, arrs(s)), [L(4, '1 2 3 4')], ar(1, 6, 1, 8))
Q('Easy', 'Generator Evens', 'Write a generator of even numbers up to N and print them. | Input: N. | Output: evens from 2.', lambda s: J(range(2, int(s) + 1, 2)) or 'NONE', [L(10)], num(1, 40))
Q('Easy', 'Sum With Generator', 'Print the sum of squares 1..N using a generator expression. | Input: N. | Output: the sum.', lambda s: sum(i * i for i in range(1, int(s) + 1)), [L(4)], num(1, 100))
Q('Easy', 'Sorted With Lambda', 'Sort words by last letter then alphabetically. | Input: a line. | Output: the words.', lambda s: J(sorted(s.split(), key=lambda w: (w[-1], w))), [L('cab bee tea')], wl())
Q('Easy', 'Any All', 'Print "any all" as True/False: any positive number, and all numbers positive. | Input: N, then N integers. | Output: "True False" etc.', lambda s: '%s %s' % (any(x > 0 for x in arrs(s)), all(x > 0 for x in arrs(s))), [L(3, '1 -2 3')], Aa)
Q('Medium', 'Fibonacci Generator', 'Print the first N Fibonacci numbers produced by a generator. | Input: N. | Output: N numbers.', lambda s: J((lambda n: (lambda a: [a.append(a[-1] + a[-2]) for _ in range(n)] and a[:n])([0, 1]))(int(s))), [L(7)], num(1, 20))
Q('Medium', 'Prime Generator', 'Print the first N primes from a generator. | Input: N. | Output: N primes.', lambda s: J((lambda n: [p for p in range(2, 400) if all(p % d for d in range(2, int(p ** .5) + 1))][:n])(int(s))), [L(5)], num(1, 40))
Q('Medium', 'Running Maximum', 'Print the running maximum using itertools.accumulate. | Input: N, then N integers. | Output: running max.', lambda s: J(itertools.accumulate(arrs(s), max)), [L(4, '3 1 4 1')], Aa)
Q('Medium', 'Chain Lists', 'Chain two lists with itertools.chain and print them sorted. | Input: two lines, each "N values". | Output: sorted values.', lambda s: J(sorted(sum((list(map(int, l.split()))[1:] for l in W(s)), []))), [L('2 5 1', '1 3')], lambda r: L(*[J([k] + [r.randint(0, 9) for _ in range(k)]) for k in (r.randint(1, 4), r.randint(1, 4))]))
Q('Medium', 'Decorator Call Counter', 'A decorator counts calls to f(x)=x*2. Call f for each number and print the sum of results then the number of calls. | Input: N, then N integers. | Output: "sum calls".', lambda s: '%d %d' % (sum(2 * x for x in arrs(s)), len(arrs(s))), [L(3, '1 2 3')], Aa)
Q('Medium', 'Take While', 'Print numbers from the list while they are strictly increasing from the start (itertools.takewhile idea). | Input: N, then N integers. | Output: the prefix.', lambda s: (lambda a: J(a[:next((i for i in range(1, len(a)) if a[i] <= a[i - 1]), len(a))]))(arrs(s)), [L(5, '1 3 5 4 9')], Aa)
Q('Medium', 'Zip Longest Fill', 'Pair elements of two lists, filling missing with 0; print pairwise sums. | Input: two lines, each "N values". | Output: sums.', lambda s: J(a + b for a, b in itertools.zip_longest(*[list(map(int, l.split()))[1:] for l in W(s)], fillvalue=0)), [L('3 1 2 3', '1 10')], lambda r: L(*[J([k] + [r.randint(0, 9) for _ in range(k)]) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Medium', 'Compose Lambdas', 'Compose f(x)=x+1 and g(x)=x*2 and print g(f(x)) for every number. | Input: N, then N integers. | Output: results.', lambda s: J((x + 1) * 2 for x in arrs(s)), [L(3, '1 2 3')], Aa)
Q('Medium', 'Batch Generator', 'A generator yields batches of K items; print each batch sum. | Input: N, the list, K. | Output: batch sums.', lambda s: (lambda t: J(sum(t[1:1 + t[0]][i:i + t[-1]]) for i in range(0, t[0], t[-1])))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Hard', 'Collatz Generator Length', 'A generator yields the Collatz sequence from N down to 1. Print its length. | Input: N. | Output: number of terms.', lambda s: (lambda n: (lambda f: f(f, n, 1))(lambda f, x, c: c if x == 1 else f(f, x // 2 if x % 2 == 0 else 3 * x + 1, c + 1)))(int(s)), [L(6)], num(1, 300))
Q('Hard', 'Memoize Fib', 'Use lru_cache to compute fib(N) quickly for N up to 80. | Input: N. | Output: fib(N).', lambda s: (lambda n: (lambda a, b: [(a := b, b := a + b) for _ in range(n)] and a if n else 0)(0, 1))(int(s)), [L(50)], num(0, 80))
Q('Hard', 'Pipeline Of Functions', 'Apply in order: keep even numbers, square them, sum them. Print the result. | Input: N, then N integers. | Output: the sum.', lambda s: sum(x * x for x in arrs(s) if x % 2 == 0), [L(4, '1 2 3 4')], Aa)
Q('Hard', 'Sliding Pairs', 'Print differences between consecutive elements using zip(a, a[1:]). | Input: N, then N integers. | Output: N-1 differences or NONE.', lambda s: J(b - a for a, b in zip(arrs(s), arrs(s)[1:])) or 'NONE', [L(4, '1 4 9 16')], Aa)
Q('Hard', 'Flatten Nested', 'Input is a nested list written with square brackets like [1,[2,3],[[4]]]. Print the flattened numbers separated by spaces. | Input: one line. | Output: the numbers.', lambda s: J(re.findall(r'-?\d+', s)), [L('[1,[2,3],[[4]]]')], lambda r: L(r.choice(['[1,[2,3],[[4]]]', '[[5],6]', '[7]', '[[[8,9]],[10]]', '[1,2,3]'])))
Q('Hard', 'Run Generator Until', 'A generator yields squares 1,4,9,... Print them until the first square above L. | Input: L. | Output: squares up to and including the first one above L.', lambda s: J((lambda l: [i * i for i in range(1, int(l ** .5) + 2)][:next(i for i in range(1, 100) if i * i > l)])(int(s))), [L(20)], num(1, 200))
Q('Hard', 'Sorted Unique Merge', 'Merge several lines of numbers into one sorted list of unique values. | Input: N, then N lines of numbers. | Output: the unique sorted values.', lambda s: J(sorted({int(x) for l in W(s)[1:] for x in l.split()})), [L(2, '3 1 2', '2 5')], lambda r: L(*([3] + [J([r.randint(0, 9) for _ in range(r.randint(1, 4))]) for _ in range(3)])))

from cs12 import *
from cs11 import W
import re
def L2(n): return lambda r: L(*([n] + [' '.join(r.choice(['the', 'cat', 'sat', 'on', 'mat', 'a', 'Dog']) for _ in range(r.randint(1, 5))) for _ in range(n)]))
def F(s): return W(s)[1:1 + int(W(s)[0])]
def CS(s): return [l.split(',') for l in W(s)[1:1 + int(W(s)[0])]]
def gcsv(r):
    n = r.randint(1, 5); return L(*([n] + ['%s,%d,%s' % (r.choice(['Asha', 'Ravi', 'Mina', 'Dev']), r.randint(0, 100), r.choice(['A', 'B'])) for _ in range(n)]))
def sk(s):
    st = []; o = []
    for c in W(s)[1:1 + int(W(s)[0])]:
        p = c.split()
        if p[0] == 'push': st.append(int(p[1]))
        elif p[0] == 'pop': o.append(str(st.pop()) if st else 'EMPTY')
        elif p[0] == 'peek': o.append(str(st[-1]) if st else 'EMPTY')
        else: o.append(str(len(st)))
    return '\n'.join(o)
def gsk(r): n = r.randint(1, 10); return L(*([n] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'peek', 'size']) for _ in range(n)]))
def stk_empty(s):
    st = []
    for c in W(s)[1:]:
        if c.startswith('push'): st.append(1)
        elif st: st.pop()
    return 'NOT EMPTY' if st else 'EMPTY'
def skf(s):
    st = []
    for c in W(s)[1:]:
        if c.startswith('push'): st.append(int(c.split()[1]))
        elif st: st.pop()
    return st
def bal(s):
    st = []; m = {')': '(', ']': '[', '}': '{'}
    for c in s.strip():
        if c in '([{': st.append(c)
        elif not st or st.pop() != m[c]: return 'NO'
    return 'NO' if st else 'YES'
def pf(s):
    st = []
    for t in s.split():
        if t in '+-*/': b = st.pop(); a = st.pop(); st.append(a + b if t == '+' else a - b if t == '-' else a * b if t == '*' else a // b)
        else: st.append(int(t))
    return st[0]
def undo(s):
    st = []
    for c in W(s)[1:]:
        if c.startswith('type'): st.append(c.split()[1])
        elif st: st.pop()
    return st
def rad(a):
    st = []
    for c in a:
        if st and st[-1] == c: st.pop()
        else: st.append(c)
    return ''.join(st)
def mnstk(s):
    st = []; o = []
    for c in W(s)[1:]:
        if c.startswith('push'): st.append(int(c.split()[1]))
        elif c == 'pop':
            if st: st.pop()
        else: o.append(str(min(st)) if st else 'EMPTY')
    return '\n'.join(o)
def itp(e):
    pr = {'+': 1, '-': 1, '*': 2, '/': 2}; o = []; st = []
    for c in e:
        if c.isdigit(): o.append(c)
        elif c == '(': st.append(c)
        elif c == ')':
            while st[-1] != '(': o.append(st.pop())
            st.pop()
        else:
            while st and st[-1] != '(' and pr[st[-1]] >= pr[c]: o.append(st.pop())
            st.append(c)
    while st: o.append(st.pop())
    return ''.join(o)
def lvp(a):
    best = 0; st = [-1]
    for i, c in enumerate(a):
        if c == '(': st.append(i)
        else:
            st.pop()
            if not st: st.append(i)
            else: best = max(best, i - st[-1])
    return best
def qu(s):
    q = deque(); o = []
    for c in W(s)[1:1 + int(W(s)[0])]:
        p = c.split()
        if p[0] == 'enq': q.append(int(p[1]))
        elif p[0] == 'deq': o.append(str(q.popleft()) if q else 'EMPTY')
        elif p[0] == 'front': o.append(str(q[0]) if q else 'EMPTY')
        else: o.append(str(len(q)))
    return '\n'.join(o)
def gq(r): n = r.randint(1, 10); return L(*([n] + [r.choice(['enq %d' % r.randint(1, 9), 'deq', 'front', 'size']) for _ in range(n)]))
def qlen(s):
    q = deque()
    for c in W(s)[1:]:
        if c.startswith('enq'): q.append(1)
        elif q: q.popleft()
    return q
def bq(s):
    l = W(s); c = int(l[0]); q = deque(); o = []
    for x in l[2:2 + int(l[1])]:
        if x.startswith('enq'):
            if len(q) == c: o.append('OVERFLOW')
            else: q.append(int(x.split()[1]))
        else: o.append(str(q.popleft()) if q else 'UNDERFLOW')
    return '\n'.join(o)
def josep(n, k):
    q = deque(range(1, n + 1))
    while len(q) > 1: q.rotate(-(k - 1)); q.popleft()
    return q[0]
def rr(s):
    t = iv(s); n, q = t[0], t[1]; times = t[2:2 + n]; dq = deque(range(n)); rem = times[:]; o = []
    while dq:
        i = dq.popleft(); rem[i] -= q
        if rem[i] > 0: dq.append(i)
        else: o.append(i + 1)
    return J(o)
def tick(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; p = t[-1]
    return sum(min(x, a[p] if i <= p else a[p] - 1) for i, x in enumerate(a))
def cqs(s):
    l = W(s); c = int(l[0]); q = deque(); o = []
    for x in l[2:2 + int(l[1])]:
        if x.startswith('enq'):
            if len(q) == c: o.append('FULL')
            else: q.append(int(x.split()[1]))
        else: o.append(str(q.popleft()) if q else 'EMPTY')
    o.append(J(q) or 'EMPTY'); return '\n'.join(o)
def sk2(s):
    st = []; o = []
    for c in W(s)[1:]:
        if c.startswith('push'): st.append(int(c.split()[1]))
        else: o.append(str(st.pop()) if st else 'EMPTY')
    return '\n'.join(o)
def nrs(a):
    q = deque(); cnt = {}; o = ''
    for c in a:
        cnt[c] = cnt.get(c, 0) + 1; q.append(c)
        while q and cnt[q[0]] > 1: q.popleft()
        o += q[0] if q else '#'
    return o
def hot(s):
    l = W(s); q = deque(l[0].split()); k = int(l[1])
    while len(q) > 1: q.rotate(-k); q.pop()
    return q[0]

def bsw(a):
    a = a[:]; c = 0
    for i in range(len(a)):
        for j in range(len(a) - 1 - i):
            if a[j] > a[j + 1]: a[j], a[j + 1] = a[j + 1], a[j]; c += 1
    return c
def ssw(a):
    a = a[:]; c = 0
    for i in range(len(a)):
        m = min(range(i, len(a)), key=lambda k: (a[k], k))
        if m != i: a[i], a[m] = a[m], a[i]; c += 1
    return c
def isft(a):
    a = a[:]; c = 0
    for i in range(1, len(a)):
        k = a[i]; j = i - 1
        while j >= 0 and a[j] > k: a[j + 1] = a[j]; j -= 1; c += 1
        a[j + 1] = k
    return c
def bsteps(s):
    t = iv(s); a = t[1:1 + t[0]]; k = t[-1]; lo, hi = 0, len(a) - 1; c = 0
    while lo <= hi:
        m = (lo + hi) // 2; c += 1
        if a[m] == k: break
        if a[m] < k: lo = m + 1
        else: hi = m - 1
    return c

topic('files12', 'Text File Processing', 'Reading lines and words from a file (the file content arrives as input lines)')
G = lambda: (lambda r: L2(r.randint(1, 5))(r))
GN = lambda r: L2(r.randint(1, 5))(r)
Q('Easy', 'Count Lines', 'The first line N is the number of lines in the file text that follows. Print N. | Input: N, then N lines. | Output: N.', lambda s: len(F(s)), [L(2, 'hello', 'world')], GN)
Q('Easy', 'Count Words in File', 'Print the total number of words in the N lines. | Input: N, then N lines. | Output: the count.', lambda s: sum(len(l.split()) for l in F(s)), [L(2, 'a b c', 'd e')], GN)
Q('Easy', 'Count Characters', 'Print the total number of characters in the N lines (not counting newlines). | Input: N, then N lines. | Output: the count.', lambda s: sum(len(l) for l in F(s)), [L(2, 'ab', 'cde')], GN)
Q('Easy', 'First Line', 'Print the first line of the file. | Input: N, then N lines. | Output: the first line.', lambda s: F(s)[0], [L(2, 'hello', 'world')], GN)
Q('Easy', 'Last Line', 'Print the last line. | Input: N, then N lines. | Output: the last line.', lambda s: F(s)[-1], [L(2, 'hello', 'world')], GN)
Q('Easy', 'Lines Starting With T', 'Count the lines that start with the letter t (lowercase). | Input: N, then N lines. | Output: the count.', lambda s: sum(1 for l in F(s) if l.startswith('t')), [L(2, 'the cat', 'a dog')], GN)
Q('Easy', 'Longest Line Length', 'Print the length of the longest line. | Input: N, then N lines. | Output: the length.', lambda s: max(len(l) for l in F(s)), [L(2, 'ab', 'cde')], GN)
Q('Medium', 'Count Vowels in File', 'Count vowels (a e i o u, any case) in all lines. | Input: N, then N lines. | Output: the count.', lambda s: sum(c in 'aeiouAEIOU' for l in F(s) for c in l), [L(1, 'Education')], GN)
Q('Medium', 'Lines Containing a Word', 'The last input line is a word W. Count the lines that contain W as a whole word. | Input: N, N lines, then W. | Output: the count.', lambda s: (lambda l: sum(1 for x in l[1:1 + int(l[0])] if l[-1] in x.split()))(W(s)), [L(2, 'the cat', 'a dog', 'cat')], lambda r: L(*([3] + [' '.join(r.choice(['the', 'cat', 'dog']) for _ in range(r.randint(1, 3))) for _ in range(3)] + [r.choice(['cat', 'dog', 'bird'])])))
Q('Medium', 'Word Frequency In File', 'Print every distinct word (lowercased) with its count, sorted alphabetically, as "word count". | Input: N, then N lines. | Output: the lines.', lambda s: '\n'.join('%s %d' % kv for kv in sorted(Counter(w.lower() for l in F(s) for w in l.split()).items())), [L(2, 'The cat', 'the Dog')], GN)
Q('Medium', 'Uppercase Lines', 'Print the file with every line in uppercase. | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join(l.upper() for l in F(s)), [L(1, 'hello')], GN)
Q('Medium', 'Number the Lines', 'Print each line prefixed with its number and a dot: "1. text". | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join('%d. %s' % (i + 1, l) for i, l in enumerate(F(s))), [L(2, 'a', 'b')], GN)
Q('Medium', 'Longest Word In File', 'Print the longest word in the whole file (first on a tie). | Input: N, then N lines. | Output: the word.', lambda s: max((w for l in F(s) for w in l.split()), key=len), [L(1, 'a bbb cc')], GN)
Q('Medium', 'Reverse Lines Order', 'Print the lines in reverse order. | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join(F(s)[::-1]), [L(2, 'a', 'b')], GN)
Q('Medium', 'Remove Blank Words', 'Print every line with extra spaces collapsed to single spaces. | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join(' '.join(l.split()) for l in F(s)), [L(1, 'a   b  c')], lambda r: L(*([2] + [(' ' * r.randint(1, 3)).join(r.choice(['a', 'bb', 'c']) for _ in range(r.randint(1, 4))) for _ in range(2)])))
Q('Hard', 'Find and Replace', 'Replace every occurrence of word X by Y in every line (whole words). The last two lines hold X and Y. | Input: N, N lines, X, Y. | Output: N lines.', lambda s: (lambda l: '\n'.join(' '.join(l[-1] if w == l[-2] else w for w in x.split()) for x in l[1:1 + int(l[0])]))(W(s)), [L(2, 'the cat', 'a cat', 'cat', 'dog')], lambda r: L(*([2] + [' '.join(r.choice(['the', 'cat', 'dog']) for _ in range(r.randint(1, 3))) for _ in range(2)] + ['cat', 'bird'])))
Q('Hard', 'Palindromic Words', 'Count the palindromic words (length >= 2) in the file. | Input: N, then N lines. | Output: the count.', lambda s: sum(1 for l in F(s) for w in l.split() if len(w) > 1 and w == w[::-1]), [L(1, 'level noon cat')], lambda r: L(*([2] + [' '.join(r.choice(['aa', 'abc', 'aba', 'c', 'noon']) for _ in range(r.randint(1, 4))) for _ in range(2)])))
Q('Hard', 'Average Word Length', 'Print the average length of all words with two decimals. | Input: N, then N lines. | Output: the average.', lambda s: '%.2f' % (lambda w: sum(map(len, w)) / len(w))([w for l in F(s) for w in l.split()]), [L(1, 'ab cdef')], GN)
Q('Hard', 'Lines Sorted By Length', 'Print the lines sorted by length, shortest first (stable for equal lengths). | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join(sorted(F(s), key=len)), [L(3, 'ccc', 'a', 'bb')], GN)
Q('Hard', 'Count Sentences', 'Count the sentences, where each sentence ends with . ! or ? (count these symbols). | Input: N, then N lines. | Output: the count.', lambda s: sum(c in '.!?' for l in F(s) for c in l), [L(2, 'Hi. How are you?', 'Fine!')], lambda r: L(*([2] + [''.join(r.choice(['ab', ' ', '.', '!', 'c?']) for _ in range(r.randint(1, 6))) for _ in range(2)])))

topic('csv12', 'CSV-style Data', 'Rows of comma separated values: parsing, filtering and totals')
Q('Easy', 'Count Records', 'Print how many records (lines) there are. | Input: N, then N lines "name,mark,section". | Output: N.', lambda s: len(CS(s)), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Print Names', 'Print the first column of every record. | Input: N records. | Output: N names.', lambda s: '\n'.join(r[0] for r in CS(s)), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Total Marks', 'Print the sum of the marks column. | Input: N records. | Output: the sum.', lambda s: sum(int(r[1]) for r in CS(s)), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Highest Mark', 'Print the highest mark. | Input: N records. | Output: the mark.', lambda s: max(int(r[1]) for r in CS(s)), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Section A Count', 'Count the records whose section is A. | Input: N records. | Output: the count.', lambda s: sum(1 for r in CS(s) if r[2] == 'A'), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Average Mark', 'Print the average mark with two decimals. | Input: N records. | Output: the average.', lambda s: '%.2f' % (sum(int(r[1]) for r in CS(s)) / len(CS(s))), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Easy', 'Passed Students', 'Print the names of records with mark 33 or more, in input order, or NONE. | Input: N records. | Output: the names.', lambda s: J(r[0] for r in CS(s) if int(r[1]) >= 33) or 'NONE', [L(2, 'Asha,90,A', 'Ravi,20,B')], gcsv)
Q('Medium', 'Topper', 'Print the name of the student with the highest mark (first on a tie). | Input: N records. | Output: the name.', lambda s: max(CS(s), key=lambda r: int(r[1]))[0], [L(2, 'Asha,90,A', 'Ravi,95,B')], gcsv)
Q('Medium', 'Section Totals', 'Print "A total" and "B total" lines with the sum of marks for each section (0 when empty). | Input: N records. | Output: two lines.', lambda s: 'A %d\nB %d' % (sum(int(r[1]) for r in CS(s) if r[2] == 'A'), sum(int(r[1]) for r in CS(s) if r[2] == 'B')), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Medium', 'Sort By Mark', 'Print the records sorted by mark, highest first (ties keep input order), as "name mark". | Input: N records. | Output: N lines.', lambda s: '\n'.join('%s %s' % (r[0], r[1]) for r in sorted(CS(s), key=lambda r: -int(r[1]))), [L(2, 'Asha,70,A', 'Ravi,95,B')], gcsv)
Q('Medium', 'Rank List', 'Print "rank name" where rank 1 is the highest mark; students with equal marks share a rank (competition ranking: 1 1 3). | Input: N records. | Output: N lines in descending mark order (input order for ties).', lambda s: (lambda rows: '\n'.join('%d %s' % (1 + sum(1 for x in rows if int(x[1]) > int(r[1])), r[0]) for r in sorted(rows, key=lambda r: -int(r[1]))))(CS(s)), [L(3, 'A,90,A', 'B,90,A', 'C,70,B')], gcsv)
Q('Medium', 'Add Grace Marks', 'Add 5 grace marks to every mark below 33, capped at 33. Print "name mark" for all. | Input: N records. | Output: N lines.', lambda s: '\n'.join('%s %d' % (r[0], min(33, int(r[1]) + 5) if int(r[1]) < 33 else int(r[1])) for r in CS(s)), [L(1, 'Asha,30,A')], gcsv)
Q('Medium', 'Column Swap', 'Print each record with the mark and section swapped: name,section,mark. | Input: N records. | Output: N lines.', lambda s: '\n'.join('%s,%s,%s' % (r[0], r[2], r[1]) for r in CS(s)), [L(1, 'Asha,90,A')], gcsv)
Q('Medium', 'Name Search', 'The last line is a name. Print its mark, or NOT FOUND. | Input: N, N records, then a name. | Output: the mark or NOT FOUND.', lambda s: (lambda l: next((r.split(',')[1] for r in l[1:1 + int(l[0])] if r.split(',')[0] == l[-1]), 'NOT FOUND'))(W(s)), [L(2, 'Asha,90,A', 'Ravi,70,B', 'Ravi')], lambda r: gcsv(r).rstrip('\n') + '\n' + r.choice(['Asha', 'Dev', 'Zed']) + '\n')
Q('Hard', 'Median Mark', 'Print the median mark (for an even count the average of the two middle marks with one decimal; for odd print the mark with one decimal). | Input: N records. | Output: the median.', lambda s: (lambda m: '%.1f' % (m[len(m) // 2] if len(m) % 2 else (m[len(m) // 2 - 1] + m[len(m) // 2]) / 2))(sorted(int(r[1]) for r in CS(s))), [L(3, 'a,10,A', 'b,40,A', 'c,20,B')], gcsv)
Q('Hard', 'Group Averages', 'Print "A avg" and "B avg" with two decimals (0.00 for an empty section). | Input: N records. | Output: two lines.', lambda s: '\n'.join('%s %.2f' % (g, (lambda m: sum(m) / len(m) if m else 0)([int(r[1]) for r in CS(s) if r[2] == g])) for g in 'AB'), [L(2, 'Asha,90,A', 'Ravi,70,B')], gcsv)
Q('Hard', 'Detect Bad Rows', 'A row is BAD if it does not have exactly 3 fields or its mark is not an integer. Print the 1-based numbers of the bad rows, or NONE. | Input: N, then N lines. | Output: the row numbers.', lambda s: J(i + 1 for i, l in enumerate(W(s)[1:1 + int(W(s)[0])]) if len(l.split(',')) != 3 or not l.split(',')[1].lstrip('-').isdigit()) or 'NONE', [L(3, 'a,1,A', 'b,x,A', 'c,3')], lambda r: L(*([4] + [r.choice(['a,1,A', 'b,x,B', 'c,3', 'd,40,A,9']) for _ in range(4)])))
Q('Hard', 'Mark Distribution', 'Print how many marks fall in 0-39, 40-59, 60-79, 80-100 as four numbers. | Input: N records. | Output: four counts.', lambda s: (lambda m: J([sum(x < 40 for x in m), sum(40 <= x < 60 for x in m), sum(60 <= x < 80 for x in m), sum(x >= 80 for x in m)]))([int(r[1]) for r in CS(s)]), [L(3, 'a,10,A', 'b,50,A', 'c,95,B')], gcsv)
Q('Hard', 'Longest Name', 'Print the longest name (first on a tie) and its length as "name length". | Input: N records. | Output: the pair.', lambda s: (lambda r: '%s %d' % (r[0], len(r[0])))(max(CS(s), key=lambda r: len(r[0]))), [L(2, 'Asha,90,A', 'Mina,70,B')], gcsv)
Q('Hard', 'Top Two In Each Section', 'Print up to the top two marks of section A then section B as "section mark" lines in descending order of mark inside each section. | Input: N records. | Output: lines.', lambda s: '\n'.join('%s %d' % (g, m) for g in 'AB' for m in sorted((int(r[1]) for r in CS(s) if r[2] == g), reverse=True)[:2]) or 'NONE', [L(3, 'a,10,A', 'b,50,A', 'c,95,B')], gcsv)

topic('stack12', 'Stack (Data Structure)', 'LIFO operations and classic stack programs')
Q('Easy', 'Stack Commands', 'Commands push X, pop, peek and size. pop and peek print the value or EMPTY; size prints the count. | Input: N, then N commands. | Output: one line per pop, peek or size.', sk, [L(4, 'push 5', 'push 7', 'pop', 'size')], gsk)
Q('Easy', 'Reverse a String With a Stack', 'Reverse the word using a stack. | Input: a word. | Output: reversed.', lambda s: s.strip()[::-1], [L('stack')], S)
Q('Easy', 'Is Stack Empty', 'After the commands print EMPTY or NOT EMPTY. | Input: N commands push X or pop. | Output: the word.', lambda s: (lambda st: ([st.pop() if st and c == 'pop' else st.append(1) for c in [x.split()[0] for x in W(s)[1:]] if True] and 'EMPTY' if not st else 'NOT EMPTY') if False else stk_empty(s))([]), [L(3, 'push 1', 'push 2', 'pop')], lambda r: L(*([4] + [r.choice(['push 1', 'pop']) for _ in range(4)])))
Q('Easy', 'Top After Pushes', 'Push all numbers, then print the top. | Input: N, then N integers. | Output: the last pushed.', lambda s: arrs(s)[-1], [L(3, '4 5 6')], LA)
Q('Easy', 'Pop All', 'Push the numbers in order, then pop them all, printing each. | Input: N, then N integers. | Output: the numbers in reverse order.', lambda s: J(arrs(s)[::-1]), [L(3, '4 5 6')], LA)
Q('Easy', 'Stack Size After Operations', 'Print the final size after N commands push X or pop (popping an empty stack does nothing). | Input: N, then N commands. | Output: the size.', lambda s: (lambda st: len(st))(skf(s)), [L(3, 'push 1', 'pop', 'pop')], lambda r: L(*([5] + [r.choice(['push 1', 'pop']) for _ in range(5)])))
Q('Easy', 'Decimal To Binary Using Stack', 'Convert N to binary using a stack of remainders. | Input: N. | Output: the binary number.', lambda s: bin(int(s))[2:], [L(10)], num(0, 500))
Q('Medium', 'Balanced Brackets', 'Print YES if the brackets ( ) [ ] { } are balanced, else NO. | Input: a string of brackets. | Output: YES or NO.', lambda s: bal(s), [L('{[()]}'), L('(]')], lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(1, 8)))))
Q('Medium', 'Postfix Evaluation', 'Evaluate a postfix expression of integers with + - * and integer division /. | Input: tokens separated by spaces. | Output: the value.', lambda s: pf(s), [L('2 3 4 * +')], lambda r: L(' '.join((lambda t: t)([str(r.randint(1, 9))] + sum([[str(r.randint(1, 9)), r.choice('+-*')] for _ in range(r.randint(0, 3))], [])))))
Q('Medium', 'Next Greater Element', 'For each element print the next greater element to its right or -1. | Input: N, then N integers. | Output: N values.', lambda s: J((lambda a: [next((y for y in a[i + 1:] if y > x), -1) for i, x in enumerate(a)])(arrs(s))), [L(4, '4 5 2 25')], LA)
Q('Medium', 'Undo Editor', 'Commands: type X (append word), undo (remove last typed word). After all commands print the text, or EMPTY. | Input: N, then N commands. | Output: the final text.', lambda s: (lambda st: J(st) or 'EMPTY')(undo(s)), [L(3, 'type hi', 'type there', 'undo')], lambda r: L(*([5] + [r.choice(['type a', 'type b', 'undo']) for _ in range(5)])))
Q('Medium', 'Reverse Words With a Stack', 'Reverse the order of words. | Input: a line. | Output: the new line.', lambda s: J(s.split()[::-1]), [L('learn code daily')], WD)
Q('Medium', 'Remove Adjacent Duplicates', 'Repeatedly remove equal adjacent letters; print the rest or EMPTY. | Input: a word. | Output: the result.', lambda s: rad(s.strip()) or 'EMPTY', [L('abbaca')], st(1, 10, 'ab'))
Q('Medium', 'Min Stack', 'Commands push X, pop, min (print the smallest on the stack or EMPTY). | Input: N, then N commands. | Output: one line per min.', lambda s: mnstk(s), [L(4, 'push 5', 'push 2', 'min', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'min']) for _ in range(6)])))
Q('Hard', 'Infix To Postfix', 'Convert an infix expression with single-digit numbers, + - * / and parentheses to postfix (no spaces). | Input: the expression. | Output: the postfix string.', lambda s: itp(s.strip()), [L('2+3*4'), L('(1+2)*3')], lambda r: L(r.choice(['2+3*4', '(1+2)*3', '8/4-2', '1+2+3', '(4+5)*(2-1)', '9-3*2+1'])))
Q('Hard', 'Daily Temperatures', 'For each day print how many days to wait for a warmer temperature, or 0. | Input: N, then N temperatures. | Output: N values.', lambda s: J((lambda a: [next((j - i for j in range(i + 1, len(a)) if a[j] > a[i]), 0) for i in range(len(a))])(arrs(s))), [L(5, '73 74 75 71 76')], ar(30, 40, 1, 10))
Q('Hard', 'Largest Rectangle In Histogram', 'Print the area of the largest rectangle in the histogram. | Input: N, then N heights. | Output: the area.', lambda s: max(min(arrs(s)[i:j + 1]) * (j - i + 1) for i in range(len(arrs(s))) for j in range(i, len(arrs(s)))), [L(6, '2 1 5 6 2 3')], ar(0, 8, 1, 10))
Q('Hard', 'Longest Valid Parentheses', 'Print the length of the longest valid substring of ( and ). | Input: a string of ( and ). | Output: the length.', lambda s: lvp(s.strip()), [L('(()'), L(')()())')], lambda r: L(''.join(r.choice('()') for _ in range(r.randint(1, 12)))))
Q('Hard', 'Sort a Stack', 'Sort the numbers using only stack operations (the result is the numbers in ascending order from top to bottom). Print them from top to bottom. | Input: N, then N integers in push order. | Output: sorted values, smallest first.', lambda s: J(sorted(arrs(s))), [L(4, '3 1 4 2')], LA)
Q('Hard', 'Stock Span', 'For each day print the span: consecutive days before and including it with price <= its price. | Input: N, then N prices. | Output: N spans.', lambda s: J((lambda a: [sum(1 for _ in __import__('itertools').takewhile(lambda j: a[j] <= a[i], range(i, -1, -1))) for i in range(len(a))])(arrs(s))), [L(7, '100 80 60 70 60 75 85')], ar(1, 20, 1, 10))

topic('queue12', 'Queue (Data Structure)', 'FIFO operations, circular queues and classic queue programs')
Q('Easy', 'Queue Commands', 'Commands enq X, deq, front and size. deq and front print the value or EMPTY; size prints the count. | Input: N, then N commands. | Output: one line per deq, front or size.', qu, [L(4, 'enq 5', 'enq 7', 'deq', 'front')], gq)
Q('Easy', 'First In First Out', 'Enqueue the numbers in order and print them as they are dequeued. | Input: N, then N integers. | Output: the same order.', lambda s: J(arrs(s)), [L(3, '4 5 6')], LA)
Q('Easy', 'Queue Length', 'Print the queue length after N commands enq X or deq (deq on empty does nothing). | Input: N, then N commands. | Output: the length.', lambda s: len(qlen(s)), [L(3, 'enq 1', 'deq', 'deq')], lambda r: L(*([5] + [r.choice(['enq 1', 'deq']) for _ in range(5)])))
Q('Easy', 'Front and Rear', 'Enqueue the numbers; print the front and the rear as "front rear". | Input: N, then N integers. | Output: front rear.', lambda s: '%d %d' % (arrs(s)[0], arrs(s)[-1]), [L(3, '4 5 6')], LA)
Q('Easy', 'Dequeue K Items', 'Enqueue the numbers, dequeue K of them and print what remains (or EMPTY). | Input: N, the numbers, then K (K<=N). | Output: the remaining queue.', lambda s: (lambda t: J(t[1:1 + t[0]][t[-1]:]) or 'EMPTY')(iv(s)), [L(4, '1 2 3 4', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(0, n)))(r.randint(1, 8)))
Q('Easy', 'Customer Service Order', 'Customers named in the line arrive in order and are served in the same order. Print them one per line. | Input: a line of names. | Output: the names in serving order.', lambda s: '\n'.join(s.split()), [L('Asha Ravi Mina')], WD)
Q('Easy', 'Is Queue Full', 'A queue holds at most C items. Print FULL if after N enqueues (no dequeues) it is full, else NOT FULL. | Input: C then N. | Output: FULL or NOT FULL.', lambda s: 'FULL' if iv(s)[1] >= iv(s)[0] else 'NOT FULL', [L(5, 5)], two(1, 8))
Q('Medium', 'Bounded Queue', 'Capacity C. enq X when full prints OVERFLOW; deq on empty prints UNDERFLOW; deq prints the value. | Input: C, N, then N commands. | Output: one line per overflow, underflow or deq.', lambda s: bq(s), [L(2, 4, 'enq 1', 'enq 2', 'enq 3', 'deq')], lambda r: L(*([r.randint(1, 3), 6] + [r.choice(['enq %d' % r.randint(1, 9), 'deq']) for _ in range(6)])))
Q('Medium', 'Josephus', 'N people in a circle, every K-th is removed. Print the survivor (1-based). | Input: N then K. | Output: the survivor.', lambda s: josep(*iv(s)), [L(7, 3)], lambda r: L(r.randint(1, 20), r.randint(1, 7)))
Q('Medium', 'Reverse First K', 'Reverse the first K elements of the queue and print it. | Input: N, the elements, then K (K<=N). | Output: the new queue.', lambda s: (lambda t: J(t[1:1 + t[0]][:t[-1]][::-1] + t[1:1 + t[0]][t[-1]:]))(iv(s)), [L(5, '1 2 3 4 5', 3)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(0, n)))(r.randint(1, 8)))
Q('Medium', 'Interleave Halves', 'N is even. Interleave the first half and second half of the queue: first[0], second[0], first[1], ... Print it. | Input: N (even), then N integers. | Output: the interleaved queue.', lambda s: (lambda a: J([x for p in zip(a[:len(a) // 2], a[len(a) // 2:]) for x in p]))(arrs(s)), [L(4, '1 2 3 4')], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)])))(2 * r.randint(1, 5)))
Q('Medium', 'Generate Binary Numbers', 'Print the first N binary numbers (1, 10, 11, ...) using a queue. | Input: N. | Output: N numbers on one line.', lambda s: J(bin(i)[2:] for i in range(1, int(s) + 1)), [L(5)], num(1, 20))
Q('Medium', 'Round Robin', 'Process times are given; each turn runs for at most Q units. Print the order in which processes finish (1-based). | Input: N and Q, then N times. | Output: finishing order.', lambda s: rr(s), [L('3 2', '5 2 3')], lambda r: (lambda n: L('%d %d' % (n, r.randint(1, 4))) + L(J([r.randint(1, 8) for _ in range(n)])))(r.randint(1, 5)))
Q('Medium', 'Ticket Counter', 'People with ticket counts buy one ticket per turn and re-join the queue if they need more. Print how many turns pass until person P (0-based) finishes. | Input: N, the counts, then P. | Output: the turns.', lambda s: tick(s), [L(3, '2 3 2', 2)], lambda r: (lambda n: L(n, J([r.randint(1, 5) for _ in range(n)]), r.randint(0, n - 1)))(r.randint(1, 5)))
Q('Medium', 'Sum of Sliding Window', 'Print the sum of every window of K consecutive items using a queue. | Input: N, the items, then K. | Output: the window sums.', lambda s: (lambda t: J(sum(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(5, '1 2 3 4 5', 3)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Hard', 'Circular Queue Simulation', 'Capacity C. enq X when full prints FULL. deq prints value or EMPTY. After all commands print the queue from front to rear on one line (or EMPTY). | Input: C, N, then N commands. | Output: messages then the final queue.', lambda s: cqs(s), [L(2, 3, 'enq 1', 'enq 2', 'enq 3')], lambda r: L(*([r.randint(1, 4), 7] + [r.choice(['enq %d' % r.randint(1, 9), 'deq']) for _ in range(7)])))
Q('Hard', 'Priority Queue Order', 'Items are "name priority"; lower number = served first; equal priority keep arrival order. Print the names in service order. | Input: N, then N lines. | Output: names, one per line.', lambda s: '\n'.join(x[0] for x in sorted([l.split() for l in W(s)[1:]], key=lambda p: int(p[1]))), [L(3, 'a 2', 'b 1', 'c 2')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(1, 3)) for c in 'abcd'])))
Q('Hard', 'Stack Using Two Queues', 'Simulate a stack with push X and pop commands; print the popped value or EMPTY. | Input: N, then N commands. | Output: one line per pop.', lambda s: sk2(s), [L(4, 'push 1', 'push 2', 'pop', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop']) for _ in range(6)])))
Q('Hard', 'First Non-Repeating In Stream', 'After each letter of the stream print the first non-repeating letter so far, or # if none. | Input: a lowercase string. | Output: the sequence without spaces.', lambda s: nrs(s.strip()), [L('aabc')], st(1, 10, 'abc'))
Q('Hard', 'Hot Potato', 'Names in a circle; pass the potato K times then remove that player; repeat. Print the last player. | Input: a line of names, then K. | Output: the winner.', lambda s: hot(s), [L('A B C D E', 3)], lambda r: L(' '.join(r.sample(['A', 'B', 'C', 'D', 'E', 'F', 'G'], r.randint(1, 7))), r.randint(1, 6)))
topic('sortsearch12', 'Searching and Sorting', 'Linear search, binary search, bubble, selection and insertion sort')
Q('Easy', 'Linear Search', 'Print the index of K or -1. | Input: N, the list, then K. | Output: the index.', lambda s: (lambda t: t[1:1 + t[0]].index(t[-1]) if t[-1] in t[1:1 + t[0]] else -1)(iv(s)), [L(4, '4 8 6 2', 6)], arq(0, 9, 1, 8, 0, 9))
Q('Easy', 'Binary Search', 'The list is sorted. Print the index of K or -1. | Input: N, sorted list, K. | Output: the index.', lambda s: (lambda t: t[1:1 + t[0]].index(t[-1]) if t[-1] in t[1:1 + t[0]] else -1)(iv(s)), [L(5, '1 3 5 7 9', 7)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 25)))(sorted(r.sample(range(0, 25), r.randint(1, 8)))))
Q('Easy', 'Bubble Sort', 'Sort ascending with bubble sort and print. | Input: N, then N integers. | Output: the sorted list.', lambda s: J(sorted(arrs(s))), [L(4, '4 2 9 1')], LA)
Q('Easy', 'Selection Sort', 'Sort ascending with selection sort and print. | Input: N, then N integers. | Output: the sorted list.', lambda s: J(sorted(arrs(s))), [L(4, '4 2 9 1')], LA)
Q('Easy', 'Insertion Sort', 'Sort ascending with insertion sort and print. | Input: N, then N integers. | Output: the sorted list.', lambda s: J(sorted(arrs(s))), [L(4, '4 2 9 1')], LA)
Q('Easy', 'Count Comparisons Linear', 'Print the number of comparisons linear search makes to find K (or N if absent). | Input: N, the list, then K. | Output: the comparisons.', lambda s: (lambda t: (t[1:1 + t[0]].index(t[-1]) + 1) if t[-1] in t[1:1 + t[0]] else t[0])(iv(s)), [L(4, '4 8 6 2', 6)], arq(0, 9, 1, 8, 0, 9))
Q('Easy', 'Sort Descending', 'Sort in descending order and print. | Input: N, then N integers. | Output: the sorted list.', lambda s: J(sorted(arrs(s), reverse=True)), [L(4, '4 2 9 1')], LA)
Q('Medium', 'Bubble Sort Swap Count', 'Print the number of swaps standard bubble sort makes. | Input: N, then N integers. | Output: the swaps.', lambda s: bsw(arrs(s)), [L(4, '3 2 1 4')], LA)
Q('Medium', 'Selection Sort Swap Count', 'Print the swaps selection sort makes (a swap happens only when the minimum is not already in place; pick the first minimum). | Input: N, then N integers. | Output: the swaps.', lambda s: ssw(arrs(s)), [L(4, '3 2 1 4')], LA)
Q('Medium', 'Insertion Sort Shifts', 'Print how many element shifts insertion sort performs. | Input: N, then N integers. | Output: the shifts.', lambda s: isft(arrs(s)), [L(4, '3 2 1 4')], LA)
Q('Medium', 'Binary Search Steps', 'Print how many mid-points binary search inspects to find K or conclude it is missing (low=0, high=N-1, mid=(low+high)//2). | Input: N, sorted list, K. | Output: the steps.', lambda s: bsteps(s), [L(5, '1 3 5 7 9', 7)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 25)))(sorted(r.sample(range(0, 25), r.randint(1, 9)))))
Q('Medium', 'Second Smallest', 'Print the second smallest distinct value or NONE. | Input: N, then N integers. | Output: the value.', lambda s: sorted(set(arrs(s)))[1] if len(set(arrs(s))) > 1 else 'NONE', [L(4, '4 2 9 2')], ar(0, 5, 1, 8))
Q('Medium', 'Sort Names', 'Sort the names alphabetically (case-insensitive, stable). | Input: a line of names. | Output: the sorted names.', lambda s: J(sorted(s.split(), key=str.lower)), [L('ravi Asha mina')], wds(1, 6, 'abcABC', (1, 4)))
Q('Medium', 'Sort By Length', 'Sort words by length, shortest first (stable). | Input: a line of words. | Output: sorted words.', lambda s: J(sorted(s.split(), key=len)), [L('ccc a bb')], wds(1, 6, 'abc', (1, 5)))
Q('Medium', 'Merge Two Sorted Lists', 'Merge two sorted lists into one sorted list. | Input: two lines, each "N values". | Output: the merged list.', lambda s: J(sorted(sum((list(map(int, l.split()))[1:] for l in W(s)), []))), [L('3 1 4 9', '2 2 5')], lambda r: L(*[J([k] + sorted(r.randint(0, 20) for _ in range(k))) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Hard', 'Rank Of Each Element', 'Print the rank of each element (1 = smallest, equal values share the smaller rank). | Input: N, then N integers. | Output: N ranks.', lambda s: J((lambda a: [1 + sum(1 for y in a if y < x) for x in a])(arrs(s))), [L(4, '30 10 20 10')], ar(0, 9, 1, 9))
Q('Hard', 'Count Inversions', 'Count pairs i<j with a[i] > a[j]. | Input: N, then N integers. | Output: the count.', lambda s: (lambda a: sum(1 for i in range(len(a)) for j in range(i + 1, len(a)) if a[i] > a[j]))(arrs(s)), [L(5, '2 4 1 3 5')], LA)
Q('Hard', 'Search Rotated Sorted List', 'A sorted list of distinct values was rotated. Print the index of K or -1. | Input: N, the list, K. | Output: the index.', lambda s: (lambda t: t[1:1 + t[0]].index(t[-1]) if t[-1] in t[1:1 + t[0]] else -1)(iv(s)), [L(6, '4 5 6 7 0 1', 0)], lambda r: (lambda a, k: L(len(a), J(a[k % len(a):] + a[:k % len(a)]), r.randint(0, 25)))(sorted(r.sample(range(0, 25), r.randint(1, 8))), r.randint(0, 6)))
Q('Hard', 'Count Occurrences In Sorted', 'Count how many times K occurs in the sorted list. | Input: N, sorted list, K. | Output: the count.', lambda s: (lambda t: t[1:1 + t[0]].count(t[-1]))(iv(s)), [L(6, '1 2 2 2 3 5', 2)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 6)))(sorted(r.randint(0, 5) for _ in range(r.randint(1, 9)))))
Q('Hard', 'Kth Largest', 'Print the K-th largest value (1 is the largest). | Input: N, the list, K. | Output: the value.', lambda s: sorted(iv(s)[1:1 + iv(s)[0]], reverse=True)[iv(s)[-1] - 1], [L(5, '3 2 1 5 6', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Hard', 'Sort By Frequency', 'Sort values by frequency (higher first); equal frequency: smaller value first. | Input: N, then N integers. | Output: the sorted list.', lambda s: (lambda a: J(sorted(a, key=lambda x: (-a.count(x), x))))(arrs(s)), [L(6, '2 3 2 4 5 3')], ar(0, 5, 1, 10))

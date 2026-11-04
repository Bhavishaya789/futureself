#!/usr/bin/env python3
"""Builds website/api/_codebank.js : the FutureSelf coding-challenge questions.
Every problem has a reference solution here; the hidden tests are produced by running it, so the expected outputs are correct by construction.
Run: python3 tools/build-codebank.py"""
import json, random, os, sys
from collections import defaultdict, Counter, deque
import heapq

R = random.Random(20261104)
P = []
def prob(id, title, level, topic, statement, inp, out, cons, samples, gen, sol, mins):
    tests = []
    seen = set()
    for g in gen:
        s = g if isinstance(g, str) else g()
        if s in seen: continue
        seen.add(s); tests.append({'in': s, 'out': sol(s).strip()})
    sm = [{'in': s, 'out': sol(s).strip()} for s in samples]
    P.append({'id': id, 'title': title, 'level': level, 'topic': topic, 'statement': statement, 'input': inp, 'output': out, 'constraints': cons, 'samples': sm, 'tests': tests, 'minutes': mins})
def L(*a): return '\n'.join(map(str, a)) + '\n'
def arr(n, lo, hi): return [R.randint(lo, hi) for _ in range(n)]
def J(a): return ' '.join(map(str, a))

# ---------------- EASY ----------------
def sol_even(s): n, *a = map(int, s.split()); return str(sum(1 for x in a[:n] if x % 2 == 0))
prob('even-count', 'Count the Even Numbers', 'Easy', 'Arrays', 'You are given N integers. Print how many of them are even.', 'Line 1: N. Line 2: N integers.', 'One integer: the count of even numbers.', '1 <= N <= 1000, -10^9 <= value <= 10^9', [L(5, '1 2 3 4 6')],
     [L(1, 7), L(1, 0), L(4, '-2 -4 5 8'), lambda: (lambda n: L(n, J(arr(n, -10**9, 10**9))))(200), lambda: (lambda n: L(n, J(arr(n, -9, 9))))(1000), L(3, '2 2 2'), L(2, '-1 -3'), lambda: (lambda n: L(n, J(arr(n, 0, 1))))(77)], sol_even, 10)

def sol_rw(s): return ' '.join(s.split('\n')[0].split()[::-1])
prob('reverse-words', 'Reverse the Words', 'Easy', 'Strings', 'Given a sentence, print its words in reverse order, separated by single spaces.', 'One line: the sentence (words separated by one or more spaces).', 'The words in reverse order.', '1 <= length <= 1000', [L('the sky is blue')],
     [L('hello'), L('a b c d e'), L('  leading and   trailing  '), L('FutureSelf makes study lock in easy'), L(' '.join(['w%d' % i for i in range(60)])), L('one  two'), L('x'), L('Code Run Debug Repeat')], sol_rw, 10)

def sol_pal(s):
    t = ''.join(c.lower() for c in s.split('\n')[0] if c.isalnum()); return 'YES' if t == t[::-1] else 'NO'
prob('palindrome', 'Palindrome Check', 'Easy', 'Strings', 'Print YES if the line is a palindrome when you ignore case and every character that is not a letter or digit, otherwise print NO.', 'One line of text.', 'YES or NO.', '1 <= length <= 1000', [L('A man, a plan, a canal: Panama')],
     [L('racecar'), L('hello'), L('No lemon, no melon'), L('a'), L('ab'), L('12321'), L('1231'), L('Was it a car or a cat I saw?'), L('!!!'), L('Madam, in Eden, I\'m Adam')], sol_pal, 10)

def sol_fb(s): n = int(s); return str(sum(i for i in range(1, n + 1) if i % 3 == 0 or i % 5 == 0))
prob('fizz-sum', 'Sum of Multiples of 3 or 5', 'Easy', 'Math', 'Print the sum of all positive integers up to N (inclusive) that are divisible by 3 or by 5.', 'One integer N.', 'The sum.', '1 <= N <= 10^6', [L(10)],
     [L(1), L(3), L(5), L(15), L(100), L(999), L(1000000), L(7), L(250000)], sol_fb, 10)

def sol_second(s):
    n, *a = map(int, s.split()); d = sorted(set(a[:n]), reverse=True); return str(d[1]) if len(d) > 1 else 'NONE'
prob('second-largest', 'Second Largest Distinct', 'Easy', 'Arrays', 'Print the second largest DISTINCT value among N integers, or NONE if there is no such value.', 'Line 1: N. Line 2: N integers.', 'The value, or NONE.', '1 <= N <= 3000', [L(5, '4 9 9 2 7')],
     [L(1, 5), L(2, '3 3'), L(2, '1 2'), L(3, '-5 -5 -9'), lambda: (lambda n: L(n, J(arr(n, -100, 100))))(500), L(6, '10 10 10 9 9 8'), lambda: (lambda n: L(n, J(arr(n, -10**9, 10**9))))(3000), L(4, '0 0 0 1')], sol_second, 10)

def sol_vow(s): return str(sum(1 for c in s.split('\n')[0].lower() if c in 'aeiou'))
prob('vowel-count', 'Count the Vowels', 'Easy', 'Strings', 'Count the vowels (a, e, i, o, u, upper or lower case) in the line.', 'One line of text.', 'One integer.', '0 <= length <= 1000', [L('Hello World')],
     [L('rhythm'), L('AEIOU aeiou'), L('Programming is fun'), L('xyz'), L('The quick brown fox jumps over the lazy dog'), L('QUEUE'), L('a'), L('b' * 500 + 'e' * 20)], sol_vow, 10)

def sol_tz(s): n = int(s); c = 0; 
def _tz(s):
    n = int(s); c = 0
    while n: n //= 5; c += n
    return str(c)
prob('trailing-zeros', 'Trailing Zeros of Factorial', 'Easy', 'Math', 'Print how many zeros are at the end of N! (N factorial).', 'One integer N.', 'The number of trailing zeros.', '0 <= N <= 10^18', [L(25)],
     [L(0), L(4), L(5), L(10), L(100), L(1000), L(10**9), L(10**18), L(124), L(125)], _tz, 12)

def sol_miss(s): n, *a = map(int, s.split()); return str(n * (n + 1) // 2 - sum(a))
def g_miss(n):
    def f():
        m = R.randint(1, n); a = [i for i in range(1, n + 1) if i != m]; R.shuffle(a); return L(n, J(a))
    return f
prob('missing-number', 'The Missing Number', 'Easy', 'Arrays', 'The numbers 1..N appear once each, except one number is missing. You are given the other N-1 numbers in any order. Print the missing one.', 'Line 1: N. Line 2: N-1 integers.', 'The missing number.', '2 <= N <= 3 * 10^4', [L(5, '1 2 4 5')],
     [L(2, 1), L(2, 2), L(3, '3 1'), g_miss(10), g_miss(1000), g_miss(30000), g_miss(50), g_miss(7)], sol_miss, 12)

# ---------------- MEDIUM ----------------
def sol_br(s):
    st = []; m = {')': '(', ']': '[', '}': '{'}
    for c in s.split('\n')[0].strip():
        if c in '([{': st.append(c)
        elif not st or st.pop() != m[c]: return 'NO'
    return 'NO' if st else 'YES'
def gbr(n, bad=False):
    def f():
        s = []; 
        def build(k):
            out = ''
            while k > 0:
                a = R.choice(['()', '[]', '{}']); inner = R.randint(0, k - 1); out += a[0] + build(inner) + a[1]; k -= inner + 1
            return out
        t = build(n)
        if bad and len(t) > 2:
            i = R.randrange(len(t)); t = t[:i] + R.choice('()[]{}') + t[i + 1:]
        return L(t or '()')
    return f
prob('brackets', 'Balanced Brackets', 'Medium', 'Stack', 'A string contains only the characters ()[]{}. Print YES if every bracket is closed by the same kind in the correct order, otherwise NO.', 'One line: the string.', 'YES or NO.', '1 <= length <= 3000', [L('{[()]}')],
     [L('()'), L('(]'), L('([)]'), L('((('), L(')('), L('{[]}()'), gbr(30), gbr(30, True), gbr(1500), gbr(1500, True), L('}')], sol_br, 20)

def sol_ts(s):
    t = s.split('\n'); n, tg = map(int, t[0].split()); a = list(map(int, t[1].split()))
    for i in range(n):
        for j in range(i + 1, n):
            if a[i] + a[j] == tg: return '%d %d' % (i + 1, j + 1)
    return '-1'
def gts(n, hit=True):
    def f():
        a = arr(n, -1000, 1000); tg = (a[R.randrange(n)] + a[R.randrange(n)]) if hit else 5000
        if hit:
            i, j = R.sample(range(n), 2); tg = a[i] + a[j]
        return L('%d %d' % (n, tg), J(a))
    return f
prob('two-sum', 'Two Sum Positions', 'Medium', 'Hashing', 'Find two different positions i < j (1-indexed) whose values add up to the target. If several pairs exist, print the one with the smallest i, then the smallest j. If none exists, print -1.', 'Line 1: N and the target. Line 2: N integers.', 'Two integers "i j", or -1.', '2 <= N <= 3000', [L('4 9', '2 7 11 15')],
     [L('2 3', '1 2'), L('2 10', '1 2'), gts(10), gts(50), gts(500), gts(2000), gts(30, False), L('3 0', '0 0 0'), L('5 6', '3 3 3 3 3')], sol_ts, 25)

def sol_lsw(s):
    t = s.split('\n')[0].strip(); last = {}; best = st = 0
    for i, c in enumerate(t):
        if c in last and last[c] >= st: st = last[c] + 1
        last[c] = i; best = max(best, i - st + 1)
    return str(best)
def gstr(n, k):
    return lambda: L(''.join(R.choice('abcdefghijklmnopqrstuvwxyz'[:k]) for _ in range(n)))
prob('longest-unique', 'Longest Substring Without Repeats', 'Medium', 'Sliding window', 'Print the length of the longest substring that has no repeated character.', 'One line: a string of lowercase letters.', 'One integer.', '1 <= length <= 3 * 10^4', [L('abcabcbb')],
     [L('a'), L('bbbbb'), L('pwwkew'), L('abcdef'), gstr(100, 5), gstr(5000, 26), gstr(30000, 26), L('dvdf'), L('abba')], sol_lsw, 25)

def sol_ang(s):
    t = s.split('\n'); n = int(t[0]); return str(len(set(''.join(sorted(w)) for w in t[1:n + 1])))
def gang(n):
    def f():
        base = [''.join(R.choice('abc') for _ in range(R.randint(1, 5))) for _ in range(n)]
        return L(n, *[''.join(R.sample(w, len(w))) for w in base])
    return f
prob('anagram-groups', 'Count Anagram Groups', 'Medium', 'Hashing', 'Two words are in the same group if one is an anagram of the other (same letters, any order). Print how many groups the N words form.', 'Line 1: N. Next N lines: one lowercase word each.', 'One integer.', '1 <= N <= 1500', [L(5, 'eat', 'tea', 'tan', 'ate', 'nat')],
     [L(1, 'a'), L(3, 'ab', 'ba', 'abc'), gang(10), gang(100), gang(1500), L(2, 'aa', 'a'), L(4, 'x', 'x', 'x', 'x')], sol_ang, 25)

def sol_pc(s):
    n = int(s)
    if n < 2: return '0'
    sv = bytearray([1]) * (n + 1); sv[0] = sv[1] = 0
    for i in range(2, int(n ** .5) + 1):
        if sv[i]: sv[i * i::i] = bytearray(len(sv[i * i::i]))
    return str(sum(sv))
prob('prime-count', 'How Many Primes?', 'Medium', 'Sieve', 'Print how many prime numbers are there from 1 to N (inclusive).', 'One integer N.', 'The count of primes.', '1 <= N <= 1.5 * 10^6', [L(10)],
     [L(1), L(2), L(3), L(30), L(100), L(1000), L(99991), L(1000000), L(1500000), L(97)], sol_pc, 25)

def sol_bs(s):
    t = s.split('\n'); n, q = map(int, t[0].split()); a = list(map(int, t[1].split())); qs = list(map(int, t[2].split())); pos = {}
    for i, v in enumerate(a): pos.setdefault(v, i)
    return '\n'.join(str(pos.get(x, -1)) for x in qs[:q])
def gbs(n, q):
    def f():
        a = sorted(arr(n, -50, 50)); qs = [R.choice(a) if R.random() < .5 else R.randint(-60, 60) for _ in range(q)]; return L('%d %d' % (n, q), J(a), J(qs))
    return f
prob('first-index', 'First Index in a Sorted Array', 'Medium', 'Binary search', 'The array is sorted in non-decreasing order. For each query print the smallest index (0-based) where that value occurs, or -1 if it does not occur.', 'Line 1: N and Q. Line 2: N sorted integers. Line 3: Q query values.', 'Q lines, one answer each.', '1 <= N, Q <= 10^4', [L('5 3', '1 2 2 2 9', '2 9 5')],
     [L('1 1', 5, 5), L('1 1', 5, 4), gbs(10, 10), gbs(100, 50), gbs(1000, 500), gbs(10000, 10000), L('4 2', '3 3 3 3', '3 2')], sol_bs, 25)

def sol_sp(s):
    t = s.split('\n'); n, m = map(int, t[0].split()); g = [list(map(int, t[1 + i].split())) for i in range(n)]; out = []
    top, bot, l, r = 0, n - 1, 0, m - 1
    while top <= bot and l <= r:
        out += g[top][l:r + 1]; top += 1
        for i in range(top, bot + 1): out.append(g[i][r])
        r -= 1
        if top <= bot: out += g[bot][l:r + 1][::-1]; bot -= 1
        if l <= r:
            for i in range(bot, top - 1, -1): out.append(g[i][l])
            l += 1
    return J(out)
def gsp(n, m):
    return lambda: L('%d %d' % (n, m), *[J(arr(m, 0, 99)) for _ in range(n)])
prob('spiral', 'Spiral Order of a Matrix', 'Medium', 'Matrices', 'Print the elements of an N x M matrix in spiral order: start at the top-left, go right, then down, then left, then up, and keep spiralling inwards.', 'Line 1: N and M. Next N lines: M integers each.', 'All N*M values on one line, separated by spaces.', '1 <= N, M <= 100', [L('3 3', '1 2 3', '4 5 6', '7 8 9')],
     [L('1 1', 7), L('1 4', '1 2 3 4'), L('4 1', 1, 2, 3, 4), gsp(2, 5), gsp(5, 2), gsp(6, 6), gsp(10, 7), gsp(50, 50), gsp(3, 8)], sol_sp, 25)

def sol_mi(s):
    t = s.split('\n'); n = int(t[0]); iv = sorted(tuple(map(int, t[1 + i].split())) for i in range(n)); out = []
    for a, b in iv:
        if out and a <= out[-1][1]: out[-1][1] = max(out[-1][1], b)
        else: out.append([a, b])
    return L(len(out)) + '\n'.join('%d %d' % (a, b) for a, b in out)
def gmi(n):
    def f():
        rows = []
        for _ in range(n):
            a = R.randint(0, 200); rows.append('%d %d' % (a, a + R.randint(0, 15)))
        return L(n, *rows)
    return f
prob('merge-intervals', 'Merge Overlapping Intervals', 'Medium', 'Sorting', 'Merge all overlapping intervals (intervals that share even one point, like [1,3] and [3,5], overlap). Print how many merged intervals remain, then the intervals in increasing order.', 'Line 1: N. Next N lines: start and end of an interval.', 'First line: the count K. Then K lines "start end".', '1 <= N <= 500, 0 <= start <= end <= 10^9', [L(4, '1 3', '2 6', '8 10', '15 18')],
     [L(1, '5 5'), L(2, '1 2', '3 4'), L(2, '1 4', '4 5'), gmi(10), gmi(100), gmi(500), L(3, '1 10', '2 3', '4 5')], sol_mi, 30)

def sol_ks(s):
    n, *a = map(int, s.split()); a = a[:n]; best = cur = a[0]
    for x in a[1:]: cur = max(x, cur + x); best = max(best, cur)
    return str(best)
prob('max-subarray', 'Maximum Subarray Sum', 'Medium', 'Dynamic programming', 'Find the largest possible sum of a non-empty contiguous part of the array.', 'Line 1: N. Line 2: N integers.', 'One integer.', '1 <= N <= 3 * 10^4, -10^4 <= value <= 10^4', [L(9, '-2 1 -3 4 -1 2 1 -5 4')],
     [L(1, -5), L(3, '-3 -2 -1'), L(4, '1 2 3 4'), lambda: (lambda n: L(n, J(arr(n, -100, 100))))(50), lambda: (lambda n: L(n, J(arr(n, -10**4, 10**4))))(2000), lambda: (lambda n: L(n, J(arr(n, -10**4, 10**4))))(30000), L(5, '5 -10 5 -10 5')], sol_ks, 25)

# ---------------- HARD ----------------
def sol_lis(s):
    import bisect
    n, *a = map(int, s.split()); t = []
    for x in a[:n]:
        i = bisect.bisect_left(t, x)
        if i == len(t): t.append(x)
        else: t[i] = x
    return str(len(t))
prob('lis', 'Longest Increasing Subsequence', 'Hard', 'Dynamic programming', 'Print the length of the longest STRICTLY increasing subsequence (elements need not be next to each other).', 'Line 1: N. Line 2: N integers.', 'One integer.', '1 <= N <= 3 * 10^4 (an O(N^2) solution is too slow for the largest tests)', [L(8, '10 9 2 5 3 7 101 18')],
     [L(1, 3), L(5, '5 4 3 2 1'), L(5, '1 2 3 4 5'), L(6, '2 2 2 2 2 2'), lambda: (lambda n: L(n, J(arr(n, 0, 100))))(100), lambda: (lambda n: L(n, J(arr(n, -10**9, 10**9))))(5000), lambda: (lambda n: L(n, J(arr(n, -10**9, 10**9))))(30000), lambda: L(30000, J(range(30000)))], sol_lis, 45)

def sol_kn(s):
    t = s.split('\n'); n, w = map(int, t[0].split()); dp = [0] * (w + 1)
    for i in range(n):
        wt, v = map(int, t[1 + i].split())
        for c in range(w, wt - 1, -1): dp[c] = max(dp[c], dp[c - wt] + v)
    return str(dp[w])
def gkn(n, w):
    return lambda: L('%d %d' % (n, w), *['%d %d' % (R.randint(1, max(1, w // 3)), R.randint(1, 500)) for _ in range(n)])
prob('knapsack', '0/1 Knapsack', 'Hard', 'Dynamic programming', 'There are N items, each with a weight and a value. Choose some of them (each at most once) so the total weight is at most W and the total value is as large as possible. Print that value.', 'Line 1: N and W. Next N lines: weight and value of an item.', 'One integer.', '1 <= N <= 200, 1 <= W <= 10^4', [L('3 50', '10 60', '20 100', '30 120')],
     [L('1 5', '10 100'), L('1 10', '10 100'), gkn(5, 20), gkn(20, 100), gkn(100, 1000), gkn(200, 10000), L('2 4', '3 5', '4 6')], sol_kn, 40)

def sol_ed(s):
    a, b = s.split('\n')[:2]; n, m = len(a), len(b); p = list(range(m + 1))
    for i in range(1, n + 1):
        c = [i] + [0] * m
        for j in range(1, m + 1): c[j] = min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] != b[j - 1]))
        p = c
    return str(p[m])
def ged(n, m, k=4):
    return lambda: L(''.join(R.choice('abcdefgh'[:k]) for _ in range(n)), ''.join(R.choice('abcdefgh'[:k]) for _ in range(m)))
prob('edit-distance', 'Edit Distance', 'Hard', 'Dynamic programming', 'The allowed edits are: insert a letter, delete a letter, or replace a letter. Print the minimum number of edits needed to turn the first word into the second word.', 'Line 1: the first word. Line 2: the second word (lowercase letters).', 'One integer.', '1 <= length of each word <= 800', [L('horse', 'ros')],
     [L('a', 'a'), L('a', 'b'), L('abc', 'abc'), L('kitten', 'sitting'), L('intention', 'execution'), ged(30, 25), ged(200, 180), ged(600, 700, 8), ged(800, 800, 3)], sol_ed, 40)

def sol_dj(s):
    t = s.split('\n'); n, m = map(int, t[0].split()); g = defaultdict(list)
    for i in range(m):
        a, b, w = map(int, t[1 + i].split()); g[a].append((b, w)); g[b].append((a, w))
    d = {1: 0}; h = [(0, 1)]
    while h:
        du, u = heapq.heappop(h)
        if du > d.get(u, 1e30): continue
        for v, w in g[u]:
            if du + w < d.get(v, 1e30): d[v] = du + w; heapq.heappush(h, (du + w, v))
    return str(d.get(n, -1))
def gdj(n, m):
    def f():
        e = set(); rows = []
        for i in range(2, n + 1): rows.append('%d %d %d' % (R.randint(1, i - 1), i, R.randint(1, 20)))
        while len(rows) < m: a, b = R.randint(1, n), R.randint(1, n); rows.append('%d %d %d' % (a, b, R.randint(1, 50))) if a != b else None
        return L('%d %d' % (n, len(rows)), *rows)
    return f
prob('shortest-path', 'Shortest Path', 'Hard', 'Graphs', 'A road network has N cities (numbered 1..N) and M two-way roads, each with a length. Print the length of the shortest route from city 1 to city N, or -1 if you cannot get there.', 'Line 1: N and M. Next M lines: city a, city b, length.', 'One integer.', '2 <= N <= 5000, 0 <= M <= 2 * 10^4, 1 <= length <= 10^6', [L('4 4', '1 2 5', '2 4 5', '1 3 1', '3 4 20')],
     [L('2 0'), L('2 1', '1 2 7'), L('3 1', '1 2 4'), gdj(10, 15), gdj(100, 300), gdj(1500, 5000), gdj(5000, 20000), L('5 4', '1 2 1', '2 3 1', '3 4 1', '4 5 1')], sol_dj, 45)

def sol_isl(s):
    t = s.split('\n'); n, m = map(int, t[0].split()); g = [list(t[1 + i]) for i in range(n)]; c = 0
    for i in range(n):
        for j in range(m):
            if g[i][j] == '1':
                c += 1; st = [(i, j)]; g[i][j] = '0'
                while st:
                    x, y = st.pop()
                    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        a, b = x + dx, y + dy
                        if 0 <= a < n and 0 <= b < m and g[a][b] == '1': g[a][b] = '0'; st.append((a, b))
    return str(c)
def gis(n, m, p):
    return lambda: L('%d %d' % (n, m), *[''.join('1' if R.random() < p else '0' for _ in range(m)) for _ in range(n)])
prob('islands', 'Number of Islands', 'Hard', 'Graphs', 'A grid has 1 for land and 0 for water. An island is a group of land cells connected up, down, left or right. Print the number of islands.', 'Line 1: N and M. Next N lines: M characters, each 0 or 1 (no spaces).', 'One integer.', '1 <= N, M <= 150', [L('3 4', '1100', '1001', '0011')],
     [L('1 1', '1'), L('1 1', '0'), L('2 2', '11', '11'), L('2 2', '10', '01'), gis(5, 5, .5), gis(20, 20, .45), gis(100, 100, .5), gis(150, 150, .55), gis(150, 150, .3)], sol_isl, 40)

def sol_cc(s):
    t = s.split('\n'); n, a = map(int, t[0].split()); cs = list(map(int, t[1].split())); INF = 10**9; dp = [0] + [INF] * a
    for x in range(1, a + 1):
        for c in cs[:n]:
            if c <= x and dp[x - c] + 1 < dp[x]: dp[x] = dp[x - c] + 1
    return str(dp[a] if dp[a] < INF else -1)
def gcc(n, a, hi):
    return lambda: L('%d %d' % (n, a), J(R.sample(range(1, hi + 1), n)))
prob('coin-change', 'Fewest Coins', 'Hard', 'Dynamic programming', 'You have an unlimited supply of coins of N different values. Print the smallest number of coins that add up exactly to the amount A, or -1 if that is impossible.', 'Line 1: N and A. Line 2: the N coin values.', 'One integer.', '1 <= N <= 12, 0 <= A <= 5000', [L('3 11', '1 2 5')],
     [L('1 0', 5), L('1 3', 2), L('2 6', '4 3'), L('3 100', '1 5 10'), gcc(5, 500, 50), gcc(12, 5000, 200), gcc(3, 4999, 400), L('2 7', '5 3')], sol_cc, 35)

def sol_sk(s):
    t = s.split('\n'); n, k = map(int, t[0].split()); a = list(map(int, t[1].split()))[:n]; c = Counter({0: 1}); p = r = 0
    for x in a: p += x; r += c[p - k]; c[p] += 1
    return str(r)
def gsk(n, lo, hi, k):
    return lambda: L('%d %d' % (n, k), J(arr(n, lo, hi)))
prob('subarray-k', 'Subarrays With Sum K', 'Hard', 'Hashing', 'Count the contiguous, non-empty subarrays whose elements add up to exactly K.', 'Line 1: N and K. Line 2: N integers.', 'One integer.', '1 <= N <= 5 * 10^4 (an O(N^2) solution is too slow for the largest tests)', [L('5 3', '1 2 1 2 1')],
     [L('1 5', 5), L('1 5', 4), L('3 0', '0 0 0'), gsk(20, -3, 3, 2), gsk(200, -5, 5, 0), gsk(5000, -10, 10, 7), gsk(50000, -2, 2, 3), L('4 -3', '-1 -1 -1 0')], sol_sk, 40)

here = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(here, '..', 'website', 'api', '_codebank.js')
lv = Counter(p['level'] for p in P)
total = sum(len(p['tests']) for p in P)
with open(out, 'w') as f:
    f.write("'use strict';\n/* FutureSelf coding-challenge questions. GENERATED by tools/build-codebank.py - do not edit by hand.\n   The hidden tests live ONLY here (server side). The apps get the statement and the sample tests. */\nmodule.exports = " + json.dumps(P, separators=(',', ':')) + ";\n")
print('problems', len(P), dict(lv), 'tests', total, 'bytes', os.path.getsize(out))

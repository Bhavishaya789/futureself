from dsa3 import *
import math, bisect
topic('recursion', 'Recursion and Backtracking', 'Divide a problem into smaller copies, explore choices and undo them')
Q('Easy', 'Factorial', 'Print N! (N up to 20). | Input: N. | Output: N factorial.', lambda s: math.factorial(int(s)), [L(5)], num(0, 20))
Q('Easy', 'Fibonacci Number', 'F(0)=0, F(1)=1. Print F(N). | Input: N (0 to 30). | Output: F(N).', lambda s: (lambda n: (lambda f: f(f, n))(lambda f, k: k if k < 2 else f(f, k - 1) + f(f, k - 2)))(int(s)), [L(10)], num(0, 22))
Q('Easy', 'Sum of Digits Recursively', 'Print the sum of the digits of N. | Input: N. | Output: digit sum.', lambda s: sum(map(int, s.strip())), [L(9045)], num(0, 10**9))
Q('Easy', 'Power by Recursion', 'Print A raised to B (B>=0), using at most 10^18 as a result. | Input: A and B. | Output: A^B.', lambda s: (lambda a, b: a ** b)(*iv(s)), [L(2, 10)], lambda r: L(r.randint(0, 9), r.randint(0, 12)))
Q('Easy', 'Count Down', 'Print N, N-1, ... , 1 separated by spaces. | Input: N. | Output: the sequence.', lambda s: J(range(int(s), 0, -1)), [L(5)], num(1, 15))
Q('Easy', 'Palindrome Number Check', 'Print YES if N reads the same reversed, else NO. | Input: N. | Output: YES or NO.', lambda s: 'YES' if s.strip() == s.strip()[::-1] else 'NO', [L(12321)], num(1, 2000))
Q('Easy', 'Binary of N', 'Print N in binary. | Input: N. | Output: the binary string.', lambda s: bin(int(s))[2:], [L(10)], num(0, 5000))
Q('Medium', 'Tower of Hanoi Moves', 'Print the minimum number of moves for N disks. | Input: N (1 to 40). | Output: the move count.', lambda s: 2 ** int(s) - 1, [L(3)], num(1, 40))
Q('Medium', 'All Subsets Count With Sum', 'Count subsets (by position) of the array whose sum equals K. | Input: N, the array, K. | Output: the count.', lambda s: (lambda t: sum(1 for m in range(1 << t[0]) if sum(t[1 + i] for i in range(t[0]) if m >> i & 1) == t[-1]))(iv(s)), [L(4, '1 2 3 4', 5)], arq(1, 6, 1, 9, 1, 15))
Q('Medium', 'Generate Binary Strings', 'Print all binary strings of length N in increasing order, one per line. | Input: N (1 to 5). | Output: 2^N lines.', lambda s: '\n'.join(format(i, '0%db' % int(s)) for i in range(2 ** int(s))), [L(2)], num(1, 5))
Q('Medium', 'Permutations Count of Word', 'Count the distinct permutations of the letters of the word. | Input: a word. | Output: the count.', lambda s: len(set(itertools.permutations(s.strip()))), [L('aab')], st(1, 6, 'abc'))
Q('Medium', 'Climbing Stairs', 'You can climb 1 or 2 steps at a time. Print the number of ways to climb N steps. | Input: N. | Output: the ways.', lambda s: (lambda n: (lambda f: f(f, n))(lambda f, k: 1 if k <= 1 else f(f, k - 1) + f(f, k - 2)))(int(s)), [L(5)], num(1, 20))
Q('Medium', 'Gray Code', 'Print the N-bit Gray code sequence (i ^ (i>>1)) as binary strings, one per line. | Input: N (1 to 4). | Output: 2^N lines.', lambda s: '\n'.join(format(i ^ (i >> 1), '0%db' % int(s)) for i in range(2 ** int(s))), [L(2)], num(1, 4))
Q('Medium', 'Letter Case Permutations Count', 'Each letter may be lower or upper case; digits stay. Print how many distinct strings exist. | Input: alphanumeric string. | Output: the count.', lambda s: 2 ** sum(c.isalpha() for c in s.strip()), [L('a1b2')], lambda r: L(''.join(r.choice('ab12') for _ in range(r.randint(1, 8)))))
Q('Medium', 'Generate Parentheses', 'Print the number of valid sequences of N pairs of parentheses. | Input: N. | Output: the count.', lambda s: math.comb(2 * int(s), int(s)) // (int(s) + 1), [L(3)], num(1, 12))
def nq(s):
    n = int(s); c = 0
    def go(r, cols, d1, d2):
        nonlocal c
        if r == n: c += 1; return
        for x in range(n):
            if x in cols or r - x in d1 or r + x in d2: continue
            go(r + 1, cols | {x}, d1 | {r - x}, d2 | {r + x})
    go(0, set(), set(), set()); return c
Q('Hard', 'N-Queens Count', 'Count the ways to place N queens on an N x N board so none attack each other. | Input: N (1 to 8). | Output: the count.', nq, [L(4)], num(1, 8))
def maze(s):
    t = s.strip().split('\n'); n = int(t[0]); g = t[1:1 + n]; c = 0
    def go(i, j, seen):
        nonlocal c
        if g[i][j] == '#': return
        if (i, j) == (n - 1, n - 1): c += 1; return
        for di, dj in ((0, 1), (1, 0), (0, -1), (-1, 0)):
            a, b = i + di, j + dj
            if 0 <= a < n and 0 <= b < n and (a, b) not in seen: go(a, b, seen | {(a, b)})
    if g[0][0] != '#': go(0, 0, {(0, 0)})
    return c
def gmz(r):
    n = r.randint(2, 4); g = [[r.choice('..#') for _ in range(n)] for _ in range(n)]; g[0][0] = g[n - 1][n - 1] = '.'
    return L(n) + ''.join(L(''.join(x)) for x in g)
Q('Hard', 'Count Maze Paths', 'In an N x N grid (. open, # wall) count the simple paths (no cell twice) from top-left to bottom-right moving in four directions. | Input: N, then N rows. | Output: the number of paths.', maze, [L(2, '..', '..')], gmz)
def combsum(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]
    def go(i, r): return 1 if r == 0 else 0 if r < 0 or i == n else go(i, r - a[i]) + go(i + 1, r)
    return go(0, k)
Q('Hard', 'Combination Sum Ways', 'Each number may be used any number of times; count the combinations (order does not matter) that add to K. | Input: N, the distinct positive numbers, K. | Output: the count.', combsum, [L(3, '2 3 5', 8)], lambda r: (lambda a: L(len(a), J(a), r.randint(1, 14)))(sorted(r.sample(range(1, 7), r.randint(1, 4)))))
Q('Hard', 'Partition Into Equal Sum', 'Print YES if the array can be split into two subsets with equal sum, else NO. | Input: N, then N positive integers. | Output: YES or NO.', lambda s: (lambda a: 'YES' if sum(a) % 2 == 0 and any(sum(c) == sum(a) // 2 for m in range(len(a) + 1) for c in itertools.combinations(a, m)) else 'NO')(arrs(s)), [L(4, '1 5 11 5')], ar(1, 9, 1, 9))
def go(g, w, k, i, j, seen):
    if k == len(w): return True
    if not (0 <= i < len(g) and 0 <= j < len(g[0])) or (i, j) in seen or g[i][j] != w[k]: return False
    seen = seen | {(i, j)}
    return any(go(g, w, k + 1, i + a, j + b, seen) for a, b in ((0, 1), (1, 0), (0, -1), (-1, 0)))
def ws2(s):
    t = s.strip().split('\n'); r, c = map(int, t[0].split()); g = t[1:1 + r]; w = t[1 + r]
    return 'YES' if any(go(g, w, 0, i, j, set()) for i in range(r) for j in range(c)) else 'NO'
def gws(r):
    n, m = r.randint(1, 3), r.randint(1, 3); g = [''.join(r.choice('abc') for _ in range(m)) for _ in range(n)]
    return L(n, m) .replace('\n', ' ').strip() + '\n' + ''.join(L(x) for x in g) + L(''.join(r.choice('abc') for _ in range(r.randint(1, 5))))
Q('Hard', 'Word Search in Grid', 'Can the word be formed by adjacent (up, down, left, right) cells without reusing a cell? Print YES or NO. | Input: R C, R rows, then the word. | Output: YES or NO.', ws2, [L('2 2', 'ab', 'cd', 'abdc')], gws)
Q('Hard', 'Subsets With Distinct Sums', 'Count the different sums that subsets of the array can make (including the empty subset, sum 0). | Input: N, then N integers (0..9). | Output: the count.', lambda s: len({sum(c) for m in range(len(arrs(s)) + 1) for c in itertools.combinations(arrs(s), m)}), [L(3, '1 2 3')], ar(0, 9, 1, 9))
def jos(s):
    n, k = iv(s); r = 0
    for i in range(2, n + 1): r = (r + k) % i
    return r + 1
Q('Hard', 'Josephus Survivor', 'N people stand in a circle; every K-th is removed until one remains. Print the survivor\'s position (1-based). | Input: N and K. | Output: the position.', jos, [L(7, 3)], lambda r: L(r.randint(1, 30), r.randint(1, 9)))

topic('searchsort', 'Sorting and Binary Search', 'Sorting methods and halving the search space')
Q('Easy', 'Sort Ascending', 'Print the array sorted in ascending order. | Input: N, then N integers. | Output: the sorted array.', lambda s: J(sorted(arrs(s))), [L(5, '5 2 9 1 7')], A)
Q('Easy', 'Sort Descending', 'Print the array sorted in descending order. | Input: N, then N integers. | Output: the sorted array.', lambda s: J(sorted(arrs(s), reverse=True)), [L(4, '3 8 1 6')], A)
Q('Easy', 'Linear Search', 'Print the first index of K in the array, or -1. | Input: N, the array, K. | Output: the index.', lambda s: (lambda t: (t[1:1 + t[0]].index(t[-1]) if t[-1] in t[1:1 + t[0]] else -1))(iv(s)), [L(4, '4 8 6 2', 6)], arq(0, 9, 1, 10, 0, 9))
Q('Easy', 'Binary Search Index', 'The array is sorted and distinct. Print the index of K using binary search, or -1. | Input: N, sorted array, K. | Output: the index.', lambda s: (lambda t: (lambda a: a.index(t[-1]) if t[-1] in a else -1)(t[1:1 + t[0]]))(iv(s)), [L(5, '1 3 5 7 9', 7)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 40)))(sorted(r.sample(range(0, 40), r.randint(1, 10)))))
Q('Easy', 'Is Sorted', 'Print YES if the array is in non-decreasing order, else NO. | Input: N, then N integers. | Output: YES or NO.', lambda s: 'YES' if arrs(s) == sorted(arrs(s)) else 'NO', [L(4, '1 2 2 5')], ar(0, 3, 1, 6))
Q('Easy', 'Median', 'Print the median (for an even count print the lower middle value after sorting). | Input: N, then N integers. | Output: the median.', lambda s: sorted(arrs(s))[(len(arrs(s)) - 1) // 2], [L(4, '7 1 5 3')], A)
Q('Easy', 'Kth Smallest', 'Print the K-th smallest value (1-based). | Input: N, the array, K. | Output: the value.', lambda s: (lambda t: sorted(t[1:1 + t[0]])[t[-1] - 1])(iv(s)), [L(5, '7 10 4 3 20', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 10)))
Q('Medium', 'Lower Bound', 'In a sorted array print the first index whose value is >= K (N if none). | Input: N, sorted array, K. | Output: the index.', lambda s: (lambda t: bisect.bisect_left(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 4 4 7', 4)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 12)))(sorted(r.randint(0, 10) for _ in range(r.randint(1, 10)))))
Q('Medium', 'Count Occurrences in Sorted', 'Count how many times K appears in a sorted array. | Input: N, sorted array, K. | Output: the count.', lambda s: (lambda t: t[1:1 + t[0]].count(t[-1]))(iv(s)), [L(6, '1 2 2 2 3 5', 2)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 6)))(sorted(r.randint(0, 5) for _ in range(r.randint(1, 10)))))
Q('Medium', 'Integer Square Root', 'Print floor(sqrt(N)) without a library call (use binary search). | Input: N up to 10^12. | Output: the root.', lambda s: math.isqrt(int(s)), [L(17)], num(0, 10**12))
Q('Medium', 'Search Rotated Array', 'A sorted distinct array was rotated. Print the index of K, or -1. | Input: N, the rotated array, K. | Output: the index.', lambda s: (lambda t: (lambda a: a.index(t[-1]) if t[-1] in a else -1)(t[1:1 + t[0]]))(iv(s)), [L(6, '4 5 6 7 0 1', 0)], lambda r: (lambda a, k: L(len(a), J(a[k:] + a[:k]), r.randint(0, 25)))(sorted(r.sample(range(0, 25), r.randint(1, 9))), r.randint(0, 5) ) if False else (lambda a: (lambda k: L(len(a), J(a[k % len(a):] + a[:k % len(a)]), r.randint(0, 25)))(r.randint(0, 8)))(sorted(r.sample(range(0, 25), r.randint(1, 9)))))
Q('Medium', 'Minimum in Rotated Array', 'A sorted distinct array was rotated; print its minimum value. | Input: N, the rotated array. | Output: the minimum.', lambda s: min(arrs(s)), [L(5, '3 4 5 1 2')], lambda r: (lambda a: (lambda k: L(len(a), J(a[k % len(a):] + a[:k % len(a)])))(r.randint(0, 8)))(sorted(r.sample(range(0, 25), r.randint(1, 9)))))
Q('Medium', 'Count Inversions', 'Count pairs i<j with a[i] > a[j]. | Input: N, then N integers. | Output: the count.', lambda s: (lambda a: sum(1 for i in range(len(a)) for j in range(i + 1, len(a)) if a[i] > a[j]))(arrs(s)), [L(5, '2 4 1 3 5')], A)
Q('Medium', 'Sort By Frequency', 'Sort values by frequency (high first); equal frequency: smaller value first. | Input: N, then N integers. | Output: the sorted array.', lambda s: (lambda a: J(sorted(a, key=lambda x: (-a.count(x), x))))(arrs(s)), [L(6, '2 3 2 4 5 3')], ar(0, 5, 1, 10))
def cows(s):
    t = iv(s); n, c = t[0], t[1]; a = sorted(t[2:2 + n]); best = 0
    def ok(d):
        cnt, last = 1, a[0]
        for x in a[1:]:
            if x - last >= d: cnt += 1; last = x
        return cnt >= c
    for d in range(1, a[-1] - a[0] + 1):
        if ok(d): best = d
    return best
Q('Hard', 'Aggressive Cows', 'Place C cows in N stalls (sorted positions) to maximise the minimum distance between any two cows. Print that distance. | Input: N and C, then N positions. | Output: the largest minimum distance.', cows, [L('5 3', '1 2 8 4 9')], lambda r: (lambda n: L(n, r.randint(2, n)).replace('\n', ' ').strip() + '\n' + L(J(r.sample(range(1, 40), n))))(r.randint(2, 8)))
def spl(s):
    t = iv(s); n, m = t[0], t[1]; a = t[2:2 + n]
    def ok(x):
        parts, cur = 1, 0
        for v in a:
            if cur + v > x: parts += 1; cur = v
            else: cur += v
        return parts <= m
    return next(x for x in range(max(a), sum(a) + 1) if ok(x))
Q('Hard', 'Split Array Largest Sum', 'Split the array into M non-empty contiguous parts to minimise the largest part sum. Print that sum. | Input: N and M, then N positive integers. | Output: the minimised largest sum.', spl, [L('5 2', '7 2 5 10 8')], lambda r: (lambda n: L(n, r.randint(1, n)).replace('\n', ' ').strip() + '\n' + L(J([r.randint(1, 9) for _ in range(n)])))(r.randint(1, 8)))
Q('Hard', 'Median of Two Sorted Arrays', 'Print the median of the combined arrays (even total: the average, printed with one decimal). | Input: two lines, each N then N sorted integers. | Output: the median.', lambda s: (lambda l: (lambda c: ('%.1f' % (c[len(c) // 2] if len(c) % 2 else (c[len(c) // 2 - 1] + c[len(c) // 2]) / 2)))(sorted(list(map(int, l[0].split()))[1:] + list(map(int, l[1].split()))[1:])))(s.strip().split('\n')), [L('2 1 3', '1 2')], lambda r: (lambda a, b: L(len(a), J(a)).replace('\n', ' ').strip() + '\n' + L(len(b), J(b)).replace('\n', ' ').strip() + '\n')(sorted(r.randint(0, 20) for _ in range(r.randint(1, 6))), sorted(r.randint(0, 20) for _ in range(r.randint(1, 6)))))
Q('Hard', 'Peak Element Index', 'A peak is bigger than its neighbours (ends have one neighbour). The array has no equal neighbours. Print the index of the highest peak. | Input: N, then N integers. | Output: the index of the maximum peak.', lambda s: (lambda a: a.index(max(a)))(arrs(s)), [L(5, '1 3 7 4 2')], lambda r: (lambda n: L(n, J(r.sample(range(0, 50), n))))(r.randint(1, 10)))
Q('Hard', 'Count Smaller After Self', 'For each element print how many smaller elements appear to its right. | Input: N, then N integers. | Output: N counts.', lambda s: (lambda a: J([sum(1 for y in a[i + 1:] if y < x) for i, x in enumerate(a)]))(arrs(s)), [L(4, '5 2 6 1')], A)
def ms0(s):
    a = arrs(s); order = sorted(range(len(a)), key=lambda i: a[i]); seen = [0] * len(a); sw = 0
    for i in range(len(a)):
        if seen[i] or order[i] == i: continue
        j = i; c = 0
        while not seen[j]: seen[j] = 1; j = order[j]; c += 1
        sw += c - 1
    return sw
Q('Hard', 'Minimum Swaps To Sort', 'Print the minimum swaps (of any two elements) needed to sort a permutation of distinct integers. | Input: N, then N distinct integers. | Output: the swaps.', ms0, [L(5, '4 3 2 1 5')], lambda r: (lambda n: L(n, J(r.sample(range(1, 40), n))))(r.randint(1, 9)))

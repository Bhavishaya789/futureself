from lc import *
subject('cpp', 'C++', 'cpp', 'lang', 'Language-specific practice: cin/cout, vectors and algorithms, std::string, STL containers, classes and templates.')
class Dummy: pass
Ap = ar(-9, 20, 1, 10)

def lis(a):
    t = []
    import bisect
    for x in a:
        i = bisect.bisect_left(t, x)
        if i == len(t): t.append(x)
        else: t[i] = x
    return len(t)
def nextgreater(a):
    o = [-1] * len(a); st = []
    for i, x in enumerate(a):
        while st and a[st[-1]] < x: o[st.pop()] = x
        st.append(i)
    return o
def dijk(l):
    import heapq
    n, m = map(int, l[0].split()); g = defaultdict(list)
    for x in l[1:1 + m]: a, b, w = map(int, x.split()); g[a].append((b, w)); g[b].append((a, w))
    d = {1: 0}; h = [(0, 1)]
    while h:
        c, u = heapq.heappop(h)
        if c > d.get(u, 1e18): continue
        for v, w in g[u]:
            if c + w < d.get(v, 1e18): d[v] = c + w; heapq.heappush(h, (c + w, v))
    return J(d.get(i, -1) for i in range(1, n + 1))
def gdij(r):
    n = r.randint(2, 6); m = r.randint(1, 8)
    return L('%d %d' % (n, m), *['%d %d %d' % (r.randint(1, n), r.randint(1, n), r.randint(1, 9)) for _ in range(m)])
def bfsgrid(l):
    r, c = map(int, l[0].split()); g = l[1:1 + r]; d = {(0, 0): 0} if g[0][0] == '.' else {}; q = deque(d)
    while q:
        x, y = q.popleft()
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            a, b = x + dx, y + dy
            if 0 <= a < r and 0 <= b < c and g[a][b] == '.' and (a, b) not in d: d[(a, b)] = d[(x, y)] + 1; q.append((a, b))
    return str(d.get((r - 1, c - 1), -1))
def ggrid(r):
    n, m = r.randint(2, 5), r.randint(2, 5); g = [''.join(r.choice('..#') for _ in range(m)) for _ in range(n)]
    g[0] = '.' + g[0][1:]; g[-1] = g[-1][:-1] + '.'
    return L('%d %d' % (n, m), *g)
def pf(n):
    o = []; d = 2
    while d * d <= n:
        while n % d == 0: o.append(d); n //= d
        d += 1
    if n > 1: o.append(n)
    return o

def nextperm(a):
    a = a[:]; i = len(a) - 2
    while i >= 0 and a[i] >= a[i + 1]: i -= 1
    if i < 0: return sorted(a)
    j = len(a) - 1
    while a[j] <= a[i]: j -= 1
    a[i], a[j] = a[j], a[i]; a[i + 1:] = reversed(a[i + 1:]); return a
def lcr(a):
    s = set(a); b = 0
    for x in s:
        if x - 1 not in s:
            y = x
            while y + 1 in s: y += 1
            b = max(b, y - x + 1)
    return b

def minwin(t, p):
    need = Counter(p); best = 0
    for i in range(len(t)):
        for j in range(i + len(p), len(t) + 1):
            if not need - Counter(t[i:j]):
                if best == 0 or j - i < best: best = j - i
                break
    return best
def dways(s):
    n = len(s); d = [0] * (n + 1); d[0] = 1
    for i in range(1, n + 1):
        if s[i - 1] != '0': d[i] += d[i - 1]
        if i > 1 and 10 <= int(s[i - 2:i]) <= 26: d[i] += d[i - 2]
    return d[n]
def rom(s):
    v = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}; t = 0
    for i, c in enumerate(s):
        t += -v[c] if i + 1 < len(s) and v[c] < v[s[i + 1]] else v[c]
    return t

def tick(a):
    q = deque(range(1, len(a) + 1)); a = a[:]; o = []
    while q:
        i = q.popleft(); a[i - 1] -= 1
        if a[i - 1] == 0: o.append(i)
        else: q.append(i)
    return o
def topo(l):
    import heapq
    n, m = map(int, l[0].split()); g = defaultdict(list); d = [0] * (n + 1)
    for x in l[1:1 + m]: a, b = map(int, x.split()); g[a].append(b); d[b] += 1
    h = [i for i in range(1, n + 1) if d[i] == 0]; heapq.heapify(h); o = []
    while h:
        u = heapq.heappop(h); o.append(u)
        for v in g[u]:
            d[v] -= 1
            if d[v] == 0: heapq.heappush(h, v)
    return J(o)
def uf(l):
    n, m = map(int, l[0].split()); p = list(range(n + 1))
    def f(x):
        while p[x] != x: p[x] = p[p[x]]; x = p[x]
        return x
    for x in l[1:1 + m]: a, b = map(int, x.split()); p[f(a)] = f(b)
    return len({f(i) for i in range(1, n + 1)})
def cyc(l):
    n, m = map(int, l[0].split()); g = defaultdict(list); d = [0] * (n + 1)
    for x in l[1:1 + m]: a, b = map(int, x.split()); g[a].append(b); d[b] += 1
    q = [i for i in range(1, n + 1) if d[i] == 0]; c = 0
    while q:
        u = q.pop(); c += 1
        for v in g[u]:
            d[v] -= 1
            if d[v] == 0: q.append(v)
    return 'YES' if c < n else 'NO'


topic('ppio', 'Streams and Basics', 'cin/cout, auto, references, ranges and basic control flow')
Q('Easy', 'Sum With cin', 'Read two integers with cin and print the sum with cout. | Input: two integers. | Output: the sum.', lambda s: sum(iv(s)), [L('3 4')], two(-1000, 1000))
Q('Easy', 'Setprecision Output', 'Print the number with fixed and setprecision(2). | Input: a real number. | Output: two decimals.', lambda s: '%.2f' % float(s), [L('3.14159')], lambda r: L(round(r.uniform(-100, 100), 4)))
Q('Easy', 'Min Of Three Using std::min', 'Print the smallest of three ints using std::min. | Input: three integers. | Output: the minimum.', lambda s: min(iv(s)), [L('3 1 2')], lambda r: L(J([r.randint(-50, 50) for _ in range(3)])))
Q('Easy', 'Swap With std::swap', 'Swap a and b with std::swap and print "a b". | Input: a b. | Output: swapped pair.', lambda s: '%d %d' % tuple(iv(s)[::-1]), [L('1 2')], two(-50, 50))
Q('Easy', 'Range For Sum', 'Read N numbers and sum them with a range-based for loop. | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ap)
Q('Easy', 'Boolean Output', 'Print "true" or "false" for whether N is even (use boolalpha). | Input: N. | Output: true/false.', lambda s: 'true' if int(s) % 2 == 0 else 'false', [L(4)], num(-50, 50))
Q('Easy', 'Reference Increment', 'Write void inc(int &x) and print x+1 after calling it. | Input: x. | Output: x+1.', lambda s: int(s) + 1, [L(5)], num(-99, 99))
Q('Medium', 'Read Until EOF', 'Read integers until end of input and print their count and sum. | Input: any number of integers on lines. | Output: "count sum".', lambda s: '%d %d' % (len(s.split()), sum(map(int, s.split()))), [L('1 2', '3')], lambda r: L(*[J([r.randint(-9, 9) for _ in range(r.randint(1, 4))]) for _ in range(r.randint(1, 3))]))
Q('Medium', 'getline Whole Line', 'Read a full line with getline and print the number of characters including spaces. | Input: a line. | Output: length.', lambda s: len(s.rstrip('\n')), [L('hello world')], lambda r: L(''.join(r.choice('ab  c') for _ in range(r.randint(1, 15))).strip() or 'x'))
Q('Medium', 'Constexpr Factorial', 'Compute N! (N<=20) with a constexpr or loop and long long. | Input: N. | Output: N!.', lambda s: fact(int(s)), [L(10)], num(0, 20))
Q('Medium', 'Structured Binding Pair', 'Read pairs and print the one with the larger second value (first on tie) as "a b". | Input: N, then N lines "a b". | Output: the pair.', lambda s: max(enumerate(W(s)[1:]), key=lambda e: (int(e[1].split()[1]), -e[0]))[1], [L(2, '1 5', '2 9')], lambda r: L(*([4] + ['%d %d' % (r.randint(0, 9), r.randint(0, 9)) for _ in range(4)])))
Q('Medium', 'Ternary FizzBuzz', 'Print numbers 1..N replacing multiples of 3 with Fizz, 5 with Buzz, both with FizzBuzz. | Input: N. | Output: N lines.', lambda s: '\n'.join('FizzBuzz' if i % 15 == 0 else 'Fizz' if i % 3 == 0 else 'Buzz' if i % 5 == 0 else str(i) for i in range(1, int(s) + 1)), [L(5)], num(1, 40))
Q('Medium', 'Digit Reverse Palindrome', 'Print YES if N reads the same reversed. | Input: N (non-negative). | Output: YES/NO.', lambda s: 'YES' if s.strip() == s.strip()[::-1] else 'NO', [L(121)], lambda r: L(r.choice([r.randint(0, 999), int(str(x := r.randint(1, 99)) + str(x)[::-1])])))
Q('Medium', 'Overflow With long long', 'Print a*b where both are up to 10^9. | Input: a b. | Output: product.', lambda s: iv(s)[0] * iv(s)[1], [L('1000000000 999999999')], lambda r: L('%d %d' % (r.randint(1, 10**9), r.randint(1, 10**9))))
Q('Medium', 'Prime Factors', 'Print the prime factors of N in ascending order with repetition. | Input: N>=2. | Output: factors.', lambda s: J(pf(int(s))), [L(12)], num(2, 5000))
Q('Hard', 'Modular Exponent', 'Print a^b mod m using fast exponentiation. | Input: a b m. | Output: result.', lambda s: pow(*iv(s)), [L('2 10 1000')], lambda r: L('%d %d %d' % (r.randint(0, 10**6), r.randint(0, 10**9), r.randint(1, 10**9))))
Q('Hard', 'nCr Mod Prime', 'Print C(n, r) mod 1000000007 for n up to 1000. | Input: n r. | Output: result.', lambda s: math.comb(*iv(s)) % (10**9 + 7), [L('5 2')], lambda r: (lambda n: L('%d %d' % (n, r.randint(0, n))))(r.randint(0, 1000)))
Q('Hard', 'Sum Of Divisors Sieve', 'Print the sum of divisor-sums sigma(1..N) using a sieve. | Input: N. | Output: total.', lambda s: sum(sum(d for d in range(1, i + 1) if i % d == 0) for i in range(1, int(s) + 1)), [L(5)], num(1, 600))
Q('Hard', 'Segmented Prime Count', 'Count primes in [L, R]. | Input: L R. | Output: count.', lambda s: sum(isp(i) for i in range(iv(s)[0], iv(s)[1] + 1)), [L('10 30')], lambda r: (lambda a: L('%d %d' % (a, a + r.randint(0, 3000))))(r.randint(1, 5000)))
Q('Hard', 'Josephus Last Survivor', 'N people, every K-th removed; print the last survivor (1-based). | Input: N K. | Output: survivor.', lambda s: jos(*iv(s)), [L('7 3')], lambda r: L('%d %d' % (r.randint(1, 60), r.randint(1, 9))))
topic('pvec', 'Vectors and Algorithms', 'std::vector, sort, lower_bound, accumulate, unique, reverse and lambdas')
Q('Easy', 'Vector Sum', 'Push_back N numbers into a vector and print the sum. | Input: N, then N integers. | Output: sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ap)
Q('Easy', 'Sort Vector', 'sort() the vector and print it. | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(3, '3 1 2')], Ap)
Q('Easy', 'Sort Descending', 'Use sort with greater<int>(). | Input: N, then N integers. | Output: descending.', lambda s: J(sorted(arrs(s), reverse=True)), [L(3, '1 3 2')], Ap)
Q('Easy', 'Reverse With std::reverse', 'Reverse the vector. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Ap)
Q('Easy', 'Min Max Element', 'Use min_element and max_element. | Input: N, then N integers. | Output: "min max".', lambda s: '%d %d' % (min(arrs(s)), max(arrs(s))), [L(3, '4 9 2')], Ap)
Q('Easy', 'Count Value', 'Use std::count to count X. | Input: N, list, X. | Output: count.', lambda s: iv(s)[1:-1].count(iv(s)[-1]), [L(4, '1 2 1 3', 1)], arq(0, 4, 1, 10, 0, 4))
Q('Easy', 'Unique After Sort', 'sort then unique to print distinct values ascending. | Input: N, then N integers. | Output: distinct sorted.', lambda s: J(sorted(set(arrs(s)))), [L(4, '3 1 3 2')], ar(0, 6, 1, 12))
Q('Medium', 'Lower Bound Position', 'Sorted vector: print lower_bound index of X (index of first element >= X, N if none). | Input: N, sorted list, X. | Output: index.', lambda s: (lambda t: __import__('bisect').bisect_left(t[1:1 + t[0]], t[-1]))(iv(s)), [L(4, '1 3 5 7', 4)], lambda r: (lambda n: L(n, J(sorted(r.sample(range(0, 30), n))), r.randint(0, 30)))(r.randint(1, 8)))
Q('Medium', 'Partial Sums Vector', 'Print prefix sums using partial_sum. | Input: N, then N integers. | Output: prefix sums.', lambda s: J(itertools.accumulate(arrs(s))), [L(3, '1 2 3')], Ap)
Q('Medium', 'Sort Pairs By Second', 'Sort "a b" pairs by b ascending then a ascending using a lambda. | Input: N, then N lines. | Output: sorted pairs.', lambda s: '\n'.join(sorted(W(s)[1:], key=lambda l: (int(l.split()[1]), int(l.split()[0])))), [L(3, '1 5', '2 3', '0 5')], lambda r: L(*([5] + ['%d %d' % (r.randint(0, 4), r.randint(0, 4)) for _ in range(5)])))
Q('Medium', 'Remove If Even', 'Erase all even numbers using remove_if; print the rest or NONE. | Input: N, then N integers. | Output: odds.', lambda s: J(x for x in arrs(s) if x % 2) or 'NONE', [L(4, '1 2 3 4')], Ap)
Q('Medium', 'Next Permutation', 'Print the next lexicographic permutation of the digits array, or the smallest if it is the last. | Input: N, then N distinct integers. | Output: permutation.', lambda s: J(nextperm(arrs(s))), [L(3, '1 2 3')], lambda r: (lambda n: L(n, J(r.sample(range(0, 9), n))))(r.randint(1, 6)))
Q('Medium', 'Two Pointer Pair Sum', 'Sorted array: print YES if two elements sum to K. | Input: N, sorted list, K. | Output: YES/NO.', lambda s: (lambda t: 'YES' if any(t[1 + i] + t[1 + j] == t[-1] for i in range(t[0]) for j in range(i + 1, t[0])) else 'NO')(iv(s)), [L(4, '1 2 4 7', 9)], lambda r: (lambda n: L(n, J(sorted(r.randint(0, 20) for _ in range(n))), r.randint(0, 40)))(r.randint(2, 8)))
Q('Medium', 'Rotate With std::rotate', 'Rotate the vector left by K. | Input: N, list, K. | Output: rotated.', lambda s: (lambda t: (lambda a, k: J(a[k % len(a):] + a[:k % len(a)]))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 2)], arq(0, 9, 1, 8, 0, 15))
Q('Medium', 'Median', 'Print the median (average of two middles with one decimal when N is even, else the middle as x.0). | Input: N, then N integers. | Output: median.', lambda s: '%.1f' % ((lambda a: a[len(a) // 2] if len(a) % 2 else (a[len(a) // 2 - 1] + a[len(a) // 2]) / 2)(sorted(arrs(s)))), [L(4, '1 2 3 4')], Ap)
Q('Hard', 'Longest Increasing Subsequence', 'Print the LIS length (strict). | Input: N, then N integers. | Output: length.', lambda s: lis(arrs(s)), [L(6, '10 9 2 5 3 7')], ar(0, 20, 1, 12))
Q('Hard', 'Next Greater Element', 'For each element print the next greater element to its right or -1. | Input: N, then N integers. | Output: N numbers.', lambda s: J(nextgreater(arrs(s))), [L(4, '4 5 2 25')], ar(0, 20, 1, 10))
Q('Hard', 'Count Inversions', 'Count pairs i<j with a[i]>a[j]. | Input: N, then N integers. | Output: count.', lambda s: sum(1 for i, x in enumerate(arrs(s)) for y in arrs(s)[i + 1:] if x > y), [L(4, '3 1 2 0')], ar(0, 20, 1, 12))
Q('Hard', 'Merge Overlapping Intervals', 'Merge overlapping intervals (touching merge). | Input: N, then N lines "a b". | Output: merged one per line.', lambda s: mint(W(s)[1:]), [L(3, '1 3', '2 6', '8 10')], lambda r: L(*([5] + [(lambda a: '%d %d' % (a, a + r.randint(0, 5)))(r.randint(0, 15)) for _ in range(5)])))
Q('Hard', 'Longest Consecutive Run', 'Print the length of the longest run of consecutive integers (as a set). | Input: N, then N integers. | Output: length.', lambda s: lcr(arrs(s)), [L(6, '100 4 200 1 3 2')], ar(0, 15, 1, 12))
Q('Hard', 'Maximum Product Subarray', 'Print the maximum product of a contiguous subarray. | Input: N, then N integers. | Output: product.', lambda s: max(math.prod(arrs(s)[i:j]) for i in range(len(arrs(s))) for j in range(i + 1, len(arrs(s)) + 1)), [L(4, '2 3 -2 4')], ar(-4, 4, 1, 8))
Q('Hard', 'K Closest To Target', 'Print the K elements closest to T (ties: smaller value first), sorted ascending. | Input: N, list, T, K. | Output: K values.', lambda s: (lambda t: J(sorted(sorted(t[1:1 + t[0]], key=lambda x: (abs(x - t[-2]), x))[:t[-1]])))(iv(s)), [L(5, '1 2 3 4 5', 3, 2)], lambda r: (lambda n: L(n, J([r.randint(0, 20) for _ in range(n)]), r.randint(0, 20), r.randint(1, n)))(r.randint(1, 9)))
topic('pstr', 'std::string and Streams', 'string methods, find, substr, stringstream and character functions')
Q('Easy', 'String Size And Append', 'Concatenate two words with + and print the result and its size. | Input: two words. | Output: "text size".', lambda s: '%s %d' % (''.join(W(s)), len(''.join(W(s)))), [L('ab', 'cd')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 5))) for _ in range(2)]))
Q('Easy', 'Reverse String', 'Use std::reverse on the word. | Input: a word. | Output: reversed.', lambda s: s.strip()[::-1], [L('abc')], st(1, 12, 'abcxyz'))
Q('Easy', 'Substr Middle', 'Print substr(1, len-2) of the word (empty line if len<=2). | Input: a word. | Output: the middle.', lambda s: s.strip()[1:-1], [L('hello')], st(1, 10, 'abcxyz'))
Q('Easy', 'Find Character', 'Print find() result or -1 for the letter in the word. | Input: word then letter. | Output: index.', lambda s: W(s)[0].find(W(s)[1]), [L('hello', 'l')], lambda r: L(''.join(r.choice('abcd') for _ in range(r.randint(1, 8))), r.choice('abcde')))
Q('Easy', 'To Lower Using transform', 'Lower-case the line. | Input: a line. | Output: lowered.', lambda s: s.rstrip('\n').lower(), [L('Hello World')], lambda r: L(''.join(r.choice('aBcD ') for _ in range(r.randint(1, 10)))))
Q('Easy', 'Compare Strings', 'Print SAME or DIFFERENT. | Input: two words. | Output: verdict.', lambda s: 'SAME' if W(s)[0] == W(s)[1] else 'DIFFERENT', [L('a', 'b')], lambda r: L(*[''.join(r.choice('ab') for _ in range(r.randint(1, 2))) for _ in range(2)]))
Q('Easy', 'Count Spaces', 'Count the spaces in the line. | Input: a line. | Output: count.', lambda s: s.rstrip('\n').count(' '), [L('a b c')], lambda r: L(''.join(r.choice('ab ') for _ in range(r.randint(1, 12))).strip() or 'x'))
Q('Medium', 'stringstream Split Sum', 'Split a line of ints with stringstream and print their sum. | Input: a line of integers. | Output: sum.', lambda s: sum(map(int, s.split())), [L('1 2 3')], lambda r: L(J([r.randint(-9, 9) for _ in range(r.randint(1, 8))])))
Q('Medium', 'to_string Concatenate', 'Print all numbers 1..N joined without spaces using to_string. | Input: N. | Output: the text.', lambda s: ''.join(map(str, range(1, int(s) + 1))), [L(12)], num(1, 30))
Q('Medium', 'Replace All', 'Replace every occurrence of the second word with the third in the first line. | Input: text, old, new (words). | Output: new text.', lambda s: W(s)[0].replace(W(s)[1], W(s)[2]), [L('banana', 'an', 'AN')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(1, 10))), ''.join(r.choice('ab') for _ in range(r.randint(1, 2))), 'X'))
Q('Medium', 'Palindrome Ignoring Non Letters', 'Print YES if the letters only (case-insensitive) form a palindrome. | Input: a line. | Output: YES/NO.', lambda s: (lambda t: 'YES' if t == t[::-1] else 'NO')(''.join(c.lower() for c in s if c.isalpha())), [L('A man, a plan, a canal: Panama')], lambda r: L(r.choice(['A man, a plan, a canal: Panama', 'hello', 'Was it a car or a cat I saw?', 'ab', 'x', 'No lemon, no melon', 'abc cba', 'abca'])))
Q('Medium', 'Word Frequency Sorted', 'Print each distinct word with its count, words sorted alphabetically, "word count" per line. | Input: a line of words. | Output: rows.', lambda s: '\n'.join('%s %d' % kv for kv in sorted(Counter(s.split()).items())), [L('b a b')], wl(8))
Q('Medium', 'Capitalize Each Word', 'Upper-case the first letter of each word. | Input: a line of lower-case words. | Output: the line.', lambda s: ' '.join(w[0].upper() + w[1:] for w in s.split()), [L('hello big world')], wl())
Q('Medium', 'Remove Vowels', 'Delete all vowels from the line. | Input: a line. | Output: result (may be empty).', lambda s: ''.join(c for c in s.rstrip('\n') if c not in 'aeiouAEIOU'), [L('Hello World')], lambda r: L(''.join(r.choice('abcEiOxy ') for _ in range(r.randint(1, 12)))))
Q('Medium', 'Starts With And Ends With', 'Print YES if the word starts with the first letter-pair of line 2 and ends with line 3. | Input: word, prefix, suffix. | Output: YES/NO.', lambda s: 'YES' if W(s)[0].startswith(W(s)[1]) and W(s)[0].endswith(W(s)[2]) else 'NO', [L('abcde', 'ab', 'de')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(2, 6))), ''.join(r.choice('ab') for _ in range(r.randint(1, 2))), ''.join(r.choice('ab') for _ in range(r.randint(1, 2)))))
Q('Hard', 'Longest Common Prefix Of Words', 'Print the common prefix of all words or NONE. | Input: a line of words. | Output: prefix.', lambda s: __import__('os').path.commonprefix(s.split()) or 'NONE', [L('flower flow flight')], wds(1, 5, 'ab', (1, 5)))
Q('Hard', 'Group Anagrams', 'Print anagram groups sorted inside and ordered by first word. | Input: a line of words. | Output: groups.', lambda s: anag(s), [L('eat tea tan ate nat bat')], wds(1, 8, 'abc', (1, 3)))
Q('Hard', 'Minimum Window Contains', 'Print the length of the shortest substring of text containing all letters of the pattern (with multiplicity), or 0. | Input: text then pattern. | Output: length.', lambda s: minwin(*W(s)), [L('ADOBECODEBANC', 'ABC')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 12))), ''.join(r.choice('abc') for _ in range(r.randint(1, 3)))))
Q('Hard', 'Decode Ways', 'A=1..Z=26. Count decodings of a digit string. | Input: digits. | Output: count.', lambda s: dways(s.strip()), [L('226')], lambda r: L(''.join(r.choice('0123456789') for _ in range(r.randint(1, 10))).lstrip('0') or '1'))
Q('Hard', 'Expression Evaluate', 'Evaluate +,-,* integer expression without spaces (precedence, no parentheses). | Input: expression. | Output: value.', lambda s: eval(s.strip()), [L('2+3*4-1')], lambda r: L(''.join(str(r.randint(0, 9)) + r.choice('+-*') for _ in range(r.randint(1, 5))) + str(r.randint(0, 9))))
Q('Hard', 'Big Factorial Digits Sum', 'Compute N! (N<=100) with a digit vector and print the digit sum. | Input: N. | Output: digit sum.', lambda s: ds(fact(int(s))), [L(10)], num(0, 100))
Q('Hard', 'Roman To Integer', 'Convert a Roman numeral to an integer. | Input: Roman numeral (up to 3999). | Output: value.', lambda s: rom(s.strip()), [L('MCMXCIV')], lambda r: L(r.choice(['III', 'IV', 'IX', 'LVIII', 'MCMXCIV', 'XL', 'CD', 'MMXXV', 'XIV'])))
topic('pstl', 'STL Containers', 'map, set, stack, queue, deque, priority_queue and pair')
Q('Easy', 'Set Size', 'Insert numbers in a std::set and print its size. | Input: N, then N integers. | Output: distinct count.', lambda s: len(set(arrs(s))), [L(4, '1 2 2 3')], ar(0, 6, 1, 12))
Q('Easy', 'Map Count Word', 'Count how many times the word in line 2 occurs in line 1. | Input: a line of words, then a word. | Output: count.', lambda s: W(s)[0].split().count(W(s)[1]), [L('a b a', 'a')], lambda r: L(' '.join(r.choice('abc') for _ in range(r.randint(1, 8))), r.choice('abcd')))
Q('Easy', 'Stack Reverse', 'Push all and pop all, printing popped order. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Ap)
Q('Easy', 'Queue Front Back', 'Push all and print front then back. | Input: N, then N integers. | Output: "front back".', lambda s: '%d %d' % (arrs(s)[0], arrs(s)[-1]), [L(3, '1 2 3')], Ap)
Q('Easy', 'Set Sorted Output', 'Print distinct values in sorted order from a set. | Input: N, then N integers. | Output: values.', lambda s: J(sorted(set(arrs(s)))), [L(4, '3 1 3 2')], ar(0, 8, 1, 12))
Q('Easy', 'Max Heap Pop', 'Use priority_queue to print the 2 largest values (or all if fewer). | Input: N, then N integers. | Output: up to 2 values.', lambda s: J(sorted(arrs(s), reverse=True)[:2]), [L(4, '4 9 1 7')], Ap)
Q('Easy', 'Pair Compare', 'Read two pairs and print the lexicographically smaller as "a b". | Input: two lines "a b". | Output: smaller pair.', lambda s: min(W(s), key=lambda l: tuple(map(int, l.split()))), [L('1 5', '1 3')], lambda r: L('%d %d' % (r.randint(0, 3), r.randint(0, 3)), '%d %d' % (r.randint(0, 3), r.randint(0, 3))))
Q('Medium', 'Frequency Map Ordered', 'Print "value:count" ascending by value (map). | Input: N, then N integers. | Output: pairs.', lambda s: J('%d:%d' % kv for kv in sorted(Counter(arrs(s)).items())), [L(4, '3 1 3 2')], ar(0, 6, 1, 12))
Q('Medium', 'Min Heap K Smallest', 'Use a min-heap to print the K smallest. | Input: N, list, K. | Output: K values.', lambda s: (lambda t: J(sorted(t[1:1 + t[0]])[:t[-1]]))(iv(s)), [L(5, '5 3 8 1 9', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 30) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Medium', 'Deque Sliding Max', 'Window maximum using a deque. | Input: N, list, K. | Output: maxima.', lambda s: (lambda t: J(max(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(5, '1 3 -1 5 2', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Medium', 'Balanced Brackets Stack', 'YES if balanced ()[]{}. | Input: a bracket string. | Output: YES/NO.', lambda s: bal(s), [L('([]{})')], lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(2, 8)))))
Q('Medium', 'Common Elements Sets', 'Print sorted common distinct values or NONE. | Input: two lines "n values". | Output: common.', lambda s: J(sorted(set(map(int, W(s)[0].split()[1:])) & set(map(int, W(s)[1].split()[1:])))) or 'NONE', [L('3 1 2 3', '2 2 5')], lambda r: L(*[J([k] + [r.randint(0, 6) for _ in range(k)]) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Medium', 'Multiset Lower Upper', 'Count numbers in [A, B] using a multiset. | Input: N, list, A, B. | Output: count.', lambda s: (lambda t: sum(1 for x in t[1:1 + t[0]] if t[-2] <= x <= t[-1]))(iv(s)), [L(4, '1 5 3 7', 2, 6)], lambda r: (lambda n: L(n, J([r.randint(0, 20) for _ in range(n)]), *sorted([r.randint(0, 20), r.randint(0, 20)])))(r.randint(1, 9)))
Q('Medium', 'Queue Simulation Ticket', 'N people with ticket counts; each round the front buys 1 and re-queues if more needed. Print the finishing order (1-based ids). | Input: N, then N counts. | Output: ids.', lambda s: J(tick(arrs(s))), [L(3, '2 1 3')], ar(1, 4, 1, 6))
Q('Medium', 'Most Frequent Word', 'Print the most frequent word (alphabetically first on tie). | Input: a line. | Output: the word.', lambda s: min(Counter(s.split()).items(), key=lambda x: (-x[1], x[0]))[0], [L('b a b a c')], wl(8))
Q('Hard', 'Dijkstra Shortest Paths', 'Undirected weighted graph; print distances from node 1 to all nodes (-1 unreachable). | Input: N M, then M lines "a b w". | Output: N numbers.', lambda s: dijk(W(s)), [L('3 2', '1 2 4', '2 3 1')], gdij)
Q('Hard', 'BFS On Grid', 'Shortest path from top-left to bottom-right through "." cells (4-direction); print steps or -1. | Input: R C then R rows of . and #. | Output: steps.', lambda s: bfsgrid(W(s)), [L('2 2', '..', '..')], ggrid)
Q('Hard', 'LRU Cache With List Map', 'Capacity C; get/put; print results of get. | Input: C, Q, then commands. | Output: gets.', lambda s: lrud(s), [L(2, 4, 'put 1 1', 'put 2 2', 'get 1', 'get 3')], lambda r: L(*([r.randint(1, 3), 8] + [r.choice(['put %d %d' % (r.randint(1, 4), r.randint(1, 9)), 'get %d' % r.randint(1, 4)]) for _ in range(8)])))
Q('Hard', 'Top K Frequent Elements', 'Print the K most frequent (count desc, value asc). | Input: N, list, K. | Output: K values.', lambda s: (lambda t: J(k for k, _ in sorted(Counter(t[1:1 + t[0]]).items(), key=lambda x: (-x[1], x[0]))[:t[-1]]))(iv(s)), [L(6, '1 1 1 2 2 3', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 5) for _ in range(n)]), 1))(r.randint(1, 10)))
Q('Hard', 'Topological Order', 'DAG with N nodes: print the lexicographically smallest topological order. | Input: N M then M lines "a b" (a before b). | Output: order.', lambda s: topo(W(s)), [L('3 2', '1 3', '2 3')], lambda r: (lambda n: L('%d %d' % (n, 3), *['%d %d' % tuple(sorted(r.sample(range(1, n + 1), 2))) for _ in range(3)]))(r.randint(3, 6)))
Q('Hard', 'Union Find Components', 'Count connected components after unions. | Input: N M then M lines "a b". | Output: components.', lambda s: uf(W(s)), [L('4 2', '1 2', '3 4')], lambda r: (lambda n: L('%d %d' % (n, 3), *['%d %d' % (r.randint(1, n), r.randint(1, n)) for _ in range(3)]))(r.randint(2, 7)))
Q('Hard', 'Course Schedule Cycle', 'Directed graph: print YES if it has a cycle else NO. | Input: N M then M lines "a b". | Output: YES/NO.', lambda s: cyc(W(s)), [L('2 2', '1 2', '2 1')], lambda r: (lambda n: L('%d %d' % (n, 4), *['%d %d' % (r.randint(1, n), r.randint(1, n)) for _ in range(4)]))(r.randint(2, 5)))
topic('pcls', 'Classes, Templates and Operators', 'classes, constructors, inheritance, virtual functions, operator overloading and templates')
Q('Easy', 'Class Rectangle', 'class Rectangle with area() and perimeter(). | Input: w h. | Output: "area perimeter".', lambda s: '%d %d' % (iv(s)[0] * iv(s)[1], 2 * sum(iv(s))), [L('3 4')], two(1, 30))
Q('Easy', 'Constructor Initializer List', 'class Point(x, y) built with an initializer list; print "(x, y)". | Input: x y. | Output: text.', lambda s: '(%d, %d)' % tuple(iv(s)), [L('1 2')], two(-9, 9))
Q('Easy', 'Counter Class', 'class Counter with inc/dec and a getter. Apply commands, print value. | Input: N, then inc/dec. | Output: value.', lambda s: sum(1 if c == 'inc' else -1 for c in W(s)[1:]), [L(3, 'inc', 'inc', 'dec')], lambda r: L(*([5] + [r.choice(['inc', 'dec']) for _ in range(5)])))
Q('Easy', 'Const Member Getter', 'Class Circle with const double area() (3.14159*r*r). Print 2 decimals. | Input: r. | Output: area.', lambda s: '%.2f' % (3.14159 * int(s) ** 2), [L(3)], num(1, 20))
Q('Easy', 'Static Member Count', 'A static member counts objects created. Create N and print the count. | Input: N. | Output: N.', lambda s: int(s), [L(4)], num(0, 40))
Q('Easy', 'Struct Student Total', 'struct with name and 3 marks; print "name total". | Input: name m1 m2 m3. | Output: "name total".', lambda s: '%s %d' % (W(s)[0].split()[0], sum(map(int, W(s)[0].split()[1:]))), [L('Asha 1 2 3')], lambda r: L('%s %d %d %d' % (r.choice(['Asha', 'Dev']), r.randint(0, 100), r.randint(0, 100), r.randint(0, 100))))
Q('Easy', 'Default Argument Function', 'Write area(int w, int h = 1). Lines are "w" or "w h": print each area. | Input: N, then N lines. | Output: areas.', lambda s: '\n'.join(str(math.prod(map(int, l.split()))) for l in W(s)[1:]), [L(2, '5', '3 4')], lambda r: L(*([3] + [r.choice(['%d' % r.randint(1, 9), '%d %d' % (r.randint(1, 9), r.randint(1, 9))]) for _ in range(3)])))
Q('Medium', 'Operator Plus Vector', 'Overload operator+ for Vec(x,y); print "(x, y)". | Input: "x1 y1" then "x2 y2". | Output: sum.', lambda s: (lambda a, b: '(%d, %d)' % (a[0] + b[0], a[1] + b[1]))(*[list(map(int, l.split())) for l in W(s)]), [L('1 2', '3 4')], lambda r: L('%d %d' % (r.randint(-5, 5), r.randint(-5, 5)), '%d %d' % (r.randint(-5, 5), r.randint(-5, 5))))
Q('Medium', 'Virtual Function Shapes', 'Base Shape with virtual area(); lines "circle r" or "rect w h"; print each area (pi=3.14159, 2 decimals). | Input: N, then N lines. | Output: areas.', lambda s: '\n'.join('%.2f' % (3.14159 * int(l.split()[1]) ** 2 if l.split()[0] == 'circle' else int(l.split()[1]) * int(l.split()[2])) for l in W(s)[1:]), [L(2, 'circle 1', 'rect 2 3')], lambda r: L(*([3] + [r.choice(['circle %d' % r.randint(1, 9), 'rect %d %d' % (r.randint(1, 9), r.randint(1, 9))]) for _ in range(3)])))
Q('Medium', 'Template Max Function', 'template<T> T maxOf(T a, T b). Lines are "i a b" (ints) or "d a b" (doubles, print 1 decimal). | Input: N, then N lines. | Output: maxima.', lambda s: '\n'.join(str(max(int(l.split()[1]), int(l.split()[2]))) if l.split()[0] == 'i' else '%.1f' % max(float(l.split()[1]), float(l.split()[2])) for l in W(s)[1:]), [L(2, 'i 3 9', 'd 1.5 0.5')], lambda r: L(*([3] + [r.choice(['i %d %d' % (r.randint(0, 9), r.randint(0, 9)), 'd %.1f %.1f' % (r.randint(0, 9) / 2, r.randint(0, 9) / 2)]) for _ in range(3)])))
Q('Medium', 'Stack Class Template', 'Template stack with push/pop/top; EMPTY on empty pop/top. | Input: N, commands push X/pop/peek. | Output: pop/peek lines.', skc, [L(4, 'push 1', 'peek', 'pop', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'peek']) for _ in range(6)])))
Q('Medium', 'Comparison Operator Sort', 'Records "name mark" with operator<: higher mark first then name. Print names. | Input: N, then lines. | Output: names.', lambda s: J(l.split()[0] for l in sorted(W(s)[1:], key=lambda l: (-int(l.split()[1]), l.split()[0]))), [L(3, 'b 5', 'a 5', 'c 9')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 3)) for c in 'abcd'])))
Q('Medium', 'Bank Account Class', 'Account with deposit/withdraw/balance; INSUFFICIENT when too much. | Input: start, N, commands. | Output: replies.', acct, [L(100, 3, 'deposit 50', 'withdraw 200', 'balance')], gac)
Q('Medium', 'Fraction Class Reduce', 'Fraction with operator+ reduced to lowest terms: print "p/q". | Input: a b c d. | Output: p/q.', lambda s: (lambda a, b, c, d: '%d/%d' % ((a * d + c * b) // math.gcd(a * d + c * b, b * d), (b * d) // math.gcd(a * d + c * b, b * d)))(*iv(s)), [L('1 2 1 3')], lambda r: L(J([r.randint(1, 6) for _ in range(4)])))
Q('Hard', 'Matrix Class Multiply', 'Class Matrix2 with operator*; print rows. | Input: two lines of 4 numbers. | Output: two rows.', lambda s: (lambda a, b: '%d %d\n%d %d' % (a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3], a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]))(*[list(map(int, l.split())) for l in W(s)]), [L('1 2 3 4', '5 6 7 8')], lambda r: L(J([r.randint(-3, 5) for _ in range(4)]), J([r.randint(-3, 5) for _ in range(4)])))
Q('Hard', 'Big Integer Class Add', 'Class BigInt storing digits with operator+. Add two numbers up to 50 digits. | Input: two numbers. | Output: sum.', lambda s: str(int(W(s)[0]) + int(W(s)[1])), [L('99999999999999999999', 1)], lambda r: L(*[str(r.randint(0, 10**r.randint(1, 50))) for _ in range(2)]))
Q('Hard', 'Polymorphic Employee Payroll', 'Base Employee virtual pay(): manager base*2, engineer base+1000, intern base. Print total. | Input: N, lines "kind base". | Output: total.', lambda s: sum(int(l.split()[1]) * 2 if l.split()[0] == 'manager' else int(l.split()[1]) + 1000 if l.split()[0] == 'engineer' else int(l.split()[1]) for l in W(s)[1:]), [L(2, 'manager 100', 'intern 40')], lambda r: L(*([3] + ['%s %d' % (r.choice(['manager', 'engineer', 'intern']), r.randint(1, 500)) for _ in range(3)])))
Q('Hard', 'Priority Task Manager', 'add name priority / next (highest priority, earliest on tie) or EMPTY. | Input: N, commands. | Output: next replies.', lambda s: ptm(s), [L(4, 'add a 1', 'add b 5', 'next', 'next')], lambda r: L(*([7] + [r.choice(['add %s %d' % (r.choice('abc'), r.randint(1, 3)), 'next']) for _ in range(7)])))
Q('Hard', 'Observer Pattern', 'sub/unsub/publish with delivery lines "name got msg". | Input: N, commands. | Output: deliveries.', lambda s: obs(s), [L(3, 'sub a', 'sub b', 'publish hi')], lambda r: L(*([6] + [r.choice(['sub a', 'sub b', 'unsub a', 'publish hi']) for _ in range(6)])))
Q('Hard', 'Parking Lot Simulation', 'park/leave with PARKED/FULL/LEFT/MISSING replies. | Input: C, N, commands. | Output: replies.', lambda s: parkl(s), [L(1, 3, 'park a', 'park b', 'leave a')], lambda r: L(*([r.randint(1, 2), 7] + [r.choice(['park a', 'park b', 'park c', 'leave a', 'leave b']) for _ in range(7)])))
Q('Hard', 'Inventory With Classes', 'add/remove/total with SHORT on insufficient removals. | Input: N, commands. | Output: replies.', lambda s: invq(s), [L(3, 'add a 5', 'remove a 7', 'total')], lambda r: L(*([7] + [r.choice(['add a %d' % r.randint(1, 5), 'add b %d' % r.randint(1, 5), 'remove a %d' % r.randint(1, 6), 'remove b %d' % r.randint(1, 6), 'total']) for _ in range(7)])))

#end

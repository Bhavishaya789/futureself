from lpy import *
subject('java', 'Java', 'java', 'lang', 'Language-specific practice: Scanner I/O, arrays and Strings, collections, classes and exceptions, recursion.')
Ai = ar(-9, 20, 1, 10)

def fr(a): return a
def sq(n): return [i * i for i in range(1, n + 1)]
def isp(n): return n > 1 and all(n % d for d in range(2, int(n ** .5) + 1))
def gcd(a, b): return math.gcd(a, b)
def tri(s): return '\n'.join(' '.join(str(math.comb(i, k)) for k in range(i + 1)) for i in range(int(s)))
def fibn(n):
    a, b = 0, 1
    for _ in range(n): a, b = b, a + b
    return a
def fact(n): return math.factorial(n)
def ds(n): return sum(map(int, str(abs(n))))
def bal(s):
    st = []
    for c in s.strip():
        if c in '([{': st.append(c)
        else:
            if not st or '([{'.index(st.pop()) != ')]}'.index(c): return 'NO'
    return 'YES' if not st else 'NO'
def bsz(s):
    l = W(s); n = int(l[0]); return l
def lsr(w):
    best = 0; seen = {}; lo = 0
    for i, c in enumerate(w):
        if c in seen and seen[c] >= lo: lo = seen[c] + 1
        seen[c] = i; best = max(best, i - lo + 1)
    return best
def kad(a):
    b = c = a[0]
    for x in a[1:]: c = max(x, c + x); b = max(b, c)
    return b

def rooms(ls):
    ev = []
    for l in ls: a, b = map(int, l.split()); ev += [(a, 1), (b, -1)]
    ev.sort(key=lambda e: (e[0], e[1])); c = m = 0
    for _, d in ev: c += d; m = max(m, c)
    return m
def mint(ls):
    iv_ = sorted(tuple(map(int, l.split())) for l in ls); o = []
    for a, b in iv_:
        if o and a <= o[-1][1]: o[-1][1] = max(o[-1][1], b)
        else: o.append([a, b])
    return '\n'.join('%d %d' % tuple(x) for x in o)

def ll(cs):
    d = deque()
    for c in cs:
        p = c.split()
        d.appendleft(int(p[1])) if p[0] == 'first' else d.append(int(p[1]))
    return list(d)
def bk(cs):
    b = {'a': 100, 'b': 100, 'c': 100}; o = []
    for c in cs:
        p = c.split()
        if p[0] == 'show': o.append(str(b[p[1]]))
        else:
            if b[p[1]] < int(p[3]): o.append('FAIL')
            else: b[p[1]] -= int(p[3]); b[p[2]] += int(p[3])
    return '\n'.join(o) or 'NONE'
def mm(l):
    a, b = map(int, l[0].split()); A = [list(map(int, x.split())) for x in l[1:1 + a]]
    c, d = map(int, l[1 + a].split()); B = [list(map(int, x.split())) for x in l[2 + a:2 + a + c]]
    if (a, b) != (c, d): return 'DIMENSION MISMATCH'
    return '\n'.join(J(x + y for x, y in zip(A[i], B[i])) for i in range(a))

def hanoi(n, a='A', b='B', c='C'):
    return '' if n == 0 else '\n'.join(x for x in [hanoi(n - 1, a, c, b), a + ' ' + c, hanoi(n - 1, b, a, c)] if x)
def selswaps(a):
    a = a[:]; c = 0
    for i in range(len(a)):
        m = min(range(i, len(a)), key=lambda j: (a[j], j))
        if m != i: a[i], a[m] = a[m], a[i]; c += 1
    return c
def coinmin(t):
    k = t[0]; cs = t[1:1 + k]; T = t[-1]; INF = 10**9; d = [0] + [INF] * T
    for x in range(1, T + 1):
        for c in cs:
            if c <= x: d[x] = min(d[x], d[x - c] + 1)
    return d[T] if d[T] < INF else -1
def nq(n):
    def go(r, cols, d1, d2):
        if r == n: return 1
        return sum(go(r + 1, cols | 1 << c, d1 | 1 << (r + c), d2 | 1 << (r - c + n)) for c in range(n) if not (cols >> c & 1 or d1 >> (r + c) & 1 or d2 >> (r - c + n) & 1))
    return go(0, 0, 0, 0)
def lcs(a, b):
    d = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a)):
        for j in range(len(b)): d[i + 1][j + 1] = d[i][j] + 1 if a[i] == b[j] else max(d[i][j + 1], d[i + 1][j])
    return d[-1][-1]

def ed(a, b):
    d = [[i + j if i * j == 0 else 0 for j in range(len(b) + 1)] for i in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1): d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] != b[j - 1]))
    return d[-1][-1]


def parkl(s):
    l = W(s); c = int(l[0]); cur = []; o = []
    for x in l[2:2 + int(l[1])]:
        p = x.split()
        if p[0] == 'park':
            if p[1] in cur or len(cur) >= c: o.append('FULL')
            else: cur.append(p[1]); o.append('PARKED')
        else:
            if p[1] in cur: cur.remove(p[1]); o.append('LEFT')
            else: o.append('MISSING')
    return '\n'.join(o)

topic('jio', 'Basics and Scanner Input', 'Scanner, primitive types, operators, control flow and printf')
Q('Easy', 'Sum Of Two (Scanner)', 'Read two ints with Scanner.nextInt() and print their sum. | Input: two integers. | Output: the sum.', lambda s: sum(iv(s)), [L('3 4')], two(-1000, 1000))
Q('Easy', 'Integer Division and Remainder', 'Print a/b (integer division) and a%b separated by a space. Use positive numbers. | Input: a b. | Output: "q r".', lambda s: '%d %d' % divmod(*iv(s)), [L('17 5')], lambda r: L('%d %d' % (r.randint(0, 200), r.randint(1, 20))))
Q('Easy', 'Largest Of Three', 'Print the largest of three ints using if/else or Math.max. | Input: three integers. | Output: the largest.', lambda s: max(iv(s)), [L('3 9 2')], lambda r: L(J([r.randint(-50, 50) for _ in range(3)])))
Q('Easy', 'Even Or Odd', 'Print EVEN or ODD. | Input: N. | Output: EVEN or ODD.', lambda s: 'EVEN' if int(s) % 2 == 0 else 'ODD', [L(7)], num(-100, 100))
Q('Easy', 'Sum 1 to N', 'Use a for loop to print 1+2+...+N. | Input: N. | Output: the sum.', lambda s: sum(range(1, int(s) + 1)), [L(10)], num(1, 1000))
Q('Easy', 'Printf Two Decimals', 'Read a double and print it with System.out.printf("%.2f"). | Input: a real number. | Output: the rounded value.', lambda s: '%.2f' % float(s), [L('3.14159')], lambda r: L(round(r.uniform(-100, 100), 4)))
Q('Easy', 'Char Arithmetic', 'Read a lowercase letter and print the next letter in the alphabet (z wraps to a). | Input: one letter. | Output: the next letter.', lambda s: chr((ord(s.strip()) - 97 + 1) % 26 + 97), [L('c')], lambda r: L(r.choice('abcdefghijklmnopqrstuvwxyz')))
Q('Medium', 'Grade Switch', 'Read a mark 0-100; print A (>=90), B (>=75), C (>=50) else F using switch or if. | Input: mark. | Output: grade letter.', lambda s: (lambda m: 'A' if m >= 90 else 'B' if m >= 75 else 'C' if m >= 50 else 'F')(int(s)), [L(80)], num(0, 100))
Q('Medium', 'Leap Year', 'Print LEAP or COMMON. | Input: a year. | Output: LEAP or COMMON.', lambda s: 'LEAP' if (lambda y: y % 4 == 0 and (y % 100 != 0 or y % 400 == 0))(int(s)) else 'COMMON', [L(2000)], num(1, 3000))
Q('Medium', 'Digit Sum', 'Print the sum of the digits of N (N may be negative). | Input: N. | Output: digit sum.', lambda s: ds(int(s)), [L(1234)], num(-99999, 99999))
Q('Medium', 'Reverse Number', 'Reverse the digits of a non-negative integer (drop leading zeros of the result). | Input: N. | Output: reversed number.', lambda s: int(str(int(s))[::-1]), [L(1200)], num(0, 999999))
Q('Medium', 'Prime Check', 'Print PRIME or NOT PRIME. | Input: N. | Output: the verdict.', lambda s: 'PRIME' if isp(int(s)) else 'NOT PRIME', [L(17)], num(0, 5000))
Q('Medium', 'Multiplication Table', 'Print N x 1 .. N x 10 as "N x i = v", one per line. | Input: N. | Output: 10 lines.', lambda s: '\n'.join('%d x %d = %d' % (int(s), i, int(s) * i) for i in range(1, 11)), [L(3)], num(1, 30))
Q('Medium', 'Long Overflow Safe Product', 'Multiply two ints up to 10^9 using long and print the product. | Input: a b. | Output: a*b.', lambda s: iv(s)[0] * iv(s)[1], [L('1000000000 1000000000')], lambda r: L('%d %d' % (r.randint(1, 10**9), r.randint(1, 10**9))))
Q('Hard', 'GCD and LCM', 'Print GCD and LCM of two positive numbers. | Input: a b. | Output: "gcd lcm".', lambda s: '%d %d' % (gcd(*iv(s)), iv(s)[0] * iv(s)[1] // gcd(*iv(s))), [L('12 18')], two(1, 500))
Q('Hard', 'Number To Binary', 'Convert N to binary without Integer.toBinaryString. | Input: N. | Output: the binary text.', lambda s: bin(int(s))[2:], [L(10)], num(0, 100000))
Q('Hard', 'Armstrong Check', 'Print YES if N equals the sum of cubes of its three digits (N is 100..999) else NO. | Input: N. | Output: YES/NO.', lambda s: 'YES' if sum(int(c) ** 3 for c in s.strip()) == int(s) else 'NO', [L(153)], lambda r: L(r.choice([153, 370, 371, 407, 100, 222, 999, 500, 123, 345])))
Q('Hard', 'Pattern Right Triangle', 'Print a right triangle of N rows of stars. | Input: N. | Output: N rows.', lambda s: '\n'.join('*' * i for i in range(1, int(s) + 1)), [L(3)], num(1, 12))
Q('Hard', 'Count Digit Occurrences', 'Count how many times digit D occurs in the numbers 1..N. | Input: N D. | Output: the count.', lambda s: sum(str(i).count(str(iv(s)[1])) for i in range(1, iv(s)[0] + 1)), [L('20 1')], lambda r: L('%d %d' % (r.randint(1, 500), r.randint(0, 9))))
Q('Hard', 'Fibonacci Mod', 'Print the Nth Fibonacci number (F0=0, F1=1) modulo 1000000007 using a loop. | Input: N (<=100000). | Output: the value.', lambda s: fibn(int(s)) % (10**9 + 7), [L(10)], num(0, 100000))

topic('jarr', 'Arrays and Strings', 'int[] arrays, 2D arrays, String and StringBuilder methods')
Q('Easy', 'Array Sum', 'Read N ints into an int[] and print the sum. | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ai)
Q('Easy', 'Array Maximum', 'Print the maximum of the array. | Input: N, then N integers. | Output: the maximum.', lambda s: max(arrs(s)), [L(3, '4 9 2')], Ai)
Q('Easy', 'Reverse Array', 'Print the array in reverse order. | Input: N, then N integers. | Output: reversed.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Ai)
Q('Easy', 'String Length and Upper', 'Print the length and then the upper-case version of the word, space separated. | Input: a word. | Output: "len UPPER".', lambda s: '%d %s' % (len(s.strip()), s.strip().upper()), [L('java')], st(1, 12, 'abcdefg'))
Q('Easy', 'Count Vowels', 'Count vowels in the line (case-insensitive). | Input: a line. | Output: the count.', lambda s: sum(c in 'aeiouAEIOU' for c in s), [L('Hello World')], lambda r: L(''.join(r.choice('abEiOxyz ') for _ in range(r.randint(1, 15)))))
Q('Easy', 'Palindrome String', 'Print YES if the word reads the same backwards, else NO. | Input: a word. | Output: YES/NO.', lambda s: 'YES' if s.strip() == s.strip()[::-1] else 'NO', [L('level')], st(1, 6, 'ab'))
Q('Easy', 'Second Character Index', 'Print the index of the first occurrence of the letter in the word, or -1 (indexOf). | Input: word then letter. | Output: the index.', lambda s: W(s)[0].find(W(s)[1]), [L('hello', 'l')], lambda r: L(''.join(r.choice('abcd') for _ in range(r.randint(1, 8))), r.choice('abcde')))
Q('Medium', 'Second Largest', 'Print the second largest distinct value, or NONE. | Input: N, then N integers. | Output: the value.', lambda s: (lambda d: str(d[-2]) if len(d) > 1 else 'NONE')(sorted(set(arrs(s)))), [L(4, '5 9 9 2')], Ai)
Q('Medium', 'Remove Duplicates Keep Order', 'Print the array without duplicate values, keeping first occurrences. | Input: N, then N integers. | Output: the values.', lambda s: J(dict.fromkeys(arrs(s))), [L(5, '1 2 1 3 2')], ar(0, 4, 1, 12))
Q('Medium', 'Rotate Array Right', 'Rotate right by K positions. | Input: N, list, K. | Output: the rotated array.', lambda s: (lambda t: (lambda a, k: J(a[-(k % len(a)):] + a[:-(k % len(a))] if k % len(a) else a))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 2)], arq(0, 9, 1, 8, 0, 15))
Q('Medium', 'StringBuilder Reverse Words', 'Reverse the order of the words using StringBuilder. | Input: a line of words. | Output: reversed word order.', lambda s: J(s.split()[::-1]), [L('one two three')], wl())
Q('Medium', 'Anagram Check', 'Print YES if the two words are anagrams. | Input: two words. | Output: YES/NO.', lambda s: 'YES' if sorted(W(s)[0]) == sorted(W(s)[1]) else 'NO', [L('listen', 'silent')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 4))) for _ in range(2)]))
Q('Medium', 'Character Frequency', 'Print each distinct lowercase letter and its count in alphabetical order as "c:n". | Input: a word. | Output: pairs separated by spaces.', lambda s: J('%s:%d' % kv for kv in sorted(Counter(s.strip()).items())), [L('banana')], st(1, 12, 'abcd'))
Q('Medium', 'Matrix Row Sums', 'Print the sum of each row of an R x C int[][]. | Input: R C, then R rows. | Output: R sums.', lambda s: J(sum(map(int, l.split())) for l in W(s)[1:]), [L('2 2', '1 2', '3 4')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(0, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 4), r.randint(1, 4)))
Q('Medium', 'Binary Search Index', 'The array is sorted ascending. Print the index of X using binary search or -1. | Input: N, sorted list, X. | Output: index.', lambda s: (lambda t: (lambda a, x: a.index(x) if x in a else -1)(t[1:1 + t[0]], t[-1]))(iv(s)), [L(4, '1 3 5 7', 5)], lambda r: (lambda n: L(n, J(sorted(r.sample(range(0, 30), n))), r.randint(0, 30)))(r.randint(1, 8)))
Q('Hard', 'Longest Common Prefix', 'Print the longest common prefix of the words, or NONE. | Input: a line of words. | Output: the prefix.', lambda s: __import__('os').path.commonprefix(s.split()) or 'NONE', [L('flower flow flight')], wds(1, 5, 'ab', (1, 5)))
Q('Hard', 'Longest Substring Without Repeat', 'Print the length of the longest substring without repeating characters. | Input: a word. | Output: the length.', lambda s: lsr(s.strip()), [L('abcabcbb')], st(1, 14, 'abcd'))
Q('Hard', 'Matrix Rotate 90', 'Rotate an N x N matrix 90 degrees clockwise and print it. | Input: N, then N rows. | Output: the rotated rows.', lambda s: '\n'.join(J(r) for r in zip(*[list(map(int, l.split())) for l in W(s)[1:]][::-1])), [L(2, '1 2', '3 4')], lambda r: (lambda n: L(n) + ''.join(L(J([r.randint(0, 9) for _ in range(n)])) for _ in range(n)))(r.randint(1, 4)))
Q('Hard', 'Kadane Maximum Subarray', 'Print the maximum sum of a contiguous subarray. | Input: N, then N integers. | Output: the sum.', lambda s: kad(arrs(s)), [L(5, '-2 1 -3 4 5')], ar(-9, 9, 1, 12))
Q('Hard', 'Two Sum Indices', 'Print the first pair of indices i<j (in nested-loop order) whose values add to K, or NONE. | Input: N, list, K. | Output: "i j".', lambda s: (lambda t: next(('%d %d' % (i, j) for i in range(t[0]) for j in range(i + 1, t[0]) if t[1 + i] + t[1 + j] == t[-1]), 'NONE'))(iv(s)), [L(4, '2 7 11 15', 9)], arq(-5, 12, 2, 9, -5, 15))
Q('Hard', 'Count Subarrays With Sum K', 'Count contiguous subarrays whose sum equals K. | Input: N, list, K. | Output: the count.', lambda s: (lambda t: (lambda a, k: sum(1 for i in range(len(a)) for j in range(i, len(a)) if sum(a[i:j + 1]) == k))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(4, '1 1 1 2', 2)], arq(-2, 4, 1, 9, -2, 6))
topic('jcoll', 'Collections Framework', 'ArrayList, HashMap, HashSet, TreeMap, Deque, PriorityQueue and sorting')
Q('Easy', 'ArrayList Sum', 'Add numbers to an ArrayList and print the sum and size. | Input: N, then N integers. | Output: "sum size".', lambda s: '%d %d' % (sum(arrs(s)), len(arrs(s))), [L(3, '1 2 3')], Ai)
Q('Easy', 'Sort Ascending', 'Use Collections.sort and print the list. | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(3, '3 1 2')], Ai)
Q('Easy', 'HashSet Distinct', 'Print how many distinct numbers there are using a HashSet. | Input: N, then N integers. | Output: count.', lambda s: len(set(arrs(s))), [L(4, '1 2 2 3')], ar(0, 6, 1, 12))
Q('Easy', 'Contains Check', 'Print YES if X is in the list else NO. | Input: N, list, X. | Output: YES/NO.', lambda s: 'YES' if iv(s)[-1] in iv(s)[1:-1] else 'NO', [L(3, '1 2 3', 2)], arq(0, 9, 1, 8, 0, 9))
Q('Easy', 'Word Count Map', 'Print how many times the first word of line 2 appears in line 1 using a HashMap. | Input: a line of words, then a word. | Output: the count.', lambda s: W(s)[0].split().count(W(s)[1]), [L('a b a', 'a')], lambda r: L(' '.join(r.choice('abc') for _ in range(r.randint(1, 8))), r.choice('abcd')))
Q('Easy', 'Stack Push Pop', 'Push all numbers on a Stack and pop them printing the popped order. | Input: N, then N integers. | Output: popped order.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], Ai)
Q('Easy', 'Queue Order', 'Offer all numbers to a Queue and poll them all, printing the order. | Input: N, then N integers. | Output: same order.', lambda s: J(arrs(s)), [L(3, '1 2 3')], Ai)
Q('Medium', 'Frequency Sorted By Key', 'Use a TreeMap to print "value:count" for each distinct number in ascending order. | Input: N, then N integers. | Output: pairs separated by spaces.', lambda s: J('%d:%d' % kv for kv in sorted(Counter(arrs(s)).items())), [L(4, '3 1 3 2')], ar(0, 6, 1, 12))
Q('Medium', 'Most Frequent Number', 'Print the number with the highest count (smallest on tie). | Input: N, then N integers. | Output: the number.', lambda s: min(Counter(arrs(s)).items(), key=lambda x: (-x[1], x[0]))[0], [L(5, '1 2 2 3 3')], ar(0, 5, 1, 12))
Q('Medium', 'Sort By Length Then Alpha', 'Sort words by length, then alphabetically, using a Comparator. | Input: a line of words. | Output: sorted words.', lambda s: J(sorted(s.split(), key=lambda w: (len(w), w))), [L('ccc a bb aa')], wl())
Q('Medium', 'Balanced Brackets', 'Print YES if the brackets ()[]{} are balanced using a Deque. | Input: a bracket string. | Output: YES/NO.', lambda s: 'YES' if bal(s) == 'YES' else 'NO', [L('([]{})')], lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(2, 8)))))
Q('Medium', 'K Smallest With PriorityQueue', 'Print the K smallest numbers ascending using a PriorityQueue. | Input: N, list, K. | Output: K numbers.', lambda s: (lambda t: J(sorted(t[1:1 + t[0]])[:t[-1]]))(iv(s)), [L(5, '5 3 8 1 9', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 30) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Medium', 'Common Elements', 'Print the sorted common distinct elements of two lists (retainAll), or NONE. | Input: two lines "n values". | Output: the common values.', lambda s: J(sorted(set(map(int, W(s)[0].split()[1:])) & set(map(int, W(s)[1].split()[1:])))) or 'NONE', [L('3 1 2 3', '2 2 5')], lambda r: L(*[J([k] + [r.randint(0, 6) for _ in range(k)]) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Medium', 'Iterate Map Entries', 'Lines "name mark": print the name with the highest mark (first on tie). | Input: N, then N lines. | Output: the name.', lambda s: max(W(s)[1:], key=lambda l: int(l.split()[1])).split()[0] if len(set(int(l.split()[1]) for l in W(s)[1:])) == len(W(s)[1:]) else next(l.split()[0] for l in W(s)[1:] if int(l.split()[1]) == max(int(x.split()[1]) for x in W(s)[1:])), [L(3, 'a 5', 'b 9', 'c 2')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 20)) for c in 'abcd'])))
Q('Hard', 'LRU Cache LinkedHashMap', 'Capacity C; "get K" prints value or -1, "put K V" inserts. Print one line per get. | Input: C, Q, then Q commands. | Output: gets.', lambda s: lrud(s), [L(2, 4, 'put 1 1', 'put 2 2', 'get 1', 'get 3')], lambda r: L(*([r.randint(1, 3), 8] + [r.choice(['put %d %d' % (r.randint(1, 4), r.randint(1, 9)), 'get %d' % r.randint(1, 4)]) for _ in range(8)])))
Q('Hard', 'Group Anagrams Map', 'Group anagram words; print each group sorted on a line, groups ordered by their first word. | Input: a line of words. | Output: one group per line.', lambda s: anag(s), [L('eat tea tan ate nat bat')], wds(1, 8, 'abc', (1, 3)))
Q('Hard', 'Sliding Window Max Deque', 'Print the maximum of every window of K using a Deque. | Input: N, list, K. | Output: maxima.', lambda s: (lambda t: J(max(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(5, '1 3 -1 5 2', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Hard', 'Top K Frequent', 'Print the K most frequent numbers, ordered by count desc then value asc. | Input: N, list, K. | Output: K numbers.', lambda s: (lambda t: J(k for k, _ in sorted(Counter(t[1:1 + t[0]]).items(), key=lambda x: (-x[1], x[0]))[:t[-1]]))(iv(s)), [L(6, '1 1 1 2 2 3', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 5) for _ in range(n)]), 1))(r.randint(1, 10)))
Q('Hard', 'Meeting Rooms', 'Intervals "start end": print the minimum rooms needed (an interval ending at t does not overlap one starting at t). | Input: N, then N lines. | Output: the number.', lambda s: rooms(W(s)[1:]), [L(3, '0 30', '5 10', '15 20')], lambda r: L(*([5] + [(lambda a: '%d %d' % (a, a + r.randint(1, 8)))(r.randint(0, 15)) for _ in range(5)])))
Q('Hard', 'Merge Intervals', 'Merge overlapping intervals (touching ones merge too) and print them sorted. | Input: N, then N lines "a b". | Output: merged intervals one per line.', lambda s: mint(W(s)[1:]), [L(3, '1 3', '2 6', '8 10')], lambda r: L(*([5] + [(lambda a: '%d %d' % (a, a + r.randint(0, 5)))(r.randint(0, 15)) for _ in range(5)])))
topic('joop', 'Classes, Interfaces and Exceptions', 'Objects, inheritance, interfaces, polymorphism and try/catch')
Q('Easy', 'Rectangle Class', 'Create class Rectangle with width/height and methods area() and perimeter(). Print "area perimeter". | Input: w h. | Output: area perimeter.', lambda s: '%d %d' % (iv(s)[0] * iv(s)[1], 2 * sum(iv(s))), [L('3 4')], two(1, 30))
Q('Easy', 'Constructor And toString', 'Class Person(name, age) with toString "name is age years old". | Input: name age. | Output: the sentence.', lambda s: '%s is %s years old' % tuple(W(s)[0].split()), [L('Asha 20')], lambda r: L('%s %d' % (r.choice(['Asha', 'Ravi', 'Isha']), r.randint(1, 90))))
Q('Easy', 'Static Counter', 'A static field counts created objects. Create N objects and print the count. | Input: N. | Output: N.', lambda s: int(s), [L(3)], num(0, 50))
Q('Easy', 'Getter Setter Clamp', 'A setter keeps marks between 0 and 100 by clamping. Set the value then print it. | Input: a mark. | Output: the stored mark.', lambda s: max(0, min(100, int(s))), [L(120)], num(-50, 150))
Q('Easy', 'Try Catch Division', 'Print the integer quotient a/b or the text ERROR when b is 0 (catch ArithmeticException). | Input: a b. | Output: quotient or ERROR.', lambda s: 'ERROR' if iv(s)[1] == 0 else int(iv(s)[0] / iv(s)[1]), [L('7 0')], lambda r: L('%d %d' % (r.randint(0, 50), r.choice([0, 1, 2, 3, 5]))))
Q('Easy', 'Parse Int Safely', 'Integer.parseInt the word; print the number doubled or INVALID (catch NumberFormatException). | Input: a word. | Output: doubled or INVALID.', lambda s: (lambda w: int(w) * 2 if re.fullmatch(r'-?\d+', w) else 'INVALID')(s.strip()), [L('21')], lambda r: L(r.choice(['12', '-4', 'abc', '3x', '0', '99', 'x'])))
Q('Easy', 'Array Index Guard', 'Print arr[i] or OUT when i is out of range (catch ArrayIndexOutOfBounds). | Input: N, N numbers, then i. | Output: value or OUT.', lambda s: (lambda t: str(t[1:1 + t[0]][t[-1]]) if 0 <= t[-1] < t[0] else 'OUT')(iv(s)), [L(3, '5 6 7', 5)], arq(0, 9, 1, 6, -2, 8))
Q('Medium', 'Shape Interface', 'Interface Shape with area(). Lines "circle r" or "rect w h": print each area with 2 decimals (pi = Math.PI). | Input: N, then N lines. | Output: areas.', lambda s: '\n'.join('%.2f' % (math.pi * int(l.split()[1]) ** 2 if l.split()[0] == 'circle' else int(l.split()[1]) * int(l.split()[2])) for l in W(s)[1:]), [L(2, 'circle 1', 'rect 2 3')], lambda r: L(*([3] + [r.choice(['circle %d' % r.randint(1, 9), 'rect %d %d' % (r.randint(1, 9), r.randint(1, 9))]) for _ in range(3)])))
Q('Medium', 'Abstract Employee Pay', 'Abstract class Employee with pay(): manager base*2, engineer base+1000, intern base. Print total pay. | Input: N, then lines "kind base". | Output: total.', lambda s: sum(int(l.split()[1]) * 2 if l.split()[0] == 'manager' else int(l.split()[1]) + 1000 if l.split()[0] == 'engineer' else int(l.split()[1]) for l in W(s)[1:]), [L(2, 'manager 100', 'intern 40')], lambda r: L(*([3] + ['%s %d' % (r.choice(['manager', 'engineer', 'intern']), r.randint(1, 500)) for _ in range(3)])))
Q('Medium', 'Method Overloading', 'Overload add(int,int) and add(double,double). Lines are "int a b" or "dbl a b"; print results (doubles with 1 decimal). | Input: N, then N lines. | Output: results.', lambda s: '\n'.join(str(int(l.split()[1]) + int(l.split()[2])) if l.split()[0] == 'int' else '%.1f' % (float(l.split()[1]) + float(l.split()[2])) for l in W(s)[1:]), [L(2, 'int 1 2', 'dbl 1.5 2.5')], lambda r: L(*([3] + [r.choice(['int %d %d' % (r.randint(0, 9), r.randint(0, 9)), 'dbl %.1f %.1f' % (r.randint(0, 9) / 2, r.randint(0, 9) / 2)]) for _ in range(3)])))
Q('Medium', 'Custom Exception', 'Withdraw from an account; throw InsufficientFundsException when too much and print INSUFFICIENT. Commands deposit/withdraw/balance. | Input: start, N, then commands. | Output: balances or INSUFFICIENT.', acct, [L(100, 3, 'deposit 50', 'withdraw 200', 'balance')], gac)
Q('Medium', 'Stack Class Generic', 'Write a generic Stack<T> with push/pop/peek; EMPTY on empty pop/peek. | Input: N, then commands push X / pop / peek. | Output: one line per pop/peek.', skc, [L(4, 'push 1', 'peek', 'pop', 'pop')], lambda r: L(*([6] + [r.choice(['push %d' % r.randint(1, 9), 'pop', 'peek']) for _ in range(6)])))
Q('Medium', 'Compare Objects Comparable', 'Students "name mark" implement Comparable: higher mark first, then name. Print names in order. | Input: N, then N lines. | Output: names.', lambda s: J(l.split()[0] for l in sorted(W(s)[1:], key=lambda l: (-int(l.split()[1]), l.split()[0]))), [L(3, 'b 5', 'a 5', 'c 9')], lambda r: L(*([4] + ['%s %d' % (c, r.randint(0, 3)) for c in 'abcd'])))
Q('Medium', 'Equals And HashSet', 'Points "x y" with equals/hashCode: print the number of distinct points. | Input: N, then N lines. | Output: the count.', lambda s: len(set(W(s)[1:])), [L(3, '1 2', '1 2', '3 4')], lambda r: L(*([6] + ['%d %d' % (r.randint(0, 2), r.randint(0, 2)) for _ in range(6)])))
Q('Hard', 'Polymorphic Animals', 'Commands "dog name", "cat name", "cow name" each speak: dog "name says Woof", cat "name says Meow", cow "name says Moo". Print in order. | Input: N, then N lines. | Output: N lines.', lambda s: '\n'.join('%s says %s' % (l.split()[1], {'dog': 'Woof', 'cat': 'Meow', 'cow': 'Moo'}[l.split()[0]]) for l in W(s)[1:]), [L(2, 'dog rex', 'cat tom')], lambda r: L(*([4] + ['%s %s' % (r.choice(['dog', 'cat', 'cow']), r.choice(['a', 'b', 'c'])) for _ in range(4)])))
Q('Hard', 'Linked List Implementation', 'Implement a singly linked list with addFirst, addLast and reverse. Commands "first x", "last x", then print after reverse. | Input: N, then N commands. | Output: reversed list.', lambda s: J(reversed(ll(W(s)[1:]))), [L(3, 'last 1', 'last 2', 'first 0')], lambda r: L(*([5] + ['%s %d' % (r.choice(['first', 'last']), r.randint(0, 9)) for _ in range(5)])))
Q('Hard', 'Bank With Transfer', 'Accounts a,b,c start at 100 each. "xfer from to amt" fails with FAIL if insufficient; "show name" prints balance. | Input: N, then N commands. | Output: FAIL/balances.', lambda s: bk(W(s)[1:]), [L(3, 'xfer a b 150', 'xfer a b 60', 'show b')], lambda r: L(*([6] + [r.choice(['xfer %s %s %d' % (r.choice('abc'), r.choice('abc'), r.randint(1, 120)), 'show %s' % r.choice('abc')]) for _ in range(6)])))
Q('Hard', 'Event Queue Simulation', 'Events "t name" arrive; process by time ascending then arrival order. Print names in processing order. | Input: N, then N lines. | Output: names.', lambda s: J(l.split()[1] for _, l in sorted(enumerate(W(s)[1:]), key=lambda e: (int(e[1].split()[0]), e[0]))), [L(3, '5 a', '2 b', '5 c')], lambda r: L(*([5] + ['%d %s' % (r.randint(0, 4), c) for c in 'abcde'])))
Q('Hard', 'Matrix Class With Exceptions', 'Add two R x C matrices; print DIMENSION MISMATCH if sizes differ. | Input: "R C" and rows, twice. | Output: the sum rows or DIMENSION MISMATCH.', lambda s: mm(W(s)), [L('1 2', '1 2', '1 2', '3 4')], lambda r: (lambda a, b, c, d: L('%d %d' % (a, b)) + ''.join(L(J([r.randint(0, 9) for _ in range(b)])) for _ in range(a)) + L('%d %d' % (c, d)) + ''.join(L(J([r.randint(0, 9) for _ in range(d)])) for _ in range(c)))(r.randint(1, 2), r.randint(1, 3), *r.choice([(1, 1), (1, 2), (2, 2), (2, 3)])))
Q('Hard', 'Parking Lot Simulation', 'A lot has C slots. "park name" prints PARKED or FULL; "leave name" prints LEFT or MISSING. Print each reply. | Input: C, N, then N commands. | Output: one reply per command.', lambda s: parkl(s), [L(1, 3, 'park a', 'park b', 'leave a')], lambda r: L(*([r.randint(1, 2), 7] + [r.choice(['park a', 'park b', 'park c', 'leave a', 'leave b']) for _ in range(7)])))
topic('jrec', 'Recursion and Algorithms', 'Recursion, sorting, searching, DP and number theory in Java')
Q('Easy', 'Factorial Recursion', 'Write a recursive factorial (N<=15). | Input: N. | Output: N!.', lambda s: fact(int(s)), [L(5)], num(0, 15))
Q('Easy', 'Power Recursion', 'Compute a^b recursively (small values). | Input: a b. | Output: a^b.', lambda s: iv(s)[0] ** iv(s)[1], [L('2 10')], lambda r: L('%d %d' % (r.randint(0, 6), r.randint(0, 8))))
Q('Easy', 'Sum Of Array Recursively', 'Sum the array using recursion. | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)), [L(3, '1 2 3')], Ai)
Q('Easy', 'Fibonacci Recursive', 'Print the Nth Fibonacci number recursively (N<=25). | Input: N. | Output: F(N).', lambda s: fibn(int(s)), [L(10)], num(0, 25))
Q('Easy', 'Count Down', 'Print N down to 1 using recursion, one per line. | Input: N. | Output: N lines.', lambda s: '\n'.join(map(str, range(int(s), 0, -1))), [L(3)], num(1, 20))
Q('Easy', 'Bubble Sort', 'Sort with bubble sort and print. | Input: N, then N integers. | Output: sorted.', lambda s: J(sorted(arrs(s))), [L(3, '3 1 2')], Ai)
Q('Easy', 'Linear Search First Index', 'Print the first index of X or -1. | Input: N, list, X. | Output: index.', lambda s: (lambda t: (lambda a, x: a.index(x) if x in a else -1)(t[1:1 + t[0]], t[-1]))(iv(s)), [L(3, '4 5 6', 5)], arq(0, 9, 1, 8, 0, 9))
Q('Medium', 'GCD Recursive', 'Euclid recursively. | Input: a b. | Output: gcd.', lambda s: gcd(*iv(s)), [L('12 18')], two(1, 1000))
Q('Medium', 'Binary Recursion Palindrome', 'Check recursively if the word is a palindrome. | Input: a word. | Output: YES/NO.', lambda s: 'YES' if s.strip() == s.strip()[::-1] else 'NO', [L('abba')], st(1, 7, 'ab'))
Q('Medium', 'Tower Of Hanoi Moves', 'Print "from to" moves (pegs A B C, source A target C) for N discs, then nothing else. | Input: N. | Output: all moves.', lambda s: hanoi(int(s)), [L(2)], num(1, 4))
Q('Medium', 'Selection Sort Swaps', 'Count swaps (only when indices differ) of selection sort. | Input: N, then N integers. | Output: swap count.', lambda s: selswaps(arrs(s)), [L(3, '3 1 2')], Ai)
Q('Medium', 'Insertion Sort Shifts', 'Count how many element shifts insertion sort performs. | Input: N, then N integers. | Output: shifts.', lambda s: sum(1 for i in range(len(arrs(s))) for j in range(i) if arrs(s)[j] > arrs(s)[i]), [L(3, '3 1 2')], Ai)
Q('Medium', 'Merge Two Sorted Arrays', 'Merge two sorted arrays. | Input: two lines "n values". | Output: merged.', lambda s: J(sorted(sum((list(map(int, l.split()))[1:] for l in W(s)), []))), [L('2 1 4', '2 2 3')], lambda r: L(*[J([k] + sorted(r.randint(0, 20) for _ in range(k))) for k in (r.randint(1, 5), r.randint(1, 5))]))
Q('Medium', 'Climbing Stairs', 'Count ways to climb N stairs taking 1 or 2 steps. | Input: N. | Output: ways.', lambda s: fibn(int(s) + 1), [L(5)], num(1, 40))
Q('Medium', 'Coin Change Min Coins', 'Coins list and target T: print the minimum coins or -1. | Input: K, coins, T. | Output: minimum or -1.', lambda s: coinmin(iv(s)), [L(3, '1 2 5', 11)], lambda r: (lambda k: L(k, J(r.sample(range(1, 9), k)), r.randint(0, 25)))(r.randint(1, 4)))
Q('Hard', 'Permutations Of String', 'Print all permutations of distinct letters in lexicographic order, one per line. | Input: a word of distinct letters (<=5). | Output: permutations.', lambda s: '\n'.join(''.join(p) for p in itertools.permutations(sorted(s.strip()))), [L('abc')], lambda r: L(''.join(r.sample('abcde', r.randint(1, 4)))))
Q('Hard', 'N Queens Count', 'Count solutions of the N-Queens puzzle. | Input: N (<=8). | Output: count.', lambda s: nq(int(s)), [L(4)], num(1, 8))
Q('Hard', 'Longest Common Subsequence', 'Print the LCS length of two words. | Input: two words. | Output: length.', lambda s: lcs(*W(s)), [L('abcde', 'ace')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 8))) for _ in range(2)]))
Q('Hard', 'Subset Sum Count', 'Count subsets (by position) with sum S. | Input: N, list, S. | Output: count.', lambda s: (lambda t: sum(1 for m in range(1 << t[0]) if sum(t[1 + i] for i in range(t[0]) if m >> i & 1) == t[-1]))(iv(s)), [L(3, '1 2 3', 3)], arq(0, 5, 1, 9, 0, 12))
Q('Hard', 'Sieve Count Primes', 'Count primes up to N using the sieve. | Input: N. | Output: count.', lambda s: sum(isp(i) for i in range(2, int(s) + 1)), [L(30)], num(0, 20000))
Q('Hard', 'Edit Distance', 'Print the Levenshtein distance of two words. | Input: two words. | Output: distance.', lambda s: ed(*W(s)), [L('kitten', 'sitting')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 7))) for _ in range(2)]))
#end

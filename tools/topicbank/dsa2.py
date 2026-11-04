from dsa1 import *
import dsa1
topic('window', 'Two Pointers and Sliding Window', 'Pairs, windows and in-place scans')
SA = lambda lo, hi, a=2, b=12: (lambda r: (lambda n: L(n, J(sorted(r.randint(lo, hi) for _ in range(n)))))(r.randint(a, b)))
def tp(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; i, j = 0, n - 1
    while i < j:
        v = a[i] + a[j]
        if v == k: return '%d %d' % (i, j)
        if v < k: i += 1
        else: j -= 1
    return '-1'
def gtp(r): n = r.randint(2, 10); a = sorted(r.randint(1, 15) for _ in range(n)); return L(n, J(a), r.randint(2, 30))
Q('Easy', 'Pair With Given Sum', 'The array is sorted. Print the first pair of indices (i j, i<j) found by two pointers whose sum is K, or -1. | Input: N, the sorted array, K. | Output: i j or -1.', tp, [L(5, '1 2 4 6 9', 10)], gtp)
Q('Easy', 'Squares of a Sorted Array', 'Print the squares of the sorted array, in sorted order. | Input: N, then N sorted integers. | Output: the squares ascending.', lambda s: J(sorted(x * x for x in arrs(s))), [L(5, '-4 -1 0 3 10')], SA(-9, 9))
Q('Easy', 'Move Zeroes', 'Move all zeroes to the end keeping the order of the other numbers. | Input: N, then N integers. | Output: the new array.', lambda s: J([x for x in arrs(s) if x] + [0] * arrs(s).count(0)), [L(5, '0 1 0 3 12')], ar(0, 3, 1, 12))
Q('Easy', 'Is Palindrome Array', 'Print YES if the array reads the same forwards and backwards, else NO. | Input: N, then N integers. | Output: YES or NO.', lambda s: 'YES' if arrs(s) == arrs(s)[::-1] else 'NO', [L(5, '1 2 3 2 1')], ar(1, 2, 1, 7))
Q('Easy', 'Max Sum of K Consecutive', 'Print the largest sum of any K consecutive elements. | Input: N, the array, K (1<=K<=N). | Output: the maximum sum.', lambda s: (lambda t: max(sum(t[1:1 + t[0]][i:i + t[-1]]) for i in range(t[0] - t[-1] + 1)))(iv(s)), [L(6, '2 1 5 1 3 2', 3)], lambda r: (lambda n: L(n, J([r.randint(-5, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 10)))
Q('Easy', 'Merge Two Sorted Arrays', 'Merge two sorted arrays into one sorted array. | Input: line1: N and the array; line2: M and the array. | Output: merged array.', lambda s: (lambda l: J(sorted(list(map(int, l[0].split()))[1:] + list(map(int, l[1].split()))[1:])))(s.strip().split('\n')), [L('3 1 4 9', '2 2 5')], lambda r: (lambda a, b: L(len(a), J(a)) .replace('\n', ' ').strip() + '\n' + L(len(b), J(b)).replace('\n', ' '))(sorted(r.randint(0, 20) for _ in range(r.randint(1, 6))), sorted(r.randint(0, 20) for _ in range(r.randint(1, 6)))))
Q('Easy', 'Remove Element', 'Remove every occurrence of value V and print the remaining array. | Input: N, the array, V. | Output: the remaining elements.', lambda s: J([x for x in iv(s)[1:1 + iv(s)[0]] if x != iv(s)[-1]]), [L(5, '3 2 2 3 4', 3)], arq(1, 4, 1, 10, 1, 4))
def ws(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; return J([max(a[i:i + k]) for i in range(n - k + 1)])
Q('Medium', 'Sliding Window Maximum', 'Print the maximum of every window of size K. | Input: N, the array, K. | Output: N-K+1 maxima.', ws, [L(8, '1 3 -1 -3 5 3 6 7', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 12)))
def lsk(s):
    t = s.split('\n'); k = int(t[1]); a = t[0].strip(); d = {}; l = best = 0
    for i, c in enumerate(a):
        d[c] = d.get(c, 0) + 1
        while len(d) > k:
            d[a[l]] -= 1
            if not d[a[l]]: del d[a[l]]
            l += 1
        best = max(best, i - l + 1)
    return best
Q('Medium', 'Longest With K Distinct', 'Find the length of the longest substring with at most K distinct characters. | Input: string, then K. | Output: the length.', lsk, [L('eceba', 2)], lambda r: L(''.join(r.choice('abcd') for _ in range(r.randint(1, 12))), r.randint(1, 4)))
def lnr(s):
    a = s.strip(); d = {}; l = best = 0
    for i, c in enumerate(a):
        if c in d and d[c] >= l: l = d[c] + 1
        d[c] = i; best = max(best, i - l + 1)
    return best
Q('Medium', 'Longest Non-Repeating Substring', 'Find the length of the longest substring with no repeated characters. | Input: a string. | Output: the length.', lnr, [L('abcabcbb')], st(1, 14, 'abcd'))
def ts3(s):
    a = sorted(arrs(s)); n = len(a); r = set()
    for i in range(n):
        j, k = i + 1, n - 1
        while j < k:
            v = a[i] + a[j] + a[k]
            if v == 0: r.add((a[i], a[j], a[k])); j += 1; k -= 1
            elif v < 0: j += 1
            else: k -= 1
    return len(r)
Q('Medium', 'Triplets With Zero Sum', 'Count distinct triplets (as value triples) that sum to zero. | Input: N, then N integers. | Output: the count.', ts3, [L(6, '-1 0 1 2 -1 -4')], ar(-4, 4, 3, 10))
def mws(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; l = c = 0; best = 0
    for i, x in enumerate(a):
        if x == 0: c += 1
        while c > k:
            if a[l] == 0: c -= 1
            l += 1
        best = max(best, i - l + 1)
    return best
Q('Medium', 'Longest Ones After K Flips', 'A binary array may have at most K zeros flipped to 1. Print the longest run of 1s possible. | Input: N, the 0/1 array, K. | Output: the length.', mws, [L(6, '1 1 0 0 1 1', 1)], arq(0, 1, 1, 12, 0, 3))
def cwk(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; c = 0
    for i in range(n):
        p = 1
        for j in range(i, n):
            p *= a[j]
            if p < k: c += 1
            else: break
    return c
Q('Medium', 'Subarrays Product Below K', 'Count contiguous subarrays of positive integers whose product is strictly less than K. | Input: N, the array, K. | Output: the count.', cwk, [L(4, '10 5 2 6', 100)], arq(1, 6, 1, 10, 1, 60))
def ctr(s):
    a = s.strip(); import itertools
    return max([0] + [len(a[i:j]) for i in range(len(a)) for j in range(i + 1, len(a) + 1) if a[i:j] == a[i:j][::-1]])
Q('Medium', 'Longest Palindromic Substring Length', 'Print the length of the longest palindromic substring. | Input: a string. | Output: the length.', ctr, [L('babad')], st(1, 12, 'abc'))
def msw(s):
    a, b = s.strip().split('\n'); from collections import Counter
    need = Counter(b); best = None
    for i in range(len(a)):
        for j in range(i + len(b), len(a) + 1):
            if not (need - Counter(a[i:j])):
                if best is None or j - i < best: best = j - i
                break
    return best if best else 0
def gms(r): return L(''.join(r.choice('abc') for _ in range(r.randint(1, 10))), ''.join(r.choice('abc') for _ in range(r.randint(1, 3))))
Q('Hard', 'Minimum Window Substring', 'Find the length of the shortest substring of S that contains every character of T (with multiplicity), or 0. | Input: S line, T line. | Output: the length.', msw, [L('ADOBECODEBANC', 'ABC')], gms)
def shs(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; best = 0
    for i in range(n):
        c = 0
        for j in range(i, n):
            c += a[j]
            if c >= k: best = (j - i + 1) if not best else min(best, j - i + 1); break
    return best
Q('Hard', 'Shortest Subarray With Sum at Least K', 'The array has positive integers. Print the length of the shortest subarray with sum >= K, or 0. | Input: N, the array, K. | Output: the length.', shs, [L(6, '2 3 1 2 4 3', 7)], arq(1, 9, 1, 12, 1, 40))
def kdis(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; c = 0
    for i in range(n):
        for j in range(i, n):
            if len(set(a[i:j + 1])) == k: c += 1
    return c
Q('Hard', 'Subarrays With Exactly K Distinct', 'Count subarrays containing exactly K distinct integers. | Input: N, the array, K. | Output: the count.', kdis, [L(5, '1 2 1 2 3', 2)], arq(1, 4, 1, 10, 1, 3))
def cont(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; best = 0
    for i in range(n):
        for j in range(i, n):
            w = a[i:j + 1]
            if max(w) - min(w) <= k: best = max(best, j - i + 1)
    return best
Q('Hard', 'Longest Subarray With Limited Range', 'Find the longest subarray whose maximum minus minimum is at most K. | Input: N, the array, K. | Output: the length.', cont, [L(6, '8 2 4 7 3 5', 4)], arq(1, 12, 1, 12, 0, 8))
def cwater(s):
    a = arrs(s); i, j = 0, len(a) - 1; best = 0
    while i < j: best = max(best, min(a[i], a[j]) * (j - i)); (i := i + 1) if a[i] < a[j] else (j := j - 1)
    return best
Q('Hard', 'Container With Most Water', 'Choose two lines to form a container; print the maximum area (width is the index difference). | Input: N, then N heights. | Output: the area.', cwater, [L(9, '1 8 6 2 5 4 8 3 7')], ar(0, 10, 2, 12))
def dut(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; return sum(1 for i in range(n) for j in range(i + 1, n) if abs(a[i] - a[j]) == k)
Q('Hard', 'Pairs With Difference K', 'Count index pairs i<j with |a[i]-a[j]| equal to K. | Input: N, the array, K. | Output: the count.', dut, [L(5, '1 5 3 4 2', 2)], arq(1, 8, 1, 12, 0, 5))

topic('strings', 'Strings', 'Counting, parsing, comparing and transforming text')
Q('Easy', 'Count Vowels', 'Count the vowels (a e i o u, either case) in the text. | Input: one line of text. | Output: the count.', lambda s: sum(c in 'aeiouAEIOU' for c in s), [L('FutureSelf')], wds(1, 5, 'abeiouxyz'))
Q('Easy', 'Reverse Each Word', 'Reverse every word but keep the word order. | Input: a line of words. | Output: the new line.', lambda s: ' '.join(w[::-1] for w in s.split()), [L('study well today')], wds(1, 5))
Q('Easy', 'Is Anagram', 'Print YES if the two lines are anagrams of each other (ignore nothing), else NO. | Input: two lines. | Output: YES or NO.', lambda s: 'YES' if sorted(s.split('\n')[0]) == sorted(s.split('\n')[1]) else 'NO', [L('listen', 'silent')], lambda r: L(*[''.join(r.choice('abc') for _ in range(r.randint(1, 5))) for _ in range(2)]))
Q('Easy', 'Toggle Case', 'Swap the case of every letter. | Input: one line. | Output: the new line.', lambda s: s.strip('\n').swapcase(), [L('Hello World')], st(1, 10, 'aBcDe'))
Q('Easy', 'First Unique Character', 'Print the index of the first character that appears once, or -1. | Input: a string. | Output: the index.', lambda s: (lambda a: next((i for i, c in enumerate(a) if a.count(c) == 1), -1))(s.strip()), [L('leetcode')], st(1, 10, 'abc'))
Q('Easy', 'Count Words', 'Count the words separated by spaces. | Input: a line (may have extra spaces). | Output: the count.', lambda s: len(s.split()), [L('  keep  coding  ')], wds(0, 6))
Q('Easy', 'Capitalise Words', 'Make the first letter of every word uppercase and the rest lowercase. | Input: one line. | Output: the new line.', lambda s: ' '.join(w.capitalize() for w in s.split()), [L('hELLO wORLD')], wds(1, 5, 'aBcD'))
def comp(s):
    a = s.strip(); o = ''; i = 0
    while i < len(a):
        j = i
        while j < len(a) and a[j] == a[i]: j += 1
        o += a[i] + str(j - i); i = j
    return o
Q('Medium', 'Run-Length Encoding', 'Compress runs: aaabb becomes a3b2. | Input: a string. | Output: the encoded string.', comp, [L('aaabbc')], st(1, 12, 'ab'))
def rev_vow(s):
    a = list(s.strip()); v = [c for c in a if c in 'aeiou'][::-1]
    for i, c in enumerate(a):
        if c in 'aeiou': a[i] = v.pop(0)
    return ''.join(a)
Q('Medium', 'Reverse Only Vowels', 'Reverse the order of the vowels (a e i o u) and leave other letters in place. | Input: a lowercase string. | Output: the new string.', rev_vow, [L('hello')], st(1, 10, 'abeioxz'))
def lcp(s):
    w = s.split()
    p = w[0]
    for x in w[1:]:
        while not x.startswith(p): p = p[:-1]
    return p if p else '-'
Q('Medium', 'Longest Common Prefix', 'Print the longest common prefix of the words, or - if there is none. | Input: a line of words. | Output: the prefix.', lcp, [L('flower flow flight')], wds(1, 4, 'ab', (1, 4)))
def isub(s):
    a, b = s.strip().split('\n'); it = iter(a); return 'YES' if all(c in it for c in b) else 'NO'
Q('Medium', 'Is Subsequence', 'Print YES if the second line is a subsequence of the first line. | Input: S then T. | Output: YES or NO.', isub, [L('abcde', 'ace')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 8))), ''.join(r.choice('abc') for _ in range(r.randint(1, 3)))))
def roman(s):
    n = int(s); o = ''
    for v, r in [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')]:
        while n >= v: o += r; n -= v
    return o
Q('Medium', 'Integer to Roman', 'Convert a number from 1 to 3999 to Roman numerals. | Input: N. | Output: the numeral.', roman, [L(1994)], num(1, 3999))
def zig(s):
    a, n = s.split('\n')[0], int(s.split('\n')[1]); 
    if n == 1: return a
    rows = [''] * n; r = 0; d = 1
    for c in a:
        rows[r] += c
        if r == 0: d = 1
        elif r == n - 1: d = -1
        r += d
    return ''.join(rows)
Q('Medium', 'Zigzag Conversion', 'Write the text in a zigzag over R rows and read it row by row. | Input: the text, then R. | Output: the result.', zig, [L('PAYPALISHIRING', 3)], lambda r: L(''.join(r.choice('abcdefg') for _ in range(r.randint(1, 12))), r.randint(1, 4)))
def gcount(s):
    a = s.strip(); return sum(1 for i in range(len(a)) for j in range(i + 1, len(a) + 1) if len(set(a[i:j])) == 1)
Q('Medium', 'Count Same-Letter Substrings', 'Count substrings made of a single repeated letter (every position counts separately). | Input: a string. | Output: the count.', gcount, [L('aaba')], st(1, 10, 'ab'))
def lpsl(s):
    a = s.strip(); n = len(a)
    for k in range(n - 1, 0, -1):
        if a[:k] == a[n - k:]: return k
    return 0
Q('Hard', 'Longest Border', 'A border is a prefix that is also a suffix (not the whole string). Print the length of the longest one. | Input: a string. | Output: the length.', lpsl, [L('abcab')], st(1, 12, 'ab'))
def lcs(s):
    a, b = s.strip().split('\n'); n, m = len(a), len(b); d = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(n):
        for j in range(m): d[i + 1][j + 1] = d[i][j] + 1 if a[i] == b[j] else max(d[i][j + 1], d[i + 1][j])
    return d[n][m]
Q('Hard', 'Longest Common Subsequence', 'Print the length of the longest common subsequence of two strings. | Input: two lines. | Output: the length.', lcs, [L('abcde', 'ace')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 8))), ''.join(r.choice('abc') for _ in range(r.randint(1, 8)))))
def ed(s):
    a, b = s.strip().split('\n'); n, m = len(a), len(b); d = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(n + 1): d[i][0] = i
    for j in range(m + 1): d[0][j] = j
    for i in range(1, n + 1):
        for j in range(1, m + 1): d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] != b[j - 1]))
    return d[n][m]
Q('Hard', 'Edit Distance', 'Minimum insert, delete or replace operations to turn the first string into the second. | Input: two lines. | Output: the number of operations.', ed, [L('horse', 'ros')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 7))), ''.join(r.choice('abc') for _ in range(r.randint(1, 7)))))
def dec(s):
    a = s.strip(); n = len(a); d = [0] * (n + 1); d[0] = 1
    for i in range(1, n + 1):
        if a[i - 1] != '0': d[i] += d[i - 1]
        if i > 1 and 10 <= int(a[i - 2:i]) <= 26: d[i] += d[i - 2]
    return d[n]
Q('Hard', 'Decode Ways', 'A=1 ... Z=26. Count the ways to decode a digit string. | Input: a digit string (no spaces). | Output: the number of decodings.', dec, [L('226'), L('06')], lambda r: L(''.join(r.choice('0123456789') if r.random() < .3 else r.choice('12') for _ in range(r.randint(1, 9)))))
def pcount(s):
    a = s.strip(); return sum(1 for i in range(len(a)) for j in range(i + 1, len(a) + 1) if a[i:j] == a[i:j][::-1])
Q('Hard', 'Count Palindromic Substrings', 'Count all palindromic substrings (by position). | Input: a string. | Output: the count.', pcount, [L('aaa')], st(1, 10, 'ab'))
def minins(s):
    a = s.strip(); b = a[::-1]; n = len(a); d = [[0] * (n + 1) for _ in range(n + 1)]
    for i in range(n):
        for j in range(n): d[i + 1][j + 1] = d[i][j] + 1 if a[i] == b[j] else max(d[i][j + 1], d[i + 1][j])
    return n - d[n][n]
Q('Hard', 'Insertions To Make Palindrome', 'Minimum characters to insert (anywhere) to make the string a palindrome. | Input: a string. | Output: the count.', minins, [L('mbadm')], st(1, 10, 'abc'))

from lib import *
def tk(s): return s.split()
def iv(s): return list(map(int, s.split()))
def arrs(s):
    a = iv(s); return a[1:1 + a[0]]
def J(a): return ' '.join(map(str, a))
subject('dsa', 'Data Structures and Algorithms', None, 'dsa', 'Code in any language you like. Every topic is a no-timer session: finish all the questions to complete it.')

topic('arrays', 'Arrays and Prefix Sums', 'Traversal, prefix sums, Kadane and difference arrays')
A = ar(-20, 20, 1, 12); AP = ar(1, 30, 1, 12)
Q('Easy', 'Largest Element', 'Print the largest number in the array. | Input: N, then N integers. | Output: the maximum.', lambda s: max(arrs(s)), [L(5, '3 9 2 7 1')], A)
Q('Easy', 'Second Largest Distinct', 'Print the second largest distinct value, or -1 if it does not exist. | Input: N, then N integers. | Output: one integer.', lambda s: (sorted(set(arrs(s)))[-2] if len(set(arrs(s))) > 1 else -1), [L(5, '4 9 9 2 7'), L(3, '5 5 5')], ar(-5, 5, 1, 8))
Q('Easy', 'Count Positives', 'Count the elements strictly greater than zero. | Input: N, then N integers. | Output: the count.', lambda s: sum(1 for x in arrs(s) if x > 0), [L(6, '-1 4 0 7 -3 2')], A)
Q('Easy', 'Reverse the Array', 'Print the array in reverse order. | Input: N, then N integers. | Output: N integers separated by spaces.', lambda s: J(arrs(s)[::-1]), [L(4, '1 2 3 4')], A)
Q('Easy', 'Sum at Even Positions', 'Print the sum of elements at even indices (0, 2, 4, ...). | Input: N, then N integers. | Output: the sum.', lambda s: sum(arrs(s)[::2]), [L(5, '1 2 3 4 5')], A)
Q('Easy', 'Rotate Left by K', 'Rotate the array to the left by K positions and print it. | Input: N, the array, then K. | Output: the rotated array.', lambda s: (lambda a, k: J(a[k % len(a):] + a[:k % len(a)]))(iv(s)[1:1 + iv(s)[0]], iv(s)[-1]), [L(5, '1 2 3 4 5', 2)], arq(-9, 9, 1, 10, 0, 15))
Q('Easy', 'Remove Duplicates', 'Print the array keeping only the first occurrence of each value, in order. | Input: N, then N integers. | Output: the distinct values.', lambda s: J(list(dict.fromkeys(arrs(s)))), [L(6, '1 2 1 3 2 4')], ar(0, 5, 1, 12))
def rq(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; q = t[1 + n]; p = [0]
    for x in a: p.append(p[-1] + x)
    r = []
    for i in range(q): l, h = t[2 + n + 2 * i:4 + n + 2 * i]; r.append(p[h] - p[l - 1])
    return '\n'.join(map(str, r))
def grq(r):
    n = r.randint(1, 10); a = [r.randint(-9, 9) for _ in range(n)]; q = r.randint(1, 6); s = L(n, J(a), q)
    for _ in range(q): l = r.randint(1, n); h = r.randint(l, n); s += L('%d %d' % (l, h))
    return s
Q('Medium', 'Range Sum Queries', 'Answer Q range-sum queries using prefix sums. Indices are 1-based and inclusive. | Input: N, the array, Q, then Q lines of L R. | Output: one sum per line.', rq, [L(5, '1 2 3 4 5', 2, '1 3', '2 5')], grq)
def kad(s): 
    best = cur = None
    for x in arrs(s): cur = x if cur is None or cur < 0 else cur + x; best = cur if best is None else max(best, cur)
    return best
Q('Medium', 'Maximum Subarray Sum', 'Find the largest sum of a non-empty contiguous subarray (Kadane). | Input: N, then N integers. | Output: the maximum sum.', kad, [L(9, '-2 1 -3 4 -1 2 1 -5 4')], A)
def eq(s):
    a = arrs(s); tot = sum(a); l = 0
    for i, x in enumerate(a):
        if l == tot - l - x: return i
        l += x
    return -1
Q('Medium', 'Equilibrium Index', 'Print the first index where the sum on the left equals the sum on the right, or -1. | Input: N, then N integers. | Output: the index.', eq, [L(6, '1 7 3 6 5 6'), L(3, '1 2 3')], ar(-3, 3, 1, 9))
def pex(s):
    a = arrs(s); r = []
    for i in range(len(a)):
        p = 1
        for j, x in enumerate(a):
            if j != i: p *= x
        r.append(p)
    return J(r)
Q('Medium', 'Product Except Self', 'For each position print the product of all other elements. | Input: N, then N integers. | Output: N integers.', pex, [L(4, '1 2 3 4')], ar(-4, 4, 2, 8))
def csk(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; d = {0: 1}; c = p = 0
    for x in a: p += x; c += d.get(p - k, 0); d[p] = d.get(p, 0) + 1
    return c
Q('Medium', 'Subarrays With Sum K', 'Count contiguous subarrays whose sum equals K. | Input: N, the array, then K. | Output: the count.', csk, [L(5, '1 2 3 -2 2', 3)], arq(-3, 3, 1, 12, -4, 4))
def maj(s):
    a = arrs(s)
    for x in set(a):
        if a.count(x) * 2 > len(a): return x
    return -1
Q('Medium', 'Majority Element', 'Print the element that appears more than N/2 times, or -1 if none. | Input: N, then N integers. | Output: the element or -1.', maj, [L(5, '2 2 1 2 3'), L(4, '1 2 3 4')], ar(1, 3, 1, 9))
def lead(s):
    a = arrs(s); r = []; m = -10**18
    for x in reversed(a):
        if x >= m: r.append(x); m = x
    return J(r[::-1])
Q('Medium', 'Leaders in an Array', 'An element is a leader if it is not smaller than every element to its right. Print all leaders in order. | Input: N, then N integers. | Output: the leaders.', lead, [L(6, '16 17 4 3 5 2')], A)
def circ(s):
    a = arrs(s); tot = sum(a); mx = mn = cm = cn = a[0]
    mx = cm = a[0]; mn = cn = a[0]
    for x in a[1:]: cm = max(x, cm + x); mx = max(mx, cm); cn = min(x, cn + x); mn = min(mn, cn)
    return mx if mx < 0 else max(mx, tot - mn)
Q('Hard', 'Maximum Circular Subarray', 'The array is circular. Find the largest sum of a non-empty subarray that may wrap around the end. | Input: N, then N integers. | Output: the maximum sum.', circ, [L(5, '5 -3 5 2 -1')], A)
def rain(s):
    a = arrs(s); n = len(a); lm = [0] * n; rm = [0] * n; m = 0
    for i in range(n): m = max(m, a[i]); lm[i] = m
    m = 0
    for i in range(n - 1, -1, -1): m = max(m, a[i]); rm[i] = m
    return sum(min(lm[i], rm[i]) - a[i] for i in range(n))
Q('Hard', 'Trapping Rain Water', 'Bars of given heights are 1 unit wide. Print how much water is trapped after rain. | Input: N, then N heights. | Output: units of water.', rain, [L(12, '0 1 0 2 1 0 1 3 2 1 2 1')], ar(0, 6, 1, 14))
def sdk(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; d = {0: 1}; c = p = 0
    for x in a: p = (p + x) % k; c += d.get(p, 0); d[p] = d.get(p, 0) + 1
    return c
Q('Hard', 'Subarrays Divisible by K', 'Count contiguous subarrays whose sum is divisible by K. | Input: N, the array, then K. | Output: the count.', sdk, [L(6, '4 5 0 -2 -3 1', 5)], arq(-9, 9, 1, 12, 1, 7))
def mp(s):
    a = arrs(s); b = best = a[0]; lo = hi = a[0]
    lo = hi = best = a[0]
    for x in a[1:]:
        c = (x, hi * x, lo * x); hi, lo = max(c), min(c); best = max(best, hi)
    return best
Q('Hard', 'Maximum Product Subarray', 'Find the largest product of a non-empty contiguous subarray. | Input: N, then N integers. | Output: the maximum product.', mp, [L(4, '2 3 -2 4')], ar(-4, 4, 1, 9))
def msp(s):
    a = set(arrs(s)); i = 1
    while i in a: i += 1
    return i
Q('Hard', 'Smallest Missing Positive', 'Print the smallest positive integer that is not in the array. | Input: N, then N integers. | Output: that integer.', msp, [L(4, '3 4 -1 1')], ar(-3, 8, 1, 10))
def dif(s):
    t = iv(s); n = t[0]; q = t[1]; d = [0] * (n + 1)
    for i in range(q): l, r, v = t[2 + 3 * i:5 + 3 * i]; d[l - 1] += v; d[r] -= v
    o = []; c = 0
    for i in range(n): c += d[i]; o.append(c)
    return J(o)
def gdf(r):
    n = r.randint(1, 8); q = r.randint(1, 6); s = L(n, q)
    for _ in range(q): l = r.randint(1, n); h = r.randint(l, n); s += L('%d %d %d' % (l, h, r.randint(-5, 5)))
    return s
Q('Hard', 'Range Updates, One Pass', 'An array of N zeros receives Q updates; each adds V to positions L..R (1-based). Print the final array using a difference array. | Input: N, Q, then Q lines of L R V. | Output: the final array.', dif, [L(5, 2, '1 3 2', '2 5 3')], gdf)
def lz0(s):
    a = arrs(s); d = {0: -1}; p = best = 0
    for i, x in enumerate(a):
        p += x
        if p in d: best = max(best, i - d[p])
        else: d[p] = i
    return best
Q('Hard', 'Longest Zero-Sum Subarray', 'Print the length of the longest contiguous subarray with sum 0 (0 if none). | Input: N, then N integers. | Output: the length.', lz0, [L(6, '1 -1 3 2 -2 -3')], ar(-3, 3, 1, 12))

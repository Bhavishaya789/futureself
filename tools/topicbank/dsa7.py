from dsa6 import *
def candy(a):
    n = len(a); c = [1] * n
    for i in range(1, n):
        if a[i] > a[i - 1]: c[i] = c[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if a[i] > a[i + 1]: c[i] = max(c[i], c[i + 1] + 1)
    return sum(c)
def lem(a):
    f = t = 0
    for x in a:
        if x == 5: f += 1
        elif x == 10:
            if not f: return False
            f -= 1; t += 1
        else:
            if t and f: t -= 1; f -= 1
            elif f >= 3: f -= 3
            else: return False
    return True
topic('greedy', 'Greedy Algorithms', 'Make the best local choice and prove it is enough')
def notes0(s):
    n = int(s); c = 0
    for d in (500, 100, 50, 10, 5, 1): c += n // d; n %= d
    return c
Q('Easy', 'Minimum Notes', 'Pay N using notes of 1, 5, 10, 50, 100, 500 with the fewest notes. Print the count. | Input: N. | Output: the count.', notes0, [L(93)], num(1, 5000))
Q('Easy', 'Maximum Items With Budget', 'Prices are given; buy as many items as possible with budget B. Print how many. | Input: N, the prices, then B. | Output: the count.', lambda s: (lambda t: (lambda a, b: sum(1 for i, x in enumerate(sorted(a)) if sum(sorted(a)[:i + 1]) <= b))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 12 5 111 200', 10)], arq(1, 15, 1, 9, 0, 40))
def cookies0(s):
    l = s.strip().split('\n'); g = sorted(map(int, l[0].split()[1:])); c = sorted(map(int, l[1].split()[1:])); i = 0
    for x in c:
        if i < len(g) and x >= g[i]: i += 1
    return i
Q('Easy', 'Assign Cookies', 'Children have greed values, cookies have sizes; a cookie satisfies a child if size >= greed; each is used once. Print the maximum children satisfied. | Input: two lines, N and greeds; M and sizes. | Output: the count.', cookies0, [L('3 1 2 3', '2 1 1')], lambda r: (lambda a, b: ' '.join(map(str, [len(a)] + a)) + '\n' + ' '.join(map(str, [len(b)] + b)) + '\n')([r.randint(1, 5) for _ in range(r.randint(1, 6))], [r.randint(1, 5) for _ in range(r.randint(1, 6))]))
Q('Easy', 'Largest Number From Digits', 'Rearrange the digits to form the largest possible number. | Input: a digit string. | Output: the largest number.', lambda s: ''.join(sorted(s.strip(), reverse=True)), [L('4071')], lambda r: L(''.join(r.choice('0123456789') for _ in range(r.randint(1, 8)))))
Q('Easy', 'Minimum Absolute Pair Sum Difference', 'Pair each element of A with one of B (each used once) to minimise the total |a-b|. Print that total. | Input: two lines, N and A; N and B. | Output: the minimum total.', lambda s: (lambda l: sum(abs(x - y) for x, y in zip(sorted(map(int, l[0].split()[1:])), sorted(map(int, l[1].split()[1:])))))(s.strip().split('\n')), [L('3 1 4 2', '3 3 1 6')], lambda r: (lambda n: ' '.join(map(str, [n] + [r.randint(1, 9) for _ in range(n)])) + '\n' + ' '.join(map(str, [n] + [r.randint(1, 9) for _ in range(n)])) + '\n')(r.randint(1, 6)))
def lem0(s): return 'YES' if lem(arrs(s)) else 'NO'
Q('Easy', 'Lemonade Change', 'Customers pay 5, 10 or 20 for a 5 bill, in order, starting with no change. Print YES if you can give correct change to everyone, else NO. | Input: N, then N payments. | Output: YES or NO.', lem0, [L(5, '5 5 5 10 20')], lambda r: (lambda n: L(n, J([r.choice([5, 10, 20]) for _ in range(n)])))(r.randint(1, 10)))
Q('Easy', 'Candy Pieces', 'Each child needs at least 1 candy and a child with a higher rating than a neighbour gets more than that neighbour; print the minimum candies. | Input: N, then N ratings. | Output: the total.', lambda s: candy(arrs(s)), [L(3, '1 0 2')], ar(1, 6, 1, 9))
def acts(s):
    t = iv(s); n = t[0]; iv_ = sorted(zip(t[2:2 + 2 * n:2], t[3:3 + 2 * n:2]), key=lambda x: x[1]); e = -1; c = 0
    for a, b in iv_:
        if a >= e: c += 1; e = b
    return c
def gact(r):
    n = r.randint(1, 8); s = L(n)
    for _ in range(n): a = r.randint(0, 15); s += L('%d %d' % (a, a + r.randint(1, 6)))
    return s
Q('Medium', 'Activity Selection', 'Each activity has a start and end; you can attend one at a time and may start when another ends. Print the most activities you can attend. | Input: N, then N lines "start end". | Output: the count.', lambda s: acts(s), [L(3, '1 3', '2 5', '4 6')], gact)
def gas(s):
    t = iv(s); n = t[0]; g = t[1:1 + n]; c = t[1 + n:1 + 2 * n]
    for st in range(n):
        tank = 0; ok = True
        for k in range(n):
            i = (st + k) % n; tank += g[i] - c[i]
            if tank < 0: ok = False; break
        if ok: return st
    return -1
Q('Medium', 'Gas Station', 'Stations in a circle give gas[i] and cost cost[i] to reach the next. Print the smallest starting index that completes the circle, or -1. | Input: N, the gas values, then the cost values. | Output: the index or -1.', gas, [L(5, '1 2 3 4 5', '3 4 5 1 2')], lambda r: (lambda n: L(n, J([r.randint(0, 6) for _ in range(n)]), J([r.randint(0, 6) for _ in range(n)])))(r.randint(1, 7)))
def jump(s):
    a = arrs(s); far = cur = j = 0
    for i in range(len(a) - 1):
        far = max(far, i + a[i])
        if i == cur:
            if far <= i: return -1
            j += 1; cur = far
    return j if cur >= len(a) - 1 else -1
def canj(s):
    a = arrs(s); far = 0
    for i, x in enumerate(a):
        if i > far: return 'NO'
        far = max(far, i + x)
    return 'YES'
Q('Medium', 'Jump Game', 'a[i] is the farthest you can jump from index i. Print YES if you can reach the last index from the first. | Input: N, then N values. | Output: YES or NO.', canj, [L(5, '2 3 1 1 4'), L(5, '3 2 1 0 4')], ar(0, 4, 1, 9))
Q('Medium', 'Minimum Jumps', 'Print the minimum number of jumps from index 0 to the last index (jump up to a[i] from index i), or -1. | Input: N, then N values. | Output: the jumps.', jump, [L(5, '2 3 1 1 4')], ar(0, 4, 1, 9))
def meet(s):
    t = iv(s); n = t[0]; v = sorted((t[2 + 2 * i], t[1 + 2 * i]) for i in range(n)); iv_ = sorted([(t[1 + 2 * i], t[2 + 2 * i]) for i in range(n)], key=lambda x: x[1]); e = -1; c = 0
    for a, b in iv_:
        if a > e: c += 1; e = b
    return c
Q('Medium', 'Meeting Rooms Needed', 'Print the minimum number of rooms needed so that no two overlapping meetings share a room (a meeting ending at time t does not overlap one starting at t). | Input: N, then N lines "start end". | Output: the rooms.', lambda s: (lambda t: max(sum(1 for i in range(t[0]) if t[1 + 2 * i] <= x < t[2 + 2 * i]) for x in range(0, 40)))(iv(s)), [L(3, '0 30', '5 10', '15 20')], gact)
Q('Medium', 'Reorganise String', 'Rearrange letters so that no two adjacent letters are equal. Print YES if possible, else NO. | Input: a string. | Output: YES or NO.', lambda s: 'YES' if max(Counter(s.strip()).values()) <= (len(s.strip()) + 1) // 2 else 'NO', [L('aab'), L('aaab')], st(1, 9, 'abc'))
def fracknap(s):
    t = iv(s); n, w = t[0], t[1]; items = sorted([(t[2 + 2 * i + 1] / t[2 + 2 * i], t[2 + 2 * i], t[3 + 2 * i]) for i in range(n)], reverse=True); tot = 0.0
    for _, wt, v in items:
        take = min(wt, w); tot += v * take / wt; w -= take
        if w == 0: break
    return '%.2f' % tot
def gfk(r):
    n = r.randint(1, 5); s = L('%d %d' % (n, r.randint(1, 20)))
    for _ in range(n): s += L('%d %d' % (r.randint(1, 10), r.randint(1, 30)))
    return s
Q('Medium', 'Fractional Knapsack', 'Items may be split. Given weight and value of each item and a capacity W, print the maximum value with two decimals. | Input: "N W", then N lines "weight value". | Output: the value.', fracknap, [L('3 50', '10 60', '20 100', '30 120')], gfk)
def jobs(s):
    t = iv(s); n = t[0]; j = sorted([(t[2 * i + 2], t[2 * i + 1]) for i in range(n)], reverse=True); slot = [0] * (max(d for _, d in j) + 1); tot = 0
    for p, d in j:
        for x in range(d, 0, -1):
            if not slot[x]: slot[x] = 1; tot += p; break
    return tot
def gjb(r):
    n = r.randint(1, 7); s = L(n)
    for _ in range(n): s += L('%d %d' % (r.randint(1, 5), r.randint(1, 30)))
    return s
Q('Hard', 'Job Sequencing', 'Each job takes one unit of time, has a deadline and a profit; one job per time unit. Print the maximum profit. | Input: N, then N lines "deadline profit". | Output: the profit.', jobs, [L(4, '4 20', '1 10', '1 40', '1 30')], gjb)
Q('Hard', 'Candy Distribution', 'Children stand in a line with ratings; each gets at least 1 candy, and a higher rating than a neighbour means more candy than that neighbour. Print the minimum total. | Input: N, then N ratings. | Output: the total.', lambda s: candy(arrs(s)), [L(5, '1 2 2 1 3')], ar(1, 5, 1, 10))
Q('Hard', 'Remove Intervals to Avoid Overlap', 'Print the minimum number of intervals to remove so the rest do not overlap (touching ends are fine). | Input: N, then N lines "start end". | Output: the removals.', lambda s: iv(s)[0] - acts(s), [L(4, '1 2', '2 3', '3 4', '1 3')], gact)
def mtask(s):
    t = iv(s); n = t[0]; k = t[1]; a = Counter(t[2:2 + n]); mx = max(a.values()); cnt = sum(1 for v in a.values() if v == mx)
    return max(n, (mx - 1) * (k + 1) + cnt)
Q('Hard', 'Task Scheduler', 'Tasks are letters represented as integers; the same task needs at least K idle-or-other slots between runs. Print the minimum total time slots. | Input: "N K", then N task ids. | Output: the slots.', mtask, [L('6 2', '1 1 1 2 2 2')], lambda r: (lambda n: L('%d %d' % (n, r.randint(0, 3))) + L(J([r.randint(1, 3) for _ in range(n)])))(r.randint(1, 10)))
def mxl(s):
    a = sorted(arrs(s), reverse=True); return ''.join(sorted(map(str, a), key=lambda x: x * 10, reverse=True)).lstrip('0') or '0'
Q('Hard', 'Largest Concatenated Number', 'Arrange the non-negative integers so that joining them gives the largest number. Print it. | Input: N, then N integers. | Output: the number.', mxl, [L(5, '3 30 34 5 9')], ar(0, 99, 1, 7))
def pools(s):
    t = iv(s); n = t[0]; h = t[1:1 + n]; k = t[-1]; d = 0
    for i in range(1, n): d += max(0, h[i] - h[i - 1])
    return d
Q('Hard', 'Total Climb', 'Walking along heights from left to right, print the total of all upward steps (the sum of positive differences). | Input: N, then N heights. | Output: the total climb.', lambda s: sum(max(0, arrs(s)[i] - arrs(s)[i - 1]) for i in range(1, len(arrs(s)))), [L(5, '1 5 3 8 2')], ar(0, 20, 1, 12))

topic('heaps', 'Heaps and Priority Queues', 'Always take the smallest or largest item first')
Q('Easy', 'Smallest Three', 'Print the three smallest values in ascending order (all if fewer than three). | Input: N, then N integers. | Output: up to 3 values.', lambda s: J(sorted(arrs(s))[:3]), [L(5, '9 2 7 1 5')], A)
Q('Easy', 'Largest Three', 'Print the three largest values in descending order (all if fewer than three). | Input: N, then N integers. | Output: up to 3 values.', lambda s: J(sorted(arrs(s), reverse=True)[:3]), [L(5, '9 2 7 1 5')], A)
Q('Easy', 'Heap Sort Output', 'Push all values into a min-heap and print them as they pop. | Input: N, then N integers. | Output: ascending values.', lambda s: J(sorted(arrs(s))), [L(4, '4 1 3 2')], A)
Q('Easy', 'Running Minimum', 'After each element print the smallest value seen so far. | Input: N, then N integers. | Output: N values.', lambda s: J(__import__('itertools').accumulate(arrs(s), min)), [L(5, '5 3 4 1 2')], A)
def pq(s):
    h = []; o = []
    for ln in s.strip().split('\n')[1:]:
        p = ln.split()
        if p[0] == 'add': heapq.heappush(h, int(p[1]))
        elif p[0] == 'pop': o.append(heapq.heappop(h) if h else -1)
        else: o.append(h[0] if h else -1)
    return '\n'.join(map(str, o))
def gpq(r):
    n = r.randint(1, 10); return L(n) + ''.join(L(r.choice(['add %d' % r.randint(1, 20), 'pop', 'min'])) for _ in range(n))
Q('Easy', 'Min Priority Queue', 'Commands: add X, pop (print and remove the smallest, -1 if empty) and min (print the smallest, -1 if empty). | Input: N, then N commands. | Output: one value per pop or min.', pq, [L(4, 'add 5', 'add 2', 'min', 'pop')], gpq)
Q('Easy', 'Sum of K Largest', 'Print the sum of the K largest values. | Input: N, the array, K (1<=K<=N). | Output: the sum.', lambda s: (lambda t: sum(sorted(t[1:1 + t[0]], reverse=True)[:t[-1]]))(iv(s)), [L(5, '3 8 1 9 4', 2)], lambda r: (lambda n: L(n, J([r.randint(-5, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
Q('Easy', 'Merge Sorted Streams', 'Merge K sorted lists into one sorted list. | Input: K, then K lines each starting with its length. | Output: the merged list.', lambda s: J(sorted(x for l in s.strip().split('\n')[1:] for x in list(map(int, l.split()))[1:])), [L(2, '3 1 4 7', '2 2 6')], lambda r: (lambda k: L(k) + ''.join(L(J([len(a)] + a)) for a in [sorted(r.randint(0, 20) for _ in range(r.randint(1, 4))) for _ in range(k)]))(r.randint(1, 4)))
def kthl(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; return sorted(a, reverse=True)[k - 1]
Q('Medium', 'K-th Largest Element', 'Print the K-th largest value (1 = largest). | Input: N, the array, K. | Output: the value.', kthl, [L(6, '3 2 1 5 6 4', 2)], lambda r: (lambda n: L(n, J([r.randint(-9, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 10)))
def stream_med(s):
    a = arrs(s); lo = []; hi = []; o = []
    for x in a:
        heapq.heappush(lo, -x); heapq.heappush(hi, -heapq.heappop(lo))
        if len(hi) > len(lo): heapq.heappush(lo, -heapq.heappop(hi))
        o.append(-lo[0] if len(lo) > len(hi) else (-lo[0] + hi[0]) / 2)
    return J('%.1f' % v for v in o)
Q('Medium', 'Running Median', 'After each element print the median of the elements so far, with one decimal. | Input: N, then N integers. | Output: N medians.', stream_med, [L(4, '5 15 1 3')], ar(1, 30, 1, 9))
def rope(s):
    h = arrs(s); heapq.heapify(h); c = 0
    while len(h) > 1: x = heapq.heappop(h) + heapq.heappop(h); c += x; heapq.heappush(h, x)
    return c
Q('Medium', 'Connect Ropes', 'Joining two ropes costs the sum of their lengths. Print the minimum total cost to join all ropes into one. | Input: N, then N lengths. | Output: the cost.', rope, [L(4, '4 3 2 6')], ar(1, 15, 1, 9))
def lsw0(s):
    h = [-x for x in arrs(s)]; heapq.heapify(h)
    while len(h) > 1:
        a = -heapq.heappop(h); b = -heapq.heappop(h)
        if a != b: heapq.heappush(h, -(a - b))
    return -h[0] if h else 0
Q('Medium', 'Last Stone Weight', 'Repeatedly smash the two heaviest stones: equal stones vanish; otherwise the lighter is destroyed and the heavier loses that weight. Print the weight left (0 if none). | Input: N, then N weights. | Output: the final weight.', lsw0, [L(6, '2 7 4 1 8 1')], ar(1, 12, 1, 9))
Q('Medium', 'Top K Frequent Words', 'Print the K most frequent words (ties alphabetical). | Input: first line the words, second line K. | Output: K words.', lambda s: (lambda l: J([w for w, _ in sorted(Counter(l[0].split()).items(), key=lambda x: (-x[1], x[0]))[:int(l[1])]]))(s.strip().split('\n')), [L('i love code i love study', 2)], lambda r: L(' '.join(r.choice(['a', 'b', 'c', 'd']) for _ in range(r.randint(1, 9))), 1))
Q('Medium', 'Smallest Range Pair Sum', 'Print the K smallest sums a[i]+b[j] from two arrays, ascending. | Input: line "N M K", then A, then B. | Output: K sums.', lambda s: (lambda l: (lambda n, m, k: J(sorted(x + y for x in map(int, l[1].split()) for y in map(int, l[2].split()))[:k]))(*map(int, l[0].split())))(s.strip().split('\n')), [L('3 2 3', '1 7 11', '2 4')], lambda r: (lambda n, m: L('%d %d %d' % (n, m, r.randint(1, n * m))) + L(J([r.randint(1, 15) for _ in range(n)])) + L(J([r.randint(1, 15) for _ in range(m)])))(r.randint(1, 5), r.randint(1, 5)))
def kstream(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; h = []; o = []
    for x in a:
        heapq.heappush(h, x)
        if len(h) > k: heapq.heappop(h)
        o.append(h[0] if len(h) == k else -1)
    return J(o)
Q('Medium', 'K-th Largest In A Stream', 'After each new number print the K-th largest value so far, or -1 if fewer than K numbers have arrived. | Input: N, the numbers, then K. | Output: N values.', kstream, [L(5, '4 5 8 2 3', 3)], lambda r: (lambda n: L(n, J([r.randint(1, 20) for _ in range(n)]), r.randint(1, 4)))(r.randint(1, 9)))
def rearr(s):
    return 'YES' if max(Counter(s.strip()).values()) <= (len(s.strip()) + 1) // 2 else 'NO'
def cpu(s):
    t = iv(s); n = t[0]; tasks = sorted((t[1 + 2 * i], t[2 + 2 * i], i) for i in range(n)); time = 0; i = 0; h = []; o = []
    while len(o) < n:
        if not h and i < n and tasks[i][0] > time: time = tasks[i][0]
        while i < n and tasks[i][0] <= time: heapq.heappush(h, (tasks[i][1], tasks[i][2])); i += 1
        d, idx = heapq.heappop(h); time += d; o.append(idx)
    return J(o)
Q('Hard', 'Single CPU Scheduling', 'Task i arrives at time e and takes d units. The CPU always runs the available task with the shortest duration (ties: lower index) and never idles when work is available. Print the order of task indices (0-based). | Input: N, then N lines "arrival duration". | Output: the order.', cpu, [L(4, '1 2', '2 4', '3 2', '4 1')], lambda r: (lambda n: L(n) + ''.join(L('%d %d' % (r.randint(1, 8), r.randint(1, 5))) for _ in range(n)))(r.randint(1, 7)))
def kclose(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; x = t[2 + n]; return J(sorted(sorted(a, key=lambda v: (abs(v - x), v))[:k]))
Q('Hard', 'K Closest Values', 'Print the K values closest to X (ties: smaller value first), in ascending order. | Input: N, the array, then "K X". | Output: K values.', kclose, [L(5, '1 2 3 4 5', '4 3')], lambda r: (lambda n: L(n, J([r.randint(0, 20) for _ in range(n)]), '%d %d' % (r.randint(1, n), r.randint(0, 20))))(r.randint(1, 9)))
def sumpairs(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; return J(sorted(a[i] + a[j] for i in range(n) for j in range(i + 1, n))[:k])
Q('Hard', 'K Smallest Pair Sums', 'Among all sums a[i]+a[j] with i<j, print the K smallest in ascending order. | Input: N, the array, K (K at most N(N-1)/2). | Output: K sums.', sumpairs, [L(4, '1 7 11 2', 3)], lambda r: (lambda n: L(n, J([r.randint(1, 15) for _ in range(n)]), r.randint(1, n * (n - 1) // 2)))(r.randint(2, 6)))
def ugly(s):
    n = int(s); h = [1]; seen = {1}
    for _ in range(n):
        x = heapq.heappop(h)
        for p in (2, 3, 5):
            if x * p not in seen: seen.add(x * p); heapq.heappush(h, x * p)
    return x
Q('Hard', 'Nth Ugly Number', 'Ugly numbers have only prime factors 2, 3 and 5; 1 is the first. Print the N-th. | Input: N (1 to 1000). | Output: the number.', ugly, [L(10)], num(1, 600))
def mxevents(s):
    t = iv(s); n = t[0]; ev = sorted((t[1 + 2 * i], t[2 + 2 * i]) for i in range(n)); h = []; d = 1; i = 0; c = 0
    while i < n or h:
        if not h: d = max(d, ev[i][0])
        while i < n and ev[i][0] <= d: heapq.heappush(h, ev[i][1]); i += 1
        while h and h[0] < d: heapq.heappop(h)
        if h: heapq.heappop(h); c += 1; d += 1
    return c
def gev2(r):
    n = r.randint(1, 8); s = L(n)
    for _ in range(n): a = r.randint(1, 8); s += L('%d %d' % (a, a + r.randint(0, 4)))
    return s
Q('Hard', 'Maximum Events Attended', 'Each event is available on days start..end; you can attend one event per day. Print the maximum events you can attend. | Input: N, then N lines "start end". | Output: the count.', mxevents, [L(3, '1 2', '2 3', '3 4')], gev2)
Q('Hard', 'Minimum Cost To Merge Stones Pairwise', 'Repeatedly merge any two piles; the cost is the new pile size. Print the minimum total cost to end with one pile. | Input: N, then N pile sizes. | Output: the cost.', rope, [L(3, '2 4 6')], ar(1, 15, 1, 9))

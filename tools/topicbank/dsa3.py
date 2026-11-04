from dsa2 import *
from collections import Counter, defaultdict, deque
import itertools
topic('hashing', 'Hashing and Maps', 'Counting, grouping and fast lookups with hash maps and sets')
Q('Easy', 'Count Distinct', 'Count how many different values the array has. | Input: N, then N integers. | Output: the count.', lambda s: len(set(arrs(s))), [L(6, '1 2 2 3 3 3')], ar(0, 6, 1, 12))
Q('Easy', 'Has Duplicate', 'Print YES if any value appears at least twice, else NO. | Input: N, then N integers. | Output: YES or NO.', lambda s: 'YES' if len(set(arrs(s))) < len(arrs(s)) else 'NO', [L(4, '1 2 3 1')], ar(0, 12, 1, 8))
Q('Easy', 'Most Frequent Value', 'Print the value that appears most often; on a tie print the smallest. | Input: N, then N integers. | Output: the value.', lambda s: min(Counter(arrs(s)).items(), key=lambda x: (-x[1], x[0]))[0], [L(6, '4 4 7 7 7 4')], ar(0, 5, 1, 12))
Q('Easy', 'Frequency of Each Value', 'Print each distinct value with its count, in ascending value order, one per line as "value count". | Input: N, then N integers. | Output: lines of value count.', lambda s: '\n'.join('%d %d' % kv for kv in sorted(Counter(arrs(s)).items())), [L(5, '3 1 3 2 1')], ar(0, 5, 1, 12))
Q('Easy', 'Intersection Size', 'Print how many distinct values appear in both arrays. | Input: two lines, each N then N integers. | Output: the count.', lambda s: (lambda l: len(set(map(int, l[0].split()[1:])) & set(map(int, l[1].split()[1:]))))(s.strip().split('\n')), [L('3 1 2 3', '3 2 3 4')], lambda r: (lambda a, b: L(len(a), J(a)).replace('\n', ' ') + '\n' + L(len(b), J(b)).replace('\n', ' '))([r.randint(0, 8) for _ in range(r.randint(1, 6))], [r.randint(0, 8) for _ in range(r.randint(1, 6))]))
Q('Easy', 'Two Sum Exists', 'Print YES if two different positions add up to K, else NO. | Input: N, the array, K. | Output: YES or NO.', lambda s: (lambda t: 'YES' if any(t[1 + i] + t[1 + j] == t[-1] for i in range(t[0]) for j in range(i + 1, t[0])) else 'NO')(iv(s)), [L(4, '2 7 11 15', 9)], arq(-5, 9, 1, 8, -3, 14))
Q('Easy', 'First Repeating Value', 'Print the first value (scanning left to right) that has already appeared, or -1. | Input: N, then N integers. | Output: the value or -1.', lambda s: next((x for i, x in enumerate(arrs(s)) if x in arrs(s)[:i]), -1), [L(5, '4 1 2 1 4')], ar(0, 9, 1, 8))
def grp(s):
    w = s.split(); d = defaultdict(list)
    for x in w: d[''.join(sorted(x))].append(x)
    return str(len(d))
Q('Medium', 'Count Anagram Groups', 'Count how many groups the words form when anagrams are grouped together. | Input: a line of words. | Output: the number of groups.', grp, [L('eat tea tan ate nat bat')], wds(1, 8, 'abc', (1, 3)))
Q('Medium', 'Longest Consecutive Run', 'Find the length of the longest sequence of consecutive integers (in any order) present in the array. | Input: N, then N integers. | Output: the length.', lambda s: (lambda a: max([len([1 for _ in itertools.takewhile(lambda k: k in a, itertools.count(x))]) for x in a if x - 1 not in a] or [0]))(set(arrs(s))), [L(6, '100 4 200 1 3 2')], ar(0, 12, 1, 10))
Q('Medium', 'Pair Sum Count', 'Count index pairs i<j with a[i]+a[j]=K. | Input: N, the array, K. | Output: the count.', lambda s: (lambda t: sum(1 for i in range(t[0]) for j in range(i + 1, t[0]) if t[1 + i] + t[1 + j] == t[-1]))(iv(s)), [L(5, '1 5 7 -1 5', 6)], arq(-3, 6, 1, 10, 0, 9))
Q('Medium', 'Isomorphic Strings', 'Two strings are isomorphic if characters of the first can be consistently replaced to get the second. Print YES or NO. | Input: two lines of equal length. | Output: YES or NO.', lambda s: (lambda a, b: 'YES' if len(set(zip(a, b))) == len(set(a)) == len(set(b)) else 'NO')(*s.strip().split('\n')), [L('egg', 'add')], lambda r: (lambda n: L(''.join(r.choice('abc') for _ in range(n)), ''.join(r.choice('xyz') for _ in range(n))))(r.randint(1, 6)))
Q('Medium', 'Top K Frequent', 'Print the K most frequent values, most frequent first (ties: smaller value first). | Input: N, the array, K. | Output: K values.', lambda s: (lambda t: J([x for x, _ in sorted(Counter(t[1:1 + t[0]]).items(), key=lambda x: (-x[1], x[0]))[:t[-1]]]))(iv(s)), [L(6, '1 1 1 2 2 3', 2)], lambda r: (lambda n: L(n, J([r.randint(0, 5) for _ in range(n)]), r.randint(1, min(3, n))))(r.randint(1, 10)))
Q('Medium', 'Word Pattern', 'Does the sequence of words follow the pattern letters one-to-one? Print YES or NO. | Input: pattern line, then a line of words. | Output: YES or NO.', lambda s: (lambda p, w: 'YES' if len(p) == len(w) and len(set(zip(p, w))) == len(set(p)) == len(set(w)) else 'NO')(s.split('\n')[0].strip(), s.split('\n')[1].split()), [L('abba', 'dog cat cat dog')], lambda r: L(''.join(r.choice('ab') for _ in range(r.randint(1, 4))), ' '.join(r.choice(['dog', 'cat']) for _ in range(r.randint(1, 4)))))
Q('Medium', 'Ransom Note', 'Can the note be built from the magazine letters (each letter used once)? Print YES or NO. | Input: note line, then magazine line. | Output: YES or NO.', lambda s: (lambda a, b: 'YES' if not (Counter(a) - Counter(b)) else 'NO')(*s.strip().split('\n')), [L('aab', 'baa')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 4))), ''.join(r.choice('abc') for _ in range(r.randint(1, 7)))))
Q('Hard', 'Four Sum Count', 'Count index quadruples i<j<k<l whose sum is 0. | Input: N, then N integers. | Output: the count.', lambda s: sum(1 for c in itertools.combinations(arrs(s), 4) if sum(c) == 0), [L(6, '1 0 -1 0 -2 2')], ar(-3, 3, 4, 9))
Q('Hard', 'Subarrays With Equal 0s and 1s', 'Count subarrays of a 0/1 array that contain equally many 0s and 1s. | Input: N, then N values. | Output: the count.', lambda s: (lambda a: sum(1 for i in range(len(a)) for j in range(i + 1, len(a) + 1) if a[i:j].count(0) == a[i:j].count(1)))(arrs(s)), [L(4, '0 1 0 1')], ar(0, 1, 1, 12))
def lcs2(s):
    a = arrs(s); b = {}; best = 0
    for i, x in enumerate(a):
        b[x] = b.get(x - 1, 0) + 1
    return max(b.values()) if b else 0
Q('Hard', 'Longest Increasing by One Subsequence', 'Longest subsequence (keeping order) of values x, x+1, x+2, ... Print its length. | Input: N, then N integers. | Output: the length.', lcs2, [L(7, '1 2 3 5 3 4 5')], ar(0, 6, 1, 12))
Q('Hard', 'Count Distinct In Every Window', 'For every window of size K print the number of distinct values. | Input: N, the array, K. | Output: N-K+1 counts.', lambda s: (lambda t: J([len(set(t[1:1 + t[0]][i:i + t[-1]])) for i in range(t[0] - t[-1] + 1)]))(iv(s)), [L(7, '1 2 1 3 4 2 3', 4)], lambda r: (lambda n: L(n, J([r.randint(0, 4) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 12)))
Q('Hard', 'Pairs With Equal Product', 'Count index pairs i<j whose product equals P. | Input: N, the array, P. | Output: the count.', lambda s: (lambda t: sum(1 for i in range(t[0]) for j in range(i + 1, t[0]) if t[1 + i] * t[1 + j] == t[-1]))(iv(s)), [L(5, '2 3 6 1 6', 6)], arq(1, 6, 1, 10, 1, 12))
Q('Hard', 'Smallest Subarray With All Distinct Values', 'Let D be the number of distinct values in the array. Print the length of the shortest subarray containing all D distinct values. | Input: N, then N integers. | Output: the length.', lambda s: (lambda a: min(j - i + 1 for i in range(len(a)) for j in range(i, len(a)) if len(set(a[i:j + 1])) == len(set(a))))(arrs(s)), [L(6, '1 2 1 3 2 1')], ar(0, 4, 1, 10))

topic('stackq', 'Stacks and Queues', 'LIFO and FIFO structures, parsing and monotonic stacks')
def bal(s):
    st = []; m = {')': '(', ']': '[', '}': '{'}
    for c in s.strip():
        if c in '([{': st.append(c)
        elif not st or st.pop() != m[c]: return 'NO'
    return 'NO' if st else 'YES'
gb = lambda r: L(''.join(r.choice('()[]{}') for _ in range(r.randint(1, 10))))
Q('Easy', 'Balanced Brackets', 'Print YES if every bracket ( [ { is closed correctly. | Input: a string of brackets. | Output: YES or NO.', bal, [L('{[()]}'), L('([)]')], gb, 10)
def spush(s):
    st = []; o = []
    for ln in s.strip().split('\n')[1:]:
        p = ln.split()
        if p[0] == 'push': st.append(int(p[1]))
        elif p[0] == 'pop': o.append(st.pop() if st else -1)
        else: o.append(st[-1] if st else -1)
    return '\n'.join(map(str, o))
def gsp(r):
    n = r.randint(1, 10); return L(n) + ''.join(L(r.choice(['push %d' % r.randint(1, 9), 'pop', 'top'])) for _ in range(n))
Q('Easy', 'Stack Operations', 'Process push X, pop and top commands. pop and top print the value, or -1 if the stack is empty. | Input: N, then N commands. | Output: one value per pop or top.', spush, [L(5, 'push 3', 'push 8', 'top', 'pop', 'pop')], gsp)
def qop(s):
    q = deque(); o = []
    for ln in s.strip().split('\n')[1:]:
        p = ln.split()
        if p[0] == 'enq': q.append(int(p[1]))
        elif p[0] == 'deq': o.append(q.popleft() if q else -1)
        else: o.append(len(q))
    return '\n'.join(map(str, o))
def gq(r):
    n = r.randint(1, 10); return L(n) + ''.join(L(r.choice(['enq %d' % r.randint(1, 9), 'deq', 'size'])) for _ in range(n))
Q('Easy', 'Queue Operations', 'Process enq X, deq and size commands. deq prints the front value (or -1 if empty); size prints the size. | Input: N, then N commands. | Output: one value per deq or size.', qop, [L(4, 'enq 5', 'enq 6', 'deq', 'size')], gq)
Q('Easy', 'Reverse With a Stack', 'Reverse a string using a stack and print it. | Input: a string. | Output: the reversed string.', lambda s: s.strip()[::-1], [L('stack')], st(1, 10, 'abcdef'))
def evp(s):
    st = []
    for t in s.split():
        if t in '+-*': b = st.pop(); a = st.pop(); st.append(a + b if t == '+' else a - b if t == '-' else a * b)
        else: st.append(int(t))
    return st[0]
def gev(r):
    t = [str(r.randint(1, 9))]; n = r.randint(0, 4)
    for _ in range(n): t += [str(r.randint(1, 9)), r.choice('+-*')]
    return L(' '.join(t))
Q('Easy', 'Postfix Evaluation', 'Evaluate a postfix expression of single numbers with + - *. | Input: tokens separated by spaces. | Output: the value.', evp, [L('2 3 4 * +')], gev)
Q('Easy', 'Remove Adjacent Duplicates', 'Repeatedly remove two equal adjacent characters and print what remains (or - if empty). | Input: a string. | Output: the remaining string or -.', lambda s: (lambda st: ''.join(st) or '-')(__import__('functools').reduce(lambda st, c: (st.pop() and st) if st and st[-1] == c else st + [c], s.strip(), [])), [L('abbaca')], st(1, 12, 'ab'))
Q('Easy', 'Last Stone Remaining', 'Queue of numbers 1..N: repeatedly remove the front and move the next front to the back, until one remains. Print it. | Input: N. | Output: the last number.', lambda s: (lambda n: (lambda q: [q.rotate(-1) or q.popleft() for _ in range(n - 1)] and q[0] if n > 1 else 1)(deque(range(1, n + 1))))(int(s)), [L(5)], num(1, 40))
def nge(s):
    a = arrs(s); r = []
    for i, x in enumerate(a): r.append(next((y for y in a[i + 1:] if y > x), -1))
    return J(r)
Q('Medium', 'Next Greater Element', 'For each element print the next greater element to its right, or -1. | Input: N, then N integers. | Output: N integers.', nge, [L(4, '4 5 2 25')], A)
def dtemp(s):
    a = arrs(s); r = []
    for i, x in enumerate(a): r.append(next((j - i for j in range(i + 1, len(a)) if a[j] > x), 0))
    return J(r)
Q('Medium', 'Days Until Warmer', 'For each day print how many days until a warmer day, or 0. | Input: N, then N temperatures. | Output: N integers.', dtemp, [L(8, '73 74 75 71 69 72 76 73')], ar(30, 40, 1, 12))
def minpop(s):
    st = []; ms = []; o = []
    for ln in s.strip().split('\n')[1:]:
        p = ln.split()
        if p[0] == 'push': st.append(int(p[1])); ms.append(min(st[-1], ms[-1]) if ms else st[-1])
        elif p[0] == 'pop':
            if st: st.pop(); ms.pop()
        else: o.append(ms[-1] if ms else -1)
    return '\n'.join(map(str, o))
def gmp(r):
    n = r.randint(1, 10); return L(n) + ''.join(L(r.choice(['push %d' % r.randint(1, 9), 'pop', 'min'])) for _ in range(n))
Q('Medium', 'Stack With Minimum', 'Support push X, pop (ignored when empty) and min (print the smallest value now on the stack, or -1). | Input: N, then N commands. | Output: one value per min.', minpop, [L(5, 'push 5', 'push 2', 'min', 'pop', 'min')], gmp)
def dec2(s):
    st = []; cur = ''; num = 0
    for c in s.strip():
        if c.isdigit(): num = num * 10 + int(c)
        elif c == '[': st.append((cur, num)); cur = ''; num = 0
        elif c == ']': p, n = st.pop(); cur = p + cur * n
        else: cur += c
    return cur
def gdc(r): return L(r.choice(['a', 'ab', 'abc']) .join(['%d[' % r.randint(1, 3), ']']) + r.choice(['', 'x', 'yz']))
Q('Medium', 'Decode Repeated Groups', 'Expand patterns like 3[ab] into ababab; groups may nest. | Input: an encoded string. | Output: the decoded string.', dec2, [L('3[a2[c]]')], gdc)
def cars(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; st = []
    for x in a:
        alive = True
        while alive and x < 0 and st and st[-1] > 0:
            if st[-1] < -x: st.pop()
            elif st[-1] == -x: st.pop(); alive = False
            else: alive = False
        if alive: st.append(x)
    return J(st) or '-'
Q('Medium', 'Asteroid Collision', 'Positive numbers move right, negative move left, same speed; when two meet the smaller size explodes (equal: both). Print the survivors in order, or - if none. | Input: N, then N non-zero integers. | Output: survivors.', cars, [L(4, '5 10 -5 -3')], lambda r: (lambda n: L(n, J([r.choice([-1, 1]) * r.randint(1, 9) for _ in range(n)])))(r.randint(1, 9)))
def mnr(s):
    t = s.strip().split('\n'); a = t[0]; k = int(t[1]); st = []
    for c in a:
        while k and st and st[-1] > c: st.pop(); k -= 1
        st.append(c)
    r = ''.join(st[:len(st) - k] if k else st).lstrip('0'); return r or '0'
Q('Medium', 'Remove K Digits', 'Remove exactly K digits from the number to make it as small as possible. Print the result without leading zeros (0 if empty). | Input: digit string, then K (K at most its length). | Output: the smallest number.', mnr, [L('1432219', 3)], lambda r: (lambda a: L(a, r.randint(0, len(a))))(''.join(r.choice('0123456789') for _ in range(r.randint(1, 8)))))
def hist(s):
    a = arrs(s); return max(min(a[i:j + 1]) * (j - i + 1) for i in range(len(a)) for j in range(i, len(a)))
def vss(s):
    t = iv(s); n = t[0]; seq = t[1:1 + n]; st = []; i = 0
    for x in range(1, n + 1):
        st.append(x)
        while st and i < n and st[-1] == seq[i]: st.pop(); i += 1
    return 'YES' if not st else 'NO'
Q('Medium', 'Valid Pop Order', 'Numbers 1..N are pushed in order; pops may happen at any time. Can the given sequence be the pop order? Print YES or NO. | Input: N, then a permutation of 1..N. | Output: YES or NO.', vss, [L(5, '4 5 3 2 1'), L(5, '4 3 5 1 2')], lambda r: (lambda n: L(n, J(r.sample(range(1, n + 1), n))))(r.randint(1, 7)))
Q('Hard', 'Largest Rectangle in Histogram', 'Bars have width 1. Print the area of the largest rectangle inside the histogram. | Input: N, then N heights. | Output: the area.', hist, [L(6, '2 1 5 6 2 3')], ar(0, 8, 1, 12))
def dq(s):
    t = s.strip().split('\n')[1:]; d = deque(); o = []
    for ln in t:
        p = ln.split()
        if p[0] == 'pf': d.appendleft(int(p[1]))
        elif p[0] == 'pb': d.append(int(p[1]))
        elif p[0] == 'qf': o.append(d.popleft() if d else -1)
        else: o.append(d.pop() if d else -1)
    return '\n'.join(map(str, o))
def gdq(r):
    n = r.randint(1, 10); return L(n) + ''.join(L(r.choice(['pf %d' % r.randint(1, 9), 'pb %d' % r.randint(1, 9), 'qf', 'qb'])) for _ in range(n))
Q('Hard', 'Double-Ended Queue', 'Commands: pf X (push front), pb X (push back), qf (pop front and print, -1 if empty), qb (pop back and print, -1 if empty). | Input: N, then N commands. | Output: one value per qf or qb.', dq, [L(5, 'pf 1', 'pb 2', 'qf', 'qb', 'qf')], gdq)
def sp2(s):
    a = arrs(s); st = []; best = 0
    for i, x in enumerate(a):
        while st and a[st[-1]] <= x: best = max(best, 0); st.pop()
        st.append(i)
    return sum(1 for i in range(len(a)) if all(a[j] < a[i] for j in range(i)))
Q('Hard', 'Count Visible Buildings', 'Buildings stand in a row; you look from the left. A building is visible if it is strictly taller than every building before it. Print how many are visible. | Input: N, then N heights. | Output: the count.', sp2, [L(6, '3 1 4 4 5 2')], ar(1, 9, 1, 12))
def stk(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; st = []
    for x in a:
        while st and k and st[-1] > x: st.pop(); k -= 1
        st.append(x)
    st = st[:len(st) - k] if k else st; return J(st)
Q('Hard', 'Smallest Sequence After K Removals', 'Remove exactly K elements so the remaining sequence is lexicographically smallest. Print it. | Input: N, the array, K. | Output: the remaining array.', stk, [L(6, '3 5 2 6 1 4', 3)], lambda r: (lambda n: L(n, J([r.randint(1, 9) for _ in range(n)]), r.randint(0, n - 1)))(r.randint(1, 9)))
def mq(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; return J([min(a[i:i + k]) for i in range(n - k + 1)])
Q('Hard', 'Sliding Window Minimum', 'Print the minimum of every window of size K using a deque. | Input: N, the array, K. | Output: N-K+1 values.', mq, [L(6, '4 2 12 3 8 1', 3)], lambda r: (lambda n: L(n, J([r.randint(-9, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 12)))
def nsub(s):
    a = arrs(s); return sum(min(a[i:j + 1]) for i in range(len(a)) for j in range(i, len(a)))
Q('Hard', 'Sum of Subarray Minimums', 'Print the sum of the minimum of every contiguous subarray. | Input: N, then N integers. | Output: the sum.', nsub, [L(4, '3 1 2 4')], ar(1, 9, 1, 10))

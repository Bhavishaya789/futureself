from dsa4 import *
import heapq
topic('linked', 'Linked Lists', 'Nodes and pointers, modelled here by the list of node values in order')
# Lists are given as N then N values; the task asks what a linked-list algorithm would produce.
Q('Easy', 'Length of List', 'Print the number of nodes in the list. | Input: N, then N node values. | Output: N.', lambda s: len(arrs(s)), [L(4, '5 3 8 1')], A)
Q('Easy', 'Middle Node', 'Print the value of the middle node (for an even length, the second middle). | Input: N, then N node values. | Output: the value.', lambda s: arrs(s)[len(arrs(s)) // 2], [L(5, '1 2 3 4 5'), L(4, '1 2 3 4')], A)
Q('Easy', 'Reverse the List', 'Print the list after reversing the links. | Input: N, then N values. | Output: the reversed list.', lambda s: J(arrs(s)[::-1]), [L(3, '1 2 3')], A)
Q('Easy', 'Insert at Position', 'Insert value V at index P (0 = head) and print the list. | Input: N, the values, then P and V. | Output: the new list.', lambda s: (lambda t: (lambda a, p, v: J(a[:p] + [v] + a[p:]))(t[1:1 + t[0]], t[-2], t[-1]))(iv(s)), [L(3, '1 2 4', '2 3')], lambda r: (lambda n: L(n, J([r.randint(1, 9) for _ in range(n)]), '%d %d' % (r.randint(0, n), r.randint(1, 9))))(r.randint(1, 8)))
Q('Easy', 'Delete Head', 'Delete the first node and print the remaining list, or - if empty. | Input: N, then N values. | Output: the list or -.', lambda s: J(arrs(s)[1:]) or '-', [L(3, '7 8 9')], A)
Q('Easy', 'Search in List', 'Print the position (0-based) of the first node with value K, or -1. | Input: N, the values, K. | Output: the position.', lambda s: (lambda t: (t[1:1 + t[0]].index(t[-1]) if t[-1] in t[1:1 + t[0]] else -1))(iv(s)), [L(4, '3 6 9 6', 6)], arq(0, 9, 1, 8, 0, 9))
Q('Easy', 'Sum of Nodes', 'Print the sum of all node values. | Input: N, then N values. | Output: the sum.', lambda s: sum(arrs(s)), [L(3, '4 5 6')], A)
Q('Medium', 'Remove K-th From End', 'Remove the K-th node from the end (K=1 is the last) and print the list, or - if empty. | Input: N, the values, K (1<=K<=N). | Output: the list.', lambda s: (lambda t: (lambda a, k: J(a[:len(a) - k] + a[len(a) - k + 1:]) or '-')(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(1, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 8)))
Q('Medium', 'Remove Duplicates From Sorted List', 'The list is sorted. Remove repeated values so each appears once. | Input: N, the sorted values. | Output: the list.', lambda s: J(sorted(set(arrs(s)))), [L(5, '1 1 2 3 3')], lambda r: (lambda n: L(n, J(sorted(r.randint(0, 5) for _ in range(n)))))(r.randint(1, 10)))
Q('Medium', 'Merge Two Sorted Lists', 'Merge two sorted lists into one sorted list. | Input: two lines: N and values; M and values. | Output: the merged list.', lambda s: (lambda l: J(sorted(list(map(int, l[0].split()))[1:] + list(map(int, l[1].split()))[1:])))(s.strip().split('\n')), [L('3 1 3 5', '3 2 4 6')], lambda r: (lambda a, b: ' '.join(map(str, [len(a)] + a)) + '\n' + ' '.join(map(str, [len(b)] + b)) + '\n')(sorted(r.randint(0, 20) for _ in range(r.randint(1, 6))), sorted(r.randint(0, 20) for _ in range(r.randint(1, 6)))))
Q('Medium', 'Rotate List Right', 'Rotate the list to the right by K places and print it. | Input: N, the values, K. | Output: the rotated list.', lambda s: (lambda t: (lambda a, k: J(a[len(a) - k % len(a):] + a[:len(a) - k % len(a)]))(t[1:1 + t[0]], t[-1]))(iv(s)), [L(5, '1 2 3 4 5', 2)], arq(1, 9, 1, 8, 0, 12))
Q('Medium', 'Is Palindrome List', 'Print YES if the list is a palindrome, else NO. | Input: N, then N values. | Output: YES or NO.', lambda s: 'YES' if arrs(s) == arrs(s)[::-1] else 'NO', [L(4, '1 2 2 1')], ar(1, 2, 1, 7))
Q('Medium', 'Odd Even Reorder', 'Group the nodes at odd positions (1st, 3rd, ...) first, then the even positions, keeping order. | Input: N, then N values. | Output: the new list.', lambda s: J(arrs(s)[::2] + arrs(s)[1::2]), [L(5, '1 2 3 4 5')], A)
Q('Medium', 'Add Two Numbers', 'Two numbers are stored digit by digit in reverse order. Print their sum in the same reversed-digit format. | Input: two lines of digits separated by spaces. | Output: digits of the sum.', lambda s: (lambda l: J(str(int(''.join(l[0].split()[::-1])) + int(''.join(l[1].split()[::-1])))[::-1]))(s.strip().split('\n')), [L('2 4 3', '5 6 4')], lambda r: L(J([r.randint(0, 9) for _ in range(r.randint(1, 4))]), J([r.randint(0, 9) for _ in range(r.randint(1, 4))])) if False else L(J([r.randint(1, 9)] + [r.randint(0, 9) for _ in range(r.randint(0, 3))]), J([r.randint(1, 9)] + [r.randint(0, 9) for _ in range(r.randint(0, 3))])))
def cyc(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; p = t[1 + n]
    if p < 0: return -1
    seen = {}; i = 0
    # walk: node i goes to i+1; last node goes to p
    while True:
        if i in seen: return i
        seen[i] = 1; i = i + 1 if i + 1 < n else p
Q('Hard', 'Cycle Entry Node', 'The last node points to the node at index P (or to nothing if P=-1). Print the index where the cycle begins, or -1. | Input: N, the values, P. | Output: the index or -1.', lambda s: cyc(s) if iv(s)[-1] >= 0 else -1, [L(4, '3 2 0 -4', 1)], lambda r: (lambda n: L(n, J([r.randint(0, 9) for _ in range(n)]), r.randint(-1, n - 1)))(r.randint(1, 8)))
def srt(s): return J(sorted(arrs(s)))
Q('Hard', 'Sort the List', 'Sort the list in ascending order (merge sort on links is the classic way). | Input: N, then N values. | Output: the sorted list.', srt, [L(4, '4 2 1 3')], A)
def rk(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[1 + n]; o = []
    for i in range(0, n, k):
        g = a[i:i + k]; o += g[::-1] if len(g) == k else g
    return J(o)
Q('Hard', 'Reverse in Groups of K', 'Reverse every full group of K nodes; a final shorter group stays as it is. | Input: N, the values, K. | Output: the new list.', rk, [L(5, '1 2 3 4 5', 2)], lambda r: (lambda n: L(n, J([r.randint(1, 9) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
def swp(s):
    a = arrs(s)
    for i in range(0, len(a) - 1, 2): a[i], a[i + 1] = a[i + 1], a[i]
    return J(a)
Q('Hard', 'Swap Nodes in Pairs', 'Swap every two adjacent nodes (change links, not values, in a real list). | Input: N, then N values. | Output: the new list.', swp, [L(4, '1 2 3 4')], A)
def part(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; x = t[-1]; return J([v for v in a if v < x] + [v for v in a if v >= x])
Q('Hard', 'Partition Around X', 'Place all nodes smaller than X before nodes greater than or equal to X, keeping the relative order inside each part. | Input: N, the values, X. | Output: the new list.', part, [L(6, '1 4 3 2 5 2', 3)], arq(0, 9, 1, 10, 1, 8))
def ints(s):
    l = s.strip().split('\n'); a = list(map(int, l[0].split()))[1:]; b = list(map(int, l[1].split()))[1:]
    sa = set(a); return next((x for x in b if x in sa), -1)
Q('Hard', 'Intersection Value', 'Two lists may merge into a shared tail. Print the first value of list B that also occurs in list A (as a stand-in for the merge point), or -1. | Input: two lines, each N then N values. | Output: the value or -1.', ints, [L('3 4 1 8', '3 5 6 1')], lambda r: (lambda a, b: ' '.join(map(str, [len(a)] + a)) + '\n' + ' '.join(map(str, [len(b)] + b)) + '\n')([r.randint(0, 9) for _ in range(r.randint(1, 6))], [r.randint(0, 9) for _ in range(r.randint(1, 6))]))
def lru(s):
    t = s.strip().split('\n'); cap = int(t[0]); q = int(t[1]); d = {}; o = []; order = []
    for ln in t[2:2 + q]:
        p = ln.split()
        if p[0] == 'put':
            k, v = int(p[1]), int(p[2])
            if k in d: order.remove(k)
            elif len(d) == cap: del d[order.pop(0)]
            d[k] = v; order.append(k)
        else:
            k = int(p[1])
            if k in d: order.remove(k); order.append(k); o.append(d[k])
            else: o.append(-1)
    return '\n'.join(map(str, o))
def glru(r):
    q = r.randint(2, 10); s = L(r.randint(1, 3), q)
    for _ in range(q): s += L('put %d %d' % (r.randint(1, 4), r.randint(1, 9))) if r.random() < .5 else L('get %d' % r.randint(1, 4))
    return s
Q('Hard', 'LRU Cache', 'A cache holds at most C keys. put K V stores a value (evicting the least recently used key if full); get K prints the value or -1 and counts as a use. | Input: C, Q, then Q commands. | Output: one value per get.', lru, [L(2, 5, 'put 1 10', 'put 2 20', 'get 1', 'put 3 30', 'get 2')], glru)

topic('trees', 'Trees and BST', 'Binary trees given as level-order lists (-1 means no node)')
def build_tree(vals):
    # level-order with -1 as null
    if not vals or vals[0] == -1: return None
    nodes = [[v, None, None] if v != -1 else None for v in vals]
    q = deque([nodes[0]]); i = 1
    while q and i < len(nodes):
        cur = q.popleft()
        if i < len(nodes): cur[1] = nodes[i]; i += 1
        if i < len(nodes): cur[2] = nodes[i]; i += 1
        if cur[1]: q.append(cur[1])
        if cur[2]: q.append(cur[2])
    return nodes[0]
def gtree(r, lo=1, hi=9, a=1, b=9):
    n = r.randint(a, b); cnt = 1; vals = [r.randint(lo, hi)]; q = 1
    out = [vals[0]]; slots = 2
    while cnt < n and slots > 0:
        for _ in range(slots):
            pass
        break
    # simple: build random tree by inserting nodes at random free child slots, then output level-order
    root = [r.randint(lo, hi), None, None]; free = [(root, 1), (root, 2)]
    for _ in range(n - 1):
        p, k = free.pop(r.randrange(len(free))); nd = [r.randint(lo, hi), None, None]; p[k] = nd; free += [(nd, 1), (nd, 2)]
    res = []; qq = deque([root])
    while qq:
        c = qq.popleft()
        if c is None: res.append(-1); continue
        res.append(c[0]); qq.append(c[1]); qq.append(c[2])
    while res and res[-1] == -1: res.pop()
    return L(len(res), J(res))
def T(s): return build_tree(arrs(s))
GT = lambda r: gtree(r)
def height(n): return 0 if not n else 1 + max(height(n[1]), height(n[2]))
def count(n): return 0 if not n else 1 + count(n[1]) + count(n[2])
def inord(n): return [] if not n else inord(n[1]) + [n[0]] + inord(n[2])
def preord(n): return [] if not n else [n[0]] + preord(n[1]) + preord(n[2])
def postord(n): return [] if not n else postord(n[1]) + postord(n[2]) + [n[0]]
Q('Easy', 'Count Nodes', 'Print the number of nodes. | Input: N entries of the level-order list (-1 = no node). | Output: the count.', lambda s: count(T(s)), [L(7, '1 2 3 4 5 -1 6')], GT)
Q('Easy', 'Tree Height', 'Print the height in nodes (a single node has height 1). | Input: level-order list. | Output: the height.', lambda s: height(T(s)), [L(5, '3 9 20 -1 -1')], GT)
Q('Easy', 'Inorder Traversal', 'Print the inorder traversal. | Input: level-order list. | Output: node values.', lambda s: J(inord(T(s))), [L(3, '1 -1 2')], GT)
Q('Easy', 'Preorder Traversal', 'Print the preorder traversal. | Input: level-order list. | Output: node values.', lambda s: J(preord(T(s))), [L(3, '1 2 3')], GT)
Q('Easy', 'Postorder Traversal', 'Print the postorder traversal. | Input: level-order list. | Output: node values.', lambda s: J(postord(T(s))), [L(3, '1 2 3')], GT)
Q('Easy', 'Sum of All Nodes', 'Print the sum of every node value. | Input: level-order list. | Output: the sum.', lambda s: sum(inord(T(s))), [L(3, '1 2 3')], GT)
Q('Easy', 'Count Leaves', 'Print the number of leaf nodes. | Input: level-order list. | Output: the count.', lambda s: (lambda f: f(f, T(s)))(lambda f, n: 0 if not n else 1 if not n[1] and not n[2] else f(f, n[1]) + f(f, n[2])), [L(7, '1 2 3 4 5 -1 6')], GT)
def lvl(s):
    root = T(s); o = []; q = deque([root])
    while q:
        o.append(J([x[0] for x in q])); q = deque(c for x in q for c in (x[1], x[2]) if c)
    return '\n'.join(o)
Q('Medium', 'Level Order Lines', 'Print each level on its own line. | Input: level-order list. | Output: one line per level.', lvl, [L(7, '3 9 20 -1 -1 15 7')], GT)
def isbst(n, lo=-10**9, hi=10**9): return True if not n else lo < n[0] < hi and isbst(n[1], lo, n[0]) and isbst(n[2], n[0], hi)
Q('Medium', 'Is Valid BST', 'Print YES if the tree is a valid binary search tree (strict ordering), else NO. | Input: level-order list. | Output: YES or NO.', lambda s: 'YES' if isbst(T(s)) else 'NO', [L(3, '2 1 3'), L(5, '5 1 4 -1 -1')], lambda r: gtree(r, 1, 6, 1, 6))
Q('Medium', 'Right Side View', 'Print the last node of every level, top to bottom. | Input: level-order list. | Output: node values.', lambda s: J([int(l.split()[-1]) for l in lvl(s).split('\n')]), [L(7, '1 2 3 -1 5 -1 4')], GT)
def diam(n):
    best = [0]
    def h(x):
        if not x: return 0
        a, b = h(x[1]), h(x[2]); best[0] = max(best[0], a + b); return 1 + max(a, b)
    h(n); return best[0]
Q('Medium', 'Diameter of Tree', 'Print the longest path between any two nodes, counted in edges. | Input: level-order list. | Output: the length.', lambda s: diam(T(s)), [L(5, '1 2 3 4 5')], GT)
def mirror(a, b): return (not a and not b) or (a and b and a[0] == b[0] and mirror(a[1], b[2]) and mirror(a[2], b[1]))
Q('Medium', 'Is Symmetric', 'Print YES if the tree is a mirror of itself, else NO. | Input: level-order list. | Output: YES or NO.', lambda s: 'YES' if (lambda t: not t or mirror(t[1], t[2]))(T(s)) else 'NO', [L(7, '1 2 2 3 4 4 3')], lambda r: (lambda a: L(len(a), J(a)))(r.choice([[1, 2, 2], [1, 2, 3], [1, 2, 2, 3, 4, 4, 3], [1, 2, 2, -1, 3, -1, 3], [5]])))
def ins_bst(a, v):
    if not a: return [v, None, None]
    if v < a[0]: a[1] = ins_bst(a[1], v)
    else: a[2] = ins_bst(a[2], v)
    return a
def bst_from(s):
    r = None
    for v in arrs(s): r = ins_bst(r, v)
    return r
Q('Medium', 'BST Height', 'Insert the values one by one into an empty BST (equal values go right). Print the height in nodes. | Input: N, then N values. | Output: the height.', lambda s: height(bst_from(s)), [L(5, '5 3 8 1 4')], ar(1, 20, 1, 10))
Q('Medium', 'BST Inorder After Inserts', 'Insert the values into an empty BST (equal go right) and print the inorder traversal. | Input: N, then N values. | Output: the sorted values.', lambda s: J(inord(bst_from(s))), [L(4, '3 1 2 3')], ar(1, 9, 1, 10))
def lca(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; p, q = t[1 + n], t[2 + n]; r = None
    for v in a: r = ins_bst(r, v)
    x = r
    while x:
        if p < x[0] and q < x[0]: x = x[1]
        elif p > x[0] and q > x[0]: x = x[2]
        else: return x[0]
Q('Hard', 'Lowest Common Ancestor in BST', 'Build a BST from distinct values (inserted in order). P and Q are in it. Print their lowest common ancestor. | Input: N, the values, then P and Q on one line. | Output: the ancestor value.', lca, [L(6, '6 2 8 0 4 9', '2 8')], lambda r: (lambda a: L(len(a), J(a), '%d %d' % (r.choice(a), r.choice(a))))(r.sample(range(1, 30), r.randint(1, 8))))
def maxpath(n):
    best = [-10**9]
    def f(x):
        if not x: return 0
        a, b = max(0, f(x[1])), max(0, f(x[2])); best[0] = max(best[0], x[0] + a + b); return x[0] + max(a, b)
    f(n); return best[0]
Q('Hard', 'Maximum Path Sum', 'A path goes along parent-child links and may start and end anywhere. Print the largest sum of node values on such a path. | Input: level-order list. | Output: the maximum.', lambda s: maxpath(T(s)), [L(3, '-10 9 20')], lambda r: gtree(r, -9, 9, 1, 8))
def ser(s): return J(preord(T(s)))
def lvlzig(s):
    o = []; 
    for i, l in enumerate(lvl(s).split('\n')): o.append(J(l.split()[::-1]) if i % 2 else l)
    return '\n'.join(o)
Q('Hard', 'Zigzag Level Order', 'Print levels top to bottom, left to right on level 1, right to left on level 2, and so on. | Input: level-order list. | Output: one line per level.', lvlzig, [L(7, '3 9 20 -1 -1 15 7')], GT)
def kth_bst(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; r = None
    for v in a: r = ins_bst(r, v)
    return inord(r)[k - 1]
Q('Hard', 'K-th Smallest in BST', 'Build a BST from the values (equal go right) and print its K-th smallest value. | Input: N, the values, K. | Output: the value.', kth_bst, [L(4, '3 1 4 2', 1)], lambda r: (lambda n: L(n, J([r.randint(1, 20) for _ in range(n)]), r.randint(1, n)))(r.randint(1, 9)))
def pathsum(s):
    t = iv(s); n = t[0]; k = t[-1]; root = build_tree(t[1:1 + n])
    def f(x, rem): return 0 if not x else (1 if not x[1] and not x[2] and rem == x[0] else 0) + f(x[1], rem - x[0]) + f(x[2], rem - x[0])
    return f(root, k)
def pathsum(s):
    t = s.strip().split('\n'); root = build_tree(list(map(int, t[1].split()))); k = int(t[2])
    def f(x, rem): return 0 if not x else (1 if not x[1] and not x[2] and rem == x[0] else 0) + f(x[1], rem - x[0]) + f(x[2], rem - x[0])
    return f(root, k)
Q('Hard', 'Root-to-Leaf Paths With Sum', 'Count the root-to-leaf paths whose values add to K. | Input: N, the level-order list, then K on its own line. | Output: the count.', pathsum, [L(7, '5 4 8 11 -1 13 4', 22)], lambda r: gtree(r, 1, 5, 1, 7) + L(r.randint(3, 15)))
def downk(s):
    t = s.strip().split('\n'); root = build_tree(list(map(int, t[1].split()))); k = int(t[2]); c = 0
    def f(x, acc):
        nonlocal c
        if not x: return
        acc = [a + x[0] for a in acc] + [x[0]]; c += acc.count(k); f(x[1], acc); f(x[2], acc)
    f(root, []); return c
Q('Hard', 'Downward Paths With Sum', 'A path goes downward from any node to any descendant. Count the paths whose values add to K. | Input: N, the level-order list, then K. | Output: the count.', downk, [L(7, '10 5 -3 3 2 -1 11', 8)], lambda r: gtree(r, -3, 6, 1, 8) + L(r.randint(-2, 9)))

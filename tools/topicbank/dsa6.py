from dsa5 import *
topic('graphs', 'Graphs', 'BFS, DFS, shortest paths, components and ordering. Nodes are numbered 1..N.')
def ggr(directed=False, w=False, a=2, b=8, extra=0, conn=False):
    def g(r):
        n = r.randint(a, b); m = r.randint(0, min(n * (n - 1) // 2, n + 3)); es = set()
        while len(es) < m:
            u, v = r.randint(1, n), r.randint(1, n)
            if u != v and (directed or (v, u) not in es) and (u, v) not in es: es.add((u, v))
        s = L('%d %d' % (n, m)) + ''.join(L('%d %d %d' % (u, v, r.randint(1, 9))) if w else L('%d %d' % (u, v)) for u, v in es)
        return s + (L(r.randint(1, n)) if extra else '')
    return g
def G(s, directed=False, w=False):
    t = s.strip().split('\n'); n, m = map(int, t[0].split()); adj = [[] for _ in range(n + 1)]
    for ln in t[1:1 + m]:
        p = list(map(int, ln.split())); u, v = p[0], p[1]; c = p[2] if w else 1
        adj[u].append((v, c))
        if not directed: adj[v].append((u, c))
    return n, m, adj, t[1 + m:]
def bfs(adj, s):
    d = {s: 0}; q = deque([s])
    while q:
        u = q.popleft()
        for v, _ in sorted(adj[u]):
            if v not in d: d[v] = d[u] + 1; q.append(v)
    return d
Q('Easy', 'Degree of Each Node', 'Print the degree of nodes 1..N in an undirected graph. | Input: N M, then M edges. | Output: N degrees.', lambda s: (lambda n, m, adj, _: J(len(adj[i]) for i in range(1, n + 1)))(*G(s)), [L('4 3', '1 2', '2 3', '2 4')], ggr())
Q('Easy', 'Count Edges From Node', 'Print how many neighbours node X has in an undirected graph. | Input: N M, M edges, then X. | Output: the degree.', lambda s: (lambda n, m, adj, x: len(adj[int(x[0])]))(*G(s)), [L('3 2', '1 2', '1 3', 1)], ggr(extra=1))
Q('Easy', 'Is Edge Present', 'Print YES if there is an edge between U and V, else NO. | Input: N M, M edges, then "U V". | Output: YES or NO.', lambda s: (lambda n, m, adj, x: 'YES' if int(x[0].split()[1]) in [v for v, _ in adj[int(x[0].split()[0])]] else 'NO')(*G(s)), [L('3 2', '1 2', '2 3', '1 3')], lambda r: ggr()(r) + L('%d %d' % (1, 2)))
Q('Easy', 'Number of Isolated Nodes', 'Count nodes with no edges. | Input: N M, then M edges. | Output: the count.', lambda s: (lambda n, m, adj, _: sum(1 for i in range(1, n + 1) if not adj[i]))(*G(s)), [L('4 1', '1 2')], ggr())
Q('Easy', 'BFS Distance To Node', 'Print the number of edges on the shortest path from node 1 to node N, or -1. | Input: N M, then M edges. | Output: the distance.', lambda s: (lambda n, m, adj, _: bfs(adj, 1).get(n, -1))(*G(s)), [L('4 3', '1 2', '2 3', '3 4')], ggr())
Q('Easy', 'Reachable From 1', 'Count the nodes reachable from node 1 (including itself) in an undirected graph. | Input: N M, then M edges. | Output: the count.', lambda s: (lambda n, m, adj, _: len(bfs(adj, 1)))(*G(s)), [L('5 2', '1 2', '3 4')], ggr())
Q('Easy', 'Is Connected', 'Print YES if every node can reach every other node, else NO. | Input: N M, then M edges. | Output: YES or NO.', lambda s: (lambda n, m, adj, _: 'YES' if len(bfs(adj, 1)) == n else 'NO')(*G(s)), [L('3 2', '1 2', '2 3')], ggr())
def comps(s):
    n, m, adj, _ = G(s); seen = set(); c = 0
    for i in range(1, n + 1):
        if i not in seen: c += 1; seen |= set(bfs(adj, i))
    return c
Q('Medium', 'Connected Components', 'Count the connected components. | Input: N M, then M edges. | Output: the count.', comps, [L('5 3', '1 2', '2 3', '4 5')], ggr(a=1, b=9))
def bip(s):
    n, m, adj, _ = G(s); col = {}
    for st in range(1, n + 1):
        if st in col: continue
        col[st] = 0; q = deque([st])
        while q:
            u = q.popleft()
            for v, _ in adj[u]:
                if v not in col: col[v] = 1 - col[u]; q.append(v)
                elif col[v] == col[u]: return 'NO'
    return 'YES'
Q('Medium', 'Is Bipartite', 'Print YES if the nodes can be split into two groups with every edge between the groups. | Input: N M, then M edges. | Output: YES or NO.', bip, [L('3 3', '1 2', '2 3', '3 1')], ggr(a=1, b=8))
def hascyc(s):
    n, m, adj, _ = G(s); par = list(range(n + 1))
    def f(x):
        while par[x] != x: par[x] = par[par[x]]; x = par[x]
        return x
    for ln in s.strip().split('\n')[1:1 + m]:
        u, v = map(int, ln.split()); a, b = f(u), f(v)
        if a == b: return 'YES'
        par[a] = b
    return 'NO'
Q('Medium', 'Has Cycle (Undirected)', 'Print YES if the undirected graph contains a cycle. | Input: N M, then M edges. | Output: YES or NO.', hascyc, [L('3 3', '1 2', '2 3', '3 1')], ggr(a=1, b=8))
def topo(s):
    n, m, adj, _ = G(s, True); ind = [0] * (n + 1)
    for u in range(1, n + 1):
        for v, _ in adj[u]: ind[v] += 1
    h = [i for i in range(1, n + 1) if not ind[i]]; heapq.heapify(h); o = []
    while h:
        u = heapq.heappop(h); o.append(u)
        for v, _ in adj[u]:
            ind[v] -= 1
            if not ind[v]: heapq.heappush(h, v)
    return J(o) if len(o) == n else '-1'
def gdag(r):
    n = r.randint(2, 8); es = set()
    for _ in range(r.randint(0, n + 2)):
        u, v = r.randint(1, n), r.randint(1, n)
        if u != v and (u < v or r.random() < .1): es.add((u, v))
    return L('%d %d' % (n, len(es))) + ''.join(L('%d %d' % e) for e in es)
Q('Medium', 'Topological Order', 'Print the topological order of a directed graph, always taking the smallest available node first, or -1 if there is a cycle. | Input: N M, then M directed edges. | Output: the order or -1.', topo, [L('4 3', '1 2', '1 3', '3 4')], gdag)
def dij(s):
    n, m, adj, _ = G(s, False, True); d = [10**9] * (n + 1); d[1] = 0; h = [(0, 1)]
    while h:
        du, u = heapq.heappop(h)
        if du > d[u]: continue
        for v, c in adj[u]:
            if du + c < d[v]: d[v] = du + c; heapq.heappush(h, (d[v], v))
    return d[n] if d[n] < 10**9 else -1
Q('Medium', 'Shortest Weighted Path', 'Print the length of the shortest path from node 1 to node N in a weighted undirected graph, or -1. | Input: N M, then M lines "U V W". | Output: the length.', dij, [L('4 4', '1 2 1', '2 4 5', '1 3 2', '3 4 2')], ggr(w=True))
Q('Medium', 'Nodes At Distance K', 'Count the nodes whose shortest distance from node 1 is exactly K. | Input: N M, M edges, then K. | Output: the count.', lambda s: (lambda n, m, adj, x: sum(1 for v in bfs(adj, 1).values() if v == int(x[0])))(*G(s)), [L('4 3', '1 2', '2 3', '2 4', 1)], lambda r: ggr()(r) + L(r.randint(0, 3)))
def islands(s):
    t = s.strip().split('\n'); r, c = map(int, t[0].split()); g = t[1:1 + r]; seen = set(); k = 0
    for i in range(r):
        for j in range(c):
            if g[i][j] == '1' and (i, j) not in seen:
                k += 1; st = [(i, j)]; seen.add((i, j))
                while st:
                    a, b = st.pop()
                    for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                        if 0 <= x < r and 0 <= y < c and g[x][y] == '1' and (x, y) not in seen: seen.add((x, y)); st.append((x, y))
    return k
def ggrid(r):
    n, m = r.randint(1, 5), r.randint(1, 5); return L('%d %d' % (n, m)) + ''.join(L(''.join(r.choice('01') for _ in range(m))) for _ in range(n))
Q('Medium', 'Number of Islands', 'Count groups of 1s connected up, down, left or right. | Input: R C, then R rows of 0/1. | Output: the count.', islands, [L('3 3', '110', '010', '001')], ggrid)
def sp_grid(s):
    t = s.strip().split('\n'); r, c = map(int, t[0].split()); g = t[1:1 + r]
    if g[0][0] == '#' or g[r - 1][c - 1] == '#': return -1
    d = {(0, 0): 0}; q = deque([(0, 0)])
    while q:
        a, b = q.popleft()
        for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
            if 0 <= x < r and 0 <= y < c and g[x][y] != '#' and (x, y) not in d: d[(x, y)] = d[(a, b)] + 1; q.append((x, y))
    return d.get((r - 1, c - 1), -1)
Q('Medium', 'Shortest Path in Grid', 'Move up, down, left or right through open cells (.) avoiding walls (#). Print the fewest steps from top-left to bottom-right, or -1. | Input: R C, then R rows. | Output: the steps.', sp_grid, [L('2 3', '..#', '...')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(''.join(r.choice('..#') for _ in range(m))) for _ in range(n)))(r.randint(1, 5), r.randint(1, 5)))
def mst(s):
    n, m, adj, _ = G(s, False, True); es = sorted((int(x.split()[2]), int(x.split()[0]), int(x.split()[1])) for x in s.strip().split('\n')[1:1 + m]); par = list(range(n + 1)); tot = k = 0
    def f(x):
        while par[x] != x: par[x] = par[par[x]]; x = par[x]
        return x
    for w, u, v in es:
        a, b = f(u), f(v)
        if a != b: par[a] = b; tot += w; k += 1
    return tot if k == n - 1 else -1
Q('Hard', 'Minimum Spanning Tree Cost', 'Print the total weight of a minimum spanning tree, or -1 if the graph is not connected. | Input: N M, then M lines "U V W". | Output: the cost.', mst, [L('4 5', '1 2 1', '2 3 2', '3 4 3', '1 4 4', '1 3 5')], ggr(w=True))
def cycdir(s):
    return '-1' if topo(s) == '-1' else 'NO' if False else ('YES' if topo(s) == '-1' else 'NO')
Q('Hard', 'Has Cycle (Directed)', 'Print YES if the directed graph has a cycle, else NO. | Input: N M, then M directed edges. | Output: YES or NO.', cycdir, [L('3 3', '1 2', '2 3', '3 1')], gdag)
def fw(s):
    n, m, adj, q = G(s, False, True); INF = 10**9; d = [[INF] * (n + 1) for _ in range(n + 1)]
    for i in range(1, n + 1): d[i][i] = 0
    for u in range(1, n + 1):
        for v, c in adj[u]: d[u][v] = min(d[u][v], c)
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1): d[i][j] = min(d[i][j], d[i][k] + d[k][j])
    x, y = map(int, q[0].split()); return d[x][y] if d[x][y] < INF else -1
Q('Hard', 'All-Pairs Query', 'For one query print the shortest distance between U and V in a weighted undirected graph (Floyd-Warshall style), or -1. | Input: N M, M lines "U V W", then "U V". | Output: the distance.', fw, [L('3 2', '1 2 4', '2 3 1', '1 3')], lambda r: ggr(w=True)(r) + L('%d %d' % (1, 2)))
def sccs(s):
    n, m, adj, _ = G(s, True); reach = []
    for u in range(1, n + 1):
        seen = {u}; st = [u]
        while st:
            x = st.pop()
            for v, _ in adj[x]:
                if v not in seen: seen.add(v); st.append(v)
        reach.append(seen)
    comp = set()
    for u in range(1, n + 1): comp.add(frozenset(v for v in range(1, n + 1) if v in reach[u - 1] and u in reach[v - 1]))
    return len(comp)
Q('Hard', 'Strongly Connected Components', 'Count the strongly connected components of a directed graph. | Input: N M, then M directed edges. | Output: the count.', sccs, [L('5 5', '1 2', '2 3', '3 1', '3 4', '4 5')], ggr(directed=True, a=1, b=7))
def brid(s):
    n, m, adj, _ = G(s); es = [tuple(map(int, x.split())) for x in s.strip().split('\n')[1:1 + m]]; base = comps(s); c = 0
    for i in range(m):
        rest = es[:i] + es[i + 1:]; t = L('%d %d' % (n, len(rest))) + ''.join(L('%d %d' % e) for e in rest)
        if comps(t) > base: c += 1
    return c
Q('Hard', 'Count Bridges', 'A bridge is an edge whose removal increases the number of components. Count them. | Input: N M, then M edges. | Output: the count.', brid, [L('4 4', '1 2', '2 3', '3 1', '3 4')], ggr(a=1, b=8))
def lpd(s):
    n, m, adj, _ = G(s, True); best = {}
    def f(u):
        if u in best: return best[u]
        best[u] = 0; r = 0
        for v, _ in adj[u]: r = max(r, 1 + f(v))
        best[u] = r; return r
    if topo(s) == '-1': return -1
    return max(f(u) for u in range(1, n + 1))
Q('Hard', 'Longest Path in a DAG', 'Print the number of edges on the longest path in a directed acyclic graph (-1 if there is a cycle). | Input: N M, then M directed edges. | Output: the longest path length.', lpd, [L('4 3', '1 2', '2 3', '1 4')], gdag)
def ways(s):
    n, m, adj, _ = G(s, True); 
    if topo(s) == '-1': return -1
    memo = {}
    def f(u):
        if u == n: return 1
        if u in memo: return memo[u]
        memo[u] = sum(f(v) for v, _ in adj[u]); return memo[u]
    return f(1)
Q('Hard', 'Paths From 1 to N in a DAG', 'Count the distinct paths from node 1 to node N in a directed acyclic graph (-1 if the graph has a cycle). | Input: N M, then M directed edges. | Output: the count.', ways, [L('4 4', '1 2', '1 3', '2 4', '3 4')], gdag)

topic('dp', 'Dynamic Programming', 'Overlapping subproblems: memoise or build tables')
Q('Easy', 'Nth Tribonacci', 'T(0)=0, T(1)=1, T(2)=1 and T(n)=T(n-1)+T(n-2)+T(n-3). Print T(N). | Input: N (0 to 35). | Output: T(N).', lambda s: (lambda n: [0, 1, 1][n] if n < 3 else (lambda a: [a.append(a[-1] + a[-2] + a[-3]) for _ in range(n - 2)] and a[-1])([0, 1, 1]))(int(s)), [L(4)], num(0, 35))
Q('Easy', 'Grid Paths Right and Down', 'Count the paths from the top-left to bottom-right of an R x C grid moving only right or down. | Input: R and C. | Output: the paths.', lambda s: (lambda r, c: math.comb(r + c - 2, r - 1))(*iv(s)), [L(3, 3)], two(1, 10))
Q('Easy', 'Coin Change Ways Count', 'Count the ways to make N using coins 1, 2 and 5 (order does not matter). | Input: N. | Output: the ways.', lambda s: (lambda n: (lambda d: [d.__setitem__(i, d[i] + d[i - c]) for c in (1, 2, 5) for i in range(c, n + 1)] and d[n] if n else 1)([1] + [0] * n))(int(s)), [L(5)], num(0, 60))
Q('Easy', 'Sum of Array By Recurrence', 'Print the sum of the first N terms of the sequence a(1)=1, a(k)=a(k-1)+k. | Input: N. | Output: the sum.', lambda s: (lambda n: sum(k * (k + 1) // 2 for k in range(1, n + 1)))(int(s)), [L(4)], num(1, 200))
Q('Easy', 'Min Cost Climbing', 'Cost[i] is paid to leave step i; you may start at step 0 or 1 and move 1 or 2 steps; the top is beyond the last step. Print the minimum cost. | Input: N, then N costs. | Output: the minimum.', lambda s: (lambda c: (lambda f: f(f, len(c)))(lambda f, i: 0 if i <= 1 else min(f(f, i - 1) + c[i - 1], f(f, i - 2) + c[i - 2])))(arrs(s)), [L(5, '10 15 20 5 8')], ar(0, 20, 1, 10))
Q('Easy', 'Count Binary Strings No Adjacent Ones', 'Count binary strings of length N with no two adjacent 1s. | Input: N. | Output: the count.', lambda s: (lambda n: (lambda a, b: [(a := b, b := a + b) for _ in range(n)] and b)(1, 1) if False else (lambda f: f(f, n))(lambda f, k: 1 if k == 0 else 2 if k == 1 else f(f, k - 1) + f(f, k - 2)))(int(s)), [L(3)], num(1, 20))
Q('Easy', 'Maximum Sum Without Adjacent', 'Pick elements with no two adjacent to maximise the sum (pick none = 0). | Input: N, then N non-negative integers. | Output: the maximum sum.', lambda s: (lambda a: (lambda f: f(f, 0))(lambda f, i: 0 if i >= len(a) else max(a[i] + f(f, i + 2), f(f, i + 1))))(arrs(s)), [L(5, '2 7 9 3 1')], ar(0, 15, 1, 10))
def knap(s):
    t = iv(s); n, w = t[0], t[1]; wt = t[2:2 + n]; v = t[2 + n:2 + 2 * n]; d = [0] * (w + 1)
    for i in range(n):
        for c in range(w, wt[i] - 1, -1): d[c] = max(d[c], d[c - wt[i]] + v[i])
    return d[w]
def gk(r):
    n = r.randint(1, 6); return L('%d %d' % (n, r.randint(1, 15))) + L(J([r.randint(1, 8) for _ in range(n)])) + L(J([r.randint(1, 20) for _ in range(n)]))
Q('Medium', '0/1 Knapsack', 'Items have weights and values; capacity is W. Print the maximum value without splitting items. | Input: "N W", the N weights, then the N values. | Output: the best value.', knap, [L('3 4', '1 3 4', '15 20 30')], gk)
def lis(s):
    a = arrs(s); d = [1] * len(a)
    for i in range(len(a)):
        for j in range(i):
            if a[j] < a[i]: d[i] = max(d[i], d[j] + 1)
    return max(d)
Q('Medium', 'Longest Increasing Subsequence', 'Print the length of the longest strictly increasing subsequence. | Input: N, then N integers. | Output: the length.', lis, [L(8, '10 9 2 5 3 7 101 18')], ar(0, 15, 1, 12))
def coinmin(s):
    t = iv(s); n = t[0]; c = t[1:1 + n]; a = t[-1]; d = [0] + [10**9] * a
    for i in range(1, a + 1):
        for x in c:
            if x <= i: d[i] = min(d[i], d[i - x] + 1)
    return d[a] if d[a] < 10**9 else -1
Q('Medium', 'Minimum Coins', 'Print the fewest coins (unlimited supply of each denomination) that make amount A, or -1. | Input: N, the denominations, then A. | Output: the fewest coins.', coinmin, [L(3, '1 2 5', 11)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 30)))(r.sample(range(1, 9), r.randint(1, 4))))
def subsum(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; d = {0}
    for x in a: d |= {y + x for y in d}
    return 'YES' if k in d else 'NO'
Q('Medium', 'Subset Sum', 'Print YES if some subset of the positive integers adds up to K. | Input: N, the numbers, then K. | Output: YES or NO.', subsum, [L(4, '3 34 4 12', 9)], arq(1, 9, 1, 8, 0, 30))
def house(s):
    a = arrs(s)
    def lin(b): return (lambda f: f(f, 0))(lambda f, i: 0 if i >= len(b) else max(b[i] + f(f, i + 2), f(f, i + 1)))
    return a[0] if len(a) == 1 else max(lin(a[1:]), lin(a[:-1]))
Q('Medium', 'Circular Street Robber', 'Houses form a circle (first and last are neighbours). Pick houses with no two adjacent to maximise money. | Input: N, then N amounts. | Output: the maximum.', house, [L(4, '2 3 2 1')], ar(0, 15, 1, 10))
def lps2(s):
    a = s.strip(); n = len(a); d = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        d[i][i] = 1
        for j in range(i + 1, n): d[i][j] = d[i + 1][j - 1] + 2 if a[i] == a[j] else max(d[i + 1][j], d[i][j - 1])
    return d[0][n - 1]
Q('Medium', 'Longest Palindromic Subsequence', 'Print the length of the longest palindromic subsequence. | Input: a string. | Output: the length.', lps2, [L('bbbab')], st(1, 12, 'abc'))
def mpath(s):
    t = s.strip().split('\n'); r, c = map(int, t[0].split()); g = [list(map(int, x.split())) for x in t[1:1 + r]]; d = [[0] * c for _ in range(r)]
    for i in range(r):
        for j in range(c):
            d[i][j] = g[i][j] + (min(d[i - 1][j] if i else 10**9, d[i][j - 1] if j else 10**9) if i or j else 0)
    return d[r - 1][c - 1]
Q('Medium', 'Minimum Path Sum in Grid', 'Move only right or down from top-left to bottom-right; print the smallest sum of visited cells. | Input: R C, then R rows. | Output: the minimum sum.', mpath, [L('3 3', '1 3 1', '1 5 1', '4 2 1')], lambda r: (lambda n, m: L('%d %d' % (n, m)) + ''.join(L(J([r.randint(1, 9) for _ in range(m)])) for _ in range(n)))(r.randint(1, 5), r.randint(1, 5)))
def lcsub(s):
    a, b = s.strip().split('\n'); best = 0; d = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a)):
        for j in range(len(b)):
            if a[i] == b[j]: d[i + 1][j + 1] = d[i][j] + 1; best = max(best, d[i + 1][j + 1])
    return best
Q('Medium', 'Longest Common Substring', 'Print the length of the longest substring present in both strings. | Input: two lines. | Output: the length.', lcsub, [L('abcdxyz', 'xyzabcd')], lambda r: L(''.join(r.choice('abc') for _ in range(r.randint(1, 8))), ''.join(r.choice('abc') for _ in range(r.randint(1, 8)))))
def perfsq(s):
    n = int(s); d = [0] + [10**9] * n
    for i in range(1, n + 1):
        k = 1
        while k * k <= i: d[i] = min(d[i], d[i - k * k] + 1); k += 1
    return d[n]
Q('Hard', 'Minimum Perfect Squares', 'Print the fewest perfect squares that sum to N. | Input: N. | Output: the count.', perfsq, [L(12), L(13)], num(1, 400))
def mcm(s):
    a = arrs(s); n = len(a) - 1
    if n < 2: return 0
    d = [[0] * n for _ in range(n)]
    for ln in range(2, n + 1):
        for i in range(n - ln + 1):
            j = i + ln - 1; d[i][j] = min(d[i][k] + d[k + 1][j] + a[i] * a[k + 1] * a[j + 1] for k in range(i, j))
    return d[0][n - 1]
Q('Hard', 'Matrix Chain Multiplication', 'Matrix i has size dims[i] x dims[i+1]. Print the minimum scalar multiplications to multiply the whole chain. | Input: N dimensions, then the N values. | Output: the minimum cost.', mcm, [L(4, '10 20 30 40')], ar(1, 9, 2, 7))
def ways2(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]; d = [1] + [0] * k
    for x in a:
        for i in range(x, k + 1): d[i] += d[i - x]
    return d[k]
Q('Hard', 'Coin Combinations Count', 'Count the combinations (order does not matter) of the coins that make A; coins may repeat. | Input: N, the coins, then A. | Output: the count.', ways2, [L(3, '1 2 5', 5)], lambda r: (lambda a: L(len(a), J(a), r.randint(0, 25)))(r.sample(range(1, 8), r.randint(1, 4))))
def bst_cnt(s): n = int(s); return math.comb(2 * n, n) // (n + 1)
Q('Hard', 'Unique BST Count', 'Print how many structurally different binary search trees store the keys 1..N. | Input: N (1 to 15). | Output: the count.', bst_cnt, [L(3)], num(1, 15))
def stock(s):
    t = iv(s); n = t[0]; a = t[1:1 + n]; k = t[-1]
    if not a: return 0
    d = [[0] * n for _ in range(k + 1)]
    for i in range(1, k + 1):
        best = -a[0]
        for j in range(1, n): d[i][j] = max(d[i][j - 1], a[j] + best); best = max(best, d[i - 1][j] - a[j])
    return d[k][n - 1]
Q('Hard', 'Stock Profit With K Trades', 'Given daily prices, make at most K buy-then-sell trades (no overlapping) for maximum profit. | Input: N, the prices, then K. | Output: the best profit.', stock, [L(6, '3 2 6 5 0 3', 2)], arq(0, 12, 1, 9, 1, 3))
def partmin(s):
    a = arrs(s); tot = sum(a); d = {0}
    for x in a: d |= {y + x for y in d}
    return min(abs(tot - 2 * y) for y in d)
Q('Hard', 'Minimum Partition Difference', 'Split the numbers into two groups to minimise the difference of their sums. Print that difference. | Input: N, then N positive integers. | Output: the minimum difference.', partmin, [L(4, '1 6 11 5')], ar(1, 12, 1, 9))
def egg(s):
    e, f = iv(s); d = [[0] * (f + 1) for _ in range(e + 1)]
    for i in range(1, e + 1):
        for j in range(1, f + 1): d[i][j] = 1 + min(max(d[i - 1][k - 1], d[i][j - k]) for k in range(1, j + 1))
    return d[e][f]
Q('Hard', 'Egg Drop', 'With E eggs and a building of F floors, print the fewest drops that guarantee finding the critical floor in the worst case. | Input: E and F. | Output: the drops.', egg, [L(2, 6)], lambda r: L(r.randint(1, 4), r.randint(1, 20)))

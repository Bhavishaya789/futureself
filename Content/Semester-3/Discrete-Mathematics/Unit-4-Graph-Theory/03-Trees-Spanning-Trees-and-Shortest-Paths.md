# Trees, spanning trees and shortest paths
minutes: 40
yt: spanning tree prim kruskal dijkstra discrete mathematics
yt: binary tree traversal properties discrete maths
@study
A **tree** is a connected graph with no cycles. A **forest** is a set of trees.

## Properties
For a tree with n vertices:
- It has exactly **n − 1** edges.
- Exactly one path between any two vertices.
- Adding any edge creates exactly one cycle; removing any edge disconnects it.
- Every tree with n ≥ 2 has at least two leaves.
A rooted tree has parent, child, leaf, height and level. An **m-ary tree** with i internal vertices has n = mi + 1 vertices; a full binary tree with i internal vertices has i + 1 leaves.
A binary tree of height h has at most 2^(h+1) − 1 nodes and at most 2^h leaves.

## Traversals of binary trees
Preorder (root, left, right), inorder (left, root, right), postorder (left, right, root), and level-order (breadth first). Inorder of a binary search tree is sorted.

## Spanning trees
A **spanning tree** of a connected graph contains all its vertices and is a tree (n − 1 edges). A **minimum spanning tree (MST)** has least total weight.
- **Kruskal's algorithm:** sort edges by weight; add the next edge if it does not form a cycle (union-find).
- **Prim's algorithm:** grow a tree from a vertex, always adding the cheapest edge leaving the tree.
Both give MSTs, in O(E log V). The MST weight is unique even when the tree is not.
Used for laying cables, pipelines, network design, clustering.

## Shortest path: Dijkstra
For non-negative weights. Keep tentative distances; repeatedly settle the nearest unsettled vertex and relax its edges. O((V + E) log V) with a priority queue. For negative weights use Bellman-Ford; for all pairs, Floyd-Warshall.

### Worked example (verified by code)
```python
import heapq
g = {'A': {'B': 4, 'C': 2}, 'B': {'D': 5}, 'C': {'B': 1, 'D': 8}, 'D': {}}
dist = {v: float('inf') for v in g}; dist['A'] = 0
pq = [(0, 'A')]
while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]: continue
    for v, w in g[u].items():
        if d + w < dist[v]:
            dist[v] = d + w; heapq.heappush(pq, (dist[v], v))
print(dist)
edges = sorted([(1,'A','B'),(3,'B','C'),(2,'A','C'),(4,'C','D'),(5,'B','D')])
parent = {x: x for x in 'ABCD'}
def find(x):
    while parent[x] != x: x = parent[x]
    return x
total = 0
for w, u, v in edges:
    ru, rv = find(u), find(v)
    if ru != rv: parent[ru] = rv; total += w
print(total)
```
Output:
```
{'A': 0, 'B': 3, 'C': 2, 'D': 8}
7
```
Shortest path to B is A→C→B (2 + 1 = 3), better than the direct edge of 4. The MST uses edges AB(1), AC(2), CD(4) for a total of 7.

## Other tree facts
Cayley: n^(n−2) labelled trees. Prüfer sequences encode labelled trees. Huffman trees give optimal prefix codes.

> A tree on n vertices always has exactly n − 1 edges.
@qa
Q: How many edges does a tree with 10 vertices have?
A: 9 (n − 1).
Q: Compare Prim's and Kruskal's algorithms.
A: Both build a minimum spanning tree. Kruskal sorts edges and adds the cheapest that does not form a cycle; Prim grows a single tree from a start vertex by adding the cheapest crossing edge.
Q: Why does Dijkstra's algorithm need non-negative weights?
A: Once a vertex is settled its distance is assumed final; a negative edge could later give a shorter path and break that assumption.
Q: How many leaves does a full binary tree with 7 internal nodes have?
A: 8 (internal nodes + 1).
Q: Which traversal of a binary search tree gives sorted order?
A: Inorder traversal.
@quiz
? A tree with n vertices has
- n edges
+ n − 1 edges
- n + 1 edges
- 2n edges
! Connected and acyclic.
? Kruskal's algorithm avoids
- the smallest edge
+ edges that create a cycle
- weights
- leaves
! Adds an edge only if its ends are in different components.
? Dijkstra's algorithm fails with
- cycles
- directed edges
+ negative edge weights
- large graphs
! Use Bellman-Ford for negative edges.
? Inorder traversal visits
- root, left, right
+ left, root, right
- left, right, root
- level by level
! Gives sorted output for a BST.
? A full binary tree with 5 internal nodes has how many leaves?
- 5
+ 6
- 10
- 4
! leaves = internal + 1.

@visual
steps | Kruskal's algorithm for a minimum spanning tree | Sort all edges by weight; Take the lightest edge; Skip it if it forms a cycle; Stop when n - 1 edges are chosen

@problems
## Moderate
P: A tree has 10 vertices. How many edges does it have? How many edges must be removed from a connected graph with 8 vertices and 12 edges to get a spanning tree?
A: A tree with n vertices has n - 1 edges: 9 edges. A spanning tree of the 8-vertex graph has 7 edges, so 12 - 7 = 5 edges must be removed.
R: 2 | 9 edges
R: 2 | 5 edges
## High
P: Edges: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, D-E 2, C-E 10. Use Kruskal to find the minimum spanning tree and its weight.
A: Sorted: B-C 1, A-C 2, D-E 2, A-B 4, B-D 5, C-D 8, C-E 10. Take B-C, A-C, D-E. A-B would form a cycle (A, B, C), so skip it. B-D joins the components {A, B, C} and {D, E}: take it. Total weight = 1 + 2 + 2 + 5 = 10 with 4 edges.
R: 2 | Sorted edge order
R: 2 | Skips A-B because of the cycle
R: 1 | Weight 10
## Advanced
P: Edges: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, D-E 3, C-E 10. Use Dijkstra from A to find the shortest distance to every vertex.
A: Start A = 0. Visit A: B = 4, C = 2. Visit C (2): B = min(4, 2 + 1) = 3, D = 10, E = 12. Visit B (3): D = min(10, 3 + 5) = 8. Visit D (8): E = min(12, 8 + 3) = 11. Distances: A = 0, B = 3, C = 2, D = 8, E = 11.
R: 2 | B = 3 and C = 2
R: 2 | D = 8
R: 1 | E = 11

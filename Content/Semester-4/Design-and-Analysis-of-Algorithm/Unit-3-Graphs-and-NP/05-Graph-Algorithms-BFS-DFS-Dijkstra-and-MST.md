# Graph algorithms: BFS, DFS, Dijkstra and MST
minutes: 30
yt: BFS and DFS graph traversal
yt: Prim and Kruskal minimum spanning tree
@study
A **graph** G = (V, E) has vertices and edges. It can be stored as an **adjacency matrix** (O(V^2) space, edge check O(1)) or **adjacency list** (O(V + E) space, better for sparse graphs).

## BFS (Breadth-first search)
Uses a **queue**; visits vertices level by level. Time O(V + E). Finds the **shortest path in an unweighted graph**.

## DFS (Depth-first search)
Uses a **stack** (recursion); goes as deep as possible then backtracks. Time O(V + E). Used for cycle detection, topological sort and connected components.

```python
from collections import deque
def bfs_dist(grid):
    R, C = len(grid), len(grid[0])
    for r in range(R):
        for c in range(C):
            if grid[r][c] == "S": s = (r, c)
    q = deque([(s, 0)]); seen = {s}
    while q:
        (r, c), d = q.popleft()
        if grid[r][c] == "G": return d
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] != "#" and (nr, nc) not in seen:
                seen.add((nr, nc)); q.append(((nr, nc), d + 1))
print(bfs_dist(["S..#....", "...#.##.", "...#..#.", "......#G"]))   # 16
```

## Dijkstra (single-source shortest path)
For non-negative weights. With a min-heap it takes O((V + E) log V). Fails with negative edges; use **Bellman-Ford** (O(VE)) there.
Example (edges A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2) from A: A 0, B 3, C 2, D 8, E 10.

## Minimum spanning tree (MST)
A spanning tree with minimum total weight (V - 1 edges, no cycle).
- **Kruskal:** sort edges, add the smallest edge that does not form a cycle (union-find). O(E log E).
- **Prim:** grow a tree from a vertex, always adding the cheapest edge leaving the tree. O(E log V) with a heap.
For the same graph Kruskal picks B-C 1, A-C 2, D-E 2, B-D 5 : total weight **10**.

## Topological sort
Linear ordering of a DAG so every edge u -> v has u before v (course prerequisites). Found with DFS finishing times or Kahn's algorithm.

## Hindi saransh
BFS queue se level-wise chalta hai aur unweighted graph mein shortest path deta hai. DFS gehraai mein jaata hai. Dijkstra non-negative weights ke liye hai. MST ke liye Kruskal aur Prim; is example mein weight 10.

> BFS = shortest in number of edges. Dijkstra = shortest in total weight.
@qa
Q: Which data structure does BFS use, and what does it find?
A: A queue. It finds the shortest path (fewest edges) from the source in an unweighted graph.
Q: Why does Dijkstra fail with negative edge weights?
A: It assumes once a vertex is settled its distance is final, but a later negative edge could reduce it. Use Bellman-Ford.
Q: What is the difference between Prim and Kruskal?
A: Kruskal sorts all edges and adds the cheapest that makes no cycle, growing a forest. Prim grows one tree from a start vertex by adding the cheapest edge leaving it.
Q: When is an adjacency list better than a matrix?
A: For sparse graphs, since it uses O(V + E) space instead of O(V^2).
Q: What is a topological sort and when does it exist?
A: An ordering of vertices so that every directed edge goes from earlier to later. It exists only for directed acyclic graphs.
@quiz
? BFS uses which data structure?
- stack
+ queue
- heap
- hash table
! BFS is level order, so a FIFO queue.
? The MST weight of the graph A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2 is
- 8
- 9
+ 10
- 12
! 1 + 2 + 2 + 5 = 10.
? Dijkstra's algorithm requires
- no cycles
+ non-negative edge weights
- an unweighted graph
- a tree
! Negative weights break the settled-vertex assumption.
? A spanning tree of a graph with V vertices has how many edges?
- V
+ V - 1
- V + 1
- 2V
! A tree on V vertices has exactly V - 1 edges.
? Topological ordering exists only for
- undirected graphs
- graphs with cycles
+ directed acyclic graphs
- complete graphs
! A cycle makes it impossible to order the vertices.
@visual
graph | Weighted graph for Dijkstra and MST | A>B: 4; A>C: 2; B>C: 1; B>D: 5; C>D: 8; C>E: 10; D>E: 2
steps | Kruskal's algorithm | Sort all edges by weight; Take the smallest edge; Skip it if it forms a cycle; Stop when V - 1 edges are chosen
@problems
## Moderate
P: State the time complexity of BFS and DFS using an adjacency list, and one use of each.
A: Both O(V + E). BFS finds shortest paths in unweighted graphs; DFS is used for cycle detection, topological sort or connected components.
R: 2 | O(V + E) for both
R: 2 | One valid use for each
## High
P: Apply Kruskal's algorithm to the graph A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2. List the chosen edges and the MST weight.
A: Sorted edges: B-C 1, A-C 2, D-E 2, A-B 4 (cycle A-B-C, skip), B-D 5, C-D 8, C-E 10. Chosen: B-C, A-C, D-E, B-D with total weight 1 + 2 + 2 + 5 = 10.
R: 2 | Correct sorted order and cycle skipping
R: 2 | The four edges
R: 1 | Weight 10
## Advanced
P: Use Dijkstra from A on the same graph. Show the settled order, the distances and the path to E.
A: Settle A(0), then C(2), then B(3, via C), then D(8, via B), then E(10, via D). Path to E: A-C-B-D-E with cost 2 + 1 + 5 + 2 = 10.
R: 2 | Settled order A, C, B, D, E
R: 2 | Correct distances
R: 2 | Path A-C-B-D-E

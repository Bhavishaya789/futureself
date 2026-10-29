# Graph theory: terminology, representation and isomorphism
minutes: 40
yt: graph theory basics degree handshaking lemma
yt: graph representation adjacency matrix list isomorphism
@study
A **graph** G = (V, E) has vertices (nodes) and edges. Graphs model networks, maps, social links, circuits and dependencies.

## Types
- **Undirected / directed (digraph)**; **simple** (no loops or parallel edges), **multigraph**, **pseudograph**.
- **Weighted** graph: edges have weights (distance, cost).
- **Complete graph K_n:** every pair joined; it has n(n−1)/2 edges (K_5 has 10).
- **Bipartite:** vertices split into two sets with edges only between sets (no odd cycles). K_{m,n} has mn edges.
- **Regular, cycle C_n, path P_n, wheel W_n, hypercube Q_n.**

## Degree
Degree deg(v) = number of edges at v (a loop counts 2). **Handshaking lemma:** Σ deg(v) = 2|E|, so the number of odd-degree vertices is **even**. In a directed graph Σ in-degree = Σ out-degree = |E|.
Example: a graph with degrees 3, 3, 2, 2, 2 has (3+3+2+2+2)/2 = 6 edges.

## Representation
For vertices numbered 1..n:
- **Adjacency matrix** n × n (A[i][j] = 1 if edge): O(1) edge check, O(n²) space.
- **Adjacency list**: each vertex has a list of neighbours: O(V + E) space, ideal for sparse graphs.
- **Incidence matrix** (vertices × edges).

## Subgraphs, connectivity
Walk, trail (no repeated edge), path (no repeated vertex), circuit, cycle. A graph is **connected** if a path exists between every pair. Components, cut vertices (articulation points) and bridges matter for reliability of networks.

## Isomorphism
Graphs G1 and G2 are **isomorphic** if a bijection of vertices preserves adjacency. Invariants (must match): number of vertices, edges, degree sequence, number of cycles of each length. Matching invariants does not prove isomorphism; a mismatch proves non-isomorphism.

## Number of graphs
There are 2^(n(n−1)/2) labelled simple graphs on n vertices (for n = 4: 64). The number of labelled trees on n vertices is n^(n−2) (**Cayley's formula**; 125 for n = 5).

## Code
```python
from collections import defaultdict
edges = [(1, 2), (1, 3), (2, 3), (3, 4), (4, 5)]
adj = defaultdict(list)
for u, v in edges:
    adj[u].append(v); adj[v].append(u)
deg = {v: len(adj[v]) for v in sorted(adj)}
print(deg, sum(deg.values()) == 2 * len(edges))
```
Output:
```
{1: 2, 2: 2, 3: 3, 4: 2, 5: 1} True
```

> The sum of all degrees is twice the number of edges.
@qa
Q: State the handshaking lemma.
A: The sum of the degrees of all vertices of a graph equals twice the number of edges, so the number of odd-degree vertices is even.
Q: How many edges does the complete graph K_n have?
A: n(n−1)/2; for K_5 that is 10.
Q: When is a graph bipartite?
A: When its vertices can be split into two sets so that every edge joins vertices from different sets; equivalently it has no odd-length cycle.
Q: Compare adjacency matrix and adjacency list.
A: The matrix uses O(n²) space with O(1) edge lookup, good for dense graphs. The list uses O(V+E) space, good for sparse graphs.
Q: Give two invariants used to test isomorphism.
A: Number of vertices and edges, and the degree sequence; also numbers of cycles of particular lengths.
@quiz
? A graph has degrees 3,3,2,2,2. Number of edges
- 5
+ 6
- 12
- 4
! Sum of degrees 12, divided by 2.
? K_6 has how many edges?
- 6
- 12
+ 15
- 30
! 6 x 5 / 2 = 15.
? A graph with an odd cycle cannot be
- connected
- complete
+ bipartite
- directed
! Bipartite graphs have only even cycles.
? Number of labelled trees on 5 vertices
- 25
+ 125
- 20
- 10
! Cayley: 5^3 = 125.
? Isomorphic graphs must have the same
- vertex labels
+ degree sequence
- drawing
- edge colours
! A necessary condition.

@visual
graph | A simple graph with five vertices | A-B; B-C; C-D; D-E; E-A; A-C

@problems
## Moderate
P: State the handshaking lemma. A graph has vertices of degree 3, 3, 2, 2, 2. How many edges does it have?
A: The sum of all vertex degrees equals twice the number of edges. Sum = 3 + 3 + 2 + 2 + 2 = 12, so edges = 12 / 2 = 6.
R: 2 | Lemma stated
R: 2 | 6 edges
## High
P: Can a simple graph have degree sequence 3, 3, 3, 1? Give a reason.
A: No. There are 4 vertices, so a vertex of degree 3 is adjacent to all other vertices. Three vertices of degree 3 would all be adjacent to the vertex of degree 1, giving it degree 3, a contradiction. (Also the sum 10 is even, so the parity check alone is not enough.)
R: 2 | Answer no
R: 3 | Valid reason
## Advanced
P: For the 5-vertex graph in the picture, write the adjacency matrix and count edges. How many edges does the complete graph K6 have? State three invariants used to show two graphs are not isomorphic.
A: Order A, B, C, D, E. Edges: AB, BC, CD, DE, EA, AC (6 edges). Rows: A: 0 1 1 0 1; B: 1 0 1 0 0; C: 1 1 0 1 0; D: 0 0 1 0 1; E: 1 0 0 1 0.
K6 has C(6, 2) = 15 edges.
Invariants: number of vertices, number of edges, degree sequence (also cycles, connectivity). If any invariant differs the graphs are not isomorphic.
R: 2 | Correct adjacency matrix
R: 1 | 15 edges for K6
R: 2 | Three valid invariants

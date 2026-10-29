# Euler and Hamilton paths, planar graphs and colouring
minutes: 40
yt: euler path circuit hamiltonian graph planar graph four color theorem
yt: graph coloring chromatic number
@study
## Euler paths and circuits
An **Euler circuit** uses every **edge** exactly once and returns to the start (the Königsberg bridges problem, Euler 1736).
- A connected graph has an Euler **circuit** iff **every vertex has even degree**.
- It has an Euler **path** (not circuit) iff **exactly two vertices have odd degree**.
Königsberg: all four land masses had odd degree, so no walk existed. For directed graphs, in-degree must equal out-degree.

## Hamilton paths and cycles
A **Hamilton cycle** visits every **vertex** exactly once and returns. No simple necessary-and-sufficient test is known (it is NP-complete).
- **Dirac's theorem:** if n ≥ 3 and every vertex has degree ≥ n/2, a Hamilton cycle exists.
- **Ore's theorem:** if deg(u) + deg(v) ≥ n for every non-adjacent pair, a Hamilton cycle exists.
K_n has a Hamilton cycle. The Travelling Salesman Problem asks for the cheapest Hamilton cycle in a weighted graph.

## Planar graphs
A graph is **planar** if it can be drawn without edge crossings. **Euler's formula** for connected planar graphs: **V − E + F = 2**.
For simple connected planar graphs with V ≥ 3: **E ≤ 3V − 6**, and if bipartite E ≤ 2V − 4.
- K_5 has E = 10 > 3·5 − 6 = 9, so it is **non-planar**.
- K_{3,3} has E = 9 > 2·6 − 4 = 8, so it is **non-planar**.
**Kuratowski's theorem:** a graph is planar iff it has no subdivision of K_5 or K_{3,3}.
Example: a cube has V = 8, E = 12, so F = 2 − 8 + 12 = 6 faces.

## Graph colouring
A proper colouring gives adjacent vertices different colours. The **chromatic number χ(G)** is the minimum number of colours.
- χ(K_n) = n; χ(bipartite) = 2 (if it has an edge); χ(odd cycle) = 3; χ(even cycle) = 2.
- **Four colour theorem:** every planar graph is 4-colourable.
- **Brooks:** χ ≤ Δ (max degree) except for complete graphs and odd cycles.
Applications: **timetable scheduling** (courses as vertices, an edge if they share a student; colours are time slots), register allocation in compilers, frequency assignment for mobile towers, map colouring.

## Greedy colouring
Order the vertices and give each the smallest colour not used by its neighbours; not always optimal but fast.
```python
adj = {1: [2, 3], 2: [1, 3, 4], 3: [1, 2], 4: [2, 5], 5: [4]}
color = {}
for v in sorted(adj):
    used = {color[u] for u in adj[v] if u in color}
    color[v] = next(c for c in range(len(adj)) if c not in used)
print(color, max(color.values()) + 1)
```
Output:
```
{1: 0, 2: 1, 3: 2, 4: 0, 5: 1} 3
```
Vertices 1, 2, 3 form a triangle, so 3 colours are needed and used.

> Euler: edges once, check degrees. Hamilton: vertices once, no easy test.
@qa
Q: When does a connected graph have an Euler circuit?
A: Exactly when every vertex has even degree.
Q: State Euler's formula for planar graphs.
A: For a connected planar graph with V vertices, E edges and F faces, V − E + F = 2.
Q: Why is K_5 not planar?
A: A simple planar graph with 5 vertices has at most 3·5 − 6 = 9 edges, but K_5 has 10.
Q: What is the chromatic number of a complete graph K_n?
A: n, since every vertex is adjacent to every other.
Q: How is graph colouring used in exam timetabling?
A: Subjects are vertices, with an edge when some student takes both; colours are time slots, so a proper colouring gives a clash-free timetable.
@quiz
? An Euler circuit exists in a connected graph iff
- all degrees are odd
+ all degrees are even
- it is complete
- it is a tree
! This is Euler's theorem.
? For a planar graph with V=8 and E=12 (cube), the number of faces is
- 4
- 5
+ 6
- 8
! F = 2 - V + E = 6.
? K_{3,3} is
- planar
+ non-planar
- a tree
- 2-colourable only
! It has more edges than allowed for a planar bipartite graph.
? The four colour theorem applies to
- all graphs
+ planar graphs
- trees only
- digraphs
! Every planar graph can be coloured with at most four colours.
? A Hamilton cycle visits every
- edge once
+ vertex once
- face once
- path once
! Do not confuse with Euler circuits.

@visual
compare | Euler and Hamilton | Euler circuit=Uses every EDGE exactly once~Exists when the graph is connected and every degree is even; Hamilton cycle=Visits every VERTEX exactly once~No simple condition is known~Dirac: degree at least n/2 is sufficient

@problems
## Moderate
P: State the condition for an Euler circuit. Does K5 have one? Does K4?
A: A connected graph has an Euler circuit if and only if every vertex has even degree. In K5 every vertex has degree 4 (even), so yes. In K4 every vertex has degree 3 (odd), so no.
R: 2 | Condition
R: 2 | K5 yes and K4 no with degrees
## High
P: A connected planar graph has 6 vertices and 9 edges. How many faces does it have? Show that K5 is not planar.
A: Euler's formula V - E + F = 2 gives F = 2 - 6 + 9 = 5. For a simple planar graph with V >= 3, E <= 3V - 6. K5 has V = 5, E = 10 but 3V - 6 = 9, and 10 > 9, so K5 is not planar.
R: 2 | 5 faces
R: 3 | K5 shown non-planar with E <= 3V - 6
## Advanced
P: Give the chromatic number of K4, of the cycle C5 and of a bipartite graph. Why is K3,3 not planar, and what does the four colour theorem say?
A: K4: 4 (all vertices adjacent). C5: 3 (an odd cycle needs 3 colours). Bipartite: 2. K3,3 has V = 6, E = 9 and no triangles; a planar graph without triangles has E <= 2V - 4 = 8, and 9 > 8, so it is not planar. Four colour theorem: every planar graph can be coloured with at most 4 colours.
R: 2 | Three chromatic numbers
R: 2 | K3,3 argument
R: 1 | Four colour theorem

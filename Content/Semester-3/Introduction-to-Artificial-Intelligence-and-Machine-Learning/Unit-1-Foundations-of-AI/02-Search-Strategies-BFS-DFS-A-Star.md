# Problem solving by search: BFS, DFS, UCS and A*
minutes: 40
yt: uninformed search BFS DFS uniform cost search AI
yt: A star algorithm heuristic admissible
@study
Many AI problems (route finding, puzzles, planning) are solved by **searching** a space of states.

## Problem formulation
Initial state, actions, transition model, goal test, path cost. The **search tree** expands states from the start.

## Uninformed (blind) search
| Strategy | Order | Complete? | Optimal? | Time | Space |
| --- | --- | --- | --- | --- | --- |
| **BFS** | level by level (queue) | Yes | Yes (equal step costs) | O(b^d) | O(b^d) |
| **DFS** | deepest first (stack) | No in infinite space | No | O(b^m) | O(bm) |
| **UCS** | lowest path cost first | Yes | Yes | ~O(b^(C*/ε)) | same |
| **Depth-limited / Iterative deepening** | DFS with growing limit | Yes | Yes (equal costs) | O(b^d) | O(bd) |
b = branching factor, d = depth of shallowest goal, m = max depth.

### Worked BFS example (verified by code)
Graph: S→A, B; A→C; B→C, D; C→G; D→G. BFS from S finds the path **S → A → C → G** (3 steps); the first goal found in level order is a shortest path in steps.

## Informed (heuristic) search
A **heuristic h(n)** estimates the cost from n to the goal.
- **Greedy best-first:** expand lowest h(n); fast but not optimal.
- **A\*:** expand lowest **f(n) = g(n) + h(n)** where g is the cost so far. A\* is complete and **optimal** if h is **admissible** (never overestimates) and, for graph search, **consistent**.
Example: 8-puzzle heuristics — misplaced tiles, or total Manhattan distance (better because it is closer to the true cost).

### Worked A* example
```python
import heapq
graph = {'S': [('A', 1), ('B', 4)], 'A': [('B', 2), ('G', 6)], 'B': [('G', 3)], 'G': []}
h = {'S': 5, 'A': 4, 'B': 3, 'G': 0}
open_list = [(h['S'], 0, 'S', ['S'])]
best = {}
while open_list:
    f, g, node, path = heapq.heappop(open_list)
    if node == 'G':
        print(path, g); break
    if node in best and best[node] <= g: continue
    best[node] = g
    for nxt, c in graph[node]:
        heapq.heappush(open_list, (g + c + h[nxt], g + c, nxt, path + [nxt]))
```
Output:
```
['S', 'A', 'B', 'G'] 6
```
The cheapest path costs 6 (1 + 2 + 3), better than S→A→G (7) or S→B→G (7).

## Local search and optimisation
**Hill climbing** (moves to a better neighbour; can get stuck in local maxima), **simulated annealing** (sometimes accepts worse moves), **genetic algorithms** (selection, crossover, mutation).

## Adversarial search (games)
**Minimax** assumes the opponent plays optimally; **alpha–beta pruning** skips branches that cannot affect the result, giving the same answer with far fewer nodes.

## Constraint satisfaction
Variables, domains, constraints (Sudoku, map colouring, timetabling) solved by backtracking with forward checking.

> A* = cost so far + estimated cost to go; keep the heuristic admissible.
@qa
Q: Compare BFS and DFS.
A: BFS explores level by level with a queue, is complete and finds the shallowest goal but needs much memory. DFS goes deep first with a stack, uses little memory, but may not find the shortest path and can loop in infinite spaces.
Q: What is an admissible heuristic?
A: A heuristic that never overestimates the true cost to reach the goal, which guarantees A* finds an optimal solution.
Q: What is f(n) in A*?
A: f(n) = g(n) + h(n), the cost from the start to n plus the estimated cost from n to the goal.
Q: Why can hill climbing fail?
A: It can get stuck at a local maximum, a plateau or a ridge where no neighbour is better, although a better solution exists elsewhere.
Q: What does alpha-beta pruning do?
A: It prunes branches of the minimax tree that cannot influence the final decision, reducing the number of nodes evaluated without changing the result.
@quiz
? BFS uses which data structure?
- Stack
+ Queue
- Heap only
- Tree only
! First in, first out expansion.
? A* chooses the node with the lowest
- h(n)
- g(n)
+ g(n) + h(n)
- depth
! f(n) combines cost so far and the estimate.
? Greedy best-first search uses
+ h(n) only
- g(n) only
- depth
- random order
! It is fast but not guaranteed optimal.
? Minimax is used for
- sorting
+ two-player games
- clustering
- regression
! It models an optimal opponent.
? For the example graph, the A* answer cost is
- 5
+ 6
- 7
- 8
! Path S-A-B-G costs 1+2+3.

@visual
graph | A small weighted graph for A* search | S-A: 1; S-B: 4; A-B: 2; A-G: 6; B-G: 3

@problems
## Moderate
P: Differentiate BFS and DFS: data structure, completeness and optimality (equal step costs).
A: BFS uses a queue (first in, first out) and explores level by level; it is complete and finds the shallowest (optimal for equal costs) solution but needs a lot of memory. DFS uses a stack (or recursion) and goes deep first; it needs little memory but is not optimal and can loop forever in infinite or cyclic spaces unless a visited set is used.
R: 2 | BFS properties
R: 2 | DFS properties
## High
P: Tree: A has children B and C; B has children D and E; C has child F. Give the order in which nodes are visited by BFS and by DFS (left child first).
A: BFS: A, B, C, D, E, F (level by level). DFS: A, B, D, E, C, F (go deep before moving to the sibling).
R: 2 | BFS order
R: 2 | DFS order
## Advanced
P: Edges S-A 1, S-B 4, A-B 2, A-G 6, B-G 3. Heuristic values h: S = 5, A = 4, B = 2, G = 0. Run A* from S to G showing f = g + h and give the final path and cost. Is h admissible?
A: Expand S (f = 5): A has g = 1, f = 5; B has g = 4, f = 6. Expand A (f = 5): B through A has g = 3, f = 5 (better than 6); G has g = 7, f = 7. Expand B (f = 5): G has g = 6, f = 6 (better than 7). Expand G with f = 6. Path S, A, B, G with cost 6.
h is admissible because it never overestimates the true cost to the goal (true costs: S 6, A 5, B 3).
R: 2 | Correct f values at each expansion
R: 2 | Path S-A-B-G with cost 6
R: 1 | Admissibility explained

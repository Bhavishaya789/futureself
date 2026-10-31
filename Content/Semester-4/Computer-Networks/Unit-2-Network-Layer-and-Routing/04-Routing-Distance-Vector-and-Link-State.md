# Routing: distance vector and link state
minutes: 30
yt: distance vector vs link state routing
yt: dijkstra algorithm shortest path example
@study
A **router** forwards packets towards their destination using a **routing table**. Routing algorithms fill that table. The network is a weighted graph: routers are nodes, links are edges, the weight is the cost (hop count, delay or bandwidth).

## Static versus dynamic
- **Static:** an administrator writes the routes. Simple, predictable, does not adapt to failures.
- **Dynamic:** routers exchange information and adapt (RIP, OSPF, BGP).

## Distance vector (Bellman-Ford) , example RIP
- Each router tells its **neighbours** its whole distance table, periodically.
- A router updates: d(x, y) = min over neighbours v of [ c(x, v) + d(v, y) ].
- Knows only the next hop, not the whole map. RIP counts **hops** (maximum 15; 16 means unreachable).
- Weakness: **count to infinity** after a link fails. Fixes: split horizon, poison reverse, hold-down timers.

## Link state , example OSPF
- Each router floods **link-state advertisements** (its links and costs) to **all** routers.
- Every router builds the full map and runs **Dijkstra** to find shortest paths.
- Converges faster and scales better with areas, but needs more memory and CPU.

## Dijkstra worked example
Graph edges: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2. Source A.
| Step | Settled | Distances (A,B,C,D,E) |
| --- | --- | --- |
| 1 | A | 0, 4, 2, inf, inf |
| 2 | C (2) | 0, 3, 2, 10, 12 |
| 3 | B (3) | 0, 3, 2, 8, 12 |
| 4 | D (8) | 0, 3, 2, 8, 10 |
| 5 | E (10) | 0, 3, 2, 8, 10 |
Shortest costs from A: B = 3 (A-C-B), C = 2, D = 8 (A-C-B-D), E = 10 (A-C-B-D-E).

```python
import heapq
G = {"A": {"B": 4, "C": 2}, "B": {"A": 4, "C": 1, "D": 5}, "C": {"A": 2, "B": 1, "D": 8, "E": 10},
     "D": {"B": 5, "C": 8, "E": 2}, "E": {"C": 10, "D": 2}}
dist = {k: float("inf") for k in G}; dist["A"] = 0; pq = [(0, "A")]
while pq:
    d, u = heapq.heappop(pq)
    if d > dist[u]: continue
    for v, w in G[u].items():
        if d + w < dist[v]:
            dist[v] = d + w; heapq.heappush(pq, (dist[v], v))
print(dist)   # {'A': 0, 'B': 3, 'C': 2, 'D': 8, 'E': 10}
```

## Routing between networks
**Intra-domain** (inside one organisation): RIP, OSPF. **Inter-domain** (between organisations, the Internet): **BGP**, a path-vector protocol driven by policy.

## Hindi saransh
Distance vector mein router sirf padosiyon ko apni distance table batata hai (RIP). Link state mein har router poore network ka map banata hai aur Dijkstra chalata hai (OSPF). Inter-domain routing BGP se hoti hai.

> Distance vector = routing by rumour (neighbour's opinion). Link state = every router has the map.
@qa
Q: What is the main difference between distance vector and link state routing?
A: Distance vector routers share their distance table only with neighbours and know just the next hop. Link state routers flood their link information to everyone, build the full topology map and compute shortest paths themselves with Dijkstra.
Q: What is the count-to-infinity problem?
A: After a link failure, routers keep updating each other with slowly increasing costs because each believes the other has a route. It can take many rounds to reach the "infinity" value. Split horizon, poison reverse and hold-down timers reduce it.
Q: Which protocol is used between autonomous systems on the Internet?
A: BGP (Border Gateway Protocol), a path-vector protocol that uses policy.
Q: What metric does RIP use and what is its limit?
A: Hop count, with a maximum of 15 hops; 16 means unreachable.
Q: Why does OSPF converge faster than RIP?
A: Link-state information is flooded to all routers immediately, and each router recomputes routes locally, instead of changes spreading one neighbour at a time.
@quiz
? In the example graph, the shortest cost from A to D is
- 5
- 7
+ 8
- 9
! A to C 2, C to B 1, B to D 5 gives 8, which beats A-C-D = 10.
? OSPF is an example of
- distance vector routing
+ link state routing
- path vector routing
- static routing
! OSPF floods link-state advertisements and runs Dijkstra.
? RIP counts which metric?
- bandwidth
- delay
+ hops
- cost in rupees
! RIP uses hop count, maximum 15.
? Count to infinity is a problem of
+ distance vector routing
- link state routing
- static routing
- default routing
! Slow propagation of bad news in distance vector protocols causes it.
? Which protocol exchanges routes between different organisations on the Internet?
- RIP
- OSPF
+ BGP
- ARP
! BGP is the inter-domain routing protocol.
@visual
graph | Example network used for Dijkstra | A>B: 4; A>C: 2; B>C: 1; B>D: 5; C>D: 8; C>E: 10; D>E: 2
compare | Distance vector versus link state | Distance vector=Shares table with neighbours~Bellman-Ford~Count to infinity risk~RIP; Link state=Floods links to all~Dijkstra on full map~Faster convergence~OSPF
@problems
## Moderate
P: State two differences between static and dynamic routing and give one protocol example for dynamic routing.
A: Static routes are written by hand, do not change when links fail and need no routing traffic. Dynamic routes are learned by exchanging messages, adapt to failures and growth but use bandwidth and CPU. Example dynamic protocols: RIP or OSPF.
R: 2 | Two correct differences
R: 1 | A correct protocol example
## High
P: Using Dijkstra from A on the graph A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, find the shortest distance and path to every node.
A: B = 3 via A-C-B, C = 2 via A-C, D = 8 via A-C-B-D, E = 10 via A-C-B-D-E. Order of settling: A(0), C(2), B(3), D(8), E(10).
R: 2 | Settles nodes in the correct order
R: 2 | Correct distances 3, 2, 8, 10
R: 1 | Correct paths
## Advanced
P: Explain how the count-to-infinity problem occurs in distance vector routing and how split horizon with poison reverse helps.
A: Suppose A reaches network N through B. If the A-N side fails, B may advertise that it can reach N through A (an old route). A then thinks N is reachable through B at higher cost and they keep raising each other's cost one step at a time. With split horizon a router does not advertise a route back to the neighbour it learned it from. With poison reverse it advertises that route with infinite cost to that neighbour, which stops the loop at once between those two routers (longer loops still need hold-down timers).
R: 2 | Describes the loop of stale route advertisements
R: 2 | Explains split horizon
R: 2 | Explains poison reverse and its limit

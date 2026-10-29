# Deadlocks: conditions, prevention, avoidance (Banker's), detection and recovery
minutes: 45
yt: deadlock in operating system four conditions bankers algorithm
yt: resource allocation graph deadlock detection recovery
@study
A **deadlock** is a set of processes each waiting for a resource held by another in the set, so none can continue.

## Four necessary conditions (Coffman)
All four must hold together:
1. **Mutual exclusion:** a resource can be used by only one process at a time.
2. **Hold and wait:** a process holds some resources while waiting for others.
3. **No preemption:** resources cannot be forcibly taken away.
4. **Circular wait:** a cycle of processes, each waiting for a resource held by the next.

## Resource-Allocation Graph (RAG)
Vertices are processes (circles) and resource types (rectangles with dots for instances). A **request edge** P → R and an **assignment edge** R → P. If there is **no cycle**, there is no deadlock. If there is a cycle: with **single-instance** resources it means deadlock; with multi-instance resources it may or may not.

## Handling deadlocks
1. **Prevention:** make at least one condition impossible.
   - Break hold-and-wait: request all resources at once or release before requesting more (low utilisation, starvation).
   - Break no-preemption: take resources from waiting processes.
   - Break circular wait: give every resource type a number and require requests in increasing order.
   - Mutual exclusion cannot usually be broken (printers).
2. **Avoidance:** the OS knows the maximum needs in advance and grants a request only if the system stays in a **safe state**.
3. **Detection and recovery:** allow deadlocks, detect them, and recover.
4. **Ignore (ostrich algorithm):** used by Unix and Windows for general resources, because deadlocks are rare.

## Safe state and Banker's algorithm
A state is **safe** if there is a **safe sequence** of all processes such that each can finish with the resources currently free plus those released by earlier ones. An unsafe state is not necessarily a deadlock, but may lead to one.

Data structures (n processes, m resource types): `Available[m]`, `Max[n][m]`, `Allocation[n][m]`, `Need = Max − Allocation`.
**Safety algorithm:** Work = Available; repeatedly find an unfinished process with Need ≤ Work, add its Allocation to Work and mark it finished. If all finish, the state is safe.

### Worked example
Five processes, three resource types (A, B, C). Available = (3, 3, 2).
| Process | Allocation | Max | Need |
| --- | --- | --- | --- |
| P0 | 0 1 0 | 7 5 3 | 7 4 3 |
| P1 | 2 0 0 | 3 2 2 | 1 2 2 |
| P2 | 3 0 2 | 9 0 2 | 6 0 0 |
| P3 | 2 1 1 | 2 2 2 | 0 1 1 |
| P4 | 0 0 2 | 4 3 3 | 4 3 1 |
Find a safe sequence:
- P1: Need (1,2,2) ≤ (3,3,2). Work becomes (3,3,2) + (2,0,0) = (5,3,2).
- P3: Need (0,1,1) ≤ (5,3,2). Work = (5,3,2) + (2,1,1) = (7,4,3).
- P0: Need (7,4,3) ≤ (7,4,3). Work = (7,4,3) + (0,1,0) = (7,5,3).
- P2: Need (6,0,0) ≤ (7,5,3). Work = (7,5,3) + (3,0,2) = (10,5,5).
- P4: Need (4,3,1) ≤ (10,5,5). Work = (10,5,7).
Safe sequence **<P1, P3, P0, P2, P4>** (others are also possible), so the state is safe.

**Resource-request algorithm:** if P1 requests (1,0,2): it is ≤ Need (1,2,2) and ≤ Available (3,3,2). Pretend to grant it (Available = (2,3,0), P1 Allocation = (3,0,2), Need = (0,2,0)) and run the safety check. It succeeds with the same style of sequence, so the request is **granted**.

## Detection
For single instances, build a **wait-for graph** and look for cycles. For multiple instances, use a Banker-like algorithm with current requests instead of needs.

## Recovery
- **Process termination:** abort all deadlocked processes, or abort one at a time until the cycle breaks (choose by priority, work done, resources held).
- **Resource preemption:** take a resource from a victim, roll the victim back to a safe state, and avoid starving the same victim.

> Deadlock needs all four conditions; breaking any one prevents it. Banker's algorithm avoids it by staying in safe states.
@qa
Q: What are the four necessary conditions for deadlock?
A: Mutual exclusion, hold and wait, no preemption and circular wait.
Q: What is a safe state?
A: A state in which there exists a sequence of all processes (a safe sequence) such that each can complete using the available resources plus those released by earlier processes in the sequence.
Q: Is an unsafe state the same as a deadlock?
A: No. An unsafe state means a deadlock is possible, but not certain. A deadlock state is always unsafe.
Q: How does resource ordering prevent deadlock?
A: By numbering resource types and forcing every process to request them in increasing order, it makes circular wait impossible.
Q: How is Need computed in the Banker's algorithm?
A: Need = Max − Allocation for each process and resource type.
@quiz
? Which is NOT a necessary condition for deadlock?
- Mutual exclusion
- Hold and wait
- Circular wait
+ Starvation
! The four conditions are mutual exclusion, hold and wait, no preemption and circular wait.
? A cycle in a RAG with single-instance resources means
- a safe state
+ a deadlock
- starvation only
- nothing
! With single instances a cycle is both necessary and sufficient for deadlock.
? In the Banker's example, a safe sequence is
- P0, P1, P2, P3, P4
+ P1, P3, P0, P2, P4
- P4, P3, P2, P1, P0
- P2, P0, P4, P3, P1
! P1 first because Need (1,2,2) fits in Available (3,3,2); the rest follow.
? Deadlock avoidance requires the OS to know in advance
- the CPU burst
+ the maximum resource needs of processes
- the page size
- the file size
! The Banker's algorithm uses Max claims.
? Which prevention method breaks circular wait?
- Request all resources at once
- Preempt resources
+ Impose an ordering on resource types
- Use spooling for printers only
! Increasing-order requests make cycles impossible.

@visual
graph | Resource allocation graph containing a cycle (deadlock) | P1>R1: requests; R1>P2: held by; P2>R2: requests; R2>P1: held by

@problems
## Moderate
P: State the four necessary conditions for deadlock and give a one-line example of each.
A: 1) Mutual exclusion: a resource can be used by only one process at a time (a printer). 2) Hold and wait: a process holds one resource while waiting for another. 3) No preemption: a resource cannot be forcibly taken away. 4) Circular wait: a closed chain of processes each waiting for a resource held by the next. All four must hold together.
R: 2 | All four conditions named
R: 2 | Each condition explained or exemplified
## High
P: Five processes and three resource types (A, B, C). Allocation: P0 010, P1 200, P2 302, P3 211, P4 002. Max: P0 753, P1 322, P2 902, P3 222, P4 433. Available: 332. Compute the Need matrix and find a safe sequence using the Banker's algorithm.
A: Need = Max - Allocation: P0 743, P1 122, P2 600, P3 011, P4 431.
Work = 332. P1 (122 <= 332) runs: Work = 332+200 = 532. P3 (011): Work = 532+211 = 743. P0 (743 <= 743): Work = 743+010 = 753. P2 (600 <= 753): Work = 753+302 = 1055. P4 (431 <= 1055): Work = 1055+002 = 1057.
Safe sequence: <P1, P3, P0, P2, P4> (other orders such as P1, P3, P4, P2, P0 are also valid). The state is safe.
R: 2 | Correct Need matrix
R: 3 | Valid safe sequence with Work updated at each step
## Advanced
P: In the same system P1 now requests (1,0,2). Should the request be granted? Show the checks. Also explain how breaking the circular wait condition prevents deadlock.
A: Check 1: Request (1,0,2) <= Need of P1 (1,2,2): yes. Check 2: Request <= Available (3,3,2): yes.
Pretend to grant: Available = 332 - 102 = 230; P1 Allocation = 302; P1 Need = 020.
Safety check: P1 (020 <= 230) finishes, Work = 532; P3 finishes, Work = 743; P0 finishes, Work = 753; P2 finishes; P4 finishes. A safe sequence exists, so the request can be granted.
Preventing circular wait: give every resource type a number and require processes to request resources in increasing order, so a cycle can never form.
R: 2 | Both request checks done
R: 2 | Safety check on the new state with a safe sequence
R: 1 | Grants the request
R: 1 | Resource ordering explained

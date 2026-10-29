# Priority, Round Robin and multilevel queue scheduling
minutes: 35
yt: round robin scheduling numerical time quantum
yt: priority scheduling aging multilevel feedback queue
@study
## Priority scheduling
Each process has a priority; the CPU goes to the highest priority (here, **smaller number = higher priority**). It can be preemptive or non-preemptive. Equal priorities use FCFS.

Example, all arrive at time 0:
| Process | Burst | Priority |
| --- | --- | --- |
| P1 | 10 | 3 |
| P2 | 1 | 1 |
| P3 | 2 | 4 |
| P4 | 1 | 5 |
| P5 | 5 | 2 |

Order: P2, P5, P1, P3, P4. Gantt: P2 (0-1), P5 (1-6), P1 (6-16), P3 (16-18), P4 (18-19). Waiting times 0, 1, 6, 16, 18 for P2, P5, P1, P3, P4: **average 41/5 = 8.2**.
**Problem: starvation** (indefinite blocking) of low-priority processes. **Solution: aging**, which gradually raises the priority of processes that wait long.

## Round Robin (RR)
Designed for time sharing. Each process gets a **time quantum q** (say 4 ms), then goes to the back of the ready queue. Preemptive.
Using the earlier set P1(0,8), P2(1,4), P3(2,9), P4(3,5) with q = 4:
Gantt: P1 (0-4), P2 (4-8), P3 (8-12), P4 (12-16), P1 (16-20), P3 (20-24), P4 (24-25), P3 (25-26).
Completion times: P1 20, P2 8, P3 26, P4 25.
Waiting = completion − arrival − burst: P1 = 12, P2 = 3, P3 = 15, P4 = 17. **Average waiting = 47/4 = 11.75**, average turnaround 18.25.
(Convention: a process that arrives at the same moment another is preempted joins the queue first.)

### Effect of the quantum
- Very large q: RR becomes FCFS.
- Very small q: too many context switches, high overhead.
- Rule of thumb: about 80% of CPU bursts should be shorter than the quantum.
RR gives good **response time** and is fair, with no starvation, but average waiting time is often higher than SJF.

## Multilevel queue scheduling
The ready queue is split into several queues (system, interactive, batch), each with its own algorithm, and the queues have fixed priority or time slices between them. A process stays in its queue permanently. Simple, but inflexible and can starve lower queues.

## Multilevel feedback queue (MLFQ)
Processes **move between queues** based on behaviour:
- New processes enter the top queue with a small quantum.
- If a process uses its full quantum, it is **demoted** to a lower queue with a bigger quantum (CPU-bound jobs sink).
- Processes that give up the CPU early (I/O-bound, interactive) stay high.
- Long waiting can **promote** a process (aging).
MLFQ approximates SJF without knowing burst lengths and is the base of many real schedulers.

## Other ideas
- **Real-time scheduling:** rate-monotonic (static priority by period) and earliest-deadline-first (dynamic).
- **Multiprocessor scheduling:** processor affinity and load balancing.
- **Linux CFS:** fair share of CPU based on virtual run time.

> Starvation of low-priority jobs is solved by aging; RR trades higher waiting time for good response.
@qa
Q: What is starvation and how is it solved in priority scheduling?
A: Starvation is when a low-priority process never gets the CPU because higher-priority ones keep arriving. Aging, which gradually increases the priority of waiting processes, solves it.
Q: What happens if the time quantum in Round Robin is very large?
A: Round Robin degenerates into FCFS.
Q: What happens if the time quantum is very small?
A: The number of context switches grows, so the overhead becomes large and useful CPU time falls.
Q: How is multilevel feedback queue different from multilevel queue?
A: In a multilevel queue a process stays in its assigned queue. In a multilevel feedback queue processes move between queues depending on their CPU behaviour.
Q: Which scheduling algorithm is designed for time-sharing systems?
A: Round Robin.
@quiz
? In the priority example (all at time 0) with priorities P2=1, P5=2, P1=3, P3=4, P4=5 the first process to run is
- P1
+ P2
- P4
- P5
! The smallest number means the highest priority.
? Aging is used to prevent
- deadlock
+ starvation
- thrashing
- fragmentation
! It raises the priority of long-waiting processes.
? Round Robin with a very large quantum behaves like
+ FCFS
- SJF
- Priority
- SRTF
! Each process finishes within its first quantum.
? In MLFQ, a process that uses its entire quantum is usually
- promoted
+ demoted to a lower queue
- terminated
- blocked
! CPU-bound behaviour moves a process down.
? The average waiting time under RR (q=4) for the sample set is
- 8.75
- 7.75
+ 11.75
- 6.5
! (12 + 3 + 15 + 17) / 4 = 11.75.

@visual
gantt | Round Robin, quantum 4 (P1=24, P2=3, P3=3) | P1:0-4;P2:4-7;P3:7-10;P1:10-14;P1:14-18;P1:18-22;P1:22-26;P1:26-30
flow | How Round Robin handles one process | New process joins ready queue > CPU runs it for one quantum > Finished? > Yes: process leaves; No: back to queue tail

@problems
## Moderate
P: Three processes P1, P2, P3 arrive at time 0 with burst times 24, 3 and 3 ms. Using Round Robin with time quantum 4 ms, draw the Gantt chart and find each process's waiting time and the average waiting time.
A: Gantt: P1(0-4) P2(4-7) P3(7-10) P1(10-14) P1(14-18) P1(18-22) P1(22-26) P1(26-30).
Completion: P1=30, P2=7, P3=10. Waiting = completion - burst (all arrive at 0): P1=6, P2=4, P3=7.
Average waiting time = (6+4+7)/3 = 5.67 ms.
R: 2 | Correct Gantt chart with quantum slices of at most 4 ms
R: 2 | Correct completion times 30, 7, 10
R: 1 | Waiting times 6, 4, 7 and average 5.67 ms
## High
P: A, B, C arrive at time 0 with bursts 5, 3 and 1 ms in the order A, B, C. Round Robin with quantum 2 ms. Find the turnaround time of each process, and explain why a very large quantum makes Round Robin behave like FCFS.
A: Order of execution: A(0-2) B(2-4) C(4-5) A(5-7) B(7-8) A(8-9).
Completion: A=9, B=8, C=5. Turnaround (arrival 0) = completion: A=9, B=8, C=5.
If the quantum is larger than every burst, no process is ever preempted, so each runs to completion in arrival order. That is exactly FCFS.
R: 2 | Correct execution order with 2 ms slices
R: 2 | Turnaround times A=9, B=8, C=5
R: 2 | Explains large quantum means no preemption so it equals FCFS
## Advanced
P: Context switching costs 1 ms. For a quantum of 1 ms versus 100 ms, discuss the effect on CPU efficiency and response time, and state a rule of thumb for choosing the quantum.
A: With quantum 1 ms and switch cost 1 ms, half of the CPU time is overhead (efficiency about 50%) but response time is excellent. With quantum 100 ms the overhead is about 1% (efficiency about 99%) but interactive processes may wait for a long time behind other processes, so response time is poor and RR approaches FCFS.
Rule of thumb: choose the quantum large compared with the switch cost, and so that about 80% of CPU bursts finish within one quantum.
R: 2 | Computes overhead for both quanta (about 50% and about 1%)
R: 2 | Links small quantum to good response time and large quantum to poor response time
R: 1 | States the 80 percent of bursts rule of thumb

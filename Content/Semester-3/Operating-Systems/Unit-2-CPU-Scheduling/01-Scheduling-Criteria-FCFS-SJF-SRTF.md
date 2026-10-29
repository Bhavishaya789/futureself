# CPU scheduling: criteria, FCFS, SJF and SRTF
minutes: 40
yt: CPU scheduling FCFS SJF SRTF waiting time turnaround time examples
yt: shortest remaining time first scheduling numerical
@study
The **CPU scheduler** chooses which ready process runs next. Processes alternate between **CPU bursts** and **I/O bursts**.

## Preemptive versus non-preemptive
- **Non-preemptive:** once a process gets the CPU it keeps it until it finishes or blocks.
- **Preemptive:** the OS can take the CPU away (timer interrupt, higher-priority arrival).
The **dispatcher** performs the context switch and returns to user mode; the delay it takes is the **dispatch latency**.

## Criteria
- **CPU utilisation** (keep busy) and **throughput** (processes finished per unit time): maximise.
- **Turnaround time** = completion − arrival.
- **Waiting time** = turnaround − burst time (time spent in the ready queue).
- **Response time** = first run − arrival.
Minimise turnaround, waiting and response time.

## Worked data set
| Process | Arrival | Burst |
| --- | --- | --- |
| P1 | 0 | 8 |
| P2 | 1 | 4 |
| P3 | 2 | 9 |
| P4 | 3 | 5 |

### FCFS (First-Come, First-Served)
Non-preemptive, queue order. Gantt chart: P1 (0-8), P2 (8-12), P3 (12-21), P4 (21-26).
Waiting times: P1 = 0, P2 = 8−1 = 7, P3 = 12−2 = 10, P4 = 21−3 = 18. **Average waiting time = 35/4 = 8.75.** Average turnaround = (8+11+19+23)/4 = 15.25.
Problem: the **convoy effect**, where short processes wait behind a long one.

### SJF (Shortest Job First, non-preemptive)
Pick the ready process with the smallest next burst. Gantt: P1 (0-8), P2 (8-12), P4 (12-17), P3 (17-26).
Waiting: P1 = 0, P2 = 7, P4 = 9, P3 = 15. **Average = 31/4 = 7.75.**
SJF gives the **minimum average waiting time** among non-preemptive algorithms, but it needs to know the next burst length (estimated by **exponential averaging**: τ(n+1) = α·t(n) + (1−α)·τ(n)) and can **starve** long processes.

### SRTF (Shortest Remaining Time First = preemptive SJF)
When a new process arrives with a burst shorter than what remains of the running process, it preempts.
Gantt: P1 (0-1), P2 (1-5), P4 (5-10), P1 (10-17), P3 (17-26).
Turnaround/waiting: P1 completes at 17, waiting 17−0−8 = 9; P2 completes at 5, waiting 0; P4 completes at 10, waiting 10−3−5 = 2; P3 completes at 26, waiting 26−2−9 = 15. **Average waiting = 26/4 = 6.5**, the best of the three here.

## Comparison
| Algorithm | Preemptive | Average waiting (this set) | Starvation |
| --- | --- | --- | --- |
| FCFS | No | 8.75 | No |
| SJF | No | 7.75 | Yes |
| SRTF | Yes | 6.5 | Yes |

## Tips for numericals
1. Draw the Gantt chart first.
2. Waiting = completion − arrival − burst.
3. Include idle CPU time if no process has arrived.
4. In ties, use the rule given (usually FCFS order).

> SJF/SRTF are optimal for average waiting time but need burst prediction and can starve long jobs.
@qa
Q: Define turnaround time and waiting time.
A: Turnaround time is completion time minus arrival time. Waiting time is turnaround time minus burst time, the time spent in the ready queue.
Q: What is the convoy effect?
A: In FCFS, many short processes wait behind one long CPU-bound process, which lowers utilisation and increases average waiting time.
Q: Why is SJF optimal but impractical?
A: It gives the minimum average waiting time, but the length of the next CPU burst is not known in advance and can only be estimated.
Q: What is the difference between SJF and SRTF?
A: SJF is non-preemptive. SRTF is its preemptive version, in which a newly arrived shorter job can preempt the running one.
Q: What is the formula for the exponential average of burst lengths?
A: τ(n+1) = α · t(n) + (1 − α) · τ(n), where t(n) is the last actual burst and τ(n) the previous prediction.
@quiz
? For the data set P1(0,8), P2(1,4), P3(2,9), P4(3,5), the average waiting time under FCFS is
- 6.5
- 7.75
+ 8.75
- 15.25
! (0 + 7 + 10 + 18) / 4 = 8.75.
? Which algorithm gives minimum average waiting time among non-preemptive ones?
- FCFS
+ SJF
- Round Robin
- Priority
! SJF is provably optimal for non-preemptive scheduling.
? Waiting time equals
- completion time
- burst time
+ turnaround time minus burst time
- arrival time minus burst time
! It is the time spent in the ready queue.
? The convoy effect occurs in
+ FCFS
- SRTF
- Round Robin
- Multilevel feedback queue
! Short jobs queue behind a long job.
? In SRTF, a new process preempts the running one when
- it arrives with any burst
+ its burst is shorter than the remaining time of the running process
- it has the same burst
- the running one blocks
! SRTF always runs the process with the least remaining time.

@visual
gantt | SJF order for P1=6, P2=8, P3=7, P4=3 (all arrive at 0) | P4:0-3;P1:3-9;P3:9-16;P2:16-24

@problems
## Moderate
P: Four processes arrive at time 0 with burst times P1=6, P2=8, P3=7, P4=3 ms. Using non-preemptive SJF, find the waiting time of each process and the average.
A: Order by shortest burst: P4(0-3), P1(3-9), P3(9-16), P2(16-24).
Waiting times: P4=0, P1=3, P3=9, P2=16.
Average waiting time = (0+3+9+16)/4 = 7 ms.
R: 2 | Correct order P4, P1, P3, P2
R: 2 | Correct waiting times 0, 3, 9, 16
R: 1 | Average 7 ms
## High
P: P1, P2, P3 arrive at time 0 with bursts 24, 3, 3 ms. Compare the average waiting time under FCFS (order P1, P2, P3) and SJF. What is the convoy effect?
A: FCFS: P1 waits 0, P2 waits 24, P3 waits 27; average = 51/3 = 17 ms.
SJF order P2, P3, P1: waits 0, 3, 6; average = 9/3 = 3 ms.
Convoy effect: many short processes wait behind one long CPU-bound process, which lowers CPU and device utilisation and raises average waiting time.
R: 2 | FCFS average waiting time 17 ms
R: 2 | SJF average waiting time 3 ms
R: 1 | Defines the convoy effect
## Advanced
P: Using preemptive SJF (SRTF), schedule P1(arrival 0, burst 8), P2(1, 4), P3(2, 9), P4(3, 5). Give the Gantt chart, waiting time of each process and the average. Why can SJF not be implemented exactly in practice?
A: Gantt: P1(0-1), P2(1-5), P4(5-10), P1(10-17), P3(17-26).
Completion: P2=5, P4=10, P1=17, P3=26. Waiting = completion - arrival - burst: P1=17-0-8=9, P2=5-1-4=0, P3=26-2-9=15, P4=10-3-5=2.
Average waiting time = (9+0+15+2)/4 = 6.5 ms.
The next CPU burst length is not known in advance, so it can only be estimated, for example by exponential averaging of previous bursts.
R: 2 | Correct Gantt chart
R: 2 | Correct waiting times 9, 0, 15, 2 and average 6.5
R: 1 | Explains the burst length is unknown and must be predicted

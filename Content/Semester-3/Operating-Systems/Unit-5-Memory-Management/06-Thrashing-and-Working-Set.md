# Thrashing and the working-set model
minutes: 20
yt: thrashing in operating system working set model page fault frequency
yt: what is thrashing and how to prevent it
@study
**Thrashing** happens when a process (or the whole system) spends more time **paging** than executing, because it does not have enough frames for its active pages.

## How it develops
1. The OS sees low CPU utilisation and admits more processes.
2. Each process gets fewer frames, so page faults rise.
3. Processes wait for the paging disk, so the ready queue empties and CPU utilisation falls further.
4. The OS admits even more processes. Utilisation collapses.
A graph of CPU utilisation against the degree of multiprogramming rises, then **drops sharply** at the thrashing point.

## Cause: locality
At any time a process uses a **locality** (a set of pages used together, such as a function and its data). If the allocated frames are fewer than the size of the current locality, the process keeps faulting.

## Preventing thrashing
- **Working-set model:** the **working set** WS(t, Δ) is the set of pages referenced in the most recent Δ page references (the **working-set window**). The OS gives each process enough frames for its working set. If the total demand D = Σ|WSi| exceeds the number of available frames, suspend a process (swap it out).
- **Page-fault frequency (PFF):** monitor each process's fault rate. If it is above an upper limit, give it more frames; if below a lower limit, take frames away. If no free frames, suspend a process.
- **Use local replacement:** one thrashing process cannot steal frames from others.
- **Limit the degree of multiprogramming.**

## Example
Reference string with Δ = 5: ...2 6 1 5 7 7 7 7 5 1... At a moment where the last five references are 7 7 7 7 5, the working set is {7, 5}, which needs 2 frames. Later, with last five 6 1 5 7 7 the set is {6, 1, 5, 7}, needing 4 frames.

## Practical advice
Add RAM, reduce the number of running programs, and keep working sets small (good algorithms and data layout).

> Thrashing is a vicious circle: low utilisation leads to more processes, which leads to more faults and lower utilisation.
@qa
Q: What is thrashing?
A: A state in which a system spends most of its time swapping pages in and out instead of executing, because processes do not have enough frames.
Q: What is the working set of a process?
A: The set of pages referenced in the most recent Δ references, which approximates the pages it is currently using (its locality).
Q: How does page-fault frequency control prevent thrashing?
A: It sets upper and lower fault-rate limits. A process above the limit gets more frames, a process below it gives frames up, and a process is suspended if no frames are free.
Q: Why does adding more processes when CPU utilisation is low make thrashing worse?
A: More processes share the same frames, so each gets fewer, page faults increase and CPU utilisation falls even more.
Q: Does local replacement help?
A: Yes, it stops one thrashing process from taking frames from others, so the trouble stays contained.
@quiz
? Thrashing is high
+ paging activity with low CPU utilisation
- CPU utilisation with low paging
- disk space
- network traffic
! The system spends its time moving pages.
? The working set model uses
- the TLB size
+ the pages referenced in the last Δ references
- the file size
- the disk speed
! WS(t, Δ) approximates the current locality.
? Which action helps stop thrashing?
- Increase the degree of multiprogramming
+ Reduce the degree of multiprogramming
- Reduce RAM
- Use FIFO only
! Fewer processes means more frames per process.
? If total working-set demand exceeds available frames the OS should
- admit more jobs
- ignore it
+ suspend one or more processes
- shorten the quantum
! Frames must cover the working sets of running processes.
? PFF stands for
- Page Free Frame
+ Page-Fault Frequency
- Process File Format
- Paging File Frame
! It monitors how often a process faults.

@visual
curve | Shape only: CPU utilisation rises, then collapses when thrashing starts (x = number of processes) | y = 3*x*exp(-x/3) ; xmin=0 ; xmax=12

@problems
## Moderate
P: What is thrashing? State its main cause and one way to prevent it.
A: Thrashing is a state in which the system spends more time swapping pages in and out than executing useful instructions, so CPU utilisation falls sharply. The main cause is too high a degree of multiprogramming: processes do not have enough frames for their working sets. Prevention: reduce the degree of multiprogramming (suspend a process), use the working set model, or the page fault frequency scheme.
R: 2 | Correct definition
R: 2 | Cause and one prevention method
## High
P: Using a working set window of 4 references on the string 1,2,1,3,2,4,4,5,6,5,6,7, find the working set after the 6th reference and after the 12th reference.
A: After the 6th reference the last 4 references are 1,3,2,4, so WS = {1,2,3,4} with size 4.
After the 12th reference the last 4 references are 6,5,6,7, so WS = {5,6,7} with size 3.
R: 2 | {1,2,3,4}
R: 2 | {5,6,7}
## Advanced
P: Three processes have working set sizes 20, 30 and 25 frames and the system has 60 frames. Compute the total demand D and decide what the OS should do. Which process suspension would fix it?
A: D = 20 + 30 + 25 = 75 frames, which is greater than the 60 available, so thrashing will occur. The OS should suspend a process and free its frames. Suspending the 20-frame process leaves D = 55 <= 60, which fits; suspending the 25-frame process leaves 50, also fits; suspending the 30-frame process leaves 45 and also fits. Suspending the smallest enough process loses the least progress, so the 20-frame one is the minimal sufficient choice.
R: 2 | D = 75 compared with 60 frames
R: 2 | Decides to suspend a process
R: 1 | Shows the remaining demand fits in 60

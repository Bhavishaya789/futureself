# Processes, process states, PCB and context switching
minutes: 35
yt: process in operating system states PCB context switch
yt: fork system call process creation C program
@study
A **program** is a passive file on disk. A **process** is a program in **execution**: an active entity with its own memory, registers and state.

## Process in memory
- **Text:** the program code.
- **Data:** global and static variables.
- **Heap:** dynamically allocated memory (grows upward).
- **Stack:** function calls, parameters, local variables (grows downward).

## Process states
1. **New:** being created.
2. **Ready:** waiting for the CPU.
3. **Running:** instructions being executed.
4. **Waiting (blocked):** waiting for I/O or an event.
5. **Terminated:** finished.

Transitions: new → ready (admitted), ready → running (scheduler dispatch), running → ready (interrupt or time slice over), running → waiting (I/O request), waiting → ready (I/O complete), running → terminated (exit). Only one process per CPU core is running at a time.

Some systems add **suspended** states when processes are swapped out of memory.

## Process Control Block (PCB)
The kernel's record of each process:
- process ID, state, program counter
- CPU registers
- scheduling information (priority, queue pointers)
- memory-management information (page tables, limits)
- accounting information
- I/O status (open files, devices)

## Scheduling queues
- **Job queue:** all processes in the system.
- **Ready queue:** processes in memory, ready to run.
- **Device queues:** processes waiting for a particular device.
- **Schedulers:** long-term (admission to the ready queue; controls degree of multiprogramming), **short-term** (CPU scheduler; runs very often), **medium-term** (swapping).

## Context switch
When the CPU switches from process A to B, the kernel **saves A's state into its PCB** and **loads B's state from its PCB**. This is pure overhead, as no useful work is done during the switch, and its cost depends on hardware (number of registers, cache and TLB flushes).

## Process creation: fork, exec, wait
In Unix a process creates a child with `fork()`. The child is a copy of the parent; `fork` returns **0 in the child** and the **child's PID in the parent**. The child may replace itself with another program via `exec`. The parent calls `wait()` to collect the child's exit status.
```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
int main(void) {
    pid_t pid = fork();
    if (pid == 0) {
        printf("child: running\n");
        return 0;
    } else {
        wait(NULL);
        printf("parent: child finished\n");
    }
    return 0;
}
```
Output (always in this order because the parent waits):
```
child: running
parent: child finished
```
A child that has finished but whose parent has not yet called `wait()` is a **zombie**. A child whose parent has died is an **orphan** and is adopted by `init`.

## Cooperating processes and IPC
Processes communicate by **shared memory** (fast, needs synchronisation) or **message passing** (`send` and `receive`; slower but simpler and works across machines). Pipes, sockets and message queues are examples.

> A process is a program in execution. The PCB is what the OS remembers about it.
@qa
Q: What is the difference between a program and a process?
A: A program is a passive set of instructions stored on disk. A process is an active, running instance of a program with its own state, memory and resources.
Q: What does a PCB contain?
A: The process state, ID, program counter, CPU registers, scheduling information, memory-management information, accounting data and I/O status.
Q: What does fork() return?
A: Zero in the child process and the child's process ID in the parent process (or -1 on failure).
Q: What is a zombie process?
A: A terminated child whose exit status has not yet been collected by its parent with wait(), so its process table entry still exists.
Q: What happens during a context switch?
A: The kernel saves the state of the running process in its PCB and restores the saved state of the next process from its PCB. It is overhead, since no user work is done.
@quiz
? A process that is waiting for the CPU is in the
- new state
+ ready state
- waiting state
- terminated state
! Ready means able to run but not yet given the CPU.
? A running process requests I/O. Its next state is
- ready
- terminated
+ waiting (blocked)
- new
! It must wait until the I/O completes.
? Which scheduler controls the degree of multiprogramming?
- Short-term
- Medium-term
+ Long-term
- Disk
! The long-term scheduler decides which jobs enter memory.
? In the parent, fork() returns
- 0
+ the child's PID
- the parent's PID
- nothing
! The child sees 0; the parent receives the child's PID.
? The time taken by a context switch is
- useful work
+ overhead
- zero always
- the same as CPU burst
! No user instructions run during the switch.

@visual
graph | The five-state process model | New^>Ready; Ready>Running: dispatch; Running>Ready: time up; Running>Waiting: I/O request; Waiting>Ready: I/O done; Running>Terminated*: exit

@problems
## Moderate
P: Draw the five-state process diagram and write the event that causes each transition.
A: States: New, Ready, Running, Waiting (Blocked), Terminated.
New to Ready: process admitted. Ready to Running: scheduler dispatches it. Running to Ready: time slice expires or a higher priority process arrives (preemption). Running to Waiting: it requests I/O or waits for an event. Waiting to Ready: the I/O or event completes. Running to Terminated: it finishes or is killed.
R: 2 | Correct five states
R: 2 | Correct events for all transitions
R: 1 | Mentions that Waiting goes back to Ready, never directly to Running
## High
P: What information is stored in a Process Control Block (PCB)? What exactly is saved and restored during a context switch, and why is a context switch considered pure overhead?
A: PCB: process ID, state, program counter, CPU registers, scheduling information (priority), memory-management information (page table, base/limit), accounting information and I/O status (open files).
During a context switch the OS saves the running process's registers and program counter into its PCB and loads the saved values from the next process's PCB, also switching the memory map.
It is pure overhead because the CPU does no useful user work while switching, and the time depends on hardware support and the number of registers.
R: 2 | Lists the main PCB fields
R: 2 | Save and restore of registers and program counter between PCBs
R: 1 | Explains overhead: no useful work during the switch
## Advanced
P: (a) How many processes exist in total, including the original, after this runs: fork(); fork(); fork(); (b) What does this print, and how many times is each letter printed? printf("A"); fork(); printf("B");
A: (a) Each fork doubles the number of processes: 2^3 = 8 processes in total (7 new children plus the original).
(b) The parent prints A once before the fork. After the fork both the parent and the child print B. Output: A once and B twice (for example ABB). The A is printed once because it happens before the fork, although with buffered output the text may be duplicated if stdout is not flushed before fork.
R: 2 | 8 processes with the reasoning 2 to the power 3
R: 2 | A is printed once, B is printed twice
R: 1 | Mentions the order of A before the fork

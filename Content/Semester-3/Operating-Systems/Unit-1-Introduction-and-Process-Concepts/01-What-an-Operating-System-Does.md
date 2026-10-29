# What an operating system does, and its types
minutes: 30
yt: operating system introduction functions types
yt: types of operating systems batch multiprogramming time sharing real time
@study
An **operating system (OS)** is system software that manages computer hardware and provides a base for application programs. It sits between the user (and applications) and the hardware.

## Two viewpoints
- **Resource manager:** the OS allocates the CPU, memory, storage and I/O devices fairly and efficiently among competing programs.
- **Extended machine (virtual machine):** it hides the messy hardware details and offers simple abstractions: files, processes, windows, sockets.

## Main functions
1. **Process management:** create, schedule, synchronise and terminate processes.
2. **Memory management:** allocate and protect memory, virtual memory.
3. **File-system management:** files, directories, permissions, storage allocation.
4. **Device (I/O) management:** drivers, buffering, spooling.
5. **Protection and security:** stop one user or program from harming another.
6. **User interface:** command line (shell) and graphical interface.
7. **Accounting and error handling.**

## Types of operating systems
- **Batch OS:** similar jobs are grouped into batches and run without user interaction. No interaction means CPU idle during I/O.
- **Multiprogramming OS:** several jobs are kept in memory; when one waits for I/O the CPU runs another. Goal: high CPU utilisation.
- **Time-sharing (multitasking) OS:** the CPU switches among jobs so rapidly (using a **time slice** or quantum) that each user gets quick interactive responses. Goal: low response time.
- **Multiprocessor (parallel) OS:** several CPUs share memory and I/O. Gives higher throughput and reliability.
- **Distributed OS:** a collection of independent computers appears as a single system.
- **Real-time OS (RTOS):** guarantees a response within a deadline. **Hard** real-time (missing a deadline is a failure, like an air-bag controller) versus **soft** real-time (video playback).
- **Embedded OS:** small, specific, resource-limited devices (routers, washing machines).
- **Network OS:** provides file sharing and networking services over a LAN.

## Kernel and system programs
The **kernel** is the core always in memory, running with full privileges. Around it are system programs (shell, compilers, utilities) and applications.

## Modes of operation
The CPU has at least **user mode** and **kernel (supervisor) mode**, shown by a **mode bit**. Privileged instructions (I/O, changing memory maps, halting) run only in kernel mode. An application requests kernel services through a **system call**, which switches to kernel mode and back.

## Important OS terms
- **Multiprogramming** is about having several programs in memory; **multitasking** is about rapid switching for interactive use; **multiprocessing** is about using more than one CPU.
- **Spooling** (simultaneous peripheral operations on-line) queues output, such as print jobs, on disk.
- **Bootstrap program** (in firmware) loads the kernel at power-on.

> Multiprogramming increases CPU utilisation; time sharing improves response time; real-time guarantees deadlines.
@qa
Q: What are the two main roles of an operating system?
A: A resource manager that shares CPU, memory, storage and devices among programs, and an extended machine that hides hardware complexity behind simple abstractions.
Q: What is the difference between multiprogramming and time sharing?
A: Multiprogramming keeps several jobs in memory to keep the CPU busy during I/O waits. Time sharing is multiprogramming plus rapid time-slice switching so that interactive users get quick responses.
Q: What is the difference between hard and soft real-time systems?
A: In a hard real-time system a missed deadline is a system failure. In a soft real-time system a missed deadline reduces quality but is not catastrophic.
Q: Why is there a user mode and a kernel mode?
A: To protect the system: privileged instructions can run only in kernel mode, so user programs cannot directly harm the OS or other programs.
Q: What is spooling?
A: Storing output (or input) for a slow device, such as a printer, in a disk queue so that the program does not have to wait for the device.
@quiz
? The main goal of multiprogramming is
- faster response to users
+ higher CPU utilisation
- lower memory use
- smaller kernels
! While one job waits for I/O the CPU runs another.
? Which type of OS guarantees a response within a deadline?
- Batch OS
- Time-sharing OS
+ Real-time OS
- Network OS
! A real-time OS is designed to meet timing deadlines.
? Privileged instructions run in
- user mode
+ kernel mode
- both always
- virtual mode
! The mode bit protects privileged operations.
? Rapid switching of the CPU to give quick interactive response is
- batch processing
+ time sharing
- spooling
- multiprocessing
! Time slices let many interactive users share one CPU.
? A request from a user program to the kernel is a
- interrupt only
- fork
+ system call
- trap handler
! System calls are the interface to kernel services.

@visual
layers | Where the operating system sits | Users and programs: browser, editor, games, your code; Operating system: schedules the CPU, manages memory, files and devices; Hardware: CPU, RAM, disk, keyboard, network card

@problems
## Moderate
P: List four major functions of an operating system and give one real example of each.
A: 1) Process management: deciding which program runs on the CPU (example: the scheduler switching between a browser and a music player).
2) Memory management: giving each program its own memory and reclaiming it (example: virtual memory and paging).
3) File management: organising data on disk (example: folders, creating and deleting files).
4) Device management: controlling hardware through drivers (example: sending a document to a printer).
Protection and user interface are also valid functions.
R: 2 | Names four correct functions
R: 2 | Gives a suitable example for each
## High
P: Explain user mode and kernel mode. Why does the CPU need two modes, and what happens when a user program tries to execute a privileged instruction?
A: Kernel mode lets code run any instruction and touch any hardware or memory. User mode restricts a program to safe instructions inside its own memory. Two modes are needed so a buggy or malicious program cannot overwrite the OS, other programs or devices. A mode bit in the CPU records the current mode.
If a user program executes a privileged instruction (for example halting the CPU or writing to an I/O port) the hardware raises a trap, the OS takes control in kernel mode and normally terminates the offending program.
R: 2 | Correct difference between the two modes
R: 2 | Explains the purpose: protecting the OS and other programs
R: 1 | Privileged instruction in user mode causes a trap and the OS handles it
## Advanced
P: A process spends 80% of its time waiting for I/O. Using the formula utilisation = 1 - p^n, find the CPU utilisation when 1, 3 and 4 such processes are in memory, and the minimum number of processes needed for at least 90% utilisation. What does this show about multiprogramming?
A: p = 0.8.
n=1: 1 - 0.8 = 20%.
n=3: 1 - 0.8^3 = 1 - 0.512 = 48.8%.
n=4: 1 - 0.8^4 = 1 - 0.4096 = 59.04%.
For 90%: 0.8^n <= 0.1, so n >= ln(0.1)/ln(0.8) = 10.3, hence n = 11 (utilisation 91.4%; n=10 gives only 89.3%).
Keeping several processes in memory lets the CPU run another one while one waits for I/O, so utilisation rises with the degree of multiprogramming, with diminishing returns.
R: 2 | Correct utilisation values 20%, 48.8%, 59.04%
R: 2 | Finds n = 11 with working
R: 1 | Concludes that more processes in memory hide I/O waiting

# I/O systems: polling, interrupts, DMA and buffering
minutes: 25
yt: IO systems polling interrupt DMA operating system
yt: buffering caching spooling operating system
@study
The OS controls a huge variety of devices (disks, keyboards, network cards, printers) through a common framework.

## I/O hardware
- A **device controller** is the electronics that operates a device. The CPU talks to it through **registers** (status, command, data).
- **Port-mapped I/O** uses special I/O instructions and a separate address space; **memory-mapped I/O** maps device registers into normal memory addresses.

## Three ways to do I/O
1. **Programmed I/O with polling (busy waiting):** the CPU repeatedly reads the device status register until it is ready. Simple, but wastes CPU time.
2. **Interrupt-driven I/O:** the CPU starts the operation and continues with other work; the device sends an **interrupt** when done, and the **interrupt handler** responds. Good for slow devices, but each byte can cost an interrupt.
3. **Direct Memory Access (DMA):** a **DMA controller** moves a whole block between the device and memory **without CPU involvement**. The CPU only sets up the transfer (address, count, direction) and gets **one interrupt** at the end. Best for bulk transfer such as disks.
**Cycle stealing:** DMA occasionally takes bus cycles from the CPU.

## Kernel I/O subsystem
- **Scheduling:** order I/O requests (as in disk scheduling).
- **Buffering:** a memory area holding data in transit. Reasons: speed mismatch between device and CPU, differing transfer sizes, and **copy semantics**. **Double buffering** lets one buffer fill while the other is used.
- **Caching:** a fast copy of data that is also stored elsewhere (disk cache).
- **Spooling:** holding output for a device that cannot interleave requests, such as a printer.
- **Error handling and protection:** I/O instructions are privileged.

## Device drivers
A **device driver** is device-specific kernel code giving the kernel a uniform interface. Because drivers run in kernel mode, buggy drivers are a major cause of crashes.

## Blocking and non-blocking I/O
- **Blocking:** the process waits until the I/O finishes.
- **Non-blocking:** returns immediately with whatever is available.
- **Asynchronous:** starts the I/O and the process continues; it is notified when complete.

## Interrupt handling in brief
On an interrupt the CPU saves the current state, finds the handler in the **interrupt vector**, runs the **interrupt service routine**, then restores state and resumes. **Interrupt priorities** let important devices pre-empt less important ones, and **maskable** interrupts can be disabled.

> Polling wastes CPU, interrupts free it, DMA also frees it from the data copying.
@qa
Q: What is the difference between polling and interrupt-driven I/O?
A: In polling the CPU repeatedly checks the device status, wasting time. In interrupt-driven I/O the device signals the CPU when it needs attention, so the CPU can do other work meanwhile.
Q: How does DMA improve I/O performance?
A: A DMA controller transfers a block directly between memory and the device, so the CPU is involved only at the start and end, and gets one interrupt per block instead of one per byte.
Q: What is buffering and why is it used?
A: Storing data temporarily in memory while it is being transferred. It smooths speed differences between devices and the CPU and lets sizes of transfers differ.
Q: What is spooling?
A: Queuing output (or input) for a device that serves one job at a time, such as a printer, so that programs do not have to wait.
Q: What is a device driver?
A: Kernel software that knows the details of one device type and gives the rest of the OS a standard interface to it.
@quiz
? Busy waiting on a device status register is called
+ polling
- spooling
- swapping
- DMA
! The CPU keeps asking whether the device is ready.
? Which method transfers a block without CPU involvement in the data copy?
- Polling
- Interrupt-driven I/O
+ DMA
- Programmed I/O
! A DMA controller moves the data itself.
? Double buffering allows
+ filling one buffer while the other is processed
- two devices to share a port
- two copies of the OS
- faster seek
! The CPU and device work in parallel.
? Memory-mapped I/O means
- devices have a separate address space
+ device registers appear as memory addresses
- all I/O is cached
- there are no drivers
! Normal load and store instructions access the device.
? On an interrupt, the CPU locates the handler through the
- page table
- file table
+ interrupt vector
- TLB
! The vector holds handler addresses.

@visual
sequence | One DMA read | CPU > DMA controller : set address and byte count; DMA controller > Disk : request block; Disk > Memory : data moves directly; DMA controller ~> CPU : one interrupt when finished

@problems
## Moderate
P: Differentiate between polling and interrupt-driven I/O.
A: Polling: the CPU repeatedly checks the device status register in a loop, wasting CPU time but simple and fast for very quick devices. Interrupt-driven: the device signals the CPU with an interrupt when it is ready, so the CPU can do other work meanwhile, but each interrupt has overhead.
R: 2 | Polling described
R: 2 | Interrupt-driven described with the advantage
## High
P: Compare programmed I/O, interrupt-driven I/O and DMA for transferring a large block of data.
A: Programmed I/O: the CPU moves every byte itself and waits on the device; CPU is fully busy. Interrupt-driven: the CPU is interrupted for each byte or word, so it can work in between but pays interrupt overhead per unit. DMA: the CPU programs a DMA controller with the memory address and byte count, and the controller moves the whole block directly between device and memory; the CPU gets one interrupt at the end. DMA is best for large transfers.
R: 2 | Programmed and interrupt-driven I/O explained
R: 2 | DMA explained
R: 1 | Concludes DMA suits large transfers
## Advanced
P: Explain cycle stealing in DMA and describe the steps of one DMA read from disk to memory.
A: Cycle stealing: the DMA controller takes control of the memory bus for a few cycles at a time, briefly delaying the CPU, so both share memory.
Steps: 1) the driver gives the DMA controller the destination address and count; 2) the controller requests data from the disk; 3) the disk sends data and the controller writes it to memory, incrementing the address and decrementing the count; 4) when the count reaches zero the controller sends an interrupt to the CPU; 5) the OS handles the interrupt and marks the I/O complete.
R: 2 | Cycle stealing explained
R: 2 | Correct DMA steps
R: 1 | Only one interrupt at the end

# Cache memory and pipelining
minutes: 25
yt: cache memory pipelining performance
@study
**Memory hierarchy:** registers, cache, main memory, disk: faster but smaller towards the top. **Locality of reference** (temporal and spatial) makes caches effective.
**Average memory access time (AMAT)** = h x t_cache + (1 - h) x t_memory, where h is the hit ratio (simple model). For h = 0.9, t_cache = 10 ns and t_memory = 100 ns: AMAT = 9 + 10 = **19 ns**. **Mapping:** direct (one possible line), fully associative (any line), set-associative (a set of lines). Replacement: LRU, FIFO, random. Write policies: write-through, write-back.
**Pipelining** overlaps instruction stages (fetch, decode, execute, memory, write-back). For k stages and n instructions: time = (k + n - 1) cycles; speed-up over non-pipelined = n k / (k + n - 1). For k = 5, n = 100: 500/104 = **4.81**, approaching k for large n. **Hazards:** structural, data (forwarding, stalls), control (branch prediction).
## Hindi saransh
AMAT = h x tc + (1 - h) x tm. Pipeline speedup = nk/(k + n - 1).
> Speed-up can never exceed the number of stages.
@qa
Q: AMAT for h = 0.9, t_cache = 10 ns and t_memory = 100 ns?
A: 19 ns.
Q: What is locality of reference?
A: Programs tend to reuse recent data (temporal) and nearby data (spatial).
Q: Name the three types of pipeline hazards.
A: Structural, data and control.
Q: Speed-up of a 5-stage pipeline for 100 instructions?
A: 4.81.
@quiz
? AMAT for h = 0.9, 10 ns cache, 100 ns memory is
- 10 ns
- 19.5 ns
+ 19 ns
- 55 ns
! 9 + 10.
? Pipeline speed-up for k = 5, n = 100 is about
- 5
+ 4.81
- 3.5
- 100
! 500/104.
? Spatial locality means
- reuse of the same data
+ use of nearby data
- reuse of code
- cache misses
! Neighbouring addresses.
? A data hazard is reduced by
- bigger cache
+ forwarding
- more RAM
- compression
! Bypassing.
@visual
formula | Performance | AMAT = h*tc + (1-h)*tm ; speedup = n k / (k + n - 1)
bars | Pipeline speed-up for k = 5 | n=5;n10=3.57;n100=4.81
@problems
## Moderate
P: Compute AMAT for h = 0.9, cache 10 ns, memory 100 ns.
A: 19 ns.
R: 1 | Formula
R: 1 | 19
## High
P: Find the speed-up of a 5-stage pipeline executing 100 instructions.
A: 500/104 = 4.81.
R: 2 | Formula
R: 1 | 4.81
## Advanced
P: Explain data hazards with an example and two solutions.
A: ADD R1,R2,R3 followed by SUB R4,R1,R5: SUB needs R1 before write-back. Solutions: forwarding from the ALU result or inserting stall cycles.
R: 2 | Example
R: 2 | Two solutions

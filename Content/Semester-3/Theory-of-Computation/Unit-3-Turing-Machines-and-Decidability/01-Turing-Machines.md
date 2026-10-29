# Turing machines
minutes: 40
yt: turing machine introduction design examples
yt: turing machine a^n b^n construction
@study
A **Turing machine (TM)** has a finite control and an **infinite tape** divided into cells, with a head that can read, write and move left or right. It is the standard model of what is *computable*.

## Formal definition
TM = (Q, Σ, Γ, δ, q0, B, F):
- Γ ⊇ Σ is the tape alphabet; B ∈ Γ − Σ is the blank.
- δ: Q × Γ → Q × Γ × {L, R} (deterministic): read a symbol, write a symbol, move, change state.
- Accepts when it reaches a state in F. It may also **halt and reject**, or **loop forever**.

## Example: the a^n b^n idea
To accept {a^n b^n}: repeatedly (1) mark the leftmost unmarked a with X, (2) move right to the first unmarked b and mark it Y, (3) return left. When no a's remain, check that no unmarked b's remain. Unlike a PDA the same idea extends to a^n b^n c^n, which a PDA cannot do.

## Example: unary increment
Tape 111 (value 3), head on first 1: move right across 1s; on blank write 1; halt. Result 1111.

## Languages
- **Recursively enumerable (RE) / Turing-recognisable:** some TM accepts exactly the strings in L (may loop on others).
- **Recursive / Turing-decidable:** some TM that **always halts** accepts L.
Every recursive language is RE; the reverse is false.

## Variants (all equally powerful)
- Multi-tape TM, multi-track tape, two-way infinite tape.
- **Non-deterministic TM**: accepted languages same as deterministic TMs (simulation may be exponentially slower).
- TM with stay option.
A multi-tape machine can be simulated by a single-tape machine with a quadratic slowdown.

## Church-Turing thesis
Any effectively computable function can be computed by a Turing machine. It is a thesis (not a theorem) supported by every alternative model (lambda calculus, recursive functions, RAM machines) turning out equivalent.

## Universal Turing machine
A TM that takes the description of any TM M and an input w and simulates M on w. It is the theoretical model of a stored-program computer.

## Linear bounded automaton
A TM whose head cannot move beyond the input; it recognises context-sensitive languages.

> TM power = any algorithm. Halting and looping are the two sides of "recognise" versus "decide".
@qa
Q: Write the components of a Turing machine.
A: States, input alphabet, tape alphabet with a blank, transition function, start state, blank symbol and accepting states, working on an infinite tape.
Q: What is the difference between recursive and recursively enumerable languages?
A: For a recursive language some TM halts on every input with the correct answer. For an RE language a TM accepts strings in the language but may loop forever on others.
Q: State the Church-Turing thesis.
A: Anything that can be computed by an effective procedure can be computed by a Turing machine.
Q: Does adding more tapes make a TM more powerful?
A: No. A multi-tape TM can be simulated by a single-tape TM, only with some slowdown.
Q: What is a universal Turing machine?
A: A TM that can simulate any other TM given its encoding and an input, like a general-purpose stored-program computer.
@quiz
? A Turing machine tape is
- finite
+ infinite in at least one direction
- a stack
- a queue
! The tape is unbounded.
? A decidable language has a TM that
- may loop
+ always halts
- never accepts
- uses two tapes
! Deciders halt on all inputs.
? Which model recognises context-sensitive languages?
- DFA
- PDA
+ Linear bounded automaton
- Mealy machine
! LBA is a TM with bounded tape.
? Non-deterministic TMs are
- stronger than deterministic TMs
+ equal in computing power
- weaker
- unable to halt
! They recognise the same languages.
? The Church-Turing thesis is
- a proven theorem
+ a widely accepted claim about computability
- false
- about speed only
! It cannot be formally proved.

@visual
steps | One step of a Turing machine | Read the symbol under the head; Look up the rule for the current state and that symbol; Write a new symbol and switch state; Move the head one cell left or right

@problems
## Moderate
P: Give the formal definition of a Turing machine (the tuple) and explain the role of the tape.
A: A Turing machine is a 7-tuple (Q, Sigma, Gamma, delta, q0, B, F): states, input alphabet, tape alphabet, transition function delta(q, symbol) = (new state, written symbol, move L or R), start state, blank symbol and set of final states. The tape is an infinite memory on which the head reads and writes.
R: 3 | Seven components
R: 1 | Tape as unbounded memory
## High
P: Outline a Turing machine that accepts { a^n b^n | n >= 1 }.
A: Repeat: 1) move to the leftmost unmarked a and replace it by X; 2) move right to the first unmarked b and replace it by Y; 3) return to the left end. If an a has no matching b, or a b has no matching a, reject. When no a remains, check that no b remains (only X, Y, blanks) and accept.
R: 2 | Mark an a then a b
R: 2 | Repeat until all are matched
R: 1 | Reject on mismatch
## Advanced
P: Describe a Turing machine for unary addition 111 + 11 (tape 111+11). What is on the tape at the end and how does it relate to the Church-Turing thesis?
A: Replace + with 1, then go to the end and erase the last 1 (replace it with a blank). The tape holds 11111, which is 3 + 2 = 5.
Church-Turing thesis: anything that can be computed by an effective procedure can be computed by a Turing machine. Variants such as multi-tape and nondeterministic Turing machines have the same power as the basic machine.
R: 2 | Correct procedure and result 11111
R: 2 | Church-Turing thesis
R: 1 | Variants have equal power

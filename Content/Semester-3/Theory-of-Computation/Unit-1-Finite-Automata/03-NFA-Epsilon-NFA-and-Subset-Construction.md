# NFA, epsilon-NFA and subset construction
minutes: 40
yt: NFA to DFA conversion subset construction
yt: epsilon NFA closure conversion
@study
A **Nondeterministic Finite Automaton (NFA)** may have zero, one or several possible moves on a symbol. It accepts a string if **some** sequence of choices leads to an accepting state.

## Definition
NFA = (Q, Σ, δ, q0, F) but **δ: Q × Σ → 2^Q** (a set of next states, possibly empty). An **ε-NFA** also allows δ(q, ε), moving without reading input.

## Example: ends with 01
q0 loops on 0 and 1; on 0 it may also go to q1; q1 goes to q2 on 1 (q2 accepting).
| State | 0 | 1 |
| --- | --- | --- |
| q0 | {q0, q1} | {q0} |
| q1 | ∅ | {q2} |
| q2 | ∅ | ∅ |
This NFA has 3 states and a very simple design: it "guesses" when the final 01 begins.

## Subset construction (NFA → DFA)
Each DFA state is a **set of NFA states**.
1. Start with {q0} (for ε-NFA, its ε-closure).
2. For each reachable set S and symbol a, the next set is the union of δ(q, a) over q ∈ S.
3. A set is accepting if it contains an NFA accepting state.
Applying this to the example (verified by program) gives only three reachable sets:
| DFA state | 0 | 1 |
| --- | --- | --- |
| {q0} | {q0,q1} | {q0} |
| {q0,q1} | {q0,q1} | {q0,q2} |
| {q0,q2} (accepting) | {q0,q1} | {q0} |
This is the same machine as the DFA of the previous lesson. In the worst case an n-state NFA needs **2^n** DFA states.

## ε-closure
ε-closure(q) = all states reachable from q using only ε moves (including q). Used to remove ε-transitions: δ'(q, a) = ε-closure of δ(ε-closure(q), a).

## Equivalence
NFAs, ε-NFAs and DFAs all accept exactly the **regular languages**; non-determinism gives convenience, not extra power.

## Where NFAs help
Easy construction from regular expressions (Thompson's construction), union of languages (new start state with ε to both), concatenation and star.

> NFA = parallel guessing; DFA = one deterministic path. Both recognise the same languages.
@qa
Q: How does an NFA differ from a DFA?
A: An NFA can have several or no transitions for a state and symbol (and ε transitions), and accepts if any path reaches an accepting state. A DFA has exactly one transition per state and symbol.
Q: Does an NFA recognise more languages than a DFA?
A: No. Both recognise exactly the regular languages, although the DFA may need exponentially more states.
Q: What is ε-closure?
A: The set of states reachable from a state by following only ε-transitions, including the state itself.
Q: Outline the subset construction.
A: Start from the ε-closure of the NFA start state, repeatedly compute the set of states reachable on each symbol for every new set, and mark a set accepting if it contains an NFA final state.
Q: What is the worst-case number of DFA states for an n-state NFA?
A: 2^n.
@quiz
? The transition function of an NFA maps to
- a single state
+ a set of states
- a symbol
- a string
! δ: Q×Σ → 2^Q.
? A string is accepted by an NFA if
- all paths accept
+ at least one path ends in an accepting state
- the first path accepts
- no path rejects
! Existence of one accepting path is enough.
? Worst-case DFA states for an NFA with 4 states
- 8
+ 16
- 4
- 24
! 2^4 = 16.
? ε-closure of a state includes
- only its ε-neighbours
+ itself and all states reachable by ε moves
- all states
- no states
! The state is always in its own closure.
? NFAs and DFAs accept
- different classes
- NFA more
+ the same class of languages
- DFA more
! Both give regular languages.

@visual
graph | An NFA for strings ending in 01 | q0^>q0: 0/1; q0>q1: 0; q1>q2*: 1

@problems
## Moderate
P: Give three differences between a DFA and an NFA. Do they accept the same class of languages?
A: A DFA has exactly one transition for each state and symbol; an NFA may have zero, one or many. An NFA may have epsilon moves (in epsilon-NFA). A DFA follows a single path; an NFA accepts if at least one path ends in a final state. They accept the same class: regular languages.
R: 2 | Three differences
R: 2 | Same power
## High
P: NFA states q0, q1, q2 (q2 final): q0 on 0 goes to {q0, q1}; q0 on 1 goes to {q0}; q1 on 1 goes to {q2}. Convert it to a DFA using subset construction.
A: Start {q0}. {q0} on 0 gives {q0, q1}; on 1 gives {q0}. {q0, q1} on 0 gives {q0, q1}; on 1 gives {q0, q2}. {q0, q2} on 0 gives {q0, q1}; on 1 gives {q0}. Final DFA state: {q0, q2} (it contains q2). The DFA has 3 states, the same as the DFA for strings ending in 01.
R: 3 | Correct transitions of all three subset states
R: 2 | Final state {q0, q2}
## Advanced
P: In an epsilon-NFA q0 goes to q1 on epsilon and q1 goes to q2 on epsilon. Find the epsilon-closure of q0. If an NFA has 4 states what is the maximum number of states in the equivalent DFA?
A: epsilon-closure(q0) = {q0, q1, q2}: the states reachable using only epsilon moves, including q0 itself. A DFA built by subset construction has at most 2^n states: 2^4 = 16 (many are usually unreachable).
R: 2 | Closure {q0, q1, q2}
R: 2 | 16 states
R: 1 | Mentions unreachable subsets

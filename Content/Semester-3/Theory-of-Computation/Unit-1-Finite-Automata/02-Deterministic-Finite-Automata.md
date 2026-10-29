# Deterministic finite automata (DFA)
minutes: 40
yt: DFA design examples theory of computation
yt: DFA divisible by 3 construction
@study
A **DFA** is a machine with a finite number of states that reads an input string one symbol at a time and, for each symbol, moves to exactly one next state.

## Formal definition
A DFA is a 5-tuple **M = (Q, Σ, δ, q0, F)**:
- Q: finite set of states
- Σ: input alphabet
- δ: Q × Σ → Q, the **transition function** (total: defined for every state and symbol)
- q0 ∈ Q: start state
- F ⊆ Q: set of accepting (final) states
A string w is **accepted** if starting from q0 and following δ on every symbol, we end in a state of F. The language of M is L(M) = {w | M accepts w}.

## Representations
Transition diagram (circles for states, double circle for accepting, arrow for start) and transition table.

## Example 1: strings ending in 01
States: q0 (start, nothing useful seen), q1 (last symbol was 0), q2 (last two were 01, accepting).
| State | 0 | 1 |
| --- | --- | --- |
| q0 | q1 | q0 |
| q1 | q1 | q2 |
| q2 | q1 | q0 |
Trace of 1101: q0 →1→ q0 →1→ q0 →0→ q1 →1→ q2: accepted.

## Example 2: binary numbers divisible by 3
Track the remainder of the number read so far. Reading bit b turns value v into 2v + b, so new remainder = (2r + b) mod 3. States 0, 1, 2 are the remainders; state 0 is start and accepting.
| State | 0 | 1 |
| --- | --- | --- |
| 0 | 0 | 1 |
| 1 | 2 | 0 |
| 2 | 1 | 2 |
Check 110 (= 6): 0 →1→ 1 →1→ 0 →0→ 0: accepted. Check 101 (= 5): 0 →1→ 1 →0→ 2 →1→ 2: rejected. (This was verified by program for all numbers below 20.)

## Design tips
1. Decide what the machine must **remember** (a remainder, last symbols, a count).
2. One state per distinct piece of memory.
3. Add a **dead (trap) state** for strings that can never be accepted.
4. Test with short accepted and rejected strings.

## Counting-type languages
"Strings with an even number of 0s" needs 2 states (even, odd). "Exactly two 1s" needs 4 states (zero, one, two, more than two (dead)). A DFA cannot count without bound, so {0^n 1^n} is **not** regular.

## Complement and product
- Complement: swap accepting and non-accepting states of a (complete) DFA.
- Intersection or union: build the **product automaton** with state pairs (p, q).

> A DFA has exactly one move for every (state, symbol) pair; its states are its memory.
@qa
Q: Define a DFA formally.
A: A 5-tuple (Q, Σ, δ, q0, F) where Q is the finite state set, Σ the alphabet, δ: Q×Σ→Q the transition function, q0 the start state and F the set of accepting states.
Q: What is a dead state?
A: A non-accepting state from which the machine can never reach an accepting state; it absorbs unwanted strings.
Q: How do you complement a DFA's language?
A: Make the DFA complete, then swap accepting and non-accepting states.
Q: How many states does a DFA for "binary numbers divisible by 3" need?
A: Three states representing remainders 0, 1 and 2.
Q: Why can a DFA not recognise 0^n 1^n?
A: It has only finitely many states and so cannot remember an unbounded count of 0s.
@quiz
? In a DFA, δ is a function from
- Q to Σ
+ Q × Σ to Q
- Σ to F
- Q to 2^Q
! Exactly one next state for each state-symbol pair.
? The DFA for "ends with 01" accepts
- 10
+ 1101
- 011
- 00
! 1101 ends with 01.
? The DFA for numbers divisible by 3 reading binary 110 (6) ends in state
+ 0
- 1
- 2
- dead
! The remainder is 0 so it accepts.
? To complement a DFA you
- reverse arrows
+ swap final and non-final states
- add epsilon moves
- remove the start state
! Applies to complete DFAs.
? Which language is not regular?
- Even number of 0s
- Ends with 01
+ 0^n 1^n
- Divisible by 3
! Needs unbounded counting.

@visual
graph | A DFA that accepts binary strings ending in 01 | q0^>q1: 0; q0>q0: 1; q1>q1: 0; q1>q2*: 1; q2>q1: 0; q2>q0: 1

@problems
## Moderate
P: Design a DFA over {0, 1} that accepts strings with an even number of 0s. Give its transition table.
A: Two states: E (even number of 0s so far, start and final) and O (odd). Transitions: E on 0 goes to O, E on 1 stays in E; O on 0 goes to E, O on 1 stays in O. A string is accepted when it ends in E.
R: 2 | States with their meaning
R: 2 | Correct transitions and final state
## High
P: Using the DFA in the picture trace 1101 and 10. Which are accepted?
A: 1101: q0 -1-> q0 -1-> q0 -0-> q1 -1-> q2, which is final: accepted. 10: q0 -1-> q0 -0-> q1, which is not final: rejected.
R: 2 | Trace of 1101 accepted
R: 2 | Trace of 10 rejected
R: 1 | Final state check
## Advanced
P: Design a DFA over {0, 1} for binary numbers divisible by 3. Give the transition rule and test 110 (6) and 101 (5).
A: States are the remainder 0, 1, 2 (start and final = remainder 0). Reading bit b changes the value v to 2v + b, so the new remainder is (2r + b) mod 3: from 0: 0 goes to 0, 1 goes to 1; from 1: 0 goes to 2, 1 goes to 0; from 2: 0 goes to 1, 1 goes to 2.
110: 0 -1-> 1 -1-> 0 -0-> 0, accepted (6). 101: 0 -1-> 1 -0-> 2 -1-> 2, rejected (5).
R: 2 | Three remainder states
R: 2 | Rule (2r + b) mod 3 and table
R: 1 | Both tests correct

# Pushdown automata (PDA)
minutes: 40
yt: pushdown automata introduction design a^n b^n
yt: PDA to CFG conversion
@study
A **pushdown automaton** is a finite automaton plus a **stack** of unbounded size. The stack gives it memory that can count and match, so it recognises context-free languages.

## Definition
PDA = (Q, Σ, Γ, δ, q0, Z0, F):
- Γ: stack alphabet, Z0: initial stack symbol.
- δ(q, a, X) = set of (p, γ): in state q, reading a (or ε) with X on top of the stack, move to p and replace X by the string γ.
Acceptance by **final state** or by **empty stack**; the two are equivalent in power.

## Example: L = {a^n b^n | n ≥ 1}
Idea: push an A for each a; pop an A for each b; accept if the stack returns to Z0.
- δ(q0, a, Z0) = (q0, AZ0)
- δ(q0, a, A) = (q0, AA)
- δ(q0, b, A) = (q1, ε)
- δ(q1, b, A) = (q1, ε)
- δ(q1, ε, Z0) = (q2, Z0), q2 accepting.
Trace of aabb: stack Z0 → AZ0 → AAZ0 → AZ0 → Z0 → accept.

## Example: palindromes w w^R
Needs **non-determinism**: the machine pushes the first half and *guesses* the middle, then pops while matching. A deterministic PDA cannot find the middle, so **DPDA is strictly weaker than NPDA** (unlike DFA and NFA).

## Equivalence with CFG
- CFG → PDA: the stack simulates leftmost derivations (push start symbol; replace a variable by a production right side; match terminals with input).
- PDA → CFG: variables [p X q] meaning "going from p to q while popping X".
So context-free languages = languages accepted by PDAs.

## Closure properties of CFLs
Closed under union, concatenation, star, reversal, and substitution. **Not closed** under intersection or complement. Intersection with a regular language is context-free.

## Pumping lemma for CFLs
If L is context-free there is p such that any w ∈ L with |w| ≥ p can be written uvxyz with |vy| > 0, |vxy| ≤ p, and u v^i x y^i z ∈ L for all i ≥ 0.
Proof that {a^n b^n c^n} is not context-free: any window of length ≤ p can touch at most two kinds of symbol, so pumping unbalances the counts.

## Applications
Parsers in compilers use PDA-like stack machines (LL, LR parsers) for checking program syntax such as matching braces.

> Stack = unbounded but last-in-first-out memory: ideal for nesting.
@qa
Q: What extra component does a PDA have over an FA?
A: A stack, which lets it remember an unbounded amount of information in last-in-first-out order.
Q: Is every NPDA equivalent to a DPDA?
A: No. Deterministic PDAs accept a strictly smaller class of languages; for example, the palindrome language w w^R needs non-determinism.
Q: Design idea of a PDA for a^n b^n.
A: Push a symbol for every a, pop one for every b, and accept when the input ends and the stack holds only the bottom marker.
Q: Are context-free languages closed under intersection?
A: No. For example {a^n b^n c^m} and {a^m b^n c^n} are context-free but their intersection {a^n b^n c^n} is not.
Q: What does the pumping lemma for CFLs say?
A: Long strings split as uvxyz with |vy| > 0 and |vxy| ≤ p such that u v^i x y^i z stays in the language for all i ≥ 0.
@quiz
? A PDA recognises
- only regular languages
+ context-free languages
- all computable languages
- no language
! PDA and CFG are equivalent.
? The language w w^R needs
- a DFA
- no stack
+ a non-deterministic PDA
- a Turing machine
! The middle must be guessed.
? CFLs are not closed under
- union
- star
+ intersection
- concatenation
! Intersection can leave the class.
? {a^n b^n c^n} is
- regular
- context-free
+ not context-free
- finite
! Shown by the CFL pumping lemma.
? In the a^n b^n PDA, each b causes a
- push
+ pop
- accept
- reject
! b matches a previously pushed a.

@visual
steps | A PDA for a^n b^n | Push a marker for every a that is read; Switch state when the first b appears; Pop one marker for every b; Accept when the input ends and the stack is back to the bottom marker

@problems
## Moderate
P: Why can a finite automaton not accept { a^n b^n } but a pushdown automaton can?
A: A finite automaton has a fixed number of states, so it cannot count an unbounded number of a's. A pushdown automaton has a stack, which gives unbounded memory: it pushes a symbol for each a and pops one for each b, and accepts if the counts match.
R: 2 | Finite memory limitation
R: 2 | Stack counts the a's
## High
P: Trace the PDA for a^n b^n on the input aabb, showing the stack after each symbol (bottom marker Z).
A: Start: stack Z. Read a: push A, stack AZ. Read a: push A, stack AAZ. Read b: pop A, stack AZ. Read b: pop A, stack Z. Input finished and only Z remains, so the string is accepted.
R: 3 | Correct stack contents at each step
R: 2 | Acceptance condition
## Advanced
P: Describe a PDA and a grammar for even-length palindromes w w^R over {a, b}. Why is nondeterminism needed?
A: Grammar: S to aSa | bSb | epsilon. PDA: in the first phase push each symbol read; at some point guess nondeterministically that the middle has been reached and move to the second phase; in the second phase pop and compare with each input symbol; accept when input ends and the stack returns to Z.
Nondeterminism is needed because the PDA cannot know where the middle of the input is, so it must try every possible midpoint.
R: 2 | Grammar
R: 2 | Push then pop and compare
R: 1 | Guess of the middle explained

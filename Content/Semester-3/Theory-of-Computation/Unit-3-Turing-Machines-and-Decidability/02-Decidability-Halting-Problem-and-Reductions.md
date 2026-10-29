# Decidability, the halting problem and reductions
minutes: 35
yt: halting problem proof undecidability
yt: decidable undecidable problems reduction rice theorem
@study
A problem is **decidable** if a Turing machine halts with the right yes/no answer for every input. Some problems are **undecidable**: no algorithm can exist.

## Counting argument
There are only countably many Turing machines (programs are finite strings) but uncountably many languages, so most languages have no machine at all.

## The halting problem
**HALT = {⟨M, w⟩ | M halts on input w}** is undecidable.
Proof sketch by contradiction (diagonalisation):
1. Suppose a decider H(M, w) exists.
2. Build D(M): run H(M, M); if H says "halts", loop forever; if H says "loops", halt.
3. Run D on its own code D. If D halts, then H said D loops on D (so D loops), contradiction. If D loops, then H said it halts, contradiction.
Therefore H cannot exist. HALT is recursively enumerable (run M, wait) but not recursive.

## Other undecidable problems
- Acceptance A_TM = {⟨M, w⟩ | M accepts w}.
- Emptiness E_TM: is L(M) = ∅?
- Equivalence of two TMs.
- Post Correspondence Problem (PCP).
- Whether a CFG is ambiguous; whether two CFGs generate the same language.
- **Rice's theorem:** every non-trivial property of the *language* a TM accepts is undecidable.

## Decidable problems (examples)
- For DFAs: acceptance, emptiness, equivalence.
- For CFGs: membership (CYK algorithm), emptiness.
- Whether a number is prime, whether a graph is connected.

## Reductions
To show B undecidable, **reduce a known undecidable problem A to B**: a computable map turning instances of A into instances of B with the same answer. If B were decidable then A would be too, a contradiction.

## Closure properties
Recursive languages are closed under complement; RE languages are not. A language L is recursive iff both L and its complement are RE.

## Practical meaning
No program can perfectly decide, for all programs, whether they terminate, are bug-free, or equal each other. Static analysis tools therefore use approximations.

> Undecidable does not mean hard; it means no algorithm solves every instance.
@qa
Q: What is the halting problem and is it decidable?
A: Given a program and an input, decide whether the program eventually halts. It is undecidable: no algorithm solves it for all pairs.
Q: Why is HALT recursively enumerable?
A: A TM can simulate M on w and accept if the simulation halts, so halting instances are recognised, though non-halting ones are never confirmed.
Q: What is a reduction?
A: A computable transformation of instances of one problem into another so that answers are preserved. It transfers decidability or undecidability between problems.
Q: State Rice's theorem.
A: Every non-trivial property of the language recognised by a Turing machine is undecidable.
Q: If a language and its complement are both RE, what follows?
A: The language is recursive (decidable).
@quiz
? The halting problem is
- decidable
+ undecidable but recursively enumerable
- not recursively enumerable
- regular
! Halting can be semi-decided.
? Which problem is decidable?
- Equivalence of two TMs
+ Whether a DFA accepts a given string
- Emptiness of a TM language
- Ambiguity of a CFG
! Simulating a DFA always stops.
? The proof of undecidability of HALT uses
- induction
+ diagonalisation
- pumping lemma
- minimisation
! The machine D contradicts itself.
? Recursive languages are closed under
- nothing
+ complement
- only union
- only star
! A decider can flip its answer.
? To prove B undecidable we reduce
+ a known undecidable problem to B
- B to a decidable problem
- B to a regular problem
- nothing
! If B were decidable, A would be too.

@visual
compare | Decidable and recognizable languages | Decidable=A TM always halts with yes or no~Example: is a number prime?~Closed under complement; Recognizable (but not decidable)=A TM halts and says yes for members, may loop forever otherwise~Example: the halting problem~Not closed under complement

@problems
## Moderate
P: Differentiate between decidable and Turing-recognizable languages with an example of each.
A: A decidable language has a Turing machine (a decider) that halts on every input with accept or reject; example: whether a number is prime. A Turing-recognizable language has a machine that accepts every string in the language but may loop forever on strings outside it; example: the halting problem language.
R: 2 | Decidable with example
R: 2 | Recognizable with example
## High
P: Explain the halting problem and sketch why it is undecidable.
A: The halting problem asks whether a given program halts on a given input. Suppose a decider H exists. Build a program D that, given a program P, runs H(P, P) and does the opposite: if H says halts, D loops forever; if H says loops, D halts. Running D on itself: if D(D) halts then H says halts so D loops: contradiction; if D(D) loops then H says loops so D halts: contradiction. So H cannot exist.
R: 2 | Problem statement
R: 3 | Diagonal argument with the contradiction
## Advanced
P: If A reduces to B and B is decidable, what follows? Use the undecidability of halting to show that "does a program ever print hello" is undecidable.
A: If A reduces to B and B is decidable then A is decidable (contrapositive: if A is undecidable, B is undecidable).
Given (M, w), build M' that simulates M on w and prints hello only if M halts. M' prints hello exactly when M halts on w. A decider for the print-hello problem would therefore decide the halting problem, which is impossible. So it is undecidable.
R: 2 | Reduction direction
R: 3 | Construction of M' with correct reasoning

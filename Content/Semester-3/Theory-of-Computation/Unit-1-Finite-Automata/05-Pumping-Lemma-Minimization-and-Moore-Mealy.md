# Pumping lemma, DFA minimisation and Moore/Mealy machines
minutes: 40
yt: pumping lemma for regular languages proof examples
yt: DFA minimization table filling method
yt: Moore and Mealy machine
@study
## Pumping lemma for regular languages
**Statement:** if L is regular, there is a **pumping length p** such that every string w ∈ L with |w| ≥ p can be split w = xyz where
1. |y| > 0,
2. |xy| ≤ p,
3. x y^i z ∈ L for every i ≥ 0.
Idea: a long string forces a DFA to repeat a state (pigeonhole), so the loop can be repeated or removed.
It is used only to **prove a language is not regular** (proof by contradiction), never to prove regularity.

### Example: L = {0^n 1^n | n ≥ 0} is not regular
Assume regular with pumping length p. Take w = 0^p 1^p. Since |xy| ≤ p, y consists only of 0s. Then xy²z has more 0s than 1s, so it is not in L. Contradiction.
Other non-regular languages: {ww^R}, {a^n b^m | n > m}, {a^(n²)}, balanced parentheses, primes.

## DFA minimisation (table-filling / Myhill-Nerode)
Two states are **equivalent** if no string distinguishes them (they lead to the same accept/reject outcome).
1. Remove unreachable states.
2. Mark every pair (accepting, non-accepting) as distinguishable.
3. Repeat: mark (p, q) if for some symbol a the pair δ(p,a), δ(q,a) is already marked.
4. Unmarked pairs are equivalent; merge them.
The result is the **unique minimal DFA** (up to renaming).
Example: states A (start), B, C, D, E with F = {E}; if transitions make B≡D and C≡E in function, they merge into fewer states.

## Myhill-Nerode theorem
A language is regular iff it has finitely many equivalence classes of strings under the relation "x ~ y if for all z, xz ∈ L ⇔ yz ∈ L". The number of classes equals the number of states of the minimal DFA.

## Machines with output
- **Moore machine:** output depends only on the **state**. For n input symbols it produces n+1 outputs (output of the start state first).
- **Mealy machine:** output depends on the **state and current input** (on transitions). It produces n outputs for n inputs.
- Any Moore machine has an equivalent Mealy machine and vice versa (a Mealy may need extra states to convert to Moore).
Example Mealy: output 1 whenever the input has just completed "11". Used in sequential circuit design and protocol controllers.

## Applications of finite automata
Lexical analysis, text search, vending machines, traffic lights, protocol state machines, game AI.

> Pumping lemma proves non-regularity; table filling gives the smallest DFA.
@qa
Q: State the pumping lemma for regular languages.
A: If L is regular there is a length p such that any string w in L with |w| ≥ p can be written xyz with |y| > 0, |xy| ≤ p and x y^i z in L for all i ≥ 0.
Q: Can the pumping lemma prove that a language is regular?
A: No. It gives a necessary condition only, so it can only be used to show non-regularity.
Q: Prove briefly that 0^n 1^n is not regular.
A: For w = 0^p 1^p, y lies inside the 0s, so pumping y up gives more 0s than 1s, a string outside the language, contradicting the lemma.
Q: What is the difference between Moore and Mealy machines?
A: In a Moore machine the output depends only on the current state; in a Mealy machine it depends on the state and the current input.
Q: What does the Myhill-Nerode theorem say?
A: A language is regular exactly when the number of Myhill-Nerode equivalence classes is finite, and that number equals the size of the minimal DFA.
@quiz
? In the pumping lemma, the condition |xy| ≤ p means
- y is empty
+ the loop occurs within the first p symbols
- x is empty
- z is long
! This bounds where y can lie.
? Which language is non-regular?
- a*b*
+ {a^n b^n}
- (ab)*
- strings of even length
! It requires unbounded counting.
? Output depends only on state in a
+ Moore machine
- Mealy machine
- DFA
- NFA
! Moore machine outputs are tied to states.
? Table-filling marks first the pairs
- of start states
+ one accepting and one non-accepting
- of dead states
- with equal outputs
! They are distinguished by ε.
? For n input symbols a Mealy machine gives
- n+1 outputs
+ n outputs
- 1 output
- 2n outputs
! One output per transition.

@visual
steps | Pumping lemma proof pattern | Assume L is regular with pumping length p; Pick a string s in L with length at least p; Any split s = xyz with |xy| <= p and |y| >= 1; Show that pumping y gives a string outside L; Contradiction: L is not regular

@problems
## Moderate
P: State the pumping lemma for regular languages. For what is it used?
A: If L is regular there is a pumping length p such that every string s in L with |s| >= p can be split into xyz with |xy| <= p, |y| >= 1 and x y^i z in L for every i >= 0. It is used to prove that a language is not regular (it cannot prove regularity).
R: 3 | Lemma stated with the three conditions
R: 1 | Used only to show non-regularity
## High
P: Prove that L = { a^n b^n | n >= 0 } is not regular.
A: Assume L is regular with pumping length p. Take s = a^p b^p. Since |xy| <= p, y consists only of a's, say y = a^k with k >= 1. Pumping with i = 2 gives a^(p+k) b^p, which has more a's than b's and is not in L. Contradiction, so L is not regular.
R: 2 | Chooses s = a^p b^p
R: 2 | y lies inside the a's
R: 1 | Pumped string leaves L
## Advanced
P: A DFA has states A (start), B, C, D (final), E. Transitions: A on a or b goes to B or C respectively (a to B, b to C); B, C and E each go to D on a and to E on b; D goes to D on a and to E on b. Minimise it and describe the language. Then state the difference between Moore and Mealy machines.
A: B, C and E have identical behaviour (a to D, b to E, none final), so they merge into one state M. A on a or b goes to M; M on a goes to D, on b stays in M; D on a stays in D, on b goes to M. Three states: A, M, D. The language is strings of length at least 2 that end in a.
Moore machine: the output depends only on the current state. Mealy machine: the output depends on the current state and the input symbol (on the transition).
R: 2 | Merges B, C and E
R: 2 | Minimal DFA and language description
R: 1 | Moore versus Mealy

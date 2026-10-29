# Basics: alphabets, strings and languages
minutes: 25
yt: theory of computation alphabet string language basics
yt: toc introduction finite automata kleene closure
@study
Theory of Computation (TOC) asks: **what can be computed, and how efficiently?** It studies abstract machines and the languages they accept.

## Basic terms
- **Alphabet (Σ):** a finite, non-empty set of symbols. Σ = {0, 1} is the binary alphabet.
- **String:** a finite sequence of symbols from Σ. The **empty string** is ε (epsilon), with length 0.
- **Length |w|:** number of symbols. |0110| = 4.
- **Concatenation:** xy puts y after x. εw = wε = w.
- **Substring, prefix, suffix:** for w = abc, prefixes are ε, a, ab, abc; suffixes are ε, c, bc, abc.
- **Reversal w^R:** (abc)^R = cba.

## Powers of an alphabet
Σ^k is the set of all strings of length k. For Σ = {0,1}: Σ^0 = {ε}, Σ^1 = {0,1}, Σ^2 = {00,01,10,11}. There are 2^k strings of length k.
- **Σ\*** (Kleene closure) = Σ^0 ∪ Σ^1 ∪ Σ^2 ∪ … = all strings including ε.
- **Σ⁺** = Σ\* − {ε}.

## Language
A **language** L is any subset of Σ\*. Examples over {0,1}:
- L1 = strings that end in 01.
- L2 = strings with equal number of 0s and 1s.
- L3 = {0^n 1^n | n ≥ 0}.
- The empty language ∅ (no strings) is different from {ε} (one string, the empty string).

## Operations on languages
Union L1 ∪ L2, intersection, complement (Σ\* − L), concatenation L1L2 = {xy | x ∈ L1, y ∈ L2}, Kleene star L\* (zero or more concatenations), reversal.

## Chomsky hierarchy preview
| Type | Grammar | Machine |
| --- | --- | --- |
| 3 | Regular | Finite automaton |
| 2 | Context-free | Pushdown automaton |
| 1 | Context-sensitive | Linear bounded automaton |
| 0 | Unrestricted | Turing machine |
Each class strictly contains the one above it in the table.

> A language is just a set of strings; a machine "accepts" a language if it says yes exactly for the strings in it.
@qa
Q: What is an alphabet?
A: A finite, non-empty set of symbols, such as {0,1} or {a,b}.
Q: What is the difference between ∅ and {ε}?
A: ∅ is the language with no strings at all. {ε} is the language containing exactly one string, the empty string.
Q: How many strings of length n exist over a binary alphabet?
A: 2^n. For n = 3 there are 8 strings.
Q: What is the Kleene closure Σ*?
A: The set of all strings, of any length including zero, formed from symbols of Σ.
Q: Name the four classes of the Chomsky hierarchy with their machines.
A: Regular (finite automata), context-free (pushdown automata), context-sensitive (linear bounded automata), and recursively enumerable (Turing machines).
@quiz
? The number of strings of length 4 over {a,b} is
- 4
- 8
+ 16
- 32
! 2^4 = 16.
? Which string is a suffix of "automata"?
- auto
+ mata
- tom
- ataa
! A suffix is the ending part.
? The language containing only the empty string is
- ∅
+ {ε}
- Σ*
- {0}
! It has exactly one string.
? L* always contains
- no strings
+ the empty string ε
- only one string
- only strings of length 1
! Zero concatenations give ε.
? Which machine recognises context-free languages?
- Finite automaton
+ Pushdown automaton
- Turing machine only
- Counter
! PDA = CFG power.

@visual
formula | Alphabet, strings and languages | Sigma = {0, 1} is an alphabet ; Sigma^2 = {00, 01, 10, 11} ; Sigma* is the set of all finite strings, including the empty string

@problems
## Moderate
P: Let Sigma = {0, 1}. How many strings of length 3 exist? What is the length of 0101 and of the empty string?
A: There are 2^3 = 8 strings of length 3 (000 to 111). The length of 0101 is 4. The empty string epsilon has length 0.
R: 2 | 8 strings
R: 2 | Lengths 4 and 0
## High
P: L1 = {a, ab} and L2 = {b, ab}. Find L1 union L2 and the concatenation L1 L2.
A: Union = {a, ab, b}. Concatenation takes every string of L1 followed by every string of L2: a.b = ab, a.ab = aab, ab.b = abb, ab.ab = abab. So L1 L2 = {ab, aab, abb, abab}.
R: 2 | Union
R: 3 | All four concatenations
## Advanced
P: How many strings of length at most 3 exist over {a, b}? Is the Kleene closure of {a} finite? What are the closures of the empty set and of {epsilon}?
A: 1 + 2 + 4 + 8 = 15 strings. {a}* = {epsilon, a, aa, ...} is infinite. The empty set star is {epsilon} (zero concatenations), and {epsilon}* is also {epsilon}.
R: 2 | 15 strings
R: 1 | {a}* infinite
R: 2 | Both special closures

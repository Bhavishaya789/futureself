# Regular expressions and conversion with automata
minutes: 35
yt: regular expression to NFA Thompson construction
yt: DFA to regular expression state elimination Arden's theorem
@study
A **regular expression (RE)** describes a language using three operations.

## Definition
Over alphabet Σ:
- ∅, ε and each symbol a are REs.
- If R and S are REs then **R + S** (union, written | in programs), **RS** (concatenation) and **R\*** (star) are REs.
Precedence: star highest, then concatenation, then union.

## Examples over {0,1}
- `(0+1)*01` — strings ending in 01.
- `0*10*10*` — strings with exactly two 1s.
- `(00)*` — even number of 0s only (no 1s).
- `(0+1)*00(0+1)*` — contains 00.
- `1(0+1)*0` — starts with 1 and ends with 0.

## Algebraic laws
R + S = S + R; R(S + T) = RS + RT; (R\*)\* = R\*; ∅\* = ε; εR = R; ∅R = ∅; R + ∅ = R; (R + S)\* = (R\*S\*)\*; R\*R\* = R\*.

## RE → ε-NFA (Thompson's construction)
Build small machines for ε, a; combine by union (new start with ε to both), concatenation (ε from the first's final to the second's start) and star (ε loops back and a bypass).

## DFA → RE
- **State elimination:** remove states one at a time, replacing paths through them with RE labels on edges.
- **Arden's theorem:** if R = Q + RP and ε ∉ P then R = QP\*. Write one equation per state and solve.
Example: language of a DFA where state A (start, final) loops on 0 and goes to B on 1; B goes back to A on 1 and loops on 0 gives (0 + 10\*1)\*.

## Regular expressions in practice
Used in `grep`, text editors, validators and lexical analysers (compiler design). Python example:
```python
import re
pattern = re.compile(r'^[01]*01$')
for s in ["1101", "0110", "01", "1"]:
    print(s, bool(pattern.match(s)))
phone = re.compile(r'^[6-9]\d{9}$')
print(bool(phone.match("9876543210")), bool(phone.match("1234567890")))
```
Output:
```
1101 True
0110 False
01 True
1 False
True False
```

## Closure properties of regular languages
Closed under union, intersection, complement, concatenation, star, reversal, difference. Decision problems (emptiness, membership, equivalence) are all decidable.

> RE, DFA, NFA and ε-NFA describe exactly the same class: the regular languages.
@qa
Q: Write a regular expression for strings over {0,1} that end with 01.
A: (0+1)*01
Q: State Arden's theorem.
A: If P and Q are regular expressions and ε is not in P, then the equation R = Q + RP has the unique solution R = QP*.
Q: How is a RE converted to an NFA?
A: By Thompson's construction: build base automata for symbols and combine them for union, concatenation and star using ε-transitions.
Q: Are regular languages closed under complement?
A: Yes. Complete a DFA and swap accepting and non-accepting states.
Q: Give one practical use of regular expressions.
A: Pattern searching with grep, input validation, and tokenising source code in the lexical analysis phase of a compiler.
@quiz
? Which RE describes strings with exactly two 1s over {0,1}?
- (0+1)*11
+ 0*10*10*
- (01)*
- 1*01*
! Two 1s separated and surrounded by any 0s.
? (R*)* equals
- R
+ R*
- ε
- ∅
! Star is idempotent.
? By Arden's theorem, R = Q + RP (ε not in P) has the solution
- R = PQ*
- R = Q*P
+ R = QP*
- R = P*Q*
! The solution is Q followed by any number of P.
? Which operation does NOT always keep a language regular?
- Union
- Complement
- Star
+ Taking an arbitrary subset of the language
! Regular languages are closed under union, complement and star, but an arbitrary subset of a regular language (such as 0^n 1^n inside 0*1*) need not be regular.
? Thompson's construction produces a
- DFA
+ ε-NFA
- PDA
- Turing machine
! It uses ε-transitions.

@visual
formula | Regular expression operators | a + b means a or b ; ab means a followed by b ; a* means zero or more a's ; (a + b)* means every string over {a, b}

@problems
## Moderate
P: Write regular expressions over {a, b} for: (a) strings starting with a, (b) strings ending in b, (c) strings containing exactly one a.
A: (a) a(a + b)*. (b) (a + b)*b. (c) b*ab*.
R: 2 | (a) and (b)
R: 2 | (c)
## High
P: Write a regular expression for binary strings ending in 01 and one for strings over {a, b} with an even number of a's.
A: Ending in 01: (0 + 1)*01. Even number of a's: (b*ab*a)*b* (a's come in pairs with b's anywhere between them).
R: 2 | (0 + 1)*01
R: 3 | Even a's expression
## Advanced
P: Show that (a + b)* and (a*b*)* describe the same language. State Arden's theorem.
A: (a + b)* generates every string over {a, b}. In (a*b*)* any string can be broken into letters, and each letter fits one chunk a*b* (a single a or a single b), so (a*b*)* also produces every string. Both include epsilon. They are equal.
Arden's theorem: if P does not contain epsilon, the equation R = Q + RP has the unique solution R = QP*. It is used to convert a finite automaton into a regular expression.
R: 3 | Equivalence argument
R: 2 | Arden's theorem

# Grammars, derivations and the Chomsky hierarchy
minutes: 35
yt: context free grammar derivation tree leftmost rightmost
yt: ambiguity in context free grammar
@study
A **grammar** G = (V, T, P, S) generates strings:
- V: variables (non-terminals), T: terminals, P: production rules, S: start symbol.

## Context-free grammars (CFG)
Every production has a single non-terminal on the left: A → α, where α is a string of terminals and non-terminals.

### Example: balanced a^n b^n
S → aSb | ε
Derivation of aabb: S ⇒ aSb ⇒ aaSbb ⇒ aabb.

### Example: arithmetic expressions
E → E + T | T, T → T \* F | F, F → ( E ) | id
This grammar encodes precedence (\* binds tighter than +) and left associativity.

### Example: palindromes over {a,b}
S → aSa | bSb | a | b | ε

## Derivations and parse trees
- **Leftmost derivation:** always expand the leftmost non-terminal; **rightmost** expands the rightmost.
- A **parse (derivation) tree** has the start symbol at the root, non-terminals at internal nodes and terminals at leaves; the leaves read left to right give the **yield**.

## Ambiguity
A grammar is **ambiguous** if some string has two different parse trees (equivalently, two leftmost derivations). Example: E → E + E | E \* E | id gives two trees for id + id \* id. Fix by rewriting with precedence levels as above. Some languages are **inherently ambiguous** (every grammar is ambiguous), and ambiguity is undecidable in general.

## Simplification of CFGs
1. Remove **ε-productions** (nullable variables).
2. Remove **unit productions** A → B.
3. Remove **useless symbols** (non-generating, unreachable).

## Normal forms
- **Chomsky Normal Form (CNF):** every rule is A → BC or A → a. Any derivation of a string of length n takes 2n − 1 steps.
- **Greibach Normal Form (GNF):** A → aα where α is a string of variables. Every step produces one terminal.

## Hierarchy of grammars
| Type | Rule form | Name |
| --- | --- | --- |
| 0 | α → β (α non-empty) | Unrestricted |
| 1 | αAβ → αγβ, |γ| ≥ 1 | Context-sensitive |
| 2 | A → γ | Context-free |
| 3 | A → aB or A → a | Regular |

> CFGs generate nested structures such as brackets and expressions; regular languages cannot.
@qa
Q: Define a context-free grammar.
A: A 4-tuple (V, T, P, S) of variables, terminals, productions of the form A → α with a single variable on the left, and a start symbol.
Q: What is an ambiguous grammar?
A: One in which some string has two or more distinct parse trees (leftmost derivations).
Q: Give a CFG for strings a^n b^n.
A: S → aSb | ε.
Q: What is Chomsky Normal Form?
A: A form in which every production is A → BC (two variables) or A → a (one terminal).
Q: Why is E → E+T | T, T → T*F | F, F → (E) | id preferred to E → E+E | E*E | id?
A: It is unambiguous and builds in operator precedence and associativity, so every expression has one parse tree.
@quiz
? A CFG production has on its left side
- any string
+ exactly one variable
- terminals only
- ε
! That is the context-free restriction.
? A grammar with two parse trees for one string is
+ ambiguous
- regular
- in CNF
- in GNF
! Ambiguity is about multiple parse trees.
? In CNF a string of length n needs how many derivation steps?
- n
- n+1
+ 2n−1
- 2n+1
! n−1 binary rules and n terminal rules.
? S → aSb | ε generates
- a*b*
+ a^n b^n
- (ab)*
- any string
! Equal numbers of a's then b's.
? Type-3 grammars are
- unrestricted
- context-sensitive
- context-free
+ regular
! The most restricted type.

@visual
layers | Chomsky hierarchy (each type contains the one below) | Type 0 - Recursively enumerable: unrestricted grammar, Turing machine; Type 1 - Context sensitive: linear bounded automaton; Type 2 - Context free: pushdown automaton; Type 3 - Regular: finite automaton

@problems
## Moderate
P: Classify the grammars: (a) S to aS | b, (b) S to aSb | epsilon.
A: (a) Type 3 (regular): right-linear productions with one terminal and at most one non-terminal at the end; it generates a*b. (b) Type 2 (context-free): the non-terminal sits in the middle; it generates a^n b^n, which is not regular.
R: 2 | (a) Type 3 with reason
R: 2 | (b) Type 2 with reason
## High
P: Derive aabb from S to aSb | epsilon with a leftmost derivation. Show that E to E + E | E * E | id is ambiguous using the string id + id * id.
A: S => aSb => aaSbb => aabb (the last step uses S to epsilon).
Ambiguity: id + id * id has two different parse trees: one groups (id + id) * id and the other groups id + (id * id). A grammar with more than one parse tree for some string is ambiguous.
R: 2 | Correct derivation
R: 3 | Two parse trees explained
## Advanced
P: Convert S to aSb | ab into Chomsky normal form.
A: Introduce A to a and B to b. S to ab becomes S to AB. S to aSb becomes S to ASB, which has three symbols on the right, so introduce X to SB and write S to AX. CNF: S to AX | AB, X to SB, A to a, B to b. Every production is either two non-terminals or one terminal.
R: 2 | Terminal replacement A and B
R: 2 | Splitting S to ASB using X
R: 1 | Final CNF grammar

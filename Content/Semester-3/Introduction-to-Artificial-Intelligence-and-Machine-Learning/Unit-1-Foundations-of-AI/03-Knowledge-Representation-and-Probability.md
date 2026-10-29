# Knowledge representation, logic and probabilistic reasoning
minutes: 35
yt: knowledge representation propositional logic first order logic AI
yt: bayes theorem example medical test
@study
## Knowledge-based agents
A **knowledge base (KB)** stores facts and rules; an **inference engine** derives new facts. Representations: propositional logic, first-order logic (FOL), semantic networks, frames, production rules (IF–THEN).

## Logic recap
- **Propositional logic** uses true/false statements. Rule: `Rain → WetGround`. Inference rules: **modus ponens** (from P and P → Q, conclude Q), modus tollens, resolution.
- **First-order logic** adds objects, predicates, quantifiers: ∀x (Human(x) → Mortal(x)), Human(Socrates) ⊢ Mortal(Socrates).
- **Forward chaining** (data-driven) and **backward chaining** (goal-driven, used in Prolog).

## Expert systems
Knowledge base + inference engine + user interface (+ explanation facility). Examples: MYCIN (medical diagnosis), early troubleshooting systems. Weakness: knowledge acquisition is hard and rules are brittle.

## Uncertainty
Real data is noisy, so we use probability.
- **Conditional probability:** P(A|B) = P(A ∩ B)/P(B).
- **Bayes' theorem:** P(H|E) = P(E|H)·P(H) / P(E).

### Worked example
A disease affects 1% of people. A test is positive for 90% of sick people (sensitivity) and falsely positive for 5% of healthy people.
P(positive) = 0.9·0.01 + 0.05·0.99 = 0.0585.
P(disease | positive) = 0.009 / 0.0585 ≈ **0.154 (15.4%)**.
Even after a positive test the chance of disease is only about 15%, because the disease is rare. This is the **base-rate effect**.
```python
pd, sens, fpr = 0.01, 0.90, 0.05
p_pos = sens * pd + fpr * (1 - pd)
print(round(sens * pd / p_pos, 4))
```
Output:
```
0.1538
```

## Naive Bayes idea
Assume features are independent given the class: P(C | x1..xn) ∝ P(C)·ΠP(xi | C). Works well for spam filtering and text.

## Bayesian networks
A directed acyclic graph where nodes are random variables and edges show direct influence; each node has a conditional probability table. Used in diagnosis and risk models.

## Fuzzy logic
Truth values between 0 and 1 ("fairly hot = 0.7"), used in washing machines, AC controllers.

## Natural language and vision (preview)
Tokenisation, embeddings, transformers for text; convolutional networks for images.

> Bayes' rule updates belief using evidence; rare events stay unlikely even after a positive test.
@qa
Q: What is modus ponens?
A: An inference rule: from P and P → Q, infer Q.
Q: Difference between forward and backward chaining?
A: Forward chaining starts with known facts and applies rules to derive new facts; backward chaining starts from a goal and works back to find supporting facts.
Q: State Bayes' theorem.
A: P(H|E) = P(E|H)·P(H) / P(E).
Q: Why is the probability of disease only about 15% after a positive test in the example?
A: The disease is rare (1%), so most positive results come from the large healthy group with false positives. This is the base-rate effect.
Q: What is the naive assumption in Naive Bayes?
A: That all features are conditionally independent given the class.
@quiz
? In the disease example, P(disease | positive) is about
- 90%
- 50%
+ 15%
- 1%
! 0.009 / 0.0585 = 0.154.
? Forward chaining is
- goal-driven
+ data-driven
- random
- impossible
! It begins with known facts.
? Which is used by spam filters?
- A* search
+ Naive Bayes
- Minimax
- Hill climbing
! It multiplies word likelihoods per class.
? First-order logic adds to propositional logic
- nothing
+ objects, predicates and quantifiers
- probabilities
- neurons
! This allows ∀ and ∃ statements.
? Fuzzy logic uses truth values
- only 0 or 1
+ between 0 and 1
- negative only
- complex only
! It handles partial truth.

@visual
formula | Bayes' theorem | P(H | E) = P(E | H) x P(H) / P(E) ; posterior = likelihood x prior / evidence

@problems
## Moderate
P: Give one example each of a propositional logic sentence and a first-order logic sentence for "All students who study pass". Why is first-order logic more expressive?
A: Propositional: StudiesHard implies Passes (it talks about one fixed case). First-order: for all x (Student(x) AND Studies(x) implies Passes(x)). First-order logic has objects, predicates and quantifiers, so it can talk about all or some members of a group instead of one fixed fact.
R: 2 | Both sentences
R: 2 | Reason: objects, predicates and quantifiers
## High
P: A disease affects 1% of people. A test detects it 95% of the time when present and gives a false positive 5% of the time. If a person tests positive, what is the probability of having the disease?
A: P(+) = 0.95 x 0.01 + 0.05 x 0.99 = 0.0095 + 0.0495 = 0.059. P(D | +) = 0.0095 / 0.059 = 0.161, about 16.1%. Most positive results are false positives because the disease is rare.
R: 2 | P(+) = 0.059
R: 2 | Posterior 16.1%
R: 1 | Explanation about the low base rate
## Advanced
P: The same person takes a second independent test and it is also positive. Update the probability. Explain why the prior matters.
A: The new prior is 0.161, so the odds are 0.161 / 0.839 = 0.192. Each positive result multiplies the odds by the likelihood ratio 0.95 / 0.05 = 19, so the odds become 0.192 x 19 = 3.65 and the probability is 3.65 / 4.65 = about 0.785 (78.5%).
The prior matters because a rare condition needs strong evidence; ignoring it (the base rate fallacy) makes a positive test look far more convincing than it is.
R: 2 | Odds update with ratio 19
R: 2 | About 78.5 percent
R: 1 | Base rate fallacy

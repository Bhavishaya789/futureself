# Probability
minutes: 45
yt: class 12 maths probability conditional probability bayes theorem independent events random variable binomial distribution mean variance
@study
Probability measures the likelihood of an event. The conditional probability of E given F, with P(F) not zero, is P(E|F) = P(E intersection F)/P(F). Properties: 0 <= P(E|F) <= 1, P(S|F) = P(F|F) = 1, and P((E union G)|F) = P(E|F) + P(G|F) - P((E intersection G)|F). The multiplication theorem says P(E intersection F) = P(E) P(F|E) = P(F) P(E|F). Events E and F are independent if P(E intersection F) = P(E) P(F); independence is different from mutual exclusion. If E and F are independent, so are E and F complement, and E complement and F complement. Three events are mutually independent if they are pairwise independent and P(A intersection B intersection C) = P(A)P(B)P(C). A partition of a sample space is a set of mutually exclusive, exhaustive events with positive probability. The theorem of total probability says P(A) = sum of P(Ei) P(A|Ei). Bayes’ theorem says P(Ei|A) = P(Ei) P(A|Ei) / sum of P(Ej) P(A|Ej); P(Ei) are priors and P(Ei|A) are posteriors. A random variable is a real-valued function defined on the sample space. The probability distribution lists values and probabilities, with sum of probabilities equal to 1. The mean or expectation is E(X) = sum of xi pi and the variance is Var(X) = sum of xi^2 pi minus (E(X))^2, with standard deviation the square root of variance. A Bernoulli trial has two outcomes, success and failure. The binomial distribution B(n, p) gives P(X = r) = nCr p^r q^(n - r) with q = 1 - p, and mean np and variance npq. Conditions are a fixed number n of independent trials with the same probability p. Problems include drawing cards or balls with and without replacement, the probability of at least one success is 1 minus q^n, and the use of tree diagrams.
## Deep dive: Conditional probability
P(E|F) = P(E and F)/P(F); the multiplication rule follows directly.
## Deep dive: Independence and Bayes
Independent events satisfy P(E and F) = P(E)P(F); Bayes’ theorem reverses conditioning using total probability.
## Deep dive: Distributions
Random variables have mean and variance; the binomial distribution has mean np and variance npq.
## Hindi saransh
Prayikta: sapeksh prayikta, swatantra ghatna, Bayes pramey, yaadrichik chara aur dwipad vitaran.
> Remember: binomial mean np; variance npq.
@formulas
## Key results
Conditional | P(E | F) = P(E and F)/P(F)
Independent | P(E and F) = P(E)P(F)
Total probability | sum P(Ei)P(A | Ei)
Bayes | P(Ei)P(A | Ei)/P(A)
Binomial | nCr p^r q^(n-r)

@qa
Q: Which is P of E given F?
A: Conditional probability is P of E given F.
Q: What do you know about Conditional probability?
A: Conditional probability is P of E given F.
Q: Which is P of E and F over P of F?
A: Conditional formula is P of E and F over P of F.
Q: What do you know about Conditional formula?
A: Conditional formula is P of E and F over P of F.
Q: Which requires P of F greater than zero?
A: Condition on F requires P of F greater than zero.
Q: What do you know about Condition on F?
A: Condition on F requires P of F greater than zero.
Q: Which occurs when F is given?
A: Sample space reduction occurs when F is given.
Q: What do you know about Sample space reduction?
A: Sample space reduction occurs when F is given.
Q: Which P of E and F equals P of E times P of F given E?
A: Multiplication theorem P of E and F equals P of E times P of F given E.
Q: What do you know about Multiplication theorem?
A: Multiplication theorem P of E and F equals P of E times P of F given E.
Q: Which P of E complement given F equals one minus P of E given F?
A: Complement rule P of E complement given F equals one minus P of E given F.
Q: What do you know about Complement rule?
A: Complement rule P of E complement given F equals one minus P of E given F.
Q: Which lie between zero and one?
A: Conditional bounds lie between zero and one.
Q: What do you know about Conditional bounds?
A: Conditional bounds lie between zero and one.
Q: Which P of S given F equals one?
A: Conditional of sample space P of S given F equals one.
Q: What do you know about Conditional of sample space?
A: Conditional of sample space P of S given F equals one.
Q: Which follows the usual addition rule?
A: Conditional addition follows the usual addition rule.
Q: What do you know about Conditional addition?
A: Conditional addition follows the usual addition rule.
Q: Which shows sequential conditional probabilities?
A: Tree diagram shows sequential conditional probabilities.
Q: What do you know about Tree diagram?
A: Tree diagram shows sequential conditional probabilities.
Q: Which satisfy P of E and F equals P of E times P of F?
A: Independent events satisfy P of E and F equals P of E times P of F.
Q: What do you know about Independent events?
A: Independent events satisfy P of E and F equals P of E times P of F.
Q: Which events cannot occur together?
A: Mutually exclusive events cannot occur together.
Q: What do you know about Mutually exclusive?
A: Mutually exclusive events cannot occur together.
Q: Which are different notions?
A: Independent versus exclusive are different notions.
Q: What do you know about Independent versus exclusive?
A: Independent versus exclusive are different notions.
Q: Which E and F complement are independent?
A: Independent complements E and F complement are independent.
Q: What do you know about Independent complements?
A: Independent complements E and F complement are independent.
Q: Which tests pairs only?
A: Pairwise independence tests pairs only.
Q: What do you know about Pairwise independence?
A: Pairwise independence tests pairs only.
Q: Which needs the triple product rule too?
A: Mutual independence needs the triple product rule too.
Q: What do you know about Mutual independence?
A: Mutual independence needs the triple product rule too.
Q: Which gives independent draws?
A: Sampling with replacement gives independent draws.
Q: What do you know about Sampling with replacement?
A: Sampling with replacement gives independent draws.
Q: Which gives dependent draws?
A: Sampling without replacement gives dependent draws.
Q: What do you know about Sampling without replacement?
A: Sampling without replacement gives dependent draws.
Q: Which are independent?
A: Coin tosses are independent.
Q: What do you know about Coin tosses?
A: Coin tosses are independent.
Q: What do you know about Dice throws?
A: Dice throws are independent.
Q: Which is a set of mutually exclusive exhaustive events?
A: Partition is a set of mutually exclusive exhaustive events.
Q: What do you know about Partition?
A: Partition is a set of mutually exclusive exhaustive events.
Q: Which is P of Ei before the evidence?
A: Prior probability is P of Ei before the evidence.
Q: What do you know about Prior probability?
A: Prior probability is P of Ei before the evidence.
Q: Which is P of Ei given A?
A: Posterior probability is P of Ei given A.
Q: What do you know about Posterior probability?
A: Posterior probability is P of Ei given A.
Q: Which is sum of P of Ei times P of A given Ei?
A: Total probability is sum of P of Ei times P of A given Ei.
Q: What do you know about Total probability?
A: Total probability is sum of P of Ei times P of A given Ei.
Q: Which reverses conditional probability?
A: Bayes theorem reverses conditional probability.
Q: What do you know about Bayes theorem?
A: Bayes theorem reverses conditional probability.
Q: Which P of Ei times P of A given Ei over total probability?
A: Bayes formula P of Ei times P of A given Ei over total probability.
Q: What do you know about Bayes formula?
A: Bayes formula P of Ei times P of A given Ei over total probability.
Q: Which is P of A given Ei?
A: Likelihood is P of A given Ei.
Q: What do you know about Likelihood?
A: Likelihood is P of A given Ei.
Q: Which is the total probability of A?
A: Normalising constant is the total probability of A.
Q: What do you know about Normalising constant?
A: Normalising constant is the total probability of A.
Q: Which is a Bayes application?
A: Diagnostic test is a Bayes application.
Q: What do you know about Diagnostic test?
A: Diagnostic test is a Bayes application.
Q: What do you know about Urn problem?
A: Urn problem is a Bayes application.
Q: Which is a real valued function on the sample space?
A: Random variable is a real valued function on the sample space.
Q: What do you know about Random variable?
A: Random variable is a real valued function on the sample space.
Q: Which lists values and probabilities?
A: Probability distribution lists values and probabilities.
Q: What do you know about Probability distribution?
A: Probability distribution lists values and probabilities.
Q: Which equals one?
A: Sum of probabilities equals one.
Q: What do you know about Sum of probabilities?
A: Sum of probabilities equals one.
Q: Which is sum of x times p?
A: Mean is sum of x times p.
Q: What do you know about Mean?
A: Mean is sum of x times p.
Q: Which is another name for the mean?
A: Expectation is another name for the mean.
Q: What do you know about Expectation?
A: Expectation is another name for the mean.
Q: Which is E of X squared minus E of X squared?
A: Variance is E of X squared minus E of X squared.
Q: What do you know about Variance?
A: Variance is E of X squared minus E of X squared.
Q: Which is the square root of the variance?
A: Standard deviation is the square root of the variance.
Q: What do you know about Standard deviation?
A: Standard deviation is the square root of the variance.
Q: Which takes separate values?
A: Discrete variable takes separate values.
Q: What do you know about Discrete variable?
A: Discrete variable takes separate values.
Q: Which gives P of X equals x?
A: Probability mass function gives P of X equals x.
Q: What do you know about Probability mass function?
A: Probability mass function gives P of X equals x.
Q: Which is the constant?
A: Expected value of constant is the constant.
Q: What do you know about Expected value of constant?
A: Expected value of constant is the constant.
Q: Which has two outcomes success or failure?
A: Bernoulli trial has two outcomes success or failure.
Q: What do you know about Bernoulli trial?
A: Bernoulli trial has two outcomes success or failure.
Q: Which counts successes in n independent trials?
A: Binomial distribution counts successes in n independent trials.
Q: What do you know about Binomial distribution?
A: Binomial distribution counts successes in n independent trials.
Q: Which P of r equals nCr p to r q to n minus r?
A: Binomial formula P of r equals nCr p to r q to n minus r.
Q: What do you know about Binomial formula?
A: Binomial formula P of r equals nCr p to r q to n minus r.
Q: Which is n p?
A: Binomial mean is n p.
Q: What do you know about Binomial mean?
A: Binomial mean is n p.
Q: Which is n p q?
A: Binomial variance is n p q.
Q: What do you know about Binomial variance?
A: Binomial variance is n p q.
Q: Which equals one minus p?
A: Binomial q equals one minus p.
Q: What do you know about Binomial q?
A: Binomial q equals one minus p.
Q: Which are required for a binomial?
A: Fixed trials are required for a binomial.
Q: What do you know about Fixed trials?
A: Fixed trials are required for a binomial.
Q: Which is required for a binomial?
A: Same probability is required for a binomial.
Q: What do you know about Same probability?
A: Same probability is required for a binomial.
Q: Which has probability one minus q to the n?
A: At least one success has probability one minus q to the n.
Q: What do you know about At least one success?
A: At least one success has probability one minus q to the n.
Q: Which is nCr?
A: Binomial coefficient is nCr.
Q: What do you know about Binomial coefficient?
A: Binomial coefficient is nCr.
Q: Which gives probabilities of suits and ranks?
A: Card draw gives probabilities of suits and ranks.
Q: What do you know about Card draw?
A: Card draw gives probabilities of suits and ranks.
Q: Which uses combinations?
A: Ball draw uses combinations.
Q: What do you know about Ball draw?
A: Ball draw uses combinations.
Q: Which uses a sample space of thirty six?
A: Dice problem uses a sample space of thirty six.
Q: What do you know about Dice problem?
A: Dice problem uses a sample space of thirty six.
Q: Which has probability one sixth for two dice?
A: Sum of seven has probability one sixth for two dice.
Q: What do you know about Sum of seven?
A: Sum of seven has probability one sixth for two dice.
Q: Which uses the binomial for repeated tosses?
A: Coin problem uses the binomial for repeated tosses.
Q: What do you know about Coin problem?
A: Coin problem uses the binomial for repeated tosses.
Q: Which lead to hypergeometric style counting?
A: Defective items lead to hypergeometric style counting.
Q: What do you know about Defective items?
A: Defective items lead to hypergeometric style counting.
Q: Which uses probability of events?
A: Insurance uses probability of events.
Q: What do you know about Insurance?
A: Insurance uses probability of events.
Q: Which uses Bayes theorem?
A: Medical test uses Bayes theorem.
Q: What do you know about Medical test?
A: Medical test uses Bayes theorem.
Q: Which uses binomial probabilities?
A: Quality control uses binomial probabilities.
Q: What do you know about Quality control?
A: Quality control uses binomial probabilities.
Q: Which use probability models?
A: Games of chance use probability models.
Q: What do you know about Games of chance?
A: Games of chance use probability models.
Q: What is conditional probability?
A: The probability of an event given that another has occurred.
Q: When are two events independent?
A: When P(E and F) = P(E) P(F).
Q: Are independent events mutually exclusive?
A: No, they are different concepts.
Q: State Bayes’ theorem.
A: P(Ei|A) = P(Ei) P(A|Ei) divided by the sum of P(Ej) P(A|Ej).
Q: What is a random variable?
A: A real-valued function defined on the sample space.
Q: What are the mean and variance of a binomial distribution?
A: Mean np and variance npq.
Q: What is the probability of at least one success in n trials?
A: 1 - q^n.
Q: What is the sum of probabilities in a distribution?
A: One.
@quiz
? Which is P of E given F?
- Tree diagram
+ Conditional probability
- Conditional formula
- Conditional of sample space
! Conditional probability is P of E given F.
? Which statement is true of Conditional probability?
+ Is P of E given F
- Lie between zero and one
- P of E and F equals P of E times P of F given E
- Requires P of F greater than zero
! Conditional probability is P of E given F.
? Which is P of E and F over P of F?
- Tree diagram
- Conditional addition
+ Conditional formula
- Complement rule
! Conditional formula is P of E and F over P of F.
? Which statement is true of Conditional formula?
- Shows sequential conditional probabilities
+ Is P of E and F over P of F
- Is P of E given F
- P of S given F equals one
! Conditional formula is P of E and F over P of F.
? Which requires P of F greater than zero?
+ Condition on F
- Tree diagram
- Conditional bounds
- Sample space reduction
! Condition on F requires P of F greater than zero.
? Which statement is true of Condition on F?
- Is P of E and F over P of F
- Lie between zero and one
- Is P of E given F
+ Requires P of F greater than zero
! Condition on F requires P of F greater than zero.
? Which occurs when F is given?
- Tree diagram
- Condition on F
+ Sample space reduction
- Multiplication theorem
! Sample space reduction occurs when F is given.
? Which statement is true of Sample space reduction?
+ Occurs when F is given
- Requires P of F greater than zero
- Is P of E given F
- P of E and F equals P of E times P of F given E
! Sample space reduction occurs when F is given.
? Which P of E and F equals P of E times P of F given E?
- Condition on F
- Conditional addition
- Tree diagram
+ Multiplication theorem
! Multiplication theorem P of E and F equals P of E times P of F given E.
? Which statement is true of Multiplication theorem?
+ P of E and F equals P of E times P of F given E
- Is P of E given F
- Shows sequential conditional probabilities
- Requires P of F greater than zero
! Multiplication theorem P of E and F equals P of E times P of F given E.
? Which P of E complement given F equals one minus P of E given F?
- Condition on F
+ Complement rule
- Conditional bounds
- Conditional formula
! Complement rule P of E complement given F equals one minus P of E given F.
? Which statement is true of Complement rule?
- P of E and F equals P of E times P of F given E
- Requires P of F greater than zero
+ P of E complement given F equals one minus P of E given F
- Occurs when F is given
! Complement rule P of E complement given F equals one minus P of E given F.
? Which lie between zero and one?
+ Conditional bounds
- Conditional probability
- Multiplication theorem
- Tree diagram
! Conditional bounds lie between zero and one.
? Which statement is true of Conditional bounds?
- Is P of E given F
- Occurs when F is given
+ Lie between zero and one
- Follows the usual addition rule
! Conditional bounds lie between zero and one.
? Which P of S given F equals one?
+ Conditional of sample space
- Multiplication theorem
- Conditional formula
- Sample space reduction
! Conditional of sample space P of S given F equals one.
? Which statement is true of Conditional of sample space?
+ P of S given F equals one
- Is P of E given F
- P of E and F equals P of E times P of F given E
- Is P of E and F over P of F
! Conditional of sample space P of S given F equals one.
? Which follows the usual addition rule?
- Multiplication theorem
- Conditional bounds
+ Conditional addition
- Sample space reduction
! Conditional addition follows the usual addition rule.
? Which statement is true of Conditional addition?
- Occurs when F is given
- Lie between zero and one
- P of S given F equals one
+ Follows the usual addition rule
! Conditional addition follows the usual addition rule.
? Which shows sequential conditional probabilities?
- Conditional of sample space
- Conditional bounds
+ Tree diagram
- Condition on F
! Tree diagram shows sequential conditional probabilities.
? Which statement is true of Tree diagram?
- Requires P of F greater than zero
- P of E complement given F equals one minus P of E given F
+ Shows sequential conditional probabilities
- P of S given F equals one
! Tree diagram shows sequential conditional probabilities.
? Which satisfy P of E and F equals P of E times P of F?
+ Independent events
- Independent versus exclusive
- Pairwise independence
- Mutually exclusive
! Independent events satisfy P of E and F equals P of E times P of F.
? Which statement is true of Independent events?
- Gives dependent draws
- Are different notions
- Are independent
+ Satisfy P of E and F equals P of E times P of F
! Independent events satisfy P of E and F equals P of E times P of F.
? Which events cannot occur together?
- Dice throws
+ Mutually exclusive
- Pairwise independence
- Sampling without replacement
! Mutually exclusive events cannot occur together.
? Which statement is true of Mutually exclusive?
- Needs the triple product rule too
- E and F complement are independent
+ Events cannot occur together
- Are independent
! Mutually exclusive events cannot occur together.
? Which are different notions?
- Coin tosses
- Sampling without replacement
+ Independent versus exclusive
- Mutually exclusive
! Independent versus exclusive are different notions.
? Which statement is true of Independent versus exclusive?
- Gives dependent draws
+ Are different notions
- Satisfy P of E and F equals P of E times P of F
- Tests pairs only
! Independent versus exclusive are different notions.
? Which E and F complement are independent?
- Coin tosses
- Independent versus exclusive
+ Independent complements
- Independent events
! Independent complements E and F complement are independent.
? Which statement is true of Independent complements?
- Events cannot occur together
+ E and F complement are independent
- Gives independent draws
- Gives dependent draws
! Independent complements E and F complement are independent.
? Which tests pairs only?
- Mutually exclusive
- Sampling with replacement
+ Pairwise independence
- Independent events
! Pairwise independence tests pairs only.
? Which statement is true of Pairwise independence?
- Events cannot occur together
- Needs the triple product rule too
+ Tests pairs only
- Satisfy P of E and F equals P of E times P of F
! Pairwise independence tests pairs only.
? Which needs the triple product rule too?
- Independent complements
+ Mutual independence
- Mutually exclusive
- Dice throws
! Mutual independence needs the triple product rule too.
? Which statement is true of Mutual independence?
- Gives dependent draws
+ Needs the triple product rule too
- Are independent
- Satisfy P of E and F equals P of E times P of F
! Mutual independence needs the triple product rule too.
? Which gives independent draws?
+ Sampling with replacement
- Mutually exclusive
- Dice throws
- Sampling without replacement
! Sampling with replacement gives independent draws.
? Which statement is true of Sampling with replacement?
+ Gives independent draws
- Needs the triple product rule too
- Tests pairs only
- Are different notions
! Sampling with replacement gives independent draws.
? Which gives dependent draws?
- Independent complements
+ Sampling without replacement
- Mutual independence
- Dice throws
! Sampling without replacement gives dependent draws.
? Which statement is true of Sampling without replacement?
- Tests pairs only
+ Gives dependent draws
- Gives independent draws
- Events cannot occur together
! Sampling without replacement gives dependent draws.
? Which are independent?
+ Coin tosses
- Sampling with replacement
- Mutual independence
- Dice throws
! Coin tosses are independent.
? Which statement is true of Coin tosses?
+ Are independent
- Tests pairs only
- Events cannot occur together
- E and F complement are independent
! Coin tosses are independent.
? Which statement is true of Dice throws?
- Are different notions
- Satisfy P of E and F equals P of E times P of F
- E and F complement are independent
+ Are independent
! Dice throws are independent.
? Which is a set of mutually exclusive exhaustive events?
- Normalising constant
- Bayes formula
+ Partition
- Diagnostic test
! Partition is a set of mutually exclusive exhaustive events.
? Which statement is true of Partition?
- Is P of Ei before the evidence
- Is P of Ei given A
- Is the total probability of A
+ Is a set of mutually exclusive exhaustive events
! Partition is a set of mutually exclusive exhaustive events.
? Which is P of Ei before the evidence?
+ Prior probability
- Partition
- Bayes formula
- Normalising constant
! Prior probability is P of Ei before the evidence.
? Which statement is true of Prior probability?
- Is the total probability of A
- Is a Bayes application
+ Is P of Ei before the evidence
- Is P of A given Ei
! Prior probability is P of Ei before the evidence.
? Which is P of Ei given A?
+ Posterior probability
- Prior probability
- Diagnostic test
- Likelihood
! Posterior probability is P of Ei given A.
? Which statement is true of Posterior probability?
- Is sum of P of Ei times P of A given Ei
- Reverses conditional probability
+ Is P of Ei given A
- P of Ei times P of A given Ei over total probability
! Posterior probability is P of Ei given A.
? Which is sum of P of Ei times P of A given Ei?
- Prior probability
+ Total probability
- Bayes formula
- Bayes theorem
! Total probability is sum of P of Ei times P of A given Ei.
? Which statement is true of Total probability?
- Is the total probability of A
+ Is sum of P of Ei times P of A given Ei
- Is P of Ei before the evidence
- Is a set of mutually exclusive exhaustive events
! Total probability is sum of P of Ei times P of A given Ei.
? Which reverses conditional probability?
- Posterior probability
- Partition
+ Bayes theorem
- Normalising constant
! Bayes theorem reverses conditional probability.
? Which statement is true of Bayes theorem?
+ Reverses conditional probability
- Is sum of P of Ei times P of A given Ei
- Is P of Ei given A
- Is the total probability of A
! Bayes theorem reverses conditional probability.
? Which P of Ei times P of A given Ei over total probability?
+ Bayes formula
- Posterior probability
- Urn problem
- Partition
! Bayes formula P of Ei times P of A given Ei over total probability.
? Which statement is true of Bayes formula?
- Is the total probability of A
- Is P of Ei given A
- Is sum of P of Ei times P of A given Ei
+ P of Ei times P of A given Ei over total probability
! Bayes formula P of Ei times P of A given Ei over total probability.
? Which is P of A given Ei?
- Bayes theorem
+ Likelihood
- Posterior probability
- Diagnostic test
! Likelihood is P of A given Ei.
? Which statement is true of Likelihood?
- Is the total probability of A
- Is P of Ei before the evidence
+ Is P of A given Ei
- P of Ei times P of A given Ei over total probability
! Likelihood is P of A given Ei.
? Which is the total probability of A?
- Prior probability
- Urn problem
+ Normalising constant
- Diagnostic test
! Normalising constant is the total probability of A.
? Which statement is true of Normalising constant?
- P of Ei times P of A given Ei over total probability
+ Is the total probability of A
- Reverses conditional probability
- Is a Bayes application
! Normalising constant is the total probability of A.
? Which is a Bayes application?
- Bayes theorem
- Urn problem
+ Diagnostic test
- Normalising constant
! Diagnostic test is a Bayes application.
? Which statement is true of Diagnostic test?
- Is P of A given Ei
- Is the total probability of A
+ Is a Bayes application
- Reverses conditional probability
! Diagnostic test is a Bayes application.
? Which statement is true of Urn problem?
+ Is a Bayes application
- P of Ei times P of A given Ei over total probability
- Is the total probability of A
- Is P of Ei given A
! Urn problem is a Bayes application.
? Which is a real valued function on the sample space?
+ Random variable
- Probability distribution
- Variance
- Expected value of constant
! Random variable is a real valued function on the sample space.
? Which statement is true of Random variable?
- Gives P of X equals x
+ Is a real valued function on the sample space
- Is E of X squared minus E of X squared
- Equals one
! Random variable is a real valued function on the sample space.
? Which lists values and probabilities?
- Expectation
+ Probability distribution
- Discrete variable
- Sum of probabilities
! Probability distribution lists values and probabilities.
? Which statement is true of Probability distribution?
- Is the square root of the variance
+ Lists values and probabilities
- Is a real valued function on the sample space
- Is E of X squared minus E of X squared
! Probability distribution lists values and probabilities.
? Which equals one?
- Expected value of constant
- Standard deviation
+ Sum of probabilities
- Probability distribution
! Sum of probabilities equals one.
? Which statement is true of Sum of probabilities?
- Is the square root of the variance
- Gives P of X equals x
+ Equals one
- Is a real valued function on the sample space
! Sum of probabilities equals one.
? Which is sum of x times p?
+ Mean
- Probability mass function
- Standard deviation
- Expectation
! Mean is sum of x times p.
? Which statement is true of Mean?
- Is another name for the mean
- Equals one
- Is the constant
+ Is sum of x times p
! Mean is sum of x times p.
? Which is another name for the mean?
+ Expectation
- Discrete variable
- Standard deviation
- Random variable
! Expectation is another name for the mean.
? Which statement is true of Expectation?
- Is E of X squared minus E of X squared
- Is a real valued function on the sample space
- Takes separate values
+ Is another name for the mean
! Expectation is another name for the mean.
? Which is E of X squared minus E of X squared?
- Expected value of constant
- Random variable
+ Variance
- Probability mass function
! Variance is E of X squared minus E of X squared.
? Which statement is true of Variance?
- Is the constant
- Is another name for the mean
+ Is E of X squared minus E of X squared
- Gives P of X equals x
! Variance is E of X squared minus E of X squared.
? Which is the square root of the variance?
- Variance
- Discrete variable
- Sum of probabilities
+ Standard deviation
! Standard deviation is the square root of the variance.
? Which statement is true of Standard deviation?
- Gives P of X equals x
- Is E of X squared minus E of X squared
+ Is the square root of the variance
- Equals one
! Standard deviation is the square root of the variance.
? Which takes separate values?
- Standard deviation
- Sum of probabilities
- Expected value of constant
+ Discrete variable
! Discrete variable takes separate values.
? Which statement is true of Discrete variable?
- Is a real valued function on the sample space
- Lists values and probabilities
- Is the square root of the variance
+ Takes separate values
! Discrete variable takes separate values.
? Which gives P of X equals x?
+ Probability mass function
- Sum of probabilities
- Expectation
- Standard deviation
! Probability mass function gives P of X equals x.
? Which statement is true of Probability mass function?
+ Gives P of X equals x
- Is the constant
- Equals one
- Lists values and probabilities
! Probability mass function gives P of X equals x.
? Which is the constant?
- Discrete variable
+ Expected value of constant
- Probability distribution
- Sum of probabilities
! Expected value of constant is the constant.
? Which statement is true of Expected value of constant?
- Is another name for the mean
+ Is the constant
- Is E of X squared minus E of X squared
- Is the square root of the variance
! Expected value of constant is the constant.
? Which has two outcomes success or failure?
- At least one success
- Binomial variance
+ Bernoulli trial
- Binomial distribution
! Bernoulli trial has two outcomes success or failure.
? Which statement is true of Bernoulli trial?
- Are required for a binomial
- Counts successes in n independent trials
+ Has two outcomes success or failure
- P of r equals nCr p to r q to n minus r
! Bernoulli trial has two outcomes success or failure.
? Which counts successes in n independent trials?
+ Binomial distribution
- Binomial q
- Binomial formula
- At least one success
! Binomial distribution counts successes in n independent trials.
? Which statement is true of Binomial distribution?
- Is n p
+ Counts successes in n independent trials
- Is nCr
- Is n p q
! Binomial distribution counts successes in n independent trials.
? Which P of r equals nCr p to r q to n minus r?
- Binomial coefficient
- At least one success
+ Binomial formula
- Binomial q
! Binomial formula P of r equals nCr p to r q to n minus r.
? Which statement is true of Binomial formula?
+ P of r equals nCr p to r q to n minus r
- Is n p
- Is required for a binomial
- Has two outcomes success or failure
! Binomial formula P of r equals nCr p to r q to n minus r.
? Which is n p?
+ Binomial mean
- Binomial formula
- Binomial distribution
- Same probability
! Binomial mean is n p.
? Which statement is true of Binomial mean?
- Equals one minus p
- P of r equals nCr p to r q to n minus r
- Has probability one minus q to the n
+ Is n p
! Binomial mean is n p.
? Which is n p q?
- Binomial q
+ Binomial variance
- Binomial mean
- Binomial formula
! Binomial variance is n p q.
? Which statement is true of Binomial variance?
- Is n p
- Has probability one minus q to the n
+ Is n p q
- P of r equals nCr p to r q to n minus r
! Binomial variance is n p q.
? Which equals one minus p?
+ Binomial q
- Binomial coefficient
- Same probability
- Bernoulli trial
! Binomial q equals one minus p.
? Which statement is true of Binomial q?
- Is nCr
+ Equals one minus p
- Are required for a binomial
- Is required for a binomial
! Binomial q equals one minus p.
? Which are required for a binomial?
- At least one success
- Binomial mean
- Same probability
+ Fixed trials
! Fixed trials are required for a binomial.
? Which statement is true of Fixed trials?
+ Are required for a binomial
- P of r equals nCr p to r q to n minus r
- Has probability one minus q to the n
- Counts successes in n independent trials
! Fixed trials are required for a binomial.
? Which is required for a binomial?
+ Same probability
- At least one success
- Binomial coefficient
- Binomial distribution
! Same probability is required for a binomial.
? Which statement is true of Same probability?
- Equals one minus p
- Is n p
+ Is required for a binomial
- Has two outcomes success or failure
! Same probability is required for a binomial.
? Which has probability one minus q to the n?
+ At least one success
- Binomial formula
- Binomial q
- Same probability
! At least one success has probability one minus q to the n.
? Which statement is true of At least one success?
- Is n p
- Counts successes in n independent trials
- Has two outcomes success or failure
+ Has probability one minus q to the n
! At least one success has probability one minus q to the n.
? Which is nCr?
+ Binomial coefficient
- Binomial formula
- Same probability
- Bernoulli trial
! Binomial coefficient is nCr.
? Which statement is true of Binomial coefficient?
+ Is nCr
- Is n p q
- Has probability one minus q to the n
- Is n p
! Binomial coefficient is nCr.
? Which gives probabilities of suits and ranks?
+ Card draw
- Sum of seven
- Medical test
- Insurance
! Card draw gives probabilities of suits and ranks.
? Which statement is true of Card draw?
- Uses combinations
- Lead to hypergeometric style counting
- Uses Bayes theorem
+ Gives probabilities of suits and ranks
! Card draw gives probabilities of suits and ranks.
? Which uses combinations?
- Defective items
- Card draw
+ Ball draw
- Sum of seven
! Ball draw uses combinations.
? Which statement is true of Ball draw?
+ Uses combinations
- Lead to hypergeometric style counting
- Uses binomial probabilities
- Has probability one sixth for two dice
! Ball draw uses combinations.
? Which uses a sample space of thirty six?
+ Dice problem
- Insurance
- Games of chance
- Coin problem
! Dice problem uses a sample space of thirty six.
? Which statement is true of Dice problem?
- Uses binomial probabilities
- Gives probabilities of suits and ranks
- Uses Bayes theorem
+ Uses a sample space of thirty six
! Dice problem uses a sample space of thirty six.
? Which has probability one sixth for two dice?
+ Sum of seven
- Defective items
- Dice problem
- Games of chance
! Sum of seven has probability one sixth for two dice.
? Which statement is true of Sum of seven?
- Uses the binomial for repeated tosses
- Uses combinations
+ Has probability one sixth for two dice
- Lead to hypergeometric style counting
! Sum of seven has probability one sixth for two dice.
? Which uses the binomial for repeated tosses?
- Quality control
- Card draw
- Dice problem
+ Coin problem
! Coin problem uses the binomial for repeated tosses.
? Which statement is true of Coin problem?
- Uses a sample space of thirty six
+ Uses the binomial for repeated tosses
- Uses probability of events
- Gives probabilities of suits and ranks
! Coin problem uses the binomial for repeated tosses.
? Which lead to hypergeometric style counting?
+ Defective items
- Medical test
- Dice problem
- Quality control
! Defective items lead to hypergeometric style counting.
? Which statement is true of Defective items?
- Uses the binomial for repeated tosses
- Gives probabilities of suits and ranks
+ Lead to hypergeometric style counting
- Uses Bayes theorem
! Defective items lead to hypergeometric style counting.
? Which uses probability of events?
- Medical test
+ Insurance
- Games of chance
- Defective items
! Insurance uses probability of events.
? Which statement is true of Insurance?
- Uses a sample space of thirty six
- Use probability models
+ Uses probability of events
- Gives probabilities of suits and ranks
! Insurance uses probability of events.
? Which uses Bayes theorem?
- Insurance
- Sum of seven
+ Medical test
- Dice problem
! Medical test uses Bayes theorem.
? Which statement is true of Medical test?
- Has probability one sixth for two dice
- Uses the binomial for repeated tosses
- Uses combinations
+ Uses Bayes theorem
! Medical test uses Bayes theorem.
? Which uses binomial probabilities?
+ Quality control
- Insurance
- Medical test
- Ball draw
! Quality control uses binomial probabilities.
? Which statement is true of Quality control?
- Uses Bayes theorem
- Lead to hypergeometric style counting
- Uses the binomial for repeated tosses
+ Uses binomial probabilities
! Quality control uses binomial probabilities.
? Which use probability models?
+ Games of chance
- Dice problem
- Coin problem
- Ball draw
! Games of chance use probability models.
? Which statement is true of Games of chance?
- Uses the binomial for repeated tosses
- Uses a sample space of thirty six
- Lead to hypergeometric style counting
+ Use probability models
! Games of chance use probability models.
? Independent events
- P(E and F)=0
+ P(E and F)=P(E)P(F)
- P(E)=P(F)
- P(E or F)=1
! Product rule.
? Binomial mean
- npq
- n/p
- p/n
+ np
! np.
? Binomial variance
- np
- nq
- pq
+ npq
! npq.
? Bayes theorem gives
- Prior probability
+ Posterior probability
- Mean
- Variance
! Posterior.
? Sum of probabilities in distribution
+ 1
- 0
- 100
- n
! 1.
? P(E|F) formula uses
- P(E)/P(F)
+ P(E and F)/P(F)
- P(F)/P(E)
- P(E)P(F)
! Conditional.
@visual
flow | Bayes theorem | Partition events; Priors; Likelihoods; Total probability; Posterior
compare | Independent and mutually exclusive | Independent=P(E and F)=P(E)P(F); Exclusive=P(E and F)=0
blocks | Binomial | n trials; p success; q failure; r successes
steps | Mean and variance | List distribution; Compute sum x p; Compute sum x squared p; Subtract
mind | Probability | Conditional; Independence; Bayes; Distributions
@problems
## Moderate
P: State the formula for conditional probability.
A: P(E|F) = P(E intersection F)/P(F), where P(F) is not zero.
R: 3 | Intersection
R: 3 | P(F)
## High
P: Two dice are thrown. Find the probability that the sum is 8 given that the first shows 4.
A: Given first die 4, favourable sum 8 means second is 4, so probability is 1/6.
R: 2 | Sample space
R: 2 | First die 4
R: 2 | Second 4
R: 2 | 1/6
## Advanced
P: A coin is tossed 5 times. Find the probability of exactly 2 heads.
A: P = 5C2 (1/2)^5 = 10/32 = 5/16.
R: 2 | Binomial
R: 2 | 5C2
R: 2 | (1/2)^5
R: 2 | 5/16

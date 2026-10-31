# Hypothesis testing and confidence intervals
minutes: 25
yt: hypothesis testing p value explained
@study
A **hypothesis test** asks whether data is consistent with a **null hypothesis H0** (no effect). The **p-value** is the probability of results at least this extreme if H0 were true. If p < alpha (usually 0.05) we reject H0. A p-value is not the probability that H0 is true.
**z-test example:** n = 100, sample mean 52, mu0 = 50, sigma = 10. Standard error = 10/sqrt(100) = 1, so z = (52 - 50)/1 = **2**, two-sided p = **0.0455** (reject at 5%). A **95% confidence interval** is mean +/- 1.96 x SE = 52 +/- 1.96 = **(50.04, 53.96)**.
- **Type I error:** rejecting a true H0 (probability alpha). **Type II error:** missing a real effect (beta); power = 1 - beta.
- Use a **t-test** when sigma is unknown or n is small, **chi-square** for categorical counts, **ANOVA** for more than two means. In **A/B testing**, decide sample size before starting and avoid peeking.
```python
from math import sqrt, erf
z = (52 - 50) / (10 / sqrt(100))
p = 2 * (1 - 0.5 * (1 + erf(z / sqrt(2))))
print(z, round(p, 4), 52 - 1.96, 52 + 1.96)   # 2.0 0.0455 50.04 53.96
```
## Hindi saransh
H0 "koi asar nahi" hai. p-value chhota (<0.05) ho to H0 reject. Example mein z = 2, p = 0.0455. 95% confidence interval = (50.04, 53.96). p-value H0 ke sach hone ki sambhavna nahi hai.
> A small p-value shows the data is unlikely under H0; it does not measure the size or importance of an effect.
@qa
Q: What is a p-value?
A: The probability of seeing data at least as extreme as observed if the null hypothesis were true.
Q: What is a Type I error?
A: Rejecting a true null hypothesis; its probability is alpha.
Q: What does a 95% confidence interval mean?
A: If the procedure is repeated many times, about 95% of such intervals contain the true parameter.
Q: When do you use a t-test instead of a z-test?
A: When the population standard deviation is unknown, especially for small samples.
@quiz
? The z value for mean 52, mu0 50, sigma 10 and n = 100 is
- 0.2
- 1
+ 2
- 10
! (52 - 50)/(10/10).
? The two-sided p-value for z = 2 is about
- 0.5
- 0.1
+ 0.0455
- 0.95
! 2 x (1 - 0.9772).
? A p-value is
- the probability H0 is true
+ the probability of data this extreme if H0 is true
- the effect size
- the power
! Common misconception to avoid.
? Rejecting a true null hypothesis is a
+ Type I error
- Type II error
- power
- confidence level
! Probability alpha.
@visual
compare | Errors in testing | Type I=False alarm~Reject true H0~Probability alpha; Type II=Miss~Keep false H0~Probability beta
@problems
## Moderate
P: Compute the standard error for sigma 10 and n = 100.
A: 10/sqrt(100) = 1.
R: 1 | Formula
R: 1 | 1
## High
P: Build the 95% confidence interval for mean 52, SE 1.
A: 52 +/- 1.96 = (50.04, 53.96).
R: 1 | 1.96 x SE
R: 1 | Interval
## Advanced
P: Explain why peeking at an A/B test early inflates false positives.
A: Each repeated look is another test at alpha, so the chance that at least one shows p < 0.05 by luck rises well above 5%. Fix the sample size beforehand or use sequential-testing methods.
R: 2 | Multiple looks
R: 1 | Remedy

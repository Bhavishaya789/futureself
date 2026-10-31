# Descriptive statistics and probability
minutes: 25
yt: statistics for data science mean variance standard deviation
@study
**Central tendency:** mean, median, mode. **Spread:** range, variance, standard deviation (sd), IQR. For 2, 4, 4, 4, 5, 5, 7, 9: mean 5, population variance 4, population sd **2**, sample sd (divide by n - 1) = sqrt(32/7) = **2.138**. Use sample sd when the data is a sample.
**Probability basics:** P(A) between 0 and 1; P(A or B) = P(A) + P(B) - P(A and B); independent events multiply. **Conditional probability** P(A|B) = P(A and B)/P(B). **Bayes' theorem:** P(A|B) = P(B|A) P(A)/P(B). Example: a disease affects 1% of people; a test is 99% sensitive with a 5% false-positive rate. P(positive) = 0.99 x 0.01 + 0.05 x 0.99 = 0.0594, so P(disease | positive) = 0.0099/0.0594 = **16.7%**: a positive test is far from certain when the disease is rare.
The **normal distribution** has about 68% of values within 1 sd, 95% within 2 sd and 99.7% within 3 sd of the mean.
```python
import statistics as s
d = [2, 4, 4, 4, 5, 5, 7, 9]
print(s.pstdev(d), round(s.stdev(d), 3))   # 2.0 2.138
print(round(0.0099 / 0.0594, 3))           # 0.167
```
## Hindi saransh
Mean, median, mode kendra batate hain; sd failav. Bayes: P(A|B) = P(B|A)P(A)/P(B). Rare bimari mein positive test ke baad bhi sambhavna sirf 16.7%. Normal mein 68-95-99.7 niyam.
> Rare event + imperfect test = many false positives. Always use Bayes, not intuition.
@qa
Q: Difference between population and sample standard deviation?
A: Population divides by n; sample divides by n - 1 to correct for bias.
Q: State Bayes' theorem.
A: P(A|B) = P(B|A) P(A) / P(B).
Q: What does the 68-95-99.7 rule say?
A: In a normal distribution, about 68%, 95% and 99.7% of values lie within 1, 2 and 3 standard deviations of the mean.
Q: Why is a positive result of a good test still often a false alarm for a rare disease?
A: Because the healthy population is so large that even a small false-positive rate produces more false positives than true positives.
@quiz
? Population sd of 2, 4, 4, 4, 5, 5, 7, 9 is
- 1
+ 2
- 4
- 5
! Variance 4, sd 2.
? Sample sd of the same data is about
- 2.000
+ 2.138
- 3.2
- 4
! sqrt(32/7).
? P(disease | positive) in the example is about
- 99%
- 50%
+ 16.7%
- 5%
! 0.0099/0.0594.
? Within 2 sd of the mean a normal distribution holds about
- 68%
+ 95%
- 99.7%
- 50%
! The 68-95-99.7 rule.
@visual
formula | Bayes | P(A|B) = P(B|A) x P(A) / P(B)
curve | Normal curve (standard) | y = exp(-x*x/2)/sqrt(2*pi) ; -4 ; 4
@problems
## Moderate
P: Find the population variance of 2, 4, 4, 4, 5, 5, 7, 9.
A: Squared deviations sum to 32; 32/8 = 4.
R: 1 | Deviations
R: 1 | 4
## High
P: Compute P(disease | positive) for prevalence 1%, sensitivity 99% and false-positive rate 5%.
A: P(pos) = 0.0099 + 0.0495 = 0.0594; result 0.0099/0.0594 = 16.7%.
R: 1 | P(positive)
R: 2 | 16.7%
## Advanced
P: Explain why accuracy alone is misleading for a rare disease screening test.
A: A model that always says "healthy" is 99% accurate when prevalence is 1% yet finds no patients. Use sensitivity, precision and the base rate.
R: 2 | Always-healthy example
R: 1 | Better metrics

# Linear regression and gradient descent
minutes: 40
yt: linear regression least squares example
yt: gradient descent explained learning rate
@study
**Regression** predicts a continuous value. **Simple linear regression** fits y = a + b·x.

## Least squares
Choose a and b to minimise the sum of squared errors Σ(yᵢ − ŷᵢ)².
b = Σ(xᵢ − x̄)(yᵢ − ȳ) / Σ(xᵢ − x̄)², a = ȳ − b·x̄.

### Worked example
x = 1,2,3,4,5 (hours studied), y = 2,4,5,4,5 (marks/10).
x̄ = 3, ȳ = 4. Σ(x − x̄)(y − ȳ) = 6, Σ(x − x̄)² = 10, so **b = 0.6**, **a = 4 − 0.6·3 = 2.2**.
Prediction for x = 6: 2.2 + 0.6·6 = **5.8**.
```python
import numpy as np
x = np.array([1, 2, 3, 4, 5.]); y = np.array([2, 4, 5, 4, 5.])
b = ((x - x.mean()) * (y - y.mean())).sum() / ((x - x.mean()) ** 2).sum()
a = y.mean() - b * x.mean()
print(round(b, 3), round(a, 3), round(a + b * 6, 3))
```
Output:
```
0.6 2.2 5.8
```

## Multiple and polynomial regression
y = w0 + w1x1 + … + wnxn. Adding powers (x², x³) fits curves; too high a degree overfits. **Regularisation:** Ridge (L2) shrinks weights, Lasso (L1) can set weights to zero (feature selection).

## Evaluation metrics
MAE (mean absolute error), MSE, RMSE, and **R²** (fraction of variance explained, 1 is perfect).

## Gradient descent
An iterative way to minimise a loss: repeatedly move opposite to the gradient.
**w ← w − η · ∂L/∂w**, where η is the **learning rate**.
- Too small η: slow. Too large η: overshoots or diverges.
- Variants: batch (all data), **stochastic (one sample)**, mini-batch (small groups, most common).

### Worked example
Minimise L(w) = (w − 3)², gradient 2(w − 3), start w = 0, η = 0.1:
w₁ = 0.6, w₂ = 1.08, w₃ = 1.464, w₄ = 1.7712, w₅ = 2.017. The values approach the minimum at w = 3.
```python
w = 0.0
for _ in range(5):
    w -= 0.1 * 2 * (w - 3)
    print(round(w, 4), end=" ")
```
Output:
```
0.6 1.08 1.464 1.7712 2.017
```

## Logistic regression (classification)
Uses the **sigmoid** σ(z) = 1/(1 + e^(−z)) to turn a linear score into a probability between 0 and 1; classify as 1 if probability ≥ 0.5. Loss: cross-entropy.

> Gradient descent walks downhill on the loss surface; the learning rate is the step size.
@qa
Q: What does least squares minimise?
A: The sum of squared differences between actual and predicted values.
Q: Why is the learning rate important?
A: It sets the step size of gradient descent. If too small, training is very slow; if too large, the updates overshoot or diverge.
Q: Difference between Ridge and Lasso regression?
A: Ridge adds an L2 penalty that shrinks weights; Lasso adds an L1 penalty that can reduce some weights exactly to zero, performing feature selection.
Q: What does R-squared measure?
A: The proportion of the variance in the target explained by the model; 1 means a perfect fit.
Q: Why is logistic regression used for classification though called regression?
A: It models the probability of a class using the sigmoid of a linear function and then thresholds that probability.
@quiz
? In the worked example the slope b equals
- 0.5
+ 0.6
- 2.2
- 4
! 6 / 10 = 0.6.
? Gradient descent update rule
- w + η∇L
+ w − η∇L
- w × η
- w / ∇L
! Move against the gradient to reduce loss.
? Which regularisation can zero out coefficients?
- Ridge
+ Lasso
- None
- Dropout
! L1 gives sparse weights.
? Sigmoid outputs values in
- (−1, 1)
- (0, ∞)
+ (0, 1)
- (−∞, ∞)
! This is why it models probabilities.
? Mini-batch gradient descent uses
- the full dataset
- one sample
+ a small subset of samples per update
- no data
! A compromise between batch and stochastic.

@visual
curve | A loss function with one minimum at w = 3 (gradient descent walks downhill) | y = (x-3)^2 ; xmin=-1 ; xmax=7

@problems
## Moderate
P: For hours studied x = 1, 2, 3, 4, 5 and marks y = 2, 4, 5, 4, 5 the fitted line is y = 2.2 + 0.6x. Predict the mark for 6 hours and explain what the slope means.
A: y = 2.2 + 0.6 x 6 = 5.8. The slope 0.6 means each extra hour of study adds 0.6 marks (out of 10) on average.
R: 2 | Prediction 5.8
R: 2 | Slope interpretation
## High
P: The predictions of the line for x = 1 to 5 are 2.8, 3.4, 4.0, 4.6, 5.2. Compute the sum of squared errors and R squared. The mean of y is 4.
A: Errors (y - prediction): -0.8, 0.6, 1.0, -0.6, -0.2. Squares: 0.64, 0.36, 1.00, 0.36, 0.04, so SSE = 2.4. Total variation SST = sum of (y - 4)^2 = 4 + 0 + 1 + 0 + 1 = 6. R squared = 1 - 2.4 / 6 = 0.6, meaning the line explains 60% of the variation.
R: 2 | SSE 2.4
R: 2 | SST 6
R: 1 | R squared 0.6
## Advanced
P: Minimise L(w) = (w - 3)^2 by gradient descent from w = 0 with learning rate 0.1. Give w after two steps. What happens with learning rate 1.1?
A: Gradient = 2(w - 3). Step 1: gradient at 0 is -6, w = 0 - 0.1 x (-6) = 0.6. Step 2: gradient at 0.6 is -4.8, w = 0.6 + 0.48 = 1.08. It moves towards 3.
With rate 1.1: w1 = 0 + 6.6 = 6.6, then gradient 7.2 gives w2 = 6.6 - 7.92 = -1.32. Each step overshoots further (distance from 3 grows 3, 3.6, 4.32), so it diverges.
R: 2 | w = 0.6 then 1.08
R: 2 | Divergence with large rate
R: 1 | Explains overshooting

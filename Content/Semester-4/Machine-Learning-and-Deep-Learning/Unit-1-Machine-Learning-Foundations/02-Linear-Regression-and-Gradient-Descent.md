# Linear regression and gradient descent
minutes: 30
yt: linear regression gradient descent from scratch
yt: gradient descent explained
@study
**Linear regression** fits a straight line y = w x + b to data. For many features: y = w1 x1 + ... + wn xn + b.

## Loss function
**Mean squared error (MSE)** = (1/m) sum (prediction - actual)^2. Training means finding w and b that minimise MSE.

## Gradient descent
Repeat: w = w - alpha dL/dw and b = b - alpha dL/db, where **alpha** is the **learning rate**.
For MSE with y_hat = w x + b:
- dL/dw = (2/m) sum (y_hat - y) x
- dL/db = (2/m) sum (y_hat - y)

### Worked example
Data (1,3), (2,5), (3,7) (true line y = 2x + 1). Start w = 0, b = 0, alpha = 0.1.
| Iteration | MSE | dL/dw | dL/db | New w | New b |
| --- | --- | --- | --- | --- | --- |
| 0 | 27.6667 | -22.6667 | -10.0 | 2.2667 | 1.0 |
| 1 | 0.3319 | 2.4889 | 1.0667 | 2.0178 | 0.8933 |
| 2 | 0.0053 | -0.2607 | -0.1422 | 2.0439 | 0.9076 |
The loss collapses quickly and the parameters approach w = 2 and b = 1.

```python
import numpy as np
X = np.array([1, 2, 3.]); Y = np.array([3, 5, 7.]); w = b = 0.0; lr = 0.1
for i in range(3):
    e = w * X + b - Y
    print(i, round((e ** 2).mean(), 4))
    w -= lr * (2 * e * X).mean(); b -= lr * 2 * e.mean()
print(round(w, 4), round(b, 4))   # 2.0439 0.9076
```

## Choosing the learning rate
Too small: slow. Too large: overshoots and diverges. Common variants: batch, **stochastic (SGD)** (one sample at a time), **mini-batch**.

## Normal equation
w = (X^T X)^(-1) X^T y gives the answer directly but is expensive for many features.

## R-squared
R^2 = 1 - SS_res / SS_tot. 1 is perfect; 0 means no better than predicting the mean.

## Hindi saransh
Linear regression y = wx + b ko MSE minimise karke seekhte hain. Gradient descent mein parameters ko gradient ki ulti disha mein alpha step se badalte hain. Alpha bahut bada ho to diverge, bahut chhota ho to dheere.

> Gradient points uphill, so we subtract it to go downhill.
@qa
Q: What is the loss function used in linear regression?
A: Mean squared error, the average of squared differences between predictions and true values.
Q: Write the gradient descent update rule.
A: parameter = parameter - alpha x (gradient of the loss with respect to that parameter).
Q: What happens if the learning rate is too large?
A: Steps overshoot the minimum, so the loss may oscillate or diverge.
Q: What is the difference between batch, stochastic and mini-batch gradient descent?
A: Batch uses all samples for each update, stochastic uses one sample, and mini-batch uses a small group (for example 32), balancing speed and stability.
Q: What does R-squared measure?
A: The fraction of variance in the target explained by the model.
@quiz
? In the worked example the first MSE (w = 0, b = 0) is
- 0.3319
+ 27.6667
- 5
- 14
! Errors are -3, -5, -7: (9 + 25 + 49) / 3 = 27.6667.
? Gradient descent updates parameters
+ opposite to the gradient
- along the gradient
- randomly
- by the loss value
! Moving against the gradient reduces the loss.
? A very small learning rate causes
- divergence
+ slow convergence
- zero loss immediately
- overfitting
! Tiny steps take many iterations.
? Stochastic gradient descent uses per update
- the whole dataset
+ one sample
- no data
- only the test set
! SGD updates after each example.
? For data on the line y = 2x + 1, the best w and b are
- 1 and 2
+ 2 and 1
- 3 and 0
- 0 and 3
! The line has slope 2 and intercept 1.
@visual
curve | Loss against weight w for the example (shape) | y = (x-2)^2 ; 0 ; 4
steps | Gradient descent loop | Initialise w and b; Predict and compute the loss; Compute gradients; Update w and b; Repeat until the loss stops falling
bars | MSE during the first three iterations | iter0=27.67;iter1=0.33;iter2=0.005
@problems
## Moderate
P: Write the formula of MSE and compute it for predictions 2, 4 and true values 3, 5.
A: MSE = (1/m) sum (y_hat - y)^2 = ((2-3)^2 + (4-5)^2) / 2 = (1 + 1) / 2 = 1.
R: 1 | Formula
R: 1 | Value 1
## High
P: For data (1,3), (2,5), (3,7) with w = 0, b = 0 and alpha = 0.1, compute the gradients and the updated w and b after one step.
A: Predictions are 0, so errors are -3, -5, -7. dL/dw = (2/3)((-3)(1) + (-5)(2) + (-7)(3)) = (2/3)(-34) = -22.6667. dL/db = (2/3)(-15) = -10. New w = 0 + 0.1 x 22.6667 = 2.2667, new b = 1.0.
R: 2 | Errors and dL/dw = -22.6667
R: 1 | dL/db = -10
R: 2 | Updated w = 2.2667 and b = 1
## Advanced
P: Explain what happens with learning rates 0.001, 0.1 and 1.5 on this problem, and how you would pick one in practice.
A: 0.001 converges but very slowly. 0.1 converges quickly in a few steps as the table shows. 1.5 overshoots by more than the distance to the minimum each time so the loss grows and diverges. In practice try values on a log scale (0.001, 0.01, 0.1), watch the loss curve and use a schedule or an adaptive optimiser such as Adam.
R: 2 | Behaviour of each rate
R: 2 | Reason for divergence (overshoot)
R: 2 | Practical selection method

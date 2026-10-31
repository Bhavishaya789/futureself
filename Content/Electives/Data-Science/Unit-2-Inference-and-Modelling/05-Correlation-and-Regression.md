# Correlation and regression
minutes: 25
yt: linear regression explained correlation
@study
**Correlation** r measures linear association from -1 to +1. **Correlation is not causation.** **Simple linear regression** fits y = a + b x by least squares: b = sum((x - mx)(y - my)) / sum((x - mx)^2) and a = my - b mx.
Worked example: x = 1, 2, 3, 4, 5 and y = 2, 4, 5, 4, 5. mx = 3, my = 4, so slope **b = 6/10 = 0.6**, intercept **a = 4 - 1.8 = 2.2**, correlation **r = 0.7746** and **R^2 = 0.6** (60% of the variance in y is explained by x). Prediction at x = 6: 2.2 + 3.6 = **5.8**.
Other ideas: **multiple regression** (several features), **residuals** should look like random noise, **multicollinearity** (correlated features) makes coefficients unstable, **logistic regression** for yes/no outcomes. Always plot the data; very different data can give the same r.
```python
import numpy as np
x = np.array([1, 2, 3, 4, 5]); y = np.array([2, 4, 5, 4, 5])
b, a = np.polyfit(x, y, 1)
print(round(b, 2), round(a, 2), round(np.corrcoef(x, y)[0, 1], 4))   # 0.6 2.2 0.7746
```
## Hindi saransh
Linear regression y = a + bx; example mein b = 0.6, a = 2.2, r = 0.7746, R-squared = 0.6. Correlation ka matlab karan (causation) nahi hota.
> Plot your data: the same correlation can hide very different patterns.
@qa
Q: What does R-squared tell us?
A: The fraction of variance in y explained by the model.
Q: Does a high correlation prove causation?
A: No; a third factor or coincidence may explain it.
Q: What is multicollinearity?
A: Strong correlation among input features, making individual coefficients unstable.
Q: What method fits the regression line?
A: Least squares: minimise the sum of squared residuals.
@quiz
? The slope for the example data is
- 0.4
+ 0.6
- 1.0
- 2.2
! 6/10.
? The intercept is
- 0.6
+ 2.2
- 4
- 3
! 4 - 0.6 x 3.
? R^2 of 0.6 means
- 6% explained
+ 60% of variance explained
- 60% accuracy of classes
- the slope is 0.6
! Explained variance.
? Predicted y at x = 6 is
- 5.2
+ 5.8
- 6.0
- 6.6
! 2.2 + 0.6 x 6.
@visual
formula | Least squares | b = sum((x - mx)(y - my)) / sum((x - mx)^2) ; a = my - b mx
curve | Fitted line | y = 2.2 + 0.6*x ; 0 ; 6
@problems
## Moderate
P: Predict y at x = 6 using y = 2.2 + 0.6x.
A: 2.2 + 3.6 = 5.8.
R: 1 | Substitute
R: 1 | 5.8
## High
P: For x = 1..5 and y = 2, 4, 5, 4, 5 compute slope and intercept.
A: Sxy = 6, Sxx = 10, slope 0.6, intercept 4 - 1.8 = 2.2.
R: 2 | Slope
R: 1 | Intercept
## Advanced
P: A study finds ice-cream sales correlate with drowning. Explain.
A: Hot weather (a confounder) raises both. Correlation does not imply causation; control for temperature or use an experiment.
R: 2 | Confounder
R: 1 | Causation note

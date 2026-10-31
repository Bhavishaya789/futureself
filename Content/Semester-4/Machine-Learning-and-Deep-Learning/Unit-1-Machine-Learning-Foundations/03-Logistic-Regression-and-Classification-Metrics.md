# Logistic regression and classification metrics
minutes: 25
yt: logistic regression explained
yt: precision recall f1 score confusion matrix
@study
**Logistic regression** is a classifier. It computes a linear score z = w.x + b and squeezes it with the **sigmoid** function: p = 1 / (1 + e^(-z)), a probability between 0 and 1. If p >= 0.5 predict class 1.

## Properties of sigmoid
sigmoid(0) = 0.5, large positive z gives about 1, large negative z gives about 0, and the derivative is p(1 - p).

## Loss: binary cross-entropy
L = -[ y log p + (1 - y) log(1 - p) ]. It punishes confident wrong answers heavily. Training uses gradient descent.

## Confusion matrix
| | Predicted positive | Predicted negative |
| --- | --- | --- |
| Actual positive | TP | FN |
| Actual negative | FP | TN |

### Metrics
- **Accuracy** = (TP + TN) / total
- **Precision** = TP / (TP + FP) (of predicted positives, how many are right)
- **Recall** = TP / (TP + FN) (of real positives, how many found)
- **F1** = 2 P R / (P + R)

### Worked example
TP = 40, FP = 10, FN = 20, TN = 30 (100 samples).
Accuracy = 70/100 = **0.70**. Precision = 40/50 = **0.80**. Recall = 40/60 = **0.667**. F1 = **0.727**.

## When accuracy misleads
With 99% healthy patients, a model that always says "healthy" has 99% accuracy but 0% recall for disease. Use recall, precision or F1 on **imbalanced data**.

## Threshold
Raising the threshold increases precision and lowers recall; lowering it does the opposite. The **ROC curve** plots true-positive rate against false-positive rate for all thresholds; the area under it (AUC) summarises ranking quality.

## Multi-class
Softmax turns scores into probabilities that sum to 1.

## Hindi saransh
Logistic regression sigmoid se probability deta hai. Precision = TP/(TP+FP), recall = TP/(TP+FN). Imbalanced data mein accuracy dhokha deti hai, F1 use karo.

> Precision asks "of my alarms, how many were real?" Recall asks "of the real events, how many did I catch?"
@qa
Q: What does the sigmoid function do?
A: It maps any real number to the range (0, 1) so the output can be read as a probability.
Q: Why is accuracy a poor metric for imbalanced data?
A: A model that always predicts the majority class gets high accuracy while missing every minority case.
Q: Define precision and recall.
A: Precision = TP / (TP + FP); recall = TP / (TP + FN).
Q: What is the effect of raising the classification threshold?
A: Fewer positives are predicted, so precision usually rises and recall falls.
Q: What is AUC?
A: The area under the ROC curve; 1.0 is perfect ranking and 0.5 is random.
@quiz
? sigmoid(0) equals
- 0
+ 0.5
- 1
- -1
! 1 / (1 + e^0) = 0.5.
? With TP 40, FP 10, FN 20, TN 30 the precision is
- 0.67
+ 0.80
- 0.70
- 0.50
! 40 / (40 + 10) = 0.8.
? With the same numbers recall is
- 0.80
- 0.70
+ 0.667
- 0.50
! 40 / (40 + 20) = 0.667.
? The F1 score is the
- arithmetic mean of precision and recall
+ harmonic mean of precision and recall
- product of precision and recall
- minimum of the two
! F1 = 2PR / (P + R).
? Which loss is used for logistic regression?
- mean squared error
+ binary cross-entropy
- hinge loss only
- absolute error
! Cross-entropy matches the probabilistic output.
@visual
curve | The sigmoid function | y = 1/(1+exp(-x)) ; -6 ; 6
blocks | Confusion matrix counts in the example | TP:40;FP:10;FN:20;TN:30
@problems
## Moderate
P: Compute accuracy for TP = 40, FP = 10, FN = 20, TN = 30.
A: (40 + 30) / 100 = 0.70.
R: 1 | Formula
R: 1 | 0.70
## High
P: Compute precision, recall and F1 for TP = 40, FP = 10, FN = 20.
A: Precision = 0.8, recall = 0.6667, F1 = 2(0.8)(0.6667) / (0.8 + 0.6667) = 0.7273.
R: 2 | Precision 0.8
R: 1 | Recall 0.667
R: 2 | F1 0.727
## Advanced
P: A cancer-screening test must not miss patients. Which metric would you prioritise, what would you do to the threshold, and what is the trade-off?
A: Prioritise recall (sensitivity) so that few patients are missed. Lower the threshold to flag more cases. The cost is more false positives, so precision drops and more people need follow-up tests.
R: 2 | Chooses recall
R: 2 | Lowers the threshold
R: 2 | States the trade-off with precision

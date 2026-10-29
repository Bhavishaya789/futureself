# Classification: KNN, decision trees and evaluation metrics
minutes: 45
yt: knn algorithm example numerical
yt: decision tree entropy information gain numerical
yt: confusion matrix precision recall f1 score
@study
**Classification** assigns an input to one of several categories.

## K-Nearest Neighbours (KNN)
Lazy learner: store the data; to classify a new point, find the **k closest** training points (Euclidean distance) and take a majority vote.
Example: training points A(1,1), A(2,1), B(4,4), B(5,4), B(5,5); query (3,3). Distances (verified by program): B(4,4) = 1.41, A(2,1) = 2.24, B(5,4) = 2.24, A(1,1) = 2.83, B(5,5) = 2.83. With **k = 3** the nearest are B(4,4), A(2,1) and B(5,4), so the votes are B = 2, A = 1 and the query is **class B**.
Choose k by cross-validation; scale features first. Slow on large data.

## Decision trees
Split data by feature tests to create pure groups.
- **Entropy** H = −Σ pᵢ log₂ pᵢ. For 9 "yes" and 5 "no": H = **0.940**.
- **Information gain** = entropy(parent) − weighted entropy(children). Choose the split with the highest gain (ID3). C4.5 uses gain ratio; CART uses **Gini impurity** 1 − Σ pᵢ².
- Prune the tree or limit depth to avoid overfitting.
- Easy to interpret, handles mixed data.
```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)
model = DecisionTreeClassifier(random_state=0).fit(Xtr, ytr)
print(round(model.score(Xte, yte), 3))
```
Output:
```
1.0
```
(The iris dataset is easy; real data rarely gives 100%.)

## Ensembles
- **Random forest:** many trees on random samples/features; vote. Reduces variance.
- **Boosting** (AdaBoost, Gradient Boosting, XGBoost): trees added in sequence, each correcting earlier errors.

## Other classifiers
Naive Bayes, logistic regression, **SVM** (finds the maximum-margin separating hyperplane; kernels handle non-linear data), neural networks.

## Confusion matrix and metrics
For a binary problem: TP, FP, FN, TN. Suppose TP = 40, FP = 10, FN = 5, TN = 45.
- **Accuracy** = (TP + TN)/total = 85/100 = **0.85**
- **Precision** = TP/(TP + FP) = 40/50 = **0.80**
- **Recall (sensitivity)** = TP/(TP + FN) = 40/45 = **0.889**
- **F1** = 2PR/(P + R) = **0.842**
```python
TP, FP, FN, TN = 40, 10, 5, 45
P = TP / (TP + FP); R = TP / (TP + FN)
print(P, round(R, 3), round(2 * P * R / (P + R), 3), (TP + TN) / 100)
```
Output:
```
0.8 0.889 0.842 0.85
```
Accuracy misleads on imbalanced data (99% accuracy by always predicting "no fraud"); use precision, recall, F1 and the ROC-AUC curve.

> Precision: of those predicted positive, how many are right. Recall: of the real positives, how many were found.
@qa
Q: How does KNN classify a point?
A: It finds the k nearest training points by distance and assigns the majority class among them.
Q: What is entropy in a decision tree?
A: A measure of impurity of a set of labels, −Σ p log₂ p; it is 0 for a pure node and highest for an even mix.
Q: Define precision and recall.
A: Precision = TP/(TP+FP), the fraction of predicted positives that are correct. Recall = TP/(TP+FN), the fraction of actual positives that are found.
Q: Why is accuracy a poor metric for imbalanced data?
A: A model can reach very high accuracy by always predicting the majority class while missing every minority case; precision, recall and F1 are more informative.
Q: How does a random forest reduce overfitting?
A: It trains many trees on random subsets of data and features and averages their votes, which reduces variance.
@quiz
? In the KNN example with k = 3 the query is classified as
- A
+ B
- tie
- unknown
! Two of the three nearest neighbours are class B.
? Entropy of 9 yes and 5 no is about
- 0
- 0.5
+ 0.94
- 1.5
! −(9/14)log2(9/14) − (5/14)log2(5/14) = 0.940.
? Recall equals
- TP/(TP+FP)
+ TP/(TP+FN)
- TN/(TN+FP)
- (TP+TN)/N
! Share of actual positives found.
? Gini impurity is used by
- ID3
+ CART
- KNN
- K-means
! CART splits using Gini.
? SVM chooses the hyperplane with
- minimum margin
+ maximum margin
- no margin
- random margin
! The widest separation generalises best.

@visual
formula | Classification metrics | Accuracy = (TP + TN) / total ; Precision = TP / (TP + FP) ; Recall = TP / (TP + FN) ; F1 = 2 x Precision x Recall / (Precision + Recall)

@problems
## Moderate
P: A classifier gives TP = 40, FP = 10, FN = 20, TN = 30. Compute accuracy, precision, recall and F1.
A: Accuracy = (40 + 30) / 100 = 0.70. Precision = 40 / 50 = 0.80. Recall = 40 / 60 = 0.667. F1 = 2 x 0.8 x 0.667 / (0.8 + 0.667) = 0.727.
R: 1 | Accuracy 0.70
R: 1 | Precision 0.80
R: 1 | Recall 0.667
R: 1 | F1 0.727
## High
P: Training points: class A at (1,1) and (2,1); class B at (4,4), (5,4) and (3,3). Classify the point (2.5, 2) with 3-nearest neighbours.
A: Distances: to (2,1) = 1.118; to (3,3) = 1.118; to (1,1) = 1.803; to (4,4) = 2.5; to (5,4) = 3.20. The three nearest are (2,1) A, (3,3) B and (1,1) A. Votes: A = 2, B = 1, so the point is class A.
R: 2 | Correct distances
R: 2 | Majority vote gives class A
R: 1 | Chooses k = 3 neighbours
## Advanced
P: A dataset has 14 samples: 9 Yes and 5 No. Find the entropy. A split gives groups (2 Yes, 3 No), (4 Yes, 0 No) and (3 Yes, 2 No). Find the information gain.
A: Entropy = -(9/14) log2(9/14) - (5/14) log2(5/14) = 0.940. Group entropies: (2,3): 0.971, (4,0): 0, (3,2): 0.971. Weighted = (5/14)(0.971) + (4/14)(0) + (5/14)(0.971) = 0.694. Information gain = 0.940 - 0.694 = 0.247.
R: 2 | Entropy 0.940
R: 2 | Weighted entropy about 0.694
R: 1 | Gain about 0.247

# Decision trees: entropy and information gain
minutes: 25
yt: decision tree entropy information gain example
yt: random forest explained
@study
A **decision tree** classifies by asking a series of questions. Each internal node tests a feature, each branch is an outcome, and each leaf gives a class.

## Entropy
For classes with proportions p_i: **Entropy = - sum p_i log2 p_i**. It is 0 for a pure node and 1 for a 50/50 split of two classes.

## Information gain
Gain(S, A) = Entropy(S) - sum (|S_v| / |S|) Entropy(S_v). At each node choose the feature with the highest gain (ID3). **Gini impurity** = 1 - sum p_i^2 is used by CART.

### Worked example (play tennis, 14 days: 9 Yes, 5 No)
Entropy(S) = -(9/14) log2(9/14) - (5/14) log2(5/14) = **0.940**.
Splitting by Outlook gives Sunny (2 Yes, 3 No) entropy 0.971, Overcast (4 Yes, 0 No) entropy 0, Rain (3 Yes, 2 No) entropy 0.971.
Weighted entropy = (5/14)(0.971) + (4/14)(0) + (5/14)(0.971) = 0.694.
**Gain(Outlook) = 0.940 - 0.694 = 0.247**, the largest among the features, so Outlook becomes the root.

```python
from math import log2
H = lambda a, b: -sum(x/(a+b) * log2(x/(a+b)) for x in (a, b) if x)
print(round(H(9, 5), 3))                                          # 0.94
print(round(H(9, 5) - (5/14*H(2, 3) + 4/14*H(4, 0) + 5/14*H(3, 2)), 3))   # 0.247
```

## Overfitting and pruning
A very deep tree memorises training data. Limit depth, require a minimum samples per leaf, or prune after training.

## Ensembles
- **Random forest:** many trees on random subsets of data and features; predictions are averaged or voted. Reduces variance.
- **Gradient boosting** (XGBoost): trees added one after another, each correcting the previous errors.

## Hindi saransh
Decision tree har node par ek feature ke hisaab se sawaal poochta hai. Entropy impurity naapti hai (9 Yes, 5 No ke liye 0.940). Information gain sabse zyada wala feature root banta hai (Outlook = 0.247). Random forest kai trees ka vote hai.

> Pure node means entropy 0. The best split is the one that gets us closest to pure children.
@qa
Q: What is entropy in a decision tree?
A: A measure of impurity: -sum p_i log2 p_i. It is 0 when all samples are in one class and highest when classes are evenly mixed.
Q: How does the tree choose the splitting feature?
A: It picks the feature with the highest information gain (or lowest Gini impurity for CART).
Q: Why do deep trees overfit and how do we limit them?
A: They can create a leaf for every training point. Limit the depth, set a minimum leaf size or prune the tree.
Q: What is a random forest?
A: An ensemble of many decision trees trained on random samples of rows and features, combining their votes to reduce variance.
Q: What is the Gini impurity of a 50/50 node?
A: 1 - (0.5^2 + 0.5^2) = 0.5.
@quiz
? Entropy of a node with 9 Yes and 5 No is about
- 0.5
+ 0.94
- 1.5
- 0
! -(9/14) log2(9/14) - (5/14) log2(5/14) = 0.940.
? The entropy of a pure node is
+ 0
- 0.5
- 1
- undefined
! All samples are in one class.
? The information gain of Outlook in the example is about
- 0.940
- 0.694
+ 0.247
- 0.5
! 0.940 - 0.694 = 0.247.
? A random forest mainly reduces
- bias
+ variance
- the number of features
- training time
! Averaging many different trees smooths out their individual errors.
? Which impurity measure does CART use?
- entropy only
+ Gini impurity
- accuracy
- MSE only
! CART splits using Gini impurity (or MSE for regression).
@visual
tree | Decision tree for play tennis (top levels) | Outlook(Sunny(Humidity))(Overcast(Yes))(Rain(Wind))
bars | Entropy of the three Outlook branches | Sunny=0.971;Overcast=0;Rain=0.971
@problems
## Moderate
P: Compute the entropy of a node with 7 positive and 7 negative samples.
A: p = 0.5 for each class. Entropy = -2(0.5)(log2 0.5) = 1.
R: 1 | Uses the formula
R: 1 | Answer 1
## High
P: Using Entropy(S) = 0.940, Sunny entropy 0.971 (5 days), Overcast 0 (4 days) and Rain 0.971 (5 days), compute the information gain of Outlook.
A: Weighted entropy = (5/14)(0.971) + (4/14)(0) + (5/14)(0.971) = 0.694. Gain = 0.940 - 0.694 = 0.247.
R: 2 | Weighted entropy 0.694
R: 2 | Gain 0.247
## Advanced
P: Explain how a random forest differs from a single decision tree and why it usually generalises better.
A: A single tree has high variance and overfits. A random forest trains many trees, each on a bootstrap sample of the rows with a random subset of features at each split, which makes the trees less correlated. Averaging or voting their outputs cancels individual errors, lowering variance while keeping bias low, so test accuracy is usually better.
R: 2 | Bootstrap rows and random features
R: 2 | Voting or averaging
R: 2 | Links to lower variance and better generalisation

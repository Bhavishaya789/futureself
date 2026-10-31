# Ensembles: bagging, boosting and random forests
minutes: 25
yt: random forest gradient boosting adaboost explained
@study
An **ensemble** combines many models to beat a single one.
- **Bagging:** train models on bootstrap samples (random draws with replacement) and average or vote. Reduces **variance**. A bootstrap sample leaves out about **36.8%** of rows (1/e), which become the free **out-of-bag (OOB)** test set; each row is in the sample with probability about 63.2%.
- **Random forest:** bagged decision trees that also pick a random subset of features at each split, which decorrelates the trees.
- **Boosting:** build models one after another, each correcting the previous errors. Reduces **bias**. **AdaBoost** weights misclassified points up; a weak learner with error e gets weight alpha = (1/2) ln((1 - e)/e). For e = 0.2: alpha = 0.5 ln 4 = **0.693**. **Gradient boosting** (XGBoost, LightGBM, CatBoost) fits each new tree to the residual errors (the negative gradient of the loss).
- **Stacking:** a meta-model learns to combine the outputs of different models.
```python
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
X, y = load_breast_cancer(return_X_y=True)
for m in (RandomForestClassifier(200, random_state=0), GradientBoostingClassifier(random_state=0)):
    print(type(m).__name__, round(cross_val_score(m, X, y, cv=5).mean(), 3))
```
Both reach about 0.96 accuracy on this dataset.
## Hindi saransh
Bagging variance kam karta hai (random forest), boosting bias kam karta hai (AdaBoost, gradient boosting). Bootstrap sample mein lagbhag 36.8% rows chhoot jaati hain (OOB).
> Bagging = parallel and reduces variance. Boosting = sequential and reduces bias.
@qa
Q: Difference between bagging and boosting?
A: Bagging trains independent models in parallel on bootstrap samples to cut variance; boosting trains models sequentially, each focusing on earlier mistakes, to cut bias.
Q: What is the out-of-bag error?
A: The error measured on the rows left out of each tree's bootstrap sample, a free validation estimate.
Q: AdaBoost weight for a learner with error 0.2?
A: 0.5 ln(0.8/0.2) = 0.693.
Q: Why does a random forest pick random features at each split?
A: To make trees less correlated, so averaging reduces variance more.
@quiz
? Boosting mainly reduces
- variance
+ bias
- noise
- data size
! Sequential error correction.
? Fraction of rows left out of a bootstrap sample is about
- 10%
- 20%
+ 36.8%
- 63.2%
! (1 - 1/n)^n tends to 1/e.
? AdaBoost alpha for error 0.2 is
- 0.2
+ 0.693
- 1.0
- 1.386
! 0.5 ln 4.
? Gradient boosting fits each new tree to
- the raw labels
+ the residuals (negative gradient)
- random noise
- the features only
! Residual fitting.
@visual
compare | Bagging versus boosting | Bagging=Parallel~Bootstrap samples~Cuts variance~Random forest; Boosting=Sequential~Reweights errors~Cuts bias~XGBoost
flow | Gradient boosting | Start with a constant > Compute residuals > Fit a small tree to residuals > Add it with a learning rate > Repeat
@problems
## Moderate
P: What fraction of the data is out-of-bag for each tree in a random forest?
A: About 36.8% (1/e).
R: 1 | Idea
R: 1 | 36.8%
## High
P: Compute the AdaBoost weight alpha for a weak learner with weighted error 0.2.
A: alpha = 0.5 ln((1 - 0.2)/0.2) = 0.5 ln 4 = 0.693.
R: 1 | Formula
R: 2 | 0.693
## Advanced
P: Compare random forest and gradient boosting in four points.
A: Training: parallel vs sequential. Error reduced: variance vs bias. Tuning: forests are robust to defaults; boosting needs careful learning rate and depth. Overfitting: forests rarely overfit; boosting can if over-trained, so use early stopping.
R: 3 | Three points
R: 1 | Four points

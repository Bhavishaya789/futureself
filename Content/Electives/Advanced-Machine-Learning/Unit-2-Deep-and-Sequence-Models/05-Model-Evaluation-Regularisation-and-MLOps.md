# Model evaluation, regularisation and MLOps
minutes: 25
yt: machine learning model evaluation mlops
@study
## Evaluation
Use a train / validation / test split or k-fold cross-validation; for time series, split by time (never shuffle). Metrics: accuracy, precision, recall, F1, ROC-AUC, **log loss** (-ln p for the true class: p = 0.9 gives **0.105**, p = 0.1 gives **2.303**, so confident wrong answers are punished hard), RMSE and MAE for regression. Calibration checks whether predicted probabilities match real frequencies.
## Regularisation
**L2 (ridge)** shrinks weights; **L1 (lasso)** drives some weights to exactly zero (feature selection); **dropout**, **early stopping**, **data augmentation**, and **batch normalisation** help generalise.
## Hyper-parameter tuning
Grid search, random search, Bayesian optimisation; always tune on validation data, never on the test set.
## Pitfalls
**Data leakage** (information from the test set or future leaking into training, such as scaling before splitting), class imbalance (use stratified splits, class weights, SMOTE), and concept drift (data changes after deployment).
## MLOps
Version data and code (Git, DVC), track experiments (MLflow), package models (Docker), serve through APIs, monitor accuracy and drift, and retrain on schedule. **Responsible AI:** check bias across groups, explain predictions (SHAP, LIME) and protect privacy.
## Hindi saransh
Cross-validation aur sahi metric chuno. L1 weights ko zero kar deta hai, L2 chhota karta hai. Data leakage se bacho; deploy ke baad drift monitor karo.
> Fit the scaler on the training data only, then apply it to the validation and test data.
@qa
Q: What is data leakage?
A: Information from outside the training data (test or future data) influencing the model, giving over-optimistic results.
Q: Difference between L1 and L2 regularisation?
A: L1 can set weights to exactly zero and select features; L2 shrinks weights smoothly without zeroing them.
Q: Log loss for a correct class predicted with probability 0.9?
A: -ln 0.9 = 0.105.
Q: Why not shuffle time-series data when splitting?
A: It would let the model train on the future and test on the past, which is unrealistic.
@quiz
? Log loss for p = 0.9 on the true class is about
- 0.9
+ 0.105
- 2.30
- 1.0
! -ln 0.9.
? Which regularisation can produce exactly zero weights?
- L2
+ L1
- dropout
- batch norm
! Sparse solutions.
? Fitting a scaler on all data before splitting causes
- underfitting
+ data leakage
- faster training
- smaller models
! Test statistics leak into training.
? Concept drift means
- the model gets bigger
+ data patterns change over time
- labels vanish
- code bugs
! Retrain when it happens.
@visual
steps | An MLOps loop | Version data and code; Train and track experiments; Package and deploy; Monitor accuracy and drift; Retrain when needed
@problems
## Moderate
P: Explain data leakage with one example.
A: Scaling or imputing with statistics from the whole dataset before splitting lets test information enter training.
R: 2 | Definition
R: 1 | Example
## High
P: Compute log loss for p = 0.9 and p = 0.1 on a true class and comment.
A: 0.105 and 2.303. A confident wrong prediction costs about 22 times more.
R: 2 | Values
R: 1 | Comment
## Advanced
P: Describe a deployment monitoring plan for a loan-approval model.
A: Log inputs and predictions, track accuracy once true outcomes arrive, monitor feature and prediction drift, check fairness across groups, alert on thresholds, and retrain with fresh data after review.
R: 2 | Metrics and drift
R: 2 | Fairness and retraining

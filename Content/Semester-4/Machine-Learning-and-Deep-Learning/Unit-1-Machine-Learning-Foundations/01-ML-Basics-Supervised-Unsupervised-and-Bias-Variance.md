# ML basics: supervised, unsupervised, and bias versus variance
minutes: 25
yt: supervised vs unsupervised learning explained
yt: bias variance tradeoff overfitting underfitting
@study
**Machine learning (ML)** lets a program learn patterns from data instead of following hand-written rules. A model is fitted to **training data** and then judged on **unseen data**.

## Types of learning
- **Supervised:** inputs come with labels. **Regression** predicts a number (house price); **classification** predicts a class (spam or not).
- **Unsupervised:** no labels. **Clustering** (k-means) groups similar items; dimensionality reduction (PCA) compresses features.
- **Reinforcement:** an agent learns by reward and penalty (game playing, robot control).

## Standard workflow
Collect data, clean it, split into **train / validation / test** (for example 70/15/15), choose a model, train, tune hyper-parameters on validation data, and report final performance **once** on the test set.

## Overfitting and underfitting
- **Underfitting:** model too simple; poor on training and test data (**high bias**).
- **Overfitting:** model memorises noise; very good on training data but poor on test data (**high variance**).
- Fixes for overfitting: more data, simpler model, **regularisation** (L1/L2), early stopping, dropout, cross-validation.

## Bias-variance trade-off
Expected error = bias^2 + variance + irreducible noise. Making a model more complex lowers bias but raises variance; the best model sits in between.

## Features and scaling
Features should be numeric and on similar scales. Normalise (min-max) or standardise (zero mean, unit variance) before distance-based models such as k-NN.

## k-fold cross-validation
Split the data into k parts; train on k - 1 and test on the rest; repeat k times and average. It gives a more stable estimate on small datasets.

## Hindi saransh
ML mein model data se seekhta hai. Supervised mein labels hote hain (regression, classification), unsupervised mein nahi (clustering). Underfitting = high bias, overfitting = high variance. Test set ko sirf aakhri mein use karo.

> Never tune the model on the test set, or the test score stops being honest.
@qa
Q: What is the difference between classification and regression?
A: Classification predicts a category (spam or not spam); regression predicts a continuous number (price, temperature).
Q: How do you recognise overfitting from the numbers?
A: Training error is very low but validation or test error is much higher.
Q: Name three ways to reduce overfitting.
A: Get more training data, use regularisation (L1 or L2), simplify the model; also early stopping, dropout or cross-validation.
Q: Why must the test set be kept separate?
A: It must stay unseen so that the final score estimates real-world performance. Using it for tuning leaks information.
Q: What is k-fold cross-validation?
A: The data is divided into k folds; each fold takes a turn as the test set while the other k - 1 train the model, and the k scores are averaged.
@quiz
? A model has 99% training accuracy and 70% test accuracy. It is probably
- underfitting
+ overfitting
- perfectly fitted
- biased only
! A big gap between train and test performance signals high variance.
? Clustering is an example of
- supervised learning
+ unsupervised learning
- reinforcement learning
- regression
! Clustering finds groups without labels.
? Predicting the price of a house is
- classification
+ regression
- clustering
- dimensionality reduction
! The output is a continuous number.
? Increasing model complexity generally
- raises bias and lowers variance
+ lowers bias and raises variance
- lowers both
- raises both
! Complex models fit data closely (low bias) but vary a lot between samples (high variance).
? L2 regularisation helps by
- adding more data
+ penalising large weights
- removing labels
- doubling the learning rate
! It adds a penalty on squared weights to the loss.
@visual
compare | Supervised versus unsupervised | Supervised=Labelled data~Regression and classification~Learns a mapping; Unsupervised=No labels~Clustering and PCA~Finds structure
flow | Typical ML workflow | Collect data > Clean and split > Choose a model > Train > Tune on validation > Test once
curve | Bias squared falls and variance rises with complexity | y = 10/x ; 1 ; 10
curve | Variance rising with model complexity | y = x ; 1 ; 10
@problems
## Moderate
P: Classify each as regression, classification or clustering: predict tomorrow's temperature, detect fraud, group customers by buying habit.
A: Temperature: regression. Fraud: classification. Customer groups: clustering.
R: 2 | Two correct
R: 1 | All three correct
## High
P: A model gets training accuracy 98% and validation accuracy 72%. Diagnose and suggest three remedies.
A: This is overfitting (high variance): the model memorised the training set. Remedies: collect more data, add regularisation or dropout, reduce model size, use early stopping or cross-validation.
R: 2 | Diagnosis overfitting / high variance
R: 3 | Three valid remedies
## Advanced
P: Explain the bias-variance trade-off and describe how training and validation error change as model complexity grows.
A: Bias is error from wrong assumptions (too simple); variance is error from sensitivity to the training sample (too complex). As complexity grows training error keeps falling, while validation error falls first, reaches a minimum, then rises as the model overfits. The best model is near that minimum.
R: 2 | Defines bias and variance
R: 2 | Training error falls always
R: 2 | Validation error U-shape and best point

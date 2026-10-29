# Machine learning: concepts, types and workflow
minutes: 35
yt: machine learning introduction supervised unsupervised reinforcement
yt: overfitting underfitting bias variance train test split
@study
**Machine learning (ML)** lets computers learn patterns from data instead of being programmed with explicit rules. Tom Mitchell's definition: a program learns from experience E for task T with performance P if its performance on T improves with E.

## Types of learning
- **Supervised:** labelled data (input → known output). *Classification* (predict a category: spam/not spam) and *regression* (predict a number: house price).
- **Unsupervised:** no labels; find structure: *clustering* (customer groups), dimensionality reduction (PCA), association rules.
- **Semi-supervised:** few labels, many unlabelled.
- **Reinforcement learning:** an agent learns by **rewards** from actions in an environment (game playing, robots).

## Data terms
Features (inputs, columns), label/target, sample (row), dataset, training set, validation set, test set. Typical split 70/15/15 or 80/20.

## ML workflow
1. Define the problem and metric.
2. Collect data.
3. Clean data (missing values, duplicates, outliers).
4. Explore and engineer features; encode categories; **scale** numeric features.
5. Split into train/test (never tune on the test set).
6. Train a model.
7. Evaluate with proper metrics and cross-validation.
8. Tune hyper-parameters.
9. Deploy and monitor (data drift).

## Generalisation
- **Underfitting:** model too simple; high error on both train and test (high **bias**).
- **Overfitting:** model memorises training data; low train error but high test error (high **variance**).
Remedies for overfitting: more data, simpler model, **regularisation** (L1/L2), early stopping, dropout, cross-validation. For underfitting: richer model, more features.

## Bias–variance trade-off
Total error = bias² + variance + irreducible noise. Increasing model complexity lowers bias but raises variance.

## Cross-validation
**k-fold:** split data into k parts, train on k−1, test on the remaining one, repeat k times and average. Gives a more reliable estimate than one split.

## Feature scaling
Min–max: x' = (x − min)/(max − min). Standardisation: z = (x − μ)/σ. Distance-based models (KNN, SVM, K-means) need scaling.

## Libraries
Python: NumPy, pandas, scikit-learn, Matplotlib; deep learning: TensorFlow, PyTorch.

> Learn from training data, judge on unseen data.
@qa
Q: Difference between supervised and unsupervised learning?
A: Supervised learning uses labelled examples to predict outputs; unsupervised learning finds patterns in unlabelled data, such as clusters.
Q: What is overfitting and how can it be reduced?
A: Overfitting is when a model fits noise in the training data and performs poorly on new data. It is reduced by more data, simpler models, regularisation, early stopping and cross-validation.
Q: What is the purpose of a test set?
A: To estimate how well the final model performs on unseen data; it must not be used for training or tuning.
Q: What is k-fold cross-validation?
A: The data is split into k folds; the model is trained on k−1 folds and tested on the remaining fold, repeating k times and averaging the scores.
Q: Why scale features?
A: Algorithms that use distances or gradients are dominated by features with large ranges unless all features are brought to comparable scales.
@quiz
? Predicting house price is
- classification
+ regression
- clustering
- reinforcement
! The target is a continuous number.
? A model with low training error but high test error is
- underfitting
+ overfitting
- perfect
- unbiased
! It memorised the training data.
? Which uses rewards?
- Supervised learning
- Clustering
+ Reinforcement learning
- PCA
! The agent learns from reward signals.
? Clustering belongs to
- supervised learning
+ unsupervised learning
- reinforcement learning
- regression
! No labels are used.
? The test set should be used
- to tune hyper-parameters
- during training
+ only for final evaluation
- never
! Otherwise the estimate becomes optimistic.

@visual
flow | The machine learning workflow | Collect data > Clean it and split train and test > Train the model > Evaluate on unseen test data > Deploy and keep monitoring

@problems
## Moderate
P: Differentiate between supervised, unsupervised and reinforcement learning with an example of each.
A: Supervised: learns from labelled data (email spam or not spam). Unsupervised: finds structure in unlabelled data (grouping customers by behaviour). Reinforcement: an agent learns by trial and error with rewards (a program learning to play a game).
R: 3 | Three types with correct descriptions
R: 1 | Examples
## High
P: Model A has 2% training error and 20% test error. Model B has 25% training error and 26% test error. Diagnose each and suggest one fix.
A: Model A overfits (low bias, high variance): it memorised training data. Fixes: more data, regularisation, a simpler model, early stopping. Model B underfits (high bias): it is too simple to capture the pattern. Fixes: a more complex model, better features, longer training.
R: 2 | Model A overfitting with a fix
R: 2 | Model B underfitting with a fix
## Advanced
P: Explain why the test set must stay untouched and give an example of data leakage. How does 5-fold cross-validation work for 100 samples?
A: The test set simulates unseen data; if it influences training or tuning, the measured score is too optimistic. Leakage example: scaling the whole dataset (using the test data's mean) before splitting.
5-fold cross-validation splits the data into 5 folds of 20 samples. In each of 5 rounds the model trains on 80 and tests on the remaining 20, and the 5 scores are averaged.
R: 2 | Why the test set is kept separate
R: 1 | Valid leakage example
R: 2 | 5 folds, train 80 and test 20, average

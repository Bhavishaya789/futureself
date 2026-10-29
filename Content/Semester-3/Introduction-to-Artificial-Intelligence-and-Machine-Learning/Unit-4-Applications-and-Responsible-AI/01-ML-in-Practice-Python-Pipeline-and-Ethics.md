# ML in practice: a Python pipeline, IoT use cases and ethics
minutes: 30
yt: scikit-learn pipeline tutorial python machine learning project
yt: AI ethics bias fairness explainability
@study
## A complete beginner pipeline (scikit-learn)
```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)
pipe = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))
pipe.fit(Xtr, ytr)
print("test accuracy:", round(pipe.score(Xte, yte), 3))
print("5-fold CV mean:", round(cross_val_score(pipe, X, y, cv=5).mean(), 3))
```
Why a pipeline? The scaler is fitted only on training data, preventing **data leakage** (information from the test set leaking into training).

## Project checklist
1. Business/academic question and metric.
2. Data source, quality and privacy.
3. Baseline (simplest model) first.
4. Proper split and cross-validation.
5. Error analysis (where does the model fail?).
6. Save the model (`joblib`) and serve it (Flask/FastAPI).
7. Monitor for drift.

## AI + IoT use cases
- **Predictive maintenance:** vibration and temperature sensors predict machine failure.
- **Smart agriculture:** soil moisture + weather predict irrigation need.
- **Anomaly detection** in energy meters and networks.
- **Computer vision** on cameras (attendance, crowd counting).
- **Voice commands** with on-device keyword spotting.

## Ethics, bias and fairness
- **Bias** enters through unrepresentative data, labelling choices and proxies (a pin code can proxy for caste or income).
- Check performance by subgroup, not only overall.
- **Explainability:** feature importance, SHAP/LIME, simple models for high-stakes decisions.
- **Privacy:** minimise data, anonymise, consent, comply with the Digital Personal Data Protection Act 2023 in India.
- **Safety:** keep a human in the loop for decisions that affect people (loans, health, hiring).

## India and AI
IndiaAI Mission, Bhashini (language translation), AI in agriculture, UPI fraud detection and healthcare screening are active areas, and student projects can use open Indian datasets.

## Careers and next steps
Learn Python, statistics, linear algebra, scikit-learn, then deep learning (PyTorch), and build projects such as a spam classifier, house price predictor or plant disease detector.

> A model is only as good as its data, its evaluation, and the care taken to use it responsibly.
@qa
Q: What is data leakage?
A: When information from outside the training set, such as test data, influences model training, giving falsely good evaluation results.
Q: Why build a baseline model first?
A: It gives a reference point and shows whether complex models actually add value.
Q: Give an example of AI with IoT.
A: Predictive maintenance: vibration and temperature sensors on a motor feed a model that predicts failure before it happens.
Q: How can bias enter an ML system?
A: Through unrepresentative or historically biased training data, biased labels, and features that act as proxies for sensitive attributes.
Q: Why should important decisions keep a human in the loop?
A: Models can be wrong or biased, and a human can review, explain and take responsibility for high-stakes outcomes.
@quiz
? Fitting the scaler on the whole dataset before splitting causes
- underfitting
+ data leakage
- faster training
- fairness
! Test information influences preprocessing.
? A sensible first step in a project is
- the deepest network
+ a simple baseline model
- deploying
- skipping evaluation
! Compare complex models against it.
? SHAP and LIME help with
- data collection
+ explainability
- storage
- scaling
! They show which features drove a prediction.
? Predictive maintenance in IoT uses
- sensor data
- machine learning
- anomaly detection
+ all of these
! They are combined to forecast failures.
? Which is a privacy principle?
- Collect everything
+ Data minimisation
- Share openly
- Hide the purpose
! Collect only what is needed.

@visual
flow | A typical ML pipeline in Python | Load data with pandas > Split into train and test > Scale features and fit the model > Predict on the test set > Evaluate and report

@problems
## Moderate
P: List the steps of a scikit-learn workflow for a classification problem and name one function for each step.
A: 1) Load data: pandas read_csv. 2) Split: train_test_split. 3) Preprocess: StandardScaler fit on training data only. 4) Train: model.fit(X_train, y_train). 5) Predict: model.predict(X_test). 6) Evaluate: accuracy_score or classification_report.
R: 2 | Steps in the right order
R: 2 | Functions named
## High
P: A dataset has 1000 samples, 990 negative and 10 positive. A model predicts negative every time. Find its accuracy and recall for the positive class, and explain the problem.
A: Accuracy = 990 / 1000 = 99%. Recall for positives = 0 / 10 = 0%. This is the accuracy paradox: on imbalanced data accuracy hides a useless model. Use precision, recall, F1 or the confusion matrix, and techniques like resampling or class weights.
R: 2 | 99% accuracy and 0% recall
R: 2 | Explains why accuracy misleads
R: 1 | Better metrics or fixes
## Advanced
P: Explain two sources of bias in an ML system with one example each, one way to reduce each, and one privacy concern when training on personal data.
A: Data bias: training data under-represents a group (a face recogniser trained mostly on one skin tone), reduced by collecting balanced data and testing on every group. Label or human bias: past decisions used as labels carry prejudice (a hiring model trained on biased past hiring), reduced by auditing outcomes and removing proxy features.
Privacy: models can memorise or leak personal data; use consent, anonymisation, data minimisation and techniques like differential privacy.
R: 2 | Two sources of bias with examples
R: 2 | Mitigation for each
R: 1 | Privacy concern and a safeguard

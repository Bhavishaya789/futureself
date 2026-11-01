# Evaluating Models
minutes: 35
yt: class 10 ai and it evaluating models
@study
Evaluation tests a trained model on unseen test data to see how well it predicts. Predictions are compared with reality in a confusion matrix of True Positive (TP), True Negative (TN), False Positive (FP) and False Negative (FN). Accuracy = (TP+TN)/(TP+TN+FP+FN) × 100; Precision = TP/(TP+FP); Recall = TP/(TP+FN); F1 = 2 × Precision × Recall/(Precision + Recall). Precision matters when false alarms are costly; recall matters when missing a case is costly. Overfitting means the model memorises training data and fails on new data.
## Deep dive: confusion matrix
TP and TN are correct predictions; FP (false alarm) and FN (missed case) are errors. Total = TP+TN+FP+FN.
## Deep dive: metrics
Accuracy = (TP+TN)/Total. Precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 = 2PR/(P+R), the harmonic mean, which is high only when both are high.
## Deep dive: which metric
Use recall where missing a case is dangerous (disease, fire alarm) and precision where false alarms are costly (spam, court). Accuracy fails on imbalanced data.
## Deep dive: over and underfitting
Overfitting gives high training but low test performance; underfitting gives low performance on both. Use more data, simpler models or cross-validation.
## Hindi saransh
मूल्यांकन में मॉडल को परीक्षण डेटा पर जाँचा जाता है। कन्फ्यूज़न मैट्रिक्स से accuracy, precision, recall और F1 निकाले जाते हैं।
> Accuracy=(TP+TN)/Total; Precision=TP/(TP+FP); Recall=TP/(TP+FN).
@formulas
## Formulae
Accuracy | (TP+TN)/(TP+TN+FP+FN) | overall
Precision | TP/(TP+FP) | positive predictions
Recall | TP/(TP+FN) | actual positives
F1 | 2PR/(P+R) | balance

@qa
Q: What is meant by Evaluation?
A: Measuring model performance.
Q: What is meant by Prediction?
A: Model output.
Q: What is meant by Reality?
A: Actual outcome.
Q: What is meant by Confusion matrix?
A: Prediction-reality table.
Q: What is meant by True Positive?
A: Correct yes.
Q: What is meant by True Negative?
A: Correct no.
Q: What is meant by False Positive?
A: Wrong yes.
Q: What is meant by False Negative?
A: Wrong no.
Q: What is meant by Accuracy?
A: Overall correctness.
Q: What is meant by Precision?
A: Correctness of positives.
Q: What is meant by Recall?
A: Coverage of actual positives.
Q: What is meant by F1 score?
A: Balance of precision and recall.
Q: What is meant by Type I error?
A: False positive.
Q: What is meant by Type II error?
A: False negative.
Q: What is meant by Overfitting?
A: Memorising training data.
Q: What is meant by Underfitting?
A: Model too simple.
Q: What is meant by Training set?
A: Data to learn.
Q: What is meant by Test set?
A: Data to evaluate.
Q: What is meant by Validation?
A: Tuning check.
Q: What is meant by Cross-validation?
A: Repeated split testing.
Q: What is meant by Ground truth?
A: Verified labels.
Q: What is meant by Threshold?
A: Cut-off value.
Q: What is meant by Baseline?
A: Simple comparison model.
Q: What is meant by Imbalanced data?
A: Unequal class sizes.
Q: What is meant by Generalisation?
A: Working on new data.
Q: What is meant by Error rate?
A: Wrong predictions fraction.
Q: What is meant by Sensitivity?
A: recall.
Q: What is meant by Specificity?
A: True negative rate.
Q: What is meant by False alarm?
A: False positive.
Q: What is meant by Missed detection?
A: False negative.
Q: What is meant by Metric?
A: Measure of quality.
Q: What is meant by Benchmark?
A: Standard for comparison.
Q: Which term matches this description: Measuring model performance?
A: Evaluation.
Q: Which term matches this description: Model output?
A: Prediction.
Q: Which term matches this description: Actual outcome?
A: Reality.
Q: Which term matches this description: Prediction-reality table?
A: Confusion matrix.
Q: Which term matches this description: Correct yes?
A: True Positive.
Q: Which term matches this description: Correct no?
A: True Negative.
Q: Which term matches this description: Wrong yes?
A: False Positive.
Q: Which term matches this description: Wrong no?
A: False Negative.
Q: Which term matches this description: Overall correctness?
A: Accuracy.
Q: Which term matches this description: Correctness of positives?
A: Precision.
Q: Which term matches this description: Coverage of actual positives?
A: Recall.
Q: Which term matches this description: Balance of precision and recall?
A: F1 score.
Q: Which term matches this description: False positive?
A: Type I error.
Q: Which term matches this description: False negative?
A: Type II error.
Q: Which term matches this description: Memorising training data?
A: Overfitting.
Q: Which term matches this description: Model too simple?
A: Underfitting.
Q: Which term matches this description: Data to learn?
A: Training set.
Q: Which term matches this description: Data to evaluate?
A: Test set.
Q: Which term matches this description: Tuning check?
A: Validation.
Q: Which term matches this description: Repeated split testing?
A: Cross-validation.
Q: Which term matches this description: Verified labels?
A: Ground truth.
Q: Which term matches this description: Cut-off value?
A: Threshold.
Q: Which term matches this description: Simple comparison model?
A: Baseline.
Q: Which term matches this description: Unequal class sizes?
A: Imbalanced data.
Q: Which term matches this description: Working on new data?
A: Generalisation.
Q: Which term matches this description: Wrong predictions fraction?
A: Error rate.
Q: Which term matches this description: recall?
A: Sensitivity.
Q: Which term matches this description: True negative rate?
A: Specificity.
Q: Which term matches this description: Measure of quality?
A: Metric.
Q: Which term matches this description: Standard for comparison?
A: Benchmark.
Q: What is model evaluation?
A: Testing a model on unseen data to measure its performance.
Q: Why is the model tested on unseen data?
A: To check it can generalise beyond training data.
Q: What is a prediction?
A: The output given by the model.
Q: What is reality?
A: The actual correct outcome.
Q: What is a confusion matrix?
A: A table comparing predictions with reality.
Q: What is True Positive?
A: Model predicts yes and the actual answer is yes.
Q: What is True Negative?
A: Model predicts no and the actual answer is no.
Q: What is False Positive?
A: Model predicts yes but the actual answer is no.
Q: What is False Negative?
A: Model predicts no but the actual answer is yes.
Q: What is another name for a False Positive?
A: Type I error.
Q: What is another name for a False Negative?
A: Type II error.
Q: Write the accuracy formula.
A: (TP+TN) / (TP+TN+FP+FN).
Q: Write the precision formula.
A: TP / (TP+FP).
Q: Write the recall formula.
A: TP / (TP+FN).
Q: Write the F1 score formula.
A: 2 × Precision × Recall / (Precision + Recall).
Q: What does accuracy measure?
A: The fraction of all predictions that are correct.
Q: What does precision measure?
A: Among predicted positives, how many are truly positive.
Q: What does recall measure?
A: Among actual positives, how many were found.
Q: What does F1 score balance?
A: Precision and recall.
Q: What is the range of accuracy?
A: 0 to 1 (0% to 100%).
Q: When is precision more important?
A: When false alarms are costly, such as spam filtering.
Q: When is recall more important?
A: When missing a positive is costly, such as disease detection.
Q: Why is accuracy misleading on imbalanced data?
A: A model predicting only the majority class gets high accuracy.
Q: What is overfitting?
A: Model fits training data too closely and performs poorly on new data.
Q: What is underfitting?
A: Model is too simple to capture patterns.
Q: What is a train-test split?
A: Dividing data into training and testing sets.
Q: What is cross-validation?
A: Testing the model on different data splits.
Q: What is a good F1 score?
A: A value close to 1.
Q: What is the F1 score if precision and recall are both 1?
A: 1.
Q: What is the F1 score if either is 0?
A: 0.
Q: What is a baseline model?
A: A simple model used for comparison.
Q: What is bias in evaluation?
A: Systematic error that favours some groups.
Q: What is a false alarm?
A: A false positive.
Q: What is a missed case?
A: A false negative.
Q: What is the cost of a false negative in cancer screening?
A: A real patient goes undetected.
Q: What is ground truth?
A: The verified correct labels.
Q: What is a threshold?
A: A cut-off for turning scores into classes.
Q: In a confusion matrix TP=33, TN=60, FP=40, FN=59. Find the accuracy as a percentage (give a fraction if not whole).
A: 48.438%.
Q: In a confusion matrix TP=54, TN=34, FP=33, FN=37. Find the accuracy as a percentage (give a fraction if not whole).
A: 55.696%.
Q: In a confusion matrix TP=59, TN=42, FP=17, FN=16. Find the accuracy as a percentage (give a fraction if not whole).
A: 75.373%.
Q: In a confusion matrix TP=56, TN=37, FP=35, FN=45. Find the accuracy as a percentage (give a fraction if not whole).
A: 53.757%.
Q: In a confusion matrix TP=44, TN=55, FP=16, FN=11. Find the accuracy as a percentage (give a fraction if not whole).
A: 78.571%.
Q: In a confusion matrix TP=33, TN=24, FP=14, FN=10. Find the accuracy as a percentage (give a fraction if not whole).
A: 70.37%.
Q: In a confusion matrix TP=39, TN=56, FP=49, FN=45. Find the accuracy as a percentage (give a fraction if not whole).
A: 50.265%.
Q: In a confusion matrix TP=7, TN=43, FP=30, FN=33. Find the accuracy as a percentage (give a fraction if not whole).
A: 44.248%.
Q: In a confusion matrix TP=46, TN=52, FP=44, FN=46. Find the accuracy as a percentage (give a fraction if not whole).
A: 52.128%.
Q: In a confusion matrix TP=15, TN=44, FP=5, FN=58. Find the accuracy as a percentage (give a fraction if not whole).
A: 48.361%.
Q: In a confusion matrix TP=38, TN=9, FP=8, FN=7. Find the accuracy as a percentage (give a fraction if not whole).
A: 75.806%.
Q: In a confusion matrix TP=17, TN=20, FP=43, FN=6. Find the accuracy as a percentage (give a fraction if not whole).
A: 43.023%.
Q: In a confusion matrix TP=54, TN=34, FP=25, FN=33. Find the accuracy as a percentage (give a fraction if not whole).
A: 60.274%.
Q: In a confusion matrix TP=42, TN=58, FP=17, FN=38. Find the accuracy as a percentage (give a fraction if not whole).
A: 64.516%.
Q: If TP=19 and FP=23, find the precision as a percentage.
A: 45.238%.
Q: If TP=36 and FP=5, find the precision as a percentage.
A: 87.805%.
Q: If TP=47 and FP=10, find the precision as a percentage.
A: 82.456%.
Q: If TP=34 and FP=22, find the precision as a percentage.
A: 60.714%.
Q: If TP=31 and FP=40, find the precision as a percentage.
A: 43.662%.
Q: If TP=58 and FP=10, find the precision as a percentage.
A: 85.294%.
Q: If TP=50 and FP=21, find the precision as a percentage.
A: 70.423%.
Q: If TP=25 and FP=19, find the precision as a percentage.
A: 56.818%.
Q: If TP=37 and FP=23, find the precision as a percentage.
A: 61.667%.
Q: If TP=6 and FP=9, find the precision as a percentage.
A: 40%.
Q: If TP=41 and FP=11, find the precision as a percentage.
A: 78.846%.
Q: If TP=30 and FP=11, find the precision as a percentage.
A: 73.171%.
Q: If TP=59 and FN=23, find the recall as a percentage.
A: 71.951%.
Q: If TP=29 and FN=9, find the recall as a percentage.
A: 76.316%.
Q: If TP=6 and FN=5, find the recall as a percentage.
A: 54.545%.
Q: If TP=18 and FN=18, find the recall as a percentage.
A: 50%.
Q: If TP=8 and FN=35, find the recall as a percentage.
A: 18.605%.
Q: If TP=29 and FN=30, find the recall as a percentage.
A: 49.153%.
Q: If TP=31 and FN=9, find the recall as a percentage.
A: 77.5%.
Q: If TP=41 and FN=17, find the recall as a percentage.
A: 70.69%.
Q: If TP=54 and FN=22, find the recall as a percentage.
A: 71.053%.
Q: If TP=26 and FN=10, find the recall as a percentage.
A: 72.222%.
Q: If TP=24 and FN=26, find the recall as a percentage.
A: 48%.
Q: If TP=5 and FN=31, find the recall as a percentage.
A: 13.889%.
Q: Precision is 40 and recall is 50. Find the F1 score.
A: 44.444.
Q: Precision is 50 and recall is 40. Find the F1 score.
A: 44.444.
Q: Precision is 40 and recall is 40. Find the F1 score.
A: 40.
Q: Precision is 80 and recall is 80. Find the F1 score.
A: 80.
Q: Precision is 50 and recall is 50. Find the F1 score.
A: 50.
Q: Precision is 80 and recall is 50. Find the F1 score.
A: 61.538.
Q: Precision is 50 and recall is 80. Find the F1 score.
A: 61.538.
Q: Precision is 80 and recall is 40. Find the F1 score.
A: 53.333.
@quiz
? What is meant by Evaluation?
+ Measuring model performance
- Standard for comparison
- Repeated split testing
- Overall correctness
! From the CBSE Class 9 syllabus.
? What is meant by Prediction?
- Measuring model performance
+ Model output
- recall
- Data to learn
! From the CBSE Class 9 syllabus.
? What is meant by Reality?
- Correctness of positives
- Wrong no
- recall
+ Actual outcome
! From the CBSE Class 9 syllabus.
? What is meant by Confusion matrix?
- Correctness of positives
+ Prediction-reality table
- Model too simple
- Coverage of actual positives
! From the CBSE Class 9 syllabus.
? What is meant by True Positive?
+ Correct yes
- Memorising training data
- Working on new data
- False positive
! From the CBSE Class 9 syllabus.
? What is meant by True Negative?
+ Correct no
- Overall correctness
- Model output
- Wrong no
! From the CBSE Class 9 syllabus.
? What is meant by False Positive?
- Measuring model performance
- Wrong predictions fraction
- Coverage of actual positives
+ Wrong yes
! From the CBSE Class 9 syllabus.
? What is meant by False Negative?
+ Wrong no
- Model too simple
- Measure of quality
- Overall correctness
! From the CBSE Class 9 syllabus.
? What is meant by Accuracy?
- False negative
- Measure of quality
+ Overall correctness
- Memorising training data
! From the CBSE Class 9 syllabus.
? What is meant by Precision?
- Simple comparison model
- False negative
- Data to evaluate
+ Correctness of positives
! From the CBSE Class 9 syllabus.
? What is meant by Recall?
- Memorising training data
- Data to learn
- Wrong no
+ Coverage of actual positives
! From the CBSE Class 9 syllabus.
? What is meant by F1 score?
- Standard for comparison
- Measuring model performance
+ Balance of precision and recall
- Data to learn
! From the CBSE Class 9 syllabus.
? What is meant by Type I error?
- Actual outcome
+ False positive
- Measuring model performance
- Data to learn
! From the CBSE Class 9 syllabus.
? What is meant by Type II error?
- Standard for comparison
- Measure of quality
+ False negative
- Correct no
! From the CBSE Class 9 syllabus.
? What is meant by Overfitting?
+ Memorising training data
- Correct yes
- Model output
- Balance of precision and recall
! From the CBSE Class 9 syllabus.
? What is meant by Underfitting?
+ Model too simple
- Balance of precision and recall
- Correct no
- Actual outcome
! From the CBSE Class 9 syllabus.
? What is meant by Training set?
- Wrong predictions fraction
- Actual outcome
- Model output
+ Data to learn
! From the CBSE Class 9 syllabus.
? What is meant by Test set?
- Prediction-reality table
- Tuning check
+ Data to evaluate
- Wrong yes
! From the CBSE Class 9 syllabus.
? What is meant by Validation?
- Cut-off value
+ Tuning check
- Measure of quality
- Wrong no
! From the CBSE Class 9 syllabus.
? What is meant by Cross-validation?
- Tuning check
+ Repeated split testing
- Correctness of positives
- Model too simple
! From the CBSE Class 9 syllabus.
? What is meant by Ground truth?
- Data to evaluate
- Model output
- Prediction-reality table
+ Verified labels
! From the CBSE Class 9 syllabus.
? What is meant by Threshold?
- Data to learn
- True negative rate
+ Cut-off value
- Wrong no
! From the CBSE Class 9 syllabus.
? What is meant by Baseline?
+ Simple comparison model
- True negative rate
- Standard for comparison
- Wrong predictions fraction
! From the CBSE Class 9 syllabus.
? What is meant by Imbalanced data?
- Correct no
- True negative rate
- Measure of quality
+ Unequal class sizes
! From the CBSE Class 9 syllabus.
? What is meant by Generalisation?
- Data to learn
- Memorising training data
- Standard for comparison
+ Working on new data
! From the CBSE Class 9 syllabus.
? What is meant by Error rate?
+ Wrong predictions fraction
- Data to evaluate
- Wrong yes
- False negative
! From the CBSE Class 9 syllabus.
? What is meant by Sensitivity?
- Wrong predictions fraction
- Standard for comparison
+ recall
- Memorising training data
! From the CBSE Class 9 syllabus.
? What is meant by Specificity?
- Measure of quality
- Data to learn
+ True negative rate
- Wrong predictions fraction
! From the CBSE Class 9 syllabus.
? What is meant by False alarm?
+ False positive
- Overall correctness
- Model too simple
- Correct no
! From the CBSE Class 9 syllabus.
? What is meant by Missed detection?
- Data to learn
- Correctness of positives
- Data to evaluate
+ False negative
! From the CBSE Class 9 syllabus.
? What is meant by Metric?
- Measuring model performance
+ Measure of quality
- Unequal class sizes
- Wrong no
! From the CBSE Class 9 syllabus.
? What is meant by Benchmark?
- Tuning check
+ Standard for comparison
- Data to learn
- Repeated split testing
! From the CBSE Class 9 syllabus.
? Which term matches this description: Measuring model performance?
+ Evaluation
- Generalisation
- Precision
- Training set
! From the CBSE Class 9 syllabus.
? Which term matches this description: Model output?
+ Prediction
- Sensitivity
- Overfitting
- True Positive
! From the CBSE Class 9 syllabus.
? Which term matches this description: Actual outcome?
- Validation
- Error rate
+ Reality
- Imbalanced data
! From the CBSE Class 9 syllabus.
? Which term matches this description: Prediction-reality table?
- Type I error
- Training set
- Type II error
+ Confusion matrix
! From the CBSE Class 9 syllabus.
? Which term matches this description: Correct yes?
+ True Positive
- False alarm
- Confusion matrix
- Precision
! From the CBSE Class 9 syllabus.
? Which term matches this description: Correct no?
- Type II error
- Specificity
- Test set
+ True Negative
! From the CBSE Class 9 syllabus.
? Which term matches this description: Wrong yes?
+ False Positive
- True Negative
- Evaluation
- Reality
! From the CBSE Class 9 syllabus.
? Which term matches this description: Wrong no?
- True Positive
- Test set
- Prediction
+ False Negative
! From the CBSE Class 9 syllabus.
? Which term matches this description: Overall correctness?
- False alarm
- Type II error
- Training set
+ Accuracy
! From the CBSE Class 9 syllabus.
? Which term matches this description: Correctness of positives?
- Evaluation
- Threshold
+ Precision
- Recall
! From the CBSE Class 9 syllabus.
? Which term matches this description: Coverage of actual positives?
- Training set
- Missed detection
- False Positive
+ Recall
! From the CBSE Class 9 syllabus.
? Which term matches this description: Balance of precision and recall?
+ F1 score
- Missed detection
- Benchmark
- Evaluation
! From the CBSE Class 9 syllabus.
? Which term matches this description: False positive?
- Sensitivity
+ Type I error
- Baseline
- True Negative
! From the CBSE Class 9 syllabus.
? Which term matches this description: False negative?
- Benchmark
- Ground truth
+ Type II error
- True Positive
! From the CBSE Class 9 syllabus.
? Which term matches this description: Memorising training data?
+ Overfitting
- Specificity
- Prediction
- False Positive
! From the CBSE Class 9 syllabus.
? Which term matches this description: Model too simple?
- Missed detection
+ Underfitting
- Reality
- Type I error
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data to learn?
- Benchmark
+ Training set
- Ground truth
- Overfitting
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data to evaluate?
- True Positive
+ Test set
- Recall
- Error rate
! From the CBSE Class 9 syllabus.
? Which term matches this description: Tuning check?
- Accuracy
+ Validation
- F1 score
- Metric
! From the CBSE Class 9 syllabus.
? Which term matches this description: Repeated split testing?
- Type I error
- Metric
+ Cross-validation
- Prediction
! From the CBSE Class 9 syllabus.
? Which term matches this description: Verified labels?
- Precision
- Error rate
- Underfitting
+ Ground truth
! From the CBSE Class 9 syllabus.
? Which term matches this description: Cut-off value?
+ Threshold
- Benchmark
- False Positive
- Overfitting
! From the CBSE Class 9 syllabus.
? Which term matches this description: Simple comparison model?
- True Positive
- Evaluation
+ Baseline
- Overfitting
! From the CBSE Class 9 syllabus.
? Which term matches this description: Unequal class sizes?
- Generalisation
- F1 score
+ Imbalanced data
- Missed detection
! From the CBSE Class 9 syllabus.
? Which term matches this description: Working on new data?
- Missed detection
+ Generalisation
- Baseline
- Type II error
! From the CBSE Class 9 syllabus.
? Which term matches this description: Wrong predictions fraction?
- Overfitting
+ Error rate
- Prediction
- True Positive
! From the CBSE Class 9 syllabus.
? Which term matches this description: recall?
- Precision
- Validation
- Accuracy
+ Sensitivity
! From the CBSE Class 9 syllabus.
? Which term matches this description: True negative rate?
- Generalisation
- False Negative
+ Specificity
- Evaluation
! From the CBSE Class 9 syllabus.
? Which term matches this description: Measure of quality?
- Prediction
- Evaluation
+ Metric
- Training set
! From the CBSE Class 9 syllabus.
? Which term matches this description: Standard for comparison?
- False alarm
+ Benchmark
- Precision
- Cross-validation
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Evaluation".
- recall
- Actual outcome
- Correctness of positives
+ Measuring model performance
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Prediction".
- Data to learn
- Correctness of positives
- Model too simple
+ Model output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Reality".
- Measure of quality
- Data to learn
+ Actual outcome
- Memorising training data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Confusion matrix".
- Wrong yes
- Correct yes
- Model output
+ Prediction-reality table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "True Positive".
- Unequal class sizes
+ Correct yes
- Prediction-reality table
- Standard for comparison
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "True Negative".
- Overall correctness
- Tuning check
- Verified labels
+ Correct no
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "False Positive".
- recall
- Data to evaluate
+ Wrong yes
- Repeated split testing
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "False Negative".
- Repeated split testing
- Overall correctness
- Verified labels
+ Wrong no
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Accuracy".
- Model too simple
+ Overall correctness
- Wrong predictions fraction
- Working on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Precision".
- Measuring model performance
+ Correctness of positives
- Actual outcome
- Simple comparison model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Recall".
+ Coverage of actual positives
- True negative rate
- Wrong yes
- False negative
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "F1 score".
- Correct no
- Correctness of positives
- Simple comparison model
+ Balance of precision and recall
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Type I error".
- Correct yes
- recall
- Simple comparison model
+ False positive
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Type II error".
- Correct no
+ False negative
- Measure of quality
- Data to evaluate
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Overfitting".
- Balance of precision and recall
- Repeated split testing
- Data to learn
+ Memorising training data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Underfitting".
- recall
- Data to evaluate
- Correct no
+ Model too simple
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Training set".
- Correct no
- Wrong no
+ Data to learn
- Tuning check
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Test set".
- False negative
- Repeated split testing
- Cut-off value
+ Data to evaluate
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Validation".
- Data to learn
- False positive
+ Tuning check
- Memorising training data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Cross-validation".
+ Repeated split testing
- Wrong no
- Correct no
- Wrong yes
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Ground truth".
+ Verified labels
- Coverage of actual positives
- Tuning check
- Measure of quality
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Threshold".
- Measure of quality
- Memorising training data
+ Cut-off value
- False positive
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Baseline".
- Prediction-reality table
- Correct no
+ Simple comparison model
- False positive
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Imbalanced data".
- Overall correctness
- Correct no
- Standard for comparison
+ Unequal class sizes
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Generalisation".
- Overall correctness
- Balance of precision and recall
- Memorising training data
+ Working on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Error rate".
+ Wrong predictions fraction
- Model output
- True negative rate
- Working on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sensitivity".
- Actual outcome
- Data to learn
- Correctness of positives
+ recall
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Specificity".
- Actual outcome
- Data to evaluate
+ True negative rate
- Wrong predictions fraction
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "False alarm".
- Working on new data
- False negative
+ False positive
- Correctness of positives
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Missed detection".
- Correctness of positives
+ False negative
- Simple comparison model
- False positive
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Metric".
- False negative
+ Measure of quality
- Overall correctness
- Simple comparison model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Benchmark".
- Unequal class sizes
+ Standard for comparison
- Balance of precision and recall
- Verified labels
! From the CBSE Class 9 syllabus.
? In a confusion matrix TP=33, TN=60, FP=40, FN=59. Find the accuracy as a percentage (give a fraction if not whole).
- 49.438%
- 96.875%
- 72.656%
+ 48.438%
! Worked out step by step.
? In a confusion matrix TP=54, TN=34, FP=33, FN=37. Find the accuracy as a percentage (give a fraction if not whole).
+ 55.696%
- 222.785%
- 37.131%
- 60.696%
! Worked out step by step.
? In a confusion matrix TP=59, TN=42, FP=17, FN=16. Find the accuracy as a percentage (give a fraction if not whole).
+ 75.373%
- 150.746%
- 7.537%
- 37.687%
! Worked out step by step.
? In a confusion matrix TP=56, TN=37, FP=35, FN=45. Find the accuracy as a percentage (give a fraction if not whole).
- 48.382%
- 51.757%
- 537.572%
+ 53.757%
! Worked out step by step.
? In a confusion matrix TP=44, TN=55, FP=16, FN=11. Find the accuracy as a percentage (give a fraction if not whole).
+ 78.571%
- 19.643%
- 52.381%
- 785.714%
! Worked out step by step.
? In a confusion matrix TP=33, TN=24, FP=14, FN=10. Find the accuracy as a percentage (give a fraction if not whole).
- 281.481%
- 69.37%
- 703.704%
+ 70.37%
! Worked out step by step.
? In a confusion matrix TP=39, TN=56, FP=49, FN=45. Find the accuracy as a percentage (give a fraction if not whole).
- 5.026%
- 52.265%
+ 50.265%
- 75.397%
! Worked out step by step.
? In a confusion matrix TP=7, TN=43, FP=30, FN=33. Find the accuracy as a percentage (give a fraction if not whole).
- 46.248%
- 49.248%
+ 44.248%
- 88.496%
! Worked out step by step.
? In a confusion matrix TP=46, TN=52, FP=44, FN=46. Find the accuracy as a percentage (give a fraction if not whole).
- 26.064%
- 46.915%
+ 52.128%
- 104.255%
! Worked out step by step.
? In a confusion matrix TP=15, TN=44, FP=5, FN=58. Find the accuracy as a percentage (give a fraction if not whole).
- 4.836%
+ 48.361%
- 483.607%
- 72.541%
! Worked out step by step.
? In a confusion matrix TP=38, TN=9, FP=8, FN=7. Find the accuracy as a percentage (give a fraction if not whole).
- 303.226%
- 758.065%
+ 75.806%
- 37.903%
! Worked out step by step.
? In a confusion matrix TP=17, TN=20, FP=43, FN=6. Find the accuracy as a percentage (give a fraction if not whole).
+ 43.023%
- 45.023%
- 10.756%
- 28.682%
! Worked out step by step.
? In a confusion matrix TP=54, TN=34, FP=25, FN=33. Find the accuracy as a percentage (give a fraction if not whole).
- 15.068%
+ 60.274%
- 58.274%
- 241.096%
! Worked out step by step.
? In a confusion matrix TP=42, TN=58, FP=17, FN=38. Find the accuracy as a percentage (give a fraction if not whole).
- 70.968%
- 129.032%
+ 64.516%
- 32.258%
! Worked out step by step.
? If TP=19 and FP=23, find the precision as a percentage.
- 40.714%
+ 45.238%
- 44.238%
- 46.238%
! Worked out step by step.
? If TP=36 and FP=5, find the precision as a percentage.
+ 87.805%
- 79.024%
- 85.805%
- 43.902%
! Worked out step by step.
? If TP=47 and FP=10, find the precision as a percentage.
- 123.684%
- 54.971%
- 81.456%
+ 82.456%
! Worked out step by step.
? If TP=34 and FP=22, find the precision as a percentage.
- 15.179%
- 62.714%
+ 60.714%
- 58.714%
! Worked out step by step.
? If TP=31 and FP=40, find the precision as a percentage.
- 42.662%
- 44.662%
- 29.108%
+ 43.662%
! Worked out step by step.
? If TP=58 and FP=10, find the precision as a percentage.
- 87.294%
+ 85.294%
- 84.294%
- 93.824%
! Worked out step by step.
? If TP=50 and FP=21, find the precision as a percentage.
+ 70.423%
- 77.465%
- 46.948%
- 68.423%
! Worked out step by step.
? If TP=25 and FP=19, find the precision as a percentage.
- 61.818%
- 14.205%
+ 56.818%
- 227.273%
! Worked out step by step.
? If TP=37 and FP=23, find the precision as a percentage.
- 55.5%
- 123.333%
- 62.667%
+ 61.667%
! Worked out step by step.
? If TP=6 and FP=9, find the precision as a percentage.
+ 40%
- 160%
- 42%
- 44%
! Worked out step by step.
? If TP=41 and FP=11, find the precision as a percentage.
+ 78.846%
- 77.846%
- 7.885%
- 788.462%
! Worked out step by step.
? If TP=30 and FP=11, find the precision as a percentage.
- 36.585%
- 7.317%
- 146.341%
+ 73.171%
! Worked out step by step.
? If TP=59 and FN=23, find the recall as a percentage.
+ 71.951%
- 35.976%
- 143.902%
- 69.951%
! Worked out step by step.
? If TP=29 and FN=9, find the recall as a percentage.
- 38.158%
- 7.632%
- 81.316%
+ 76.316%
! Worked out step by step.
? If TP=6 and FN=5, find the recall as a percentage.
- 218.182%
- 13.636%
- 60%
+ 54.545%
! Worked out step by step.
? If TP=18 and FN=18, find the recall as a percentage.
- 51%
- 52%
- 45%
+ 50%
! Worked out step by step.
? If TP=8 and FN=35, find the recall as a percentage.
- 17.605%
+ 18.605%
- 27.907%
- 19.605%
! Worked out step by step.
? If TP=29 and FN=30, find the recall as a percentage.
- 44.237%
+ 49.153%
- 24.576%
- 196.61%
! Worked out step by step.
? If TP=31 and FN=9, find the recall as a percentage.
- 310%
- 51.667%
+ 77.5%
- 38.75%
! Worked out step by step.
? If TP=41 and FN=17, find the recall as a percentage.
- 69.69%
- 141.379%
+ 70.69%
- 282.759%
! Worked out step by step.
? If TP=54 and FN=22, find the recall as a percentage.
- 73.053%
- 142.105%
+ 71.053%
- 76.053%
! Worked out step by step.
? If TP=26 and FN=10, find the recall as a percentage.
+ 72.222%
- 36.111%
- 18.056%
- 722.222%
! Worked out step by step.
? If TP=24 and FN=26, find the recall as a percentage.
- 47%
- 43.2%
+ 48%
- 24%
! Worked out step by step.
? If TP=5 and FN=31, find the recall as a percentage.
- 12.889%
- 14.889%
+ 13.889%
- 18.889%
! Worked out step by step.
? Precision is 40 and recall is 50. Find the F1 score.
- 42.444
- 40
+ 44.444
- 49.444
! Worked out step by step.
? Precision is 50 and recall is 40. Find the F1 score.
- 49.444
- 43.444
- 42.444
+ 44.444
! Worked out step by step.
? Precision is 40 and recall is 40. Find the F1 score.
- 39
- 60
+ 40
- 44
! Worked out step by step.
? Precision is 80 and recall is 80. Find the F1 score.
- 79
+ 80
- 88
- 40
! Worked out step by step.
? Precision is 50 and recall is 50. Find the F1 score.
+ 50
- 45
- 51
- 55
! Worked out step by step.
? Precision is 80 and recall is 50. Find the F1 score.
- 63.538
- 55.385
- 15.385
+ 61.538
! Worked out step by step.
? Precision is 50 and recall is 80. Find the F1 score.
- 41.026
- 30.769
+ 61.538
- 55.385
! Worked out step by step.
? Precision is 80 and recall is 40. Find the F1 score.
+ 53.333
- 51.333
- 26.667
- 58.667
! Worked out step by step.
@visual
flow | Evaluation | Train model; Test on unseen data; Confusion matrix; Accuracy precision recall F1
compare | Matrix | TP: correct yes; TN: correct no; FP: false alarm; FN: missed case
@problems
P: Write the formula for accuracy.
A: Accuracy = (TP + TN) ÷ (TP + TN + FP + FN).
R: 1 | Key idea
R: 1 | Example

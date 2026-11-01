# AI project cycle
minutes: 40
yt: class 9 ai project cycle
@study
The AI project cycle has five stages: problem scoping, data acquisition, data exploration, modelling and evaluation. Problem scoping uses the 4Ws canvas (Who, What, Where, Why). Data is collected, then explored with charts. Modelling can be rule-based or learning-based. Evaluation tests the model on unseen data using accuracy, precision, recall and F1 score from the confusion matrix.
## Deep dive: problem scoping
Problem scoping means understanding clearly the problem to be solved. The 4Ws canvas asks Who (the stakeholders affected), What (the problem and its nature), Where (the context or situation) and Why (the benefit of solving it). The result is the problem statement template: "Our <stakeholder> has a problem of <issue> when <context>. An ideal solution would <benefit>." Linking the problem to the UN Sustainable Development Goals is common.
## Deep dive: data acquisition and exploration
Data acquisition collects accurate and reliable data for training and testing. Sources: surveys, web scraping, sensors, cameras, observations, APIs and open government data. Data may be structured (tables) or unstructured (images, audio). Data exploration finds patterns by visualising: bar graphs, line graphs, pie charts, scatter plots and histograms. Clean data (no missing or wrong values) gives a better model.
## Deep dive: modelling
Modelling is choosing and training an algorithm. A rule-based approach has rules written by the developer; it cannot learn. A learning-based approach lets the machine find rules from data. Learning-based models include supervised learning (classification gives categories, regression gives numbers), unsupervised learning (clustering groups similar items; association finds items that go together) and reinforcement learning. Data is split into training and testing sets (for example 80 percent and 20 percent).
## Deep dive: evaluation
Evaluation checks the model with unseen data. The confusion matrix compares predicted and actual values: TP (true positive), TN (true negative), FP (false positive), FN (false negative). Accuracy = (TP + TN)/(TP + TN + FP + FN). Precision = TP/(TP + FP). Recall = TP/(TP + FN). F1 score = 2 x precision x recall/(precision + recall). Overfitting means the model memorises training data and fails on new data; underfitting means it is too simple to learn the pattern.
## Hindi saransh
AI project cycle: Problem scoping, Data acquisition, Data exploration, Modelling, Evaluation.
> Accuracy = (TP + TN)/total. Precision = TP/(TP + FP). Recall = TP/(TP + FN).
@formulas
## Evaluation metrics
Accuracy | (TP + TN)/(TP + TN + FP + FN) | overall correctness
Precision | TP/(TP + FP) | how many predicted positives are correct
Recall | TP/(TP + FN) | how many actual positives were found
F1 score | 2 x P x R/(P + R) | balance of precision and recall
Error | (FP + FN)/total | wrong predictions
## Stages
AI project cycle | scoping, acquisition, exploration, modelling, evaluation | 
4Ws | Who, What, Where, Why | 
Train-test split | commonly 80 percent and 20 percent | 

@qa
Q: What is meant by AI project cycle?
A: The step-by-step process of planning, building and testing an AI project.
Q: What is meant by Problem scoping?
A: Understanding and defining the problem to be solved.
Q: What is meant by 4Ws canvas?
A: A tool using Who, What, Where and Why to define a problem.
Q: What is meant by Stakeholder?
A: A person who is affected by the problem.
Q: What is meant by Problem statement?
A: A short description of the problem, its context and the ideal solution.
Q: What is meant by Data acquisition?
A: Collecting data for training and testing a model.
Q: What is meant by Survey?
A: Collecting data by asking people questions.
Q: What is meant by Web scraping?
A: Automatically collecting data from websites.
Q: What is meant by Sensor data?
A: Data collected by devices such as temperature sensors.
Q: What is meant by Open data?
A: Data made freely available by governments and organisations.
Q: What is meant by Structured data?
A: Data arranged in rows and columns.
Q: What is meant by Unstructured data?
A: Data without a fixed format such as images and audio.
Q: What is meant by Data exploration?
A: Studying data using graphs to find patterns.
Q: What is meant by Data visualisation?
A: Showing data in charts and graphs.
Q: What is meant by Bar graph?
A: A chart that uses bars to compare categories.
Q: What is meant by Line graph?
A: A chart that shows change over time.
Q: What is meant by Pie chart?
A: A circular chart that shows parts of a whole.
Q: What is meant by Scatter plot?
A: A graph that shows the relation between two variables.
Q: What is meant by Histogram?
A: A graph that shows how data is distributed in ranges.
Q: What is meant by Modelling?
A: Choosing and training an algorithm on data.
Q: What is meant by Rule-based approach?
A: The developer gives the machine fixed rules.
Q: What is meant by Learning-based approach?
A: The machine finds the rules from data.
Q: What is meant by Classification?
A: Predicting a category such as spam or not spam.
Q: What is meant by Regression?
A: Predicting a number such as a house price.
Q: What is meant by Clustering?
A: Grouping similar data points without labels.
Q: What is meant by Training set?
A: The part of data used to train the model.
Q: What is meant by Testing set?
A: The part of data used to test the model.
Q: What is meant by Evaluation?
A: Checking how well a model performs on unseen data.
Q: What is meant by Confusion matrix?
A: A table comparing predicted and actual results.
Q: What is meant by True positive?
A: The model predicted yes and the answer was yes.
Q: What is meant by True negative?
A: The model predicted no and the answer was no.
Q: What is meant by False positive?
A: The model predicted yes but the answer was no.
Q: What is meant by False negative?
A: The model predicted no but the answer was yes.
Q: What is meant by Accuracy?
A: The fraction of all predictions that are correct.
Q: What is meant by Precision?
A: The fraction of predicted positives that are really positive.
Q: What is meant by Recall?
A: The fraction of real positives that the model found.
Q: What is meant by F1 score?
A: A number that balances precision and recall.
Q: What is meant by Overfitting?
A: When a model memorises training data and fails on new data.
Q: What is meant by Underfitting?
A: When a model is too simple to learn the pattern.
Q: What is meant by Error rate?
A: The fraction of predictions that are wrong.
Q: What is meant by Feature?
A: An input property used by a model to make a prediction.
Q: What is meant by Target?
A: The output that the model is trying to predict.
Q: What is meant by Data cleaning?
A: Removing mistakes and missing values from data.
Q: What is meant by Sample?
A: A small part of data that represents the whole.
Q: What is meant by Outlier?
A: A value that is very different from the others.
Q: What is meant by Deployment?
A: Putting a trained model into real use.
Q: What is meant by Iteration?
A: Repeating steps to improve the model.
Q: Which term is described as: the step-by-step process of planning, building and testing an AI project?
A: AI project cycle.
Q: Which term is described as: understanding and defining the problem to be solved?
A: Problem scoping.
Q: Which term is described as: a tool using Who, What, Where and Why to define a problem?
A: 4Ws canvas.
Q: Which term is described as: a person who is affected by the problem?
A: Stakeholder.
Q: Which term is described as: a short description of the problem, its context and the ideal solution?
A: Problem statement.
Q: Which term is described as: collecting data for training and testing a model?
A: Data acquisition.
Q: Which term is described as: collecting data by asking people questions?
A: Survey.
Q: Which term is described as: automatically collecting data from websites?
A: Web scraping.
Q: Which term is described as: data collected by devices such as temperature sensors?
A: Sensor data.
Q: Which term is described as: data made freely available by governments and organisations?
A: Open data.
Q: Which term is described as: data arranged in rows and columns?
A: Structured data.
Q: Which term is described as: data without a fixed format such as images and audio?
A: Unstructured data.
Q: Which term is described as: studying data using graphs to find patterns?
A: Data exploration.
Q: Which term is described as: showing data in charts and graphs?
A: Data visualisation.
Q: Which term is described as: a chart that uses bars to compare categories?
A: Bar graph.
Q: Which term is described as: a chart that shows change over time?
A: Line graph.
Q: Which term is described as: a circular chart that shows parts of a whole?
A: Pie chart.
Q: Which term is described as: a graph that shows the relation between two variables?
A: Scatter plot.
Q: Which term is described as: a graph that shows how data is distributed in ranges?
A: Histogram.
Q: Which term is described as: choosing and training an algorithm on data?
A: Modelling.
Q: Which term is described as: the developer gives the machine fixed rules?
A: Rule-based approach.
Q: Which term is described as: the machine finds the rules from data?
A: Learning-based approach.
Q: Which term is described as: predicting a category such as spam or not spam?
A: Classification.
Q: Which term is described as: predicting a number such as a house price?
A: Regression.
Q: Which term is described as: grouping similar data points without labels?
A: Clustering.
Q: Which term is described as: the part of data used to train the model?
A: Training set.
Q: Which term is described as: the part of data used to test the model?
A: Testing set.
Q: Which term is described as: checking how well a model performs on unseen data?
A: Evaluation.
Q: Which term is described as: a table comparing predicted and actual results?
A: Confusion matrix.
Q: Which term is described as: the model predicted yes and the answer was yes?
A: True positive.
Q: Which term is described as: the model predicted no and the answer was no?
A: True negative.
Q: Which term is described as: the model predicted yes but the answer was no?
A: False positive.
Q: Which term is described as: the model predicted no but the answer was yes?
A: False negative.
Q: Which term is described as: the fraction of all predictions that are correct?
A: Accuracy.
Q: Which term is described as: the fraction of predicted positives that are really positive?
A: Precision.
Q: Which term is described as: the fraction of real positives that the model found?
A: Recall.
Q: Which term is described as: a number that balances precision and recall?
A: F1 score.
Q: Which term is described as: when a model memorises training data and fails on new data?
A: Overfitting.
Q: Which term is described as: when a model is too simple to learn the pattern?
A: Underfitting.
Q: Which term is described as: the fraction of predictions that are wrong?
A: Error rate.
Q: Which term is described as: an input property used by a model to make a prediction?
A: Feature.
Q: Which term is described as: the output that the model is trying to predict?
A: Target.
Q: Which term is described as: removing mistakes and missing values from data?
A: Data cleaning.
Q: Which term is described as: a small part of data that represents the whole?
A: Sample.
Q: Which term is described as: a value that is very different from the others?
A: Outlier.
Q: Which term is described as: putting a trained model into real use?
A: Deployment.
Q: Which term is described as: repeating steps to improve the model?
A: Iteration.
Q: How many stages are there in the AI project cycle?
A: Five.
Q: What is the first stage of the AI project cycle?
A: Problem scoping.
Q: What is the last stage of the AI project cycle?
A: Evaluation.
Q: What do the 4Ws stand for?
A: Who, What, Where and Why.
Q: Which stage comes after data acquisition?
A: Data exploration.
Q: Which stage comes after data exploration?
A: Modelling.
Q: What is the formula for accuracy?
A: (TP + TN)/(TP + TN + FP + FN).
Q: What is the formula for precision?
A: TP/(TP + FP).
Q: What is the formula for recall?
A: TP/(TP + FN).
Q: What is the formula for F1 score?
A: 2 x precision x recall/(precision + recall).
Q: Why is data split into training and testing sets?
A: To test the model on unseen data.
Q: Which graph shows change over time?
A: A line graph.
Q: Which graph shows parts of a whole?
A: A pie chart.
Q: Which learning approach needs no rules from the developer?
A: Learning-based.
Q: What is the common train-test split?
A: 80 percent and 20 percent.
Q: Name two sources of data.
A: Surveys and sensors.
Q: Why should data be accurate?
A: Bad data gives a bad model.
Q: Which problem gives a number as output?
A: Regression.
Q: Which problem gives a category as output?
A: Classification.
Q: Which problem groups similar items?
A: Clustering.
Q: Accuracy (percent) when TP=20, TN=25, FP=3, FN=2
A: 90 %.
Q: Precision (percent) when TP=20 and FP=3
A: 87 %.
Q: Recall (percent) when TP=20 and FN=2
A: 90.9 %.
Q: Accuracy (percent) when TP=40, TN=30, FP=10, FN=20
A: 70 %.
Q: Precision (percent) when TP=40 and FP=10
A: 80 %.
Q: Recall (percent) when TP=40 and FN=20
A: 66.7 %.
Q: Accuracy (percent) when TP=50, TN=40, FP=5, FN=5
A: 90 %.
Q: Precision (percent) when TP=50 and FP=5
A: 90.9 %.
Q: Recall (percent) when TP=50 and FN=5
A: 90.9 %.
Q: Accuracy (percent) when TP=15, TN=60, FP=10, FN=15
A: 75 %.
Q: Precision (percent) when TP=15 and FP=10
A: 60 %.
Q: Recall (percent) when TP=15 and FN=15
A: 50 %.
Q: Accuracy (percent) when TP=30, TN=45, FP=12, FN=13
A: 75 %.
Q: Precision (percent) when TP=30 and FP=12
A: 71.4 %.
Q: Recall (percent) when TP=30 and FN=13
A: 69.8 %.
Q: Accuracy (percent) when TP=70, TN=20, FP=5, FN=5
A: 90 %.
Q: Precision (percent) when TP=70 and FP=5
A: 93.3 %.
Q: Recall (percent) when TP=70 and FN=5
A: 93.3 %.
Q: Accuracy (percent) when TP=35, TN=50, FP=8, FN=7
A: 85 %.
Q: Precision (percent) when TP=35 and FP=8
A: 81.4 %.
Q: Recall (percent) when TP=35 and FN=7
A: 83.3 %.
Q: Accuracy (percent) when TP=25, TN=35, FP=15, FN=5
A: 75 %.
Q: Precision (percent) when TP=25 and FP=15
A: 62.5 %.
Q: Recall (percent) when TP=25 and FN=5
A: 83.3 %.
Q: Accuracy (percent) when TP=60, TN=25, FP=10, FN=5
A: 85 %.
Q: Precision (percent) when TP=60 and FP=10
A: 85.7 %.
Q: Recall (percent) when TP=60 and FN=5
A: 92.3 %.
Q: Accuracy (percent) when TP=45, TN=40, FP=5, FN=10
A: 85 %.
Q: Precision (percent) when TP=45 and FP=5
A: 90 %.
Q: Recall (percent) when TP=45 and FN=10
A: 81.8 %.
Q: Accuracy (percent) when TP=10, TN=80, FP=5, FN=5
A: 90 %.
Q: Precision (percent) when TP=10 and FP=5
A: 66.7 %.
Q: Recall (percent) when TP=10 and FN=5
A: 66.7 %.
Q: Accuracy (percent) when TP=55, TN=30, FP=5, FN=10
A: 85 %.
Q: Precision (percent) when TP=55 and FP=5
A: 91.7 %.
Q: Recall (percent) when TP=55 and FN=10
A: 84.6 %.
Q: Training examples when 100 examples are split 80 percent for training
A: 8.
Q: Training examples when 200 examples are split 80 percent for training
A: 16.
Q: Training examples when 500 examples are split 70 percent for training
A: 35.
Q: Training examples when 1000 examples are split 80 percent for training
A: 8.
Q: Training examples when 250 examples are split 60 percent for training
A: 15.
Q: Training examples when 400 examples are split 75 percent for training
A: 3.
@quiz
? What is meant by AI project cycle?
- A circular chart that shows parts of a whole
+ The step-by-step process of planning, building and testing an AI project
- Choosing and training an algorithm on data
- Predicting a number such as a house price
! From the CBSE Class 9 syllabus.
? What is meant by Problem scoping?
- A small part of data that represents the whole
- The part of data used to train the model
- A graph that shows how data is distributed in ranges
+ Understanding and defining the problem to be solved
! From the CBSE Class 9 syllabus.
? What is meant by 4Ws canvas?
- The step-by-step process of planning, building and testing an AI project
+ A tool using Who, What, Where and Why to define a problem
- The output that the model is trying to predict
- The model predicted no and the answer was no
! From the CBSE Class 9 syllabus.
? What is meant by Stakeholder?
+ A person who is affected by the problem
- Grouping similar data points without labels
- Data collected by devices such as temperature sensors
- A circular chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by Problem statement?
- The part of data used to train the model
+ A short description of the problem, its context and the ideal solution
- Understanding and defining the problem to be solved
- A chart that uses bars to compare categories
! From the CBSE Class 9 syllabus.
? What is meant by Data acquisition?
- Predicting a category such as spam or not spam
- Predicting a number such as a house price
+ Collecting data for training and testing a model
- The fraction of predicted positives that are really positive
! From the CBSE Class 9 syllabus.
? What is meant by Survey?
- Grouping similar data points without labels
- Repeating steps to improve the model
+ Collecting data by asking people questions
- The model predicted no but the answer was yes
! From the CBSE Class 9 syllabus.
? What is meant by Web scraping?
- Showing data in charts and graphs
- The fraction of real positives that the model found
+ Automatically collecting data from websites
- The model predicted no and the answer was no
! From the CBSE Class 9 syllabus.
? What is meant by Sensor data?
+ Data collected by devices such as temperature sensors
- A number that balances precision and recall
- Removing mistakes and missing values from data
- Choosing and training an algorithm on data
! From the CBSE Class 9 syllabus.
? What is meant by Open data?
- A chart that uses bars to compare categories
- A short description of the problem, its context and the ideal solution
+ Data made freely available by governments and organisations
- Putting a trained model into real use
! From the CBSE Class 9 syllabus.
? What is meant by Structured data?
- The fraction of predictions that are wrong
+ Data arranged in rows and columns
- A small part of data that represents the whole
- Putting a trained model into real use
! From the CBSE Class 9 syllabus.
? What is meant by Unstructured data?
- Data made freely available by governments and organisations
- Grouping similar data points without labels
- Repeating steps to improve the model
+ Data without a fixed format such as images and audio
! From the CBSE Class 9 syllabus.
? What is meant by Data exploration?
- Putting a trained model into real use
+ Studying data using graphs to find patterns
- The step-by-step process of planning, building and testing an AI project
- Choosing and training an algorithm on data
! From the CBSE Class 9 syllabus.
? What is meant by Data visualisation?
- A chart that shows change over time
- Understanding and defining the problem to be solved
- Checking how well a model performs on unseen data
+ Showing data in charts and graphs
! From the CBSE Class 9 syllabus.
? What is meant by Bar graph?
- Removing mistakes and missing values from data
- An input property used by a model to make a prediction
- A short description of the problem, its context and the ideal solution
+ A chart that uses bars to compare categories
! From the CBSE Class 9 syllabus.
? What is meant by Line graph?
- Data without a fixed format such as images and audio
- Predicting a number such as a house price
- An input property used by a model to make a prediction
+ A chart that shows change over time
! From the CBSE Class 9 syllabus.
? What is meant by Pie chart?
- When a model memorises training data and fails on new data
- Choosing and training an algorithm on data
- Collecting data for training and testing a model
+ A circular chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by Scatter plot?
- Understanding and defining the problem to be solved
+ A graph that shows the relation between two variables
- The model predicted no but the answer was yes
- A table comparing predicted and actual results
! From the CBSE Class 9 syllabus.
? What is meant by Histogram?
- The part of data used to train the model
- Collecting data for training and testing a model
+ A graph that shows how data is distributed in ranges
- The developer gives the machine fixed rules
! From the CBSE Class 9 syllabus.
? What is meant by Modelling?
- Putting a trained model into real use
- A short description of the problem, its context and the ideal solution
+ Choosing and training an algorithm on data
- Showing data in charts and graphs
! From the CBSE Class 9 syllabus.
? What is meant by Rule-based approach?
+ The developer gives the machine fixed rules
- The machine finds the rules from data
- Predicting a category such as spam or not spam
- A person who is affected by the problem
! From the CBSE Class 9 syllabus.
? What is meant by Learning-based approach?
+ The machine finds the rules from data
- Checking how well a model performs on unseen data
- Understanding and defining the problem to be solved
- The model predicted no but the answer was yes
! From the CBSE Class 9 syllabus.
? What is meant by Classification?
- The model predicted yes but the answer was no
- The fraction of all predictions that are correct
- Showing data in charts and graphs
+ Predicting a category such as spam or not spam
! From the CBSE Class 9 syllabus.
? What is meant by Regression?
+ Predicting a number such as a house price
- The model predicted no but the answer was yes
- A chart that shows change over time
- Removing mistakes and missing values from data
! From the CBSE Class 9 syllabus.
? What is meant by Clustering?
+ Grouping similar data points without labels
- Automatically collecting data from websites
- When a model memorises training data and fails on new data
- A person who is affected by the problem
! From the CBSE Class 9 syllabus.
? What is meant by Training set?
- The developer gives the machine fixed rules
- Automatically collecting data from websites
- The model predicted no and the answer was no
+ The part of data used to train the model
! From the CBSE Class 9 syllabus.
? What is meant by Testing set?
- The fraction of real positives that the model found
- A chart that shows change over time
- The model predicted yes but the answer was no
+ The part of data used to test the model
! From the CBSE Class 9 syllabus.
? What is meant by Evaluation?
+ Checking how well a model performs on unseen data
- Removing mistakes and missing values from data
- The machine finds the rules from data
- Putting a trained model into real use
! From the CBSE Class 9 syllabus.
? What is meant by Confusion matrix?
- A circular chart that shows parts of a whole
+ A table comparing predicted and actual results
- Data collected by devices such as temperature sensors
- Grouping similar data points without labels
! From the CBSE Class 9 syllabus.
? What is meant by True positive?
- Data collected by devices such as temperature sensors
- Understanding and defining the problem to be solved
- A graph that shows how data is distributed in ranges
+ The model predicted yes and the answer was yes
! From the CBSE Class 9 syllabus.
? What is meant by True negative?
+ The model predicted no and the answer was no
- Repeating steps to improve the model
- The fraction of predictions that are wrong
- A circular chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? What is meant by False positive?
+ The model predicted yes but the answer was no
- An input property used by a model to make a prediction
- The fraction of all predictions that are correct
- Automatically collecting data from websites
! From the CBSE Class 9 syllabus.
? What is meant by False negative?
- A value that is very different from the others
- An input property used by a model to make a prediction
+ The model predicted no but the answer was yes
- Data without a fixed format such as images and audio
! From the CBSE Class 9 syllabus.
? What is meant by Accuracy?
- A small part of data that represents the whole
- Predicting a category such as spam or not spam
+ The fraction of all predictions that are correct
- The model predicted yes but the answer was no
! From the CBSE Class 9 syllabus.
? What is meant by Precision?
- The model predicted no and the answer was no
- The model predicted no but the answer was yes
- Predicting a category such as spam or not spam
+ The fraction of predicted positives that are really positive
! From the CBSE Class 9 syllabus.
? What is meant by Recall?
- Putting a trained model into real use
- A tool using Who, What, Where and Why to define a problem
- The model predicted no but the answer was yes
+ The fraction of real positives that the model found
! From the CBSE Class 9 syllabus.
? What is meant by F1 score?
- The fraction of all predictions that are correct
- A short description of the problem, its context and the ideal solution
+ A number that balances precision and recall
- Removing mistakes and missing values from data
! From the CBSE Class 9 syllabus.
? What is meant by Overfitting?
+ When a model memorises training data and fails on new data
- The machine finds the rules from data
- A number that balances precision and recall
- Automatically collecting data from websites
! From the CBSE Class 9 syllabus.
? What is meant by Underfitting?
+ When a model is too simple to learn the pattern
- A short description of the problem, its context and the ideal solution
- Checking how well a model performs on unseen data
- Choosing and training an algorithm on data
! From the CBSE Class 9 syllabus.
? What is meant by Error rate?
+ The fraction of predictions that are wrong
- A chart that uses bars to compare categories
- Collecting data by asking people questions
- The machine finds the rules from data
! From the CBSE Class 9 syllabus.
? What is meant by Feature?
- Understanding and defining the problem to be solved
+ An input property used by a model to make a prediction
- A number that balances precision and recall
- When a model is too simple to learn the pattern
! From the CBSE Class 9 syllabus.
? What is meant by Target?
- A value that is very different from the others
- Repeating steps to improve the model
+ The output that the model is trying to predict
- Predicting a category such as spam or not spam
! From the CBSE Class 9 syllabus.
? What is meant by Data cleaning?
+ Removing mistakes and missing values from data
- Understanding and defining the problem to be solved
- A value that is very different from the others
- The part of data used to test the model
! From the CBSE Class 9 syllabus.
? What is meant by Sample?
- Showing data in charts and graphs
- A number that balances precision and recall
+ A small part of data that represents the whole
- A chart that uses bars to compare categories
! From the CBSE Class 9 syllabus.
? What is meant by Outlier?
- A chart that shows change over time
+ A value that is very different from the others
- Automatically collecting data from websites
- The output that the model is trying to predict
! From the CBSE Class 9 syllabus.
? What is meant by Deployment?
- When a model memorises training data and fails on new data
+ Putting a trained model into real use
- A value that is very different from the others
- Removing mistakes and missing values from data
! From the CBSE Class 9 syllabus.
? What is meant by Iteration?
- Data collected by devices such as temperature sensors
- A table comparing predicted and actual results
+ Repeating steps to improve the model
- A chart that shows change over time
! From the CBSE Class 9 syllabus.
? Which term is described as: the step-by-step process of planning, building and testing an AI project?
- True positive
- Clustering
- Structured data
+ AI project cycle
! From the CBSE Class 9 syllabus.
? Which term is described as: understanding and defining the problem to be solved?
- Stakeholder
- True negative
- False negative
+ Problem scoping
! From the CBSE Class 9 syllabus.
? Which term is described as: a tool using Who, What, Where and Why to define a problem?
- Data acquisition
- Error rate
+ 4Ws canvas
- Evaluation
! From the CBSE Class 9 syllabus.
? Which term is described as: a person who is affected by the problem?
- Data cleaning
- Error rate
+ Stakeholder
- Data exploration
! From the CBSE Class 9 syllabus.
? Which term is described as: a short description of the problem, its context and the ideal solution?
+ Problem statement
- Scatter plot
- Problem scoping
- Clustering
! From the CBSE Class 9 syllabus.
? Which term is described as: collecting data for training and testing a model?
- AI project cycle
- Outlier
+ Data acquisition
- Data exploration
! From the CBSE Class 9 syllabus.
? Which term is described as: collecting data by asking people questions?
- Iteration
- Confusion matrix
+ Survey
- Underfitting
! From the CBSE Class 9 syllabus.
? Which term is described as: automatically collecting data from websites?
+ Web scraping
- Modelling
- Rule-based approach
- Classification
! From the CBSE Class 9 syllabus.
? Which term is described as: data collected by devices such as temperature sensors?
- Deployment
+ Sensor data
- Web scraping
- Histogram
! From the CBSE Class 9 syllabus.
? Which term is described as: data made freely available by governments and organisations?
- Survey
- 4Ws canvas
- Learning-based approach
+ Open data
! From the CBSE Class 9 syllabus.
? Which term is described as: data arranged in rows and columns?
- Accuracy
- Data acquisition
- Stakeholder
+ Structured data
! From the CBSE Class 9 syllabus.
? Which term is described as: data without a fixed format such as images and audio?
- Data cleaning
- AI project cycle
+ Unstructured data
- Data visualisation
! From the CBSE Class 9 syllabus.
? Which term is described as: studying data using graphs to find patterns?
- Sensor data
- Deployment
- Data cleaning
+ Data exploration
! From the CBSE Class 9 syllabus.
? Which term is described as: showing data in charts and graphs?
- False negative
- Classification
+ Data visualisation
- Sample
! From the CBSE Class 9 syllabus.
? Which term is described as: a chart that uses bars to compare categories?
+ Bar graph
- Precision
- Unstructured data
- Rule-based approach
! From the CBSE Class 9 syllabus.
? Which term is described as: a chart that shows change over time?
- Regression
+ Line graph
- Sensor data
- AI project cycle
! From the CBSE Class 9 syllabus.
? Which term is described as: a circular chart that shows parts of a whole?
- Underfitting
+ Pie chart
- Line graph
- Deployment
! From the CBSE Class 9 syllabus.
? Which term is described as: a graph that shows the relation between two variables?
- Bar graph
- Data visualisation
+ Scatter plot
- Error rate
! From the CBSE Class 9 syllabus.
? Which term is described as: a graph that shows how data is distributed in ranges?
- Problem scoping
- Stakeholder
- Open data
+ Histogram
! From the CBSE Class 9 syllabus.
? Which term is described as: choosing and training an algorithm on data?
- Unstructured data
- Bar graph
- False positive
+ Modelling
! From the CBSE Class 9 syllabus.
? Which term is described as: the developer gives the machine fixed rules?
- Recall
+ Rule-based approach
- Accuracy
- False negative
! From the CBSE Class 9 syllabus.
? Which term is described as: the machine finds the rules from data?
- Survey
- Data cleaning
- Data exploration
+ Learning-based approach
! From the CBSE Class 9 syllabus.
? Which term is described as: predicting a category such as spam or not spam?
- Clustering
- Sample
- False positive
+ Classification
! From the CBSE Class 9 syllabus.
? Which term is described as: predicting a number such as a house price?
- Open data
+ Regression
- Data acquisition
- Problem scoping
! From the CBSE Class 9 syllabus.
? Which term is described as: grouping similar data points without labels?
- Target
- Survey
- Evaluation
+ Clustering
! From the CBSE Class 9 syllabus.
? Which term is described as: the part of data used to train the model?
- Learning-based approach
- Problem scoping
+ Training set
- Iteration
! From the CBSE Class 9 syllabus.
? Which term is described as: the part of data used to test the model?
- Accuracy
+ Testing set
- Problem statement
- False negative
! From the CBSE Class 9 syllabus.
? Which term is described as: checking how well a model performs on unseen data?
+ Evaluation
- Feature
- Error rate
- Recall
! From the CBSE Class 9 syllabus.
? Which term is described as: a table comparing predicted and actual results?
+ Confusion matrix
- Recall
- Underfitting
- Data exploration
! From the CBSE Class 9 syllabus.
? Which term is described as: the model predicted yes and the answer was yes?
- Histogram
- Classification
+ True positive
- Regression
! From the CBSE Class 9 syllabus.
? Which term is described as: the model predicted no and the answer was no?
- Overfitting
+ True negative
- Stakeholder
- Line graph
! From the CBSE Class 9 syllabus.
? Which term is described as: the model predicted yes but the answer was no?
+ False positive
- Iteration
- Outlier
- Sensor data
! From the CBSE Class 9 syllabus.
? Which term is described as: the model predicted no but the answer was yes?
- Line graph
- Open data
+ False negative
- Data acquisition
! From the CBSE Class 9 syllabus.
? Which term is described as: the fraction of all predictions that are correct?
- Training set
- Deployment
+ Accuracy
- Confusion matrix
! From the CBSE Class 9 syllabus.
? Which term is described as: the fraction of predicted positives that are really positive?
- Data cleaning
+ Precision
- Regression
- Data acquisition
! From the CBSE Class 9 syllabus.
? Which term is described as: the fraction of real positives that the model found?
- F1 score
- False positive
- Accuracy
+ Recall
! From the CBSE Class 9 syllabus.
? Which term is described as: a number that balances precision and recall?
- Data exploration
- Regression
+ F1 score
- Rule-based approach
! From the CBSE Class 9 syllabus.
? Which term is described as: when a model memorises training data and fails on new data?
- Stakeholder
+ Overfitting
- Target
- Learning-based approach
! From the CBSE Class 9 syllabus.
? Which term is described as: when a model is too simple to learn the pattern?
- Error rate
- Learning-based approach
- Feature
+ Underfitting
! From the CBSE Class 9 syllabus.
? Which term is described as: the fraction of predictions that are wrong?
- Overfitting
- Histogram
+ Error rate
- Feature
! From the CBSE Class 9 syllabus.
? Which term is described as: an input property used by a model to make a prediction?
+ Feature
- Pie chart
- Data exploration
- Error rate
! From the CBSE Class 9 syllabus.
? Which term is described as: the output that the model is trying to predict?
- Pie chart
- Feature
+ Target
- Classification
! From the CBSE Class 9 syllabus.
? Which term is described as: removing mistakes and missing values from data?
+ Data cleaning
- Error rate
- AI project cycle
- Outlier
! From the CBSE Class 9 syllabus.
? Which term is described as: a small part of data that represents the whole?
- False positive
- Sensor data
+ Sample
- True negative
! From the CBSE Class 9 syllabus.
? Which term is described as: a value that is very different from the others?
- Data visualisation
- Confusion matrix
- Data acquisition
+ Outlier
! From the CBSE Class 9 syllabus.
? Which term is described as: putting a trained model into real use?
- Evaluation
- Survey
+ Deployment
- False positive
! From the CBSE Class 9 syllabus.
? Which term is described as: repeating steps to improve the model?
- Problem statement
- Line graph
- Modelling
+ Iteration
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "AI project cycle".
- The fraction of all predictions that are correct
+ The step-by-step process of planning, building and testing an AI project
- The part of data used to test the model
- Collecting data for training and testing a model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Problem scoping".
- Collecting data by asking people questions
- A circular chart that shows parts of a whole
+ Understanding and defining the problem to be solved
- The fraction of all predictions that are correct
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "4Ws canvas".
- The developer gives the machine fixed rules
- Putting a trained model into real use
+ A tool using Who, What, Where and Why to define a problem
- A person who is affected by the problem
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Stakeholder".
+ A person who is affected by the problem
- The fraction of all predictions that are correct
- A number that balances precision and recall
- Checking how well a model performs on unseen data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Problem statement".
+ A short description of the problem, its context and the ideal solution
- The part of data used to test the model
- When a model is too simple to learn the pattern
- Studying data using graphs to find patterns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data acquisition".
- The fraction of real positives that the model found
+ Collecting data for training and testing a model
- Data collected by devices such as temperature sensors
- The fraction of predicted positives that are really positive
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Survey".
- A value that is very different from the others
- When a model is too simple to learn the pattern
+ Collecting data by asking people questions
- The model predicted yes but the answer was no
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Web scraping".
- The model predicted yes and the answer was yes
- The part of data used to train the model
- The fraction of predicted positives that are really positive
+ Automatically collecting data from websites
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sensor data".
- An input property used by a model to make a prediction
+ Data collected by devices such as temperature sensors
- A table comparing predicted and actual results
- The output that the model is trying to predict
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Open data".
- A graph that shows the relation between two variables
- A chart that uses bars to compare categories
- Repeating steps to improve the model
+ Data made freely available by governments and organisations
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Structured data".
- Predicting a number such as a house price
- A chart that shows change over time
- The step-by-step process of planning, building and testing an AI project
+ Data arranged in rows and columns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Unstructured data".
- Understanding and defining the problem to be solved
+ Data without a fixed format such as images and audio
- Predicting a number such as a house price
- The model predicted yes and the answer was yes
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data exploration".
+ Studying data using graphs to find patterns
- Predicting a number such as a house price
- A chart that shows change over time
- A chart that uses bars to compare categories
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data visualisation".
- Collecting data for training and testing a model
- A chart that uses bars to compare categories
+ Showing data in charts and graphs
- Repeating steps to improve the model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Bar graph".
- Repeating steps to improve the model
- A table comparing predicted and actual results
- The step-by-step process of planning, building and testing an AI project
+ A chart that uses bars to compare categories
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Line graph".
- Studying data using graphs to find patterns
- The part of data used to train the model
+ A chart that shows change over time
- A small part of data that represents the whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pie chart".
- Predicting a number such as a house price
- Studying data using graphs to find patterns
- The part of data used to train the model
+ A circular chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Scatter plot".
- The model predicted no but the answer was yes
- The part of data used to train the model
- A circular chart that shows parts of a whole
+ A graph that shows the relation between two variables
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Histogram".
- Repeating steps to improve the model
- A number that balances precision and recall
+ A graph that shows how data is distributed in ranges
- The developer gives the machine fixed rules
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Modelling".
- Putting a trained model into real use
+ Choosing and training an algorithm on data
- The output that the model is trying to predict
- Collecting data for training and testing a model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Rule-based approach".
- The output that the model is trying to predict
- A tool using Who, What, Where and Why to define a problem
+ The developer gives the machine fixed rules
- The fraction of real positives that the model found
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Learning-based approach".
- Grouping similar data points without labels
- A person who is affected by the problem
+ The machine finds the rules from data
- When a model memorises training data and fails on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Classification".
- Data collected by devices such as temperature sensors
- Removing mistakes and missing values from data
- A chart that uses bars to compare categories
+ Predicting a category such as spam or not spam
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Regression".
- Collecting data for training and testing a model
+ Predicting a number such as a house price
- The developer gives the machine fixed rules
- The part of data used to test the model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Clustering".
+ Grouping similar data points without labels
- Automatically collecting data from websites
- A small part of data that represents the whole
- A chart that shows change over time
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Training set".
- Predicting a number such as a house price
- The fraction of predictions that are wrong
+ The part of data used to train the model
- When a model is too simple to learn the pattern
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Testing set".
- Predicting a category such as spam or not spam
- Collecting data by asking people questions
- The fraction of predicted positives that are really positive
+ The part of data used to test the model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Evaluation".
- The fraction of predictions that are wrong
- The fraction of all predictions that are correct
- Collecting data for training and testing a model
+ Checking how well a model performs on unseen data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Confusion matrix".
- The model predicted yes and the answer was yes
- Choosing and training an algorithm on data
- When a model is too simple to learn the pattern
+ A table comparing predicted and actual results
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "True positive".
+ The model predicted yes and the answer was yes
- A graph that shows the relation between two variables
- A chart that uses bars to compare categories
- Predicting a number such as a house price
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "True negative".
- The fraction of predicted positives that are really positive
- Predicting a number such as a house price
- A value that is very different from the others
+ The model predicted no and the answer was no
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "False positive".
+ The model predicted yes but the answer was no
- Grouping similar data points without labels
- Putting a trained model into real use
- Automatically collecting data from websites
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "False negative".
- The part of data used to train the model
- An input property used by a model to make a prediction
+ The model predicted no but the answer was yes
- Removing mistakes and missing values from data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Accuracy".
- Data arranged in rows and columns
+ The fraction of all predictions that are correct
- Repeating steps to improve the model
- A tool using Who, What, Where and Why to define a problem
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Precision".
- The model predicted yes but the answer was no
+ The fraction of predicted positives that are really positive
- Data collected by devices such as temperature sensors
- The step-by-step process of planning, building and testing an AI project
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Recall".
+ The fraction of real positives that the model found
- The step-by-step process of planning, building and testing an AI project
- The model predicted no and the answer was no
- The machine finds the rules from data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "F1 score".
- The developer gives the machine fixed rules
- Grouping similar data points without labels
- An input property used by a model to make a prediction
+ A number that balances precision and recall
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Overfitting".
- The developer gives the machine fixed rules
- A graph that shows the relation between two variables
- Data made freely available by governments and organisations
+ When a model memorises training data and fails on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Underfitting".
- Predicting a category such as spam or not spam
- A chart that shows change over time
- The model predicted no and the answer was no
+ When a model is too simple to learn the pattern
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Error rate".
+ The fraction of predictions that are wrong
- Understanding and defining the problem to be solved
- Data without a fixed format such as images and audio
- A number that balances precision and recall
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Feature".
+ An input property used by a model to make a prediction
- Showing data in charts and graphs
- The output that the model is trying to predict
- Putting a trained model into real use
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Target".
- Studying data using graphs to find patterns
+ The output that the model is trying to predict
- The model predicted yes but the answer was no
- A short description of the problem, its context and the ideal solution
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Data cleaning".
+ Removing mistakes and missing values from data
- The fraction of predicted positives that are really positive
- A number that balances precision and recall
- Showing data in charts and graphs
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sample".
- The model predicted no and the answer was no
- A person who is affected by the problem
+ A small part of data that represents the whole
- Data made freely available by governments and organisations
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Outlier".
- The model predicted yes but the answer was no
- Checking how well a model performs on unseen data
+ A value that is very different from the others
- The fraction of predictions that are wrong
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Deployment".
- Predicting a number such as a house price
+ Putting a trained model into real use
- Checking how well a model performs on unseen data
- A circular chart that shows parts of a whole
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Iteration".
- Collecting data by asking people questions
- The developer gives the machine fixed rules
+ Repeating steps to improve the model
- A table comparing predicted and actual results
! From the CBSE Class 9 syllabus.
? Accuracy (percent) when TP=20, TN=25, FP=3, FN=2
- 270 %
+ 90 %
- 99 %
- 180 %
! (TP + TN)/total.
? Precision (percent) when TP=20 and FP=3
- 173.9 %
+ 87 %
- 78.3 %
- 95.7 %
! TP/(TP + FP).
? Recall (percent) when TP=20 and FN=2
+ 90.9 %
- 272.7 %
- 113.6 %
- 100 %
! TP/(TP + FN).
? Accuracy (percent) when TP=40, TN=30, FP=10, FN=20
- 77 %
- 210 %
+ 70 %
- 56 %
! (TP + TN)/total.
? Precision (percent) when TP=40 and FP=10
- 88 %
- 72 %
- 100 %
+ 80 %
! TP/(TP + FP).
? Recall (percent) when TP=40 and FN=20
- 60 %
- 133.3 %
- 33.3 %
+ 66.7 %
! TP/(TP + FN).
? Accuracy (percent) when TP=50, TN=40, FP=5, FN=5
+ 90 %
- 99 %
- 112.5 %
- 45 %
! (TP + TN)/total.
? Precision (percent) when TP=50 and FP=5
- 72.7 %
- 81.8 %
- 181.8 %
+ 90.9 %
! TP/(TP + FP).
? Recall (percent) when TP=50 and FN=5
- 45.5 %
- 100 %
- 81.8 %
+ 90.9 %
! TP/(TP + FN).
? Accuracy (percent) when TP=15, TN=60, FP=10, FN=15
- 93.8 %
- 150 %
- 60 %
+ 75 %
! (TP + TN)/total.
? Precision (percent) when TP=15 and FP=10
+ 60 %
- 120 %
- 75 %
- 66 %
! TP/(TP + FP).
? Recall (percent) when TP=15 and FN=15
- 45 %
+ 50 %
- 55 %
- 40 %
! TP/(TP + FN).
? Accuracy (percent) when TP=30, TN=45, FP=12, FN=13
+ 75 %
- 67.5 %
- 150 %
- 225 %
! (TP + TN)/total.
? Precision (percent) when TP=30 and FP=12
- 64.3 %
+ 71.4 %
- 214.3 %
- 89.3 %
! TP/(TP + FP).
? Recall (percent) when TP=30 and FN=13
- 139.5 %
- 76.7 %
- 34.9 %
+ 69.8 %
! TP/(TP + FN).
? Accuracy (percent) when TP=70, TN=20, FP=5, FN=5
- 180 %
- 99 %
+ 90 %
- 112.5 %
! (TP + TN)/total.
? Precision (percent) when TP=70 and FP=5
- 116.7 %
- 102.7 %
- 74.7 %
+ 93.3 %
! TP/(TP + FP).
? Recall (percent) when TP=70 and FN=5
- 280 %
+ 93.3 %
- 186.7 %
- 102.7 %
! TP/(TP + FN).
? Accuracy (percent) when TP=35, TN=50, FP=8, FN=7
- 76.5 %
+ 85 %
- 93.5 %
- 170 %
! (TP + TN)/total.
? Precision (percent) when TP=35 and FP=8
- 40.7 %
+ 81.4 %
- 73.3 %
- 101.7 %
! TP/(TP + FP).
? Recall (percent) when TP=35 and FN=7
- 91.7 %
- 41.7 %
- 75 %
+ 83.3 %
! TP/(TP + FN).
? Accuracy (percent) when TP=25, TN=35, FP=15, FN=5
+ 75 %
- 60 %
- 225 %
- 67.5 %
! (TP + TN)/total.
? Precision (percent) when TP=25 and FP=15
- 68.8 %
- 78.1 %
+ 62.5 %
- 187.5 %
! TP/(TP + FP).
? Recall (percent) when TP=25 and FN=5
- 91.7 %
+ 83.3 %
- 75 %
- 250 %
! TP/(TP + FN).
? Accuracy (percent) when TP=60, TN=25, FP=10, FN=5
- 68 %
- 42.5 %
- 106.2 %
+ 85 %
! (TP + TN)/total.
? Precision (percent) when TP=60 and FP=10
- 107.1 %
- 257.1 %
+ 85.7 %
- 171.4 %
! TP/(TP + FP).
? Recall (percent) when TP=60 and FN=5
- 184.6 %
- 115.4 %
+ 92.3 %
- 46.2 %
! TP/(TP + FN).
? Accuracy (percent) when TP=45, TN=40, FP=5, FN=10
+ 85 %
- 170 %
- 255 %
- 76.5 %
! (TP + TN)/total.
? Precision (percent) when TP=45 and FP=5
- 99 %
- 270 %
- 180 %
+ 90 %
! TP/(TP + FP).
? Recall (percent) when TP=45 and FN=10
- 65.5 %
- 40.9 %
- 163.6 %
+ 81.8 %
! TP/(TP + FN).
? Accuracy (percent) when TP=10, TN=80, FP=5, FN=5
+ 90 %
- 45 %
- 81 %
- 112.5 %
! (TP + TN)/total.
? Precision (percent) when TP=10 and FP=5
- 73.3 %
- 60 %
- 83.3 %
+ 66.7 %
! TP/(TP + FP).
? Recall (percent) when TP=10 and FN=5
+ 66.7 %
- 133.3 %
- 33.3 %
- 83.3 %
! TP/(TP + FN).
? Accuracy (percent) when TP=55, TN=30, FP=5, FN=10
+ 85 %
- 68 %
- 42.5 %
- 255 %
! (TP + TN)/total.
? Precision (percent) when TP=55 and FP=5
- 73.3 %
+ 91.7 %
- 82.5 %
- 114.6 %
! TP/(TP + FP).
? Recall (percent) when TP=55 and FN=10
- 93.1 %
+ 84.6 %
- 76.2 %
- 253.8 %
! TP/(TP + FN).
? Training examples when 100 examples are split 80 percent for training
- 64
- 72
- 4
+ 8
! n x percent/100.
? Training examples when 200 examples are split 80 percent for training
- 48
- 144
- 176
+ 16
! n x percent/100.
? Training examples when 500 examples are split 70 percent for training
- 385
- 28
+ 35
- 438
! n x percent/100.
? Training examples when 1000 examples are split 80 percent for training
- 88
+ 8
- 16
- 72
! n x percent/100.
? Training examples when 250 examples are split 60 percent for training
- 188
- 135
+ 15
- 75
! n x percent/100.
? Training examples when 400 examples are split 75 percent for training
- 9
- 24
- 33
+ 3
! n x percent/100.
@visual
cycle | AI project cycle | Problem scoping; Data acquisition; Data exploration; Modelling; Evaluation
steps | 4Ws problem canvas | Who has the problem; What is the problem; Where does it occur; Why solve it
compare | Rule-based and learning-based | Rule-based=Rules given by the developer~Machine follows rules~Example: if-then program; Learning-based=Machine learns rules from data~Can improve with data~Example: image classifier
@problems
P: A model made 50 predictions with TP=20, TN=25, FP=3, FN=2. Find accuracy.
A: Accuracy = (20 + 25)/50 = 0.9 or 90 percent.
R: 1 | Correct formula
R: 1 | 0.9

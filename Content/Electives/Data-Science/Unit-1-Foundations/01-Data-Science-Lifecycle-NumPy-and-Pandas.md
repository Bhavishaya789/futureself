# Data science lifecycle, NumPy and pandas
minutes: 25
yt: pandas tutorial for beginners data science
@study
**Data science** turns data into decisions. Lifecycle: **1) define the question, 2) collect data, 3) clean, 4) explore (EDA), 5) model, 6) evaluate, 7) communicate and deploy**. Most time goes into cleaning and understanding data.
- **NumPy:** fast N-dimensional arrays with vectorised maths (no Python loops).
- **pandas:** `Series` (one column) and `DataFrame` (table). Key operations: `df.head()`, `df.info()`, `df.describe()`, filtering `df[df.age > 18]`, `groupby`, `merge`, `pivot_table`.
```python
import numpy as np, pandas as pd
a = np.array([2, 4, 4, 4, 5, 5, 7, 9])
print(a.mean(), np.median(a), a.std())          # 5.0 4.5 2.0
df = pd.DataFrame({"city": ["A", "A", "B", "B"], "sales": [10, 20, 30, 50]})
print(df.groupby("city")["sales"].mean())       # A 15.0, B 40.0
```
Here the mean is 5, the median 4.5 and the population standard deviation 2.
## Hindi saransh
Data science ke steps: sawaal, data, safai, EDA, model, jaanch, prastuti. NumPy tez arrays deta hai, pandas table (DataFrame) aur groupby jaise kaam.
> Prefer vectorised NumPy/pandas operations over Python for-loops; they are far faster.
@qa
Q: Why is NumPy faster than Python lists?
A: It stores same-type values in contiguous memory and runs vectorised operations in compiled code.
Q: What does groupby do?
A: It splits rows by a key, applies an aggregate (mean, sum) to each group and combines the results.
Q: Name the stages of the data science lifecycle.
A: Define the question, collect, clean, explore, model, evaluate, communicate and deploy.
Q: Which stage usually takes the most time?
A: Data cleaning and preparation.
@quiz
? The mean of 2, 4, 4, 4, 5, 5, 7, 9 is
- 4
+ 5
- 6
- 4.5
! Sum 40 divided by 8.
? A pandas DataFrame is
- a single column
+ a table of rows and columns
- an image
- a database server
! 2-D labelled data.
? groupby is used to
+ aggregate by category
- delete data
- plot only
- encrypt data
! Split-apply-combine.
? The first step of the lifecycle is
- modelling
+ defining the question
- deployment
- cleaning
! Know the goal before the data.
@visual
steps | Data science lifecycle | Define the question; Collect data; Clean data; Explore (EDA); Model; Evaluate; Communicate and deploy
@problems
## Moderate
P: Find the mean and median of 2, 4, 4, 4, 5, 5, 7, 9.
A: Mean 5; median (4 + 5)/2 = 4.5.
R: 1 | Mean
R: 1 | Median
## High
P: Group the sales of cities A (10, 20) and B (30, 50) and report mean per city.
A: A = 15, B = 40.
R: 1 | A
R: 1 | B
## Advanced
P: Explain why vectorisation matters with an example.
A: a * 2 on a NumPy array runs in compiled code over the whole array at once, while a Python loop handles one element at a time; for a million items it can be around a hundred times faster.
R: 2 | Idea
R: 1 | Example

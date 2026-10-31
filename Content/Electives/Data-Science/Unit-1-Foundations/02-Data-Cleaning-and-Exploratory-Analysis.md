# Data cleaning and exploratory data analysis
minutes: 25
yt: exploratory data analysis python
@study
**Cleaning** fixes problems so analysis is trustworthy:
- **Missing values:** drop rows, or impute with mean/median (median is robust), or a model. Check whether data is missing at random.
- **Duplicates, wrong types, inconsistent text** (`"Delhi"`, `"delhi "`) and **outliers** (IQR or z-score rules).
- **Scaling:** min-max scaling x' = (x - min)/(max - min): for 20 in the range 10 to 50 gives **0.25**. Standardisation z = (x - mean)/sd: for 60 with mean 50 and sd 10 gives **1.0**.
**EDA** means looking before modelling: summary statistics, histograms, box plots, scatter plots, correlation heat maps, and counts of categories.
```python
import pandas as pd
df = pd.DataFrame({"age": [22, None, 30, 22], "city": ["Delhi", "delhi ", "Pune", "Delhi"]})
df["city"] = df["city"].str.strip().str.title()
df["age"] = df["age"].fillna(df["age"].median())
print(df.drop_duplicates())
```
After cleaning, the second row becomes "Delhi" with age 22 (the median), which makes it a duplicate of the first row.
## Hindi saransh
Safai: missing values bharo, duplicate hatao, text ek jaisa karo, outlier dekho. EDA mein plot aur summary se data samjho. Min-max aur z-score scaling alag formula hain.
> Always look at the data (plots and summaries) before you build a model.
@qa
Q: When is median imputation better than mean imputation?
A: When data has outliers or is skewed, because the median is not pulled by extremes.
Q: What is min-max scaling?
A: x' = (x - min)/(max - min), mapping values to the range 0 to 1.
Q: What is a z-score?
A: (x - mean)/standard deviation: how many standard deviations a value is from the mean.
Q: Why do EDA before modelling?
A: To find errors, patterns, outliers and relationships that guide cleaning and model choice.
@quiz
? Min-max scaling of 20 in the range 10 to 50 is
- 0.2
+ 0.25
- 0.5
- 0.75
! (20 - 10)/(50 - 10).
? The z-score of 60 with mean 50 and sd 10 is
- 0.1
+ 1
- 10
- 6
! (60 - 50)/10.
? Which imputation resists outliers?
- mean
+ median
- sum
- max
! Median.
? "Delhi" and "delhi " are an example of
- missing data
+ inconsistent text
- outliers
- scaling
! Strip and title-case them.
@visual
formula | Scaling | min-max = (x - min) / (max - min) ; z = (x - mean) / sd
@problems
## Moderate
P: Min-max scale the value 30 in the range 10 to 50.
A: (30 - 10)/40 = 0.5.
R: 1 | Formula
R: 1 | 0.5
## High
P: A column has ages 22, missing, 30, 22. Impute with the median and give the median.
A: Median of 22, 30, 22 is 22.
R: 1 | Ignore missing
R: 1 | 22
## Advanced
P: List a cleaning checklist for a new customer table.
A: Check types, missing values, duplicates, inconsistent text, impossible values (negative age), outliers, units, and date formats; document every change.
R: 3 | Checklist items
R: 1 | Documentation

# Feature engineering and time series
minutes: 25
yt: time series forecasting moving average exponential smoothing
@study
## Feature engineering
Better features beat fancier models: **one-hot encode** categories, **bin** numbers, take **logs** of skewed values, build **date features** (day of week, month), **interaction** terms, and text features (TF-IDF). Avoid target leakage.
## Time series
Components: **trend, seasonality, noise**. Never shuffle; split by time. Simple forecasts:
- **Moving average (window 3)** of 10, 12, 14, 13, 15 gives **12, 13, 14**.
- **Exponential smoothing** s_t = alpha x_t + (1 - alpha) s_(t-1). With alpha = 0.5 and s1 = 10: **11, 12.5, 12.75, 13.875**.
- Advanced: **ARIMA**, Prophet, gradient boosting with lag features, LSTMs. Measure error with MAE, RMSE or MAPE.
```python
x = [10, 12, 14, 13, 15]
print([sum(x[i:i+3]) / 3 for i in range(3)])   # [12.0, 13.0, 14.0]
s = [x[0]]
for v in x[1:]: s.append(0.5 * v + 0.5 * s[-1])
print(s)                                        # [10, 11.0, 12.5, 12.75, 13.875]
```
## Hindi saransh
Achhe features model se zyada kaam aate hain. Time series mein trend, seasonality, noise hota hai; data time ke hisaab se baanto. Moving average aur exponential smoothing sabse saral forecasts hain.
> Never shuffle time-series data: always train on the past and test on the future.
@qa
Q: What is one-hot encoding?
A: Turning a category into separate 0/1 columns, one per category.
Q: What are the components of a time series?
A: Trend, seasonality and noise (residual).
Q: Why is a log transform used on skewed data?
A: It compresses large values, making the distribution more symmetric and relationships more linear.
Q: Exponential smoothing with alpha near 1 behaves how?
A: It follows the latest value closely and forgets history quickly.
@quiz
? The 3-point moving averages of 10, 12, 14, 13, 15 are
- 11, 12, 13
+ 12, 13, 14
- 13, 14, 15
- 12, 14, 15
! (10+12+14)/3 = 12, then 13, 14.
? Exponential smoothing (alpha 0.5, s1 = 10) gives s2 =
- 10
+ 11
- 12
- 6
! 0.5 x 12 + 0.5 x 10.
? One-hot encoding is used for
+ categorical features
- missing values
- scaling
- dates only
! One column per category.
? Time-series data should be split
- randomly
+ by time order
- by alphabet
- by size
! Train past, test future.
@visual
flow | Forecasting workflow | Plot the series > Split by time > Build a baseline > Add lag features or a model > Compare MAE and RMSE
@problems
## Moderate
P: Compute the 3-point moving average of 10, 12, 14.
A: 36/3 = 12.
R: 1 | Sum
R: 1 | 12
## High
P: Use exponential smoothing (alpha 0.5, s1 = 10) on 10, 12, 14, 13, 15 and give the last value.
A: 10, 11, 12.5, 12.75, 13.875.
R: 2 | Recurrence
R: 1 | 13.875
## Advanced
P: List five features you would build to forecast daily sales.
A: Day of week, month, holiday flag, sales lag-7 and lag-1, rolling 7-day mean, promotion indicator.
R: 3 | Any five
R: 1 | Rationale

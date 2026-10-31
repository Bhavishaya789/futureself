# Percentages, profit and loss | प्रतिशत, लाभ और हानि
minutes: 20
yt: percentage profit loss tricks ssc
@study
- **Percentage:** x% of N = N x x/100. 20% of 450 = **90**.
- **Successive change:** net % = a + b + ab/100. A price up 20% then down 20%: 20 - 20 - 400/100 = **-4%** (0.8 x 1.2 = 0.96). Two discounts of 10% and 20%: 1 - 0.9 x 0.8 = **28%** single discount.
- **Profit % = (SP - CP)/CP x 100.** CP 800, SP 920: profit = 120/800 = **15%**. **Marked price (MP)** 500 with 20% discount: SP = **400**; if CP = 320, profit = 80/320 = **25%**.
- **Shortcut:** to find CP from SP with profit p%, CP = SP x 100/(100 + p).
```python
print(450 * 20 / 100, 0.8 * 1.2, 1 - 0.9 * 0.8, (920 - 800) / 800, (400 - 320) / 320)
# 90.0 0.96 0.28 0.15 0.25
```
## हिंदी में
x% of N = N x x/100। लगातार परिवर्तन: a + b + ab/100। 20% वृद्धि फिर 20% कमी से **4% की हानि**। लाभ% = (विक्रय मूल्य - क्रय मूल्य)/क्रय मूल्य x 100। अंकित मूल्य 500 पर 20% छूट से विक्रय मूल्य **400**।
> Profit and loss percentages are always on cost price unless stated otherwise. | लाभ/हानि % हमेशा क्रय मूल्य पर।
@qa
Q: A price rises 20% then falls 20%. Net change? | कीमत 20% बढ़कर 20% घटे तो?
A: 4% loss | 4% की हानि
Q: Single discount equal to 10% and 20%? | 10% व 20% की क्रमिक छूट का एकल छूट?
A: 28% | 28%
Q: CP 800, SP 920. Profit %? | क्रय 800, विक्रय 920, लाभ%?
A: 15% | 15%
Q: Formula of profit %? | लाभ% का सूत्र?
A: (SP - CP)/CP x 100 | (विक्रय - क्रय)/क्रय x 100
@quiz
? 20% of 450 is
- 80
+ 90
- 100
- 120
! 450 x 0.2.
? Successive discounts of 10% and 20% equal
- 30%
+ 28%
- 25%
- 32%
! 1 - 0.72.
? CP 800 and SP 920 give profit
- 10%
+ 15%
- 20%
- 12%
! 120/800.
? MP 500, 20% discount, CP 320: profit is
- 20%
+ 25%
- 30%
- 15%
! 80/320.
@visual
formula | Profit and discount | profit% = (SP - CP) / CP x 100 ; SP = MP x (100 - d) / 100
@problems
## Moderate
P: Find 35% of 240.
A: 240 x 35/100 = 84.
R: 1 | Method
R: 1 | 84
## High
P: A shopkeeper marks goods 40% above cost and gives 10% discount. Find the profit %.
A: Let CP = 100: MP = 140; SP = 126; profit = 26%.
R: 2 | Steps
R: 1 | 26%
## Advanced
P: A sells to B at 20% profit and B sells to C at 10% loss. If C pays Rs 540, find A's cost.
A: B's cost = 540/0.9 = 600, which is A's selling price; A's CP = 600/1.2 = Rs 500.
R: 2 | Backward steps
R: 1 | Rs 500

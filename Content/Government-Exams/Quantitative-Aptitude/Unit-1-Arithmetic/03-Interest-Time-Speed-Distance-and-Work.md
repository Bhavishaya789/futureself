# Interest, speed, distance and work | ब्याज, गति और कार्य
minutes: 25
yt: simple compound interest time work speed distance
@study
- **Simple interest SI = P x R x T / 100.** Rs 5,000 at 8% for 3 years = **Rs 1,200**.
- **Compound interest:** A = P(1 + R/100)^T. Rs 10,000 at 10% for 2 years: A = 12,100, CI = **Rs 2,100**. For 2 years, CI - SI = P(R/100)^2 = **Rs 100**.
- **Speed = distance/time.** 60 km/h for 2.5 h = **150 km**. Average speed for equal distances at 40 and 60 km/h = 2ab/(a + b) = **48 km/h**. Convert km/h to m/s by x 5/18: 54 km/h = **15 m/s**; a 150 m train passes a pole in **10 s**.
- **Time and work:** if A alone takes 10 days and B alone 15 days, together they take 1/(1/10 + 1/15) = **6 days**.
```python
print(5000 * 8 * 3 / 100, 10000 * 1.1**2 - 10000, 2 * 40 * 60 / 100, 54 * 5 / 18, 150 / 15, 1 / (1/10 + 1/15))
# 1200.0 2100.0 48.0 15.0 10.0 6.0
```
## हिंदी में
साधारण ब्याज = मूल x दर x समय / 100। 5,000 रु. पर 8% से 3 वर्ष में **1,200 रु.**। चक्रवृद्धि: A = P(1 + R/100)^T; 10,000 रु., 10%, 2 वर्ष में चक्रवृद्धि ब्याज **2,100 रु.**। बराबर दूरी पर 40 और 60 किमी/घं. की औसत चाल **48 किमी/घं.**। A (10 दिन) और B (15 दिन) साथ में **6 दिन** में काम करेंगे।
> km/h to m/s: multiply by 5/18. m/s to km/h: multiply by 18/5. | किमी/घं. को मी./से. में बदलने के लिए 5/18 से गुणा।
@qa
Q: SI on Rs 5,000 at 8% for 3 years? | 5,000 पर 8%, 3 वर्ष का साधारण ब्याज?
A: Rs 1,200 | 1,200 रु.
Q: Average speed at 40 and 60 km/h over equal distances? | समान दूरी पर 40 व 60 की औसत चाल?
A: 48 km/h | 48 किमी/घं.
Q: A takes 10 days, B 15 days. Together? | A 10 दिन, B 15 दिन; साथ में?
A: 6 days | 6 दिन
Q: 54 km/h in m/s? | 54 किमी/घं. मी./से. में?
A: 15 m/s | 15 मी./से.
@quiz
? SI on Rs 5,000 at 8% for 3 years is
- Rs 1,000
+ Rs 1,200
- Rs 1,500
- Rs 2,000
! 5000 x 8 x 3 / 100.
? CI on Rs 10,000 at 10% for 2 years is
- Rs 2,000
+ Rs 2,100
- Rs 2,200
- Rs 1,000
! 12,100 - 10,000.
? Average speed at 40 and 60 km/h for equal distances is
- 50
+ 48
- 52
- 45
! Harmonic mean.
? A and B finishing a job in 10 and 15 days work together in
- 5 days
+ 6 days
- 7 days
- 12.5 days
! 1/(1/10 + 1/15).
@visual
formula | Key formulas | SI = P x R x T / 100 ; A = P(1 + R/100)^T ; time together = ab / (a + b)
@problems
## Moderate
P: Find SI on Rs 8,000 at 5% for 2 years.
A: 8000 x 5 x 2 / 100 = Rs 800.
R: 1 | Formula
R: 1 | Rs 800
## High
P: A train 150 m long runs at 54 km/h. How long to cross a pole?
A: 54 x 5/18 = 15 m/s; 150/15 = 10 s.
R: 1 | Convert
R: 1 | 10 s
## Advanced
P: Pipe A fills a tank in 12 h, B in 6 h. Together how long?
A: 1/(1/12 + 1/6) = 4 h.
R: 2 | Rates
R: 1 | 4 h

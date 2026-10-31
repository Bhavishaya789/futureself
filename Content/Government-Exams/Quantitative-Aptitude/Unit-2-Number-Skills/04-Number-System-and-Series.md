# Number system and series | संख्या पद्धति और श्रेणी
minutes: 20
yt: number system hcf lcm remainder series
@study
- **HCF and LCM:** for 12 and 18, HCF = **6**, LCM = **36**; HCF x LCM = product of the numbers (12 x 18 = 216).
- **Divisibility:** by 3 if the digit sum is divisible by 3; by 9 similarly; by 11 if (sum of odd-place digits - sum of even-place digits) is 0 or a multiple of 11.
- **Trailing zeros in n!** = floor(n/5) + floor(n/25) + ... . For 25!: 5 + 1 = **6**.
- **Remainders:** 2^10 = 1024 and 1024 mod 7 = **2**.
- **Series:** 2, 6, 12, 20, 30: differences 4, 6, 8, 10 -> next is **42**. Look for differences, ratios, squares, cubes and primes.
- **Squares to remember:** 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225, 16² = 256, 25² = 625.
```python
import math
print(math.gcd(12, 18), math.lcm(12, 18), 25 // 5 + 25 // 25, 2**10 % 7)   # 6 36 6 2
```
## हिंदी में
12 और 18 का **ल.स. = 36** और **म.स. = 6**; ल.स. x म.स. = संख्याओं का गुणनफल। 3 से विभाज्यता के लिए अंकों का योग देखें। 25! के अंत में **6 शून्य** हैं। श्रेणी 2, 6, 12, 20, 30 में अंतर 4, 6, 8, 10 हैं, अगली संख्या **42**।
> HCF x LCM = product of the two numbers. | म.स. x ल.स. = दो संख्याओं का गुणनफल।
@qa
Q: HCF and LCM of 12 and 18? | 12 व 18 का म.स. और ल.स.?
A: 6 and 36 | 6 और 36
Q: Trailing zeros in 25!? | 25! में अंत के शून्य?
A: 6 | 6
Q: Next term of 2, 6, 12, 20, 30? | श्रेणी की अगली संख्या?
A: 42 | 42
Q: Divisibility rule of 9? | 9 से विभाज्यता का नियम?
A: Digit sum divisible by 9 | अंकों का योग 9 से विभाज्य
@quiz
? LCM of 12 and 18 is
- 6
+ 36
- 72
- 216
! 36.
? Zeros at the end of 25! are
- 4
- 5
+ 6
- 7
! 5 + 1.
? Next in 2, 6, 12, 20, 30
- 40
+ 42
- 44
- 36
! Differences increase by 2.
? 2^10 divided by 7 leaves remainder
- 1
+ 2
- 3
- 4
! 1024 = 7 x 146 + 2.
@visual
curve | n(n+1): the series 2, 6, 12, 20, 30 | y = x*(x+1) ; 1 ; 6
@problems
## Moderate
P: Find HCF and LCM of 12 and 18.
A: HCF 6; LCM 36.
R: 1 | HCF
R: 1 | LCM
## High
P: Find the next two terms of 3, 6, 11, 18, 27.
A: Differences 3, 5, 7, 9 -> next differences 11 and 13: 38 and 51.
R: 1 | Pattern
R: 1 | 38 and 51
## Advanced
P: Find the number of trailing zeros in 100!.
A: floor(100/5) + floor(100/25) = 20 + 4 = 24.
R: 2 | Formula
R: 1 | 24

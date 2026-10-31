# Blood relations, directions, ranking, clock and calendar | संबंध, दिशा, क्रम, घड़ी और कैलेंडर
minutes: 25
yt: direction sense ranking clock calendar reasoning
@study
- **Directions:** a man walks 3 km north then 4 km east. Straight-line distance = sqrt(3² + 4²) = **5 km** (Pythagoras).
- **Ranking:** rank from the top + rank from the bottom = total + 1. Rank **12 from the top** among 40 -> 40 - 12 + 1 = **29th from the bottom**.
- **Clock angle** = |30H - 5.5M|. At 3:00 it is **90°**; at 3:30 it is |90 - 165| = **75°**. In 12 hours the hands overlap 11 times.
- **Calendar:** odd days: ordinary year = 1, leap year = 2. **26 January 1950 was a Thursday**; 15 August 1947 was a Friday. A century year is a leap year only if divisible by 400.
- **Blood relations:** draw a family tree. "Pointing to a man, a woman says: his mother is the only daughter of my mother." Her mother's only daughter is herself, so he is her **son**.
- **Counting:** 10 people shake hands once each: 10C2 = **45**. Five people can stand in a row in 5! = **120** ways; around a circle in 4! = **24** ways.
```python
import math
print(math.hypot(3, 4), 40 - 12 + 1, abs(30 * 3 - 5.5 * 30), math.comb(10, 2), math.factorial(5), math.factorial(4))   # 5.0 29 75.0 45 120 24
```
## हिंदी में
3 किमी उत्तर और 4 किमी पूर्व चलने पर दूरी **5 किमी**। ऊपर से क्रम + नीचे से क्रम = कुल + 1; 40 में ऊपर से 12वाँ = नीचे से **29वाँ**। घड़ी में 3:30 पर कोण **75°**। 26 जनवरी 1950 को **गुरुवार** था। 10 लोगों में हाथ मिलाने के तरीके **45**; 5 लोग पंक्ति में **120** तरीकों से, गोले में **24** तरीकों से।
> Rank from top + rank from bottom = total + 1. | ऊपर का क्रम + नीचे का क्रम = कुल + 1।
@qa
Q: 3 km north then 4 km east: distance from start? | 3 किमी उत्तर, 4 किमी पूर्व; दूरी?
A: 5 km | 5 किमी
Q: Rank 12 from top of 40: rank from bottom? | 40 में ऊपर से 12वाँ; नीचे से?
A: 29 | 29
Q: Angle between clock hands at 3:30? | 3:30 पर घड़ी के काँटों का कोण?
A: 75 degrees | 75 अंश
Q: Handshakes among 10 people? | 10 लोगों में हाथ मिलाना?
A: 45 | 45
@quiz
? Distance after 3 km north and 4 km east is
- 4 km
+ 5 km
- 6 km
- 7 km
! 3-4-5 triangle.
? Rank 12 from the top among 40 is from the bottom
- 27
- 28
+ 29
- 30
! 40 + 1 - 12.
? Clock angle at 3:30 is
- 60
+ 75
- 90
- 105
! |90 - 165|.
? Five people in a row can be arranged in
- 24
+ 120
- 60
- 25
! 5 factorial.
@visual
formula | Quick formulas | rank from bottom = total + 1 - rank from top ; clock angle = |30H - 5.5M| ; handshakes = n(n-1)/2
@problems
## Moderate
P: A walks 6 km south then 8 km west. How far from the start?
A: sqrt(36 + 64) = 10 km.
R: 1 | Pythagoras
R: 1 | 10 km
## High
P: A student is 7th from the top and 18th from the bottom. How many students are in the class?
A: 7 + 18 - 1 = 24.
R: 1 | Formula
R: 1 | 24
## Advanced
P: Find the angle between the hands at 4:20.
A: |30 x 4 - 5.5 x 20| = |120 - 110| = 10 degrees.
R: 2 | Formula
R: 1 | 10 degrees

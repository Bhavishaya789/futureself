# Indian mathematics: from Sulba Sutras to the Kerala school
minutes: 40
yt: ancient indian mathematics aryabhata brahmagupta madhava
yt: chakravala method pell equation bhaskara
@study
India made major contributions to number systems, algebra, trigonometry and infinite series.

## Early foundations
- **Indus civilisation:** standardised bricks (ratio 4:2:1), weights and town planning.
- **Sulba Sutras** (Baudhayana, Apastamba; roughly the first millennium BCE): geometry for altar construction, including a statement of the Pythagorean relation, Pythagorean triples, and an approximation of √2:
  √2 ≈ 1 + 1/3 + 1/(3·4) − 1/(3·4·34) = **1.4142156…** (true value 1.4142135…, correct to about 5 decimals; verified).

## Decimal place-value and zero
The decimal place-value system with a symbol for zero was developed in India and later spread via the Arab world to Europe ("Hindu-Arabic numerals"). **Brahmagupta** (628 CE, *Brahmasphutasiddhanta*) gave rules for arithmetic with zero and negative numbers (debts and fortunes), and a general solution of quadratic equations. The Bakhshali manuscript (radiocarbon dated to centuries earlier than first thought) uses a dot as a zero placeholder.

## Pingala (Chandahsastra, about 3rd–2nd century BCE)
Analysed poetic metres with short (laghu) and long (guru) syllables, which is equivalent to **binary patterns**. The number of patterns of n syllables is 2ⁿ (16 for 4 syllables). His method led to the **Meru Prastara** (Pascal's triangle): row 5 is 1, 5, 10, 10, 5, 1. Combinations of metre related to what are now called **Fibonacci numbers** (Virahanka, then Hemachandra): 1, 2, 3, 5, 8, 13, 21 (verified).

## Aryabhata (born 476 CE, *Aryabhatiya*)
- π ≈ 62832/20000 = **3.1416**.
- Sine tables, place-value methods, algorithms for square and cube roots.
- Proposed that the Earth rotates on its axis, explained eclipses by shadows.
- Gave sum formulas for series.

## Bhaskara II (1114 CE, *Lilavati*, *Bijaganita*, *Siddhanta Shiromani*)
Problems in arithmetic and algebra, often written as poems; concepts close to calculus (instantaneous motion of planets). The **chakravala (cyclic) method** for Pell's equation x² − N y² = 1: for N = 61 the smallest solution is x = 1,766,319,049 and y = 226,153,980; Python confirms x² − 61y² = 1. Europeans solved this in the 17th century.

## Kerala school (Madhava of Sangamagrama, about 1340–1425)
Infinite series centuries before Newton and Leibniz:
- **π/4 = 1 − 1/3 + 1/5 − 1/7 + …** (known as the Madhava–Leibniz series).
- Series for sine, cosine and arctangent. Taking terms to x⁷/5040, sin(30°) = 0.5 (computed to six decimals).
```python
import math
x = math.pi / 6
print(round(x - x**3 / 6 + x**5 / 120 - x**7 / 5040, 6))
print(round(4 * sum((-1) ** k / (2 * k + 1) for k in range(10)), 4))
```
Output:
```
0.5
3.0418
```
The first line is the Madhava sine series; the second shows the slow Madhava–Leibniz series needs many terms (Madhava used correction terms to get π to 11 decimals).
Successors: Nilakantha Somayaji, Jyeshthadeva (*Yuktibhasha*, in Malayalam, with proofs).

## Modern: Srinivasa Ramanujan (1887–1920)
Self-taught genius: infinite series for π, partitions, mock theta functions, the Hardy–Ramanujan number 1729 (the smallest number that is the sum of two cubes in two ways: 1³ + 12³ = 9³ + 10³).

## Links with computer science
Binary (Pingala), algorithms (square root, chakravala), series approximation (numerical methods), combinatorics.

> Zero, decimal place value, binary patterns and infinite series all have Indian roots.
@qa
Q: What is Brahmagupta's contribution regarding zero?
A: In 628 CE he gave explicit rules for operations with zero and negative numbers and treated them as numbers in their own right.
Q: What value of π did Aryabhata give?
A: 62832/20000 = 3.1416.
Q: How did Pingala's work anticipate binary numbers?
A: He represented metres as sequences of short and long syllables, equivalent to 0/1 patterns, counting 2ⁿ possibilities for n syllables.
Q: What is the chakravala method?
A: A cyclic algorithm described by Brahmagupta and perfected by Bhaskara II for solving Pell-type equations x² − N y² = 1.
Q: What did the Kerala school achieve?
A: Madhava and his followers discovered infinite series for π, sine, cosine and arctangent about two centuries before European mathematicians.
@quiz
? The Madhava-Leibniz series gives
- e
+ π/4
- √2
- φ
! π/4 = 1 − 1/3 + 1/5 − …
? Who wrote Brahmasphutasiddhanta?
- Aryabhata
+ Brahmagupta
- Bhaskara II
- Pingala
! Brahmagupta, 628 CE.
? Meru Prastara corresponds to
- Euler's formula
+ Pascal's triangle
- Fermat's theorem
- Venn diagrams
! Row 5 is 1,5,10,10,5,1.
? Aryabhata's value of π is
- 3
- 3.14
+ 3.1416
- 3.1428
! 62832/20000.
? 1729 is famous as Ramanujan's
+ taxicab number
- prime
- perfect number
- Fibonacci number
! The smallest sum of two cubes in two ways.

@visual
timeline | Some milestones of Indian mathematics (approximate dates) | c. 800 BCE=Sulba Sutras give geometry for altars; c. 200 BCE=Pingala describes binary-like patterns; 476 CE=Aryabhata writes the Aryabhatiya; 628 CE=Brahmagupta states rules for zero; 1114 CE=Bhaskaracharya II writes Lilavati; c. 1400=Madhava and the Kerala school

@problems
## Moderate
P: State two contributions each of Aryabhata and Brahmagupta.
A: Aryabhata (476 CE): a value of pi about 3.1416 (62832 / 20000), the sine table, place-value notation in verse, and the idea that the Earth rotates. Brahmagupta (628 CE): rules for arithmetic with zero and negative numbers, and methods for solving quadratic and Diophantine equations.
R: 2 | Two contributions of Aryabhata
R: 2 | Two contributions of Brahmagupta
## High
P: What do the Sulba Sutras say about the right triangle? Verify with a 3-4-5 triangle. What did Pingala contribute that is relevant to computer science?
A: The Baudhayana Sulba Sutra states that the square on the diagonal of a rectangle equals the sum of the squares on its sides (the Pythagorean theorem). Check: 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
Pingala (Chandahshastra) described poetic metres using short and long syllables, a binary pattern, and listed all combinations, an early idea of binary numbers and combinatorics.
R: 2 | Statement of the theorem
R: 1 | 3-4-5 check
R: 2 | Pingala and binary or combinatorics
## Advanced
P: The Madhava series states pi/4 = 1 - 1/3 + 1/5 - 1/7 + ... Compute the estimate of pi from the first four terms. Why is this series slow, and what was Madhava's contribution?
A: Four terms: 1 - 0.3333 + 0.2 - 0.1429 = 0.7238, so pi is about 4 x 0.7238 = 2.895, which is far from 3.1416. The series converges slowly because the terms shrink only like 1/n, so thousands of terms are needed for few correct digits (Madhava used correction terms to speed it up).
Madhava of Sangamagrama (Kerala school, about 1340 to 1425) discovered infinite series for sine, cosine, arctangent and pi, about two centuries before similar work in Europe.
R: 2 | Estimate about 2.895
R: 2 | Reason for slow convergence
R: 1 | Madhava and infinite series

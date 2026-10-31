# Series, coding-decoding and alphabet tests | श्रेणी, कूट-लेखन और वर्णमाला
minutes: 20
yt: reasoning letter series coding decoding tricks
@study
- **Alphabet positions:** A=1, B=2 ... Z=26. A letter's position from the right = 27 - position from the left: E is 5th from the left and **22nd (V)** from the right.
- **Letter series:** A, C, F, J, O, ? Gaps are +2, +3, +4, +5, so the next gap is +6: O (15) + 6 = 21 = **U**.
- **Coding-decoding:** if each letter moves +1, **CAT -> DBU**. Check whether the rule is a shift, a reverse, or a swap, and test it on every example.
- **Number series:** differences, multiples, squares, alternate patterns (see Quantitative Aptitude).
- **Odd one out:** find the property shared by all but one (category, number property, letter pattern).
- **Opposite-letter trick:** A-Z, B-Y, C-X (positions sum to 27).
```python
import string
A = string.ascii_uppercase
print(A[14 + 6], "".join(A[(A.index(c) + 1) % 26] for c in "CAT"))   # U DBU
```
## हिंदी में
अंग्रेज़ी वर्णमाला में A=1 से Z=26। दाईं ओर से स्थान = 27 - बाईं ओर का स्थान। श्रेणी A, C, F, J, O में अंतर +2, +3, +4, +5 हैं, इसलिए अगला अक्षर **U** है। कूट-लेखन में हर अक्षर +1 खिसकाने पर **CAT -> DBU**।
> Opposite letters add up to 27 (A+Z, B+Y, ...). | विपरीत अक्षरों की स्थिति का योग 27।
@qa
Q: Next in A, C, F, J, O? | A, C, F, J, O के बाद?
A: U | U
Q: CAT coded by +1 shift? | +1 से CAT का कूट?
A: DBU | DBU
Q: Position of E from the right? | दाईं ओर से E का स्थान?
A: 22nd (V) | 22वाँ (V)
Q: Opposite of C in the alphabet? | C का विपरीत अक्षर?
A: X | X
@quiz
? Next in A, C, F, J, O
- S
- T
+ U
- V
! +6 from O.
? CAT with each letter +1 becomes
- BZS
+ DBU
- EBV
- CBU
! C->D, A->B, T->U.
? The 22nd letter is
- U
+ V
- W
- T
! 27 - 5.
? The opposite letter of B is
- X
+ Y
- Z
- W
! 2 + 25 = 27.
@visual
sequence | Solving a letter series | Convert letters to numbers; Find the gaps; Spot the pattern in gaps; Extend and convert back
@problems
## Moderate
P: Find the next letter: B, E, H, K, ?
A: Gap +3 each time: N.
R: 1 | Pattern
R: 1 | N
## High
P: In a code, each letter is moved +2. Code the word "BAD".
A: B->D, A->C, D->F: DCF.
R: 1 | Rule
R: 1 | DCF
## Advanced
P: Find the next: Z, X, U, Q, ?
A: Backward gaps -2, -3, -4, so next -5: Q (17) - 5 = 12 = L.
R: 2 | Pattern
R: 1 | L

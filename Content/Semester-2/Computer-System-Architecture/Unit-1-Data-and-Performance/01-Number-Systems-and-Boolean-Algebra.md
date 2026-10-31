# Number systems and Boolean algebra
minutes: 25
yt: number systems binary twos complement
@study
**Binary, octal, hexadecimal:** 1011 (binary) = 8 + 2 + 1 = **11**; 255 = 0xFF = 11111111. **Two's complement** represents negative numbers: invert the bits and add 1. -5 in 8 bits: 5 = 00000101, invert 11111010, add 1 = **11111011**. 8-bit range is -128 to +127. Addition ignores the carry out; overflow occurs if two numbers of the same sign give a result of the opposite sign.
**Boolean algebra laws:** identity, null, idempotent (A + A = A), complement (A + A' = 1), De Morgan: (A + B)' = A' B' and (AB)' = A' + B'; absorption A + AB = A. NAND and NOR are universal gates.
XOR: 1010 XOR 0110 = **1100** (12). Half adder: sum = A XOR B, carry = A AND B. Full adder adds a carry-in.
**K-map** simplifies expressions: group adjacent 1s in powers of two.
## Hindi saransh
Two's complement: bits ulte karo aur 1 jodo. De Morgan ka niyam.
> NAND and NOR gates can build any logic circuit.
@qa
Q: Two's complement of 5 in 8 bits?
A: 11111011 (-5).
Q: State De Morgan's laws.
A: (A + B)' = A'B' and (AB)' = A' + B'.
Q: Which gates are universal?
A: NAND and NOR.
Q: Range of 8-bit two's complement numbers?
A: -128 to +127.
@quiz
? Binary 1011 equals
- 9
- 10
+ 11
- 13
! 8 + 2 + 1.
? -5 in 8-bit two's complement is
- 10000101
+ 11111011
- 11111010
- 00000101
! Invert and add 1.
? 1010 XOR 0110 is
- 1111
+ 1100
- 0010
- 0100
! Bitwise.
? Universal gates are
- AND and OR
+ NAND and NOR
- XOR and XNOR
- NOT only
! Any function can be built.
@visual
formula | Boolean laws | (A + B)' = A' B' ; (A B)' = A' + B' ; A + A B = A
@problems
## Moderate
P: Convert 1011 to decimal and 255 to hexadecimal.
A: 11 and FF.
R: 1 | 11
R: 1 | FF
## High
P: Find the 8-bit two's complement representation of -5.
A: 5 = 00000101; invert 11111010; add 1 = 11111011.
R: 2 | Steps
R: 1 | Result
## Advanced
P: Simplify A + A'B using Boolean algebra.
A: A + A'B = (A + A')(A + B) = 1 x (A + B) = A + B.
R: 2 | Distributive law
R: 2 | A + B

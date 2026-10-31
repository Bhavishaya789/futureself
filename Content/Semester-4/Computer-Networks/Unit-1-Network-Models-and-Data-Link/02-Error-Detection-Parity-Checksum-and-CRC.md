# Error detection: parity, checksum and CRC
minutes: 25
yt: CRC cyclic redundancy check example in computer networks
yt: parity bit checksum error detection
@study
Noise can flip bits while data travels. The sender adds **redundant bits** so the receiver can detect (and sometimes correct) errors. This lesson covers detection.

## Parity bit
Add one bit so the total number of 1s is even (**even parity**) or odd. It detects any **odd** number of bit flips but misses an even number (two flips cancel out).
Example (even parity): data 1011001 has four 1s, so the parity bit is 0.

## Internet checksum
Split the data into 16-bit words, add them with **end-around carry**, then take the **1's complement** of the sum. The receiver adds everything including the checksum; a result of all 1s means no error was found. It is fast, but weaker than CRC.

## CRC (Cyclic Redundancy Check)
Used in Ethernet and many other links. Choose a **generator** polynomial (for example 10011 = x^4 + x + 1, degree 4).
1. Append 4 zeros (degree of the generator) to the data.
2. Divide using **modulo-2 (XOR) division**.
3. The 4-bit **remainder** replaces the zeros. The sender transmits data + remainder.
4. The receiver divides the whole frame by the same generator. A **remainder of 0** means no error detected.

### Worked example
Data = 1101011011, generator = 10011.
Append 0000: 11010110110000. XOR division gives remainder **1110**.
Transmitted frame: **11010110111110**. Dividing this by 10011 gives remainder 0000 (checked), so the receiver accepts it.

```python
def crc_remainder(data, gen):
    bits = list(map(int, data + "0" * (len(gen) - 1)))
    g = list(map(int, gen))
    for i in range(len(data)):
        if bits[i]:
            for j in range(len(g)):
                bits[i + j] ^= g[j]
    return "".join(map(str, bits[-(len(gen) - 1):]))

print(crc_remainder("1101011011", "10011"))   # 1110
print(crc_remainder("11010110111110", "10011"))   # 0000
```

## What CRC detects
All single-bit errors, all burst errors no longer than the degree of the generator, and most longer bursts. It detects errors but does not correct them: the frame is dropped and a higher layer (or the link) asks for a resend.

## Hindi saransh
Parity ek extra bit hai jo sirf odd number of errors pakadta hai. Checksum 16-bit words ka 1's complement sum hai. CRC mein data ke baad zero lagakar generator se XOR division karte hain; remainder bhejte hain; receiver ko remainder 0 mile to error nahi mila.

> CRC remainder has (degree of generator) bits. A generator of 5 bits gives a 4-bit remainder.
@qa
Q: Why does a single parity bit fail to detect some errors?
A: It only checks whether the count of 1s is even or odd, so any even number of flipped bits leaves the parity unchanged and goes unnoticed.
Q: How many zeros are appended to the data before CRC division?
A: One less than the number of bits in the generator, which equals the degree of the generator polynomial.
Q: How does the CRC receiver decide that a frame is error-free?
A: It divides the received frame (data plus remainder) by the same generator. A remainder of zero means no error was detected.
Q: What arithmetic is used in CRC division?
A: Modulo-2 arithmetic: addition and subtraction are both XOR, with no carries or borrows.
Q: Does CRC correct errors?
A: No. It only detects them. The frame is discarded and recovery is left to retransmission by a higher layer.
@quiz
? A generator 10011 is used for CRC. The remainder has how many bits?
- 5
+ 4
- 3
- 2
! The generator has 5 bits (degree 4), so the remainder has 4 bits.
? For data 1101011011 and generator 10011 the transmitted CRC bits are
- 0110
- 1010
+ 1110
- 0000
! XOR division of 11010110110000 by 10011 leaves 1110.
? Which error is NOT always detected by an even parity bit?
- a single flipped bit
- three flipped bits
+ two flipped bits
- one flipped bit in the parity position
! Two flips keep the number of 1s even, so parity cannot see them.
? Subtraction in modulo-2 arithmetic is the same as
- AND
- OR
+ XOR
- NOT
! In GF(2), addition and subtraction are both XOR.
? A received CRC frame gives remainder 0101 on division. This means
- the frame is correct
+ an error was detected
- the generator is wrong
- the error was corrected
! Only a zero remainder is accepted; any other remainder means an error was detected.
@visual
steps | CRC at the sender | Append (degree) zeros to the data; Divide by the generator using XOR division; Take the remainder; Replace the zeros with the remainder; Send data plus remainder
flow | CRC check at the receiver | Receive frame > Divide by the same generator > Remainder is 0? > Yes: accept the frame; No: discard it and rely on retransmission
@problems
## Moderate
P: Even parity is used. The data bits are 1100101. Find the parity bit and the transmitted word.
A: 1100101 has four 1s, which is already even, so the parity bit is 0. The transmitted word is 11001010 (parity appended).
R: 2 | Counts the 1s correctly (four)
R: 1 | Parity bit 0 and the word 11001010
## High
P: Compute the CRC for data 1101011011 with generator 10011 and write the transmitted frame. Show how the receiver verifies it.
A: Append four zeros to get 11010110110000. Divide by 10011 using XOR; the remainder is 1110. Transmitted frame = 1101011011 followed by 1110 = 11010110111110. The receiver divides 11010110111110 by 10011 and gets remainder 0000, so the frame is accepted.
R: 2 | Appends four zeros and uses XOR division
R: 2 | Remainder 1110
R: 1 | Frame 11010110111110 and receiver check gives 0
## Advanced
P: Explain why CRC is preferred over a simple checksum on link layers like Ethernet, and state two kinds of errors CRC is guaranteed to detect.
A: CRC treats the data as a polynomial and divides by a carefully chosen generator, so it is sensitive to the position of bits as well as their values, and it is cheap to compute in hardware with shift registers. A checksum just adds words, so two errors that cancel each other (or reordered words) can go undetected. A suitable CRC detects every single-bit error and every burst error whose length is not greater than the degree of the generator, and all odd numbers of errors if the generator has a factor (x+1).
R: 2 | Explains position-sensitivity and hardware efficiency versus simple addition
R: 2 | Names two guaranteed error classes (single-bit, bursts up to the degree)
R: 1 | Notes that CRC detects but does not correct

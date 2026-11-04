# Encoding Schemes and Number System
minutes: 40
yt: class 11 computer science encoding schemes number system binary ASCII Unicode
@study
Encoding: converting data into a format for storage. ASCII (7-bit, 128 characters; extended 8-bit 256), ISCII (Indian), Unicode (UTF-8, UTF-16, UTF-32), supports all languages. Number systems: decimal (base 10), binary (base 2), octal (base 8), hexadecimal (base 16, digits 0-9 and A-F). Conversions: decimal to binary (repeated division by 2), binary to decimal (positional weights), binary to octal (group 3 bits), binary to hexadecimal (group 4 bits), decimal fractions (repeated multiplication). Binary addition; two’s complement. Examples: ASCII A = 65, a = 97, 0 = 48. Hex FF = 255. Data representation of integers, characters, images (pixels), audio, video.
## Deep dive: Encoding schemes
ASCII uses 7 bits per character: 128 characters (control codes 0-31, printable 32-126). A = 65, Z = 90, a = 97, z = 122, 0 = 48, 9 = 57, space = 32. ISCII 8-bit supports Indian scripts. Unicode assigns a code point to every character; UTF-8 variable length 1 to 4 bytes backward compatible with ASCII. Emojis are Unicode characters. Parity bit for error detection.
## Deep dive: Number conversions
Decimal to binary: 25 -> 11001. Binary to decimal: 1011 = 8 + 2 + 1 = 11. Binary to octal: 101110 = 56 (101 = 5, 110 = 6). Binary to hex: 11111111 = FF = 255. Hex to decimal: 2F = 2 x 16 + 15 = 47. Octal to decimal: 17 = 15. Fractions: 0.625 = 0.101. Binary addition: 1 + 1 = 10; 1011 + 0110 = 10001. Subtraction by 1 s and 2 s complement.
## Deep dive: Data representation
Integers stored as binary; negative numbers in 2 s complement; n-bit unsigned range 0 to 2^n - 1. An 8-bit number holds 0 to 255. Image: pixel matrix, RGB colours with 8 bits per channel (24-bit colour = 16.7 million colours). Sound: sampling rate and bit depth. Compression: lossless (ZIP, PNG) and lossy (JPEG, MP3). Floating point representation uses mantissa and exponent.
## Hindi saransh
Sankhya paddhatiyan aur kootlekhan: binary, octal, hex. ASCII A = 65, a = 97. Unicode sabhi bhashaon ke liye.
> An n-bit unsigned number can store values from 0 to 2^n minus 1.
@formulas
## ASCII
A | 65 | Capital
a | 97 | Small
0 | 48 | Digit
Space | 32 | Printable
## Bases
Binary | 2 | 0 and 1
Octal | 8 | 0 to 7
Decimal | 10 | 0 to 9
Hex | 16 | 0 to F

@qa
Q: Which converting characters to codes?
A: Encoding converting characters to codes.
Q: What do you know about Encoding?
A: Encoding converting characters to codes.
Q: Which American Standard Code for Information Interchange?
A: ASCII American Standard Code for Information Interchange.
Q: What do you know about ASCII?
A: ASCII American Standard Code for Information Interchange.
Q: Which Indian Script Code for Information Interchange?
A: ISCII Indian Script Code for Information Interchange.
Q: What do you know about ISCII?
A: ISCII Indian Script Code for Information Interchange.
Q: Which the universal character encoding standard?
A: Unicode the universal character encoding standard.
Q: What do you know about Unicode?
A: Unicode the universal character encoding standard.
Q: Which the variable length encoding of Unicode?
A: UTF-8 the variable length encoding of Unicode.
Q: What do you know about UTF-8?
A: UTF-8 the variable length encoding of Unicode.
Q: Which the number assigned to a Unicode character?
A: Code point the number assigned to a Unicode character.
Q: What do you know about Code point?
A: Code point the number assigned to a Unicode character.
Q: Which a collection of characters with codes?
A: Character set a collection of characters with codes.
Q: What do you know about Character set?
A: Character set a collection of characters with codes.
Q: Which a way of representing numbers?
A: Number system a way of representing numbers.
Q: What do you know about Number system?
A: Number system a way of representing numbers.
Q: Which the number of digits in a number system?
A: Base the number of digits in a number system.
Q: What do you know about Base?
A: Base the number of digits in a number system.
Q: Which the number system with base 10?
A: Decimal the number system with base 10.
Q: What do you know about Decimal?
A: Decimal the number system with base 10.
Q: Which the number system with base 2?
A: Binary the number system with base 2.
Q: What do you know about Binary?
A: Binary the number system with base 2.
Q: Which the number system with base 8?
A: Octal the number system with base 8.
Q: What do you know about Octal?
A: Octal the number system with base 8.
Q: Which the number system with base 16?
A: Hexadecimal the number system with base 16.
Q: What do you know about Hexadecimal?
A: Hexadecimal the number system with base 16.
Q: Which the value of a digit by its position?
A: Positional weight the value of a digit by its position.
Q: What do you know about Positional weight?
A: Positional weight the value of a digit by its position.
Q: Which a binary digit?
A: Bit a binary digit.
Q: What do you know about Bit?
A: Bit a binary digit.
Q: Which the least significant bit?
A: LSB the least significant bit.
Q: What do you know about LSB?
A: LSB the least significant bit.
Q: Which the most significant bit?
A: MSB the most significant bit.
Q: What do you know about MSB?
A: MSB the most significant bit.
Q: Which addition where one plus one gives ten?
A: Binary addition addition where one plus one gives ten.
Q: What do you know about Binary addition?
A: Binary addition addition where one plus one gives ten.
Q: Which the inversion of all bits?
A: One's complement the inversion of all bits.
Q: What do you know about One's complement?
A: One's complement the inversion of all bits.
Q: Which one's complement plus one?
A: Two's complement one's complement plus one.
Q: What do you know about Two's complement?
A: Two's complement one's complement plus one.
Q: Which a number with a sign?
A: Signed number a number with a sign.
Q: What do you know about Signed number?
A: Signed number a number with a sign.
Q: Which a non-negative number?
A: Unsigned number a non-negative number.
Q: What do you know about Unsigned number?
A: Unsigned number a non-negative number.
Q: Which a result larger than the bits can hold?
A: Overflow a result larger than the bits can hold.
Q: What do you know about Overflow?
A: Overflow a result larger than the bits can hold.
Q: Which an extra bit for error detection?
A: Parity bit an extra bit for error detection.
Q: What do you know about Parity bit?
A: Parity bit an extra bit for error detection.
Q: Which the smallest element of an image?
A: Pixel the smallest element of an image.
Q: What do you know about Pixel?
A: Pixel the smallest element of an image.
Q: Which red, green and blue colour model?
A: RGB red, green and blue colour model.
Q: What do you know about RGB?
A: RGB red, green and blue colour model.
Q: Which the number of bits per pixel?
A: Colour depth the number of bits per pixel.
Q: What do you know about Colour depth?
A: Colour depth the number of bits per pixel.
Q: Which the number of pixels in an image?
A: Resolution the number of pixels in an image.
Q: What do you know about Resolution?
A: Resolution the number of pixels in an image.
Q: Which the number of audio samples per second?
A: Sampling rate the number of audio samples per second.
Q: What do you know about Sampling rate?
A: Sampling rate the number of audio samples per second.
Q: Which the number of bits per sample?
A: Bit depth the number of bits per sample.
Q: What do you know about Bit depth?
A: Bit depth the number of bits per sample.
Q: Which compression without data loss?
A: Lossless compression compression without data loss.
Q: What do you know about Lossless compression?
A: Lossless compression compression without data loss.
Q: Which compression with some data loss?
A: Lossy compression compression with some data loss.
Q: What do you know about Lossy compression?
A: Lossy compression compression with some data loss.
Q: Which a lossless compression format?
A: ZIP a lossless compression format.
Q: What do you know about ZIP?
A: ZIP a lossless compression format.
Q: Which a lossy image format?
A: JPEG a lossy image format.
Q: What do you know about JPEG?
A: JPEG a lossy image format.
Q: Which a lossy audio format?
A: MP3 a lossy audio format.
Q: What do you know about MP3?
A: MP3 a lossy audio format.
Q: Which the significant digits of a floating point number?
A: Mantissa the significant digits of a floating point number.
Q: What do you know about Mantissa?
A: Mantissa the significant digits of a floating point number.
Q: Which the power of the base in floating point numbers?
A: Exponent the power of the base in floating point numbers.
Q: What do you know about Exponent?
A: Exponent the power of the base in floating point numbers.
Q: Which a representation of real numbers?
A: Floating point a representation of real numbers.
Q: What do you know about Floating point?
A: Floating point a representation of real numbers.
Q: Which another word for the base?
A: Radix another word for the base.
Q: What do you know about Radix?
A: Radix another word for the base.
Q: Which four bits?
A: Nibble four bits.
Q: What do you know about Nibble?
A: Nibble four bits.
Q: Which the unit of data processed by the CPU?
A: Word the unit of data processed by the CPU.
Q: What do you know about Word?
A: Word the unit of data processed by the CPU.
Q: Which a digit from 0 to F?
A: Hex digit a digit from 0 to F.
Q: What do you know about Hex digit?
A: Hex digit a digit from 0 to F.
Q: Which the value left after division?
A: Remainder the value left after division.
Q: What do you know about Remainder?
A: Remainder the value left after division.
Q: Which the result of division?
A: Quotient the result of division.
Q: What do you know about Quotient?
A: Quotient the result of division.
Q: Which the part after the radix point?
A: Fraction the part after the radix point.
Q: What do you know about Fraction?
A: Fraction the part after the radix point.
Q: Which the point separating integer and fraction?
A: Radix point the point separating integer and fraction.
Q: What do you know about Radix point?
A: Radix point the point separating integer and fraction.
Q: Which a non-printing ASCII code?
A: Control character a non-printing ASCII code.
Q: What do you know about Control character?
A: Control character a non-printing ASCII code.
Q: Which a visible ASCII code?
A: Printable character a visible ASCII code.
Q: What do you know about Printable character?
A: Printable character a visible ASCII code.
Q: Which 8-bit ASCII with 256 characters?
A: Extended ASCII 8-bit ASCII with 256 characters.
Q: What do you know about Extended ASCII?
A: Extended ASCII 8-bit ASCII with 256 characters.
Q: Which a pictograph in Unicode?
A: Emoji a pictograph in Unicode.
Q: What do you know about Emoji?
A: Emoji a pictograph in Unicode.
Q: Which the order of bytes in memory?
A: Endianness the order of bytes in memory.
Q: What do you know about Endianness?
A: Endianness the order of bytes in memory.
Q: How many characters does 7-bit ASCII support?
A: 128.
Q: Why was Unicode introduced?
A: To represent characters of all languages.
Q: What is the ASCII code for A?
A: 65.
Q: Why does UTF-8 use variable length?
A: To save space for common characters.
Q: What are the digits of the octal system?
A: 0 to 7.
Q: What are the digits of hexadecimal?
A: 0 to 9 and A to F.
Q: What is the decimal value of hexadecimal F?
A: 15.
Q: How do you convert decimal to binary?
A: Divide repeatedly by 2 and read remainders upward.
Q: How do you convert binary to octal?
A: Group bits in threes.
Q: How do you convert binary to hexadecimal?
A: Group bits in fours.
Q: What is the binary of 10?
A: 1010.
Q: What is the binary sum 1 plus 1?
A: 10.
Q: What is two's complement used for?
A: Representing negative numbers.
Q: What is the range of 8-bit unsigned numbers?
A: 0 to 255.
Q: What is a pixel?
A: The smallest unit of a digital image.
Q: How many colours does 24-bit colour give?
A: About 16.7 million.
@quiz
? Which converting characters to codes?
- Quotient
- Signed number
+ Encoding
- Endianness
! Encoding converting characters to codes.
? Which statement is true of Encoding?
- A lossy image format
- The most significant bit
- The inversion of all bits
+ Converting characters to codes
! Encoding converting characters to codes.
? Which American Standard Code for Information Interchange?
+ ASCII
- Positional weight
- Quotient
- Hexadecimal
! ASCII American Standard Code for Information Interchange.
? Which statement is true of ASCII?
+ American Standard Code for Information Interchange
- The significant digits of a floating point number
- An extra bit for error detection
- A pictograph in Unicode
! ASCII American Standard Code for Information Interchange.
? Which Indian Script Code for Information Interchange?
- MSB
- Parity bit
- Signed number
+ ISCII
! ISCII Indian Script Code for Information Interchange.
? Which statement is true of ISCII?
- A pictograph in Unicode
+ Indian Script Code for Information Interchange
- The inversion of all bits
- A binary digit
! ISCII Indian Script Code for Information Interchange.
? Which the universal character encoding standard?
- Nibble
- One's complement
+ Unicode
- Bit
! Unicode the universal character encoding standard.
? Which statement is true of Unicode?
- Compression without data loss
- A lossy audio format
- Compression with some data loss
+ The universal character encoding standard
! Unicode the universal character encoding standard.
? Which the variable length encoding of Unicode?
+ UTF-8
- Encoding
- Fraction
- Two's complement
! UTF-8 the variable length encoding of Unicode.
? Which statement is true of UTF-8?
- A lossless compression format
- The number of audio samples per second
+ The variable length encoding of Unicode
- An extra bit for error detection
! UTF-8 the variable length encoding of Unicode.
? Which the number assigned to a Unicode character?
- Quotient
- Unsigned number
- UTF-8
+ Code point
! Code point the number assigned to a Unicode character.
? Which statement is true of Code point?
- A non-printing ASCII code
- The least significant bit
+ The number assigned to a Unicode character
- A representation of real numbers
! Code point the number assigned to a Unicode character.
? Which a collection of characters with codes?
- Hex digit
- ASCII
- Octal
+ Character set
! Character set a collection of characters with codes.
? Which statement is true of Character set?
- A non-printing ASCII code
- A visible ASCII code
- Red, green and blue colour model
+ A collection of characters with codes
! Character set a collection of characters with codes.
? Which a way of representing numbers?
- Lossless compression
- Extended ASCII
- Sampling rate
+ Number system
! Number system a way of representing numbers.
? Which statement is true of Number system?
- The value left after division
+ A way of representing numbers
- The order of bytes in memory
- The power of the base in floating point numbers
! Number system a way of representing numbers.
? Which the number of digits in a number system?
+ Base
- ASCII
- Binary addition
- JPEG
! Base the number of digits in a number system.
? Which statement is true of Base?
+ The number of digits in a number system
- The smallest element of an image
- The part after the radix point
- A number with a sign
! Base the number of digits in a number system.
? Which the number system with base 10?
- Positional weight
- Radix
+ Decimal
- Lossy compression
! Decimal the number system with base 10.
? Which statement is true of Decimal?
- The number of pixels in an image
- The most significant bit
+ The number system with base 10
- A non-printing ASCII code
! Decimal the number system with base 10.
? Which the number system with base 2?
- Control character
- Octal
- Radix
+ Binary
! Binary the number system with base 2.
? Which statement is true of Binary?
- The number assigned to a Unicode character
+ The number system with base 2
- Indian Script Code for Information Interchange
- A number with a sign
! Binary the number system with base 2.
? Which the number system with base 8?
+ Octal
- ASCII
- Decimal
- ISCII
! Octal the number system with base 8.
? Which statement is true of Octal?
+ The number system with base 8
- Indian Script Code for Information Interchange
- The smallest element of an image
- Another word for the base
! Octal the number system with base 8.
? Which the number system with base 16?
+ Hexadecimal
- Decimal
- Printable character
- MSB
! Hexadecimal the number system with base 16.
? Which statement is true of Hexadecimal?
+ The number system with base 16
- American Standard Code for Information Interchange
- An extra bit for error detection
- A visible ASCII code
! Hexadecimal the number system with base 16.
? Which the value of a digit by its position?
- MSB
+ Positional weight
- Binary addition
- Overflow
! Positional weight the value of a digit by its position.
? Which statement is true of Positional weight?
+ The value of a digit by its position
- Four bits
- A pictograph in Unicode
- The universal character encoding standard
! Positional weight the value of a digit by its position.
? Which a binary digit?
- Number system
- Character set
+ Bit
- Fraction
! Bit a binary digit.
? Which statement is true of Bit?
- An extra bit for error detection
- A pictograph in Unicode
+ A binary digit
- The number of bits per pixel
! Bit a binary digit.
? Which the least significant bit?
- Code point
- Character set
- Bit
+ LSB
! LSB the least significant bit.
? Which statement is true of LSB?
- The number of digits in a number system
- The most significant bit
- Another word for the base
+ The least significant bit
! LSB the least significant bit.
? Which the most significant bit?
- Binary addition
- Colour depth
+ MSB
- Two's complement
! MSB the most significant bit.
? Which statement is true of MSB?
+ The most significant bit
- Four bits
- The number of pixels in an image
- The number of bits per sample
! MSB the most significant bit.
? Which addition where one plus one gives ten?
- Sampling rate
- JPEG
+ Binary addition
- Quotient
! Binary addition addition where one plus one gives ten.
? Which statement is true of Binary addition?
- The number of audio samples per second
- The number system with base 2
+ Addition where one plus one gives ten
- Compression without data loss
! Binary addition addition where one plus one gives ten.
? Which the inversion of all bits?
+ One's complement
- Sampling rate
- Two's complement
- Radix
! One's complement the inversion of all bits.
? Which statement is true of One's complement?
- The number system with base 8
- A collection of characters with codes
- The universal character encoding standard
+ The inversion of all bits
! One's complement the inversion of all bits.
? Which one's complement plus one?
- Quotient
- Number system
+ Two's complement
- JPEG
! Two's complement one's complement plus one.
? Which statement is true of Two's complement?
- Four bits
+ One's complement plus one
- The unit of data processed by the CPU
- The significant digits of a floating point number
! Two's complement one's complement plus one.
? Which a number with a sign?
- Bit depth
- Remainder
+ Signed number
- Binary addition
! Signed number a number with a sign.
? Which statement is true of Signed number?
- The least significant bit
- The number of bits per sample
+ A number with a sign
- A visible ASCII code
! Signed number a number with a sign.
? Which a non-negative number?
- Positional weight
- Fraction
- Hex digit
+ Unsigned number
! Unsigned number a non-negative number.
? Which statement is true of Unsigned number?
- The least significant bit
+ A non-negative number
- Compression with some data loss
- The number of bits per sample
! Unsigned number a non-negative number.
? Which a result larger than the bits can hold?
+ Overflow
- Lossy compression
- Quotient
- LSB
! Overflow a result larger than the bits can hold.
? Which statement is true of Overflow?
- A collection of characters with codes
- A representation of real numbers
+ A result larger than the bits can hold
- The most significant bit
! Overflow a result larger than the bits can hold.
? Which an extra bit for error detection?
- Number system
- Word
- One's complement
+ Parity bit
! Parity bit an extra bit for error detection.
? Which statement is true of Parity bit?
- Another word for the base
- One's complement plus one
+ An extra bit for error detection
- A binary digit
! Parity bit an extra bit for error detection.
? Which the smallest element of an image?
- Remainder
- Unicode
+ Pixel
- Exponent
! Pixel the smallest element of an image.
? Which statement is true of Pixel?
- Compression with some data loss
- A pictograph in Unicode
- Converting characters to codes
+ The smallest element of an image
! Pixel the smallest element of an image.
? Which red, green and blue colour model?
+ RGB
- Unicode
- Bit
- JPEG
! RGB red, green and blue colour model.
? Which statement is true of RGB?
- 8-bit ASCII with 256 characters
+ Red, green and blue colour model
- The number of bits per pixel
- A visible ASCII code
! RGB red, green and blue colour model.
? Which the number of bits per pixel?
- Nibble
- JPEG
+ Colour depth
- Lossy compression
! Colour depth the number of bits per pixel.
? Which statement is true of Colour depth?
- The number system with base 2
+ The number of bits per pixel
- The number of digits in a number system
- The value of a digit by its position
! Colour depth the number of bits per pixel.
? Which the number of pixels in an image?
- Floating point
- LSB
- MP3
+ Resolution
! Resolution the number of pixels in an image.
? Which statement is true of Resolution?
- A lossless compression format
- The point separating integer and fraction
+ The number of pixels in an image
- A pictograph in Unicode
! Resolution the number of pixels in an image.
? Which the number of audio samples per second?
+ Sampling rate
- ZIP
- Decimal
- Base
! Sampling rate the number of audio samples per second.
? Which statement is true of Sampling rate?
- The number of digits in a number system
+ The number of audio samples per second
- Indian Script Code for Information Interchange
- The number system with base 2
! Sampling rate the number of audio samples per second.
? Which the number of bits per sample?
+ Bit depth
- Colour depth
- Nibble
- JPEG
! Bit depth the number of bits per sample.
? Which statement is true of Bit depth?
+ The number of bits per sample
- A number with a sign
- Compression with some data loss
- The number system with base 16
! Bit depth the number of bits per sample.
? Which compression without data loss?
- JPEG
- UTF-8
+ Lossless compression
- Hex digit
! Lossless compression compression without data loss.
? Which statement is true of Lossless compression?
- Converting characters to codes
- The value of a digit by its position
- A lossy audio format
+ Compression without data loss
! Lossless compression compression without data loss.
? Which compression with some data loss?
+ Lossy compression
- ASCII
- Encoding
- Two's complement
! Lossy compression compression with some data loss.
? Which statement is true of Lossy compression?
- A lossy image format
- A way of representing numbers
- The number assigned to a Unicode character
+ Compression with some data loss
! Lossy compression compression with some data loss.
? Which a lossless compression format?
+ ZIP
- Quotient
- Unicode
- Decimal
! ZIP a lossless compression format.
? Which statement is true of ZIP?
+ A lossless compression format
- A collection of characters with codes
- The number of pixels in an image
- The result of division
! ZIP a lossless compression format.
? Which a lossy image format?
- Decimal
- Printable character
- MP3
+ JPEG
! JPEG a lossy image format.
? Which statement is true of JPEG?
- The number of digits in a number system
+ A lossy image format
- The result of division
- The universal character encoding standard
! JPEG a lossy image format.
? Which a lossy audio format?
- JPEG
+ MP3
- Quotient
- Colour depth
! MP3 a lossy audio format.
? Which statement is true of MP3?
- American Standard Code for Information Interchange
+ A lossy audio format
- A digit from 0 to F
- A way of representing numbers
! MP3 a lossy audio format.
? Which the significant digits of a floating point number?
- Floating point
- Nibble
- Bit depth
+ Mantissa
! Mantissa the significant digits of a floating point number.
? Which statement is true of Mantissa?
- A non-negative number
+ The significant digits of a floating point number
- American Standard Code for Information Interchange
- The number of bits per sample
! Mantissa the significant digits of a floating point number.
? Which the power of the base in floating point numbers?
+ Exponent
- Binary
- Hex digit
- Word
! Exponent the power of the base in floating point numbers.
? Which statement is true of Exponent?
+ The power of the base in floating point numbers
- A number with a sign
- 8-bit ASCII with 256 characters
- The number system with base 10
! Exponent the power of the base in floating point numbers.
? Which a representation of real numbers?
- Unsigned number
- Control character
+ Floating point
- Printable character
! Floating point a representation of real numbers.
? Which statement is true of Floating point?
- A collection of characters with codes
- Red, green and blue colour model
- The value of a digit by its position
+ A representation of real numbers
! Floating point a representation of real numbers.
? Which another word for the base?
+ Radix
- Bit depth
- ISCII
- Unsigned number
! Radix another word for the base.
? Which statement is true of Radix?
- The number assigned to a Unicode character
- A result larger than the bits can hold
- Indian Script Code for Information Interchange
+ Another word for the base
! Radix another word for the base.
? Which four bits?
- Resolution
- RGB
+ Nibble
- Lossy compression
! Nibble four bits.
? Which statement is true of Nibble?
- Another word for the base
- The unit of data processed by the CPU
- A pictograph in Unicode
+ Four bits
! Nibble four bits.
? Which the unit of data processed by the CPU?
+ Word
- MSB
- Hexadecimal
- Pixel
! Word the unit of data processed by the CPU.
? Which statement is true of Word?
+ The unit of data processed by the CPU
- A lossy image format
- The significant digits of a floating point number
- The value left after division
! Word the unit of data processed by the CPU.
? Which a digit from 0 to F?
- Fraction
+ Hex digit
- Overflow
- Remainder
! Hex digit a digit from 0 to F.
? Which statement is true of Hex digit?
- The power of the base in floating point numbers
- A collection of characters with codes
+ A digit from 0 to F
- A lossy image format
! Hex digit a digit from 0 to F.
? Which the value left after division?
- Word
- Floating point
+ Remainder
- ASCII
! Remainder the value left after division.
? Which statement is true of Remainder?
- The number system with base 16
- The number of audio samples per second
- American Standard Code for Information Interchange
+ The value left after division
! Remainder the value left after division.
? Which the result of division?
- RGB
- Endianness
- Base
+ Quotient
! Quotient the result of division.
? Which statement is true of Quotient?
+ The result of division
- A digit from 0 to F
- The number of bits per pixel
- A number with a sign
! Quotient the result of division.
? Which the part after the radix point?
- Pixel
+ Fraction
- Unicode
- Hex digit
! Fraction the part after the radix point.
? Which statement is true of Fraction?
- Indian Script Code for Information Interchange
+ The part after the radix point
- Compression without data loss
- The least significant bit
! Fraction the part after the radix point.
? Which the point separating integer and fraction?
- Extended ASCII
- Lossy compression
+ Radix point
- ISCII
! Radix point the point separating integer and fraction.
? Which statement is true of Radix point?
- The variable length encoding of Unicode
+ The point separating integer and fraction
- A binary digit
- The part after the radix point
! Radix point the point separating integer and fraction.
? Which a non-printing ASCII code?
- Extended ASCII
- Binary addition
+ Control character
- Unsigned number
! Control character a non-printing ASCII code.
? Which statement is true of Control character?
- 8-bit ASCII with 256 characters
- The value left after division
+ A non-printing ASCII code
- The point separating integer and fraction
! Control character a non-printing ASCII code.
? Which a visible ASCII code?
- Colour depth
- Fraction
+ Printable character
- Octal
! Printable character a visible ASCII code.
? Which statement is true of Printable character?
- A collection of characters with codes
+ A visible ASCII code
- The value of a digit by its position
- 8-bit ASCII with 256 characters
! Printable character a visible ASCII code.
? Which 8-bit ASCII with 256 characters?
+ Extended ASCII
- Base
- Pixel
- Radix point
! Extended ASCII 8-bit ASCII with 256 characters.
? Which statement is true of Extended ASCII?
- A non-negative number
- The significant digits of a floating point number
- A digit from 0 to F
+ 8-bit ASCII with 256 characters
! Extended ASCII 8-bit ASCII with 256 characters.
? Which a pictograph in Unicode?
- Control character
- ASCII
- Number system
+ Emoji
! Emoji a pictograph in Unicode.
? Which statement is true of Emoji?
- The number system with base 16
+ A pictograph in Unicode
- The variable length encoding of Unicode
- The most significant bit
! Emoji a pictograph in Unicode.
? Which the order of bytes in memory?
- UTF-8
- Signed number
- Quotient
+ Endianness
! Endianness the order of bytes in memory.
? Which statement is true of Endianness?
+ The order of bytes in memory
- The least significant bit
- American Standard Code for Information Interchange
- 8-bit ASCII with 256 characters
! Endianness the order of bytes in memory.
? ASCII code for A
- 97
- 48
- 32
+ 65
! Capital.
? Hex F equals
- 10
- 16
- 12
+ 15
! Digit.
? Binary of 8
+ 1000
- 0100
- 1100
- 1010
! Power of 2.
? Octal digits are
- 0 to 9
+ 0 to 7
- 0 to F
- 0 and 1
! Base 8.
? Unicode supports
- English only
- Hindi only
- None
+ All languages
! Universal.
? 8-bit unsigned max
- 256
+ 255
- 128
- 127
! 2^8 - 1.
@visual
flow | Decimal to binary | Divide by 2; Note remainder; Repeat; Read upward
compare | ASCII and Unicode | ASCII=7 bits~128 characters; Unicode=Multi-byte~All languages
blocks | Number systems | Binary; Octal; Decimal; Hexadecimal
table | Conversion | Decimal=10/15/255; Binary=1010/1111/11111111
mind | Encoding | ASCII; Unicode; Bases; Data
steps | Binary to hex | Group by 4; Convert each; Combine
cycle | Encoding | Character; Code; Store; Decode
@problems
## Moderate
P: Convert 45 to binary and 101101 to decimal.
A: 45 = 101101; 101101 = 32+8+4+1 = 45.
R: 3 | To binary
R: 3 | To decimal
## High
P: Convert (2F)16 to decimal and binary, and (755)8 to binary.
A: 2F = 47 = 00101111; 755 = 111101101.
R: 2 | Decimal
R: 2 | Binary
R: 2 | Octal
R: 2 | Method
## Advanced
P: Add 1011 and 0111 in binary and find the 8-bit two s complement of -5.
A: 1011 + 0111 = 10010; +5 = 00000101, -5 = 11111011.
R: 2 | Addition
R: 2 | Complement
R: 2 | Steps
R: 2 | Check

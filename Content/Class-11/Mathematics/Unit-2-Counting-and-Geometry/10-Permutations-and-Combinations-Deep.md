# Permutations and Combinations
minutes: 45
yt: class 11 maths permutations and combinations fundamental principle counting nPr nCr
@study
The Fundamental Principle of Counting has two parts. The multiplication principle: if one event occurs in m ways and another in n ways, together they occur in m x n ways. The addition principle: if either of two exclusive events can occur in m or n ways, the number is m + n. The factorial n! = n(n - 1)(n - 2) ... 1, with 0! = 1. A permutation is an arrangement where order matters: nPr = n!/(n - r)!. A combination is a selection where order does not matter: nCr = n!/(r!(n - r)!), and nPr = r! nCr. Properties: nCr = nC(n-r); nCr + nC(r-1) = (n+1)Cr; nC0 = nCn = 1; nP n = n!. Permutations with repetition: the number of r-letter arrangements from n objects with repetition allowed is n^r. Permutations when some objects are alike: n!/(p! q! r!). Circular permutations: n objects in a circle can be arranged in (n - 1)! ways. Restricted arrangements: treat together items as a single block and multiply by internal arrangements; for items never together subtract the together count from the total; for fixed positions fill those first. Number of 4-digit numbers, words from MATHEMATICS (11 letters with M, A, T repeated twice: 11!/(2!2!2!)) and arrangements of the word INDIA are typical. Selection problems: choosing a committee from men and women uses products of combinations; selecting at least one uses 2^n - 1 total selections; the number of diagonals in an n-sided polygon is nC2 - n; the number of triangles from n points with p collinear is nC3 - pC3. The number of ways to divide into groups uses factorials of group sizes. Handshakes among n people number nC2.
## Deep dive: Counting principles
Use multiplication when tasks are done one after another. Use addition when choices are alternatives. Break difficult problems into cases. Always check whether repetition is allowed.
## Deep dive: Permutations
nPr counts ordered arrangements of r from n distinct objects. When letters repeat divide by the factorials of the repeats. For circular tables fix one person to remove rotations. For necklaces with reflection divide by 2 further.
## Deep dive: Combinations
nCr counts committees and selections. Multiply combinations for choosing from different groups. Use complement counting for at least one. Geometry uses nC2 for lines and nC3 for triangles.
## Hindi saransh
Kramchay aur sanchay: order mahatvapurn ho to nPr, na ho to nCr; vritiya kramchay (n-1)! hota hai.
> Ask first: does order matter? If yes use permutation, otherwise combination.
@formulas
## Key formulas
nPr | n!/(n-r)! | Order matters
nCr | n!/(r!(n-r)!) | Order ignored
Circular | (n-1)! | Distinct objects
With repeats | n!/(p!q!r!) | Alike items
Selections | 2^n - 1 | At least one

@qa
Q: Which multiplies ways of successive events?
A: Multiplication principle multiplies ways of successive events.
Q: What do you know about Multiplication principle?
A: Multiplication principle multiplies ways of successive events.
Q: Which adds ways of exclusive alternatives?
A: Addition principle adds ways of exclusive alternatives.
Q: What do you know about Addition principle?
A: Addition principle adds ways of exclusive alternatives.
Q: Which n! is the product of natural numbers up to n?
A: Factorial n! is the product of natural numbers up to n.
Q: What do you know about Factorial?
A: Factorial n! is the product of natural numbers up to n.
Q: Which is defined as 1?
A: Zero factorial is defined as 1.
Q: What do you know about Zero factorial?
A: Zero factorial is defined as 1.
Q: Which is an arrangement in which order matters?
A: Permutation is an arrangement in which order matters.
Q: What do you know about Permutation?
A: Permutation is an arrangement in which order matters.
Q: Which is a selection in which order does not matter?
A: Combination is a selection in which order does not matter.
Q: What do you know about Combination?
A: Combination is a selection in which order does not matter.
Q: Which is n!/(n - r)!?
A: nPr formula is n!/(n - r)!.
Q: What do you know about nPr formula?
A: NPr formula is n!/(n - r)!.
Q: Which is n!/(r!(n - r)!)?
A: nCr formula is n!/(r!(n - r)!).
Q: What do you know about nCr formula?
A: NCr formula is n!/(r!(n - r)!).
Q: Which is nPr = r! times nCr?
A: Link of nPr and nCr is nPr = r! times nCr.
Q: What do you know about Link of nPr and nCr?
A: Link of nPr and nCr is nPr = r! times nCr.
Q: Which equals n!?
A: nPn equals n!.
Q: What do you know about nPn?
A: NPn equals n!.
Q: Which equals n?
A: nP1 equals n.
Q: What do you know about nP1?
A: NP1 equals n.
Q: Which equals 1?
A: nCn equals 1.
Q: What do you know about nCn?
A: NCn equals 1.
Q: What do you know about nC0?
A: NC0 equals 1.
Q: What do you know about nC1?
A: NC1 equals n.
Q: Which nCr = nC(n - r)?
A: Symmetry of combinations nCr = nC(n - r).
Q: What do you know about Symmetry of combinations?
A: Symmetry of combinations nCr = nC(n - r).
Q: Which nCr + nC(r-1) = (n+1)Cr?
A: Pascal identity nCr + nC(r-1) = (n+1)Cr.
Q: What do you know about Pascal identity?
A: Pascal identity nCr + nC(r-1) = (n+1)Cr.
Q: Which of r places from n objects are n^r?
A: Arrangements with repetition of r places from n objects are n^r.
Q: What do you know about Arrangements with repetition?
A: Arrangements with repetition of r places from n objects are n^r.
Q: Which arrangements are n!/(p! q! r!)?
A: Alike objects arrangements are n!/(p! q! r!).
Q: What do you know about Alike objects?
A: Alike objects arrangements are n!/(p! q! r!).
Q: Which of n distinct objects is (n - 1)!?
A: Circular permutation of n distinct objects is (n - 1)!.
Q: What do you know about Circular permutation?
A: Circular permutation of n distinct objects is (n - 1)!.
Q: Which arrangements of n beads are (n - 1)!/2?
A: Garland arrangements of n beads are (n - 1)!/2.
Q: What do you know about Garland?
A: Garland arrangements of n beads are (n - 1)!/2.
Q: Which treats items together as one object?
A: Block method treats items together as one object.
Q: What do you know about Block method?
A: Block method treats items together as one object.
Q: Which multiply block count by internal arrangements?
A: Together arrangements multiply block count by internal arrangements.
Q: What do you know about Together arrangements?
A: Together arrangements multiply block count by internal arrangements.
Q: Which is total minus together?
A: Never together is total minus together.
Q: What do you know about Never together?
A: Never together is total minus together.
Q: Which is used for at least one conditions?
A: Complement counting is used for at least one conditions.
Q: What do you know about Complement counting?
A: Complement counting is used for at least one conditions.
Q: Which from n distinct objects is 2^n - 1?
A: Total selections from n distinct objects is 2^n - 1.
Q: What do you know about Total selections?
A: Total selections from n distinct objects is 2^n - 1.
Q: Which of an n-sided polygon number nC2 - n?
A: Diagonals of an n-sided polygon number nC2 - n.
Q: What do you know about Diagonals?
A: Diagonals of an n-sided polygon number nC2 - n.
Q: Which from n points with p collinear are nC3 - pC3?
A: Triangles from n points with p collinear are nC3 - pC3.
Q: What do you know about Triangles?
A: Triangles from n points with p collinear are nC3 - pC3.
Q: Which among n people number nC2?
A: Handshakes among n people number nC2.
Q: What do you know about Handshakes?
A: Handshakes among n people number nC2.
Q: Which through n points with no three collinear number nC2?
A: Lines through n points with no three collinear number nC2.
Q: What do you know about Lines?
A: Lines through n points with no three collinear number nC2.
Q: Which uses products of combinations?
A: Committee selection uses products of combinations.
Q: What do you know about Committee selection?
A: Committee selection uses products of combinations.
Q: Which arranged in 11!/(2! 2! 2!) ways?
A: Letters of MATHEMATICS arranged in 11!/(2! 2! 2!) ways.
Q: What do you know about Letters of MATHEMATICS?
A: Letters of MATHEMATICS arranged in 11!/(2! 2! 2!) ways.
Q: Which has 5 letters with I repeated twice?
A: Word INDIA has 5 letters with I repeated twice.
Q: What do you know about Word INDIA?
A: Word INDIA has 5 letters with I repeated twice.
Q: Which is 20?
A: Value of 5P2 is 20.
Q: What do you know about Value of 5P2?
A: Value of 5P2 is 20.
Q: Which is 10?
A: Value of 5C2 is 10.
Q: What do you know about Value of 5C2?
A: Value of 5C2 is 10.
Q: Which is 24?
A: Value of 4! is 24.
Q: What do you know about Value of 4!?
A: Value of 4! is 24.
Q: Which is 720?
A: Value of 6! is 720.
Q: What do you know about Value of 6!?
A: Value of 6! is 720.
Q: Which in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9?
A: Digits without repetition in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9.
Q: What do you know about Digits without repetition?
A: Digits without repetition in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9.
Q: Which have an even digit in the unit place?
A: Even numbers have an even digit in the unit place.
Q: What do you know about Even numbers?
A: Even numbers have an even digit in the unit place.
Q: Which cannot be the first digit of a number?
A: Digit zero cannot be the first digit of a number.
Q: What do you know about Digit zero?
A: Digit zero cannot be the first digit of a number.
Q: Which into groups uses factorials of group sizes?
A: Distribution of objects into groups uses factorials of group sizes.
Q: What do you know about Distribution of objects?
A: Distribution of objects into groups uses factorials of group sizes.
Q: Which is found by counting words before it in dictionary order?
A: Rank of a word is found by counting words before it in dictionary order.
Q: What do you know about Rank of a word?
A: Rank of a word is found by counting words before it in dictionary order.
Q: Which is alphabetical arrangement of words?
A: Dictionary order is alphabetical arrangement of words.
Q: What do you know about Dictionary order?
A: Dictionary order is alphabetical arrangement of words.
Q: Which places some objects in gaps between others?
A: Gap method places some objects in gaps between others.
Q: What do you know about Gap method?
A: Gap method places some objects in gaps between others.
Q: Which taken all at a time are n!?
A: Permutations of n objects taken all at a time are n!.
Q: What do you know about Permutations of n objects?
A: Permutations of n objects taken all at a time are n!.
Q: Which is the same as leaving out n - r objects?
A: Selecting r objects is the same as leaving out n - r objects.
Q: What do you know about Selecting r objects?
A: Selecting r objects is the same as leaving out n - r objects.
Q: Which is 336?
A: Value of 8P3 is 336.
Q: What do you know about Value of 8P3?
A: Value of 8P3 is 336.
Q: Which is 120?
A: Value of 10C3 is 120.
Q: What do you know about Value of 10C3?
A: Value of 10C3 is 120.
Q: Which have symmetric digits?
A: Palindromic numbers have symmetric digits.
Q: What do you know about Palindromic numbers?
A: Palindromic numbers have symmetric digits.
Q: Which treats vowels as one block?
A: Placing vowels together treats vowels as one block.
Q: What do you know about Placing vowels together?
A: Placing vowels together treats vowels as one block.
Q: Which are arranged by fixing one group first?
A: Boys and girls alternately are arranged by fixing one group first.
Q: What do you know about Boys and girls alternately?
A: Boys and girls alternately are arranged by fixing one group first.
Q: Which conditions are handled by adding cases?
A: At most conditions are handled by adding cases.
Q: What do you know about At most?
A: At most conditions are handled by adding cases.
Q: Which conditions are handled by complement counting?
A: At least conditions are handled by complement counting.
Q: What do you know about At least?
A: At least conditions are handled by complement counting.
Q: Which divides by the factorial of the number of groups?
A: Partition into equal groups divides by the factorial of the number of groups.
Q: What do you know about Partition into equal groups?
A: Partition into equal groups divides by the factorial of the number of groups.
Q: What is 5!?
A: 120.
Q: What is 7P2?
A: 42.
Q: What is 7C2?
A: 21.
Q: How many arrangements of 4 distinct books?
A: 24.
Q: How many ways can 5 people sit around a round table?
A: 4! = 24.
Q: How many 3-digit numbers can be formed from digits 1 to 5 without repetition?
A: 60.
Q: How many words from the letters of BOOK?
A: 4!/2! = 12.
Q: How many diagonals does a hexagon have?
A: 9.
Q: How many handshakes among 6 people?
A: 15.
Q: If nC2 = 10, what is n?
A: 5.
Q: In how many ways can 3 be chosen from 8?
A: 56.
Q: What is the value of 0!?
A: 1.
@quiz
? Which multiplies ways of successive events?
+ Multiplication principle
- Boys and girls alternately
- Digit zero
- Rank of a word
! Multiplication principle multiplies ways of successive events.
? Which statement is true of Multiplication principle?
- Divides by the factorial of the number of groups
+ Multiplies ways of successive events
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- Is alphabetical arrangement of words
! Multiplication principle multiplies ways of successive events.
? Which adds ways of exclusive alternatives?
- Pascal identity
- Committee selection
+ Addition principle
- Never together
! Addition principle adds ways of exclusive alternatives.
? Which statement is true of Addition principle?
+ Adds ways of exclusive alternatives
- Places some objects in gaps between others
- Into groups uses factorials of group sizes
- Is 10
! Addition principle adds ways of exclusive alternatives.
? Which n! is the product of natural numbers up to n?
- Triangles
- Diagonals
+ Factorial
- Permutations of n objects
! Factorial n! is the product of natural numbers up to n.
? Which statement is true of Factorial?
- Is 20
- Is an arrangement in which order matters
+ N! is the product of natural numbers up to n
- Is 720
! Factorial n! is the product of natural numbers up to n.
? Which is defined as 1?
+ Zero factorial
- Alike objects
- Block method
- nC0
! Zero factorial is defined as 1.
? Which statement is true of Zero factorial?
- Equals 1
+ Is defined as 1
- Is n!/(n - r)!
- Is 336
! Zero factorial is defined as 1.
? Which is an arrangement in which order matters?
+ Permutation
- Placing vowels together
- Garland
- Link of nPr and nCr
! Permutation is an arrangement in which order matters.
? Which statement is true of Permutation?
- Equals 1
- Have an even digit in the unit place
+ Is an arrangement in which order matters
- Has 5 letters with I repeated twice
! Permutation is an arrangement in which order matters.
? Which is a selection in which order does not matter?
- Symmetry of combinations
+ Combination
- Digits without repetition
- Boys and girls alternately
! Combination is a selection in which order does not matter.
? Which statement is true of Combination?
+ Is a selection in which order does not matter
- Is found by counting words before it in dictionary order
- Have an even digit in the unit place
- Is alphabetical arrangement of words
! Combination is a selection in which order does not matter.
? Which is n!/(n - r)!?
+ nPr formula
- Even numbers
- At least
- Dictionary order
! NPr formula is n!/(n - r)!.
? Which statement is true of nPr formula?
- Cannot be the first digit of a number
+ Is n!/(n - r)!
- Is 10
- NCr + nC(r-1) = (n+1)Cr
! NPr formula is n!/(n - r)!.
? Which is n!/(r!(n - r)!)?
+ nCr formula
- nP1
- Digits without repetition
- Together arrangements
! NCr formula is n!/(r!(n - r)!).
? Which statement is true of nCr formula?
- Is used for at least one conditions
+ Is n!/(r!(n - r)!)
- Is 720
- Is total minus together
! NCr formula is n!/(r!(n - r)!).
? Which is nPr = r! times nCr?
+ Link of nPr and nCr
- Value of 10C3
- Diagonals
- Together arrangements
! Link of nPr and nCr is nPr = r! times nCr.
? Which statement is true of Link of nPr and nCr?
+ Is nPr = r! times nCr
- Are arranged by fixing one group first
- Among n people number nC2
- Has 5 letters with I repeated twice
! Link of nPr and nCr is nPr = r! times nCr.
? Which equals n!?
- Combination
- Multiplication principle
- Complement counting
+ nPn
! NPn equals n!.
? Which statement is true of nPn?
+ Equals n!
- Is 720
- Are arranged by fixing one group first
- N! is the product of natural numbers up to n
! NPn equals n!.
? Which equals n?
- Selecting r objects
+ nP1
- nCn
- Factorial
! NP1 equals n.
? Which statement is true of nP1?
- Is the same as leaving out n - r objects
- NCr + nC(r-1) = (n+1)Cr
- Is found by counting words before it in dictionary order
+ Equals n
! NP1 equals n.
? Which equals 1?
- Garland
- Value of 10C3
+ nCn
- nC1
! NCn equals 1.
? Which statement is true of nCn?
+ Equals 1
- Multiplies ways of successive events
- Multiply block count by internal arrangements
- Of r places from n objects are n^r
! NCn equals 1.
? Which statement is true of nC0?
+ Equals 1
- Is defined as 1
- Into groups uses factorials of group sizes
- NCr = nC(n - r)
! NC0 equals 1.
? Which statement is true of nC1?
- Taken all at a time are n!
- Is n!/(n - r)!
+ Equals n
- Is 24
! NC1 equals n.
? Which nCr = nC(n - r)?
- Never together
- Digit zero
- nPr formula
+ Symmetry of combinations
! Symmetry of combinations nCr = nC(n - r).
? Which statement is true of Symmetry of combinations?
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- Treats vowels as one block
+ NCr = nC(n - r)
- Equals 1
! Symmetry of combinations nCr = nC(n - r).
? Which nCr + nC(r-1) = (n+1)Cr?
- Even numbers
- Complement counting
+ Pascal identity
- Value of 6!
! Pascal identity nCr + nC(r-1) = (n+1)Cr.
? Which statement is true of Pascal identity?
+ NCr + nC(r-1) = (n+1)Cr
- Is found by counting words before it in dictionary order
- Is n!/(r!(n - r)!)
- Equals n!
! Pascal identity nCr + nC(r-1) = (n+1)Cr.
? Which of r places from n objects are n^r?
- Triangles
- Word INDIA
- Alike objects
+ Arrangements with repetition
! Arrangements with repetition of r places from n objects are n^r.
? Which statement is true of Arrangements with repetition?
- Uses products of combinations
- Is n!/(n - r)!
- Treats vowels as one block
+ Of r places from n objects are n^r
! Arrangements with repetition of r places from n objects are n^r.
? Which arrangements are n!/(p! q! r!)?
- Factorial
- At most
- Boys and girls alternately
+ Alike objects
! Alike objects arrangements are n!/(p! q! r!).
? Which statement is true of Alike objects?
- Through n points with no three collinear number nC2
- Equals n
+ Arrangements are n!/(p! q! r!)
- Is an arrangement in which order matters
! Alike objects arrangements are n!/(p! q! r!).
? Which of n distinct objects is (n - 1)!?
- Symmetry of combinations
+ Circular permutation
- Even numbers
- Value of 4!
! Circular permutation of n distinct objects is (n - 1)!.
? Which statement is true of Circular permutation?
- Arrangements of n beads are (n - 1)!/2
- Of r places from n objects are n^r
+ Of n distinct objects is (n - 1)!
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
! Circular permutation of n distinct objects is (n - 1)!.
? Which arrangements of n beads are (n - 1)!/2?
- Placing vowels together
- Digit zero
+ Garland
- Even numbers
! Garland arrangements of n beads are (n - 1)!/2.
? Which statement is true of Garland?
- Multiplies ways of successive events
+ Arrangements of n beads are (n - 1)!/2
- Cannot be the first digit of a number
- Equals n
! Garland arrangements of n beads are (n - 1)!/2.
? Which treats items together as one object?
- Never together
+ Block method
- Addition principle
- Total selections
! Block method treats items together as one object.
? Which statement is true of Block method?
+ Treats items together as one object
- Equals 1
- Among n people number nC2
- Is n!/(n - r)!
! Block method treats items together as one object.
? Which multiply block count by internal arrangements?
- Committee selection
- Permutation
- Word INDIA
+ Together arrangements
! Together arrangements multiply block count by internal arrangements.
? Which statement is true of Together arrangements?
+ Multiply block count by internal arrangements
- Is a selection in which order does not matter
- Adds ways of exclusive alternatives
- Has 5 letters with I repeated twice
! Together arrangements multiply block count by internal arrangements.
? Which is total minus together?
+ Never together
- nCn
- Permutations of n objects
- nCr formula
! Never together is total minus together.
? Which statement is true of Never together?
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- Is n!/(r!(n - r)!)
+ Is total minus together
- Multiply block count by internal arrangements
! Never together is total minus together.
? Which is used for at least one conditions?
- Boys and girls alternately
- Link of nPr and nCr
- Digit zero
+ Complement counting
! Complement counting is used for at least one conditions.
? Which statement is true of Complement counting?
- Are arranged by fixing one group first
- Is 24
- Uses products of combinations
+ Is used for at least one conditions
! Complement counting is used for at least one conditions.
? Which from n distinct objects is 2^n - 1?
+ Total selections
- Value of 6!
- Digits without repetition
- Handshakes
! Total selections from n distinct objects is 2^n - 1.
? Which statement is true of Total selections?
- Is found by counting words before it in dictionary order
- Have an even digit in the unit place
+ From n distinct objects is 2^n - 1
- Equals n
! Total selections from n distinct objects is 2^n - 1.
? Which of an n-sided polygon number nC2 - n?
- Value of 8P3
+ Diagonals
- Link of nPr and nCr
- nCn
! Diagonals of an n-sided polygon number nC2 - n.
? Which statement is true of Diagonals?
- N! is the product of natural numbers up to n
- Multiplies ways of successive events
+ Of an n-sided polygon number nC2 - n
- Equals 1
! Diagonals of an n-sided polygon number nC2 - n.
? Which from n points with p collinear are nC3 - pC3?
- Block method
+ Triangles
- nP1
- Word INDIA
! Triangles from n points with p collinear are nC3 - pC3.
? Which statement is true of Triangles?
- Uses products of combinations
+ From n points with p collinear are nC3 - pC3
- Is 120
- Have symmetric digits
! Triangles from n points with p collinear are nC3 - pC3.
? Which among n people number nC2?
- Partition into equal groups
- Link of nPr and nCr
- Triangles
+ Handshakes
! Handshakes among n people number nC2.
? Which statement is true of Handshakes?
- Is n!/(r!(n - r)!)
- Arrangements of n beads are (n - 1)!/2
- Through n points with no three collinear number nC2
+ Among n people number nC2
! Handshakes among n people number nC2.
? Which through n points with no three collinear number nC2?
- Handshakes
- Together arrangements
+ Lines
- Arrangements with repetition
! Lines through n points with no three collinear number nC2.
? Which statement is true of Lines?
- Equals 1
+ Through n points with no three collinear number nC2
- Into groups uses factorials of group sizes
- Of n distinct objects is (n - 1)!
! Lines through n points with no three collinear number nC2.
? Which uses products of combinations?
- Link of nPr and nCr
+ Committee selection
- nCn
- Arrangements with repetition
! Committee selection uses products of combinations.
? Which statement is true of Committee selection?
- Is nPr = r! times nCr
+ Uses products of combinations
- Treats items together as one object
- Is a selection in which order does not matter
! Committee selection uses products of combinations.
? Which arranged in 11!/(2! 2! 2!) ways?
+ Letters of MATHEMATICS
- Pascal identity
- Permutation
- Value of 4!
! Letters of MATHEMATICS arranged in 11!/(2! 2! 2!) ways.
? Which statement is true of Letters of MATHEMATICS?
- Is 24
- Is nPr = r! times nCr
- Conditions are handled by complement counting
+ Arranged in 11!/(2! 2! 2!) ways
! Letters of MATHEMATICS arranged in 11!/(2! 2! 2!) ways.
? Which has 5 letters with I repeated twice?
+ Word INDIA
- Rank of a word
- Digit zero
- Multiplication principle
! Word INDIA has 5 letters with I repeated twice.
? Which statement is true of Word INDIA?
- Is defined as 1
- Have symmetric digits
+ Has 5 letters with I repeated twice
- Is nPr = r! times nCr
! Word INDIA has 5 letters with I repeated twice.
? Which is 20?
- nPr formula
+ Value of 5P2
- Diagonals
- At least
! Value of 5P2 is 20.
? Which statement is true of Value of 5P2?
- Treats vowels as one block
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
+ Is 20
- Multiplies ways of successive events
! Value of 5P2 is 20.
? Which is 10?
- Circular permutation
+ Value of 5C2
- Value of 10C3
- Addition principle
! Value of 5C2 is 10.
? Which statement is true of Value of 5C2?
+ Is 10
- Is the same as leaving out n - r objects
- Have an even digit in the unit place
- From n distinct objects is 2^n - 1
! Value of 5C2 is 10.
? Which is 24?
- nP1
- Link of nPr and nCr
- Garland
+ Value of 4!
! Value of 4! is 24.
? Which statement is true of Value of 4!?
+ Is 24
- Of an n-sided polygon number nC2 - n
- Conditions are handled by adding cases
- Uses products of combinations
! Value of 4! is 24.
? Which is 720?
- Multiplication principle
- nPn
- Alike objects
+ Value of 6!
! Value of 6! is 720.
? Which statement is true of Value of 6!?
- Is a selection in which order does not matter
+ Is 720
- Equals n!
- Into groups uses factorials of group sizes
! Value of 6! is 720.
? Which in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9?
- Factorial
+ Digits without repetition
- Symmetry of combinations
- Rank of a word
! Digits without repetition in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9.
? Which statement is true of Digits without repetition?
+ In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- Arranged in 11!/(2! 2! 2!) ways
- Places some objects in gaps between others
- Is an arrangement in which order matters
! Digits without repetition in 3-digit numbers use 9 x 9 x 8 for digits 0 to 9.
? Which have an even digit in the unit place?
- nP1
+ Even numbers
- Boys and girls alternately
- Gap method
! Even numbers have an even digit in the unit place.
? Which statement is true of Even numbers?
- NCr + nC(r-1) = (n+1)Cr
- Is an arrangement in which order matters
- Is 720
+ Have an even digit in the unit place
! Even numbers have an even digit in the unit place.
? Which cannot be the first digit of a number?
- Together arrangements
+ Digit zero
- nC0
- At most
! Digit zero cannot be the first digit of a number.
? Which statement is true of Digit zero?
- NCr + nC(r-1) = (n+1)Cr
+ Cannot be the first digit of a number
- Is 720
- Is 336
! Digit zero cannot be the first digit of a number.
? Which into groups uses factorials of group sizes?
+ Distribution of objects
- nC1
- Rank of a word
- nPr formula
! Distribution of objects into groups uses factorials of group sizes.
? Which statement is true of Distribution of objects?
- Is 20
- Is nPr = r! times nCr
- Arranged in 11!/(2! 2! 2!) ways
+ Into groups uses factorials of group sizes
! Distribution of objects into groups uses factorials of group sizes.
? Which is found by counting words before it in dictionary order?
+ Rank of a word
- Alike objects
- Together arrangements
- Never together
! Rank of a word is found by counting words before it in dictionary order.
? Which statement is true of Rank of a word?
+ Is found by counting words before it in dictionary order
- N! is the product of natural numbers up to n
- Is 10
- Multiplies ways of successive events
! Rank of a word is found by counting words before it in dictionary order.
? Which is alphabetical arrangement of words?
- Partition into equal groups
- Letters of MATHEMATICS
- Pascal identity
+ Dictionary order
! Dictionary order is alphabetical arrangement of words.
? Which statement is true of Dictionary order?
- Uses products of combinations
- Through n points with no three collinear number nC2
- Is 10
+ Is alphabetical arrangement of words
! Dictionary order is alphabetical arrangement of words.
? Which places some objects in gaps between others?
- Palindromic numbers
- Never together
- Letters of MATHEMATICS
+ Gap method
! Gap method places some objects in gaps between others.
? Which statement is true of Gap method?
- Has 5 letters with I repeated twice
- Is n!/(r!(n - r)!)
- Cannot be the first digit of a number
+ Places some objects in gaps between others
! Gap method places some objects in gaps between others.
? Which taken all at a time are n!?
+ Permutations of n objects
- Palindromic numbers
- At most
- nC1
! Permutations of n objects taken all at a time are n!.
? Which statement is true of Permutations of n objects?
+ Taken all at a time are n!
- Multiply block count by internal arrangements
- Is n!/(r!(n - r)!)
- Is alphabetical arrangement of words
! Permutations of n objects taken all at a time are n!.
? Which is the same as leaving out n - r objects?
+ Selecting r objects
- At least
- nP1
- nCn
! Selecting r objects is the same as leaving out n - r objects.
? Which statement is true of Selecting r objects?
- Divides by the factorial of the number of groups
- Are arranged by fixing one group first
+ Is the same as leaving out n - r objects
- Conditions are handled by adding cases
! Selecting r objects is the same as leaving out n - r objects.
? Which is 336?
- Total selections
- At least
+ Value of 8P3
- nCn
! Value of 8P3 is 336.
? Which statement is true of Value of 8P3?
- Is 720
- Have symmetric digits
- Is defined as 1
+ Is 336
! Value of 8P3 is 336.
? Which is 120?
- Permutations of n objects
- nPn
+ Value of 10C3
- Permutation
! Value of 10C3 is 120.
? Which statement is true of Value of 10C3?
- Equals 1
+ Is 120
- Taken all at a time are n!
- Multiplies ways of successive events
! Value of 10C3 is 120.
? Which have symmetric digits?
- Arrangements with repetition
- Letters of MATHEMATICS
+ Palindromic numbers
- Permutation
! Palindromic numbers have symmetric digits.
? Which statement is true of Palindromic numbers?
+ Have symmetric digits
- Conditions are handled by adding cases
- Treats vowels as one block
- Multiply block count by internal arrangements
! Palindromic numbers have symmetric digits.
? Which treats vowels as one block?
+ Placing vowels together
- Palindromic numbers
- Digit zero
- Dictionary order
! Placing vowels together treats vowels as one block.
? Which statement is true of Placing vowels together?
- NCr = nC(n - r)
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- NCr + nC(r-1) = (n+1)Cr
+ Treats vowels as one block
! Placing vowels together treats vowels as one block.
? Which are arranged by fixing one group first?
+ Boys and girls alternately
- Palindromic numbers
- nC0
- Diagonals
! Boys and girls alternately are arranged by fixing one group first.
? Which statement is true of Boys and girls alternately?
- Through n points with no three collinear number nC2
+ Are arranged by fixing one group first
- Is an arrangement in which order matters
- Multiply block count by internal arrangements
! Boys and girls alternately are arranged by fixing one group first.
? Which conditions are handled by adding cases?
+ At most
- Pascal identity
- Committee selection
- nCn
! At most conditions are handled by adding cases.
? Which statement is true of At most?
- NCr + nC(r-1) = (n+1)Cr
- NCr = nC(n - r)
+ Conditions are handled by adding cases
- Among n people number nC2
! At most conditions are handled by adding cases.
? Which conditions are handled by complement counting?
- nPn
- Diagonals
- Committee selection
+ At least
! At least conditions are handled by complement counting.
? Which statement is true of At least?
- Is the same as leaving out n - r objects
- Among n people number nC2
- Has 5 letters with I repeated twice
+ Conditions are handled by complement counting
! At least conditions are handled by complement counting.
? Which divides by the factorial of the number of groups?
+ Partition into equal groups
- Digits without repetition
- At most
- Pascal identity
! Partition into equal groups divides by the factorial of the number of groups.
? Which statement is true of Partition into equal groups?
+ Divides by the factorial of the number of groups
- Is 720
- In 3-digit numbers use 9 x 9 x 8 for digits 0 to 9
- Treats vowels as one block
! Partition into equal groups divides by the factorial of the number of groups.
? nPr
- n!/r!
- n!/(r!(n-r)!)
- n^r
+ n!/(n-r)!
! Order.
? Circular n objects
+ (n-1)!
- n!
- 2n
- n-1
! Fix one.
? 5C2
- 20
- 5
+ 10
- 25
! Selection.
? Handshakes n people
- nP2
+ nC2
- n^2
- 2n
! Pairs.
? Words from LEVEL (E twice, L twice)
- 120
+ 30
- 60
- 24
! 5!/(2!2!).
? nCr = nC(n-r) is
+ Symmetry
- Pascal
- Factorial
- Circular
! Property.
? Total selections of n objects
- 2^n
- n!
- n^2
+ 2^n - 1
! At least one.
? 4! =
+ 24
- 12
- 16
- 10
! Product.
@visual
flow | Counting | Order matters?; Permutation or combination; Check repetition; Compute
compare | Permutation and combination | Permutation=Order~nPr; Combination=No order~nCr
blocks | Techniques | Block method; Complement; Cases; Circular
mind | Counting | Principle; Permutations; Combinations; Applications
steps | Never together | Total; Together; Subtract; Answer
@problems
## Moderate
P: Find 6P2 and 6C2.
A: 6P2 = 30 and 6C2 = 15.
R: 3 | Permutation
R: 3 | Combination
## High
P: In how many ways can the letters of the word APPLE be arranged?
A: 5!/2! = 60.
R: 2 | Total
R: 2 | Repeat
R: 2 | Divide
R: 2 | Answer
## Advanced
P: A committee of 4 is chosen from 5 men and 3 women with at least 1 woman. Find the number.
A: Total 8C4 = 70 minus all men 5C4 = 5, so 65.
R: 2 | Total
R: 2 | Complement
R: 2 | Subtract
R: 2 | Answer

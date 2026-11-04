# Matrices
minutes: 45
yt: class 12 maths matrices types operations transpose symmetric skew symmetric multiplication
@study
A matrix is a rectangular array of numbers arranged in rows and columns. A matrix with m rows and n columns has order m x n and has mn elements. Types include row matrix (1 x n), column matrix (m x 1), square matrix (m = n), diagonal matrix (non-diagonal elements zero), scalar matrix (equal diagonal elements), identity matrix I (diagonal elements one), zero matrix and triangular matrices. Two matrices are equal if they have the same order and equal corresponding elements. Addition and subtraction are defined for matrices of the same order and are done element by element. Addition is commutative and associative, the zero matrix is the additive identity, and every matrix A has an additive inverse -A. Scalar multiplication multiplies every element by the scalar k. The product AB of A (m x n) and B (n x p) is defined only if the number of columns of A equals the number of rows of B, and the product has order m x p, with element (i, j) found by multiplying row i of A with column j of B. Matrix multiplication is associative, distributive over addition, but not commutative in general; AB = 0 does not imply A = 0 or B = 0. The identity satisfies AI = IA = A. The transpose A′ of A interchanges rows and columns; (A′)′ = A, (A + B)′ = A′ + B′, (kA)′ = kA′ and (AB)′ = B′A′. A square matrix is symmetric if A′ = A and skew-symmetric if A′ = -A. In a skew-symmetric matrix all diagonal elements are zero. Every square matrix can be written as the sum of a symmetric matrix P = (A + A′)/2 and a skew-symmetric matrix Q = (A - A′)/2. An invertible matrix A has a matrix B with AB = BA = I, and the inverse is unique; (AB) inverse = B inverse A inverse. Elementary row and column operations are interchange of rows, multiplication of a row by a nonzero constant, and adding a multiple of a row to another, and they are used to find the inverse. Matrices have uses in solving linear equations and in computer graphics.
## Deep dive: Operations
Addition needs equal order, multiplication needs columns of the first equal to rows of the second, and multiplication is not commutative.
## Deep dive: Transpose and symmetry
(AB)′ = B′A′; every square matrix splits into symmetric and skew-symmetric parts.
## Deep dive: Inverse
The inverse is unique and reverses the order in a product; elementary operations can find it.
## Hindi saransh
Aavyuh: prakar, jodna, gunan, transpose, symmetric aur skew-symmetric aavyuh aur vyutkram.
> Remember: (AB)′ = B′A′ and (AB) inverse = B inverse A inverse.
@formulas
## Key results
Order | m x n
Product order | m x p
Transpose of product | B′ A′
Symmetric part | (A + A′)/2
Skew part | (A - A′)/2

@qa
Q: Which is a rectangular array of numbers?
A: Matrix is a rectangular array of numbers.
Q: What do you know about Matrix?
A: Matrix is a rectangular array of numbers.
Q: Which is rows by columns of a matrix?
A: Order is rows by columns of a matrix.
Q: What do you know about Order?
A: Order is rows by columns of a matrix.
Q: Which equals rows times columns?
A: Element count equals rows times columns.
Q: What do you know about Element count?
A: Element count equals rows times columns.
Q: Which has only one row?
A: Row matrix has only one row.
Q: What do you know about Row matrix?
A: Row matrix has only one row.
Q: Which has only one column?
A: Column matrix has only one column.
Q: What do you know about Column matrix?
A: Column matrix has only one column.
Q: Which has equal rows and columns?
A: Square matrix has equal rows and columns.
Q: What do you know about Square matrix?
A: Square matrix has equal rows and columns.
Q: Which has zero non diagonal elements?
A: Diagonal matrix has zero non diagonal elements.
Q: What do you know about Diagonal matrix?
A: Diagonal matrix has zero non diagonal elements.
Q: Which has equal diagonal elements and zero elsewhere?
A: Scalar matrix has equal diagonal elements and zero elsewhere.
Q: What do you know about Scalar matrix?
A: Scalar matrix has equal diagonal elements and zero elsewhere.
Q: Which has ones on the diagonal and zeros elsewhere?
A: Identity matrix has ones on the diagonal and zeros elsewhere.
Q: What do you know about Identity matrix?
A: Identity matrix has ones on the diagonal and zeros elsewhere.
Q: Which has all elements zero?
A: Zero matrix has all elements zero.
Q: What do you know about Zero matrix?
A: Zero matrix has all elements zero.
Q: Which have the same order and equal corresponding elements?
A: Equal matrices have the same order and equal corresponding elements.
Q: What do you know about Equal matrices?
A: Equal matrices have the same order and equal corresponding elements.
Q: Which needs the same order?
A: Matrix addition needs the same order.
Q: What do you know about Matrix addition?
A: Matrix addition needs the same order.
Q: Which means A plus B equals B plus A?
A: Addition commutative means A plus B equals B plus A.
Q: What do you know about Addition commutative?
A: Addition commutative means A plus B equals B plus A.
Q: Which holds for matrices?
A: Addition associative holds for matrices.
Q: What do you know about Addition associative?
A: Addition associative holds for matrices.
Q: Which is the zero matrix?
A: Additive identity is the zero matrix.
Q: What do you know about Additive identity?
A: Additive identity is the zero matrix.
Q: Which of A is minus A?
A: Additive inverse of A is minus A.
Q: What do you know about Additive inverse?
A: Additive inverse of A is minus A.
Q: Which multiplies each element by k?
A: Scalar multiple multiplies each element by k.
Q: What do you know about Scalar multiple?
A: Scalar multiple multiplies each element by k.
Q: Which k times A plus B equals kA plus kB?
A: Distributive scalar k times A plus B equals kA plus kB.
Q: What do you know about Distributive scalar?
A: Distributive scalar k times A plus B equals kA plus kB.
Q: Which is addition of the additive inverse?
A: Subtraction is addition of the additive inverse.
Q: What do you know about Subtraction?
A: Subtraction is addition of the additive inverse.
Q: Which in addition and scalar multiplication?
A: Order preserved in addition and scalar multiplication.
Q: What do you know about Order preserved?
A: Order preserved in addition and scalar multiplication.
Q: Which when columns of first equal rows of second?
A: Product defined when columns of first equal rows of second.
Q: What do you know about Product defined?
A: Product defined when columns of first equal rows of second.
Q: Which is rows of first by columns of second?
A: Product order is rows of first by columns of second.
Q: What do you know about Product order?
A: Product order is rows of first by columns of second.
Q: Which is row times column sum of products?
A: Element of product is row times column sum of products.
Q: What do you know about Element of product?
A: Element of product is row times column sum of products.
Q: Which matrix multiplication does not commute generally?
A: Non commutative matrix multiplication does not commute generally.
Q: What do you know about Non commutative?
A: Non commutative matrix multiplication does not commute generally.
Q: Which A times BC equals AB times C?
A: Associative product A times BC equals AB times C.
Q: What do you know about Associative product?
A: Associative product A times BC equals AB times C.
Q: Which A times B plus C equals AB plus AC?
A: Distributive product A times B plus C equals AB plus AC.
Q: What do you know about Distributive product?
A: Distributive product A times B plus C equals AB plus AC.
Q: Which AI equals IA equals A?
A: Identity property AI equals IA equals A.
Q: What do you know about Identity property?
A: Identity property AI equals IA equals A.
Q: Which AB zero does not mean A or B zero?
A: Zero divisors AB zero does not mean A or B zero.
Q: What do you know about Zero divisors?
A: Zero divisors AB zero does not mean A or B zero.
Q: Which A squared means A times A?
A: Power of matrix A squared means A times A.
Q: What do you know about Power of matrix?
A: Power of matrix A squared means A times A.
Q: Which satisfies A squared equals A?
A: Idempotent matrix satisfies A squared equals A.
Q: What do you know about Idempotent matrix?
A: Idempotent matrix satisfies A squared equals A.
Q: Which interchanges rows and columns?
A: Transpose interchanges rows and columns.
Q: What do you know about Transpose?
A: Transpose interchanges rows and columns.
Q: Which gives the original matrix?
A: Transpose of transpose gives the original matrix.
Q: What do you know about Transpose of transpose?
A: Transpose of transpose gives the original matrix.
Q: Which is sum of transposes?
A: Transpose of sum is sum of transposes.
Q: What do you know about Transpose of sum?
A: Transpose of sum is sum of transposes.
Q: Which reverses the order of factors?
A: Transpose of product reverses the order of factors.
Q: What do you know about Transpose of product?
A: Transpose of product reverses the order of factors.
Q: Which is scalar times transpose?
A: Transpose of scalar multiple is scalar times transpose.
Q: What do you know about Transpose of scalar multiple?
A: Transpose of scalar multiple is scalar times transpose.
Q: Which satisfies A transpose equals A?
A: Symmetric matrix satisfies A transpose equals A.
Q: What do you know about Symmetric matrix?
A: Symmetric matrix satisfies A transpose equals A.
Q: Which satisfies A transpose equals minus A?
A: Skew symmetric matrix satisfies A transpose equals minus A.
Q: What do you know about Skew symmetric matrix?
A: Skew symmetric matrix satisfies A transpose equals minus A.
Q: Which elements are zero in a skew symmetric matrix?
A: Skew diagonal elements are zero in a skew symmetric matrix.
Q: What do you know about Skew diagonal?
A: Skew diagonal elements are zero in a skew symmetric matrix.
Q: Which is A plus A transpose over two?
A: Symmetric part is A plus A transpose over two.
Q: What do you know about Symmetric part?
A: Symmetric part is A plus A transpose over two.
Q: Which is A minus A transpose over two?
A: Skew part is A minus A transpose over two.
Q: What do you know about Skew part?
A: Skew part is A minus A transpose over two.
Q: Which has an inverse with AB equal BA equal I?
A: Invertible matrix has an inverse with AB equal BA equal I.
Q: What do you know about Invertible matrix?
A: Invertible matrix has an inverse with AB equal BA equal I.
Q: Which the inverse of a matrix is unique?
A: Inverse uniqueness the inverse of a matrix is unique.
Q: What do you know about Inverse uniqueness?
A: Inverse uniqueness the inverse of a matrix is unique.
Q: Which reverses the order of the inverses?
A: Inverse of product reverses the order of the inverses.
Q: What do you know about Inverse of product?
A: Inverse of product reverses the order of the inverses.
Q: Which is transpose of inverse?
A: Inverse of transpose is transpose of inverse.
Q: What do you know about Inverse of transpose?
A: Inverse of transpose is transpose of inverse.
Q: Which includes row interchange?
A: Elementary operation includes row interchange.
Q: What do you know about Elementary operation?
A: Elementary operation includes row interchange.
Q: Which multiplies a row by a nonzero constant?
A: Row scaling multiplies a row by a nonzero constant.
Q: What do you know about Row scaling?
A: Row scaling multiplies a row by a nonzero constant.
Q: Which adds a multiple of one row to another?
A: Row addition adds a multiple of one row to another.
Q: What do you know about Row addition?
A: Row addition adds a multiple of one row to another.
Q: Which reduces A to I with the same operations on I?
A: Inverse by operations reduces A to I with the same operations on I.
Q: What do you know about Inverse by operations?
A: Inverse by operations reduces A to I with the same operations on I.
Q: Which matrix has no inverse?
A: Non invertible matrix has no inverse.
Q: What do you know about Non invertible?
A: Non invertible matrix has no inverse.
Q: Which has determinant zero?
A: Singular matrix has determinant zero.
Q: What do you know about Singular matrix?
A: Singular matrix has determinant zero.
Q: Which can be written as AX equals B?
A: Linear equations can be written as AX equals B.
Q: What do you know about Linear equations?
A: Linear equations can be written as AX equals B.
Q: Which uses matrices for transformations?
A: Computer graphics uses matrices for transformations.
Q: What do you know about Computer graphics?
A: Computer graphics uses matrices for transformations.
Q: Which uses matrices for tables?
A: Data storage uses matrices for tables.
Q: What do you know about Data storage?
A: Data storage uses matrices for tables.
Q: Which uses matrices for connections?
A: Network analysis uses matrices for connections.
Q: What do you know about Network analysis?
A: Network analysis uses matrices for connections.
Q: Which uses matrices for encoding?
A: Cryptography uses matrices for encoding.
Q: What do you know about Cryptography?
A: Cryptography uses matrices for encoding.
Q: Which uses matrices for input output models?
A: Economics uses matrices for input output models.
Q: What do you know about Economics?
A: Economics uses matrices for input output models.
Q: Which is represented by a matrix?
A: Rotation is represented by a matrix.
Q: What do you know about Rotation?
A: Rotation is represented by a matrix.
Q: What do you know about Scaling?
A: Scaling is represented by a matrix.
Q: Which avoids invalid operations?
A: Order check avoids invalid operations.
Q: What do you know about Order check?
A: Order check avoids invalid operations.
Q: Which confirms matrix identities?
A: Verification confirms matrix identities.
Q: What do you know about Verification?
A: Verification confirms matrix identities.
Q: What is the order of a matrix?
A: The number of rows by the number of columns.
Q: Is matrix multiplication commutative?
A: No, AB is not equal to BA in general.
Q: What is (AB)′?
A: B′A′.
Q: What is true of diagonal elements of a skew-symmetric matrix?
A: They are all zero.
Q: How do you split a square matrix into symmetric and skew parts?
A: A = (A + A′)/2 + (A - A′)/2.
Q: What is (AB) inverse?
A: B inverse A inverse.
Q: Can AB = 0 with A and B nonzero?
A: Yes, matrices can have zero divisors.
Q: What are the elementary operations?
A: Interchange, scaling a row by a nonzero constant and adding a multiple of one row to another.
@quiz
? Which is a rectangular array of numbers?
- Square matrix
- Order
- Element count
+ Matrix
! Matrix is a rectangular array of numbers.
? Which statement is true of Matrix?
- Has zero non diagonal elements
+ Is a rectangular array of numbers
- Has equal rows and columns
- Has equal diagonal elements and zero elsewhere
! Matrix is a rectangular array of numbers.
? Which is rows by columns of a matrix?
- Column matrix
- Zero matrix
- Square matrix
+ Order
! Order is rows by columns of a matrix.
? Which statement is true of Order?
- Has only one column
+ Is rows by columns of a matrix
- Has all elements zero
- Has ones on the diagonal and zeros elsewhere
! Order is rows by columns of a matrix.
? Which equals rows times columns?
- Column matrix
- Row matrix
- Scalar matrix
+ Element count
! Element count equals rows times columns.
? Which statement is true of Element count?
+ Equals rows times columns
- Has zero non diagonal elements
- Has equal diagonal elements and zero elsewhere
- Is a rectangular array of numbers
! Element count equals rows times columns.
? Which has only one row?
- Scalar matrix
+ Row matrix
- Matrix
- Column matrix
! Row matrix has only one row.
? Which statement is true of Row matrix?
+ Has only one row
- Has equal diagonal elements and zero elsewhere
- Has ones on the diagonal and zeros elsewhere
- Has only one column
! Row matrix has only one row.
? Which has only one column?
+ Column matrix
- Scalar matrix
- Matrix
- Zero matrix
! Column matrix has only one column.
? Which statement is true of Column matrix?
- Equals rows times columns
- Has all elements zero
+ Has only one column
- Has equal diagonal elements and zero elsewhere
! Column matrix has only one column.
? Which has equal rows and columns?
- Zero matrix
- Element count
- Order
+ Square matrix
! Square matrix has equal rows and columns.
? Which statement is true of Square matrix?
- Is rows by columns of a matrix
- Has all elements zero
+ Has equal rows and columns
- Equals rows times columns
! Square matrix has equal rows and columns.
? Which has zero non diagonal elements?
- Square matrix
- Element count
- Matrix
+ Diagonal matrix
! Diagonal matrix has zero non diagonal elements.
? Which statement is true of Diagonal matrix?
- Has ones on the diagonal and zeros elsewhere
- Has equal diagonal elements and zero elsewhere
+ Has zero non diagonal elements
- Equals rows times columns
! Diagonal matrix has zero non diagonal elements.
? Which has equal diagonal elements and zero elsewhere?
- Square matrix
- Diagonal matrix
- Row matrix
+ Scalar matrix
! Scalar matrix has equal diagonal elements and zero elsewhere.
? Which statement is true of Scalar matrix?
- Is rows by columns of a matrix
- Has only one column
- Has zero non diagonal elements
+ Has equal diagonal elements and zero elsewhere
! Scalar matrix has equal diagonal elements and zero elsewhere.
? Which has ones on the diagonal and zeros elsewhere?
- Row matrix
+ Identity matrix
- Element count
- Zero matrix
! Identity matrix has ones on the diagonal and zeros elsewhere.
? Which statement is true of Identity matrix?
- Has zero non diagonal elements
- Has only one column
+ Has ones on the diagonal and zeros elsewhere
- Is rows by columns of a matrix
! Identity matrix has ones on the diagonal and zeros elsewhere.
? Which has all elements zero?
- Row matrix
- Element count
- Order
+ Zero matrix
! Zero matrix has all elements zero.
? Which statement is true of Zero matrix?
- Has ones on the diagonal and zeros elsewhere
- Is a rectangular array of numbers
- Has equal diagonal elements and zero elsewhere
+ Has all elements zero
! Zero matrix has all elements zero.
? Which have the same order and equal corresponding elements?
- Matrix addition
- Order preserved
+ Equal matrices
- Addition associative
! Equal matrices have the same order and equal corresponding elements.
? Which statement is true of Equal matrices?
- Multiplies each element by k
- Means A plus B equals B plus A
- Needs the same order
+ Have the same order and equal corresponding elements
! Equal matrices have the same order and equal corresponding elements.
? Which needs the same order?
+ Matrix addition
- Equal matrices
- Order preserved
- Additive identity
! Matrix addition needs the same order.
? Which statement is true of Matrix addition?
- Have the same order and equal corresponding elements
- In addition and scalar multiplication
+ Needs the same order
- Of A is minus A
! Matrix addition needs the same order.
? Which means A plus B equals B plus A?
- Additive identity
- Matrix addition
+ Addition commutative
- Subtraction
! Addition commutative means A plus B equals B plus A.
? Which statement is true of Addition commutative?
- Multiplies each element by k
+ Means A plus B equals B plus A
- Of A is minus A
- Needs the same order
! Addition commutative means A plus B equals B plus A.
? Which holds for matrices?
- Additive inverse
- Additive identity
+ Addition associative
- Distributive scalar
! Addition associative holds for matrices.
? Which statement is true of Addition associative?
- Have the same order and equal corresponding elements
- Is addition of the additive inverse
- In addition and scalar multiplication
+ Holds for matrices
! Addition associative holds for matrices.
? Which is the zero matrix?
- Order preserved
- Subtraction
- Distributive scalar
+ Additive identity
! Additive identity is the zero matrix.
? Which statement is true of Additive identity?
- K times A plus B equals kA plus kB
- Is addition of the additive inverse
+ Is the zero matrix
- Have the same order and equal corresponding elements
! Additive identity is the zero matrix.
? Which of A is minus A?
- Subtraction
- Addition associative
- Distributive scalar
+ Additive inverse
! Additive inverse of A is minus A.
? Which statement is true of Additive inverse?
- Needs the same order
- K times A plus B equals kA plus kB
+ Of A is minus A
- Is addition of the additive inverse
! Additive inverse of A is minus A.
? Which multiplies each element by k?
- Matrix addition
- Distributive scalar
- Addition associative
+ Scalar multiple
! Scalar multiple multiplies each element by k.
? Which statement is true of Scalar multiple?
+ Multiplies each element by k
- Means A plus B equals B plus A
- Needs the same order
- Is the zero matrix
! Scalar multiple multiplies each element by k.
? Which k times A plus B equals kA plus kB?
- Addition commutative
- Scalar multiple
- Order preserved
+ Distributive scalar
! Distributive scalar k times A plus B equals kA plus kB.
? Which statement is true of Distributive scalar?
+ K times A plus B equals kA plus kB
- In addition and scalar multiplication
- Multiplies each element by k
- Is addition of the additive inverse
! Distributive scalar k times A plus B equals kA plus kB.
? Which is addition of the additive inverse?
- Addition associative
- Matrix addition
- Order preserved
+ Subtraction
! Subtraction is addition of the additive inverse.
? Which statement is true of Subtraction?
+ Is addition of the additive inverse
- Multiplies each element by k
- Have the same order and equal corresponding elements
- Of A is minus A
! Subtraction is addition of the additive inverse.
? Which in addition and scalar multiplication?
+ Order preserved
- Additive inverse
- Addition commutative
- Addition associative
! Order preserved in addition and scalar multiplication.
? Which statement is true of Order preserved?
+ In addition and scalar multiplication
- Means A plus B equals B plus A
- Have the same order and equal corresponding elements
- Multiplies each element by k
! Order preserved in addition and scalar multiplication.
? Which when columns of first equal rows of second?
- Product order
- Zero divisors
- Distributive product
+ Product defined
! Product defined when columns of first equal rows of second.
? Which statement is true of Product defined?
- A times BC equals AB times C
- Satisfies A squared equals A
- AB zero does not mean A or B zero
+ When columns of first equal rows of second
! Product defined when columns of first equal rows of second.
? Which is rows of first by columns of second?
- Non commutative
- Element of product
- Associative product
+ Product order
! Product order is rows of first by columns of second.
? Which statement is true of Product order?
- A squared means A times A
- Satisfies A squared equals A
+ Is rows of first by columns of second
- When columns of first equal rows of second
! Product order is rows of first by columns of second.
? Which is row times column sum of products?
- Idempotent matrix
- Identity property
- Associative product
+ Element of product
! Element of product is row times column sum of products.
? Which statement is true of Element of product?
- AB zero does not mean A or B zero
- Is rows of first by columns of second
+ Is row times column sum of products
- Matrix multiplication does not commute generally
! Element of product is row times column sum of products.
? Which matrix multiplication does not commute generally?
- Power of matrix
+ Non commutative
- Product defined
- Zero divisors
! Non commutative matrix multiplication does not commute generally.
? Which statement is true of Non commutative?
- A times BC equals AB times C
- Is row times column sum of products
- When columns of first equal rows of second
+ Matrix multiplication does not commute generally
! Non commutative matrix multiplication does not commute generally.
? Which A times BC equals AB times C?
- Distributive product
- Zero divisors
+ Associative product
- Power of matrix
! Associative product A times BC equals AB times C.
? Which statement is true of Associative product?
- AB zero does not mean A or B zero
- When columns of first equal rows of second
- Matrix multiplication does not commute generally
+ A times BC equals AB times C
! Associative product A times BC equals AB times C.
? Which A times B plus C equals AB plus AC?
- Associative product
- Element of product
- Identity property
+ Distributive product
! Distributive product A times B plus C equals AB plus AC.
? Which statement is true of Distributive product?
- AI equals IA equals A
- A times BC equals AB times C
- When columns of first equal rows of second
+ A times B plus C equals AB plus AC
! Distributive product A times B plus C equals AB plus AC.
? Which AI equals IA equals A?
- Idempotent matrix
- Non commutative
+ Identity property
- Zero divisors
! Identity property AI equals IA equals A.
? Which statement is true of Identity property?
- Is row times column sum of products
- Matrix multiplication does not commute generally
- Satisfies A squared equals A
+ AI equals IA equals A
! Identity property AI equals IA equals A.
? Which AB zero does not mean A or B zero?
+ Zero divisors
- Distributive product
- Product defined
- Element of product
! Zero divisors AB zero does not mean A or B zero.
? Which statement is true of Zero divisors?
+ AB zero does not mean A or B zero
- When columns of first equal rows of second
- Is row times column sum of products
- AI equals IA equals A
! Zero divisors AB zero does not mean A or B zero.
? Which A squared means A times A?
- Element of product
- Associative product
+ Power of matrix
- Zero divisors
! Power of matrix A squared means A times A.
? Which statement is true of Power of matrix?
- Satisfies A squared equals A
+ A squared means A times A
- Is row times column sum of products
- A times BC equals AB times C
! Power of matrix A squared means A times A.
? Which satisfies A squared equals A?
- Distributive product
- Product defined
+ Idempotent matrix
- Non commutative
! Idempotent matrix satisfies A squared equals A.
? Which statement is true of Idempotent matrix?
- AB zero does not mean A or B zero
+ Satisfies A squared equals A
- A times B plus C equals AB plus AC
- Is row times column sum of products
! Idempotent matrix satisfies A squared equals A.
? Which interchanges rows and columns?
- Transpose of sum
+ Transpose
- Skew symmetric matrix
- Symmetric matrix
! Transpose interchanges rows and columns.
? Which statement is true of Transpose?
+ Interchanges rows and columns
- Gives the original matrix
- Is sum of transposes
- Is scalar times transpose
! Transpose interchanges rows and columns.
? Which gives the original matrix?
+ Transpose of transpose
- Skew symmetric matrix
- Skew diagonal
- Transpose of product
! Transpose of transpose gives the original matrix.
? Which statement is true of Transpose of transpose?
+ Gives the original matrix
- Satisfies A transpose equals minus A
- Satisfies A transpose equals A
- Interchanges rows and columns
! Transpose of transpose gives the original matrix.
? Which is sum of transposes?
- Transpose of scalar multiple
+ Transpose of sum
- Skew diagonal
- Skew symmetric matrix
! Transpose of sum is sum of transposes.
? Which statement is true of Transpose of sum?
- Is A plus A transpose over two
- Is scalar times transpose
- Interchanges rows and columns
+ Is sum of transposes
! Transpose of sum is sum of transposes.
? Which reverses the order of factors?
- Transpose of scalar multiple
+ Transpose of product
- Transpose of transpose
- Transpose of sum
! Transpose of product reverses the order of factors.
? Which statement is true of Transpose of product?
- Gives the original matrix
- Satisfies A transpose equals minus A
- Elements are zero in a skew symmetric matrix
+ Reverses the order of factors
! Transpose of product reverses the order of factors.
? Which is scalar times transpose?
- Skew symmetric matrix
- Transpose
- Skew part
+ Transpose of scalar multiple
! Transpose of scalar multiple is scalar times transpose.
? Which statement is true of Transpose of scalar multiple?
- Reverses the order of factors
- Interchanges rows and columns
+ Is scalar times transpose
- Is A plus A transpose over two
! Transpose of scalar multiple is scalar times transpose.
? Which satisfies A transpose equals A?
+ Symmetric matrix
- Transpose of scalar multiple
- Transpose of product
- Transpose
! Symmetric matrix satisfies A transpose equals A.
? Which statement is true of Symmetric matrix?
- Is A minus A transpose over two
- Is A plus A transpose over two
+ Satisfies A transpose equals A
- Gives the original matrix
! Symmetric matrix satisfies A transpose equals A.
? Which satisfies A transpose equals minus A?
- Transpose of transpose
+ Skew symmetric matrix
- Transpose of scalar multiple
- Transpose of sum
! Skew symmetric matrix satisfies A transpose equals minus A.
? Which statement is true of Skew symmetric matrix?
- Reverses the order of factors
- Gives the original matrix
- Interchanges rows and columns
+ Satisfies A transpose equals minus A
! Skew symmetric matrix satisfies A transpose equals minus A.
? Which elements are zero in a skew symmetric matrix?
- Transpose of product
- Transpose of transpose
+ Skew diagonal
- Symmetric matrix
! Skew diagonal elements are zero in a skew symmetric matrix.
? Which statement is true of Skew diagonal?
- Satisfies A transpose equals minus A
- Gives the original matrix
+ Elements are zero in a skew symmetric matrix
- Is A minus A transpose over two
! Skew diagonal elements are zero in a skew symmetric matrix.
? Which is A plus A transpose over two?
- Skew diagonal
+ Symmetric part
- Skew part
- Transpose of product
! Symmetric part is A plus A transpose over two.
? Which statement is true of Symmetric part?
- Satisfies A transpose equals minus A
- Reverses the order of factors
- Satisfies A transpose equals A
+ Is A plus A transpose over two
! Symmetric part is A plus A transpose over two.
? Which is A minus A transpose over two?
+ Skew part
- Transpose
- Transpose of transpose
- Symmetric part
! Skew part is A minus A transpose over two.
? Which statement is true of Skew part?
- Interchanges rows and columns
- Is scalar times transpose
- Is A plus A transpose over two
+ Is A minus A transpose over two
! Skew part is A minus A transpose over two.
? Which has an inverse with AB equal BA equal I?
- Row addition
- Inverse uniqueness
+ Invertible matrix
- Singular matrix
! Invertible matrix has an inverse with AB equal BA equal I.
? Which statement is true of Invertible matrix?
- Matrix has no inverse
- Has determinant zero
- Includes row interchange
+ Has an inverse with AB equal BA equal I
! Invertible matrix has an inverse with AB equal BA equal I.
? Which the inverse of a matrix is unique?
- Inverse by operations
- Inverse of transpose
- Row addition
+ Inverse uniqueness
! Inverse uniqueness the inverse of a matrix is unique.
? Which statement is true of Inverse uniqueness?
+ The inverse of a matrix is unique
- Includes row interchange
- Reduces A to I with the same operations on I
- Reverses the order of the inverses
! Inverse uniqueness the inverse of a matrix is unique.
? Which reverses the order of the inverses?
- Invertible matrix
+ Inverse of product
- Inverse uniqueness
- Row addition
! Inverse of product reverses the order of the inverses.
? Which statement is true of Inverse of product?
+ Reverses the order of the inverses
- Includes row interchange
- Multiplies a row by a nonzero constant
- Adds a multiple of one row to another
! Inverse of product reverses the order of the inverses.
? Which is transpose of inverse?
- Singular matrix
+ Inverse of transpose
- Row addition
- Inverse by operations
! Inverse of transpose is transpose of inverse.
? Which statement is true of Inverse of transpose?
- Includes row interchange
+ Is transpose of inverse
- Reduces A to I with the same operations on I
- Adds a multiple of one row to another
! Inverse of transpose is transpose of inverse.
? Which includes row interchange?
- Non invertible
+ Elementary operation
- Row scaling
- Invertible matrix
! Elementary operation includes row interchange.
? Which statement is true of Elementary operation?
- Reduces A to I with the same operations on I
- Is transpose of inverse
+ Includes row interchange
- Reverses the order of the inverses
! Elementary operation includes row interchange.
? Which multiplies a row by a nonzero constant?
+ Row scaling
- Invertible matrix
- Inverse by operations
- Singular matrix
! Row scaling multiplies a row by a nonzero constant.
? Which statement is true of Row scaling?
+ Multiplies a row by a nonzero constant
- Includes row interchange
- The inverse of a matrix is unique
- Matrix has no inverse
! Row scaling multiplies a row by a nonzero constant.
? Which adds a multiple of one row to another?
+ Row addition
- Inverse by operations
- Inverse of transpose
- Row scaling
! Row addition adds a multiple of one row to another.
? Which statement is true of Row addition?
- Includes row interchange
- Is transpose of inverse
+ Adds a multiple of one row to another
- Matrix has no inverse
! Row addition adds a multiple of one row to another.
? Which reduces A to I with the same operations on I?
- Inverse of transpose
- Inverse uniqueness
- Inverse of product
+ Inverse by operations
! Inverse by operations reduces A to I with the same operations on I.
? Which statement is true of Inverse by operations?
- Multiplies a row by a nonzero constant
+ Reduces A to I with the same operations on I
- Is transpose of inverse
- Matrix has no inverse
! Inverse by operations reduces A to I with the same operations on I.
? Which matrix has no inverse?
- Inverse by operations
- Invertible matrix
- Inverse uniqueness
+ Non invertible
! Non invertible matrix has no inverse.
? Which statement is true of Non invertible?
- Multiplies a row by a nonzero constant
- Reverses the order of the inverses
+ Matrix has no inverse
- Adds a multiple of one row to another
! Non invertible matrix has no inverse.
? Which has determinant zero?
- Inverse by operations
- Row addition
- Inverse uniqueness
+ Singular matrix
! Singular matrix has determinant zero.
? Which statement is true of Singular matrix?
- Has an inverse with AB equal BA equal I
- Matrix has no inverse
+ Has determinant zero
- Multiplies a row by a nonzero constant
! Singular matrix has determinant zero.
? Which can be written as AX equals B?
- Scaling
+ Linear equations
- Rotation
- Cryptography
! Linear equations can be written as AX equals B.
? Which statement is true of Linear equations?
- Confirms matrix identities
- Uses matrices for connections
+ Can be written as AX equals B
- Avoids invalid operations
! Linear equations can be written as AX equals B.
? Which uses matrices for transformations?
- Verification
- Cryptography
+ Computer graphics
- Order check
! Computer graphics uses matrices for transformations.
? Which statement is true of Computer graphics?
- Uses matrices for input output models
+ Uses matrices for transformations
- Confirms matrix identities
- Can be written as AX equals B
! Computer graphics uses matrices for transformations.
? Which uses matrices for tables?
- Cryptography
+ Data storage
- Scaling
- Computer graphics
! Data storage uses matrices for tables.
? Which statement is true of Data storage?
+ Uses matrices for tables
- Uses matrices for transformations
- Uses matrices for input output models
- Is represented by a matrix
! Data storage uses matrices for tables.
? Which uses matrices for connections?
+ Network analysis
- Cryptography
- Order check
- Linear equations
! Network analysis uses matrices for connections.
? Which statement is true of Network analysis?
+ Uses matrices for connections
- Avoids invalid operations
- Uses matrices for encoding
- Uses matrices for tables
! Network analysis uses matrices for connections.
? Which uses matrices for encoding?
- Scaling
- Economics
+ Cryptography
- Verification
! Cryptography uses matrices for encoding.
? Which statement is true of Cryptography?
- Uses matrices for transformations
+ Uses matrices for encoding
- Uses matrices for tables
- Uses matrices for connections
! Cryptography uses matrices for encoding.
? Which uses matrices for input output models?
+ Economics
- Data storage
- Computer graphics
- Verification
! Economics uses matrices for input output models.
? Which statement is true of Economics?
- Uses matrices for tables
- Avoids invalid operations
+ Uses matrices for input output models
- Is represented by a matrix
! Economics uses matrices for input output models.
? Which is represented by a matrix?
- Scaling
- Network analysis
+ Rotation
- Cryptography
! Rotation is represented by a matrix.
? Which statement is true of Rotation?
- Uses matrices for tables
- Uses matrices for encoding
+ Is represented by a matrix
- Uses matrices for input output models
! Rotation is represented by a matrix.
? Which statement is true of Scaling?
+ Is represented by a matrix
- Uses matrices for input output models
- Uses matrices for tables
- Uses matrices for transformations
! Scaling is represented by a matrix.
? Which avoids invalid operations?
+ Order check
- Verification
- Computer graphics
- Rotation
! Order check avoids invalid operations.
? Which statement is true of Order check?
- Can be written as AX equals B
+ Avoids invalid operations
- Uses matrices for encoding
- Confirms matrix identities
! Order check avoids invalid operations.
? Which confirms matrix identities?
- Linear equations
+ Verification
- Data storage
- Cryptography
! Verification confirms matrix identities.
? Which statement is true of Verification?
- Uses matrices for tables
- Can be written as AX equals B
+ Confirms matrix identities
- Avoids invalid operations
! Verification confirms matrix identities.
? Order of product of 2x3 and 3x4
+ 2 x 4
- 3 x 3
- 2 x 3
- 4 x 2
! 2 x 4.
? (AB)′ equals
+ B′A′
- A′B′
- AB
- BA
! B transpose A transpose.
? Diagonal of skew-symmetric matrix
- One
- Equal
+ Zero
- Negative
! Zero.
? Identity property
- AI = 0
- AI = I
+ AI = A
- AI = 2A
! AI = A.
? Unique inverse means
- Many inverses
- None
- Two inverses
+ Only one inverse
! Only one.
? Matrix addition needs
- Square matrices
+ Same order
- Equal columns only
- Equal rows only
! Same order.
@visual
blocks | Matrix types | Row; Column; Square; Diagonal; Scalar; Identity
compare | Symmetric and skew | Symmetric=A transpose = A; Skew=A transpose = -A~Zero diagonal
flow | Multiplication | Check columns equal rows; Row by column; Sum products; Result
steps | Decompose | Find A transpose; Add and halve; Subtract and halve; Check
mind | Matrices | Types; Operations; Transpose; Inverse
@problems
## Moderate
P: When can two matrices be multiplied?
A: When the number of columns of the first equals the number of rows of the second.
R: 3 | Columns
R: 3 | Rows
## High
P: Show that every square matrix is the sum of a symmetric and a skew-symmetric matrix.
A: Write A = (A + A′)/2 + (A - A′)/2 where the first is symmetric and the second skew-symmetric.
R: 2 | Symmetric
R: 2 | Skew-symmetric
R: 2 | Half sum
R: 2 | Half difference
## Advanced
P: If A is 2 x 3 and B is 3 x 2, what are the orders of AB and BA?
A: AB is 2 x 2 and BA is 3 x 3.
R: 2 | 2 x 2
R: 2 | 3 x 3
R: 2 | Order
R: 2 | Product

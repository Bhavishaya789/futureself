# Determinants and inverse of a matrix
minutes: 40
yt: class 12 determinants
@study
The determinant of a square matrix is a single number: for [[a, b], [c, d]] it is ad - bc. A matrix is invertible exactly when its determinant is non-zero, and then A^-1 = adj(A)/|A|. Cramer-style solutions use A^-1 B for the system AX = B. The area of a triangle with vertices (x1, y1), (x2, y2), (x3, y3) is half the absolute value of a determinant.
## Deep dive: determinants and their properties
For a 2 x 2 matrix the determinant is ad - bc; for a 3 x 3 matrix expand along any row or column using minors and cofactors with the sign pattern (+ - +, - + -, + - +). Properties: swapping two rows changes the sign; a row of zeros or two identical (or proportional) rows gives 0; multiplying one row by k multiplies the determinant by k; adding a multiple of a row to another does not change the value; |A^T| = |A|; |AB| = |A||B|; |kA| = k^n |A| for an n x n matrix; the determinant of a triangular matrix is the product of the diagonal entries.
## Deep dive: adjoint and inverse
The minor M_ij is the determinant left after deleting row i and column j; the cofactor is C_ij = (-1)^(i + j) M_ij. The adjoint adj A is the transpose of the cofactor matrix. Then A (adj A) = (adj A) A = |A| I, so A^-1 = adj A / |A| exists only if A is non-singular (|A| != 0). Properties: (AB)^-1 = B^-1 A^-1, (A^-1)^-1 = A, |adj A| = |A|^(n - 1), |A^-1| = 1/|A|.
## Deep dive: solving equations and areas
For AX = B with |A| != 0 the unique solution is X = A^-1 B. If |A| = 0 and (adj A) B is non-zero the system is inconsistent; if (adj A) B = 0 it has infinitely many solutions (or none, check). Area of a triangle with vertices (x1, y1), (x2, y2), (x3, y3) = (1/2) |det [[x1, y1, 1], [x2, y2, 1], [x3, y3, 1]]|; three points are collinear when this determinant is 0.
## Hindi saransh
|A| = ad - bc. A^-1 = adj A / |A|. |A| = 0 matlab singular.
> |AB| = |A||B| and |kA| = k^n |A| for an n x n matrix.
@formulas
## Determinants
2 x 2 determinant | ad - bc | [[a, b], [c, d]]
Minor | M_ij | delete row i and column j
Cofactor | C_ij = (-1)^(i+j) M_ij | 
Expansion | |A| = sum a_ij C_ij | along any row or column
Transpose | |A^T| = |A| | 
Product | |AB| = |A||B| | 
Scalar multiple | |kA| = k^n |A| | n x n matrix
## Inverse
Adjoint | adj A = (cofactor matrix)^T | 
Inverse | A^-1 = adj A / |A| | |A| != 0
Key identity | A (adj A) = |A| I | 
Adjoint determinant | |adj A| = |A|^(n-1) | 
Inverse determinant | |A^-1| = 1/|A| | 
Solution of AX = B | X = A^-1 B | |A| != 0
## Area
Triangle area | (1/2) |det [[x1, y1, 1], [x2, y2, 1], [x3, y3, 1]]| | 
Collinear points | determinant = 0 | 

@qa
Q: What is the determinant of a 2 x 2 matrix [[a, b], [c, d]]?
A: ad - bc.
Q: When is a matrix singular?
A: When its determinant is zero.
Q: When does the inverse of a matrix exist?
A: When the matrix is square and non-singular.
Q: What is the formula for the inverse?
A: A^-1 = adj A / |A|.
Q: What is the adjoint of a matrix?
A: The transpose of its cofactor matrix.
Q: What is a minor?
A: The determinant left after deleting a row and a column.
Q: What is a cofactor?
A: (-1)^(i + j) times the minor.
Q: What happens to the determinant if two rows are swapped?
A: It changes sign.
Q: What is the determinant if two rows are identical?
A: Zero.
Q: What is |kA| for an n x n matrix?
A: k^n |A|.
Q: What is |AB|?
A: |A||B|.
Q: What is |A^-1|?
A: 1/|A|.
Q: What is |adj A| for a 3 x 3 matrix?
A: |A|^2.
Q: What is (AB)^-1?
A: B^-1 A^-1.
Q: What is the determinant of the identity matrix?
A: 1.
Q: What is the determinant of a triangular matrix?
A: The product of its diagonal entries.
Q: When are three points collinear using determinants?
A: When the area determinant is zero.
Q: What does a unique solution of AX = B need?
A: |A| != 0.
Q: The determinant of [[4, -6], [2, -2]] is
A: 4.
Q: Find the adjoint of [[4, -6], [2, -2]].
A: [[-2, 6], [-2, 4]].
Q: Find the inverse of [[4, -6], [2, -2]].
A: (1/4) x [[-2, 6], [-2, 4]].
Q: The determinant of [[0, 2], [-4, 0]] is
A: 8.
Q: Find the adjoint of [[0, 2], [-4, 0]].
A: [[0, -2], [4, 0]].
Q: Find the inverse of [[0, 2], [-4, 0]].
A: (1/8) x [[0, -2], [4, 0]].
Q: The determinant of [[-5, 0], [-6, 5]] is
A: -25.
Q: Find the adjoint of [[-5, 0], [-6, 5]].
A: [[5, 0], [6, -5]].
Q: Find the inverse of [[-5, 0], [-6, 5]].
A: (1/-25) x [[5, 0], [6, -5]].
Q: The determinant of [[8, -2], [5, -1]] is
A: 2.
Q: Find the adjoint of [[8, -2], [5, -1]].
A: [[-1, 2], [-5, 8]].
Q: Find the inverse of [[8, -2], [5, -1]].
A: (1/2) x [[-1, 2], [-5, 8]].
Q: The determinant of [[-5, 5], [-6, 6]] is
A: 0.
Q: The determinant of [[0, -2], [4, 7]] is
A: 8.
Q: Find the adjoint of [[0, -2], [4, 7]].
A: [[7, 2], [-4, 0]].
Q: Find the inverse of [[0, -2], [4, 7]].
A: (1/8) x [[7, 2], [-4, 0]].
Q: The determinant of [[8, -3], [-6, 1]] is
A: -10.
Q: Find the adjoint of [[8, -3], [-6, 1]].
A: [[1, 3], [6, 8]].
Q: Find the inverse of [[8, -3], [-6, 1]].
A: (1/-10) x [[1, 3], [6, 8]].
Q: The determinant of [[-2, -2], [1, 5]] is
A: -8.
Q: Find the adjoint of [[-2, -2], [1, 5]].
A: [[5, 2], [-1, -2]].
Q: Find the inverse of [[-2, -2], [1, 5]].
A: (1/-8) x [[5, 2], [-1, -2]].
Q: The determinant of [[3, -6], [2, 5]] is
A: 27.
Q: Find the adjoint of [[3, -6], [2, 5]].
A: [[5, 6], [-2, 3]].
Q: Find the inverse of [[3, -6], [2, 5]].
A: (1/27) x [[5, 6], [-2, 3]].
Q: The determinant of [[0, 6], [-6, -4]] is
A: 36.
Q: Find the adjoint of [[0, 6], [-6, -4]].
A: [[-4, -6], [6, 0]].
Q: Find the inverse of [[0, 6], [-6, -4]].
A: (1/36) x [[-4, -6], [6, 0]].
Q: The determinant of [[-3, 1], [-3, 3]] is
A: -6.
Q: Find the adjoint of [[-3, 1], [-3, 3]].
A: [[3, -1], [3, -3]].
Q: Find the inverse of [[-3, 1], [-3, 3]].
A: (1/-6) x [[3, -1], [3, -3]].
Q: The determinant of [[-2, 7], [9, 9]] is
A: -81.
Q: Find the adjoint of [[-2, 7], [9, 9]].
A: [[9, -7], [-9, -2]].
Q: Find the inverse of [[-2, 7], [9, 9]].
A: (1/-81) x [[9, -7], [-9, -2]].
Q: The determinant of [[5, 3], [-3, 0]] is
A: 9.
Q: Find the adjoint of [[5, 3], [-3, 0]].
A: [[0, -3], [3, 5]].
Q: Find the inverse of [[5, 3], [-3, 0]].
A: (1/9) x [[0, -3], [3, 5]].
Q: The determinant of [[3, 0], [-1, 8]] is
A: 24.
Q: Find the adjoint of [[3, 0], [-1, 8]].
A: [[8, 0], [1, 3]].
Q: Find the inverse of [[3, 0], [-1, 8]].
A: (1/24) x [[8, 0], [1, 3]].
Q: The determinant of [[9, 4], [2, -3]] is
A: -35.
Q: Find the adjoint of [[9, 4], [2, -3]].
A: [[-3, -4], [-2, 9]].
Q: Find the inverse of [[9, 4], [2, -3]].
A: (1/-35) x [[-3, -4], [-2, 9]].
Q: The determinant of [[2, -6], [-5, 0]] is
A: -30.
Q: Find the adjoint of [[2, -6], [-5, 0]].
A: [[0, 6], [5, 2]].
Q: Find the inverse of [[2, -6], [-5, 0]].
A: (1/-30) x [[0, 6], [5, 2]].
Q: The determinant of [[1, 9], [4, 3]] is
A: -33.
Q: Find the adjoint of [[1, 9], [4, 3]].
A: [[3, -9], [-4, 1]].
Q: Find the inverse of [[1, 9], [4, 3]].
A: (1/-33) x [[3, -9], [-4, 1]].
Q: The determinant of [[1, 2], [-2, -5]] is
A: -1.
Q: Find the adjoint of [[1, 2], [-2, -5]].
A: [[-5, -2], [2, 1]].
Q: Find the inverse of [[1, 2], [-2, -5]].
A: (1/-1) x [[-5, -2], [2, 1]].
Q: The determinant of [[9, 8], [1, -2]] is
A: -26.
Q: Find the adjoint of [[9, 8], [1, -2]].
A: [[-2, -8], [-1, 9]].
Q: Find the inverse of [[9, 8], [1, -2]].
A: (1/-26) x [[-2, -8], [-1, 9]].
Q: The determinant of [[-4, 0], [8, 2]] is
A: -8.
Q: Find the adjoint of [[-4, 0], [8, 2]].
A: [[2, 0], [-8, -4]].
Q: Find the inverse of [[-4, 0], [8, 2]].
A: (1/-8) x [[2, 0], [-8, -4]].
Q: The determinant of [[8, 7], [2, 3]] is
A: 10.
Q: Find the adjoint of [[8, 7], [2, 3]].
A: [[3, -7], [-2, 8]].
Q: Find the inverse of [[8, 7], [2, 3]].
A: (1/10) x [[3, -7], [-2, 8]].
Q: The determinant of [[6, 4], [9, 9]] is
A: 18.
Q: Find the adjoint of [[6, 4], [9, 9]].
A: [[9, -4], [-9, 6]].
Q: Find the inverse of [[6, 4], [9, 9]].
A: (1/18) x [[9, -4], [-9, 6]].
Q: The determinant of [[-6, 7], [0, 8]] is
A: -48.
Q: Find the adjoint of [[-6, 7], [0, 8]].
A: [[8, -7], [0, -6]].
Q: Find the inverse of [[-6, 7], [0, 8]].
A: (1/-48) x [[8, -7], [0, -6]].
Q: The determinant of [[3, 3], [-6, -5]] is
A: 3.
Q: Find the adjoint of [[3, 3], [-6, -5]].
A: [[-5, -3], [6, 3]].
Q: Find the inverse of [[3, 3], [-6, -5]].
A: (1/3) x [[-5, -3], [6, 3]].
Q: The determinant of [[7, 7], [-4, 4]] is
A: 56.
Q: Find the adjoint of [[7, 7], [-4, 4]].
A: [[4, -7], [4, 7]].
Q: Find the inverse of [[7, 7], [-4, 4]].
A: (1/56) x [[4, -7], [4, 7]].
Q: The determinant of [[1, 4], [-2, 8]] is
A: 16.
Q: Find the adjoint of [[1, 4], [-2, 8]].
A: [[8, -4], [2, 1]].
Q: Find the inverse of [[1, 4], [-2, 8]].
A: (1/16) x [[8, -4], [2, 1]].
Q: The determinant of [[5, 9], [-5, 3]] is
A: 60.
Q: Find the adjoint of [[5, 9], [-5, 3]].
A: [[3, -9], [5, 5]].
Q: Find the inverse of [[5, 9], [-5, 3]].
A: (1/60) x [[3, -9], [5, 5]].
Q: The determinant of [[6, -3], [3, 3]] is
A: 27.
Q: Find the adjoint of [[6, -3], [3, 3]].
A: [[3, 3], [-3, 6]].
Q: Find the inverse of [[6, -3], [3, 3]].
A: (1/27) x [[3, 3], [-3, 6]].
Q: The determinant of [[3, -6], [2, 6]] is
A: 30.
Q: Find the adjoint of [[3, -6], [2, 6]].
A: [[6, 6], [-2, 3]].
Q: Find the inverse of [[3, -6], [2, 6]].
A: (1/30) x [[6, 6], [-2, 3]].
Q: The determinant of [[4, 7], [2, 5]] is
A: 6.
Q: Find the adjoint of [[4, 7], [2, 5]].
A: [[5, -7], [-2, 4]].
Q: Find the inverse of [[4, 7], [2, 5]].
A: (1/6) x [[5, -7], [-2, 4]].
Q: The determinant of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
A: 6.
Q: The minor M11 of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
A: -13.
Q: The cofactor C12 of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
A: 2.
Q: |2A| for the matrix A = [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
A: 48.
Q: |adj A| for the matrix A = [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
A: 36.
Q: The determinant of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
A: -74.
Q: The minor M11 of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
A: -11.
Q: The cofactor C12 of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
A: 9.
Q: |2A| for the matrix A = [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
A: -592.
Q: |adj A| for the matrix A = [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
A: 5476.
Q: The determinant of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
A: -2.
Q: The minor M11 of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
A: -2.
Q: The cofactor C12 of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
A: 2.
Q: |2A| for the matrix A = [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
A: -16.
Q: |adj A| for the matrix A = [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
A: 4.
Q: The determinant of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
A: -51.
Q: The minor M11 of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
A: -1.
Q: The cofactor C12 of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
A: 8.
Q: |2A| for the matrix A = [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
A: -408.
Q: |adj A| for the matrix A = [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
A: 2601.
Q: The determinant of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
A: -12.
Q: The minor M11 of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
A: 17.
Q: The cofactor C12 of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
A: -12.
Q: |2A| for the matrix A = [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
A: -96.
Q: |adj A| for the matrix A = [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
A: 144.
Q: The determinant of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
A: 11.
Q: The minor M11 of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
A: 1.
Q: The cofactor C12 of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
A: -2.
Q: |2A| for the matrix A = [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
A: 88.
Q: |adj A| for the matrix A = [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
A: 121.
Q: The determinant of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
A: 22.
Q: The minor M11 of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
A: 2.
Q: The cofactor C12 of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
A: -9.
Q: |2A| for the matrix A = [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
A: 176.
Q: |adj A| for the matrix A = [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
A: 484.
Q: The determinant of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
A: 21.
Q: The minor M11 of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
A: 4.
Q: The cofactor C12 of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
A: 7.
Q: |2A| for the matrix A = [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
A: 168.
Q: |adj A| for the matrix A = [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
A: 441.
Q: The determinant of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
A: 26.
Q: The minor M11 of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
A: 25.
Q: The cofactor C12 of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
A: 10.
Q: |2A| for the matrix A = [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
A: 208.
Q: |adj A| for the matrix A = [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
A: 676.
Q: The determinant of [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
A: 0.
Q: The minor M11 of [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
A: -13.
Q: The cofactor C12 of [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
A: 22.
Q: |2A| for the matrix A = [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
A: 0.
Q: |adj A| for the matrix A = [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
A: 0.
Q: The determinant of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
A: -7.
Q: The minor M11 of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
A: 9.
Q: The cofactor C12 of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
A: -6.
Q: |2A| for the matrix A = [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
A: -56.
Q: |adj A| for the matrix A = [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
A: 49.
Q: The determinant of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
A: 41.
Q: The minor M11 of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
A: 13.
Q: The cofactor C12 of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
A: 12.
Q: |2A| for the matrix A = [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
A: 328.
Q: |adj A| for the matrix A = [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
A: 1681.
Q: The determinant of [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
A: -16.
Q: The minor M11 of [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
A: 0.
Q: The cofactor C12 of [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
A: 16.
Q: |2A| for the matrix A = [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
A: -128.
Q: |adj A| for the matrix A = [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
A: 256.
Q: The determinant of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
A: -12.
Q: The minor M11 of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
A: -12.
Q: The cofactor C12 of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
A: 3.
Q: |2A| for the matrix A = [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
A: -96.
Q: |adj A| for the matrix A = [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
A: 144.
Q: The determinant of [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
A: 32.
Q: The minor M11 of [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
A: 4.
Q: The cofactor C12 of [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
A: 0.
Q: |2A| for the matrix A = [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
A: 256.
Q: |adj A| for the matrix A = [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
A: 1024.
Q: The determinant of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
A: 17.
Q: The minor M11 of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
A: -23.
Q: The cofactor C12 of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
A: 7.
Q: |2A| for the matrix A = [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
A: 136.
Q: |adj A| for the matrix A = [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
A: 289.
Q: The determinant of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
A: -5.
Q: The minor M11 of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
A: -5.
Q: The cofactor C12 of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
A: 5.
Q: |2A| for the matrix A = [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
A: -40.
Q: |adj A| for the matrix A = [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
A: 25.
Q: The determinant of [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
A: -6.
Q: The minor M11 of [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
A: 2.
Q: The cofactor C12 of [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
A: 0.
Q: |2A| for the matrix A = [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
A: -48.
Q: |adj A| for the matrix A = [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
A: 36.
Q: The determinant of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
A: -27.
Q: The minor M11 of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
A: 15.
Q: The cofactor C12 of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
A: 30.
Q: |2A| for the matrix A = [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
A: -216.
Q: |adj A| for the matrix A = [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
A: 729.
Q: The determinant of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
A: -79.
Q: The minor M11 of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
A: -20.
Q: The cofactor C12 of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
A: -23.
Q: |2A| for the matrix A = [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
A: -632.
Q: |adj A| for the matrix A = [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
A: 6241.
Q: The determinant of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
A: 86.
Q: The minor M11 of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
A: 22.
Q: The cofactor C12 of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
A: 4.
Q: |2A| for the matrix A = [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
A: 688.
Q: |adj A| for the matrix A = [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
A: 7396.
Q: The determinant of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
A: -24.
Q: The minor M11 of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
A: -2.
Q: The cofactor C12 of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
A: 4.
Q: |2A| for the matrix A = [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
A: -192.
Q: |adj A| for the matrix A = [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
A: 576.
Q: The determinant of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
A: 4.
Q: The minor M11 of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
A: -4.
Q: The cofactor C12 of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
A: -12.
Q: |2A| for the matrix A = [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
A: 32.
Q: |adj A| for the matrix A = [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
A: 16.
Q: The determinant of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
A: -46.
Q: The minor M11 of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
A: -2.
Q: The cofactor C12 of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
A: -26.
Q: |2A| for the matrix A = [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
A: -368.
Q: |adj A| for the matrix A = [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
A: 2116.
Q: Area of the triangle with vertices (0, 0), (4, 0), (0, 3) in square units
A: 6.
Q: Area of the triangle with vertices (1, 1), (5, 1), (1, 7) in square units
A: 12.
Q: Area of the triangle with vertices (2, 3), (6, 3), (2, 9) in square units
A: 12.
Q: Area of the triangle with vertices (0, 0), (6, 0), (3, 4) in square units
A: 12.
Q: Area of the triangle with vertices (1, 2), (4, 6), (7, 2) in square units
A: 12.
Q: Area of the triangle with vertices (-2, 1), (2, 1), (0, 5) in square units
A: 8.
Q: Area of the triangle with vertices (3, 0), (0, 4), (0, 0) in square units
A: 6.
Q: Area of the triangle with vertices (1, 1), (2, 2), (3, 3) in square units
A: 0.
Q: Area of the triangle with vertices (0, 2), (0, 8), (5, 5) in square units
A: 15.
Q: Area of the triangle with vertices (-1, -1), (3, -1), (1, 3) in square units
A: 8.
Q: Solve 1x + 1y = 3 and 1x + -1y = 1 using the inverse.
A: x = 2, y = 1.
Q: Solve 2x + 1y = 5 and 1x + 3y = 10 using the inverse.
A: x = 1, y = 3.
Q: Solve 1x + 2y = 5 and 3x + -1y = 4 using the inverse.
A: x = 13/7, y = 11/7.
Q: Solve 3x + 1y = 10 and 1x + 1y = 6 using the inverse.
A: x = 2, y = 4.
Q: Solve 2x + 3y = 12 and 1x + -1y = 1 using the inverse.
A: x = 3, y = 2.
Q: Solve 1x + 1y = 7 and 2x + 1y = 11 using the inverse.
A: x = 4, y = 3.
Q: Solve 4x + 1y = 13 and 1x + -1y = 2 using the inverse.
A: x = 3, y = 1.
Q: Solve 1x + 3y = 11 and 2x + 1y = 7 using the inverse.
A: x = 2, y = 3.
Q: A 3 x 3 matrix has determinant 2. |2A| is
A: 16.
Q: A 2 x 2 matrix has determinant 3. |2A| is
A: 12.
Q: A 3 x 3 matrix has determinant 2. |3A| is
A: 54.
Q: A 2 x 2 matrix has determinant 3. |3A| is
A: 27.
Q: A 3 x 3 matrix has determinant 2. |4A| is
A: 128.
Q: A 2 x 2 matrix has determinant 3. |4A| is
A: 48.
Q: A 3 x 3 matrix has determinant 2. |5A| is
A: 250.
Q: A 2 x 2 matrix has determinant 3. |5A| is
A: 75.
Q: A 3 x 3 matrix has determinant 2. |6A| is
A: 432.
Q: A 2 x 2 matrix has determinant 3. |6A| is
A: 108.
@quiz
? The determinant of [[4, -6], [2, -2]] is
- 6
- 2
- 3.2
+ 4
! ad - bc.
? The adjoint of [[4, -6], [2, -2]] is
- [[-2, -6], [2, 4]]
- [[-6, 4], [-2, 2]]
+ [[-2, 6], [-2, 4]]
- [[4, 6], [-2, -2]]
! Swap the diagonal, negate the others.
? The determinant of [[0, 2], [-4, 0]] is
+ 8
- 4
- 6.4
- 8.8
! ad - bc.
? The determinant of [[-5, 0], [-6, 5]] is
- -30
- -50
+ -25
- -12.5
! ad - bc.
? The adjoint of [[-5, 0], [-6, 5]] is
- [[5, 0], [-6, -5]]
+ [[5, 0], [6, -5]]
- [[-5, 0], [6, 5]]
- [[0, -5], [5, -6]]
! Swap the diagonal, negate the others.
? The determinant of [[8, -2], [5, -1]] is
- 1.6
+ 2
- 4
- 3
! ad - bc.
? The adjoint of [[8, -2], [5, -1]] is
- [[-1, -2], [5, 8]]
- [[8, 2], [-5, -1]]
- [[-2, 8], [-1, 5]]
+ [[-1, 2], [-5, 8]]
! Swap the diagonal, negate the others.
? The determinant of [[0, -2], [4, 7]] is
+ 8
- 4
- 12
- 7.2
! ad - bc.
? The adjoint of [[0, -2], [4, 7]] is
- [[0, 2], [-4, 7]]
- [[7, -2], [4, 0]]
- [[-2, 0], [7, 4]]
+ [[7, 2], [-4, 0]]
! Swap the diagonal, negate the others.
? The determinant of [[8, -3], [-6, 1]] is
- -15
- -12
- -5
+ -10
! ad - bc.
? The adjoint of [[8, -3], [-6, 1]] is
- [[8, 3], [6, 1]]
+ [[1, 3], [6, 8]]
- [[1, -3], [-6, 8]]
- [[-3, 8], [1, -6]]
! Swap the diagonal, negate the others.
? The determinant of [[-2, -2], [1, 5]] is
- -8.8
- -16
- -7.2
+ -8
! ad - bc.
? The adjoint of [[-2, -2], [1, 5]] is
- [[-2, 2], [-1, 5]]
- [[5, -2], [1, -2]]
+ [[5, 2], [-1, -2]]
- [[-2, -2], [5, 1]]
! Swap the diagonal, negate the others.
? The determinant of [[3, -6], [2, 5]] is
- 13.5
- 21.6
+ 27
- 54
! ad - bc.
? The adjoint of [[3, -6], [2, 5]] is
+ [[5, 6], [-2, 3]]
- [[3, 6], [-2, 5]]
- [[-6, 3], [5, 2]]
- [[5, -6], [2, 3]]
! Swap the diagonal, negate the others.
? The determinant of [[0, 6], [-6, -4]] is
+ 36
- 54
- 18
- 72
! ad - bc.
? The adjoint of [[0, 6], [-6, -4]] is
- [[-4, 6], [-6, 0]]
- [[0, -6], [6, -4]]
+ [[-4, -6], [6, 0]]
- [[6, 0], [-4, -6]]
! Swap the diagonal, negate the others.
? The determinant of [[-3, 1], [-3, 3]] is
- -3
- -12
- -4.8
+ -6
! ad - bc.
? The adjoint of [[-3, 1], [-3, 3]] is
- [[-3, -1], [3, 3]]
+ [[3, -1], [3, -3]]
- [[3, 1], [-3, -3]]
- [[1, -3], [3, -3]]
! Swap the diagonal, negate the others.
? The determinant of [[-2, 7], [9, 9]] is
- -64.8
+ -81
- -40.5
- -72.9
! ad - bc.
? The adjoint of [[-2, 7], [9, 9]] is
- [[-2, -7], [-9, 9]]
- [[9, 7], [9, -2]]
- [[7, -2], [9, 9]]
+ [[9, -7], [-9, -2]]
! Swap the diagonal, negate the others.
? The determinant of [[5, 3], [-3, 0]] is
- 4.5
- 9.9
- 7.2
+ 9
! ad - bc.
? The adjoint of [[5, 3], [-3, 0]] is
- [[0, 3], [-3, 5]]
- [[5, -3], [3, 0]]
- [[3, 5], [0, -3]]
+ [[0, -3], [3, 5]]
! Swap the diagonal, negate the others.
? The determinant of [[3, 0], [-1, 8]] is
- 19.2
+ 24
- 12
- 48
! ad - bc.
? The adjoint of [[3, 0], [-1, 8]] is
+ [[8, 0], [1, 3]]
- [[0, 3], [8, -1]]
- [[8, 0], [-1, 3]]
- [[3, 0], [1, 8]]
! Swap the diagonal, negate the others.
? The determinant of [[9, 4], [2, -3]] is
+ -35
- -38.5
- -31.5
- -42
! ad - bc.
? The adjoint of [[9, 4], [2, -3]] is
- [[4, 9], [-3, 2]]
- [[9, -4], [-2, -3]]
+ [[-3, -4], [-2, 9]]
- [[-3, 4], [2, 9]]
! Swap the diagonal, negate the others.
? The determinant of [[2, -6], [-5, 0]] is
+ -30
- -24
- -27
- -60
! ad - bc.
? The adjoint of [[2, -6], [-5, 0]] is
- [[0, -6], [-5, 2]]
+ [[0, 6], [5, 2]]
- [[-6, 2], [0, -5]]
- [[2, 6], [5, 0]]
! Swap the diagonal, negate the others.
? The determinant of [[1, 9], [4, 3]] is
- -16.5
+ -33
- -29.7
- -26.4
! ad - bc.
? The adjoint of [[1, 9], [4, 3]] is
- [[3, 9], [4, 1]]
- [[9, 1], [3, 4]]
- [[1, -9], [-4, 3]]
+ [[3, -9], [-4, 1]]
! Swap the diagonal, negate the others.
? The determinant of [[1, 2], [-2, -5]] is
+ -1
- -1.1
- -2
- -0.5
! ad - bc.
? The adjoint of [[1, 2], [-2, -5]] is
- [[1, -2], [2, -5]]
- [[-5, 2], [-2, 1]]
+ [[-5, -2], [2, 1]]
- [[2, 1], [-5, -2]]
! Swap the diagonal, negate the others.
? The determinant of [[9, 8], [1, -2]] is
- -20.8
- -31.2
+ -26
- -28.6
! ad - bc.
? The adjoint of [[9, 8], [1, -2]] is
+ [[-2, -8], [-1, 9]]
- [[8, 9], [-2, 1]]
- [[-2, 8], [1, 9]]
- [[9, -8], [-1, -2]]
! Swap the diagonal, negate the others.
? The determinant of [[-4, 0], [8, 2]] is
- -7.2
+ -8
- -9.6
- -6.4
! ad - bc.
? The adjoint of [[-4, 0], [8, 2]] is
- [[0, -4], [2, 8]]
- [[2, 0], [8, -4]]
- [[-4, 0], [-8, 2]]
+ [[2, 0], [-8, -4]]
! Swap the diagonal, negate the others.
? The determinant of [[8, 7], [2, 3]] is
- 15
- 20
+ 10
- 5
! ad - bc.
? The adjoint of [[8, 7], [2, 3]] is
- [[8, -7], [-2, 3]]
- [[7, 8], [3, 2]]
- [[3, 7], [2, 8]]
+ [[3, -7], [-2, 8]]
! Swap the diagonal, negate the others.
? The determinant of [[6, 4], [9, 9]] is
+ 18
- 21.6
- 27
- 16.2
! ad - bc.
? The adjoint of [[6, 4], [9, 9]] is
- [[4, 6], [9, 9]]
- [[9, 4], [9, 6]]
- [[6, -4], [-9, 9]]
+ [[9, -4], [-9, 6]]
! Swap the diagonal, negate the others.
? The determinant of [[-6, 7], [0, 8]] is
- -96
- -24
+ -48
- -52.8
! ad - bc.
? The adjoint of [[-6, 7], [0, 8]] is
- [[7, -6], [8, 0]]
- [[-6, -7], [0, 8]]
+ [[8, -7], [0, -6]]
- [[8, 7], [0, -6]]
! Swap the diagonal, negate the others.
? The determinant of [[3, 3], [-6, -5]] is
+ 3
- 3.3
- 2.4
- 2.7
! ad - bc.
? The adjoint of [[3, 3], [-6, -5]] is
- [[3, 3], [-5, -6]]
- [[-5, 3], [-6, 3]]
- [[3, -3], [6, -5]]
+ [[-5, -3], [6, 3]]
! Swap the diagonal, negate the others.
? The determinant of [[7, 7], [-4, 4]] is
- 44.8
- 50.4
+ 56
- 61.6
! ad - bc.
? The adjoint of [[7, 7], [-4, 4]] is
- [[7, 7], [4, -4]]
+ [[4, -7], [4, 7]]
- [[7, -7], [4, 4]]
- [[4, 7], [-4, 7]]
! Swap the diagonal, negate the others.
? The determinant of [[1, 4], [-2, 8]] is
- 8
- 19.2
+ 16
- 24
! ad - bc.
? The adjoint of [[1, 4], [-2, 8]] is
- [[8, 4], [-2, 1]]
- [[1, -4], [2, 8]]
+ [[8, -4], [2, 1]]
- [[4, 1], [8, -2]]
! Swap the diagonal, negate the others.
? The determinant of [[5, 9], [-5, 3]] is
- 72
+ 60
- 54
- 30
! ad - bc.
? The adjoint of [[5, 9], [-5, 3]] is
+ [[3, -9], [5, 5]]
- [[3, 9], [-5, 5]]
- [[5, -9], [5, 3]]
- [[9, 5], [3, -5]]
! Swap the diagonal, negate the others.
? The determinant of [[6, -3], [3, 3]] is
- 13.5
- 40.5
+ 27
- 54
! ad - bc.
? The adjoint of [[6, -3], [3, 3]] is
+ [[3, 3], [-3, 6]]
- [[3, -3], [3, 6]]
- [[6, 3], [-3, 3]]
- [[-3, 6], [3, 3]]
! Swap the diagonal, negate the others.
? The determinant of [[3, -6], [2, 6]] is
- 36
+ 30
- 27
- 60
! ad - bc.
? The adjoint of [[3, -6], [2, 6]] is
- [[-6, 3], [6, 2]]
- [[3, 6], [-2, 6]]
- [[6, -6], [2, 3]]
+ [[6, 6], [-2, 3]]
! Swap the diagonal, negate the others.
? The determinant of [[4, 7], [2, 5]] is
+ 6
- 7.2
- 3
- 9
! ad - bc.
? The adjoint of [[4, 7], [2, 5]] is
- [[4, -7], [-2, 5]]
+ [[5, -7], [-2, 4]]
- [[7, 4], [5, 2]]
- [[5, 7], [2, 4]]
! Swap the diagonal, negate the others.
? The determinant of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
+ 6
- 4.8
- 3
- 7.2
! Expand along a row.
? The minor M11 of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
- -14.3
- -26
- -15.6
+ -13
! Delete row 1 and column 1.
? The cofactor C12 of [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
- 2.4
- 1.8
- 3
+ 2
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
- 96
+ 48
- 72
- 57.6
! 2^3 |A|.
? |adj A| for the matrix A = [[-2, 4, 4], [-2, 1, 4], [-1, 4, 3]] is
- 18
- 39.6
- 32.4
+ 36
! |A|^2.
? The determinant of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
- -81.4
- -148
- -59.2
+ -74
! Expand along a row.
? The minor M11 of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
+ -11
- -8.8
- -12.1
- -16.5
! Delete row 1 and column 1.
? The cofactor C12 of [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
+ 9
- 8.1
- 18
- 9.9
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
- -1184
- -888
- -296
+ -592
! 2^3 |A|.
? |adj A| for the matrix A = [[3, -1, 4], [4, 4, -1], [-1, -3, -2]] is
- 6023.6
- 6571.2
+ 5476
- 10952
! |A|^2.
? The determinant of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
- -3
- -1
- -1.6
+ -2
! Expand along a row.
? The minor M11 of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
- -4
- -3
+ -2
- -1.8
! Delete row 1 and column 1.
? The cofactor C12 of [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
- 3
- 2.4
- 2.2
+ 2
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
- -12.8
- -24
+ -16
- -14.4
! 2^3 |A|.
? |adj A| for the matrix A = [[5, 4, 0], [-1, -1, 0], [4, -3, 2]] is
+ 4
- 3.6
- 2
- 8
! |A|^2.
? The determinant of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
+ -51
- -45.9
- -25.5
- -56.1
! Expand along a row.
? The minor M11 of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
- -1.2
- -1.1
+ -1
- -1.5
! Delete row 1 and column 1.
? The cofactor C12 of [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
+ 8
- 6.4
- 12
- 8.8
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
+ -408
- -326.4
- -612
- -448.8
! 2^3 |A|.
? |adj A| for the matrix A = [[-1, -3, 4], [-1, -1, -1], [-3, 4, 5]] is
- 5202
+ 2601
- 1300.5
- 2080.8
! |A|^2.
? The determinant of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
- -10.8
- -24
- -9.6
+ -12
! Expand along a row.
? The minor M11 of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
- 20.4
+ 17
- 34
- 13.6
! Delete row 1 and column 1.
? The cofactor C12 of [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
- -6
- -10.8
+ -12
- -24
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
+ -96
- -105.6
- -192
- -48
! 2^3 |A|.
? |adj A| for the matrix A = [[-3, -3, -3], [2, 3, -2], [1, 1, 5]] is
- 72
- 158.4
- 129.6
+ 144
! |A|^2.
? The determinant of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
- 9.9
+ 11
- 16.5
- 22
! Expand along a row.
? The minor M11 of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
- 1.5
- 1.1
- 0.5
+ 1
! Delete row 1 and column 1.
? The cofactor C12 of [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
+ -2
- -1
- -1.6
- -2.2
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
- 44
- 176
+ 88
- 79.2
! 2^3 |A|.
? |adj A| for the matrix A = [[2, -3, 1], [2, 1, 0], [5, 4, 1]] is
- 133.1
- 145.2
- 60.5
+ 121
! |A|^2.
? The determinant of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
- 24.2
- 17.6
+ 22
- 44
! Expand along a row.
? The minor M11 of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
- 2.2
+ 2
- 1
- 1.6
! Delete row 1 and column 1.
? The cofactor C12 of [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
- -7.2
+ -9
- -18
- -13.5
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
+ 176
- 352
- 211.2
- 88
! 2^3 |A|.
? |adj A| for the matrix A = [[-2, -3, 1], [3, 1, -3], [1, 0, 2]] is
+ 484
- 726
- 532.4
- 387.2
! |A|^2.
? The determinant of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
+ 21
- 10.5
- 23.1
- 25.2
! Expand along a row.
? The minor M11 of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
- 6
- 8
+ 4
- 3.2
! Delete row 1 and column 1.
? The cofactor C12 of [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
- 7.7
- 8.4
+ 7
- 3.5
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
- 336
- 84
+ 168
- 134.4
! 2^3 |A|.
? |adj A| for the matrix A = [[1, 3, 2], [1, 0, 2], [4, -2, 1]] is
- 220.5
- 661.5
+ 441
- 352.8
! |A|^2.
? The determinant of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
+ 26
- 13
- 28.6
- 23.4
! Expand along a row.
? The minor M11 of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
+ 25
- 27.5
- 50
- 22.5
! Delete row 1 and column 1.
? The cofactor C12 of [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
- 20
- 8
- 12
+ 10
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
+ 208
- 104
- 312
- 416
! 2^3 |A|.
? |adj A| for the matrix A = [[0, 5, 4], [0, 3, 5], [2, -2, 5]] is
- 1014
+ 676
- 1352
- 811.2
! |A|^2.
? The minor M11 of [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
- -6.5
+ -13
- -10.4
- -19.5
! Delete row 1 and column 1.
? The cofactor C12 of [[1, 4, 5], [1, 4, 5], [5, 5, 3]] is
- 26.4
- 33
- 19.8
+ 22
! (-1)^(1+2) M12.
? The determinant of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
- -3.5
+ -7
- -5.6
- -14
! Expand along a row.
? The minor M11 of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
- 13.5
+ 9
- 8.1
- 9.9
! Delete row 1 and column 1.
? The cofactor C12 of [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
- -4.8
- -7.2
+ -6
- -5.4
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
+ -56
- -61.6
- -112
- -50.4
! 2^3 |A|.
? |adj A| for the matrix A = [[1, 1, -2], [-1, 1, 3], [-2, -3, 0]] is
- 44.1
- 39.2
- 53.9
+ 49
! |A|^2.
? The determinant of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
- 82
+ 41
- 20.5
- 36.9
! Expand along a row.
? The minor M11 of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
+ 13
- 15.6
- 6.5
- 19.5
! Delete row 1 and column 1.
? The cofactor C12 of [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
- 14.4
+ 12
- 18
- 24
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
- 262.4
- 295.2
+ 328
- 656
! 2^3 |A|.
? |adj A| for the matrix A = [[5, -2, 0], [-2, 3, -2], [-1, -1, 5]] is
- 1344.8
+ 1681
- 3362
- 2521.5
! |A|^2.
? The determinant of [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
+ -16
- -8
- -19.2
- -12.8
! Expand along a row.
? The cofactor C12 of [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
+ 16
- 17.6
- 12.8
- 8
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
- -256
+ -128
- -192
- -115.2
! 2^3 |A|.
? |adj A| for the matrix A = [[0, -1, 0], [-2, 0, 4], [2, 0, 4]] is
- 281.6
- 384
- 307.2
+ 256
! |A|^2.
? The determinant of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
- -18
- -13.2
- -24
+ -12
! Expand along a row.
? The minor M11 of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
- -14.4
- -18
- -24
+ -12
! Delete row 1 and column 1.
? The cofactor C12 of [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
+ 3
- 1.5
- 3.6
- 3.3
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
+ -96
- -192
- -144
- -76.8
! 2^3 |A|.
? |adj A| for the matrix A = [[-3, -1, 3], [-3, 3, 3], [0, 5, 1]] is
+ 144
- 158.4
- 172.8
- 115.2
! |A|^2.
? The determinant of [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
- 64
- 48
- 25.6
+ 32
! Expand along a row.
? The minor M11 of [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
+ 4
- 4.4
- 6
- 4.8
! Delete row 1 and column 1.
? |2A| for the matrix A = [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
+ 256
- 281.6
- 230.4
- 128
! 2^3 |A|.
? |adj A| for the matrix A = [[0, 0, 4], [4, 1, -2], [0, 2, 0]] is
- 1228.8
+ 1024
- 819.2
- 1536
! |A|^2.
? The determinant of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
- 20.4
- 15.3
+ 17
- 8.5
! Expand along a row.
? The minor M11 of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
- -18.4
+ -23
- -20.7
- -25.3
! Delete row 1 and column 1.
? The cofactor C12 of [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
- 6.3
+ 7
- 8.4
- 7.7
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
+ 136
- 68
- 163.2
- 204
! 2^3 |A|.
? |adj A| for the matrix A = [[-1, 0, -1], [1, -1, 5], [2, 4, 3]] is
- 144.5
+ 289
- 433.5
- 231.2
! |A|^2.
? The determinant of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
+ -5
- -5.5
- -4.5
- -2.5
! Expand along a row.
? The minor M11 of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
+ -5
- -5.5
- -4.5
- -2.5
! Delete row 1 and column 1.
? The cofactor C12 of [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
+ 5
- 10
- 7.5
- 6
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
+ -40
- -32
- -48
- -60
! 2^3 |A|.
? |adj A| for the matrix A = [[2, 5, 4], [-2, -3, -1], [-1, 1, 2]] is
- 27.5
- 37.5
+ 25
- 12.5
! |A|^2.
? The determinant of [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
+ -6
- -3
- -6.6
- -4.8
! Expand along a row.
? The minor M11 of [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
- 1.8
- 1
- 4
+ 2
! Delete row 1 and column 1.
? |2A| for the matrix A = [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
+ -48
- -38.4
- -24
- -43.2
! 2^3 |A|.
? |adj A| for the matrix A = [[2, 2, 5], [1, -1, 1], [1, -3, 1]] is
- 32.4
- 43.2
+ 36
- 18
! |A|^2.
? The determinant of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
- -54
- -40.5
+ -27
- -21.6
! Expand along a row.
? The minor M11 of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
- 22.5
- 18
- 12
+ 15
! Delete row 1 and column 1.
? The cofactor C12 of [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
- 24
+ 30
- 27
- 36
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
+ -216
- -259.2
- -237.6
- -324
! 2^3 |A|.
? |adj A| for the matrix A = [[-3, 1, 1], [-2, 3, 5], [4, 0, 5]] is
+ 729
- 801.9
- 1458
- 874.8
! |A|^2.
? The determinant of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
- -39.5
- -94.8
+ -79
- -158
! Expand along a row.
? The minor M11 of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
- -40
- -22
+ -20
- -16
! Delete row 1 and column 1.
? The cofactor C12 of [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
+ -23
- -25.3
- -27.6
- -46
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
+ -632
- -568.8
- -695.2
- -758.4
! 2^3 |A|.
? |adj A| for the matrix A = [[-3, 5, -3], [2, 0, 5], [-3, 4, 4]] is
+ 6241
- 6865.1
- 7489.2
- 5616.9
! |A|^2.
? The determinant of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
- 129
- 94.6
- 103.2
+ 86
! Expand along a row.
? The minor M11 of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
- 19.8
+ 22
- 24.2
- 11
! Delete row 1 and column 1.
? The cofactor C12 of [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
+ 4
- 8
- 3.2
- 2
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
- 756.8
- 619.2
- 825.6
+ 688
! 2^3 |A|.
? |adj A| for the matrix A = [[4, -3, 5], [-1, 4, 3], [0, -2, 4]] is
- 11094
+ 7396
- 5916.8
- 8135.6
! |A|^2.
? The determinant of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
- -48
- -36
- -12
+ -24
! Expand along a row.
? The minor M11 of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
- -4
+ -2
- -3
- -1.8
! Delete row 1 and column 1.
? The cofactor C12 of [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
- 4.4
+ 4
- 2
- 8
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
- -288
- -384
+ -192
- -230.4
! 2^3 |A|.
? |adj A| for the matrix A = [[2, -3, 2], [0, -2, -2], [-2, -3, -2]] is
+ 576
- 1152
- 518.4
- 691.2
! |A|^2.
? The determinant of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
- 4.8
- 2
+ 4
- 3.2
! Expand along a row.
? The minor M11 of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
- -3.6
- -6
- -4.8
+ -4
! Delete row 1 and column 1.
? The cofactor C12 of [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
- -6
- -13.2
- -24
+ -12
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
- 38.4
- 35.2
- 64
+ 32
! 2^3 |A|.
? |adj A| for the matrix A = [[-2, 0, 1], [3, -1, 0], [2, -2, 4]] is
- 17.6
- 24
+ 16
- 19.2
! |A|^2.
? The determinant of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
- -23
+ -46
- -92
- -69
! Expand along a row.
? The minor M11 of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
+ -2
- -1.6
- -2.4
- -1.8
! Delete row 1 and column 1.
? The cofactor C12 of [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
- -20.8
- -31.2
- -13
+ -26
! (-1)^(1+2) M12.
? |2A| for the matrix A = [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
- -184
- -404.8
- -441.6
+ -368
! 2^3 |A|.
? |adj A| for the matrix A = [[-1, 0, -3], [5, -1, -1], [1, 3, 5]] is
- 3174
- 1692.8
- 1058
+ 2116
! |A|^2.
? Area of the triangle with vertices (0, 0), (4, 0), (0, 3) in square units
- 12
- 7.2
+ 6
- 5.4
! (1/2)|det|.
? Area of the triangle with vertices (1, 1), (5, 1), (1, 7) in square units
- 10.8
+ 12
- 18
- 13.2
! (1/2)|det|.
? Area of the triangle with vertices (2, 3), (6, 3), (2, 9) in square units
+ 12
- 9.6
- 24
- 14.4
! (1/2)|det|.
? Area of the triangle with vertices (0, 0), (6, 0), (3, 4) in square units
+ 12
- 24
- 13.2
- 9.6
! (1/2)|det|.
? Area of the triangle with vertices (1, 2), (4, 6), (7, 2) in square units
- 6
- 14.4
+ 12
- 13.2
! (1/2)|det|.
? Area of the triangle with vertices (-2, 1), (2, 1), (0, 5) in square units
- 16
- 8.8
- 6.4
+ 8
! (1/2)|det|.
? Area of the triangle with vertices (3, 0), (0, 4), (0, 0) in square units
- 6.6
- 4.8
+ 6
- 9
! (1/2)|det|.
? Area of the triangle with vertices (0, 2), (0, 8), (5, 5) in square units
+ 15
- 30
- 13.5
- 22.5
! (1/2)|det|.
? Area of the triangle with vertices (-1, -1), (3, -1), (1, 3) in square units
- 12
+ 8
- 4
- 8.8
! (1/2)|det|.
? A 3 x 3 matrix has determinant 2. |2A| is
- 24
- 17.6
+ 16
- 14.4
! k^3 |A|.
? A 2 x 2 matrix has determinant 3. |2A| is
- 13.2
- 18
+ 12
- 10.8
! k^2 |A|.
? A 3 x 3 matrix has determinant 2. |3A| is
+ 54
- 108
- 81
- 59.4
! k^3 |A|.
? A 2 x 2 matrix has determinant 3. |3A| is
- 29.7
+ 27
- 40.5
- 24.3
! k^2 |A|.
? A 3 x 3 matrix has determinant 2. |4A| is
- 115.2
- 64
+ 128
- 192
! k^3 |A|.
? A 2 x 2 matrix has determinant 3. |4A| is
- 57.6
- 43.2
+ 48
- 24
! k^2 |A|.
? A 3 x 3 matrix has determinant 2. |5A| is
+ 250
- 300
- 125
- 225
! k^3 |A|.
? A 2 x 2 matrix has determinant 3. |5A| is
+ 75
- 112.5
- 37.5
- 82.5
! k^2 |A|.
? A 3 x 3 matrix has determinant 2. |6A| is
- 388.8
- 345.6
+ 432
- 864
! k^3 |A|.
? A 2 x 2 matrix has determinant 3. |6A| is
+ 108
- 118.8
- 86.4
- 129.6
! k^2 |A|.
? The determinant of a matrix with two identical rows is
+ 0
- -1
- 1
- undefined
! Property.
? A singular matrix has determinant
- -1
- 1
+ 0
- any non-zero
! Definition.
? |A^T| equals
- -|A|
- 0
- 1/|A|
+ |A|
! Property.
? Inverse of a 2 x 2 matrix with |A| = 2 has factor
- -2
- 2
- 0
+ 1/2
! 1/|A|.
? A(adj A) equals
- A
- 0
+ |A| I
- I
! Identity.
? Swapping two rows multiplies the determinant by
- 2
- 0
- 1
+ -1
! Property.
? What is the determinant of a 2 x 2 matrix [[a, b], [c, d]]?
- Zero
- k^n |A|
- 1/|A|
+ ad - bc
! Answer: ad - bc.
? What is the formula for the inverse?
- The transpose of its cofactor matrix
- k^n |A|
+ A^-1 = adj A / |A|
- 1
! Answer: A^-1 = adj A / |A|.
? What is the adjoint of a matrix?
+ The transpose of its cofactor matrix
- k^n |A|
- ad - bc
- 1/|A|
! Answer: The transpose of its cofactor matrix.
? What is a minor?
- The transpose of its cofactor matrix
- (-1)^(i + j) times the minor
- The product of its diagonal entries
+ The determinant left after deleting a row and a column
! Answer: The determinant left after deleting a row and a column.
? What is a cofactor?
- The determinant left after deleting a row and a column
- B^-1 A^-1
- |A|^2
+ (-1)^(i + j) times the minor
! Answer: (-1)^(i + j) times the minor.
? What is the determinant if two rows are identical?
- ad - bc
- k^n |A|
- 1/|A|
+ Zero
! Answer: Zero.
? What is |kA| for an n x n matrix?
- The product of its diagonal entries
- (-1)^(i + j) times the minor
+ k^n |A|
- |A||B|
! Answer: k^n |A|.
? What is |AB|?
- k^n |A|
- B^-1 A^-1
+ |A||B|
- 1
! Answer: |A||B|.
? What is |A^-1|?
- 1
+ 1/|A|
- ad - bc
- A^-1 = adj A / |A|
! Answer: 1/|A|.
? What is |adj A| for a 3 x 3 matrix?
+ |A|^2
- Zero
- The transpose of its cofactor matrix
- B^-1 A^-1
! Answer: |A|^2.
? What is (AB)^-1?
- A^-1 = adj A / |A|
+ B^-1 A^-1
- ad - bc
- k^n |A|
! Answer: B^-1 A^-1.
? What is the determinant of the identity matrix?
+ 1
- |A||B|
- ad - bc
- A^-1 = adj A / |A|
! Answer: 1.
? What is the determinant of a triangular matrix?
+ The product of its diagonal entries
- The determinant left after deleting a row and a column
- ad - bc
- k^n |A|
! Answer: The product of its diagonal entries.
? Find the adjoint of [[4, -6], [2, -2]].
+ [[-2, 6], [-2, 4]]
- (1/-8) x [[2, 0], [-8, -4]]
- (1/-1) x [[-5, -2], [2, 1]]
- (1/-6) x [[3, -1], [3, -3]]
! Answer: [[-2, 6], [-2, 4]].
? Find the inverse of [[4, -6], [2, -2]].
- (1/-26) x [[-2, -8], [-1, 9]]
- (1/6) x [[5, -7], [-2, 4]]
- (1/27) x [[5, 6], [-2, 3]]
+ (1/4) x [[-2, 6], [-2, 4]]
! Answer: (1/4) x [[-2, 6], [-2, 4]].
? Find the adjoint of [[0, 2], [-4, 0]].
- [[0, -3], [3, 5]]
- (1/18) x [[9, -4], [-9, 6]]
- [[5, 0], [6, -5]]
+ [[0, -2], [4, 0]]
! Answer: [[0, -2], [4, 0]].
? Find the inverse of [[0, 2], [-4, 0]].
+ (1/8) x [[0, -2], [4, 0]]
- [[2, 0], [-8, -4]]
- [[8, -7], [0, -6]]
- (1/3) x [[-5, -3], [6, 3]]
! Answer: (1/8) x [[0, -2], [4, 0]].
? Find the adjoint of [[-5, 0], [-6, 5]].
- [[8, 0], [1, 3]]
+ [[5, 0], [6, -5]]
- (1/10) x [[3, -7], [-2, 8]]
- (1/4) x [[-2, 6], [-2, 4]]
! Answer: [[5, 0], [6, -5]].
? Find the inverse of [[-5, 0], [-6, 5]].
- [[-2, 6], [-2, 4]]
+ (1/-25) x [[5, 0], [6, -5]]
- [[4, -7], [4, 7]]
- [[5, 6], [-2, 3]]
! Answer: (1/-25) x [[5, 0], [6, -5]].
? Find the adjoint of [[8, -2], [5, -1]].
- (1/-35) x [[-3, -4], [-2, 9]]
+ [[-1, 2], [-5, 8]]
- [[8, 0], [1, 3]]
- (1/-48) x [[8, -7], [0, -6]]
! Answer: [[-1, 2], [-5, 8]].
? Find the inverse of [[8, -2], [5, -1]].
- [[0, -2], [4, 0]]
- [[8, 0], [1, 3]]
+ (1/2) x [[-1, 2], [-5, 8]]
- [[8, -4], [2, 1]]
! Answer: (1/2) x [[-1, 2], [-5, 8]].
? The determinant of [[-5, 5], [-6, 6]] is
+ 0
- -16
- -48
- -26
! Answer: 0.
? Find the adjoint of [[0, -2], [4, 7]].
- (1/36) x [[-4, -6], [6, 0]]
- [[1, 3], [6, 8]]
- (1/24) x [[8, 0], [1, 3]]
+ [[7, 2], [-4, 0]]
! Answer: [[7, 2], [-4, 0]].
? Find the inverse of [[0, -2], [4, 7]].
- [[3, -9], [5, 5]]
- (1/16) x [[8, -4], [2, 1]]
- (1/3) x [[-5, -3], [6, 3]]
+ (1/8) x [[7, 2], [-4, 0]]
! Answer: (1/8) x [[7, 2], [-4, 0]].
? Find the adjoint of [[8, -3], [-6, 1]].
+ [[1, 3], [6, 8]]
- [[-2, -8], [-1, 9]]
- (1/36) x [[-4, -6], [6, 0]]
- (1/-8) x [[5, 2], [-1, -2]]
! Answer: [[1, 3], [6, 8]].
? Find the inverse of [[8, -3], [-6, 1]].
- (1/-6) x [[3, -1], [3, -3]]
- [[2, 0], [-8, -4]]
- [[5, 6], [-2, 3]]
+ (1/-10) x [[1, 3], [6, 8]]
! Answer: (1/-10) x [[1, 3], [6, 8]].
? Find the adjoint of [[-2, -2], [1, 5]].
- [[6, 6], [-2, 3]]
+ [[5, 2], [-1, -2]]
- (1/-8) x [[2, 0], [-8, -4]]
- [[8, -7], [0, -6]]
! Answer: [[5, 2], [-1, -2]].
? Find the inverse of [[-2, -2], [1, 5]].
- [[-1, 2], [-5, 8]]
+ (1/-8) x [[5, 2], [-1, -2]]
- [[3, -9], [-4, 1]]
- [[8, -4], [2, 1]]
! Answer: (1/-8) x [[5, 2], [-1, -2]].
? Find the adjoint of [[3, -6], [2, 5]].
- (1/16) x [[8, -4], [2, 1]]
- (1/-8) x [[5, 2], [-1, -2]]
+ [[5, 6], [-2, 3]]
- [[5, -7], [-2, 4]]
! Answer: [[5, 6], [-2, 3]].
? Find the inverse of [[3, -6], [2, 5]].
- [[3, -1], [3, -3]]
+ (1/27) x [[5, 6], [-2, 3]]
- [[8, -4], [2, 1]]
- [[-1, 2], [-5, 8]]
! Answer: (1/27) x [[5, 6], [-2, 3]].
? Find the adjoint of [[0, 6], [-6, -4]].
- (1/9) x [[0, -3], [3, 5]]
+ [[-4, -6], [6, 0]]
- (1/4) x [[-2, 6], [-2, 4]]
- [[0, 6], [5, 2]]
! Answer: [[-4, -6], [6, 0]].
? Find the inverse of [[0, 6], [-6, -4]].
- [[9, -4], [-9, 6]]
- [[8, 0], [1, 3]]
- (1/6) x [[5, -7], [-2, 4]]
+ (1/36) x [[-4, -6], [6, 0]]
! Answer: (1/36) x [[-4, -6], [6, 0]].
? Find the adjoint of [[-3, 1], [-3, 3]].
+ [[3, -1], [3, -3]]
- (1/36) x [[-4, -6], [6, 0]]
- (1/-48) x [[8, -7], [0, -6]]
- (1/-35) x [[-3, -4], [-2, 9]]
! Answer: [[3, -1], [3, -3]].
? Find the inverse of [[-3, 1], [-3, 3]].
- (1/-1) x [[-5, -2], [2, 1]]
- [[0, 6], [5, 2]]
+ (1/-6) x [[3, -1], [3, -3]]
- [[-3, -4], [-2, 9]]
! Answer: (1/-6) x [[3, -1], [3, -3]].
? Find the adjoint of [[-2, 7], [9, 9]].
+ [[9, -7], [-9, -2]]
- (1/-35) x [[-3, -4], [-2, 9]]
- [[0, -2], [4, 0]]
- [[9, -4], [-9, 6]]
! Answer: [[9, -7], [-9, -2]].
? Find the inverse of [[-2, 7], [9, 9]].
- (1/8) x [[0, -2], [4, 0]]
+ (1/-81) x [[9, -7], [-9, -2]]
- [[-5, -3], [6, 3]]
- (1/-48) x [[8, -7], [0, -6]]
! Answer: (1/-81) x [[9, -7], [-9, -2]].
? Find the adjoint of [[5, 3], [-3, 0]].
- [[3, -1], [3, -3]]
+ [[0, -3], [3, 5]]
- (1/-48) x [[8, -7], [0, -6]]
- (1/-25) x [[5, 0], [6, -5]]
! Answer: [[0, -3], [3, 5]].
? Find the inverse of [[5, 3], [-3, 0]].
- (1/8) x [[0, -2], [4, 0]]
- (1/-6) x [[3, -1], [3, -3]]
- (1/-26) x [[-2, -8], [-1, 9]]
+ (1/9) x [[0, -3], [3, 5]]
! Answer: (1/9) x [[0, -3], [3, 5]].
? Find the adjoint of [[3, 0], [-1, 8]].
- [[7, 2], [-4, 0]]
- [[5, 2], [-1, -2]]
+ [[8, 0], [1, 3]]
- (1/56) x [[4, -7], [4, 7]]
! Answer: [[8, 0], [1, 3]].
? Find the inverse of [[3, 0], [-1, 8]].
- [[2, 0], [-8, -4]]
- (1/4) x [[-2, 6], [-2, 4]]
+ (1/24) x [[8, 0], [1, 3]]
- [[-3, -4], [-2, 9]]
! Answer: (1/24) x [[8, 0], [1, 3]].
? Find the adjoint of [[9, 4], [2, -3]].
- (1/8) x [[0, -2], [4, 0]]
+ [[-3, -4], [-2, 9]]
- (1/6) x [[5, -7], [-2, 4]]
- (1/-6) x [[3, -1], [3, -3]]
! Answer: [[-3, -4], [-2, 9]].
? Find the inverse of [[9, 4], [2, -3]].
- [[8, -7], [0, -6]]
+ (1/-35) x [[-3, -4], [-2, 9]]
- [[-1, 2], [-5, 8]]
- [[9, -4], [-9, 6]]
! Answer: (1/-35) x [[-3, -4], [-2, 9]].
? Find the adjoint of [[2, -6], [-5, 0]].
+ [[0, 6], [5, 2]]
- (1/2) x [[-1, 2], [-5, 8]]
- [[-4, -6], [6, 0]]
- [[2, 0], [-8, -4]]
! Answer: [[0, 6], [5, 2]].
? Find the inverse of [[2, -6], [-5, 0]].
- (1/18) x [[9, -4], [-9, 6]]
- (1/56) x [[4, -7], [4, 7]]
- (1/24) x [[8, 0], [1, 3]]
+ (1/-30) x [[0, 6], [5, 2]]
! Answer: (1/-30) x [[0, 6], [5, 2]].
@visual
formula | Determinants and inverse of a matrix | key formula
@problems
P: Find the determinant of [[2, 3], [1, 4]].
A: 5.
R: 1 | 2 x 4 - 3 x 1
R: 1 | 5

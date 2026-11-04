# Introduction to NumPy
minutes: 40
yt: class 11 informatics practices numpy array python
@study
NumPy (Numerical Python) is a library for fast numerical computing with arrays, imported as import numpy as np. A NumPy array (ndarray) is a grid of values of the same type, indexed by non-negative integers. Arrays are faster and use less memory than lists and support vectorised operations without loops. Creation: np.array([1,2,3]), np.zeros(shape), np.ones(shape), np.arange(start, stop, step), np.linspace(start, stop, num), np.full(shape, value), np.eye(n) and np.random.random(). Attributes: ndim (number of dimensions), shape (rows, columns), size (total elements), dtype (data type) and itemsize. Arrays can be one-dimensional (a vector), two-dimensional (a matrix) or higher. Indexing and slicing work like lists: a[1:4], and a[1,2] or a[1][2] for 2D. Boolean indexing selects elements by a condition, such as a[a>5]. Operations are element-wise: +, -, *, / and ** work between arrays of the same shape, and a scalar is broadcast across the array. Functions: sum, mean, median, max, min, std, var, sqrt, sin and dot. Aggregations accept an axis argument: axis=0 works down columns, axis=1 across rows. reshape() changes shape without changing data, and flatten()/ravel() make 1D arrays. Joining uses concatenate, vstack and hstack, and splitting uses split. Sorting uses np.sort and argsort. Arrays can be read from text files using loadtxt and genfromtxt and saved with savetxt. The astype() method changes dtype, and arrays of different shapes can broadcast if dimensions are compatible.
## Deep dive: Arrays
All elements share one dtype, so mixed input is converted. shape gives a tuple, for example (3, 4). arange excludes stop; linspace includes both ends. zeros and ones take a shape tuple.
## Deep dive: Operations
Arithmetic is element-wise, so a * b is not matrix multiplication; use dot or matmul. Statistical functions with axis give row-wise or column-wise results. Boolean masks filter data.
## Deep dive: Manipulation and files
reshape needs the same number of elements. vstack stacks arrays vertically; hstack stacks horizontally. loadtxt reads numbers from a file. Arrays work well with data science libraries.
## Hindi saransh
NumPy array same type ke elementon ka fast grid hai; operations element-wise hote hain.
> Remember: a * b is element-wise, not matrix multiplication.
@formulas
## Key facts
np.array | Create | ndarray
shape | (rows, cols) | Tuple
arange | Stop excluded | Range
linspace | Both ends | Points
axis | 0 = down, 1 = across | Aggregation

@qa
Q: Which is a library for numerical computing in Python?
A: NumPy is a library for numerical computing in Python.
Q: What do you know about NumPy?
A: NumPy is a library for numerical computing in Python.
Q: Which is the usual name used when importing NumPy?
A: Alias np is the usual name used when importing NumPy.
Q: What do you know about Alias np?
A: Alias np is the usual name used when importing NumPy.
Q: Which is the NumPy array object?
A: ndarray is the NumPy array object.
Q: What do you know about ndarray?
A: Ndarray is the NumPy array object.
Q: Which stores elements of the same type?
A: Array stores elements of the same type.
Q: What do you know about Array?
A: Array stores elements of the same type.
Q: Which applies operations without explicit loops?
A: Vectorisation applies operations without explicit loops.
Q: What do you know about Vectorisation?
A: Vectorisation applies operations without explicit loops.
Q: Which is a main advantage of NumPy over lists?
A: Speed is a main advantage of NumPy over lists.
Q: What do you know about Speed?
A: Speed is a main advantage of NumPy over lists.
Q: Which use is lower for arrays than lists?
A: Memory use is lower for arrays than lists.
Q: What do you know about Memory?
A: Memory use is lower for arrays than lists.
Q: Which creates an array from a list?
A: array function creates an array from a list.
Q: What do you know about array function?
A: Array function creates an array from a list.
Q: Which creates an array of zeros?
A: zeros function creates an array of zeros.
Q: What do you know about zeros function?
A: Zeros function creates an array of zeros.
Q: Which creates an array of ones?
A: ones function creates an array of ones.
Q: What do you know about ones function?
A: Ones function creates an array of ones.
Q: Which creates an array filled with a value?
A: full function creates an array filled with a value.
Q: What do you know about full function?
A: Full function creates an array filled with a value.
Q: Which creates a range of values with a step?
A: arange function creates a range of values with a step.
Q: What do you know about arange function?
A: Arange function creates a range of values with a step.
Q: Which creates evenly spaced numbers including the end?
A: linspace function creates evenly spaced numbers including the end.
Q: What do you know about linspace function?
A: Linspace function creates evenly spaced numbers including the end.
Q: Which creates an identity matrix?
A: eye function creates an identity matrix.
Q: What do you know about eye function?
A: Eye function creates an identity matrix.
Q: Which creates random numbers?
A: random function creates random numbers.
Q: What do you know about random function?
A: Random function creates random numbers.
Q: Which gives the number of dimensions?
A: ndim attribute gives the number of dimensions.
Q: What do you know about ndim attribute?
A: Ndim attribute gives the number of dimensions.
Q: Which gives the size along each dimension?
A: shape attribute gives the size along each dimension.
Q: What do you know about shape attribute?
A: Shape attribute gives the size along each dimension.
Q: Which gives the total number of elements?
A: size attribute gives the total number of elements.
Q: What do you know about size attribute?
A: Size attribute gives the total number of elements.
Q: Which gives the data type of elements?
A: dtype attribute gives the data type of elements.
Q: What do you know about dtype attribute?
A: Dtype attribute gives the data type of elements.
Q: Which gives bytes per element?
A: itemsize attribute gives bytes per element.
Q: What do you know about itemsize attribute?
A: Itemsize attribute gives bytes per element.
Q: Which is a vector?
A: One-dimensional array is a vector.
Q: What do you know about One-dimensional array?
A: One-dimensional array is a vector.
Q: Which is a matrix?
A: Two-dimensional array is a matrix.
Q: What do you know about Two-dimensional array?
A: Two-dimensional array is a matrix.
Q: Which selects elements by position?
A: Indexing selects elements by position.
Q: What do you know about Indexing?
A: Indexing selects elements by position.
Q: Which selects a range of elements?
A: Slicing selects a range of elements.
Q: What do you know about Slicing?
A: Slicing selects a range of elements.
Q: Which selects elements by condition?
A: Boolean indexing selects elements by condition.
Q: What do you know about Boolean indexing?
A: Boolean indexing selects elements by condition.
Q: Which means operation on each pair of elements?
A: Element-wise means operation on each pair of elements.
Q: What do you know about Element-wise?
A: Element-wise means operation on each pair of elements.
Q: Which stretches a smaller array to match a larger one?
A: Broadcasting stretches a smaller array to match a larger one.
Q: What do you know about Broadcasting?
A: Broadcasting stretches a smaller array to match a larger one.
Q: Which adds all elements?
A: sum function adds all elements.
Q: What do you know about sum function?
A: Sum function adds all elements.
Q: Which gives the average?
A: mean function gives the average.
Q: What do you know about mean function?
A: Mean function gives the average.
Q: Which gives the middle value?
A: median function gives the middle value.
Q: What do you know about median function?
A: Median function gives the middle value.
Q: Which gives the standard deviation?
A: std function gives the standard deviation.
Q: What do you know about std function?
A: Std function gives the standard deviation.
Q: Which gives the variance?
A: var function gives the variance.
Q: What do you know about var function?
A: Var function gives the variance.
Q: Which gives the largest value?
A: max function gives the largest value.
Q: What do you know about max function?
A: Max function gives the largest value.
Q: Which gives the smallest value?
A: min function gives the smallest value.
Q: What do you know about min function?
A: Min function gives the smallest value.
Q: Which gives square roots?
A: sqrt function gives square roots.
Q: What do you know about sqrt function?
A: Sqrt function gives square roots.
Q: Which gives the dot product?
A: dot function gives the dot product.
Q: What do you know about dot function?
A: Dot function gives the dot product.
Q: Which works down the columns?
A: axis zero works down the columns.
Q: What do you know about axis zero?
A: Axis zero works down the columns.
Q: Which works across the rows?
A: axis one works across the rows.
Q: What do you know about axis one?
A: Axis one works across the rows.
Q: Which changes the shape of an array?
A: reshape function changes the shape of an array.
Q: What do you know about reshape function?
A: Reshape function changes the shape of an array.
Q: Which returns a one-dimensional copy?
A: flatten method returns a one-dimensional copy.
Q: What do you know about flatten method?
A: Flatten method returns a one-dimensional copy.
Q: Which joins arrays along an axis?
A: concatenate function joins arrays along an axis.
Q: What do you know about concatenate function?
A: Concatenate function joins arrays along an axis.
Q: Which stacks arrays vertically?
A: vstack function stacks arrays vertically.
Q: What do you know about vstack function?
A: Vstack function stacks arrays vertically.
Q: Which stacks arrays horizontally?
A: hstack function stacks arrays horizontally.
Q: What do you know about hstack function?
A: Hstack function stacks arrays horizontally.
Q: Which divides an array into parts?
A: split function divides an array into parts.
Q: What do you know about split function?
A: Split function divides an array into parts.
Q: Which sorts an array?
A: sort function sorts an array.
Q: What do you know about sort function?
A: Sort function sorts an array.
Q: Which returns indices that sort an array?
A: argsort function returns indices that sort an array.
Q: What do you know about argsort function?
A: Argsort function returns indices that sort an array.
Q: Which reads an array from a text file?
A: loadtxt function reads an array from a text file.
Q: What do you know about loadtxt function?
A: Loadtxt function reads an array from a text file.
Q: Which writes an array to a text file?
A: savetxt function writes an array to a text file.
Q: What do you know about savetxt function?
A: Savetxt function writes an array to a text file.
Q: Which changes the data type of an array?
A: astype method changes the data type of an array.
Q: What do you know about astype method?
A: Astype method changes the data type of an array.
Q: Which describes elements of the same type?
A: Homogeneous describes elements of the same type.
Q: What do you know about Homogeneous?
A: Homogeneous describes elements of the same type.
Q: Which is done with dot or matmul?
A: Matrix multiplication is done with dot or matmul.
Q: What do you know about Matrix multiplication?
A: Matrix multiplication is done with dot or matmul.
Q: Which swaps rows and columns using T?
A: Transpose swaps rows and columns using T.
Q: What do you know about Transpose?
A: Transpose swaps rows and columns using T.
Q: What does NumPy stand for?
A: Numerical Python.
Q: How do we import NumPy?
A: import numpy as np.
Q: What does shape give?
A: The size of each dimension.
Q: What is the difference between arange and linspace?
A: arange uses a step and excludes stop; linspace gives a number of points including both ends.
Q: What does axis=0 mean?
A: Operation down the columns.
Q: What does reshape do?
A: Changes the shape without changing data.
Q: Is a * b a matrix product?
A: No, it is element-wise.
Q: What is broadcasting?
A: Stretching a smaller array to match a larger one.
@quiz
? Which is a library for numerical computing in Python?
- split function
+ NumPy
- Vectorisation
- Transpose
! NumPy is a library for numerical computing in Python.
? Which statement is true of NumPy?
+ Is a library for numerical computing in Python
- Gives the average
- Works across the rows
- Gives the dot product
! NumPy is a library for numerical computing in Python.
? Which is the usual name used when importing NumPy?
- split function
+ Alias np
- full function
- shape attribute
! Alias np is the usual name used when importing NumPy.
? Which statement is true of Alias np?
+ Is the usual name used when importing NumPy
- Gives the size along each dimension
- Selects elements by position
- Stores elements of the same type
! Alias np is the usual name used when importing NumPy.
? Which is the NumPy array object?
+ ndarray
- max function
- Homogeneous
- Alias np
! Ndarray is the NumPy array object.
? Which statement is true of ndarray?
+ Is the NumPy array object
- Creates an array from a list
- Use is lower for arrays than lists
- Describes elements of the same type
! Ndarray is the NumPy array object.
? Which stores elements of the same type?
- Broadcasting
- sort function
- ones function
+ Array
! Array stores elements of the same type.
? Which statement is true of Array?
+ Stores elements of the same type
- Stacks arrays horizontally
- Sorts an array
- Describes elements of the same type
! Array stores elements of the same type.
? Which applies operations without explicit loops?
- Two-dimensional array
- std function
- astype method
+ Vectorisation
! Vectorisation applies operations without explicit loops.
? Which statement is true of Vectorisation?
- Swaps rows and columns using T
- Adds all elements
- Changes the shape of an array
+ Applies operations without explicit loops
! Vectorisation applies operations without explicit loops.
? Which is a main advantage of NumPy over lists?
- Boolean indexing
- max function
+ Speed
- dot function
! Speed is a main advantage of NumPy over lists.
? Which statement is true of Speed?
- Is a library for numerical computing in Python
- Selects a range of elements
+ Is a main advantage of NumPy over lists
- Gives the largest value
! Speed is a main advantage of NumPy over lists.
? Which use is lower for arrays than lists?
- size attribute
+ Memory
- astype method
- savetxt function
! Memory use is lower for arrays than lists.
? Which statement is true of Memory?
- Is done with dot or matmul
- Gives the smallest value
+ Use is lower for arrays than lists
- Gives the dot product
! Memory use is lower for arrays than lists.
? Which creates an array from a list?
- zeros function
- dtype attribute
+ array function
- Slicing
! Array function creates an array from a list.
? Which statement is true of array function?
- Gives the size along each dimension
+ Creates an array from a list
- Use is lower for arrays than lists
- Creates random numbers
! Array function creates an array from a list.
? Which creates an array of zeros?
- Memory
+ zeros function
- ndarray
- Array
! Zeros function creates an array of zeros.
? Which statement is true of zeros function?
- Stacks arrays horizontally
- Divides an array into parts
- Adds all elements
+ Creates an array of zeros
! Zeros function creates an array of zeros.
? Which creates an array of ones?
+ ones function
- axis zero
- hstack function
- vstack function
! Ones function creates an array of ones.
? Which statement is true of ones function?
+ Creates an array of ones
- Gives the number of dimensions
- Gives square roots
- Creates an identity matrix
! Ones function creates an array of ones.
? Which creates an array filled with a value?
- Slicing
- Transpose
+ full function
- linspace function
! Full function creates an array filled with a value.
? Which statement is true of full function?
- Creates a range of values with a step
- Is a library for numerical computing in Python
- Works down the columns
+ Creates an array filled with a value
! Full function creates an array filled with a value.
? Which creates a range of values with a step?
- Transpose
- var function
- split function
+ arange function
! Arange function creates a range of values with a step.
? Which statement is true of arange function?
- Is a vector
- Creates random numbers
+ Creates a range of values with a step
- Gives the smallest value
! Arange function creates a range of values with a step.
? Which creates evenly spaced numbers including the end?
- Broadcasting
+ linspace function
- dtype attribute
- argsort function
! Linspace function creates evenly spaced numbers including the end.
? Which statement is true of linspace function?
- Reads an array from a text file
+ Creates evenly spaced numbers including the end
- Is done with dot or matmul
- Sorts an array
! Linspace function creates evenly spaced numbers including the end.
? Which creates an identity matrix?
- axis zero
- max function
- min function
+ eye function
! Eye function creates an identity matrix.
? Which statement is true of eye function?
- Gives square roots
+ Creates an identity matrix
- Creates random numbers
- Creates an array filled with a value
! Eye function creates an identity matrix.
? Which creates random numbers?
- Indexing
- Vectorisation
- NumPy
+ random function
! Random function creates random numbers.
? Which statement is true of random function?
- Sorts an array
- Gives bytes per element
+ Creates random numbers
- Gives square roots
! Random function creates random numbers.
? Which gives the number of dimensions?
- dot function
- Transpose
+ ndim attribute
- Broadcasting
! Ndim attribute gives the number of dimensions.
? Which statement is true of ndim attribute?
+ Gives the number of dimensions
- Gives the total number of elements
- Creates an identity matrix
- Gives the data type of elements
! Ndim attribute gives the number of dimensions.
? Which gives the size along each dimension?
+ shape attribute
- ndarray
- Two-dimensional array
- concatenate function
! Shape attribute gives the size along each dimension.
? Which statement is true of shape attribute?
- Changes the shape of an array
- Gives the average
+ Gives the size along each dimension
- Stacks arrays horizontally
! Shape attribute gives the size along each dimension.
? Which gives the total number of elements?
- Indexing
- Slicing
+ size attribute
- savetxt function
! Size attribute gives the total number of elements.
? Which statement is true of size attribute?
+ Gives the total number of elements
- Is the NumPy array object
- Is a library for numerical computing in Python
- Adds all elements
! Size attribute gives the total number of elements.
? Which gives the data type of elements?
+ dtype attribute
- argsort function
- astype method
- Memory
! Dtype attribute gives the data type of elements.
? Which statement is true of dtype attribute?
- Is a matrix
- Works across the rows
- Creates an array of ones
+ Gives the data type of elements
! Dtype attribute gives the data type of elements.
? Which gives bytes per element?
- Slicing
- Broadcasting
+ itemsize attribute
- dtype attribute
! Itemsize attribute gives bytes per element.
? Which statement is true of itemsize attribute?
- Creates random numbers
- Returns a one-dimensional copy
- Use is lower for arrays than lists
+ Gives bytes per element
! Itemsize attribute gives bytes per element.
? Which is a vector?
- savetxt function
+ One-dimensional array
- size attribute
- zeros function
! One-dimensional array is a vector.
? Which statement is true of One-dimensional array?
- Creates a range of values with a step
- Works across the rows
- Gives the middle value
+ Is a vector
! One-dimensional array is a vector.
? Which is a matrix?
- hstack function
- Matrix multiplication
- Memory
+ Two-dimensional array
! Two-dimensional array is a matrix.
? Which statement is true of Two-dimensional array?
- Stretches a smaller array to match a larger one
- Creates a range of values with a step
+ Is a matrix
- Returns indices that sort an array
! Two-dimensional array is a matrix.
? Which selects elements by position?
- itemsize attribute
- astype method
- ndarray
+ Indexing
! Indexing selects elements by position.
? Which statement is true of Indexing?
- Applies operations without explicit loops
+ Selects elements by position
- Is a vector
- Gives the average
! Indexing selects elements by position.
? Which selects a range of elements?
- sqrt function
+ Slicing
- split function
- axis one
! Slicing selects a range of elements.
? Which statement is true of Slicing?
- Gives the average
+ Selects a range of elements
- Works across the rows
- Swaps rows and columns using T
! Slicing selects a range of elements.
? Which selects elements by condition?
- ones function
- var function
+ Boolean indexing
- shape attribute
! Boolean indexing selects elements by condition.
? Which statement is true of Boolean indexing?
- Is done with dot or matmul
+ Selects elements by condition
- Is a main advantage of NumPy over lists
- Selects elements by position
! Boolean indexing selects elements by condition.
? Which means operation on each pair of elements?
- ones function
- median function
+ Element-wise
- concatenate function
! Element-wise means operation on each pair of elements.
? Which statement is true of Element-wise?
+ Means operation on each pair of elements
- Gives the variance
- Gives the dot product
- Creates an array of ones
! Element-wise means operation on each pair of elements.
? Which stretches a smaller array to match a larger one?
- sort function
- Matrix multiplication
+ Broadcasting
- mean function
! Broadcasting stretches a smaller array to match a larger one.
? Which statement is true of Broadcasting?
- Gives the data type of elements
- Swaps rows and columns using T
+ Stretches a smaller array to match a larger one
- Gives the variance
! Broadcasting stretches a smaller array to match a larger one.
? Which adds all elements?
+ sum function
- split function
- var function
- median function
! Sum function adds all elements.
? Which statement is true of sum function?
- Returns indices that sort an array
+ Adds all elements
- Describes elements of the same type
- Creates random numbers
! Sum function adds all elements.
? Which gives the average?
- var function
- concatenate function
- flatten method
+ mean function
! Mean function gives the average.
? Which statement is true of mean function?
- Adds all elements
- Gives square roots
- Changes the shape of an array
+ Gives the average
! Mean function gives the average.
? Which gives the middle value?
- sort function
- flatten method
- var function
+ median function
! Median function gives the middle value.
? Which statement is true of median function?
- Gives the number of dimensions
- Creates an array filled with a value
- Selects elements by position
+ Gives the middle value
! Median function gives the middle value.
? Which gives the standard deviation?
- Two-dimensional array
- random function
+ std function
- Broadcasting
! Std function gives the standard deviation.
? Which statement is true of std function?
- Means operation on each pair of elements
- Stacks arrays horizontally
+ Gives the standard deviation
- Gives the total number of elements
! Std function gives the standard deviation.
? Which gives the variance?
- sqrt function
- Matrix multiplication
- axis zero
+ var function
! Var function gives the variance.
? Which statement is true of var function?
- Gives the data type of elements
+ Gives the variance
- Gives square roots
- Gives the size along each dimension
! Var function gives the variance.
? Which gives the largest value?
- Speed
+ max function
- split function
- array function
! Max function gives the largest value.
? Which statement is true of max function?
- Applies operations without explicit loops
+ Gives the largest value
- Creates an array from a list
- Is a matrix
! Max function gives the largest value.
? Which gives the smallest value?
- Speed
+ min function
- Alias np
- Vectorisation
! Min function gives the smallest value.
? Which statement is true of min function?
+ Gives the smallest value
- Gives the dot product
- Is a library for numerical computing in Python
- Stretches a smaller array to match a larger one
! Min function gives the smallest value.
? Which gives square roots?
- concatenate function
- Slicing
- Broadcasting
+ sqrt function
! Sqrt function gives square roots.
? Which statement is true of sqrt function?
- Selects elements by position
+ Gives square roots
- Gives the largest value
- Selects elements by condition
! Sqrt function gives square roots.
? Which gives the dot product?
- axis one
+ dot function
- axis zero
- ones function
! Dot function gives the dot product.
? Which statement is true of dot function?
- Changes the data type of an array
+ Gives the dot product
- Writes an array to a text file
- Stretches a smaller array to match a larger one
! Dot function gives the dot product.
? Which works down the columns?
- axis one
+ axis zero
- vstack function
- ones function
! Axis zero works down the columns.
? Which statement is true of axis zero?
- Changes the data type of an array
- Gives the number of dimensions
- Works across the rows
+ Works down the columns
! Axis zero works down the columns.
? Which works across the rows?
- ndarray
- astype method
- savetxt function
+ axis one
! Axis one works across the rows.
? Which statement is true of axis one?
- Stores elements of the same type
+ Works across the rows
- Gives the average
- Creates an array of ones
! Axis one works across the rows.
? Which changes the shape of an array?
- sum function
+ reshape function
- vstack function
- ones function
! Reshape function changes the shape of an array.
? Which statement is true of reshape function?
+ Changes the shape of an array
- Divides an array into parts
- Gives bytes per element
- Gives the size along each dimension
! Reshape function changes the shape of an array.
? Which returns a one-dimensional copy?
- axis zero
- savetxt function
+ flatten method
- Matrix multiplication
! Flatten method returns a one-dimensional copy.
? Which statement is true of flatten method?
- Gives the middle value
- Gives the smallest value
- Sorts an array
+ Returns a one-dimensional copy
! Flatten method returns a one-dimensional copy.
? Which joins arrays along an axis?
- max function
+ concatenate function
- sqrt function
- size attribute
! Concatenate function joins arrays along an axis.
? Which statement is true of concatenate function?
- Is a main advantage of NumPy over lists
- Stacks arrays vertically
- Stacks arrays horizontally
+ Joins arrays along an axis
! Concatenate function joins arrays along an axis.
? Which stacks arrays vertically?
+ vstack function
- ndim attribute
- Broadcasting
- ndarray
! Vstack function stacks arrays vertically.
? Which statement is true of vstack function?
- Writes an array to a text file
- Is the NumPy array object
+ Stacks arrays vertically
- Stores elements of the same type
! Vstack function stacks arrays vertically.
? Which stacks arrays horizontally?
+ hstack function
- dot function
- arange function
- random function
! Hstack function stacks arrays horizontally.
? Which statement is true of hstack function?
+ Stacks arrays horizontally
- Gives the dot product
- Gives the data type of elements
- Selects a range of elements
! Hstack function stacks arrays horizontally.
? Which divides an array into parts?
- Alias np
- mean function
+ split function
- Slicing
! Split function divides an array into parts.
? Which statement is true of split function?
- Joins arrays along an axis
- Selects a range of elements
+ Divides an array into parts
- Gives the middle value
! Split function divides an array into parts.
? Which sorts an array?
+ sort function
- vstack function
- itemsize attribute
- loadtxt function
! Sort function sorts an array.
? Which statement is true of sort function?
- Gives the variance
- Is a vector
+ Sorts an array
- Swaps rows and columns using T
! Sort function sorts an array.
? Which returns indices that sort an array?
- array function
- sum function
- eye function
+ argsort function
! Argsort function returns indices that sort an array.
? Which statement is true of argsort function?
+ Returns indices that sort an array
- Gives the dot product
- Gives the variance
- Selects a range of elements
! Argsort function returns indices that sort an array.
? Which reads an array from a text file?
+ loadtxt function
- Indexing
- Matrix multiplication
- array function
! Loadtxt function reads an array from a text file.
? Which statement is true of loadtxt function?
- Gives the smallest value
+ Reads an array from a text file
- Is done with dot or matmul
- Gives the dot product
! Loadtxt function reads an array from a text file.
? Which writes an array to a text file?
+ savetxt function
- hstack function
- var function
- flatten method
! Savetxt function writes an array to a text file.
? Which statement is true of savetxt function?
+ Writes an array to a text file
- Creates an array from a list
- Applies operations without explicit loops
- Creates an array of ones
! Savetxt function writes an array to a text file.
? Which changes the data type of an array?
- axis one
+ astype method
- random function
- linspace function
! Astype method changes the data type of an array.
? Which statement is true of astype method?
- Is done with dot or matmul
- Applies operations without explicit loops
- Means operation on each pair of elements
+ Changes the data type of an array
! Astype method changes the data type of an array.
? Which describes elements of the same type?
- ndarray
+ Homogeneous
- savetxt function
- itemsize attribute
! Homogeneous describes elements of the same type.
? Which statement is true of Homogeneous?
+ Describes elements of the same type
- Applies operations without explicit loops
- Means operation on each pair of elements
- Divides an array into parts
! Homogeneous describes elements of the same type.
? Which is done with dot or matmul?
- Vectorisation
- NumPy
- arange function
+ Matrix multiplication
! Matrix multiplication is done with dot or matmul.
? Which statement is true of Matrix multiplication?
- Is a library for numerical computing in Python
- Sorts an array
+ Is done with dot or matmul
- Divides an array into parts
! Matrix multiplication is done with dot or matmul.
? Which swaps rows and columns using T?
- eye function
- linspace function
- var function
+ Transpose
! Transpose swaps rows and columns using T.
? Which statement is true of Transpose?
- Adds all elements
+ Swaps rows and columns using T
- Changes the shape of an array
- Gives bytes per element
! Transpose swaps rows and columns using T.
? np alias for
- numeric
- number
+ numpy
- npy
! Import.
? zeros gives
- Array of 1
- Empty
- List
+ Array of 0
! Shape.
? axis 1 works
+ Across rows
- Down columns
- Diagonal
- None
! Aggregate.
? Array elements are
- Mixed
- Strings only
- Lists
+ Same type
! Homogeneous.
? dot is
- Sum
+ Matrix product
- Mean
- Sort
! Product.
? arange(1, 5) ends at
- 5
+ 4
- 1
- 6
! Stop.
@visual
compare | List and array | List=Mixed~Slow; Array=Same type~Fast
flow | Data analysis | Create array; Operate; Aggregate; Report
blocks | Creation | zeros; ones; arange; linspace
mind | NumPy | Arrays; Attributes; Operations; Files
steps | Reshape | Check size; Choose shape; reshape; Verify
@problems
## Moderate
P: What is the shape of np.zeros((3,4))?
A: (3, 4).
R: 3 | Rows
R: 3 | Columns
## High
P: Write code to create an array of 1 to 10 and print the squares of even numbers.
A: a = np.arange(1,11); print(a[a % 2 == 0] ** 2).
R: 2 | arange
R: 2 | Mask
R: 2 | Square
R: 2 | Print
## Advanced
P: Explain broadcasting with an example.
A: A scalar or smaller array is stretched to match shape, as a + 5 adds 5 to every element.
R: 2 | Definition
R: 2 | Rule
R: 2 | Example
R: 2 | Benefit

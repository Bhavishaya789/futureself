# Data Handling using Pandas: Series
minutes: 45
yt: class 12 informatics practices pandas series creation indexing slicing attributes methods
@study
Pandas is a Python library for data analysis, imported as import pandas as pd. A Series is a one-dimensional labelled array that can hold any data type. A Series has an index (labels) and values; the default index is 0, 1, 2 and so on. A Series is created with pd.Series(data, index=...) from a list, a dictionary, a NumPy array or a scalar. If created from a dictionary, the keys become the index. If a scalar is given, an index must be supplied and the value is repeated. A Series has attributes such as index, values, dtype, shape, size, nbytes, ndim, hasnans, empty and name. Elements are accessed by label using s[label] or s.loc[label], and by position using s.iloc[position]. Slicing by position excludes the end, as in s[1:3], whereas slicing with labels includes the end. Boolean indexing selects values by a condition. Methods include head(n), tail(n), count(), and the arithmetic operations, which are aligned on the index; if labels do not match, the result is NaN. NaN stands for not a number and marks missing data. Series can be modified by assignment, and elements can be deleted using drop(). Vector operations apply to the whole Series, such as s * 2. Common functions include sum(), mean(), min(), max() and describe(), and a name can be given to the Series using the name attribute. The mean ignores NaN values by default.
## Deep dive: Creating Series
A Series can be created from a list, dictionary, array or scalar, with an optional custom index.
## Deep dive: Accessing data
Use labels with loc, positions with iloc, and conditions for boolean selection; positional slices exclude the end.
## Deep dive: Operations
Arithmetic aligns by index and produces NaN for unmatched labels; head and tail view the ends.
## Hindi saransh
Pandas Series: ek-aayami labelled array; index, values, attributes, slicing aur arithmetic.
> Remember: positional slice excludes the end; label slice includes it.
@formulas
## Syntax
Import | import pandas as pd
Create | pd.Series(data, index=idx)
Label access | s.loc[label]
Position access | s.iloc[pos]
Top rows | s.head(n)

@qa
Q: Which is a Python library for data analysis?
A: Pandas is a Python library for data analysis.
Q: What do you know about Pandas?
A: Pandas is a Python library for data analysis.
Q: Which is the common alias for pandas?
A: pd is the common alias for pandas.
Q: What do you know about pd?
A: Pd is the common alias for pandas.
Q: Which is a one dimensional labelled array?
A: Series is a one dimensional labelled array.
Q: What do you know about Series?
A: Series is a one dimensional labelled array.
Q: Which holds the labels of a Series?
A: Index holds the labels of a Series.
Q: What do you know about Index?
A: Index holds the labels of a Series.
Q: Which hold the data of a Series?
A: Values hold the data of a Series.
Q: What do you know about Values?
A: Values hold the data of a Series.
Q: Which starts at zero?
A: Default index starts at zero.
Q: What do you know about Default index?
A: Default index starts at zero.
Q: Which marks a missing value?
A: NaN marks a missing value.
Q: What do you know about NaN?
A: NaN marks a missing value.
Q: Which is stored in dtype?
A: Data type is stored in dtype.
Q: What do you know about Data type?
A: Data type is stored in dtype.
Q: Which can be set with the name attribute?
A: Series name can be set with the name attribute.
Q: What do you know about Series name?
A: Series name can be set with the name attribute.
Q: Which is the language used with pandas?
A: Python is the language used with pandas.
Q: What do you know about Python?
A: Python is the language used with pandas.
Q: Which can be used to create a Series?
A: List can be used to create a Series.
Q: What do you know about List?
A: List can be used to create a Series.
Q: Which keys become the index of a Series?
A: Dictionary keys become the index of a Series.
Q: What do you know about Dictionary?
A: Dictionary keys become the index of a Series.
Q: What do you know about NumPy array?
A: NumPy array can be used to create a Series.
Q: Which is repeated across the supplied index?
A: Scalar is repeated across the supplied index.
Q: What do you know about Scalar?
A: Scalar is repeated across the supplied index.
Q: Which is given with the index argument?
A: Custom index is given with the index argument.
Q: What do you know about Custom index?
A: Custom index is given with the index argument.
Q: Which sets the data type of a Series?
A: Dtype argument sets the data type of a Series.
Q: What do you know about Dtype argument?
A: Dtype argument sets the data type of a Series.
Q: Which is created by pd.Series with no data?
A: Empty Series is created by pd.Series with no data.
Q: What do you know about Empty Series?
A: Empty Series is created by pd.Series with no data.
Q: Which can generate Series values?
A: Range can generate Series values.
Q: What do you know about Range?
A: Range can generate Series values.
Q: Which produces an independent Series?
A: Copy produces an independent Series.
Q: What do you know about Copy?
A: Copy produces an independent Series.
Q: Which is pd.Series?
A: Constructor is pd.Series.
Q: What do you know about Constructor?
A: Constructor is pd.Series.
Q: Which returns the labels?
A: index attribute returns the labels.
Q: What do you know about index attribute?
A: Index attribute returns the labels.
Q: Which returns the data as an array?
A: values attribute returns the data as an array.
Q: What do you know about values attribute?
A: Values attribute returns the data as an array.
Q: Which returns the data type?
A: dtype attribute returns the data type.
Q: What do you know about dtype attribute?
A: Dtype attribute returns the data type.
Q: Which returns a tuple of dimensions?
A: shape attribute returns a tuple of dimensions.
Q: What do you know about shape attribute?
A: Shape attribute returns a tuple of dimensions.
Q: Which returns the number of elements?
A: size attribute returns the number of elements.
Q: What do you know about size attribute?
A: Size attribute returns the number of elements.
Q: Which returns the number of dimensions?
A: ndim attribute returns the number of dimensions.
Q: What do you know about ndim attribute?
A: Ndim attribute returns the number of dimensions.
Q: Which returns the bytes used by data?
A: nbytes attribute returns the bytes used by data.
Q: What do you know about nbytes attribute?
A: Nbytes attribute returns the bytes used by data.
Q: Which tells if NaN is present?
A: hasnans attribute tells if NaN is present.
Q: What do you know about hasnans attribute?
A: Hasnans attribute tells if NaN is present.
Q: Which tells if the Series has no elements?
A: empty attribute tells if the Series has no elements.
Q: What do you know about empty attribute?
A: Empty attribute tells if the Series has no elements.
Q: Which stores the Series name?
A: name attribute stores the Series name.
Q: What do you know about name attribute?
A: Name attribute stores the Series name.
Q: Which selects by label?
A: loc selects by label.
Q: What do you know about loc?
A: Loc selects by label.
Q: Which selects by position?
A: iloc selects by position.
Q: What do you know about iloc?
A: Iloc selects by position.
Q: Which includes the end label?
A: Label slice includes the end label.
Q: What do you know about Label slice?
A: Label slice includes the end label.
Q: Which excludes the end position?
A: Position slice excludes the end position.
Q: What do you know about Position slice?
A: Position slice excludes the end position.
Q: Which selects values by a condition?
A: Boolean indexing selects values by a condition.
Q: What do you know about Boolean indexing?
A: Boolean indexing selects values by a condition.
Q: Which is accessed as s[label]?
A: Single element is accessed as s[label].
Q: What do you know about Single element?
A: Single element is accessed as s[label].
Q: Which returns the first rows?
A: head returns the first rows.
Q: What do you know about head?
A: Head returns the first rows.
Q: Which returns the last rows?
A: tail returns the last rows.
Q: What do you know about tail?
A: Tail returns the last rows.
Q: Which returns five rows?
A: Default head returns five rows.
Q: What do you know about Default head?
A: Default head returns five rows.
Q: What do you know about Default tail?
A: Default tail returns five rows.
Q: Which matches labels during arithmetic?
A: Alignment matches labels during arithmetic.
Q: What do you know about Alignment?
A: Alignment matches labels during arithmetic.
Q: Which gives NaN in the result?
A: Unmatched label gives NaN in the result.
Q: What do you know about Unmatched label?
A: Unmatched label gives NaN in the result.
Q: Which applies to every element?
A: Vector operation applies to every element.
Q: What do you know about Vector operation?
A: Vector operation applies to every element.
Q: Which adds all values?
A: Sum adds all values.
Q: What do you know about Sum?
A: Sum adds all values.
Q: Which gives the average and skips NaN?
A: Mean gives the average and skips NaN.
Q: What do you know about Mean?
A: Mean gives the average and skips NaN.
Q: Which gives the smallest value?
A: Min gives the smallest value.
Q: What do you know about Min?
A: Min gives the smallest value.
Q: Which gives the largest value?
A: Max gives the largest value.
Q: What do you know about Max?
A: Max gives the largest value.
Q: Which counts non NaN values?
A: Count counts non NaN values.
Q: What do you know about Count?
A: Count counts non NaN values.
Q: Which gives summary statistics?
A: Describe gives summary statistics.
Q: What do you know about Describe?
A: Describe gives summary statistics.
Q: Which deletes elements by label?
A: Drop deletes elements by label.
Q: What do you know about Drop?
A: Drop deletes elements by label.
Q: Which changes an element?
A: Assignment changes an element.
Q: What do you know about Assignment?
A: Assignment changes an element.
Q: Which adds an element by new label?
A: Append value adds an element by new label.
Q: What do you know about Append value?
A: Append value adds an element by new label.
Q: Which changes the index labels?
A: Rename changes the index labels.
Q: What do you know about Rename?
A: Rename changes the index labels.
Q: Which orders by value?
A: Sort values orders by value.
Q: What do you know about Sort values?
A: Sort values orders by value.
Q: Which orders by label?
A: Sort index orders by label.
Q: What do you know about Sort index?
A: Sort index orders by label.
Q: Which conforms a Series to a new index?
A: Reindex conforms a Series to a new index.
Q: What do you know about Reindex?
A: Reindex conforms a Series to a new index.
Q: Which replaces NaN values?
A: Fillna replaces NaN values.
Q: What do you know about Fillna?
A: Fillna replaces NaN values.
Q: Which removes NaN values?
A: Dropna removes NaN values.
Q: What do you know about Dropna?
A: Dropna removes NaN values.
Q: Which returns distinct values?
A: Unique returns distinct values.
Q: What do you know about Unique?
A: Unique returns distinct values.
Q: Which counts occurrences of each value?
A: Value counts counts occurrences of each value.
Q: What do you know about Value counts?
A: Value counts counts occurrences of each value.
Q: What is a Series in pandas?
A: A one-dimensional labelled array that can hold any data type.
Q: How do you import pandas?
A: With import pandas as pd.
Q: What is the default index of a Series?
A: Integers starting at 0.
Q: How do loc and iloc differ?
A: loc uses labels and includes the end; iloc uses positions and excludes the end.
Q: What does NaN stand for?
A: Not a Number, used for missing data.
Q: What does s.head() return?
A: The first five elements by default.
Q: What is the result of adding two Series with unmatched labels?
A: NaN at the unmatched labels.
Q: How do you select values by a condition?
A: By boolean indexing such as s[s > 10].
@quiz
? Which is a Python library for data analysis?
+ Pandas
- Series
- Values
- pd
! Pandas is a Python library for data analysis.
? Which statement is true of Pandas?
- Marks a missing value
- Is a one dimensional labelled array
- Is the common alias for pandas
+ Is a Python library for data analysis
! Pandas is a Python library for data analysis.
? Which is the common alias for pandas?
- Index
+ pd
- Data type
- Series
! Pd is the common alias for pandas.
? Which statement is true of pd?
- Holds the labels of a Series
- Can be set with the name attribute
+ Is the common alias for pandas
- Is stored in dtype
! Pd is the common alias for pandas.
? Which is a one dimensional labelled array?
+ Series
- NaN
- Series name
- Values
! Series is a one dimensional labelled array.
? Which statement is true of Series?
- Is stored in dtype
+ Is a one dimensional labelled array
- Marks a missing value
- Hold the data of a Series
! Series is a one dimensional labelled array.
? Which holds the labels of a Series?
- NaN
+ Index
- Values
- pd
! Index holds the labels of a Series.
? Which statement is true of Index?
- Hold the data of a Series
- Marks a missing value
- Is a one dimensional labelled array
+ Holds the labels of a Series
! Index holds the labels of a Series.
? Which hold the data of a Series?
- Series name
- Default index
- NaN
+ Values
! Values hold the data of a Series.
? Which statement is true of Values?
- Is the common alias for pandas
+ Hold the data of a Series
- Is the language used with pandas
- Holds the labels of a Series
! Values hold the data of a Series.
? Which starts at zero?
- Series
+ Default index
- Pandas
- Python
! Default index starts at zero.
? Which statement is true of Default index?
- Marks a missing value
- Is stored in dtype
+ Starts at zero
- Is the language used with pandas
! Default index starts at zero.
? Which marks a missing value?
+ NaN
- Pandas
- Default index
- Python
! NaN marks a missing value.
? Which statement is true of NaN?
- Is a Python library for data analysis
+ Marks a missing value
- Hold the data of a Series
- Is the common alias for pandas
! NaN marks a missing value.
? Which is stored in dtype?
- Series name
+ Data type
- Pandas
- Python
! Data type is stored in dtype.
? Which statement is true of Data type?
- Is a Python library for data analysis
- Is the language used with pandas
+ Is stored in dtype
- Is the common alias for pandas
! Data type is stored in dtype.
? Which can be set with the name attribute?
- Default index
- Data type
- Series
+ Series name
! Series name can be set with the name attribute.
? Which statement is true of Series name?
+ Can be set with the name attribute
- Is a one dimensional labelled array
- Is the language used with pandas
- Is stored in dtype
! Series name can be set with the name attribute.
? Which is the language used with pandas?
- Series
- Values
- Index
+ Python
! Python is the language used with pandas.
? Which statement is true of Python?
- Is a Python library for data analysis
- Marks a missing value
+ Is the language used with pandas
- Hold the data of a Series
! Python is the language used with pandas.
? Which can be used to create a Series?
- Dtype argument
- Dictionary
- Copy
+ List
! List can be used to create a Series.
? Which statement is true of List?
- Is created by pd.Series with no data
+ Can be used to create a Series
- Can generate Series values
- Is repeated across the supplied index
! List can be used to create a Series.
? Which keys become the index of a Series?
- Constructor
+ Dictionary
- Custom index
- Empty Series
! Dictionary keys become the index of a Series.
? Which statement is true of Dictionary?
- Can be used to create a Series
- Is pd.Series
+ Keys become the index of a Series
- Sets the data type of a Series
! Dictionary keys become the index of a Series.
? Which statement is true of NumPy array?
- Keys become the index of a Series
+ Can be used to create a Series
- Is pd.Series
- Can generate Series values
! NumPy array can be used to create a Series.
? Which is repeated across the supplied index?
+ Scalar
- NumPy array
- Copy
- Range
! Scalar is repeated across the supplied index.
? Which statement is true of Scalar?
- Is pd.Series
- Produces an independent Series
+ Is repeated across the supplied index
- Can generate Series values
! Scalar is repeated across the supplied index.
? Which is given with the index argument?
- Constructor
+ Custom index
- NumPy array
- Copy
! Custom index is given with the index argument.
? Which statement is true of Custom index?
- Produces an independent Series
+ Is given with the index argument
- Can generate Series values
- Sets the data type of a Series
! Custom index is given with the index argument.
? Which sets the data type of a Series?
- Dictionary
+ Dtype argument
- Copy
- List
! Dtype argument sets the data type of a Series.
? Which statement is true of Dtype argument?
- Is given with the index argument
- Can generate Series values
- Keys become the index of a Series
+ Sets the data type of a Series
! Dtype argument sets the data type of a Series.
? Which is created by pd.Series with no data?
+ Empty Series
- Dictionary
- Custom index
- NumPy array
! Empty Series is created by pd.Series with no data.
? Which statement is true of Empty Series?
+ Is created by pd.Series with no data
- Is pd.Series
- Produces an independent Series
- Sets the data type of a Series
! Empty Series is created by pd.Series with no data.
? Which can generate Series values?
- Constructor
+ Range
- Custom index
- Empty Series
! Range can generate Series values.
? Which statement is true of Range?
- Produces an independent Series
- Is pd.Series
- Keys become the index of a Series
+ Can generate Series values
! Range can generate Series values.
? Which produces an independent Series?
- Scalar
- List
+ Copy
- Empty Series
! Copy produces an independent Series.
? Which statement is true of Copy?
- Is pd.Series
- Is given with the index argument
+ Produces an independent Series
- Keys become the index of a Series
! Copy produces an independent Series.
? Which is pd.Series?
- Dtype argument
- Custom index
+ Constructor
- List
! Constructor is pd.Series.
? Which statement is true of Constructor?
- Produces an independent Series
- Is created by pd.Series with no data
- Keys become the index of a Series
+ Is pd.Series
! Constructor is pd.Series.
? Which returns the labels?
- values attribute
- empty attribute
+ index attribute
- ndim attribute
! Index attribute returns the labels.
? Which statement is true of index attribute?
- Tells if the Series has no elements
- Returns the number of dimensions
- Returns the number of elements
+ Returns the labels
! Index attribute returns the labels.
? Which returns the data as an array?
+ values attribute
- ndim attribute
- nbytes attribute
- name attribute
! Values attribute returns the data as an array.
? Which statement is true of values attribute?
- Returns the bytes used by data
- Tells if NaN is present
+ Returns the data as an array
- Stores the Series name
! Values attribute returns the data as an array.
? Which returns the data type?
- index attribute
- size attribute
- empty attribute
+ dtype attribute
! Dtype attribute returns the data type.
? Which statement is true of dtype attribute?
- Tells if the Series has no elements
- Returns a tuple of dimensions
+ Returns the data type
- Returns the number of elements
! Dtype attribute returns the data type.
? Which returns a tuple of dimensions?
+ shape attribute
- nbytes attribute
- empty attribute
- values attribute
! Shape attribute returns a tuple of dimensions.
? Which statement is true of shape attribute?
- Stores the Series name
+ Returns a tuple of dimensions
- Tells if the Series has no elements
- Tells if NaN is present
! Shape attribute returns a tuple of dimensions.
? Which returns the number of elements?
- empty attribute
- name attribute
- values attribute
+ size attribute
! Size attribute returns the number of elements.
? Which statement is true of size attribute?
+ Returns the number of elements
- Returns the number of dimensions
- Returns the labels
- Tells if NaN is present
! Size attribute returns the number of elements.
? Which returns the number of dimensions?
+ ndim attribute
- shape attribute
- values attribute
- nbytes attribute
! Ndim attribute returns the number of dimensions.
? Which statement is true of ndim attribute?
- Returns the bytes used by data
- Returns a tuple of dimensions
+ Returns the number of dimensions
- Returns the data as an array
! Ndim attribute returns the number of dimensions.
? Which returns the bytes used by data?
- dtype attribute
- name attribute
+ nbytes attribute
- ndim attribute
! Nbytes attribute returns the bytes used by data.
? Which statement is true of nbytes attribute?
- Tells if NaN is present
- Returns the labels
+ Returns the bytes used by data
- Stores the Series name
! Nbytes attribute returns the bytes used by data.
? Which tells if NaN is present?
+ hasnans attribute
- ndim attribute
- shape attribute
- size attribute
! Hasnans attribute tells if NaN is present.
? Which statement is true of hasnans attribute?
- Returns the bytes used by data
- Stores the Series name
- Returns the number of elements
+ Tells if NaN is present
! Hasnans attribute tells if NaN is present.
? Which tells if the Series has no elements?
- hasnans attribute
- nbytes attribute
+ empty attribute
- dtype attribute
! Empty attribute tells if the Series has no elements.
? Which statement is true of empty attribute?
- Tells if NaN is present
+ Tells if the Series has no elements
- Returns a tuple of dimensions
- Returns the bytes used by data
! Empty attribute tells if the Series has no elements.
? Which stores the Series name?
+ name attribute
- nbytes attribute
- index attribute
- hasnans attribute
! Name attribute stores the Series name.
? Which statement is true of name attribute?
- Returns a tuple of dimensions
+ Stores the Series name
- Returns the bytes used by data
- Tells if the Series has no elements
! Name attribute stores the Series name.
? Which selects by label?
- Boolean indexing
- iloc
- Default tail
+ loc
! Loc selects by label.
? Which statement is true of loc?
- Returns five rows
- Includes the end label
+ Selects by label
- Returns the last rows
! Loc selects by label.
? Which selects by position?
- Single element
+ iloc
- Position slice
- Default head
! Iloc selects by position.
? Which statement is true of iloc?
+ Selects by position
- Includes the end label
- Returns the first rows
- Selects by label
! Iloc selects by position.
? Which includes the end label?
- Single element
- Boolean indexing
+ Label slice
- Default head
! Label slice includes the end label.
? Which statement is true of Label slice?
+ Includes the end label
- Selects values by a condition
- Returns the last rows
- Is accessed as s[label]
! Label slice includes the end label.
? Which excludes the end position?
- Single element
- Label slice
+ Position slice
- loc
! Position slice excludes the end position.
? Which statement is true of Position slice?
- Returns five rows
+ Excludes the end position
- Selects values by a condition
- Selects by label
! Position slice excludes the end position.
? Which selects values by a condition?
- tail
+ Boolean indexing
- head
- loc
! Boolean indexing selects values by a condition.
? Which statement is true of Boolean indexing?
- Returns the first rows
- Selects by position
+ Selects values by a condition
- Is accessed as s[label]
! Boolean indexing selects values by a condition.
? Which is accessed as s[label]?
- Position slice
- Boolean indexing
+ Single element
- head
! Single element is accessed as s[label].
? Which statement is true of Single element?
- Excludes the end position
+ Is accessed as s[label]
- Returns the first rows
- Returns the last rows
! Single element is accessed as s[label].
? Which returns the first rows?
+ head
- Single element
- iloc
- Default tail
! Head returns the first rows.
? Which statement is true of head?
- Selects values by a condition
- Returns the last rows
+ Returns the first rows
- Excludes the end position
! Head returns the first rows.
? Which returns the last rows?
- Label slice
+ tail
- Boolean indexing
- Single element
! Tail returns the last rows.
? Which statement is true of tail?
- Returns five rows
- Includes the end label
- Excludes the end position
+ Returns the last rows
! Tail returns the last rows.
? Which returns five rows?
- Position slice
- Default tail
- tail
+ Default head
! Default head returns five rows.
? Which statement is true of Default head?
- Selects values by a condition
+ Returns five rows
- Selects by position
- Includes the end label
! Default head returns five rows.
? Which statement is true of Default tail?
- Excludes the end position
- Returns the first rows
- Returns the last rows
+ Returns five rows
! Default tail returns five rows.
? Which matches labels during arithmetic?
- Vector operation
+ Alignment
- Min
- Unmatched label
! Alignment matches labels during arithmetic.
? Which statement is true of Alignment?
- Deletes elements by label
- Gives the average and skips NaN
- Applies to every element
+ Matches labels during arithmetic
! Alignment matches labels during arithmetic.
? Which gives NaN in the result?
- Sum
- Min
+ Unmatched label
- Drop
! Unmatched label gives NaN in the result.
? Which statement is true of Unmatched label?
- Gives summary statistics
+ Gives NaN in the result
- Gives the largest value
- Adds all values
! Unmatched label gives NaN in the result.
? Which applies to every element?
+ Vector operation
- Min
- Drop
- Mean
! Vector operation applies to every element.
? Which statement is true of Vector operation?
+ Applies to every element
- Counts non NaN values
- Gives the largest value
- Matches labels during arithmetic
! Vector operation applies to every element.
? Which adds all values?
+ Sum
- Min
- Vector operation
- Describe
! Sum adds all values.
? Which statement is true of Sum?
+ Adds all values
- Gives the average and skips NaN
- Gives the smallest value
- Gives NaN in the result
! Sum adds all values.
? Which gives the average and skips NaN?
- Alignment
+ Mean
- Vector operation
- Min
! Mean gives the average and skips NaN.
? Which statement is true of Mean?
- Gives NaN in the result
- Applies to every element
+ Gives the average and skips NaN
- Gives the smallest value
! Mean gives the average and skips NaN.
? Which gives the smallest value?
- Describe
- Mean
+ Min
- Drop
! Min gives the smallest value.
? Which statement is true of Min?
+ Gives the smallest value
- Gives NaN in the result
- Counts non NaN values
- Gives summary statistics
! Min gives the smallest value.
? Which gives the largest value?
- Unmatched label
- Drop
+ Max
- Vector operation
! Max gives the largest value.
? Which statement is true of Max?
- Gives NaN in the result
+ Gives the largest value
- Deletes elements by label
- Matches labels during arithmetic
! Max gives the largest value.
? Which counts non NaN values?
- Max
+ Count
- Unmatched label
- Drop
! Count counts non NaN values.
? Which statement is true of Count?
- Gives the largest value
+ Counts non NaN values
- Matches labels during arithmetic
- Gives the smallest value
! Count counts non NaN values.
? Which gives summary statistics?
- Max
- Sum
+ Describe
- Count
! Describe gives summary statistics.
? Which statement is true of Describe?
- Gives the smallest value
+ Gives summary statistics
- Matches labels during arithmetic
- Applies to every element
! Describe gives summary statistics.
? Which deletes elements by label?
- Unmatched label
- Sum
- Describe
+ Drop
! Drop deletes elements by label.
? Which statement is true of Drop?
- Gives NaN in the result
+ Deletes elements by label
- Gives the average and skips NaN
- Gives the smallest value
! Drop deletes elements by label.
? Which changes an element?
+ Assignment
- Sort index
- Fillna
- Rename
! Assignment changes an element.
? Which statement is true of Assignment?
- Counts occurrences of each value
+ Changes an element
- Returns distinct values
- Replaces NaN values
! Assignment changes an element.
? Which adds an element by new label?
- Sort index
+ Append value
- Fillna
- Dropna
! Append value adds an element by new label.
? Which statement is true of Append value?
- Returns distinct values
- Orders by label
+ Adds an element by new label
- Changes an element
! Append value adds an element by new label.
? Which changes the index labels?
- Sort index
+ Rename
- Sort values
- Value counts
! Rename changes the index labels.
? Which statement is true of Rename?
- Returns distinct values
- Orders by value
+ Changes the index labels
- Changes an element
! Rename changes the index labels.
? Which orders by value?
- Unique
- Fillna
- Rename
+ Sort values
! Sort values orders by value.
? Which statement is true of Sort values?
- Conforms a Series to a new index
- Removes NaN values
+ Orders by value
- Counts occurrences of each value
! Sort values orders by value.
? Which orders by label?
- Rename
- Value counts
+ Sort index
- Dropna
! Sort index orders by label.
? Which statement is true of Sort index?
- Counts occurrences of each value
+ Orders by label
- Removes NaN values
- Changes an element
! Sort index orders by label.
? Which conforms a Series to a new index?
- Dropna
- Fillna
+ Reindex
- Sort values
! Reindex conforms a Series to a new index.
? Which statement is true of Reindex?
- Replaces NaN values
- Changes an element
- Returns distinct values
+ Conforms a Series to a new index
! Reindex conforms a Series to a new index.
? Which replaces NaN values?
- Sort index
- Unique
- Value counts
+ Fillna
! Fillna replaces NaN values.
? Which statement is true of Fillna?
- Returns distinct values
- Removes NaN values
+ Replaces NaN values
- Conforms a Series to a new index
! Fillna replaces NaN values.
? Which removes NaN values?
+ Dropna
- Unique
- Rename
- Value counts
! Dropna removes NaN values.
? Which statement is true of Dropna?
- Returns distinct values
- Orders by value
+ Removes NaN values
- Adds an element by new label
! Dropna removes NaN values.
? Which returns distinct values?
+ Unique
- Assignment
- Reindex
- Fillna
! Unique returns distinct values.
? Which statement is true of Unique?
+ Returns distinct values
- Orders by value
- Changes an element
- Changes the index labels
! Unique returns distinct values.
? Which counts occurrences of each value?
- Assignment
+ Value counts
- Unique
- Sort index
! Value counts counts occurrences of each value.
? Which statement is true of Value counts?
- Removes NaN values
- Changes the index labels
+ Counts occurrences of each value
- Changes an element
! Value counts counts occurrences of each value.
? pd is the alias for
- python
- plotting
+ pandas
- pointer
! Alias of pandas.
? A Series is
- Two dimensional
+ One dimensional
- Three dimensional
- Zero dimensional
! One dimensional.
? Positional slicing
+ Excludes the end
- Includes the end
- Includes both
- Excludes the start
! Excludes the end.
? Missing data is marked as
- None only
- Zero
- Blank string
+ NaN
! NaN.
? Attribute giving labels
- values
+ index
- dtype
- size
! index.
? A scalar Series requires
+ An index
- A dictionary
- A matrix
- A file
! An index.
@visual
blocks | Series attributes | index; values; dtype; shape; size; ndim
compare | loc and iloc | loc=Label~Inclusive slice; iloc=Position~Exclusive slice
flow | Series arithmetic | Align on index; Matching labels; Compute; NaN if missing
steps | Create Series | Import pandas; Prepare data; Call Series; Set index
mind | Series | Creation; Access; Attributes; Operations
@problems
## Moderate
P: How is a Series created from a dictionary?
A: The dictionary keys become the index and values become the data.
R: 3 | Keys
R: 3 | Index
## High
P: Explain loc and iloc with an example.
A: loc selects by label as in s.loc['a'], iloc by position as in s.iloc[0].
R: 2 | Label
R: 2 | Position
R: 2 | Example
R: 2 | Difference
## Advanced
P: What happens when two Series with different indexes are added?
A: Values with matching labels are added and unmatched labels give NaN.
R: 2 | Alignment
R: 2 | NaN
R: 2 | Labels
R: 2 | Result

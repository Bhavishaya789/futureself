# Data Handling using Pandas: DataFrame
minutes: 45
yt: class 12 informatics practices pandas dataframe creation indexing loc iloc operations
@study
A DataFrame is a two-dimensional labelled data structure with rows and columns, like a table. Each column is a Series, columns can hold different types, and both rows and columns can be labelled. A DataFrame is created with pd.DataFrame(data, index=..., columns=...) from a dictionary of lists, a list of dictionaries, a list of lists, a dictionary of Series or a NumPy array. Dictionary keys become column names, and with a list of dictionaries, missing keys become NaN. Attributes include index, columns, axes, dtypes, shape, size, values, ndim, T (transpose), empty and head/tail methods. A column is selected by df['col'] or df.col, and several columns with a list df[['a','b']]. Rows and cells are selected with loc by label and iloc by position. df.loc[row, col] selects a cell, df.loc[:, 'col'] selects a column, and df.iloc[0:2] selects the first two rows by position. A new column is added by assignment, df['new'] = values, while a new row is added with loc, for example df.loc['r'] = [..]. Rows and columns are deleted using drop with axis 0 for rows and 1 for columns. A column can be renamed with rename(columns={...}). Boolean indexing filters rows, as in df[df['marks'] > 80]. Data is read from CSV with pd.read_csv('file.csv') and written with to_csv('file.csv'), where index=False omits the index. The shape attribute gives (rows, columns). Iteration over rows is done with iterrows or itertuples, and over columns with iteritems or items.
## Deep dive: Creating DataFrames
A dictionary of lists or Series, a list of dictionaries and arrays can create a DataFrame.
## Deep dive: Selecting and changing
Use column names, loc and iloc to select; assignment adds columns; drop deletes rows or columns.
## Deep dive: CSV files
read_csv loads data from a CSV file and to_csv saves a DataFrame, optionally without the index.
## Hindi saransh
DataFrame: do-aayami table; banana, chunna, jodna, hatana aur CSV se padhna-likhna.
> Remember: axis=0 for rows, axis=1 for columns in drop.
@formulas
## Syntax
Create | pd.DataFrame(data)
Column | df['col']
Cell | df.loc[row, col]
Drop column | df.drop('c', axis=1)
Read CSV | pd.read_csv('f.csv')

@qa
Q: Which is a two dimensional labelled structure?
A: DataFrame is a two dimensional labelled structure.
Q: What do you know about DataFrame?
A: DataFrame is a two dimensional labelled structure.
Q: Which is a horizontal record of a DataFrame?
A: Row is a horizontal record of a DataFrame.
Q: What do you know about Row?
A: Row is a horizontal record of a DataFrame.
Q: Which is a Series in a DataFrame?
A: Column is a Series in a DataFrame.
Q: What do you know about Column?
A: Column is a Series in a DataFrame.
Q: Which may be held in different columns?
A: Heterogeneous data may be held in different columns.
Q: What do you know about Heterogeneous data?
A: Heterogeneous data may be held in different columns.
Q: Which name the rows?
A: Index labels name the rows.
Q: What do you know about Index labels?
A: Index labels name the rows.
Q: Which name the columns?
A: Column labels name the columns.
Q: What do you know about Column labels?
A: Column labels name the columns.
Q: Which is the analogy for a DataFrame?
A: Table is the analogy for a DataFrame.
Q: What do you know about Table?
A: Table is the analogy for a DataFrame.
Q: Which is the constructor?
A: pd.DataFrame is the constructor.
Q: What do you know about pd.DataFrame?
A: Pd.DataFrame is the constructor.
Q: Which is a tuple of rows and columns?
A: Shape is a tuple of rows and columns.
Q: What do you know about Shape?
A: Shape is a tuple of rows and columns.
Q: Which suits DataFrames?
A: Tabular data suits DataFrames.
Q: What do you know about Tabular data?
A: Tabular data suits DataFrames.
Q: Which creates columns from lists?
A: Dictionary of lists creates columns from lists.
Q: What do you know about Dictionary of lists?
A: Dictionary of lists creates columns from lists.
Q: Which creates rows from dictionaries?
A: List of dictionaries creates rows from dictionaries.
Q: What do you know about List of dictionaries?
A: List of dictionaries creates rows from dictionaries.
Q: Which becomes NaN in a list of dictionaries?
A: Missing key becomes NaN in a list of dictionaries.
Q: What do you know about Missing key?
A: Missing key becomes NaN in a list of dictionaries.
Q: Which aligns on index labels?
A: Dictionary of Series aligns on index labels.
Q: What do you know about Dictionary of Series?
A: Dictionary of Series aligns on index labels.
Q: Which creates rows from lists?
A: List of lists creates rows from lists.
Q: What do you know about List of lists?
A: List of lists creates rows from lists.
Q: Which can create a DataFrame?
A: NumPy array can create a DataFrame.
Q: What do you know about NumPy array?
A: NumPy array can create a DataFrame.
Q: Which names the columns?
A: Columns argument names the columns.
Q: What do you know about Columns argument?
A: Columns argument names the columns.
Q: Which names the rows?
A: Index argument names the rows.
Q: What do you know about Index argument?
A: Index argument names the rows.
Q: What do you know about CSV file?
A: CSV file can create a DataFrame.
Q: Which has no rows?
A: Empty DataFrame has no rows.
Q: What do you know about Empty DataFrame?
A: Empty DataFrame has no rows.
Q: Which gives row labels?
A: index attribute gives row labels.
Q: What do you know about index attribute?
A: Index attribute gives row labels.
Q: Which gives column labels?
A: columns attribute gives column labels.
Q: What do you know about columns attribute?
A: Columns attribute gives column labels.
Q: Which gives data types of columns?
A: dtypes attribute gives data types of columns.
Q: What do you know about dtypes attribute?
A: Dtypes attribute gives data types of columns.
Q: Which gives rows and columns count?
A: shape attribute gives rows and columns count.
Q: What do you know about shape attribute?
A: Shape attribute gives rows and columns count.
Q: Which gives the total elements?
A: size attribute gives the total elements.
Q: What do you know about size attribute?
A: Size attribute gives the total elements.
Q: Which returns a NumPy array?
A: values attribute returns a NumPy array.
Q: What do you know about values attribute?
A: Values attribute returns a NumPy array.
Q: Which returns the transpose?
A: T attribute returns the transpose.
Q: What do you know about T attribute?
A: T attribute returns the transpose.
Q: Which gives two for a DataFrame?
A: ndim attribute gives two for a DataFrame.
Q: What do you know about ndim attribute?
A: Ndim attribute gives two for a DataFrame.
Q: Which gives the row and column indexes?
A: axes attribute gives the row and column indexes.
Q: What do you know about axes attribute?
A: Axes attribute gives the row and column indexes.
Q: Which tells if there is no data?
A: empty attribute tells if there is no data.
Q: What do you know about empty attribute?
A: Empty attribute tells if there is no data.
Q: Which is selected by df['col']?
A: Single column is selected by df['col'].
Q: What do you know about Single column?
A: Single column is selected by df['col'].
Q: Which are selected with a list of names?
A: Multiple columns are selected with a list of names.
Q: What do you know about Multiple columns?
A: Multiple columns are selected with a list of names.
Q: Which selects a column by df.col?
A: Dot notation selects a column by df.col.
Q: What do you know about Dot notation?
A: Dot notation selects a column by df.col.
Q: Which selects rows and columns by label?
A: loc selects rows and columns by label.
Q: What do you know about loc?
A: Loc selects rows and columns by label.
Q: Which selects rows and columns by position?
A: iloc selects rows and columns by position.
Q: What do you know about iloc?
A: Iloc selects rows and columns by position.
Q: Which is selected by df.loc[row, col]?
A: Cell is selected by df.loc[row, col].
Q: What do you know about Cell?
A: Cell is selected by df.loc[row, col].
Q: Which is selected by iloc with start and stop?
A: Row slice is selected by iloc with start and stop.
Q: What do you know about Row slice?
A: Row slice is selected by iloc with start and stop.
Q: Which filters rows by a condition?
A: Boolean selection filters rows by a condition.
Q: What do you know about Boolean selection?
A: Boolean selection filters rows by a condition.
Q: Which returns the first rows?
A: head method returns the first rows.
Q: What do you know about head method?
A: Head method returns the first rows.
Q: Which returns the last rows?
A: tail method returns the last rows.
Q: What do you know about tail method?
A: Tail method returns the last rows.
Q: Which is done by assigning a new column name?
A: Add column is done by assigning a new column name.
Q: What do you know about Add column?
A: Add column is done by assigning a new column name.
Q: Which is done with loc and a new label?
A: Add row is done with loc and a new label.
Q: What do you know about Add row?
A: Add row is done with loc and a new label.
Q: Which uses drop with axis zero?
A: Drop row uses drop with axis zero.
Q: What do you know about Drop row?
A: Drop row uses drop with axis zero.
Q: Which uses drop with axis one?
A: Drop column uses drop with axis one.
Q: What do you know about Drop column?
A: Drop column uses drop with axis one.
Q: Which uses rename with columns argument?
A: Rename column uses rename with columns argument.
Q: What do you know about Rename column?
A: Rename column uses rename with columns argument.
Q: Which assigns a value with loc?
A: Update cell assigns a value with loc.
Q: What do you know about Update cell?
A: Update cell assigns a value with loc.
Q: Which orders rows by a column?
A: Sort values orders rows by a column.
Q: What do you know about Sort values?
A: Sort values orders rows by a column.
Q: Which swaps rows and columns?
A: Transpose swaps rows and columns.
Q: What do you know about Transpose?
A: Transpose swaps rows and columns.
Q: Which restores a default index?
A: Reset index restores a default index.
Q: What do you know about Reset index?
A: Reset index restores a default index.
Q: Which makes a column the index?
A: Set index makes a column the index.
Q: What do you know about Set index?
A: Set index makes a column the index.
Q: Which loads a CSV file into a DataFrame?
A: read_csv loads a CSV file into a DataFrame.
Q: What do you know about read_csv?
A: Read_csv loads a CSV file into a DataFrame.
Q: Which writes a DataFrame to a CSV file?
A: to_csv writes a DataFrame to a CSV file.
Q: What do you know about to_csv?
A: To_csv writes a DataFrame to a CSV file.
Q: Which omits the index while saving?
A: index False omits the index while saving.
Q: What do you know about index False?
A: Index False omits the index while saving.
Q: Which stands for comma separated values?
A: CSV stands for comma separated values.
Q: What do you know about CSV?
A: CSV stands for comma separated values.
Q: Which is the first row with column names?
A: Header is the first row with column names.
Q: What do you know about Header?
A: Header is the first row with column names.
Q: Which is set with the sep argument?
A: Separator is set with the sep argument.
Q: What do you know about Separator?
A: Separator is set with the sep argument.
Q: Which iterates over rows?
A: iterrows iterates over rows.
Q: What do you know about iterrows?
A: Iterrows iterates over rows.
Q: Which iterates over rows as tuples?
A: itertuples iterates over rows as tuples.
Q: What do you know about itertuples?
A: Itertuples iterates over rows as tuples.
Q: Which iterates over columns?
A: items iterates over columns.
Q: What do you know about items?
A: Items iterates over columns.
Q: Which removes rows with NaN?
A: Dropna removes rows with NaN.
Q: What do you know about Dropna?
A: Dropna removes rows with NaN.
Q: What is a DataFrame?
A: A two-dimensional labelled data structure of rows and columns.
Q: How do you select a column?
A: With df['col'] or df.col.
Q: How do you select a cell by label?
A: Using df.loc[row, col].
Q: What does df.shape return?
A: A tuple (number of rows, number of columns).
Q: What does axis=1 mean in drop?
A: Drop columns.
Q: How do you save without writing the index?
A: Use to_csv with index=False.
Q: What happens to missing keys in a list of dictionaries?
A: They become NaN.
Q: What does df.T give?
A: The transpose with rows and columns swapped.
@quiz
? Which is a two dimensional labelled structure?
- pd.DataFrame
- Index labels
+ DataFrame
- Heterogeneous data
! DataFrame is a two dimensional labelled structure.
? Which statement is true of DataFrame?
+ Is a two dimensional labelled structure
- Is the analogy for a DataFrame
- Is the constructor
- Suits DataFrames
! DataFrame is a two dimensional labelled structure.
? Which is a horizontal record of a DataFrame?
+ Row
- Index labels
- Heterogeneous data
- Column labels
! Row is a horizontal record of a DataFrame.
? Which statement is true of Row?
+ Is a horizontal record of a DataFrame
- Is the constructor
- Name the columns
- Is the analogy for a DataFrame
! Row is a horizontal record of a DataFrame.
? Which is a Series in a DataFrame?
+ Column
- pd.DataFrame
- Index labels
- Tabular data
! Column is a Series in a DataFrame.
? Which statement is true of Column?
- May be held in different columns
+ Is a Series in a DataFrame
- Is a tuple of rows and columns
- Is a two dimensional labelled structure
! Column is a Series in a DataFrame.
? Which may be held in different columns?
- Row
+ Heterogeneous data
- Index labels
- Column labels
! Heterogeneous data may be held in different columns.
? Which statement is true of Heterogeneous data?
- Is a horizontal record of a DataFrame
+ May be held in different columns
- Is a tuple of rows and columns
- Is the analogy for a DataFrame
! Heterogeneous data may be held in different columns.
? Which name the rows?
- Column labels
+ Index labels
- Tabular data
- DataFrame
! Index labels name the rows.
? Which statement is true of Index labels?
- Is a tuple of rows and columns
- Is a Series in a DataFrame
+ Name the rows
- Is a two dimensional labelled structure
! Index labels name the rows.
? Which name the columns?
+ Column labels
- Table
- Index labels
- Row
! Column labels name the columns.
? Which statement is true of Column labels?
+ Name the columns
- Is a two dimensional labelled structure
- Name the rows
- Is a tuple of rows and columns
! Column labels name the columns.
? Which is the analogy for a DataFrame?
- Column
- Tabular data
+ Table
- Column labels
! Table is the analogy for a DataFrame.
? Which statement is true of Table?
- Is a horizontal record of a DataFrame
+ Is the analogy for a DataFrame
- Is a Series in a DataFrame
- Name the columns
! Table is the analogy for a DataFrame.
? Which is the constructor?
- Table
- Column labels
- Index labels
+ pd.DataFrame
! Pd.DataFrame is the constructor.
? Which statement is true of pd.DataFrame?
- Is a horizontal record of a DataFrame
+ Is the constructor
- Is a two dimensional labelled structure
- Suits DataFrames
! Pd.DataFrame is the constructor.
? Which is a tuple of rows and columns?
- pd.DataFrame
- Tabular data
- Index labels
+ Shape
! Shape is a tuple of rows and columns.
? Which statement is true of Shape?
- Is a Series in a DataFrame
- Name the columns
- Is the constructor
+ Is a tuple of rows and columns
! Shape is a tuple of rows and columns.
? Which suits DataFrames?
- Column labels
- Shape
- Heterogeneous data
+ Tabular data
! Tabular data suits DataFrames.
? Which statement is true of Tabular data?
- Is a tuple of rows and columns
+ Suits DataFrames
- Is a Series in a DataFrame
- Is the constructor
! Tabular data suits DataFrames.
? Which creates columns from lists?
+ Dictionary of lists
- Dictionary of Series
- NumPy array
- Empty DataFrame
! Dictionary of lists creates columns from lists.
? Which statement is true of Dictionary of lists?
- Names the rows
- Can create a DataFrame
- Names the columns
+ Creates columns from lists
! Dictionary of lists creates columns from lists.
? Which creates rows from dictionaries?
+ List of dictionaries
- Empty DataFrame
- Missing key
- Index argument
! List of dictionaries creates rows from dictionaries.
? Which statement is true of List of dictionaries?
+ Creates rows from dictionaries
- Can create a DataFrame
- Aligns on index labels
- Names the columns
! List of dictionaries creates rows from dictionaries.
? Which becomes NaN in a list of dictionaries?
+ Missing key
- Index argument
- CSV file
- NumPy array
! Missing key becomes NaN in a list of dictionaries.
? Which statement is true of Missing key?
- Names the columns
+ Becomes NaN in a list of dictionaries
- Can create a DataFrame
- Aligns on index labels
! Missing key becomes NaN in a list of dictionaries.
? Which aligns on index labels?
- Dictionary of lists
+ Dictionary of Series
- NumPy array
- CSV file
! Dictionary of Series aligns on index labels.
? Which statement is true of Dictionary of Series?
- Names the columns
+ Aligns on index labels
- Creates columns from lists
- Can create a DataFrame
! Dictionary of Series aligns on index labels.
? Which creates rows from lists?
+ List of lists
- Dictionary of lists
- List of dictionaries
- Columns argument
! List of lists creates rows from lists.
? Which statement is true of List of lists?
- Can create a DataFrame
- Names the columns
- Creates columns from lists
+ Creates rows from lists
! List of lists creates rows from lists.
? Which can create a DataFrame?
- Empty DataFrame
- Index argument
- CSV file
+ NumPy array
! NumPy array can create a DataFrame.
? Which statement is true of NumPy array?
+ Can create a DataFrame
- Creates columns from lists
- Names the columns
- Has no rows
! NumPy array can create a DataFrame.
? Which names the columns?
- Dictionary of Series
+ Columns argument
- NumPy array
- CSV file
! Columns argument names the columns.
? Which statement is true of Columns argument?
+ Names the columns
- Can create a DataFrame
- Creates rows from dictionaries
- Has no rows
! Columns argument names the columns.
? Which names the rows?
- Empty DataFrame
+ Index argument
- NumPy array
- CSV file
! Index argument names the rows.
? Which statement is true of Index argument?
- Can create a DataFrame
- Aligns on index labels
- Creates rows from lists
+ Names the rows
! Index argument names the rows.
? Which statement is true of CSV file?
- Names the rows
- Creates rows from dictionaries
+ Can create a DataFrame
- Names the columns
! CSV file can create a DataFrame.
? Which has no rows?
+ Empty DataFrame
- Index argument
- Dictionary of Series
- CSV file
! Empty DataFrame has no rows.
? Which statement is true of Empty DataFrame?
- Names the rows
+ Has no rows
- Becomes NaN in a list of dictionaries
- Creates columns from lists
! Empty DataFrame has no rows.
? Which gives row labels?
+ index attribute
- size attribute
- shape attribute
- values attribute
! Index attribute gives row labels.
? Which statement is true of index attribute?
+ Gives row labels
- Gives column labels
- Returns the transpose
- Gives rows and columns count
! Index attribute gives row labels.
? Which gives column labels?
- values attribute
- dtypes attribute
+ columns attribute
- T attribute
! Columns attribute gives column labels.
? Which statement is true of columns attribute?
- Tells if there is no data
+ Gives column labels
- Returns the transpose
- Returns a NumPy array
! Columns attribute gives column labels.
? Which gives data types of columns?
- columns attribute
- shape attribute
+ dtypes attribute
- empty attribute
! Dtypes attribute gives data types of columns.
? Which statement is true of dtypes attribute?
+ Gives data types of columns
- Gives column labels
- Gives the total elements
- Gives two for a DataFrame
! Dtypes attribute gives data types of columns.
? Which gives rows and columns count?
- ndim attribute
+ shape attribute
- size attribute
- values attribute
! Shape attribute gives rows and columns count.
? Which statement is true of shape attribute?
- Gives data types of columns
- Gives column labels
- Gives the row and column indexes
+ Gives rows and columns count
! Shape attribute gives rows and columns count.
? Which gives the total elements?
- ndim attribute
- T attribute
- empty attribute
+ size attribute
! Size attribute gives the total elements.
? Which statement is true of size attribute?
- Returns a NumPy array
- Tells if there is no data
+ Gives the total elements
- Gives two for a DataFrame
! Size attribute gives the total elements.
? Which returns a NumPy array?
+ values attribute
- ndim attribute
- dtypes attribute
- shape attribute
! Values attribute returns a NumPy array.
? Which statement is true of values attribute?
- Gives data types of columns
- Gives rows and columns count
+ Returns a NumPy array
- Gives the total elements
! Values attribute returns a NumPy array.
? Which returns the transpose?
+ T attribute
- index attribute
- size attribute
- columns attribute
! T attribute returns the transpose.
? Which statement is true of T attribute?
- Gives rows and columns count
- Gives data types of columns
- Gives column labels
+ Returns the transpose
! T attribute returns the transpose.
? Which gives two for a DataFrame?
- index attribute
+ ndim attribute
- empty attribute
- columns attribute
! Ndim attribute gives two for a DataFrame.
? Which statement is true of ndim attribute?
- Returns the transpose
- Gives row labels
- Gives column labels
+ Gives two for a DataFrame
! Ndim attribute gives two for a DataFrame.
? Which gives the row and column indexes?
- dtypes attribute
- shape attribute
- T attribute
+ axes attribute
! Axes attribute gives the row and column indexes.
? Which statement is true of axes attribute?
- Gives two for a DataFrame
- Gives column labels
- Returns a NumPy array
+ Gives the row and column indexes
! Axes attribute gives the row and column indexes.
? Which tells if there is no data?
+ empty attribute
- ndim attribute
- index attribute
- dtypes attribute
! Empty attribute tells if there is no data.
? Which statement is true of empty attribute?
- Gives rows and columns count
- Returns the transpose
- Gives the row and column indexes
+ Tells if there is no data
! Empty attribute tells if there is no data.
? Which is selected by df['col']?
- tail method
- Multiple columns
- iloc
+ Single column
! Single column is selected by df['col'].
? Which statement is true of Single column?
- Filters rows by a condition
+ Is selected by df['col']
- Selects a column by df.col
- Is selected by iloc with start and stop
! Single column is selected by df['col'].
? Which are selected with a list of names?
+ Multiple columns
- Single column
- Boolean selection
- loc
! Multiple columns are selected with a list of names.
? Which statement is true of Multiple columns?
- Filters rows by a condition
- Selects a column by df.col
- Is selected by df.loc[row, col]
+ Are selected with a list of names
! Multiple columns are selected with a list of names.
? Which selects a column by df.col?
+ Dot notation
- Cell
- Row slice
- iloc
! Dot notation selects a column by df.col.
? Which statement is true of Dot notation?
- Are selected with a list of names
- Returns the first rows
- Is selected by df['col']
+ Selects a column by df.col
! Dot notation selects a column by df.col.
? Which selects rows and columns by label?
- head method
+ loc
- Row slice
- Dot notation
! Loc selects rows and columns by label.
? Which statement is true of loc?
- Is selected by df.loc[row, col]
+ Selects rows and columns by label
- Returns the first rows
- Are selected with a list of names
! Loc selects rows and columns by label.
? Which selects rows and columns by position?
- head method
+ iloc
- loc
- Cell
! Iloc selects rows and columns by position.
? Which statement is true of iloc?
- Is selected by df['col']
+ Selects rows and columns by position
- Selects rows and columns by label
- Is selected by df.loc[row, col]
! Iloc selects rows and columns by position.
? Which is selected by df.loc[row, col]?
+ Cell
- tail method
- Single column
- loc
! Cell is selected by df.loc[row, col].
? Which statement is true of Cell?
- Selects a column by df.col
- Returns the last rows
- Returns the first rows
+ Is selected by df.loc[row, col]
! Cell is selected by df.loc[row, col].
? Which is selected by iloc with start and stop?
- Single column
+ Row slice
- Multiple columns
- iloc
! Row slice is selected by iloc with start and stop.
? Which statement is true of Row slice?
- Returns the last rows
- Selects rows and columns by position
+ Is selected by iloc with start and stop
- Is selected by df['col']
! Row slice is selected by iloc with start and stop.
? Which filters rows by a condition?
+ Boolean selection
- Cell
- iloc
- Multiple columns
! Boolean selection filters rows by a condition.
? Which statement is true of Boolean selection?
+ Filters rows by a condition
- Are selected with a list of names
- Selects a column by df.col
- Is selected by df.loc[row, col]
! Boolean selection filters rows by a condition.
? Which returns the first rows?
+ head method
- Multiple columns
- Single column
- Dot notation
! Head method returns the first rows.
? Which statement is true of head method?
- Selects rows and columns by label
- Is selected by df['col']
- Filters rows by a condition
+ Returns the first rows
! Head method returns the first rows.
? Which returns the last rows?
- head method
- iloc
+ tail method
- Cell
! Tail method returns the last rows.
? Which statement is true of tail method?
- Selects a column by df.col
- Is selected by df.loc[row, col]
- Is selected by iloc with start and stop
+ Returns the last rows
! Tail method returns the last rows.
? Which is done by assigning a new column name?
- Transpose
+ Add column
- Sort values
- Set index
! Add column is done by assigning a new column name.
? Which statement is true of Add column?
- Uses drop with axis zero
+ Is done by assigning a new column name
- Orders rows by a column
- Uses drop with axis one
! Add column is done by assigning a new column name.
? Which is done with loc and a new label?
+ Add row
- Transpose
- Reset index
- Sort values
! Add row is done with loc and a new label.
? Which statement is true of Add row?
+ Is done with loc and a new label
- Uses drop with axis one
- Restores a default index
- Is done by assigning a new column name
! Add row is done with loc and a new label.
? Which uses drop with axis zero?
+ Drop row
- Transpose
- Add row
- Set index
! Drop row uses drop with axis zero.
? Which statement is true of Drop row?
- Is done by assigning a new column name
- Uses rename with columns argument
- Is done with loc and a new label
+ Uses drop with axis zero
! Drop row uses drop with axis zero.
? Which uses drop with axis one?
- Drop row
- Update cell
+ Drop column
- Add row
! Drop column uses drop with axis one.
? Which statement is true of Drop column?
- Orders rows by a column
- Assigns a value with loc
+ Uses drop with axis one
- Is done by assigning a new column name
! Drop column uses drop with axis one.
? Which uses rename with columns argument?
- Reset index
+ Rename column
- Drop column
- Add row
! Rename column uses rename with columns argument.
? Which statement is true of Rename column?
- Restores a default index
- Uses drop with axis zero
- Is done with loc and a new label
+ Uses rename with columns argument
! Rename column uses rename with columns argument.
? Which assigns a value with loc?
+ Update cell
- Add row
- Drop column
- Set index
! Update cell assigns a value with loc.
? Which statement is true of Update cell?
- Orders rows by a column
- Uses drop with axis zero
- Swaps rows and columns
+ Assigns a value with loc
! Update cell assigns a value with loc.
? Which orders rows by a column?
- Update cell
- Drop row
+ Sort values
- Reset index
! Sort values orders rows by a column.
? Which statement is true of Sort values?
- Assigns a value with loc
- Makes a column the index
- Swaps rows and columns
+ Orders rows by a column
! Sort values orders rows by a column.
? Which swaps rows and columns?
- Reset index
- Add row
- Rename column
+ Transpose
! Transpose swaps rows and columns.
? Which statement is true of Transpose?
+ Swaps rows and columns
- Makes a column the index
- Assigns a value with loc
- Uses drop with axis one
! Transpose swaps rows and columns.
? Which restores a default index?
- Add row
- Add column
+ Reset index
- Drop row
! Reset index restores a default index.
? Which statement is true of Reset index?
- Swaps rows and columns
+ Restores a default index
- Uses rename with columns argument
- Makes a column the index
! Reset index restores a default index.
? Which makes a column the index?
- Drop column
- Drop row
+ Set index
- Add column
! Set index makes a column the index.
? Which statement is true of Set index?
- Assigns a value with loc
- Is done by assigning a new column name
- Orders rows by a column
+ Makes a column the index
! Set index makes a column the index.
? Which loads a CSV file into a DataFrame?
- iterrows
- Header
- index False
+ read_csv
! Read_csv loads a CSV file into a DataFrame.
? Which statement is true of read_csv?
+ Loads a CSV file into a DataFrame
- Removes rows with NaN
- Omits the index while saving
- Iterates over rows
! Read_csv loads a CSV file into a DataFrame.
? Which writes a DataFrame to a CSV file?
- Header
+ to_csv
- iterrows
- itertuples
! To_csv writes a DataFrame to a CSV file.
? Which statement is true of to_csv?
- Iterates over rows as tuples
+ Writes a DataFrame to a CSV file
- Loads a CSV file into a DataFrame
- Is the first row with column names
! To_csv writes a DataFrame to a CSV file.
? Which omits the index while saving?
- iterrows
- Header
- Separator
+ index False
! Index False omits the index while saving.
? Which statement is true of index False?
- Writes a DataFrame to a CSV file
- Is set with the sep argument
+ Omits the index while saving
- Stands for comma separated values
! Index False omits the index while saving.
? Which stands for comma separated values?
- Header
+ CSV
- iterrows
- read_csv
! CSV stands for comma separated values.
? Which statement is true of CSV?
- Iterates over rows
- Iterates over columns
+ Stands for comma separated values
- Iterates over rows as tuples
! CSV stands for comma separated values.
? Which is the first row with column names?
- Dropna
+ Header
- Separator
- CSV
! Header is the first row with column names.
? Which statement is true of Header?
- Stands for comma separated values
- Iterates over rows as tuples
- Writes a DataFrame to a CSV file
+ Is the first row with column names
! Header is the first row with column names.
? Which is set with the sep argument?
- Header
- items
+ Separator
- iterrows
! Separator is set with the sep argument.
? Which statement is true of Separator?
- Iterates over columns
- Removes rows with NaN
+ Is set with the sep argument
- Stands for comma separated values
! Separator is set with the sep argument.
? Which iterates over rows?
+ iterrows
- itertuples
- Dropna
- Header
! Iterrows iterates over rows.
? Which statement is true of iterrows?
- Loads a CSV file into a DataFrame
- Writes a DataFrame to a CSV file
- Omits the index while saving
+ Iterates over rows
! Iterrows iterates over rows.
? Which iterates over rows as tuples?
- Header
+ itertuples
- CSV
- Dropna
! Itertuples iterates over rows as tuples.
? Which statement is true of itertuples?
- Writes a DataFrame to a CSV file
- Is set with the sep argument
+ Iterates over rows as tuples
- Omits the index while saving
! Itertuples iterates over rows as tuples.
? Which iterates over columns?
- Header
+ items
- iterrows
- read_csv
! Items iterates over columns.
? Which statement is true of items?
+ Iterates over columns
- Is the first row with column names
- Loads a CSV file into a DataFrame
- Stands for comma separated values
! Items iterates over columns.
? Which removes rows with NaN?
- Header
- index False
- to_csv
+ Dropna
! Dropna removes rows with NaN.
? Which statement is true of Dropna?
+ Removes rows with NaN
- Iterates over columns
- Is set with the sep argument
- Loads a CSV file into a DataFrame
! Dropna removes rows with NaN.
? A DataFrame column is a
+ Series
- List
- Tuple
- Set
! Series.
? Loading CSV uses
- load_csv
- open_csv
- fetch_csv
+ read_csv
! read_csv.
? Drop rows with axis
- 1
+ 0
- 2
- -1
! 0.
? Transpose attribute
- R
- X
- Tr
+ T
! T.
? Boolean selection example
- df(marks>80)
- df.if(marks>80)
- select df
+ df[df.marks > 80]
! Boolean mask.
? DataFrame shape gives
- Only rows
+ Rows and columns
- Only columns
- Only type
! Rows and columns.
@visual
blocks | DataFrame attributes | index; columns; shape; dtypes; values; T
compare | loc and iloc | loc=Labels~Rows and columns; iloc=Positions~Integer
steps | Add column | Choose name; Assign values; Check; Save
flow | CSV round trip | Read CSV; Process; Write CSV; Verify
mind | DataFrame | Create; Select; Modify; CSV
@problems
## Moderate
P: How is a column added to a DataFrame?
A: By assigning values to a new column name, as in df['new'] = values.
R: 3 | Assign
R: 3 | Column
## High
P: Explain how to drop a row and a column.
A: Use df.drop(label, axis=0) for a row and df.drop(label, axis=1) for a column.
R: 2 | drop
R: 2 | axis=0
R: 2 | axis=1
R: 2 | Label
## Advanced
P: How do you read a CSV and save it without the index?
A: Use pd.read_csv('f.csv') to read and df.to_csv('g.csv', index=False) to save.
R: 2 | read_csv
R: 2 | to_csv
R: 2 | index=False
R: 2 | File

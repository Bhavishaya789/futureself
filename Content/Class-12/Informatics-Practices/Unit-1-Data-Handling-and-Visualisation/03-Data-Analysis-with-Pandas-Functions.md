# Data Handling using Pandas: Analysis, Statistics and Aggregation
minutes: 45
yt: class 12 informatics practices pandas statistics groupby aggregate sort descriptive pivot missing values
@study
Pandas supports data analysis using statistical functions. Descriptive statistics include sum, mean, median, mode, min, max, std, var, count and quantile. describe() gives count, mean, std, min, quartiles and max for numeric columns. Most functions take axis, where axis=0 works down columns and axis=1 across rows, and skipna=True ignores NaN by default. Sorting uses sort_values(by=..., ascending=...) and sort_index(). Missing data is handled with isnull(), notnull(), dropna() and fillna(value). Duplicates are managed with duplicated() and drop_duplicates(). The groupby() method splits data into groups by a column, then applies an aggregate such as sum, mean or count, as in df.groupby('class')['marks'].mean(). The agg() method applies several functions. Pivot tables summarise data by index and columns with a function. The apply() method applies a function along an axis, and map or applymap apply functions to elements. Data can be merged with merge() on a common column, and concatenated with pd.concat() along rows or columns. Selection by conditions can combine tests with & and |, each condition in brackets. The unique() and nunique() functions find distinct values, and value_counts() counts them. Rank, cumsum and cumprod give cumulative measures. Indexing tools like set_index and reset_index change the index. Reading and cleaning data is a key step before analysis.
## Deep dive: Descriptive statistics
sum, mean, median, std, min, max and describe summarise numeric columns; axis picks direction.
## Deep dive: Cleaning
isnull, dropna, fillna and drop_duplicates prepare data for analysis.
## Deep dive: Grouping and combining
groupby with aggregates summarises data by category; merge and concat combine DataFrames.
## Hindi saransh
Pandas ke statistical function, sorting, missing values, groupby, merge aur concat se data vishleshan.
> Remember: use & and | with brackets for multiple conditions.
@formulas
## Syntax
Sort | df.sort_values(by='c')
Group | df.groupby('c')['m'].mean()
Missing | df.fillna(0)
Merge | pd.merge(a, b, on='k')
Summary | df.describe()

@qa
Q: Which adds values?
A: sum adds values.
Q: What do you know about sum?
A: Sum adds values.
Q: Which gives the average?
A: mean gives the average.
Q: What do you know about mean?
A: Mean gives the average.
Q: Which gives the middle value?
A: median gives the middle value.
Q: What do you know about median?
A: Median gives the middle value.
Q: Which gives the most frequent value?
A: mode gives the most frequent value.
Q: What do you know about mode?
A: Mode gives the most frequent value.
Q: Which gives the standard deviation?
A: std gives the standard deviation.
Q: What do you know about std?
A: Std gives the standard deviation.
Q: Which gives the variance?
A: var gives the variance.
Q: What do you know about var?
A: Var gives the variance.
Q: Which gives the smallest value?
A: min gives the smallest value.
Q: What do you know about min?
A: Min gives the smallest value.
Q: Which gives the largest value?
A: max gives the largest value.
Q: What do you know about max?
A: Max gives the largest value.
Q: Which counts non missing values?
A: count counts non missing values.
Q: What do you know about count?
A: Count counts non missing values.
Q: Which gives a given percentile?
A: quantile gives a given percentile.
Q: What do you know about quantile?
A: Quantile gives a given percentile.
Q: Which gives a summary of numeric columns?
A: describe gives a summary of numeric columns.
Q: What do you know about describe?
A: Describe gives a summary of numeric columns.
Q: Which is part of the describe output?
A: Quartile is part of the describe output.
Q: What do you know about Quartile?
A: Quartile is part of the describe output.
Q: Which works down the columns?
A: axis zero works down the columns.
Q: What do you know about axis zero?
A: Axis zero works down the columns.
Q: Which works across the rows?
A: axis one works across the rows.
Q: What do you know about axis one?
A: Axis one works across the rows.
Q: Which ignores missing values by default?
A: skipna ignores missing values by default.
Q: What do you know about skipna?
A: Skipna ignores missing values by default.
Q: Which gives a running total?
A: cumsum gives a running total.
Q: What do you know about cumsum?
A: Cumsum gives a running total.
Q: Which gives a running product?
A: cumprod gives a running product.
Q: What do you know about cumprod?
A: Cumprod gives a running product.
Q: Which gives the rank of values?
A: rank gives the rank of values.
Q: What do you know about rank?
A: Rank gives the rank of values.
Q: Which counts distinct values?
A: nunique counts distinct values.
Q: What do you know about nunique?
A: Nunique counts distinct values.
Q: Which counts each distinct value?
A: value counts counts each distinct value.
Q: What do you know about value counts?
A: Value counts counts each distinct value.
Q: Which tests for missing values?
A: isnull tests for missing values.
Q: What do you know about isnull?
A: Isnull tests for missing values.
Q: Which tests for present values?
A: notnull tests for present values.
Q: What do you know about notnull?
A: Notnull tests for present values.
Q: Which removes missing data?
A: dropna removes missing data.
Q: What do you know about dropna?
A: Dropna removes missing data.
Q: Which replaces missing data?
A: fillna replaces missing data.
Q: What do you know about fillna?
A: Fillna replaces missing data.
Q: Which marks repeated rows?
A: duplicated marks repeated rows.
Q: What do you know about duplicated?
A: Duplicated marks repeated rows.
Q: Which removes repeated rows?
A: drop duplicates removes repeated rows.
Q: What do you know about drop duplicates?
A: Drop duplicates removes repeated rows.
Q: Which substitutes values?
A: replace substitutes values.
Q: What do you know about replace?
A: Replace substitutes values.
Q: Which changes the data type?
A: astype changes the data type.
Q: What do you know about astype?
A: Astype changes the data type.
Q: Which is an extreme value?
A: Outlier is an extreme value.
Q: What do you know about Outlier?
A: Outlier is an extreme value.
Q: Which comes before analysis?
A: Cleaning comes before analysis.
Q: What do you know about Cleaning?
A: Cleaning comes before analysis.
Q: Which orders by column values?
A: sort values orders by column values.
Q: What do you know about sort values?
A: Sort values orders by column values.
Q: Which orders by labels?
A: sort index orders by labels.
Q: What do you know about sort index?
A: Sort index orders by labels.
Q: Which sets sort order?
A: ascending argument sets sort order.
Q: What do you know about ascending argument?
A: Ascending argument sets sort order.
Q: Which names the sort column?
A: by argument names the sort column.
Q: What do you know about by argument?
A: By argument names the sort column.
Q: Which uses ascending False?
A: Descending sort uses ascending False.
Q: What do you know about Descending sort?
A: Descending sort uses ascending False.
Q: Which returns the largest rows?
A: nlargest returns the largest rows.
Q: What do you know about nlargest?
A: Nlargest returns the largest rows.
Q: Which returns the smallest rows?
A: nsmallest returns the smallest rows.
Q: What do you know about nsmallest?
A: Nsmallest returns the smallest rows.
Q: Which takes a list of columns?
A: Multi column sort takes a list of columns.
Q: What do you know about Multi column sort?
A: Multi column sort takes a list of columns.
Q: Which keeps ties in order?
A: Stable order keeps ties in order.
Q: What do you know about Stable order?
A: Stable order keeps ties in order.
Q: Which can be reversed?
A: Rank order can be reversed.
Q: What do you know about Rank order?
A: Rank order can be reversed.
Q: Which splits data by a column?
A: groupby splits data by a column.
Q: What do you know about groupby?
A: Groupby splits data by a column.
Q: Which applies several functions?
A: agg applies several functions.
Q: What do you know about agg?
A: Agg applies several functions.
Q: Which summarises a group?
A: Aggregate summarises a group.
Q: What do you know about Aggregate?
A: Aggregate summarises a group.
Q: Which gives the average per group?
A: Group mean gives the average per group.
Q: What do you know about Group mean?
A: Group mean gives the average per group.
Q: Which gives the size per group?
A: Group count gives the size per group.
Q: What do you know about Group count?
A: Group count gives the size per group.
Q: Which summarises by index and columns?
A: Pivot table summarises by index and columns.
Q: What do you know about Pivot table?
A: Pivot table summarises by index and columns.
Q: Which counts combinations of categories?
A: Crosstab counts combinations of categories.
Q: What do you know about Crosstab?
A: Crosstab counts combinations of categories.
Q: Which applies a function along an axis?
A: apply applies a function along an axis.
Q: What do you know about apply?
A: Apply applies a function along an axis.
Q: Which applies a function to a Series element?
A: map applies a function to a Series element.
Q: What do you know about map?
A: Map applies a function to a Series element.
Q: Which applies a function to every element?
A: applymap applies a function to every element.
Q: What do you know about applymap?
A: Applymap applies a function to every element.
Q: Which joins DataFrames on a key column?
A: merge joins DataFrames on a key column.
Q: What do you know about merge?
A: Merge joins DataFrames on a key column.
Q: Which stacks DataFrames along an axis?
A: concat stacks DataFrames along an axis.
Q: What do you know about concat?
A: Concat stacks DataFrames along an axis.
Q: Which keeps matching keys?
A: Inner join keeps matching keys.
Q: What do you know about Inner join?
A: Inner join keeps matching keys.
Q: Which keeps all keys?
A: Outer join keeps all keys.
Q: What do you know about Outer join?
A: Outer join keeps all keys.
Q: Which keeps all left rows?
A: Left join keeps all left rows.
Q: What do you know about Left join?
A: Left join keeps all left rows.
Q: Which is set with the on argument?
A: Key column is set with the on argument.
Q: What do you know about Key column?
A: Key column is set with the on argument.
Q: Which resets the index in concat?
A: Ignore index resets the index in concat.
Q: What do you know about Ignore index?
A: Ignore index resets the index in concat.
Q: Which adds rows at the end?
A: Append adds rows at the end.
Q: What do you know about Append?
A: Append adds rows at the end.
Q: Which uses the ampersand with brackets?
A: Condition and uses the ampersand with brackets.
Q: What do you know about Condition and?
A: Condition and uses the ampersand with brackets.
Q: Which uses the pipe with brackets?
A: Condition or uses the pipe with brackets.
Q: What do you know about Condition or?
A: Condition or uses the pipe with brackets.
Q: What does groupby do?
A: It splits data into groups by a column so an aggregate can be applied.
Q: How do you fill missing values?
A: Using fillna with a value.
Q: How do you remove duplicate rows?
A: Using drop_duplicates.
Q: What does axis=1 mean in sum?
A: Sum across the columns for each row.
Q: How do you combine conditions?
A: With & and | with each condition in brackets.
Q: What is merge used for?
A: To join two DataFrames on a common key column.
Q: What does value_counts do?
A: Counts occurrences of each distinct value.
Q: How do you sort by a column in descending order?
A: sort_values(by='c', ascending=False).
@quiz
? Which adds values?
- quantile
- count
- min
+ sum
! Sum adds values.
? Which statement is true of sum?
- Gives the most frequent value
- Gives the smallest value
+ Adds values
- Gives the average
! Sum adds values.
? Which gives the average?
- min
- sum
+ mean
- median
! Mean gives the average.
? Which statement is true of mean?
+ Gives the average
- Gives the smallest value
- Gives the standard deviation
- Gives the most frequent value
! Mean gives the average.
? Which gives the middle value?
- mean
+ median
- min
- max
! Median gives the middle value.
? Which statement is true of median?
- Gives the standard deviation
- Gives a given percentile
- Gives the variance
+ Gives the middle value
! Median gives the middle value.
? Which gives the most frequent value?
+ mode
- mean
- min
- median
! Mode gives the most frequent value.
? Which statement is true of mode?
- Adds values
+ Gives the most frequent value
- Gives the average
- Gives the variance
! Mode gives the most frequent value.
? Which gives the standard deviation?
- quantile
- mean
+ std
- sum
! Std gives the standard deviation.
? Which statement is true of std?
+ Gives the standard deviation
- Gives the largest value
- Adds values
- Gives the variance
! Std gives the standard deviation.
? Which gives the variance?
+ var
- min
- max
- std
! Var gives the variance.
? Which statement is true of var?
- Gives the smallest value
- Gives the standard deviation
+ Gives the variance
- Gives the most frequent value
! Var gives the variance.
? Which gives the smallest value?
- median
+ min
- sum
- mode
! Min gives the smallest value.
? Which statement is true of min?
- Gives the most frequent value
- Gives the middle value
- Gives the standard deviation
+ Gives the smallest value
! Min gives the smallest value.
? Which gives the largest value?
- var
- median
- mode
+ max
! Max gives the largest value.
? Which statement is true of max?
- Adds values
+ Gives the largest value
- Gives the most frequent value
- Gives the smallest value
! Max gives the largest value.
? Which counts non missing values?
- mean
- median
- quantile
+ count
! Count counts non missing values.
? Which statement is true of count?
- Gives the middle value
- Gives the most frequent value
- Gives a given percentile
+ Counts non missing values
! Count counts non missing values.
? Which gives a given percentile?
- count
+ quantile
- min
- sum
! Quantile gives a given percentile.
? Which statement is true of quantile?
- Gives the smallest value
- Gives the standard deviation
+ Gives a given percentile
- Gives the most frequent value
! Quantile gives a given percentile.
? Which gives a summary of numeric columns?
- value counts
+ describe
- rank
- cumsum
! Describe gives a summary of numeric columns.
? Which statement is true of describe?
- Is part of the describe output
+ Gives a summary of numeric columns
- Counts distinct values
- Gives a running product
! Describe gives a summary of numeric columns.
? Which is part of the describe output?
- cumsum
- nunique
+ Quartile
- skipna
! Quartile is part of the describe output.
? Which statement is true of Quartile?
- Gives a running total
- Works down the columns
+ Is part of the describe output
- Gives a summary of numeric columns
! Quartile is part of the describe output.
? Which works down the columns?
- rank
- value counts
- skipna
+ axis zero
! Axis zero works down the columns.
? Which statement is true of axis zero?
- Gives the rank of values
- Is part of the describe output
- Counts distinct values
+ Works down the columns
! Axis zero works down the columns.
? Which works across the rows?
+ axis one
- cumprod
- axis zero
- cumsum
! Axis one works across the rows.
? Which statement is true of axis one?
+ Works across the rows
- Counts each distinct value
- Works down the columns
- Gives a running product
! Axis one works across the rows.
? Which ignores missing values by default?
- cumsum
- describe
+ skipna
- axis zero
! Skipna ignores missing values by default.
? Which statement is true of skipna?
- Is part of the describe output
- Gives a summary of numeric columns
+ Ignores missing values by default
- Counts each distinct value
! Skipna ignores missing values by default.
? Which gives a running total?
- Quartile
- axis one
+ cumsum
- cumprod
! Cumsum gives a running total.
? Which statement is true of cumsum?
+ Gives a running total
- Is part of the describe output
- Counts distinct values
- Ignores missing values by default
! Cumsum gives a running total.
? Which gives a running product?
- Quartile
- rank
- describe
+ cumprod
! Cumprod gives a running product.
? Which statement is true of cumprod?
- Counts distinct values
- Counts each distinct value
- Gives a running total
+ Gives a running product
! Cumprod gives a running product.
? Which gives the rank of values?
+ rank
- cumsum
- cumprod
- Quartile
! Rank gives the rank of values.
? Which statement is true of rank?
- Gives a summary of numeric columns
+ Gives the rank of values
- Counts each distinct value
- Works across the rows
! Rank gives the rank of values.
? Which counts distinct values?
- describe
+ nunique
- rank
- axis zero
! Nunique counts distinct values.
? Which statement is true of nunique?
- Is part of the describe output
- Works across the rows
+ Counts distinct values
- Works down the columns
! Nunique counts distinct values.
? Which counts each distinct value?
- skipna
- Quartile
+ value counts
- axis one
! Value counts counts each distinct value.
? Which statement is true of value counts?
- Gives the rank of values
+ Counts each distinct value
- Works down the columns
- Works across the rows
! Value counts counts each distinct value.
? Which tests for missing values?
- notnull
- drop duplicates
- Cleaning
+ isnull
! Isnull tests for missing values.
? Which statement is true of isnull?
- Substitutes values
- Changes the data type
+ Tests for missing values
- Tests for present values
! Isnull tests for missing values.
? Which tests for present values?
- Outlier
- Cleaning
+ notnull
- dropna
! Notnull tests for present values.
? Which statement is true of notnull?
+ Tests for present values
- Replaces missing data
- Changes the data type
- Substitutes values
! Notnull tests for present values.
? Which removes missing data?
- drop duplicates
- Cleaning
+ dropna
- Outlier
! Dropna removes missing data.
? Which statement is true of dropna?
- Replaces missing data
+ Removes missing data
- Tests for missing values
- Removes repeated rows
! Dropna removes missing data.
? Which replaces missing data?
- astype
- duplicated
- replace
+ fillna
! Fillna replaces missing data.
? Which statement is true of fillna?
- Comes before analysis
- Tests for present values
+ Replaces missing data
- Marks repeated rows
! Fillna replaces missing data.
? Which marks repeated rows?
+ duplicated
- isnull
- notnull
- dropna
! Duplicated marks repeated rows.
? Which statement is true of duplicated?
+ Marks repeated rows
- Tests for missing values
- Tests for present values
- Comes before analysis
! Duplicated marks repeated rows.
? Which removes repeated rows?
- notnull
- replace
- fillna
+ drop duplicates
! Drop duplicates removes repeated rows.
? Which statement is true of drop duplicates?
- Tests for present values
+ Removes repeated rows
- Substitutes values
- Replaces missing data
! Drop duplicates removes repeated rows.
? Which substitutes values?
- fillna
+ replace
- duplicated
- astype
! Replace substitutes values.
? Which statement is true of replace?
- Changes the data type
+ Substitutes values
- Removes repeated rows
- Tests for present values
! Replace substitutes values.
? Which changes the data type?
+ astype
- duplicated
- replace
- drop duplicates
! Astype changes the data type.
? Which statement is true of astype?
- Tests for missing values
- Substitutes values
+ Changes the data type
- Is an extreme value
! Astype changes the data type.
? Which is an extreme value?
- duplicated
- astype
+ Outlier
- notnull
! Outlier is an extreme value.
? Which statement is true of Outlier?
+ Is an extreme value
- Removes missing data
- Tests for present values
- Marks repeated rows
! Outlier is an extreme value.
? Which comes before analysis?
- isnull
- astype
- notnull
+ Cleaning
! Cleaning comes before analysis.
? Which statement is true of Cleaning?
- Removes missing data
+ Comes before analysis
- Changes the data type
- Tests for present values
! Cleaning comes before analysis.
? Which orders by column values?
- Descending sort
- Rank order
+ sort values
- sort index
! Sort values orders by column values.
? Which statement is true of sort values?
- Returns the largest rows
- Orders by labels
+ Orders by column values
- Takes a list of columns
! Sort values orders by column values.
? Which orders by labels?
- sort values
- by argument
- Descending sort
+ sort index
! Sort index orders by labels.
? Which statement is true of sort index?
- Names the sort column
+ Orders by labels
- Uses ascending False
- Returns the smallest rows
! Sort index orders by labels.
? Which sets sort order?
- sort index
- nlargest
- nsmallest
+ ascending argument
! Ascending argument sets sort order.
? Which statement is true of ascending argument?
- Uses ascending False
- Returns the smallest rows
+ Sets sort order
- Can be reversed
! Ascending argument sets sort order.
? Which names the sort column?
- nsmallest
- sort index
- sort values
+ by argument
! By argument names the sort column.
? Which statement is true of by argument?
- Orders by labels
+ Names the sort column
- Takes a list of columns
- Keeps ties in order
! By argument names the sort column.
? Which uses ascending False?
- sort values
- nsmallest
+ Descending sort
- nlargest
! Descending sort uses ascending False.
? Which statement is true of Descending sort?
- Returns the largest rows
- Can be reversed
+ Uses ascending False
- Names the sort column
! Descending sort uses ascending False.
? Which returns the largest rows?
+ nlargest
- Multi column sort
- ascending argument
- by argument
! Nlargest returns the largest rows.
? Which statement is true of nlargest?
- Names the sort column
+ Returns the largest rows
- Orders by labels
- Returns the smallest rows
! Nlargest returns the largest rows.
? Which returns the smallest rows?
- by argument
- Stable order
- Descending sort
+ nsmallest
! Nsmallest returns the smallest rows.
? Which statement is true of nsmallest?
- Names the sort column
- Takes a list of columns
- Uses ascending False
+ Returns the smallest rows
! Nsmallest returns the smallest rows.
? Which takes a list of columns?
+ Multi column sort
- nsmallest
- sort values
- Stable order
! Multi column sort takes a list of columns.
? Which statement is true of Multi column sort?
- Keeps ties in order
- Can be reversed
- Names the sort column
+ Takes a list of columns
! Multi column sort takes a list of columns.
? Which keeps ties in order?
+ Stable order
- by argument
- Multi column sort
- Rank order
! Stable order keeps ties in order.
? Which statement is true of Stable order?
- Takes a list of columns
- Returns the largest rows
+ Keeps ties in order
- Returns the smallest rows
! Stable order keeps ties in order.
? Which can be reversed?
- sort values
- nlargest
+ Rank order
- sort index
! Rank order can be reversed.
? Which statement is true of Rank order?
- Orders by column values
+ Can be reversed
- Names the sort column
- Returns the smallest rows
! Rank order can be reversed.
? Which splits data by a column?
- apply
- Pivot table
- Group mean
+ groupby
! Groupby splits data by a column.
? Which statement is true of groupby?
- Applies a function to a Series element
- Summarises by index and columns
+ Splits data by a column
- Gives the size per group
! Groupby splits data by a column.
? Which applies several functions?
- applymap
+ agg
- groupby
- apply
! Agg applies several functions.
? Which statement is true of agg?
- Applies a function to every element
- Counts combinations of categories
- Applies a function to a Series element
+ Applies several functions
! Agg applies several functions.
? Which summarises a group?
- Group count
- map
+ Aggregate
- Pivot table
! Aggregate summarises a group.
? Which statement is true of Aggregate?
- Summarises by index and columns
- Gives the size per group
- Applies a function along an axis
+ Summarises a group
! Aggregate summarises a group.
? Which gives the average per group?
- groupby
- map
- Aggregate
+ Group mean
! Group mean gives the average per group.
? Which statement is true of Group mean?
+ Gives the average per group
- Applies a function to a Series element
- Summarises a group
- Summarises by index and columns
! Group mean gives the average per group.
? Which gives the size per group?
- map
- apply
- Group mean
+ Group count
! Group count gives the size per group.
? Which statement is true of Group count?
- Applies a function along an axis
- Summarises by index and columns
+ Gives the size per group
- Splits data by a column
! Group count gives the size per group.
? Which summarises by index and columns?
- Group mean
- agg
- map
+ Pivot table
! Pivot table summarises by index and columns.
? Which statement is true of Pivot table?
- Splits data by a column
- Applies a function along an axis
- Summarises a group
+ Summarises by index and columns
! Pivot table summarises by index and columns.
? Which counts combinations of categories?
- groupby
+ Crosstab
- Group count
- apply
! Crosstab counts combinations of categories.
? Which statement is true of Crosstab?
- Summarises by index and columns
- Applies a function along an axis
- Gives the size per group
+ Counts combinations of categories
! Crosstab counts combinations of categories.
? Which applies a function along an axis?
- Aggregate
- Group mean
- Group count
+ apply
! Apply applies a function along an axis.
? Which statement is true of apply?
- Splits data by a column
- Summarises by index and columns
- Applies a function to a Series element
+ Applies a function along an axis
! Apply applies a function along an axis.
? Which applies a function to a Series element?
- groupby
- Crosstab
- applymap
+ map
! Map applies a function to a Series element.
? Which statement is true of map?
- Applies a function to every element
+ Applies a function to a Series element
- Gives the average per group
- Summarises by index and columns
! Map applies a function to a Series element.
? Which applies a function to every element?
+ applymap
- apply
- agg
- Pivot table
! Applymap applies a function to every element.
? Which statement is true of applymap?
- Summarises a group
- Summarises by index and columns
- Applies several functions
+ Applies a function to every element
! Applymap applies a function to every element.
? Which joins DataFrames on a key column?
- Ignore index
- Inner join
- Append
+ merge
! Merge joins DataFrames on a key column.
? Which statement is true of merge?
+ Joins DataFrames on a key column
- Keeps matching keys
- Stacks DataFrames along an axis
- Keeps all left rows
! Merge joins DataFrames on a key column.
? Which stacks DataFrames along an axis?
- merge
- Inner join
+ concat
- Condition or
! Concat stacks DataFrames along an axis.
? Which statement is true of concat?
+ Stacks DataFrames along an axis
- Joins DataFrames on a key column
- Keeps matching keys
- Adds rows at the end
! Concat stacks DataFrames along an axis.
? Which keeps matching keys?
- Condition and
+ Inner join
- Append
- merge
! Inner join keeps matching keys.
? Which statement is true of Inner join?
- Stacks DataFrames along an axis
- Uses the ampersand with brackets
+ Keeps matching keys
- Adds rows at the end
! Inner join keeps matching keys.
? Which keeps all keys?
- merge
- Condition or
+ Outer join
- Ignore index
! Outer join keeps all keys.
? Which statement is true of Outer join?
+ Keeps all keys
- Stacks DataFrames along an axis
- Uses the ampersand with brackets
- Uses the pipe with brackets
! Outer join keeps all keys.
? Which keeps all left rows?
- Condition and
+ Left join
- Condition or
- Key column
! Left join keeps all left rows.
? Which statement is true of Left join?
- Adds rows at the end
- Keeps matching keys
+ Keeps all left rows
- Joins DataFrames on a key column
! Left join keeps all left rows.
? Which is set with the on argument?
- Append
- Condition or
+ Key column
- Ignore index
! Key column is set with the on argument.
? Which statement is true of Key column?
- Keeps all left rows
+ Is set with the on argument
- Uses the pipe with brackets
- Resets the index in concat
! Key column is set with the on argument.
? Which resets the index in concat?
- Append
+ Ignore index
- Outer join
- Inner join
! Ignore index resets the index in concat.
? Which statement is true of Ignore index?
- Keeps matching keys
+ Resets the index in concat
- Joins DataFrames on a key column
- Is set with the on argument
! Ignore index resets the index in concat.
? Which adds rows at the end?
- Left join
- Inner join
- merge
+ Append
! Append adds rows at the end.
? Which statement is true of Append?
- Uses the ampersand with brackets
+ Adds rows at the end
- Joins DataFrames on a key column
- Keeps matching keys
! Append adds rows at the end.
? Which uses the ampersand with brackets?
- Ignore index
- Append
+ Condition and
- concat
! Condition and uses the ampersand with brackets.
? Which statement is true of Condition and?
+ Uses the ampersand with brackets
- Keeps all keys
- Adds rows at the end
- Joins DataFrames on a key column
! Condition and uses the ampersand with brackets.
? Which uses the pipe with brackets?
- Key column
- Ignore index
+ Condition or
- Left join
! Condition or uses the pipe with brackets.
? Which statement is true of Condition or?
- Adds rows at the end
- Joins DataFrames on a key column
- Uses the ampersand with brackets
+ Uses the pipe with brackets
! Condition or uses the pipe with brackets.
? Averaging by group uses
- merge
+ groupby
- concat
- drop
! groupby.
? Missing value test
- isempty
- isnone
+ isnull
- isblank
! isnull.
? Joining on a key
+ merge
- split
- rank
- sort
! merge.
? Counting distinct values
- sum
+ nunique
- mean
- cumsum
! nunique.
? Sorting by label
+ sort_index
- sort_values
- rank
- order
! sort_index.
? Summary of columns
- summary
- report
- profile
+ describe
! describe.
@visual
blocks | Statistics | sum; mean; median; std; min; max
flow | Groupby | Split by column; Apply function; Combine result
compare | merge and concat | merge=Join on key~Columns; concat=Stack~Rows or columns
steps | Clean data | Find NaN; Drop or fill; Remove duplicates; Check
mind | Analysis | Statistics; Cleaning; Grouping; Combining
@problems
## Moderate
P: What does describe() return?
A: Count, mean, standard deviation, minimum, quartiles and maximum for numeric columns.
R: 3 | Count
R: 3 | Mean
## High
P: How do you find the average marks by class?
A: Use df.groupby('class')['marks'].mean().
R: 2 | groupby
R: 2 | class
R: 2 | marks
R: 2 | mean
## Advanced
P: Explain how to handle missing values in a DataFrame.
A: Detect with isnull, remove with dropna, or replace with fillna using a value like the mean.
R: 2 | isnull
R: 2 | dropna
R: 2 | fillna
R: 2 | mean

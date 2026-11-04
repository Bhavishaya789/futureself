# NumPy, Pandas and Matplotlib
minutes: 35
yt: class 10 ai and it numpy, pandas and matplotlib
@study
NumPy provides fast n-dimensional arrays (ndarray) with operations like sum, mean, reshape and arange. Pandas offers Series (1-D) and DataFrame (2-D table) with functions read_csv, head, describe, loc, iloc and groupby. Matplotlib's pyplot draws line, bar, scatter, histogram and pie charts with labels, titles and legends. Together they form the basic Python data-science toolkit used with AI projects.
## Deep dive: NumPy
Arrays hold same-type values and support vectorised maths: a+b adds element-wise. Create with array, arange, zeros, ones; check shape; reshape; use mean, sum, max.
## Deep dive: Pandas
A Series is 1-D and a DataFrame is a table. Load with read_csv, inspect with head, info and describe, select with df['col'], loc and iloc, clean with dropna and fillna, summarise with groupby.
## Deep dive: Matplotlib
Use plt.plot, bar, scatter, hist, pie. Always add title, xlabel, ylabel and legend, then plt.show().
## Deep dive: workflow
Load → clean → explore → visualise → model. These libraries support the AI project cycle.
## Hindi saransh
NumPy सरणी, Pandas डेटाफ़्रेम और Matplotlib ग्राफ़ के लिए है।
> import numpy as np; import pandas as pd; import matplotlib.pyplot as plt.
@formulas
## Key points
Imports | np pd plt | 
Table | DataFrame | 
Charts | plot bar scatter hist pie | 

@qa
Q: What is meant by NumPy?
A: Array library.
Q: What is meant by Pandas?
A: Data analysis library.
Q: What is meant by Matplotlib?
A: Plotting library.
Q: What is meant by ndarray?
A: NumPy array.
Q: What is meant by Array?
A: Grid of same-type values.
Q: What is meant by shape?
A: dimensions.
Q: What is meant by reshape?
A: Change shape.
Q: What is meant by arange?
A: Range of values.
Q: What is meant by zeros?
A: Array of zeros.
Q: What is meant by ones?
A: Array of ones.
Q: What is meant by linspace?
A: Evenly spaced values.
Q: What is meant by Series?
A: 1-D labelled data.
Q: What is meant by DataFrame?
A: 2-D table.
Q: What is meant by read_csv?
A: Load a CSV.
Q: What is meant by head?
A: First rows.
Q: What is meant by tail?
A: Last rows.
Q: What is meant by describe?
A: Summary statistics.
Q: What is meant by info?
A: Data summary.
Q: What is meant by loc?
A: Label-based selection.
Q: What is meant by iloc?
A: Position-based selection.
Q: What is meant by dropna?
A: Remove missing.
Q: What is meant by fillna?
A: Fill missing.
Q: What is meant by groupby?
A: Group and aggregate.
Q: What is meant by sort_values?
A: Sort rows.
Q: What is meant by Column?
A: Vertical field.
Q: What is meant by Row?
A: Horizontal record.
Q: What is meant by Index?
A: Row label.
Q: What is meant by pyplot?
A: Plotting module.
Q: What is meant by plot?
A: Line graph.
Q: What is meant by bar?
A: Bar chart.
Q: What is meant by scatter?
A: Scatter plot.
Q: What is meant by hist?
A: histogram.
Q: What is meant by pie?
A: Pie chart.
Q: What is meant by xlabel?
A: X-axis label.
Q: What is meant by ylabel?
A: Y-axis label.
Q: What is meant by title?
A: Graph heading.
Q: What is meant by legend?
A: Key to series.
Q: What is meant by show?
A: Display figure.
Q: What is meant by savefig?
A: Save a figure.
Q: What is meant by Axis?
A: Direction of an array or chart.
Q: Which term matches this description: Array library?
A: NumPy.
Q: Which term matches this description: Data analysis library?
A: Pandas.
Q: Which term matches this description: Plotting library?
A: Matplotlib.
Q: Which term matches this description: NumPy array?
A: ndarray.
Q: Which term matches this description: Grid of same-type values?
A: Array.
Q: Which term matches this description: dimensions?
A: shape.
Q: Which term matches this description: Change shape?
A: reshape.
Q: Which term matches this description: Range of values?
A: arange.
Q: Which term matches this description: Array of zeros?
A: zeros.
Q: Which term matches this description: Array of ones?
A: ones.
Q: Which term matches this description: Evenly spaced values?
A: linspace.
Q: Which term matches this description: 1-D labelled data?
A: Series.
Q: Which term matches this description: 2-D table?
A: DataFrame.
Q: Which term matches this description: Load a CSV?
A: read_csv.
Q: Which term matches this description: First rows?
A: head.
Q: Which term matches this description: Last rows?
A: tail.
Q: Which term matches this description: Summary statistics?
A: describe.
Q: Which term matches this description: Data summary?
A: info.
Q: Which term matches this description: Label-based selection?
A: loc.
Q: Which term matches this description: Position-based selection?
A: iloc.
Q: Which term matches this description: Remove missing?
A: dropna.
Q: Which term matches this description: Fill missing?
A: fillna.
Q: Which term matches this description: Group and aggregate?
A: groupby.
Q: Which term matches this description: Sort rows?
A: sort_values.
Q: Which term matches this description: Vertical field?
A: Column.
Q: Which term matches this description: Horizontal record?
A: Row.
Q: Which term matches this description: Row label?
A: Index.
Q: Which term matches this description: Plotting module?
A: pyplot.
Q: Which term matches this description: Line graph?
A: plot.
Q: Which term matches this description: Bar chart?
A: bar.
Q: Which term matches this description: Scatter plot?
A: scatter.
Q: Which term matches this description: histogram?
A: hist.
Q: Which term matches this description: Pie chart?
A: pie.
Q: Which term matches this description: X-axis label?
A: xlabel.
Q: Which term matches this description: Y-axis label?
A: ylabel.
Q: Which term matches this description: Graph heading?
A: title.
Q: Which term matches this description: Key to series?
A: legend.
Q: Which term matches this description: Display figure?
A: show.
Q: Which term matches this description: Save a figure?
A: savefig.
Q: Which term matches this description: Direction of an array or chart?
A: Axis.
Q: What is NumPy?
A: A Python library for numerical computing with arrays.
Q: How do you import NumPy conventionally?
A: import numpy as np.
Q: What is an ndarray?
A: NumPy's n-dimensional array object.
Q: What does np.array() do?
A: Creates an array.
Q: What does np.arange(5) give?
A: [0 1 2 3 4].
Q: What does np.zeros((2,3)) create?
A: A 2×3 array of zeros.
Q: What does np.ones() create?
A: An array of ones.
Q: What does shape give?
A: The dimensions of an array.
Q: What does reshape do?
A: Changes the shape of an array.
Q: What does np.mean() return?
A: The average of array values.
Q: What does np.sum() return?
A: The sum of array values.
Q: Why is NumPy fast?
A: It uses compiled code and stores same-type data compactly.
Q: What is Pandas?
A: A library for data analysis and manipulation.
Q: How do you import Pandas conventionally?
A: import pandas as pd.
Q: What is a Series?
A: A one-dimensional labelled array.
Q: What is a DataFrame?
A: A two-dimensional table of rows and columns.
Q: What does pd.read_csv() do?
A: Loads a CSV file into a DataFrame.
Q: What does head() do?
A: Shows the first rows.
Q: What does tail() do?
A: Shows the last rows.
Q: What does describe() do?
A: Gives summary statistics.
Q: What does info() do?
A: Shows column types and non-null counts.
Q: What does df.shape return?
A: Number of rows and columns.
Q: What does df.columns return?
A: Column names.
Q: How do you select a column?
A: df['name'].
Q: What does loc do?
A: Selects rows by label.
Q: What does iloc do?
A: Selects rows by integer position.
Q: What does dropna() do?
A: Removes rows with missing values.
Q: What does fillna() do?
A: Replaces missing values.
Q: What does groupby() do?
A: Groups rows for aggregate calculations.
Q: What does sort_values() do?
A: Sorts rows by a column.
Q: What is Matplotlib?
A: A library for drawing graphs.
Q: How do you import pyplot?
A: import matplotlib.pyplot as plt.
Q: What does plt.plot() draw?
A: A line graph.
Q: What does plt.bar() draw?
A: A bar chart.
Q: What does plt.scatter() draw?
A: A scatter plot.
Q: What does plt.hist() draw?
A: A histogram.
Q: What does plt.pie() draw?
A: A pie chart.
Q: What do xlabel and ylabel do?
A: Label the axes.
Q: What does plt.title() do?
A: Adds a title.
Q: What does plt.legend() do?
A: Shows a legend.
Q: What does plt.show() do?
A: Displays the figure.
@quiz
? What is meant by NumPy?
- Fill missing
- Bar chart
- Plotting module
+ Array library
! From the CBSE Class 9 syllabus.
? What is meant by Pandas?
+ Data analysis library
- Y-axis label
- histogram
- Array library
! From the CBSE Class 9 syllabus.
? What is meant by Matplotlib?
- Data analysis library
- Array of zeros
- dimensions
+ Plotting library
! From the CBSE Class 9 syllabus.
? What is meant by ndarray?
- Array of ones
- dimensions
- Plotting library
+ NumPy array
! From the CBSE Class 9 syllabus.
? What is meant by Array?
+ Grid of same-type values
- Plotting library
- Scatter plot
- Array of ones
! From the CBSE Class 9 syllabus.
? What is meant by shape?
- Array of zeros
- Sort rows
+ dimensions
- Summary statistics
! From the CBSE Class 9 syllabus.
? What is meant by reshape?
- X-axis label
+ Change shape
- Group and aggregate
- 2-D table
! From the CBSE Class 9 syllabus.
? What is meant by arange?
+ Range of values
- Scatter plot
- Line graph
- Key to series
! From the CBSE Class 9 syllabus.
? What is meant by zeros?
- 1-D labelled data
+ Array of zeros
- Data analysis library
- Data summary
! From the CBSE Class 9 syllabus.
? What is meant by ones?
- Vertical field
- First rows
+ Array of ones
- Display figure
! From the CBSE Class 9 syllabus.
? What is meant by linspace?
+ Evenly spaced values
- X-axis label
- Bar chart
- Remove missing
! From the CBSE Class 9 syllabus.
? What is meant by Series?
- histogram
- Array library
+ 1-D labelled data
- Line graph
! From the CBSE Class 9 syllabus.
? What is meant by DataFrame?
- 1-D labelled data
- Position-based selection
+ 2-D table
- Line graph
! From the CBSE Class 9 syllabus.
? What is meant by read_csv?
+ Load a CSV
- Group and aggregate
- Last rows
- Key to series
! From the CBSE Class 9 syllabus.
? What is meant by head?
- Evenly spaced values
+ First rows
- Pie chart
- 1-D labelled data
! From the CBSE Class 9 syllabus.
? What is meant by tail?
- Array of ones
- Horizontal record
- Direction of an array or chart
+ Last rows
! From the CBSE Class 9 syllabus.
? What is meant by describe?
+ Summary statistics
- Load a CSV
- Plotting library
- Sort rows
! From the CBSE Class 9 syllabus.
? What is meant by info?
- 2-D table
+ Data summary
- Bar chart
- X-axis label
! From the CBSE Class 9 syllabus.
? What is meant by loc?
- Data analysis library
- Save a figure
- Array of ones
+ Label-based selection
! From the CBSE Class 9 syllabus.
? What is meant by iloc?
+ Position-based selection
- Evenly spaced values
- Graph heading
- Y-axis label
! From the CBSE Class 9 syllabus.
? What is meant by dropna?
- Evenly spaced values
- Pie chart
- Horizontal record
+ Remove missing
! From the CBSE Class 9 syllabus.
? What is meant by fillna?
- histogram
+ Fill missing
- Array of zeros
- Label-based selection
! From the CBSE Class 9 syllabus.
? What is meant by groupby?
- Change shape
- Horizontal record
+ Group and aggregate
- Graph heading
! From the CBSE Class 9 syllabus.
? What is meant by sort_values?
- Display figure
- Data analysis library
- Evenly spaced values
+ Sort rows
! From the CBSE Class 9 syllabus.
? What is meant by Column?
+ Vertical field
- Array of ones
- dimensions
- Direction of an array or chart
! From the CBSE Class 9 syllabus.
? What is meant by Row?
- Direction of an array or chart
- Bar chart
+ Horizontal record
- Row label
! From the CBSE Class 9 syllabus.
? What is meant by Index?
- Plotting module
- Change shape
+ Row label
- Position-based selection
! From the CBSE Class 9 syllabus.
? What is meant by pyplot?
- Bar chart
+ Plotting module
- Pie chart
- Line graph
! From the CBSE Class 9 syllabus.
? What is meant by plot?
- Sort rows
- NumPy array
+ Line graph
- Fill missing
! From the CBSE Class 9 syllabus.
? What is meant by bar?
- Data analysis library
+ Bar chart
- Row label
- Direction of an array or chart
! From the CBSE Class 9 syllabus.
? What is meant by scatter?
- Data summary
+ Scatter plot
- Line graph
- Y-axis label
! From the CBSE Class 9 syllabus.
? What is meant by hist?
- Save a figure
- Sort rows
+ histogram
- Pie chart
! From the CBSE Class 9 syllabus.
? What is meant by pie?
- Save a figure
- Plotting library
- Array library
+ Pie chart
! From the CBSE Class 9 syllabus.
? What is meant by xlabel?
- Pie chart
- Key to series
- Data summary
+ X-axis label
! From the CBSE Class 9 syllabus.
? What is meant by ylabel?
- Vertical field
- 2-D table
- Array of ones
+ Y-axis label
! From the CBSE Class 9 syllabus.
? What is meant by title?
- Array of ones
- X-axis label
- Load a CSV
+ Graph heading
! From the CBSE Class 9 syllabus.
? What is meant by legend?
- Vertical field
- Data summary
+ Key to series
- Fill missing
! From the CBSE Class 9 syllabus.
? What is meant by show?
- histogram
- Label-based selection
+ Display figure
- Vertical field
! From the CBSE Class 9 syllabus.
? What is meant by savefig?
- Summary statistics
+ Save a figure
- Fill missing
- Group and aggregate
! From the CBSE Class 9 syllabus.
? What is meant by Axis?
- Data summary
+ Direction of an array or chart
- Scatter plot
- 2-D table
! From the CBSE Class 9 syllabus.
? Which term matches this description: Array library?
- describe
+ NumPy
- reshape
- zeros
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data analysis library?
+ Pandas
- arange
- groupby
- Axis
! From the CBSE Class 9 syllabus.
? Which term matches this description: Plotting library?
- bar
- DataFrame
- read_csv
+ Matplotlib
! From the CBSE Class 9 syllabus.
? Which term matches this description: NumPy array?
+ ndarray
- fillna
- title
- sort_values
! From the CBSE Class 9 syllabus.
? Which term matches this description: Grid of same-type values?
- NumPy
- show
+ Array
- Pandas
! From the CBSE Class 9 syllabus.
? Which term matches this description: dimensions?
- xlabel
+ shape
- ones
- arange
! From the CBSE Class 9 syllabus.
? Which term matches this description: Change shape?
- DataFrame
- savefig
- describe
+ reshape
! From the CBSE Class 9 syllabus.
? Which term matches this description: Range of values?
- pyplot
- ylabel
- dropna
+ arange
! From the CBSE Class 9 syllabus.
? Which term matches this description: Array of zeros?
- arange
- pie
+ zeros
- Array
! From the CBSE Class 9 syllabus.
? Which term matches this description: Array of ones?
- legend
+ ones
- read_csv
- bar
! From the CBSE Class 9 syllabus.
? Which term matches this description: Evenly spaced values?
- reshape
+ linspace
- bar
- show
! From the CBSE Class 9 syllabus.
? Which term matches this description: 1-D labelled data?
+ Series
- fillna
- plot
- ndarray
! From the CBSE Class 9 syllabus.
? Which term matches this description: 2-D table?
- NumPy
- legend
- savefig
+ DataFrame
! From the CBSE Class 9 syllabus.
? Which term matches this description: Load a CSV?
- fillna
- arange
- ndarray
+ read_csv
! From the CBSE Class 9 syllabus.
? Which term matches this description: First rows?
- hist
- title
+ head
- linspace
! From the CBSE Class 9 syllabus.
? Which term matches this description: Last rows?
- arange
- NumPy
+ tail
- Column
! From the CBSE Class 9 syllabus.
? Which term matches this description: Summary statistics?
- tail
+ describe
- hist
- ones
! From the CBSE Class 9 syllabus.
? Which term matches this description: Data summary?
+ info
- head
- scatter
- fillna
! From the CBSE Class 9 syllabus.
? Which term matches this description: Label-based selection?
- savefig
- Series
+ loc
- groupby
! From the CBSE Class 9 syllabus.
? Which term matches this description: Position-based selection?
- tail
- linspace
- scatter
+ iloc
! From the CBSE Class 9 syllabus.
? Which term matches this description: Remove missing?
- NumPy
+ dropna
- plot
- pyplot
! From the CBSE Class 9 syllabus.
? Which term matches this description: Fill missing?
- xlabel
- title
- head
+ fillna
! From the CBSE Class 9 syllabus.
? Which term matches this description: Group and aggregate?
- Row
- arange
- ylabel
+ groupby
! From the CBSE Class 9 syllabus.
? Which term matches this description: Sort rows?
- bar
- Pandas
+ sort_values
- Column
! From the CBSE Class 9 syllabus.
? Which term matches this description: Vertical field?
- head
- sort_values
- savefig
+ Column
! From the CBSE Class 9 syllabus.
? Which term matches this description: Horizontal record?
+ Row
- scatter
- head
- Pandas
! From the CBSE Class 9 syllabus.
? Which term matches this description: Row label?
- dropna
- Series
- plot
+ Index
! From the CBSE Class 9 syllabus.
? Which term matches this description: Plotting module?
- read_csv
+ pyplot
- sort_values
- pie
! From the CBSE Class 9 syllabus.
? Which term matches this description: Line graph?
- reshape
- read_csv
+ plot
- arange
! From the CBSE Class 9 syllabus.
? Which term matches this description: Bar chart?
+ bar
- ylabel
- NumPy
- Row
! From the CBSE Class 9 syllabus.
? Which term matches this description: Scatter plot?
- loc
- plot
+ scatter
- title
! From the CBSE Class 9 syllabus.
? Which term matches this description: histogram?
- Matplotlib
- dropna
+ hist
- ndarray
! From the CBSE Class 9 syllabus.
? Which term matches this description: Pie chart?
- Matplotlib
+ pie
- sort_values
- scatter
! From the CBSE Class 9 syllabus.
? Which term matches this description: X-axis label?
- arange
- Column
- show
+ xlabel
! From the CBSE Class 9 syllabus.
? Which term matches this description: Y-axis label?
- loc
- iloc
- Index
+ ylabel
! From the CBSE Class 9 syllabus.
? Which term matches this description: Graph heading?
- ylabel
+ title
- scatter
- linspace
! From the CBSE Class 9 syllabus.
? Which term matches this description: Key to series?
- groupby
+ legend
- DataFrame
- Index
! From the CBSE Class 9 syllabus.
? Which term matches this description: Display figure?
- bar
+ show
- legend
- plot
! From the CBSE Class 9 syllabus.
? Which term matches this description: Save a figure?
- ndarray
- fillna
- pyplot
+ savefig
! From the CBSE Class 9 syllabus.
? Which term matches this description: Direction of an array or chart?
+ Axis
- zeros
- Index
- show
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "NumPy".
- Plotting library
- Data summary
+ Array library
- Range of values
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pandas".
- Display figure
- First rows
- Summary statistics
+ Data analysis library
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Matplotlib".
- Scatter plot
- Array library
+ Plotting library
- Remove missing
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ndarray".
- X-axis label
+ NumPy array
- Last rows
- Group and aggregate
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Array".
+ Grid of same-type values
- NumPy array
- Position-based selection
- Array of zeros
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "shape".
- Label-based selection
+ dimensions
- Vertical field
- Plotting module
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "reshape".
- Scatter plot
- Save a figure
+ Change shape
- Load a CSV
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "arange".
- Sort rows
- 2-D table
- Group and aggregate
+ Range of values
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "zeros".
- Group and aggregate
- Data analysis library
- X-axis label
+ Array of zeros
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ones".
- Line graph
- Range of values
+ Array of ones
- Last rows
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "linspace".
- Array library
+ Evenly spaced values
- Y-axis label
- dimensions
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Series".
+ 1-D labelled data
- histogram
- NumPy array
- 2-D table
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "DataFrame".
+ 2-D table
- X-axis label
- Line graph
- Vertical field
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "read_csv".
- Remove missing
- Array of zeros
+ Load a CSV
- 1-D labelled data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "head".
- 2-D table
- X-axis label
+ First rows
- Plotting module
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "tail".
- Load a CSV
- Save a figure
+ Last rows
- Plotting library
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "describe".
- Bar chart
+ Summary statistics
- Position-based selection
- Plotting library
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "info".
- Plotting module
- 1-D labelled data
- Direction of an array or chart
+ Data summary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "loc".
- Change shape
- Grid of same-type values
+ Label-based selection
- Bar chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "iloc".
- Graph heading
+ Position-based selection
- Array of zeros
- Data summary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "dropna".
+ Remove missing
- Key to series
- Position-based selection
- Summary statistics
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "fillna".
+ Fill missing
- Plotting module
- Key to series
- Position-based selection
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "groupby".
- Position-based selection
- Key to series
- Direction of an array or chart
+ Group and aggregate
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "sort_values".
+ Sort rows
- Group and aggregate
- First rows
- NumPy array
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Column".
- Array of zeros
+ Vertical field
- histogram
- Pie chart
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Row".
+ Horizontal record
- dimensions
- Load a CSV
- Summary statistics
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Index".
- Change shape
+ Row label
- Grid of same-type values
- Array of ones
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "pyplot".
+ Plotting module
- Array library
- Array of ones
- Graph heading
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "plot".
- Array of zeros
- Scatter plot
- Bar chart
+ Line graph
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "bar".
- Line graph
- Last rows
+ Bar chart
- X-axis label
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "scatter".
- Change shape
- Line graph
- Horizontal record
+ Scatter plot
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "hist".
+ histogram
- Last rows
- Position-based selection
- dimensions
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "pie".
- Row label
- Plotting library
+ Pie chart
- Save a figure
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "xlabel".
+ X-axis label
- Bar chart
- Summary statistics
- Plotting library
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ylabel".
- Data summary
+ Y-axis label
- Last rows
- Array library
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "title".
+ Graph heading
- Bar chart
- Scatter plot
- Vertical field
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "legend".
- Change shape
- Bar chart
+ Key to series
- Graph heading
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "show".
+ Display figure
- Evenly spaced values
- Line graph
- Graph heading
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "savefig".
- Array of ones
- First rows
- Remove missing
+ Save a figure
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Axis".
- Pie chart
+ Direction of an array or chart
- Array library
- X-axis label
! From the CBSE Class 9 syllabus.
@visual
flow | Data analysis | read_csv; Clean; Analyse with Pandas; Plot with Matplotlib
mind | Libraries | Python: NumPy, Pandas, Matplotlib
@problems
P: Which library gives DataFrame?
A: Pandas.
R: 1 | Key idea
R: 1 | Example

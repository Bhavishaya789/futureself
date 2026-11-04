# Data Visualisation using Matplotlib
minutes: 45
yt: class 12 informatics practices matplotlib pyplot line bar histogram plot labels legend savefig
@study
Data visualisation presents data graphically so that patterns can be seen. Matplotlib is a Python library, and pyplot is its module imported as import matplotlib.pyplot as plt. A line chart is drawn by plt.plot(x, y) and is used for trends over time. A bar chart is drawn by plt.bar(x, height) for comparing categories, and plt.barh draws horizontal bars. A histogram, drawn by plt.hist(data, bins=...), shows the frequency distribution of continuous data in intervals. A scatter plot uses plt.scatter, and a pie chart uses plt.pie. Labels and titles are added with plt.xlabel, plt.ylabel and plt.title. A legend is added with plt.legend and needs a label argument in each plot. Grid lines are shown with plt.grid. The figure is displayed with plt.show and saved with plt.savefig(filename). The format of lines can be changed with colour, linewidth, linestyle and marker arguments, such as plt.plot(x, y, color='r', linestyle='--', marker='o'). Axis limits are set with plt.xlim and plt.ylim, and ticks with plt.xticks and plt.yticks. Several plots can be drawn on the same axes, and the figure size can be set with plt.figure(figsize=(w, h)). Bar width is set with the width argument, and histogram types include bar and step. A DataFrame can also be plotted using df.plot(kind=...). Choosing the right chart type depends on the data, as line charts suit change over time while bar charts suit comparison.
## Deep dive: Chart types
Line charts show trends, bar charts compare categories, histograms show distributions, and pie charts show parts of a whole.
## Deep dive: Customising plots
Titles, axis labels, legends, colours, markers and grid lines make a chart clear and informative.
## Deep dive: Saving
plt.show displays a chart, and plt.savefig saves it to a file.
## Hindi saransh
Matplotlib: line, bar, histogram, scatter, pie; title, label, legend aur savefig.
> Remember: call plt.savefig before plt.show to save a full figure.
@formulas
## Syntax
Import | import matplotlib.pyplot as plt
Line | plt.plot(x, y)
Bar | plt.bar(x, h)
Histogram | plt.hist(d, bins=n)
Save | plt.savefig('a.png')

@qa
Q: Which is a Python plotting library?
A: Matplotlib is a Python plotting library.
Q: What do you know about Matplotlib?
A: Matplotlib is a Python plotting library.
Q: Which is the plotting module of Matplotlib?
A: pyplot is the plotting module of Matplotlib.
Q: What do you know about pyplot?
A: Pyplot is the plotting module of Matplotlib.
Q: Which is the common alias for pyplot?
A: plt is the common alias for pyplot.
Q: What do you know about plt?
A: Plt is the common alias for pyplot.
Q: Which shows data graphically?
A: Data visualisation shows data graphically.
Q: What do you know about Data visualisation?
A: Data visualisation shows data graphically.
Q: Which is the whole drawing area?
A: Figure is the whole drawing area.
Q: What do you know about Figure?
A: Figure is the whole drawing area.
Q: Which is the area where data is plotted?
A: Axes is the area where data is plotted.
Q: What do you know about Axes?
A: Axes is the area where data is plotted.
Q: Which is a graphical display of data?
A: Plot is a graphical display of data.
Q: What do you know about Plot?
A: Plot is a graphical display of data.
Q: Which is a plot of data?
A: Chart is a plot of data.
Q: What do you know about Chart?
A: Chart is a plot of data.
Q: Which combines several charts?
A: Dashboard combines several charts.
Q: What do you know about Dashboard?
A: Dashboard combines several charts.
Q: Which is used to create the plots?
A: Python is used to create the plots.
Q: What do you know about Python?
A: Python is used to create the plots.
Q: Which draws a line chart?
A: plt.plot draws a line chart.
Q: What do you know about plt.plot?
A: Plt.plot draws a line chart.
Q: Which draws a vertical bar chart?
A: plt.bar draws a vertical bar chart.
Q: What do you know about plt.bar?
A: Plt.bar draws a vertical bar chart.
Q: Which draws a horizontal bar chart?
A: plt.barh draws a horizontal bar chart.
Q: What do you know about plt.barh?
A: Plt.barh draws a horizontal bar chart.
Q: Which shows trends over time?
A: Line chart shows trends over time.
Q: What do you know about Line chart?
A: Line chart shows trends over time.
Q: Which compares categories?
A: Bar chart compares categories.
Q: What do you know about Bar chart?
A: Bar chart compares categories.
Q: Which sets the bar width?
A: width argument sets the bar width.
Q: What do you know about width argument?
A: Width argument sets the bar width.
Q: Which sets the colour of a plot?
A: color argument sets the colour of a plot.
Q: What do you know about color argument?
A: Color argument sets the colour of a plot.
Q: Which sets the thickness of a line?
A: linewidth argument sets the thickness of a line.
Q: What do you know about linewidth argument?
A: Linewidth argument sets the thickness of a line.
Q: Which sets the line pattern?
A: linestyle argument sets the line pattern.
Q: What do you know about linestyle argument?
A: Linestyle argument sets the line pattern.
Q: Which sets the point symbol?
A: marker argument sets the point symbol.
Q: What do you know about marker argument?
A: Marker argument sets the point symbol.
Q: Which draws a histogram?
A: plt.hist draws a histogram.
Q: What do you know about plt.hist?
A: Plt.hist draws a histogram.
Q: Which shows the frequency distribution?
A: Histogram shows the frequency distribution.
Q: What do you know about Histogram?
A: Histogram shows the frequency distribution.
Q: Which are intervals in a histogram?
A: bins are intervals in a histogram.
Q: What do you know about bins?
A: Bins are intervals in a histogram.
Q: Which draws a scatter plot?
A: plt.scatter draws a scatter plot.
Q: What do you know about plt.scatter?
A: Plt.scatter draws a scatter plot.
Q: Which shows relationship between two variables?
A: Scatter plot shows relationship between two variables.
Q: What do you know about Scatter plot?
A: Scatter plot shows relationship between two variables.
Q: Which draws a pie chart?
A: plt.pie draws a pie chart.
Q: What do you know about plt.pie?
A: Plt.pie draws a pie chart.
Q: Which shows parts of a whole?
A: Pie chart shows parts of a whole.
Q: What do you know about Pie chart?
A: Pie chart shows parts of a whole.
Q: Which formats percentages in a pie?
A: autopct formats percentages in a pie.
Q: What do you know about autopct?
A: Autopct formats percentages in a pie.
Q: Which pulls out a pie slice?
A: explode pulls out a pie slice.
Q: What do you know about explode?
A: Explode pulls out a pie slice.
Q: Which shows spread of data?
A: Boxplot shows spread of data.
Q: What do you know about Boxplot?
A: Boxplot shows spread of data.
Q: Which adds a title?
A: plt.title adds a title.
Q: What do you know about plt.title?
A: Plt.title adds a title.
Q: Which labels the x axis?
A: plt.xlabel labels the x axis.
Q: What do you know about plt.xlabel?
A: Plt.xlabel labels the x axis.
Q: Which labels the y axis?
A: plt.ylabel labels the y axis.
Q: What do you know about plt.ylabel?
A: Plt.ylabel labels the y axis.
Q: Which shows the legend?
A: plt.legend shows the legend.
Q: What do you know about plt.legend?
A: Plt.legend shows the legend.
Q: Which names a plot for the legend?
A: label argument names a plot for the legend.
Q: What do you know about label argument?
A: Label argument names a plot for the legend.
Q: Which shows grid lines?
A: plt.grid shows grid lines.
Q: What do you know about plt.grid?
A: Plt.grid shows grid lines.
Q: Which sets limits on the x axis?
A: plt.xlim sets limits on the x axis.
Q: What do you know about plt.xlim?
A: Plt.xlim sets limits on the x axis.
Q: Which sets limits on the y axis?
A: plt.ylim sets limits on the y axis.
Q: What do you know about plt.ylim?
A: Plt.ylim sets limits on the y axis.
Q: Which sets the x axis ticks?
A: plt.xticks sets the x axis ticks.
Q: What do you know about plt.xticks?
A: Plt.xticks sets the x axis ticks.
Q: Which sets the y axis ticks?
A: plt.yticks sets the y axis ticks.
Q: What do you know about plt.yticks?
A: Plt.yticks sets the y axis ticks.
Q: Which displays the figure?
A: plt.show displays the figure.
Q: What do you know about plt.show?
A: Plt.show displays the figure.
Q: Which saves the figure to a file?
A: plt.savefig saves the figure to a file.
Q: What do you know about plt.savefig?
A: Plt.savefig saves the figure to a file.
Q: Which creates a figure?
A: plt.figure creates a figure.
Q: What do you know about plt.figure?
A: Plt.figure creates a figure.
Q: Which sets the figure size?
A: figsize sets the figure size.
Q: What do you know about figsize?
A: Figsize sets the figure size.
Q: Which is a common image format for saving?
A: PNG is a common image format for saving.
Q: What do you know about PNG?
A: PNG is a common image format for saving.
Q: Which is set with the dpi argument?
A: Resolution is set with the dpi argument.
Q: What do you know about Resolution?
A: Resolution is set with the dpi argument.
Q: Which draws several plots in a grid?
A: plt.subplot draws several plots in a grid.
Q: What do you know about plt.subplot?
A: Plt.subplot draws several plots in a grid.
Q: Which avoids overlapping labels?
A: tight layout avoids overlapping labels.
Q: What do you know about tight layout?
A: Tight layout avoids overlapping labels.
Q: Which plots a DataFrame?
A: df.plot plots a DataFrame.
Q: What do you know about df.plot?
A: Df.plot plots a DataFrame.
Q: Which chooses the chart type?
A: kind argument chooses the chart type.
Q: What do you know about kind argument?
A: Kind argument chooses the chart type.
Q: Which is best seen in a line chart?
A: Trend is best seen in a line chart.
Q: What do you know about Trend?
A: Trend is best seen in a line chart.
Q: Which is best seen in a bar chart?
A: Comparison is best seen in a bar chart.
Q: What do you know about Comparison?
A: Comparison is best seen in a bar chart.
Q: Which is best seen in a histogram?
A: Distribution is best seen in a histogram.
Q: What do you know about Distribution?
A: Distribution is best seen in a histogram.
Q: Which is best seen in a pie chart?
A: Proportion is best seen in a pie chart.
Q: What do you know about Proportion?
A: Proportion is best seen in a pie chart.
Q: Which is best seen in a scatter plot?
A: Correlation is best seen in a scatter plot.
Q: What do you know about Correlation?
A: Correlation is best seen in a scatter plot.
Q: Which make a chart readable?
A: Labels make a chart readable.
Q: What do you know about Labels?
A: Labels make a chart readable.
Q: Which must be chosen for clarity?
A: Colour must be chosen for clarity.
Q: What do you know about Colour?
A: Colour must be chosen for clarity.
Q: Which explains what the chart shows?
A: Title explains what the chart shows.
Q: What do you know about Title?
A: Title explains what the chart shows.
Q: Which explains multiple series?
A: Legend explains multiple series.
Q: What do you know about Legend?
A: Legend explains multiple series.
Q: Which is the goal of visualisation?
A: Insight is the goal of visualisation.
Q: What do you know about Insight?
A: Insight is the goal of visualisation.
Q: What is pyplot?
A: The plotting module of Matplotlib, usually imported as plt.
Q: Which function draws a line chart?
A: plt.plot.
Q: Which function draws a bar chart?
A: plt.bar.
Q: What is a histogram used for?
A: To show the frequency distribution of continuous data in bins.
Q: How do you add a legend?
A: Give labels to plots and call plt.legend.
Q: How do you save a figure?
A: With plt.savefig(filename).
Q: What does plt.show do?
A: It displays the figure.
Q: How do you set the figure size?
A: plt.figure(figsize=(w, h)).
@quiz
? Which is a Python plotting library?
- Dashboard
- Figure
- Plot
+ Matplotlib
! Matplotlib is a Python plotting library.
? Which statement is true of Matplotlib?
+ Is a Python plotting library
- Combines several charts
- Is the area where data is plotted
- Is the plotting module of Matplotlib
! Matplotlib is a Python plotting library.
? Which is the plotting module of Matplotlib?
- Python
+ pyplot
- Data visualisation
- Figure
! Pyplot is the plotting module of Matplotlib.
? Which statement is true of pyplot?
+ Is the plotting module of Matplotlib
- Is the common alias for pyplot
- Is a graphical display of data
- Is a Python plotting library
! Pyplot is the plotting module of Matplotlib.
? Which is the common alias for pyplot?
- Axes
+ plt
- Dashboard
- Python
! Plt is the common alias for pyplot.
? Which statement is true of plt?
- Is the plotting module of Matplotlib
- Combines several charts
+ Is the common alias for pyplot
- Is the whole drawing area
! Plt is the common alias for pyplot.
? Which shows data graphically?
+ Data visualisation
- Dashboard
- Axes
- Matplotlib
! Data visualisation shows data graphically.
? Which statement is true of Data visualisation?
- Combines several charts
- Is a plot of data
+ Shows data graphically
- Is the common alias for pyplot
! Data visualisation shows data graphically.
? Which is the whole drawing area?
- Data visualisation
- Python
+ Figure
- plt
! Figure is the whole drawing area.
? Which statement is true of Figure?
- Combines several charts
+ Is the whole drawing area
- Is the area where data is plotted
- Shows data graphically
! Figure is the whole drawing area.
? Which is the area where data is plotted?
- plt
+ Axes
- Python
- Plot
! Axes is the area where data is plotted.
? Which statement is true of Axes?
- Is the common alias for pyplot
- Is the plotting module of Matplotlib
- Is a graphical display of data
+ Is the area where data is plotted
! Axes is the area where data is plotted.
? Which is a graphical display of data?
- Data visualisation
- Axes
+ Plot
- Dashboard
! Plot is a graphical display of data.
? Which statement is true of Plot?
- Is used to create the plots
- Is the common alias for pyplot
+ Is a graphical display of data
- Is a plot of data
! Plot is a graphical display of data.
? Which is a plot of data?
- plt
- Dashboard
+ Chart
- Matplotlib
! Chart is a plot of data.
? Which statement is true of Chart?
- Is a graphical display of data
- Is used to create the plots
+ Is a plot of data
- Is the whole drawing area
! Chart is a plot of data.
? Which combines several charts?
- Figure
- Axes
+ Dashboard
- Data visualisation
! Dashboard combines several charts.
? Which statement is true of Dashboard?
+ Combines several charts
- Is the plotting module of Matplotlib
- Is the whole drawing area
- Is used to create the plots
! Dashboard combines several charts.
? Which is used to create the plots?
- pyplot
- Matplotlib
- Data visualisation
+ Python
! Python is used to create the plots.
? Which statement is true of Python?
+ Is used to create the plots
- Is a graphical display of data
- Combines several charts
- Is a plot of data
! Python is used to create the plots.
? Which draws a line chart?
- linestyle argument
- linewidth argument
+ plt.plot
- color argument
! Plt.plot draws a line chart.
? Which statement is true of plt.plot?
- Sets the line pattern
+ Draws a line chart
- Sets the point symbol
- Sets the colour of a plot
! Plt.plot draws a line chart.
? Which draws a vertical bar chart?
- Line chart
+ plt.bar
- linestyle argument
- linewidth argument
! Plt.bar draws a vertical bar chart.
? Which statement is true of plt.bar?
- Sets the bar width
+ Draws a vertical bar chart
- Sets the thickness of a line
- Compares categories
! Plt.bar draws a vertical bar chart.
? Which draws a horizontal bar chart?
- color argument
+ plt.barh
- plt.plot
- linestyle argument
! Plt.barh draws a horizontal bar chart.
? Which statement is true of plt.barh?
- Shows trends over time
- Sets the bar width
- Sets the colour of a plot
+ Draws a horizontal bar chart
! Plt.barh draws a horizontal bar chart.
? Which shows trends over time?
- color argument
- plt.barh
- linewidth argument
+ Line chart
! Line chart shows trends over time.
? Which statement is true of Line chart?
- Sets the line pattern
+ Shows trends over time
- Sets the colour of a plot
- Compares categories
! Line chart shows trends over time.
? Which compares categories?
- width argument
- marker argument
+ Bar chart
- color argument
! Bar chart compares categories.
? Which statement is true of Bar chart?
- Draws a vertical bar chart
+ Compares categories
- Draws a line chart
- Sets the bar width
! Bar chart compares categories.
? Which sets the bar width?
+ width argument
- plt.barh
- plt.bar
- Line chart
! Width argument sets the bar width.
? Which statement is true of width argument?
- Sets the point symbol
- Draws a vertical bar chart
- Draws a line chart
+ Sets the bar width
! Width argument sets the bar width.
? Which sets the colour of a plot?
- Bar chart
+ color argument
- plt.bar
- marker argument
! Color argument sets the colour of a plot.
? Which statement is true of color argument?
- Sets the bar width
+ Sets the colour of a plot
- Compares categories
- Shows trends over time
! Color argument sets the colour of a plot.
? Which sets the thickness of a line?
- plt.bar
+ linewidth argument
- marker argument
- plt.barh
! Linewidth argument sets the thickness of a line.
? Which statement is true of linewidth argument?
- Sets the line pattern
- Sets the bar width
+ Sets the thickness of a line
- Compares categories
! Linewidth argument sets the thickness of a line.
? Which sets the line pattern?
- width argument
- plt.barh
- plt.bar
+ linestyle argument
! Linestyle argument sets the line pattern.
? Which statement is true of linestyle argument?
+ Sets the line pattern
- Sets the thickness of a line
- Sets the bar width
- Draws a vertical bar chart
! Linestyle argument sets the line pattern.
? Which sets the point symbol?
+ marker argument
- plt.barh
- Bar chart
- width argument
! Marker argument sets the point symbol.
? Which statement is true of marker argument?
- Sets the thickness of a line
- Draws a horizontal bar chart
- Shows trends over time
+ Sets the point symbol
! Marker argument sets the point symbol.
? Which draws a histogram?
+ plt.hist
- Scatter plot
- Boxplot
- Histogram
! Plt.hist draws a histogram.
? Which statement is true of plt.hist?
+ Draws a histogram
- Draws a scatter plot
- Shows spread of data
- Are intervals in a histogram
! Plt.hist draws a histogram.
? Which shows the frequency distribution?
- plt.pie
+ Histogram
- plt.scatter
- bins
! Histogram shows the frequency distribution.
? Which statement is true of Histogram?
- Shows spread of data
+ Shows the frequency distribution
- Are intervals in a histogram
- Shows relationship between two variables
! Histogram shows the frequency distribution.
? Which are intervals in a histogram?
- plt.hist
- Pie chart
- plt.pie
+ bins
! Bins are intervals in a histogram.
? Which statement is true of bins?
- Shows spread of data
- Shows relationship between two variables
+ Are intervals in a histogram
- Shows parts of a whole
! Bins are intervals in a histogram.
? Which draws a scatter plot?
- Boxplot
- autopct
+ plt.scatter
- plt.hist
! Plt.scatter draws a scatter plot.
? Which statement is true of plt.scatter?
- Formats percentages in a pie
- Shows spread of data
+ Draws a scatter plot
- Draws a histogram
! Plt.scatter draws a scatter plot.
? Which shows relationship between two variables?
- explode
- bins
- Boxplot
+ Scatter plot
! Scatter plot shows relationship between two variables.
? Which statement is true of Scatter plot?
+ Shows relationship between two variables
- Shows spread of data
- Pulls out a pie slice
- Draws a histogram
! Scatter plot shows relationship between two variables.
? Which draws a pie chart?
- plt.scatter
- Histogram
+ plt.pie
- Boxplot
! Plt.pie draws a pie chart.
? Which statement is true of plt.pie?
- Shows the frequency distribution
- Formats percentages in a pie
+ Draws a pie chart
- Shows relationship between two variables
! Plt.pie draws a pie chart.
? Which shows parts of a whole?
+ Pie chart
- plt.hist
- bins
- Histogram
! Pie chart shows parts of a whole.
? Which statement is true of Pie chart?
+ Shows parts of a whole
- Pulls out a pie slice
- Draws a pie chart
- Draws a histogram
! Pie chart shows parts of a whole.
? Which formats percentages in a pie?
- Pie chart
- plt.hist
- Boxplot
+ autopct
! Autopct formats percentages in a pie.
? Which statement is true of autopct?
- Draws a pie chart
+ Formats percentages in a pie
- Shows spread of data
- Draws a scatter plot
! Autopct formats percentages in a pie.
? Which pulls out a pie slice?
- plt.scatter
- Scatter plot
+ explode
- Boxplot
! Explode pulls out a pie slice.
? Which statement is true of explode?
- Shows parts of a whole
+ Pulls out a pie slice
- Draws a histogram
- Draws a pie chart
! Explode pulls out a pie slice.
? Which shows spread of data?
- Scatter plot
- plt.scatter
+ Boxplot
- bins
! Boxplot shows spread of data.
? Which statement is true of Boxplot?
- Formats percentages in a pie
- Draws a histogram
- Shows the frequency distribution
+ Shows spread of data
! Boxplot shows spread of data.
? Which adds a title?
- plt.ylabel
- plt.xlim
+ plt.title
- plt.ylim
! Plt.title adds a title.
? Which statement is true of plt.title?
- Names a plot for the legend
+ Adds a title
- Sets limits on the y axis
- Sets the y axis ticks
! Plt.title adds a title.
? Which labels the x axis?
- plt.ylim
- plt.legend
- plt.title
+ plt.xlabel
! Plt.xlabel labels the x axis.
? Which statement is true of plt.xlabel?
- Shows the legend
- Labels the y axis
+ Labels the x axis
- Shows grid lines
! Plt.xlabel labels the x axis.
? Which labels the y axis?
+ plt.ylabel
- plt.xticks
- plt.xlabel
- plt.title
! Plt.ylabel labels the y axis.
? Which statement is true of plt.ylabel?
- Sets limits on the y axis
- Labels the x axis
- Shows the legend
+ Labels the y axis
! Plt.ylabel labels the y axis.
? Which shows the legend?
+ plt.legend
- plt.xticks
- plt.xlabel
- plt.grid
! Plt.legend shows the legend.
? Which statement is true of plt.legend?
- Sets the x axis ticks
- Sets limits on the y axis
+ Shows the legend
- Sets limits on the x axis
! Plt.legend shows the legend.
? Which names a plot for the legend?
- plt.ylabel
- plt.legend
+ label argument
- plt.ylim
! Label argument names a plot for the legend.
? Which statement is true of label argument?
- Labels the y axis
- Labels the x axis
- Sets the y axis ticks
+ Names a plot for the legend
! Label argument names a plot for the legend.
? Which shows grid lines?
- plt.yticks
+ plt.grid
- plt.legend
- plt.xlim
! Plt.grid shows grid lines.
? Which statement is true of plt.grid?
+ Shows grid lines
- Sets the x axis ticks
- Labels the x axis
- Labels the y axis
! Plt.grid shows grid lines.
? Which sets limits on the x axis?
- plt.xlabel
- plt.legend
- plt.ylim
+ plt.xlim
! Plt.xlim sets limits on the x axis.
? Which statement is true of plt.xlim?
- Labels the x axis
- Adds a title
- Names a plot for the legend
+ Sets limits on the x axis
! Plt.xlim sets limits on the x axis.
? Which sets limits on the y axis?
- plt.ylabel
- plt.grid
+ plt.ylim
- plt.xlim
! Plt.ylim sets limits on the y axis.
? Which statement is true of plt.ylim?
+ Sets limits on the y axis
- Names a plot for the legend
- Labels the x axis
- Sets the y axis ticks
! Plt.ylim sets limits on the y axis.
? Which sets the x axis ticks?
- plt.xlabel
- plt.xlim
- plt.title
+ plt.xticks
! Plt.xticks sets the x axis ticks.
? Which statement is true of plt.xticks?
- Shows grid lines
+ Sets the x axis ticks
- Names a plot for the legend
- Labels the y axis
! Plt.xticks sets the x axis ticks.
? Which sets the y axis ticks?
- plt.ylabel
- plt.xlabel
+ plt.yticks
- plt.legend
! Plt.yticks sets the y axis ticks.
? Which statement is true of plt.yticks?
- Shows grid lines
- Sets the x axis ticks
- Sets limits on the x axis
+ Sets the y axis ticks
! Plt.yticks sets the y axis ticks.
? Which displays the figure?
- df.plot
- plt.subplot
+ plt.show
- plt.figure
! Plt.show displays the figure.
? Which statement is true of plt.show?
- Is set with the dpi argument
+ Displays the figure
- Avoids overlapping labels
- Is a common image format for saving
! Plt.show displays the figure.
? Which saves the figure to a file?
+ plt.savefig
- kind argument
- Resolution
- plt.figure
! Plt.savefig saves the figure to a file.
? Which statement is true of plt.savefig?
- Draws several plots in a grid
+ Saves the figure to a file
- Sets the figure size
- Is a common image format for saving
! Plt.savefig saves the figure to a file.
? Which creates a figure?
+ plt.figure
- kind argument
- tight layout
- plt.show
! Plt.figure creates a figure.
? Which statement is true of plt.figure?
- Displays the figure
- Saves the figure to a file
+ Creates a figure
- Sets the figure size
! Plt.figure creates a figure.
? Which sets the figure size?
- PNG
- plt.savefig
+ figsize
- df.plot
! Figsize sets the figure size.
? Which statement is true of figsize?
+ Sets the figure size
- Creates a figure
- Displays the figure
- Draws several plots in a grid
! Figsize sets the figure size.
? Which is a common image format for saving?
+ PNG
- plt.show
- plt.figure
- plt.subplot
! PNG is a common image format for saving.
? Which statement is true of PNG?
+ Is a common image format for saving
- Is set with the dpi argument
- Sets the figure size
- Saves the figure to a file
! PNG is a common image format for saving.
? Which is set with the dpi argument?
- plt.show
- plt.savefig
+ Resolution
- df.plot
! Resolution is set with the dpi argument.
? Which statement is true of Resolution?
+ Is set with the dpi argument
- Creates a figure
- Draws several plots in a grid
- Plots a DataFrame
! Resolution is set with the dpi argument.
? Which draws several plots in a grid?
- plt.figure
- figsize
+ plt.subplot
- PNG
! Plt.subplot draws several plots in a grid.
? Which statement is true of plt.subplot?
+ Draws several plots in a grid
- Saves the figure to a file
- Avoids overlapping labels
- Is set with the dpi argument
! Plt.subplot draws several plots in a grid.
? Which avoids overlapping labels?
+ tight layout
- figsize
- Resolution
- plt.subplot
! Tight layout avoids overlapping labels.
? Which statement is true of tight layout?
+ Avoids overlapping labels
- Chooses the chart type
- Sets the figure size
- Displays the figure
! Tight layout avoids overlapping labels.
? Which plots a DataFrame?
- plt.subplot
- Resolution
+ df.plot
- figsize
! Df.plot plots a DataFrame.
? Which statement is true of df.plot?
- Is a common image format for saving
- Creates a figure
- Avoids overlapping labels
+ Plots a DataFrame
! Df.plot plots a DataFrame.
? Which chooses the chart type?
- plt.figure
+ kind argument
- tight layout
- figsize
! Kind argument chooses the chart type.
? Which statement is true of kind argument?
+ Chooses the chart type
- Saves the figure to a file
- Avoids overlapping labels
- Sets the figure size
! Kind argument chooses the chart type.
? Which is best seen in a line chart?
- Legend
+ Trend
- Proportion
- Title
! Trend is best seen in a line chart.
? Which statement is true of Trend?
- Is best seen in a scatter plot
- Make a chart readable
+ Is best seen in a line chart
- Explains multiple series
! Trend is best seen in a line chart.
? Which is best seen in a bar chart?
+ Comparison
- Legend
- Trend
- Colour
! Comparison is best seen in a bar chart.
? Which statement is true of Comparison?
- Make a chart readable
- Explains multiple series
- Explains what the chart shows
+ Is best seen in a bar chart
! Comparison is best seen in a bar chart.
? Which is best seen in a histogram?
+ Distribution
- Correlation
- Proportion
- Colour
! Distribution is best seen in a histogram.
? Which statement is true of Distribution?
+ Is best seen in a histogram
- Explains multiple series
- Is the goal of visualisation
- Is best seen in a scatter plot
! Distribution is best seen in a histogram.
? Which is best seen in a pie chart?
- Distribution
- Labels
+ Proportion
- Insight
! Proportion is best seen in a pie chart.
? Which statement is true of Proportion?
- Explains multiple series
- Is best seen in a histogram
- Is the goal of visualisation
+ Is best seen in a pie chart
! Proportion is best seen in a pie chart.
? Which is best seen in a scatter plot?
+ Correlation
- Insight
- Title
- Legend
! Correlation is best seen in a scatter plot.
? Which statement is true of Correlation?
- Make a chart readable
- Must be chosen for clarity
- Explains multiple series
+ Is best seen in a scatter plot
! Correlation is best seen in a scatter plot.
? Which make a chart readable?
- Legend
- Comparison
- Proportion
+ Labels
! Labels make a chart readable.
? Which statement is true of Labels?
+ Make a chart readable
- Is best seen in a scatter plot
- Must be chosen for clarity
- Explains multiple series
! Labels make a chart readable.
? Which must be chosen for clarity?
+ Colour
- Proportion
- Trend
- Insight
! Colour must be chosen for clarity.
? Which statement is true of Colour?
- Make a chart readable
- Explains multiple series
+ Must be chosen for clarity
- Is best seen in a histogram
! Colour must be chosen for clarity.
? Which explains what the chart shows?
+ Title
- Insight
- Labels
- Colour
! Title explains what the chart shows.
? Which statement is true of Title?
- Must be chosen for clarity
- Is the goal of visualisation
+ Explains what the chart shows
- Is best seen in a line chart
! Title explains what the chart shows.
? Which explains multiple series?
+ Legend
- Insight
- Distribution
- Comparison
! Legend explains multiple series.
? Which statement is true of Legend?
+ Explains multiple series
- Make a chart readable
- Is best seen in a line chart
- Must be chosen for clarity
! Legend explains multiple series.
? Which is the goal of visualisation?
- Colour
+ Insight
- Title
- Legend
! Insight is the goal of visualisation.
? Which statement is true of Insight?
- Explains what the chart shows
+ Is the goal of visualisation
- Must be chosen for clarity
- Explains multiple series
! Insight is the goal of visualisation.
? Line chart function
- plt.bar
- plt.hist
+ plt.plot
- plt.pie
! plt.plot.
? Frequency distribution chart
+ Histogram
- Line
- Pie
- Scatter
! Histogram.
? Axis label function
- plt.title
- plt.legend
+ plt.xlabel
- plt.grid
! xlabel.
? Saving a plot
+ plt.savefig
- plt.save
- plt.write
- plt.export
! savefig.
? Parts of a whole
- Line chart
- Scatter
+ Pie chart
- Histogram
! Pie chart.
? Intervals in a histogram
+ Bins
- Ticks
- Axes
- Labels
! Bins.
@visual
blocks | Chart types | Line; Bar; Histogram; Scatter; Pie
compare | Bar chart and histogram | Bar=Categories~Gaps; Histogram=Continuous data~Bins
steps | Make a chart | Import pyplot; Plot data; Add labels; Show or save
flow | Plot workflow | Data; plot; Label; Legend; Save
mind | Visualisation | Charts; Labels; Styling; Saving
@problems
## Moderate
P: Which chart suits showing a trend over time?
A: A line chart drawn with plt.plot.
R: 3 | Line chart
R: 3 | plt.plot
## High
P: Differentiate a bar chart and a histogram.
A: A bar chart compares categories with gaps, whereas a histogram shows the frequency of continuous data in bins.
R: 2 | Categories
R: 2 | Continuous
R: 2 | Bins
R: 2 | Frequency
## Advanced
P: How do you add a legend to two lines in one plot?
A: Give each plot a label and then call plt.legend.
R: 2 | label
R: 2 | plt.legend
R: 2 | Two lines
R: 2 | Same axes

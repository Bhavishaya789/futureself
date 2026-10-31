# Three dimensional geometry
minutes: 45
yt: class 12 three dimensional geometry
@study
Direction ratios (a, b, c) of a line are any numbers proportional to its direction cosines l, m, n, where l^2 + m^2 + n^2 = 1. The line through (x1, y1, z1) with direction ratios (a, b, c) is (x - x1)/a = (y - y1)/b = (z - z1)/c. The plane ax + by + cz + d = 0 has normal (a, b, c); the distance of (x1, y1, z1) from it is |a x1 + b y1 + c z1 + d|/sqrt(a^2 + b^2 + c^2).
## Deep dive: direction cosines and direction ratios
If a line makes angles alpha, beta, gamma with the axes, then l = cos alpha, m = cos beta, n = cos gamma are its direction cosines, with l^2 + m^2 + n^2 = 1. Direction ratios a, b, c are proportional to l, m, n, so l = a/sqrt (a^2 + b^2 + c^2) and so on. For the points P (x1, y1, z1) and Q (x2, y2, z2) the direction ratios of PQ are (x2 - x1, y2 - y1, z2 - z1). The angle theta between two lines with direction ratios (a1, b1, c1) and (a2, b2, c2) satisfies cos theta = |a1 a2 + b1 b2 + c1 c2| / (sqrt (a1^2 + b1^2 + c1^2) sqrt (a2^2 + b2^2 + c2^2)). Lines are perpendicular if a1 a2 + b1 b2 + c1 c2 = 0 and parallel if a1/a2 = b1/b2 = c1/c2.
## Deep dive: equations of a line in space
Cartesian form through (x1, y1, z1) with direction ratios (a, b, c): (x - x1)/a = (y - y1)/b = (z - z1)/c. Vector form r = a + t b. Through two points the direction ratios are the differences of coordinates. The shortest distance between skew lines r = a1 + t b1 and r = a2 + s b2 is |(a2 - a1) . (b1 x b2)| / |b1 x b2|; for parallel lines it is |(a2 - a1) x b| / |b|. Skew lines are non-parallel, non-intersecting lines.
## Deep dive: planes
The plane with unit normal n at distance d from the origin: r . n = d; Cartesian form lx + my + nz = d. General form ax + by + cz + d = 0 with normal (a, b, c). Plane through (x1, y1, z1) with normal (a, b, c): a (x - x1) + b (y - y1) + c (z - z1) = 0. Plane through three points: use the determinant of coordinates. The distance from (x1, y1, z1) to the plane is |a x1 + b y1 + c z1 + d| / sqrt (a^2 + b^2 + c^2). The angle between two planes equals the angle between their normals. Angle between a line and a plane: sin theta = |a l + b m + c n| / (|normal| |direction|).
## Hindi saransh
Direction cosines: l^2 + m^2 + n^2 = 1. Plane: ax + by + cz + d = 0.
> Angle between two lines uses cos theta = |a1 a2 + b1 b2 + c1 c2| / (|v1||v2|).
@formulas
## Direction cosines
Direction cosines | l^2 + m^2 + n^2 = 1 | l = cos alpha ...
From ratios | l = a/sqrt (a^2 + b^2 + c^2) | 
Direction ratios of PQ | (x2 - x1, y2 - y1, z2 - z1) | 
## Lines
Cartesian form | (x - x1)/a = (y - y1)/b = (z - z1)/c | 
Vector form | r = a + t b | 
Angle between lines | cos theta = |a1a2 + b1b2 + c1c2| / (|v1||v2|) | 
Perpendicular lines | a1a2 + b1b2 + c1c2 = 0 | 
Parallel lines | a1/a2 = b1/b2 = c1/c2 | 
Shortest distance (skew) | |(a2 - a1) . (b1 x b2)| / |b1 x b2| | 
Distance (parallel lines) | |(a2 - a1) x b| / |b| | 
## Planes
Plane | ax + by + cz + d = 0 | normal (a, b, c)
Plane with normal through point | a (x - x1) + b (y - y1) + c (z - z1) = 0 | 
Distance of point from plane | |a x1 + b y1 + c z1 + d| / sqrt (a^2 + b^2 + c^2) | 
Angle between planes | cos theta = |n1 . n2| / (|n1||n2|) | 
Line and plane | sin theta = |a l + b m + c n| / (|n||v|) | 

@qa
Q: What are direction cosines?
A: The cosines of the angles a line makes with the positive axes.
Q: What is the relation between direction cosines?
A: l^2 + m^2 + n^2 = 1.
Q: What are direction ratios?
A: Numbers proportional to the direction cosines.
Q: What are the direction cosines of the x-axis?
A: 1, 0, 0.
Q: What are the direction cosines of the y-axis?
A: 0, 1, 0.
Q: What are the direction cosines of the z-axis?
A: 0, 0, 1.
Q: When are two lines perpendicular?
A: When a1 a2 + b1 b2 + c1 c2 = 0.
Q: When are two lines parallel?
A: When their direction ratios are proportional.
Q: What are skew lines?
A: Lines that are neither parallel nor intersecting.
Q: What is the vector equation of a line?
A: r = a + t b.
Q: What is the normal of ax + by + cz + d = 0?
A: The vector (a, b, c).
Q: What is the angle between two planes?
A: The angle between their normals.
Q: What is the distance of the origin from ax + by + cz + d = 0?
A: |d| / sqrt (a^2 + b^2 + c^2).
Q: When are two planes perpendicular?
A: When a1 a2 + b1 b2 + c1 c2 = 0.
Q: When are two planes parallel?
A: When their normals are proportional.
Q: What is the shortest distance between two skew lines?
A: The length of the common perpendicular.
Q: What is the shortest distance between parallel lines?
A: |(a2 - a1) x b| / |b|.
Q: Find the direction cosines of the line with direction ratios 1, 2, 2.
A: 1/3, 2/3, 2/3.
Q: Find the direction cosines of the line with direction ratios 2, 3, 6.
A: 2/7, 3/7, 6/7.
Q: Find the direction cosines of the line with direction ratios 3, 4, 12.
A: 3/13, 4/13, 12/13.
Q: Find the direction cosines of the line with direction ratios 1, 4, 8.
A: 1/9, 4/9, 8/9.
Q: Find the direction cosines of the line with direction ratios 2, 6, 9.
A: 2/11, 6/11, 9/11.
Q: Find the direction cosines of the line with direction ratios 4, 4, 7.
A: 4/9, 4/9, 7/9.
Q: Find the direction cosines of the line with direction ratios 6, 6, 7.
A: 6/11, 6/11, 7/11.
Q: Find the direction cosines of the line with direction ratios 2, 2, 1.
A: 2/3, 2/3, 1/3.
Q: Find the direction cosines of the line with direction ratios 1, 0, 0.
A: 1, 0, 0.
Q: Find the direction cosines of the line with direction ratios 0, 3, 4.
A: 0, 3/5, 4/5.
Q: Find the direction cosines of the line with direction ratios 5, 12, 0.
A: 5/13, 12/13, 0.
Q: Find the direction cosines of the line with direction ratios 2, 10, 11.
A: 2/15, 2/3, 11/15.
Q: Find the direction cosines of the line with direction ratios 4, 8, 8.
A: 1/3, 2/3, 2/3.
Q: Find the direction ratios of the line through (1, 2, 3) and (4, 6, 15).
A: 3, 4, 12.
Q: Find the direction ratios of the line through (0, 0, 0) and (2, 3, 6).
A: 2, 3, 6.
Q: Find the direction ratios of the line through (1, 1, 1) and (3, 5, 5).
A: 2, 4, 4.
Q: Find the direction ratios of the line through (2, 0, 1) and (4, 4, 5).
A: 2, 4, 4.
Q: Find the direction ratios of the line through (-1, 2, 0) and (1, 6, 4).
A: 2, 4, 4.
Q: Find the direction ratios of the line through (3, 3, 3) and (5, 7, 7).
A: 2, 4, 4.
Q: Lines have direction ratios (1, 2, 2) and (2, 1, -2). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (1, 1, 1) and (1, -1, 0). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (2, 3, 4) and (1, 2, -2). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (1, 0, 0) and (0, 1, 0). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (3, 4, 0) and (4, -3, 5). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (1, 2, 3) and (2, 4, 6). How are they related?
A: Parallel.
Q: Lines have direction ratios (2, -1, 2) and (1, 2, 0). How are they related?
A: Perpendicular.
Q: Lines have direction ratios (1, 1, 0) and (1, 0, 1). How are they related?
A: Neither perpendicular nor parallel.
Q: Lines have direction ratios (6, 3, 2) and (2, -3, 6). How are they related?
A: Neither perpendicular nor parallel.
Q: Distance of (1, 1, 1) from the plane 1x + 2y + 2z + 3 = 0 is
A: 2.67.
Q: Distance of (1, 2, 3) from the plane 2x + 3y + 6z + 0 = 0 is
A: 3.71.
Q: Distance of (5, 0, 0) from the plane 1x + 0y + 0z + -2 = 0 is
A: 3.
Q: Distance of (1, 1, 1) from the plane 3x + 4y + 0z + 5 = 0 is
A: 2.4.
Q: Distance of (0, 0, 0) from the plane 2x + -1y + 2z + -4 = 0 is
A: 1.33.
Q: Distance of (0, 0, 0) from the plane 2x + 6y + 9z + 10 = 0 is
A: 0.91.
Q: Distance of (1, 0, 0) from the plane 4x + 4y + 7z + 1 = 0 is
A: 0.56.
Q: Distance of the origin from 2x + 3y + 6z = 14 is
A: 2.
Q: Distance of the origin from 1x + 2y + 2z = 9 is
A: 3.
Q: Distance of the origin from 3x + 4y + 12z = 26 is
A: 2.
Q: Distance of the origin from 2x + 2y + 1z = 6 is
A: 2.
Q: Distance of the origin from 6x + 3y + 2z = 14 is
A: 2.
Q: Find the plane through (1, 2, 3) with normal (2, 1, 1).
A: 2x + 1y + 1z = 7.
Q: Find the plane through (0, 0, 0) with normal (1, 1, 1).
A: 1x + 1y + 1z = 0.
Q: Find the plane through (2, -1, 4) with normal (3, 2, -1).
A: 3x + 2y + -1z = 0.
Q: Find the plane through (1, 1, 1) with normal (4, 0, 3).
A: 4x + 0y + 3z = 7.
Q: The magnitude of the vector (1, 2, 2) is
A: 3.
Q: The direction cosine l of (1, 2, 2) is
A: 0.33.
Q: The magnitude of the vector (2, 3, 6) is
A: 7.
Q: The direction cosine l of (2, 3, 6) is
A: 0.29.
Q: The magnitude of the vector (3, 4, 12) is
A: 13.
Q: The direction cosine l of (3, 4, 12) is
A: 0.23.
Q: The magnitude of the vector (1, 4, 8) is
A: 9.
Q: The direction cosine l of (1, 4, 8) is
A: 0.11.
Q: The magnitude of the vector (2, 6, 9) is
A: 11.
Q: The direction cosine l of (2, 6, 9) is
A: 0.18.
Q: The magnitude of the vector (4, 4, 7) is
A: 9.
Q: The direction cosine l of (4, 4, 7) is
A: 0.44.
Q: The magnitude of the vector (6, 6, 7) is
A: 11.
Q: The direction cosine l of (6, 6, 7) is
A: 0.55.
Q: The magnitude of the vector (2, 10, 11) is
A: 15.
Q: The direction cosine l of (2, 10, 11) is
A: 0.13.
Q: The magnitude of the vector (4, 8, 8) is
A: 12.
Q: The direction cosine l of (4, 8, 8) is
A: 0.33.
Q: The magnitude of the vector (2, 2, 1) is
A: 3.
Q: The direction cosine l of (2, 2, 1) is
A: 0.67.
Q: The magnitude of the vector (6, 3, 2) is
A: 7.
Q: The direction cosine l of (6, 3, 2) is
A: 0.86.
Q: The magnitude of the vector (3, 6, 6) is
A: 9.
Q: The direction cosine l of (3, 6, 6) is
A: 0.33.
Q: The magnitude of the vector (8, 1, 4) is
A: 9.
Q: The direction cosine l of (8, 1, 4) is
A: 0.89.
Q: The magnitude of the vector (9, 12, 20) is
A: 25.
Q: The direction cosine l of (9, 12, 20) is
A: 0.36.
Q: The magnitude of the vector (5, 14, 2) is
A: 15.
Q: The direction cosine l of (5, 14, 2) is
A: 0.33.
Q: The magnitude of the vector (7, 4, 4) is
A: 9.
Q: The direction cosine l of (7, 4, 4) is
A: 0.78.
Q: The magnitude of the vector (12, 9, 8) is
A: 17.
Q: The direction cosine l of (12, 9, 8) is
A: 0.71.
Q: The magnitude of the vector (1, 12, 12) is
A: 17.
Q: The direction cosine l of (1, 12, 12) is
A: 0.06.
Q: The magnitude of the vector (4, 13, 16) is
A: 21.
Q: The direction cosine l of (4, 13, 16) is
A: 0.19.
Q: The magnitude of the vector (2, 14, 5) is
A: 15.
Q: The direction cosine l of (2, 14, 5) is
A: 0.13.
Q: Dot product of (1, 2, 3) and (4, 5, 6) is
A: 32.
Q: Find the cross product of (1, 2, 3) and (4, 5, 6).
A: (-3, 6, -3).
Q: Dot product of (2, -1, 0) and (3, 4, 5) is
A: 2.
Q: Find the cross product of (2, -1, 0) and (3, 4, 5).
A: (-5, -10, 11).
Q: Dot product of (1, 1, 1) and (1, -1, 0) is
A: 0.
Q: Find the cross product of (1, 1, 1) and (1, -1, 0).
A: (1, 1, -2).
Q: Dot product of (3, 0, 2) and (1, 5, -3) is
A: -3.
Q: Find the cross product of (3, 0, 2) and (1, 5, -3).
A: (-10, 11, 15).
Q: Dot product of (2, 2, 1) and (1, -2, 2) is
A: 0.
Q: Find the cross product of (2, 2, 1) and (1, -2, 2).
A: (6, -3, -6).
Q: Dot product of (4, 3, 0) and (0, 0, 7) is
A: 0.
Q: Find the cross product of (4, 3, 0) and (0, 0, 7).
A: (21, -28, 0).
Q: Dot product of (1, 0, -1) and (2, 2, 2) is
A: 0.
Q: Find the cross product of (1, 0, -1) and (2, 2, 2).
A: (2, -4, 2).
Q: Dot product of (5, 1, 2) and (0, -3, 4) is
A: 5.
Q: Find the cross product of (5, 1, 2) and (0, -3, 4).
A: (10, -20, -15).
Q: A line has direction ratios 2, 4, 6. Write its equation through the origin.
A: x/2 = y/4 = z/6 (equivalently x/1 = y/2 = z/3).
Q: A line has direction ratios 3, 6, 9. Write its equation through the origin.
A: x/3 = y/6 = z/9 (equivalently x/1 = y/2 = z/3).
Q: A line has direction ratios 4, 8, 12. Write its equation through the origin.
A: x/4 = y/8 = z/12 (equivalently x/1 = y/2 = z/3).
Q: A line has direction ratios 5, 10, 15. Write its equation through the origin.
A: x/5 = y/10 = z/15 (equivalently x/1 = y/2 = z/3).
Q: A line has direction ratios 1, 0, 0. Which axis is it along?
A: The x-axis.
Q: A line has direction ratios 0, 1, 0. Which axis is it along?
A: The y-axis.
Q: A line has direction ratios 0, 0, 1. Which axis is it along?
A: The z-axis.
@quiz
? The direction cosines of the line with direction ratios 1, 2, 2 are
- 2/3, 2/3, 1/3
- 1, 2, 2
+ 1/3, 2/3, 2/3
- 1/9, 2/9, 2/9
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 2, 3, 6 are
- 2, 3, 6
- 6/7, 3/7, 2/7
+ 2/7, 3/7, 6/7
- 2/49, 3/49, 6/49
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 3, 4, 12 are
- 3/169, 4/169, 12/169
- 3, 4, 12
- 12/13, 4/13, 3/13
+ 3/13, 4/13, 12/13
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 1, 4, 8 are
- 8/9, 4/9, 1/9
- 1/81, 4/81, 8/81
- 1, 4, 8
+ 1/9, 4/9, 8/9
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 2, 6, 9 are
- 2/121, 6/121, 9/121
+ 2/11, 6/11, 9/11
- 2, 6, 9
- 9/11, 6/11, 2/11
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 4, 4, 7 are
- 4/81, 4/81, 7/81
- 7/9, 4/9, 4/9
+ 4/9, 4/9, 7/9
- 4, 4, 7
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 6, 6, 7 are
+ 6/11, 6/11, 7/11
- 6, 6, 7
- 7/11, 6/11, 6/11
- 6/121, 6/121, 7/121
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 2, 2, 1 are
- 2, 2, 1
- 1/3, 2/3, 2/3
- 2/9, 2/9, 1/9
+ 2/3, 2/3, 1/3
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 0, 3, 4 are
+ 0, 3/5, 4/5
- 0, 3/25, 4/25
- 4/5, 3/5, 0
- 0, 3, 4
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 5, 12, 0 are
+ 5/13, 12/13, 0
- 5/169, 12/169, 0
- 5, 12, 0
- 0, 12/13, 5/13
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 2, 10, 11 are
- 2/225, 2/45, 11/225
- 11/15, 2/3, 2/15
+ 2/15, 2/3, 11/15
- 2, 10, 11
! Divide by sqrt (a^2 + b^2 + c^2).
? The direction cosines of the line with direction ratios 4, 8, 8 are
- 1/36, 1/18, 1/18
- 2/3, 2/3, 1/3
- 4, 8, 8
+ 1/3, 2/3, 2/3
! Divide by sqrt (a^2 + b^2 + c^2).
? Lines with direction ratios (1, 2, 2) and (2, 1, -2) are
- parallel
+ perpendicular
- neither perpendicular nor parallel
- coincident
! Check dot product and ratios.
? Lines with direction ratios (1, 1, 1) and (1, -1, 0) are
+ perpendicular
- coincident
- neither perpendicular nor parallel
- parallel
! Check dot product and ratios.
? Lines with direction ratios (2, 3, 4) and (1, 2, -2) are
- parallel
- coincident
- neither perpendicular nor parallel
+ perpendicular
! Check dot product and ratios.
? Lines with direction ratios (1, 0, 0) and (0, 1, 0) are
- parallel
- neither perpendicular nor parallel
+ perpendicular
- coincident
! Check dot product and ratios.
? Lines with direction ratios (3, 4, 0) and (4, -3, 5) are
+ perpendicular
- coincident
- neither perpendicular nor parallel
- parallel
! Check dot product and ratios.
? Lines with direction ratios (1, 2, 3) and (2, 4, 6) are
- coincident
- perpendicular
- neither perpendicular nor parallel
+ parallel
! Check dot product and ratios.
? Lines with direction ratios (2, -1, 2) and (1, 2, 0) are
- coincident
- neither perpendicular nor parallel
+ perpendicular
- parallel
! Check dot product and ratios.
? Lines with direction ratios (1, 1, 0) and (1, 0, 1) are
+ neither perpendicular nor parallel
- coincident
- perpendicular
- parallel
! Check dot product and ratios.
? Lines with direction ratios (6, 3, 2) and (2, -3, 6) are
- perpendicular
+ neither perpendicular nor parallel
- parallel
- coincident
! Check dot product and ratios.
? Distance of (1, 1, 1) from the plane 1x + 2y + 2z + 3 = 0 is
- 1.33
+ 2.67
- 2.93
- 2.4
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 2, 3) from the plane 2x + 3y + 6z + 0 = 0 is
+ 3.71
- 4.09
- 7.43
- 2.97
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (5, 0, 0) from the plane 1x + 0y + 0z + -2 = 0 is
- 2.4
- 6
- 1.5
+ 3
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 1, 1) from the plane 3x + 4y + 0z + 5 = 0 is
- 2.88
- 2.16
- 1.92
+ 2.4
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (0, 0, 0) from the plane 2x + -1y + 2z + -4 = 0 is
- 2.67
- 0.67
+ 1.33
- 2
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (0, 0, 0) from the plane 2x + 6y + 9z + 10 = 0 is
- 1.36
+ 0.91
- 0.73
- 0.45
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 0, 0) from the plane 4x + 4y + 7z + 1 = 0 is
- 0.5
- 0.67
- 0.44
+ 0.56
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of the origin from 2x + 3y + 6z = 14 is
- 1
- 4
- 2.2
+ 2
! |d|/sqrt (a^2 + b^2 + c^2).
? Distance of the origin from 1x + 2y + 2z = 9 is
- 3.6
- 2.7
- 1.5
+ 3
! |d|/sqrt (a^2 + b^2 + c^2).
? Distance of the origin from 3x + 4y + 12z = 26 is
+ 2
- 4
- 1.8
- 1.6
! |d|/sqrt (a^2 + b^2 + c^2).
? Distance of the origin from 2x + 2y + 1z = 6 is
- 2.2
- 1
+ 2
- 3
! |d|/sqrt (a^2 + b^2 + c^2).
? Distance of the origin from 6x + 3y + 2z = 14 is
- 2.4
+ 2
- 3
- 2.2
! |d|/sqrt (a^2 + b^2 + c^2).
? The magnitude of the vector (1, 2, 2) is
- 3.6
+ 3
- 1.5
- 2.4
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (1, 2, 2) is
- 0.27
+ 0.33
- 0.67
- 0.17
! a / magnitude.
? The magnitude of the vector (2, 3, 6) is
+ 7
- 8.4
- 7.7
- 10.5
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (2, 3, 6) is
- 0.43
+ 0.29
- 0.23
- 0.31
! a / magnitude.
? The magnitude of the vector (3, 4, 12) is
- 26
+ 13
- 15.6
- 10.4
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (3, 4, 12) is
- 0.35
- 0.21
- 0.46
+ 0.23
! a / magnitude.
? The magnitude of the vector (1, 4, 8) is
+ 9
- 7.2
- 8.1
- 9.9
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (1, 4, 8) is
- 0.13
+ 0.11
- 0.1
- 0.22
! a / magnitude.
? The magnitude of the vector (2, 6, 9) is
- 5.5
- 22
+ 11
- 16.5
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (2, 6, 9) is
+ 0.18
- 0.2
- 0.09
- 0.27
! a / magnitude.
? The magnitude of the vector (4, 4, 7) is
- 13.5
- 10.8
- 8.1
+ 9
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (4, 4, 7) is
- 0.53
- 0.49
- 0.22
+ 0.44
! a / magnitude.
? The magnitude of the vector (6, 6, 7) is
- 13.2
+ 11
- 5.5
- 12.1
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (6, 6, 7) is
- 0.65
+ 0.55
- 0.27
- 0.82
! a / magnitude.
? The magnitude of the vector (2, 10, 11) is
- 12
- 16.5
- 18
+ 15
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (2, 10, 11) is
+ 0.13
- 0.2
- 0.11
- 0.12
! a / magnitude.
? The magnitude of the vector (4, 8, 8) is
- 24
+ 12
- 10.8
- 6
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (4, 8, 8) is
- 0.27
+ 0.33
- 0.17
- 0.3
! a / magnitude.
? The magnitude of the vector (2, 2, 1) is
- 2.7
+ 3
- 3.3
- 3.6
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (2, 2, 1) is
- 0.73
- 0.53
+ 0.67
- 1
! a / magnitude.
? The magnitude of the vector (6, 3, 2) is
- 10.5
- 5.6
- 8.4
+ 7
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (6, 3, 2) is
- 1.03
+ 0.86
- 0.69
- 0.43
! a / magnitude.
? The magnitude of the vector (3, 6, 6) is
+ 9
- 4.5
- 7.2
- 8.1
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (3, 6, 6) is
- 0.5
+ 0.33
- 0.27
- 0.67
! a / magnitude.
? The magnitude of the vector (8, 1, 4) is
- 18
+ 9
- 10.8
- 7.2
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (8, 1, 4) is
+ 0.89
- 0.44
- 1.07
- 1.78
! a / magnitude.
? The magnitude of the vector (9, 12, 20) is
- 30
- 12.5
- 27.5
+ 25
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (9, 12, 20) is
- 0.32
- 0.43
+ 0.36
- 0.4
! a / magnitude.
? The magnitude of the vector (5, 14, 2) is
- 30
- 12
- 7.5
+ 15
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (5, 14, 2) is
- 0.27
+ 0.33
- 0.37
- 0.67
! a / magnitude.
? The magnitude of the vector (7, 4, 4) is
- 13.5
+ 9
- 7.2
- 10.8
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (7, 4, 4) is
+ 0.78
- 0.86
- 0.62
- 1.56
! a / magnitude.
? The magnitude of the vector (12, 9, 8) is
- 34
- 18.7
- 15.3
+ 17
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (12, 9, 8) is
- 1.41
- 0.64
- 0.56
+ 0.71
! a / magnitude.
? The magnitude of the vector (1, 12, 12) is
- 15.3
- 25.5
+ 17
- 18.7
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (1, 12, 12) is
- 0.12
- 0.03
- 0.09
+ 0.06
! a / magnitude.
? The magnitude of the vector (4, 13, 16) is
+ 21
- 10.5
- 16.8
- 42
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (4, 13, 16) is
- 0.21
+ 0.19
- 0.17
- 0.29
! a / magnitude.
? The magnitude of the vector (2, 14, 5) is
- 16.5
- 7.5
+ 15
- 13.5
! sqrt (a^2 + b^2 + c^2).
? The direction cosine l of (2, 14, 5) is
- 0.11
- 0.12
+ 0.13
- 0.16
! a / magnitude.
? Dot product of (1, 2, 3) and (4, 5, 6) is
- 16
- 28.8
+ 32
- 64
! a1a2 + b1b2 + c1c2.
? Dot product of (2, -1, 0) and (3, 4, 5) is
- 2.2
- 2.4
+ 2
- 4
! a1a2 + b1b2 + c1c2.
? Dot product of (3, 0, 2) and (1, 5, -3) is
- -3.6
- -6
+ -3
- -1.5
! a1a2 + b1b2 + c1c2.
? Dot product of (5, 1, 2) and (0, -3, 4) is
- 5.5
+ 5
- 7.5
- 4
! a1a2 + b1b2 + c1c2.
? If l, m, n are direction cosines then l^2 + m^2 + n^2 =
- 0
- 2
+ 1
- 3
! Identity.
? Direction cosines of the x-axis are
- 1, 1, 1
- 0, 0, 1
- 0, 1, 0
+ 1, 0, 0
! Along x.
? Perpendicular lines satisfy
+ a1a2 + b1b2 + c1c2 = 0
- a1a2 + b1b2 + c1c2 = 1
- a1/a2 = b1/b2
- a1 + a2 = 0
! Dot product.
? Normal to the plane 2x + 3y - z = 5 is
+ (2, 3, -1)
- (2, 3, 5)
- (5, 0, 0)
- (1, 1, 1)
! Coefficients.
? Two planes are parallel if their normals are
- equal in length only
+ proportional
- perpendicular
- coplanar
! Definition.
? The shortest distance between two skew lines is along the
- diagonal
- parallel line
+ common perpendicular
- axis
! Definition.
? What is the relation between direction cosines?
- |(a2 - a1) x b| / |b|
+ l^2 + m^2 + n^2 = 1
- The angle between their normals
- |d| / sqrt (a^2 + b^2 + c^2)
! Answer: l^2 + m^2 + n^2 = 1.
? What are direction ratios?
+ Numbers proportional to the direction cosines
- 1, 0, 0
- The cosines of the angles a line makes with the positive axes
- 0, 0, 1
! Answer: Numbers proportional to the direction cosines.
? What are the direction cosines of the x-axis?
- 0, 0, 1
+ 1, 0, 0
- Numbers proportional to the direction cosines
- 0, 1, 0
! Answer: 1, 0, 0.
? What are the direction cosines of the y-axis?
- 1, 0, 0
+ 0, 1, 0
- Numbers proportional to the direction cosines
- 0, 0, 1
! Answer: 0, 1, 0.
? What are the direction cosines of the z-axis?
- Numbers proportional to the direction cosines
- 1, 0, 0
- 0, 1, 0
+ 0, 0, 1
! Answer: 0, 0, 1.
? What is the vector equation of a line?
+ r = a + t b
- l^2 + m^2 + n^2 = 1
- |(a2 - a1) x b| / |b|
- |d| / sqrt (a^2 + b^2 + c^2)
! Answer: r = a + t b.
? What is the normal of ax + by + cz + d = 0?
+ The vector (a, b, c)
- The angle between their normals
- l^2 + m^2 + n^2 = 1
- r = a + t b
! Answer: The vector (a, b, c).
? What is the angle between two planes?
- |d| / sqrt (a^2 + b^2 + c^2)
- l^2 + m^2 + n^2 = 1
+ The angle between their normals
- The length of the common perpendicular
! Answer: The angle between their normals.
? What is the distance of the origin from ax + by + cz + d = 0?
+ |d| / sqrt (a^2 + b^2 + c^2)
- r = a + t b
- |(a2 - a1) x b| / |b|
- l^2 + m^2 + n^2 = 1
! Answer: |d| / sqrt (a^2 + b^2 + c^2).
? What is the shortest distance between two skew lines?
- r = a + t b
+ The length of the common perpendicular
- The vector (a, b, c)
- |(a2 - a1) x b| / |b|
! Answer: The length of the common perpendicular.
? What is the shortest distance between parallel lines?
- The angle between their normals
- The length of the common perpendicular
+ |(a2 - a1) x b| / |b|
- The vector (a, b, c)
! Answer: |(a2 - a1) x b| / |b|.
? Find the direction cosines of the line with direction ratios 1, 2, 2.
- 6/11, 6/11, 7/11
+ 1/3, 2/3, 2/3
- (6, -3, -6)
- 2/7, 3/7, 6/7
! Answer: 1/3, 2/3, 2/3.
? Find the direction cosines of the line with direction ratios 2, 3, 6.
+ 2/7, 3/7, 6/7
- 4/9, 4/9, 7/9
- 2, 3, 6
- 1x + 1y + 1z = 0
! Answer: 2/7, 3/7, 6/7.
? Find the direction cosines of the line with direction ratios 3, 4, 12.
- 4/9, 4/9, 7/9
- 1/3, 2/3, 2/3
- 0, 3/5, 4/5
+ 3/13, 4/13, 12/13
! Answer: 3/13, 4/13, 12/13.
? Find the direction cosines of the line with direction ratios 1, 4, 8.
- 2x + 1y + 1z = 7
- (1, 1, -2)
- 3, 4, 12
+ 1/9, 4/9, 8/9
! Answer: 1/9, 4/9, 8/9.
? Find the direction cosines of the line with direction ratios 2, 6, 9.
+ 2/11, 6/11, 9/11
- (10, -20, -15)
- 2/7, 3/7, 6/7
- (2, -4, 2)
! Answer: 2/11, 6/11, 9/11.
? Find the direction cosines of the line with direction ratios 4, 4, 7.
- 2/11, 6/11, 9/11
- (6, -3, -6)
- 2/3, 2/3, 1/3
+ 4/9, 4/9, 7/9
! Answer: 4/9, 4/9, 7/9.
? Find the direction cosines of the line with direction ratios 6, 6, 7.
- 1x + 1y + 1z = 0
+ 6/11, 6/11, 7/11
- 4/9, 4/9, 7/9
- (6, -3, -6)
! Answer: 6/11, 6/11, 7/11.
? Find the direction cosines of the line with direction ratios 2, 2, 1.
- 2/11, 6/11, 9/11
- 2, 3, 6
- 1/3, 2/3, 2/3
+ 2/3, 2/3, 1/3
! Answer: 2/3, 2/3, 1/3.
? Find the direction cosines of the line with direction ratios 1, 0, 0.
- 2/7, 3/7, 6/7
+ 1, 0, 0
- 4/9, 4/9, 7/9
- 2/15, 2/3, 11/15
! Answer: 1, 0, 0.
? Find the direction cosines of the line with direction ratios 0, 3, 4.
- 1/3, 2/3, 2/3
- 3x + 2y + -1z = 0
+ 0, 3/5, 4/5
- 6/11, 6/11, 7/11
! Answer: 0, 3/5, 4/5.
? Find the direction cosines of the line with direction ratios 5, 12, 0.
+ 5/13, 12/13, 0
- 2/3, 2/3, 1/3
- (10, -20, -15)
- 1/9, 4/9, 8/9
! Answer: 5/13, 12/13, 0.
? Find the direction cosines of the line with direction ratios 2, 10, 11.
- 4x + 0y + 3z = 7
- 3x + 2y + -1z = 0
+ 2/15, 2/3, 11/15
- 1, 0, 0
! Answer: 2/15, 2/3, 11/15.
? Find the direction cosines of the line with direction ratios 4, 8, 8.
- (6, -3, -6)
- 2/11, 6/11, 9/11
+ 1/3, 2/3, 2/3
- 1/9, 4/9, 8/9
! Answer: 1/3, 2/3, 2/3.
? Find the direction ratios of the line through (1, 2, 3) and (4, 6, 15).
- (-10, 11, 15)
- 1/9, 4/9, 8/9
+ 3, 4, 12
- 2/11, 6/11, 9/11
! Answer: 3, 4, 12.
? Find the direction ratios of the line through (0, 0, 0) and (2, 3, 6).
- 6/11, 6/11, 7/11
- 4x + 0y + 3z = 7
- 1, 0, 0
+ 2, 3, 6
! Answer: 2, 3, 6.
? Find the direction ratios of the line through (1, 1, 1) and (3, 5, 5).
- (6, -3, -6)
- 2x + 1y + 1z = 7
- 1, 0, 0
+ 2, 4, 4
! Answer: 2, 4, 4.
? Find the direction ratios of the line through (2, 0, 1) and (4, 4, 5).
- (6, -3, -6)
- 1/9, 4/9, 8/9
- (-10, 11, 15)
+ 2, 4, 4
! Answer: 2, 4, 4.
? Find the direction ratios of the line through (-1, 2, 0) and (1, 6, 4).
- 6/11, 6/11, 7/11
- (21, -28, 0)
+ 2, 4, 4
- (1, 1, -2)
! Answer: 2, 4, 4.
? Find the direction ratios of the line through (3, 3, 3) and (5, 7, 7).
- (10, -20, -15)
- 6/11, 6/11, 7/11
+ 2, 4, 4
- (1, 1, -2)
! Answer: 2, 4, 4.
? Find the plane through (1, 2, 3) with normal (2, 1, 1).
- 3/13, 4/13, 12/13
- 1/9, 4/9, 8/9
+ 2x + 1y + 1z = 7
- 0, 3/5, 4/5
! Answer: 2x + 1y + 1z = 7.
? Find the plane through (0, 0, 0) with normal (1, 1, 1).
- 2/11, 6/11, 9/11
- 1, 0, 0
- (1, 1, -2)
+ 1x + 1y + 1z = 0
! Answer: 1x + 1y + 1z = 0.
? Find the plane through (2, -1, 4) with normal (3, 2, -1).
- (2, -4, 2)
+ 3x + 2y + -1z = 0
- (6, -3, -6)
- (10, -20, -15)
! Answer: 3x + 2y + -1z = 0.
? Find the plane through (1, 1, 1) with normal (4, 0, 3).
- 0, 3/5, 4/5
- (-5, -10, 11)
- 2/7, 3/7, 6/7
+ 4x + 0y + 3z = 7
! Answer: 4x + 0y + 3z = 7.
@visual
formula | Three dimensional geometry | key formula
@problems
P: Find the direction cosines of the line with direction ratios 1, 2, 2.
A: 1/3, 2/3, 2/3.
R: 1 | Divide by sqrt(1 + 4 + 4) = 3
R: 1 | 1/3, 2/3, 2/3

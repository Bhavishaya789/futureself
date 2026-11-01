# JEE Advanced: vectors and three dimensional geometry
minutes: 70
yt: jee advanced vectors 3d geometry
@study
Dot product a.b = |a||b| cos theta, cross product |a x b| = |a||b| sin theta, scalar triple product [a b c] = a.(b x c) (volume of a parallelepiped). Distance of a point from a plane |a x1 + b y1 + c z1 + d|/sqrt(a^2 + b^2 + c^2); shortest distance between skew lines |(a2 - a1).(b1 x b2)|/|b1 x b2|; angle between planes cos theta = |n1.n2|/(|n1||n2|).
## Deep dive: products of vectors
For a = (a1, a2, a3) and b = (b1, b2, b3): dot product a.b = a1 b1 + a2 b2 + a3 b3 = |a||b| cos theta; projection of a on b = a.b/|b|; vectors are perpendicular iff a.b = 0. Cross product a x b = (a2 b3 - a3 b2, a3 b1 - a1 b3, a1 b2 - a2 b1), magnitude |a||b| sin theta = area of the parallelogram; area of a triangle = (1/2)|a x b|; parallel iff a x b = 0. Scalar triple product [a b c] = a.(b x c) = determinant of the three vectors = volume of the parallelepiped; coplanar iff [a b c] = 0; tetrahedron volume = |[a b c]|/6. Vector triple product a x (b x c) = (a.c) b - (a.b) c. Lagrange identity |a x b|^2 = |a|^2|b|^2 - (a.b)^2.
## Deep dive: lines and planes
Line through a with direction b: r = a + t b, Cartesian (x - x1)/l = (y - y1)/m = (z - z1)/n. Angle between lines cos theta = |b1.b2|/(|b1||b2|). Shortest distance between skew lines r = a1 + s b1 and r = a2 + t b2 is |(a2 - a1).(b1 x b2)|/|b1 x b2|; lines intersect if this is zero. Plane: ax + by + cz + d = 0 with normal n = (a, b, c); through three points normal = (b - a) x (c - a). Distance of a point from a plane |a x1 + b y1 + c z1 + d|/|n|; distance between parallel planes |d1 - d2|/|n|. Line and plane: sin theta = |b.n|/(|b||n|). Foot of the perpendicular and image of a point in a plane use the line through the point along the normal. Family of planes: P1 + lambda P2 = 0 through the line of intersection.
## Deep dive: problem-solving patterns in JEE Advanced
Express geometric conditions as vector equations: collinearity a x b = 0, coplanarity [a b c] = 0, perpendicular dot product zero. Reduce 3D problems to 2D by choosing coordinates cleverly. Section formula: position vector of a point dividing AB in the ratio m:n is (m b + n a)/(m + n). Centroid of a triangle (a + b + c)/3; incentre (a|a| + ...). Always check the sign when the plane equation is used to find on which side a point lies. Use the scalar triple product to test whether four points are coplanar.
## Hindi saransh
a.b = |a||b| cos theta. |a x b| = area of parallelogram. [a b c] = volume.
> Coplanar vectors have scalar triple product zero.
@formulas
## Products
Dot product | a.b = a1b1 + a2b2 + a3b3 = |a||b| cos theta | 
Projection of a on b | a.b/|b| | 
Cross product | a x b = (a2b3 - a3b2, a3b1 - a1b3, a1b2 - a2b1) | 
Magnitude of cross product | |a||b| sin theta | 
Triangle area | (1/2)|a x b| | 
Scalar triple product | [a b c] = a.(b x c) | 
Parallelepiped volume | |[a b c]| | 
Tetrahedron volume | |[a b c]|/6 | 
Vector triple product | a x (b x c) = (a.c) b - (a.b) c | 
Lagrange identity | |a x b|^2 = |a|^2|b|^2 - (a.b)^2 | 
## Lines and planes
Line | r = a + t b | 
Point-plane distance | |a x1 + b y1 + c z1 + d|/sqrt (a^2 + b^2 + c^2) | 
Parallel planes distance | |d1 - d2|/|n| | 
Skew lines distance | |(a2 - a1).(b1 x b2)|/|b1 x b2| | 
Angle between planes | cos theta = |n1.n2|/(|n1||n2|) | 
Line-plane angle | sin theta = |b.n|/(|b||n|) | 
Family of planes | P1 + lambda P2 = 0 | 

@qa
Q: What is the dot product of two vectors?
A: a.b = |a||b| cos theta.
Q: When are two vectors perpendicular?
A: When their dot product is zero.
Q: What is the cross product's magnitude?
A: |a||b| sin theta.
Q: What does |a x b| represent geometrically?
A: The area of the parallelogram with sides a and b.
Q: When are two vectors parallel?
A: When their cross product is zero.
Q: What is the scalar triple product?
A: a.(b x c).
Q: What does the scalar triple product represent?
A: The volume of the parallelepiped formed by a, b, c.
Q: When are three vectors coplanar?
A: When their scalar triple product is zero.
Q: What is the volume of a tetrahedron?
A: One-sixth of the modulus of the scalar triple product.
Q: State the vector triple product formula.
A: a x (b x c) = (a.c) b - (a.b) c.
Q: What is the projection of a on b?
A: a.b/|b|.
Q: What is a unit vector?
A: A vector of magnitude one.
Q: How is the section formula written in vectors?
A: (m b + n a)/(m + n) for ratio m:n.
Q: What are skew lines?
A: Lines that are neither parallel nor intersecting.
Q: What is the shortest distance between two parallel lines?
A: |(a2 - a1) x b|/|b|.
Q: What is the normal to the plane ax + by + cz + d = 0?
A: (a, b, c).
Q: How is the angle between two planes found?
A: From the angle between their normals.
Q: What is a position vector?
A: The vector from the origin to a point.
Q: What is the Lagrange identity?
A: |a x b|^2 = |a|^2 |b|^2 - (a.b)^2.
Q: What is the equation of the plane through the intersection of two planes?
A: P1 + lambda P2 = 0.
Q: Dot product of (1, 2, 3) and (4, -5, 6)
A: 12.
Q: Find the cross product of (1, 2, 3) and (4, -5, 6).
A: (27, 6, -13).
Q: Area of the parallelogram formed by (1, 2, 3) and (4, -5, 6)
A: 30.561 square units.
Q: Area of the triangle formed by (1, 2, 3) and (4, -5, 6)
A: 15.281 square units.
Q: Dot product of (2, 0, 1) and (1, 1, 1)
A: 3.
Q: Find the cross product of (2, 0, 1) and (1, 1, 1).
A: (-1, -1, 2).
Q: Area of the parallelogram formed by (2, 0, 1) and (1, 1, 1)
A: 2.449 square units.
Q: Area of the triangle formed by (2, 0, 1) and (1, 1, 1)
A: 1.225 square units.
Q: Dot product of (3, 4, 0) and (0, 0, 5)
A: 0.
Q: Find the cross product of (3, 4, 0) and (0, 0, 5).
A: (20, -15, 0).
Q: Area of the parallelogram formed by (3, 4, 0) and (0, 0, 5)
A: 25 square units.
Q: Area of the triangle formed by (3, 4, 0) and (0, 0, 5)
A: 12.5 square units.
Q: Dot product of (1, -1, 2) and (2, 1, -1)
A: -1.
Q: Find the cross product of (1, -1, 2) and (2, 1, -1).
A: (-1, 5, 3).
Q: Area of the parallelogram formed by (1, -1, 2) and (2, 1, -1)
A: 5.916 square units.
Q: Area of the triangle formed by (1, -1, 2) and (2, 1, -1)
A: 2.958 square units.
Q: Dot product of (2, 3, 4) and (1, 0, -1)
A: -2.
Q: Find the cross product of (2, 3, 4) and (1, 0, -1).
A: (-3, 6, -3).
Q: Area of the parallelogram formed by (2, 3, 4) and (1, 0, -1)
A: 7.348 square units.
Q: Area of the triangle formed by (2, 3, 4) and (1, 0, -1)
A: 3.674 square units.
Q: Dot product of (1, 1, 0) and (0, 1, 1)
A: 1.
Q: Find the cross product of (1, 1, 0) and (0, 1, 1).
A: (1, -1, 1).
Q: Area of the parallelogram formed by (1, 1, 0) and (0, 1, 1)
A: 1.732 square units.
Q: Area of the triangle formed by (1, 1, 0) and (0, 1, 1)
A: 0.866 square units.
Q: Dot product of (4, -2, 1) and (1, 2, 2)
A: 2.
Q: Find the cross product of (4, -2, 1) and (1, 2, 2).
A: (-6, -7, 10).
Q: Area of the parallelogram formed by (4, -2, 1) and (1, 2, 2)
A: 13.601 square units.
Q: Area of the triangle formed by (4, -2, 1) and (1, 2, 2)
A: 6.801 square units.
Q: Dot product of (0, 3, 4) and (5, 0, 12)
A: 48.
Q: Find the cross product of (0, 3, 4) and (5, 0, 12).
A: (36, 20, -15).
Q: Area of the parallelogram formed by (0, 3, 4) and (5, 0, 12)
A: 43.829 square units.
Q: Area of the triangle formed by (0, 3, 4) and (5, 0, 12)
A: 21.915 square units.
Q: Dot product of (2, 2, 1) and (1, -2, 2)
A: 0.
Q: Find the cross product of (2, 2, 1) and (1, -2, 2).
A: (6, -3, -6).
Q: Area of the parallelogram formed by (2, 2, 1) and (1, -2, 2)
A: 9 square units.
Q: Area of the triangle formed by (2, 2, 1) and (1, -2, 2)
A: 4.5 square units.
Q: Dot product of (1, 2, 2) and (2, 1, -2)
A: 0.
Q: Find the cross product of (1, 2, 2) and (2, 1, -2).
A: (-6, 6, -3).
Q: Area of the parallelogram formed by (1, 2, 2) and (2, 1, -2)
A: 9 square units.
Q: Area of the triangle formed by (1, 2, 2) and (2, 1, -2)
A: 4.5 square units.
Q: Dot product of (3, -1, 2) and (1, 4, 5)
A: 9.
Q: Find the cross product of (3, -1, 2) and (1, 4, 5).
A: (-13, -13, 13).
Q: Area of the parallelogram formed by (3, -1, 2) and (1, 4, 5)
A: 22.517 square units.
Q: Area of the triangle formed by (3, -1, 2) and (1, 4, 5)
A: 11.258 square units.
Q: Dot product of (5, 0, 0) and (0, 5, 0)
A: 0.
Q: Find the cross product of (5, 0, 0) and (0, 5, 0).
A: (0, 0, 25).
Q: Area of the parallelogram formed by (5, 0, 0) and (0, 5, 0)
A: 25 square units.
Q: Area of the triangle formed by (5, 0, 0) and (0, 5, 0)
A: 12.5 square units.
Q: Scalar triple product of (1, 0, 0), (0, 1, 0) and (0, 0, 1)
A: 1.
Q: Volume of the tetrahedron with edges (1, 0, 0), (0, 1, 0), (0, 0, 1)
A: 0.167 cubic units.
Q: Are (1, 0, 0), (0, 1, 0), (0, 0, 1) coplanar?
A: No (triple product = 1).
Q: Scalar triple product of (1, 2, 3), (0, 1, 4) and (5, 6, 0)
A: 1.
Q: Volume of the tetrahedron with edges (1, 2, 3), (0, 1, 4), (5, 6, 0)
A: 0.167 cubic units.
Q: Are (1, 2, 3), (0, 1, 4), (5, 6, 0) coplanar?
A: No (triple product = 1).
Q: Scalar triple product of (2, 0, 1), (1, 1, 0) and (0, 1, 3)
A: 7.
Q: Volume of the tetrahedron with edges (2, 0, 1), (1, 1, 0), (0, 1, 3)
A: 1.167 cubic units.
Q: Are (2, 0, 1), (1, 1, 0), (0, 1, 3) coplanar?
A: No (triple product = 7).
Q: Scalar triple product of (1, 1, 1), (1, 2, 3) and (2, 3, 4)
A: 0.
Q: Volume of the tetrahedron with edges (1, 1, 1), (1, 2, 3), (2, 3, 4)
A: 0 cubic units.
Q: Are (1, 1, 1), (1, 2, 3), (2, 3, 4) coplanar?
A: Yes (triple product = 0).
Q: Scalar triple product of (3, 0, 0), (0, 2, 0) and (0, 0, 4)
A: 24.
Q: Volume of the tetrahedron with edges (3, 0, 0), (0, 2, 0), (0, 0, 4)
A: 4 cubic units.
Q: Are (3, 0, 0), (0, 2, 0), (0, 0, 4) coplanar?
A: No (triple product = 24).
Q: Scalar triple product of (1, 2, 0), (0, 1, 2) and (2, 0, 1)
A: 9.
Q: Volume of the tetrahedron with edges (1, 2, 0), (0, 1, 2), (2, 0, 1)
A: 1.5 cubic units.
Q: Are (1, 2, 0), (0, 1, 2), (2, 0, 1) coplanar?
A: No (triple product = 9).
Q: Scalar triple product of (2, 1, 0), (1, 3, 1) and (0, 1, 4)
A: 18.
Q: Volume of the tetrahedron with edges (2, 1, 0), (1, 3, 1), (0, 1, 4)
A: 3 cubic units.
Q: Are (2, 1, 0), (1, 3, 1), (0, 1, 4) coplanar?
A: No (triple product = 18).
Q: Scalar triple product of (1, -1, 1), (2, 1, 0) and (0, 3, 2)
A: 12.
Q: Volume of the tetrahedron with edges (1, -1, 1), (2, 1, 0), (0, 3, 2)
A: 2 cubic units.
Q: Are (1, -1, 1), (2, 1, 0), (0, 3, 2) coplanar?
A: No (triple product = 12).
Q: Distance of (1, 1, 1) from the plane 1x + 2y + 2z + 3 = 0
A: 2.667.
Q: Distance of (1, 2, 3) from the plane 2x + 3y + 6z + 0 = 0
A: 3.714.
Q: Distance of (1, 1, 1) from the plane 3x + 4y + 0z + 5 = 0
A: 2.4.
Q: Distance of (3, 3, 3) from the plane 1x + 1y + 1z + -6 = 0
A: 1.732.
Q: Distance of (0, 0, 0) from the plane 2x + -1y + 2z + -4 = 0
A: 1.333.
Q: Distance of (1, 1, 1) from the plane 6x + 3y + 2z + 14 = 0
A: 3.571.
Q: Distance of (5, 0, 0) from the plane 1x + 0y + 0z + -2 = 0
A: 3.
Q: Distance of (1, 0, 0) from the plane 4x + 4y + 7z + 1 = 0
A: 0.556.
Q: Distance between planes 1x + 2y + 3z + 4 = 0 and 2x + 4y + 6z + 10 = 0
A: 0.267.
Q: Distance between planes 1x + 1y + 1z + 3 = 0 and 1x + 1y + 1z + 9 = 0
A: 3.464.
Q: Distance between planes 2x + 2y + 1z + 3 = 0 and 2x + 2y + 1z + 12 = 0
A: 3.
Q: Distance between planes 3x + 4y + 0z + 5 = 0 and 3x + 4y + 0z + -10 = 0
A: 3.
Q: Distance between planes 1x + 2y + 2z + 0 = 0 and 1x + 2y + 2z + 6 = 0
A: 2.
Q: cos of the angle between planes with normals (1, 0, 0) and (0, 1, 0)
A: 0.
Q: cos of the angle between planes with normals (1, 1, 0) and (1, 0, 1)
A: 0.5.
Q: cos of the angle between planes with normals (1, 2, 2) and (2, 1, -2)
A: 0.
Q: cos of the angle between planes with normals (1, 1, 1) and (1, -1, 0)
A: 0.
Q: cos of the angle between planes with normals (2, 1, 2) and (1, 2, 2)
A: 0.889.
Q: cos of the angle between planes with normals (1, 0, 0) and (1, 1, 0)
A: 0.707.
Q: Magnitude of the vector (3, 4, 0)
A: 5.
Q: Magnitude of the vector (4, 3, 0)
A: 5.
Q: Magnitude of the vector (1, 2, 2)
A: 3.
Q: Magnitude of the vector (3, 0, 4)
A: 5.
Q: Magnitude of the vector (5, 12, 0)
A: 13.
Q: Magnitude of the vector (0, 0, 1)
A: 1.
Q: Magnitude of the vector (2, 3, 6)
A: 7.
Q: Magnitude of the vector (1, 1, 1)
A: 1.732.
Q: Magnitude of the vector (6, 8, 0)
A: 10.
Q: Magnitude of the vector (0, 0, 3)
A: 3.
Q: Magnitude of the vector (2, 2, 2)
A: 3.464.
@quiz
? Dot product of (1, 2, 3) and (4, -5, 6)
- 24
- 6
- 11
+ 12
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (1, 2, 3) and (4, -5, 6)
- 33.618 square units
- 61.123 square units
- 27.505 square units
+ 30.561 square units
! |a x b|.
? Area of the triangle formed by (1, 2, 3) and (4, -5, 6)
+ 15.281 square units
- 12.225 square units
- 16.809 square units
- 13.753 square units
! |a x b|/2.
? Dot product of (2, 0, 1) and (1, 1, 1)
+ 3
- 2
- 9
- 4
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (2, 0, 1) and (1, 1, 1)
+ 2.449 square units
- 4.899 square units
- 1.96 square units
- 2.205 square units
! |a x b|.
? Area of the triangle formed by (2, 0, 1) and (1, 1, 1)
- 3.674 square units
+ 1.225 square units
- 1.347 square units
- 0.612 square units
! |a x b|/2.
? Area of the parallelogram formed by (3, 4, 0) and (0, 0, 5)
- 50 square units
- 75 square units
+ 25 square units
- 20 square units
! |a x b|.
? Area of the triangle formed by (3, 4, 0) and (0, 0, 5)
- 10 square units
+ 12.5 square units
- 15.625 square units
- 6.25 square units
! |a x b|/2.
? Dot product of (1, -1, 2) and (2, 1, -1)
- -
- -3
+ -1
- -2
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (1, -1, 2) and (2, 1, -1)
- 5.324 square units
- 6.508 square units
- 4.733 square units
+ 5.916 square units
! |a x b|.
? Area of the triangle formed by (1, -1, 2) and (2, 1, -1)
+ 2.958 square units
- 2.366 square units
- 2.662 square units
- 1.479 square units
! |a x b|/2.
? Dot product of (2, 3, 4) and (1, 0, -1)
+ -2
- -1
- -4
- -6
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (2, 3, 4) and (1, 0, -1)
- 8.083 square units
+ 7.348 square units
- 5.879 square units
- 14.697 square units
! |a x b|.
? Area of the triangle formed by (2, 3, 4) and (1, 0, -1)
- 1.837 square units
- 11.023 square units
+ 3.674 square units
- 4.042 square units
! |a x b|/2.
? Dot product of (1, 1, 0) and (0, 1, 1)
- 0
- 3
+ 1
- 2
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (1, 1, 0) and (0, 1, 1)
- 1.905 square units
- 5.196 square units
- 0.866 square units
+ 1.732 square units
! |a x b|.
? Area of the triangle formed by (1, 1, 0) and (0, 1, 1)
- 0.693 square units
+ 0.866 square units
- 1.083 square units
- 0.953 square units
! |a x b|/2.
? Dot product of (4, -2, 1) and (1, 2, 2)
- 1
- 4
- 6
+ 2
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (4, -2, 1) and (1, 2, 2)
- 17.002 square units
- 14.962 square units
- 6.801 square units
+ 13.601 square units
! |a x b|.
? Area of the triangle formed by (4, -2, 1) and (1, 2, 2)
- 13.601 square units
- 3.4 square units
+ 6.801 square units
- 20.402 square units
! |a x b|/2.
? Dot product of (0, 3, 4) and (5, 0, 12)
- 53
- 24
- 96
+ 48
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (0, 3, 4) and (5, 0, 12)
+ 43.829 square units
- 48.212 square units
- 87.658 square units
- 21.915 square units
! |a x b|.
? Area of the triangle formed by (0, 3, 4) and (5, 0, 12)
+ 21.915 square units
- 65.744 square units
- 17.532 square units
- 10.957 square units
! |a x b|/2.
? Area of the parallelogram formed by (2, 2, 1) and (1, -2, 2)
- 8.1 square units
- 7.2 square units
+ 9 square units
- 11.25 square units
! |a x b|.
? Area of the triangle formed by (2, 2, 1) and (1, -2, 2)
- 4.95 square units
+ 4.5 square units
- 2.25 square units
- 5.625 square units
! |a x b|/2.
? Area of the parallelogram formed by (1, 2, 2) and (2, 1, -2)
- 4.5 square units
- 11.25 square units
- 27 square units
+ 9 square units
! |a x b|.
? Area of the triangle formed by (1, 2, 2) and (2, 1, -2)
- 4.05 square units
- 5.625 square units
- 9 square units
+ 4.5 square units
! |a x b|/2.
? Dot product of (3, -1, 2) and (1, 4, 5)
- 1
+ 9
- 27
- 11
! a1b1 + a2b2 + a3b3.
? Area of the parallelogram formed by (3, -1, 2) and (1, 4, 5)
- 11.258 square units
- 20.265 square units
+ 22.517 square units
- 28.146 square units
! |a x b|.
? Area of the triangle formed by (3, -1, 2) and (1, 4, 5)
- 5.629 square units
- 33.775 square units
+ 11.258 square units
- 10.132 square units
! |a x b|/2.
? Area of the parallelogram formed by (5, 0, 0) and (0, 5, 0)
+ 25 square units
- 22.5 square units
- 20 square units
- 75 square units
! |a x b|.
? Area of the triangle formed by (5, 0, 0) and (0, 5, 0)
- 25 square units
+ 12.5 square units
- 37.5 square units
- 10 square units
! |a x b|/2.
? Scalar triple product of (1, 0, 0), (0, 1, 0) and (0, 0, 1)
+ 1
- 3
- 0
- 2
! a.(b x c).
? Volume of the tetrahedron with edges (1, 0, 0), (0, 1, 0), (0, 0, 1)
- 0.133 cubic units
- 0.15 cubic units
+ 0.167 cubic units
- 0.083 cubic units
! |[a b c]|/6.
? Scalar triple product of (1, 2, 3), (0, 1, 4) and (5, 6, 0)
+ 1
- 2
- 3
- 0
! a.(b x c).
? Volume of the tetrahedron with edges (1, 2, 3), (0, 1, 4), (5, 6, 0)
- 0.133 cubic units
- 0.183 cubic units
- 0.208 cubic units
+ 0.167 cubic units
! |[a b c]|/6.
? Scalar triple product of (2, 0, 1), (1, 1, 0) and (0, 1, 3)
- 9
- 6
- 8
+ 7
! a.(b x c).
? Volume of the tetrahedron with edges (2, 0, 1), (1, 1, 0), (0, 1, 3)
+ 1.167 cubic units
- 1.458 cubic units
- 0.583 cubic units
- 1.05 cubic units
! |[a b c]|/6.
? Scalar triple product of (3, 0, 0), (0, 2, 0) and (0, 0, 4)
- 72
- 48
+ 24
- 19
! a.(b x c).
? Volume of the tetrahedron with edges (3, 0, 0), (0, 2, 0), (0, 0, 4)
- 5 cubic units
- 3.6 cubic units
+ 4 cubic units
- 4.4 cubic units
! |[a b c]|/6.
? Scalar triple product of (1, 2, 0), (0, 1, 2) and (2, 0, 1)
- 7
- 27
+ 9
- 11
! a.(b x c).
? Volume of the tetrahedron with edges (1, 2, 0), (0, 1, 2), (2, 0, 1)
- 1.35 cubic units
- 4.5 cubic units
+ 1.5 cubic units
- 0.75 cubic units
! |[a b c]|/6.
? Scalar triple product of (2, 1, 0), (1, 3, 1) and (0, 1, 4)
- 2
- 54
+ 18
- 9
! a.(b x c).
? Volume of the tetrahedron with edges (2, 1, 0), (1, 3, 1), (0, 1, 4)
- 9 cubic units
+ 3 cubic units
- 1.5 cubic units
- 2.4 cubic units
! |[a b c]|/6.
? Scalar triple product of (1, -1, 1), (2, 1, 0) and (0, 3, 2)
- 13
- 11
+ 12
- 15
! a.(b x c).
? Volume of the tetrahedron with edges (1, -1, 1), (2, 1, 0), (0, 3, 2)
- 1.6 cubic units
+ 2 cubic units
- 4 cubic units
- 2.2 cubic units
! |[a b c]|/6.
? Distance of (1, 1, 1) from the plane 1x + 2y + 2z + 3 = 0
- 3.333
+ 2.667
- 2.933
- 2.4
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 2, 3) from the plane 2x + 3y + 6z + 0 = 0
- 1.857
- 2.971
+ 3.714
- 4.643
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 1, 1) from the plane 3x + 4y + 0z + 5 = 0
- 4.8
+ 2.4
- 1.2
- 1.92
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (3, 3, 3) from the plane 1x + 1y + 1z + -6 = 0
- 1.905
+ 1.732
- 1.386
- 0.866
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (0, 0, 0) from the plane 2x + -1y + 2z + -4 = 0
- 0.667
- 1.2
- 1.667
+ 1.333
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 1, 1) from the plane 6x + 3y + 2z + 14 = 0
- 2.857
+ 3.571
- 3.929
- 7.143
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (5, 0, 0) from the plane 1x + 0y + 0z + -2 = 0
+ 3
- 1.5
- 6
- 2.7
! |ax1 + by1 + cz1 + d|/|n|.
? Distance of (1, 0, 0) from the plane 4x + 4y + 7z + 1 = 0
+ 0.556
- 0.444
- 1.667
- 0.694
! |ax1 + by1 + cz1 + d|/|n|.
? Distance between planes 1x + 2y + 3z + 4 = 0 and 2x + 4y + 6z + 10 = 0
- 0.214
- 0.134
- 0.535
+ 0.267
! |d1 - d2|/|n|.
? Distance between planes 1x + 1y + 1z + 3 = 0 and 1x + 1y + 1z + 9 = 0
- 2.771
+ 3.464
- 10.392
- 6.928
! |d1 - d2|/|n|.
? Distance between planes 2x + 2y + 1z + 3 = 0 and 2x + 2y + 1z + 12 = 0
- 6
- 1.5
+ 3
- 2.7
! |d1 - d2|/|n|.
? Distance between planes 3x + 4y + 0z + 5 = 0 and 3x + 4y + 0z + -10 = 0
+ 3
- 6
- 3.3
- 3.75
! |d1 - d2|/|n|.
? Distance between planes 1x + 2y + 2z + 0 = 0 and 1x + 2y + 2z + 6 = 0
- 2.5
- 6
+ 2
- 1
! |d1 - d2|/|n|.
? cos of the angle between planes with normals (1, 1, 0) and (1, 0, 1)
+ 0.5
- 0.45
- 1.5
- 0.625
! |n1.n2|/(|n1||n2|).
? cos of the angle between planes with normals (2, 1, 2) and (1, 2, 2)
- 0.978
+ 0.889
- 1.778
- 2.667
! |n1.n2|/(|n1||n2|).
? cos of the angle between planes with normals (1, 0, 0) and (1, 1, 0)
- 0.354
+ 0.707
- 0.636
- 0.884
! |n1.n2|/(|n1||n2|).
? Magnitude of the vector (3, 4, 0)
+ 5
- 6.25
- 10
- 5.5
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (4, 3, 0)
- 15
- 5.5
- 2.5
+ 5
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (1, 2, 2)
- 2.4
+ 3
- 2.7
- 9
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (3, 0, 4)
- 5.5
+ 5
- 15
- 4.5
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (5, 12, 0)
- 10.4
- 14.3
+ 13
- 26
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (0, 0, 1)
- 1.25
- 2
+ 1
- 0.9
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (2, 3, 6)
- 6.3
- 14
+ 7
- 21
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (1, 1, 1)
+ 1.732
- 3.464
- 1.905
- 0.866
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (6, 8, 0)
+ 10
- 8
- 12.5
- 30
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (0, 0, 3)
- 2.4
- 9
+ 3
- 2.7
! sqrt (a1^2 + a2^2 + a3^2).
? Magnitude of the vector (2, 2, 2)
- 6.928
- 1.732
- 3.811
+ 3.464
! sqrt (a1^2 + a2^2 + a3^2).
? Perpendicular vectors have a dot product equal to
+ 0
- -1
- |a||b|
- 1
! cos 90 = 0.
? Coplanar vectors have scalar triple product
- -1
+ 0
- 1
- maximum
! Zero volume.
? a x a equals
- |a|^2
- 1
- a
+ the zero vector
! sin 0 = 0.
? The cross product a x b is perpendicular to
- only b
- neither
- only a
+ both a and b
! Definition.
? Volume of a tetrahedron is
- |[a b c]|/3
- |[a b c]|/2
- |[a b c]|
+ |[a b c]|/6
! One-sixth.
? Skew lines
- intersect
- are parallel
+ do not intersect and are not parallel
- are coincident
! Definition.
? What is the dot product of two vectors?
- P1 + lambda P2 = 0
- A vector of magnitude one
- (a, b, c)
+ a.b = |a||b| cos theta
! Answer: a.b = |a||b| cos theta.
? What is the cross product's magnitude?
- One-sixth of the modulus of the scalar triple product
- |(a2 - a1) x b|/|b|
- |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
+ |a||b| sin theta
! Answer: |a||b| sin theta.
? What is the scalar triple product?
+ a.(b x c)
- a.b = |a||b| cos theta
- |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
- a.b/|b|
! Answer: a.(b x c).
? What is the volume of a tetrahedron?
- |a||b| sin theta
+ One-sixth of the modulus of the scalar triple product
- |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
- The vector from the origin to a point
! Answer: One-sixth of the modulus of the scalar triple product.
? What is the projection of a on b?
- a.(b x c)
- |a||b| sin theta
+ a.b/|b|
- The vector from the origin to a point
! Answer: a.b/|b|.
? What is a unit vector?
+ A vector of magnitude one
- a.b/|b|
- |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
- a.b = |a||b| cos theta
! Answer: A vector of magnitude one.
? What is the shortest distance between two parallel lines?
- a.b = |a||b| cos theta
- a.b/|b|
+ |(a2 - a1) x b|/|b|
- a.(b x c)
! Answer: |(a2 - a1) x b|/|b|.
? What is the normal to the plane ax + by + cz + d = 0?
- a.b = |a||b| cos theta
- |(a2 - a1) x b|/|b|
- |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
+ (a, b, c)
! Answer: (a, b, c).
? What is a position vector?
- (a, b, c)
- a.b = |a||b| cos theta
+ The vector from the origin to a point
- |a||b| sin theta
! Answer: The vector from the origin to a point.
? What is the Lagrange identity?
- a.(b x c)
+ |a x b|^2 = |a|^2 |b|^2 - (a.b)^2
- P1 + lambda P2 = 0
- The vector from the origin to a point
! Answer: |a x b|^2 = |a|^2 |b|^2 - (a.b)^2.
? What is the equation of the plane through the intersection of two planes?
- (a, b, c)
- |(a2 - a1) x b|/|b|
- One-sixth of the modulus of the scalar triple product
+ P1 + lambda P2 = 0
! Answer: P1 + lambda P2 = 0.
? Find the cross product of (1, 2, 3) and (4, -5, 6).
- (-3, 6, -3)
- (36, 20, -15)
+ (27, 6, -13)
- (-6, -7, 10)
! Answer: (27, 6, -13).
? Find the cross product of (2, 0, 1) and (1, 1, 1).
+ (-1, -1, 2)
- (36, 20, -15)
- (0, 0, 25)
- (27, 6, -13)
! Answer: (-1, -1, 2).
? Dot product of (3, 4, 0) and (0, 0, 5)
+ 0
- 1
- 3
- 48
! Answer: 0.
? Find the cross product of (3, 4, 0) and (0, 0, 5).
- (6, -3, -6)
+ (20, -15, 0)
- (-1, 5, 3)
- (-6, -7, 10)
! Answer: (20, -15, 0).
? Find the cross product of (1, -1, 2) and (2, 1, -1).
- (-6, 6, -3)
- (-6, -7, 10)
- (-3, 6, -3)
+ (-1, 5, 3)
! Answer: (-1, 5, 3).
? Find the cross product of (2, 3, 4) and (1, 0, -1).
- (6, -3, -6)
- (20, -15, 0)
- (-6, -7, 10)
+ (-3, 6, -3)
! Answer: (-3, 6, -3).
? Find the cross product of (1, 1, 0) and (0, 1, 1).
- (-6, 6, -3)
- (6, -3, -6)
- (0, 0, 25)
+ (1, -1, 1)
! Answer: (1, -1, 1).
? Find the cross product of (4, -2, 1) and (1, 2, 2).
+ (-6, -7, 10)
- (-1, -1, 2)
- (0, 0, 25)
- (36, 20, -15)
! Answer: (-6, -7, 10).
? Find the cross product of (0, 3, 4) and (5, 0, 12).
- (0, 0, 25)
- (27, 6, -13)
+ (36, 20, -15)
- (-13, -13, 13)
! Answer: (36, 20, -15).
? Dot product of (2, 2, 1) and (1, -2, 2)
- 48
- 3
+ 0
- 1
! Answer: 0.
? Find the cross product of (2, 2, 1) and (1, -2, 2).
- (-3, 6, -3)
- (27, 6, -13)
+ (6, -3, -6)
- (20, -15, 0)
! Answer: (6, -3, -6).
? Dot product of (1, 2, 2) and (2, 1, -2)
- 1
+ 0
- 48
- 2
! Answer: 0.
? Find the cross product of (1, 2, 2) and (2, 1, -2).
- (27, 6, -13)
+ (-6, 6, -3)
- (0, 0, 25)
- (36, 20, -15)
! Answer: (-6, 6, -3).
? Find the cross product of (3, -1, 2) and (1, 4, 5).
+ (-13, -13, 13)
- (-1, -1, 2)
- (-6, 6, -3)
- (-1, 5, 3)
! Answer: (-13, -13, 13).
? Dot product of (5, 0, 0) and (0, 5, 0)
+ 0
- 2
- -2
- 3
! Answer: 0.
? Find the cross product of (5, 0, 0) and (0, 5, 0).
- (6, -3, -6)
- (-13, -13, 13)
+ (0, 0, 25)
- (36, 20, -15)
! Answer: (0, 0, 25).
@visual
formula | JEE Advanced: vectors and three dimensional geometry | key formula
@problems
P: Find a.b for a = (1, 2, 3), b = (4, -5, 6).
A: 12.
R: 1 | 4 - 10 + 18
R: 1 | 12

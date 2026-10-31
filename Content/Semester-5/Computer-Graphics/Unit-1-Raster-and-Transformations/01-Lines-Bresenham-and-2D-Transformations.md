# Line drawing (Bresenham) and 2D transformations
minutes: 25
yt: bresenham line algorithm 2d transformations
@study
**Bresenham's line algorithm** draws a line using only integer arithmetic. For a line with 0 < slope < 1 from (x0, y0) to (x1, y1): dx = x1 - x0, dy = y1 - y0, initial decision p = 2 dy - dx. At each x step: if p < 0 plot (x + 1, y) and p += 2 dy; otherwise plot (x + 1, y + 1) and p += 2 dy - 2 dx.
Example: (0, 0) to (5, 2): dx = 5, dy = 2, p0 = -1. Points: **(0,0), (1,0), (2,1), (3,1), (4,2), (5,2)**.
## 2D transformations (homogeneous matrices)
- Translation by (tx, ty); scaling by (sx, sy); rotation by t: x' = x cos t - y sin t, y' = x sin t + y cos t.
- Rotating (3, 4) by 90 degrees about the origin gives **(-4, 3)**.
- Composite transformations are matrix products; order matters (rotate then translate differs from translate then rotate).
## Other topics
Viewport and clipping (Cohen-Sutherland, Sutherland-Hodgman), 3D projection (parallel and perspective), hidden-surface removal (z-buffer), shading models (flat, Gouraud, Phong).
## Hindi saransh
Bresenham integer arithmetic se line draw karta hai. Rotation 90 degree par (3, 4) se (-4, 3) milta hai.
> Matrix order matters in composite transformations.
@qa
Q: Why is Bresenham's algorithm efficient?
A: It uses only integer addition and comparison, no multiplication or floating point per step.
Q: Rotate (3, 4) by 90 degrees about the origin.
A: (-4, 3).
Q: What does the z-buffer do?
A: Keeps the nearest depth per pixel to decide visible surfaces.
Q: Why use homogeneous coordinates?
A: Translation can be written as a matrix, so all transformations combine by multiplication.
@quiz
? Initial decision parameter for (0,0) to (5,2) is
- 1
+ -1
- 0
- 4
! 2 dy - dx = 4 - 5.
? Rotating (3, 4) by 90 degrees gives
- (4, 3)
- (3, -4)
+ (-4, 3)
- (-3, -4)
! x' = -y, y' = x.
? Z-buffer is used for
- shading
+ hidden surface removal
- clipping
- texture
! Depth comparison.
? Phong shading interpolates
- colours
+ normals
- edges
- depth
! Per-pixel lighting.
@visual
formula | Transformations | x' = x cos t - y sin t ; y' = x sin t + y cos t
steps | Bresenham | Compute dx and dy; Set p = 2 dy - dx; Step in x; Choose y or y+1 using p; Update p
@problems
## Moderate
P: Rotate (3, 4) by 90 degrees anticlockwise about the origin.
A: (-4, 3).
R: 1 | Formula
R: 1 | Point
## High
P: Use Bresenham to list the points from (0, 0) to (5, 2).
A: (0,0), (1,0), (2,1), (3,1), (4,2), (5,2).
R: 2 | Decision parameter
R: 2 | Points
## Advanced
P: Explain why rotating about a point (a, b) needs translation, rotation, translation.
A: Translate (a, b) to the origin, rotate, then translate back; one matrix product.
R: 2 | Steps
R: 2 | Reason

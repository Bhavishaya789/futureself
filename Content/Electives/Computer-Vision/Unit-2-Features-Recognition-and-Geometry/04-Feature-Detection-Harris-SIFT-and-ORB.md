# Feature detection: corners, SIFT and ORB
minutes: 25
yt: harris corner detector explained
yt: SIFT feature matching
@study
A **feature** is a distinctive, repeatable image location (a corner, a blob) with a **descriptor** (a vector describing the neighbourhood) so that the same point can be found in another image. Uses: panoramas, 3D reconstruction, tracking, AR.

## Why corners?
- A flat region looks the same when you shift the window in any direction.
- An edge looks the same when shifted **along** the edge.
- A **corner** changes in every direction, so it is easy to localise.

## Harris corner detector
Compute the matrix M from gradients Ix, Iy summed over a window: M = [[sum Ix^2, sum IxIy], [sum IxIy, sum Iy^2]]. Corner response R = det(M) - k (trace M)^2, with k about 0.04 to 0.06.
- R large and positive: corner.
- R negative with large magnitude: edge.
- |R| small: flat region.
Harris is rotation-invariant but not scale-invariant.

## SIFT (Scale-Invariant Feature Transform)
Finds keypoints in scale space (difference of Gaussians), assigns an orientation, and builds a 128-dimensional descriptor from gradient histograms (4x4 cells x 8 orientations = 128). It is robust to scale, rotation and moderate lighting change but slower.

## ORB
Oriented FAST keypoints plus a rotated **BRIEF** binary descriptor. Fast and free to use, matched using **Hamming distance** (count differing bits).

## Matching
For each descriptor in image A find the nearest in image B. **Lowe's ratio test**: keep a match only if the best distance < 0.75 x the second-best distance. **RANSAC** then estimates a homography/fundamental matrix while ignoring wrong matches (outliers).

## Hindi saransh
Corner har disha mein change hota hai isliye feature ke liye achha hai. Harris mein R = det(M) - k(trace M)^2. SIFT scale aur rotation invariant hai (128-dim descriptor). ORB binary descriptor hai jo Hamming distance se match hota hai. RANSAC outliers hatata hai.

> Flat: no change. Edge: change in one direction. Corner: change in all directions.
@qa
Q: Why are corners better features than edges?
A: A corner can be located precisely in both directions, while a point on an edge can slide along the edge.
Q: What does the Harris response R = det(M) - k (trace M)^2 tell us?
A: A large positive value means a corner, a large negative value means an edge, and a small value means a flat region.
Q: How long is a SIFT descriptor?
A: 128 numbers: a 4x4 grid of cells, each with an 8-bin orientation histogram.
Q: What distance is used to match ORB descriptors?
A: Hamming distance, the number of differing bits, which is fast to compute.
Q: What does RANSAC do?
A: It repeatedly fits a model to random minimal samples and keeps the model with the most inliers, so wrong matches are ignored.
@quiz
? SIFT descriptors have how many dimensions?
- 32
- 64
+ 128
- 256
! 4 x 4 x 8 = 128.
? Harris response is strongly negative at
- a corner
+ an edge
- a flat region
- noise only
! One large and one small eigenvalue give negative R.
? ORB descriptors are compared with
- Euclidean distance only
+ Hamming distance
- cosine of angles in colour space
- no distance
! They are binary strings.
? Lowe's ratio test keeps a match if the best distance is
- greater than the second best
+ clearly smaller than the second best (for example below 0.75 times)
- exactly zero
- equal to the second best
! Ambiguous matches are rejected.
? RANSAC is used to
- sharpen the image
+ reject outlier matches while fitting a model
- compress data
- add colour
! It keeps the model with the most inliers.
@visual
compare | Harris versus SIFT versus ORB | Harris=Corners only~Rotation invariant~Not scale invariant; SIFT=Scale and rotation invariant~128-dim float descriptor~Slower; ORB=Fast binary descriptor~Hamming matching~Free and real-time
flow | Feature-based image matching | Detect keypoints > Compute descriptors > Match nearest neighbours > Ratio test > RANSAC > Estimate the transform
@problems
## Moderate
P: Classify a window as flat, edge or corner from the Harris response: (a) R close to 0, (b) R large negative, (c) R large positive.
A: (a) flat, (b) edge, (c) corner.
R: 1 | Two correct
R: 1 | All three correct
## High
P: Two binary ORB descriptors are 10110100 and 10011100. Find their Hamming distance.
A: Compare 10110100 with 10011100 bit by bit. They differ at position 3 (1 vs 0) and position 5 (0 vs 1); all other positions match. The Hamming distance is 2.
R: 2 | Comparing bit by bit
R: 1 | Distance 2
## Advanced
P: Describe how you would stitch two overlapping photos into a panorama using feature matching.
A: Detect keypoints and descriptors (SIFT or ORB) in both images, match them with nearest neighbour and the ratio test, estimate a homography with RANSAC to reject outliers, warp one image into the other's frame using the homography, and blend the overlap (for example feather blending) to hide the seam.
R: 2 | Detect, describe and match
R: 2 | Homography with RANSAC
R: 2 | Warp and blend

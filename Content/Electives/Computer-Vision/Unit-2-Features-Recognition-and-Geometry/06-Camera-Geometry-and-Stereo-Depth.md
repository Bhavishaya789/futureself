# Camera geometry and stereo depth
minutes: 25
yt: stereo vision depth from disparity
yt: camera intrinsic and extrinsic parameters
@study
To measure the 3D world from images we need a model of the camera.

## Camera matrix
A 3D world point P = (X, Y, Z) maps to pixel (u, v) by
u = f_x X / Z + c_x, v = f_y Y / Z + c_y
- **Intrinsic** parameters: focal lengths f_x, f_y (in pixels), principal point (c_x, c_y), skew.
- **Extrinsic** parameters: rotation R and translation t from world to camera coordinates.
In matrix form s [u v 1]^T = K [R | t] [X Y Z 1]^T.

**Calibration** (checkerboard images, Zhang's method) estimates K and lens distortion (radial: barrel, pincushion).

### Example
f_x = f_y = 800 pixels, principal point (320, 240). Point (0.5, 0.25, 5) m: u = 800(0.5)/5 + 320 = **400**, v = 800(0.25)/5 + 240 = **280**.

## Stereo vision
Two cameras separated by a **baseline B**, with focal length f (pixels). A point appears at x_L in the left image and x_R in the right image. **Disparity d = x_L - x_R**. Depth:
**Z = f B / d**.
Example: f = 700 pixels, B = 0.12 m, d = 14 pixels: Z = 700 x 0.12 / 14 = **6 m**. Nearer objects have larger disparity.

```python
f, B = 700, 0.12
for d in (7, 14, 28):
    print(d, f * B / d)   # 12.0, 6.0, 3.0
```

## Finding correspondences
Using **epipolar geometry**, the match for a pixel lies on a line in the other image, so we search only along that line (a row in rectified images). Block matching and semi-global matching produce a disparity map.

## Other depth sensors
LiDAR (time of flight lasers), structured light, ToF cameras; and monocular deep networks that estimate depth from one image.

## Hindi saransh
Camera model u = fX/Z + cx. Intrinsic parameters camera ke andar ke hote hain (f, principal point), extrinsic bahar ke (R, t). Stereo mein depth Z = fB/d; disparity jitna zyada, object utna paas.

> Disparity and depth are inversely related: half the depth means double the disparity.
@qa
Q: What are intrinsic and extrinsic camera parameters?
A: Intrinsic: focal length, principal point and distortion of the camera itself. Extrinsic: the camera's rotation and translation in the world.
Q: Write the stereo depth formula.
A: Z = f B / d, with focal length f in pixels, baseline B and disparity d in pixels.
Q: Why does a larger disparity mean a closer object?
A: Depth is inversely proportional to disparity: Z = f B / d.
Q: What is camera calibration?
A: Estimating the camera's intrinsic parameters and lens distortion, usually from images of a checkerboard.
Q: What does epipolar geometry give for matching?
A: The matching point must lie on a known line (the epipolar line) in the other image, reducing the search from 2D to 1D.
@quiz
? For f = 700 px, B = 0.12 m, d = 14 px the depth is
- 3 m
+ 6 m
- 12 m
- 0.6 m
! 700 x 0.12 / 14 = 6.
? If disparity doubles the depth becomes
- doubled
+ halved
- unchanged
- squared
! Z is inversely proportional to d.
? The focal length and principal point are
- extrinsic parameters
+ intrinsic parameters
- distortions
- labels
! They belong to the camera itself.
? For f = 800, c = (320, 240) and a point (0.5, 0.25, 5) the pixel u is
- 320
- 360
+ 400
- 480
! 800 x 0.5 / 5 + 320 = 400.
? A common calibration target is a
- sphere
+ checkerboard
- mirror
- laser pointer
! Its corners are easy to detect precisely.
@visual
formula | Stereo depth | Z = f B / d
formula | Pinhole projection with principal point | u = fx X / Z + cx ; v = fy Y / Z + cy
bars | Depth for different disparities (m) | d7=12;d14=6;d28=3
@problems
## Moderate
P: A stereo rig has f = 600 px and baseline 0.1 m. Find the depth for disparity 20 px.
A: Z = 600 x 0.1 / 20 = 3 m.
R: 1 | Formula
R: 1 | 3 m
## High
P: Project the point (0.5, 0.25, 5) m with f_x = f_y = 800 px and principal point (320, 240).
A: u = 800 x 0.5 / 5 + 320 = 400. v = 800 x 0.25 / 5 + 240 = 280. Pixel (400, 280).
R: 2 | u = 400
R: 2 | v = 280
## Advanced
P: Why does depth accuracy from stereo get worse for distant objects? Use the formula and a numerical example with f = 700 px and B = 0.12 m.
A: Z = f B / d. At 6 m, d = 14 px; a 1 pixel error changes d to 13 or 15, giving Z = 6.46 m or 5.6 m. At 30 m, d = 2.8 px; a 1 px error gives d = 1.8 or 3.8, so Z = 46.7 m or 22.1 m. Since disparity becomes very small, the same pixel error causes a much larger depth error. A longer baseline or higher resolution improves far-range accuracy.
R: 2 | States depth error grows because disparity is small
R: 2 | Numerical comparison
R: 2 | Suggests longer baseline or higher resolution

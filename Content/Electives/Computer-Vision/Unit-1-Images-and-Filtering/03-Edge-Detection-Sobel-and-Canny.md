# Edge detection: Sobel and Canny
minutes: 25
yt: sobel edge detection explained
yt: canny edge detector steps
@study
**Edges** are places where brightness changes sharply, usually object boundaries. We detect them with the **gradient** of the image: the change in intensity in x and y.

## Sobel operator
Gx = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]] detects vertical edges; Gy = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]] detects horizontal edges.
Magnitude = sqrt(Gx^2 + Gy^2); direction = atan2(Gy, Gx).

### Worked example
Patch [[10, 10, 10], [10, 10, 200], [10, 10, 200]].
- Gx = (-1)(10) + 0 + (1)(10) + (-2)(10) + 0 + (2)(200) + (-1)(10) + 0 + (1)(200) = **570**
- Gy = (-1)(10) + (-2)(10) + (-1)(10) + 0 + (1)(10) + (2)(10) + (1)(200) = **190**
- Magnitude = sqrt(570^2 + 190^2) = **600.8**; angle = atan2(190, 570) = **18.4 degrees**.
A big magnitude means a strong edge.

```python
import numpy as np, math
p = np.array([[10,10,10],[10,10,200],[10,10,200]])
kx = np.array([[-1,0,1],[-2,0,2],[-1,0,1]])
gx = (p*kx).sum(); gy = (p*kx.T).sum()
print(gx, gy, round(math.hypot(gx, gy), 1), round(math.degrees(math.atan2(gy, gx)), 1))   # 570 190 600.8 18.4
```

## Canny edge detector (4 stages)
1. **Gaussian smoothing** to reduce noise.
2. **Gradient** magnitude and direction (Sobel).
3. **Non-maximum suppression:** keep only local maxima across the edge to thin it to 1 pixel.
4. **Hysteresis thresholding:** two thresholds (high and low). Pixels above high are edges; pixels between are kept only if connected to a strong edge.

## Laplacian
A second-derivative operator. Edges are at its zero-crossings; very noise-sensitive, so use it after smoothing (Laplacian of Gaussian).

## Hindi saransh
Edge matlab jahan brightness tezi se badle. Sobel x aur y gradient nikalta hai (is example mein 570 aur 190, magnitude 600.8). Canny mein smoothing, gradient, non-max suppression aur hysteresis threshold hote hain.

> Smooth first, then differentiate. Derivatives amplify noise.
@qa
Q: What does the Sobel operator compute?
A: Approximate horizontal and vertical derivatives of the image, which give gradient magnitude and direction.
Q: List the stages of the Canny edge detector.
A: Gaussian smoothing, gradient computation, non-maximum suppression and hysteresis thresholding.
Q: Why does Canny use two thresholds?
A: Strong pixels above the high threshold are surely edges; weaker ones above the low threshold survive only if connected to strong edges, which keeps real edges continuous and rejects noise.
Q: How do you compute edge strength from Gx and Gy?
A: Magnitude = sqrt(Gx^2 + Gy^2).
Q: Why smooth before edge detection?
A: Differentiation amplifies noise, so smoothing avoids false edges.
@quiz
? For the patch in the example, Gx equals
- 190
+ 570
- 600
- 380
! (-10 + 10) + (-20 + 400) + (-10 + 200) = 570.
? The gradient magnitude in the example is about
- 190
- 570
+ 600.8
- 760
! sqrt(570^2 + 190^2) = 600.8.
? Non-maximum suppression makes edges
- thicker
+ thinner
- blurry
- coloured
! It keeps only the strongest pixel across the edge.
? Hysteresis thresholding uses
- one threshold
+ two thresholds
- no thresholds
- three colour channels
! A high and a low threshold.
? Gx of Sobel responds mainly to
+ vertical edges
- horizontal edges
- noise only
- colour
! It measures change along x.
@visual
steps | Canny edge detector | Smooth with a Gaussian; Compute gradient magnitude and direction; Thin the edges with non-maximum suppression; Link edges with hysteresis thresholds
formula | Sobel gradient | magnitude = sqrt(Gx^2 + Gy^2) ; angle = atan2(Gy, Gx)
@problems
## Moderate
P: Write the Sobel Gx and Gy kernels and say which edges each detects.
A: Gx = [[-1,0,1],[-2,0,2],[-1,0,1]] detects vertical edges; Gy = [[-1,-2,-1],[0,0,0],[1,2,1]] detects horizontal edges.
R: 2 | Both kernels correct
R: 1 | Correct edge directions
## High
P: Compute Gx, Gy, magnitude and angle of the Sobel operator on [[10,10,10],[10,10,200],[10,10,200]].
A: Gx = 570, Gy = 190, magnitude = 600.8, angle = atan2(190, 570) = 18.4 degrees.
R: 2 | Gx and Gy
R: 2 | Magnitude 600.8
R: 1 | Angle 18.4
## Advanced
P: Explain each stage of Canny and why the result is better than simply thresholding the Sobel magnitude.
A: Smoothing removes noise. Gradient finds strength and direction. Non-maximum suppression thins ridges to one pixel wide using the gradient direction. Hysteresis keeps weak edges only if connected to strong ones. Plain thresholding gives thick, broken and noisy edges; Canny gives thin, continuous, well-localised edges with fewer false positives.
R: 3 | Four stages explained
R: 3 | Comparison with plain thresholding

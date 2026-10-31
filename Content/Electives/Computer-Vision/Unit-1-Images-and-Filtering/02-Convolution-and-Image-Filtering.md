# Convolution and image filtering
minutes: 25
yt: image convolution filters blur sharpen
yt: gaussian blur and median filter
@study
**Filtering** replaces each pixel by a combination of its neighbours. A small matrix called a **kernel** is slid over the image; at each position we multiply overlapping values and add them up (convolution/correlation).

## Smoothing (noise removal)
- **Box (mean) filter:** the 3x3 kernel with all values 1/9. Output = average of the neighbourhood.
- **Gaussian filter:** weights fall off with distance. Blurs edges less harshly than a box filter.
- **Median filter:** replaces the pixel by the median of the neighbourhood. Excellent against **salt-and-pepper noise** and keeps edges sharp. It is not a linear filter.

## Example (box filter)
Neighbourhood [[1, 2, 3], [4, 5, 6], [7, 8, 9]]: mean = 45/9 = **5**. Median is also 5.
A salt noise pixel: [[10, 10, 10], [10, 255, 10], [10, 10, 10]]: the mean gives (8 x 10 + 255)/9 = 37.2 (smeared), the median gives **10** (removed).

## Sharpening
Add edges back to the image: sharp = original + k (original - blurred). The kernel [[0,-1,0],[-1,5,-1],[0,-1,0]] sharpens.

## Output size
For an N x N image and an F x F kernel with no padding, output size is N - F + 1. With padding P the size is N - F + 2P + 1. "Same" padding uses P = (F - 1)/2 for odd F.

## Properties
Convolution is linear, shift-invariant and separable for Gaussian kernels (one 2D pass = two 1D passes, cost drops from F^2 to 2F per pixel).

```python
import numpy as np
a = np.array([[10, 10, 10], [10, 255, 10], [10, 10, 10]])
print(round(a.mean(), 1), np.median(a))   # 37.2 10.0
```

## Hindi saransh
Kernel ko image par slide karke pixel ko padosiyon ke combination se badalte hain. Box filter average leta hai, median filter salt-and-pepper noise hatata hai aur edges bachata hai. Output size N - F + 1 hota hai.

> Use a median filter for salt-and-pepper noise and a Gaussian filter for general smooth noise.
@qa
Q: What is a kernel in image filtering?
A: A small matrix of weights that is slid over the image to compute each output pixel from its neighbourhood.
Q: Why is the median filter better than the mean filter for salt-and-pepper noise?
A: The mean spreads an extreme value into neighbours, while the median ignores outliers and removes them while preserving edges.
Q: What is the output size for a 7x7 image and a 3x3 kernel with no padding?
A: 7 - 3 + 1 = 5, so 5x5.
Q: What is a separable filter?
A: A 2D kernel that can be written as a product of two 1D kernels, such as the Gaussian. It is faster to apply as two 1D passes.
Q: How does sharpening work?
A: It boosts differences between a pixel and its neighbours, for example by adding a scaled version of the original minus a blurred copy.
@quiz
? The mean of the 3x3 patch [[1,2,3],[4,5,6],[7,8,9]] is
- 4
+ 5
- 6
- 9
! 45 / 9 = 5.
? Which filter best removes salt-and-pepper noise?
- Box filter
- Gaussian filter
+ Median filter
- Sharpening filter
! Median ignores extreme outliers.
? Output size for N = 7, F = 3, no padding
- 7
- 6
+ 5
- 3
! 7 - 3 + 1 = 5.
? A Gaussian kernel is
- not separable
+ separable
- always 1x1
- non-symmetric
! It splits into two 1D Gaussians.
? Which operation is NOT linear?
- Mean filter
- Gaussian filter
+ Median filter
- Sharpening
! The median depends on sorting values.
@visual
steps | Applying a filter | Place the kernel over a pixel; Multiply each overlapping pair; Sum the products; Write the result to the output; Slide to the next pixel
compare | Mean versus median filter | Mean filter=Linear~Blurs edges~Spreads noise; Median filter=Non-linear~Keeps edges~Removes salt-and-pepper noise
@problems
## Moderate
P: A 3x3 mean filter is applied to [[10,10,10],[10,255,10],[10,10,10]]. What is the centre output? And with a median filter?
A: Mean = (8 x 10 + 255)/9 = 37.2. Median = 10.
R: 1 | Mean 37.2
R: 1 | Median 10
## High
P: A 100x100 image is filtered with a 5x5 kernel with no padding. What is the output size and how much padding keeps the size at 100?
A: Output = 100 - 5 + 1 = 96x96. For same size P = (5 - 1)/2 = 2.
R: 2 | 96x96
R: 1 | P = 2
## Advanced
P: Explain why separable filters save computation and compute the multiplications per pixel for a 9x9 Gaussian done directly and in two 1D passes.
A: A separable kernel is the outer product of two 1D vectors, so convolving rows then columns gives the same result. Direct 9x9 needs 81 multiplications per pixel; two 1D passes need 9 + 9 = 18, which is 4.5 times fewer.
R: 2 | Explains separability
R: 2 | 81 versus 18
R: 1 | Speed-up 4.5

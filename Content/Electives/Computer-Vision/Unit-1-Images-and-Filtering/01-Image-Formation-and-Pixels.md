# Image formation and pixels
minutes: 20
yt: how digital images work pixels and color channels
yt: image formation pinhole camera
@study
**Computer vision** is the field that lets computers understand images and video: detect objects, read text, track motion, measure the world.

## What is a digital image?
A grayscale image is a 2D grid of numbers called **pixels**. For 8-bit images each pixel is 0 (black) to 255 (white). A colour image has three channels, **R, G, B**, so a 1920x1080 colour image holds 1920 x 1080 x 3 = 6,220,800 numbers (about 6.2 MB uncompressed).

## Resolution and bit depth
Resolution = width x height. Bit depth = bits per value (8 bits give 256 levels). More bits give smoother gradations; more pixels give more detail.

## Colour to grayscale
Gray = 0.299 R + 0.587 G + 0.114 B. Green gets the largest weight because the eye is most sensitive to it. Other colour spaces: **HSV** (hue, saturation, value; easy for colour thresholding) and **YCbCr**.

## Image formation: the pinhole camera
Light from a scene passes through a small hole and forms an inverted image. With focal length f, a point at (X, Y, Z) projects to **x = f X / Z, y = f Y / Z**. Farther objects (bigger Z) look smaller. Real cameras use lenses to collect more light.

## Sampling and quantisation
Digitising an image samples it into pixels (spatial sampling) and rounds brightness to levels (quantisation). Too few samples cause **aliasing** (jagged edges, moire).

## Histogram
A histogram counts pixels per intensity. A narrow histogram means low contrast. **Histogram equalisation** spreads it out to increase contrast.

```python
import numpy as np
img = np.array([[0, 50], [200, 255]], dtype=np.uint8)
print(img.shape, img.mean(), 1920 * 1080 * 3)   # (2, 2) 126.25 6220800
```

## Hindi saransh
Image pixels ka grid hai; 8-bit mein 0 se 255 values hoti hain. Colour image mein R, G, B teen channels hote hain. Gray = 0.299R + 0.587G + 0.114B. Pinhole camera mein x = fX/Z, isliye door ki cheez chhoti dikhti hai.

> Z is in the denominator: double the distance and the object appears half the size.
@qa
Q: How many numbers are stored in a 1920x1080 RGB image?
A: 1920 x 1080 x 3 = 6,220,800 values.
Q: Why does the grayscale formula weight green most?
A: Human vision is most sensitive to green light, so green contributes most to perceived brightness.
Q: What is the pinhole projection formula?
A: x = f X / Z and y = f Y / Z, where f is the focal length and Z is the depth of the point.
Q: What is aliasing?
A: Distortion caused by sampling too coarsely, so fine detail appears as false patterns or jagged edges.
Q: What does histogram equalisation do?
A: It redistributes pixel intensities to use the full range, improving contrast.
@quiz
? An 8-bit grayscale pixel can take how many values?
- 8
- 128
+ 256
- 65536
! 2^8 = 256.
? In the pinhole model, if the distance Z doubles the image size becomes
- doubled
+ halved
- unchanged
- four times
! x = f X / Z is inversely proportional to Z.
? Which channel has the largest weight in grayscale conversion?
- red
+ green
- blue
- alpha
! 0.587 for green.
? A low-contrast image has a histogram that is
- spread over the full range
+ concentrated in a narrow range
- empty
- flat
! Pixel values sit close together.
? HSV colour space is useful for
- compression only
+ colour-based thresholding
- sound
- depth
! Hue separates colour from brightness.
@visual
formula | Pinhole projection | x = f X / Z ; y = f Y / Z
steps | From scene to numbers | Light reflects from objects; Lens focuses it on the sensor; Sensor samples it into pixels; Each pixel is quantised to a number; The image is stored as an array
bars | Grayscale weights | Red=0.299;Green=0.587;Blue=0.114
@problems
## Moderate
P: How many bytes does a 640x480 8-bit RGB image take uncompressed?
A: 640 x 480 x 3 = 921,600 bytes (about 0.9 MB).
R: 1 | Multiplies width, height, channels
R: 1 | 921,600
## High
P: Convert the pixel (R, G, B) = (100, 150, 200) to grayscale.
A: 0.299(100) + 0.587(150) + 0.114(200) = 29.9 + 88.05 + 22.8 = 140.75, about 141.
R: 2 | Uses the weights
R: 1 | About 141
## Advanced
P: A pole 2 m tall is 10 m away. A camera has focal length 0.05 m. How tall is its image on the sensor? What if it is 20 m away?
A: y = f Y / Z = 0.05 x 2 / 10 = 0.01 m (10 mm). At 20 m: 0.05 x 2 / 20 = 0.005 m (5 mm). Doubling the distance halves the image height.
R: 2 | Uses y = fY/Z for 10 m: 10 mm
R: 2 | 5 mm at 20 m
R: 1 | Notes the halving

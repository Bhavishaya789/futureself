# CNNs for recognition and object detection
minutes: 25
yt: object detection YOLO explained
yt: IoU intersection over union and mAP
@study
**Image classification** gives one label per image. **Object detection** gives a **bounding box** and class for every object. **Segmentation** labels every pixel (semantic: class; instance: each object).

## Evolution
Classical methods used hand-made features (HOG + SVM). Since AlexNet (2012), **CNNs** learn features automatically. ResNet added skip connections.

## Detectors
- **Two-stage (R-CNN family, Faster R-CNN):** first propose regions, then classify and refine them. Accurate.
- **One-stage (YOLO, SSD):** predict boxes and classes directly in one pass over the image. Fast, suitable for real-time and mobile use.

## IoU (Intersection over Union)
IoU = area of overlap / area of union. A prediction is usually counted correct if IoU >= 0.5.
Example: box A = (0,0) to (4,4) (area 16), box B = (2,2) to (6,6) (area 16). Overlap = 2 x 2 = 4. Union = 16 + 16 - 4 = 28. **IoU = 4/28 = 0.143**.

## Non-maximum suppression (NMS)
Many boxes cover the same object. Keep the one with the highest confidence and delete other boxes whose IoU with it exceeds a threshold (for example 0.5).

## Metrics
**Precision** and **recall** at various confidence thresholds give a precision-recall curve; the area under it is the **average precision (AP)**; **mAP** averages AP over classes.

```python
def iou(a, b):
    x1, y1 = max(a[0], b[0]), max(a[1], b[1]); x2, y2 = min(a[2], b[2]), min(a[3], b[3])
    inter = max(0, x2 - x1) * max(0, y2 - y1)
    area = lambda r: (r[2] - r[0]) * (r[3] - r[1])
    return inter / (area(a) + area(b) - inter)
print(round(iou((0, 0, 4, 4), (2, 2, 6, 6)), 3))   # 0.143
```

## Segmentation models
U-Net (medical images), Mask R-CNN (instance masks), and modern **vision transformers** (ViT) that split the image into patches.

## Hindi saransh
Classification mein ek label, detection mein box + class, segmentation mein har pixel ka label. YOLO tez one-stage detector hai. IoU = overlap/union (example 0.143). NMS duplicate boxes hatata hai. mAP detector ka score hai.

> A box with IoU 0.5 or more with the ground truth is normally called a correct detection.
@qa
Q: What is the difference between classification, detection and segmentation?
A: Classification assigns one label to the image, detection finds objects with boxes and classes, and segmentation labels every pixel.
Q: What is IoU?
A: Intersection over Union: the overlap area of predicted and true boxes divided by the area of their union.
Q: Why is YOLO faster than Faster R-CNN?
A: YOLO predicts boxes and classes in a single pass without a separate region-proposal stage.
Q: What does non-maximum suppression do?
A: It removes duplicate overlapping boxes, keeping the highest-confidence box for each object.
Q: What does mAP mean?
A: Mean average precision: the area under the precision-recall curve averaged over all classes.
@quiz
? The IoU of the two 4x4 boxes overlapping in a 2x2 area is
- 0.25
- 0.5
+ 0.143
- 1
! 4 / (16 + 16 - 4) = 0.143.
? YOLO is a
- two-stage detector
+ one-stage detector
- classical hand-feature method
- segmentation only
! It detects in a single pass.
? Which task labels every pixel?
- Classification
- Detection
+ Segmentation
- Tracking
! Segmentation produces a per-pixel label map.
? NMS removes
- low-resolution images
+ duplicate boxes for the same object
- all boxes
- the background
! It keeps the best box among overlapping ones.
? U-Net is mostly used for
- text translation
- audio
+ medical image segmentation
- compression
! It has an encoder-decoder with skip connections.
@visual
steps | One-stage detector | Resize the image; Run the CNN once; Predict boxes, scores and classes; Apply NMS; Output the final detections
blocks | IoU example (areas in square units) | Box A:16;Box B:16;Overlap:4;Union:28
@problems
## Moderate
P: Compute the IoU of boxes (0,0,2,2) and (1,1,3,3).
A: Overlap = 1 x 1 = 1. Each box has area 4. Union = 4 + 4 - 1 = 7. IoU = 1/7 = 0.143.
R: 1 | Overlap and union
R: 1 | 0.143
## High
P: Explain how non-maximum suppression works with an example of three boxes with scores 0.9, 0.8, 0.3 where the first two overlap with IoU 0.7 and the third is far away.
A: Sort by score. Keep the 0.9 box. The 0.8 box has IoU 0.7 with it, above the threshold 0.5, so it is removed. The 0.3 box does not overlap, so it is kept (or later dropped by a score threshold). Result: boxes 0.9 and 0.3.
R: 2 | Sort and keep the best
R: 2 | Remove the overlapping 0.8 box
R: 1 | Keep the distant box
## Advanced
P: Compare Faster R-CNN and YOLO for a self-driving car and for a phone app.
A: Faster R-CNN has a proposal stage, so it is usually more accurate on small objects but slower. YOLO is a single pass and runs in real time on limited hardware. A self-driving car needs both accuracy and low latency, so a fast modern one-stage detector on a strong GPU is common; a phone app prefers a small YOLO or SSD variant for speed and low power.
R: 2 | Accuracy versus speed
R: 2 | Choice for the car with reason
R: 2 | Choice for the phone with reason

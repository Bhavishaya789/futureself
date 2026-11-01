# Computer Vision
minutes: 35
yt: class 10 ai and it computer vision
@study
Computer Vision (CV) lets machines see and understand images and videos. An image is a grid of pixels; a grayscale pixel has a value 0 to 255, while an RGB image has three channels (red, green, blue). Main tasks are classification, classification with localisation, object detection and instance segmentation. Image processing steps are resizing, smoothing and feature extraction. Convolutional Neural Networks (CNNs) use convolution (kernel), ReLU activation, pooling and a fully connected layer. Applications include face lock, self-driving cars, medical imaging and retail.
## Deep dive: digital images
An image is a grid of pixels. Grayscale uses 8 bits: 0 black to 255 white, 256 shades. An RGB image has three channels, so its size is rows × columns × 3 values.
## Deep dive: CV tasks
Classification labels the whole image; localisation adds a bounding box; object detection finds many objects; instance segmentation labels each pixel and separates objects.
## Deep dive: CNN
A kernel slides across the image (convolution) to build a feature map; ReLU removes negatives; pooling shrinks the map; the fully connected layer outputs the class. Stride and padding control output size.
## Deep dive: uses and risks
Applications: self-driving cars, medical imaging, retail, agriculture, security. Risks: privacy, bias in face recognition and deepfakes.
## Hindi saransh
कंप्यूटर विज़न से मशीन चित्रों को समझती है। चित्र पिक्सेल का ग्रिड है। CNN में कन्वोल्यूशन, ReLU, पूलिंग और फुली कनेक्टेड लेयर होती हैं।
> Pixel: 0 = black, 255 = white (8-bit). Image size = rows × columns × channels.
@formulas
## Key points
Grayscale range | 0 to 255 | 
RGB channels | 3 | 
CNN layers | convolution, ReLU, pooling, fully connected | 

@qa
Q: What is meant by Computer vision?
A: Machine sight.
Q: What is meant by Pixel?
A: Picture element.
Q: What is meant by Resolution?
A: Number of pixels.
Q: What is meant by Grayscale?
A: Shades of gray.
Q: What is meant by RGB?
A: Red green blue colour model.
Q: What is meant by Channel?
A: One colour layer.
Q: What is meant by Binary image?
A: Black and white only.
Q: What is meant by Bit depth?
A: Bits per pixel.
Q: What is meant by Image classification?
A: Label for whole image.
Q: What is meant by Localisation?
A: Finding object position.
Q: What is meant by Object detection?
A: Finding multiple objects.
Q: What is meant by Instance segmentation?
A: Pixel-level object separation.
Q: What is meant by Bounding box?
A: Rectangle around object.
Q: What is meant by Feature?
A: Meaningful image part.
Q: What is meant by Edge?
A: Sudden intensity change.
Q: What is meant by Corner?
A: Meeting of two edges.
Q: What is meant by Kernel?
A: Small scanning matrix.
Q: What is meant by Convolution?
A: Kernel sliding operation.
Q: What is meant by Feature map?
A: Convolution output.
Q: What is meant by ReLU?
A: Activation turning negatives to zero.
Q: What is meant by Pooling?
A: downsampling.
Q: What is meant by Max pooling?
A: Taking maximum of region.
Q: What is meant by Padding?
A: Border pixels.
Q: What is meant by Stride?
A: Step size of the kernel.
Q: What is meant by CNN?
A: Convolutional neural network.
Q: What is meant by Fully connected layer?
A: Final decision layer.
Q: What is meant by OpenCV?
A: Vision library.
Q: What is meant by Face recognition?
A: Identifying faces.
Q: What is meant by OCR?
A: Text recognition from images.
Q: What is meant by Image processing?
A: Modifying images.
Q: What is meant by Smoothing?
A: Noise reduction.
Q: What is meant by Resizing?
A: Changing image size.
Q: What is meant by Thresholding?
A: Converting to binary.
Q: What is meant by Annotation?
A: Labelling images.
Q: What is meant by Dataset?
A: Collection of images.
Q: What is meant by Overfitting?
A: Memorising training data.
Q: What is meant by Augmentation?
A: Creating image variants.
Q: What is meant by Surveillance?
A: Monitoring people.
Q: What is meant by Deepfake?
A: AI-generated fake media.
Q: What is meant by Autonomous vehicle?
A: Self-driving car.
Q: What is meant by Medical imaging?
A: Scans for diagnosis.
Q: Which term matches this description: Machine sight?
A: Computer vision.
Q: Which term matches this description: Picture element?
A: Pixel.
Q: Which term matches this description: Number of pixels?
A: Resolution.
Q: Which term matches this description: Shades of gray?
A: Grayscale.
Q: Which term matches this description: Red green blue colour model?
A: RGB.
Q: Which term matches this description: One colour layer?
A: Channel.
Q: Which term matches this description: Black and white only?
A: Binary image.
Q: Which term matches this description: Bits per pixel?
A: Bit depth.
Q: Which term matches this description: Label for whole image?
A: Image classification.
Q: Which term matches this description: Finding object position?
A: Localisation.
Q: Which term matches this description: Finding multiple objects?
A: Object detection.
Q: Which term matches this description: Pixel-level object separation?
A: Instance segmentation.
Q: Which term matches this description: Rectangle around object?
A: Bounding box.
Q: Which term matches this description: Meaningful image part?
A: Feature.
Q: Which term matches this description: Sudden intensity change?
A: Edge.
Q: Which term matches this description: Meeting of two edges?
A: Corner.
Q: Which term matches this description: Small scanning matrix?
A: Kernel.
Q: Which term matches this description: Kernel sliding operation?
A: Convolution.
Q: Which term matches this description: Convolution output?
A: Feature map.
Q: Which term matches this description: Activation turning negatives to zero?
A: ReLU.
Q: Which term matches this description: downsampling?
A: Pooling.
Q: Which term matches this description: Taking maximum of region?
A: Max pooling.
Q: Which term matches this description: Border pixels?
A: Padding.
Q: Which term matches this description: Step size of the kernel?
A: Stride.
Q: Which term matches this description: Convolutional neural network?
A: CNN.
Q: Which term matches this description: Final decision layer?
A: Fully connected layer.
Q: Which term matches this description: Vision library?
A: OpenCV.
Q: Which term matches this description: Identifying faces?
A: Face recognition.
Q: Which term matches this description: Text recognition from images?
A: OCR.
Q: Which term matches this description: Modifying images?
A: Image processing.
Q: Which term matches this description: Noise reduction?
A: Smoothing.
Q: Which term matches this description: Changing image size?
A: Resizing.
Q: Which term matches this description: Converting to binary?
A: Thresholding.
Q: Which term matches this description: Labelling images?
A: Annotation.
Q: Which term matches this description: Collection of images?
A: Dataset.
Q: Which term matches this description: Memorising training data?
A: Overfitting.
Q: Which term matches this description: Creating image variants?
A: Augmentation.
Q: Which term matches this description: Monitoring people?
A: Surveillance.
Q: Which term matches this description: AI-generated fake media?
A: Deepfake.
Q: Which term matches this description: Self-driving car?
A: Autonomous vehicle.
Q: Which term matches this description: Scans for diagnosis?
A: Medical imaging.
Q: What is computer vision?
A: The AI domain that enables machines to understand images and videos.
Q: What is a pixel?
A: The smallest element of a digital image.
Q: What is image resolution?
A: The number of pixels in an image.
Q: What is the range of an 8-bit grayscale pixel?
A: 0 to 255.
Q: What does 0 represent in grayscale?
A: Black.
Q: What does 255 represent in grayscale?
A: White.
Q: How many channels does an RGB image have?
A: Three.
Q: What do R, G and B stand for?
A: Red, green and blue.
Q: What is a binary image?
A: An image with only black and white pixels.
Q: What is a bit depth of 8?
A: Each pixel is stored in 8 bits, giving 256 levels.
Q: How many shades does an 8-bit pixel have?
A: 256.
Q: What is image classification?
A: Assigning a label to an entire image.
Q: What is classification with localisation?
A: Labelling an image and locating the object with a box.
Q: What is object detection?
A: Finding and labelling multiple objects in an image.
Q: What is instance segmentation?
A: Labelling each pixel and separating individual objects.
Q: What is a bounding box?
A: A rectangle drawn around a detected object.
Q: What is a feature in an image?
A: A meaningful part such as an edge, corner or texture.
Q: What is an edge?
A: A sharp change in pixel intensity.
Q: What is a kernel?
A: A small matrix used to scan an image in convolution.
Q: What is convolution?
A: Sliding a kernel over an image to extract features.
Q: What is a feature map?
A: The output produced after applying a kernel.
Q: What is ReLU?
A: An activation function that turns negative values to zero.
Q: What is pooling?
A: Reducing the size of a feature map while keeping key information.
Q: Name a type of pooling.
A: Max pooling.
Q: What is max pooling?
A: Taking the maximum value in each region.
Q: What is a CNN?
A: A Convolutional Neural Network used for images.
Q: What is the fully connected layer?
A: The layer that produces the final classification.
Q: What is padding?
A: Adding border pixels so the output keeps its size.
Q: What is stride?
A: The number of pixels the kernel moves each step.
Q: What is OpenCV?
A: A library for computer vision tasks.
Q: What is face recognition?
A: Identifying a person from facial features.
Q: What is optical character recognition?
A: Converting images of text into editable text.
Q: Give an application of CV in cars.
A: Self-driving vehicles detecting lanes and signs.
Q: Give an application of CV in medicine.
A: Detecting disease in X-rays and scans.
Q: Give an application of CV in retail.
A: Automatic billing and inventory tracking.
Q: Give an application of CV in agriculture.
A: Detecting crop diseases from leaf images.
Q: What is image resizing?
A: Changing the dimensions of an image.
Q: What is smoothing?
A: Reducing noise in an image.
Q: What is the challenge of lighting in CV?
A: Changes in light alter pixel values and may cause errors.
Q: What is a privacy issue in CV?
A: Misuse of facial data and surveillance.
@quiz
? What is meant by Computer vision?
- Border pixels
- Identifying faces
+ Machine sight
- Text recognition from images
! From the CBSE Class 9 syllabus.
? What is meant by Pixel?
- Converting to binary
- Convolution output
- Pixel-level object separation
+ Picture element
! From the CBSE Class 9 syllabus.
? What is meant by Resolution?
+ Number of pixels
- Step size of the kernel
- Final decision layer
- Identifying faces
! From the CBSE Class 9 syllabus.
? What is meant by Grayscale?
- Labelling images
- Converting to binary
- Black and white only
+ Shades of gray
! From the CBSE Class 9 syllabus.
? What is meant by RGB?
+ Red green blue colour model
- Meaningful image part
- Step size of the kernel
- Taking maximum of region
! From the CBSE Class 9 syllabus.
? What is meant by Channel?
- Sudden intensity change
- Scans for diagnosis
- Finding multiple objects
+ One colour layer
! From the CBSE Class 9 syllabus.
? What is meant by Binary image?
- Scans for diagnosis
- Monitoring people
+ Black and white only
- Changing image size
! From the CBSE Class 9 syllabus.
? What is meant by Bit depth?
- Modifying images
+ Bits per pixel
- Convolutional neural network
- Rectangle around object
! From the CBSE Class 9 syllabus.
? What is meant by Image classification?
- Final decision layer
- Machine sight
+ Label for whole image
- Taking maximum of region
! From the CBSE Class 9 syllabus.
? What is meant by Localisation?
+ Finding object position
- Bits per pixel
- One colour layer
- Small scanning matrix
! From the CBSE Class 9 syllabus.
? What is meant by Object detection?
- Kernel sliding operation
- downsampling
+ Finding multiple objects
- Rectangle around object
! From the CBSE Class 9 syllabus.
? What is meant by Instance segmentation?
+ Pixel-level object separation
- Changing image size
- Convolution output
- Memorising training data
! From the CBSE Class 9 syllabus.
? What is meant by Bounding box?
- Label for whole image
+ Rectangle around object
- Self-driving car
- Picture element
! From the CBSE Class 9 syllabus.
? What is meant by Feature?
- Rectangle around object
+ Meaningful image part
- Shades of gray
- Border pixels
! From the CBSE Class 9 syllabus.
? What is meant by Edge?
+ Sudden intensity change
- Picture element
- Vision library
- Identifying faces
! From the CBSE Class 9 syllabus.
? What is meant by Corner?
- Final decision layer
+ Meeting of two edges
- Taking maximum of region
- Labelling images
! From the CBSE Class 9 syllabus.
? What is meant by Kernel?
- Creating image variants
- AI-generated fake media
- Pixel-level object separation
+ Small scanning matrix
! From the CBSE Class 9 syllabus.
? What is meant by Convolution?
- Activation turning negatives to zero
+ Kernel sliding operation
- Final decision layer
- Monitoring people
! From the CBSE Class 9 syllabus.
? What is meant by Feature map?
- Number of pixels
- Shades of gray
+ Convolution output
- Creating image variants
! From the CBSE Class 9 syllabus.
? What is meant by ReLU?
- Step size of the kernel
+ Activation turning negatives to zero
- Convolution output
- downsampling
! From the CBSE Class 9 syllabus.
? What is meant by Pooling?
- Activation turning negatives to zero
+ downsampling
- Rectangle around object
- Black and white only
! From the CBSE Class 9 syllabus.
? What is meant by Max pooling?
+ Taking maximum of region
- Convolutional neural network
- Collection of images
- Kernel sliding operation
! From the CBSE Class 9 syllabus.
? What is meant by Padding?
- Convolution output
- Meaningful image part
+ Border pixels
- Meeting of two edges
! From the CBSE Class 9 syllabus.
? What is meant by Stride?
+ Step size of the kernel
- Rectangle around object
- Finding multiple objects
- Label for whole image
! From the CBSE Class 9 syllabus.
? What is meant by CNN?
- Finding object position
+ Convolutional neural network
- Red green blue colour model
- Taking maximum of region
! From the CBSE Class 9 syllabus.
? What is meant by Fully connected layer?
- Taking maximum of region
- Red green blue colour model
- Label for whole image
+ Final decision layer
! From the CBSE Class 9 syllabus.
? What is meant by OpenCV?
- Small scanning matrix
- Meaningful image part
- Scans for diagnosis
+ Vision library
! From the CBSE Class 9 syllabus.
? What is meant by Face recognition?
- Self-driving car
- Border pixels
+ Identifying faces
- Meaningful image part
! From the CBSE Class 9 syllabus.
? What is meant by OCR?
+ Text recognition from images
- Labelling images
- Convolution output
- Memorising training data
! From the CBSE Class 9 syllabus.
? What is meant by Image processing?
+ Modifying images
- Pixel-level object separation
- Red green blue colour model
- Changing image size
! From the CBSE Class 9 syllabus.
? What is meant by Smoothing?
+ Noise reduction
- Converting to binary
- Labelling images
- Finding multiple objects
! From the CBSE Class 9 syllabus.
? What is meant by Resizing?
- Final decision layer
- Creating image variants
+ Changing image size
- Black and white only
! From the CBSE Class 9 syllabus.
? What is meant by Thresholding?
- One colour layer
- Modifying images
- AI-generated fake media
+ Converting to binary
! From the CBSE Class 9 syllabus.
? What is meant by Annotation?
- Monitoring people
- Taking maximum of region
+ Labelling images
- Finding object position
! From the CBSE Class 9 syllabus.
? What is meant by Dataset?
- Labelling images
+ Collection of images
- Scans for diagnosis
- Convolution output
! From the CBSE Class 9 syllabus.
? What is meant by Overfitting?
+ Memorising training data
- Changing image size
- Machine sight
- Activation turning negatives to zero
! From the CBSE Class 9 syllabus.
? What is meant by Augmentation?
- Labelling images
+ Creating image variants
- Memorising training data
- Picture element
! From the CBSE Class 9 syllabus.
? What is meant by Surveillance?
+ Monitoring people
- Meeting of two edges
- Finding multiple objects
- Creating image variants
! From the CBSE Class 9 syllabus.
? What is meant by Deepfake?
- Sudden intensity change
- Finding multiple objects
+ AI-generated fake media
- Step size of the kernel
! From the CBSE Class 9 syllabus.
? What is meant by Autonomous vehicle?
+ Self-driving car
- Kernel sliding operation
- Number of pixels
- Labelling images
! From the CBSE Class 9 syllabus.
? What is meant by Medical imaging?
- Activation turning negatives to zero
- AI-generated fake media
+ Scans for diagnosis
- Memorising training data
! From the CBSE Class 9 syllabus.
? Which term matches this description: Machine sight?
- Padding
+ Computer vision
- Instance segmentation
- CNN
! From the CBSE Class 9 syllabus.
? Which term matches this description: Picture element?
+ Pixel
- RGB
- Face recognition
- Image classification
! From the CBSE Class 9 syllabus.
? Which term matches this description: Number of pixels?
- Augmentation
+ Resolution
- Channel
- Binary image
! From the CBSE Class 9 syllabus.
? Which term matches this description: Shades of gray?
- Edge
- Thresholding
+ Grayscale
- Instance segmentation
! From the CBSE Class 9 syllabus.
? Which term matches this description: Red green blue colour model?
- Augmentation
- Resolution
- Localisation
+ RGB
! From the CBSE Class 9 syllabus.
? Which term matches this description: One colour layer?
- Bounding box
- Pixel
+ Channel
- Face recognition
! From the CBSE Class 9 syllabus.
? Which term matches this description: Black and white only?
+ Binary image
- Max pooling
- Edge
- Pixel
! From the CBSE Class 9 syllabus.
? Which term matches this description: Bits per pixel?
- OCR
+ Bit depth
- Grayscale
- Resizing
! From the CBSE Class 9 syllabus.
? Which term matches this description: Label for whole image?
- Fully connected layer
+ Image classification
- Dataset
- Smoothing
! From the CBSE Class 9 syllabus.
? Which term matches this description: Finding object position?
- Thresholding
+ Localisation
- Resizing
- OCR
! From the CBSE Class 9 syllabus.
? Which term matches this description: Finding multiple objects?
+ Object detection
- Fully connected layer
- Face recognition
- Grayscale
! From the CBSE Class 9 syllabus.
? Which term matches this description: Pixel-level object separation?
- Feature
+ Instance segmentation
- Convolution
- RGB
! From the CBSE Class 9 syllabus.
? Which term matches this description: Rectangle around object?
- Localisation
- Image processing
- Edge
+ Bounding box
! From the CBSE Class 9 syllabus.
? Which term matches this description: Meaningful image part?
+ Feature
- Smoothing
- Grayscale
- Image classification
! From the CBSE Class 9 syllabus.
? Which term matches this description: Sudden intensity change?
- Pixel
+ Edge
- Smoothing
- Annotation
! From the CBSE Class 9 syllabus.
? Which term matches this description: Meeting of two edges?
- Localisation
+ Corner
- Pooling
- Feature map
! From the CBSE Class 9 syllabus.
? Which term matches this description: Small scanning matrix?
- Corner
- Grayscale
+ Kernel
- Image classification
! From the CBSE Class 9 syllabus.
? Which term matches this description: Kernel sliding operation?
- Pooling
+ Convolution
- Pixel
- Computer vision
! From the CBSE Class 9 syllabus.
? Which term matches this description: Convolution output?
- Computer vision
- Dataset
+ Feature map
- Bit depth
! From the CBSE Class 9 syllabus.
? Which term matches this description: Activation turning negatives to zero?
- Image processing
+ ReLU
- Pixel
- Pooling
! From the CBSE Class 9 syllabus.
? Which term matches this description: downsampling?
- Fully connected layer
+ Pooling
- Instance segmentation
- Bit depth
! From the CBSE Class 9 syllabus.
? Which term matches this description: Taking maximum of region?
- Bit depth
- Augmentation
+ Max pooling
- Channel
! From the CBSE Class 9 syllabus.
? Which term matches this description: Border pixels?
+ Padding
- Max pooling
- Corner
- RGB
! From the CBSE Class 9 syllabus.
? Which term matches this description: Step size of the kernel?
- Padding
+ Stride
- CNN
- Localisation
! From the CBSE Class 9 syllabus.
? Which term matches this description: Convolutional neural network?
+ CNN
- Feature map
- Smoothing
- Autonomous vehicle
! From the CBSE Class 9 syllabus.
? Which term matches this description: Final decision layer?
- Dataset
- Feature map
- Object detection
+ Fully connected layer
! From the CBSE Class 9 syllabus.
? Which term matches this description: Vision library?
- Grayscale
- Bit depth
- Fully connected layer
+ OpenCV
! From the CBSE Class 9 syllabus.
? Which term matches this description: Identifying faces?
- Resolution
+ Face recognition
- Resizing
- Feature map
! From the CBSE Class 9 syllabus.
? Which term matches this description: Text recognition from images?
- Deepfake
+ OCR
- Edge
- OpenCV
! From the CBSE Class 9 syllabus.
? Which term matches this description: Modifying images?
+ Image processing
- Deepfake
- Pixel
- Max pooling
! From the CBSE Class 9 syllabus.
? Which term matches this description: Noise reduction?
- Pixel
+ Smoothing
- Bit depth
- Resolution
! From the CBSE Class 9 syllabus.
? Which term matches this description: Changing image size?
- Binary image
+ Resizing
- Grayscale
- Localisation
! From the CBSE Class 9 syllabus.
? Which term matches this description: Converting to binary?
- CNN
+ Thresholding
- Feature
- Corner
! From the CBSE Class 9 syllabus.
? Which term matches this description: Labelling images?
- Surveillance
- Instance segmentation
+ Annotation
- Object detection
! From the CBSE Class 9 syllabus.
? Which term matches this description: Collection of images?
+ Dataset
- OCR
- Bounding box
- Computer vision
! From the CBSE Class 9 syllabus.
? Which term matches this description: Memorising training data?
+ Overfitting
- Padding
- Max pooling
- Resizing
! From the CBSE Class 9 syllabus.
? Which term matches this description: Creating image variants?
- Kernel
- Bounding box
+ Augmentation
- Thresholding
! From the CBSE Class 9 syllabus.
? Which term matches this description: Monitoring people?
- Grayscale
+ Surveillance
- Edge
- Image processing
! From the CBSE Class 9 syllabus.
? Which term matches this description: AI-generated fake media?
- OCR
+ Deepfake
- Instance segmentation
- CNN
! From the CBSE Class 9 syllabus.
? Which term matches this description: Self-driving car?
- Medical imaging
- Feature map
- Stride
+ Autonomous vehicle
! From the CBSE Class 9 syllabus.
? Which term matches this description: Scans for diagnosis?
- Dataset
+ Medical imaging
- ReLU
- Stride
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Computer vision".
- Scans for diagnosis
- downsampling
+ Machine sight
- Rectangle around object
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pixel".
- Small scanning matrix
- Sudden intensity change
- Text recognition from images
+ Picture element
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Resolution".
- Kernel sliding operation
+ Number of pixels
- Identifying faces
- Labelling images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Grayscale".
- Pixel-level object separation
- Activation turning negatives to zero
+ Shades of gray
- Converting to binary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "RGB".
- Creating image variants
- Picture element
+ Red green blue colour model
- Convolution output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Channel".
+ One colour layer
- Changing image size
- Meaningful image part
- Red green blue colour model
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Binary image".
- Machine sight
+ Black and white only
- Step size of the kernel
- Meaningful image part
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Bit depth".
- Red green blue colour model
+ Bits per pixel
- Noise reduction
- Monitoring people
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Image classification".
- Finding multiple objects
- Picture element
- Memorising training data
+ Label for whole image
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Localisation".
- Converting to binary
+ Finding object position
- Black and white only
- Taking maximum of region
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Object detection".
+ Finding multiple objects
- Picture element
- Taking maximum of region
- Shades of gray
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Instance segmentation".
+ Pixel-level object separation
- Creating image variants
- Convolutional neural network
- AI-generated fake media
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Bounding box".
- Converting to binary
+ Rectangle around object
- Scans for diagnosis
- Meeting of two edges
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Feature".
+ Meaningful image part
- Kernel sliding operation
- Identifying faces
- Collection of images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Edge".
- Rectangle around object
- Collection of images
+ Sudden intensity change
- Self-driving car
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Corner".
- Border pixels
- Final decision layer
- Pixel-level object separation
+ Meeting of two edges
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Kernel".
- Step size of the kernel
+ Small scanning matrix
- One colour layer
- Finding multiple objects
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Convolution".
+ Kernel sliding operation
- Changing image size
- Memorising training data
- Step size of the kernel
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Feature map".
- Finding multiple objects
- Meeting of two edges
+ Convolution output
- Step size of the kernel
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ReLU".
- Finding multiple objects
- Convolution output
- Black and white only
+ Activation turning negatives to zero
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pooling".
- Converting to binary
- Kernel sliding operation
- Text recognition from images
+ downsampling
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Max pooling".
+ Taking maximum of region
- Rectangle around object
- Convolution output
- Step size of the kernel
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Padding".
- Finding multiple objects
+ Border pixels
- Black and white only
- Machine sight
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Stride".
- Scans for diagnosis
- Pixel-level object separation
+ Step size of the kernel
- Creating image variants
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "CNN".
- Number of pixels
+ Convolutional neural network
- Red green blue colour model
- Monitoring people
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Fully connected layer".
- Noise reduction
- Convolution output
+ Final decision layer
- Labelling images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "OpenCV".
- Sudden intensity change
- Rectangle around object
+ Vision library
- Converting to binary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Face recognition".
- Rectangle around object
- downsampling
- Black and white only
+ Identifying faces
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "OCR".
- Black and white only
+ Text recognition from images
- Convolution output
- Taking maximum of region
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Image processing".
- downsampling
- Creating image variants
- Step size of the kernel
+ Modifying images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Smoothing".
- Scans for diagnosis
- Changing image size
+ Noise reduction
- Machine sight
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Resizing".
+ Changing image size
- Bits per pixel
- Red green blue colour model
- Labelling images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Thresholding".
- Finding multiple objects
- downsampling
- Kernel sliding operation
+ Converting to binary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Annotation".
- Pixel-level object separation
- Finding object position
+ Labelling images
- Black and white only
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Dataset".
- Converting to binary
+ Collection of images
- Changing image size
- Noise reduction
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Overfitting".
- Changing image size
- Taking maximum of region
- Picture element
+ Memorising training data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Augmentation".
- Meaningful image part
- Machine sight
+ Creating image variants
- Converting to binary
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Surveillance".
+ Monitoring people
- downsampling
- Picture element
- Bits per pixel
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Deepfake".
- Collection of images
- Shades of gray
- Identifying faces
+ AI-generated fake media
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Autonomous vehicle".
- Monitoring people
- Vision library
- Pixel-level object separation
+ Self-driving car
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Medical imaging".
- Self-driving car
- Finding multiple objects
- Finding object position
+ Scans for diagnosis
! From the CBSE Class 9 syllabus.
@visual
flow | CNN | Input image; Convolution; ReLU; Pooling; Fully connected; Output
mind | CV tasks | Tasks: Classification, Localisation, Detection, Segmentation
@problems
P: What is a pixel?
A: The smallest unit of a digital image.
R: 1 | Key idea
R: 1 | Example

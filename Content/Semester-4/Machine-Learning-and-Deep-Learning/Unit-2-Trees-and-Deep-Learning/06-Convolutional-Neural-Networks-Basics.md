# Convolutional neural networks (CNN) basics
minutes: 30
yt: convolutional neural network explained
yt: CNN output size formula padding stride
@study
Images have too many pixels for a fully connected layer (a 224x224 colour image has 150,528 inputs). A **CNN** uses small shared filters that slide over the image, exploiting that nearby pixels are related.

## Convolution layer
A **kernel** (for example 3x3) slides across the input; at each position it multiplies and sums to produce one output value. The same weights are reused everywhere (**weight sharing**), so there are few parameters and the layer detects a pattern wherever it occurs (translation equivariance). Early layers learn edges, deeper layers learn shapes and objects.

### Output size
Output = floor( (N - F + 2P) / S ) + 1, where N is input size, F kernel size, P padding, S stride.
- N = 32, F = 5, P = 0, S = 1: (32 - 5)/1 + 1 = **28**.
- N = 224, F = 7, P = 3, S = 2: floor((224 - 7 + 6)/2) + 1 = floor(111.5) + 1 = **112**.

### Parameters
Parameters = (F x F x C_in + 1) x C_out. A 5x5 kernel on 3 channels with 6 filters: (5 x 5 x 3 + 1) x 6 = **456**.

## Pooling
**Max pooling** (2x2, stride 2) keeps the largest value in each window, halving height and width and giving small translation tolerance. It has no learnable parameters.

## Typical architecture
Input, [Conv, ReLU, Pool] repeated, flatten, fully connected layers, softmax. Examples: LeNet-5, AlexNet, VGG, ResNet (skip connections that let very deep networks train).

## Training tricks
Data augmentation (flips, crops), batch normalisation, dropout, and **transfer learning**: reuse a network pretrained on ImageNet and fine-tune it on your small dataset.

## Hindi saransh
CNN chhote filters image par slide karke features nikalta hai. Output size = floor((N - F + 2P)/S) + 1. 32 aur 5x5 kernel se 28 milta hai. Max pooling size aadhi kar deta hai. Transfer learning mein pretrained network reuse karte hain.

> A conv layer's parameter count does not depend on image size, only on kernel size and channels.
@qa
Q: Why use convolution instead of a fully connected layer for images?
A: Convolution shares a small set of weights across the image, so there are far fewer parameters, and it uses the local structure of images.
Q: What is the output size for N = 32, F = 5, P = 0, S = 1?
A: (32 - 5 + 0)/1 + 1 = 28.
Q: What does pooling do?
A: It downsamples feature maps (for example max pooling takes the largest value in each window), reducing computation and giving some translation invariance.
Q: How many parameters in a conv layer with 5x5 kernels, 3 input channels and 6 filters?
A: (5 x 5 x 3 + 1) x 6 = 456 including one bias per filter.
Q: What is transfer learning?
A: Starting from a model pretrained on a large dataset and fine-tuning it on a smaller task, which saves data and training time.
@quiz
? Output size for N = 32, F = 5, P = 0, S = 1 is
- 26
- 27
+ 28
- 32
! (32 - 5)/1 + 1 = 28.
? A 5x5 conv with 3 input channels and 6 filters has how many parameters?
- 150
- 450
+ 456
- 6
! (75 + 1) x 6 = 456.
? Max pooling has
- many learnable weights
+ no learnable parameters
- one weight per window
- a bias only
! It just takes the maximum.
? ResNet introduced
- pooling
- dropout
+ skip (residual) connections
- sigmoid activation
! Skip connections make very deep networks easier to train.
? A 224 input, 7x7 kernel, padding 3, stride 2 gives
- 224
+ 112
- 110
- 56
! floor((224 - 7 + 6)/2) + 1 = 112.
@visual
steps | CNN pipeline | Input image; Convolution and ReLU; Pooling; More conv and pool blocks; Flatten; Fully connected layer; Softmax class probabilities
layers | CNN feature hierarchy | First layers: edges and colours; Middle layers: textures and parts; Deep layers: whole objects
@problems
## Moderate
P: Find the output size of a convolution on a 28x28 input with a 3x3 kernel, no padding, stride 1.
A: (28 - 3)/1 + 1 = 26, so 26x26.
R: 1 | Formula
R: 1 | 26
## High
P: A conv layer has 3x3 kernels, 16 input channels and 32 filters. How many parameters does it have?
A: (3 x 3 x 16 + 1) x 32 = 145 x 32 = 4640.
R: 2 | Weights per filter 144 plus bias
R: 1 | 4640
## Advanced
P: Explain how transfer learning works for a small medical-image dataset and which layers you would retrain first.
A: Take a CNN pretrained on a large dataset such as ImageNet whose early layers already detect edges and textures. Replace the final classification layer with one for the new classes, freeze the early layers and train the new head, then optionally unfreeze deeper layers with a small learning rate to fine-tune. This needs far less data and time than training from scratch.
R: 2 | Reuses pretrained features
R: 2 | Replaces the head and freezes early layers
R: 2 | Optional fine-tuning with a small learning rate

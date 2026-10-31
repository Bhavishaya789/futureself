# Neural networks and backpropagation
minutes: 30
yt: neural network backpropagation explained
yt: activation functions relu sigmoid tanh
@study
A **neuron** computes z = w1 x1 + w2 x2 + ... + b and applies an **activation function** a = f(z). A **neural network** stacks layers of neurons: input layer, one or more hidden layers, output layer. Without a non-linear activation, many layers collapse into a single linear model.

## Activation functions
| Function | Formula | Range | Note |
| --- | --- | --- | --- |
| Sigmoid | 1 / (1 + e^-z) | 0 to 1 | outputs and gates; vanishing gradients |
| Tanh | (e^z - e^-z) / (e^z + e^-z) | -1 to 1 | zero centred |
| ReLU | max(0, z) | 0 to infinity | default for hidden layers |
| Softmax | e^zi / sum e^zj | sums to 1 | multi-class output |

## Training loop
1. **Forward pass:** compute outputs and the loss.
2. **Backward pass (backpropagation):** apply the chain rule to get the gradient of the loss for each weight.
3. **Update:** w = w - alpha dL/dw.

### Worked example: one sigmoid neuron
Inputs x = (1, 2), weights w = (0.5, -0.3), bias b = 0.1, target y = 1, loss L = (a - y)^2 / 2.
- z = 0.5(1) + (-0.3)(2) + 0.1 = **0**, a = sigmoid(0) = **0.5**, L = **0.125**.
- dL/da = a - y = -0.5; da/dz = a(1 - a) = 0.25; so dL/dz = **-0.125**.
- dL/dw1 = -0.125 x 1 = **-0.125**; dL/dw2 = -0.125 x 2 = **-0.25**; dL/db = -0.125.
The negative gradients mean increasing the weights will reduce the loss.

```python
import math
x = [1, 2]; w = [0.5, -0.3]; b = 0.1; y = 1
z = sum(i * j for i, j in zip(x, w)) + b; a = 1 / (1 + math.exp(-z))
dz = (a - y) * a * (1 - a)
print(z, a, round((a - y) ** 2 / 2, 3), dz, [dz * i for i in x])   # 0.0 0.5 0.125 -0.125 [-0.125, -0.25]
```

## Problems in deep networks
- **Vanishing gradient:** sigmoid/tanh shrink gradients across many layers; ReLU and good initialisation help.
- **Overfitting:** use dropout, weight decay, data augmentation, early stopping.

## Optimisers
SGD, momentum, RMSprop and **Adam** (adaptive learning rates; the common default).

## Hindi saransh
Neuron weighted sum nikal kar activation lagata hai. Backpropagation chain rule se har weight ka gradient nikalta hai. ReLU hidden layers ke liye default hai. Example: z = 0, a = 0.5, loss 0.125.

> Backprop is just the chain rule applied layer by layer, from output to input.
@qa
Q: Why do we need non-linear activation functions?
A: Without them any stack of layers is equivalent to one linear transformation, so the network could not learn non-linear patterns.
Q: What is backpropagation?
A: An efficient use of the chain rule to compute the gradient of the loss with respect to every weight, moving from the output layer backwards.
Q: What is the vanishing gradient problem?
A: In deep networks with sigmoid or tanh, gradients get multiplied by small numbers layer after layer and become almost zero in early layers, so they stop learning. ReLU reduces this.
Q: What does softmax do?
A: It converts a vector of scores into probabilities that are positive and sum to 1, for multi-class output.
Q: Name two ways to reduce overfitting in neural networks.
A: Dropout and weight decay (L2); also data augmentation or early stopping.
@quiz
? In the worked example the neuron output a is
- 0
+ 0.5
- 1
- 0.25
! z = 0 so sigmoid(0) = 0.5.
? dL/dz in the worked example is
- 0.125
+ -0.125
- -0.5
- 0.25
! (a - y) a (1 - a) = (-0.5)(0.25) = -0.125.
? The default activation in hidden layers of modern networks is
- sigmoid
- step
+ ReLU
- softmax
! ReLU is cheap and avoids vanishing gradients for positive inputs.
? Softmax outputs
- values between -1 and 1
+ probabilities that sum to 1
- only 0 or 1
- the largest input
! Used for multi-class classification.
? Backpropagation is based on
- the quadratic formula
+ the chain rule
- Bayes rule
- matrix inversion
! Gradients are passed back through each layer by the chain rule.
@visual
layers | A small neural network | Input layer: features x1, x2; Hidden layer: neurons with ReLU; Output layer: sigmoid or softmax
curve | Sigmoid and tanh | y = 1/(1+exp(-x)) ; -6 ; 6
curve | ReLU shape | y = (x+abs(x))/2 ; -5 ; 5
steps | One training step | Forward pass; Compute the loss; Backward pass for gradients; Update the weights
@problems
## Moderate
P: Compute ReLU(-3), ReLU(0) and ReLU(4.5).
A: ReLU(z) = max(0, z): 0, 0 and 4.5.
R: 1 | Rule max(0, z)
R: 1 | Three values
## High
P: For a neuron with x = (1, 2), w = (0.5, -0.3), b = 0.1, sigmoid activation and target 1, find z, a and the squared-error loss (a - y)^2 / 2.
A: z = 0.5 - 0.6 + 0.1 = 0. a = sigmoid(0) = 0.5. L = (0.5 - 1)^2 / 2 = 0.125.
R: 1 | z = 0
R: 1 | a = 0.5
R: 2 | L = 0.125
## Advanced
P: For the same neuron compute dL/dw1, dL/dw2 and dL/db, and the updated w1 with learning rate 0.5.
A: dL/dz = (a - y) a (1 - a) = (-0.5)(0.25) = -0.125. dL/dw1 = -0.125, dL/dw2 = -0.25, dL/db = -0.125. New w1 = 0.5 - 0.5(-0.125) = 0.5625.
R: 2 | dL/dz = -0.125
R: 2 | The three gradients
R: 2 | Updated w1 = 0.5625

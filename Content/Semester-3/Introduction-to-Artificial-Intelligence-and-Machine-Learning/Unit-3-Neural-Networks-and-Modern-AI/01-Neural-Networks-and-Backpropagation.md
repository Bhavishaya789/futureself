# Neural networks, perceptron and backpropagation
minutes: 40
yt: perceptron learning rule neural network basics
yt: backpropagation explained activation functions
@study
## Biological inspiration
A neuron receives signals, sums them and fires if the sum is large enough. An **artificial neuron** computes: output = f(w₁x₁ + w₂x₂ + … + b), where f is the **activation function**.

## Perceptron
Single neuron with a step activation: output 1 if w·x + b > 0 else 0. It learns with the rule w ← w + η(t − o)x, b ← b + η(t − o).
Learning the AND gate (η = 1, start at zero) converges (verified) to weights **w = [2, 1], b = −2**: check (1,1): 2 + 1 − 2 = 1 > 0 → 1; (1,0): 0 → 0; (0,1): −1 → 0; (0,0): −2 → 0. ✓
```python
w = [0, 0]; b = 0
data = [((0, 0), 0), ((0, 1), 0), ((1, 0), 0), ((1, 1), 1)]
for _ in range(10):
    for (a1, a2), t in data:
        o = 1 if w[0] * a1 + w[1] * a2 + b > 0 else 0
        e = t - o
        w[0] += e * a1; w[1] += e * a2; b += e
print(w, b)
```
Output:
```
[2, 1] -2
```
A single perceptron can only solve **linearly separable** problems; it cannot learn XOR. Adding a hidden layer fixes this.

## Multi-layer perceptron (MLP)
Input layer, one or more **hidden layers**, output layer. **Feed-forward:** data flows forward. Having non-linear activations allows the network to approximate any continuous function (universal approximation theorem).

## Activation functions
| Function | Formula | Use |
| --- | --- | --- |
| Sigmoid | 1/(1+e^−z) | output probability (binary) |
| Tanh | (e^z − e^−z)/(e^z + e^−z) | hidden layers (older) |
| **ReLU** | max(0, z) | default for hidden layers |
| Softmax | e^zᵢ/Σe^zⱼ | multi-class output |

## Training: loss and backpropagation
1. **Forward pass** computes predictions.
2. **Loss** measures error: MSE for regression, cross-entropy for classification.
3. **Backpropagation** applies the chain rule to compute the gradient of the loss with respect to every weight, from the output layer backwards.
4. **Optimiser** updates weights: SGD, Momentum, **Adam**.
One pass over all training data is an **epoch**; data is processed in **batches**.
Vanishing gradients (sigmoid/tanh in deep nets) are reduced with ReLU and good initialisation.

## Regularisation in deep learning
Dropout (randomly disable neurons), weight decay, early stopping, data augmentation, batch normalisation.

## Small example in scikit-learn
`MLPClassifier(hidden_layer_sizes=(8,), max_iter=2000)` can learn XOR with a hidden layer.

> Forward pass to predict, backward pass to learn.
@qa
Q: What can a single perceptron not learn and why?
A: It cannot learn XOR because XOR is not linearly separable and a single neuron draws only one straight decision boundary.
Q: What is backpropagation?
A: An algorithm that uses the chain rule to compute the gradient of the loss with respect to each weight by propagating errors backwards from the output layer, so an optimiser can update the weights.
Q: Why use ReLU instead of sigmoid in hidden layers?
A: ReLU is cheap and does not saturate for positive inputs, which reduces the vanishing gradient problem and speeds up training.
Q: What is an epoch?
A: One complete pass of the learning algorithm over the whole training dataset.
Q: What does softmax do?
A: It converts a vector of scores into probabilities that are positive and sum to 1, used for multi-class classification.
@quiz
? A single perceptron cannot solve
- AND
- OR
+ XOR
- NOT
! XOR is not linearly separable.
? Backpropagation relies on the
- pigeonhole principle
+ chain rule
- Bayes rule
- Euclid's algorithm
! Gradients are propagated through the layers.
? The default hidden-layer activation today is
- step
+ ReLU
- identity only
- softmax
! max(0, z).
? Softmax outputs
+ probabilities summing to 1
- negative values
- binary values
- only the maximum
! Used for multi-class output.
? Dropout is used to
- speed up the GPU
+ reduce overfitting
- increase bias
- label data
! Random neurons are disabled during training.

@visual
graph | One neuron: inputs, weights and an output | x1>h: w1; x2>h: w2; h>y: activation

@problems
## Moderate
P: A neuron has inputs x = (1, 2), weights w = (0.5, -1) and bias b = 0.5. Compute the output with a sigmoid and with ReLU.
A: z = 0.5 x 1 + (-1) x 2 + 0.5 = -1. Sigmoid(-1) = 1 / (1 + e^1) = 0.269. ReLU(-1) = max(0, -1) = 0.
R: 2 | z = -1
R: 2 | Sigmoid 0.269 and ReLU 0
## High
P: A single linear neuron y_hat = w x has w = 2, input x = 3, target y = 10 and loss L = (y - y_hat)^2. Find the gradient with respect to w and the new w with learning rate 0.01.
A: y_hat = 6, loss = 16. dL/dw = 2 (y_hat - y) x = 2 x (-4) x 3 = -24. New w = 2 - 0.01 x (-24) = 2.24. The prediction moves towards the target (2.24 x 3 = 6.72).
R: 2 | Gradient -24
R: 2 | New w = 2.24
R: 1 | Direction of the update explained
## Advanced
P: Why do deep networks with sigmoid activations suffer from vanishing gradients? Estimate the gradient scale after 5 layers and say how ReLU helps.
A: The sigmoid derivative is at most 0.25. By the chain rule the gradient is multiplied by such a factor at every layer, so after 5 layers it is at most 0.25^5 = 0.00098, which is tiny, and early layers learn very slowly. ReLU has derivative 1 for positive inputs, so gradients are not shrunk by this factor.
R: 2 | Chain rule multiplication of small derivatives
R: 2 | 0.25^5 about 0.001
R: 1 | ReLU derivative 1

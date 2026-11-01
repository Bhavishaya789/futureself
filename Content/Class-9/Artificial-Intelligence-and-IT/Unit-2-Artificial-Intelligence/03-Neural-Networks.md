# Neural networks basics
minutes: 35
yt: class 9 neural networks basics
@study
An artificial neural network (ANN) is a model inspired by the human brain, made of connected artificial neurons arranged in layers: input layer, one or more hidden layers and an output layer. Each connection has a weight; a neuron adds the weighted inputs plus a bias and passes the result through an activation function. Training adjusts weights to reduce error. Networks with many hidden layers are called deep neural networks.
## Deep dive: from the brain to the artificial neuron
A biological neuron has dendrites (receive signals), a cell body (processes), an axon (sends the signal) and synapses (junctions). An artificial neuron copies this: inputs (x), weights (w), a bias (b), a summation and an activation function that gives the output. Net input = x1 w1 + x2 w2 + ... + b. A larger weight means that input has more influence.
## Deep dive: layers and architecture
The input layer receives the data (pixels, numbers). Hidden layers do the calculations and find features. The output layer gives the result (a class or number). A network with more than one hidden layer is a deep neural network, which is why this is called deep learning. In a fully connected layer every neuron connects to every neuron in the next layer.
## Deep dive: activation and learning
An activation function decides whether and how strongly a neuron fires: step (0 or 1), sigmoid (between 0 and 1), tanh (between -1 and 1) and ReLU (output = max(0, x)). Learning means adjusting weights: the network predicts, the loss (error) is measured, and backpropagation sends the error backwards to update weights using gradient descent. One full pass over the training data is an epoch. The learning rate controls the size of each weight update.
## Deep dive: applications and limits
Neural networks power image recognition, speech recognition, language translation, medical diagnosis, self-driving cars and recommendation systems. Convolutional neural networks (CNN) are used for images; recurrent neural networks (RNN) and transformers for text and speech. Limits: they need large data and computing power, can inherit bias, and are often a black box whose decisions are hard to explain.
## Hindi saransh
Neural network = dimag jaisa jaal: input, hidden aur output layer. Weight seekhte hain.
> Neuron output = activation(sum of input x weight + bias).
@formulas
## Neuron
Net input | x1 w1 + x2 w2 + ... + b | weighted sum
Output | activation(net input) | 
ReLU | max(0, x) | 
Step | 1 if net >= threshold else 0 | 
## Network
Layers | input, hidden, output | 
Deep network | more than one hidden layer | 
Epoch | one pass over all training data | 

@qa
Q: What is meant by Neural network?
A: A model made of connected neurons inspired by the human brain.
Q: What is meant by Neuron?
A: A basic unit that receives inputs and gives an output.
Q: What is meant by Biological neuron?
A: A nerve cell in the brain that carries signals.
Q: What is meant by Dendrite?
A: The part of a neuron that receives signals.
Q: What is meant by Axon?
A: The part of a neuron that sends signals onward.
Q: What is meant by Synapse?
A: The junction where signals pass from one neuron to another.
Q: What is meant by Artificial neuron?
A: A mathematical unit that takes inputs, applies weights and gives an output.
Q: What is meant by Input layer?
A: The layer that receives the data.
Q: What is meant by Hidden layer?
A: A layer between input and output that finds features.
Q: What is meant by Output layer?
A: The layer that gives the final result.
Q: What is meant by Weight?
A: A number that shows how important an input is.
Q: What is meant by Bias?
A: An extra number added to the weighted sum.
Q: What is meant by Weighted sum?
A: The sum of each input multiplied by its weight.
Q: What is meant by Activation function?
A: A function that decides the output of a neuron.
Q: What is meant by Step function?
A: An activation that gives either 0 or 1.
Q: What is meant by Sigmoid function?
A: An activation that gives a value between 0 and 1.
Q: What is meant by ReLU?
A: An activation that gives zero for negative values and x otherwise.
Q: What is meant by Deep neural network?
A: A neural network with many hidden layers.
Q: What is meant by Fully connected layer?
A: A layer where every neuron connects to all neurons of the next layer.
Q: What is meant by Training?
A: Adjusting weights so that the network makes fewer errors.
Q: What is meant by Loss?
A: A number that shows how wrong the predictions are.
Q: What is meant by Backpropagation?
A: Sending the error backwards to update the weights.
Q: What is meant by Gradient descent?
A: A method that changes weights step by step to reduce loss.
Q: What is meant by Learning rate?
A: The size of each step taken while updating weights.
Q: What is meant by Epoch?
A: One full pass through the training data.
Q: What is meant by Batch?
A: A small group of examples processed together.
Q: What is meant by Overfitting?
A: When the network memorises training data and fails on new data.
Q: What is meant by Convolutional neural network?
A: A network designed for images.
Q: What is meant by Recurrent neural network?
A: A network designed for sequences such as text.
Q: What is meant by Transformer?
A: A network that uses attention and is used in modern language models.
Q: What is meant by Feature?
A: A useful property of the data found by the network.
Q: What is meant by Classification?
A: Predicting the category of an input.
Q: What is meant by Image recognition?
A: Identifying objects in pictures using AI.
Q: What is meant by Speech recognition?
A: Converting speech into text using AI.
Q: What is meant by Black box?
A: A system whose internal decisions are hard to explain.
Q: What is meant by Parameter?
A: A value such as a weight that the network learns.
Q: What is meant by Threshold?
A: The value above which a neuron fires.
Q: What is meant by Perceptron?
A: The simplest neural network with a single neuron.
Q: What is meant by Pixel?
A: The smallest dot of a digital image.
Q: What is meant by Normalisation?
A: Scaling input values to a common range.
Q: What is meant by Dropout?
A: Randomly switching off neurons to reduce overfitting.
Q: What is meant by Dataset?
A: A collection of examples used for training and testing.
Q: What is meant by Generalisation?
A: The ability of a model to work well on new data.
Q: What is meant by Forward propagation?
A: Passing inputs through the layers to get the output.
Q: What is meant by Computing power?
A: The processing capacity needed to train large networks.
Q: What is meant by GPU?
A: A processor that speeds up neural network training.
Q: What is meant by Neurons in the brain?
A: About 86 billion nerve cells.
Q: What is meant by Deep learning?
A: Machine learning with deep neural networks.
Q: Which term is described as: a model made of connected neurons inspired by the human brain?
A: Neural network.
Q: Which term is described as: a basic unit that receives inputs and gives an output?
A: Neuron.
Q: Which term is described as: a nerve cell in the brain that carries signals?
A: Biological neuron.
Q: Which term is described as: the part of a neuron that receives signals?
A: Dendrite.
Q: Which term is described as: the part of a neuron that sends signals onward?
A: Axon.
Q: Which term is described as: the junction where signals pass from one neuron to another?
A: Synapse.
Q: Which term is described as: a mathematical unit that takes inputs, applies weights and gives an output?
A: Artificial neuron.
Q: Which term is described as: the layer that receives the data?
A: Input layer.
Q: Which term is described as: a layer between input and output that finds features?
A: Hidden layer.
Q: Which term is described as: the layer that gives the final result?
A: Output layer.
Q: Which term is described as: a number that shows how important an input is?
A: Weight.
Q: Which term is described as: an extra number added to the weighted sum?
A: Bias.
Q: Which term is described as: the sum of each input multiplied by its weight?
A: Weighted sum.
Q: Which term is described as: a function that decides the output of a neuron?
A: Activation function.
Q: Which term is described as: an activation that gives either 0 or 1?
A: Step function.
Q: Which term is described as: an activation that gives a value between 0 and 1?
A: Sigmoid function.
Q: Which term is described as: an activation that gives zero for negative values and x otherwise?
A: ReLU.
Q: Which term is described as: a neural network with many hidden layers?
A: Deep neural network.
Q: Which term is described as: a layer where every neuron connects to all neurons of the next layer?
A: Fully connected layer.
Q: Which term is described as: adjusting weights so that the network makes fewer errors?
A: Training.
Q: Which term is described as: a number that shows how wrong the predictions are?
A: Loss.
Q: Which term is described as: sending the error backwards to update the weights?
A: Backpropagation.
Q: Which term is described as: a method that changes weights step by step to reduce loss?
A: Gradient descent.
Q: Which term is described as: the size of each step taken while updating weights?
A: Learning rate.
Q: Which term is described as: one full pass through the training data?
A: Epoch.
Q: Which term is described as: a small group of examples processed together?
A: Batch.
Q: Which term is described as: when the network memorises training data and fails on new data?
A: Overfitting.
Q: Which term is described as: a network designed for images?
A: Convolutional neural network.
Q: Which term is described as: a network designed for sequences such as text?
A: Recurrent neural network.
Q: Which term is described as: a network that uses attention and is used in modern language models?
A: Transformer.
Q: Which term is described as: a useful property of the data found by the network?
A: Feature.
Q: Which term is described as: predicting the category of an input?
A: Classification.
Q: Which term is described as: identifying objects in pictures using AI?
A: Image recognition.
Q: Which term is described as: converting speech into text using AI?
A: Speech recognition.
Q: Which term is described as: a system whose internal decisions are hard to explain?
A: Black box.
Q: Which term is described as: a value such as a weight that the network learns?
A: Parameter.
Q: Which term is described as: the value above which a neuron fires?
A: Threshold.
Q: Which term is described as: the simplest neural network with a single neuron?
A: Perceptron.
Q: Which term is described as: the smallest dot of a digital image?
A: Pixel.
Q: Which term is described as: scaling input values to a common range?
A: Normalisation.
Q: Which term is described as: randomly switching off neurons to reduce overfitting?
A: Dropout.
Q: Which term is described as: a collection of examples used for training and testing?
A: Dataset.
Q: Which term is described as: the ability of a model to work well on new data?
A: Generalisation.
Q: Which term is described as: passing inputs through the layers to get the output?
A: Forward propagation.
Q: Which term is described as: the processing capacity needed to train large networks?
A: Computing power.
Q: Which term is described as: a processor that speeds up neural network training?
A: GPU.
Q: Which term is described as: about 86 billion nerve cells?
A: Neurons in the brain.
Q: Which term is described as: machine learning with deep neural networks?
A: Deep learning.
Q: Which layer receives the data?
A: The input layer.
Q: Which layer gives the result?
A: The output layer.
Q: Where are the calculations done?
A: In the hidden layers.
Q: What is a deep neural network?
A: A network with more than one hidden layer.
Q: What decides the importance of an input?
A: Its weight.
Q: What does an activation function do?
A: It decides the output of a neuron.
Q: What is the output of ReLU for a negative input?
A: Zero.
Q: What is the output of ReLU for 5?
A: 5.
Q: What does the sigmoid function output?
A: A value between 0 and 1.
Q: What is the aim of training?
A: To reduce the error.
Q: How does a network learn?
A: By adjusting its weights.
Q: What is backpropagation used for?
A: Updating weights using the error.
Q: What is an epoch?
A: One pass over all training data.
Q: Name one use of neural networks.
A: Image recognition.
Q: Which network is mostly used for images?
A: Convolutional neural network.
Q: Why are neural networks called a black box?
A: Their decisions are hard to explain.
Q: What do neural networks need in large amounts?
A: Data and computing power.
Q: What is the simplest neural network called?
A: A perceptron.
Q: Which part of a biological neuron receives signals?
A: Dendrites.
Q: Which part of a biological neuron sends signals?
A: The axon.
Q: Weighted sum of inputs (2, 3) with weights (0.5, 0.2) and bias 1
A: 2.6.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (2, 3), weights (0.5, 0.2) and bias 1
A: 2.6.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (2, 3), weights (0.5, 0.2) and bias 1
A: 1.
Q: Weighted sum of inputs (1, 4) with weights (0.3, 0.1) and bias 0
A: 0.7.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (1, 4), weights (0.3, 0.1) and bias 0
A: 0.7.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (1, 4), weights (0.3, 0.1) and bias 0
A: 0.
Q: Weighted sum of inputs (5, 2) with weights (0.2, 0.4) and bias 2
A: 3.8.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (5, 2), weights (0.2, 0.4) and bias 2
A: 3.8.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (5, 2), weights (0.2, 0.4) and bias 2
A: 1.
Q: Weighted sum of inputs (3, 3) with weights (0.5, 0.5) and bias -1
A: 2.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (3, 3), weights (0.5, 0.5) and bias -1
A: 2.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (3, 3), weights (0.5, 0.5) and bias -1
A: 1.
Q: Weighted sum of inputs (4, 1) with weights (0.25, 0.75) and bias 0.5
A: 2.25.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (4, 1), weights (0.25, 0.75) and bias 0.5
A: 2.25.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (4, 1), weights (0.25, 0.75) and bias 0.5
A: 1.
Q: Weighted sum of inputs (6, 2) with weights (0.1, 0.3) and bias 1
A: 2.2.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (6, 2), weights (0.1, 0.3) and bias 1
A: 2.2.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (6, 2), weights (0.1, 0.3) and bias 1
A: 1.
Q: Weighted sum of inputs (2, 2) with weights (1.5, 0.5) and bias -2
A: 2.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (2, 2), weights (1.5, 0.5) and bias -2
A: 2.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (2, 2), weights (1.5, 0.5) and bias -2
A: 1.
Q: Weighted sum of inputs (0, 5) with weights (0.9, 0.2) and bias 3
A: 4.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (0, 5), weights (0.9, 0.2) and bias 3
A: 4.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (0, 5), weights (0.9, 0.2) and bias 3
A: 1.
Q: Weighted sum of inputs (7, 1) with weights (0.2, 0.6) and bias -1
A: 1.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (7, 1), weights (0.2, 0.6) and bias -1
A: 1.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (7, 1), weights (0.2, 0.6) and bias -1
A: 0.
Q: Weighted sum of inputs (10, 4) with weights (0.1, 0.25) and bias 0.5
A: 2.5.
Q: Output of a ReLU neuron whose weighted sum is that of inputs (10, 4), weights (0.1, 0.25) and bias 0.5
A: 2.5.
Q: Output of a step neuron (fires 1 if sum is at least 2) for inputs (10, 4), weights (0.1, 0.25) and bias 0.5
A: 1.
Q: ReLU of -5
A: 0.
Q: ReLU of -1
A: 0.
Q: ReLU of 0
A: 0.
Q: ReLU of 3
A: 3.
Q: ReLU of 8
A: 8.
Q: ReLU of -2.5
A: 0.
Q: ReLU of 4.5
A: 4.5.
@quiz
? What is meant by Neural network?
- A nerve cell in the brain that carries signals
- One full pass through the training data
+ A model made of connected neurons inspired by the human brain
- The processing capacity needed to train large networks
! From the CBSE Class 9 syllabus.
? What is meant by Neuron?
- The layer that gives the final result
- The layer that receives the data
+ A basic unit that receives inputs and gives an output
- Sending the error backwards to update the weights
! From the CBSE Class 9 syllabus.
? What is meant by Biological neuron?
- An extra number added to the weighted sum
- A small group of examples processed together
+ A nerve cell in the brain that carries signals
- Randomly switching off neurons to reduce overfitting
! From the CBSE Class 9 syllabus.
? What is meant by Dendrite?
+ The part of a neuron that receives signals
- A function that decides the output of a neuron
- A neural network with many hidden layers
- Passing inputs through the layers to get the output
! From the CBSE Class 9 syllabus.
? What is meant by Axon?
- The ability of a model to work well on new data
- Passing inputs through the layers to get the output
- A method that changes weights step by step to reduce loss
+ The part of a neuron that sends signals onward
! From the CBSE Class 9 syllabus.
? What is meant by Synapse?
+ The junction where signals pass from one neuron to another
- Predicting the category of an input
- Passing inputs through the layers to get the output
- A number that shows how wrong the predictions are
! From the CBSE Class 9 syllabus.
? What is meant by Artificial neuron?
- An activation that gives a value between 0 and 1
- Scaling input values to a common range
- A system whose internal decisions are hard to explain
+ A mathematical unit that takes inputs, applies weights and gives an output
! From the CBSE Class 9 syllabus.
? What is meant by Input layer?
- The processing capacity needed to train large networks
+ The layer that receives the data
- A small group of examples processed together
- A layer where every neuron connects to all neurons of the next layer
! From the CBSE Class 9 syllabus.
? What is meant by Hidden layer?
- Sending the error backwards to update the weights
- A layer where every neuron connects to all neurons of the next layer
+ A layer between input and output that finds features
- The value above which a neuron fires
! From the CBSE Class 9 syllabus.
? What is meant by Output layer?
- The sum of each input multiplied by its weight
- A nerve cell in the brain that carries signals
+ The layer that gives the final result
- An activation that gives either 0 or 1
! From the CBSE Class 9 syllabus.
? What is meant by Weight?
- Scaling input values to a common range
- An extra number added to the weighted sum
- A small group of examples processed together
+ A number that shows how important an input is
! From the CBSE Class 9 syllabus.
? What is meant by Bias?
- An activation that gives a value between 0 and 1
+ An extra number added to the weighted sum
- A collection of examples used for training and testing
- A useful property of the data found by the network
! From the CBSE Class 9 syllabus.
? What is meant by Weighted sum?
- The simplest neural network with a single neuron
- An activation that gives zero for negative values and x otherwise
- A layer where every neuron connects to all neurons of the next layer
+ The sum of each input multiplied by its weight
! From the CBSE Class 9 syllabus.
? What is meant by Activation function?
- A value such as a weight that the network learns
- A network designed for sequences such as text
- Identifying objects in pictures using AI
+ A function that decides the output of a neuron
! From the CBSE Class 9 syllabus.
? What is meant by Step function?
- A network designed for images
- The sum of each input multiplied by its weight
- A number that shows how wrong the predictions are
+ An activation that gives either 0 or 1
! From the CBSE Class 9 syllabus.
? What is meant by Sigmoid function?
- A method that changes weights step by step to reduce loss
+ An activation that gives a value between 0 and 1
- The part of a neuron that receives signals
- The processing capacity needed to train large networks
! From the CBSE Class 9 syllabus.
? What is meant by ReLU?
- Identifying objects in pictures using AI
+ An activation that gives zero for negative values and x otherwise
- A model made of connected neurons inspired by the human brain
- A network that uses attention and is used in modern language models
! From the CBSE Class 9 syllabus.
? What is meant by Deep neural network?
- A value such as a weight that the network learns
+ A neural network with many hidden layers
- A network designed for sequences such as text
- The part of a neuron that sends signals onward
! From the CBSE Class 9 syllabus.
? What is meant by Fully connected layer?
- A small group of examples processed together
- Adjusting weights so that the network makes fewer errors
- The processing capacity needed to train large networks
+ A layer where every neuron connects to all neurons of the next layer
! From the CBSE Class 9 syllabus.
? What is meant by Training?
- A function that decides the output of a neuron
- A value such as a weight that the network learns
+ Adjusting weights so that the network makes fewer errors
- The smallest dot of a digital image
! From the CBSE Class 9 syllabus.
? What is meant by Loss?
- Adjusting weights so that the network makes fewer errors
+ A number that shows how wrong the predictions are
- The size of each step taken while updating weights
- The value above which a neuron fires
! From the CBSE Class 9 syllabus.
? What is meant by Backpropagation?
- Passing inputs through the layers to get the output
+ Sending the error backwards to update the weights
- The layer that gives the final result
- Identifying objects in pictures using AI
! From the CBSE Class 9 syllabus.
? What is meant by Gradient descent?
- One full pass through the training data
+ A method that changes weights step by step to reduce loss
- The layer that receives the data
- A model made of connected neurons inspired by the human brain
! From the CBSE Class 9 syllabus.
? What is meant by Learning rate?
- One full pass through the training data
- Identifying objects in pictures using AI
- About 86 billion nerve cells
+ The size of each step taken while updating weights
! From the CBSE Class 9 syllabus.
? What is meant by Epoch?
- A neural network with many hidden layers
- Passing inputs through the layers to get the output
- An extra number added to the weighted sum
+ One full pass through the training data
! From the CBSE Class 9 syllabus.
? What is meant by Batch?
- One full pass through the training data
+ A small group of examples processed together
- The part of a neuron that sends signals onward
- Adjusting weights so that the network makes fewer errors
! From the CBSE Class 9 syllabus.
? What is meant by Overfitting?
+ When the network memorises training data and fails on new data
- A network designed for sequences such as text
- Identifying objects in pictures using AI
- Adjusting weights so that the network makes fewer errors
! From the CBSE Class 9 syllabus.
? What is meant by Convolutional neural network?
- A function that decides the output of a neuron
- The part of a neuron that sends signals onward
+ A network designed for images
- A value such as a weight that the network learns
! From the CBSE Class 9 syllabus.
? What is meant by Recurrent neural network?
- An activation that gives zero for negative values and x otherwise
- The part of a neuron that sends signals onward
- Adjusting weights so that the network makes fewer errors
+ A network designed for sequences such as text
! From the CBSE Class 9 syllabus.
? What is meant by Transformer?
- An activation that gives a value between 0 and 1
- An activation that gives either 0 or 1
+ A network that uses attention and is used in modern language models
- The value above which a neuron fires
! From the CBSE Class 9 syllabus.
? What is meant by Feature?
- The ability of a model to work well on new data
+ A useful property of the data found by the network
- Randomly switching off neurons to reduce overfitting
- The sum of each input multiplied by its weight
! From the CBSE Class 9 syllabus.
? What is meant by Classification?
- The ability of a model to work well on new data
- An extra number added to the weighted sum
- A collection of examples used for training and testing
+ Predicting the category of an input
! From the CBSE Class 9 syllabus.
? What is meant by Image recognition?
+ Identifying objects in pictures using AI
- An activation that gives either 0 or 1
- A useful property of the data found by the network
- A small group of examples processed together
! From the CBSE Class 9 syllabus.
? What is meant by Speech recognition?
- A value such as a weight that the network learns
- Randomly switching off neurons to reduce overfitting
+ Converting speech into text using AI
- A method that changes weights step by step to reduce loss
! From the CBSE Class 9 syllabus.
? What is meant by Black box?
+ A system whose internal decisions are hard to explain
- Scaling input values to a common range
- One full pass through the training data
- The processing capacity needed to train large networks
! From the CBSE Class 9 syllabus.
? What is meant by Parameter?
- A processor that speeds up neural network training
+ A value such as a weight that the network learns
- A number that shows how important an input is
- Passing inputs through the layers to get the output
! From the CBSE Class 9 syllabus.
? What is meant by Threshold?
- The junction where signals pass from one neuron to another
- A useful property of the data found by the network
+ The value above which a neuron fires
- Identifying objects in pictures using AI
! From the CBSE Class 9 syllabus.
? What is meant by Perceptron?
- One full pass through the training data
- An activation that gives either 0 or 1
- A nerve cell in the brain that carries signals
+ The simplest neural network with a single neuron
! From the CBSE Class 9 syllabus.
? What is meant by Pixel?
- The sum of each input multiplied by its weight
- The value above which a neuron fires
- Predicting the category of an input
+ The smallest dot of a digital image
! From the CBSE Class 9 syllabus.
? What is meant by Normalisation?
- When the network memorises training data and fails on new data
+ Scaling input values to a common range
- A nerve cell in the brain that carries signals
- An extra number added to the weighted sum
! From the CBSE Class 9 syllabus.
? What is meant by Dropout?
- A number that shows how important an input is
+ Randomly switching off neurons to reduce overfitting
- A method that changes weights step by step to reduce loss
- A useful property of the data found by the network
! From the CBSE Class 9 syllabus.
? What is meant by Dataset?
- One full pass through the training data
+ A collection of examples used for training and testing
- When the network memorises training data and fails on new data
- A network that uses attention and is used in modern language models
! From the CBSE Class 9 syllabus.
? What is meant by Generalisation?
- Sending the error backwards to update the weights
- A network designed for sequences such as text
- The smallest dot of a digital image
+ The ability of a model to work well on new data
! From the CBSE Class 9 syllabus.
? What is meant by Forward propagation?
- An activation that gives either 0 or 1
- The size of each step taken while updating weights
- A number that shows how important an input is
+ Passing inputs through the layers to get the output
! From the CBSE Class 9 syllabus.
? What is meant by Computing power?
- Sending the error backwards to update the weights
+ The processing capacity needed to train large networks
- Scaling input values to a common range
- Randomly switching off neurons to reduce overfitting
! From the CBSE Class 9 syllabus.
? What is meant by GPU?
- A layer between input and output that finds features
- The processing capacity needed to train large networks
+ A processor that speeds up neural network training
- Randomly switching off neurons to reduce overfitting
! From the CBSE Class 9 syllabus.
? What is meant by Neurons in the brain?
- Randomly switching off neurons to reduce overfitting
- The part of a neuron that sends signals onward
- Identifying objects in pictures using AI
+ About 86 billion nerve cells
! From the CBSE Class 9 syllabus.
? What is meant by Deep learning?
- When the network memorises training data and fails on new data
- One full pass through the training data
+ Machine learning with deep neural networks
- A method that changes weights step by step to reduce loss
! From the CBSE Class 9 syllabus.
? Which term is described as: a model made of connected neurons inspired by the human brain?
- Recurrent neural network
- Training
- Dendrite
+ Neural network
! From the CBSE Class 9 syllabus.
? Which term is described as: a basic unit that receives inputs and gives an output?
- Hidden layer
+ Neuron
- Step function
- Weighted sum
! From the CBSE Class 9 syllabus.
? Which term is described as: a nerve cell in the brain that carries signals?
+ Biological neuron
- ReLU
- Synapse
- Black box
! From the CBSE Class 9 syllabus.
? Which term is described as: the part of a neuron that receives signals?
- Weight
+ Dendrite
- GPU
- Black box
! From the CBSE Class 9 syllabus.
? Which term is described as: the part of a neuron that sends signals onward?
+ Axon
- Gradient descent
- Epoch
- Input layer
! From the CBSE Class 9 syllabus.
? Which term is described as: the junction where signals pass from one neuron to another?
- Axon
- Batch
- Recurrent neural network
+ Synapse
! From the CBSE Class 9 syllabus.
? Which term is described as: a mathematical unit that takes inputs, applies weights and gives an output?
- Learning rate
- Transformer
- Training
+ Artificial neuron
! From the CBSE Class 9 syllabus.
? Which term is described as: the layer that receives the data?
+ Input layer
- Weighted sum
- Overfitting
- Black box
! From the CBSE Class 9 syllabus.
? Which term is described as: a layer between input and output that finds features?
- Training
- Deep neural network
+ Hidden layer
- Axon
! From the CBSE Class 9 syllabus.
? Which term is described as: the layer that gives the final result?
- Artificial neuron
- Perceptron
+ Output layer
- Overfitting
! From the CBSE Class 9 syllabus.
? Which term is described as: a number that shows how important an input is?
- Neuron
+ Weight
- Pixel
- Neural network
! From the CBSE Class 9 syllabus.
? Which term is described as: an extra number added to the weighted sum?
- Synapse
- Forward propagation
- Sigmoid function
+ Bias
! From the CBSE Class 9 syllabus.
? Which term is described as: the sum of each input multiplied by its weight?
- Bias
+ Weighted sum
- Normalisation
- GPU
! From the CBSE Class 9 syllabus.
? Which term is described as: a function that decides the output of a neuron?
- Speech recognition
- Fully connected layer
+ Activation function
- Perceptron
! From the CBSE Class 9 syllabus.
? Which term is described as: an activation that gives either 0 or 1?
- Dataset
- Classification
+ Step function
- Hidden layer
! From the CBSE Class 9 syllabus.
? Which term is described as: an activation that gives a value between 0 and 1?
- GPU
+ Sigmoid function
- Step function
- Input layer
! From the CBSE Class 9 syllabus.
? Which term is described as: an activation that gives zero for negative values and x otherwise?
- Input layer
- Parameter
- Convolutional neural network
+ ReLU
! From the CBSE Class 9 syllabus.
? Which term is described as: a neural network with many hidden layers?
- Pixel
+ Deep neural network
- Weighted sum
- Axon
! From the CBSE Class 9 syllabus.
? Which term is described as: a layer where every neuron connects to all neurons of the next layer?
- Deep learning
+ Fully connected layer
- Activation function
- ReLU
! From the CBSE Class 9 syllabus.
? Which term is described as: adjusting weights so that the network makes fewer errors?
- Image recognition
+ Training
- Convolutional neural network
- Sigmoid function
! From the CBSE Class 9 syllabus.
? Which term is described as: a number that shows how wrong the predictions are?
- Forward propagation
+ Loss
- Deep neural network
- GPU
! From the CBSE Class 9 syllabus.
? Which term is described as: sending the error backwards to update the weights?
- Artificial neuron
- Deep learning
- Speech recognition
+ Backpropagation
! From the CBSE Class 9 syllabus.
? Which term is described as: a method that changes weights step by step to reduce loss?
- Deep learning
+ Gradient descent
- ReLU
- Overfitting
! From the CBSE Class 9 syllabus.
? Which term is described as: the size of each step taken while updating weights?
- Feature
+ Learning rate
- Parameter
- Neural network
! From the CBSE Class 9 syllabus.
? Which term is described as: one full pass through the training data?
- Normalisation
+ Epoch
- Convolutional neural network
- Perceptron
! From the CBSE Class 9 syllabus.
? Which term is described as: a small group of examples processed together?
- Output layer
- Weight
- Input layer
+ Batch
! From the CBSE Class 9 syllabus.
? Which term is described as: when the network memorises training data and fails on new data?
+ Overfitting
- Gradient descent
- Dendrite
- Dataset
! From the CBSE Class 9 syllabus.
? Which term is described as: a network designed for images?
- Output layer
- Backpropagation
+ Convolutional neural network
- Dataset
! From the CBSE Class 9 syllabus.
? Which term is described as: a network designed for sequences such as text?
- Speech recognition
- Neuron
+ Recurrent neural network
- Loss
! From the CBSE Class 9 syllabus.
? Which term is described as: a network that uses attention and is used in modern language models?
- Output layer
+ Transformer
- Synapse
- Neurons in the brain
! From the CBSE Class 9 syllabus.
? Which term is described as: a useful property of the data found by the network?
- Synapse
- Generalisation
- Deep neural network
+ Feature
! From the CBSE Class 9 syllabus.
? Which term is described as: predicting the category of an input?
+ Classification
- Forward propagation
- Computing power
- Weight
! From the CBSE Class 9 syllabus.
? Which term is described as: identifying objects in pictures using AI?
- Recurrent neural network
+ Image recognition
- Loss
- Input layer
! From the CBSE Class 9 syllabus.
? Which term is described as: converting speech into text using AI?
+ Speech recognition
- Dropout
- Step function
- Loss
! From the CBSE Class 9 syllabus.
? Which term is described as: a system whose internal decisions are hard to explain?
- Deep learning
- Convolutional neural network
- Sigmoid function
+ Black box
! From the CBSE Class 9 syllabus.
? Which term is described as: a value such as a weight that the network learns?
- Fully connected layer
- Learning rate
+ Parameter
- Sigmoid function
! From the CBSE Class 9 syllabus.
? Which term is described as: the value above which a neuron fires?
- Backpropagation
- Overfitting
- Recurrent neural network
+ Threshold
! From the CBSE Class 9 syllabus.
? Which term is described as: the simplest neural network with a single neuron?
- Learning rate
- Bias
- Neuron
+ Perceptron
! From the CBSE Class 9 syllabus.
? Which term is described as: the smallest dot of a digital image?
- Threshold
- Neurons in the brain
- Output layer
+ Pixel
! From the CBSE Class 9 syllabus.
? Which term is described as: scaling input values to a common range?
- Neurons in the brain
- Overfitting
+ Normalisation
- GPU
! From the CBSE Class 9 syllabus.
? Which term is described as: randomly switching off neurons to reduce overfitting?
- Speech recognition
- Fully connected layer
+ Dropout
- Pixel
! From the CBSE Class 9 syllabus.
? Which term is described as: a collection of examples used for training and testing?
- Fully connected layer
+ Dataset
- Loss
- Step function
! From the CBSE Class 9 syllabus.
? Which term is described as: the ability of a model to work well on new data?
- Pixel
+ Generalisation
- Fully connected layer
- Output layer
! From the CBSE Class 9 syllabus.
? Which term is described as: passing inputs through the layers to get the output?
- Batch
- Gradient descent
+ Forward propagation
- Computing power
! From the CBSE Class 9 syllabus.
? Which term is described as: the processing capacity needed to train large networks?
+ Computing power
- Classification
- Weighted sum
- Recurrent neural network
! From the CBSE Class 9 syllabus.
? Which term is described as: a processor that speeds up neural network training?
+ GPU
- Axon
- Normalisation
- Learning rate
! From the CBSE Class 9 syllabus.
? Which term is described as: about 86 billion nerve cells?
- GPU
+ Neurons in the brain
- Synapse
- Hidden layer
! From the CBSE Class 9 syllabus.
? Which term is described as: machine learning with deep neural networks?
- Artificial neuron
+ Deep learning
- Feature
- Convolutional neural network
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Neural network".
- The ability of a model to work well on new data
- Scaling input values to a common range
- A number that shows how important an input is
+ A model made of connected neurons inspired by the human brain
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Neuron".
- A network designed for images
+ A basic unit that receives inputs and gives an output
- Scaling input values to a common range
- A model made of connected neurons inspired by the human brain
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Biological neuron".
+ A nerve cell in the brain that carries signals
- A method that changes weights step by step to reduce loss
- A number that shows how wrong the predictions are
- The part of a neuron that sends signals onward
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Dendrite".
+ The part of a neuron that receives signals
- A network designed for images
- A function that decides the output of a neuron
- A value such as a weight that the network learns
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Axon".
- The sum of each input multiplied by its weight
+ The part of a neuron that sends signals onward
- A network designed for sequences such as text
- The part of a neuron that receives signals
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Synapse".
- Converting speech into text using AI
- The part of a neuron that receives signals
- Randomly switching off neurons to reduce overfitting
+ The junction where signals pass from one neuron to another
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Artificial neuron".
- A layer between input and output that finds features
- An activation that gives a value between 0 and 1
- An activation that gives zero for negative values and x otherwise
+ A mathematical unit that takes inputs, applies weights and gives an output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Input layer".
- A neural network with many hidden layers
- Machine learning with deep neural networks
- The layer that gives the final result
+ The layer that receives the data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Hidden layer".
- The value above which a neuron fires
- A network designed for images
+ A layer between input and output that finds features
- An activation that gives zero for negative values and x otherwise
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Output layer".
- One full pass through the training data
+ The layer that gives the final result
- A network designed for sequences such as text
- A number that shows how wrong the predictions are
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Weight".
- The smallest dot of a digital image
+ A number that shows how important an input is
- The sum of each input multiplied by its weight
- A network that uses attention and is used in modern language models
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Bias".
+ An extra number added to the weighted sum
- A number that shows how wrong the predictions are
- A basic unit that receives inputs and gives an output
- A collection of examples used for training and testing
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Weighted sum".
- A network that uses attention and is used in modern language models
- The part of a neuron that receives signals
- An activation that gives zero for negative values and x otherwise
+ The sum of each input multiplied by its weight
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Activation function".
- Machine learning with deep neural networks
+ A function that decides the output of a neuron
- A method that changes weights step by step to reduce loss
- A system whose internal decisions are hard to explain
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Step function".
- A value such as a weight that the network learns
+ An activation that gives either 0 or 1
- The layer that gives the final result
- A small group of examples processed together
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Sigmoid function".
- The smallest dot of a digital image
- One full pass through the training data
+ An activation that gives a value between 0 and 1
- A layer where every neuron connects to all neurons of the next layer
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "ReLU".
- An activation that gives a value between 0 and 1
- When the network memorises training data and fails on new data
- A useful property of the data found by the network
+ An activation that gives zero for negative values and x otherwise
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Deep neural network".
- The smallest dot of a digital image
+ A neural network with many hidden layers
- An activation that gives zero for negative values and x otherwise
- The ability of a model to work well on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Fully connected layer".
- A basic unit that receives inputs and gives an output
- The layer that receives the data
+ A layer where every neuron connects to all neurons of the next layer
- The junction where signals pass from one neuron to another
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Training".
+ Adjusting weights so that the network makes fewer errors
- A layer between input and output that finds features
- A neural network with many hidden layers
- The sum of each input multiplied by its weight
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Loss".
- When the network memorises training data and fails on new data
- A neural network with many hidden layers
- A model made of connected neurons inspired by the human brain
+ A number that shows how wrong the predictions are
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Backpropagation".
+ Sending the error backwards to update the weights
- The ability of a model to work well on new data
- A mathematical unit that takes inputs, applies weights and gives an output
- The layer that gives the final result
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Gradient descent".
- An activation that gives either 0 or 1
- The size of each step taken while updating weights
+ A method that changes weights step by step to reduce loss
- A layer where every neuron connects to all neurons of the next layer
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Learning rate".
- A method that changes weights step by step to reduce loss
- Randomly switching off neurons to reduce overfitting
- A basic unit that receives inputs and gives an output
+ The size of each step taken while updating weights
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Epoch".
- A number that shows how wrong the predictions are
+ One full pass through the training data
- A useful property of the data found by the network
- An activation that gives zero for negative values and x otherwise
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Batch".
- A number that shows how important an input is
- Passing inputs through the layers to get the output
+ A small group of examples processed together
- A number that shows how wrong the predictions are
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Overfitting".
- The value above which a neuron fires
- The junction where signals pass from one neuron to another
- Identifying objects in pictures using AI
+ When the network memorises training data and fails on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Convolutional neural network".
- Machine learning with deep neural networks
- A basic unit that receives inputs and gives an output
- A useful property of the data found by the network
+ A network designed for images
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Recurrent neural network".
- The junction where signals pass from one neuron to another
- A value such as a weight that the network learns
+ A network designed for sequences such as text
- A collection of examples used for training and testing
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Transformer".
+ A network that uses attention and is used in modern language models
- A network designed for sequences such as text
- A useful property of the data found by the network
- A neural network with many hidden layers
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Feature".
+ A useful property of the data found by the network
- Adjusting weights so that the network makes fewer errors
- The layer that receives the data
- A function that decides the output of a neuron
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Classification".
- Converting speech into text using AI
- A network designed for sequences such as text
- The size of each step taken while updating weights
+ Predicting the category of an input
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Image recognition".
- A collection of examples used for training and testing
- Adjusting weights so that the network makes fewer errors
+ Identifying objects in pictures using AI
- The part of a neuron that sends signals onward
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Speech recognition".
+ Converting speech into text using AI
- A layer between input and output that finds features
- A collection of examples used for training and testing
- A mathematical unit that takes inputs, applies weights and gives an output
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Black box".
- When the network memorises training data and fails on new data
- Predicting the category of an input
- A processor that speeds up neural network training
+ A system whose internal decisions are hard to explain
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Parameter".
- Identifying objects in pictures using AI
+ A value such as a weight that the network learns
- A function that decides the output of a neuron
- When the network memorises training data and fails on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Threshold".
- Identifying objects in pictures using AI
- Converting speech into text using AI
+ The value above which a neuron fires
- Predicting the category of an input
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Perceptron".
- A network designed for images
+ The simplest neural network with a single neuron
- A layer between input and output that finds features
- An activation that gives a value between 0 and 1
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Pixel".
- The size of each step taken while updating weights
- The processing capacity needed to train large networks
- The sum of each input multiplied by its weight
+ The smallest dot of a digital image
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Normalisation".
+ Scaling input values to a common range
- Machine learning with deep neural networks
- A processor that speeds up neural network training
- A method that changes weights step by step to reduce loss
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Dropout".
- The sum of each input multiplied by its weight
- When the network memorises training data and fails on new data
- A number that shows how wrong the predictions are
+ Randomly switching off neurons to reduce overfitting
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Dataset".
- The layer that gives the final result
+ A collection of examples used for training and testing
- One full pass through the training data
- Machine learning with deep neural networks
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Generalisation".
- A number that shows how important an input is
- The part of a neuron that receives signals
- A processor that speeds up neural network training
+ The ability of a model to work well on new data
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Forward propagation".
- An activation that gives zero for negative values and x otherwise
- The layer that gives the final result
+ Passing inputs through the layers to get the output
- Adjusting weights so that the network makes fewer errors
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Computing power".
+ The processing capacity needed to train large networks
- A basic unit that receives inputs and gives an output
- A neural network with many hidden layers
- The size of each step taken while updating weights
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "GPU".
- An activation that gives a value between 0 and 1
- A network that uses attention and is used in modern language models
+ A processor that speeds up neural network training
- An activation that gives zero for negative values and x otherwise
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Neurons in the brain".
+ About 86 billion nerve cells
- A nerve cell in the brain that carries signals
- Converting speech into text using AI
- An extra number added to the weighted sum
! From the CBSE Class 9 syllabus.
? Choose the correct meaning of "Deep learning".
+ Machine learning with deep neural networks
- The simplest neural network with a single neuron
- A basic unit that receives inputs and gives an output
- A value such as a weight that the network learns
! From the CBSE Class 9 syllabus.
? Weighted sum of inputs (2, 3) with weights (0.5, 0.2) and bias 1
- 2.08
+ 2.6
- 5.2
- 2.86
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (2, 3), weights (0.5, 0.2) and bias 1
- 1.3
- 2.86
+ 2.6
- 2.08
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (2, 3), weights (0.5, 0.2) and bias 1
- 2
+ 1
- 0
- 3
! Compare the sum with the threshold.
? Weighted sum of inputs (1, 4) with weights (0.3, 0.1) and bias 0
- 0.77
+ 0.7
- 0.63
- 0.88
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (1, 4), weights (0.3, 0.1) and bias 0
- 0.56
+ 0.7
- 1.4
- 0.88
! max(0, sum).
? Weighted sum of inputs (5, 2) with weights (0.2, 0.4) and bias 2
- 3.04
+ 3.8
- 11.4
- 1.9
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (5, 2), weights (0.2, 0.4) and bias 2
- 4.75
- 3.04
- 11.4
+ 3.8
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (5, 2), weights (0.2, 0.4) and bias 2
- 2
- 0
+ 1
- 3
! Compare the sum with the threshold.
? Weighted sum of inputs (3, 3) with weights (0.5, 0.5) and bias -1
- 2.2
+ 2
- 1.8
- 1
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (3, 3), weights (0.5, 0.5) and bias -1
- 2.2
+ 2
- 1.8
- 2.5
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (3, 3), weights (0.5, 0.5) and bias -1
- 3
- 2
+ 1
- 0
! Compare the sum with the threshold.
? Weighted sum of inputs (4, 1) with weights (0.25, 0.75) and bias 0.5
+ 2.25
- 2.81
- 4.5
- 1.8
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (4, 1), weights (0.25, 0.75) and bias 0.5
- 2.48
- 6.75
- 2.02
+ 2.25
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (4, 1), weights (0.25, 0.75) and bias 0.5
- 0
+ 1
- 3
- 2
! Compare the sum with the threshold.
? Weighted sum of inputs (6, 2) with weights (0.1, 0.3) and bias 1
- 1.98
- 1.76
- 1.1
+ 2.2
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (6, 2), weights (0.1, 0.3) and bias 1
- 6.6
- 1.1
+ 2.2
- 2.42
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (6, 2), weights (0.1, 0.3) and bias 1
- 2
+ 1
- 0
- 3
! Compare the sum with the threshold.
? Weighted sum of inputs (2, 2) with weights (1.5, 0.5) and bias -2
- 2.2
- 1
- 1.6
+ 2
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (2, 2), weights (1.5, 0.5) and bias -2
- 1.8
- 4
- 6
+ 2
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (2, 2), weights (1.5, 0.5) and bias -2
- 0
+ 1
- 3
- 2
! Compare the sum with the threshold.
? Weighted sum of inputs (0, 5) with weights (0.9, 0.2) and bias 3
- 4.4
- 5
- 3.6
+ 4
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (0, 5), weights (0.9, 0.2) and bias 3
- 3.6
- 3.2
- 2
+ 4
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (0, 5), weights (0.9, 0.2) and bias 3
+ 1
- 2
- 3
- 0
! Compare the sum with the threshold.
? Weighted sum of inputs (7, 1) with weights (0.2, 0.6) and bias -1
+ 1
- 1.25
- 3
- 0.9
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (7, 1), weights (0.2, 0.6) and bias -1
- 1.1
+ 1
- 0.5
- 2
! max(0, sum).
? Weighted sum of inputs (10, 4) with weights (0.1, 0.25) and bias 0.5
- 7.5
+ 2.5
- 2
- 3.12
! x1w1 + x2w2 + b.
? Output of a ReLU neuron whose weighted sum is that of inputs (10, 4), weights (0.1, 0.25) and bias 0.5
- 5
+ 2.5
- 2
- 2.75
! max(0, sum).
? Output of a step neuron (fires 1 if sum is at least 2) for inputs (10, 4), weights (0.1, 0.25) and bias 0.5
- 0
- 2
- 3
+ 1
! Compare the sum with the threshold.
? ReLU of 3
+ 3
- 6
- 1.5
- 3.3
! max(0, x).
? ReLU of 8
- 8.8
- 24
- 10
+ 8
! max(0, x).
? ReLU of 4.5
- 13.5
- 2.25
+ 4.5
- 9
! max(0, x).
@visual
layers | Neural network layers | Output layer; Hidden layers; Input layer
flow | One neuron | Inputs; Multiply by weights; Add bias; Activation function; Output
compare | Biological and artificial neuron | Biological=Dendrites, cell body, axon~Passes signals by chemicals~Billions in the brain; Artificial=Inputs, weights, activation~Passes numbers~Built in software
@problems
P: A neuron has inputs 2 and 3 with weights 0.5 and 0.2 and bias 1. Find the weighted sum.
A: 2 x 0.5 + 3 x 0.2 + 1 = 2.6.
R: 1 | Multiply inputs and weights
R: 1 | 2.6

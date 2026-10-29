# Deep learning: CNN, RNN and transformers; generative AI
minutes: 35
yt: CNN convolutional neural network explained
yt: transformer attention is all you need explained
yt: large language models how they work
@study
**Deep learning** uses neural networks with many layers to learn features automatically from raw data. It needs large datasets and GPUs.

## Convolutional Neural Networks (CNN) — images
- **Convolution layer:** small filters (kernels, e.g. 3×3) slide over the image to detect edges, textures, then shapes in deeper layers. Weights are shared, so there are far fewer parameters than a fully connected layer.
- **Pooling layer:** reduces size (max pooling keeps the strongest response).
- **Fully connected layers** at the end classify.
Output size for input n, kernel f, padding p, stride s: ⌊(n + 2p − f)/s⌋ + 1. Example: 28×28 image, 3×3 kernel, no padding, stride 1 → 26×26.
Famous models: LeNet, AlexNet, VGG, ResNet. Tasks: classification, object detection (YOLO), segmentation, face recognition.

## Recurrent networks — sequences
**RNN** processes sequences step by step with a hidden state as memory. They suffer vanishing gradients on long sequences, solved by **LSTM** and **GRU** gates. Used for speech, time series and old translation systems.

## Transformers
Introduced in "Attention Is All You Need" (2017). **Self-attention** lets every token look at every other token and weigh its importance: Attention(Q, K, V) = softmax(QKᵀ/√d)V. Because tokens are processed in parallel, training scales well. Positional encodings tell the model the order.
- **Encoder models** (BERT) understand text.
- **Decoder models** (GPT-style) generate text.

## Large language models (LLMs) and generative AI
LLMs are transformers trained on huge text to predict the next token, then **fine-tuned** and aligned with human feedback (RLHF). They can answer, summarise, translate and write code. Limitations: **hallucination** (confident wrong answers), bias, outdated knowledge, and cost. Techniques: prompt engineering, retrieval-augmented generation (RAG), fine-tuning.
Other generative models: GANs, diffusion models (image generation), VAEs.

## Transfer learning
Reuse a model pretrained on a large dataset and adapt it to your small dataset: faster and more accurate.

## Edge AI and TinyML
Running small models on microcontrollers and phones (TensorFlow Lite) for keyword spotting, anomaly detection and gesture recognition in IoT devices without cloud delay.

## Ethics and safety
Bias and fairness, privacy and consent, deepfakes, copyright, explainability, environmental cost of training, and human oversight.

> CNN for images, RNN/LSTM for sequences, Transformers for language and almost everything now.
@qa
Q: Why are CNNs better than fully connected networks for images?
A: Convolution filters share weights and exploit local patterns, which greatly reduces parameters and preserves spatial structure.
Q: What does pooling do?
A: It downsamples feature maps (for example by taking the maximum in each window), reducing computation and giving some translation invariance.
Q: What problem do LSTMs solve?
A: The vanishing gradient problem of simple RNNs, allowing them to remember information over long sequences using gates.
Q: What is self-attention?
A: A mechanism in which each token computes weights over all tokens in the sequence to decide which are most relevant, enabling parallel processing and long-range dependencies.
Q: What is hallucination in an LLM?
A: When a language model generates fluent but incorrect or invented information.
@quiz
? A 28×28 image with a 3×3 kernel, stride 1 and no padding gives output
- 28×28
- 27×27
+ 26×26
- 25×25
! (28 − 3)/1 + 1 = 26.
? Transformers rely on
- recurrence
+ self-attention
- pooling only
- decision trees
! Attention lets tokens interact in parallel.
? LSTM was designed to fix
+ vanishing gradients in RNNs
- overfitting in trees
- clustering
- search
! Gates keep long-term memory.
? Transfer learning means
- training from scratch
+ reusing a pretrained model for a new task
- removing layers
- only using CPUs
! Saves data and time.
? TinyML runs models on
- supercomputers
+ microcontrollers
- data centres only
- mainframes
! Small models on tiny devices.

@visual
flow | A convolutional neural network | Input image > Convolution with ReLU > Pooling > Convolution and pooling > Flatten > Fully connected layer > Class scores

@problems
## Moderate
P: A 32 x 32 input is convolved with a 5 x 5 filter, stride 1. Find the output size with no padding and with padding 2. State the formula.
A: Output = (n - f + 2p) / s + 1. No padding: (32 - 5 + 0) / 1 + 1 = 28, so 28 x 28. Padding 2: (32 - 5 + 4) / 1 + 1 = 32, so 32 x 32 (same size).
R: 2 | Formula
R: 2 | 28 and 32
## High
P: A convolution layer has 6 filters of size 5 x 5 on a 3-channel image. Count its parameters. Compare with a fully connected layer from 32 x 32 x 3 inputs to 6 x 28 x 28 outputs.
A: Conv parameters = (5 x 5 x 3 + 1) x 6 = 76 x 6 = 456. Fully connected: 3072 inputs x 4704 outputs = 14,450,688 weights. A convolution reuses the same small filter everywhere (weight sharing), so it needs far fewer parameters.
R: 2 | 456 parameters
R: 2 | 14,450,688 weights
R: 1 | Weight sharing explained
## Advanced
P: Compare RNNs and Transformers. Write the self-attention formula and say why Transformers train faster on long text.
A: An RNN reads tokens one at a time and passes a hidden state, so it is sequential and has trouble remembering far-back information. A Transformer lets every token attend to every other token. Attention = softmax(Q K^T / sqrt(d_k)) V, where Q, K and V are the query, key and value matrices.
Transformers process all positions in parallel on GPUs and connect distant tokens directly, so training is faster and long-range dependencies are easier; the cost is that attention grows with the square of the sequence length.
R: 2 | RNN versus Transformer difference
R: 2 | Attention formula
R: 1 | Parallelism reason

# RNN, LSTM and attention
minutes: 30
yt: lstm explained attention is all you need
@study
**RNNs** process sequences by keeping a hidden state h_t = tanh(W_x x_t + W_h h_(t-1) + b). Training uses backpropagation through time; gradients vanish or explode over long sequences.
**LSTM** adds a **cell state** and three gates (forget, input, output) that decide what to erase, write and reveal, so it remembers long-range information. Parameter count for hidden size h and input size x: 4 (h (h + x) + h). For h = 64 and x = 32: 4 (64 x 96 + 64) = **24,832**. **GRU** uses two gates and is lighter.
## Attention and transformers
**Scaled dot-product attention:** Attention(Q, K, V) = softmax(Q K^T / sqrt(d)) V. Example with Q = [1, 0], K = [[1, 0], [0, 1]], V = [[1, 2], [3, 4]], d = 2: scores [0.707, 0] -> softmax [0.670, 0.330] -> output [1.660, 2.660]. **Self-attention** lets every token look at all others in parallel; **multi-head attention** repeats it with different projections; positional encodings add order information. The **transformer** (encoder, decoder) replaced RNNs for most NLP tasks and underlies BERT and GPT-style models.
```python
import numpy as np
Q = np.array([1, 0.]); K = np.eye(2); V = np.array([[1, 2], [3, 4.]])
s = Q @ K.T / np.sqrt(2); p = np.exp(s) / np.exp(s).sum()
print(p.round(3), (p @ V).round(3))   # [0.67 0.33] [1.66 2.66]
```
## Hindi saransh
RNN purani jaankari hidden state mein rakhta hai; LSTM gates se lambi yaaddasht sambhalta hai. Attention = softmax(QK^T/sqrt(d))V; transformer mein sab tokens parallel mein ek doosre ko dekhte hain.
> Transformers process tokens in parallel; RNNs process them one at a time.
@qa
Q: Why do plain RNNs struggle with long sequences?
A: Gradients shrink (or blow up) as they pass through many time steps, so early information is lost.
Q: What are the three LSTM gates?
A: Forget, input and output gates.
Q: Why divide by sqrt(d) in attention?
A: To stop dot products growing with dimension, which would make softmax saturate and gradients tiny.
Q: Why are transformers faster to train than RNNs?
A: All positions are processed in parallel instead of sequentially.
@quiz
? Parameters of an LSTM with h = 64 and x = 32 are
- 12,416
+ 24,832
- 6,208
- 98,304
! 4 x (64 x 96 + 64).
? Attention weights in the example are about
- [0.5, 0.5]
+ [0.67, 0.33]
- [1, 0]
- [0.33, 0.67]
! softmax([0.707, 0]).
? The sqrt(d) in attention is for
- speed
+ numerical stability
- memory
- regularisation
! Keeps softmax from saturating.
? Which model uses self-attention?
- LSTM
- CNN
+ Transformer
- Naive Bayes
! Transformers.
@visual
formula | Attention | Attention(Q, K, V) = softmax(Q K^T / sqrt(d)) V
flow | LSTM cell | Forget gate removes > Input gate writes > Cell state updates > Output gate reveals > New hidden state
@problems
## Moderate
P: Name the gates of an LSTM and what each does.
A: Forget (erase memory), input (write new memory), output (decide what to reveal).
R: 2 | Names
R: 1 | Roles
## High
P: Compute the number of parameters of an LSTM layer with hidden size 64 and input size 32.
A: 4 x (64 x (64 + 32) + 64) = 24,832.
R: 2 | Formula
R: 1 | 24,832
## Advanced
P: Compute attention output for Q = [1, 0], K = [[1, 0], [0, 1]], V = [[1, 2], [3, 4]], d = 2.
A: Scores [0.707, 0]; softmax [0.670, 0.330]; output 0.67 [1, 2] + 0.33 [3, 4] = [1.660, 2.660].
R: 2 | Scores and softmax
R: 2 | Output

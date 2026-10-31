# Reinforcement learning and generative models
minutes: 25
yt: reinforcement learning q learning explained
@study
## Reinforcement learning (RL)
An **agent** takes **actions** in an **environment**, receives **rewards** and learns a **policy** that maximises the cumulative discounted return G = r1 + gamma r2 + gamma^2 r3 + ... **Markov decision process:** states, actions, transitions, rewards. **Q-learning** updates Q(s, a) <- Q(s, a) + alpha [ r + gamma max Q(s', a') - Q(s, a) ]. Example: Q = 0, alpha = 0.5, r = 1, gamma = 0.9, next max Q = 2: new Q = 0 + 0.5 (1 + 1.8 - 0) = **1.4**. **Exploration vs exploitation** is handled with epsilon-greedy. Deep RL (DQN, policy gradients, PPO) powers game-playing and robotics; RLHF tunes language models with human feedback.
## Generative models
- **Autoencoder / VAE:** compress to a latent code and reconstruct; VAEs sample new data.
- **GAN:** a generator and a discriminator compete.
- **Diffusion models:** learn to remove noise step by step; behind many image generators.
- **Large language models:** transformers trained to predict the next token, then fine-tuned.
```python
Q, alpha, r, gamma, nxt = 0, 0.5, 1, 0.9, 2
Q = Q + alpha * (r + gamma * nxt - Q); print(Q)   # 1.4
```
## Hindi saransh
RL mein agent reward se seekhta hai; Q-learning update: Q += alpha(r + gamma maxQ' - Q). Example mein Q = 1.4. Generative models naya data banate hain (GAN, diffusion, LLM).
> Epsilon-greedy: with probability epsilon explore randomly, otherwise take the best known action.
@qa
Q: What is the Q-learning update?
A: Q(s,a) <- Q(s,a) + alpha [ r + gamma max Q(s',a') - Q(s,a) ].
Q: What is the exploration-exploitation trade-off?
A: Trying new actions to learn more versus using the best known action to earn reward.
Q: How do GANs train?
A: A generator creates fake samples and a discriminator tries to tell real from fake; each improves against the other.
Q: What does a discount factor gamma do?
A: It weights future rewards less than immediate ones.
@quiz
? Q after the update with alpha 0.5, r 1, gamma 0.9, next max Q 2 is
- 1.0
+ 1.4
- 2.8
- 0.5
! 0.5 x (1 + 1.8).
? Epsilon-greedy balances
+ exploration and exploitation
- bias and variance
- precision and recall
- speed and memory
! Random vs best action.
? A GAN has
- two encoders
+ a generator and a discriminator
- only a classifier
- one decoder
! Adversarial training.
? Diffusion models generate data by
- clustering
+ removing noise step by step
- decision trees
- hashing
! Reverse of the noising process.
@visual
flow | RL loop | Agent observes state > Chooses action > Environment gives reward and next state > Agent updates its policy
@problems
## Moderate
P: Compute the discounted return for rewards 1, 1, 1 with gamma 0.9.
A: 1 + 0.9 + 0.81 = 2.71.
R: 1 | Formula
R: 1 | 2.71
## High
P: Apply one Q-learning update with Q = 0, alpha = 0.5, r = 1, gamma = 0.9 and max Q' = 2.
A: Q = 0.5 x (1 + 1.8) = 1.4.
R: 2 | Formula
R: 1 | 1.4
## Advanced
P: Compare supervised, unsupervised and reinforcement learning with examples.
A: Supervised: labelled data (spam detection). Unsupervised: no labels (customer clustering). Reinforcement: learning from rewards by interacting (game or robot control).
R: 2 | Three types
R: 2 | Examples

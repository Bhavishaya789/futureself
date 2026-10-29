# What is AI? History, types and intelligent agents
minutes: 30
yt: artificial intelligence introduction history turing test agents
yt: intelligent agents PEAS environment types
@study
**Artificial Intelligence (AI)** is the science of making machines do tasks that normally need human intelligence: perceiving, reasoning, learning, deciding and using language.

## Four views of AI
| Thinks | Acts |
| --- | --- |
| Human-like: cognitive modelling | Human-like: **Turing test** |
| Rational: laws of thought (logic) | Rational: **rational agent** (modern view) |
The **Turing test** (1950): a machine passes if a human interrogator cannot tell its answers from a human's.

## Short history
1943 artificial neuron model; 1950 Turing's paper; **1956 Dartmouth workshop** coins "Artificial Intelligence"; 1960s–70s early optimism, then the first **AI winter**; 1980s expert systems; 1997 Deep Blue beats Kasparov; 2012 deep learning wins ImageNet; 2016 AlphaGo; 2017 Transformer architecture; 2020s large language models and generative AI.

## Types
- **Narrow (weak) AI:** one task (spam filter, face unlock, chess). All AI today.
- **General AI (AGI):** human-level across tasks (not yet achieved).
- **Super-intelligence:** beyond humans (hypothetical).
By function: reactive machines, limited memory, theory of mind, self-aware (the last two are research ideas).

## Intelligent agents
An **agent** perceives its environment through **sensors** and acts through **actuators**. A **rational agent** picks the action expected to maximise its performance measure.
Describe a task with **PEAS**: Performance measure, Environment, Actuators, Sensors.
Example, self-driving car: P = safety, speed, comfort; E = roads, traffic, pedestrians; A = steering, brake, horn; S = cameras, lidar, GPS.

### Agent types (increasing sophistication)
1. **Simple reflex:** condition–action rules.
2. **Model-based reflex:** keeps internal state.
3. **Goal-based:** plans to reach goals.
4. **Utility-based:** chooses the best among many ways using a utility function.
5. **Learning agent:** improves with experience.

### Environment properties
Fully vs partially observable; deterministic vs stochastic; episodic vs sequential; static vs dynamic; discrete vs continuous; single vs multi-agent. Chess: fully observable, deterministic, discrete. Taxi driving: partially observable, stochastic, dynamic, continuous.

## AI applications
Healthcare imaging, recommendation systems, fraud detection, voice assistants, robotics, agriculture, smart cities and IoT analytics.

## Responsible AI
Bias in data, privacy, transparency (explainability), accountability, job impact, and safety.

> A rational agent does the right thing given what it knows.
@qa
Q: What is artificial intelligence?
A: The field of building machines or software that perform tasks requiring human-like intelligence such as learning, reasoning, perception and language understanding.
Q: What is the Turing test?
A: A test proposed by Alan Turing in which a machine is considered intelligent if a human judge cannot reliably tell its conversation apart from a human's.
Q: What does PEAS stand for?
A: Performance measure, Environment, Actuators and Sensors, used to specify an agent's task.
Q: Difference between a simple reflex agent and a goal-based agent?
A: A simple reflex agent reacts to the current percept using fixed rules; a goal-based agent considers future consequences and plans actions to reach a goal.
Q: What is narrow AI?
A: AI designed for a specific task, such as image recognition or translation; all current systems are narrow.
@quiz
? The term "Artificial Intelligence" was coined at
- 1943 McCulloch-Pitts
- 1950 Turing paper
+ the 1956 Dartmouth workshop
- 2012 ImageNet
! John McCarthy and colleagues named the field in 1956.
? In PEAS, "S" stands for
- Speed
+ Sensors
- Software
- State
! Sensors let the agent perceive.
? An agent that keeps an internal model of the world is
- simple reflex
+ model-based
- random
- none
! It tracks unobserved aspects of the world.
? Chess is
- partially observable
+ fully observable and deterministic
- continuous
- stochastic
! The whole board is visible and moves have fixed outcomes.
? Today's AI systems are
- general AI
- super-intelligent
+ narrow AI
- conscious
! They are specialised in particular tasks.

@visual
timeline | A short history of AI | 1950=Turing proposes the imitation game; 1956=Dartmouth workshop names the field; 1997=Deep Blue beats the chess champion; 2012=Deep learning wins the ImageNet contest; 2017=Transformer architecture introduced

@problems
## Moderate
P: Define Artificial Intelligence and list four approaches (thinking or acting, humanly or rationally).
A: AI is the study and design of machines that perceive their environment and take actions to achieve goals, behaving intelligently. Four approaches: thinking humanly (cognitive modelling), thinking rationally (laws of thought, logic), acting humanly (the Turing test) and acting rationally (rational agents), which is the most common modern view.
R: 2 | Definition
R: 2 | Four approaches named
## High
P: Write the PEAS description for an automatic vacuum cleaner robot.
A: Performance measure: amount of dirt cleaned, time and energy used, safety. Environment: rooms, floor, furniture, people and pets. Actuators: wheels, brushes, vacuum motor. Sensors: dirt sensor, bump sensor, cliff sensor, camera or lidar.
R: 2 | Performance measure and environment
R: 2 | Actuators and sensors
## Advanced
P: Compare simple reflex, model-based reflex, goal-based, utility-based and learning agents using the vacuum cleaner as the example.
A: Simple reflex: if the square is dirty then clean, based only on the current percept. Model-based: remembers which rooms are already cleaned. Goal-based: plans a route to reach the goal of all rooms clean. Utility-based: chooses the plan that balances cleanliness, battery and speed (higher utility). Learning agent: improves its behaviour from experience, for example learns where dirt appears most.
R: 3 | Five agent types with correct descriptions
R: 2 | Vacuum cleaner example for each

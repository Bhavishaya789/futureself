# Edge and fog computing, gateways and TinyML
minutes: 30
yt: edge computing vs cloud computing vs fog computing iot
yt: tinyml tensorflow lite microcontroller
@study
## Why not send everything to the cloud?
- **Latency:** a brake or safety system cannot wait 200 ms for a cloud reply.
- **Bandwidth and cost:** raw video from a thousand cameras is huge.
- **Reliability:** the network may fail.
- **Privacy:** keep sensitive data local.

## Edge, fog and cloud
- **Edge computing:** processing on the device or right next to it (microcontroller, gateway).
- **Fog computing:** an intermediate layer of gateways/local servers between devices and cloud.
- **Cloud computing:** large-scale storage and heavy analytics.
Typical split: filter and react at the edge (milliseconds), aggregate in fog (seconds), long-term learning in cloud (hours or days).

## Gateways
A gateway connects devices using local protocols (BLE, Zigbee, LoRa) to IP networks and the cloud. It can translate protocols, buffer data during outages, run rules and apply security.

## Edge analytics example
A vibration sensor samples at 1 kHz. Sending 1,000 readings/second is wasteful. The edge device computes a feature (RMS value) each second and sends only that, or an alert when it exceeds a threshold. Data volume drops by about 1000 times.

## TinyML
Running machine-learning models on microcontrollers with kilobytes of memory.
- Train on a PC (TensorFlow/Keras, Edge Impulse), **quantise** weights to 8 bits, convert to **TensorFlow Lite for Microcontrollers**, and deploy as a C array.
- Use cases: wake-word detection, gesture recognition (accelerometer), anomaly detection in motors, people counting.
- Benefits: low latency, low power, works offline, privacy.
- Limits: tiny models and memory, reduced accuracy.

## Simple edge filter (simulated)
```python
import statistics
samples = [0.2, 0.3, 0.2, 0.25, 4.0, 0.3, 0.2]   # one spike
clean = [s for s in samples if abs(s - statistics.median(samples)) < 1]
print(clean, round(sum(clean) / len(clean), 3))
```
Output:
```
[0.2, 0.3, 0.2, 0.25, 0.3, 0.2] 0.242
```

## Real-time operating systems
FreeRTOS and Zephyr schedule tasks with deadlines on MCUs (see Operating Systems: scheduling).

## Fog use cases
Smart factory (local control loops), connected vehicles, smart grid, video analytics at the camera.

> Do the urgent work near the data; send the summary to the cloud.
@qa
Q: Why is edge computing used in IoT?
A: It reduces latency, bandwidth use and cost, keeps working during network failure, and improves privacy by processing data locally.
Q: Difference between edge and fog computing?
A: Edge computing processes data on or very near the device; fog computing uses an intermediate layer of gateways or local servers between the edge and cloud.
Q: What is TinyML?
A: Machine learning models optimised to run on very small, low-power microcontrollers.
Q: What is quantisation?
A: Reducing the precision of model weights (for example from 32-bit floats to 8-bit integers) to shrink size and speed up inference with small accuracy loss.
Q: What functions can an IoT gateway perform?
A: Protocol translation, local processing and rules, buffering when offline, security enforcement and forwarding to the cloud.
@quiz
? Processing closest to the sensor is
+ edge computing
- cloud only
- batch computing
- grid computing
! It happens on the device or nearby.
? TinyML models are usually
- huge
+ quantised and small
- stored in the cloud only
- 64-bit
! They fit in kilobytes.
? A gateway can
- only store passwords
+ translate between local protocols and IP
- print documents
- paint PCBs
! It bridges two networks.
? FreeRTOS is a
- sensor
+ real-time operating system
- database
- protocol
! Used on microcontrollers like ESP32.
? Sending only RMS values instead of raw samples mainly saves
- sensors
+ bandwidth
- batteries only
- lines of code
! Data volume reduces a lot.

@visual
compare | Where the processing happens | Edge=On the device or next to it~Lowest delay, works offline~Limited power; Fog=A nearby gateway or local server~Combines data from many devices~Medium delay; Cloud=Far-away data centres~Huge storage and compute~Higher delay and cost

@problems
## Moderate
P: Differentiate edge, fog and cloud computing in IoT.
A: Edge computing processes data on the device or very close to it. Fog computing uses nearby gateways or local servers between the devices and the cloud. Cloud computing uses remote data centres with large storage and computing power. Moving from edge to cloud increases power and delay.
R: 2 | Edge and fog
R: 2 | Cloud and the delay trade-off
## High
P: 1000 sensors each send 1 KB per second to the cloud. If an edge gateway sends only a 1 KB summary per sensor every minute, find the data sent per second in both cases and the reduction.
A: Raw: 1000 x 1 KB = 1000 KB per second. With edge summaries: 1000 KB every 60 s = 16.7 KB per second. Reduction = 1 - 16.7 / 1000 = about 98.3%. Edge processing also reduces latency and cost.
R: 2 | 1000 KB per second raw
R: 2 | 16.7 KB per second
R: 1 | About 98 percent reduction
## Advanced
P: What is TinyML? A model is 250 KB in 32-bit floating point. What is its size after 8-bit quantisation? Give one use case and one limitation.
A: TinyML runs machine learning models on very small, low-power microcontrollers. 8-bit quantisation stores each weight in 1 byte instead of 4, so the model becomes 250 / 4 = 62.5 KB. Use case: keyword spotting or detecting vibration anomalies in a motor without sending data to the cloud. Limitation: small memory and compute, so models are small and may lose some accuracy.
R: 2 | TinyML defined
R: 2 | 62.5 KB
R: 1 | Use case and limitation

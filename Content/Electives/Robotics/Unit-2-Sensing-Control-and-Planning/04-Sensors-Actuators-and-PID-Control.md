# Sensors, actuators and PID control
minutes: 30
yt: PID controller explained
yt: robot sensors encoders lidar imu
@study
## Sensors
- **Proprioceptive** (internal state): encoders (joint angle), IMU (acceleration + rotation), current sensors.
- **Exteroceptive** (the world): ultrasonic and infrared distance sensors, **LiDAR**, cameras, depth cameras, force/torque sensors, GPS.
- Sensors are noisy; **sensor fusion** (for example a Kalman filter combining IMU and wheel odometry) gives a better estimate.
- Ultrasonic distance = speed of sound x time / 2. With 343 m/s and an echo after 5.83 ms: 343 x 0.00583 / 2 = **1.0 m**.

## Actuators
DC motors, **servo motors** (position controlled), stepper motors (move in fixed steps; 1.8 degree step gives 200 steps per revolution), hydraulic and pneumatic actuators. Gearboxes reduce speed and raise torque.

## Feedback control
The controller compares the **setpoint** with the **measured** value and drives the **error** e = setpoint - measured to zero.

### PID controller
u = Kp e + Ki integral(e dt) + Kd de/dt
- **P:** reacts to the present error; too high gives oscillation, too low is slow and leaves a steady-state error.
- **I:** removes steady-state error; too high causes overshoot and windup.
- **D:** damps by reacting to the rate of change; sensitive to noise.

### Simulation (position control of a motor)
Target position 1. Plant: vel += (u - 0.8 vel) dt and pos += vel dt, with Kp = 2, Ki = 0.5, Kd = 0.1, dt = 0.1.
```python
kp, ki, kd, dt = 2, 0.5, 0.1, 0.1
pos = vel = integ = mx = 0.0; prev = 1.0   # prev = first error, so no derivative kick
for _ in range(60):
    e = 1 - pos; integ += e * dt; u = kp * e + ki * integ + kd * (e - prev) / dt; prev = e
    vel += (u - 0.8 * vel) * dt; pos += vel * dt; mx = max(mx, pos)
print(round(mx, 3), round(pos, 3))   # 1.557 1.035
```
The position overshoots to 1.557 (a 56% overshoot) and then settles towards 1 (1.035 after 60 steps, still settling).

## Tuning (Ziegler-Nichols idea)
Raise Kp until steady oscillation, then set Kp, Ki, Kd from that gain and the oscillation period. In practice, tune P first, then D, then I.

## Hindi saransh
Sensor do tarah ke hote hain: andar ki state (encoder, IMU) aur bahar ki duniya (LiDAR, camera). PID: u = Kp e + Ki integral(e) + Kd de/dt. P present, I past, D future error ko sambhalta hai.

> P = present error, I = accumulated past error, D = predicted future error.
@qa
Q: What is the difference between proprioceptive and exteroceptive sensors?
A: Proprioceptive sensors measure the robot's internal state (encoders, IMU); exteroceptive sensors measure the environment (LiDAR, camera).
Q: What does the integral term do in a PID controller?
A: It sums past error to remove steady-state error, but too much integral action causes overshoot and integrator windup.
Q: Why divide by 2 in ultrasonic ranging?
A: The echo travels to the object and back, so the one-way distance is half the total path.
Q: How many steps per revolution does a stepper with a 1.8 degree step angle have?
A: 360 / 1.8 = 200 steps.
Q: Why use sensor fusion?
A: Each sensor has noise and weaknesses; combining them (for example with a Kalman filter) gives a more accurate and reliable estimate.
@quiz
? Distance for an ultrasonic echo time of 5.83 ms (speed 343 m/s) is about
- 0.5 m
+ 1.0 m
- 2.0 m
- 4.0 m
! 343 x 0.00583 / 2 = 1.0 m.
? The term that removes steady-state error is
- P
+ I
- D
- None
! The integral accumulates the remaining error.
? A stepper motor with 1.8 degree steps has
- 100 steps per revolution
+ 200 steps per revolution
- 360 steps per revolution
- 18 steps per revolution
! 360 / 1.8 = 200.
? Which is an exteroceptive sensor?
- Encoder
- IMU
+ LiDAR
- Motor current sensor
! LiDAR senses the environment.
? Too high a Kp usually causes
- slow response
+ oscillation
- zero error
- lower noise
! High gain overshoots and rings.
@visual
flow | Feedback control loop | Setpoint > Error = setpoint - measurement > PID controller > Actuator > Robot or plant > Sensor feedback
formula | PID | u = Kp e + Ki integral of e + Kd de/dt
@problems
## Moderate
P: A lidar-free ultrasonic sensor measures an echo time of 11.66 ms with a sound speed of 343 m/s. What is the distance?
A: Distance = 343 x 0.01166 / 2 = 2.0 m.
R: 1 | Divides by two
R: 1 | 2.0 m
## High
P: A P-only controller with Kp = 2 drives a motor and leaves a steady error of 0.3 rad. Which term fixes it and what is a risk?
A: Add an integral term, which accumulates the error and pushes the output until the error is zero. The risk is overshoot and integrator windup when the actuator saturates.
R: 2 | Integral term
R: 2 | Risk of overshoot or windup
## Advanced
P: Describe how Kp, Ki and Kd each affect rise time, overshoot and steady-state error, and give a tuning order.
A: Increasing Kp shortens rise time but increases overshoot and leaves a smaller steady error. Increasing Ki removes steady error but raises overshoot and slows settling. Increasing Kd reduces overshoot and settling time but amplifies noise. Tuning order: set Ki = Kd = 0 and raise Kp until the response is quick; add Kd to damp; add a little Ki to remove the remaining error.
R: 3 | Effects of the three gains
R: 3 | Sensible tuning order

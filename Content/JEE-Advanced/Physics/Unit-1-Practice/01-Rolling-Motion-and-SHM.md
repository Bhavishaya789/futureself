# Rolling motion and simple harmonic motion (exam-style practice)
minutes: 25
yt: jee advanced rolling motion shm
@study
These are exam-style practice ideas, **not official past papers**. Check the latest syllabus and brochure on the official JEE Advanced website.
**Rolling without slipping:** a body of mass m, radius R and moment of inertia I = k m R² has acceleration down an incline a = g sin(theta)/(1 + k). Solid sphere k = 2/5, so a = (5/7) g sin(theta). For theta = 30 degrees and g = 10 m/s²: a = (5/7) x 10 x 0.5 = **3.57 m/s²**. Disc k = 1/2, ring k = 1: a ring is slowest, a solid sphere is fastest.
**SHM:** a mass m on a spring of constant k oscillates with omega = sqrt(k/m) and T = 2 pi/omega. For k = 200 N/m and m = 2 kg: omega = **10 rad/s** and T = 0.628 s. Maximum speed = A omega, maximum acceleration = A omega².
**Energy:** total energy in SHM = (1/2) k A², constant; it swaps between kinetic and potential energy.
```python
import math
print(round(5 / 7 * 10 * 0.5, 2), math.sqrt(200 / 2), round(2 * math.pi / 10, 3))   # 3.57 10.0 0.628
```
## Hindi saransh
Rolling mein a = g sin(theta)/(1 + k); thos gole ke liye 5/7 g sin(theta). SHM mein omega = sqrt(k/m).
> The object with the smaller k reaches the bottom first.
@qa
Q: Acceleration of a solid sphere rolling down a 30 degree incline (g = 10)?
A: 3.57 m/s².
Q: Angular frequency for k = 200 N/m and m = 2 kg?
A: 10 rad/s.
Q: Which reaches the bottom first: ring, disc or solid sphere?
A: The solid sphere (smallest k).
Q: Total energy in SHM?
A: (1/2) k A².
@quiz
? Acceleration of a solid sphere rolling without slipping on a 30 degree incline (g = 10 m/s²)
- 5.0 m/s²
+ 3.57 m/s²
- 2.5 m/s²
- 6.67 m/s²
! (5/7) x 10 x 0.5.
? Angular frequency of a 2 kg mass on a 200 N/m spring
- 100 rad/s
- 14.1 rad/s
+ 10 rad/s
- 1 rad/s
! sqrt(k/m).
? Among ring, disc and solid sphere on the same incline, the slowest is the
+ ring
- disc
- solid sphere
- all equal
! Largest k.
? In SHM the total energy
+ stays constant
- doubles each cycle
- is zero at the mean position
- equals the kinetic energy always
! (1/2) k A².
@visual
formula | Rolling and SHM | a = g sin(theta) / (1 + k) ; omega = sqrt(k_spring / m)
@problems
## Moderate
P: Find the time period of a 2 kg mass on a 200 N/m spring.
A: omega = 10 rad/s, T = 2 pi/10 = 0.628 s.
R: 1 | omega
R: 1 | 0.628 s
## High
P: Find the acceleration of a ring rolling down a 30 degree incline (g = 10).
A: k = 1, a = g sin(theta)/2 = 10 x 0.5/2 = 2.5 m/s².
R: 1 | k = 1
R: 2 | 2.5 m/s²
## Advanced
P: A particle in SHM has amplitude 0.1 m and omega = 10 rad/s. Find its maximum speed and acceleration.
A: v_max = A omega = 1 m/s; a_max = A omega² = 10 m/s².
R: 2 | v_max
R: 2 | a_max

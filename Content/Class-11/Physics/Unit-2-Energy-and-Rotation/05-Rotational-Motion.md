# System of particles and rotational motion
minutes: 25
yt: moment of inertia torque class 11
@study
Rotation uses angular analogues of linear quantities.
| Linear | Rotational |
| --- | --- |
| displacement s | angle theta |
| velocity v | angular velocity w (v = w r) |
| acceleration a | angular acceleration alpha (a = alpha r) |
| mass m | moment of inertia I |
| force F | torque tau = r F sin t |
| F = m a | tau = I alpha |
| KE = m v^2 / 2 | KE = I w^2 / 2 |
| momentum p | angular momentum L = I w |

**Moment of inertia:** ring MR^2, disc MR^2/2, solid sphere 2MR^2/5, rod about centre ML^2/12. **Parallel axis theorem:** I = I_cm + M d^2. **Perpendicular axis (planar bodies):** I_z = I_x + I_y.

### Examples
- Disc M = 2 kg, R = 0.5 m: I = (1/2)(2)(0.25) = **0.25 kg m^2**. A torque 5 N m gives alpha = 5/0.25 = **20 rad/s^2**.
- Rolling without slipping from height h: v = sqrt(2 g h / (1 + I/MR^2)). Solid cylinder (I = MR^2/2): v = sqrt(4 g h / 3). For h = 1.5 m, g = 10: **4.47 m/s**.

## Conservation of angular momentum
With no external torque L is constant: a skater pulls arms in, I decreases and w increases.

## Hindi saransh
Rotation mein tau = I alpha, KE = I w^2 / 2, L = I w. Disc ka I = MR^2/2. Torque zero ho to angular momentum conserve.

> A body of larger I is harder to spin; I depends on the axis chosen.
@qa
Q: Define torque.
A: The turning effect of a force: tau = r F sin t.
Q: Moment of inertia of a disc about its axis?
A: MR^2 / 2.
Q: State parallel axis theorem.
A: I = I_cm + M d^2.
Q: Why does a skater spin faster when pulling in the arms?
A: Angular momentum L = I w is conserved; I falls, so w rises.
@quiz
? Angular acceleration of a disc (M = 2 kg, R = 0.5 m) under torque 5 N m is
- 2 rad/s^2
- 10 rad/s^2
+ 20 rad/s^2
- 40 rad/s^2
! I = 0.25, alpha = 5 / 0.25 = 20.
? Moment of inertia of a solid sphere about a diameter
- MR^2
- MR^2/2
+ 2MR^2/5
- MR^2/3
! Standard result.
? Speed of a solid cylinder rolling down from h = 1.5 m (g = 10) is
- 3.87 m/s
+ 4.47 m/s
- 5.48 m/s
- 6.0 m/s
! sqrt(4 x 10 x 1.5 / 3) = sqrt(20).
? If no external torque acts, which quantity is conserved?
- torque
+ angular momentum
- angular velocity
- moment of inertia
! L = I w stays constant.
@visual
compare | Linear and rotational | Linear=m, F, a, v~F = m a~KE = m v^2/2; Rotational=I, tau, alpha, w~tau = I alpha~KE = I w^2/2
formula | Moment of inertia | disc = M R^2 / 2 ; ring = M R^2 ; solid sphere = 2 M R^2 / 5
@problems
## Moderate
P: Find the moment of inertia of a ring of mass 1 kg and radius 0.2 m about its axis.
A: I = M R^2 = 1 x 0.04 = 0.04 kg m^2.
R: 1 | Formula
R: 1 | 0.04
## High
P: A disc (M = 2 kg, R = 0.5 m) is acted on by a torque of 5 N m. Find alpha and the angular velocity after 3 s from rest.
A: I = 0.25; alpha = 20 rad/s^2; w = 60 rad/s.
R: 2 | alpha
R: 1 | w = 60 rad/s
## Advanced
P: A solid cylinder rolls down an incline from rest through a vertical height 1.5 m. Find its speed at the bottom (g = 10).
A: m g h = (1/2) m v^2 + (1/2) I w^2 with I = m R^2 / 2 gives g h = 3 v^2 / 4, v = sqrt(4 g h / 3) = sqrt(20) = 4.47 m/s.
R: 2 | Energy equation including rotation
R: 2 | v = sqrt(4gh/3)
R: 1 | 4.47 m/s

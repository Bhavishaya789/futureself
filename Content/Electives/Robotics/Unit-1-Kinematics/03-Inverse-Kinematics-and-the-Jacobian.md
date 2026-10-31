# Inverse kinematics and the Jacobian
minutes: 30
yt: inverse kinematics 2 link planar arm
yt: robot jacobian explained
@study
**Inverse kinematics (IK)** finds the joint angles that place the end-effector at a target. It can have no solution (target outside the workspace), one, two ("elbow up" and "elbow down") or infinitely many.

## Planar 2-link IK (analytic)
Given a target (x, y):
cos(theta2) = (x^2 + y^2 - l1^2 - l2^2) / (2 l1 l2)
theta2 = +/- arccos(...) (two solutions)
theta1 = atan2(y, x) - atan2(l2 sin theta2, l1 + l2 cos theta2).
A solution exists only if |cos theta2| <= 1, i.e. the target is inside the workspace ring.

### Worked example
l1 = 1, l2 = 0.5, target (1.2, 0.6).
- cos theta2 = (1.44 + 0.36 - 1 - 0.25) / (2 x 1 x 0.5) = 0.55 / 1 = **0.55**, theta2 = **56.63 degrees**.
- theta1 = atan2(0.6, 1.2) - atan2(0.5 sin 56.63, 1 + 0.5 x 0.55) = 26.57 - 18.13 = **8.43 degrees**.
- Check with FK: x = cos 8.43 + 0.5 cos 65.06 = 1.2000, y = sin 8.43 + 0.5 sin 65.06 = 0.6000, so the answer is correct.

```python
import math
l1, l2, x, y = 1, 0.5, 1.2, 0.6
c = (x*x + y*y - l1*l1 - l2*l2) / (2 * l1 * l2)
t2 = math.acos(c)
t1 = math.atan2(y, x) - math.atan2(l2 * math.sin(t2), l1 + l2 * math.cos(t2))
print(round(c, 2), round(math.degrees(t2), 2), round(math.degrees(t1), 2))   # 0.55 56.63 8.43
```

## The Jacobian
The Jacobian J maps joint velocities to end-effector velocities: v = J(q) q_dot. For the planar 2-link arm
J = [[-l1 sin t1 - l2 sin(t1+t2), -l2 sin(t1+t2)], [l1 cos t1 + l2 cos(t1+t2), l2 cos(t1+t2)]].
- det J = l1 l2 sin(t2). At t2 = 0 or 180 degrees the determinant is 0: a **singularity** (arm fully stretched or folded), where the arm loses a direction of motion and joint speeds can become huge.
- The transpose gives forces: tau = J^T F.
- Numerical IK: q_dot = J^(-1) v (or pseudo-inverse).

## Hindi saransh
Inverse kinematics target position se joint angles nikalta hai; 2-link mein do solutions (elbow up/down). Jacobian joint speed ko end-effector speed se jodta hai. det J = l1 l2 sin(t2); t2 = 0 ya 180 par singularity hoti hai.

> If |cos theta2| > 1 the target is unreachable.
@qa
Q: Why can IK have two solutions for a 2-link arm?
A: Because theta2 can be positive or negative (elbow up or elbow down) and both reach the same point.
Q: When does IK have no solution?
A: When the target lies outside the reachable workspace, so |cos theta2| would be greater than 1.
Q: What is the Jacobian?
A: The matrix relating joint velocities to end-effector velocities.
Q: What is a singularity?
A: A configuration where the Jacobian loses rank (determinant zero), such as a fully stretched arm; the arm cannot move in some direction and joint velocities can blow up.
Q: What is det J for the planar 2-link arm?
A: l1 l2 sin(theta2).
@quiz
? In the worked example cos theta2 equals
- 0.25
+ 0.55
- 1.2
- 0.866
! (1.8 - 1.25) / 1 = 0.55.
? Singularities of the 2-link arm occur when
- theta1 = 0
+ theta2 = 0 or 180 degrees
- theta2 = 90 degrees
- the arm is stopped
! det J = l1 l2 sin(theta2) = 0.
? A target at distance 2 from the base with l1 = 1, l2 = 0.5 is
- reachable
+ unreachable
- at a singularity only
- elbow up only
! Max reach is 1.5.
? The Jacobian relates
- torque to current
+ joint velocities to end-effector velocity
- angles to colour
- mass to force
! v = J q_dot.
? How many solutions does 2-link IK usually have for an interior point?
- 0
- 1
+ 2
- infinite
! Elbow up and elbow down.
@visual
formula | Two-link IK | cos(t2) = (x^2 + y^2 - l1^2 - l2^2) / (2 l1 l2) ; t1 = atan2(y, x) - atan2(l2 sin(t2), l1 + l2 cos(t2))
steps | Solving IK analytically | Check the target is inside the workspace; Compute cos theta2 and theta2; Compute theta1; Verify with forward kinematics
@problems
## Moderate
P: Can a 2-link arm with l1 = 1 and l2 = 0.5 reach the point (1.6, 0)? Explain.
A: The distance is 1.6, which is greater than the maximum reach 1.5, so it cannot.
R: 1 | Distance 1.6
R: 1 | Exceeds 1.5
## High
P: Solve IK for l1 = 1, l2 = 0.5 and target (1.2, 0.6) (elbow with positive theta2).
A: cos theta2 = 0.55 so theta2 = 56.63 degrees. theta1 = atan2(0.6, 1.2) - atan2(0.5 sin56.63, 1 + 0.5 x 0.55) = 26.57 - 18.13 = 8.43 degrees.
R: 2 | cos theta2 and theta2
R: 2 | theta1 = 8.43 degrees
R: 1 | Verification with FK
## Advanced
P: Compute the determinant of the Jacobian for l1 = 1, l2 = 0.5 at theta2 = 90 degrees and at theta2 = 0, and explain what the second value means.
A: det J = l1 l2 sin(theta2). At 90 degrees: 1 x 0.5 x 1 = 0.5. At 0: 0. Zero means the arm is fully stretched, a singularity: it cannot move radially outward and small end-effector motions along that line would need unbounded joint speed.
R: 2 | 0.5 and 0
R: 2 | Singularity identified
R: 2 | Consequence explained

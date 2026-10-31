# Forward kinematics of a two-link arm
minutes: 25
yt: forward kinematics two link planar arm
yt: denavit hartenberg parameters explained
@study
**Forward kinematics (FK)** computes the end-effector position from the joint angles.

## Planar 2-link arm
Link lengths l1, l2; joint angles theta1 (from the x axis) and theta2 (relative to link 1).
- x = l1 cos(theta1) + l2 cos(theta1 + theta2)
- y = l1 sin(theta1) + l2 sin(theta1 + theta2)

### Worked example
l1 = 1, l2 = 0.5, theta1 = 30 degrees, theta2 = 45 degrees.
- x = cos 30 + 0.5 cos 75 = 0.8660 + 0.5(0.2588) = 0.8660 + 0.1294 = **0.9954**
- y = sin 30 + 0.5 sin 75 = 0.5 + 0.5(0.9659) = 0.5 + 0.4830 = **0.9830**

```python
import math
l1, l2 = 1, 0.5
t1, t2 = math.radians(30), math.radians(45)
x = l1 * math.cos(t1) + l2 * math.cos(t1 + t2)
y = l1 * math.sin(t1) + l2 * math.sin(t1 + t2)
print(round(x, 4), round(y, 4))   # 0.9954 0.983
```

## Homogeneous transform approach
Each joint contributes T = Rot(theta) then Trans(l). The end-effector transform is T = T1 T2 ... Tn; for 3D arms the **Denavit-Hartenberg (DH)** convention describes each link with four parameters: a (link length), alpha (twist), d (offset) and theta (joint angle).

## Orientation of the tool
For the planar arm, tool orientation phi = theta1 + theta2.

## Hindi saransh
Forward kinematics joint angles se end-effector ki position nikalta hai. 2-link arm: x = l1 cos t1 + l2 cos(t1 + t2), y = l1 sin t1 + l2 sin(t1 + t2). Example mein (0.9954, 0.983).

> FK is easy and has exactly one answer. The reverse (inverse kinematics) can have 0, 1, 2 or infinitely many answers.
@qa
Q: What is forward kinematics?
A: Computing the end-effector pose from the given joint variables.
Q: Write the FK equations for a planar 2-link arm.
A: x = l1 cos t1 + l2 cos(t1 + t2); y = l1 sin t1 + l2 sin(t1 + t2).
Q: What are DH parameters?
A: Four numbers per link (a, alpha, d, theta) that describe the relation between consecutive joint frames in a standard way.
Q: What is the tool orientation of a planar 2-link arm?
A: phi = theta1 + theta2.
Q: How many solutions does FK have?
A: Exactly one for a given set of joint angles.
@quiz
? With theta1 = theta2 = 0 the arm is
- folded
+ stretched along the x axis
- vertical
- undefined
! Position is (l1 + l2, 0).
? In the worked example x equals about
- 0.5
- 0.866
+ 0.9954
- 1.5
! 0.866 + 0.1294 = 0.9954.
? In the worked example y equals about
+ 0.983
- 0.5
- 1.0
- 1.2
! 0.5 + 0.483 = 0.983.
? The orientation of the end-effector of a planar 2-link arm is
- theta1 - theta2
+ theta1 + theta2
- l1 + l2
- 0
! The relative angles add.
? The number of DH parameters per link is
- 2
- 3
+ 4
- 6
! a, alpha, d and theta.
@visual
formula | Two-link arm FK | x = l1 cos(t1) + l2 cos(t1+t2) ; y = l1 sin(t1) + l2 sin(t1+t2)
flow | From joint angles to pose | Joint angles > Chain the link transforms > End-effector position and orientation
@problems
## Moderate
P: l1 = l2 = 1 and both angles are 0. Where is the end-effector?
A: x = 1 + 1 = 2, y = 0, so (2, 0).
R: 1 | Substitution
R: 1 | (2, 0)
## High
P: For l1 = 1, l2 = 0.5, theta1 = 30 degrees and theta2 = 45 degrees, find the end-effector position.
A: x = cos30 + 0.5 cos75 = 0.9954; y = sin30 + 0.5 sin75 = 0.9830.
R: 2 | Correct formula use
R: 2 | (0.9954, 0.983)
## Advanced
P: For l1 = 1, l2 = 1, theta1 = 90 degrees and theta2 = -90 degrees find the position and tool orientation and describe the pose.
A: x = cos90 + cos0 = 0 + 1 = 1; y = sin90 + sin0 = 1 + 0 = 1. Position (1, 1). Orientation = 90 - 90 = 0 degrees. The first link points up and the second points horizontally to the right, like an L shape.
R: 2 | Position (1, 1)
R: 2 | Orientation 0 degrees
R: 2 | Describes the pose

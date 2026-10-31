# Robot basics: degrees of freedom and coordinate frames
minutes: 20
yt: robot degrees of freedom joints and links
yt: coordinate frames rotation matrix robotics
@study
A **robot** senses, decides and acts. Its main parts: **mechanical structure** (links and joints), **actuators** (motors), **sensors**, a **controller**, and software.

## Types of robots
Industrial arms, mobile robots (wheeled, legged), drones, humanoids, surgical and collaborative robots (cobots).

## Joints and degrees of freedom
- **Revolute (R):** rotation. **Prismatic (P):** sliding.
- **Degrees of freedom (DOF):** independent motions. A free rigid body in 3D has **6 DOF** (3 position + 3 orientation). To reach any position and orientation in 3D an arm needs at least 6 joints. A planar 2-link arm has 2 DOF.
- Grubler's formula for planar mechanisms: DOF = 3(N - 1) - 2J (for J simple joints, N links including the ground).

## Workspace
The set of points the end-effector can reach. For a planar 2-link arm with lengths l1 and l2 it is a ring with inner radius |l1 - l2| and outer radius l1 + l2.

## Coordinate frames and rotation
Each link gets a frame. A rotation by angle theta about the z axis is
R = [[cos t, -sin t, 0], [sin t, cos t, 0], [0, 0, 1]].
A **homogeneous transform** T = [[R, p], [0, 1]] combines rotation and translation in one 4x4 matrix, so frames can be chained by matrix multiplication.
Example: rotate the point (1, 0) by 90 degrees: (cos 90, sin 90) = **(0, 1)**.

## Arm configurations
Cartesian (PPP), cylindrical (RPP), spherical (RRP), SCARA, articulated (RRR). Choice depends on workspace shape, payload and accuracy.

## Accuracy terms
**Repeatability** is how closely the robot returns to the same point (industrial arms: about 0.02 to 0.1 mm); **accuracy** is how close it gets to a commanded point; **payload** is the maximum load.

## Hindi saransh
Robot mein links, joints, actuators, sensors aur controller hote hain. DOF matlab independent motions; 3D mein poori freedom ke liye 6 DOF chahiye. Rotation matrix aur 4x4 homogeneous transform se frames jode jaate hain.

> A 6-DOF arm can reach any pose in its workspace; a 5-DOF arm cannot.
@qa
Q: What is a degree of freedom?
A: An independent way a mechanism can move, such as one rotation or one translation.
Q: Why do most industrial arms have 6 joints?
A: A rigid body in 3D has 6 DOF (3 position and 3 orientation), so six joints are needed to reach any pose.
Q: What is a homogeneous transformation matrix?
A: A 4x4 matrix combining a rotation and a translation so that transformations between frames can be chained by multiplication.
Q: Difference between revolute and prismatic joints?
A: A revolute joint rotates; a prismatic joint slides along an axis.
Q: What is the workspace of a planar 2-link arm with l1 = 1 and l2 = 0.5?
A: A ring with inner radius |1 - 0.5| = 0.5 and outer radius 1 + 0.5 = 1.5.
@quiz
? A free rigid body in 3D has how many DOF?
- 3
- 4
+ 6
- 9
! 3 translations and 3 rotations.
? The point (1, 0) rotated by 90 degrees about the origin becomes
- (1, 0)
+ (0, 1)
- (-1, 0)
- (0, -1)
! (cos 90, sin 90) = (0, 1).
? A prismatic joint
- rotates
+ slides
- is a gear
- is a sensor
! It produces linear motion.
? The outer reach of a planar 2-link arm is
- |l1 - l2|
+ l1 + l2
- l1 x l2
- l1 / l2
! Fully stretched out.
? A 4x4 homogeneous matrix contains
- only rotation
- only translation
+ rotation and translation
- only scale
! T = [[R, p], [0, 1]].
@visual
layers | Parts of a robot | Mechanical structure: links and joints; Actuators: motors; Sensors: encoders and cameras; Controller: computer and software
steps | Robot sense-plan-act loop | Sense the world; Plan what to do; Act with motors; Repeat
@problems
## Moderate
P: Find the workspace limits of a 2-link planar arm with l1 = 0.8 m and l2 = 0.3 m.
A: Inner radius |0.8 - 0.3| = 0.5 m, outer radius 0.8 + 0.3 = 1.1 m, so a ring between 0.5 m and 1.1 m.
R: 1 | Inner 0.5 m
R: 1 | Outer 1.1 m
## High
P: Rotate the point (2, 0) by 30 degrees about the origin.
A: (2 cos 30, 2 sin 30) = (1.732, 1).
R: 2 | Uses the rotation matrix
R: 1 | (1.732, 1)
## Advanced
P: Explain why a 5-DOF arm cannot place its tool in an arbitrary position and orientation in 3D space, and what 7-DOF arms add.
A: An arbitrary pose needs 6 independent numbers (3 position, 3 orientation), so five joints give only a 5-dimensional set of reachable poses. A 7-DOF arm has one redundant joint: there are infinitely many joint solutions for the same pose, allowing obstacle avoidance and singularity avoidance.
R: 2 | Six numbers describe a pose
R: 2 | Five joints are not enough
R: 2 | Redundancy benefits of 7 DOF

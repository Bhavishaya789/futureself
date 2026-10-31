# Path planning and ROS
minutes: 30
yt: A star pathfinding algorithm explained
yt: ROS 2 nodes topics explained
@study
**Path planning** finds a collision-free path from start to goal. Motion planning adds robot dynamics and constraints.

## Grid search
Represent the map as a grid of free and blocked cells.
- **BFS** finds the shortest path (fewest steps) on an unweighted grid.
- **Dijkstra** handles different move costs.
- **A\*** uses f(n) = g(n) + h(n): g is the cost so far and h is a heuristic estimate of the cost to go (Manhattan distance on a 4-connected grid). If h never overestimates (**admissible**), A* is optimal and explores fewer cells than Dijkstra.

### Example grid (S start, G goal, # wall)
```
S..#....
...#.##.
...#..#.
......#G
```
The shortest 4-connected path has **16 steps** (found by BFS):
```python
from collections import deque
g = ["S..#....", "...#.##.", "...#..#.", "......#G"]
s = (0, 0); q = deque([(s, 0)]); seen = {s}
while q:
    (r, c), d = q.popleft()
    if g[r][c] == "G": print(d); break   # 16
    for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
        n = (r + dr, c + dc)
        if 0 <= n[0] < 4 and 0 <= n[1] < 8 and g[n[0]][n[1]] != "#" and n not in seen:
            seen.add(n); q.append((n, d + 1))
```
The Manhattan distance from S to G is only 10, but the walls force a detour, which shows why A* uses a heuristic that is a lower bound, not exact.

## Sampling-based planners
For many dimensions (arms) grids are too big. **RRT** grows a random tree towards sampled points; **PRM** builds a roadmap of random free configurations. They are fast but give non-optimal paths (RRT* improves them).

## Local planning and obstacle avoidance
Potential fields, dynamic window approach. SLAM builds a map while localising the robot.

## ROS (Robot Operating System)
Middleware, not an operating system. Concepts:
- **Node:** one process doing one job (camera driver, planner).
- **Topic:** named channel for messages; nodes **publish** and **subscribe** (for example /scan, /cmd_vel).
- **Service:** request-reply call. **Action:** long-running goal with feedback (navigate to a pose).
- **Parameters, launch files, tf (transform tree), rviz and Gazebo (simulator).**
ROS 2 uses DDS for communication, supports real-time and multiple robots.

```python
# minimal ROS 2 publisher idea (rclpy)
import rclpy
from std_msgs.msg import String
rclpy.init(); n = rclpy.create_node("talker")
pub = n.create_publisher(String, "chatter", 10)
pub.publish(String(data="hello robot"))
```

## Hindi saransh
Path planning start se goal tak collision-free raasta dhoondhta hai. BFS grid par sabse chhota raasta deta hai (example mein 16). A* mein f = g + h. Bade dimension ke liye RRT/PRM. ROS mein node, topic (publish/subscribe), service aur action hote hain.

> A* with h = 0 is Dijkstra. A better heuristic searches fewer cells.
@qa
Q: What is the formula for A* and what makes the heuristic admissible?
A: f(n) = g(n) + h(n). A heuristic is admissible if it never overestimates the true remaining cost.
Q: Why use RRT instead of grid search for a robot arm?
A: An arm has many dimensions, so a grid would be enormous. RRT samples the space randomly and grows a tree, scaling better to high dimensions.
Q: What is a ROS topic?
A: A named channel for streaming messages; publishers send and subscribers receive, decoupling nodes.
Q: Difference between a ROS service and an action?
A: A service is a quick request-reply; an action is for long tasks and gives feedback and can be cancelled.
Q: What is SLAM?
A: Simultaneous Localisation And Mapping: building a map of an unknown place while estimating the robot's position in it.
@quiz
? In the example grid the BFS shortest path is
- 10
- 12
- 14
+ 16
! The wall forces a detour; BFS counts 16 steps.
? A* with heuristic h = 0 behaves like
- BFS on unweighted graphs only
+ Dijkstra
- RRT
- DFS
! f = g only.
? ROS nodes communicate by
- shared files only
+ topics, services and actions
- email
- the keyboard
! Publish/subscribe plus request-reply.
? RRT stands for
+ Rapidly-exploring Random Tree
- Robot Route Table
- Random Rotation Test
- Real Radar Tracker
! A sampling-based planner.
? An admissible heuristic
- may overestimate
+ never overestimates
- is always zero
- is random
! This guarantees optimal A*.
@visual
graph | A small ROS system | Camera^>Detector: image; Detector>Planner: object pose; Planner>Controller: path; Controller*>Motors: cmd_vel
flow | A* idea | Put the start in the open list > Pick the node with the lowest f = g + h > Expand its neighbours > Stop when the goal is picked
@problems
## Moderate
P: List the difference between BFS and A* for path planning.
A: BFS expands cells in order of distance and ignores the goal direction. A* adds a heuristic estimate to the goal, so it explores fewer cells while still finding the optimal path if the heuristic is admissible.
R: 2 | BFS explanation
R: 2 | A* explanation with heuristic
## High
P: A robot is at (0,0) and must reach (4,3) on a 4-connected grid with no obstacles. What is the shortest path length and the Manhattan heuristic at the start?
A: Moves needed: 4 right and 3 up = 7 steps. The Manhattan heuristic at the start is |4| + |3| = 7, which equals the true cost, so A* goes straight to the goal.
R: 2 | 7 steps
R: 2 | Manhattan heuristic 7
## Advanced
P: Design a ROS 2 graph for a mobile robot that avoids obstacles: name the nodes, topics and message flow.
A: A LiDAR driver node publishes /scan. A SLAM/localisation node subscribes to /scan and wheel odometry /odom and publishes the map and the tf transform. A planner node subscribes to the map and pose, receives goals through a navigation action, and publishes a path. A controller node follows the path and publishes velocity commands on /cmd_vel. A motor driver node subscribes to /cmd_vel and drives the wheels, publishing /odom back to the loop.
R: 2 | Sensor node with /scan
R: 2 | Localisation and planning nodes
R: 2 | Controller with /cmd_vel and odometry feedback

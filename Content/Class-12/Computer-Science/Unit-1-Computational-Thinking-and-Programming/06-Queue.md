# Queue
minutes: 45
yt: class 12 computer science queue fifo enqueue dequeue deque circular priority python
@study
A queue is a linear data structure that follows FIFO (First In First Out): insertion happens at the rear and deletion at the front. Operations: enqueue (add at rear), dequeue (remove from front), front or peek, isEmpty and size. Underflow happens when dequeuing from an empty queue; overflow when enqueuing into a full bounded queue. In Python a list can be a queue using append() for enqueue and pop(0) for dequeue, though pop(0) shifts all elements and takes O(n); collections.deque gives O(1) at both ends. A deque (double ended queue) allows insertion and deletion at both front and rear, so it works as a stack or a queue. A circular queue reuses vacated space by wrapping the rear to the start using modulo arithmetic: rear = (rear+1) % size. A priority queue removes the element with the highest priority first rather than the oldest. Applications: CPU scheduling and job scheduling, printer spooling, call centre waiting lines, buffering in streaming, keyboard buffer, breadth first search and handling requests on servers. Stack versus queue: stack has one open end and LIFO order, queue has two ends and FIFO order.
## Deep dive: FIFO
The first item inserted is the first removed, like people waiting in a line.
## Deep dive: Variants
A deque works at both ends, a circular queue reuses space with modulo, and a priority queue serves the most important item first.
## Deep dive: Python
append and pop(0) on a list work but pop(0) is O(n); deque offers O(1) operations at both ends.
## Hindi saransh
Queue: FIFO sanrachna, enqueue, dequeue, deque, circular aur priority queue.
> Remember: queue is FIFO with two ends; stack is LIFO with one end.
@formulas
## Key facts
Queue | FIFO
Enqueue | Rear
Dequeue | Front
Deque | Both ends
Circular | Modulo

@qa
Q: Which is a linear structure with two ends?
A: Queue is a linear structure with two ends.
Q: What do you know about Queue?
A: Queue is a linear structure with two ends.
Q: Which is FIFO?
A: Queue order is FIFO.
Q: What do you know about Queue order?
A: Queue order is FIFO.
Q: Which is where insertion happens?
A: Rear is where insertion happens.
Q: What do you know about Rear?
A: Rear is where insertion happens.
Q: Which is where deletion happens?
A: Front is where deletion happens.
Q: What do you know about Front?
A: Front is where deletion happens.
Q: Which adds at the rear?
A: Enqueue adds at the rear.
Q: What do you know about Enqueue?
A: Enqueue adds at the rear.
Q: Which removes from the front?
A: Dequeue removes from the front.
Q: What do you know about Dequeue?
A: Dequeue removes from the front.
Q: Which reads the front item?
A: Peek of queue reads the front item.
Q: What do you know about Peek of queue?
A: Peek of queue reads the front item.
Q: Which occurs when dequeuing an empty queue?
A: Underflow in queue occurs when dequeuing an empty queue.
Q: What do you know about Underflow in queue?
A: Underflow in queue occurs when dequeuing an empty queue.
Q: Which occurs when enqueuing a full queue?
A: Overflow in queue occurs when enqueuing a full queue.
Q: What do you know about Overflow in queue?
A: Overflow in queue occurs when enqueuing a full queue.
Q: Which implements enqueue?
A: List append implements enqueue.
Q: What do you know about List append?
A: List append implements enqueue.
Q: Which implements dequeue?
A: List pop zero implements dequeue.
Q: What do you know about List pop zero?
A: List pop zero implements dequeue.
Q: Which shifts all remaining elements?
A: Pop zero shifts all remaining elements.
Q: What do you know about Pop zero?
A: Pop zero shifts all remaining elements.
Q: Which is linear time?
A: Pop zero cost is linear time.
Q: What do you know about Pop zero cost?
A: Pop zero cost is linear time.
Q: Which is in the collections module?
A: Deque is in the collections module.
Q: What do you know about Deque?
A: Deque is in the collections module.
Q: Which take constant time at both ends?
A: Deque operations take constant time at both ends.
Q: What do you know about Deque operations?
A: Deque operations take constant time at both ends.
Q: Which adds at the front of a deque?
A: Appendleft adds at the front of a deque.
Q: What do you know about Appendleft?
A: Appendleft adds at the front of a deque.
Q: Which removes from the front of a deque?
A: Popleft removes from the front of a deque.
Q: What do you know about Popleft?
A: Popleft removes from the front of a deque.
Q: Which allows insertion and deletion at both ends?
A: Double ended queue allows insertion and deletion at both ends.
Q: What do you know about Double ended queue?
A: Double ended queue allows insertion and deletion at both ends.
Q: Which can behave as a stack or a queue?
A: Deque can behave as a stack or a queue.
Q: Which reuses vacated space?
A: Circular queue reuses vacated space.
Q: What do you know about Circular queue?
A: Circular queue reuses vacated space.
Q: Which uses modulo arithmetic?
A: Circular queue uses modulo arithmetic.
Q: Which is rear plus one modulo size?
A: Rear update in circular queue is rear plus one modulo size.
Q: What do you know about Rear update in circular queue?
A: Rear update in circular queue is rear plus one modulo size.
Q: Which serves the highest priority first?
A: Priority queue serves the highest priority first.
Q: What do you know about Priority queue?
A: Priority queue serves the highest priority first.
Q: Which allows insertion at one end only?
A: Input restricted deque allows insertion at one end only.
Q: What do you know about Input restricted deque?
A: Input restricted deque allows insertion at one end only.
Q: Which allows deletion at one end only?
A: Output restricted deque allows deletion at one end only.
Q: What do you know about Output restricted deque?
A: Output restricted deque allows deletion at one end only.
Q: Which uses a queue?
A: CPU scheduling uses a queue.
Q: What do you know about CPU scheduling?
A: CPU scheduling uses a queue.
Q: What do you know about Printer spooling?
A: Printer spooling uses a queue.
Q: Which uses a waiting queue?
A: Call centre uses a waiting queue.
Q: What do you know about Call centre?
A: Call centre uses a waiting queue.
Q: Which is a queue?
A: Keyboard buffer is a queue.
Q: What do you know about Keyboard buffer?
A: Keyboard buffer is a queue.
Q: What do you know about Streaming buffer?
A: Streaming buffer is a queue.
Q: What do you know about Breadth first search?
A: Breadth first search uses a queue.
Q: Which are queued?
A: Web server requests are queued.
Q: What do you know about Web server requests?
A: Web server requests are queued.
Q: Which is a real life queue?
A: Ticket counter is a real life queue.
Q: What do you know about Ticket counter?
A: Ticket counter is a real life queue.
Q: Which uses a circular queue?
A: Round robin scheduling uses a circular queue.
Q: What do you know about Round robin scheduling?
A: Round robin scheduling uses a circular queue.
Q: Which passes data between processes?
A: Message queue passes data between processes.
Q: What do you know about Message queue?
A: Message queue passes data between processes.
Q: Which is a FIFO example?
A: Customer service line is a FIFO example.
Q: What do you know about Customer service line?
A: Customer service line is a FIFO example.
Q: Which waits in a queue until the printer is free?
A: Print job waits in a queue until the printer is free.
Q: What do you know about Print job?
A: Print job waits in a queue until the printer is free.
Q: Which moves forward on dequeue?
A: Queue front pointer moves forward on dequeue.
Q: What do you know about Queue front pointer?
A: Queue front pointer moves forward on dequeue.
Q: Which moves forward on enqueue?
A: Queue rear pointer moves forward on enqueue.
Q: What do you know about Queue rear pointer?
A: Queue rear pointer moves forward on enqueue.
Q: Which has no elements?
A: Empty queue has no elements.
Q: What do you know about Empty queue?
A: Empty queue has no elements.
Q: Which is the count of stored items?
A: Queue size is the count of stored items.
Q: What do you know about Queue size?
A: Queue size is the count of stored items.
Q: Which is people waiting at a bus stop?
A: Queue analogy is people waiting at a bus stop.
Q: What do you know about Queue analogy?
A: Queue analogy is people waiting at a bus stop.
Q: Which carries a priority value?
A: Priority queue element carries a priority value.
Q: What do you know about Priority queue element?
A: Priority queue element carries a priority value.
Q: Which is a common priority queue implementation?
A: Heap is a common priority queue implementation.
Q: What do you know about Heap?
A: Heap is a common priority queue implementation.
Q: Which is wasted vacated space?
A: Linear queue drawback is wasted vacated space.
Q: What do you know about Linear queue drawback?
A: Linear queue drawback is wasted vacated space.
Q: Which occurs when rear plus one equals front?
A: Circular queue full condition occurs when rear plus one equals front.
Q: What do you know about Circular queue full condition?
A: Circular queue full condition occurs when rear plus one equals front.
Q: Which supports appendleft and popleft?
A: Deque in python supports appendleft and popleft.
Q: What do you know about Deque in python?
A: Deque in python supports appendleft and popleft.
Q: Which follows arrival order?
A: Fair scheduling follows arrival order.
Q: What do you know about Fair scheduling?
A: Fair scheduling follows arrival order.
Q: Which are both linear structures?
A: Stack and queue are both linear structures.
Q: What do you know about Stack and queue?
A: Stack and queue are both linear structures.
Q: Which is processed in arrival order?
A: Queue of tasks is processed in arrival order.
Q: What do you know about Queue of tasks?
A: Queue of tasks is processed in arrival order.
Q: Which holds data waiting to be processed?
A: Buffer holds data waiting to be processed.
Q: What do you know about Buffer?
A: Buffer holds data waiting to be processed.
Q: Which communicates through a queue?
A: Producer consumer communicates through a queue.
Q: What do you know about Producer consumer?
A: Producer consumer communicates through a queue.
Q: Which distributes work across workers?
A: Task queue distributes work across workers.
Q: What do you know about Task queue?
A: Task queue distributes work across workers.
Q: What is a queue?
A: A FIFO linear data structure.
Q: What is enqueue?
A: Adding an item at the rear.
Q: What is dequeue?
A: Removing an item from the front.
Q: What is a deque?
A: A double ended queue.
Q: What is a circular queue?
A: A queue where the rear wraps to the start to reuse space.
Q: What is a priority queue?
A: A queue that serves the highest priority item first.
Q: Name two uses of a queue.
A: CPU scheduling and printer spooling.
Q: Why is pop(0) slow?
A: It shifts every remaining element.
@quiz
? Which is a linear structure with two ends?
- Dequeue
+ Queue
- Front
- Overflow in queue
! Queue is a linear structure with two ends.
? Which statement is true of Queue?
- Adds at the rear
+ Is a linear structure with two ends
- Is where insertion happens
- Occurs when dequeuing an empty queue
! Queue is a linear structure with two ends.
? Which is FIFO?
+ Queue order
- Front
- Peek of queue
- Dequeue
! Queue order is FIFO.
? Which statement is true of Queue order?
+ Is FIFO
- Occurs when enqueuing a full queue
- Is where insertion happens
- Reads the front item
! Queue order is FIFO.
? Which is where insertion happens?
+ Rear
- Front
- Underflow in queue
- Overflow in queue
! Rear is where insertion happens.
? Which statement is true of Rear?
- Reads the front item
- Is where deletion happens
- Occurs when dequeuing an empty queue
+ Is where insertion happens
! Rear is where insertion happens.
? Which is where deletion happens?
- Rear
- Dequeue
- Enqueue
+ Front
! Front is where deletion happens.
? Which statement is true of Front?
- Occurs when enqueuing a full queue
- Occurs when dequeuing an empty queue
+ Is where deletion happens
- Removes from the front
! Front is where deletion happens.
? Which adds at the rear?
- Overflow in queue
- Front
+ Enqueue
- Queue
! Enqueue adds at the rear.
? Which statement is true of Enqueue?
- Is where deletion happens
- Occurs when dequeuing an empty queue
+ Adds at the rear
- Is where insertion happens
! Enqueue adds at the rear.
? Which removes from the front?
+ Dequeue
- Rear
- Queue
- Overflow in queue
! Dequeue removes from the front.
? Which statement is true of Dequeue?
+ Removes from the front
- Is where deletion happens
- Adds at the rear
- Reads the front item
! Dequeue removes from the front.
? Which reads the front item?
- Dequeue
- Rear
+ Peek of queue
- Queue
! Peek of queue reads the front item.
? Which statement is true of Peek of queue?
- Occurs when enqueuing a full queue
+ Reads the front item
- Removes from the front
- Adds at the rear
! Peek of queue reads the front item.
? Which occurs when dequeuing an empty queue?
- Rear
+ Underflow in queue
- Dequeue
- Front
! Underflow in queue occurs when dequeuing an empty queue.
? Which statement is true of Underflow in queue?
- Is where deletion happens
- Is a linear structure with two ends
+ Occurs when dequeuing an empty queue
- Adds at the rear
! Underflow in queue occurs when dequeuing an empty queue.
? Which occurs when enqueuing a full queue?
- Rear
+ Overflow in queue
- Dequeue
- Queue
! Overflow in queue occurs when enqueuing a full queue.
? Which statement is true of Overflow in queue?
- Reads the front item
- Is where insertion happens
+ Occurs when enqueuing a full queue
- Removes from the front
! Overflow in queue occurs when enqueuing a full queue.
? Which implements enqueue?
- List pop zero
- Pop zero cost
- Pop zero
+ List append
! List append implements enqueue.
? Which statement is true of List append?
+ Implements enqueue
- Implements dequeue
- Take constant time at both ends
- Is linear time
! List append implements enqueue.
? Which implements dequeue?
- Popleft
- Deque operations
+ List pop zero
- Appendleft
! List pop zero implements dequeue.
? Which statement is true of List pop zero?
+ Implements dequeue
- Removes from the front of a deque
- Take constant time at both ends
- Is linear time
! List pop zero implements dequeue.
? Which shifts all remaining elements?
- List pop zero
- Deque operations
- Appendleft
+ Pop zero
! Pop zero shifts all remaining elements.
? Which statement is true of Pop zero?
- Adds at the front of a deque
- Implements dequeue
+ Shifts all remaining elements
- Implements enqueue
! Pop zero shifts all remaining elements.
? Which is linear time?
- Appendleft
- Popleft
+ Pop zero cost
- Pop zero
! Pop zero cost is linear time.
? Which statement is true of Pop zero cost?
- Take constant time at both ends
- Adds at the front of a deque
+ Is linear time
- Removes from the front of a deque
! Pop zero cost is linear time.
? Which is in the collections module?
+ Deque
- List pop zero
- Pop zero
- Appendleft
! Deque is in the collections module.
? Which statement is true of Deque?
- Shifts all remaining elements
+ Is in the collections module
- Removes from the front of a deque
- Implements dequeue
! Deque is in the collections module.
? Which take constant time at both ends?
- Appendleft
+ Deque operations
- List append
- Deque
! Deque operations take constant time at both ends.
? Which statement is true of Deque operations?
- Adds at the front of a deque
- Shifts all remaining elements
+ Take constant time at both ends
- Removes from the front of a deque
! Deque operations take constant time at both ends.
? Which adds at the front of a deque?
- List append
+ Appendleft
- Pop zero
- List pop zero
! Appendleft adds at the front of a deque.
? Which statement is true of Appendleft?
- Is linear time
- Implements enqueue
+ Adds at the front of a deque
- Take constant time at both ends
! Appendleft adds at the front of a deque.
? Which removes from the front of a deque?
- Appendleft
- Deque
- List append
+ Popleft
! Popleft removes from the front of a deque.
? Which statement is true of Popleft?
- Is linear time
+ Removes from the front of a deque
- Shifts all remaining elements
- Is in the collections module
! Popleft removes from the front of a deque.
? Which allows insertion and deletion at both ends?
- Rear update in circular queue
- Circular queue
+ Double ended queue
- Deque
! Double ended queue allows insertion and deletion at both ends.
? Which statement is true of Double ended queue?
- Reuses vacated space
- Is rear plus one modulo size
- Serves the highest priority first
+ Allows insertion and deletion at both ends
! Double ended queue allows insertion and deletion at both ends.
? Which can behave as a stack or a queue?
- Rear update in circular queue
- Output restricted deque
+ Deque
- Double ended queue
! Deque can behave as a stack or a queue.
? Which reuses vacated space?
- Deque
- Input restricted deque
- Output restricted deque
+ Circular queue
! Circular queue reuses vacated space.
? Which statement is true of Circular queue?
- Allows insertion and deletion at both ends
- Allows insertion at one end only
+ Reuses vacated space
- Is rear plus one modulo size
! Circular queue reuses vacated space.
? Which uses modulo arithmetic?
- Double ended queue
- Deque
- Priority queue
+ Circular queue
! Circular queue uses modulo arithmetic.
? Which is rear plus one modulo size?
- Double ended queue
- Input restricted deque
+ Rear update in circular queue
- Priority queue
! Rear update in circular queue is rear plus one modulo size.
? Which statement is true of Rear update in circular queue?
- Reuses vacated space
- Serves the highest priority first
+ Is rear plus one modulo size
- Allows insertion and deletion at both ends
! Rear update in circular queue is rear plus one modulo size.
? Which serves the highest priority first?
- Circular queue
- Output restricted deque
- Deque
+ Priority queue
! Priority queue serves the highest priority first.
? Which statement is true of Priority queue?
- Can behave as a stack or a queue
- Allows insertion and deletion at both ends
+ Serves the highest priority first
- Is rear plus one modulo size
! Priority queue serves the highest priority first.
? Which allows insertion at one end only?
- Rear update in circular queue
+ Input restricted deque
- Output restricted deque
- Double ended queue
! Input restricted deque allows insertion at one end only.
? Which statement is true of Input restricted deque?
- Allows insertion and deletion at both ends
- Can behave as a stack or a queue
+ Allows insertion at one end only
- Allows deletion at one end only
! Input restricted deque allows insertion at one end only.
? Which allows deletion at one end only?
+ Output restricted deque
- Input restricted deque
- Deque
- Circular queue
! Output restricted deque allows deletion at one end only.
? Which statement is true of Output restricted deque?
- Allows insertion and deletion at both ends
- Allows insertion at one end only
+ Allows deletion at one end only
- Uses modulo arithmetic
! Output restricted deque allows deletion at one end only.
? Which uses a queue?
- Deque in python
+ CPU scheduling
- Printer spooling
- Linear queue drawback
! CPU scheduling uses a queue.
? Which statement is true of CPU scheduling?
- Moves forward on dequeue
+ Uses a queue
- Follows arrival order
- Uses a waiting queue
! CPU scheduling uses a queue.
? Which statement is true of Printer spooling?
+ Uses a queue
- Is a common priority queue implementation
- Are both linear structures
- Uses a circular queue
! Printer spooling uses a queue.
? Which uses a waiting queue?
- Stack and queue
- Queue analogy
+ Call centre
- Priority queue element
! Call centre uses a waiting queue.
? Which statement is true of Call centre?
- Is people waiting at a bus stop
+ Uses a waiting queue
- Moves forward on enqueue
- Uses a queue
! Call centre uses a waiting queue.
? Which is a queue?
- Circular queue full condition
+ Keyboard buffer
- Linear queue drawback
- Round robin scheduling
! Keyboard buffer is a queue.
? Which statement is true of Keyboard buffer?
+ Is a queue
- Is the count of stored items
- Holds data waiting to be processed
- Distributes work across workers
! Keyboard buffer is a queue.
? Which statement is true of Streaming buffer?
- Is people waiting at a bus stop
+ Is a queue
- Holds data waiting to be processed
- Uses a waiting queue
! Streaming buffer is a queue.
? Which statement is true of Breadth first search?
+ Uses a queue
- Moves forward on dequeue
- Are both linear structures
- Is wasted vacated space
! Breadth first search uses a queue.
? Which are queued?
- Queue front pointer
- Streaming buffer
- Queue size
+ Web server requests
! Web server requests are queued.
? Which statement is true of Web server requests?
- Uses a waiting queue
- Is a real life queue
- Supports appendleft and popleft
+ Are queued
! Web server requests are queued.
? Which is a real life queue?
+ Ticket counter
- Queue of tasks
- Deque in python
- Task queue
! Ticket counter is a real life queue.
? Which statement is true of Ticket counter?
- Has no elements
- Uses a waiting queue
- Follows arrival order
+ Is a real life queue
! Ticket counter is a real life queue.
? Which uses a circular queue?
- Queue size
- CPU scheduling
- Heap
+ Round robin scheduling
! Round robin scheduling uses a circular queue.
? Which statement is true of Round robin scheduling?
- Follows arrival order
- Communicates through a queue
+ Uses a circular queue
- Moves forward on dequeue
! Round robin scheduling uses a circular queue.
? Which passes data between processes?
- Streaming buffer
- Deque in python
+ Message queue
- CPU scheduling
! Message queue passes data between processes.
? Which statement is true of Message queue?
+ Passes data between processes
- Follows arrival order
- Is the count of stored items
- Distributes work across workers
! Message queue passes data between processes.
? Which is a FIFO example?
+ Customer service line
- Breadth first search
- Web server requests
- Priority queue element
! Customer service line is a FIFO example.
? Which statement is true of Customer service line?
+ Is a FIFO example
- Is processed in arrival order
- Uses a circular queue
- Communicates through a queue
! Customer service line is a FIFO example.
? Which waits in a queue until the printer is free?
- Customer service line
- Empty queue
+ Print job
- Streaming buffer
! Print job waits in a queue until the printer is free.
? Which statement is true of Print job?
- Is a queue
+ Waits in a queue until the printer is free
- Is a real life queue
- Is a common priority queue implementation
! Print job waits in a queue until the printer is free.
? Which moves forward on dequeue?
- Customer service line
+ Queue front pointer
- Web server requests
- CPU scheduling
! Queue front pointer moves forward on dequeue.
? Which statement is true of Queue front pointer?
- Moves forward on enqueue
+ Moves forward on dequeue
- Is processed in arrival order
- Follows arrival order
! Queue front pointer moves forward on dequeue.
? Which moves forward on enqueue?
- Heap
- Linear queue drawback
- Customer service line
+ Queue rear pointer
! Queue rear pointer moves forward on enqueue.
? Which statement is true of Queue rear pointer?
- Uses a queue
- Is people waiting at a bus stop
+ Moves forward on enqueue
- Follows arrival order
! Queue rear pointer moves forward on enqueue.
? Which has no elements?
- Queue size
- Queue rear pointer
+ Empty queue
- Queue front pointer
! Empty queue has no elements.
? Which statement is true of Empty queue?
- Is wasted vacated space
- Follows arrival order
+ Has no elements
- Is people waiting at a bus stop
! Empty queue has no elements.
? Which is the count of stored items?
- Heap
+ Queue size
- Queue rear pointer
- Print job
! Queue size is the count of stored items.
? Which statement is true of Queue size?
- Waits in a queue until the printer is free
- Moves forward on enqueue
- Has no elements
+ Is the count of stored items
! Queue size is the count of stored items.
? Which is people waiting at a bus stop?
- Empty queue
- Ticket counter
- Heap
+ Queue analogy
! Queue analogy is people waiting at a bus stop.
? Which statement is true of Queue analogy?
+ Is people waiting at a bus stop
- Carries a priority value
- Has no elements
- Is wasted vacated space
! Queue analogy is people waiting at a bus stop.
? Which carries a priority value?
+ Priority queue element
- Task queue
- Breadth first search
- Producer consumer
! Priority queue element carries a priority value.
? Which statement is true of Priority queue element?
- Are both linear structures
+ Carries a priority value
- Occurs when rear plus one equals front
- Uses a queue
! Priority queue element carries a priority value.
? Which is a common priority queue implementation?
- Queue of tasks
- Task queue
+ Heap
- Queue analogy
! Heap is a common priority queue implementation.
? Which statement is true of Heap?
- Distributes work across workers
- Supports appendleft and popleft
+ Is a common priority queue implementation
- Has no elements
! Heap is a common priority queue implementation.
? Which is wasted vacated space?
- Deque in python
- Stack and queue
- Producer consumer
+ Linear queue drawback
! Linear queue drawback is wasted vacated space.
? Which statement is true of Linear queue drawback?
+ Is wasted vacated space
- Occurs when rear plus one equals front
- Is a real life queue
- Uses a queue
! Linear queue drawback is wasted vacated space.
? Which occurs when rear plus one equals front?
- Queue front pointer
- Producer consumer
+ Circular queue full condition
- Task queue
! Circular queue full condition occurs when rear plus one equals front.
? Which statement is true of Circular queue full condition?
+ Occurs when rear plus one equals front
- Waits in a queue until the printer is free
- Moves forward on dequeue
- Is a common priority queue implementation
! Circular queue full condition occurs when rear plus one equals front.
? Which supports appendleft and popleft?
+ Deque in python
- Priority queue element
- Queue of tasks
- Streaming buffer
! Deque in python supports appendleft and popleft.
? Which statement is true of Deque in python?
+ Supports appendleft and popleft
- Waits in a queue until the printer is free
- Is processed in arrival order
- Are queued
! Deque in python supports appendleft and popleft.
? Which follows arrival order?
- Producer consumer
- Queue rear pointer
+ Fair scheduling
- Queue of tasks
! Fair scheduling follows arrival order.
? Which statement is true of Fair scheduling?
- Are both linear structures
- Waits in a queue until the printer is free
+ Follows arrival order
- Moves forward on enqueue
! Fair scheduling follows arrival order.
? Which are both linear structures?
- Queue analogy
- Printer spooling
- Web server requests
+ Stack and queue
! Stack and queue are both linear structures.
? Which statement is true of Stack and queue?
- Distributes work across workers
- Has no elements
- Uses a queue
+ Are both linear structures
! Stack and queue are both linear structures.
? Which is processed in arrival order?
- Deque in python
+ Queue of tasks
- Linear queue drawback
- Stack and queue
! Queue of tasks is processed in arrival order.
? Which statement is true of Queue of tasks?
+ Is processed in arrival order
- Passes data between processes
- Are queued
- Waits in a queue until the printer is free
! Queue of tasks is processed in arrival order.
? Which holds data waiting to be processed?
- Ticket counter
+ Buffer
- Producer consumer
- Round robin scheduling
! Buffer holds data waiting to be processed.
? Which statement is true of Buffer?
- Is the count of stored items
- Waits in a queue until the printer is free
+ Holds data waiting to be processed
- Follows arrival order
! Buffer holds data waiting to be processed.
? Which communicates through a queue?
+ Producer consumer
- Fair scheduling
- Empty queue
- Queue size
! Producer consumer communicates through a queue.
? Which statement is true of Producer consumer?
+ Communicates through a queue
- Is people waiting at a bus stop
- Are queued
- Is processed in arrival order
! Producer consumer communicates through a queue.
? Which distributes work across workers?
- Print job
- Queue size
- Buffer
+ Task queue
! Task queue distributes work across workers.
? Which statement is true of Task queue?
- Is a common priority queue implementation
+ Distributes work across workers
- Is processed in arrival order
- Uses a queue
! Task queue distributes work across workers.
? FIFO
- Stack
- Tree
+ Queue
- Graph
! Structure.
? Insertion end
+ Rear
- Front
- Top
- Root
! Queue.
? Double ended
- Stack
+ Deque
- Heap
- Set
! Structure.
? Wrap around
- Linear
- Priority
+ Circular
- Simple
! Queue.
? Scheduling
- Stack
- Set
- Tuple
+ Queue
! Use.
? Remove front
+ Dequeue
- Enqueue
- Push
- Peek
! Operation.
@visual
flow | Queue | Enqueue at rear; Wait; Dequeue at front; Served
compare | Stack and queue | Stack=LIFO~One end; Queue=FIFO~Two ends
blocks | Queue types | Simple; Circular; Priority; Deque
mind | Queue | Operations; Types; Python; Uses
steps | Circular move | Rear plus one; Modulo size; Store; Update
@problems
## Moderate
P: What is FIFO?
A: First In First Out: the earliest inserted item is removed first.
R: 3 | First in
R: 3 | First out
## High
P: Why is a circular queue better than a linear queue?
A: It reuses vacated positions by wrapping around, avoiding wasted space.
R: 2 | Wrap around
R: 2 | Reuse
R: 2 | Modulo
R: 2 | Efficiency
## Advanced
P: Write enqueue and dequeue functions with a list.
A: enqueue uses q.append(x); dequeue returns q.pop(0) after checking the list is not empty.
R: 2 | append
R: 2 | pop(0)
R: 2 | Empty check
R: 2 | Return

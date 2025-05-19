/**
 * Queue

    - It is another abstract datatype
    - First in First out. Like a normal queue
    - has two ends Head or front and tail or rear
    - Two main operations
      - Enqueue -> insert at back
      - Dequeue -> remove from front
      - Other operations
        - peek, isEmpty, size, print etc
    - Usage 
      - Processing in order (printers)
      - Scheduling tasks
      - Call back queue in JS runtime
 */

//Normal Queue Implementation

// class Queue {
//   constructor() {
//     this.items = []
//   }

//   enqueue (element){
//     this.items.push(element)
//   }

//   dequeue (element){
//     return this.items.shift()
//   }

//   isEmpty (){
//     return this.items.length === 0
//   }

//   peek (){
//     if(this.items.length === 0){
//       return null
//     }
//     return this.items[0]
//   }

//   size () {
//     return this.items.length
//   }

//   print(){
//     console.log(this.items.toString())
//   }
// }

// const queue = new Queue()

// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.size());
// queue.print()

// console.log(queue.peek())
// console.log(queue.dequeue())
// queue.print()

//More optimised queue using objects (since shift has O(n) complexity)
//Queue using object

// class Queue {

//   constructor (){
//     this.items = {}

//     //we keep trak of front and back since its an ibject.
//     //we mimic array index
//     this.tail = 0
//     this.head = 0
//   }

//   enqueue (element){
//     this.items[this.tail] = element
//     this.tail++
//   }

//   dequeue (){
//     let item = this.items[this.head]
//     delete this.items[this.head]
//     this.head++
//     return item
//   }

//   isEmpty(){
//     return this.head = this.tail
//   }

//   peek (){
//     return this.items[this.head]
//   }

//   size (){
//     return this.tail - this.head
//   }

//   print (){
//     console.log(this.items)
//   }

// }

// const queue = new Queue()

// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.size());
// queue.print()

// console.log(queue.peek())
// console.log(queue.dequeue())
// queue.enqueue(40)
// queue.print()

//Queue using linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   print(){
//     if(this.isEmpty()){
//       console.log('The list is empty')
//       return 
//     }

//     let prev = this.head
//     let string = ''

//     while (prev){
//       string += `${prev.value} `
//       prev = prev.next
//     }

//     console.log(string)
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.size == 0) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   append(value) {
//     const node = new Node(value)

//     if(this.isEmpty()){
//       this.head = node
//       this.tail = node
//     } else {
//       this.tail.next = node
//       this.tail = node
//     }
//     this.size++
//   }

//   removeFromFront (){
//     if(this.isEmpty()) return null

//     let removed = this.head
//     this.head = removed.next
//     this.size--

//     if(this.size == 0){
//       this.tail = null
//     }
//     return removed.value
//   }

// }

// class LinkedListQueue{
//   constructor (){
//     this.items = new LinkedList()
//   }

//   enqueue (element) {
//     this.items.append(element)
//   }

//   dequeue(){
//     return this.items.removeFromFront()
//   }

//   peek(){
//     return this.items.head.value
//   }

//   isEmpty(){
//     return this.items.isEmpty()
//   }

//   getSize(){
//     return this.items.getSize()
//   }

//   print(){
//     return this.items.print()
//   }
// }


// const queue = new LinkedListQueue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.getSize())
// queue.print()

// console.log(queue.dequeue())
// queue.print()


// console.log(queue.peek())










// Circular Queue / Buffer
/**
    - The size of the queue is fixed. 
    - i.e, a single block of memory is allocated 
    - as if the first element is connected to the last element
    - a.k.a Circular Buffer
    - it will reuse empty block of memory after dequeue
    - Good for queues of fixed max size

    - Two main operations
      - enqueue -> if the queue is full we cannot enqueue anymore
      - dequeue
    
    - Application 
      - Clock
      - Streaming Data
      - Traffic Lights

 */

// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.front = -1;
//     this.rear = -1;
//   }

//   isEmpty() {
//     return this.currentLength === 0;
//   }

//   isFull() {
//     return this.currentLength === this.capacity;
//   }

//   enqueue(element) {
//     if (this.isFull()) return;

//     this.rear = (this.rear + 1) % this.capacity;
//     this.items[this.rear] = element;
//     this.currentLength += 1;

//     //for first elememnt in queue the head and tail will be at same place
//     // for subsequent entries tail keeps going backward
//     if (this.front == -1) {
//       this.front = this.rear;
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) return null;

//     const itemRemoved = this.items[this.front];
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength -= 1;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return itemRemoved;
//   }

//   peek() {
//     if (this.isEmpty()) return null;
//     return this.items[this.front];
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//       return;
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const queue = new CircularQueue(5);

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// console.log(queue.isFull());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());

// queue.print();

// queue.enqueue(60);
// queue.print();

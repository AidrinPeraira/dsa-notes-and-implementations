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
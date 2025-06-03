// Bubble Sort

let arr = [10, 7, 20, 5, 4, 8, 26, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// bubbleSort(arr)
// console.log(arr)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let smallest = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > smallest) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = smallest;
  }
}

// insertionSort(arr)
// console.log(arr)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        //check agianst smallest index
        smallestIndex = j;
      }
    }
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
  }
}

// selectionSort(arr)
// console.log(arr)

//quick sort

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let mid = arr[arr.length - 1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), mid, ...quickSort(right)];
}

// console.log(quickSort(arr))

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];

  while (left[0] && right[0]) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

// console.log(mergeSort(arr))

//STACK

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(value) {
    this.items.push(value);
    this.size++;
  }

  pop() {
    if (this.size == 0) return null;

    this.size--;
    return this.items.pop();
  }

  peek() {
    return this.items[this.size - 1];
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    console.log(this.items.toString());
  }
}

// reverse a string using a stack

// let string = 'hello'

// const stack = new Stack()
// for(let i =0; i<string.length; i++){
//     stack.push(string[i])
// }

// let result = ''

// while(stack.getSize() > 0){
//     result += stack.pop()
// }

// console.log(result)

//find even numbers in stack

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)

// stack.print()

// function removeOddFromStack (stack){
//     const temp = new Stack()

//     while(stack.getSize() > 0){
//         if(stack.peek()%2 == 0){
//             temp.push(stack.pop())
//         } else {
//             stack.pop()
//         }
//     }

//     while(temp.getSize() > 0){
//         stack.push(temp.pop())
//     }

// }

// removeOddFromStack(stack)
// stack.print()

//same logic can be used to remove a single element from stack
// remove middle node in stack

//sort a stack

// const stack = new Stack()

// stack.push(10)
// stack.push(5)
// stack.push(16)
// stack.push(2)
// stack.push(4)
// stack.push(20)
// stack.push(1)

// stack.print()

// function sort(stack){

//     let temp = new Stack()

//     while(!stack.isEmpty()){
//         let value = stack.pop()

//         while(!temp.isEmpty()){
//             if(temp.peek() < value){
//                 stack.push(temp.pop())
//             } else {
//                 break;
//             }
//         }

//         temp.push(value)
//     }

//     while(!temp.isEmpty()){
//         stack.push(temp.pop())
//     }

// }

// sort(stack)
// stack.print()

//Implement Stack using Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.size == 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.size == 0) {
      return null;
    } else {
      let removed = this.head;
      this.head = removed.next;
      this.size--;
      return removed.value;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  peek() {
    return this.head;
  }
}

class StackUsingLinkedList {
  constructor() {
    this.items = new LinkedList();
  }

  push(value) {
    this.items.prepend(value);
  }

  pop() {
    return this.items.removeFromFront();
  }

  getSize() {
    return this.items.getSize();
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  peek() {
    return this.items.peek();
  }
}

//Queue

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  getSize() {
    return this.items.length;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  print() {
    console.log(this.items.toString());
  }
}

//Circular queue

class CrcularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.head = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.head = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty");
      return null;
    }

    let removed = this.items[this.head];
    this.items[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this.size--;

    if (this.isEmpty()) {
      this.head = -1;
      this.rear = -1;
    }

    return removed;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let string = "head ";
    let i = this.head;
    for (let count = 0; count < this.size; count++) {
      result += `${this.items[i]} <- `;
      i = (i + 1) % this.capacity;
    }

    string += " rear";
    console.log(string);
  }
}

//sort a queue
/**
 * dequeue first element into value
 * peek temp queue < value
 * empty temp into main quee untile peek >= value
 * push value into temp que
 * this is looped
 * at last empty entire temp queue into  main queue
 */

class QueueUsingStack {
  constructor() {
    this.mainStack = new Stack();
    this.tempStack = new Stack();
  }

  enqueue(value) {
    this.mainStack.push(value);
  }

  dequeue() {
    if (!this.tempStack.isEmpty()) {
      return this.tempStack.pop();
    } else {
      while (!this.mainStack.isEmpty()) {
        this.tempStack.push(this.mainStack.pop());
      }
      return this.tempStack.pop();
    }
  }

  // add other methods as necessary
}

class StackUsingQueue {
  constructor() {
    this.main = new Queue();
    this.temp = new Queue();
  }

  push(value) {
    this.main.enqueue(value);
  }

  pop() {
    if (this.main.getSize() == 0) return "Queue is empty";

    while (this.main.getSize() > 1) {
      this.temp.enqueue(this.main.dequeue);
    }

    let removed = (this.main.dequeue[(this.temp, this.main)] = [
      this.main,
      this.temp,
    ]);

    return removed;
  }
}

//Hash Table

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);

    let bucket = this.table[index];

    if (!bucket) return undefined;

    let arr = bucket.find((v) => v[0] == key);

    return arr[1];
  }

  remove(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter((v) => v[0] !== key);
    }
  }
}

/**
 * 
 * 
OPEN ADDRESSING
 - Linear probing
    index => (index+1)%size

 - Quadratic Probing
    index => (index + i**2) % size

 - Double Hahing
    - we will have two hash function hash1 and hash2
    - if we find collion we use the hash2 to find step size

CHAINING
 - insert multiple
 
 */

// //  /flatten an array using recurrsion

// function flat (arr){
//     let result = []

//     for(let item of arr){
//         if(Array.isArray(arr)){
//             result.push(...flat(item))
//         } else {
//             result.push(item)
//         }
//     }
// }



// merge sort a string
function mergeSort(str) {
  if (str.length < 2) return str;

  let mid = Math.floor(str.length / 2);
  let left = mergeSort(str.slice(0, mid));
  let right = mergeSort(str.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = "";

  let i = 0
  let j = 0

  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
        result += left[i]
        i++
    } else {
        result += right[j]
        j++
    }
  }

  return result + left.slice(i) + right.slice(j)
}

console.log(mergeSort("bcda"));

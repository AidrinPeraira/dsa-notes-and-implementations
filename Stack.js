/**
 * Stack
 *
 * its a sequential collection of data that folows LIFO principle
 * last one in is the first one out
 *
 * Stack is an abstract datatype. It is defined by its behaviour.
 *
 * Two main operations
 *  - push() -> to add
 *  - pop() -> to remove
 *  - Adtitonal Methods
 *      - isEmpty, has, peek etc
 *
 *  Used For
 *      - Browser History
 *      - Undo operation
 *      - Expression Conversions
 *          - in postfix and prefix expression
 *          - we write A+B but computer understans A B + or + A B (now this is done for all operations one by one using stack)
 *      - Call stack in JS runtime
 */

// class Stack {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

//   //add elements
//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//   }

//   //remove elements
//   pop() {
//     if (stack.count == 0) return null;

//     let removed = this.items.pop();
//     this.count--;
//     return removed;
//   }

//   print() {
//     console.log(this.items.toString());
//   }

//   isEmpty() {
//     return this.count == 0;
//   }

//   size () {
//     return this.count
//   }

//   peek () {
//     return this.items[this.count - 1]
//   }

//   clear (){
//     this.stack = []
//   }
// }

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print();

// console.log(stack.pop());
// console.log(stack.size());

// stack.print();
// console.log(stack.peek())

// STACK USING LINKED LIST

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

  append(value) {
    const node = new Node(value);

    if (this.size == 0) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    }
    this.size++;
  }

  removeFromFront (){
    if(this.size == 0) return null
    let removed = this.head
    this.head = removed.next
    this.size--
    return removed.value
  }

  isEmpty(){
    return this.size == 0
  }

  getSize (){
    return this.size
  }

  print () {
    if(this.size == 0){
        consolr.log('the list is empty')
        return 
    }

    let string = ''

    let curr = this.head
    while(curr){
        string += `${curr.value} `
        curr = curr.next
    }

    console.log(string)
  }

  
}



// when using a linked list for stack we use append and remove from head to make it easier

class LinkedListStack {
    constructor (){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek (){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }
    print(){
        this.list.print()
    }
}


const stack = new LinkedListStack()

console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)

console.log(stack.getSize())
stack.print()

console.log(stack.pop())

stack.print()
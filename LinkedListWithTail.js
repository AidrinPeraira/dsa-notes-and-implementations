class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//when the list keeps track of the tail also the insertion complexity reduces when we are appending

class LinkedListTailed {
  constructor() {
    this.head = null;
    this.tail = null; // keep track of tail node
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.size == 0) {
      console.log("Empty List");
      return;
    }
    let curr = this.head;
    let string = "";

    while (curr) {
      string += `${curr.value} `;
      curr = curr.next;
    }

    console.log(string);
  }

  prepend(value) {

    const node = new Node(value)

    if(this.size == 0){
        this.head = node
        this.tail = node
        this.size++
    } else {
        let curr = this.head
        this.head = node
        node.next = curr
        this.size ++
    }

  }

  append (value) {
    const node = new Node(value)

    if(this.isEmpty()) {
        this.head = node
        this.tail = node
        this.size++
    } else {
        this.tail.next = node
        this.tail = node
        this.size++
    }
  }

  removeFromFront(){
    if(this.size == 0) return null

    const removedNode = this.head
    this.head = removedNode.next
    this.size--
    
    if(this.size == 1) this.tail = this.head
    if(this.size == 0){
      this.tail = null
      this.head = null
    }
    
    return removedNode.value
    
  }

  removeFromEnd(){
    if(this.size == 0) return null

    const value = this.tail.value

    if(this.size ===1){
      this.head = null
      this.tail = null
      this.size --
    } else {
      let prev = this.head
      while (prev.next !== this.tail){
        prev = prev.next
      }
      prev.next = null
      this.tail = prev
      this.size--
      return value
    }
    
  }
}

const list = new LinkedListTailed()

console.log('is empty', list.isEmpty())
console.log('size', list.getSize())

list.print()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)

list.print()

list.removeFromFront()
list.removeFromEnd()

list.print()
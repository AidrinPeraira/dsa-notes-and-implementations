class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  constructor(){
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.size == 0) {
      console.log("The list is empty");
      return;
    }

    let string = "";
    let curr = this.head;

    while (curr) {
      string += `${curr.value}`;
      curr = curr.next;
    }

    console.log(string);
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index == 0) {
      this.prepend(value);
      return;
    }

    if (index == this.size) {
      this.append(value);
      return;
    }

    const node = new Node(value);

    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    prev.next.prev = node;
    node.next = prev.next;
    node.prev = prev;
    prev.next = node;
    this.size++;
  }


  removeFrom(index) {
    if (index < 0 || index > this.size - 1) {
      console.log("Invalid index");
      return;
    }

    if (this.size == 1) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode.value;
    }

    if (index == 0) {
      let removedNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;

      return removedNode.value;
    }

    if (index == this.size - 1) {
      let removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;

      return removedNode.value;
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    const removedNode = prev.next;
    removedNode.next.prev = prev;
    prev.next = removedNode.next;
    this.size--;

    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;

    let curr = this.head;

    while (curr) {
      if (curr.value !== value) {
        curr = curr.next;
      } else {
        if (curr === this.head) {
          let next = curr.next;
          this.head = next;
          if (this.head) this.head.prev = null;
          else this.tail = null; // List became empty
        } else if (curr === this.tail) {
          let prev = curr.prev;
          prev.next = null;
          this.tail = prev;
        } else {
          let prev = curr.prev;
          let next = curr.next;
          prev.next = next;
          next.prev = prev;
        }

        this.size--;
        return curr.value; // return the removed value
      }
    }

    return null; // value not found
  }

  search(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }

  reverse() {
    if (this.size <= 1) return;

    let prev = null;
    let curr = this.head;

    this.tail = curr;

    while (curr) {
      let next = curr.next;

      curr.next = prev;
      curr.prev = next;

      prev = curr;
      curr = next;
    }

    this.head = prev;
    this.head.prev = null;
    this.tail.next = null;
  }
}

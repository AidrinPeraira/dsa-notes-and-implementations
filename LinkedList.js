class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
    Common methods are 
        constructor
        getSize
        isEmpty
        prepend
        append
        insert
        removeFromIndex
        removeValue
        search
        reverse
        print

    Things to take note while adding implementations
        - check if the action is done at head
        - other possible edge cases
            - value not found 
            - bounds of index provided
        - check if there is a change in size


 */

class LinkedList {
  constructor() {
    this.head = null; // the list will be initialised as empty
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  //add element at start
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

  //to view the values in the list
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
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

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index == 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;

    if (index == 0) {
      let removedNode = this.head;
      this.head = removedNode.next;
      this.size--;
      return removedNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      return removedNode;
    }
  }

  removeValue(value) {
    if (this.size == 0) return null;

    if (this.head.value == value) {
      let removedNode = this.head;
      this.head = removedNode.next;
      this.size--;
      return removedNode.value;
    } else {
      let prev = this.head;
      while (prev.next) {
        let curr = prev.next;
        if (curr.value == value) {
          prev.next = curr.next;
          this.size--;
          return curr.value;
        }
        prev = prev.next;
      }
      return null;
    }
  }

  search(value) {
    if (this.size == 0) return -1;

    let index = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value == value) {
        return index;
      }
      curr = curr.next;
      index++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

//checking
const list = new LinkedList();
console.log("List empty? :", list.isEmpty());
console.log("list size : ", list.getSize());

list.print();

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();

list.append(10);
list.append(20);
list.append(30);

list.print();

list.insert(5, 3);
list.print();

list.removeFrom(3);
list.print();

list.removeValue(20);
list.print();

console.log(list.search(10));
list.print();

list.reverse();
list.print();

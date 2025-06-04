const Queue = require("./Queue.js");
const Stack = require("./Stack.js");

//Binary Tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//normal binary tree. not binary search tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let current = queue.dequeue();

      if (current.left !== null) {
        queue.enqueue(current.left);
      } else {
        current.left = newNode;
        return;
      }

      if (current.right !== null) {
        queue.enqueue(current.right);
      } else {
        current.right = newNode;
        return;
      }
    }
  }

  //dfs in order
  traverseInOrder(node = this.root) {
    if (node == null) return;

    this.traverseInOrder(node.left);
    console.log(node.value);
    this.traverseInOrder(node.right);
  }
}

console.log("----Binary Tree-----");
let binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(30);
binaryTree.insert(40);

binaryTree.traverseInOrder();

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
        return;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (root.value < node.value) {
      if (root.right === null) {
        root.right = node;
        return;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(value, root = this.root) {
    if (root === null) {
      return false;
    }

    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.search(value, root.left);
    } else if (root.value < value) {
      return this.search(value, root.right);
    }
  }

  min(node = this.root) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return null;

    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //if match

      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        let min = this.min(root.right);

        root.value = min;

        root.right = this.deleteNode(root.right, min);
      }
    }
    return root;
  }

  dfsPreOrder(root = this.root) {
    if (root === null) return;

    console.log(root.value);
    this.dfsPreOrder(root.left);
    this.dfsPreOrder(root.right);
  }

  dfsPostOrder(root = this.root) {
    if (root === null) return;

    this.dfsPostOrder(root.left);
    this.dfsPostOrder(root.right);
    console.log(root.value);
  }

  dfsInOrder(root = this.root) {
    if (root === null) return;

    this.dfsInOrder(root.left);
    console.log(root.value);
    this.dfsInOrder(root.right);
  }

  levelOrder(root = this.root) {
    //bfs
    if (root === null) return;

    let queue = new Queue();

    queue.enqueue(root);

    while (!queue.isEmpty()) {
      let curr = queue.dequeue();

      if (curr.left !== null) {
        queue.enqueue(curr.left);
      }

      if (curr.right !== null) {
        queue.enqueue(curr.right);
      }

      console.log(curr.value);
    }
  }

  print(node = this.root) {
    this.dfsInOrder(node);
  }
}

console.log("----Binary Search Tree----");
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(56);
bst.insert(3);
bst.insert(5);
bst.insert(12);
bst.insert(60);

bst.print();
console.log("---");

console.log(bst.search(13));
bst.delete(10);

bst.print();
console.log("---");
bst.levelOrder();
console.log("---");

function dfsPreOrder(node) {
  if (node == null) return;

  let stack = new Stack();

  stack.push(node);

  while (!stack.isEmpty()) {
    let current = stack.pop();

    if (current.right !== null) {
      stack.push(current.right);
    }

    if (current.left !== null) {
      stack.push(current.left);
    }

    console.log(current.value);
  }
}

dfsPreOrder(bst.root);

//BST Problems

//find range sum of bst
//sum of all values within given range (inclusive)

function rangeSumBst(root = this.root, low, high) {
  if (root === null) {
    return 0;
  }

  let sum = 0;

  if (root.value >= low && root.value <= high) {
    sum += root.value;
    sum += rangeSumBst(root.left, low, high);
    sum += rangeSumBst(root.right, low, high);
  } else if (root.value > high) {
    sum += rangeSumBst(root.left, low, high);
  } else if (root.value < low) {
    sum += rangeSumBst(root.right, low, high);
  }

  return sum;
}

console.log(rangeSumBst(bst.root, 1, 10));

//find closest value in bst

function findClosestInBst(root, target, closest = root.value) {
  if (root == null) return closest;

  if (Math.abs(target - root.value) < Math.abs(target - closest)) {
    closest = root.value;
  }

  if (target < root.value) {
    //target is closer to left than right. therefore chance of differnce becoming smaller is to left
    return findClosestInBst(root.left, target, closest);
  } else if (target > root.value) {
    return findClosestInBst(root.right, target, closest);
  } else {
    //target euqals value
    return root.value;
  }
}

console.log(findClosestInBst(bst.root, 6));

//check is tree1 is subset of tree2
//check if 2 trees are identical
//validate if a tree is bst
//find minimum value in bst
//find kth smallest element in bst
//find kth largest element in bst
//count leaf nodes in bst
//find height of tree

// Min Heap

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    //we take biggest from top of heap

    if (this.heap.length === 0) {
      console.log("the heap is empty");
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.shift();
    }

    let removed = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return removed;
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swapIndices(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swapIndices(index, this.getParentIndex(index));

      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index) {
    //compare to find smallest index among parent and children
    let small = index;
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);

    if (this.heap[left] < this.heap[small] && left < this.heap.length) {
      small = left;
    }

    if (this.heap[right] < this.heap[small] && right < this.heap.length) {
      small = right;
    }

    if (small !== index) {
      this.swapIndices(small, index);
      this.heapifyDown(small);
    }
  }

  print() {
    console.log(this.heap);
  }

  removeValue(value) {
    let index = this.heap.indexOf(value);

    if (index === -1) {
      console.log("Value not found");
      return null;
    }

    //value is last. no need to heapify
    if (index === this.heap.length - 1) {
      return this.heap.pop();
    }

    let removed = this.heap[index];
    this.heap[index] = this.heap.pop();
    this.heapifyDown(index);
    return removed;
  }
}

console.log("------Min Heap------");
let minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(52);
minHeap.insert(1);
minHeap.insert(6);
minHeap.insert(20);

minHeap.print();

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length == 0) {
      console.log("The Heap is empty");
      return null;
    }

    if (this.heap.length == 1) {
      return this.heap.shift();
    }

    let removed = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return removed;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      if (this.heap[index] > this.heap[this.getParentIndex(index)]) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    let large = index;
    let left = this.getLeftChildIndex(index);
    let right = this.getRightChildIndex(index);

    if (this.heap[left] > this.heap[large] && left < this.heap.length) {
      large = left;
    }

    if (this.heap[right] > this.heap[large] && right < this.heap.length) {
      large = right;
    }

    if (large !== index) {
      this.swap(index, large);
      this.heapifyDown(large);
    }
  }

  removeValue(value) {
    let index = this.heap.indexOf(value);

    if (index == -1) {
      console.log("Value not found");
      return null;
    }

    if (index == this.heap.length - 1) {
      return this.heap.pop();
    }

    let removed = this.heap[index];
    this.heap[index] = this.heap.pop();
    this.heapifyDown(index);
    return removed;
  }

  print() {
    console.log(this.heap);
  }
}

//Heap Sort

//take an array. Heapify it. you get max at first. heapy rest. keep doing untill end

//max heap heapifyDown
function heapify(arr, size, index) {
  let largest = index;
  let left = index * 2 + 1;
  let right = index * 2 + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    heapify(arr, size, largest);
  }
}

function heapSort(arr) {
  let size = arr.length;

  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(arr, size, i);
    //we heapify on sub tree at a time. starting from last
  }

  for (let i = size - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}

let arr = [1, 3, 2, 5, 6, 4, 8];
heapSort(arr);
console.log(arr);

//Trie

class TrieNode {
  constructor() {
    this.children = {};
    // children will be an object of child nodes
    this.isEndOfWOrd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      //if there is no field for char in children
      //make a field and add a node for that char

      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }

      //take the node and make it current.
      node = node.children[char];
    }

    //after the loop is done all letters of word will have been added
    node.isEndOfWOrd = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      //if that letter is not found then word is not there
      if (!node.children[char]) {
        return false;
      }

      //check next letter
      node = node.children[char];
    }

    return node.isEndOfWOrd; //cant return true directly
  }

  print(node = this.root, word = "") {
    if (node.isEndOfWOrd) {
      console.log(word);
    }

    for (let char in node.children) {
      word = word + char;
      this.print(node.children[char], word);
    }
  }

  startsWith(prefix) {
    // we search for a prefix
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  autocomplete(prefix) {
    let node = this.root;

    //this is like print but adds to an array
    let result = [];

    for (let char of prefix) {
      if (!node.children[char]) {
        console.log("No results for autocomplete");
        return;
      }
      node = node.children[char];
    }
    //loop checks for prefix first
    //now collect the words

    this.collectWords(prefix, node, result);
    console.log(result);
    return result;
  }

  collectWords(prefix, node, result = []) {
    if (node.isEndOfWOrd == true) {
      result.push(prefix);
    }

    for (let char in node.children) {
      this.collectWords(prefix + char, node.children[char], result);
    }

    return result;
  }

  countWords(node = this.root) {
    let count = 0;

    if (node.isEndOfWOrd) {
      count++;
    }

    for (let char in node.children) {
      count += this.countWords(node.children[char]);
    }

    return count;
  }
}

console.log("-----Tries----");
const trie1 = new Trie();
trie1.insert("carbon");
trie1.insert("cars");
trie1.print();
console.log(trie1.search("cars"));

let tnode = new Trie();
tnode.insert("car");
tnode.insert("cat");
tnode.insert("careness");

tnode.print();
tnode.search("care");

tnode.startsWith("cat");

tnode.autocomplete("ca");

console.log("Total number of words are " + tnode.countWords());

//Graphs

/**
 * 
 * Directed vs Undirected
 * Weighted vs Unweighted (cost)
 * 
 * Applications
 *  Social Networks, Google Maps, Recomendation Systeem
 
Two ways to make Graphs
  - Using Adjacency Matric
  - Using Adjacency List *
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addvertex(vertex) {
    //create a vertex if it doesn't exist
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addvertex(v1);
    }

    if (!this.adjacencyList[v2]) {
      this.addvertex(v2);
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // having this line makes graph undirected
  }

  dfs(start) {
    const stack = new Stack();
    stack.push(start);

    const visited = {};

    while (!stack.isEmpty()) {
      const vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex); //here we do some processing as required

        //add neighbours to stack
        for (let neighbour of this.adjacencyList[vertex]) {
          if (!visited[neighbour]) {
            stack.push(neighbour);
          }
        }
      }
    }
  }

  bfs(start) {
    const queue = new Queue();
    queue.enqueue(start);

    let visited = {};

    while (!queue.isEmpty()) {
      let vertex = queue.dequeue();

      if (!visited[vertex]) {
        visited[vertex] = true;
        console.log(vertex);

        for(let neighbour of this.adjacencyList[vertex]){
          if(!visited[vertex]){
            queue.enqueue(vertex)
          }
        }
      }
    }
  }

  printGraph(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + ' -> ' + this.adjacencyList[vertex].join(", "))
    }
  }
}

console.log("----Graph-----")
const graph = new Graph()

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")

console.log("dfs: ")
graph.dfs("A")

console.log("bfs: ")
graph.bfs("A")

console.log("Graph: ")
graph.printGraph()
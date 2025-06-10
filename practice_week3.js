const Queue = require("./Queue.js");
const Stack = require("./Stack.js");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
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

    //go to last node using queue

    let queue = new Queue();
    queue.enqueue(this.root);

    let current;

    while (!queue.isEmpty()) {
      current = queue.dequeue();

      if (current.left == null) {
        current.left = newNode;
        return;
      }

      if (current.right == null) {
        current.right = newNode;
        return;
      }

      if (current.left) {
        queue.enqueue(current.left);
      }

      if (current.right) {
        queue.enqueue(current.right);
      }
    }
  }

  inOrder(node = this.root) {
    if (node === null) return;

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  //preorder
  //post order
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left == null) {
        root.left = node;
        return;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (root.value < node.value) {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(value, root = this.root) {
    if (root == null) {
      return false;
    }

    if (root.value > value) {
      return this.search(value, root.left);
    } else if (root.value < value) {
      return this.search(value, root.right);
    } else {
      return true;
    }
  }

  min(root = this.root) {
    if (root == null) return null;

    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  remove(value) {
    this.root = this.removeNode(value, this.root);
  }

  removeNode(value, root = this.root) {
    if (root == null) return null;

    if (root.value > value) {
      root.left = this.removeNode(value, root.left);
    } else if (root.value < value) {
      root.right = this.removeNode(value, root.right);
    } else {
      if (root.left == null && root.right == null) {
        return null;
      }

      if (root.left == null) {
        return root.right;
      }

      if (root.right === null) {
        return root.left;
      }

      let removed = root.value;
      let min = this.min(root.right);
      root.value = min;
      root.right = this.removeNode(min, root.right);
    }
    return root;
  }

  print(root = this.root) {
    if (root == null) return;

    this.print(root.left);
    console.log(root.value);
    this.print(root.right);
  }
}


//sum of values between given range a and b

function rangeSumBST(root, low, high){

  if(root == null) return 0

  let sum = 0

  if(root.value >= low && root.value <= high){
    sum += root.value
    sum += rangeSumBST(root.left, low, high)
    sum += rangeSumBST(root.right, low, high)
  } else if (root.value < low){
    sum += rangeSumBST(root.right, low, high)
  } else if (root.value > high){
    sum += rangeSumBST(root.left, low, high)
  }

  return sum
  
}

function findClosestBST(root, target, closest = root.value){
  
  if(root == null) return closest

  if(Math.abs(root.value - target) < Math.abs(target - closest)){
    closest = root.value
  }

  if(root.value < target){
    return findClosestBST(root.right, target, closest)
  } else if (root.value > target){
    return findClosestBST(root.left, target, closest)
  } else {
    return root.value
  }
}

function findHeightBST(root){

  if(root == null) return -1

  let LH = findHeightBST(root.left)
  let RH = findHeightBST(root.right)

  return Math.max(LH, RH) + 1
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeft(index) {
    return index * 2 + 1;
  }

  getRight(index) {
    return index * 2 + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp(index = this.heap.length - 1) {
    if (this.heap[index] < this.heap[this.getParent(index)]) {
      this.swap(index, this.getParent(index));
      this.heapifyUp(this.getParent(index));
    }
  }

  remove() {
    //remove from top

    let removed = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return removed;
  }

  heapifyDown(index) {
    let small = index;
    let left = this.getLeft(index);
    let right = this.getRight(index);

    if (left < this.heap.length && this.heap[small] > this.heap[left]) {
      small = left;
    }

    if (right < this.heap.length && this.heap[small] > this.heap[right]) {
      small = right;
    }

    if (small !== index) {
      this.swap(small, index);
      this.heapifyDown(small);
    }
  }

  removeValue(value) {
    let index = this.heap.indexOf(value);

    if (index == -1) return null;

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



function heapify(arr, size, i) {
  //heapify down

  let large = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && arr[left] > arr[large]) {
    large = left;
  }

  if (right < size && arr[right] > arr[large]) {
    large = right;
  }

  if (large !== i) {
    [arr[large], arr[i]] = [arr[i], arr[large]];
    heapify(arr, size, large);
  }
}

function heapSort(arr) {
  let size = arr.length;

  //build max heap using array

  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(arr, size, i);
  }

  //sorting
  for (let i = size - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
}


class TrieNode {
  constructor(){
    this.children = {}
    this.isEnd = false
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode()
  }

  // insert
  insert(word){
    let current = this.root
    for(let char of word){
      if(!current.children[char]){
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
    }
    current.isEnd = true
  }

  // search
  search (word){
    let current = this.root
    for(let char of word){
      if(!current.children[char]){
        return false
      }
      current = current.children[char]
    }
    return current.isEnd
  }

  // starts with check
  checkPrefix(word){
    let current = this.root

    for(let char of word){
      if(!current.children[char]){
        return flase
      }
      current = current.children[char]
    }
    return true
  }

  // autocomplete
  autocomplete(prefix){
    let node = this.root
    let result =  []

    // we loop to got last letter of prefix
    for(let char of prefix){
      if(!node.children[char]){
        console.log("NIL")
        return 
      }
      node = node.children[char]
    }

    //collect all words form here
    this.collectwords(node, prefix, result)
  }

  collectwords(node, prefix, results){
    if(node.isEnd){
      results.push(prefix)
    }

    for(let char in node.children){
      this.collectwords(node.children[char], prefix + char, results)
    }

    return results
  }

  // print all words
  print(node = this.root, word =""){
    if(node.isEnd){
      console.log(word)
    }

    for(let char in node.children){
      this.print(node.children[char], word + char)
    }
  }

  //delete
}


class Graph {
  constructor(){
    this.adjList = {}
  }

  //addvertex
  addVertex(vertex){
    if(!this.adjList[vertex]){
      this.adjList[vertex] = []
    }
  }

  //addedge
  addEdge(v1, v2){
    if(!this.adjList[v1]){
      this.addVertex(v1)
    }

    if(!this.adjList[v2]){
      this.addVertex(v2)
    }

    this.adjList[v1].push(v2)
    this.adjList[v2].push(v1)
  }

  //remove vertex
  removeVertex(v){
    if (!this.adjList[v]) return 

    for(let neighbour of this.adjList[v]){
      this.removeEdge(v, neighbour)
    }
  }

  //remove edge
  removeEdge(v1, v2){
    //add if to check if vertices exist
    this.adjList[v1] = this.adjList[v1].filter(val => val != v2)
    this.adjList[v2] = this.adjList[v2].filter(val => val != v1)
  }

  //bfs
}
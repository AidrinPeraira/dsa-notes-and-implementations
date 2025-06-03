/*
HEAP

Tree like structure
Built using an array
greater value at top lesser value as child nodes

Two Types
    - > Max Heap: max value at top
    - > Min Heap: min value at top

Logic
    -> for a node at i
           -> left heap is at 2i + 1
           -> right heap is at 2i + 2
           -> parent will be at Math.floor((i - 1) / 2)


 */


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
    return removed
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

  removeValue(value){
    let index = this.heap.indexOf(value)

    if(index === -1){
      console.log("Value not found")
      return null
    }

    //value is last. no need to heapify
    if(index === this.heap.length -1){
      return this.heap.pop()
    }

    let removed = this.heap[index]
    this.heap[index] = this.heap.pop()
    this.heapifyDown(index)
    return removed
  }
}

console.log("------Min Heap------")
let minHeap = new MinHeap()

minHeap.insert(10)
minHeap.insert(52)
minHeap.insert(1)
minHeap.insert(6)
minHeap.insert(20)

minHeap.print()


class MaxHeap {
  constructor(){
    this.heap = []
  }

  getLeftChildIndex(index){
    return (index * 2) + 1
  }

  getRightChildIndex(index){
    return (index * 2) + 2
  }

  getParentIndex(index){
    return Math.floor((index - 1)/2)
  }

  swap(index1, index2){
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }

  insert(value){
    this.heap.push(value)
    this.heapifyUp()
  }

  remove(){
    if(this.heap.length == 0){
      console.log("The Heap is empty")
      return null
    }

    if(this.heap.length == 1){
      return this.heap.shift()
    }

    let removed = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return removed
  }

  heapifyUp(){
    let index = this.heap.length - 1

    while(index > 0){
      if(this.heap[index] > this.heap[this.getParentIndex(index)]){
        this.swap(index, this.getParentIndex(index))
        index = this.getParentIndex(index)
      } else {
        break;
      }
    }
  }

  heapifyDown(index){
    let large = index
    let left = this.getLeftChildIndex(index)
    let right = this.getRightChildIndex(index)

    if(this.heap[left] > this.heap[large] && left < this.heap.length){
      large = left
    }

    if(this.heap[right] > this.heap[large] && right < this.heap.length){
      large = right
    }

    if(large !== index){
      this.swap(index, large)
      this.heapifyDown(large)
    }
  }

  removeValue(value){
    let index = this.heap.indexOf(value)

    if(index == -1){
      console.log("Value not found")
      return null
    }

    if(index == this.heap.length -1){
      return this.heap.pop()
    }

    let removed = this.heap[index]
    this.heap[index] = this.heap.pop()
    this.heapifyDown(index)
    return removed
  }

  print(){
    console.log(this.heap)
  }
  
}





// /**
//  * 
//  HEAP SORT (O(n log n))

//  we can use binary tree logic and heap data structure to sort an array

//  we turn the array order into an heap order
//  then swap root with last leaf node
//  then we repeat for rest of the array without including the last element (which will be at the right place)

//  */


//to arrange the array as a heap use heapify (use heapify up or down)


//Heap Sort

//take an array. Heapify it. you get max at first. heapy rest. keep doing untill end

//max heap heapifyDown
function heapify(arr, size, index){
  let largest = index
  let left = index * 2 + 1
  let right = index * 2 + 2

  if(left < size && arr[left] > arr[largest]){
    largest = left
  }

  if(right < size && arr[right] > arr[largest]){
    largest = right
  }

  if(largest !== index){
    [arr[largest], arr[index]] = [arr[index], arr[largest]]
    heapify(arr, size, largest)
  }
}

function heapSort(arr){

  let size = arr.length

  for(let i = Math.floor(size/2)-1; i >=0; i--){
    heapify(arr, size, i)
    //we heapify on sub tree at a time. starting from last
  }

  for(let i = size - 1; i > 0; i--){
    [arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, i, 0)
  }
}

let arr = [1, 3, 2, 5, 6, 4, 8];
heapSort(arr);
console.log(arr);
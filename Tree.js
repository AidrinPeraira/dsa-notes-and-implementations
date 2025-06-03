/**
 * TREE -> Data structure

 - Hierarchial structure
 - nodes connected by edges
 - allow easy search
 - tree will NOT loop or have cycles

 - uses
 - file stystems
 - DOM Tree
 - Chat Bot
 - Abstract Syntax Tree

 - Terms
 Parent Node
 Child Node
 Root Node
 - has no parent, only one allowed, starting node
 Leaf Node - Node without child nodes
 Sibling Node -> nodes with same parent node
 Ancestor node -> parent of parent
 Path -> sequence of nodes and edges from one node to another
 Distance -> number edges between two nodes along shortest node
 Degree of a node -> number of child nodes
 Degree of Tree -> the highest node degree the tree has
 Depth -> Number of edges from root to that node
 Height of NOde  ->  number of edges from deepest leaf to that node

 */

/**
 *  Binary Search Trees
 *  Each node is allowed to have a max of 2 Children (left child and right child)
 *
 *  Binary Search Tree
 *      Binary tree that follows an additional rule.
 *      Max two child nodes per parent +
 *      Value of left child node  < parent < value of right child Node
 *
 *  Common Methods
 *      - Insertion , Search, BFS, DFS, Delete
 *
 *  Applications
 *      - Searching, Sorting, Implement Lookup Tables, Implement Priority Queues
 *
 */

/**
 What is tree TRAVERSAL??
 -it just means to visit all nodes in trees
 - 2 common ways DFS and BFS

 Depth First Search
 - visit root node
 - backtrack
 - vist all right side nodes
 - 3 Types (pre order, in order, post order)

 Pre-order Traversal (logic)
 read data of node
 visit left sub tree
 visit right sub tree

 In-order Traversal (logic)
 visit left sub tree
 read node
 visit right subtree

 Post-order Traversal (logic)
 visit left sub tree
 visit right subtree
 read node


 Depth First Search
 Create a Queue
 Enquuw root node
 As long as node exists in queue run the following loop
 dequeue node from front
 read that node
 enqueue the node's left child
 enqueue the node's right child
 */




//Common actions
/**

 insert
 search to return true
    bfs
    dfs
 min
 max
 delete
 check if bst
 return the closest value to given value
 k'th largest element


 */


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


dfsPreOrder(bst.root)



//BST Problems

//find range sum of bst
//sum of all values within given range (inclusive)

function rangeSumBst(root = this.root, low, high){
  if(root === null) {
    return 0
  }

  let sum = 0

  if(root.value >= low && root.value<=high){
    sum += root.value 
    sum += rangeSumBst(root.left, low, high)
    sum += rangeSumBst(root.right, low, high)
  } else if (root.value > high){
    sum += rangeSumBst(root.left, low, high)
  } else if (root.value < low){
    sum += rangeSumBst(root.right, low, high)
  }

  return sum
}

console.log(rangeSumBst(bst.root, 1, 10))

//find closest value in bst

function findClosestInBst(root, target, closest = root.value){
  
  if(root == null) return closest

  if(Math.abs(target - root.value) < Math.abs(target - closest)){
    closest = root.value
  }

  if(target < root.value){
    //target is closer to left than right. therefore chance of differnce becoming smaller is to left
    return findClosestInBst(root.left, target, closest)
  } else if (target > root.value){
    return findClosestInBst(root.right, target, closest)
  } else {
    //target euqals value
    return root.value
  }
  
}

console.log(findClosestInBst(bst.root, 6))


//check is tree1 is subset of tree2
//check if 2 trees are identical
//validate if a tree is bst
//find minimum value in bst
//find kth smallest element in bst
//find kth largest element in bst
//count leaf nodes in bst
//find height of tree








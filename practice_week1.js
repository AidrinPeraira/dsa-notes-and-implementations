// print first 10 fibonacci nos using recursion

// function fibonacci (n){

//   if(n==0) return 0
//   if(n==1) return 1

//   return fibonacci(n-1) + fibonacci(n-2)

// }

// for(let i = 0; i<10; i++){
//   console.log(fibonacci(i))
// }


// sum of n natural numbers using recursion


// function sumNums (n) {
//   if(n==1) return 1d
//   return n + sumNums(n-1)
// }

// console.log(sumNums(10))

//find factorial of n natural numbers

// function factorial (n){
//   if(n==1) return 1

//   return n * factorial(n-1)
// }

// console.log(factorial(5))


//print n natural numbers using recurrsion

// function nums(n){

//   if(n==0) return

//   nums(n-1)
//   console.log(n)
// }

// nums(10)


//check if a string is a palindrome using recursion

// function checkPalindrome(string){

//   if(string.length < 1) return true

//   if(string[0] !== string[string.length-1]) return false

//   return checkPalindrome(string.slice(1, -1))

// }

// console.log(checkPalindrome('malayalam'))


//reverse a string using recurssion

// function reverseString(string){

//   if(string.length <= 1) return string

//   return reverseString(string.slice(1)) + string[0]

// }

// console.log(reverseString('apple'))


//reverse each word in a string

// function reverseWord(string){
//   if(string.length <= 1) return string
//   return reverseWord(string.slice(1)) + string[0]
// }

// function reverseSentence(sentence) {
//   return sentence.split(" ").map( word => reverseWord(word)).join(" ")
// }
// console.log(reverseSentence('Hello World'))


//find third largest element

// let arr = [10,3,5,2,6,7,48,1]

// let largest = -Infinity
// let secLargest = -Infinity
// let thirdLargest = -Infinity

// for(let i=0; i<arr.length; i++ ){
//   if(arr[i] > largest) {
//     thirdLargest = secLargest
//     secLargest = largest
//     largest = arr[i]
//   } else if (arr[i] < largest && arr[i] > secLargest) {
//     thirdLargest = secLargest
//     secLargest = arr[i]
//   } else if (arr[i] < secLargest && arr[i] > thirdLargest){
//     thirdLargest = arr[i]
//   }
// }

// console.log(largest, secLargest, thirdLargest)


// find third largest element using recursion

// let arr = [10,3,5,2,6,7,48,1]
// function findTopThree(arr,top = [-Infinity,-Infinity , -Infinity] , index = 0){
//   let num = arr[index]

//   if(index === arr.length)return top;
//   if(num > top[0]){
//     top[2] = top[1];
//     top[1] = top[0];
//     top[0] = num;
//   }else if(num > top[1] && num < top[0]){
//     top[2] =top[1];
//     top[1] = num
//   }else if(num > top[2] && num < top[1]){
//     top[2] = num
//   }
//   return findTopThree(arr,top,index+1)
// }
// console.log(findTopThree(arr))


//remove duplicates from an array

// let arr = [10,10,3,5,5,2,6,7,48,1]

// let uniqArr = []

// for(let i=0; i<arr.length; i++){

//   let flag = true

//   for(j=0; j<uniqArr.length; j++){
//     if(arr[i] == uniqArr[j]){
//       flag = false
//       break;
//     }
//   }

//   if(flag) uniqArr[uniqArr.length] = arr[i]

// }

// console.log(uniqArr)


//remove duplicates using recursion

// function removeDuplicates(arr,  unique = []){

//   if(arr.length == 0) return unique

//   if(!unique.includes(arr[0])){
//     unique.push(arr[0])
//   }

//   return removeDuplicates(arr.slice(1), unique)

// }

// console.log(removeDuplicates([10,10,3,5,5,2,6,7,48,1]))


//insert at index inLL
//find mid element LL
//search for value in LL
//add elemnt at mid in LL
//remove mid elemetninLL
//remove first element in LL
//remove last element in LLL
// reverse a LL
// prepend, append, reverse, delete,  repeat all above in doubly also

//merge to sorted arrays into a merged and sorted array without usiung sort method


//Implementing a linked list

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   print() {
//     if (this.size == 0) {
//       console.log("The list is empty");
//       return;
//     }

//     let string = "";

//     let curr = this.head;
//     while (curr) {
//       string += `${curr.value} `;
//       curr = curr.next;
//     }

//     console.log(string);
//   }

//   append(value) {
//     const node = new Node(value);

//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       // we don't need to loop through since we have the tail
//       // let curr = this.head;
//       // while (curr.next) {
//       //   curr = curr.next;
//       // }

//       // curr.next = node;
//       // node.prev = curr;
//       // this.tail = node

//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//       this.size++;
//     }
//   }

//   prepend(value) {
//     const node = new Node(value);

//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//       this.size++;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//       this.size++;
//     }
//   }

//   insert(value, index) {
//     if (index < 0 || index > this.size) return "Invalid index";

//     const node = new Node(value)

//     if (index == 0) {
//       this.prepend(value);
//       return;
//     }

//     if ((index == this.size)) {
//       this.append(value);
//       return;
//     }

//     let prev = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       prev = prev.next;
//     }

//     node.next = prev.next;
//     prev.next.prev = node;

//     prev.next = node;
//     node.prev = prev;

//     this.size++;
//   }

//   removeNode (value){
//     if(this.isEmpty()) return null


//     if(this.size==1 && this.head.value == value){
//       this.head = null
//       this.tail = null
//       this.size--
//       return value
//     }

//     if(this.head.value == value){
//       let removed = this.head
//       this.head = removed.next
//       this.head.prev = null
//       this.size--
//       return removed.value
//     }

//     if(this.tail.value == value){
//       let removed = this.tail
//       this.tail = removed.prev
//       this.tail.next = null
//       this.size--
//       return removed.value
//     }

//     let prev = this.head
//     while(prev.next){
//       let curr = prev.next
//       if(curr.value == value){
//         let removed = curr
//         prev.next = removed.next
//         removed.next.prev = prev
//         this.size--
//         return removed.value
//       }
//       prev = prev.next
//     }

//     return null

//   }
// }


// const list = new DoublyLinkedList()

// list.print()

// list.prepend(1)
// list.prepend(2)
// list.prepend(3)

// list.append(10)
// list.append(20)
// list.append(30)

// list.print()


// //display the unique elements from both ararys

// let a = [12,34,45,56,67,78]
// let b = [12,22,56,67,37,59]

// function findUniquesInTarget(arrOne, target){

//     let res = []

//     for(let i = 0; i<arrOne.length; i++){
//         let unique = true
//         for(let j=0; j<target.length; j++){
//             if(arrOne[i] == target[j]){
//                 unique = false
//                 break;
//             }
//         }
//         if(unique){
//             res.push(arrOne[i])
//         }
//     }

//     return res

// }

// function removeCommons (a, b){
//     return [...findUniquesInTarget(a, b), ...findUniquesInTarget(b, a)]
// }

// console.log(removeCommons(a,b))












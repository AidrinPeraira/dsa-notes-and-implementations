//Bubble Sort O(n^2)
// not very efficient but good start

/**
 * The idea is to check eaach pair of adjacent elements in the array.
 * arrange the pair in ascending
 * repeat for next pair
 *
 * now the largest will be at the last index
 * repeat the whole step again after skipping the last element
 *
 * this will cause the largest elementg to Bubble to the end
 *
 * the array will be sorted when no more swaps are made
 * this is a good way to prevent loop from runiong wild
 */

let arr = [5, 3, 7, 4, 2, 8, 9, 1, 6, 10];

//implementaiton one
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr
// }

// console.log(bubbleSort(arr));

//implementaiton two
// function bubbleSort (arr){
//     for(let i=0; i<arr.length; i++){
//         let flag = true
//         for(let j = 0; j<arr.length - 1 - i; j++){ //the minus one prevents out of bounds checks
//             if(arr[j] > arr[j+1]){
//                 [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
//                 flag = false
//             }
//         }
//         if(flag) return arr
//     }

//     return arr
// }

// console.log(bubbleSort(arr))

//most effcient bubble sort (we can keep track of where we swapped and not go beyond that

// function bubbleSort(arr) {
//   let n = arr.length;
//   while (n > 0) {
//     let newN = 0; // last index where a swap occurred
//     for (let i = 1; i < n; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
//         newN = i;
//       }
//     }
//     n = newN; // reduce the range of comparison
//   }
//   return arr;
// }

/**
 * SELECTION SORT -> O(n^2)
 *  - assume first element as sorted
 * - iterate through the rest to find smallest in unsorted part
 * - swap smallest element with first element of unsorted part
 */

// function selectionSort(arr){

//   for(let i = 0; i < arr.length; i++){
//     let minIndex = i
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[j]<arr[i]){
//         minIndex = j
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//   }
//   return arr
// }

// selectionSort(arr)
// console.log(arr)

/**
 * INSERTION SORT //this like sorting cards in hand
 *
 * Best case -> single loop if already sorted
 * Average and worst -> O(n^2)
 * Space -> O(1)
 *
 *  we split the array into a sorted and unsorted half.
 * then we select a value from the unsorted part and  check with the elements in unsorted part alone
 * to select a value we have to move backwords from the selected elemet
 * it wont work moving forwards
 * then we insert it in the corect position
 *
 * we don' t fully split it. we just virtuallty split
 */

// function insertionSort (arr){

//   for(let i = 1; i<arr.length; i++){

//     let insert  = arr[i]

//     let j = i-1 //index to search in sorted half
//     while(j >=0){
//         if(arr[j] > insert){
//             arr[j+1] = arr[j]
//             j--
//         } else {
//             break;
//         }
//     }

//     // now all elements that were bigger were shifted to right.
//     //j+1 will be at the correct position  for insert
//     arr[j+1] = insert

//   }

//   return arr

// }

// console.log(insertionSort(arr))

/**
 * QUICK SORT
 *
 * worst -> O(n^2)
 * average -> O(n log n)
 * space -> If in place O(1) if makeing an empty array O(n log n)
 *
 *
 * First we pick a pivot element
 *  - It can be any element.
 *  - then we put everything greater than the pivot to one side and lesser to the other
 *  - Then we repeat the entire steps again for each side
 *
 * this is recursive
 *
 * the base consdition will be length of array as 1.
 * when we reach base condition we just concat both sides
 */

//Lets assume the pivot element as last element

// function quickSort (arr) {

//   if(arr.length < 2) return arr

//   let pivot = arr[arr.length - 1] // we take the last element

//   let left = []
//   let right = []

//   for(let i=0; i<arr.length - 1; i++){
//     //we dont loop the last elemenent since it is the pivot
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort(arr))

// function quickSortInPlace (arr, left = 0, right = arr.length-1){

//  if (left >= right ){
//   return
//  }
//  const pivotIndex = partition(arr, left, right)

//  quickSortInPlace(arr, left, pivotIndex-1) //recusrsion call for left and right
//  quickSortInPlace(arr, pivotIndex+1, right)
// }

// function partition (arr, left, right){
//   //to rearranege element around oivit

//   const pivot = arr[right] //pick last element as pivot

//   let i = left - 1 // to keep track of smallest element (will always start one outside)

//   //the loop will iterate to all elements untill end
//   // pivot is at right end
//   // this wil bring all elements less than pivot to starting of array
//   // the largest element smaller than pivot will be at i
//   for(let j = left; j<right; j++){
//     if(arr[j] <= pivot){
//       i++
//       [arr[i], arr[j]] = [arr[j], arr[i]] //swap elements
//     }
//   }

//   // we move the pivot to i+1
//   //now all elements in left < pivot value  < right
//   [arr[i+1], arr[right]] = [arr[right], arr[i+1]]

//   return i+1 //return pivot index

// }

// quickSortInPlace(arr)
// console.log(arr)

/**
 * MERGE SORT
 * 
 * Worst ->  O(n log n) 
 * 
 * - first we keep dividing the array untill we get arrays with 1 element
 * - an array with one element is sorted
 * 
 * - then we merege back each sub array in sorted fashion
 * - this is stored in temp arra. we remove from the sub array and put it temp one by one
 * - we keep MERGING untill we get one singel array
 */

// function mergeSort (arr){

//   if(arr.length < 2) return arr

//   const mid = Math.floor(arr.length / 2)

//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid)

//   return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge (leftArr, rightArr){
//   let sortedArr = []
//   while(leftArr.length > 0 && rightArr.length>0){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArr.push(leftArr.shift())
//     } else {
//       sortedArr.push(rightArr.shift())
//     }
//   }

//   return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort(arr))






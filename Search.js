// Linear Search

//find index of element in array. return -1 if it is not found

//Solution 1: O(n)
// function findPositionOf(target, arr){
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] == target) return i
//     }
//     return -1
// }

// console.log(findPositionOf(5 , [1,2,3,2,4,3,5,6,7,54]))

// Binary Search
//find index of element in array. return -1 if it is not found

/**
 * BINARY SEARCH ONLY WORKS ON SORTED ARRAY
 */

    //Soution 1: O(log n)

    // function findPositionOf(target, arr) {
    // let leftIndex = 0;
    // let rightIndex = arr.length - 1; 

    // while (leftIndex <= rightIndex) {
    //     let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

    //     if (arr[middleIndex] == target) {
    //     return middleIndex;
    //     }

    //     if (target < arr[middleIndex]) rightIndex = middleIndex - 1; // we add minus 1 to exclude the middle element
    //     if (target > arr[middleIndex]) leftIndex = middleIndex + 1; //exclude the middle element
    // }

    // return -1
    // }

    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(findPositionOf(5, arr));
    // console.log(findPositionOf(7, arr));
    // console.log(findPositionOf(15, arr));




// Recursive Binary Search
//find index of element in array. return -1 if it is not found

    // Solution 1: O(log n) & O(log n)

    // function findPositionOf(target, arr, left = 0, right = arr.length-1){

    //     if(arr.length == 0 || left > right) return -1

    //     let mid = Math.floor((left + right)/2)

    //     if(arr[mid] == target) return mid

    //     if(arr[mid] > target) return findPositionOf(target, arr, left, mid-1)
    //     if(arr[mid] < target) return findPositionOf(target, arr, mid+1, right)

    //     return -1
    // }

    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // console.log(findPositionOf(5, arr));
    // console.log(findPositionOf(7, arr));
    // console.log(findPositionOf(15, arr));

// //Cartesian Product

// // Cartesian product in maths is:
//     /**
//      * If we have to sets. Set A and Set B (usually arrays in our case)
//      * Cartesian product is  A x B of sets such that we get result
//      * Set P with all items of the format (a,b)  where a is from A and b is from B (usually an array of arrys)     */

// /**
//  * Given to finite non empty sets, find the Cartesian Product
//  * 
//  *  - to get the answer we just need to travers both arrays and pair up the values
//  */

// //Time complexity is O(m x n) => depends on both length of arrays

// let A = [1,2,3,4,5]
// let B = [10, 20, 30]

// function cartesianProduct (arrOne, arrTwo){
//     let result = []
//     for(let i = 0; i<arrOne.length; i++){
//         for(let j=0; j<arrTwo.length; j++){
//             result.push([arrOne[i], arrTwo[j]])
//         }
//     }
//     return result
// }

// console.log(cartesianProduct(A, B))


// //Climbing Staircase

// /**
//  * Given a staircase of 'n' steps count number of ways we can climb the stairs
//  * You can climb one or two steps at a time 
//  */

// /**
//  * How to solve?
//  * 
//  * we can climb to step n from step n-1 or step n-2 only.
//  * so if we know the number of ways we can climb to n-1 and n-2 then we can add those
//  * to get number of steps to n 
//  * 
//  */

// // O(n) since 1 loop 
// function climbingStaircase (n, result){ 
//     //get all we have to do is get the nth fibonnaci number

//     const noOfWays = [1, 2]

//     for(let i = 2; i<=n; i++){
//         noOfWays[i] = noOfWays[i-1] + noOfWays[i-2] 
//     }

//     return noOfWays[n-1]
// }

// console.log(climbingStaircase(5))




// //Tower of Hanoi

// /**
//  * It is the small game asking us t sort a tower of rings stacked like a pyrmanid and 3 posts.
//  * Move each  from one side to another untill we get a similar pyramid on anither post

//        |             |             |
//       ===            |             |
//      =====           |             |
//     =======          |             |
//    -----A-----   -----B-----   -----C-----

//                 to 

//        |             |             |
//        |             |            ===
//        |             |           =====
//        |             |          =======
//    -----A-----   -----B-----   -----C-----
 
//  */

// function towerOfHanoi (n , fromRod, toRod, usingRod){

//     //n is t the number of discs

//     if(n == 1) {
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
//         return
//     }

//     towerOfHanoi(n-1, fromRod, usingRod, toRod)
//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    
//     towerOfHanoi(n-1, usingRod, toRod, fromRod)

// }

// towerOfHanoi(3, 'A', 'B', 'C')
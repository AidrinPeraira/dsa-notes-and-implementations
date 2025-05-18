/**
 
Recursion

What is it?
    "For problems whose solution involves a smaller instance of the problem itself"
    
    Recursion is when a function calls itself 
    it is not always the fastest solution but it can give simpler code
    it is necessary to give a base case to terminate the recursive call. 
 */


// Recursive Fibonacci 

//Finding the nth fibonacci number.

    // Solution 1: O(2^n) -> binary recursion
    // function findFibonacciAt(n){
        
    //     if(n <= 1 ) return n

    //     return findFibonacciAt(n-1) + findFibonacciAt(n-2)
    //     //this is binary recursion
    // }

    // //0,1,1,2,3,5,8
    // console.log(findFibonacciAt(0)) 
    // console.log(findFibonacciAt(1)) 
    // console.log(findFibonacciAt(5)) 

//How to find the sum of first n fibonnaci numbers?

    // // Solution 1: without memoisation
    // function findFibonacciAt(n){
    //     if(n<=1) return n
    //     return findFibonacciAt(n-1) + findFibonacciAt(n-2)
    // }

    // function sumOfFibanacciTill(n){
    //     if(n<=1) return n
    //     return findFibonacciAt(n) + sumOfFibanacciTill(n-1)
    // }

    // //0,1,1,2,3,5
    // console.log(sumOfFibanacciTill(5))

    // Solution 2: with memoisation
    // function findFibonacciAt(n, memo = {}){

    // }

//How to print n fibonnaci numbers?


// Recursive Factorial

//find the factorial of a given number

    // solution 1: O(n)
    // function findFactorialOf(n){
    //     if(n<=1) return 1
    //     return n * findFactorialOf(n-1)
    // }

    // console.log(findFactorialOf(5))

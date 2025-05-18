// Fibonacci Sequence
// Find first n numbers of Fibonnaci sequence

//Solution 1 (The time and complexity is O(n)  )
    // function findFibonacciElements(n) {
    // if (n < 1) return "Invalid input";
    
    // let arr = [];

    // for (let i = 1; i < n; i++) {
    //     if (i == 1) {
    //     arr.push(0);
    //     continue;
    //     }
    //     if (i == 2) {
    //     arr.push(1);
    //     continue;
    //     }

    //     arr.push(arr[i - 2] + arr[i - 3]);
    // }

    // return arr;
    // }

    // console.log(findFibonacciElements(0));
    // console.log(findFibonacciElements(2));
    // console.log(findFibonacciElements(7));
    // console.log(findFibonacciElements(10));




//Factorial of Number
// Find the factorial of an integer n.

//Solution 1 (O(n))
    // function factorial(n){
    //     if(n<0) return "invalid entry"

    //     if (n == 0 || n == 1) return 1

    //     let res = 1

    //     for(let i = 2; i <= n; i++){
    //         res *= i
    //     }

    //     return res
    // }

    // console.log(factorial(5))
    // console.log(factorial(4))





//Prime Number
//Determine if a number is prime 

//Solution 1: O(n)
    // function checkPrime(n){
    //     if(n<=1) return "invalid entry"
    //     if(n==2) return "The number is prime"
    //     for(let i=2; i<=Math.sqrt(n); i++){
    //         if(n%i == 0) return 'The number ' + n +' is not prime'
    //     }
    //     return 'The number ' +n+ ' is prime'
    // }

    // console.log(checkPrime(10))
    // console.log(checkPrime(5))
 




//Power of 2
//check if an integer is a power of 2

//Solution 1: O(n)
    // function checkPowerOfTwo(n){
    //     if(n <= 0 ) return 'invalid entry'
    //     while (n > 1){
    //         if(n%2 !== 0) return false
    //         n= n/2
    //     }
    //     return true
    // }

    // console.log(checkPowerOfTwo(1))
    // console.log(checkPowerOfTwo(2))
    // console.log(checkPowerOfTwo(5))

// Solution 2: O(1)
    //the function uses bitwise operator to cancel out the binary
    function checkPowerOfTwoBitwise (n){
        if(n<1) return false
        
        return (n & (n-1) === 0)
    } 
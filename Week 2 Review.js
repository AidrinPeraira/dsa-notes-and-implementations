
// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 },
//   { name: "Diana", age: 21 }
// ];

// //sort by age merge sort

// function mergeSort(arr){

//     if(arr.length <2) return arr

//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))

//     return merge (left , right)
// }

// function merge (left, right){

//     let sorted = []

//     while(left.length && right.length){
//         if(left[0].age < right[0].age){
//             sorted.push(right.shift())
//         } else {
//             sorted.push(left.shift())
//         }
//     }

//     return [...sorted, ...left, ...right]
// }

// console.log(mergeSort(students))





// gtetttteeeeeettee
// output should be eeeeee
// Find the longest consecutive repeating characters


// let string = "gtetttteeeeeettee"

// function longest (str){   


//     let arr = string.split("")

//     let res = []

//     for(let i =0; i<arr.length; i++){
//         if(arr[i] !== arr[i+1]){
//             arr.splice(i, 0, " ")
//         }
//     }

//     return arr

    
// }

// console.log(longest(string))



// abarrtytrr

// aba rrtytrr

// output should be rrtytrr

function checkPalindrome(str){
    let res = []

    for(let i=0; i<str.length; i++){
        res.unshift(str[i])
    }

    return str == res.join("")
}

// console.log(checkPalindrome("aaaa"))

// function findLargestPalindrome (str){

//     let currentIndex = 0
//     let currentLargest =''

//     let res = ''
//     for(let i=0; i<str.length; i++){
//          res += str[i]

//     }

//     return currentLargest
// }

// console.log(findLargestPalindrome("abarrtytrr"))



let name = 'aidrin peraira'

function reverse (str){
    let stack = []

    for(let i =0; i<str.length; i++){
        if(str[i] == " "){
            str = str.slice(i)
            break;
        } else { 
            stack.push(str[i])
        }
    }

    let result = ''

    while(stack.length > 0){
        result += stack.pop()
    }

    return result + str
}

console.log(reverse(name))




// [1,5,7,14,20]  target =  19\

let arr = [1,5,7,14,20]
let target =  19

let i = 0
let j = arr.length - 1

while(i!=j){
    if(arr[i] + arr[j] == target){
        return [i, j]
    } else 
    if (arr[i] + arr[j] > target){
        j--
    } else 
    if(arr[i] + arr[j] < target){
        i++
    }
}


//search for a value in d LL and delte


class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLinkedList{
    constructor (){
        this.head = null
        this.size = 0
    }

    delete (value){

        if(this.head == value){
            let curr = this.head
            let next = curr.next
            this.head = next
            next.prev = null
            return curr.value
        }

        let prev = this.head
        while(prev.next){
            let curr = prev.next
            
            if(curr.value == value){

                let p = curr.prev
                let n = curr.next

                p.next = n
                n.prev = p

                return curr.value

            } else {
                prev = prev.next
            }
        }

        return null



    }
}


let string = 'helloworld'

//remove l

function remove (string, result = ''){

    if(string.length == 0) return result

    if(string[0] !== 'l'){
        result =  result + string[0]
        return remove(string.slice(1), result)
    } else {
        return remove(string.slice(1), result)
    }
}

console.log(remove(string))

//leetc code 121
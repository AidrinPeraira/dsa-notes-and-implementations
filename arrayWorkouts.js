


//display the unique elements from both ararys

let a = [12,34,45,56,67,78]
let b = [12,22,56,67,37,59]

function findUniquesInTarget(arrOne, target){

    let res = []

    for(let i = 0; i<arrOne.length; i++){
        let unique = true
        for(let j=0; j<target.length; j++){
            if(arrOne[i] == target[j]){
                unique = false
                break;
            }
        }
        if(unique){
            res.push(arrOne[i])
        }
    }

    return res

}

function removeCommons (a, b){
    return [...findUniquesInTarget(a, b), ...findUniquesInTarget(b, a)]
}

console.log(removeCommons(a,b))
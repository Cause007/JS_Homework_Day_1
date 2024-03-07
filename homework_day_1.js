//EXERCISE 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names) {
    let x = 0
    let text = ''
    for(let i = 0; i < dog_names.length; i++) {
        dog_string.includes(dog_names[i]) ? text +=(`Matched ${dog_names[i]} \n`) : x++
    }
    if(x == dog_names.length){
        return 'No Matches'
    }
    return text
}
console.log(findWords(dog_string, dog_names))


//Alternative for case-not sensitive:
function findWords2(dog_string, dog_names) {
    let x = 0
    text = ''
    for(let i = 0; i < dog_names.length; i++) {
        dog_string.toLowerCase().includes(dog_names[i].toLowerCase()) ? text +=(`Matched ${dog_names[i].toLowerCase()} \n`) : x++
    }
    if(x == dog_names.length){
        return 'No Matches'
    }
    return text
}
console.log(findWords2(dog_string, dog_names))

//EXERCISE 2

/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        arr.splice(i,1,'even index')
    }
}
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

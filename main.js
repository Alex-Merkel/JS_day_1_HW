// Exercise 1:
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for(let i = 0; i < dog_names.length; i++){
        let the_name = dog_names[i];
        if(dog_string.toLowerCase().includes(the_name.toLowerCase())){
            console.log(`Matched ${the_name[0].toUpperCase() + the_name.toLowerCase().slice(1)}`);
    } else {
        console.log('No Matches');
    }
    }
}
//Call method here with parameters
findWords(dog_string, dog_names);



// Exercise 2:
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index');
        }
    }
    return arr;
}

console.log(replaceEvens(arr))



// Codewars question in JavaScript #1:
// Even or Odd:
function evenOrOdd(number) {
    if(number % 2 == 0){
      return 'Even'
    } else {
      return 'Odd'
    }
}


// Codewars question in JavaScript #2:
// Make Negative:
function makeNegative(num) {
    let n = Math.abs(num)
    return -n
}


// Codewars question in JavaScript #3:
// Square(n) Sum
function squareSum(numbers){
    let count = 0
    for(i = 0; i < numbers.length; i++){
      count += numbers[i] ** 2
    }
    return count
}


// Codewars question in JavaScript #4:
// Multiply:
function multiply(a, b){
    let c = a * b;
    return c;
}

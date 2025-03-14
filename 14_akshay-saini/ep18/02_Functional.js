// Functional Programming (FP) is a programming paradigm focused on writing code 
// using pure functions and avoiding side effects.
// In FP, code is declarative (what to do) rather than imperative (how to do it).


const calculate=function(arr,logic){
    const output =[];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }// here we are calling logic function for ith index of array 
    // it can return area or circumference when given input of some value
    // and we pushing the outpur from this function in array
    return output;
}

// calculate --> higher order function as it takes function as input

const area = function(radius){
    return radius * radius * Math.PI;
}
// area and circumference are callback functions here

const circumference = function ( radius){
    return 2* radius * Math.PI;
}

const radius = [3,1,2,4];

console.log(calculate(radius , area));
console.log(calculate(radius,circumference))

// we are using Math.PI here as a value of PI
// Math is golbal object which has different propeties like 
// max min sqrt and many more 
// it also stores some important constants like pi











const userEmail = []

if (userEmail) {
    console.log("Got user email");// this will print 
} else {
    console.log("Don't have user email");
}
// because empty array is truthy value


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// empty array is truthy value we can't directly check for array 
// so we use lenght property to find whether array is empty or not 


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Object.keys(emptyObj) --> this will return array of key and values in object 
// if object is empty then array is also empty so applying lenght property of array
// we can check whether array is empty or not


// Nullish Coalescing Operator (??): null undefined
// this is operator is used to provide alternate values when first value is either null or undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // val1 will store 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // 10 will be stored because as nullish coalescing operator gets fist value 
// it stores it


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
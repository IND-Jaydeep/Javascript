// ********** String ----> number **************

let score = "101"
console.log(typeof(score));//string

//when we convert string -> number 
let numberScore=Number(score) // syntax for type conversion
console.log(typeof numberScore);

// 33 --> 33
// 223abc --> NaN (NaN stands for Not a Number which is kind of number stored in number datatype  variables)
// NaN is stored in variable when the value of string is either not numeric or  it is undefined


//********** Boolean --> Number ***************

// true --> 1, false --> 0
let booleanVar = true;
let numberBooleanVar = Number(booleanVar) // numberBooleanVar = 1
console.log(typeof numberBooleanVar);

//**************** undefined --> number ******************

let undefinedVariable ; // note that we have not intialized it has datatype undefined
let converedUndefinedVar=Number(undefinedVariable);
console.log(undefinedVariable);// o/p --> undefined
console.log(typeof converedUndefinedVar); // o/p --> number
console.log(converedUndefinedVar)  // o/p --> NaN

// *************Number --> boolean***********

let num = -345
let booleanNum = Boolean(num)
console.log(booleanNum);// o/p--> true

// 1 ,2 , 3 .... n--> true ,(negative numbers converted to boolean are also true)
// 0 --> false (only 0 as number converted to bool is false)

// *************string --> boolean*************

let stringVar = "Jaydeep"
let convertedString=Boolean(stringVar)
console.log(convertedString); // true 

// "something" ---> true
// "" --> false ( that is only string is that is empty will become false)



const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");
// using + sign reduces readability of code

// console.log(name , repoCount  ," Value");
// this is also way to  form text msg but it will add spaces between each , (comma)

// both of above method are outdated methods to print the values of variable with some text or string



//++++++++++++++++++++++ backtick and Interpolation ++++++++++++++++++++++

// this was included in ES6 (Echma scheme 6 2015)
// as using the + operator for printing of text with variable is not very readable
// we use backticks(` `) to print the text \
// backtick and singlequotes are different backtick is located near 1 on keyboard

console.log(`using backtick we can          
    print msg on multiple lines 
    without using /n (escape character)`); // this string will get printed on multiple lines 
    // as it is shown insidet the backticks(`....`)

    // advantages of using backtick
    // 1. we can use interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// here ${name}-->is a string Interpolation 
// by using ${name} i.e string Interpolation we can perform calculations and 
// and function calls inside the string 
// for example we can perform ${var1 * var2}

// this is more preferred way to create the string with multiple components



const gameName = new String('hitesh-')
// this is a way to create the string as a object in javascript and their will be key-value 
// pairs which area as 1:h 2:i 3:t as like this are not index but the key value pairs 

// we can access them using follwing syntax
// console.log(gameName[0]);

console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// o/p--> first four letters means index 4 is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // we can give negative values here

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // will remove all the spaces before and after

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')) // will replace %20 in above string with -
console.log(url.includes('sundar')) // if includes then true else false

let splitVariable = "jaydeep-Chaudari-101-205A026"
console.log(splitVariable.split('-'));
// 0/p--> [ 'jaydeep', 'Chaudari', '101', '205A026' ]
// array of the string which are now created by spliting them by '-'
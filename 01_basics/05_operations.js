// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //o/p--> -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 raise to 3 (exponetial operator)
// console.log(2/3);
// console.log(2%3); // answer will be 2 as 2 divided by 3 is 0 and remainder is 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // string concatation is possible usign '+' operator
// console.log(str3);

// console.log("1" + 2);// here string 2 will get converted number 2 and then strings are added thus 
                        //ans will become 12
// console.log(1 + "2"); // same as above answer will be 12
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

console.log(+true); // this a way of type conversion which is not genrally used as this is
// not really readable in this Boolean true is converted into 1 
console.log("type conversion using '+' ",+"");// as empty string when converted to boolean is 0 thus 
// here answer will become 0 

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// pre and post increment
let x = 10;
console.log(x++);// o/p --> 10  post increament first use then increment
console.log(x);  //  o/p --> 10 

let y = 10;
console.log(++y);// o/p --> 11  pre increament first increment then use
console.log(y);  //  o/p --> 11
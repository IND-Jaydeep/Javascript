// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1); comman comparison operators


console.log("2" > 3);
//  "2" > 3
//  "2"(string) is converted to 2(numeric).
//   2 > 3  
//   output --> false.

console.log(5 > "1");
// here order does not matter 
// string will only get converted to number
// 5 > 1 is  true

console.log(null > 0); // o/p --> false as 0 > 0 is false
                          // because while doing comparison operations 
                          //like < , > ,<= , >= here null is converted into 0

console.log(null >= 0); //o/p --> true as 0 >= 0  is true

console.log(null == 0); // in case of comparison operator null is not converted into 0
                        // instead it is converted into undefined so here 
                        // undefined is not equal to 0 thus 
                        // o/p --> false

console.log(null == undefined) // o/p --> true 
                               // as in equality check null is converted into undefined


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  operator 
// this operator checks for equality of datatypes also thus 
// diffrent dataypes compared will result in false

console.log("2" === 2); // o/p --> false
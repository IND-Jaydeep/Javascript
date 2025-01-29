// array In JS

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr1 = [0, 1, 2, 3, 4, 5,"flash","Batman"] 
// // array can contain diffrent data type

// const myArr2 = new Array(1, 2, 3, 4)
// // this is object difination of array 

// // console.log(myArr[1]);// we cannot use values stored in arrays to access them 
// // only index can be used in above format


// //++++++++++ js arrays are resizeable+++++++++++

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)// enters element at start
// // myArr.shift()//removes element from start

// console.log(myHeors.includes("shakti")); // if the element is present then
// // returns true or else false
// //console.log(myHeors.indexOf("shaktiman"));// will return 0 if index is not present 

// //+++++++++++++++++++ join method +++++++++++++++++++++++++

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water" // this all is a single string seprated by comma

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// // Expected output: "Fire-Air-Water" // seprated by dash



// slice, splice
// const myArr = [0, 1, 2, 3, 4, 5] this is orginal array

console.log("original array", myArr);

const slicearray = myArr.slice(1, 3) // saving output of slice operation in myn1
// here starting range is inclusive and ending range is exclusive means 1 us inclusive and 3 is not inlcuded

console.log("output of slice operation for range 1-3 ",slicearray);
console.log("original array after slice", myArr);


const myn2 = myArr.splice(1, 3)//here 3 will be inclusive in range 
console.log("ouput of splice operation for range 1-3",myn2);
console.log("original array after slice operation ", myArr);// [ 0, 4, 5 ]

// in splice operation original array is manipulated
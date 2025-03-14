const arr = [1 ,3 ,4 ,5]

// map is function used to transform the array on the base of function 
// that we have passed to it

// we will use the map if we want to transform the array
// means we have to do same operation on each element of array 
// and then return a new array

// we have to double all the elements of arr
// and we want output to be 
// [2 ,6 ,8 ,10] or triple all elements or do some opertion
// like converting all the elements to binary , or suppose elements
// stored in array are radius and we have to find their area or circumferend
// we can do all this things using map 

// to use map we have to create a function which takes
// a element of array as input and then returns a new transforemed
// element as a output 
// lets create the function to return double value of element

function double(a){
    return a *2 ;
}

console.log(arr.map(double));// [ 2, 6, 8, 10 ]

// in same manner we can use diffrent functions which are built by us 
// to transform a array like triple find area,circumference

// also we can store the output of map fucntion in varivale also

// instead passing a reference of function we can also pass the whole fucntion 
// arrow function or any function directly in map ' parameter
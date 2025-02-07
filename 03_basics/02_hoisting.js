// hoisting 
// hoisting is behaviour or phenomenon in js by which we can access the variable and fuctions before 
// intialization of them


// console.log(a)// undefined because in 1st step of creation of exection contex first space for a is allocated and then 
// // undefined is stored into it until  thread of execution  performs line that assigns the value to a
// console.log(printer)// whole fuction will get printed
// printer()//normal ourput will be showed as at the time of creation of memory space the fuction it is stored in memory space


// var a = 10 ;
// function printer(){
//     console.log("this is the js function")
// }

// console.log(a)
// console.log(printer)// if we ran this code in browser then it will print whole function
// printer()

// function expression hoisting 
console.log(printer1(3))
const printer1 = function(var1){
    console.log(var1,"this is function expression"); 
}
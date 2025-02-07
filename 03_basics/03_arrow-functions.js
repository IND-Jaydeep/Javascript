// arrow fuctions are introduced in ES6 in 2015

// const user ={
//     name:"jaydeep",
//     greetings:function(){
//         console.log(`hello ${this.name}`)
//         console.log(this)// this will print whole object along with its key value pairs and functions
//     }
// };
// user.greetings()

//++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++

const arrowFunction = (para1,para2) => {
    return para1 + para2;
}
console.log(arrowFunction(2,4))
// this is explicit return because we have to explicity write return keyword

// implicit return
// we can return arrow function without mentioning it to return
const arrowFunction2 = (para1,para2) => para1 + para2 
// this will also return addition of parameters without writing return keyword

//const arrowFunction2 = (para1,para2) => ( para1 + para2 ) // this syntax will also do same work as above

// this whenever we create the block{} for execution we need to retrun it 
// for single line we dont

// to return the object we need to wrap it in curly braces{}

const returnsObject = () => {
    return { name : "jay" ,  branch : "comp"} // returning object
}
console.log(returnsObject());



// revision 
// block is used at the place we want to execute multiple statement but js accepts only one statement
// function statements aka function declaration

function funcStatement(){
    //do something
};

// function expression
let variable = function(){
    // this is function expression
}

// function statments are hoisted completely
// function expression are not hoisted as function they are hoisted as varibales
// so if we try to access them before declaration there will be type error that
// this is not function
// we try to access the before function declaration variable if it declared it var
// then we will get undefined as value
// if the variable is declred with the let then it will throw reference error because
// before declartion of the function the variable is in TDZ (temporal dead zone)


// ++++++++++++++  anonymous functions ++++++++++++++++   

// -->function  declaration  without name 

// function(){

// } //here syntax error will come --> cannot declared anonymous function as function statement

var a = function(){
    // this is anonumous function stored in var a
}


// ++++++++++++ named function expression +++++++++++++++
// we will give name to function which is stored in variable

var funct2 = function abc(){
    // here abc is named fucntion expression
}

// can use
funct2(); // this is correct syntax

abc() // this will throw error because abc is not stored in global space but it is stored inside of bar funct2




function greet(callback){
    console.log("hello user")
    // doing some work
    // now we want to say goodbye to user
    callback();
}
function saygoodbye(){
    console.log("goodbye")
}

greet(saygoodbye) // we have passed saygoodbye as argument thus saygoodbye is callback function
// why it is called as callback function
// because now the function greet will decide now when to call the saygoodbye


// defination --> a function which is passed to another function as an argument and it 
//                is executed later  is called as callback function.               


// ++++++++++++++++ setTimeout ++++++++++++++++++++++++

// it us usecase of callback fucntion

setTimeout(function (){ console.log('after the pause of 5sec')}, 5000)
//          ^ callback funct                                      ^ timer in ms

// set timeout take callback function as a input so it can call back that function after the timer 

// eventlistners 

function attachEventListner(){
    let count = 0 ;
    document.querySelector('#mybutton').addEventListener("click",function xyz() {
        console.log("button clicked ",++count)
    })
}
attachEventListner();
// event listner once added reamins in memory util it is removed manually
// as event listner is using the count variable thus count variable is in clousure with 
// event listner or we can say  callback function xyz
// so after the execution of attacheventlistner both the eventlistner and its lexical scope is preserved
// see notes for about event listner
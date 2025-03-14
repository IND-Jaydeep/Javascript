// Higher order Functions (HOF)
function x(){
    console.log("in the x");
}
function y (x){
    console.log("in the y");
    x();
}
y(x);

//  here we are passing function as a argument to y function 
// thus the function y() is a higher order function
// as y is taking x input and x is being called by y later thus 
// x is callback function 
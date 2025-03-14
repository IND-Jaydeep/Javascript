let p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p1 has been resolved");
    },3000)
});

let p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p2 has been resolved");
    },1000)
});

let p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p3 has been resolved");
    },2000)
});

// Promise.all
// takes input as array retunrs if all promises are resolved succesfully
// if any of the promises fail will return error for all promises

let result = Promise.all([p1,p2,p3]);//as this is a promise itself means the result of Promise.all is promise
result.then(function(output){
    console.log(output)
});// we need to use someking of promise handling structure to handle the return promise
// here the output given to the parameter of callback function of then is is a output that we have received from the Promise.all
// this(promise.all) will not return result until every promise passed in the array of promises is resolved


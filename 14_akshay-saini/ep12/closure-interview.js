function outer(b){
    let a=10
    function inner(){
        console.log(a,b)
    }
    return inner
}
let funct=outer("helloworld"); // in this type of assigning of fuction we have to give parameter like this only
funct()

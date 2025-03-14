function close (i){
    setTimeout(function () {
        console.log(i) 
    },1000* i)
}

for(var i =1 ;i <=5 ; i++){
    close(i)
}
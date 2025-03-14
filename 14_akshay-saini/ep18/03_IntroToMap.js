

Array.prototype.calculate=function(arr,logic){
    const output =[];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }
    return output;
}

// calculate --> higher order function as it takes function as input

const area = function(radius){
    return radius * radius * Math.PI;
}
// area and circumference are callback functions here

const circumference = function ( radius){
    return 2* radius * Math.PI;
}

const radius = [3,1,2,4];

console.log(calculate(radius , area));
console.log(calculate(radius,circumference))




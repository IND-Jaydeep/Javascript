const radius = [3,1,2,4];

const calculateArea = function(radius){
    const output=[];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI* radius[i]*radius[i]);    
    }
    return output;
}

const calculateCircumference=function(radius){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2*Math.PI*radius[i])
    }
    return output;

}

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
// this is normal approach to find area and circumference with radius array
// in next file functional programming approach to do this
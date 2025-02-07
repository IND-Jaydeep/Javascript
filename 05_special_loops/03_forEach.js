// for each loop
const skills = ["javascript","cpp","react", "java","mySQL"]

// console.log(skills)
// needs a function(callback) callback functions dont have name
skills.forEach( function (item){
    //console.log(item)// this will print each element of array
})
// here item iterates over elements of array



// using arrow function
skills.forEach((item,index)=>{
    console.log(index + ": " + item);
    
})

// here we have used arrow function

// as we have supplied two parameter to callback function
// so first parameter will store array elemtents and second element
// i.e index will store index value of that element

skills.forEach((item,index,arr)=>{
    console.log(index + ": " + item +"  total array  : " +arr);
    
})
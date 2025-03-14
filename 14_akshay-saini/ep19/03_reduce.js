const arr = [1 ,2 ,3 ,4 ,5,3];

// const output = arr.reduce(function(acc , curr){
//     if(acc<curr){
//         return curr;
//     }else{
//         return acc;
//     }  
// },0)

const output = arr.reduce(function(acc , curr){
    if(acc<curr){
        acc = curr;
    }
    return acc;
    
},0)
 // methods are same 

console.log(output)

const people = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Alice', lastName: 'Smith', age: 30 },
    { firstName: 'Bob', lastName: 'Johnson', age: 22 },
    { firstName: 'Emily', lastName: 'Brown', age: 22 },
    { firstName: 'Michael', lastName: 'Davis', age: 30 }
];

// writing the reduce method to get firstname of prople who have age 30

const output1 = people.reduce(function(acc,curr){
    if(curr.age ===30)
        acc.push(curr.firstName);
    return acc;
},[])

console.log(output1)
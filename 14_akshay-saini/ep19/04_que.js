const people = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Alice', lastName: 'Smith', age: 30 },
    { firstName: 'Bob', lastName: 'Johnson', age: 22 },
    { firstName: 'Emily', lastName: 'Brown', age: 22 },
    { firstName: 'Michael', lastName: 'Davis', age: 30 }
];

// lets apply to map ,filter and reduce 

// Question 1 
// store full names of people and store them in array

const fullName = people.map(function(x){
    return (x.firstName +" "+ x.lastName);
}) // here x represents the object of array
console.log(fullName)


// Question 2 
// how many people have age greater tha 25

const ageGreaterThan25 =people.filter(function(x){
    return x.age > 25 ;
})// callback function passed to filter should written true or false only
console.log(ageGreaterThan25)


//  Question 3
// find no of people having same age 

// here we will use reduce method 
// as reduce method only returns one element we will create an object 
// as the output element

const similarAge= people.reduce(function(acc , curr) {
    if ( acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{})
// ^ here as a initial value we have passed an empty object

console.log(similarAge)
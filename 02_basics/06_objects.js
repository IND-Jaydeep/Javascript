//  how to delete the object attributes 
const JSuser ={
    name:"jaydeep",
    stream : "comp",
    year: 3
}
// to delete the any attribute from object 
delete JSuser.year
console.log(JSuser) //{ name: 'jaydeep', stream: 'comp' }

// object destructring
// to access "comp" every time i have to use JSuser.stream
// instead we can do


// const {name , stream} = JSuser
// console.log(name)//jaydeep
// console.log(stream)// comp

//now instead of name we have to add something new then we can also do it


const {name:name1 , stream : branch} = JSuser
console.log(name1) // jaydeep
console.log(branch) // comp

// json --> javascript object notation 
// used in API application programming interface for transfering data from different programs
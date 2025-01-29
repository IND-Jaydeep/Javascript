// how to declare the objects as a literal (non singleton)

const sym = Symbol("the key")
// as this is symbol data type to use in it object we have to use different syntax
// symbol is generally used to assign keys to the objects we  can use single symbol to assign keys to 
// multiple objects

const jsUser = {
    name:"jaydeep",
    branch:"computer",
    college:"Scoe",
    [sym]:"mykey1",// if we dont use this [] then the symbol is not used and it is just a normal attribute of object
    roll_no:1234,
    "year":"third",
}// this is object created as literal 

// accessing diffrent attributes
console.log(jsUser.name)
console.log(jsUser["branch"])// This is the only way to access normal attribute we have to use ""
                             //we can also do jsUser.branch for 
console.log(jsUser["year"]) // also valid syntax along with jsUser.year
console.log([sym])// this syntax without double qoutes is only useable for symbol

console.log(jsUser);


// we can change the values of attributes of object 
jsUser.roll_no=305;// this is useable 

// if we want any object to dont change its value then we can freeze it

Object.freeze(jsUser)// now any change you will do will not ger applied to the object
                     // if we try to do an change it will not show any error but the 
                     // object will remain intact 

// creating object as a sinleton object (using constructor)
// we use Object.create method
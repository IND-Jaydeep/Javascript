console.log(document) // this will print whole html file that is index.html
console.dir(document) // this will print object that is storing html file 
// this object which is storing html file is nothing but document


// selectors to select elements  






// DOM attribute methods
//  1...getelementById()

//  3...style
let title = document.getElementById("title")

title.style.color="black" // this will set element whose id is title to black color text
title.style.padding= "15px"

//  4....textContent
console.log(title.textContent())




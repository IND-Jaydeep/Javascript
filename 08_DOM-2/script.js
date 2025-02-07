const classofparent = document.querySelector('.parent')
console.log(classofparent);
console.log(classofparent.children);// HTMLcollection is retunred
// we can also use for loop instead of foreach loop 
// we can use for loop to iterate over html list as we used to iterate
// just like we used to print arrays in java

for (let i = 0; i< classofparent.children.length;i++) {
    console.log(classofparent.children[i].innerHTML)
}
// this will print only name of days 


// creating a new dom element using the dom inside js file

const mydiv = document.createElement('div')
mydiv.className = "main"
mydiv.id = "mydiv1"
mydiv.setAttribute("name-Of-Attribute","value-OF-Attribute");
// this method create a new attriburte and assigns it value

// we can also set styles 
mydiv.style.color="red"

mydiv.innerText="this is the div i have created"

// lets add this created div in the website
// util this is step div will not get displayed because it is not part 
//  dom tree

document.body.appendChild(mydiv)// if we commented this line div element will not be seen on browser
// using this . we have to reach till the destination where we want to insert  
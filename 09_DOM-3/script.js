// how to add element in the html

function addElementToList(skill) {
    const newSkill= document.createElement('li')
    newSkill.innerHTML=`${skill}`
    const temp =document.querySelector('li')// we need to select parent element
    temp.appendChild(newSkill)
}
// now if we call the function with any string as parameter we will get it as skill in list of html
addElementToList('java')
addElementToList('cpp')
addElementToList('mysql')

// this is not optimized    






// how to Edit the document

// how to edit element
// not working this method is deleting whole list except vscode
const firstLang = document.querySelector("")
firstLang.remove()
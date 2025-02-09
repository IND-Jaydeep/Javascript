// prototype is object from which every js object derives its properties

// by usign __proto__ we can set a new prototype to an object

// eg

const emp = {
    company :"abc@infotech",
    greetNewEmp(){
        console.log("hello new emp")
    },
    greetNewEmpWithName(name){
        console.log("hello" , name)
    }

}

const  om ={
    fullname: "om don",
}
//om.greetNewEmp() // error

// so first we will set emp as a prototype of om

om.__proto__= emp;
om.greetNewEmp()
om.greetNewEmpWithName(om.fullname)





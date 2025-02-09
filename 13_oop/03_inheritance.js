class animal{
    constructor(name){
        this.color='black',
        this.isloyal=true
        console.log("i have been called because of super()")
        this.name=name
    }
    eat(){
        console.log('i can eat')
    }
    sleep(){
        console.log("i can sleep")
    }
}
class dog extends animal{
    constructor(name){
        console.log('trying to create a new dog')
        super(name) // calling parent constructor using the super()
        // now only we can use this keyword here
        console.log(this.isloyal)// isloyal is declared in animal (parent class)
        this.hoddy="dancing" 
    }
    bark(){
        // to access parent methods we need to use following syntax 
        // this only applies to access the method inside the child class
        // we can use normal syntax to acess the parent method if it is outside 
        // the child class
        super.eat()//this is also correct
        this.eat()// this is also correct
        console.log("i can bark")
    }
}

let tommy = new dog('tommy')// passing name into constructor
console.log(tommy)
tommy.bark()
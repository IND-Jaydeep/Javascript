class toyota {
    // like cpp we dont need to define attributes first to  use them we can directly 
    // create and use them inside th fuctions or constructors
    // unlike cpp here constructor name is not classname it is constructor only
    constructor(carname,hp,milege) {
        this.carname=carname,
        this.hp=hp,
        this.milege=milege
        console.log("new car is being is created")
    };
    carInfo(){
        console.log(this.carname);
        console.log(this.hp);
        console.log(this.milege);  
    }
    setRating(rating){
        this.rating=rating;
        console.log("new rating is",this.rating)
    }
}

const Etios = new toyota("Etios",50,25)// here constructor is called 
console.log(Etios)

// Etios.carInfo()
Etios.setRating(5) // rating attribute is crated and also added into the object Etios

console.log(Etios) // rating will be aslo print

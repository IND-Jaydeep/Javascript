let button1 = document.querySelector("#button1")
button1.onclick = () => {
    console.log("button 1 is clicked");
    
}

let button2 = document.querySelector("#eventbutton")
button2.onclick = (event)=>{
    // here event is the event object
    // to access the event object we have to give someparameter to event handler
    // we can give any name like e evt event
    console.log("getting handeled by event handler with help of event object")
    console.log(`event type :${event.type}`)

}
// in this method if created to event handlers for the same event then
// the event handler which is declared at last will work because it will over
// all the event handlers declared above


// using event listners
let div2= document.querySelector('#div2')
// console.log(div2)
div2.addEventListener("click", ()=>{
    console.log("this is the event listener");
});

// we have created multiple event handlers to showcase that they can
// run for a sigle event

div2.addEventListener("click", ()=>{
    console.log("this is the event listener 2");
});


const dj = function(){
    console.log("this is the event listener 3");
};


div2.addEventListener("click", dj);

div2.addEventListener("click", ()=>{
    console.log("this is the event listener 4");
});

// while passing the already created fuction in the fuction of 

div2.removeEventListener("click", dj);
// lets create multiple eventlistners for this same event
// here mouseover is not working
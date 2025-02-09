let button1= document.querySelector('#button1')
let mode= 'light'

button1.addEventListener('click', ()=>{
    if (mode === 'light'){
        document.querySelector("body").className="dark";
        console.log("dark mode");
        mode = 'dark'
    }else{
        document.querySelector("body").className="light";
        mode='light'
        console.log("light mode")
    }


})
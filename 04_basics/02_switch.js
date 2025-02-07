// switch statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// key --> variable whose value we want to match 
// value --> value to be expected in variable (it can be number string)

let day = "sunday"

switch (day) {
    case "monday":
        console.log("we have to work today")
        break;
    case "tuesday":
        console.log("we have to work today")
        break;
    case "wednesday":
        console.log("we have to work today")
        break;
    case "thursday":
        console.log("we have to work today")
        break;
    case "friday":
        console.log("we have to work today")
        break;
    case "saturday":
        console.log("we have to work today")
        break;
    case "sunday":
        console.log("today is holiday")
        break;

    default:
        break;
}

// if we dont add a break at end of case then if that particular case is true
// all the code written below will get executed 
// except the default statement
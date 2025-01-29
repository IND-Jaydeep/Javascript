const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// this will push dc-heros as single element therefore 
// marvel_heros will become ["thor", "Ironman", "spiderman",["superman", "flash", "batman"]]
// there is an array within array scenario because of the push operation 
// 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); this will return flash
// because the marvel heors has third element as array and first element of that array is flash

// const allHeros = marvel_heros.concat(dc_heros)  // this will return normal array where elements are one after another
// console.log(allHeros); // push changes the original array while concat returns a new array

const all_new_heros = [...marvel_heros, ...dc_heros]
// here ... is spread operater this is used to spread all the array elemets from array 
// benefit of using spread operator instead of  we can concat multiple arrays at same time

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// flat function returns a new array thus there are no depth in array means no array within array condition
// and here we are provided depth infinity thus infinite depth can be resolved by this so the output will \

console.log(real_another_array);//[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// all array within array conditions are resolved



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
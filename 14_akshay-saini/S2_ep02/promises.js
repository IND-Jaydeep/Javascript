const GITHUB_API ='https://api.github.com/users/IND-Jaydeep';

const promise = fetch(GITHUB_API);
console.log(typeof promise);


promise.then((data)=>{console.log(data);
     console.log(typeof data) // this will return object because while resolving this promise an object is passed to resolve function
});
// once promise get settled  it stores the value 
// which is passed by resolved and 


console.log(promise);// before .then this part will get executed this will show us pending


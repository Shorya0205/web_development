
// fetch api 

// fetch api provides provids an interface for fetching  (sending / reciving) resources
// it uses request and response object 
// the fetch method is use to fetch a resources 

// let promise = fetch ( url , [option]);

const Url = "https://cat-fact.herokuapp.com";

/*
let promise = fetch(Url);
console.log(promise);
*/

//now we will get output of promise by async await

const getfact = async () =>{
    let promise = await fetch(Url);
    console.log(promise);
}
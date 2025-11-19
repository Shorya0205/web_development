// async wait >> promise chains >> callback hell

/*
synchronus - Synchronus means the code runs in a paarticular sequence of instruction 
given in the programm . each instrruction waits for the previous instruction to complete
its execution

asynchronus - due to synchronus programming sometimes important instruction gets blocked due
to the previous instruction , which cause a delay in UI . Asynchronus code execution allows
to execute next instruction immediately and doesnt broke the flow.

*/


/*
console.log("one");

function hello (){
    console.log("hello");
}

setTimeout(hello , 2000); // here 2000ms equivalent to 2s

// hm isi ke andar bhi finally. likh skte ha

setTimeout(()=>{

    console.log("im sg");

}, 2000);

console.log("two");

// callbacks - function passed as an argument to another function

function sum(a , b){
    console.log(a+b);
}

function calculator( a , b , sumCallback ){
    sumCallback(a,b)
}

calculator(1 , 2 , sum);

// Callback hell : nested callback stacked below one another forming a pyramid structure forming
// a doom (pyramid of doom )
// the style of programming become difficult to understand and manage

function getdata(dataid , getnextdata){

    setTimeout(() => {
        console.log("data" , dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}

/*
getdata(1 , getdata(2));
aase hi likhenge to error ayega 

getdata(1 , () =>
    {getdata(2 , () => 
        {getdata(3);
    });
});*/
// hmne same function ko callback ki trh pass kr diya
// par y acha trika nhi ha , hard to manage , this nesting is called callback hell

// to solve these we have promises
/*
promises in js - promises is for eventual completion of task. it is an object in js 
it is solution of the callback hell

let promise = new Promise((resolve,reject) => {
    })
function with 2 handlers
resolve and rejects are the callback provided by js



*/

let promise = new Promise ((resolve , reject ) =>
{
    console.log("I am a promise ");
    resolve("success");
});

// promise has 3 state - pending , fulfiled , rejected
console.log(promise);
// normally pending dikhaega agar resolve likh doge to fulfilled and  also we can write reject

function getdata(dataid , getnextdata){

    return new Promise ((resolve , reject) =>
    {
    setTimeout(() => {
        console.log("data" , dataid);
        resolve ("secure");
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
});
}
let promiise = getdata(123);
console.log(promiise);

/*
promise-
.then() and catch()
promise.then((res) => {  })    fulfil hone k bad
promise.catch((err) => {  })   reject hone k bad
*/

const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("im a promise");
        resolve("success");
    })
}

let proimise = getpromise();

proimise.then ((res)=>{
    console.log("promise fulfiled",res);
});

proimise.catch((err) =>{
    console.log("promise not fulfiled",err);
}); 


function async1() {
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucess");
        } , 4000 );
    });
}

function async2() {
    return new Promise((resolve , reject ) => {
        setTimeout(() => {
            console.log("data2");
            resolve("sucess");
        } , 4000 );
    });
}

console.log("fetching data 1...");
let p1 = async1();
p1.then((res) => {
    console.log(res);
})

console.log("fetching data 2...");
let p2 = async2();
p1.then((res) => {
    console.log(res);
})

// isse dono data 1 aur data 2 ka kam parallely hoga


// asyn await  always return a promise
async function myfunc(){
    console.log("hello");
}
// await pauses the execution of its surrounding async function until the promise is settled
// function k sath hota ha use
// await ko hm async k sath hi use kr skte ha

function api(){
    return new Promise((resolve , reject ) =>
    {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        } , 2000);
    });
}

async function getWeatherdata() {
    await api();
}
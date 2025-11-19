// array

let heros = ["ironman", "batman " ,"superman"];
console.log(heros);
console.log(heros.length);
console.log(heros[0]);
// array khud ak special type ka object hota ha key vaalue pair jha key indices ha so type is object

// by for loop
for(let idx=1;idx<=heros.length;idx++){
    console.log(heros[idx]);
}

// by for of loop -
for(let hero of heros){
    console.log(hero);
}

// array methodds - 1.push() 2.pop() 3.toString() 4.concat() 5.unshift() 6.shift() 7.slice( , ) 8.splice(add, remove , replace)
// shift -> delete from start and return
// unshift -> add to start

// functions and methods

function myfunction(){
    console.log("hii ");
}

myfunction();

// for each loop -} used for array as a method only for arrayss
// array.foreach(callbackfn)
// callback fn ka mtlb hota ha ki jo fn as a argument pass kra jae to another fn

// for each ak ak krke array s value uthaega aur usa internally funvtion m pass krega
// function ki definnition ko pass krenge isse isko hme call nhi krna hota vo loopp khud kkr lega


let arr = [1,2,3,4,5,6];
arr.forEach(function printval(val) {
   console.log(val);
});

// or

let arr1 = [1,2,3,4,5,6];
arr1.forEach((val,/*idx , val*/) =>{
    console.log(val);
});

// map like for each just returns new array
let newarr = arr.map ((val) => {
    return val*2;
})
console.log(newarr);
// filter  method creates new array for true condition
let newarr1 = arr.filter ((val) => {
    return val%2===0;
})
console.log(newarr1);

// reduce -> perform some operation and reducee the array to a single value it return thhat single value.
const array1= [1,2,3,4];
const initialval=0;
const sumwithinitial = array1.reduce(accumulator,currentvalue => accumulator+currentvalue,initialval,); 
console.log(sumwithinitial);
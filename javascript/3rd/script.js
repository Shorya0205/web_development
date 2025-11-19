// dom -> document object model
// jitna bhi html hm likhhte ha usa java script m acess kr skte ha by a object named document
// console m window ya document likhke dekh bhi skte ha
// console.dir us object ki property and methods ko print krane k kamm ata ha e.g. console.dir(window.document)

console.log(window);
console.dir(window);
console.dir(document);
console.log(document.body);
console.dir(document.body);  
// hm js s html chnage kr skte ha 

document.body.style.background = "yellow";
 
// dom manupulation

// acessing -
// 1. selecting with id - document.getElementById("myid");
// 2. selecting with class - document.getElemmentByClassname("myclaas");
// 3. selecting with tag - document.getElementByTagName("p");

let headingbyid =document.getElementById("header");
console.dir(headingbyid);

let headingbyclass =document.getElementsByClassName("head");
console.dir(headingbyclass);

let headingbytag = document.getElementsByTagName("p");
console.dir(headingbytag);

// better way to acess 
// query selector - auto detect tag/id / class and return first among them
let elements = document.querySelector("p");
console.dir(elements);

let elementsc = document.querySelector(".head");
console.dir(elements);

let elementst = document.querySelector("#header");
console.dir(elements);

// query selector all - auto detect tag/id / class and return all among them
let elements1 = document.querySelectorAll("p");
console.log(elements1);

let elementsc1 = document.querySelector(".head");
console.dir(elements);

let elementst1 = document.querySelector("#header");
console.dir(elements);
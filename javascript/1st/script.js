console.log("shorya");

// variables

/*
age="24";
fullname="tony stark";
price=99.9;
x=null;
y=undefined;
follow=true;
*/

// par y variable declare krne ka acha trika nhi ha , do trike s define kra jata ha  ya to , 
// let -  y bhot hi acha aur common trika ha 
// ya phir const
// ak chiz aur innka block level scope ota ha

let age = "24";
let fullname = "tony stark";
let price = 99.9;
let x = null;
let y = undefined;
let follow = true;

let a;

console.log(fullname);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(follow);
console.log(a);

// to check datatype
b = typeof (fullname);
console.log(b);

//objects - key value pairs
/*const student = {
    fullname :"rahul",
    cgpa:4,
    age:18,
};
console.log(student);
console.log(student["age"]);
console.log(student.age);

// to update object values
student["age"]= student["age"] + 1;
student["cgpa"]=9;*/

// isma hm const k bad bhi update kr pa rhe ha , const obj key ko hm update kr skte ha
/// to acess 1. obj.key   2.abj["key"]


// operators

// -} Airthmetic operators -> +,-,*,/,modulus % , exponentiation ** , increment , decrement

let a1 = 5;
let b1 = 7;

console.log("a+b = ", a1 + b1);
console.log("a ** b =", a1 ** b1, "a -b", a1 - b1);

// -} Assignment operators -> = , += , -= , *= , %= , **=

// -} comparison operator -> equal to == , not equal to != , equal to and type === , not equal to and type !==
// and >,>= ,<= , <

//logical operators - && || !


let agee = 15;
if (agee >= 18) {
    console.log("adult");
}
else if (agee >= 15) {
    console.log("genz");
}
else {
    console.log("child");
}

// ternary

agee > 18 ? console.log("adult") : console.log("not adult");

let fname = prompt("hello ji nam btao");
console.log(fname);

//loops


// for
for (let i = 1; i <= 5; i++) {
    console.log("hii ji");
}

//while
let j = 1;
while (j <= 5) {
    console.log("hello ji");
    j++;
}

//do while
let k = 1;
do {
    console.log("namaste ji");
    k++;
} while (k <= 5);

// for of
//strings and arrays m iterattion m help krta ha , hme isma na uppdation dekhna na initiallization , na stopping


strval = "Apna clg";

for (let i of strval) {
    console.log(i);
}

//for in loop
// objects k liye - objectt ki keys aa jati ha aur phir jugadd s hm value bhi nikal lete ha
const student = {
    fullname: "rahul",
    cgpa: 4,
    age: 18,
};

for (let key in student) {
    console.log("key = " , key , "value = " , student[key]);
}

// Strings in js 

// create
let str = "apna clg";
let str2 = "hehehe"; 
//length
str.length;
//string indices
str[0], str[1]

//template literals
// back ticks s bnti ha y ` ` string k sath hi variable likh lo ${} lga kr
// process called string interpolation
let specialstring ="thi is a template literal";
console.log(typeof specialstring);

console.log(`the student name is ${student.fullname} and cgpa is ${student.cgpa}`);


// escape characters

// -> /n =next lines
// -> /t= tab space

// string methods

console.log(str.toUpperCase());
console.log(str.toLowerCase());
// y trim starting aur ending s hi remove krtaa ha
console.log(str.trim());

console.log(str.slice(1,5));
console.log(str.concat(str2));
console.log(str.replace("a","s"));
console.log(str.charAt(0));
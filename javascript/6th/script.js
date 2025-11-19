/* classes and objects

prototypes in js -
a javascript object is an entinty having states ad behaviour () properties and methods
java script have a special property called prototype
we can set prototype using __proto__

if object and method has same method then object method will be prioritesed


*/

// y ak trika ha object banane ka
// y student ak object ha iske 
const student = {
    fullname : "shoryagupta",
    marks : 97.5,
    // iske andar hm method ya function bhi define kr sakte ha 
    // y ak trika ha ak trika arrow s banane ka bhi ha
    // y this hme lagana padega wrna y undefined btaega iska mtlb ha hm student ka andar wale
    // marks ki hi bat kr rhe ha
    printmarks : function () {
    console.log("marks  ", this.marks)
    },

    // object k andar function ko define krne ka asan tika
    printhello (){
        console.log("hello ji");
    }
}

// har object k sath ak prototype aur aati ha 
// prototyp bhi ak object h aur iske bhot sare method declared ha
// isme bhot sare inbuilt fn hote ha

// prototype ka type hota ha refernce
// jaise maine likha student.toString likha to wo print hog jbki maine wo declare bhi nhi kia

// ak acha example
let arr =["apple" , "mango" , "banana" ];

console.log(arr);
console.log(typeof(arr));

arr.push("litchi");
console.log(arr);
// ab prototype ki wjh s m isme sare fn. push pop wgera k user kr skta hu

// hm apne khud k prototype bhi bna skte ha

// ak object k methods function properties ko dusre object m pass krna

const obj1 = {
    clactax(){
        console.log("there is 10% tax");
    },
};

const obj2 = {
    salary : 50000,
};

obj2.__proto__ = obj1;
console.log(obj2);

// ab iske prototype m dekhoge to calctax() bhi milega

// isse y fayeda hua hmne ak jgh kuch function likh lie aur ab vo hm kisi bhi aur kitno m bhi
// pass kr skte ha

// agar function dono m clash krte ha to prototype supress ho jaega

// classes in js-

/* class is a programm - code template for creating objects

those objects will have some state (variables) and some behaviour (function) inside it

class myclass(){
constructor(){

}
mymethod(){

}

}

let myobj = new myclass();

*/

class Toyotacar{

    constructor(rating,milege){
        console.log("i m toyota car");
        this.rating=rating;
        this.milege=milege;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("end");
    }

    setBrand (brand) {
        this.brandname = brand;
    }
}

// creation of object through classes
let fortuner = new Toyotacar("fivestar",10);
fortuner.setBrand("fortuner");

let lexus = new Toyotacar();
lexus.setBrand("Lexus");

// Construtor method -> is automatically invoked by new keyword
// -> Initialise object 

//Inheritence in JS
//Inheritence is passing down properties and methods from parents class to child class

// class parent {          }

// class child extends parent {         }

// if child and parent have same methods , child methods will be used (METHOD OVERRIDING)

/*

class person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class enginerrs extends person{
    work(){
        console.log("lets build something");
    }
}

class doctors extends person{
    work(){
        console.log("lets treat someone");
    }
}

let shoryaobj = new enginerrs(); 

*/

// Super keyword - 
// The super keyword is used to call the constructor of its parents class to acess the parents
// properties and methods

// super(args);
// super.parentMethod(args);

/*
class person {

    constructor(){
        console.log("enter parent constructor");
        this.species = "homosapiens";
    }
    eat(){
        console.log("eat");
    }
   
}

class enginerrs extends person{

    constructor(branch){
        console.log("enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
    }

    work(){
        console.log("lets build something");
    }
}

let eng_obj = new enginerrs("chemical enginerr");

// agar bass itna hi krenge to ak error ayega kyuki super nhi lgaya
// child class m cconstructor banaana ha to phle parent ka constructor call krna pdega
// super k andar hm value pass bhi kr skte ha

*/
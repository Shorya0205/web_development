/*

events handaling - 
the changes in the state of objects is known as events
. events are fired to notify interesting changes that may affect code execution
-> mouse events = (click , double click etc)
-> keyboard events = (key press ,key up, key down)
-> form events = (submit etc)
-> print events and many more



// INLINE NHI KRNA CHIYE AASE Y JS FILE M HI KRNA CHIYE
// node.event = () => {
//                                    }

let btn1 = document.querySelector("#btn1");

btn1.ondblclick = () => {
    console.log("button double clicked");
    let a = 25;
    a++;
    console.log(a);
}

// priority jo ha na vo js file wale code ko deta ha computer bhi na ki inline wale ko 

// agar hm aase multiple define krenge same k liye to jo last m hoga na wo hi run hoga aur 
// upar wala nhi hoga

/*
EVENT OBJECTS - 
-> IT IS A SPECIAL OBJECT THAT HAS DETAILS ABOUT THE EVENT
->ALL EVENT HANDLERS HAVE ACESS TO EVENT PROPERTIES AND METHODS



let btn2 = document.querySelector("#btn2");

btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}
*/

//------------------------------------------------------------------------------------------
// isse ak aur acha trika ha jo ki ha event listner
/* 
node.addEventListner( event , callback )
node.removeEventListner( event , callback )
--> the callback refernce should be same to remove
*/



let btn1 = document.querySelector("#btn1");

const handler3 = () => {
    console.log("button1 was clicked");
}

btn1.addEventListener("click" , handler3);

// to remove -
// btn1.removeEventListener("click" , handler3);
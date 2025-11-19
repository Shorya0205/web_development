let elements = document.querySelector("#header");
console.dir(elements);

/*
--- PROPERTIES --- 

1.TAG NAME : RETURN TAG FOR ELEMENTS NODES
2.INNER TEXT : RETURNS THE TEXT CONTENT OF ELEMENTS AND ALL ITS CHILDREN
==> parents -> childs -> desendants
3.INNER HTML : RETURNS THE PLAIN TEXT OR HTML CONTENTS IN THE ELEMENTS
4.TEXTCONTENT : RETURNS TEXTUAL CONTENT EVEN FOR HIDDEN ELEMENTS mtlb like visiblity hidden hogi phir bhi show kregi

*/ 

let tag_name = elements.tagName;
console.log(tag_name);


let elements1 = document.querySelector("div");
console.dir(elements1);

let inner_text = elements1.innerText;
console.log(inner_text);

let inner_html = elements1.innerHTML;
console.log(inner_html);

let textcontent = elements1.textContent;
console.log(textcontent);

// hm aase properties set bhi kr skte ha 

/*
elements1.innerText= "hii i m shorya";
elements1.innerHTML= "<div> <i> inner div </i> </div>"
*/

/*
Attributes - 
1. getAttribute(attr) = to get attribute value
2. setAttribute(attr,value) = to set attribute value 

style - 
node.style


*/
let elements0 = document.querySelector("div");
console.dir(elements0);

let id = elements0.getAttribute("id");
console.log(id);

console.log(elements0.setAttribute("id" , "abcd"));
//internally change ho gai

console.log(elements0.style);
// and we can change style directly from the js

elements0.style.backgroundColor="red";


/* To insert elements - 
let el = document . createElement("div");

node.append (el);  add at end of node   (inside)   jiske bhi last m add kran ha
node.prepend(el);  add at start of node (inside)   uske last m
node.before(el);   add before the node  (outside)  usse just pehle
node.after(el);    add after the node   (outside)  uske just bad m 

*/

let newbtn  = document.createElement("button");
newbtn . innerText = "click me";
console.log(newbtn);

//isko screen p dikhane k lie use add krna pdega jiske 4 method ha
elements0.prepend(newbtn);

// to remove - node.remove()

// agar hm chaate ha ki element ko do classes mile here we use class list
elements0.classList.add("hehe");
elements0.classList.add("huihui");
elements0.classList.remove("huihui");

console.log(elements0.classList);
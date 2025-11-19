const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));

//take object and create create element  is work of this renderv    
// root.render(heading);

// console.log(heading);
// y to ak object ha or hm ise khenge react element 

/* Nested structure
<div id= "parent">
    <div id    ="child">
        <h1>   </h1>
        <h2>   </h2> siblings k lie array / react will throw an error also of unique keyys
    </div> 
</div>
*/

const parent = React.createElement("div", { id: "parent" },

    React.createElement("div", { id: "child" },

        [React.createElement("h1", {}, "I m an h1 tag") , React.createElement("h2", {}, "I m an h2 tag")]

    )
);

root.render(parent);

console.log(parent);

// par y to likhna bhot hard ha isliyye jsx ha hmpe 

// agr html aur react clash hoga na to react is our priority




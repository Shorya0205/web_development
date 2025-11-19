let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgout = document.querySelector("#state");
const usersc = document.querySelector("#scoreh");
const compsc = document.querySelector("#scorec");


const generateComputerChoice = () => {
    const option = ["rock","paper","scissor"];
    const randomindex = Math.floor(Math.random() * 3);
    return option [randomindex];
}

choices.forEach((choice) => {

    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })

})


const draw = () => {
    console.log("game was draw");
    msg.style.borderColor = "black";
    msg.style.color = "white";
    msg.style.backgroundColor = "black";
    msgout.style.borderColor = "black";
    msgout.style.backgroundColor = "black";
}

const playgame = (userchoice) => {
    console.log("user choice" , userchoice);

    const compchoice = generateComputerChoice();
    console.log("comp choice" , compchoice);

    if (userchoice === compchoice){
    draw();
    msg.innerText="Draw";
    
    } 

    else{
        let userwin = true;
        if (userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true ;
        }
        else if (userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true ;
        }
        else {
            userwin = compchoice === "rock" ? false : true ;
        }
    showwinner(userwin , userchoice , compchoice);
    }
}

const showwinner = (userwin , userchoice ,compchoice) => {
    if (userwin){
    console.log("you win");
    userscore ++;
    usersc.innerText=userscore;
    msg.innerText=`You win . ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    msgout.style.borderColor = "darkgreen";
    msgout.style.backgroundColor = "green";
}
else{
    console.log("you lost");
    computerscore ++;
    compsc.innerText=computerscore;
    msg.innerText=`You lost . ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    msgout.style.borderColor = "darkred";
    msgout.style.backgroundColor = "red";

}
}

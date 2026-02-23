let boxes = document.querySelectorAll(".box");
let rbt = document.querySelector("#resetbt");
let msg = document.querySelector("#msg");
let winct = document.querySelector(".winner-container");
let newsetbt = document.querySelector("#newsetbt");
let turn = true;

let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]    
];


const resetgame = ()=> {
    turn = true;
    enablebox ();
    winct.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the button was clicked");
        if(turn){
            box.innerText ="X";
            turn = false;
        }else {
            box.innerText ="O";
            turn = true;
        }
        box.disabled= true;
        winner();

    });
});



const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}


const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
       
    }
}



showwinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    winct.classList.remove("hide");
    disablebox ();
}




const winner = () =>{
    for(let pattern of winpattern){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText; 
        let p3 = boxes[pattern[2]].innerText;
        
        if(p1 != "" && p2 != '' && p3 != ""){
            if(p1 === p2 && p2 === p3){
                console.log("win", p1);
                showwinner (p1);
            }
        }
    }
}


rbt.addEventListener("click",  resetgame);
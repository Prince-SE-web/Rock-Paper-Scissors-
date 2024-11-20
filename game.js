const outcomes = ["Scissor","Rock","Paper"];
const computerImg = document.querySelector("#computerMove");
const userImg = document.querySelector("#userMove");
const scissor = document.querySelector("#Scissor");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const result = document.getElementById("result");
const result1 = document.getElementById("result1") 

let computerMove;
let userMove;
let winsCount = 0;
let lossesCount =0;
let tiesCount = 0;


//Event listeners
scissor.addEventListener("click",()=>{
    userMove = "SCISSOR"
    let computerMove = (outcomes[getRandom()]).toUpperCase();
    if(computerMove == "PAPER" ){
        ++winsCount;
        result1.innerText = "You won";
    }else if(computerMove == "ROCK"){
        ++lossesCount;
        result1.innerText = "You Lost";
    }else{
        ++tiesCount;
        result1.innerText = "It's a Tie";
    }
    changeComputerImage(computerMove);
    changeUserImage(userMove);
    displayResult();
});

rock.addEventListener("click",()=>{
    userMove = "ROCK"
    let computerMove = (outcomes[getRandom()]).toUpperCase();
    if(computerMove == "SCISSOR" ){
        ++winsCount;
        result1.innerText = "You won";
    }else if(computerMove == "PAPER"){
        ++lossesCount
        result1.innerText = "You Lost";
    }else{
        ++tiesCount;
        result1.innerText = "It's a Tie";
    }
    changeComputerImage(computerMove);
    changeUserImage(userMove);
    displayResult();
});
paper.addEventListener("click",()=>{
    userMove = "PAPER"
    let computerMove = (outcomes[getRandom()]).toUpperCase();
    if(computerMove == "ROCK" ){
        ++winsCount;
        result1.innerText = "You won";
    }else if(computerMove == "SCISSOR"){
        ++lossesCount;
        result1.innerText = "You Lost";
    }else{
        ++tiesCount;
        result1.innerText = "It's a Tie";
    }
    changeComputerImage(computerMove);
    changeUserImage(userMove);
    displayResult();
});





//return random number's from 0 to 2
function getRandom(){
    const rand = Math.random();
    if (rand < 0.33) return 0;
    if (rand < 0.66) return 1;
    return 2;
}

//It changes the image of computer move 
function changeComputerImage(computerMove1){
    switch(computerMove1.toUpperCase()){
        case "SCISSOR":
            computerImg.src = "images/scissors.png";
            break;
        case "ROCK":
            computerImg.src = "images/rock.png";
            break;
        case "PAPER":            
           computerImg.src = "images/paper.png";
            break;


    }
}

//It changes the image depending upon user's move 
function changeUserImage(userMove1){
    switch(userMove1.toUpperCase()){
        case "SCISSOR":
            userImg.src = "images/scissors.png";
            break;
        case "ROCK":
            userImg.src = "images/rock.png";
            break;
        case "PAPER":            
           userImg.src = "images/paper.png";
            break;
    }
}

//Update the result
function displayResult(){
    result.innerText = WINS: ${winsCount} Losses: ${lossesCount} Tie: ${tiesCount};
}
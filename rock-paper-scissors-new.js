//Create a random number, multiply by 3 and add 1 -> possible results: 1,2,3
// If 1 -> Rock | If 2 -> Paper | If 3 -> Scissor
function getComputerChoice () {
    compChoice = Math.floor(Math.random()*3 + 1);
    if(compChoice == 1){
        return compChoice = "rock"
    } else if(compChoice == 2) {
        return compChoice = "paper";
    } else {
        return compChoice = "scissor";
    }
}


//Play one round -> playerSelection is fix
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return `Even! You both picked ${playerSelection}!`;
    }
    
    if(computerSelection === "rock" && playerSelection === "paper"){
        return "You win! Paper beats Rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissor"){
        return "You win! Scissor beats Paper!";
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        return "You win! Rock beats Scissor!";
    } else if(computerSelection === "rock" && playerSelection === "scissor") {
        return "You Loose! Rock beats Scissor!";
    } else if(computerSelection === "paper" && playerSelection === "Rock") {
        return "You Loose! Paper beats Rock!";
    } else {
        return "You Loose! Scissor beats Paper!";
    }
}

//PlayerSelection
let playerSelection = prompt("Rock, Paper, Scissor");
playerSelection = playerSelection.toLowerCase();
//Computer Selection
const computerSelection = getComputerChoice();


//Game-Section
function game() {
    for(let i=1; i<=5; i++) {

    }
}


//Output
console.log(playRound(playerSelection, computerSelection));
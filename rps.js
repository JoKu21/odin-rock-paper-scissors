//Decalration
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

//Implement Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

//Create computerSelection
function createComputerSelection() {
    let compChoice = Math.floor(Math.random() * 3);
    if(compChoice == 0) {
        return compChoice = 'rock';
    } else if(compChoice == 1) {
        return compChoice = 'paper';
    } else {
        return compChoice = 'scissor'
    }
}

//Create PlayerSelection
function createPlayerSelection () {
    rock.addEventListener('click', () => {
        playerSelection = 'rock';
        console.log(playerSelection);
        check = 1;
        playRound(playerSelection, computerSelection);
    });

    paper.addEventListener('click', () => {
        playerSelection = 'paper';
        console.log(playerSelection);
        check = 1;
        playRound(playerSelection, computerSelection);
    });

    scissor.addEventListener('click', () => {
        playerSelection = 'scissor';
        console.log(playerSelection);
        check = 1;
        playRound(playerSelection, computerSelection);
    });
}

//Play 1 round
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return `Even! You both picked ${computerSelection}!`;
    } 
    
    if(computerSelection === "rock" && playerSelection === "paper"){
        return "You win! Paper beats Rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissor"){
        return "You win! Scissor beats Paper!";
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        return "You win! Rock beats Scissor!";
    } else if(computerSelection === "rock" && playerSelection === "scissor") {
        return "You Loose! Rock beats Scissor!";
    } else if(computerSelection === "paper" && playerSelection === "rock") {
        return "You Loose! Paper beats Rock!";
    } else if(computerSelection === "scissor" && playerSelection === "paper"){
        return "You Loose! Scissor beats Paper!";
    }
}

//Function gameResult
function gameResult(playerSelection,computerSelection){
    if(playRound(playerSelection, computerSelection) === "You win! Paper beats Rock!" || playRound(playerSelection,computerSelection) === "You win! Scissor beats Paper!" || playRound(playerSelection,computerSelection) === "You win! Rock beats Scissor!"){
        playerScore ++;
        console.log("Player Score: " + playerScore);
        return playerScore;
    }else if (playRound(playerSelection,computerSelection) === `Even! You both picked ${computerSelection}!`){
        console.log("Tie! No Points!");
    } else {
        computerScore ++;
        console.log("Computer Score: " + computerScore);
        return computerScore;
    }
}

//Algorithm for game (playing 5 rounds)
function game(playerScore, computerScore) {
    //Start loop for 5 rounds
    for(let i = 1; i <= 5; i++) {
        playerSelection = createPlayerSelection(); //get PlayerSelection
        computerSelection = createComputerSelection(); //get ComputerSelection

        console.log(computerSelection); //Test CompChoice

        console.log(`Round: ${i}`);
        console.log(playRound(playerSelection,computerSelection));
        }

        gameResult (playerScore,computerScore);
    }

//Start Game
game(playerScore, computerScore);

//Find Winnner
if (playerScore > computerScore) {
    console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nPlayer won!`);
} else if (playerScore < computerScore) {
    console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nComputer won!`);
} else {
    console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nEven. Good game both of you!`);
}
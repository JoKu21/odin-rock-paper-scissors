//Decalration
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let rounds = 0; //initialize check-variable

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
    rock.addEventListener('click', () => {
        rounds++;
        if(rounds < 5) {
            playerSelection = 'rock';
            console.log(playerSelection);
            computerSelection = createComputerSelection();
            console.log(computerSelection);
            game(playerSelection, computerSelection);
            
            console.log(rounds);
        } else {
            console.log(rounds);
            findWinner(playerScore, computerScore);
        }
    });

    paper.addEventListener('click', () => {
        rounds++;
        if(rounds < 5) {
            playerSelection = 'paper';
            console.log(playerSelection);
            computerSelection = createComputerSelection();
            console.log(computerSelection);
            game(playerSelection, computerSelection);
            
            console.log(rounds);
        } else {
            console.log(rounds);
            findWinner(playerScore, computerScore);
        }
    });

    scissor.addEventListener('click', () => {
        rounds++;
        if(rounds < 5) {
            playerSelection = 'scissor';
            console.log(playerSelection);
            computerSelection = createComputerSelection();
            console.log(computerSelection);
            game(playerSelection, computerSelection);
            
            console.log(rounds);
        } else {
            console.log(rounds);
            findWinner(playerScore, computerScore);
        }
    });   

    



function game(playerScore, computerScore) {
    playRound(playerSelection, computerSelection);
    gameResult(playerSelection, computerSelection);
    //findWinner(playerScore, computerScore);
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

//Find Winnner
function findWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nPlayer won!`);
    } else if (playerScore < computerScore) {
        console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nComputer won!`);
    } else {
        console.log(`Final Result\nPlayer Points: ${playerScore}\nComputer Points: ${computerScore}\n\nEven. Good game both of you!`);
    }
}
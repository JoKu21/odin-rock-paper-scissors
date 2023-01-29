/* Just removed play 5 rounds logic with comments */

let playerScore = 0;
let computerScore = 0;
let computerSelection;
let PlayerSelection;

const playerChoiceRock = document.getElementById('rock');
const playerChoicePaper = document.getElementById('paper');
const playerChoiceScissor = document.getElementById('scissor');

//Call the game
if(playerChoiceRock.click == true || playerChoicePaper.clicked == true || playerChoiceScissor.clicked == true) {
    game(playerScore, computerScore);
}

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

function getPlayerChoice() {
    if (playerChoiceRock.click == true) {
        PlayerSelection = playerChoiceRock.addEventListener('click', () => {return 'rock'});
    } else if (playerChoicePaper.click == true) {
        PlayerSelection = playerChoicePaper.addEventListener('click', () => {return 'paper'});
    } else if (playerChoiceScissor.click == true) {
        PlayerSelection =playerChoiceScissor.addEventListener('click', () => {return 'scissor'});
    }
}

function game(playerPoints, computerPoints) {
    
    //Play one round -> playerSelection is fix
    function playRound(computerSelection) {
        if(playerChoicePaper === computerSelection || playerChoiceRock === computerSelection || playerChoiceScissor === computerSelection) {
            return `Even! You both picked ${computerSelection}!`;
        }
        
        if(computerSelection === "rock" && playerChoicePaper){
            return "You win! Paper beats Rock!";
        } else if (computerSelection === "paper" && playerChoiceScissor){
            return "You win! Scissor beats Paper!";
        } else if(computerSelection === "scissor" && playerChoiceRock) {
            return "You win! Rock beats Scissor!";
        } else if(computerSelection === "rock" && playerChoiceScissor) {
            return "You Loose! Rock beats Scissor!";
        } else if(computerSelection === "paper" && playerChoiceRock) {
            return "You Loose! Paper beats Rock!";
        } else if(computerSelection === "scissor" && playerChoicePaper){
            return "You Loose! Scissor beats Paper!";
        }
    }

   // for(let i=1; i<=5; i++) {
        //Computer Selection
        computerSelection = getComputerChoice();
        PlayerSelection = getPlayerChoice();
        
        /*PlayerSelection
        let playerSelection = prompt("Rock, Paper, Scissor");
        playerSelection = playerSelection.toLowerCase();*/

        //Function gameResult
        function gameResult(playerSelection,computerSelection){
            if(playRound(playerSelection, computerSelection) === "You win! Paper beats Rock!" || playRound(playerSelection,computerSelection) === "You win! Scissor beats Paper!" || playRound(playerSelection,computerSelection) === "You win! Rock beats Scissor!"){
                playerPoints ++;
                console.log("Player Score: " + playerPoints);
                return playerPoints;
            }else if (playRound(playerSelection,computerSelection) === `Even! You both picked ${computerSelection}!`){
                console.log("Tie! No Points!");
            } else {
                computerPoints ++;
                console.log("Computer Score: " + computerPoints);
                return computerPoints;
            }
        }
    
        //Output
        //console.log(`Round: ${i}`);
        console.log(playRound(playerSelection,computerSelection));
        gameResult (playerScore,computerScore);
    
    //}

    if (playerPoints > computerPoints) {
        console.log(`Final Result\nPlayer Points: ${playerPoints}\nComputer Points: ${computerPoints}\n\nPlayer won!`);
    } else if (playerPoints < computerPoints) {
        console.log(`Final Result\nPlayer Points: ${playerPoints}\nComputer Points: ${computerPoints}\n\nComputer won!`);
    } else {
        console.log(`Final Result\nPlayer Points: ${playerPoints}\nComputer Points: ${computerPoints}\n\nEven. Good game both of you!`);
    }
}

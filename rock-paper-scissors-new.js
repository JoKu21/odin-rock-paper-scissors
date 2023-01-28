/* Just removed play 5 rounds logic with comments */

let playerScore = 0;
let computerScore = 0;

//Call the game
game(playerScore, computerScore);

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

function game(playerPoints, computerPoints) {
    
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
        } else if(computerSelection === "paper" && playerSelection === "rock") {
            return "You Loose! Paper beats Rock!";
        } else if(computerSelection === "scissor" && playerSelection === "paper"){
            return "You Loose! Scissor beats Paper!";
        }
    }

   // for(let i=1; i<=5; i++) {
        //Computer Selection
        const computerSelection = getComputerChoice();
        
        //PlayerSelection
        let playerSelection = prompt("Rock, Paper, Scissor");
        playerSelection = playerSelection.toLowerCase();

        //Function gameResult
        function gameResult(){
            if(playRound(playerSelection,computerSelection) === "You win! Paper beats Rock!" || playRound(playerSelection,computerSelection) === "You win! Scissor beats Paper!" || playRound(playerSelection,computerSelection) === "You win! Rock beats Scissor!"){
                playerPoints ++;
                console.log("Player Score: " + playerPoints);
                return playerPoints;
            }else if (playRound(playerSelection,computerSelection) === `Even! You both picked ${playerSelection}!`){
                console.log("Tie! No Points!");
            } else {
                computerPoints ++;
                console.log("Computer Score: " + computerPoints);
                return computerPoints;
            }
        }
    
        //Output
        //console.log(`Round: ${i}`);
        console.log(playRound(playerSelection, computerSelection));
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

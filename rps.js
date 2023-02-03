//Decalration
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let rounds = 1; //initialize check-variable

//Player name
const playerName = prompt("What's your name?");

//Implement Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

//Implement Output Div
const outputDiv = document.getElementById('output');
outputDiv.textContent = `Welcome ${playerName}`;
outputDiv.style.cssText = 'text-align: center; font-size: 2rem; ';

//New Game
const newGame = document.getElementById('newGame');
newGame.addEventListener('click', () => {
    outputDiv.textContent = '';
    outputDiv.style.cssText = 'text-align: center; font-size: 1rem; ';

    const welcomeMessage = document.createElement('p');
    welcomeMessage.style.cssText = 'text-align: center; font-size: 2rem; margin: auto';
    welcomeMessage.textContent = `Welcome ${playerName}`;
    outputDiv.appendChild(welcomeMessage);
    
    playerScore = 0;
    computerScore = 0;
    playerSelection;
    computerSelection;
    rounds = 1;
});

//Create function to display result per round in outputDiv
function showRoundResult(playerScoreVariable, computerScoreVariable, playerName) {
    //Clear Screen
    outputDiv.textContent = '';
    outputDiv.style.cssText = 'text-align: center; font-size: 1rem; ';
    
    //Show Round
    const roundsOutput = document.createElement('p');
    roundsOutput.style.cssText = 'font-size: 1.5rem;'
    roundsOutput.textContent = `Round: ${rounds}`;
    outputDiv.appendChild(roundsOutput);
    
    //Player Selection
    const playerSelectionOutput = document.createElement('p');
    playerSelectionOutput.style.cssText = 'margin-top: -0.5rem;';
    playerSelectionOutput.textContent = `${playerName} Selection: ${playerSelection}`;
    outputDiv.appendChild(playerSelectionOutput);

    //Computer Selection
    const computerSelectionOutput = document.createElement('p');
    computerSelectionOutput.style.cssText = 'margin-top: -1rem;';
    computerSelectionOutput.textContent = `Computer Selection: ${computerSelection}`;
    outputDiv.appendChild(computerSelectionOutput);

    //Player Score
    const playerScoreOutput = document.createElement('p');
    playerScoreOutput.textContent = `${playerName} Score: ${playerScoreVariable}`;
    outputDiv.appendChild(playerScoreOutput);

    //Computer Score
    const computerScoreOutput = document.createElement('p');
    computerScoreOutput.style.cssText = 'margin-top: -1rem;';
    computerScoreOutput.textContent = `Computer Score: ${computerScoreVariable}`;
    outputDiv.appendChild(computerScoreOutput);

    if(playerSelection == computerSelection) {
        showTie(rounds);
    }
}

function showTie(rounds){
    //Show Round
    outputDiv.textContent = '';

    const roundsOutput = document.createElement('p');
    roundsOutput.style.cssText = 'font-size: 1.5rem;'
    roundsOutput.textContent = `Round: ${rounds}`;
    outputDiv.appendChild(roundsOutput);

    //Show Tie
    const showTie = document.createElement('p');
    showTie.style.cssText = 'font-size: 1.25rem;'
    showTie.textContent = 'Tie! No points!';
    outputDiv.appendChild(showTie);
}


function showFinalResult(playerScoreVariable, computerScoreVariable, playerName) {
    //Clear Screen and set final Result
    outputDiv.textContent = '';

    //finalHeadline
    const finalHeadline = document.createElement('p');
    finalHeadline.style.cssText = 'font-size: 1.5rem;'
    finalHeadline.textContent = 'Final Result';
    outputDiv.appendChild(finalHeadline);

    //Player Score
    const playerScoreOutput = document.createElement('p');
    playerScoreOutput.style.cssText = 'margin-top: -0.5rem;';
    playerScoreOutput.textContent = `${playerName} Score: ${playerScoreVariable}`;
    outputDiv.appendChild(playerScoreOutput);

    //Computer Score
    const computerScoreOutput = document.createElement('p');
    computerScoreOutput.style.cssText = 'margin-top: -1rem;';
    computerScoreOutput.textContent = `Computer Score: ${computerScoreVariable}`;
    outputDiv.appendChild(computerScoreOutput);

    //Add paragraph with final result
    const finalResult = document.createElement('p');
    finalResult.style.cssText = 'color: red; font-size: 1.5rem; text-shadow: 0 0 5px aliceblue;';
    finalResult.textContent = findWinner(playerScore, computerScore);
    outputDiv.appendChild(finalResult);
}

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
        if(rounds < 6) {
            playerSelection = 'rock';
            computerSelection = createComputerSelection();
            game(playerSelection, computerSelection);
            showRoundResult(playerScore, computerScore, playerName);
        } else {
            showFinalResult(playerScore, computerScore, playerName);
        }
        rounds++;
        if(rounds == 6) {
            changeButtonText();
        }
    });

    paper.addEventListener('click', () => {
        if(rounds < 6) {
            playerSelection = 'paper';
            computerSelection = createComputerSelection();
            game(playerSelection, computerSelection);
            showRoundResult(playerScore, computerScore, playerName);
        } else {
            showFinalResult(playerScore, computerScore, playerName);
        }
        rounds++;
        if(rounds == 6) {
            changeButtonText();
        }
    });

    scissor.addEventListener('click', () => {
        if(rounds < 6) {
            playerSelection = 'scissor';
            computerSelection = createComputerSelection();
            game(playerSelection, computerSelection);
            showRoundResult(playerScore, computerScore, playerName);
        } else {
            showFinalResult(playerScore, computerScore, playerName);
        }
        rounds++;
        if(rounds == 6) {
            changeButtonText();
        }
    });   

function changeButtonText() {
    //Change textContent
    rock.textContent = 'Result';
    paper.textContent = 'Result';
    scissor.textContent = 'Result';

    //change CSS
    rock.style.cssText = 'font-size: 1rem; color: red;';
    paper.style.cssText = 'font-size: 1rem; color: red;';
    scissor.style.cssText = 'font-size: 1rem; color: red;';
    
}    



function game(playerSelection, computerSelection) {
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
        //console.log("Player Score: " + playerScore);
        return playerScore;
    }else if(playerSelection == computerSelection){
        return 'Tie! No Points!';
    }else {
        computerScore ++;
        //console.log("Computer Score: " + computerScore);
        return computerScore;
    }
}

//Find Winnner
function findWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `${playerName} won!`;
    } else if (playerScore < computerScore) {
        return 'Computer won!';
    } else {
        return 'Even. Good game both of you!';
    }
}
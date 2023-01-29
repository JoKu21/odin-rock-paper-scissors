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

//Test CompChoice
console.log(createComputerSelection());

//Create playerSelection
function createPlayerSelection() {
    if(document.getElementById('rock').addEventListener('click', () => {return playerChoice = 'rock';})) {
        return playerChoice = 'rock';
    } else if(document.getElementById('paper').onclick == true) {
        console.log('paper');
    } else if(document.getElementById('rock').onclick == true) {
        console.log('scissor');
    }
}

console.log(createPlayerSelection());

//Adress functions to buttons (Test->console.log())
rock.addEventListener('click', () => {
    createPlayerSelection();
    console.log(playerSelection);
});

paper.addEventListener('click', createPlayerSelection());
scissor.addEventListener('click', createPlayerSelection());

//Start function game
function game() {

    for(let i = 1; i<=5; i++) {
        
        let playerSelection = prompt("Choose between Rock, Paper, Scissor");
        let computerSelection = getComputerChoice();

        //Get the computer's choice (random)
        function getComputerChoice() {
            let computerChoice = Math.round(Math.random()*3 + 1);
            if(computerChoice == 1) {
                return "Rock";
            } else if(computerChoice == 2) {
                return "Paper";
            } else {
                return "Scissor";
            }}

        //Play one round
        function playRound(playerSelection, computerSelection) {
        
            //Case: Player choose Rock
            if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "rock") {
                return `Round ${i}: Even. Nobody wins.`;
            } else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
                return `Round ${i}: You loose. Paper beats Rock.`;
            } else if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "rock"){
                return `Round ${i}: You win. Rock beats Scissor.`;
            }

            //Case: Player choose Paper
            if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "paper") {
                return `Round ${i}: Even. Nobody wins.`;
            } else if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "paper") {
                return `Round ${i}: You loose. Scissor beats Paper.`;
            } else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper"){
                return `Round ${i}: You win. Paper beats Rock.`;
            }

            //Case: Player choose Scissor
            if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "scissor") {
                return `Round ${i}: Even. Nobody wins.`;
            } else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissor") {
                return `Round ${i}: You loose. Rock beats Scissor.`; 
            } else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissor"){
                return `Round ${i}: You win. Scissor beats Paper.`;
            }}

        console.log(playRound(playerSelection, computerSelection)); //Test playRound
      
    }
}

game();
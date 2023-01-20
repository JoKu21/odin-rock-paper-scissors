const scorePlayer = 0;
const scoreComputer = 0;

function game(pointsPlayer,pointsComputer) {

    for(let i = 1; i<=5; i++) {
        
        let playerSelection = prompt("Choose between Rock, Paper, Scissor");
        let computerSelection = getComputerChoice();

        let pointsComputer;
        let pointsPlayer;
        let result;

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
                pointsComputer++;
            } else if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "rock"){
                return `Round ${i}: You win. Rock beats Scissor.`;  
                pointsPlayer++;
            }

            //Case: Player choose Paper
            if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "paper") {
                return `Round ${i}: Even. Nobody wins.`;
            } else if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "paper") {
                return `Round ${i}: You loose. Scissor beats Paper.`;
                pointsComputer++;
            } else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper"){
                return `Round ${i}: You win. Paper beats Rock.`;
                pointsPlayer++;
            }

            //Case: Player choose Scissor
            if(computerSelection.toLowerCase() === "scissor" && playerSelection.toLowerCase() === "scissor") {
                return `Round ${i}: Even. Nobody wins.`;
            } else if(computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissor") {
                return `Round ${i}: You loose. Rock beats Scissor.`; 
                pointsComputer++;
            } else if(computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissor"){
                return `Round ${i}: You win. Scissor beats Paper.`;
                pointsPlayer++;
            }}

        console.log(playRound(playerSelection, computerSelection, pointsComputer, pointsComputer)); //Test playRound
    }

    if(pointsComputer > pointsPlayer) {
        console.log("Final Result: Computer wins.");
    } else if(pointsComputer < pointsPlayer) {
        console.log("Final Result: Player wins.");
    } else {
        console.log("Final Result: Unbelievable. Nobody wins - it's even.");
    }
}

game(scorePlayer,scoreComputer);
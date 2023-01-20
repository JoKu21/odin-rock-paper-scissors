//Create a random number, multiply by 3 and add 1 -> possible results: 1,2,3
// If 1 -> Rock | If 2 -> Paper | If 3 -> Scissor
function getComputerChoice () {
    compChoice = Math.floor(Math.random()*3 + 1);
    if(compChoice == 1){
        compChoice = "Rock"
    } else if(compChoice == 2) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissor";
    }
}

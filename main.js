function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * choices.length); 
    return choices[random]; 
} 

function playRound(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase();
    const c = computerSelection; 
    if (playerSelection == computerSelection) {
        return 'Tie'; 
    } else if (p == 'rock'){
        if (c == 'paper'){
            return `You Lose! ${c} beats ${p}`; 
        } else if (c == 'scissors') {
            return `You Win! ${p} beats ${c}`; 
        }
    } else if (p == 'paper') {
        if (c == 'rock') {
            return `You Win! ${p} beats ${c}`; 
        } else if (c == 'scissors') {
            return `You Lose! ${c} beats ${p}`; 
        }
    } else if (p == 'scissors') {
        if (c == 'rock') {
            return `You Lose! ${c} beats ${p}`; 
        } else if (c == 'paper') {
            return `You Win! ${p} beats ${c}`; 
        }
    }
}


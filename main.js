function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * choices.length); 
    return choices[random]; 
} 

function playRound(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase(), c = computerSelection; 
    if (playerSelection == computerSelection) {
        return ['Tie', 'nobody'];  
    } else if (p == 'rock'){
        if (c == 'paper'){
            return [`You Lose! ${c} beats ${p}`, 'c']; 
        } else if (c == 'scissors') {
            return [`You Win! ${p} beats ${c}`, 'p']; 
        }
    } else if (p == 'paper') {
        if (c == 'rock') {
            return [`You Win! ${p} beats ${c}`, 'p']; 
        } else if (c == 'scissors') {
            return [`You Lose! ${c} beats ${p}`, 'c']; 
        }
    } else if (p == 'scissors') {
        if (c == 'rock') {
            return [`You Lose! ${c} beats ${p}`, 'c']; 
        } else if (c == 'paper') {
            return [`You Win! ${p} beats ${c}`, 'p'];  
        }
    }
}

function game(){
    let pwin = 0, cwin = 0, tie = 0; 
    for (let i = 0; i < 5; i++){
        const [result, winner] = playRound(prompt('Enter your move: '), computerPlay()); 
        if (winner == 'p'){
            pwin += 1; 
        } else if (winner == 'c') {
            cwin += 1; 
        } else {
            tie += 1; 
        }
        console.log(result); 
    }
    console.log(`You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`); 
}

game()
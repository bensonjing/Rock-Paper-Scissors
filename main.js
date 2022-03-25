let pwin = 0, cwin = 0, tie = 0; 

const buttons = document.querySelectorAll('button'); 
const div = document.querySelector('div'); 

function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']; 
    const random = Math.floor(Math.random() * choices.length); 
    return choices[random]; 
};

function playRound(playerSelection, computerSelection){
    const p = playerSelection.toLowerCase(), c = computerSelection; 
    if (playerSelection == computerSelection) {
        tie += 1; 
        div.textContent = `${p} and ${c} is a tie.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;   
    } else if (p == 'rock'){
        if (c == 'paper'){
            cwin += 1;  
            div.textContent = `You Lost! ${c} beats ${p}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;   
        } else if (c == 'scissors') {
            pwin += 1; 
            div.textContent = `You won! ${p} beats ${c}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;    
        }
    } else if (p == 'paper') {
        if (c == 'rock') {
            pwin += 1; 
            div.textContent = `You won! ${p} beats ${c}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;    
        } else if (c == 'scissors') {
            cwin += 1; 
            div.textContent = `You Lost! ${c} beats ${p}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;   
        }
    } else if (p == 'scissors') {
        if (c == 'rock') {
            cwin += 1; 
            div.textContent = `You Lost! ${c} beats ${p}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;   
        } else if (c == 'paper') {
            pwin += 1; 
            div.textContent = `You won! ${p} beats ${c}.` + `You won ${pwin} times. Computer won ${cwin} times. You tied ${tie} times`;     
        }
    }
}

function game(){
    if (pwin == 5) {
        alert('Player is the winner!'); 
    } else if (cwin == 5) {
        alert('Computer is the winner!'); 
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
        game();  
    }); 
}); 
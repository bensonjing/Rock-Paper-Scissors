function computerPlay(){
    const choices = ['Rock', 'Paper', 'Scissor']; 
    const random = Math.floor(Math.random() * choices.length); 
    return choices[random]; 
} 


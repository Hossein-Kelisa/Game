const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const result = document.getElementById('result');

choices.forEach(choice => {
    choice.addEventListener('click' , ()=>{
        const userChoice = choice.getAttribute('data-choice');
        playGame(userChoice);
    });
});

function playGame(userChoice){
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];


let outcome;
if (userChoice === computerChoice) {
    outcome = "It\'s a tie";
}
else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
){
    outcome = 'You win!';
}
else { 
    outcome = 'You lose!';
}
message.textContent = `you chose: ${userChoice}, Computer chose: ${computerChoice} `;
result.textContent = outcome;
}


// add new repository


// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener("click", () => playRound('rock'))
paperButton.addEventListener("click", () => playRound('paper'))
scissorsButton.addEventListener("click", () => playRound('scissors'))

// Define the playRound function
function playRound(playerSelection) {
    // Generate a random choice for the computer
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection = 'rock';
    if (randomNumber === 2) {
      computerSelection = 'paper'
    }
    if (randomNumber === 3) {
      computerSelection = 'scissors'
    }
    console.log(computerSelection);

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
      result.textContent = "Mathias lost!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      result.textContent = "Mathias won!!!!!"

      let data = document.getElementById('game')
      emailjs.sendForm('service_gzdackn', 'template_q0sinj9', data)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
      });


    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
      result.textContent = "It is a draw! Try again"
    }
    


    // console.log(playerSelection);
    
    
    
      
    
  }

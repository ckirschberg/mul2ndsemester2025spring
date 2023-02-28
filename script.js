
// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => play('rock'))
paperButton.addEventListener('click', () => play('paper'))
scissorsButton.addEventListener('click', () => play('scissors'))

// Define the playRound function
function play(playerSelection) {
    // Generate a random choice for the computer
    //Math.random()
    let cpuRandomNumber = Math.floor(Math.random() * 3) +1

    let computerSelection = '';
    if (cpuRandomNumber === 1) {
      computerSelection = 'rock'
    } else if (cpuRandomNumber === 2) {
      computerSelection = 'paper'
    } else if (cpuRandomNumber === 3) {
      computerSelection = 'scissors'
    }

    if(playerSelection === 'rock') {
      if(computerSelection === 'rock') {
        result.textContent = "It is a draw, try again!  Computer got " + computerSelection;
      } else if (computerSelection === 'scissors') {
        result.textContent = "I win, muahahahahah!!!! Computer got " + computerSelection;

        let form = document.getElementById("game");
        emailjs.sendForm('service_gzdackn', 'template_q0sinj9', form)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });

      } else if (computerSelection === 'paper') {
        result.textContent = "Computer wins  Computer got " + computerSelection;
      }
    }

    if (playerSelection === 'paper') {
      if (computerSelection === 'paper') {
        result.textContent = "It is a draw, try again!"; 
      } else if(computerSelection === 'rock') {
        result.textContent = "I win, muahahahahah!!!!";
      } else {
        result.textContent = "Computer wins";
      }
    }
    
    console.log(computerSelection)
    
    
      // result.textContent = "Who won?";
    
  }

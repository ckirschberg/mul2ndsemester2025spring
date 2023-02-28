
// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'))
paperButton.addEventListener('click', () => playRound('paper'))
scissorsButton.addEventListener('click', () => playRound('scissors'))

// function randomNumber(maxNumber) {
//   return Math.floor(Math.random() * maxNumber) + 1;
// }

// Define the playRound function
function playRound(playerSelection) {
    // Generate a random choice for the computer
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(randomNumber(5));

    let computerSelection = '';
    if (randomNumber === 1) {
      computerSelection = 'rock'
    } else if (randomNumber === 2) {
      computerSelection = 'paper';
    } else if (randomNumber === 3) {
      computerSelection = 'scissors'
    }

    // console.log(computerSelection);

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
      result.textContent = "You lost! Computer had " + computerSelection ;
      console.log("You lost");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      result.textContent = "You WON!!!!!!! Computer had " + computerSelection;

      let myForm = document.getElementById('game');
      emailjs.sendForm('service_gzdackn', 'template_q0sinj9', myForm)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                    

    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
      result.textContent = "It is a draw, try again. Computer had " + computerSelection;
    }


    if (playerSelection === 'rock' && computerSelection === 'paper') {
      result.textContent = "You lost! Computer had " + computerSelection ;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      result.textContent = "You WON!!!!!!! Computer had " + computerSelection;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
      result.textContent = "It is a draw, try again. Computer had " + computerSelection;
    }



    // console.log(randomNumber);
    // console.log(playerSelection);
    
    
    
    
      // result.textContent = "Who won?";
    
  }

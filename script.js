
// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));




// Define the playRound function
function playRound(playerSelection) {
    // Generate a random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  
    // Determine the winner based on the choices
    let winner;
    if (playerSelection === computerSelection) {
      winner = 'tie';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      winner = 'player';
    } else {
      winner = 'computer';
    }
  
    // Display the result on the screen
    if (winner === 'tie') {
      result.textContent = "It's a tie!";
    } else if (winner === 'player') {
      result.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";

      emailjs.sendForm('service_gzdackn', 'template_q0sinj9', document.getElementById('game'))
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    } else {
      result.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
  }


  const freetext = document.getElementById('inputFreetext')
  const question = document.getElementById('inputQuestion')

  freetext.addEventListener("click", () => {
    document.getElementById('divFreetext').style.display = 'block'
    document.getElementById('divQuestion').style.display = 'none'
  });
  question.addEventListener("click", () => {
    document.getElementById('divQuestion').style.display = 'block'
    document.getElementById('divFreetext').style.display = 'none'
  });


  document.getElementById('formFreetext').addEventListener('submit', (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_gzdackn', 'template_ulynbvb', document.getElementById('formFreetext'))
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
  });

// Select Rock, Paper, Scissors buttons and result div
// Opretter jeg konstanter så jeg kan referere til knapperne/div'en senere
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const resultDiv = document.getElementById('result')


// Add event listeners to the buttons - call playRound
// Lytter på om brugeren klikker på knapperne og kalder playRound funktionen
// med en parameter enten 'rock', 'paper' eller 'scissors'
rockBtn.addEventListener('click', () => playRound('rock'))
paperBtn.addEventListener('click', () => playRound('paper'))
scissorsBtn.addEventListener('click', () => playRound('scissors'))

// Define the playRound function
function playRound(playerSelection) {
    // Generate a random choice for the computer
    //Math.random()
    const player = document.getElementById('player').value

const random = Math.random(); // 0.0 til 1 men ikke 1
const random3 = random *3;
const randomNoDec = Math.floor(random3);
const randomNumber1 = randomNoDec +1;


    const randomNumber = Math.floor(Math.random() * 3) +1;


    // konverterer randomNumber til enten 'rock', 'paper' eller 'scissors'
    let computerSelection = 'rock';
    if (randomNumber === 2) {
      computerSelection = 'paper'
    } else if (randomNumber === 3) {
      computerSelection = "scissors"
    }
    

    if (playerSelection === 'rock' && computerSelection === 'rock' ||
      playerSelection === 'paper' && computerSelection === 'paper' ||
      playerSelection === 'scissors' && computerSelection === 'scissors') {

      resultDiv.innerHTML = "Det blev lige, prøv igen!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
      resultDiv.innerHTML = "Du vandt " + player + "!"
    } else {
      resultDiv.innerHTML = "Åh nej " + player + ", du tabte til computeren, som fik " + computerSelection
    }
    








    // Afgører hvem der vinder når brugeren trykker på 'rock'-knappen
    // if (playerSelection === 'rock') {
    //   if (computerSelection === 'rock') {
    //     resultDiv.innerHTML = "Det blev lige, prøv igen!"
    //   } else if (computerSelection === 'scissors') {
    //     resultDiv.innerHTML = "Jeg vandt, øv bøv"
    //   } else if (computerSelection === "paper") {
    //     resultDiv.innerHTML = "Åh nej, du tabte til computeren, som fik " + computerSelection
    //   }  
    // }

    // if (playerSelection === 'paper') {
    //   if (computerSelection === 'rock') {
    //     resultDiv.innerHTML = "Jeg vandt, øv bøv"
    //   } else if (computerSelection === 'scissors') {
    //     resultDiv.innerHTML = "Åh nej, du tabte til computeren, som fik " + computerSelection
    //   } else if (computerSelection === "paper") {
    //     resultDiv.innerHTML = "Det blev lige, prøv igen!"
    //   }  
    // }

    // if (playerSelection === 'scissors') {
    //   if (computerSelection === 'rock') {
    //     resultDiv.innerHTML = "Åh nej, du tabte til computeren, som fik " + computerSelection
    //   } else if (computerSelection === 'scissors') {
    //     resultDiv.innerHTML = "Det blev lige, prøv igen!"
    //   } else if (computerSelection === "paper") {
    //     resultDiv.innerHTML = "Jeg vandt, øv bøv"
    //   }  
    // }


    // alert(computerSelection)
    
      // result.textContent = "Who won?";
    
  }

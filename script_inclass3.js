
// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('sten'))
scissorsButton.addEventListener('click', () => playRound('saks'))
paperButton.addEventListener('click', () => playRound('papir'))


// Define the playRound function
function playRound(playerSelection) {
    // Generate a random choice for the computer
    //Math.random()
    console.log(playerSelection)
    
    const randomNumber = Math.floor(Math.random()*3)+1
    let computer = ""
    if (randomNumber === 1) {
      computer = "sten"
    } else if (randomNumber === 2) {
      computer = "saks"
    } else {
      computer = "papir"
    }
    console.log("computer fik ", computer)

    document.getElementById("computerDiv").textContent = 
      "Computeren fik " + computer

    if (computer === 'sten') {
      if (playerSelection === 'sten') {
        result.textContent = 'Det blev lige, prøv igen!'
      } else if (playerSelection === 'saks') {
        result.textContent = "Æv bæv, du har tabt!"
      } else {
        result.textContent = "Jubiiiiii, du vandt! Tillykke!"
      }
    }

    if (computer === 'saks') {
      if (playerSelection === 'sten') {
        result.textContent = 'Jubiiiiii, du vandt! Tillykke!'
      } else if (playerSelection === 'saks') {
        result.textContent = "Det blev lige, prøv igen!"
      } else {
        result.textContent = "Æv bæv, du har tabt!"
      }
    }

    if (computer === 'papir') {
      if (playerSelection === 'sten') {
        result.textContent = 'Æv bæv, du har tabt!'
      } else if (playerSelection === 'saks') {
        result.textContent = "Jubiiiiii, du vandt! Tillykke!"
      } else {
        result.textContent = "Det blev lige, prøv igen"
      }
    }

    // const random2 = Math.random()
    // let computer2 = "";
    // if (random2 > 0.6666) {
    //   computer2 = "sten"
    // } else if (random2 > 0.3333) {
    //   computer2 = "saks"
    // } else {
    //   computer2 = "papir"
    // }

    




    
    
    
      // result.textContent = "Who won?";
    
  }

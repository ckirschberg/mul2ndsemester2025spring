// const axios = require('axios');

// Rock, Paper, Scissors
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('sten'))
scissorsButton.addEventListener('click', () => playRound('saks'))
paperButton.addEventListener('click', () => playRound('papir'))

const url = "https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/"


const person = {
  fornavn: "John",
  efternavn: "Hansen",
  alder: 18,
  email: "kirs@cphbusiness.dk"
};

function add(number1, number2) {
  return number1 + number2;
}
console.log(add(2,5));

function getPersonFirstname(personObject) {
  return personObject.fornavn
}
console.log(getPersonFirstname(person))


function isPersonAdult(personObject) {
  return personObject.alder >= 18;
  // if (personObject.alder >= 18) {
  //   return true;
  // } else {
  //   return false
  // }
} 
console.log(isPersonAdult(person))

function getRandomNumber() {
  return Math.floor(Math.random()*10)+1;
}

async function getWeather() {
  const response = await axios.get('https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/' + getRandomNumber());
  return response.data;
}

async function writeHTML() {
  const weather = await getWeather();
  console.log(weather);
  document.getElementById('weather').textContent = weather.sky + " nedbør: " + weather.rain_mm + " mm"
}

writeHTML();


document.getElementById("name").textContent = 
person.fornavn + " " + person.efternavn + " " + person.alder + " " + person.email


const car1 = {
  type: "Fiat",
  model: "500",
  color: "White"
}

document.getElementById("car").textContent = car1.type + car1.model + car1.color;
console.log(car1)





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

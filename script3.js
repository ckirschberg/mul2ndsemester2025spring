// opret objekt 
const person1 = {
    firstname: 'Christian',
    lastname: 'Kirschberg',
    email: 'kirs@cphbusiness.dk'
}
const person2 = {
    firstname: 'Alberthe',
    lastname: 'Jensen',
    email: 'al@je.dk'
}

console.log(person1.firstname);

function loadPersonData() {
    // udvælge html elementerne firstname, lastname og email
    // Sætte værdierne fra person1 ind i firstname, lastname og email.
    // innerHTML
    // person1.firstname

    //document.getElementById('firstname'): Udvælger elementet firstname (div)
    // .innerHTML: Sætter jeg elementets indhold
    // = person1.firstname: Sætter jeg indholdet til person1's fornavn
    document.getElementById('firstname').innerHTML = person1.firstname
    document.getElementById('lastname').innerHTML = person1.lastname
    document.getElementById('email').innerHTML = person1.email
}

// tilknytte en event-listener på knappen
document.getElementById('loadPerson').addEventListener('click', loadPersonData)


function getName() {
    const name = "Alberthe";
    return name;
}
function giveMeANumber(number) {
    console.log(number);
}


// kalde funktionen der returnerer noget.
const name = getName()

giveMeANumber(264); // kalde funktion som ikke returnerer noget.


function getFullName(personObject) {
    return personObject.firstname + " " + personObject.lastname;
    //return
}


const fullname1 = getFullName(person1)
const fullname2 = getFullName(person2)
console.log(fullname1);
console.log(fullname2);

// returnerer et tilfældigt tal ml. 1 og 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10)+1;
}

// async fordi den tager 'lang' tid at udføre
async function getWeather() {
    const url = 'https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/' + getRandomNumber()
    const response = await axios.get(url);
    return response.data;
}

async function writeWeatherToHtml() {
    const weather = await getWeather();
    console.log(weather);
    //
    // udvælge elementer på siden med document.getElementById(.....)
    // innerHTML
    // weather.rain_mm
}

writeWeatherToHtml()





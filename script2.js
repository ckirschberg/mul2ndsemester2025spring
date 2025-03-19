

// console.log(person1);

// console.log("Personens fornavn er " + person1.firstname)

function loadPersonData() {
    // indsæt data i html elementerne.
    // udvælge html elementerne ud fra deres id
    // innerHTML = 'noget'
    document.getElementById('firstname').innerHTML = person1.firstname;
    document.getElementById('lastname').innerHTML = person1.lastname;
    document.getElementById('email').innerHTML = person1.email;

}

document.getElementById("loadPerson").addEventListener('click', loadPersonData)

// number er nu en parameter dvs. input til funktionen.
function giveMeANumber(number) {
    // alert(number);
}
giveMeANumber(15);

function getName() {
    const name = "Emily"
    return name;
}

const name = getName()
// alert("Dit navn er " + name)

//
const person1 = {
    firstname: 'Christian', 
    lastname: 'Kirschberg', 
    email: 'kirs@cphbusiness.dk'
};

function getFullName(person) {
    const fullname = person.firstname + " " + person.lastname;
    return fullname;
}

// Vi kalder funktionen og gemmer svaret i fullname konstanten.
const fullname = getFullName(person1);
// alert("Dit fulde navn er: " + fullname);

// det første bogstav bør være lille
// derefter stort bogstav for hver ord
function getRandomNumber() {
    return Math.floor(Math.random() * 10)+1
}

async function getWeather() {
    const url = 'https://65ddd3abdccfcd562f558d61.mockapi.io/api/v1/forecast/' + getRandomNumber();
    const weather = await axios.get(url); //tilføjet
    return weather.data; // rettet
}

async function writeWeatherToHtml() {
    const weather = await getWeather();
    console.log(weather);

    // Sætte data ind fra weather på html siden...
    console.log(weather.rain_mm)
}
writeWeatherToHtml();
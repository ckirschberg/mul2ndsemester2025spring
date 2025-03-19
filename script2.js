//
const person1 = {
    firstname: 'Christian', 
    lastname: 'Kirschberg', 
    email: 'kirs@cphbusiness.dk'
};

console.log(person1);

console.log("Personens fornavn er " + person1.firstname)

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
    alert(number);
}
giveMeANumber(15);

function getName() {
    const name = "Emily"
    return name;
}

const name = getName()
// alert("Dit navn er " + name)

function getFullName(/** send person objektet ind som parameter */) {

    return //...
}
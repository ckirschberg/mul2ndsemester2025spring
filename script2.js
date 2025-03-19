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

}

document.getElementById("loadPerson").addEventListener('click', loadPersonData)

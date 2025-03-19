// opret objekt 
const person1 = {
    firstname: 'Christian',
    lastname: 'Kirschberg',
    email: 'kirs@cphbusiness.dk'
}

console.log(person1.firstname);

function loadPersonData() {
    // udvælge html elementerne firstname, lastname og email
    // Sætte værdierne fra person1 ind i firstname, lastname og email.
    // innerHTML
    // person1.firstname
}

// tilknytte en event-listener på knappen
document.getElementById('loadPerson').addEventListener('click', loadPersonData)
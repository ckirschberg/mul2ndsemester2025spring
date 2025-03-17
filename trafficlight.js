function switchLights() {

    // udvælger jeg elementer i html-siden til senere brug
    const red = document.getElementById('red');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');

    // Write if else if statements, to go from red being active, to yellow being active, to green
    // and back to red.
    
    // The following will evaluate to true or false
                    // er der en css-klasse 'active' på id="red"
    const isActiveRed = red.classList.contains('active');
    console.log(isActiveRed); // test, er rød aktiv
    if(isActiveRed) { // Er rød aktiv?
        red.classList.remove('active'); // fjern active css-klassen på elementet 'rød'
        yellow.classList.add('active'); // tilføj active css-klassen på elementet 'gul'
    } else if (yellow.classList.contains('active')) { // Er yellow active?
        yellow.classList.remove('active');
        green.classList.add('active');
    } else { // Hvis red og yellow IKKE er active, så..
        green.classList.remove('active'); // gør det her
        red.classList.add('active') // rød bliver tændt igen
    }
}

// Tilknyt event-listener på at brugeren trykker på knappen
document.getElementById('change-light').addEventListener('click', switchLights);


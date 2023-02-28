function switchLights() {

    const red = document.getElementById('red')
    const yellow = document.getElementById('yellow')
    const green = document.getElementById('green')

    // Write if else if statements, to go from red being active, to yellow being active, to green
    // and back to red.
    
    // The following will evaluate to true or false
    red.classList.contains("active")


}

document.getElementById('change-light')
    .addEventListener('click', switchLights);


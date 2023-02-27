function switchLights() {

    const red = document.getElementById('red')
    const yellow = document.getElementById('yellow')
    const green = document.getElementById('green')

    // Write if else if statements, to go from red being active, to yellow being active, to green
    // and back to red.
    if (red.classList.contains("active")) {
        red.classList.remove("active");
        yellow.classList.add("active");
    } else if (yellow.classList.contains("active")) {
        yellow.classList.remove("active")
        green.classList.add("active")
    } else if (green.classList.contains("active")) {
        green.classList.remove("active")
        red.classList.add("active")
    }
}

document.getElementById('change-light').addEventListener('click', switchLights);


function colourPickerEvent() {
    const colourPicker = document.getElementById("colour-picker");

    // Retrieve stored color from localStorage and set as initial value
    const storedColour = localStorage.getItem('simulation-background-colour');
    if (storedColour) {
        colourPicker.value = storedColour;
    }

    colourPicker.addEventListener("input", (event) => {
        const selectedColour = event.target.value;
        localStorage.setItem("simulation-background-colour", selectedColour);
    });
}
// Screen configuration
let fps = 80;

// Background configuration
let backgroundColourPicker = localStorage.getItem("simulation-background-colour");

if (backgroundColourPicker === null) {
    backgroundColourPicker = "#27445C";
}

let backgroundColourHex = backgroundColourPicker;
let minWindowWidth = 800;

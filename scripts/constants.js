// One pixel should be 0.0001m in the program
let pixelLength = 0.00026; // 0.00026m
let centimetreConversion = 0.01;
let pixelConversionConstant = centimetreConversion / pixelLength;

// Screen configuration
let fps = 60;

// Background configuration
let backgroundColourPicker = localStorage.getItem("simulation-background-colour");

if (backgroundColourPicker === null) {
    backgroundColourPicker = "#27445C";
}

let backgroundColourHex = backgroundColourPicker;
let minWindowWidth = 800;
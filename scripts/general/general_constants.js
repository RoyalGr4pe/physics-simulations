// One pixel should be 0.0001m in the program
let pixelLength = 0.00026; // 0.00026m
let centimetreConversion = 0.01;
let pixelConversionConstant = centimetreConversion / pixelLength;

// Screen configuration
let fps = 60;

// Background configuration
const backgroundColourPicker = localStorage.getItem("simulation-background-colour");
console.log(backgroundColourPicker);
let backgroundColourHex = backgroundColourPicker;
let minWindowWidth = 800;
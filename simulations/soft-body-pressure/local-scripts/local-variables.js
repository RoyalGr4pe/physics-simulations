let joints;
let lastFrame;
let deltaTime;
let isMenuOpen = false;
let volume;


// Sliders
let springConstantSlider;
let numberOfJointsSlider;
let springLengthSlider;
let jointMassSlider;
let jointRadiusSlider;
let simulationSpeedSlider;
let gravitySlider;


// Slider values
let springConstantSliderValue;
let numberOfJointsSliderValue;
let springLengthSliderValue;
let jointMassSliderValue;
let jointRadiusSliderValue;
let simulationSpeedSliderValue;
let gravitySliderValue;

// Constants
const springWidth = 3;
const Pressure = -600;

// One pixel should be 0.0001m in the program
const pixelLength = 0.00026; // 0.00026m
const centimetreConversion = 0.01;
const pixelConversionConstant = centimetreConversion / pixelLength;

const boundaryDampingCoefficient = 0.99;
const springDampingCoefficient = 0.95;
const coefficientOfRestitution = 0.99;


function loadSettings() {    
  // Sliders
  springConstantSlider = document.getElementById("spring-constant-range");
  numberOfJointsSlider = document.getElementById("number-of-joints-range");
  springLengthSlider = document.getElementById("spring-length-range");
  jointMassSlider = document.getElementById("joints-mass-range");
  jointRadiusSlider = document.getElementById("joints-radius-range");
  simulationSpeedSlider = document.getElementById("simulation-speed-range");
  gravitySlider = document.getElementById("gravity-range");

  // Slider values
  simulationSpeedSliderValue = document.getElementById("simulation-speed-value");
  springConstantSliderValue = document.getElementById("spring-constant-value");
  numberOfJointsSliderValue = document.getElementById("number-of-joints-value");
  springLengthSliderValue = document.getElementById("spring-length-value");
  jointMassSliderValue = document.getElementById("joints-mass-value");
  jointRadiusSliderValue = document.getElementById("joints-radius-value");
  gravitySliderValue = document.getElementById("gravity-value");

  for (let i = 0; i < sliderInputs.length; i++) {
    sliders.push([sliderInputs[i], sliderValues[i]])
  }
}
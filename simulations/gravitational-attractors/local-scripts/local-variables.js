let spaceWidth = 2000;
let spaceHeight = 2000;

let lastFrame;
let deltaTime;
let isMenuOpen = false;

// Sliders
let speedSlider;
let numberOfAttractorsSlider;
let gravitationalConstantSlider;

// Slider Values
let speedSliderValue;
let numberOfAttractorsValue;
let gravitationalConstantValue;


// Constants
const MASS = 0;
const RADIUS = 1;
const POS = 2;
const VEL = 3;
const ACC = 4;
const COLOUR = 5;
const ORBITING_OBJS = 6;

const speedIncrease = 10;
const coefficientOfRestitution = 0.01;
const boundaryDampingCoefficient = 0.95;

let attractors = [];

function loadSettings() {
    // Sliders
    speedSlider = document.getElementById("simulation-speed-range");
    numberOfAttractorsSlider = document.getElementById("attractor-numbers-range")
    gravitationalConstantSlider = document.getElementById("gravitational-constant-range");
    gravitationalConstantPowerSlider = document.getElementById("gravitational-constant-power-range");
    attractorMassSlider = document.getElementById("attractor-mass-range");
    attractorMassPowerSlider = document.getElementById("attractor-mass-power-range");
    attractorRadiusSlider = document.getElementById("attractor-radius-range");

    // Slider values
    speedSliderValue = document.getElementById("simulation-speed-value");
    numberOfAttractorsValue = document.getElementById("attractor-numbers-value")
    gravitationalConstantValue = document.getElementById("gravitational-constant-value");
    gravitationalConstantPowerValue = document.getElementById("gravitational-constant-power-value");
    attractorMassValue = document.getElementById("attractor-mass-value");
    attractorMassPowerValue = document.getElementById("attractor-mass-power-value");
    attractorRadiusValue = document.getElementById("attractor-radius-value");


    for (let i = 0; i < sliderInputs.length; i++) {
        sliders.push([sliderInputs[i], sliderValues[i]])
    }
}
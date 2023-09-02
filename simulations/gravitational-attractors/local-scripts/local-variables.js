let spaceWidth = 2000;
let spaceHeight = 2000;

let lastFrame;
let deltaTime;
let isMenuOpen = false;

// Sliders
let speedSlider;
let numberOfParticlesSlider;
let gravitationalConstantSlider;

// Slider Values
let speedSliderValue;
let numberOfParticlesValue;
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

let planetaryBodies = [];

function loadSettings() {
    // Sliders
    speedSlider = document.getElementById("simulation-speed-range");
    numberOfParticlesSlider = document.getElementById("particle-numbers-range")
    gravitationalConstantSlider = document.getElementById("gravitational-constant-range");
    gravitationalConstantPowerSlider = document.getElementById("gravitational-constant-power-range");
    particleMassSlider = document.getElementById("particle-mass-range");
    particleMassPowerSlider = document.getElementById("particle-mass-power-range");
    particleRadiusSlider = document.getElementById("particle-radius-range");

    // Slider values
    speedSliderValue = document.getElementById("simulation-speed-value");
    numberOfParticlesValue = document.getElementById("particle-numbers-value")
    gravitationalConstantValue = document.getElementById("gravitational-constant-value");
    gravitationalConstantPowerValue = document.getElementById("gravitational-constant-power-value");
    particleMassValue = document.getElementById("particle-mass-value");
    particleMassPowerValue = document.getElementById("particle-mass-power-value");
    particleRadiusValue = document.getElementById("particle-radius-value");


    for (let i = 0; i < sliderInputs.length; i++) {
        sliders.push([sliderInputs[i], sliderValues[i]])
    }
}
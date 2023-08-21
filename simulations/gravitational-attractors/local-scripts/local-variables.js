let spaceWidth = 2000;
let spaceHeight = 2000;

let lastFrame;
let deltaTime;
let isMenuOpen = false;

let sliderContainer;
let sliderLabels;
let speedSlider;
let speedSliderValue;
let auSlider;
let auSliderValue;

let stars = [];
let planets = [];
let moons = [];


// Constants
const MASS = 0;
const RADIUS = 1;
const POS = 2;
const VEL = 3;
const ACC = 4;
const COLOUR = 5;
const ORBITING_OBJS = 6;

const G = 6.674 * 10e-11;
const sunMass = 1.989 * 10e30;
const earthMass = 5.972 * 10e24;
const moonMass = 7.348 * 10e22;
const speedIncrease = 10;
const earthVelocity = 29783 // m/s

const AU_TO_METRES = 1.5 * 10e11 // Distance from Earth to Sun in metres
const AU_TO_PIXEL = 100; // One astronomical unit equals 50 pixels ()

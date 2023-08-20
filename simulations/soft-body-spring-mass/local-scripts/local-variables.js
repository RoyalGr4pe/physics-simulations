let jointsGrid;
let lastFrame;
let deltaTime;
let isMenuOpen = false;

// Sliders
let sliderContainer;
let sliderLabels;
let springConstantSlider;
let numberOfJointsSlider;
let startingAngleSlider;
let springLengthSlider;
let jointMassSlider;
let jointRadiusSlider;
let simulationSpeedSlider;
let gravitySlider;


// Slider values
let springConstantSliderValue;
let numberOfJointsSliderValue;
let startingAngleSliderValue;
let springLengthSliderValue;
let jointMassSliderValue;
let jointRadiusSliderValue;
let simulationSpeedSliderValue;
let gravitySliderValue;

// Constants
const springWidth = 3;
const boundaryDampingCoefficient = 0.95;
const springDampingCoefficient = 0.95;
const coefficientOfRestitution = 0.95;
let canvasWidth;
let canvas;

// Containers
let mainContainer;
let simulationContainer;
let sideBarContainer;
let sliderContainer;


// Elements
let simulationTitle;
let sliderLabels;

let jointsGrid;
let lastFrame;
let deltaTime;
let isMenuOpen = true;
let minWindowWidth = 800;

// Sliders
let springConstantSlider;
let numberOfJointsSlider;
let startingAngleSlider;
let springLengthSlider;
let jointMassSlider;
let jointRadiusSlider;
let simulationSpeedSlider;

// Slider values
let springConstantSliderValue;
let numberOfJointsSliderValue;
let startingAngleSliderValue;
let springLengthValue;
let jointMassValue;
let jointRadiusValue;
let simulationSpeedValue;


function setup() {
  mainContainer = document.getElementById("main-container");
  mainContainer.style.gridTemplateColumns = "20% 80%";

  simulationContainer = document.getElementById("simulation-container");
  sideBarContainer = document.getElementById("side-bar-container");

  simulationTitle = document.getElementById("simulation-title-div");
  sliderContainer = document.getElementById("settings-container");
  sliderLabels = document.getElementsByClassName("slider-label");

  // Sliders
  springConstantSlider = document.getElementById("spring-constant-range");
  numberOfJointsSlider = document.getElementById("number-of-joints-range");
  startingAngleSlider = document.getElementById("starting-angle-range");
  springLengthSlider = document.getElementById("spring-length-range");
  jointMassSlider = document.getElementById("joints-mass-range");
  jointRadiusSlider = document.getElementById("joints-radius-range");
  simulationSpeedSlider = document.getElementById("simulation-speed-range");

  // Slider values
  springConstantSliderValue = document.getElementById("spring-constant-value");
  numberOfJointsSliderValue = document.getElementById("number-of-joints-value");
  startingAngleSliderValue = document.getElementById("starting-angle-value");
  springLengthSliderValue = document.getElementById("spring-length-value");
  jointMassSliderValue = document.getElementById("joints-mass-value");
  jointRadiusSliderValue = document.getElementById("joints-radius-value");
  simulationSpeedSliderValue = document.getElementById("simulation-speed-value");

  canvas = createCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, WEBGL);
  canvas.parent(simulationContainer);

  lastFrame = new Date().getTime();

  resetSketchEvent();
}


function draw() {
  deltaTime = Number(simulationSpeedSlider.value) * (new Date().getTime() - lastFrame) * 0.001;
  lastFrame = new Date().getTime();
  
  resizeCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, true)
  background(backgroundColourHex);
  frameRate(fps);
  translate(-(simulationContainer.clientWidth)/2, simulationContainer.clientHeight/2, 0);
  scale(1, -1); // Invert the Y-axis
  
  adjustElementsSize();
  updateSliderInfo();
  updateJointsAndSprings();
  renderJointsAndSprings();
}


function windowResized() {
  resizeCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight);
}

function renderJointsAndSprings() {
  // Render all the springs
  for (spring of springs) {
    spring.render();
  }
  // Render all the joints
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.render();
    }
  }
}


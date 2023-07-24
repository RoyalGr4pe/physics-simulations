let canvas;
let canvasDiv;
let resetSimulation;

let springConstantSlider;
let springConstantSliderValue;
let leftContainer;
let numberOfJointsSlider;
let numberOfJointsSliderValue;
let startingAngleSlider;
let startingAngleSliderValue;
let menuButton;

let isMenuOpen = true;

let rotationAngle;
let centreOfGrid;
let jointsGrid;
let springs;
let deltaTime;


function setup() {
  menuContainer = document.getElementById("menuContainer");
  buttonsContainer = document.getElementById("buttonsContainer");
  
  canvas = createCanvas(windowWidth - menuContainer.offsetWidth, windowHeight, WEBGL);
  canvas.parent("main-canvas");

  springConstantSlider = document.getElementById("spring-constant-range");
  springConstantSliderValue = document.getElementById("spring-constant-value");
  numberOfJointsSlider = document.getElementById("number-of-joints-range");
  numberOfJointsSliderValue = document.getElementById("number-of-joints-value");
  startingAngleSlider = document.getElementById("angle-range");
  startingAngleSliderValue = document.getElementById("angle-value");
  menuButton = document.getElementById("menu-button");

  // Add event listener to the toggle button
  menuButton.addEventListener("click", toggleMenuEvent());

  updateSliderInfo();
  resetSketch();
}


function draw(){
  deltaTime = speed * (window.performance.now() - canvas._pInst._lastFrameTime)/100;

  background(backgroundColourHex);
  frameRate(fps);
  translate(-(windowWidth - menuContainer.offsetWidth)/2, windowHeight/2, 0);
  scale(1, -1); // Invert the Y-axis

  updateJointsAndSprings();
  renderJointsAndSprings();
}


function windowResized() {
  resizeCanvas(windowWidth - menuContainer.offsetWidth, windowHeight);
}


function updateJointsAndSprings() {
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update(windowWidth - menuContainer.offsetWidth, windowHeight, deltaTime);
    }
  }
  // Update all the springs
  for (spring of springs) {
    spring.setSpringConstant(springConstantSlider.value);
    spring.update();
  }
}


function renderJointsAndSprings() { 
  for (spring of springs) {
    spring.render();
  }
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.render();
    }
  }
}


function updateSliderInfo() {
  springConstantSliderValue.innerHTML = springConstantSlider.value;
  numberOfJointsSliderValue.innerHTML = numberOfJointsSlider.value;
  startingAngleSliderValue.innerHTML = startingAngleSlider.value;

  springConstantSlider.oninput = function() {
    springConstantSliderValue.innerHTML = this.value;
  }  
  
  numberOfJointsSlider.oninput = function() {
    numberOfJointsSliderValue.innerHTML = this.value;
  }

  startingAngleSlider.oninput = function() {
    startingAngleSliderValue.innerHTML = this.value;
  }
}
 


function resetSketch() {
  jointsGrid = createJoints(numberOfJointsSlider.value, windowWidth - menuContainer.offsetWidth, windowHeight);

  centreOfGrid = calculateCentreOfGrid(jointsGrid, rotationAngle);
  rotationAngle = (startingAngleSlider.value * Math.PI)/180;

  for (joints of jointsGrid) {
    for (joint of joints) {
      let positionAfterRotation = calculatePositionAfterRotation(joint.getPosition(), rotationAngle, centreOfGrid);
      joint.setPosition(positionAfterRotation);
    }
  }

  springs = createSprings(jointsGrid);
}
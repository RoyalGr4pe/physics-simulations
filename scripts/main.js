let canvas;
let canvasDiv;
let resetSimulation;
let springConstantSliderValue;
let springConstantSlider;
let rotationAngle;
let centreOfGrid;
let jointsGrid;
let springs;
let deltaTime;


function setup() {
  canvas = createCanvas(windowWidth * 0.8, windowHeight, WEBGL);
  canvas.parent("main-canvas");
  
  // Spring Constant slider
  springConstantSlider = document.getElementById("spring-constant-range");
  springConstantSliderValue = document.getElementById("spring-constant-value")
  springConstantSliderValue.innerHTML = springConstantSlider.value;

  springConstantSlider.oninput = function() {
    springConstantSliderValue.innerHTML = this.value;
  }

  // Number of joints slider
  numberOfJointsSlider = document.getElementById("number-of-joints-range");
  numberOfJointsSliderValue = document.getElementById("number-of-joints-value");
  numberOfJointsSliderValue.innerHTML = numberOfJointsSlider.value;
  
  numberOfJointsSlider.oninput = function() {
    numberOfJointsSliderValue.innerHTML = this.value;
  }

  // Starting angle slider
  startingAngleSlider = document.getElementById("angle-range");
  startingAngleSliderValue = document.getElementById("angle-value");
  startingAngleSliderValue.innerHTML = startingAngleSlider.value;

  startingAngleSlider.oninput = function() {
    startingAngleSliderValue.innerHTML = this.value;
  }

  // Starts or resets the sketch
  resetSketch();
}


function draw(){
  deltaTime = speed * (window.performance.now() - canvas._pInst._lastFrameTime)/100;

  background(backgroundRed, backgroundGreen, backgroundBlue);
  frameRate(fps);
  translate(-width/2, height/2, 0);
  scale(1, -1); // Invert the Y-axis

  updateJointsAndSprings();
  renderJointsAndSprings();
}


function windowResized() {
  resizeCanvas(width, height);
}


function updateJointsAndSprings() {
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update(width, height, deltaTime);
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


function resetSketch() {
  jointsGrid = createJoints(numberOfJointsSlider.value, width, height);

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
let canvas;
let canvasDiv;
let resetSimulation;
let springConstantSliderValue;
let left_container;
let springConstantSlider;
let rotationAngle;
let centreOfGrid;
let jointsGrid;
let springs;
let deltaTime;


function setup() {
  left_container = document.getElementById("leftContainer");

  canvas = createCanvas(windowWidth - left_container.offsetWidth, windowHeight, WEBGL);
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

  background(backgroundColourHex);
  frameRate(fps);
  translate(-(windowWidth - left_container.offsetWidth)/2, windowHeight/2, 0);
  scale(1, -1); // Invert the Y-axis

  updateJointsAndSprings();
  renderJointsAndSprings();
}


function windowResized() {
  console.log(width)
  resizeCanvas(windowWidth - left_container.offsetWidth, windowHeight);
}


function updateJointsAndSprings() {
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update(windowWidth - left_container.offsetWidth, windowHeight, deltaTime);
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
  jointsGrid = createJoints(numberOfJointsSlider.value, windowWidth - left_container.offsetWidth, windowHeight);

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
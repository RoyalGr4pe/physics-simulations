let canvas;
let resetSimulation;
let springConstantSliderValue;
let springConstantSlider;
let jointsGrid;
let springs;
let deltaTime;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  // Spring Constant slider
  springConstantSlider = document.getElementById("spring-constant-range");
  springConstantSliderValue = document.getElementById("spring-constant-value")
  springConstantSliderValue.innerHTML = springConstantSlider.value;
  
  springConstantSlider.oninput = function() {
    springConstantSliderValue.innerHTML = this.value;
  }

  // Starts or resets the sketch
  resetSketch();
}


function draw(){
  deltaTime = speed * (window.performance.now() - canvas._pInst._lastFrameTime)/100;

  background(backgroundRed, backgroundGreen, backgroundBlue);
  frameRate(fps);
  translate(-windowWidth/2, windowHeight/2, 0);
  scale(1, -1); // Invert the Y-axis

  updateJointsAndSprings();
  renderJointsAndSprings();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function updateJointsAndSprings() {
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update(windowWidth, windowHeight, deltaTime);
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
  jointsGrid = createJoints(numberOfJoints, windowWidth, windowHeight);
  springs = createSprings(jointsGrid);
}

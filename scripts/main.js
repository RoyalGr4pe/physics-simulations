let canvas;
let jointsGrid;
let springs;
let deltaTime;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  jointsGrid = createJoints(numJoints, windowWidth, windowHeight);
  springs = createSprings(jointsGrid);
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
  for (spring of springs) {
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
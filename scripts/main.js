let canvas;
let jointsGrid;
let deltaTime

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  jointsGrid = createJoints(16, windowWidth, windowHeight)
}

function draw(){
  deltaTime = (window.performance.now() - canvas._pInst._lastFrameTime)/100;

  background(backgroundRed, backgroundGreen, backgroundBlue)
  frameRate(fps);
  translate(-windowWidth/2, windowHeight/2, 0)
  scale(1, -1); // Invert the Y-axis
  
  updateJoints()
  renderJoints()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateJoints() {
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update(windowWidth, windowHeight, deltaTime)
    }
  }
}

function renderJoints() {
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.render()
    }
  }
}
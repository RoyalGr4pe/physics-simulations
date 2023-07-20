let jointsGrid;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  jointsGrid = createJoints(4, windowWidth, windowHeight)
}

function draw(){
  background(backgroundRed, backgroundGreen, backgroundBlue)
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
      joint.update(windowWidth, windowHeight)
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
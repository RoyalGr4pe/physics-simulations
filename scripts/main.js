let jointsGrid = createJoints(4)

function updateJoints() {
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.update()
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

function setup() {
  createCanvas(screenWidth, screenHeight, WEBGL);
}

function draw(){
  background(backgroundRed, backgroundGreen, backgroundBlue)
  translate(-screenWidth/2, screenHeight/2, 0)
  scale(1, -1); // Invert the Y-axis
  updateJoints()
  renderJoints()
}
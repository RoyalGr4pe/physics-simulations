let jointsGrid = createJoints(4)
console.log(jointsGrid)
function renderJoints() {
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.render(joint.pos[0], joint.pos[1], joint.radius)
    }
  }
}

function setup() {
  createCanvas(screenWidth, screenHeight, WEBGL);
}

function draw(){
  background(backgroundRed, backgroundGreen, backgroundBlue)
  translate(-width/2, -height/2, 0)
  renderJoints()
}
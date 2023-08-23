function setup() {
  loadSimulationSharedElements();
  loadSettings();

  let canvas = createCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, WEBGL);
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
  
  adjustSharedElementsSize();
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
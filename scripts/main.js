let canvas;
let springConstantSliderText;
let springConstantSlider;
let jointsGrid;
let springs;
let deltaTime;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);


  // Spring Constant slider
  springConstantSlider = createSlider(200, 1000, 800, 10);
  springConstantSlider.position(10, 50);
  springConstantSlider.style('width', '200px');

  springConstantSliderText = createElement("h3", "Spring Constant:  " + springConstantSlider.value());
  springConstantSliderText.style('color', ' #FF5733');
  springConstantSliderText.position(10, 5);

  jointsGrid = createJoints(numberOfJoints, windowWidth, windowHeight);
  springs = createSprings(jointsGrid);
}

function draw(){
  deltaTime = speed * (window.performance.now() - canvas._pInst._lastFrameTime)/100;

  background(backgroundRed, backgroundGreen, backgroundBlue);
  frameRate(fps);
  translate(-windowWidth/2, windowHeight/2, 0);
  scale(1, -1); // Invert the Y-axis
  
  // Update Spring Constant slider text
  springConstantSliderText.html("Spring Constant:  " + springConstantSlider.value());

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
    spring.setSpringConstant(springConstantSlider.value());
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
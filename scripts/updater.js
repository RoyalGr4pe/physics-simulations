function updateJointsAndSprings() {
  // Update all the joints
  jointCollisionHandler(jointsGrid);
  for (joints of jointsGrid) {
    for (joint of joints) {
      joint.setMass(Number(jointMassSlider.value));
      joint.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
    }
  }
  // Update all the springs
  for (spring of springs) {
    spring.setSpringConstant(Number(springConstantSlider.value));
    spring.update();
  }
}


function updateSliderInfo() {
  springConstantSliderValue.innerHTML = springConstantSlider.value;
  numberOfJointsSliderValue.innerHTML = numberOfJointsSlider.value;
  startingAngleSliderValue.innerHTML = startingAngleSlider.value;
  springLengthSliderValue.innerHTML = springLengthSlider.value;
  jointMassSliderValue.innerHTML = jointMassSlider.value;
  jointRadiusSliderValue.innerHTML = jointRadiusSlider.value;
  simulationSpeedSliderValue.innerHTML = simulationSpeedSlider.value;

  springConstantSlider.oninput = function() {
    springConstantSliderValue.innerHTML = this.value;
  }  
  
  numberOfJointsSlider.oninput = function() {
    numberOfJointsSliderValue.innerHTML = this.value;
  }

  startingAngleSlider.oninput = function() {
    startingAngleSliderValue.innerHTML = this.value;
  }

  springLengthSlider.oninput = function() {
    springLengthSliderValue.innerHTML = this.value;
  }  
  
  jointMassSlider.oninput = function() {
    jointMassSliderValue.innerHTML = this.value;
    console.log(typeof(jointMassSlider.value))
  }

  jointRadiusSlider.oninput = function() {
    jointRadiusSliderValue.innerHTML = this.value;
  }

  simulationSpeedSlider.oninput = function() {
    simulationSpeedSliderValue.innerHTML = this.value;
  }
}
  
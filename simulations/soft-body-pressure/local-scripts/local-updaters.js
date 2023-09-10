function updateJointsAndSprings() {
  volume = calcVolume(joints);

  // Update all the joints
  jointCollisionHandler(joints);
  for (let joint of joints) {
    applyPressureV(joints);
    joint.setMass(Number(jointMassSlider.value));
    joint.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
  }
  // Update all the springs
  for (spring of springs) {
    spring.setSpringConstant(Number(springConstantSlider.value));
    spring.update();
  }
}

function renderJointsAndSprings() {
  // Render all the springs
  for (spring of springs) {
    spring.render();
  }
  // Render all the joints
  for (joint of joints) {
    joint.render();
  }
}
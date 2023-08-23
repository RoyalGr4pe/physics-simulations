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
  
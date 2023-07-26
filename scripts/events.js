function toggleMenuButtonEvent() {
  if (windowWidth >= minWindowWidth) {
    if (mainContainer.style.gridTemplateColumns == "20% 80%") {
      mainContainer.style.gridTemplateColumns = "5% 95%";
      isMenuOpen = false;
    } 
    else {
      mainContainer.style.gridTemplateColumns = "20% 80%";
      isMenuOpen = true;
    }
  }
  else if (windowWidth < minWindowWidth) {
    if (mainContainer.style.gridTemplateColumns == "100% 0%") {
      mainContainer.style.gridTemplateColumns = "15% 85%";
      isMenuOpen = false;
    } 
    else {
      mainContainer.style.gridTemplateColumns = "100% 0%";
      isMenuOpen = true;
    }
  }
}


function resetSketchEvent() {
  jointsGrid = createJoints(
    Number(numberOfJointsSlider.value), 
    Number(springLengthSlider.value), 
    Number(jointMassSlider.value),
    Number(jointRadiusSlider.value),
    simulationContainer.clientWidth, 
    simulationContainer.clientHeight
  );

  rotationAngle = (Number(startingAngleSlider.value) * Math.PI)/180;
  centreOfGrid = calculateCentreOfGrid(jointsGrid, rotationAngle);

  for (joints of jointsGrid) {
    for (joint of joints) {
      let positionAfterRotation = calculatePositionAfterRotation(joint.getPosition(), rotationAngle, centreOfGrid);
      joint.setPosition(positionAfterRotation);
    }
  }

  springs = createSprings(jointsGrid, Number(springConstantSlider.value), Number(springLengthSlider.value));
}
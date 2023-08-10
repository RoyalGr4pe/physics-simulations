function toggleMenuButtonEvent() {

  // If window width can have both menu bar and canvas
  if (windowWidth >= minWindowWidth) {

    // Close menu
    if (mainContainer.style.gridTemplateColumns == "20% 80%") {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "5% 95%";
      isMenuOpen = false;
    } 

    // Open menu
    else {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "20% 80%";
      isMenuOpen = true;
    }
  }

  // If window width can only have both small menu bar or canvas
  else if (windowWidth < minWindowWidth) {

    // Close menu
    if (mainContainer.style.gridTemplateColumns == "100% 0%") {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "15% 85%";
      isMenuOpen = false;
    } 

    // Open menu
    else {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "100% 0%";
      isMenuOpen = true;
    }
  }

  // Wait for the transition to complete and then remove the class
  setTimeout(() => {
    mainContainer.classList.remove("smooth-side-bar-transition");
  }, 300);
}


function resetSketchEvent() {
  let numberOfJoints = Number(numberOfJointsSlider.value);
  let springConstant = Number(springConstantSlider.value);
  let jointsMass = Number(jointMassSlider.value);
  let springLength = Number(springLengthSlider.value) * pixelConversionConstant;
  let jointsRadius = Number(jointRadiusSlider.value) * pixelConversionConstant;
  let rotationAngle = (Number(startingAngleSlider.value) * Math.PI) / 180;
  
  jointsGrid = createJoints(
    numberOfJoints, 
    springLength, 
    jointsMass,
    jointsRadius,
    simulationContainer.clientWidth, 
    simulationContainer.clientHeight
  );
    
  let centreOfGrid = calculateCentreOfGrid(jointsGrid, rotationAngle);

  for (joints of jointsGrid) {
    for (joint of joints) {
      let pos = joint.getPosition();

      let matrixPositionAfterRotation = rotate2x2Matrix([[pos[0]], [pos[1]]], rotationAngle, centreOfGrid)      //calculatePositionAfterRotation(joint.getPosition(), rotationAngle, centreOfGrid);
      let positionAfterRotation = [matrixPositionAfterRotation[0][0], matrixPositionAfterRotation[1][0]]
      joint.setPosition(positionAfterRotation);
    }
  }

  springs = createSprings(jointsGrid, springConstant, springLength);
}
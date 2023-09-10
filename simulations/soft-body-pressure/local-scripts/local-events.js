function resetSketchEvent() {
  let numberOfJoints = Number(numberOfJointsSlider.value);
  let springConstant = Number(springConstantSlider.value);
  let jointsMass = Number(jointMassSlider.value);
  let springLength = Number(springLengthSlider.value) * pixelConversionConstant;
  let jointsRadius = Number(jointRadiusSlider.value) * pixelConversionConstant;
  
  joints = createJoints(
    numberOfJoints, 
    springLength, 
    jointsMass,
    jointsRadius,
    simulationContainer.clientWidth, 
    simulationContainer.clientHeight
  );

  springs = createSprings(joints, springConstant, springLength);
}
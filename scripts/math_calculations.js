function add_array(array1, array2) {
    // Add two arrays together
    if (array1.length != array2.length) {
        throw new Error("Cannot add array of length " + array1.length + " and " + array2.length);
    }
    let array = [0, 0]
    for (let i = 0; i < array1.length; i++) {
        array[i] = array1[i] + array2[i]
    }
    if (array[0] == NaN || array[1] == NaN) {
        array = [0, 0]
    }
    return array;
}


function calculatePositionAfterRotation(position, rotationAngle, centreOfGrid) {
    let distanceToCentreX = position[0] - centreOfGrid[0];
    let distanceToCentreY = position[1] - centreOfGrid[1];

    if (rotationAngle == Math.PI) {
        position[0] -= 2 * distanceToCentreX - position[0];
        position[1] -= 2 * distanceToCentreY - position[1]; 
        return position;
    }

    let distanceToCentre = Math.sqrt(distanceToCentreX**2 + distanceToCentreY**2);

    let theta2 = (Math.PI - rotationAngle) / 2;

    let distanceToKnewPosition = distanceToCentre * Math.sin(rotationAngle) / Math.sin(theta2);

    let theta3 = Math.atan2(distanceToCentreX, distanceToCentreY);

    let theta4 = Math.PI - theta2 - theta3;

    let dx = -distanceToKnewPosition * Math.sin(theta4);
    let dy = distanceToKnewPosition * Math.cos(theta4);

    position[0] += dx;
    position[1] += dy;

    return position

}

function calculateCentreOfGrid(jointsGrid) {
    let totalX = 0;
    let totalY = 0;
    totalJoints = jointsGrid.length * jointsGrid[0].length;

    for (jointsRow of jointsGrid) {
        for (joint of jointsRow) {
            totalX += joint.getPosition()[0];
            totalY += joint.getPosition()[1];
        }
    }

    let midX = totalX / totalJoints;
    let midY = totalY / totalJoints;

    return [midX, midY];
  }
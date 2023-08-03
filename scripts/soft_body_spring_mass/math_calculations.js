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
        position[0] -= 2 * distanceToCentreX;
        position[1] -= 2 * distanceToCentreY; 
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


function jointCollisionHandler(jointsGrid) {
    joints = jointsGrid.flat();
    for (let i = 0; i < joints.length; i++) {
        for (let j = i + 1; j < joints.length; j++) {
            if (joints[i].getID() == joints[j].getID()) {
                continue
            }

            let inverseMass1 = 1 / joints[i].getMass();
            let inverseMass2 = 1 / joints[j].getMass();
            
            let dx = joints[j].getPosition()[0] - joints[i].getPosition()[0];
            let dy = joints[j].getPosition()[1] - joints[i].getPosition()[1];
            let distanceBetweenJoints = Math.sqrt(dx**2 + dy**2);
            
            // Check if joints have collided 
            if (distanceBetweenJoints <= 2 * joints[i].getRadius()) {
                
                // Normal vectors
                let nx = dx / distanceBetweenJoints;
                let ny = dy / distanceBetweenJoints;
                
                let dvx = joints[j].getVelocity()[0] - joints[i].getVelocity()[0];
                let dvy = joints[j].getVelocity()[1] - joints[i].getVelocity()[1];
                let relativeVelocityNormal = dvx * nx + dvy * ny;
                
                
                let impulseMagnitude = (-(1 + coefficientOfRestitution) * relativeVelocityNormal) / (inverseMass1 + inverseMass2);
                
                let impulse1 = [-impulseMagnitude * inverseMass1 * nx, -impulseMagnitude * inverseMass1 * ny];
                let impulse2 = [impulseMagnitude * inverseMass2 * nx, impulseMagnitude * inverseMass2 * ny];
                
                
                joints[i].setVelocity(
                    add_array(joints[i].getVelocity(), impulse1)
                )
                joints[j].setVelocity(
                    add_array(joints[j].getVelocity(), impulse2)
                )
                        
                // Seperate joints so they don't overlap
                let overlap = (2 * joints[i].getRadius()) - distanceBetweenJoints;
                let seperationX = 0.5 * overlap * nx;
                let seperationY = 0.5 * overlap * ny; 
                
                joints[i].setPosition(
                    add_array(joints[i].getPosition(), [-seperationX, -seperationY])
                )
                joints[j].setPosition(
                    add_array(joints[j].getPosition(), [seperationX, seperationY])
                )            
            }
        }
    }
}
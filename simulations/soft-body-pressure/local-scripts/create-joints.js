function createJoints(numberOfJoints, springRestingLength, jointMass, jointRadius, canvasWidth, canvasHeight) {
    if (numberOfJoints < 3 || springRestingLength <= 0) {
        // A polygon must have at least 3 vertices, and side length must be positive
        return [];
    }

    joints = []

    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    
    const angleIncrement = (2 * Math.PI) / numberOfJoints;
    const conversion = 0.161 * numberOfJoints;

    let jointID = 1

    for (let i = 0; i < numberOfJoints; i++) {
        // Calculate the angle for the current vertex
        const angle = i * angleIncrement;

        // Calculate the coordinates of the vertex using trigonometry
        const x = centerX + conversion * springRestingLength * Math.cos(angle);
        const y = centerY + conversion * springRestingLength * Math.sin(angle);

        joints.push(new Joint(                
                jointID, 
                jointMass,
                jointRadius,
                [x, y], // Position
                [0, 0], // Velocity
                [0, 0]  // Acceleration
            )
        )

        jointID += 1
    }

    return joints
}

/* 
        if (i > 2) {
            let pos1 = joints[i - 2].getPosition();
            let pos2 = joints[i - 1].getPosition();
            const distance = Math.sqrt(((pos1[0] - centerX) * (pos2[0] - centerX)) + ((pos1[1] - centerY) * (pos2[1] - centerY)))
            console.log(springRestingLength, distance);
        }
*/
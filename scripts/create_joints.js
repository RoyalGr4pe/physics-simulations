function createJoints(numberOfJoints, windowWidth, windowHeight) {
    /*
    The number of rows and columns should be as close to each other as possible
    Such that rows * columns = numJoints
    If rows and columns can't be equal then rows should be larger then columns
    */
    
    let columns = round(Math.sqrt(numberOfJoints));
    while (numberOfJoints % columns != 0) {
        columns--;
    }
    let rows = numberOfJoints / columns;

    let jointsGrid = [];

    let x = windowWidth / 2 - (columns - 1) * springRestingLength / 2;
    let y = windowHeight / 2 - (rows - 1) * springRestingLength / 2;
    let temp_x = x;
    
    let jointID = 1
    for (let i = 1; i <= rows; i++) {
        let joints = [];
        for (let j = 1; j <= columns; j++) {
            let joint = new Joint(
                jointID, 
                jointsMass,
                jointsRadius,
                [x, y],
                [0, 0],
                [0, 0]
            )
            joint.setForceDueToGravity();

            jointID++;
            joints.push(joint); 
            x += springRestingLength;
        }
        y += springRestingLength;
        x = temp_x;
        jointsGrid.push(joints);
    }
    return jointsGrid;
} 
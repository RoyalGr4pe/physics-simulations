function createJoints(numberOfJoints, springRestingLength, jointMass, jointRadius, canvasWidth, canvasHeight) {
    /*
    The number of rows and columns should be as close to each other as possible
    Such that rows * columns = numJoints
    If rows and columns can't be equal then rows should be larger then columns
    */


    let columns = Math.floor(Math.sqrt(numberOfJoints));
    while (numberOfJoints % columns != 0) {
        columns--;
    }
    let rows = numberOfJoints / columns;

    let jointsGrid = [];

    let x = canvasWidth / 2 - (columns - 1) *  springRestingLength / 2;
    let y = canvasHeight / 2 - (rows - 1) * springRestingLength / 2;

    let temp_x = x;
    
    let jointID = 1
    for (let i = 1; i <= rows; i++) {
        let jointsRow = [];
        for (let j = 1; j <= columns; j++) {
            let joint = new Joint(
                jointID, 
                jointMass,
                jointRadius,
                [x, y], // Position
                [0, 0], // Velocity
                [0, 0]  // Acceleration
            )
            joint.setForceDueToGravity();

            jointID++;
            jointsRow.push(joint); 
            x += springRestingLength;
        }
        y += springRestingLength;
        x = temp_x;
        jointsGrid.push(jointsRow);
    }
    return jointsGrid;
} 
function springAlreadyAttached(springs, joint1, joint2) {
    for (spring of springs) {
        if (
            (
                spring.getJointIDs()[0] == joint1.getID() 
                && spring.getJointIDs()[1] == joint2.getID()
            )
            || 
            (
                spring.getJointIDs()[0] == joint2.getID() 
                && spring.getJointIDs()[1] == joint1.getID()
            )
            ) 
            {
                return true;
            }
    }
    return false;
}


function isValidJointIndex(jointsGrid, row, col) {
    return row >= 0 && row < jointsGrid.length && col >= 0 && col < jointsGrid[row].length;
}


function createSprings(jointsGrid, springConstant, springRestingLength) {
    let springs = [];

    let springID = 1;
    for (let i = 0; i <  jointsGrid.length; i++) {
        for (let j = 0; j < jointsGrid[i].length; j++) {

            // Define relative positions of neighboring joints
            let neighbourOffSets = [
                [-1, -1], [-1, 0], [-1, 1],
                [0,  -1],          [0,  1],
                [1,  -1], [1,  0], [1,  1]
            ];
            
            for (offset of neighbourOffSets) {
                let row = i + offset[0];
                let col = j + offset[1];
                let tempLength = springRestingLength;

                if (isValidJointIndex(jointsGrid, row, col) && !springAlreadyAttached(springs, jointsGrid[i][j], jointsGrid[row][col])) {
                    // Increase the restingLength if the spring is a diagonal
                    if (offset[0] == 0 || offset[1] == 0) {
                        tempLength = springRestingLength;
                    } else {
                        tempLength = sqrt(2.0 * tempLength**2);
                    }
                    
                    let spring = new Spring(
                       springID,
                       springConstant,
                       tempLength,
                       [jointsGrid[i][j], jointsGrid[row][col]],
                       [jointsGrid[i][j].getPosition(), jointsGrid[row][col].getPosition()],
                       [jointsGrid[i][j].getID(), jointsGrid[row][col].getID()]
                    )
                       
                    jointsGrid[i][j].setSpring(spring);
                    jointsGrid[row][col].setSpring(spring);

                    springs.push(spring);
                    springID++; 
                }
            }

        }
    }
    return springs;
}
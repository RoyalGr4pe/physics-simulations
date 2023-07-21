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


function createSprings(jointsGrid) {
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

                if (isValidJointIndex(jointsGrid, row, col) && !springAlreadyAttached(springs, jointsGrid[i][j], joint2[row][col])) {
                    // Increase the restingLength if the spring is a diagonal
                    tempLength = (offset.first == 0 || offset.second == 0) ? tempLength : sqrt(2.0 * tempLength * tempLength);
                    
                    if (tempLength == springRestingLength) {
                        let spring = new Spring(
                            springID,
                            springConstant,
                            tempLength,
                            [joint[i][j], joint[row][col]],
                            [joint[i][j].getPos(), joint[row][col].getPos()],
                        )
                        
                        spring.setJointID(joint[i][j].getID(), joint[row][col].getID())

                        springs.push(spring);
                        springID++;
                    }

                }
            }

        }
    }
    return springs;
}
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
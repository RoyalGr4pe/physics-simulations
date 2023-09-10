function createSprings(joints, springConstant, springRestingLength) {
    let springs = [];
    let springID = 1;

    for (let i = 0; i < joints.length; i++) {
        if (i === joints.length - 1) {
            j = 0;
        } else {
            j = i + 1;
        }

        let joint1Pos = joints[i].getPosition();
        let joint2Pos = joints[j].getPosition();

        let spring = new Spring(
            springID,
            springConstant,
            springRestingLength,
            [joints[i], joints[j]],
            [joint1Pos, joint2Pos]
            [joints[i].getID(), joints[j].getID()]
        );

        let distance = Math.sqrt(
            (joint1Pos[0] - joint2Pos[0]) ** 2 + (joint1Pos[1] - joint2Pos[1]) ** 2
        );

        spring.setNormalVectors(
            (joint1Pos[1] - joint2Pos[1]) / distance, // nx
            -(joint1Pos[0] - joint2Pos[0]) / distance  // ny
        );

        joints[i].setSpring(spring);
        joints[j].setSpring(spring);

        springs.push(spring);
        springID++;
    }

    return springs;
}
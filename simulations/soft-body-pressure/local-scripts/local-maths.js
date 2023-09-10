function calcVolume(joints) {
    /* Calculate Volume of the Ball (Gauss Theorem) */
    volume = 0;

    for (i = 1; i < joints.length; i++) {
        j = i - 1;
        
        let x1 = joints[j].getPosition()[0];
        let x2 = joints[i].getPosition()[0];
        let y1 = joints[j].getPosition()[1];
        let y2 = joints[i].getPosition()[1];

        let distance = Math.sqrt(
            (x1 - x2) ** 2 + (y1 - y2) ** 2
        );

        volume += 0.5 * Math.abs(x1 - x2) * Math.abs(springs[i].getNX()) * distance; 
    }

    return volume
}


function applyPressureV(joints) {
    for (i = 1; i < joints.length; i++) {
        j = i - 1;
        
        let x1 = joints[j].getPosition()[0];
        let x2 = joints[i].getPosition()[0];
        let y1 = joints[j].getPosition()[1];
        let y2 = joints[i].getPosition()[1];

        let distance = Math.sqrt(
            (x1 - x2) ** 2 + (y1 - y2) ** 2
        );

        let pressurev = distance * Pressure * (1/volume);

        joints[i].setForce(
            [springs[i].getNX() * pressurev],
            [springs[i].getNY() * pressurev],
        )

        joints[j].setForce(
            [springs[j].getNX() * pressurev],
            [springs[j].getNY() * pressurev],
        )
    }   
}
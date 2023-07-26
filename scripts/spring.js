class Spring {
    constructor(id, k, length, joints, position, jointIDs) {
        this.id = id;
        this.k = k;
        this.length = length;
        this.joints = joints;
        this.position = position;
        this.springForce = [0, 0];
        this.jointIDs = jointIDs;
    }

    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update() {
        this.springForce = this.calculateSpringForce();
        this.joints[0].updateSpringForce([-this.springForce[0], -this.springForce[1]]);
        this.joints[1].updateSpringForce(this.springForce);
    }


    render() {
        stroke(255, 255, 255);
        strokeWeight(springWidth);
        line(this.joints[0].getPosition()[0], this.joints[0].getPosition()[1], this.joints[1].getPosition()[0], this.joints[1].getPosition()[1])     
    }


    /*-------------------------------------------------------------------*/
    /* Spring physics                                                    */
    /*-------------------------------------------------------------------*/


    calculateDeltaX() {
        let joint1_pos = this.joints[0].getPosition();
        let joint2_pos = this.joints[1].getPosition();
        return joint2_pos[0] - joint1_pos[0];
    }


    calculateDeltaY() {
        let joint1_pos = this.joints[0].getPosition();
        let joint2_pos = this.joints[1].getPosition();
        return joint2_pos[1] - joint1_pos[1];
    }


    calculateSpringForce() {
        let dx = this.calculateDeltaX();
        let dy = this.calculateDeltaY();
        let extension = Math.sqrt(dx**2 + dy**2) - this.length;

        let springForceMagnitude = -this.k * extension;

        let theta = Math.atan2(dy, dx);
        let springForceX = springDampingCoefficient * springForceMagnitude * Math.cos(theta);
        let springForceY = springDampingCoefficient * springForceMagnitude * Math.sin(theta);

        return [springForceX, springForceY];
    }


    /*-------------------------------------------------------------------*/
    /* Getters                                                           */
    /*-------------------------------------------------------------------*/


    getJointIDs() {
        return this.jointIDs;
    }


    getID() {
        return this.id;
    }


    /*-------------------------------------------------------------------*/
    /* Setters                                                           */
    /*-------------------------------------------------------------------*/


    setSpringConstant(newSpringConstant) {
        this.k = newSpringConstant;
    }


    /*-------------------------------------------------------------------*/
}
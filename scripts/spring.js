class Spring {
    constructor(id, k, length, joints, position, jointIDs) {
        this.id = id;
        this.k = k;
        this.length = length;
        this.joints = joints;
        this.position = position;
        this.force = [0, 0];
        this.jointIDs = jointIDs;
    }

    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update() {

    }


    render() {
        stroke(255, 255, 255)
        strokeWeight(4)
        line(this.joints[0].getPosition()[0], this.joints[0].getPosition()[1], this.joints[1].getPosition()[0], this.joints[1].getPosition()[1])     
    }


    /*-------------------------------------------------------------------*/
    /* Spring physics                                                    */
    /*-------------------------------------------------------------------*/


    calculateDeltaX() {
        this.joint1_pos = joints[0].getPosition();
        this.joint2_pos = joints[1].getPosition();
        return this.joint2_pos[0] - this.joint1_pos[0];
    }


    calculateDeltaY() {
        this.joint1_pos = joints[0].getPosition();
        this.joint2_pos = joints[1].getPosition();
        return this.joint2_pos[1] - this.joint1_pos[1];
    }


    calculateSpringForce() {
        let dx = this.calculateDeltaX();
        let dy = this.calculateDeltaY();
        console.log(dx);
        let extension = Math.sqrt(dx**2 + dy**2);
        let force = [-this.k * dx/extension, -this.k * dy/extension]; 
        return [-this.k * dx/extension, -this.k * dy/extension]; 
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


    /*-------------------------------------------------------------------*/
}
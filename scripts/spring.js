class Spring {
    constructor(id, k, length, joints, position) {
        this.id = id;
        this.k = k;
        this.length = length;
        this.joints = joints;
        this.position = position;
        this.force = [0, 0];
        this.jointIDs = [joints[0].getID(), joints[1].getID()];
    }

    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update() {

    }


    render() {

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
}










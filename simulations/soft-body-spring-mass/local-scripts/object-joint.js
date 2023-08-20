class Joint {
    constructor(id, mass, radius, position, velocity, acceleration) {
        this.id = id;
        this.mass = mass;
        this.radius = radius;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.forceDueToGravity = 0;
        this.resultantForce = [0, 0];
        this.springForce = [0, 0];
        this.springs = [];
    }


    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update(canvasWidth, canvasHeight) {
        this.setForceDueToGravity();
        this.updateForce();
        this.updateAcceleration();
        this.updateVelocity();
        this.updatePosition();
        this.boundaryCollisionHandler(0, canvasWidth, 0, canvasHeight);
        this.springForce = [0, 0];
    }
    
    
    render() {
        noStroke();
        fill(255, 0, 0);
        ellipse(
            this.position[0], 
            this.position[1], 
            this.radius * 2, 
            this.radius * 2
        );
    }


    /*-------------------------------------------------------------------*/
    /* Joint physics                                                     */
    /*-------------------------------------------------------------------*/


    updateSpringForce(force) {
        this.springForce[0] += force[0];
        this.springForce[1] += force[1];
    }


    updateForce() {
        this.resultantForce[0] = this.springForce[0];
        this.resultantForce[1] = this.springForce[1] + this.forceDueToGravity;
        if (this.resultantForce[0] == NaN) {
            this.resultantForce[0] = 0;
        }
        if (this.resultantForce[1] == NaN) {
            this.resultantForce[1] = 0;
        }
    }


    updateAcceleration() {
        // a = f/m
        this.acceleration[0] = this.resultantForce[0] / this.mass;
        this.acceleration[1] = this.resultantForce[1] / this.mass;
    }
    
    
    updateVelocity() {
        // v = u + at
        this.velocity[0] += this.acceleration[0] * deltaTime;
        this.velocity[1] += this.acceleration[1] * deltaTime;
    }
    
    
    updatePosition() {
        // s = ut + 1/2at^2
        this.position[0] += (this.velocity[0] * deltaTime) + (0.5 * this.acceleration[0] * deltaTime * deltaTime);
        this.position[1] += (this.velocity[1] * deltaTime) + (0.5 * this.acceleration[1] * deltaTime * deltaTime);
    }


    /*-------------------------------------------------------------------*/
    /* Joint collisions                                                  */
    /*-------------------------------------------------------------------*/


    collidedWithBottomOfWindow(boundaryBottom) {
        // Floor collision detector
        if (this.position[1] - this.radius <= boundaryBottom) {
            return true;
        }
    }
    
    
    collidedWithTopOfWindow(boundaryTop) {
        // Roof collision detector
        if (this.position[1] + this.radius >= boundaryTop) {
            return true;
        }
    }
    
    
    collidedWithLeftOfWindow(boundaryLeft) {
        // Left window collision detector
        if (this.position[0] - this.radius <= boundaryLeft) {
            return true;
        }
    }
    
    
    collidedWithRightOfWindow(boundaryRight) {
        // Right window collision detector
        if (this.position[0] + this.radius >= boundaryRight) {
            return true;
        }
    }
    
    
    applyBoundaryImpulseX() {
        this.velocity[0] *= -boundaryDampingCoefficient;
    }
    
    
    applyBoundaryImpulseY() {
        this.velocity[1] *= -boundaryDampingCoefficient;
    }
    
    
    boundaryCollisionHandler(boundaryLeft, boundaryRight, boundaryBottom, boundaryTop) {
        if (this.collidedWithLeftOfWindow(boundaryLeft)) {
            this.position[0] = boundaryLeft + this.radius;
            this.applyBoundaryImpulseX();
        } 
        else if (this.collidedWithRightOfWindow(boundaryRight)) {
            this.position[0] = boundaryRight - this.radius;
            this.applyBoundaryImpulseX();
        } 
        else if (this.collidedWithBottomOfWindow(boundaryBottom)) {
            this.position[1] = boundaryBottom + this.radius;
            this.applyBoundaryImpulseY();
        } 
        else if (this.collidedWithTopOfWindow(boundaryTop)) {
            this.position[1] = boundaryTop - this.radius
            this.applyBoundaryImpulseY();
        }
    }


    /*-------------------------------------------------------------------*/
    /* Getters                                                           */
    /*-------------------------------------------------------------------*/


    getID() {
        return this.id;
    }


    getMass() {
        return this.mass;
    }

    getRadius() {
        return this.radius;
    }


    getPosition() {
        return this.position;
    }


    getVelocity() {
        return this.velocity;
    }


    /*-------------------------------------------------------------------*/
    /* Setters                                                           */
    /*-------------------------------------------------------------------*/


    setSpring(spring) {
        this.springs.push(spring);
    }


    setForceDueToGravity() {
        this.forceDueToGravity = this.mass * -Number(gravitySlider.value);
    }


    setPosition(newPosition) {
        this.position = newPosition;
    }


    setVelocity(newVelocity) {
        this.velocity = newVelocity;
    }


    setMass(newMass) {
        this.mass = newMass;
    }


    /*-------------------------------------------------------------------*/
}
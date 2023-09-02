class PlanetaryBody {
    constructor(x, y, vx, vy, m, id) {
        this.id = id;
        this.mass = m;
        this.radius = Number(particleRadiusSlider.value);
        this.pos = createVector(x, y);
        this.vel = createVector(vx, vy);
        this.acc = createVector();
        this.force = createVector(0, 0);
        this.orbitingObjects = []
    }


    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update(canvasWidth, canvasHeight) {
        this.mass = Number(particleMassSlider.value) ** Number(particleMassPowerSlider.value);
        this.updateOrbitingBodies();
        this.updateAcceleration();
        this.updateVelocity();
        this.updatePosition();
        this.boundaryCollisionHandler(0, canvasWidth, 0, canvasHeight);
        this.force.set(0, 0)
    }


    render() {
        stroke(255, 0, 0);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.radius*2)
    }


    /*-------------------------------------------------------------------*/
    /* Physics                                                           */
    /*-------------------------------------------------------------------*/


    updateOrbitingBodies() {
        for (let object of this.orbitingObjects) {
            let force = p5.Vector.sub(this.pos, object.pos);
            let distanceSqr = force.magSq();
            
            let G = Number(gravitationalConstantSlider.value) * 10**(Number(gravitationalConstantPowerSlider.value));//6.674 * 
            let strength = (G * this.mass * object.mass) / distanceSqr; 
            force.setMag(strength);
            
            object.applyForce(force);
        }
    }


    updateAcceleration() {
        if (this.mass !== 0) {
            // a = f/m
            this.acc = p5.Vector.div(this.force, this.mass);
        } else {
            // Handle division by zero or other appropriate action
            this.acc.set(0, 0)
        }
    }


    updateVelocity() {
        // v = u + at
        const velocityChange = p5.Vector.mult(this.acc, deltaTime);
        this.vel.add(velocityChange);
    }

    
    updatePosition() {
        // s = ut + 1/2at^2
        const displacementDueToVelocity = p5.Vector.mult(this.vel, deltaTime);
        const displacementDueToAcceleration = p5.Vector.mult(this.acc, 0.5 * deltaTime ** 2);

        this.pos.add(displacementDueToVelocity);
        this.pos.add(displacementDueToAcceleration);
    }


    /*-------------------------------------------------------------------*/
    /* Joint collisions                                                  */
    /*-------------------------------------------------------------------*/


    collidedWithBottomOfWindow(boundaryBottom) {
        // Floor collision detector
        if (this.pos.y - this.radius <= boundaryBottom) {
            return true;
        }
    }
    
    
    collidedWithTopOfWindow(boundaryTop) {
        // Roof collision detector
        if (this.pos.y + this.radius >= boundaryTop) {
            return true;
        }
    }
    
    
    collidedWithLeftOfWindow(boundaryLeft) {
        // Left window collision detector
        if (this.pos.x - this.radius <= boundaryLeft) {
            return true;
        }
    }
    
    
    collidedWithRightOfWindow(boundaryRight) {
        // Right window collision detector
        if (this.pos.x + this.radius >= boundaryRight) {
            return true;
        }
    }
    
    
    applyBoundaryImpulseX() {
        this.vel.x *= -boundaryDampingCoefficient;
    }
    
    
    applyBoundaryImpulseY() {
        this.vel.y *= -boundaryDampingCoefficient;
    }
    
    
    boundaryCollisionHandler(boundaryLeft, boundaryRight, boundaryBottom, boundaryTop) {
        if (this.collidedWithLeftOfWindow(boundaryLeft)) {
            this.pos.x = boundaryLeft + this.radius;
            this.applyBoundaryImpulseX();
        } 
        else if (this.collidedWithRightOfWindow(boundaryRight)) {
            this.pos.x = boundaryRight - this.radius;
            this.applyBoundaryImpulseX();
        } 
        else if (this.collidedWithBottomOfWindow(boundaryBottom)) {
            this.pos.y = boundaryBottom + this.radius;
            this.applyBoundaryImpulseY();
        } 
        else if (this.collidedWithTopOfWindow(boundaryTop)) {
            this.pos.y = boundaryTop - this.radius
            this.applyBoundaryImpulseY();
        }
    }


    /*-------------------------------------------------------------------*/
    /* Setters                                                           */
    /*-------------------------------------------------------------------*/


    getID() {
        return this.id;
    }


    getMass() {
        return this.mass
    }


    getPosition() {
        return this.pos;
    }


    getVelocity() {
        return this.vel;
    }


    getRadius() {
        return this.radius;
    }


    /*-------------------------------------------------------------------*/
    /* Setters                                                           */
    /*-------------------------------------------------------------------*/


    applyForce(force) {
        this.force.add(force);
    }


    attract(objects) {
        this.orbitingObjects = objects;
    }


    setPosition(position) {
        this.pos.set(position);
    }


    setVelocity(velocity) {
        this.vel.set(velocity);
    }


    /*-------------------------------------------------------------------*/
}
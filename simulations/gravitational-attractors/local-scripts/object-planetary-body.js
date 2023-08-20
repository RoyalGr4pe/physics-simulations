class PlanetaryBody {
    constructor(mass, radius, position, velocity, acceleration, colour) {
        this.mass = mass;
        this.radius = radius;
        this.position = position;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.colour = colour;
        this.resultantForce = [0, 0];
        this.attractors = [];
    }


    /*-------------------------------------------------------------------*/
    /* Render and main update                                            */
    /*-------------------------------------------------------------------*/


    update(canvasWidth, canvasHeight) {
        this.updateForce();
        this.updateAcceleration();
        this.updateVelocity();
        this.updatePosition();
        //this.boundaryCollisionHandler(0, canvasWidth, 0, canvasHeight);
        this.resultantForce = [0, 0];
    }
    
    
    render() {
        noStroke();
        fill(this.colour);
        ellipse(
            this.position[0], 
            this.position[1], 
            this.radius * 2, 
            this.radius * 2
        );
    }


    /*-------------------------------------------------------------------*/
    /* Planet physics                                                    */
    /*-------------------------------------------------------------------*/

    
    updateForce() {
        for (let attractor of this.attractors) {
            let dx = attractor.getPosition()[0] - this.position[0];
            let dy = attractor.getPosition()[1] - this.position[1];
            let distanceSqr = (dx * dx) + (dy * dy);

            let direction = createVector(dx, dy);
            let distance = direction.mag();

            if (distance > 0) {
                direction.normalize();
                let forceMagnitude = (G * this.mass * attractor.getMass()) / (distanceSqr);
                let forceVector = direction.mult(forceMagnitude);
    
                this.resultantForce[0] += forceVector.x;
                this.resultantForce[1] += forceVector.y;
            }
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
    /* Getters                                                           */
    /*-------------------------------------------------------------------*/


    getMass() {
        return this.mass
    }


    getPosition() {
        return this.position;
    }

    /*-------------------------------------------------------------------*/
    /* Setters                                                           */
    /*-------------------------------------------------------------------*/


    setAttractor(body) {
        this.attractors.push(body);
    }


    /*-------------------------------------------------------------------*/
}
const jointConstructor = {
    applyImpX: applyImpulseX,
    applyImpY: applyImpulseY,
    updateAcc: updateAcceleration,
    updateVel: updateVelocity,
    updatePos: updatePosition,
    collisionHandler: handleCollisions,
    update: jointUpdater,
    render: jointRenderer
}


function collidedWithBottomOfWindow(y, radius, boundaryBottom) {
    if (y - radius <= boundaryBottom) {
        return true;
    }
}


function collidedWithTopOfWindow(y, radius, boundaryTop) {
    if (y + radius >= boundaryTop) {
        return true;
    }
}


function collidedWithLeftOfWindow(x, radius, boundaryLeft) {
    if (x - radius <= boundaryLeft) {
        return true;
    }
}


function collidedWithRightOfWindow(x, radius, boundaryRight) {
    if (x + radius >= boundaryRight) {
        return true;
    }
}


function applyImpulseX() {
    this.velocity[0] = -this.velocity[0] - ((this.force[0] * deltaTime)/this.mass);
}


function applyImpulseY() {
    this.velocity[1] = -this.velocity[1] - ((this.force[1] * deltaTime)/this.mass);
}


function handleCollisions(boundaryLeft, boundaryRight, boundaryBottom, boundaryTop) {
    if (collidedWithLeftOfWindow(this.pos[0], this.radius, boundaryLeft)) {
        this.applyImpX();
    } 
    else if (collidedWithRightOfWindow(this.pos[0], this.radius, boundaryRight)) {
        this.applyImpX();
    } 
    else if (collidedWithBottomOfWindow(this.pos[1], this.radius, boundaryBottom)) {
        this.applyImpY();
    } 
    else if (collidedWithTopOfWindow(this.pos[1], this.radius, boundaryTop)) {
        this.applyImpY();
    }
}


function updateAcceleration() {
    this.acceleration[0] = this.force[0] / this.mass;
    this.acceleration[1] = this.force[1] / this.mass;
}


function updateVelocity() {
    this.velocity[0] += this.acceleration[0] * deltaTime;
    this.velocity[1] += this.acceleration[1] * deltaTime;
}


function updatePosition() {
    this.pos[0] += (this.velocity[0] * deltaTime) + (0.5 * this.acceleration[0] * deltaTime);
    this.pos[1] += (this.velocity[1] * deltaTime) + (0.5 * this.acceleration[1] * deltaTime);
}


function jointUpdater(windowWidth, windowHeight, deltaTime) {
    let fg = this.mass * g * deltaTime;
    this.force[0] = fg;
    this.force[1] = fg;

    this.updateAcc();
    this.updateVel();
    this.updatePos();
    this.collisionHandler(0, windowWidth, 0, windowHeight);
}


function jointRenderer() {
    noStroke();
    fill(255, 0, 0);
    ellipse(
        this.pos[0], 
        this.pos[1], 
        this.radius * 2, 
        this.radius * 2
    );
}
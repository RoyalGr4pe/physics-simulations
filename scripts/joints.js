const jointConstructor = {
    collisionHandler: handleCollisions,
    update: jointUpdater,
    render: jointRenderer
}


function collidedWithBottomOfWindow(y, radius) {
    if (y - radius <= boundaryBottom) {
        console.log("Bottom");
        return true;
    }
}


function collidedWithTopOfWindow(y, radius) {
    if (y + radius >= boundaryTop) {
        console.log("Top");
        return true;
    }
}


function collidedWithLeftOfWindow(x, radius) {
    if (x - radius <= boundaryLeft) {
        console.log("left");
        return true;
    }
}


function collidedWithRightOfWindow(x, radius) {
    if (x + radius >= boundaryRight) {
        console.log("Right");
        return true;
    }
}


function handleCollisions() {
    if (collidedWithLeftOfWindow(this.pos[0], this.radius)) {
        this.pos[0] = boundaryLeft + this.radius;
    } 
    else if (collidedWithRightOfWindow(this.pos[0], this.radius)) {
        this.pos[0] = boundaryRight - this.radius;
    } 
    else if (collidedWithBottomOfWindow(this.pos[1], this.radius)) {
        this.pos[1] = boundaryBottom + this.radius;
    } 
    else if (collidedWithTopOfWindow(this.pos[1], this.radius)) {
        this.pos[1] = boundaryTop - this.radius;
    }
}


function jointUpdater() {
    this.pos[1] += g;
    this.collisionHandler();
}


function jointRenderer() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(
        this.pos[0], 
        this.pos[1], 
        this.radius, 
        this.radius
    );
}
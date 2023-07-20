const jointConstructor = {
    collisionHandler: handleCollisions,
    update: jointUpdater,
    render: jointRenderer
}


function collidedWithBottomOfWindow(y, radius, boundaryBottom) {
    if (y - radius <= boundaryBottom) {
        console.log("Bottom");
        return true;
    }
}


function collidedWithTopOfWindow(y, radius, boundaryTop) {
    if (y + radius >= boundaryTop) {
        console.log("Top");
        return true;
    }
}


function collidedWithLeftOfWindow(x, radius, boundaryLeft) {
    if (x - radius <= boundaryLeft) {
        console.log("left");
        return true;
    }
}


function collidedWithRightOfWindow(x, radius, boundaryRight) {
    if (x + radius >= boundaryRight) {
        console.log("Right");
        return true;
    }
}


function handleCollisions(boundaryLeft, boundaryRight, boundaryBottom, boundaryTop) {
    if (collidedWithLeftOfWindow(this.pos[0], this.radius, boundaryLeft)) {
        this.pos[0] = boundaryLeft + this.radius;
    } 
    else if (collidedWithRightOfWindow(this.pos[0], this.radius, boundaryRight)) {
        this.pos[0] = boundaryRight - this.radius;
    } 
    else if (collidedWithBottomOfWindow(this.pos[1], this.radius, boundaryBottom)) {
        this.pos[1] = boundaryBottom + this.radius;
    } 
    else if (collidedWithTopOfWindow(this.pos[1], this.radius, boundaryTop)) {
        this.pos[1] = boundaryTop - this.radius;
    }
}


function jointUpdater(windowWidth, windowHeight) {
    this.pos[1] += g;
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
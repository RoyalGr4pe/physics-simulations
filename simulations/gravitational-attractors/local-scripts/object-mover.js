class Mover {
    constructor(x, y, m) {
        this.mass = m;
        this.radius = sqrt(this.mass);
        this.pos = createVector(x, y);
        this.vel = createVector(2, -1);
        this.acc = createVector(0, 0);
    }


    update() {
        this.vel.add(p5.Vector.mult(this.acc, deltaTime));
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }


    render() {
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.radius*2);
    }

    
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }
}
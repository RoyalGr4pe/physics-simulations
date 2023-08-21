class Attractor {
    constructor(x, y, m) {
        this.mass = m;
        this.radius = sqrt(this.mass);
        this.pos = createVector(x, y);
    }

    attract(object) {
        let force = p5.Vector.sub(this.pos, object.pos);
        let distanceSqr = force.magSq();

        let G = 100;
        let strength = (G * this.mass * object.mass) / distanceSqr; 
        force.setMag(strength);

        object.applyForce(force);
    }

    render() {
        stroke(255, 0, 0);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.radius*2)
    }
}
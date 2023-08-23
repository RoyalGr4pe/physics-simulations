function objectCollisionHandler(objects) {
    for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            if (objects[i].getID() == objects[j].getID()) {
                continue
            }

            let inverseMass1 = 1 / objects[i].getMass();
            let inverseMass2 = 1 / objects[j].getMass();
            
            let dx = objects[j].getPosition().x - objects[i].getPosition().x;
            let dy = objects[j].getPosition().y - objects[i].getPosition().y;
            let distanceBetweenObjects = Math.sqrt(dx**2 + dy**2);
            
            // Check if objects have collided 
            if (distanceBetweenObjects <= 2 * objects[i].getRadius()) {
                
                // Normal vectors
                let nx = dx / distanceBetweenObjects;
                let ny = dy / distanceBetweenObjects;
                
                let dvx = objects[j].getVelocity().x - objects[i].getVelocity().x;
                let dvy = objects[j].getVelocity().y - objects[i].getVelocity().y;
                let relativeVelocityNormal = dvx * nx + dvy * ny;
                
                
                let impulseMagnitude = (-(1 + coefficientOfRestitution) * relativeVelocityNormal) / (inverseMass1 + inverseMass2);
                
                let impulse1 = [-impulseMagnitude * inverseMass1 * nx, -impulseMagnitude * inverseMass1 * ny];
                let impulse2 = [impulseMagnitude * inverseMass2 * nx, impulseMagnitude * inverseMass2 * ny];
                
                
                objects[i].setVelocity(
                    p5.Vector.add(objects[i].getVelocity(), impulse1)
                )
                objects[j].setVelocity(
                    p5.Vector.add(objects[j].getVelocity(), impulse2)
                )
                        
                // Seperate objects so they don't overlap
                let overlap = (2 * objects[i].getRadius()) - distanceBetweenObjects;
                let seperationX = 0.5 * overlap * nx;
                let seperationY = 0.5 * overlap * ny; 
                
                objects[i].setPosition(
                    p5.Vector.add(objects[i].getPosition(), [-seperationX, -seperationY])
                )
                objects[j].setPosition(
                    p5.Vector.add(objects[j].getPosition(), [seperationX, seperationY])
                )            
            }
        }
    }
}
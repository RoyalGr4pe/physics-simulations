function jointCollisionHandler(joints) {
    joints = joints.flat();
    for (let i = 0; i < joints.length; i++) {
        for (let j = i + 1; j < joints.length; j++) {
            if (joints[i].getID() == joints[j].getID()) {
                continue
            }

            let inverseMass1 = 1 / joints[i].getMass();
            let inverseMass2 = 1 / joints[j].getMass();
            
            let dx = joints[j].getPosition()[0] - joints[i].getPosition()[0];
            let dy = joints[j].getPosition()[1] - joints[i].getPosition()[1];
            let distanceBetweenJoints = Math.sqrt(dx**2 + dy**2);
            
            // Check if joints have collided 
            if (distanceBetweenJoints <= 2 * joints[i].getRadius()) {
                
                // Normal vectors
                let nx = dx / distanceBetweenJoints;
                let ny = dy / distanceBetweenJoints;
                
                let dvx = joints[j].getVelocity()[0] - joints[i].getVelocity()[0];
                let dvy = joints[j].getVelocity()[1] - joints[i].getVelocity()[1];
                let relativeVelocityNormal = dvx * nx + dvy * ny;
                
                
                let impulseMagnitude = (-(1 + coefficientOfRestitution) * relativeVelocityNormal) / (inverseMass1 + inverseMass2);
                
                let impulse1 = [-impulseMagnitude * inverseMass1 * nx, -impulseMagnitude * inverseMass1 * ny];
                let impulse2 = [impulseMagnitude * inverseMass2 * nx, impulseMagnitude * inverseMass2 * ny];
                
                
                joints[i].setVelocity(
                    addArrays(joints[i].getVelocity(), impulse1)
                )
                joints[j].setVelocity(
                    addArrays(joints[j].getVelocity(), impulse2)
                )
                        
                // Seperate joints so they don't overlap
                let overlap = (2 * joints[i].getRadius()) - distanceBetweenJoints;
                let seperationX = 0.5 * overlap * nx;
                let seperationY = 0.5 * overlap * ny; 
                
                joints[i].setPosition(
                    addArrays(joints[i].getPosition(), [-seperationX, -seperationY])
                )
                joints[j].setPosition(
                    addArrays(joints[j].getPosition(), [seperationX, seperationY])
                )            
            }
        }
    }
}
function resetSketchEvent() {
    let movers = []
    planetaryBodies = [];
    //let attractor = new PlanetaryBody(900, 500, 0, 0, 100);
    let minXPos = 1;
    let maxXPos = simulationContainer.clientWidth;
    let minYPos = 1;
    let maxYPos = simulationContainer.clientHeight;
    let minVel = -0.5;
    let maxVel = 0.5;
    let mass = 20000000;
    let id = 1;

    for (let i = 0; i < Number(numberOfParticlesSlider.value); i++) {
        let x = Math.random() * (maxXPos - minXPos) + minXPos;
        let y = Math.random() * (maxYPos - minYPos) + minYPos;
        let vx = Math.random() * (maxVel - minVel) + minVel;
        let vy = Math.random() * (maxVel - minVel) + minVel;
        movers.push(new PlanetaryBody(x, y, vx, vy, mass, id));
        id++;
    }

    for (let i = 0; i < movers.length; i++) {
        const otherMovers = movers.slice(0, i).concat(movers.slice(i + 1)); // Exclude current mover
        movers[i].attract(otherMovers);
    }

    planetaryBodies.push(...movers);
}

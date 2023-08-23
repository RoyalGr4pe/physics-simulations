function updatePlanetaryBodies() {
    objectCollisionHandler(planetaryBodies);
    for (body of planetaryBodies) {
        body.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
        body.render()
    }
}
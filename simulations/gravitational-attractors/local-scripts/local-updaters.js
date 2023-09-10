function updateAndRenderAttractors() {
    objectCollisionHandler(attractors);
    for (attractor of attractors) {
        attractor.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
        attractor.render()
    }
}
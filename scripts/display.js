function setup() {
    let simulationContainer = document.getElementById("simulation-container");
    
    let canvas = createCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, WEBGL);
    canvas.parent(simulationContainer);
    lastFrame = new Date().getTime();
}
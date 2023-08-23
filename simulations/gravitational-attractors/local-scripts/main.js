function setup() {
    loadSimulationSharedElements();
    loadSettings();

    let canvas = createCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, WEBGL);
    canvas.parent(simulationContainer);
    lastFrame = new Date().getTime();

    resetSketchEvent();
}


function draw() {
    deltaTime =  speedIncrease * Number(speedSlider.value) * (new Date().getTime() - lastFrame) * 0.001;
    lastFrame = new Date().getTime();
    
    resizeCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, true)
    background(backgroundColourHex);
    frameRate(fps);
    translate(-(simulationContainer.clientWidth)/2, simulationContainer.clientHeight/2, 0);
    scale(1, -1); // Invert the Y-axis

    adjustSharedElementsSize();
    updateSliderInfo();  
    updatePlanetaryBodies();  
}  



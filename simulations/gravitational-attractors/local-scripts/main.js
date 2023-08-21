function setup() {
    loadSimulationSharedElements();

    // Sliders
    sliderContainer = document.getElementById("sliders-container");
    speedSlider = document.getElementById("simulation-speed-range");
    auSlider = document.getElementById("au-range")

    // Slider values
    speedSliderValue = document.getElementById("simulation-speed-value");
    auSliderValue = document.getElementById("au-value")

    attractor = new Attractor(700, 500, 50);
    mover1 = new Mover(300, 300, 50);
    mover2 = new Mover(1100, 700, 50);

    let canvas = createCanvas(spaceWidth, spaceHeight, WEBGL);
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

    mover1.update();
    mover2.update();
    mover1.render();
    mover2.render()

    attractor.attract(mover1);
    attractor.attract(mover2);
    attractor.render();

    updateSliderInfo();  
    //updatePlanetaryObjects();  
}  



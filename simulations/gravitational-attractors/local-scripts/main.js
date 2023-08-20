let lastFrame;
let deltaTime;
let isMenuOpen = false;

let sliderContainer;
let sliderLabels;
let speedSlider;
let speedSliderValue;
let auSlider;
let auSliderValue;

let stars = [];
let planets = [];
let moons = [];


function setup() {
    loadSharedElements();

    // Sliders
    sliderContainer = document.getElementById("settings-container");
    speedSlider = document.getElementById("simulation-speed-range");

    // Slider values
    speedSliderValue = document.getElementById("simulation-speed-value");

    let canvas = createCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, WEBGL);
    canvas.parent(simulationContainer);
    lastFrame = new Date().getTime();

    resetSketchEvent();
}


function draw() {
    deltaTime = Number(speedSlider.value) * (new Date().getTime() - lastFrame) * 0.001;
    lastFrame = new Date().getTime();
    
    resizeCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight, true)
    background(backgroundColourHex);
    frameRate(fps);
    translate(-(simulationContainer.clientWidth)/2, simulationContainer.clientHeight/2, 0);
    scale(1, -1); // Invert the Y-axis

    updateSliderInfo();  
    updatePlanetaryObjects();  
}  



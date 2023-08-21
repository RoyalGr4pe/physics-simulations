// Containers
let mainContainer;
let simulationContainer;
let sideBarContainer;

// General Elements
let homeButton;
let simulationTitle;


function loadSimulationSharedElements() {
    mainContainer = document.getElementById("main-container");
    mainContainer.style.gridTemplateColumns = "20% 80%";
  
    simulationContainer = document.getElementById("simulation-container");
    sideBarContainer = document.getElementById("side-bar-container");
  
    simulationTitle = document.getElementById("simulation-title-div");
    homeButton = document.getElementById("home-button");
}
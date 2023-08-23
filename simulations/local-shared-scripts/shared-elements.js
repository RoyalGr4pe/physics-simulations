// Containers
let mainContainer;
let simulationContainer;
let settingsContainer;

// Side Bar Elements
let sliders = [];
let simulationTitle;
let sliderLabels;
let sliderInputs;
let sliderValues;
let homeButton;

// DOM variables
let simulationFontToWindowRatio;
let sliderLabelFontToWindowRatio;
let simulationTitleFontSize;
let sliderLabelFontSize;


function loadSimulationSharedElements() {
    mainContainer = document.getElementById("main-container");
    mainContainer.style.gridTemplateColumns = "20% 80%";
  
    simulationContainer = document.getElementById("simulation-container");
    simulationTitle = document.getElementById("simulation-title-div");
    settingsContainer = document.getElementById("local-settings-container");

    sliderLabels = document.getElementsByClassName("slider-label");
    sliderInputs = document.getElementsByClassName("slider");
    sliderValues = document.getElementsByClassName("slider-value");
  
    homeButton = document.getElementById("home-button");
}


function adjustSharedElementsSize() {
    if (windowWidth >= minWindowWidth) {
        if (isMenuOpen == true) {
            mainContainer.style.gridTemplateColumns = "20% 80%";
            settingsContainer.style.display = "block";
            simulationTitle.style.display = "block";
            homeButton.style.display = "block";
        }
        else if (isMenuOpen == false) {
            mainContainer.style.gridTemplateColumns = "5% 95%";
            settingsContainer.style.display = "none";
            simulationTitle.style.display = "none";
            homeButton.style.display = "none";
        }
    }
    else if (windowWidth < minWindowWidth) {
        if (isMenuOpen == true) {
            mainContainer.style.gridTemplateColumns = "100% 0%";
            settingsContainer.style.display = "block";
            simulationTitle.style.display = "block";
            homeButton.style.display = "block";
        }
        else if (isMenuOpen == false) {
            mainContainer.style.gridTemplateColumns = "15% 85%";
            settingsContainer.style.display = "none";
            simulationTitle.style.display = "none";
            homeButton.style.display = "none";
        }       
    }

    if (windowWidth >= minWindowWidth) {
        simulationFontToWindowRatio = 1/70;
        sliderLabelFontToWindowRatio = 1/96;
    } 
    else if (windowWidth < minWindowWidth) {
        simulationFontToWindowRatio = 1/30;
        sliderLabelFontToWindowRatio = 1/36;
    }

    simulationTitleFontSize = simulationFontToWindowRatio * windowWidth;
    sliderLabelFontSize = sliderLabelFontToWindowRatio * windowWidth;

    simulationTitle.style.fontSize = simulationTitleFontSize + "px";

    for (sliderLabel of sliderLabels) {
        sliderLabel.style.fontSize = sliderLabelFontSize + "px";
    }
}
function adjustElementsSize() {
    let simulationFontToWindowRatio;
    let sliderLabelFontToWindowRatio;


    if (windowWidth >= minWindowWidth) {
        if (isMenuOpen == true) {
            mainContainer.style.gridTemplateColumns = "20% 80%";
            sliderContainer.style.display = "block";
            simulationTitle.style.display = "block";
        }
        else if (isMenuOpen == false) {
            mainContainer.style.gridTemplateColumns = "5% 95%";
            sliderContainer.style.display = "none";
            simulationTitle.style.display = "none";
        }
    }
    else if (windowWidth < minWindowWidth) {
        if (isMenuOpen == true) {
            mainContainer.style.gridTemplateColumns = "100% 0%";
            sliderContainer.style.display = "block";
            simulationTitle.style.display = "block";
        }
        else if (isMenuOpen == false) {
            mainContainer.style.gridTemplateColumns = "10% 90%";
            sliderContainer.style.display = "none";
            simulationTitle.style.display = "none";
        }       
    }


    if (windowWidth >= minWindowWidth) {
        simulationFontToWindowRatio = 1/80;
        sliderLabelFontToWindowRatio = 1/96;
    } 
    else if (windowWidth < minWindowWidth) {
        simulationFontToWindowRatio = 1/30;
        sliderLabelFontToWindowRatio = 1/36;
    }

    let simulationTitleFontSize = simulationFontToWindowRatio * windowWidth;
    let sliderLabelFontSize = sliderLabelFontToWindowRatio * windowWidth;

    simulationTitle.style.fontSize = simulationTitleFontSize + "px";

    for (sliderLabel of sliderLabels) {
        sliderLabel.style.fontSize = sliderLabelFontSize + "px";
    }
}
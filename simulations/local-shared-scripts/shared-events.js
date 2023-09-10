function goToHomeEvent() {
    // Use window.location to navigate to the home.html page
    window.location.href = "/home/home.html"; 
}


function windowResized() {
  resizeCanvas(simulationContainer.clientWidth, simulationContainer.clientHeight);
}


function toggleMenuButtonEvent() {
  // If window width can have both menu bar and canvas
  if (windowWidth >= minWindowWidth) {

    // Close menu
    if (mainContainer.style.gridTemplateColumns == "20% 80%") {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "5% 95%";
      isMenuOpen = false;
    } 

    // Open menu
    else {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "20% 80%";
      isMenuOpen = true;
    }
  }

  // If window width can only have both small menu bar or canvas
  else if (windowWidth < minWindowWidth) {

    // Close menu
    if (mainContainer.style.gridTemplateColumns == "100% 0%") {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "15% 85%";
      isMenuOpen = false;
    } 

    // Open menu
    else {
      mainContainer.classList.add("smooth-side-bar-transition");
      mainContainer.style.gridTemplateColumns = "100% 0%";
      isMenuOpen = true;
    }
  }

  // Wait for the transition to complete and then remove the class
  setTimeout(() => {
    mainContainer.classList.remove("smooth-side-bar-transition");
  }, 300);
}
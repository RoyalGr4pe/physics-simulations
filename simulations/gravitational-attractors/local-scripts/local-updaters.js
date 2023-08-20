function updatePlanetaryObjects() {
  for (moon of moons) {
    moon.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
    moon.render()
  }
  for (planet of planets) {
    planet.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
    planet.render()
  }
  for (star of stars) {
    star.update(simulationContainer.clientWidth, simulationContainer.clientHeight);
    star.render()
  }
}

function updateSliderInfo() {
  speedSliderValue.innerHTML = speedSlider.value;

  speedSlider.oninput = function() {
    speedSliderValue.innerHTML = this.value;
  }
}
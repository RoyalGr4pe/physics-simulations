function updateSliderInfo() {
  auSliderValue.innerHTML = auSlider.value;
  speedSliderValue.innerHTML = speedSlider.value;

  auSlider.oninput = function() {
    auSliderValue.innerHTML = this.value;
  }

  speedSlider.oninput = function() {
    speedSliderValue.innerHTML = this.value;
  }
}
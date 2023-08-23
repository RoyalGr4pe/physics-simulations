function updateSliderInfo() {
  for (slider of sliders) {
    slider[1].innerHTML = slider[0].value;
    slider[0].oninput = function() {
      slider[1].innerHTML = this.value;
    }
  }
}
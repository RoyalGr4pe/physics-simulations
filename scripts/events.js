function toggleMenuEvent() {
    if (isMenuOpen) {
      menuContainer.style.transform = "translateX(0)"; // Slide in the container
    } else {
      menuContainer.style.transform = "translateX(-100%)"; // Slide out the container
    }
    isMenuOpen = !isMenuOpen;
  }
function replayAnimation() {
  const colorImage = document.querySelector(".color-image");
  colorImage.classList.remove("animate-mask");

  // Trigger reflow to restart animation
  void colorImage.offsetWidth;

  colorImage.classList.add("animate-mask");
}

// Automatically trigger once on page load
window.addEventListener("load", () => {
  replayAnimation();
});

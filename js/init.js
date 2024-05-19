function setFontSize() {
  var baseSize = 16; // Base font size in pixels
  var maxWidth = 1200; // Max width for scaling
  var width = Math.min(window.innerWidth, maxWidth);
  var fontSize = (baseSize * width) / maxWidth;
  document.documentElement.style.fontSize = fontSize + 'px';
}

window.addEventListener('resize', setFontSize);
setFontSize(); // Initial call
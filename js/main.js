let image;

function uploadImg() {
  var canvasImg = document.getElementById("canvasImg");
  var filename = document.getElementById("inputImg");
  image = new SimpleImage(filename);
  canvasImg.className = "image";
  image.maxWidth = "50rem";
  image.drawTo(canvasImg);
  inputImgLabel.style.height = "5rem";
  inputImgLabel.style.minHeight = "0";
  inputImgLabel.style.background = "var(--background-color-rev)";
  ImgTAG.style.color = "var(--background-color)";
  uploadIconBtn.style.color = "var(--background-color)";
  canvasImg.style.display = "block";
  mainBody.style.width = "fit-content";
  ansBody.style.width = "fit-content";
  ansBody.style.width = "fit-content";
}

// Default Code
function printingCanvas() {
  image.drawTo(canvasResult);
  var filename = document.getElementById("inputImg");
  image = new SimpleImage(filename);
  ansBody.style.display = "block";
  canvasResult.style.display = "block";
}

// Black and White JS
function greyScale() {
  if (inputImg.value == "") return;
  for (var pixel of image.values()) {
    var avg = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
    avg = avg / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  printingCanvas();
}
// remove RGB form Image
function removeRGB(color) {
  if (inputImg.value == "") return;
  for (var pixel of image.values()) {
    if (color == "red") pixel.setRed(0);
    else if (color == "green") pixel.setGreen(0);
    else if (color == "blue") pixel.setBlue(0);
  }
  printingCanvas();
}
// Add RGB
function rgbScale(color) {
  if (inputImg.value == "") return;
  for (var pixel of image.values()) {
    if (color == "red") pixel.setRed(255);
    else if (color == "green") pixel.setGreen(255);
    else if (color == "blue") pixel.setBlue(255);
  }
  var canvasResult = document.getElementById("canvasResult");
  printingCanvas();
}
// PlayGround JS
function pixelPlay(color) {
  if (inputImg.value == "") return;
  for (let pixel of image.values()) {
    if (color == "red") pixel.setRed(pixel.getRed - redOfImage.value);
    else if (color == "green")
      pixel.setGreen(Math.abs(pixel.getGreen - greenOfImage.value));
    else if (color == "blue")
      pixel.setBlue(Math.abs(pixel.getBlue - blueOfImage.value));
  }
  var canvasResult = document.getElementById("canvasResult");
  printingCanvas();
}
// Dark Mode JS
function toggleDarkMode() {
  if (darkMode.value == "on") {
    switchDarkMode();
    darkMode.value = "off";
  } else {
    switchLightMode();
    darkMode.value = "on";
  }
}
let root = document.querySelector(":root");

function switchDarkMode() {
  let rootValue = getComputedStyle(root);
  root.style.setProperty("--background-color", "#fff");
  root.style.setProperty("--background-color-rev", "#0f1f2a");
  root.style.setProperty("--nav-background", "#00000019");
  root.style.setProperty("--text-color", "#222");
  root.style.setProperty("--text-color-opac", "#555555a0");
  root.style.setProperty("--footer-text", "#555");
  root.style.setProperty("--color-theme", "#2c98f0");
}
function switchLightMode() {
  let rootValue = getComputedStyle(root);
  root.style.setProperty("--background-color", "#0f1f2a");
  root.style.setProperty("--background-color-rev", "#f5f5f5");
  root.style.setProperty("--nav-background", "#ffffff09");
  root.style.setProperty("--text-color", "whitesmoke");
  root.style.setProperty("--text-color-opac", "#f5f5f5a0");
  root.style.setProperty("--footer-text", "#f5f5f580");
  root.style.setProperty("--color-theme", "#ff5017");
}

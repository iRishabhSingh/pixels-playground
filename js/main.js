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

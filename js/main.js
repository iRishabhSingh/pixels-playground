function uploadImg() {
  const input = document.getElementById("inputImg");
  const canvas = document.getElementById("canvasImg");
  const ctx = canvas.getContext("2d");

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const maxWidth = 0.6 * window.innerWidth;
      const aspectRatio = img.width / img.height;
      let newWidth = img.width;
      let newHeight = img.height;

      if (img.width > maxWidth) {
        newWidth = maxWidth;
        newHeight = maxWidth / aspectRatio;
      }

      canvas.style.display = "block";
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // styling css
  inputImgLabel.style.minHeight = "5rem";
  inputImgLabel.style.background = "var(--nav-background)";
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

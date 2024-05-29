let originalImage; // Global variable to hold the original SimpleImage object
let image; // Global variable to hold the working SimpleImage object

// Function to upload and display the image on canvas
function uploadImg() {
  const input = document.getElementById("inputImg");
  const canvas = document.getElementById("canvasImg");
  const ctx = canvas.getContext("2d");

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const maxWidth = 0.28 * window.innerWidth;
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

      // Create a SimpleImage object from the uploaded image
      originalImage = new SimpleImage(img);
      image = new SimpleImage(img); // Make a copy for editing
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Styling CSS
  const inputImgLabel = document.getElementById("inputImgLabel");
  inputImgLabel.style.minHeight = "5rem";
  inputImgLabel.style.maxHeight = "5rem";
  inputImgLabel.style.background = "var(--nav-background)";
}

// Function to reset the working image to the original
function resetImage() {
  if (originalImage) {
    image = new SimpleImage(originalImage);
  }
}

// Function to print canvas
function printingCanvas() {
  if (!image) return; // Ensure the image is loaded

  const canvasResult = document.getElementById("canvasResult");
  const answerContainer = document.getElementById("ansBody");

  image.drawTo(canvasResult); // Draw the image to the result canvas

  // Show the result canvas and answer container
  answerContainer.style.display = "block";
  canvasResult.style.display = "block";

  // Create a link element for downloading
  const downloadLink = document.createElement("a");
  downloadLink.textContent = "Download Edited Image";
  downloadLink.href = "#"; // Set a placeholder href
  downloadLink.addEventListener("click", function () {
    const downloadCanvas = document.createElement("canvas");
    downloadCanvas.width = image.getWidth();
    downloadCanvas.height = image.getHeight();
    image.drawTo(downloadCanvas);
    const dataUrl = downloadCanvas.toDataURL("image/png");
    this.href = dataUrl;
    this.download = "image.png";
  });

  // Append the download link to the answer container
  const editedImgDownload = document.getElementById("editedImgDownload");
  editedImgDownload.innerHTML = ""; // Clear previous content
  editedImgDownload.appendChild(downloadLink);
  editedImgDownload.style.display = "block";
}

// Function to apply grayscale filter
function greyScale() {
  if (!originalImage) return;
  resetImage(); // Reset to original before applying the filter
  for (const pixel of image.values()) {
    const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  printingCanvas();
}

// Function to remove specific color channel
function removeRGB(color) {
  if (!originalImage) return;
  resetImage(); // Reset to original before applying the filter
  for (const pixel of image.values()) {
    if (color === "red") pixel.setRed(0);
    else if (color === "green") pixel.setGreen(0);
    else if (color === "blue") pixel.setBlue(0);
  }
  printingCanvas();
}

// Function to add specific color channel
function rgbScale(color) {
  if (!originalImage) return;
  resetImage(); // Reset to original before applying the filter
  for (const pixel of image.values()) {
    if (color === "red") pixel.setRed(255);
    else if (color === "green") pixel.setGreen(255);
    else if (color === "blue") pixel.setBlue(255);
  }
  printingCanvas();
}

// Function to adjust pixel values
function pixelPlay(color) {
  if (!originalImage) return;
  resetImage(); // Reset to original before applying the filter
  const redValue = parseInt(document.getElementById("redOfImage").value);
  const greenValue = parseInt(document.getElementById("greenOfImage").value);
  const blueValue = parseInt(document.getElementById("blueOfImage").value);

  for (const pixel of image.values()) {
    if (color === "red") pixel.setRed(Math.max(0, pixel.getRed() - redValue));
    else if (color === "green")
      pixel.setGreen(Math.max(0, pixel.getGreen() - greenValue));
    else if (color === "blue")
      pixel.setBlue(Math.max(0, pixel.getBlue() - blueValue));
  }
  printingCanvas();
}

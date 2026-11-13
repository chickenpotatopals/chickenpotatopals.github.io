// Image Manipulation Demo
// Elijah Biebrick
// November 10th, 2026 (ONE DAY AFTER PEAK)

let pilot, chip;
let myVideo;

async function loadAssets(){
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(640, 480);
  myVideo = createCapture(VIDEO);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(myVideo, 0, 0);
  myVideo.hide();
  loadPixels();
  pixels[0] = 255;

  // between load and update pixels, run some code
  // to modify the pixels array
  // boost();
  // greyscale();
  background(0);
  textEffect();

  // to update the screen to reflect new pixels[]
  // call updatePixels()
  // updatePixels();
}

function boost(){
  // brightening filter
  // "dumb filter" - same effect to each pixel
  // can use a single loop
  let boostamount = map(mouseX, 0, width, -75, 50);
  for (let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] + boostamount;
    let g = pixels[i + 1] + boostamount;
    let b = pixels[i + 2] + boostamount;
    setPixelOneD(i, r, g, b);
  }
}

function greyscale(){
  let greyification = map(mouseX, 0, width, 1, 5);
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let juice = getAvg(x, y);
      setPixel(x, y, juice, juice, juice);
    }
  }
}

function textEffect(){
  fill(0, 255, 0);
  let scaleAmount = 3;
  textSize(scaleAmount);
  for (let x = 0; x < width; x += scaleAmount){
    for (let y = 0; y < height; y += scaleAmount){
      let avg = getAvg(x, y);
      if (avg > 200){
        text("&", x, y);
      }
      else if (avg > 120){
        text("x", x, y);
      }
      else if (avg > 60){
        text("-", x, y);
      }
      else{
        text(".", x, y);
      }
    }
  }
}

function setPixelOneD(pos, r, g, b){
  // pos = 1d location of pixel's red component
  // r, g, b = new color values (0-255) for that pixel
  pixels[pos] = constrain(r, 0, 255);
  pixels[pos + 1] = constrain(g, 0, 255);
  pixels[pos + 2] = constrain(b, 0, 255);
}

function setPixel(x, y, r, g, b){
  let index = (y * width + x) * 4;
  setPixelOneD(index, r, g, b);
}

function getAvg(x, y){
  let index = (y * width + x) * 4;
  let d = pixels[index] + pixels[index + 1] + pixels[index + 2];
  return d / 3;

}

function getColors(x, y){
  let index = (y * width + x) * 4;
  return [pixels[index], pixels[index + 1], pixels[index + 2]];
}
// Image Manipulation Demo
// Elijah Biebrick
// November 10th, 2026 (ONE DAY AFTER PEAK)

let pilot, chip;

async function loadAssets(){
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(pilot.width, pilot.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(pilot, 0, 0);
  loadPixels();
  pixels[0] = 255;

  // between load and update pixels, run some code
  // to modify the pixels array
  boost();

  // to update the screen to reflect new pixels[]
  // call updatePixels()
  updatePixels();
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

function setPixelOneD(pos, r, g, b){
  // pos = 1d location of pixel's red component
  // r, g, b = new color values (0-255) for that pixel
  pixels[pos] = constrain(r, 0, 255);
  // pixels[pos + 1] = constrain(g, 0, 255);
  pixels[pos + 2] = constrain(b, 0, 255);
}
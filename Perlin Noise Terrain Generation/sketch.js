// Elijah Biebrick
// Perlin Noise Generation
// October 1st, 2026
// Make a randomly generated world with perlin noise

let pTime = 10;
let pSpeed = 0.02;
let pStart = pTime;
let coolX = 5;
let x;
let average = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke;
  background(200, 200, 255);
  generateTerrain();
  pTime = pStart;
  pStart += pSpeed;
}

function generateTerrain(){
  for(x = 0; x < width; x += coolX){
    let h = noise(pTime);
    h = map(h, 0, 1, 0, height);
    fill(0, 180, 0);
    rect(x, h, coolX, height);
    average += h;
    average -= x;
    fill(255, 0, 0);
    rect(0, average, width, 5);
    pTime += pSpeed;
  }
}

function keyPressed(){
  if (keyCode === 37){
    if (coolX > 2){
      coolX--;
    }
  }
  else if (keyCode === 39){
    coolX++;
  }
}

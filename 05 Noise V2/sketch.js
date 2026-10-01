// Noise V2 Electric Boogaloo
// Elijah Biebrick
// 10/1/2026

// global variables
let xTime = 5;
let xSpeed = 0.01;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  tower();
  xTime = xStart;
  xStart += xSpeed;
}

function tower(){
  // create a tower with circles of different
  // y position, x pos will be randomly selected
  for(let y = 0; y < height; y += 4){
    let x = noise(xTime);
    x = map(x, 0, 1, 0, width);
    fill(x / 3, 255, 0);
    circle(x, y, 20);
    xTime += xSpeed;
  }
}
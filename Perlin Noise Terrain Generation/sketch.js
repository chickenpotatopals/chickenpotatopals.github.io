// Elijah Biebrick
// Perlin Noise Generation
// October 1st, 2026
// Make a randomly generated world with perlin noise

// global variables
let pTime = 10;
let pSpeed = 0.015;
let pStart = pTime;
let coolX = 1;
let x;
let highestY;
let highestX;
let average;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  noStroke;
  background(200, 200, 255);
  generateTerrain();
  // to make the ground actually consistent
  pTime = pStart;
  pStart += pSpeed;
}

function generateTerrain(){
  // reset highesty and average to allow respective functions to work
  highestY = height;
  average = 0;
  for(x = 0; x < width; x += coolX){
    // get perlin noise information to make rectangles
    let h = noise(pTime);
    h = map(h, 0, 1, 0, height);
    // find if the rect just made is the largest one
    // if it is, mark its location
    if (h < highestY){
      highestY = h;
      highestX = x;
    }
    //draw the rectangle
    fill(0, 120, 0);
    rect(x, h, coolX, height);
    fill(255, 0, 0);
    // step the perlin noise graph
    pTime += pSpeed;
    average += h;
  }
  // make the flag and average
  drawFlag();
  markAverage();
}

function keyPressed(){
  // if user presses left, shrink each rectangle
  // if user presses right, widen each rectangle
  if (keyCode === 37){
    if (coolX > 2){
      coolX--;
    }
  }
  else if (keyCode === 39){
    coolX++;
  }
}

function drawFlag(){
  // make a flag at the highest point on the terrain
  noStroke();
  fill(255, 0, 0);
  rect(highestX, highestY - 30, 3, 29);
  triangle(highestX, highestY - 30, highestX, highestY - 20, highestX + 15, highestY - 25);
}

function markAverage(){
  // draw a large blue line at the average of all heights
  average /= width;
  average *= coolX;
  fill(0, 0, 255);
  rect(0, average - 1, width, 3);
}
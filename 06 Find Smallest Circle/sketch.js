// Find Smallest Circle
// Elijah Biebrick
// 10/5/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_CIRCLES = 50;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircles();
  seed = random(0, 100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){

  let smallDiameter = Infinity;
  let smallX = "soup"; let smallY = "soup";
  noFill();
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(10, 150);
    circle(x, y, d);

    if (d < smallDiameter){
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }
  }
  fill(255, 0, 0);
  circle(smallX, smallY, smallDiameter);
}
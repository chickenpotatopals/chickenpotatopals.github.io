// Balloon Tree
// Elijah Biebrick
// November 25th 2026


let scale = 25;
let leafDepth = 5;
let maxDepth = 6;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  randomness = random(0, 1000);
}

function draw() {
  randomSeed(randomness);
  background(255);
  drawTree(width / 2, height * 0.9, 90, maxDepth);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  fill(0);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle))*depth*scale;     //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle))*depth*scale;     //using trig ratios. Get shorter based on depth

    stroke(0);
    strokeWeight(depth);
    drawLine(x1, y1, x2, y2, depth);
    if (depth < leafDepth){
      drawLeaf(x2, y2, 10 * depth + random(-5, 5));
    }

    //for a 3-branch tree:
    drawTree(x2, y2, angle-map(mouseX, 0, width, 0, 45), depth-1);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle+map(mouseX, 0, width, 0, 45), depth-1);
  }
}

function drawLeaf(x, y, d){
  noStroke();
  fill(random(255), random(255), random(255));
  circle(x, y, d);
}

function keyPressed(){
  if (keyCode === 90){
    leafDepth--;
    if (leafDepth < 1){
      leafDepth = 1;
    }
  }
  else if(keyCode === 88){
    leafDepth++;
    if (leafDepth > maxDepth + 1){
      leafDepth = maxDepth + 1;
    }
  }
}
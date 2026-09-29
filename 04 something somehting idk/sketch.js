// Project Title
// Your Name
// Date

// Global Var/Def
let x1;
let y1; // declare first

let x2;
let y2;
// for noise()
// noiseTime = current coordinate on noise graph
// noiseSpeed = rate at which we move down the graph
let x3 = 400;
let y3 = 200;

let noiseTime = 10;
let noiseSpeed = 0.01;

let evilnoiseTime = 10;
let evilnoiseSpeed = 0.01;


let minSize = 5; let maxSize = 200;
async function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3;
  y1 = height/2; // initialize second
  x2 = width * 0.7;
  y2 = height/2;
  frameRate(60);
}

function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  moveCircle();
}

function noiseCircle(){
  // another circle, this time the diameter
  // is generated using noise(), smoothly
  fill(255,0,0);
  let d = noise(noiseTime); // yield value 0-1
  d = map(d, 0, 1, 5, 200);
  noiseTime += noiseSpeed;
  circle(x2, y2, d);
}

function moveCircle(){
  fill(0,255,0);
  let x3 = noise(evilnoiseTime);
  x3 = map(x3, 0, 1, 0, width);
  evilnoiseTime += evilnoiseSpeed;
  circle(x3, y3, 40);
}


function randomCircle(){
  // draw a fixed position circle with
  // randomly changing diameter
  fill(50,150,250);
  let d = random(minSize, maxSize);
  circle(x1, y1, d);
}
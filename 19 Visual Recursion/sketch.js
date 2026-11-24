// fuck comment headers bro i wanna do my capstone

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function cocentric(x, y, d){
  circle(x, y, d);
  if(d > 10){
    cocentric(x, y, d - 2);
  }
}

function draw() {
  background(220);
  // cocentric(width / 2, height / 2, width);
  circleFractal(width/2, height/2, width/2);
}

function circleFractal(x, y, d){
  circle(x, y, d);
  if (d > 1){
    circleFractal(x - d / 2, y, d/2);
    circleFractal(x + d / 2, y, d/2);
    circleFractal(x, y - d / 2, d/2);
  }
}
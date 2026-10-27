// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seconds;
let minutes;
let hours;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  seconds = second();
  minutes = minute();
  hours = hour();

  background(220);
  translate(width / 2, height / 2);
  fill("white");
  circle(0, 0, 400);
  for (let i = -6; i <= 360; i += 6){
    push();
    rotate(i);
    if (i % 30 === 0){
      rect(175, 0, 20, 2);
    }
    else{
      rect(175, 0, 10, 1);
    }
    pop();
  }
  push();
  noStroke();
  fill("red");
  rotate(seconds * 6 - 90.5);
  rect(0, 0, 160, 2);
  pop();
  push();
  fill("black");
  rotate(minutes * 6 - 90.5);
  rect(0, 0, 170, 5);
  pop;
  push();
  fill("black");
  rotate(hours * 30 - 90.5);
  rect(0, 0, 100, 8);
  pop();
}

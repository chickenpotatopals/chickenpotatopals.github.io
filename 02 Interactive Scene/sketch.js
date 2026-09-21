// Interactive Scene
// Elijah Biebrick
// 9/21/2026
// Make a website with a visual scene, and a character that can be manipulated with user inputs.


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(162, 207, 255);
  noStroke();
  fill(94, 115, 138);
  rect(0, windowHeight * 0.8, windowWidth, windowHeight * 0.2);
  fill('white');
  rect(windowWidth * 0.1, windowHeight * 0.5, windowWidth * 0.7, windowHeight * 0.3);
  fill(138, 80, 51);
  rect(windowWidth * 0.1, windowHeight * 0.3, windowWidth * 0.7, windowHeight * 0.2);
  fill("red");
  rect(windowWidth * 0.4, windowHeight * 0.3, windowWidth * 0.2, windowHeight * 0.2);
  rect(windowWidth * 0.5, windowHeight * 0.5, windowWidth * 0.1, windowHeight * 0.3);
  fill("yellow");
  textSize(windowHeight * 0.2);
  textFont("Verdana");
  text("M", windowWidth * 0.415, windowHeight * 0.46);
  fill("white");
  textSize(windowHeight * 0.04);
  text("McDonald's", windowWidth * 0.13, windowHeight * 0.42);
  fill("black");
  rect(windowWidth * 0.15, windowHeight * 0.58, windowWidth * 0.15, windowHeight * 0.15);
  rect(windowWidth * 0.35, windowHeight * 0.58, windowWidth * 0.1, windowHeight * 0.15);
}

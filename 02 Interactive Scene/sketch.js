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
  // draw the mcdonalds
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
  // draw RONALD MCDONALD
  stroke("black");
  // limb base and feet
  fill(217, 0, 0);
  rect(mouseX, windowHeight * 0.68, 60, 20);
  rect(mouseX - 60, windowHeight * 0.68, 60, 20);
  rect(mouseX + 5, windowHeight * 0.72, 20, 60);
  rect(mouseX - 25, windowHeight * 0.72, 20, 60);
  circle(mouseX + 15, windowHeight * 0.80, 30);
  circle(mouseX - 15, windowHeight * 0.80, 30);
  // forearms, shins
  fill(255, 255, 225);
  rect(mouseX + 60, windowHeight * 0.68, 40, 20);
  rect(mouseX - 100, windowHeight * 0.68, 40, 20);
  rect(mouseX + 5, windowHeight * 0.76, 20, 40);
  rect(mouseX - 25, windowHeight * 0.76, 20, 40);
  // torso and hands
  fill("yellow");
  ellipse(mouseX, windowHeight * 0.71, 60, 100);
  circle(mouseX + 100, windowHeight * 0.69, 25);
  circle(mouseX - 100, windowHeight * 0.69, 25);
  // head
  fill(255, 255, 225);
  circle(mouseX, windowHeight * 0.66, 50);
  // red afro of doom
  fill(217, 0, 0);
  arc(mouseX, windowHeight * 0.65, 55, 50, 3, 6.5);
  // seductive face
  fill("black");
  circle(mouseX + 8, windowHeight * 0.66, 5);
  circle(mouseX - 8, windowHeight * 0.66, 5);
  arc(mouseX, windowHeight * 0.67, 10, 5, 0, 3.5);

}

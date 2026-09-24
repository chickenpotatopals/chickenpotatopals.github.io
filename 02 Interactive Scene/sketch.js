// Interactive Scene
// Elijah Biebrick
// 9/21/2026
// Make a website with a visual scene, and a character that can be manipulated with user inputs.
// These global variables allow for the
// manipulation of the scene.
let bg1 = 85;
let bg2 = 162;
let bg3 = 252;
let currentbg = 1;
let ronaldExpression = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // draw the background based on the currentbg,
  // and draw the sun accordingly.
  background(bg1, bg2, bg3);
  fill('yellow');
  if (currentbg === 1){
    circle(windowWidth * 0.1, windowHeight * 0.6, 160);
  }
  else if (currentbg === 2){
    circle(windowWidth * 0.3, windowHeight * 0.2, 160);
  }
  else if (currentbg === 3){
    circle(windowWidth * 0.6, windowHeight * 0.2, 160);
  }
  else if (currentbg === 4){
    circle(windowWidth * 0.9, windowHeight * 0.8, 160);
  }
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
  // add name for copyright reason
  textSize(20);
  text("Elijah Biebrick", 10, windowHeight - 20);
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
  // draw face, based on ronaldExpression
  if(ronaldExpression === 0){
    fill("black");
    circle(mouseX + 8, windowHeight * 0.66, 5);
    circle(mouseX - 8, windowHeight * 0.66, 5);
    arc(mouseX, windowHeight * 0.67, 10, 5, 0, 3.5);
  }
  else if (ronaldExpression === 1){
    fill("red");
    circle(mouseX + 8, windowHeight * 0.66, 5);
    circle(mouseX - 8, windowHeight * 0.66, 5);
    line(mouseX, windowHeight * 0.66, mouseX + 10, windowHeight * 0.65);
    line(mouseX, windowHeight * 0.66, mouseX - 10, windowHeight * 0.65);
    arc(mouseX, windowHeight * 0.67, 10, 5, 3, 0.3);
  }

}
function mousePressed() {
  // when the user middle clicks, it changes the background.
  if (mouseButton.center === true){
    if (currentbg === 1){
      currentbg = 2;
      bg1 = 173;
      bg2 = 221;
      bg3 = 255;
    }
    else if (currentbg === 2){
      currentbg = 3;
      bg1 = 255;
      bg2 = 211;
      bg3 = 216;
    }
    else if (currentbg === 3){
      currentbg = 4;
      bg1 = 230;
      bg2 = 84;
      bg3 = 0;
    }
    else if (currentbg === 4){
      currentbg = 1;
      bg1 = 85;
      bg2 = 162;
      bg3 = 252;
    }
  }
}

function keyPressed(){
  // when the space bar is pressed, it
  // changes ronalds expression from happy to ANGERY
  if (key === " "){
    if(ronaldExpression === 1){
      ronaldExpression = 0;
    }
    else{
      ronaldExpression++;
    }
  }
}
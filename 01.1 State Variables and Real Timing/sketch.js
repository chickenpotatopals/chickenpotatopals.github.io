// State Variables/Real Time
// Elijah Biebrick
// 9/23/26
//
//Global Variables
let objectType = 0;
// 0 - crko
// 1 - tangle
// 2 - Starburst
let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // repeats at target of 60fps
  background(220);
  drawShape();
  // delay intentionally added if needed
  let elapsed = millis()-startTime;
  if(elapsed > 2000){
    updateState();
    startTime = millis();
  }
}

function drawShape() {
  // inspect state variable (objectType)
  // and draw one of three possible
  // shapes on the canvas
  let x = width / 2; let y = height / 2;
  switch (objectType) {
    case 0:
      circle(x, y, 150);
      break;
    case 1:
      triangle(x - 40, y + 40, x + 40, y + 40, x, y - 40);
      break;
    case 2:
      for(let penis = 0; penis < 1000; penis++){
        let x2 = random(x-2000, x+2000);
        let y2 = random(y+2000, y-2000);
        line(x, y, x2, y2);
      }
      
  }
}

function mousePressed(){
  if (mouseButton.left === true){
    updateState();
  }
}

function updateState(){
  objectType++;
  if (objectType > 2){
    objectType = 0;
  }
}
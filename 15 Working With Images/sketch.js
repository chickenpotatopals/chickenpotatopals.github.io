// Elijah Biebrich
// Working With Images
// ALL HALLOWS EVE :pumpkin:
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let dir = "left";
let pindex = 0;
let pinImages = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 9; i++){
    pinImages.push(await loadImage("/assets/pin-0" + i + ".png"));
  }
  

  lionL = await loadImage("/assets/lion-left.png");
  lionR = await loadImage("/assets/lion-right.png");
}

function draw() {
  background(220);
  imageMode(CENTER);
  DRAWTHELION();
  drawPin();
}

function DRAWTHELION(){
  if (movedX < 0){
    dir = "left";
  }
  else if (movedX > 0){
    dir = "right";
  }
  switch(dir){
    case "left":
      image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
      break;
    case "right":
      image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
      break;
  }
}

function drawPin(){
  image(pinImages[pindex], width/2, height * 0.75);
  pindex++;
  if (pindex > 8){
    if(frameCount % 2 === 0){
      pindex = 0;
    }
  }
}

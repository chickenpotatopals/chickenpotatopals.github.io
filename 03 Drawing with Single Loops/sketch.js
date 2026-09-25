// Drawing with Single Loops
// Elijah Biebrick
// 9/25/26
// 
// idk bro id rather be at home playing White Knuckle rn
let mappedJ = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}
function worm(y, size){
  //use this function to draw a line of circles
  //y = (number) height at which to draw the line
  //size = (number) diameter of each circle
  for(let x = 0; x < width;){
    circle(x,y,size);
    line(x, y, mouseX, mouseY);
    x += size * 2;
  }
}

function wormVertical(x, size){
  //use this function to draw a line of circles
  //y = (number) height at which to draw the line
  //size = (number) diameter of each circle
  for(let y = 0; y < height;){
    circle(x,y,size);
    line(x, y, mouseX, mouseY);
    y += size * 2;
  }
}

function draw() {
  background(220);
  worm(0, 29.5);
  worm(height, 29.5);
  wormVertical(0, 29.5);
  wormVertical(width, 29.5);
  //screen updated here
}

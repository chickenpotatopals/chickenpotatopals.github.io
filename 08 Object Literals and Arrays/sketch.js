// Simple Objects and Arrays
// Elijah Biebrick
// 10/7/2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let ball;
let ballArray = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = {  //object notation. inside the brackets
  //   //        set up several property:value pairs
  //   x: 300, y: 400, size: 20,
  //   c: color(random(255), random(255), random(255)), 
  //   xSpeed: 5, ySpeed: 4
  // };
}


function ballFactory(x, y){
  // create and RETURN a new ball
  // initial position x,y
  let b = {
    x:x, y:y, size:20,
    c: color(random(255), random(255), random(255)), 
    xSpeed:random(-6,6),
    ySpeed:random(-6,6),
    lifeTime: random(40,60),
  };
  return b;
}


function initObjects(n){
  //create or add n ball objects to our array
  for(let i = 0; i < n; i++){
    ballArray.push(ballFactory(mouseX, mouseY));
  }
}

function keyPressed(){
  initObjects(1000);
}

function moveBall(b){
  // b = ball type object
  // update position and draw the ball

  b.x += b.xSpeed;  b.y += b.ySpeed;
  if(b.x < 0 || b.x > width){
    b.xSpeed *= -1;
  }
  if(b.y < 0 || b.y > height){
    b.ySpeed *= -1;
  }
  fill(b.c);
  circle(b.x, b.y, b.size);
}
function draw() {
  background(220);
  // loop through an array (traversal)
  for(let i = 0; i < ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
    b.lifeTime--;
    if (b.lifeTime < 1){
      //.splice(pos, #ofItemsToDel, [add]) deletes items from array
      b.size--;
      if (b.size < 1){
        ballArray.splice(i, 1);
      }
    }
  }

  if(mouseIsPressed){
    ballArray.push(ballFactory(mouseX, mouseY));
  }
}

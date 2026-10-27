// Vectors
// Elijah Biebrick
// October 27th, 2026
let objects = [];
 
async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  // process objects
  for (let joe of objects){
    if(true){
      joe.move();
    }
    joe.display();
  }
}

class Ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(1, 10), -5);
    this.gravity = createVector(0, random(0.4, 0.6));
    this.force = createVector(0, 0);
    this.bounces = random(10, 20);
  }

  move(){
    if(keyIsDown(" ")){
      this.calcMouse();
      this.vel.add(this.force);
      this.vel.limit(20);
    }
    else{
      this.vel.add(this.gravity);
    }
    this.pos.add(this.vel);
    if (this.pos.y > height){
      this.vel.y *= -0.9;
      this.bounces--;
    }
    if (this.pos.x > width){
      this.vel.x = -this.vel.x;
      this.bounces--;
    }
    if (this.pos.x < 0){
      this.vel.x = -this.vel.x;
      this.bounces--;
    }
  }

  calcMouse(){
    // mouse vector "attractor" calculations
    this.force = createVector(mouseX, mouseY);
    this.force.sub(this.pos);
    this.force.normalize();
    this.force.mult(2);
  }

  display(){
    // display the ball
    if(this.bounces > 0){
      noStroke();
      fill(0, 255, 0);
      circle(this.pos.x, this.pos.y, 20);
      // display the vectors
      if(true){
        let endX = this.pos.x + this.vel.x;
        let endY = this.pos.y + this.vel.y;

        stroke(0, 0, 255);
        line(this.pos.x, this.pos.y, endX, endY);

        stroke(0);
        line(endX, endY, endX + this.gravity.x, endY + this.gravity.y);
      }
    }
  }
}
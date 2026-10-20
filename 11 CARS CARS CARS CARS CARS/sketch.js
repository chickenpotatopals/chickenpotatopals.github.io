// Cars Cars Cars!
// Elijah Biebrick
// October 20th 2026
// Create a road with cars that drive along it, using classes
let eastbound = [];
let westbound = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(0, color(random(255), random(255), random(255)), 0, random(height * 0.5, height * 0.78), 0, random(1, 15)));
    westbound.push(new Vehicle(0, color(random(255), random(255), random(255)), 0, random(height * 0.2, height * 0.47), 1, random(-15, -1), 0));
  }
}

function draw() {
  background(220);
  drawRoad();
  for (let n of eastbound){
    n.action();
  }
  for (let n of westbound){
    n.action();
  }
}

function drawRoad(){
  fill(0);
  rect(0, height * 0.2, width, height * 0.6);
  fill(200, 200, 0);
  rect(0, height * 0.49, width, 10);
}

class Vehicle{
  // type = 0 (car) or 1 (truck) | c = (r,g,b) | x = x position | y = anywhere on the road | direction = 0 (east) or 1 (west) | xSpeed = 0-15 (east) or -15-0 (west) | rand = 0-100 (used for random actions)
  constructor(type, c, x, y, direction, xSpeed, rand){
    this.type = type;
    this.c = c;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
    this.rand = 0;
  }
  display(){
    fill(this.c);
    if(this.type === 0){
      rect(this.x, this.y, 50, 20);
    }
  }

  move(){
    this.x += this.xSpeed;
    if (this.x > width){
      this.x = 0;
    }
    if (this.x < 0){
      this.x = width;
    }
  }

  speedUp(){
    if (this.direction === 0){
      this.xSpeed = random(this.xSpeed, 15);
    }
    else{
      this.xSpeed = random(-15, this.xSpeed);
    }
  }

  speedDown(){
    if (this.direction === 0){
      this.xSpeed = random(1, this.xSpeed);
    }
    else{
      this.xSpeed = random(this.xSpeed, -1);
    }
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    this.move();
    this.rand = random(0, 100);
    if (this.rand <= 1){
      this.speedUp();
    }
    else if (this.rand <= 2){
      this.speedDown();
    }
    else if (this.rand <= 2.5){
      this.changeColor();
    }
    this.display();
  }
}
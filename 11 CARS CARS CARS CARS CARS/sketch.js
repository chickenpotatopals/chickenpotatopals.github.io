// Cars Cars Cars!
// Elijah Biebrick
// October 20th 2026
// Create a road with cars that drive along it, using classes
let eastbound = [];
let westbound = [];
let trafficLight = false;
let trafficTimer = 1000;

async function setup() {
  // make canvas and create array of cars
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(int(random(0,1.99)), color(random(255), random(255), random(255)), 0, random(height * 0.5, height * 0.78), 0, random(1, 15), 0));
    westbound.push(new Vehicle(int(random(0,1.99)), color(random(255), random(255), random(255)), 0, random(height * 0.2, height * 0.47), 1, random(-15, -1), 0));
  }
  frameRate(60);
}

function draw() {
  // make road and traffic light, and increment timer for the light
  background(220);
  drawRoad();
  for (let n of eastbound){
    n.action();
  }
  for (let n of westbound){
    n.action();
  }
  if (trafficTimer < 120){
    trafficLight = true;
    fill(255, 0, 0);
    circle(width/2, height/10, 100);
  }
  else{
    trafficLight = false;
    fill(0, 255, 0);
    circle(width/2, height/10, 100);
  }
  trafficTimer++; 
}

function mousePressed(){
  // add new car on left click or shift left click
  if(mouseButton.left){
    if(keyIsDown(SHIFT)){
      westbound.push(new Vehicle(int(random(0,1.99)), color(random(255), random(255), random(255)), 0, random(height * 0.2, height * 0.47), 1, random(-15, -1), 0));
    }
    else{
      eastbound.push(new Vehicle(int(random(0,1.99)), color(random(255), random(255), random(255)), 0, random(height * 0.5, height * 0.78), 0, random(1, 15)));
    }
  }
}

function keyPressed(){
  // makes the traffic light red for 2 seconds
  if (keyCode === 32){
    trafficTimer = 0;
    keyCode = 0;
  }
}

function drawRoad(){
  // for drawing the road.
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
    // draw car or truck, depending on type
    fill(this.c);
    if(this.type === 0){
      rect(this.x, this.y, 50, 20);
      noStroke;
      fill(255);
      if (this.direction === 0){
        rect(this.x + 45, this.y + 3, 5, 5);
        rect(this.x + 45, this.y + 12, 5, 5);
      }
      else{
        rect(this.x, this.y + 3, 5, 5);
        rect(this.x, this.y + 12, 5, 5);
      }
      rect(this.x + 8, this.y - 2, 10, 3);
      rect(this.x + 28, this.y - 2, 10, 3);
      rect(this.x + 8, this.y + 19, 10, 3);
      rect(this.x + 28, this.y + 19, 10, 3);
    }
    else{
      rect(this.x, this.y, 60, 40);
      fill(255);
      if(this.direction === 0){
        rect(this.x + 45, this.y + 5, 10, 30);
      }
      else{
        rect(this.x + 5, this.y + 5, 10, 30);
      }
    }
  }

  move(){
    // move forward based on speed, but not if the light is red
    if(trafficLight === false){
      this.x += this.xSpeed;
      if (this.x > width){
        this.x = 0;
      }
      if (this.x < 0){
        this.x = width;
      }
    }
  }

  speedUp(){
    // raise speed to any number between current speed and 15
    if (this.direction === 0){
      this.xSpeed = random(this.xSpeed, 15);
    }
    else{
      this.xSpeed = random(-15, this.xSpeed);
    }
  }

  speedDown(){
    // reduce speed to any number between 1 and current speed
    if (this.direction === 0){
      this.xSpeed = random(1, this.xSpeed);
    }
    else{
      this.xSpeed = random(this.xSpeed, -1);
    }
  }

  changeColor(){
    // change car color to something random
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    // run movement and display, with a 1% chance to speed up or slow down, and a 0.5% chance to change color
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
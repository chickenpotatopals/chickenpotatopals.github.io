// Object-Object Interactions
// Elijah Bebrick
// Oct 16th, 2026

let nodes = [];
let reach = 200;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 10);
  // if no deletions, loop by item
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}


function mousePressed(){
  if(mouseButton.left){
    nodes.push(new Doink(mouseX, mouseY));
  }
  else if(mouseButton.center){
    for (let i = 0; i < 30; i++){
      nodes.push(new Doink(mouseX, mouseY));
    }
  }
}

class Doink{
  constructor(x, y){
    this.x = x;  this.y = y; this.size = 5;
    this.c = color(random(255), random(255), random(255));

    this.xTime = random(100); this.yTime = random(100);
    this.timeShift = 0.01;  this.maxSpeed = 5;
  }

  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    // use perlin noise for x, y movement
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.x += xSpeed;
    this.xTime += this.timeShift;
    if(this.x > width + 2){
      this.x = 0;
    }
    if (this.x < -2){
      this.x = width;
    }

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.y += ySpeed;
    this.yTime += this.timeShift;
    if(this.y > height + 2){
      this.y = 0;
    }
    if (this.y < -2){
      this.y = height;
    }
  }

  connect(nodeArray){
    // check if the current Doink is close to any
    // other Doink, and draw a line between pairs
    stroke(this.c);
    for(let n of nodeArray){
      if(n !== this){ // dont compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}
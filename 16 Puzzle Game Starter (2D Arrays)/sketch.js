// 2D Arrays, Puzzle Starter
// Elijah Bebek
// Nov 3rd, 2026 (6 DAYS UNTIL GOON SAUCE)

// grid sized 6 x 5
// 0 (black) - 255 (white)

let grid = [
  [0,   255,  0,   255,  0,   255],
  [255, 0,    255, 0,    255, 0  ],
  [255, 255,  255, 255,  255, 255],
  [0,   0,    0,   0,    0,   0  ],
  [0,   0,    0,   0,    0,   0  ],
];

let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

async function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
  randomize();
}

function draw() {
  background(220);
  renderGrid();
  drawLocation();
  drawOverlay();
  if(checkForWin()){
    text("YOU WIN!", width / 2, height / 2);
  }
}

function mousePressed(){
  // only do a flip if mouse is on the canvas
  if(mouseX < width && mouseY < height){
    let x = getCurrentX();
    let y = getCurrentY();

    // ALWAYS:
    flip(x, y);

    // IF THEY EXIST, FLIP THE CARDINAL NEIGHBORS:
    if (keyCode === 16 && keyIsPressed){
      let doNothing = 0;
    }
    else{
      if (x + 1 <= cols - 1){
        flip(x + 1, y);
      }
      if (x - 1 >= 0){
        flip(x - 1, y);
      }
      if (y + 1 <= rows - 1){
        flip(x, y + 1);
      }
      if (y - 1 >= 0){
        flip(x, y - 1);
      }
    }
  }
}

function renderGrid(){
  // interpret the data stored in 2D array
  // and draw a matrix to square to reflect
  //it.
  for (let y = 0; y < rows; y++){ // y:01234
    for (let x = 0; x < cols; x++){ // x:012345
      fill(grid[y][x]);
      square(x * tileSize, y * tileSize, tileSize);
    }
  }
}

function drawLocation(){
  // draws the row/column of the mouse next to the mouse
  let constrainedX = constrain(floor(mouseX / 60), 0, floor(width / 60));
  let constrainedY = constrain(floor(mouseY / 60), 0, floor(height / 60));
  fill("red");
  text(constrainedX + "," + constrainedY, mouseX, mouseY);
}

function getCurrentX(){
  // locates the current X of the mouse, in columns
  let constrainedX = constrain(floor(mouseX / 60), 0, floor(width / 60));
  return constrainedX;
}

function getCurrentY(){
  // locates the current Y of the mouse, in rows
  let constrainedY = constrain(floor(mouseY / 60), 0, floor(height / 60));
  return constrainedY;
}

function flip(x, y){
  // flips a black square to white, and white square to black
  if (grid[y][x] === 255){
    grid[y][x] = 0;
  }
  else{
    grid[y][x] = 255;
  }
}

function checkForWin(){
  let longness = grid.length;
  let whites = 0;
  let blacks = 0;
  for (let x = 0; x < longness; x++){
    for (let y = 0; y < grid[x].length; y++){
      if (grid[x][y] === 0){
        blacks++;
      }
      else if (grid[x][y] === 255){
        whites++;
      }
    }
  }
  if (whites === 30 || blacks === 30){
    return true;
  }
  return false;
}

function drawOverlay(){
  fill(0, 255, 0, 150);
  square(getCurrentX() * tileSize, getCurrentY() * tileSize, tileSize);
  if (keyCode === 16 && keyIsPressed){
    let doNothing = 0;
  }
  else{
    square(getCurrentX() * tileSize + tileSize, getCurrentY() * tileSize, tileSize);
    square(getCurrentX() * tileSize - tileSize, getCurrentY() * tileSize, tileSize);
    square(getCurrentX() * tileSize, getCurrentY() * tileSize + tileSize, tileSize);
    square(getCurrentX() * tileSize, getCurrentY() * tileSize - tileSize, tileSize);
  }
}

function randomize(){
  for(let x = 0; x < grid.length; x++){
    for(let y = 0; y < grid[x].length; y++){
      grid[x][y] = random([0, 255]);
    }
  }
}
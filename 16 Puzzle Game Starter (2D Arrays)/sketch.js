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
  [255, 255,  0,   255,  255, 0  ],
];

let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;

async function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
}

function draw() {
  background(220);
  renderGrid();
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
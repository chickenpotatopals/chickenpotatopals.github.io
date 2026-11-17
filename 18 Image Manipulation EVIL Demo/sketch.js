// Image Manipulation EVIL Demo
// Elijah Biebrick
// November 16th 2026 (7 DAYS AFTER PEAK)


async function loadAssets(){
  chip = await loadImage("/assets/chip.jpg");
  hand = await loadImage("/assets/hand.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
  race = await loadImage("/assets/race.jpg");
  young = await loadImage("/assets/youngelijah.jpg");
  dumb = await loadImage("/assets/dumbelijah.jpg");
  stalking = await loadImage("/assets/stalkingkingston.jpg");

}

async function setup() {
  await loadAssets();
  createCanvas(600, 600);
  myVideo = createCapture(VIDEO);
  myVideo.hide();
  pixelDensity(1);
  frameRate(30);
}

function draw() {
  background(220);
  // image library, uncomment image to pick it

  image(myVideo, 0, 0);
  // image(chip, 0, 0);
  // image(hand, 0, 0);
  // image(nuit, 0, 0);
  // image(race, 0, 0);
  // image(young, 0, 0);
  // image(dumb, 0, 0);
  // image(stalking, 0, 0);

  loadPixels();
  // effect library, uncomment effect to use it

  // majorityColor();
  // FUCKRIGHTGREEN();
  // posteriorize();
  theHirror();
  // theEvilHirror();


  updatePixels();
}

function majorityColor(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let c = getColors(x, y);
      let r = c[0];
      let g = c[1];
      let b = c[2];
      if (r >= g && r >= b){
        r = 255;
        g = 0;
        b = 0;
      }
      else if (g >= r && g >= b){
        r = 0;
        g = 255;
        b = 0;
      }
      else{
        r = 0;
        g = 0;
        b = 255;
      }
      setPixel(x, y, r, g, b);
    }
  }
}

function FUCKRIGHTGREEN(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < width; y++){
      let c = getColors(x, y);
      if(x > width / 2){
        setPixel(x, y, c[0], 0, c[2]);
      }
      else{
        setPixel(x, y, c[0], c[1], c[2]);
      }
    }
  }
}

function posteriorize(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < width; y++){
      let avg = getAvg(x, y);
      let r, g, b;
      if (avg > 205){
        r = 170;
        g = 230;
        b = 220;
      }
      else if (avg > 155){
        r = 105;
        g = 150;
        b = 210;
      }
      else if (avg > 105){
        r = 120;
        g = 180;
        b = 60;
      }
      else if (avg > 55){
        r = 130;
        g = 30;
        b = 130;
      }
      else{
        r = 90;
        g = 10;
        b = 50;
      }
      setPixel(x, y, r, g, b);
    }
  }
}

function theHirror(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < width; y++){
      let c = getColors(x, y);
      if (x > 300){
        h = map(x, 300, 600, 300, 0);
      }
      else{
        h = x;
      }
      setPixel(h, y, c[0], c[1], c[2]);
    }
  }
}

function theEvilHirror(){
  for(let x = 0; x < width; x++){
    for(let y = 0; y < width; y++){
      let c = getColors(x, y);
      if (x < 300){
        h = map(x, 0, 300, 600, 300);
      }
      else{
        h = x;
      }
      setPixel(h, y, c[0], c[1], c[2]);
    }
  }
}

function setPixelOneD(pos, r, g, b){
  // pos = 1d location of pixel's red component
  // r, g, b = new color values (0-255) for that pixel
  pixels[pos] = constrain(r, 0, 255);
  pixels[pos + 1] = constrain(g, 0, 255);
  pixels[pos + 2] = constrain(b, 0, 255);
}

function setPixel(x, y, r, g, b){
  let index = (y * width + x) * 4;
  setPixelOneD(index, r, g, b);
}

function getAvg(x, y){
  let index = (y * width + x) * 4;
  let d = pixels[index] + pixels[index + 1] + pixels[index + 2];
  return d / 3;

}

function getColors(x, y){
  let index = (y * width + x) * 4;
  return [pixels[index], pixels[index + 1], pixels[index + 2]];
}
// Objects Demo
// Elligja Biebrick
// October 14th, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBook;
let jacksCoolness;
let jacksPornCatalogue;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("How To Be Like Epstein", "Jeffery Epstein", 1, "hardcover", 500, 100);
  jacksCoolness = new Book("Jack's Coolness", "Jack Breckon", 658976389, "leatherbound", 400, 200);
  jacksPornCatalogue = new Book("Porn", "Jack Breckon", 8193658165, "softcover", 1000, 300);
  elijah = new Book("Elijah", "Elijah Biebrick", 1283653871265, "softcover", 300, 400);
  racism = new Book("Racism", "Jack Breckon", 1, "hardcover", 2000, 550);
}

function draw() {
  background(220);
  myBook.display();
  jacksCoolness.display();
  jacksPornCatalogue.display();
  elijah.display();
  racism.display();
}


// Classes are nicely organized into the bottom of
// our file, or perhaps their own file...

class Book{
  //1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. class functions
  display(){
    //render our book object on the canvas
    rectMode(CENTER);  textAlign(CENTER, CENTER);
    textSize(20);

    // set fill color based on coverType (H, S, L)
    switch(this.cover){
      case "softcover":
        fill(220, 220, 0); break;
      case "hardcover":
        fill(100, 255, 255); break;
      case "leatherbound":
        fill(150, 0, 150); break;
    }
    // finally, draw the book spine
    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2);
  }
}
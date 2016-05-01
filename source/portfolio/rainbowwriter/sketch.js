// I wanted to capture each individual key pressed and make that a individual stroke that paints the canvas.
// Each is unique in it's position, location, and size. As each letter appears, it's unique stroke starts to 
// paint the canvas and with a mouse click the piece is saved for prosperity and the canvas resets.

// go ahead - start typing.


var palette = []; 
var letterVar;

function setup () { 
  createCanvas(windowWidth, windowHeight);
}

function draw () {
  
}

function keyReleased() {
  fill(random(0, 255), random(0, 255), random(0, 255), 64);
  text(key, random(-100,width+100), random(-100, height+100));   
  textSize(random(24,400));
}

function mousePressed(){
  background(255);
}
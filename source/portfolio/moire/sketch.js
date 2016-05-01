var star;
var r = 0;
var g = 0;
var b = 0;
var speed = 15;
var song;
wave = 255;
var circle = {
  x:500,
  y:300,
  starSize:0
};

function preload() {
  song = loadSound('assets/drop.mp3');
  song.setVolume(0.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(r, g, b,0);
}

function draw() {
  // fill(248, 255, 14);
  fill(r, g, b,0);
  stroke(255, 255, 255);
  strokeWeight(1);

  if (mouseIsPressed===true){
      circle.starSize = circle.starSize + speed; 
      ellipse(circle.x, circle.y, circle.starSize++, circle.starSize++);
  }
  
  if (circle.starSize > windowWidth * 2.5 && circle.starSize > windowHeight * 2.5) {
    circle.starSize = 0;
    wave = 255;
    stroke(255, 255, 255);
    song.play();
  }
}

function mousePressed() {
  background(r, g, b,0);
  circle.starSize = 0;
  wave = 255;
  circle.x=mouseX; 
  circle.y=mouseY;
  song.play();
  stroke(255, 255, 255);
}

function keyReleased() {
  if (key == 1) {
    background(r, g, b);
    speed = 5;
  }
  if (key == 2) {
    background(r, g, b);
    speed = 10;
  }
  if (key == 3) {
    background(r, g, b);
    speed = 15;
  }
  if (key == 4) {
    background(r, g, b);
    speed = 20;
  }
  else if (key == ' '){
    background(0);
  }
}
var star;
var r = 3;
var g = 193;
var b = 235;
var speed = 5;
var song;
wave = 255;
var circle = {
  x:500,
  y:300,
  starSize:50
};

function preload() {
  song = loadSound('assets/drop.wav');
  pond = loadSound('assets/pond.ogg');
  song.setVolume(0.2);
  pond.setVolume(0.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(r, g, b);
  fill(r, g, b);
  pond.loop();
}

function draw() {
  fill(r, g, b);
  stroke(3, 232, 235, wave -= 2);
  strokeWeight(5);
  
 ellipse(circle.x, circle.y, circle.starSize++, circle.starSize++);
  
  if (circle.starSize > windowWidth * 2 && circle.starSize > windowHeight * 2) {
    circle.starSize = 10;
    wave = 255;
    stroke(3, 232, 235, wave -= 5);
    song.play();
  } else {
    circle.starSize = circle.starSize + speed;
  }
}

function mousePressed() {
  background(r, g, b);
  circle.starSize = 10;
  wave = 255;
  ellipse(circle.x=mouseX, circle.y=mouseY, circle.starSize++, circle.starSize++);
  song.play();
  stroke(3, 232, 235, wave -= 2);
}
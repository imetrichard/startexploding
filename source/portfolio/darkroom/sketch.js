rectMode(CENTER);
var song;

function preload() {
  song = loadSound('assets/scream.mp3'); 
  song.setVolume(0.3);
}

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(255,0,0);
  ellipse(350,100,20,10)
  ellipse(400,100,20,10)
  if(mouseX>300 && mouseY<125 && mouseX<400){
    song.play();
    fill(255,255,204);
    ellipse(mouseX,mouseY,400,400);
    fill(255);
    stroke(0);
    ellipse(375,100,100,100);
    rect(350,140,10,30)
    rect(360,140,10,30)
    rect(370,140,10,30)
    rect(380,140,10,30)
    rect(390,140,10,30)
    fill(0);
    triangle(370,100,380,100,375,120);
    fill(255,0,0);
    ellipse(350,100,20,10)
    ellipse(400,100,20,10)
  }else{
    song.stop();
    fill(255,255,204);
    ellipse(mouseX,mouseY,40,40);
  }

  print(mouseX);
}
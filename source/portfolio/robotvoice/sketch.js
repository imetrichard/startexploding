var i;
var mic, fft;
var eye;
var circle1X;
var circle2X;
var bg;
var sqx;
var sqY;

function setup () {
  mic = new p5.AudioIn();
  mic.start();
  // fft = new p5.FFT();
  // fft.setInput(mic);
  
  colorMode(HSB, 360, 100, 100);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  noCursor();
}

function draw () {
  // var spectrum = fft.analyze();
  var bg = map(mouseX, 0, width, 255, 0);
  background(bg, 100, 100);
  fill(28, 10, 28);
  var sqX = map(mouseX, 0, width, width/2-10, width/2+10);
  var sqY = map(mouseX, 0, width, height/2-10, height/2+10);
  rect(sqX, sqY, width/2, height-200, 5);
  fill(0, 255, 255);
  var circle1X = map(mouseX, 0, width, width/2-150, width/2-175);
  var circle2X = map(mouseX, 0, width, width/2+150, width/2+175);
  ellipse(circle1X, height/2-150, width/10, width/10);
  ellipse(circle2X, height/2-150, width/10, width/10);
  
  var vol = mic.getLevel();
  fill(150, 255, 255);
  var m = map(vol, 0, 1, 40, 375);
  rect(sqX, height/2+125, width/2,m);
  
  // for (i = 0; i<spectrum.length; i+= 50) {
  //   var radius = map(spectrum[i], 60, 255, 20, 175);
  //   fill(150, 255, 255);
  //   rect(sqX, height/2+125, width/2,radius);
  // }
}
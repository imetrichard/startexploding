function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();
}

function preload() {
  glitch = loadSound('assets/glitch.wav');
}

function draw() {
  for (var i=0; i<height; i++){
  var col = 0 + i;
  map(mouseY,0,height,0,255);
  stroke(0+col-mouseY, 255-col+mouseY, 125+col-mouseY); 
  line(0,i,width,i)
  }
  var ah = dist(pmouseX, pmouseY, mouseX, mouseY)
  if (ah>20){
    glitch.play();
  }
}
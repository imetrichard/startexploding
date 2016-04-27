var w = 25;
var h = 25;
var speedx = 0;
var speedy = 0;
var ypos = 250;
var xpos = 250;

function setup() {
  createCanvas(500, 500);
  // background(177,217,157); 
}

function draw() {
  noStroke();
  updatePosition();
  background(xpos/3,ypos/3,ypos)
  fill(255);
  // background(177,217,157); 
  rect(xpos, ypos, w, h);
  
  if (xpos>=475 || xpos<=0) {
   speedx = 0;
   gameOver();
  }
  if (ypos>=475 || ypos<=0) {
   speedy = 0;
   gameOver();
  }
}

function updatePosition() {
  ypos = ypos + speedy;
  xpos = xpos + speedx;
}

function gameOver() {
  background(255,0,50)
  textAlign(CENTER);
  textSize(32);
  text("Don't Touch the Edge", 250, 250);
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    speedx = 0;
    speedy += 5;
  }
  if (keyCode === UP_ARROW) {
    speedx = 0;
    speedy -= 5;
  }
  if (keyCode === LEFT_ARROW) {
    speedy = 0;
    speedx -= 5;
  }
  if (keyCode === RIGHT_ARROW) {
    speedy = 0;
    speedx += 5;
  }
}
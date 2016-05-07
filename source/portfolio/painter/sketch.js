var w;
var bMultiplier = 0.6;
var bug = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  w = new Walker();
  c = new Walker();
  for (var i=0; i<300; i++) {
    bug.push(new Walker());
  }
  noStroke();
}

function draw() {
  for (var i=0; i<bug.length; i++) {
    bug[i].update();
    bug[i].display();
  }
  w.update();
  w.display();
}

function Walker() {
  var xoff = 1;
  var yoff = 1;
  // this.diameter = random(10,40);
  this.diameter = 1;
  this.x = noise(xoff) * width;
  this.y = noise(yoff) * height;
  this.pos = createVector (width / 2, height / 2);
  this.pos = createVector (random (0,width), random(0,height));
  this.vel = createVector(noise(xoff) * width,noise(yoff) * height);
  this.vel.mult(0.0001);
  this.col = random(0,255);
  
  var maxX = width;
  var maxY = height;
  var minPos = this.diameter/2;
  
  this.update = function (){
  var distance = dist(mouseX,mouseY,this.pos.x,this.pos.y);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  
  if (shouldMove(this.pos, this.vel, minPos, maxX, maxY)) {
    this.pos.x = constrain(this.pos.x + this.vel.x, minPos, maxX);
    this.pos.y = constrain(this.pos.y + this.vel.y, minPos, maxY);
  } else {
    // shouldn't move!
    reverseVector(this.vel);
    this.vel.sub(this.acc)
    this.vel.mult(0.2);
  }
  
  this.acc.setMag(0.04);
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  // this.acc.setMag(random(0.001,0.4));
  }
  
  this.display = function () {
    fill(this.col,30);
    // stroke(135,186,141);
    ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
  }
}

function shouldMove(currentPosition, currentVelocity, min, maxX, maxY) {
  var nextX = currentPosition.x + currentVelocity.x;
  var nextY = currentPosition.y + currentVelocity.y;
  
  if (nextX > maxX || nextX < min || nextY > maxY || nextY < min) {
    return false;
  }
  return true;
}

function reverseVector (vector) {
  vector.x = vector.x * -1;
  vector.y = vector.y * -1;
  return vector;
}

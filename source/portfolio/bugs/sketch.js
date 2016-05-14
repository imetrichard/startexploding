var bMultiplier = 0.6;
var bug = [];

function preload() {
  buzz = loadSound('assets/music.mp3');
  click = loadSound('assets/click.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  w = new Walker();
  c = new Walker();
  for (var i=0; i<1000; i++) {
    bug.push(new Walker());
  }
  noStroke();
  click.rate(2);
  click.loop(0);
  click.loop(.25);
  click.loop(.5);
  click.loop(.75);
  click.loop(.85);
  click.loop(1);
}

function draw() {
  // background(187,233,219);
  background(255);
  for (var i=0; i<bug.length; i++) {
    bug[i].update();
    bug[i].display();
  }
}

function Walker() {
  // var xoff = 1;
  // var yoff = 1;
  // this.diameter = random(10,20);
  this.diameter = 15;
  this.x = noise(xoff) * width;
  this.y = noise(yoff) * height;
  this.pos = createVector (width / 2, height / 2);
  this.vel = createVector(noise(xoff) * width,noise(yoff) * height);
  this.vel.mult(0.0001);
  this.col = random(0,255);
  this.where = this.pos.x + this.vel.x;
  
  var maxX = width + this.diameter*2;
  var maxY = height + this.diameter*2;
  var minPos = 0-this.diameter*2;
  
  this.update = function (){
  var distance = dist(mouseX,mouseY,this.pos.x,this.pos.y);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));
  
  if (shouldMove(this.pos, this.vel, minPos+10, maxX-10, maxY-10)) {
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
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
  }
  
  if (this.where == this.where) {
    println("collision");
    reverseVector(this.vel);
    // this.vel.sub(this.acc)
    this.vel.mult(4);
  }
  else {
    // not colliding
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

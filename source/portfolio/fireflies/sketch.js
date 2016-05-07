var bMultiplier = 0.6;
var bug = [];

function preload() {
  buzz = loadSound('assets/music.mp3');
  click = loadSound('assets/click.wav');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i<20; i++) {
    bug.push(new Walker());
  }
  noStroke();
  buzz.loop();
}

function draw() {
  buzz.rate(0.5);
  background(20);
  for (var i=0; i<bug.length; i++) {
    bug[i].update();
    bug[i].display();
  }
}

function Walker() {
  var xoff = 1;
  var yoff = 1;
  // this.diameter = random(10,20);
  this.diameter = 20;
  this.x = noise(xoff) * width;
  this.y = noise(yoff) * height;
  this.pos = createVector (width / 2, height / 2);
  this.vel = createVector(noise(xoff) * width,noise(yoff) * height);
  this.vel.mult(0.0001);
  this.col = random(0,255);
  this.where = this.pos.x + this.vel.x;
  
  var maxX = width - this.diameter/2-5;
  var maxY = height-height/4 - this.diameter/2-5;
  var minPos = this.diameter/2+5;
  
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
    // ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    strokeWeight(50)
    stroke(253, 241, 150,random(0,10));
    fill(253, 241, 150,10);  
    ellipse(this.pos.x+5, this.pos.y+15, 30, 30);
    noStroke();
    fill(random(225,255),50); 
    ellipse(this.pos.x-random(0,5)+this.vel.x, this.pos.y+random(10,15)+this.vel.x, this.diameter-random(0,10), this.diameter);
    ellipse(this.pos.x-random(0,5)+random(10,15)+this.vel.x, this.pos.y+15+random(this.vel.y,this.vel.y+2),this.diameter-random(0,10), this.diameter);
    fill(253, 241, 150);   
    ellipse(this.pos.x+random(3,5), this.pos.y+random(14,15), this.diameter-15, this.diameter-10);
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

var bMultiplier = 0.6;
var bug = [];
var tree;

function preload() {
  buzz = loadSound('assets/music.mp3');
  tree = loadImage("assets/tree.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i<75; i++) {
    bug.push(new Walker());
  }
  noStroke();
  buzz.loop();
}

function draw() {
  buzz.rate(0.5);
  background(25);
  for (var i=0; i<bug.length; i++) {
    bug[i].update();
    bug[i].display();
  }
  image(tree, 0, 0,width,height);
}

function Walker() {
  var xoff = 1;
  var yoff = 1;
  // this.diameter = random(10,20);
  this.diameter = 20;
  this.x = noise(xoff) * width;
  this.y = noise(yoff) * height;
  this.pos = createVector (random(width/2-200,width/2+200),random(height/2-200,height/2+200));
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
  
  this.acc.setMag(0.05);
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  // this.acc.setMag(random(0.001,0.4));
  }
  
  this.display = function () {
    strokeWeight(random(30,40));
    stroke(253, 241, 150,random(20,30));
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

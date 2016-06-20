var bMultiplier = 0.6;
var bug = [];
var tree;

// preload music and assets
function preload() {
  buzz = loadSound('assets/music.mp3');
  tree = loadImage("assets/grass.png");
}


// define # of walkers in a for loop and pushes them out
function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i<50; i++) {
    bug.push(new Walker());
  }
  noStroke();
//  buzz.loop();
}

// Create the array of bugs
function draw() {
//  buzz.rate(0.5);
  background(63,184,175);
  for (var i=0; i<bug.length; i++) {
    bug[i].update();
    bug[i].display();
  }
  // (tree,xpos, yos, size, size)
  image(tree, 0, height-height/2,width,height/2);
}

// Individual bug
function Walker() {
  var xoff = 1;
  var yoff = 1;

  this.diameter = 20;
  this.x = noise(xoff) * width;
  this.y = noise(yoff) * height;
  this.pos = createVector (random(width/2-200,width/2+200),random(height/2-200,height/2+200));
  this.size = createVector (random(5,20),random(5,20));
  this.scaleFactor = random(0.2,1);
  this.vel = createVector(noise(xoff) * width,noise(yoff) * height);
  this.col = random(0,255);
  this.where = this.pos.x + this.vel.x;
  this.vel.mult(0.0001);

  var maxX = width - this.diameter/2-5;
  var maxY = height-height/4 - this.diameter/2-5;
  var minPos = this.diameter/2+5;

  this.update = function (){
  var distance = dist(mouseX,mouseY,this.pos.x,this.pos.y);
  this.acc = p5.Vector.fromAngle(random(TWO_PI));

// Stops it when it hits the screen edge
  if (shouldMove(this.pos, this.vel, minPos+10, maxX-10, maxY-10)) {
    this.pos.x = constrain(this.pos.x + this.vel.x, minPos, maxX);
    this.pos.y = constrain(this.pos.y + this.vel.y, minPos, maxY);
  } else {
    // shouldn't move!
    reverseVector(this.vel);
    this.vel.sub(this.acc);
    this.vel.mult(0.2);
  }

  this.acc.setMag(0.05);
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  }

// Loads all the pieces

  this.display = function () {
    this.light();
    this.wings();
    this.body();
  }

  this.body = function (){
    noStroke();
    if (this.scaleFactor <=0.3){
      fill(254,251,175,100);
    } else if (this.scaleFactor <0.7 && this.scaleFactor >0.3){fill(254,251,175,150);}
    else {fill(254,251,175);}
    ellipse(this.pos.x+5, this.pos.y+15, this.diameter*this.scaleFactor-15*this.scaleFactor, this.diameter*this.scaleFactor-10*this.scaleFactor);
  }
// The wings. Made from size changing ellipses.
  this.wings = function (){
    noStroke();
    if (this.scaleFactor <=0.3){
      fill(random(225,255),20);
    } else if (this.scaleFactor <0.7 && this.scaleFactor >0.3){fill(random(225,255),50);}
    else {fill(random(225,255),70);}

    if (this.scaleFactor <0.3){
      ellipse(this.pos.x+4, this.pos.y+16, this.diameter*this.scaleFactor-random(0,5), this.diameter*this.scaleFactor);
      ellipse(this.pos.x+7, this.pos.y+16,this.diameter*this.scaleFactor-random(0,5), this.diameter*this.scaleFactor);
    }
    else if (this.scaleFactor <0.7){
      ellipse(this.pos.x+2, this.pos.y+15+this.vel.x, this.diameter*this.scaleFactor-random(0,10)*this.scaleFactor, this.diameter*this.scaleFactor);
      ellipse(this.pos.x+7, this.pos.y+15+random(this.vel.y,this.vel.y+2),this.diameter*this.scaleFactor-random(0,10)*this.scaleFactor, this.diameter*this.scaleFactor);
    }
    else {
      ellipse(this.pos.x, this.pos.y+14+this.vel.x, this.diameter*this.scaleFactor-random(0,10)*this.scaleFactor, this.diameter*this.scaleFactor);
      ellipse(this.pos.x+10, this.pos.y+14+random(this.vel.y,this.vel.y+2),this.diameter*this.scaleFactor-random(0,10)*this.scaleFactor, this.diameter*this.scaleFactor);
    }
  }
// The light. Used stroke weight to create size effect
  this.light = function (){
    strokeWeight(random(30,40)*this.scaleFactor);
    if (this.scaleFactor <=0.3){
      stroke(253, 241, 150,random(10,20));
    } else if (this.scaleFactor <0.8 && this.scaleFactor >0.3){stroke(253, 241, 150,random(20,30));}
    else {stroke(253, 241, 150,random(30,40));}
    fill(253, 241, 150,0);
    ellipse(this.pos.x+5, this.pos.y+15, 20*this.scaleFactor, 20*this.scaleFactor);
  }
}

// Don't leave canvas
function shouldMove(currentPosition, currentVelocity, min, maxX, maxY) {
  var nextX = currentPosition.x + currentVelocity.x;
  var nextY = currentPosition.y + currentVelocity.y;

  if (nextX > maxX || nextX < min || nextY > maxY || nextY < min) {
    return false;
  }
  return true;
}

// Turns when hits wall
function reverseVector (vector) {
  vector.x = vector.x * -1;
  vector.y = vector.y * -1;
  return vector;
}

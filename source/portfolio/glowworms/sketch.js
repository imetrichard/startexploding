var planet = [];
var xoff, yoff = 0.0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i<15; i++) {
    planet.push(new Create());
  }
  noStroke();
}

function draw() {
  background(255);
  for (var i=0; i<planet.length; i++) {
    planet[i].move();
    planet[i].display();
  }
}

function Create() {
  this.diameter = random(5, 40);
  this.col = random(122,197);
  this.pos = createVector(random(width/2-200,width/2+200), random(height/2-200,height/2+200));
  this.vel = createVector(0,0);
  var nx = noise(xoff)*width;
  var ny = noise(yoff)*width;
  // norm(this, lowerBound, upperBound)

  this.move = function() {
    var mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(mouse,this.pos);
    this.acc.setMag(random(0.009,0.05));
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };

  this.display = function() {
    fill(17,this.col,240);
    ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    this.pos.x = constrain(this.pos.x,0-this.diameter,width+this.diameter)
    this.pos.y = constrain(this.pos.y,0-this.diameter,height+this.diameter)
    
    if (this.pos.x>pmouseX){
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }
    if (this.pos.y>pmouseY){
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }
  };
}
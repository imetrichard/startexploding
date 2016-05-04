var c;
var planet = [];
var easing = 0.05;

function setup() {
  createCanvas(windowWidth,windowHeight);
  c = new Create();
  for (var i=0; i<30; i++) {
    planet.push(new Create());
  }
  noStroke();
}

function draw() {
  background(0);
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

  this.move = function() {
    var mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(mouse,this.pos);
    // this.acc.mult(random(0.001,0.00));
    this.acc.setMag(random(0.001,0.4));
        
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };

  this.display = function() {
    fill(17,this.col,240);
    ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    if (this.pos.x>pmouseX){
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter+20*easing);
    }
    if (this.pos.y>pmouseY){
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter-20*easing);
    }
  };
}
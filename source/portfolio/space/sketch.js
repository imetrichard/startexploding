var r = 3;
var g = 193;
var b = 235;
var img;
var x = 0.0;
var y = 0.0;
var easing = 0.025;
var speed = 1;

var star = [];

function preload() {
  song = loadSound('assets/peace.wav');
  song.setVolume(0.3);
  blow = loadSound('assets/blow.wav');
  blow.setVolume(0.2);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/astro.png");
  background(0);
  song.loop();
  noCursor();
  for (var i=0; i<30; i++) {
    star.push(new Create());
  }
}

function draw() {
  background(0);
  targetX = mouseX ;
  dx = targetX - x;
  x += dx * easing;
  targetY = mouseY
  dx = targetY - y;
  y += dx * easing;
  for (var i=0; i<star.length; i++) {
    star[i].move();
    star[i].display();
  }
  if (mouseX>pmouseX+1 || mouseY>pmouseY+1){
    blow.stop();  
    blow.play();  
  }
  image(img, x += random(0, speed), y+= random(0, speed),img.width/2,img.height/2); 
}

function Create() {
  this.x = random(width);
  this.y = random(height)
  this.diameter = random(5, 40);
  this.speed = 1; 
  this.xdirection = random(-1,1);
  this.ydirection = random(-1,1);

  this.move = function() {
    this.x += (this.speed * this.xdirection);
    this.y += (this.speed * this.ydirection);
    // Makes just jiggle;
    // this.x += random(-this.speed, this.speed);
    // this.y += random(-this.speed, this.speed);
    if (this.x > width || this.y > height) {
      this.speed = - 1;   
    } 
    if (this.x < 0 || this.y < 0){
      this.speed = + 1;
    }
    
    if (this.x > width-this.diameter || this.x < this.diameter) {
      this.xdirection *= -1;
    }
    if (this.y > height-this.diameter || this.y < this.diameter) {
      this.ydirection *= -1;
    }
  };

  this.display = function() {
    fill(246, 244, 157);
    stroke(250,249,204,random(50,155));
    strokeWeight(random(0,15));
    
    ellipse(this.x, this.y, this.diameter, this.diameter);
    
  };
}
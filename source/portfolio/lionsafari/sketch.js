var mane = 300;
var face = 175;
var eye = 20;

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  var mouthWidth = mouseY/3;
  stroke(0,0)
  noCursor();
  background(0,mouseX,mouseY);
  fill(255,165,0);
  ellipse(mouseX,mouseY,mane,mane);
  fill(239,220,6);
  ellipse(mouseX,mouseY,face,face);
  fill(0,0,0)
  ellipse(mouseX-30,mouseY-20,eye,eye);
  ellipse(mouseX+30,mouseY-20,eye,eye);
  // triangle(mouseX-20,mouseY,mouseX+20,mouseY,mouseX,mouseY+20);
  fill(255,0,0);
  ellipse(mouseX, mouseY,15,20)
  fill(96,48,24);
  if (mouthWidth<150) {
      arc(mouseX,mouseY+30,mouthWidth,70,0,PI)
      mouthWidth = mouseY/3;
  }
  else {
      arc(mouseX,mouseY+30,130,70,0,PI)
  } 
}

function touchStarted(){
  var mouthWidth = touchY/3;
  stroke(0,0)
  noCursor();
  background(0,touchX,touchY);
  fill(255,165,0);
  ellipse(touchX,touchY,mane,mane);
  fill(239,220,6);
  ellipse(touchX,touchY,face,face);
  fill(0,0,0)
  ellipse(touchX-30,touchY-20,eye,eye);
  ellipse(touchX+30,touchY-20,eye,eye);
  // triangle(mouseX-20,mouseY,mouseX+20,mouseY,mouseX,mouseY+20);
  fill(255,0,0);
  ellipse(touchX, touchY,15,20)
  fill(96,48,24);
  if (mouthWidth<150) {
      arc(touchX,touchY+30,mouthWidth,70,0,PI)
      mouthWidth = touchY/3;
  }
  else {
      arc(touchX,touchY+30,130,70,0,PI)
  } 
}


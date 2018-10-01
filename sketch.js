function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255, 160, 122);
  angleMode(DEGREES);
  frameRate(100);
}

function draw() {
  // put drawing code here

//line1
  stroke('#D52C4A');
  strokeWeight(2);

  push();
  translate(width/6 ,height/2);
  scale(0.5)
  rotate(frameCount*180);
  line(sin(frameCount)*300,cos(frameCount)*300,cos(90)*300,sin(90)*300);
  pop();

  if (frameCount == 360) {noLoop();}

//line2
  stroke(lerpColor(color('#D52C4A'), color('#5B1647'), frameCount/220));
  strokeWeight(2);

  push();
  translate(width/2 ,height/2);
  scale(0.5)
  rotate(frameCount*2);
  strokeWeight(1);
  line(sin(frameCount*3)*300,cos(frameCount*3)*300,cos(90)*300,sin(90)*300);
  pop();

  if (frameCount == 360) {noLoop();}

//line3
  stroke('#5B1647');
  strokeWeight(3);

  push();
  translate(width/1.2 ,height/2);
  scale(0.5)
  rotate(frameCount*3);
  strokeWeight(1);
  line(sin(frameCount*2)*300,cos(frameCount*2)*300,cos(90)*300,sin(90)*300);
  pop();

  if (frameCount == 360) {noLoop();
  }


}

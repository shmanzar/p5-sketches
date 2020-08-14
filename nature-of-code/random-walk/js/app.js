
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
    stroke(0);
    point(this.x, this.y);
  }
}

var x = 0;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;
  y = 200;
  background(51);

  // Put setup code here
}

function draw() {
  // Put drawings here
  stroke(255);
  strokeWeight(2);
  point(x,y);
  var r = floor(random(4));
  
  switch(r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
    case 4:
      break;
  }

}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};

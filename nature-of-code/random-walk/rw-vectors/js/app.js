
class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  update() {
   this.pos.x = this.pos.x + random(-1, 1);
   this.pos.y = this.pos.y + random(-1, 1);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

function setup() {
    // Put setup code here
  createCanvas(450, 450);
  walker = new Walker(100, 100);
  background(51);

}

function draw() {
  // Put drawings here

  walker.update();
  walker.show();  

}

// This Redraws the Canvas when resized
windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
};
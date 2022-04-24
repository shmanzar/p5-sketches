// based on Generative Artistry's tiled lines https://generativeartistry.com/tutorials/tiled-lines/

function setup() {
  createCanvas(windowWidth, 800);
  stroke(255, 255, 255);
  strokeWeight(3);
  noLoop();
}

function draw() {
  background(25);
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      if (Math.random() >= 0.5) {
        line(i * 50, j * 50, (i + 1) * 50, (j + 1) * 50);
      } else {
        line((i + 1) * 50, j * 50, i * 50, (j + 1) * 50);
      }
    }
  }
}

function mousePressed() {
  clear();
  redraw();
}

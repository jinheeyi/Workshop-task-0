let x, y; 
let xSpeed, ySpeed;
let radius1 = 40; 
let radius2 = 100;
let npoints = 5; 

function setup() {
  createCanvas(400, 400);
  x = width / 2; 
  y = height / 2; 
  xSpeed = random(3, 5); 
  ySpeed = random(3, 5);
}

function draw() {
  background(30); 
  fill('yellow');
  noStroke();

  
  drawStar(x, y, radius1, radius2, npoints);

  x += xSpeed;
  y += ySpeed;

  // Bounce off edges
  if (x - radius2 < 0 || x + radius2 > width) {
    xSpeed *= -1;
  }
  if (y - radius2 < 0 || y + radius2 > height) {
    ySpeed *= -1;
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

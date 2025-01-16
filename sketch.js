let angle = 0; 
let butterflyX, butterflyY; 
let speedX, speedY; 
let bgColor; 
function setup() {
  createCanvas(400, 400);
  noStroke();

  butterflyX = width / 2;
  butterflyY = height / 2;
  speedX = random(2, 4);
  speedY = random(-2, 2);

  bgColor = color(30, 30, 60);
}

function draw() {

  bgColor = color(
    map(butterflyX, 0, width, 50, 150), 
    map(butterflyY, 0, height, 50, 200), 
    map(butterflyX + butterflyY, 0, width + height, 100, 255) 
  );
  background(bgColor);

  fill(50);
  rectMode(CENTER);
  rect(butterflyX, butterflyY, 10, 40);

  drawWing(butterflyX - 5, butterflyY, -1); 
  drawWing(butterflyX + 5, butterflyY, 1);  

  butterflyX += speedX;
  butterflyY += speedY;

  if (butterflyX < 0 || butterflyX > width) {
    speedX *= -1;
  }
  if (butterflyY < 0 || butterflyY > height) {
    speedY *= -1;
  }

  angle += 0.1;
}

function drawWing(x, y, direction) {
  push();
  translate(x, y);
  rotate(direction * sin(angle) * PI / 6);

  fill(random(100, 255), random(100, 255), random(100, 255));
  ellipse(0, -20, 60, 100); 
  pop();
}

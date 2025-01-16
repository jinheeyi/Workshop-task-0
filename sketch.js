let angle = 0; // Angle for wing flapping

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(30, 30, 60); // Dark blue background

  
  fill(50);
  rectMode(CENTER);
  rect(width / 2, height / 2, 10, 40);

  
  drawWing(width / 2 - 5, height / 2, -1); // Left wing
  drawWing(width / 2 + 5, height / 2, 1);  // Right wing

  
  angle += 0.1;
}

function drawWing(x, y, direction) {
  push();
  translate(x, y);
  rotate(direction * sin(angle) * PI / 6); 

 
  fill(random(100, 255), random(100, 255), random(100, 255)); // Random colors
  ellipse(0, -20, 60, 100); 
  pop();
}
function setup() {
  createCanvas(400, 400);
  noStroke();
  fill('gold'); //star colour
  drawStar(width/2, height/ 2,80,200, 5);
}

function drawStar(x,y,radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; 
  let halfAngle + angle / 2.0;
  beginShape();
  for (let a = 0; a <TWO_PI; a += angle){
    let sx = x + cos(a) * radius2
    let sx = x + sin(a) * radius2
    vertex(sx,sy);
    sx = x + cos(a+halfAngle) * radius1;
    sx = x + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
var x = 25;
var zz = 200;

var speedx = 1;
var driss = 1;

function setup() {
  createCanvas(400, 400);
  // put setup code here
}

function draw() {
  background(211, 211, 20);

  if (x > 375) {
    speedx = speedx * -1;
  }
  if (x < 25) {
    speedx = speedx * -1;
  }
  if (zz > 375) {
    driss = driss * -1;
  }
  if (zz < 25) {
    driss = driss * -1;
  }

  x = x + speedx;
  zz = zz + driss;
  ellipse(x, zz, 50, 50);

}

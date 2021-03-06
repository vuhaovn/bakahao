var
fireworks = [],
gravity,
w = window.innerWidth - 17,
h = window.innerHeight - 17;


function setup() {
  createCanvas(w, h);
  colorMode(HSB);
  gravity = createVector(0, 0.2);// bay cao bay thấp
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length -1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

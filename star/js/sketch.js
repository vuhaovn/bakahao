

var stars = [];

var speed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < 800; i++) {
		stars[i] = new Star();
	}

}

function draw() {

	speed = 7;

	translate(width / 2, height / 2);

	background(0);
	for (var i = 0; i < stars.length; i++) {
		stars[i].update();
		stars[i].show();
	}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var leaf = [];
var img;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i< 1; i++) {
		leaf[i] = new Leaf();
	}
}

function draw() {
	background(0);
  
	for (var i = 0; i< leaf.length; i++) {
		leaf[i].update();
		leaf[i].show();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// var rain = [];

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	for (var i = 0; i < 500; i++) {
// 		rain[i] = new Rain();
// 	}
// }

// function draw() {

// 	colorMode(HSB, 255);
// 	background(0);
// 	for (var i = 0; i < rain.length; i++) {
// 		rain[i].fall();
// 		rain[i].show();
// 	}

// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
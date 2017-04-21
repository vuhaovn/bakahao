"use strict";
var
	x = 0,
	y = 0,
	speed = 0,
	canvas = null,
	context = null,
	item = 200,
	rain = [];

function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	createCanvas();
	for (var i = 0; i < item; i++) {
		rain[i] = new Rain();
	}
}

function draw() {
	clear();
	for (var i = 0; i < rain.length; i++) {
		rain[i].update();
		rain[i].show();
	}
}

function random(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function createCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.backgroundColor = "#000000";
}

function Rain() {
	this.x = random(0, canvas.width);
	this.y = random(-200, -10);
	this.speed = random(1, 10);
	this.width = random(3, 6);
  this.height = random( 6, 12);
  this.hue = random(0, 255);

	this.update = function() {
		this.y += this.speed;
		if (this.y > canvas.height) {
			this.x = random(0, canvas.width);
			this.y = random(-200, -10);
			this.speed = random(5, 10);
		}
	}

	this.show = function() {
		context.save();
		context.fillStyle = "#ffffff";
		// context.fillStyle = "rgb(" + this.hue + "," + this.hue + "," + this.hue + ")";
		context.fillRect(this.x, this.y, 4, 12);
		context.restore();
	}
}

function randomColor() {

}

function clear() {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
}


window.onload = function() {
	init();
	setInterval(draw, 10);
}
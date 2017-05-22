"use strict";
var
	x = 0,
	y = 0,
	width = 0,
	height = 0,
	canvas = null,
	context = null,
	pi = Math.PI,
	circle = [];

function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas();
	for (var i=0; i < 200; i++) {
		circle[i] = new Circle();
	}
}

function draw() {
	for (var i =0; i < circle.length;i++) {
		circle[i].show();
	}
}

function Circle() {
	this.x = random(0, width);
	this.y = random(0, height);
	this.radius = 10;

	this.show = function() {
		context.fillStyle = "#ffffff";
		context.arc(this.x, this.y, this.radius, 0, pi*2, false);
		context.fill();
	}
}

function random(min, max) {
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function createCanvas() {
	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = "#000000";
}

function clear() {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = function() {
	init();
	draw();
}
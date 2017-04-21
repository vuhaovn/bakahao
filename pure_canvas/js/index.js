"use strict";
var
	x = 0,
	y = 0,
	canvas = null,
	context = null;

function init() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	createCanvas();
}

function random(min, max) {
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function createCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.backgroundColor = "#000000";
}

function draw() {
}

window.onload = function() {
	init();
	draw();
}
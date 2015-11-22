// here is the code that bounces a ball

var canvas = document.getElementById('canvas0');
var ctx = canvas.getContext('2d');
var radius = 20;
var color = "#0000ff";
var g = 0.1;  // acceleration due to gravity
var x = 50;   // initial horizontal position
var y = 50;   // initial vertical position
var vx = 2;   // initial horizontal speed
var vy = 0;   // initial vertical speed

window.onload = init;

function init() {
		setInterval(onEachStep, 1000/60);  // 60 fps
}

function onEachStep() {
	vy += g ; // gravity inceases the vertical speed
	x += vx;  // horizontal speed inceases horizontal position
	y += vy;  // vertial speed increases vertical position

	if(y > canvas.width + radius) {
		// if ball goes beyond canvar
		x = -radius;  // wrap it around
	}

	drawBall();  // draw the ball 
}

function drawBall() {
	with (ctx) {
		clearRect(0,0,canvas.width, canvas.height);
		fillStyle = color;
		beginPath();
		arc(x, y, radius, 0, 2*Math.PI, true);
		closePath();
		fill();
	}

}
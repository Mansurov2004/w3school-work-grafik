var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
ctx.stroke();

var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);
ctx.stroke();

var c = document.getElementById("myCanvas4");
var ctx1 = c.getContext("2d");

// Create gradient
var grd = ctx1.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx1.fillStyle = grd;
ctx1.fillRect(10, 10, 150, 80);



var c = document.getElementById("myCanvas5");
var ctx2 = c.getContext("2d");

// Create gradient
var grd = ctx2.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx2.fillStyle = grd;
ctx2.fillRect(10, 10, 150, 80);
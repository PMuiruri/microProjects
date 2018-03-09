//creates a variable that can access the canvas using the DOM
var canvas = document.getElementById("myCanvas");

// getContext() is a built-in HTML object, with properties and methods for drawing
// this is the actual tool we  use to draw on the Canvas.
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
//  fillRect(x,y,width,height) method draws a rectangle, filled with the fill style
ctx.fillRect(0,0,150,75);
// moveTo(x,y) - defines the starting point of the line
// lineTo(x,y) - defines the ending point of the line
ctx.moveTo(0,0);
ctx.lineTo(200,100);
// This method (stroke()) is used to draw the line
ctx.stroke();

// To draw a circle on a canvas, use the following methods:
// beginPath() - begins a path
// arc(x,y,r,startangle,endangle) - creates an arc/curve.
// To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI.
// The x and y parameters define the x- and y-coordinates of the center of the circle.
// The r parameter defines the radius of the circle.
ctx.beginPath();
ctx.arc(250,350,40,0,2*Math.PI);
ctx.stroke();

// Gradients can be used to fill rectangles, circles, lines, text, etc.
// Shapes on the canvas are not limited to solid colors
    // createLinearGradient(x,y,x1,y1) - creates a linear gradient
    // createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient
// addColorStop() method specifies the color stops, and its position along the gradient.
// Gradient positions can be anywhere between 0 to 1.

// Create gradient
// var grd=ctx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"blue");
// grd.addColorStop(1,"white");
//
// // To use the gradient, set the fillStyle or strokeStyle property to the gradient,
// // then draw the shape (rectangle, text, or a line).
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(100,100,150,80);

// Create a radial/circular gradient. Fill rectangle with the gradient:
// var grd1=ctx.createRadialGradient(75,50,5,90,60,100);
// grd1.addColorStop(0,"red");
// grd1.addColorStop(1,"white");
//
// // Fill with gradient
// ctx.fillStyle = grd1;
// ctx.fillRect(10,100,150,80);

// To draw text on a canvas, the most important property and methods are:
//     font - defines the font properties for the text
//     fillText(text,x,y) - draws "filled" text on the canvas
//     strokeText(text,x,y) - draws text on the canvas (no fill)
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);

//This adds an image to the canvas
window.onload = function() {
    var img = new Image();
    img.src= 'smiley.png';
    ctx.drawImage(img, 10, 70);
};

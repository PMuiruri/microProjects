//creates a canvas object from the HTML canvas element
var canvas = document.getElementById("canvas");
// Create a 2d drawing object (var ctx) for the canvas object:
var ctx = canvas.getContext("2d");
// Calculates the clock radius, using the height of the canvas
// This makes the clock work for any size of canvas
var radius = canvas.height / 2;
// Remaps the (0,0) position (of the drawing object) to the center of the canvas
ctx.translate(radius, radius);
// Reduce the clock radius (to 90%) to draw the clock well inside the canvas
radius = radius * 0.90

// setInterval will call the drawclock function every millisecond
// this gives the time in realtime
setInterval(drawClock, 1000);

// function to draw the clock
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

// this function is used to draw the clock face
function drawFace(ctx, radius) {
    var grad;
// this draws a white cirlce
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
// creates a radial gradient using 3 colors
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
// creates 3 color stops, corresponding with the inner middle and outer edge of the arc
// this creates a 3D effect
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    // defines the line width of the drawing object
    ctx.lineWidth = radius*0.1;
    // draws the circle
    ctx.stroke();

// this draws the clock center
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

// this function draws the numbers on the clock
function drawNumbers(ctx, radius) {
    var ang;
    var num;

    // this sets the font size to 15% of the radius
    // by using % the font will always to relative to canvas size (fexible)
    ctx.font = radius*0.15 + "px arial";
    // this aligns the text to the middle and center of the print position
    ctx.textBaseline="middle";
    ctx.textAlign="center";

    //This determines the print position for each numbers
    // it is executed as a loop as long as the numbers are less than 13
    // it also sets the position to 85% of the radius rotated (PI/6 for each number)
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
  //this uses generic functions to get the date to get the hour, minute and seconds
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    //hour
    hour=hour%12;
    // Calculates the angle of the hour hand,and draws it a length (50% of radius), and a width (7% of radius):
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    // this draws a hand/line with a length and a width
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

var myGamePiece;
// var myGamePiece2;

// function startGame() {
//     myGameArea.start();
// }

var myGameArea = {
  // This begins by creating the canvas. It can also be done in html
    canvas : document.createElement("canvas"),
    start : function() {
      // This sets the height and width of the canvas
        this.canvas.width = 680;
        this.canvas.height = 370;
        // This is an in built method within canvas that includes methods and properties for drawing on the canvas
        this.context = this.canvas.getContext("2d");
        // This insets the canvas as the first child node on the body of the html
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        // This allows you to control the game component using arrow keys
        document.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        document.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "blue", 10, 120);
    // myGameArea.start();
    // myGamePiece2 = new Image();
    // myGamePiece2.src = 'mouse.png';
    // ctx = myGameArea.context;
    // ctx.drawImage(myGamePiece2, 10, 100, 90, 120);
}

// This creates an object with the properties of a rectangle.
// This can be changed to any shape or image
function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    // this updates the position of the component
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();
    myGamePiece.update();
}
//
// function moveup() {
//     myGamePiece.speedY -= 1;
// }
//
// function movedown() {
//     myGamePiece.speedY += 1;
// }
//
// function moveleft() {
//     myGamePiece.speedX -= 1;
// }
//
// function moveright() {
//     myGamePiece.speedX += 1;
// }
// function stopMove() {
//     myGamePiece.speedX = 0;
//     myGamePiece.speedY = 0;
// }

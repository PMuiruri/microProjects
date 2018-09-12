"use strict";
let level=1;
let q = [];
let count = 0;
let score= 0;
let bestScore;

document.getElementById("best").innerText= localStorage.getItem("bestScore");
document.getElementById("level").innerText=level;
// assign button elements in the array
var buttons = [
  document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
	document.getElementById('button3')
];

// click event handlers for buttons
buttons[0].onclick = function() { pressed(0) };
buttons[1].onclick = function() { pressed(1) };
buttons[2].onclick = function() { pressed(2) };
buttons[3].onclick = function() { pressed(3) };

window.addEventListener('keydown', function(e){
	let keyPressed= e.keyCode;

	if(keyPressed === 38){
		pressed(0);
	}
	if(keyPressed === 39){
		pressed(1);
	}
	if(keyPressed === 37){
		pressed(2);
	}
	if(keyPressed === 40){
		pressed(3);
	}
	console.log("KEYPRESSED "+e.keyCode);
});

// current active button
var current = 0;

// start the engine
// pick the first active button in 1500ms, after that every 1000ms
// 1500 is a parameter for setTimeout
// 1000 is a parameter for aktivoiSeuraava
var timer = setTimeout(pickNext, 1600, 1600);

// function to keep the engine going: pick a new button and set timer for the next pick
// TODO: add game logic
function pickNext(delay)  {
  // pick next button
  var next = pickNew(current);

  // update the colours of the buttons: restore the previous active to black, the next one red
  buttons[current].style.backgroundColor = "";
	// previous
  buttons[next].style.backgroundColor = "black"; // next

  // change the active button
  current = next;

  // set timer to pick the next button
  // TODO: make the pace increase steadily!

		if(count>2){
			level++;
			delay = delay-100;
			count= 0;
			console.log("delay: "+delay);
			document.getElementById("level").innerText =level;
		}

  console.log("Active:", current);
  timer = setTimeout(pickNext, delay, delay);

  function pickNew(previous) {
    // This is just to demonstrate how the engine works
    // TODO: Fix this be random and note that the same button should not be activated consecutively
		count++;
    var next;
		do{
			next = getRandomInt(0, 3);
		}while(next==previous);
		console.log("Next:"+next);
		q.push(next);

		console.log("count: "+count);
		console.log(q);

    return next;
  }
	if(q.length > 9){
		gameOver();
		console.log("gameover");
		return
	}
}


// This function is called whenever a button is pressed
// TODO: Add game logic
function pressed(i) {
	let button=buttons[i];
  console.log("Pressed:", i);
	button.classList.add('playing');

	function revertStyle(){
			button.classList.remove('playing');
	}

	button.addEventListener('transitionend', revertStyle);


	if(i!=q[0]){
		gameOver();
		return
	}
	else{
		score++;
		console.log("Count: "+count);
		document.getElementById("score").innerText=score;
		q.shift();
	}
	return count;
}

// Function to call at game over
// TODO: complete this
function gameOver() {
    clearTimeout(timer); // stop timer
		q = [];
    for (var i = 0; i < 4; i++) {
      buttons[i].style.backgroundColor = "red"; // set all buttons red
      buttons[i].onclick = null; // disable click event handlers
    }

    // show score
    // Hint: The document already has an overlay element and an element to show the score.


	 if(bestScore !== null){
    	if (score > parseInt(localStorage.getItem("bestScore"))) {
        localStorage.setItem("bestScore", score);
			console.log(parseInt(localStorage.getItem("bestScore")));
			}
		else{
    
		console.log(parseInt(localStorage.getItem("bestScore")));

		}
	}
    // Set the overlay-element visible and update the gameover-element
		document.getElementById('overlay').style.visibility="visible";
		document.getElementById('gameover').innerText="Game Over Your score: "+score;
		document.getElementById("best").innerText= localStorage.getItem("bestScore");
		return
  }

  // generate random integer within range min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

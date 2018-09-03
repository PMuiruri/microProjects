'use strict';

// the number to be estimated between 0-100, 0 and a hundred is also possible
var random = Math.floor((Math.random () * 100) + 1);
var player;

// debugging to the developer, commenting off the production version
console.log ("Guess:" + random);

var currentGuess = 0;
var bestLowerGuess = 0;
var bestUpperGuess = 100;
var numberOfGuesses = 0;

function getGuess(){
	player = document.getElementById('number'). value;
	 if(!(player <= 100 && player >= 0)) {
		 console.log("Sorry that is not a valid number please try again");
		 document.getElementById("result").innerHTML="Invalid number. Please try again";
	 }
	 else{
		 console.log(player);

		 result();
	 }
	 return
}

function result(){
		numberOfGuesses++;
		if((player -  random) === 0 ){
			console.log("Congratulations you have guessed the correct number");
			let win = document.getElementById('result')
			win.classList.add("divStyle");
			win.innerHTML="Congratulations you have guessed the correct number in "+numberOfGuesses+" guesses";
			win.style.backgroundColor =" #4CAF50 ";
			win.style.fontSize ="2.5em";
			win.style.color= "white";
			win.disabled = true;

			for(let i =0; i<=random; i++){
				let listNum = document.createElement("li");
				let ulNum = document.getElementById("list");
				console.log(i);
				listNum.appendChild(document.createTextNode(i));
  			ulNum.appendChild(listNum);
			}

		}
		else if((player - random) > 0){
			console.log("The number you have chosen is too high please try again");

			document.getElementById("result").innerHTML="The number you have chosen is too high please try again";
			if(player < bestUpperGuess ){
					bestUpperGuess = player;
					var width = 100 - bestUpperGuess;
					console.log(bestUpperGuess);
					document.getElementById('upper').classList.add("divStyle");
					document.getElementById("upper").innerHTML="Best High Guess "+ bestUpperGuess;
					document.getElementById("up").style.width = width+"%";
					document.getElementById("up").innerText = bestUpperGuess;
			}
			else{
				document.getElementById("upper").innerHTML="Best High Guess "+ bestUpperGuess;
			}
		}
		else if((player - random) < 0){
			console.log("The number you have chosen is too low please try again");
			document.getElementById("result").innerHTML="The number you have chosen is too low please try again";
			if(player > bestLowerGuess){
					bestLowerGuess = player;
					console.log(bestLowerGuess);
					document.getElementById('lower').classList.add("divStyle");
					document.getElementById("lower").innerHTML="Best Low Guess "+ bestLowerGuess;
					document.getElementById("low").style.width = bestLowerGuess+"%";
					document.getElementById("low").innerHTML= bestLowerGuess;
			}
			else{
				document.getElementById("lower").innerHTML="Best low Guess "+ bestLowerGuess;
			}

		}
}

function restartGame(){
	location.reload();
}

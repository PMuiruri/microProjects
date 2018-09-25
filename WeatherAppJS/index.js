'use strict'

let apiKey = '14c73a89eb6ba66911ae3b960533a3e9';
let city = document.querySelector('input').value;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
let input = document.querySelector('input');

window.addEventListener('keydown', function(e){
	let keyPressed= e.keyCode;
	console.log(keyPressed);

	if(keyPressed === 13){

		window.location.reload();
	}

});

			fetch(url)
			.then(function(response) {
			  if (!response.ok) {
			    throw Error(response.statusText);
			  }return response.json()})
  		.then(function(myJson) {
				renderData(myJson)
			  // Do stuff with the response
			})
			.catch(function(error) {
			  console.log('Looks like there was a problem: \n', error);
				document.getElementById('error').innerText= "City Not Found";
			});


	function renderData(data){
		console.log(data);
		let description = data["weather"][0]["description"];
		let icon = data["weather"][0]["icon"];
		let currenttemp = data.main.temp;
		let humidity = data.main.humidity;

		document.getElementById('location').innerText=city;
		document.getElementById('ico').src="http://openweathermap.org/img/w/"+icon+".png";
		document.getElementById('desc').innerText = description;
		document.getElementById('temp').innerHTML= currenttemp + "&deg;C";
		// document.getElementById('humidity').innerText = humidity;
	}

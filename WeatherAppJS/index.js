'use strict'

let apiKey = '14c73a89eb6ba66911ae3b960533a3e9';
let city;

//let input = document.querySelector('input');

window.addEventListener('keydown', function(e){
	let keyPressed= e.keyCode;
	console.log(keyPressed);

	if(keyPressed === 13){
		fetchWeather();
	}
});

async function fetchWeather() {
	try {
		city = document.querySelector('input').value;
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
		const fetchResult = fetch(url)

		const response = await fetchResult;
		const jsonData = await response.json();
		renderData(jsonData);
		}
	catch(e){
		console.log('Looks like there was a problem: \n', e);
		document.getElementById("errors").innerText= "City Not found";
	}
}

function renderData(data){
	console.log(data);
	let description = data["weather"][0]["description"];
	let icon = data["weather"][0]["icon"];
	let currenttemp = data.main.temp;
	let humidity = data.main.humidity;

	document.getElementById('location').innerText=data["name"];
	document.getElementById('ico').src="https://openweathermap.org/img/w/"+icon+".png";
	document.getElementById('desc').innerText = description;
	document.getElementById('temp').innerHTML= currenttemp + "&deg;C";
	// document.getElementById('humidity').innerText = humidity;
}

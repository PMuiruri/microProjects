'use strict';
//Declare varibales
var arr = [];
var jobNum =[];
var	mylabels = [];
var result = document.getElementById("results");


//Fetch the job lisiting data
async function fetchVacancies() {
	let url ='http://gis.vantaa.fi/rest/tyopaikat/v1';
	try {
		const fetchResult = fetch(url)
		const response = await fetchResult;
		const jsonData = await response.json();
		getObject(jsonData);
	} catch(e){
		throw Error(e);
	}
}
function getObject(mydata){
	arr = mydata;
	console.log(arr);
	var	links = [];
	var category = [];

	for (let key of arr) {
		mylabels.push(key.ammattiala);
		category.push(key.ammattiala)
		links.push(key.linkki);
		jobNum.push(key.lukumäärä);
	}
	console.log(jobNum);
	category.shift();
	links.shift();
	links.unshift(null);
	category.unshift("Please select an Area of Expertise");

	var select = document.getElementById("searchMenu");
	for (var i = 0; i < category.length; i++) {
		var option = document.createElement("option");
		option.value = links[i];
		option.text = category[i];
		select.appendChild(option);
		console.log(option.value);
	}
}

function draw(jobNum, mylabels){
	//Empty the results container
	document.getElementById('results').innerHTML ="";
	document.getElementById('mapContainer').style.visibility="hidden";

	//Remove the first element in the array which is for all available jobs
	var all =jobNum.shift();
	mylabels.shift();
	console.log(mylabels);
	console.log(jobNum);

	//draw the chart using chartjs
	var chartDiv = document.createElement('div');
	chartDiv.setAttribute("id", "chart-div");
	var myCanvas = document.createElement('canvas');
	let myChart = myCanvas.getContext('2d');
	let myBarChart = new Chart(myChart, {
		type:'bar',
		data: {
			labels: mylabels,
			datasets: [{
				label: 'All vacancies (Left Axis)',
				yAxisID: 'A',
				data: [all],
				backgroundColor: 'blue',
				borderWidth:2,
				borderColor:'black'
			}, {
				label: 'Jobs By Profession',
				yAxisID: 'B',
				data: jobNum,
				backgroundColor: 'red',
				borderWidth:2,
				borderColor:'black'
			}]
		},
		options: {
			scales: {
				yAxes: [{
					id: 'A',
					type: 'linear',
					position: 'left',
				}, {
					id: 'B',
					type: 'linear',
					position: 'right',
				}],
				xAxes: [{
					ticks: {
						autoSkip: false
					},

				}]
			}
		}
	});
	Chart.defaults.scale.gridLines.display = false;
	chartDiv.appendChild(myCanvas);
	result.appendChild(chartDiv);
	document.getElementById('chart-div').style.visibility= "visible"
}

async function fetchLocation() {
	let url = document.getElementById('searchMenu').value;

	try {
		const fetchResult = fetch(url)
		const response = await fetchResult;
		const jsonData = await response.json();
		getLocation(jsonData);
	} catch(e){
		throw Error(e);
	}
}

function getLocation(mydata){
	document.getElementById('results').innerHTML ="";
	arr = mydata;
	console.log(arr);
	var latt=[];
	var long=[];

	for (let key of arr) {
		latt.push(key.x);
		long.push(key.y);
	}
	for (let i =0; i<latt.length; i++){
		addMarkers(latt[i], long[i]);
	}
	getResults(arr);
}

function getResults(arr){

	var list = document.createElement("ul");
	for (var i = 0; i < arr.length; i++) {
		var myDiv = document.createElement("div");
		myDiv.setAttribute("id", "myDiv");
		var listItem = document.createElement('li');
		var item = document.createElement("a");
		var address = document.createElement("p");
		var org = document.createElement("p");
		var date = document.createElement('p');
		date.innerText = arr[i].haku_paattyy_pvm;
		org.innerText = arr[i].organisaatio;
		item.innerText = arr[i].tyotehtava;
		item.href = arr[i].linkki;
		address.innerText = "Address: "+arr[i].osoite;
		myDiv.appendChild(item);
		myDiv.appendChild(org);
		myDiv.appendChild(date);
		myDiv.appendChild(address);
		listItem.appendChild(myDiv);
		list.appendChild(listItem);
	}

	console.log(list);
	result.appendChild(list);
}

var mapMarker;
function removeMakers(){
	map.removeObjects(mapMarker);
}

function addMarkers(x, y){
	console.log(x, y);
	mapMarker = new H.map.Marker({lat: y, lng: x});
	map.addObject(mapMarker);
	document.getElementById('mapContainer').style.visibility = "visible";
	console.log("here");
}

var platform = new H.service.Platform({
	'app_id': 'lBJR494UlxJjWsZJ4kBx',
	'app_code': 'hxNbVETPZ51Oa9ReO6Lgwg'
});
var targetElement = document.getElementById('mapContainer');
// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
	document.getElementById('mapContainer'),
	maptypes.normal.map,
	{
		zoom: 10,
		center: {lng:25, lat:60.3}
	});

	function reset(){
		result.innerHTML="";
	}

	fetchVacancies();

'use strict';

let url ='http://gis.vantaa.fi/rest/tyopaikat/v1';
var arr = [];
var jobNum = [];
var markerAdded = false;
var result = document.getElementById("results");

async function fetchVacancies(URL) {
	try {
		const fetchResult = fetch(URL)
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
		category.push(key.ammattiala)
		links.push(key.linkki);
		jobNum.push(key.lukumäärä);
	}
	jobNum.shift();
	category.shift();
	links.shift();
	links.unshift("");
	category.unshift("Please select an Area of Expertise");

	var select = document.getElementById("searchMenu");
	for (var i = 0; i < category.length; i++) {
		var option = document.createElement("option");
		option.value = links[i];
		option.text = category[i];
		select.appendChild(option);
	}
}

function draw(jobNum){
	console.log(jobNum);
		document.getElementById('results').innerHTML ="";
		document.getElementById('mapContainer').style.visibility="hidden";

	var myCanvas = document.createElement('canvas');
	myCanvas.width = 300;
	myCanvas.height = 300;

	var ctx = myCanvas.getContext("2d");

	function drawLine(ctx, startX, startY, endX, endY,color){
		ctx.save();
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(startX,startY);
		ctx.lineTo(endX,endY);
		ctx.stroke();
		ctx.restore();
	}

	function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
		ctx.save();
		ctx.fillStyle=color;
		ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
		ctx.restore();
	}

	var Barchart = function(options){
		this.options = options;
		this.canvas = options.canvas;
		this.ctx = this.canvas.getContext("2d");
		this.colors = options.colors;

		this.draw = function(){
			var maxValue = 0;
			for (var categ in this.options.data){
				maxValue = Math.max(maxValue,this.options.data[categ]);
			}
			var canvasActualHeight = this.canvas.height - this.options.padding * 2;
			var canvasActualWidth = this.canvas.width - this.options.padding * 2;

			//drawing the grid lines
			var gridValue = 0;
			while (gridValue <= maxValue){
				var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
				drawLine(
					this.ctx,
					0,
					gridY,
					this.canvas.width,
					gridY,
					this.options.gridColor
				);

				//writing grid markers
				this.ctx.save();
				this.ctx.fillStyle = this.options.gridColor;
				this.ctx.textBaseline="bottom";
				this.ctx.font = "bold 10px Arial";
				this.ctx.fillText(gridValue, 10,gridY - 2);
				this.ctx.restore();

				gridValue+=this.options.gridScale;
			}

			//drawing the bars
			var barIndex = 0;
			var numberOfBars = Object.keys(this.options.data).length;
			var barSize = (canvasActualWidth)/numberOfBars;

			for (categ in this.options.data){
				var val = this.options.data[categ];
				var barHeight = Math.round( canvasActualHeight * val/maxValue) ;
				drawBar(
					this.ctx,
					this.options.padding + barIndex * barSize,
					this.canvas.height - barHeight - this.options.padding,
					barSize,
					barHeight,
					this.colors[barIndex%this.colors.length]
				);

				barIndex++;
			}

			//drawing series name
			this.ctx.save();
			this.ctx.textBaseline="bottom";
			this.ctx.textAlign="center";
			this.ctx.fillStyle = "#000000";
			this.ctx.font = "bold 14px Arial";
			this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
			this.ctx.restore();

		}
	}

	var myBarchart = new Barchart(
		{
			canvas:myCanvas,
			seriesName:"Vantaa Job Vacancies",
			padding:20,
			gridScale:5,
			gridColor:"#eeeeee",
			data: jobNum,
			colors:["blue"]
		}
	);
	 myBarchart.draw();
		results.appendChild(myCanvas);
}

function joblocation(){
	let urloption = document.querySelector('select').value;
	console.log(urloption);
	fetchLocation(urloption);
}

async function fetchLocation(URL) {
	try {
		const fetchResult = fetch(URL)
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

	var myDiv = document.createElement("div");
	myDiv.setAttribute("id", "myDiv");
	var list = document.createElement("ul");
	for (var i = 0; i < arr.length; i++) {

		var link = document.createElement('a');
		var item = document.createElement("p");
		var address = document.createElement("p");
		var org = document.createElement("p");
		var date = document.createElement('p');
		date.innerText = arr[i].haku_paattyy_pvm;
		org.innerText = arr[i].organisaatio;
		item.innerText = arr[i].tyotehtava;
		link.href = arr[i].linkki;
		link.innerText = "More Information";
		link.setAttribute("id", "link");
		address.innerText = arr[i].osoite;
		myDiv.appendChild(org);
		myDiv.appendChild(date);
		myDiv.appendChild(item);
		myDiv.appendChild(address);
		myDiv.appendChild(link);
	}
	var bigDiv = document.createElement("div");
	bigDiv.appendChild(myDiv);
	result.appendChild(bigDiv);



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
}

fetchVacancies(url);


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

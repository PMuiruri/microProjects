'use strict';

let vantaaUrl ='http://gis.vantaa.fi/rest/tyopaikat/v1';

fetchData(vantaaUrl);

function fetchData(url){
	fetch(url)
	.then (function(res){
			if(!res.ok){
				throw Error(res.statusText);
			}
			return res.json()
	})
	.then(function(myJson) {
		draw(myJson)
	})
	.catch(function(err){
		console.log('Looks like there was a problem: '+err);
	});
}

	function draw(mydata){
		let arr = mydata;
		
		console.log(arr);
		var	mylables = [];
		var jobNum = [];

		for (let key of arr) {
  			//console.log(key.ammattiala);
				mylables.push(key.ammattiala);
				jobNum.push(key.lukumäärä);
			}
			console.log(mylables);
			console.log(jobNum);

		let myChart = document.getElementById('myCanvas').getContext('2d');
		let myBarChart = new Chart(myChart, {
		type:'bar',
			data: {
						labels: mylables,
		 				datasets:[{
						label:'Number of Vacanies',
		 				data: jobNum,
						backgroundColor: 'green',
	 					// backgroundColor:['red','orange','blue','green','purple'],
						borderWidth:2,
						borderColor:'black'
				}]
			},
			options:{}
		})

		function searchLocation(){
			var loc =
		}

	}

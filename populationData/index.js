// Our labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2008,2012,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,973,1022,1052,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,4054,4250,5267];
var europe = [168,170,178,190,203,276,408,547,675,732,738,740,734];
var sAmerica = [40,20,10,16,24,38,74,167,508,577,590,603,784];
var nAmerica = [6,3,2,2,7,26,82,172,312,337,345,351,433];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa,
				label: "Africa",
				borderColor: "#3e95cd",
				fill: false
      },
			{
        data: asia,
				label: "Asia",
				borderColor: "#8e5ea2",
				fill: false
      },
			{
        data: europe,
				label: "Europe",
				borderColor: "#3cba9f",
				fill: false
      },
			{
        data: sAmerica,
				label: "South America",
				borderColor: "#e8c3b9",
				fill: false
      },
			{
        data: nAmerica,
				label: "North America",
				borderColor: "#c45850",
				fill: false
      }
    ]
  },
	options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels:["Africa", "Asia", "Europe", "Latin America", "North America"],
			datasets: [
				{
					label: "Population (millions)",
					backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
					data: [2478,5267,734,784,433]
				}
			]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2308,5561,517,912,398]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2150'
      }
    }
});
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels:[1900,1950,1999,2008,2012,2050,2150],
			datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#f95aa9","#f9d813","#6b7b24"],
        data: [1650,2521,6008,6707,6896,7052,9725,9746 ]
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Total World population (millions) From 1900 to 2150'
      }
    }
});

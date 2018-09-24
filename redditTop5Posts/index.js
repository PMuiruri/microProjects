// fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
// .then(res => res.json())
// .then(json => console.log(JSON.stringify(json)));

async function fetchTopFive(sub){
	const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
	try{
			const fetchResult = fetch( new Request(URL, {method: 'GET', cache: 'reload'}));

			const response = await fetchResult;
			const jsonData = await response.json();
			console.log(jsonData);
		 } catch(e){
		throw Error(e);
	}
}


function data(jData){
	console.log(JSON.stringify(jsonData));


	var keys = Object.keys(jData);

	console.log("Here are the keys: "+keys);
	let list = document.getElementById("datalist");
	keys.forEach(function(key){
		console.log("key:"+ key+ " value: "+ jData[key]);
		list.innerHTML = "<li>" + "<strong>"+ key +"</strong>: "+jData[key] +"</li>"+"<br>";
	});
}

}

fetchTopFive('javascript');

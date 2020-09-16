// TODO: load the dataset 
let attractions;
let start;
fetch('/attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
		console.log(attractions);
		filterData(start);
	});


function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	

	if (category===start){
		attractions.sort(function(a,b){
			return b.Visitors-a.Visitors;
		});
		first_five=attractions.slice(0,5);
		console.log(first_five);
		renderBarChart(first_five);
	}
	
	category=event.target.value;
	if (category==='all'){
		attractions.sort(function(a,b){
			return b.Visitors-a.Visitors;
		});
		first_five=attractions.slice(0,5);
		console.log(first_five);
		renderBarChart(first_five);
	}
	else{
		let type = attractions.filter(function(a){
			return a.Category==category; 
		});
		type.sort(function(a,b){
			return b.Visitors-a.Visitors;
		});
		first_five=type.slice(0,5);
		console.log(first_five);
		renderBarChart(first_five);
	}	


}
// TODO: Define an event listener for the dropdown menu

let a=document.querySelector('#attraction-category').addEventListener('change', filterData);
//console.log(a);
//console.log(event.target.value);

//console.log(event.target.value);



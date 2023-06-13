//the following block of code stores city population data as an array
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
    }
];

//The following function creates a table from the popualtion data
function createTable(cityPop) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    /* this block of code creates headers for the table.
    It creates them, sets their content, and appends the data*/
    for (var header in cityPop[0]) {
        var th = document.createElement('th');
        th.textContent = header;
        tr.appendChild(th);
    }
    
    table.appendChild(tr); //append the headers to the table

    // This block of code creates rows for the table
    for (var i=0; i<cityPop.length; i++) {
        var tr = document.createElement('tr'); //create a new tr element for each row

        for (var property in cityPop[i]) { 
            var td = document.createElement('td'); //create a td element for each cell
            td.textContent = cityPop[i][property]; //set the cell content from the cityPop data
            tr.appendChild(td); //append the tr and td elements together
        }

        table.appendChild(tr); //append the row to the table
    }

    return table; //the created table is returned
}

//This funcyion creates a "City Size" column in the table
function addColumns(cityPop){
    
    //this line of colde selects all tr elements and iterates through them
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            //header is created for the City Size column
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;
            /*The if, else statement determines the city's size based on population.
            This is what is reflected on the table*/
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
            //add the city size values into the cells
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

//This function will add event listeners to the table
function addEvents(){
    //This line of code creates a mouseover function, which allows the code to detect hovering.
	document.querySelector("table").addEventListener("mouseover", function(){
		
        //this variable will hold color values
        var color = "rgb(";
        //random values are genertaed to represent RGB values
        for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
            }
        }
        //This line of code is what then sets the tables color to the random color that is produced
        document.querySelector("table").style.color = color;
    });
    //Defines a function to be executed when the table is clicked
	function clickme(){
        //the message that is displayed when the table gets clicked
        alert('Hey, you clicked me!');
    }
    //creates a click event listener to detect when the table gets clicked
	document.querySelector("table").addEventListener("click", clickme);
};
//this block of code ensures execution occurs after the window finishes loading
window.addEventListener('load', function() {
    var table = createTable(cityPop);
    document.body.appendChild(table);
    
    addColumns(cityPop);
    addEvents();
});

/* The next blocks of code will ensure MegaCities.GeoJSON's contents are fetched and displayed correctly.
 This line of code defines the debugCallback function*/
function debugCallback(response) {
	return response.json(); // This line of code converts the response to JSON and return it as a promise
  }
  
  function debugAjax() {
	fetch("data/MegaCities.geojson") // The GeoJSON file will loaded in using fetch()
	  .then(function(response) {
		return debugCallback(response); // This line of code return the promise from the debugCallback function
	  })
	  .then(function(data) {
		var myData = data; // Assign the response data to the myData variable
		document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data:<br>' + JSON.stringify(myData));
	  })
	  .catch(function(error) {
		console.log(error); // This line of script prints to the user that there is an error, such as a missing file
	  });
  }
  
  debugAjax(); // Call the debugAjax function to start the fetch request
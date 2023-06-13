// this line of code defines the debugCallback function
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
  
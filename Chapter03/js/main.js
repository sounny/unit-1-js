// Add all scripts to the JS folder
function jsAjax(){
    // Step 1: Create the data request 
    var request = new Request('data/MegaCities.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
    //Step 3: use Fetch to retrieve the data
    .then(conversion) //Step 4 convert data to usable form
    .then(callback) //Step 5 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
    //convert data to usable form
    return response.json();
  }
  
  //define callback function
  function callback(response){
      //tasks using the data go here
      console.log(JSON.stringify(response));
  }

window.onload = jsAjax();

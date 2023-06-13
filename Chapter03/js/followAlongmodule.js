const myRequest = new Request("data/MegaCities.geojson");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    // Data can be accessed here
    console.log("Data can be accessed:", data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

/*Data cannot be accessed here. 
It is outside of the fetch chain*/
console.log("Data cannot be accessed here");

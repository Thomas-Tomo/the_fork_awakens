console.log('Script start');
console.log ('hello');
// URL of the SWAPI endpoint for people
const apiUrl = 'https://swapi.dev/api/people/1/';

console.log('Starting the fetch request');

// Making the GET request

fetch(apiUrl)
  .then(response => {
    console.log('Received response from fetch');

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      console.log('Response not ok, throwing error');
      throw new Error('Network response was not ok: ' + response.statusText);
    }

    console.log('Response ok, parsing JSON');
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('Parsed JSON data');
    // Handle the data from the API
    console.log('Data:', data);
  })
  .catch(error => {
    console.log('In catch block, handling error');
    // Handle any errors that occurred during the fetch
    console.error('There has been a problem with your fetch operation:', error);
  });

console.log('Fetch request sent');
// Following https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

// Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection. We are trying to get data, so use GET request
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// Access JSON data and function to use it
request.onload = function() {

  // Declare a data variable that is the parsed JSON file
  let data = JSON.parse(this.response);

  // Check for errors when getting data from API by checking HTML status returned
  if (request.status >= 200 && request.status < 400) {
    // What to do with the data variable that contains the parsed JSON
    data.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

// Send the request
request.send();
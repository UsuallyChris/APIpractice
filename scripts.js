// Following https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/

// Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection. We are trying to get data, so use GET request
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// Access JSON data and function to use it
request.onload = function() {

  // Declare a data variable that is the parsed JSON file
  let data = JSON.parse(this.response);

  // What to do with the data variable that contains the parsed JSON
  data.forEach(movie => {
    console.log(movie.title);
  });

}

// Send the request
request.send();
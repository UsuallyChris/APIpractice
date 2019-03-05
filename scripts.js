// Create a request variable and assign a new XMLHttpRequest object to it
let request = new XMLHttpRequest();

// Open a new connection. We are trying to get data, so use GET request
request.open('GET', 'https://ghibli.herokuapp.com/films', true);

// Access JSON data and function to use it
request.onload() = function() {

}

// Send the request
request.send();
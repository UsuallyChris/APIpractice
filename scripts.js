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
      // create a div with a class of card
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      // create a p element and set it to the film's description
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      // append the card to container element
      container.appendChild(card);

      // append the title and description to the card
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    console.log('error');
  }
}

// Send the request
request.send();




// Displaying the Data to the page

// Reference to the div with id 'root'
const app = document.getElementById('root');

// Create logo and set the src attribute
const logo = document.createElement('img');
logo.src = 'logo.png';

// Create a container div and set it's class to container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Append logo and container to root
app.appendChild(logo);
app.appendChild(container);
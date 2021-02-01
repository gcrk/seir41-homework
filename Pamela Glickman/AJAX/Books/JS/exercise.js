// TODOs

// Pull, add, commit and push to github
// Update JavaScript notes
// Review computer science thing

// Selectors
const body = document.querySelector("body");
const text_input = document.getElementById("title");
const submit = document.getElementById("submit");

// Create section for book info
const section = document.createElement('section');
document.body.appendChild(section);

const getBook = function() {
  // Get User Input
  const input = text_input.value
  // Create and send HTTP request
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ input }`)
  xhr.send();

  // When the response is ready
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    // Convert the response text into a JavaScript object
    const data = JSON.parse(xhr.responseText);

    // Remove previous book info
    section.innerHTML = "";

    // Display the title and authors
    const h = document.createElement('h2');
    h.textContent = `${ data.items[0].volumeInfo.title } by ${ data.items[0].volumeInfo.authors.join(" and ") }`
    section.appendChild(h);

    // Display the cover
    const image = document.createElement('img');
    image.setAttribute('src', `${ data.items[0].volumeInfo.imageLinks.thumbnail }`)
    section.appendChild(image);

    // Display the description
    const p = document.createElement('p');
    p.textContent = `${ data.items[0].volumeInfo.description }`
    section.appendChild(p);
  }
}

// Add Event Listener to the Submit button and input
submit.addEventListener("click", getBook);
text_input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    getBook();
  }
});

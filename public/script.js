// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page

const festsList = document.getElementById("fests");

function appendNewFest(fest) {
  const newListItem = document.createElement("input");
  newListItem.src = fest[1];
  newListItem.type = "image";
  newListItem.addEventListener('click', function() { location.href=fest[0]}, false);
  festsList.appendChild(newListItem);
}



fetch("/fests")
  .then(response => response.json()) // parse the JSON from the server
  .then(fests => {
    
  
    // remove the loading text
    festsList.firstElementChild.remove();
    // iterate through every dream and add it to our page
    fests.forEach(appendNewFest);
  });


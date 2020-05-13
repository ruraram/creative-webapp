// client-side js, loaded by index.html
// run by the browser each time the page is loaded
// define variables that reference elements on our page


//renderimage



const festsList = document.getElementById("fests");
//function renderImage(fest){
//  const lineup =document.createElement()
 // lineup.type= "image";
 // lineup.src = fest[2];
//}



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

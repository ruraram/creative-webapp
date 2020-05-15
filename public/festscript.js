// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page

const lineup = document.getElementById("fest");

function renderImage(fest) {
  const pageposter = document.createElement("img");
  pageposter.src = fest[2];
  pageposter.type = "image";
//insert map data from json fest[3]??
  lineup.appendChild(pageposter);
}


//render map data for image


fetch("/fests")
  .then(response => response.json()) // parse the JSON from the server
  .then(fests => {
    
   var page=lineup.firstElementChild.innerHTML;

fests.forEach(festival => {
  if ((festival.toString()).includes(page)) {
        lineup.firstElementChild.remove();
        renderImage(fests[2]);
        
      };
});

//apply mapping to image


  });

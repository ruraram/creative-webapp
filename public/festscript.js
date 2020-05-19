// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page

const lineup = document.getElementById("fest");
const mapdata = document.getElementById("map");

function renderImage(fest) {
  const pageposter = document.createElement("img");
  pageposter.src = fest[2];
  pageposter.type = "image";

lineup.appendChild(pageposter);
mapdata.innerHTML= fest[3];
}

// function renderMap(fest) {
// //var mapdata=document.createElement('map');

// //lineup.appendChild(mapdata);
// }


fetch("/fests")
  .then(response => response.json()) // parse the JSON from the server
  .then(fests => {
    console.log(fests)
   var page=lineup.firstElementChild.innerHTML;

fests.forEach(festival => {
  if ((festival.toString()).includes(page)) {
        lineup.firstElementChild.remove();
        renderImage(fests[2]);
        //renderMap(fests[1]);
       
      };
 
});

});
// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
// our default array of dreams

const fests = [
  [
    "parklife.html",
    "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2Fparklifelogo.jpg?v=1589240296908"
  ],
  [
    "citadel.html",
    "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2FCitadel-Festival-Logo.jpg?v=1589236183902"
  ],
  [
    "lovebox.html",
    "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2FLOVEBOX2020.png?v=1589236146081",
    "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2Floveboxlineup.png?v=1589289393437",
    '<map name="image-map"><area target="" alt="Tyler" title="Tyler" href="https://www.youtube.com/watch?v=J0yJusLmQIc" coords="62,268,1020,388" shape="rect"class="lightbox"> <area target="" alt="Disclosure" title="Disclosure" href="https://www.youtube.com/watch?v=QA0EdK2RjPg" coords="62,386,595,509" shape="rect"class="lightbox"> <area target="" alt="khalid" title="khalid" href="https://www.youtube.com/watch?v=KdGQu7JRcXw" coords="601,393,1015,509" shape="rect"class="lightbox"><area target="" alt="aanderson paak" title="aanderson paak" href="https://www.youtube.com/watch?v=S_1fHkYBMWY" coords="65,575,645,815" shape="rect"class="lightbox"><area target="" alt="charli" title="charli" href="https://www.youtube.com/watch?v=pmfG1yyvIIk" coords="651,575,1015,699" shape="rect"class="lightbox"><area target="" alt="fka" title="fka" href="https://www.youtube.com/watch?v=jD78FhrR6NY" coords="651,703,1013,815" shape="rect"class="lightbox"><area target="" alt="hot chip" title="hot chip" href="https://www.youtube.com/watch?v=nkI6nWy1mRc" coords="61,823,417,943" shape="rect"class="lightbox"> <area target="" alt="jorja" title="jorja" href="https://www.youtube.com/watch?v=65ahqd1Lgz8" coords="543,823,895,935" shape="rect"class="lightbox"><area target="" alt="little simz" title="little simz" href="https://www.youtube.com/watch?v=FEPlVchDTcQ" coords="189,942,524,1060" shape="rect"class="lightbox"> <area target="" alt="mabel" title="mabel" href="https://www.youtube.com/watch?v=CF78lxRZgwg" coords="649,947,897,1060" shape="rect"class="lightbox"><area target="" alt="peggy gou" title="peggy gou" href="https://www.youtube.com/watch?v=jxcK_wENFgo" coords="429,1062,769,1179" shape="rect"class="lightbox"> </map>'
  ]
];

// make all the files in 'public' available
//https://expres sjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.use(express.static("views"));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/lovebox.html");
});

// send the default array of o the webpage
app.get("/fests", (request, response) => {
  // express helps us take JS objects and send them as JSON  
  response.json(fests);

});



//app.listen(3000)
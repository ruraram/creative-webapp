// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

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
    `<map name="lovebox-map"> <area alt="tyler the creator" title="tyler the creator " href="index.html" coords="62,268,1020,387" shape="rect"> <area target="" alt="khalid " title="khalid " href="" coords="1019,510,598,388,337,480,206,446,314,508,468,596" shape="0"> <area target="" alt="Disclosure " title="Disclosure " href="" coords="597,511,60,387,360,658" shape="0"><area target="" alt="anderson paak " title="anderson paak " href="" coords="649,816,64,574,657,587,1009,687" shape="0"><area target="" alt="Charli xcx" title="Charli xcx" href="" coords="651,573,1019,694" shape="0"><area target="" alt="Fka twigs" title="Fka twigs" href="" coords="650,695,1018,815" shape="0"></map>`
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

  

app.listen(3000)
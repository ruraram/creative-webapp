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
    "https://cdn.glitch.com/0eac1b7f-36d6-47d9-9e09-471cbcc4ebc9%2Floveboxlineup.png?v=1589289393437"
  ]
];

// make all the files in 'public' available
//https://expres sjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use(express.static("page"));
app.use(express.static("views"));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of o the webpage
app.get("/fests", (request, response) => {
  // express helps us take JS objects and send them as JSON
  
  response.json(fests);

});
  

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

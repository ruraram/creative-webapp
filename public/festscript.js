

// define variables that reference elements on our page

const lineup = document.getElementById("fest");
const mapdata = document.getElementById("map");

function renderImage(fest) {
  //renders lineup poster to page
  const pageposter = document.createElement("img");
  pageposter.src = fest[2];
  pageposter.type = "image";
  lineup.appendChild(pageposter);
  //mappend image mapping data
  mapdata.outerHTML = fest[3]
  pageposter.useMap = "#" + document.getElementsByTagName("map")[0].attributes[0].value;
}



fetch("/fests")
  .then(response => response.json()) // parse the JSON from the server
  .then(fests => {

    var page = lineup.firstElementChild.innerHTML;
// render correct image for relevant page
    fests.forEach(festival => {
      if ((festival.toString()).includes(page)) {
        lineup.firstElementChild.remove();
        renderImage(fests[2]);

      };
    });

  });


// load Youtube API code asynchronously
var tag = document.createElement('script')

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null //boolean check for iOS devices

var youtubelightbox = document.getElementById('youtubelightbox')
var player // variable to hold new YT.Player() instance

// Hide lightbox when clicked on
youtubelightbox.addEventListener('click', function () {
  this.style.display = 'none'
  player.stopVideo()
}, false)

// Exclude youtube iframe from above action
youtubelightbox.querySelector('.centeredchild').addEventListener('click', function (e) {
  e.stopPropagation()
}, false)


// define onYouTubeIframeAPIReady() function and initialize lightbox when API is ready
function onYouTubeIframeAPIReady() {
  createlightbox()
}

// Extracts the Youtube video ID from a well formed Youtube URL
function getyoutubeid(link) {
  var youtubeidreg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
  return youtubeidreg.exec(link)[1] // return Youtube video ID portion of link
}

// Creates a new YT.Player() instance
function createyoutubeplayer(videourl) {
  player = new YT.Player('playerdiv', {
    videoId: videourl,
    playerVars: { autoplay: 1 }
  })
}

// Main Youtube lightbox function
function createlightbox() {
  var targetlinks = document.querySelectorAll('.lightbox')
  for (var i = 0; i < targetlinks.length; i++) {
    var link = targetlinks[i]
    link._videoid = getyoutubeid(link) // store youtube video ID portion of link inside _videoid property
    targetlinks[i].addEventListener('click', function (e) {
      youtubelightbox.style.display = 'block'
      if (typeof player == 'undefined') { // if video player hasn't been created yet
        createyoutubeplayer(this._videoid)
      }
      else {
        if (isiOS) { // iOS devices can only use the "cue" related methods
          player.cueVideoById(this._videoid)
        }
        else {
          player.loadVideoById(this._videoid)
        }
      }
      e.preventDefault()
    }, false)
  }
}

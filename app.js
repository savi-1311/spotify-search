const express = require("express")
const Spotify = require('node-spotify-api');
const router = express.Router()

var spotify = new Spotify({
  id: "588742fa11474aa2b0ef3e706f6e03fa",
  secret: "04733209e7c445fb8ccd15e5280b8241"
});

router.post("/search", (req, res) => {
	
	const {music} = req.body;
	var list = new Array();
	var name = new Array();
	var album = new Array();
	var artist = new Array();
	var image = new Array();
   spotify
  .search({ type: 'track', query: music })
  .then(function(response) {
	  for(var i=0;i<20;i++)
	  {
	list[i] = (response.tracks.items[i].external_urls.spotify);
	name[i] = (response.tracks.items[i].name);
	album[i] = (response.tracks.items[i].album.name);
	artist[i] = (response.tracks.items[i].artists[0].name);
	image[i] = (response.tracks.items[i].album.images[0].url);
      }
    res.render('search',{list : list , name:name , album:album ,artist:artist, image:image, music:music});
  })
  .catch(function(err) {
    console.log(err);
  });


});
module.exports = router


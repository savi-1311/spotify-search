const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const Spotify = require('node-spotify-api');
const router = express.Router()

var spotify = new Spotify({
  id: "588742fa11474aa2b0ef3e706f6e03fa",
  secret: "04733209e7c445fb8ccd15e5280b8241"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use('/', require('./app.js'));

app.get('*', (req, res) => {
res.render("home");
});



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

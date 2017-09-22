/*** Require in modules here ***/
var express = require("express");
var app = express();
var events = require('./data/events.js');
var activities = require('./data/activities.js');

const bodyParser = require('body-parser'); // Uncomment for Bonus Challenge 1


/*** Use built-in Express middleware here ***/

app.use(bodyParser.urlencoded({ extended: true })); // Uncomment for Bonus Challenge 1
app.use(bodyParser.json()); // Uncomment for Bonus Challenge 1




/*** Write functions here, to be used as Express middleware ***/
function logreq (req, res, next) {
  console.log(req.method + req.url);
  next();
}

function sendData (req, res, next) {
  if (req.url == "/activities") {
    res.send(activities);
  }
  else if (req.url == "/events") {
    res.send(events);
  }
}

function searchData (req, res, next) {

  var key = req.body.search;

}

/*** Define routes here ***/
app.use(express.static(__dirname));
app.get('/events', logreq, sendData);
app.get('/activities', logreq, sendData);
app.post("/events",logreq, searchData);
app.post("/activities", logreq, searchData);

/*** Listen on a port here ***/
app.listen(3000, callfunc());

function callfunc() {
  console.log("listening on port 3000...");
}

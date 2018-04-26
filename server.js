//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express Configuration 
//create express server
var app = express();

//Set initial port; process.env.PORT for Heroku
var PORT = process.env.PORT || 8080;

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Set up Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Point server to route files 
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
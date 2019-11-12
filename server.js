// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080

 
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});

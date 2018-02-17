const express = require('express');
const bodyParser = require('body-parser');

// Create express server
var app = express();
// Set port
var PORT = 3000;

// Handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});
const fs = require('fs');
const express = require('express');
const mustache = require('mustache');
let app = express();


var mustacheExpress = require('mustache-express');

// Register '.html' extension with The Mustache Express
app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('template', __dirname + '/template'); // you can change '/views' to '/public',
// but I recommend moving your templates to a directory
// with no outside access for security reasons

app.get('/', function(req, res) {
    res.render('index.html');
});



app.listen(8082, function() {
    console.log('Server listening on port 80...');
});


//https://stackoverflow.com/questions/12752985/pass-global-variable-to-on-event-callback-function-in-javascript

//
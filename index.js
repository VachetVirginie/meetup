const fs = require('fs');
const express = require('express');
const mustache = require('mustache');



let app = express();

let events = [];

app.get("/", function(req, resp) {
    resp.render('index', {

    });
});



app.engine("html", function(path, options, callback) {
    fs.readFile(path, function(err, content) {
        if (err) {
            console.error("fail to open template:", err);
            return callback(err);
        }
        let str = mustache.render(content.toString(), options);
        return callback(null, str);
    })
});

// specify the views directory
app.set('views', './template');
// register the template engine
app.set('view engine', 'html');

app.use(express.static("public"));

app.listen(80, function() {
    console.log('Server listening on port 80...');
});
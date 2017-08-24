const fs = require('fs');
const express = require('express');
const mustache = require('mustache');




<<<<<<< HEAD
let app = express();
=======
let events = [];

app.get("/", function(req, resp) {
    resp.render('index', {
>>>>>>> ece45a997034662fe9e194ff7efce3d7eb5216d3

app.get("/template", function(req, resp) {
    let str = mustache.render("Bienvenue {{name}}!!! Bien joué mm!", {
        name: "vivi"
    })
    resp.send(str)
});
//sazlut gfhdk


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

app.listen(8082, function() {
    console.log('Server listening on port 80...');
});


//https://stackoverflow.com/questions/12752985/pass-global-variable-to-on-event-callback-function-in-javascript

//
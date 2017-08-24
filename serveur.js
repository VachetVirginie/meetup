const fs = require('fs');
const express = require('express');
const mustache = require('mustache');

let db = ["Toto", "Tata", "Titi", "John", "Tutu"];

let app = express();

app.get("/", function(req, resp) {
    resp.render('index', {
        name: 'Toto',
        adjective: 'happy',
        nameList: db
    });
});

app.get("/test", function(req, resp) {
    let str = mustache.render("Hello {{name}}!!! You are awesome!", {
        name: "Louis"
    })
    resp.send(str)
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
app.set('views', './views');
// register the template engine
app.set('view engine', 'html');

app.use(express.static("public"));

app.listen(8081, function() {
    console.log('Server listening on port 80...');
});
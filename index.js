const fs = require('fs');
const express = require('express');
const mustache = require('mustache');

let db = ["A", "Premier", "devant", "LYON", "OULOULOU"];

let app = express();

app.get("/", function(req, resp) {
    resp.render('index', {
        name: 'Toto',
        adjective: 'happy',
        nameList: db
    });
});

var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.post('/login', urlencodedparser, function(req, res) {
    console.log(req.body.username)
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
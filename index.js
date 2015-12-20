var express = require('express');
var app = express();

var MyModel = require('./MyModel');

app.get('/', function (req, res) {
    var m = new MyModel();

    m.getPoints(function (err, value) {
        if (err) {
            return res.status(500).send(err);
        }

        res.json(value);
    });
});

app.listen(3000);

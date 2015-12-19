var MyModel = require('./MyModel');

var m = new MyModel()
m.myMethod(function (err, value) {
    // err === undefined, candidate error is not passed through.
    // value === 7, from `.use`.
});

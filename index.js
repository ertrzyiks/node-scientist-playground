var MyExperiment = require('./MyExperiment');
var Promise = require('bluebird');

var experiment = new MyExperiment('getData');

experiment.use(function () {
    return Promise.resolve(true);
});

experiment.try(function () {
    return Promise.resolve(false);
});

experiment.run()
    .then(function (result) {
        // result === true, from `.use`.
    });

var Scientist = require('node-scientist');
var MyExperiment = require('./MyExperiment');
var util = require('util');
var Promise = require('bluebird');
var deepEqual = require('deep-equal');

function MyModel () {}
util.inherits(MyModel, Scientist);

MyModel.prototype.getPoints = function (cb) {
    var experiment = this.science('getPoints', { Experiment: MyExperiment });

    experiment.compare(function (control, candidate) {
        return deepEqual(control.value, candidate.value);
    });

    experiment.use(function () {
        return new Promise(function (resolve, reject) {
           setTimeout(function () {
               resolve([
                   { x: 1, y: 0}
               ]);
           }, 1 * 1000);
        });
    });

    experiment.try(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([
                    { x: 1, y: 0 }
                ]);
            }, 3 * 1000);
        });
    });

    experiment.run().asCallback(cb)
};

module.exports = MyModel;

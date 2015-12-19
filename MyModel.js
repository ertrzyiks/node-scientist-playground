var Scientist = require('node-scientist');
var MyExperiment = require('./MyExperiment');
var util = require('util');
var Promise = require('bluebird');

function MyModel () {}
util.inherits(MyModel, Scientist)

MyModel.prototype.myMethod = function (cb) {
    var experiment = this.science('myMethod', { Experiment: MyExperiment });

    experiment.use(function () {
        return Promise.resolve().delay(10).return(7);
    });

    experiment.try(function () {
        return Promise.resolve().delay(5).throw(new Error('foo'));
    });

    experiment.run().asCallback(cb)
}

module.exports = MyModel;

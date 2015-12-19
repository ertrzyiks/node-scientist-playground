var Experiment = require('node-scientist').Experiment;
var find = require('101/find');
var util = require('util');
var hasProperties = require('101/has-properties');
var Promise = require('bluebird');

function MyExperiment (name) {
    Experiment.call(this, name)
}
util.inherits(MyExperiment, Experiment);

/**
 * Publisher function. Takes a result, must return a Promise.
 * @param {Result} result Result object from Scientist.
 * @return {Promise} Promise resolved when publishing is done.
 */
MyExperiment.prototype.publish = function (result) {
    var control = find(result.observations, hasProperties({ name: 'control' }))
    var candidate = find(result.observations, hasProperties({ name: 'candidate' }))
    console.log('Results:')
    console.log('Correctness (were the candidates correct?):', !result.mismatched() ? 'yes' : 'no')
    console.log('Values (control, candidate):', control.value, candidate.value)
    console.log('Candidate Time:', candidate.duration)
    console.log('Control Time:', control.duration)
    console.log('Improvement Time (+larger is better):', control.duration - candidate.duration)

    return Promise.resolve(true);
};

module.exports = MyExperiment;

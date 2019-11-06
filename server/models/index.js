const mongoose = require('mongoose');
const Image = require('./Image');
const Metric = require('./Metric');
const Test = require('./Test');
const TestStatus = require('./TestStatus');
const TestSummary = require('./TestSummary');
const Variation = require('./Variation');

const connectDb = () => {
    return mongoose.connect('mongodb://127.0.0.1/ab-crusher');
};

const models = {
    Image,
    Metric,
    Test,
    TestStatus,
    TestSummary,
    Variation
};

module.exports = { models, connectDb };
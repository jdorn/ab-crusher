const mongoose = require('mongoose');
const TestStatus = require('./TestStatus');
const Variation = require('./Variation');
const Metric = require('./Metric');

const schema = new mongoose.Schema(
    {
        id: String,
        name: String,
        status: TestStatus.schema,
        description: String,
        hypothesis: String,
        variations: [ Variation.schema ],
        metrics: [ Metric.schema ],
        results: {
            summary: String,
            analysis: String,
            outcome: String,
            future_baseline: String
        },
        created_at: Date,
        updated_at: Date,
        started_at: Date,
        stopped_at: Date
    }
);

const model = mongoose.model('Test', schema);
module.exports = { schema, model };
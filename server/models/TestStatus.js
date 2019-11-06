const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        type: String,
        enum: ["DRAFT", "PENDING", "RUNNING", "STOPPED"]
    }
);
const model = mongoose.model('TestStatus', schema);
module.exports = { schema, model };
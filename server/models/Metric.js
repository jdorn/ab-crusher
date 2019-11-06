const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: String,
    name: String,
    type: String
});
const model = mongoose.model('Metric', schema);
module.exports = { schema, model };
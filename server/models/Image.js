const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    path: String,
    width: Number,
    height: Number
});
const model = mongoose.model('Image', schema);

module.exports = { schema, model };
const mongoose = require('mongoose');
const Image = require('./Image');

const schema = new mongoose.Schema(
    {
        variation: String,
        name: String,
        weight: Number,
        active: Boolean,
        images: [ Image.schema ]
    }
);
const model = mongoose.model('Variation', schema);
module.exports = { schema, model };
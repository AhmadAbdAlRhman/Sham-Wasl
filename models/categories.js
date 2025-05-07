const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const categories = mongoose.model('category', categorySchema);
module.exports = categories;
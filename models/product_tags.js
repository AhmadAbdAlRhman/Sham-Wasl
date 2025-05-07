const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const productTagSchema = new mongoose.Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref:'product',
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref:'category',
        required: true
    },
    tag_id: {
        type: Schema.Types.ObjectId,
        ref:'tag',
        required: true
    },
});

const product_tags = mongoose.model('products_tag', productTagSchema);
module.exports = product_tags;  
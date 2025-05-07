const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    market_id: {
        type: Schema.Types.ObjectId,
        ref: "market",
        required: true,
    },
    description:{
        type: String,
        required: false
    },
    price:{
        type:Number,
        required: true
    },
    unit:{
        type: String,
        required: true
    },
    rating_count: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0.0,
    },
    image:{
        type:String,
        required:true,
    },
    views_num: {
        type: Number,
        required: true,
    },
});
const product = mongoose.model("product", productSchema);
module.exports = product;
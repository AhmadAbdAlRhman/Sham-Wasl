const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productFeedbackSchema = new mongoose.Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    comment:{
        type: String,
        required: false
    },
    rating:{
        type:Number,
        required: false
    }
});

const productFeedback = mongoose.model('productFeedback', productFeedbackSchema);
module.exports = productFeedback;
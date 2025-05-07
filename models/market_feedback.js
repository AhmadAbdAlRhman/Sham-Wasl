const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketFeedbackSchema = new mongoose.Schema({
    market_id:{
        type: Schema.Types.ObjectId,
        ref: 'market',
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

const marketFeedback = mongoose.model('marketFeedback', marketFeedbackSchema);
module.exports = marketFeedback;
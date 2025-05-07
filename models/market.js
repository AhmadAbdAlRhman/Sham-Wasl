const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    bio: {
        type: String,
    },
    logo: {
        type: String
    },
    seller_phone_number: {
        type: Number,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: true,
    },
    rating_count: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0.0,
    }

});

const market = mongoose.model("market", marketSchema);
module.exports = market;
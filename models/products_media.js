const mongoose = require ("mongoose");
const Schema = mongoose.Schema; 

const product_media_Schema = new mongoose.Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref:'product',
        required: true
    },
    product_media:{
        type: String, 
        required: true,
    },
    media_type:{ 
        type: String,
        required: true,
        enum:['video','photo'],
    }
});

const product_media = mongoose.model('product_media', product_media_Schema);
module.exports = product_media;
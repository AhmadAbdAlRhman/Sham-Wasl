const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const sponsorshipSchema = new mongoose.Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    category_id:{
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    level:{
        type : String, 
        required: true
    }
});

const Sponsorship = mongoose.model('Sponsorship', sponsorshipSchema);
module.exports = Sponsorship;   
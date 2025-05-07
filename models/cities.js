const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const citiesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }
});
const Cities = mongoose.model("Cities",citiesSchema);
module.exports=Cities;
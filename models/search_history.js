const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let searchHistorySchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
});

const searchHistory = mongoose.model("search_history", searchHistorySchema);
module.exports = searchHistory;  
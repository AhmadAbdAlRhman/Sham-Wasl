const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type:String,
        required:true
    },
    second_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['user','admin'],
        required:true
    },
    city_id:{
        type: Schema.Types.ObjectId,
        ref:'cities',
        required:true
    },
    email:{
        type:String,
        required:false,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    profile_picture:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        required:false
    },
    token_expirtion:{
        type:Date,
        required:false
    },
    token:{
        type:String,
        required:false,
        unique:true
    }
});

const User = mongoose.model("users",UserSchema);
module.exports=User;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,'Username is required'],
        unique:[true,'Username needs to unique']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    dateOfBirth:{
        type:Date,
        default:Date.now,
    },
    city:String
    
    

})

module.exports = mongoose.model('Users',userSchema);
const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    manufactureYear:String,
    purchaseYear:String,
    expectedPrice: {
        type:Number,
        required:true
    },
    condition:String,
    registrationLocation:String,
    registrationNumber :{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('Cars',carSchema);
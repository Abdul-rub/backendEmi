const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{type:String,required: true},
    name: {type:String, required: true},
    password: {type:String,required: true},
    emi:{type:Number, default:0}
})

const UserModel = mongoose.model("user",userSchema)

module.exports= UserModel;
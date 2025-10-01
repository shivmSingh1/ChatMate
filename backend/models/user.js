const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:""
    }
})

export default user = mongoose.model("User",userSchema)
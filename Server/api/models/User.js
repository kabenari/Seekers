const mongoose = require("mongoose")
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:'string',
        trim:true,
        required: true,
        minlength: 3
    },
    email:{
        type:String,
        trim:true
    },
    jobTitle:String,
    company:String,
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
        
    }
})

const User = mongoose.model("USer",UserSchema);

module.exports = User;
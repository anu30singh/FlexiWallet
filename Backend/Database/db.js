require ('dotenv').config();
const mongoose = require("mongoose");
const { type } = require('os');

mongoose.connect (process.env.Mongo_URI);

const UserSchema = mongoose.Schema({
    userName:{
        type:String,
        reqired:true,
        unique:true,
        lowercase:true

    },
    password:{
        type : String,
        minLength: 8,
        maxLength:100,
        require:true
    } ,
    firstName:{
        type:String,
        require:true

    } ,
    lastName: {
        type : String
    } 
})
const User = mongoose.model("Users" , UserSchema);

model.exports = {
    Users
}

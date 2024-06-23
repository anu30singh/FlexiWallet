require('dotenv').config();
const mongoose = require("mongoose");
const { type } = require('os');



mongoose.connect('mongodb+srv://Flexi-Wallet:Hellow@cluster0.lxkucbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

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
const Users = mongoose.model("Users" , UserSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema); 

const User = mongoose.model('Users', UserSchema);

module.exports = {
	Users,
    Account
};

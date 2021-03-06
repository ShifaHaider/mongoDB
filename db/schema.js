var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    email: {type: String , required: true},
    isActive: {type: Boolean , default: true},
    createdAT: {type: Number , default: Date.now()},
    Phone: {type:String},
}, {minimize: false});

exports.UserModel = mongoose.model('users' , UserSchema);

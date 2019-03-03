var mongoose = require("mongoose");


var TodoSchema = new mongoose.Schema({
    todoText: {type: String , required: true},
    isActive: {type: Boolean , default: true},
    createdAT: {type: Number , default: Date.now()},
    Phone: {type:String},
}, {minimize: false});

exports.TodoModel = mongoose.model('todos' , TodoSchema);

var express = require("express");
var connection = require('../db/connection');
var schema = require('../db/schema_2');
var TodoModel = schema.TodoModel;
var test = express.Router();

var data = {
    todoText: 'Hello world',
    phone: '03324234234'
};
test.post('/test-post', function (req, res) {
    console.log(req.body);
    // var todo = new TodoModel(req.body);
    // var todo = new TodoModel(data);
    // todo.save(function (error , data) {
    //     console.log(error, data);
    // });
    // TodoModel.find().exec(function (error , data) {
    //     // res.send(data);
    res.send('data');
    // });
    // console.log(error , data);
});


test.get('/test', function (req, res) {
    res.send('Hello world');
});

// test.get('/test-post', function(req, res) {
//     res.send('test-post');
// });

test.get('/test2', function (req, res) {
    res.send('Hello 2');
});


module.exports = test;
//https://cloud.mongodb.com/v2/5c7519aff2a30bd19fbfca73#clusters
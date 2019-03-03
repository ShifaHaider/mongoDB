var connection = require('./db/connection');
var schema = require('./db/schema');

var UserModel = schema.UserModel;

var data = {
    email: 'shifa@gmail.com',
    isActive: false,
    phone: 420
};
var user = new UserModel(data);
user.save(function (error , data) {
    console.log(error, data);
});

UserModel.find().exec(function (error , data) {
    console.log(error , data);
});



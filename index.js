var express = require("express");
var cors = require('cors');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json({limit : '5000kb'}));

// app.use(express.bodyParser());
// app.use(bodyParser.urlencoded({extended: false}));

// app.post('/test-post', function(req, res) {
//     console.log(req.body);
//     res.send('Hello');
// });

var test = require('./routes/test');
app.use("/test", test);
var account = require('./routes/account');
app.use("/account", account);


app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
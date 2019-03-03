var express = require("express");

var account = express.Router();
account.get('/account', function (req, res) {
    res.send('Hello');
});

account.post('/account', function (req, res) {
    console.log(req.body);
    res.send('Account')
});

module.exports = account;







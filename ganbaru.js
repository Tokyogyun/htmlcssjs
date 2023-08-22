var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(80);

app.get('/signin', function (req, res) {
res.sendfile("signinPage.html");
});

console.log("server is running...")